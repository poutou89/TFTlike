document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('page-match')) return;

  const ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
  const full = (p) => ASSET_BASE + String(p || '').replace(/^\/+/, '');

  const board    = document.getElementById('board');
  const logEl    = document.getElementById('battle-log');
  const hudA     = document.getElementById('hud-allies');
  const hudE     = document.getElementById('hud-enemies');
  const gaugeHp  = document.getElementById('gauge-hp');
  const gaugeHpTxt  = document.getElementById('gauge-hp-text');
  const gaugeMana= document.getElementById('gauge-mana');
  const gaugeManaTxt= document.getElementById('gauge-mana-text');
  const btnStart = document.getElementById('btn-start');
  const btnPause = document.getElementById('btn-pause');
  const btnReset = document.getElementById('btn-reset');
  const btnMusic = document.getElementById('btn-music');

  if (!board || !logEl || !hudA || !hudE || !btnStart || !btnPause || !btnReset) {
    console.warn('Match UI missing', { board, logEl, hudA, hudE, btnStart, btnPause, btnReset });
    return;
  }

  const REPLAY = JSON.parse(document.getElementById('replay-json')?.textContent || '{}');
  if (!REPLAY || !Array.isArray(REPLAY.initial)) { console.warn('No replay provided'); return; }
  console.debug('REPLAY:', REPLAY,
                'allyCount=', REPLAY.initial.filter(u=>u.team==='ally').length,
                'enemyCount=', REPLAY.initial.filter(u=>u.team==='enemy').length);

  const unitsById = new Map(); // id -> runtime unit
  let timer = null, step = 0;
  const TICK_MS = 400;

  // --- Background music (BGM) ---
  let bgm = null, bgmEnabled = true, bgmFading = false;
  const bgmUrl = window.BGM_URL;
  if (bgmUrl) {
    bgm = new Audio(bgmUrl);
    bgm.loop = true;
    bgm.preload = 'auto';
    bgm.volume = 0.0; // start silent, fade in on Start
  }
  if (btnMusic) {
    if (!bgm) { btnMusic.disabled = true; btnMusic.title = 'Aucune musique disponible'; }
    btnMusic.setAttribute('aria-pressed', bgmEnabled ? 'true' : 'false');
    btnMusic.addEventListener('click', () => {
      bgmEnabled = !bgmEnabled;
      btnMusic.setAttribute('aria-pressed', bgmEnabled ? 'true' : 'false');
      if (!bgm) return;
      if (bgmEnabled) { bgm.play().catch(()=>{}); } else { bgm.pause(); }
    });
  }
  function bgmPlay(){ if (!bgm || !bgmEnabled) return; bgmFading=false; bgm.play().catch((e)=>{ console.debug('bgm play failed', e); }); }
  function bgmPause(){ if (!bgm) return; bgm.pause(); }
  function bgmFadeOut(ms=900){
    if (!bgm) return; bgmFading = true; const start = bgm.volume; const t0 = performance.now();
    const stepFn = (now) => {
      if (!bgmFading) return;
      const k = Math.min(1, (now - t0) / ms);
      bgm.volume = start * (1 - k);
      if (k < 1) requestAnimationFrame(stepFn); else { bgm.pause(); bgm.volume = start; bgmFading = false; }
    };
    requestAnimationFrame(stepFn);
  }
  function bgmFadeIn(ms=500, target=0.5){
    if (!bgm) return; bgmFading=false; const start = bgm.volume; const t0 = performance.now();
    const stepFn = (now) => {
      const k = Math.min(1, (now - t0) / ms);
      bgm.volume = start + (target - start) * k;
      if (k < 1) requestAnimationFrame(stepFn);
    };
    requestAnimationFrame(stepFn);
  }

  const cell = (x,y) => board.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);

  function log(msg){ if(!msg)return; const d=document.createElement('div'); d.textContent=msg;
    logEl.appendChild(d); logEl.scrollTop=logEl.scrollHeight; }

  function renderHUD(){
    const list = (team) => [...unitsById.values()].filter(u=>u.team===team)
      .map(u=>`<li><img src="${full(u.img)}"><span>${u.name}</span><em>${u.hp} PV${u.shield>0?' • 🛡'+u.shield:''}${u.mana>0?' • 🔷'+u.mana:''}</em></li>`).join('');
    hudA.innerHTML = list('ally'); hudE.innerHTML = list('enemy');
    updateTeamGauges();
  }

  function updateBars(u){
    const hp=u.el.querySelector('.hp'); if(hp){ hp.textContent = u.hp; }
    const sh=u.el.querySelector('.shield'); if(sh){ sh.textContent=u.shield; sh.style.display=u.shield>0?'':'none'; }
    const ma=u.el.querySelector('.mana');   if(ma){ ma.textContent=u.mana;   ma.style.display=u.mana>0?'':'none'; }
  }

  function updateTeamGauges(){
    if(!gaugeHp || !gaugeMana) return;
    const allies = [...unitsById.values()].filter(u=>u.team==='ally');
    // Totals: HP considers shield as extra buffer; Mana vs max 50 per design
    let curHp=0, maxHp=0, curMana=0, maxMana=0;
    for(const u of allies){
      const hp = Math.max(0, u.hp||0); const sh = Math.max(0, u.shield||0);
      const mh = Math.max(hp, u.maxHp||hp); // fallback
      curHp += hp + sh; maxHp += (u.maxHp||mh) + sh; // include shield in current and cap with same shield for visual
      const m = Math.max(0, u.mana||0);
      curMana += m; maxMana += 50; // global threshold is 50 per unit
    }
    const hpPct = maxHp>0 ? Math.min(100, Math.round(100*curHp/maxHp)) : 0;
    const maPct = maxMana>0 ? Math.min(100, Math.round(100*curMana/maxMana)) : 0;
    const hpFill = gaugeHp.querySelector('.gauge__fill');
    const maFill = gaugeMana.querySelector('.gauge__fill');
    if(hpFill) hpFill.style.width = hpPct + '%';
    if(maFill) maFill.style.width = maPct + '%';
    if(gaugeHpTxt) gaugeHpTxt.textContent = `${curHp}/${maxHp}`;
    if(gaugeManaTxt) gaugeManaTxt.textContent = `${curMana}/${maxMana}`;
  }

  // --- SFX helper with light throttling ---
  const lastSfxAt = new Map();
  function playSfx(url, vol=0.7, key=url, minGapMs=120){
    try{
      if(!url) return; const now=performance.now(); const last=lastSfxAt.get(key)||0; if(now-last<minGapMs) return;
      lastSfxAt.set(key, now);
      const a = new Audio(url); a.volume=vol; a.play().catch(()=>{});
    }catch{ /* ignore */ }
  }

  function spawnInitial(){
    board.querySelectorAll('.cell').forEach(c=>c.innerHTML=''); logEl.innerHTML=''; unitsById.clear();
    for(const u0 of REPLAY.initial){
      const u = {...u0};
      const el = document.createElement('div');
      el.className = `unit unit--${u.team} unit--${u.class}`;
  // Image-only unit on the board; numeric badges are hidden in CSS for a clean look
  el.innerHTML = `<img src="${full(u.img)}" alt="">`;
      const c = cell(u.x, u.y); if (c) c.appendChild(el);
      u.el = el; unitsById.set(u.id, u);
    }
  renderHUD();
  updateTeamGauges();
  }

  function applyAction(a){
    switch(a.t){
      case 'fx': {
        try{
          const at = Array.isArray(a.at) ? a.at : null; if(!at) break;
          const c = cell(at[0], at[1]); if(!c) break;
          const kind = a.kind || 'default';
          const url = (window.FX_URLS && window.FX_URLS[kind]) || (window.FX_URLS && window.FX_URLS.default);
          if(!url) break;
          const fx = document.createElement('div'); fx.className = 'fx fx--'+kind;
          const img = document.createElement('img'); img.alt = kind; img.src = full(url);
          fx.appendChild(img); c.appendChild(fx);
          const dur = Math.max(200, Math.min(4000, parseInt(a.dur||1000,10)));
          setTimeout(()=>{ fx.remove(); }, dur);
        }catch{ /* ignore */ }
        break;
      }
      case 'move': {
        const u=unitsById.get(a.id); if(!u)break;
        const to=cell(a.to[0],a.to[1]); if(!to)break;
        to.appendChild(u.el); u.x=a.to[0]; u.y=a.to[1];
  updateTeamGauges();
        break;
      }
      case 'attack': {
        const att=unitsById.get(a.att), def=unitsById.get(a.def); if(!att||!def)break;
        const prevHp = def.hp;
        def.hp=a.hp; def.shield=a.shield; if(a.mana!==undefined) att.mana=a.mana;
        updateBars(def); updateBars(att);
  updateTeamGauges();
        // half HP crossing
        if(prevHp>0 && def.hp>0){
          const wasAbove = prevHp > (def.maxHp||prevHp*2)/2;
          const nowBelow = def.hp <= (def.maxHp||prevHp*2)/2;
          if(wasAbove && nowBelow){ playSfx(window.SFX_HALFHP_URL, 0.7, 'half:'+def.id, 400); }
        }
        if(def.hp<=0){ def.el.classList.add('ko'); setTimeout(()=>def.el.remove(),120); playSfx(window.SFX_DEATH_URL, 0.8, 'death', 150); }
        if(a.log) log(a.log);
        break;
      }
      case 'heal': {
        const src=unitsById.get(a.src), dst=unitsById.get(a.dst); if(!src||!dst)break;
        if(a.mana!==undefined) src.mana=a.mana;
        dst.hp=Math.min(dst.maxHp,(dst.hp??0)+(a.amount??0));
        // heal SFX (crit if amount large and URL provided)
        const crit = (a.crit===true) || (a.amount && dst.maxHp && a.amount >= 0.25*dst.maxHp);
        const url = crit && window.SFX_HEAL_CRIT_URL ? window.SFX_HEAL_CRIT_URL : window.SFX_HEAL_URL;
        playSfx(url, crit?0.8:0.6, crit?'healcrit':'heal', 80);
  updateBars(src); updateBars(dst); updateTeamGauges(); if(a.log) log(a.log);
        break;
      }
      case 'log': if(a.msg) log(a.msg); break;
    }
  }

  function playTick(){
    if(step >= (REPLAY.actions?.length || 0)){
      clearInterval(timer); timer=null;
      const outcome = REPLAY.winner==='ally' ? 'victory' : REPLAY.winner==='enemy' ? 'defeat' : 'draw';
      log(outcome==='victory'?'Victoire !':outcome==='defeat'?'Défaite…':'Égalité !');
      // show overlay
      const ov = document.getElementById('result-overlay');
      const tx = document.getElementById('result-text');
      const btnC = document.getElementById('btn-result-continue');
      const btnS = document.getElementById('result-sound-toggle');
      if (ov && tx) {
        ov.classList.remove('is-hidden');
        ov.classList.toggle('is-victory', outcome==='victory');
        ov.classList.toggle('is-defeat', outcome==='defeat');
        tx.textContent = outcome==='victory' ? 'VICTOIRE' : outcome==='defeat' ? 'DÉFAITE' : 'ÉGALITÉ';
        bgmFadeOut(1200);

        // Victory SFX (if provided)
        if (outcome === 'victory') {
          const sfxUrl = window.SFX_VICTORY_URL;
          if (sfxUrl) {
            try {
              const aud = new Audio(sfxUrl);
              aud.volume = 0.7; aud.loop = false;
              aud.play().catch(()=>{});
            } catch (_) { /* ignore */ }
          }
        } else if (outcome === 'defeat') {
          playSfx(window.SFX_DEFEAT_URL, 0.7, 'defeat', 200);
        }

        // Sound FX (WebAudio simple tones)
        let audioEnabled = false, ctx = null;
        function playJingle(kind){
          try{
            if(!audioEnabled) return;
            if(!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)();
            const now = ctx.currentTime;
            const notes = kind==='victory' ? [523,659,784] : kind==='defeat' ? [392,349,261] : [440,440,440];
            notes.forEach((f,i)=>{
              const o = ctx.createOscillator();
              const g = ctx.createGain();
              o.type='sine'; o.frequency.value=f;
              o.connect(g); g.connect(ctx.destination);
              const t = now + i*0.18; g.gain.setValueAtTime(0.001,t); g.gain.exponentialRampToValueAtTime(0.2,t+0.02); g.gain.exponentialRampToValueAtTime(0.001,t+0.3);
              o.start(t); o.stop(t+0.32);
            });
          }catch(e){ console.debug('audio failed', e); }
        }
        if (btnS) {
          btnS.addEventListener('click',()=>{
            audioEnabled = !audioEnabled;
            btnS.setAttribute('aria-pressed', audioEnabled? 'true':'false');
            if(audioEnabled){ playJingle(outcome); }
          });
        }

        // Continue button or click anywhere on veil
        const hide = ()=> ov.classList.add('is-hidden');
        if(btnC) btnC.addEventListener('click', hide, { once:true });
        ov.querySelector('.result-veil')?.addEventListener('click', hide, { once:true });
      }
      return;
    }
    applyAction(REPLAY.actions[step++]); renderHUD();
  }

  btnStart.addEventListener('click', ()=>{
    if (!timer){ timer=setInterval(playTick,TICK_MS); }
    if (bgm){
      bgmEnabled = true;
      if (btnMusic) btnMusic.setAttribute('aria-pressed','true');
      bgm.currentTime = 0;
      bgm.play().then(()=> bgmFadeIn(450, 0.5)).catch((e)=>{ console.debug('bgm play blocked', e); });
    }
  });
  btnPause.addEventListener('click', ()=>{ if(timer){ clearInterval(timer); timer=null; } bgmPause(); });
  btnReset.addEventListener('click', ()=>{ if(timer){ clearInterval(timer); timer=null; } step=0; spawnInitial(); if (bgm) { bgmPause(); bgm.currentTime = 0; } });

  spawnInitial();
});
