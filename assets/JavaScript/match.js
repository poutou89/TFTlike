document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('page-match')) return;

  const ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
  // Inline SVG fallback avatar (avoids 404s on mobile)
  const FALLBACK_AVATAR = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="160" viewBox="0 0 128 160"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%25" stop-color="%231a1a24"/><stop offset="100%25" stop-color="%23222233"/></linearGradient></defs><rect fill="url(%23g)" width="128" height="160"/><circle cx="64" cy="64" r="28" fill="%23333a48"/><rect x="34" y="106" width="60" height="30" rx="6" fill="%23333a48"/><text x="50%25" y="148" dominant-baseline="middle" text-anchor="middle" fill="%239aa0aa" font-family="Arial, sans-serif" font-size="10">Aucun portrait</text></svg>';
  const full = (p) => {
    const s = String(p || '');
    if (!s) return '';
    // Absolute URLs or special schemes
    if (/^(?:https?:|data:|blob:)/i.test(s)) return s;
    // Root-relative path: already absolute on same origin
    if (s.startsWith('/')) return s;
    // Common assets under public/images → force root-absolute
    if (s.startsWith('images/')) return '/' + s;
    // Fallback: prefix with app base (handles subdir installs)
    return ASSET_BASE + s.replace(/^\/+/, '');
  };

  const board    = document.getElementById('board');
  const logEl    = document.getElementById('battle-log');
  const hudA     = document.getElementById('hud-allies');
  const hudE     = document.getElementById('hud-enemies');
  const hudATitle= document.getElementById('hud-allies-title');
  const hudETitle= document.getElementById('hud-enemies-title');
  const btnStart = document.getElementById('btn-start');
  const btnPause = document.getElementById('btn-pause');
  const btnReset = document.getElementById('btn-reset');
  const btnMusic = document.getElementById('btn-music');

  if (!board || !logEl || !hudA || !hudE || !btnStart || !btnPause || !btnReset) {
    console.warn('Match UI missing', { board, logEl, hudA, hudE, btnStart, btnPause, btnReset });
    return;
  }

  const REPLAY = JSON.parse(document.getElementById('replay-json')?.textContent || '{}');
  const ALLIES = JSON.parse(document.getElementById('allies-json')?.textContent || '[]');
  const ENEMIES= JSON.parse(document.getElementById('enemies-json')?.textContent || '[]');
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

  // Username headers: prefer replay-provided names; else derive from allies/enemies data; else random bot name
  function randBot(){
    const a=['Airi','Mika','Yuna','Nia','Hana','Suki','Luna','Momo','Rin','Saya','Kira','Nova','Zoe','Aya'];
    const b=['Fox','Star','Bloom','Dash','Wave','Heart','Spark','Song','Dream','Moon','Sky','Shine'];
    return a[Math.floor(Math.random()*a.length)] + ' ' + b[Math.floor(Math.random()*b.length)];
  }
  function pickOwnerName(side){
    if (!side) return undefined;
    if (Array.isArray(side)) {
      const first = side[0] || {};
      return first.owner_name || first.username || first.player || first.user || first.owner || undefined;
    }
    return side.owner_name || side.username || side.player || side.user || side.owner || undefined;
  }
  const allyName  = REPLAY.ally_username  || REPLAY.ally_name  || pickOwnerName(ALLIES)  || REPLAY.player_ally  || randBot();
  const enemyName = REPLAY.enemy_username || REPLAY.enemy_name || pickOwnerName(ENEMIES) || REPLAY.player_enemy || randBot();
  if (hudATitle) hudATitle.textContent = allyName;
  if (hudETitle) hudETitle.textContent = enemyName;

  function renderHUD(){
    const list = (team) => [...unitsById.values()].filter(u=>u.team===team)
      .map(u=>{
        const fams = Array.isArray(u.families)?u.families:[];
        const itms = Array.isArray(u.items)?u.items:[];
        const cat  = Array.isArray(window.ITEMS) ? window.ITEMS : [];
        const toPerc = (v) => {
          if (v == null) return null;
          let n = Number(v);
          if (!isFinite(n) || n <= 0) return null;
          // Accept either 0..1 or 0..100; normalize to 0..1 then to percent
          if (n > 1) n = n / 100;
          return Math.round(n * 100);
        };
    const resolveItem = (x)=>{
          if (typeof x === 'string') {
            const s = x.trim();
            if (/^(?:https?:|data:|blob:|\/)/i.test(s) || s.includes('/')) {
              return { img: s };
            }
            // likely an ID or bare filename; strip extension and lookup in catalog
            const id = s.replace(/\.[a-z0-9]+$/i, '');
            let found = cat.find(i=>String(i.id)===String(id));
            if (!found && /^\d+$/.test(id)) {
              found = cat.find(i=>String(i.id)===('fc' + id));
            }
            if (found) return found;
      return { img: itemPath(s) };
          }
          if (typeof x === 'number') {
            const id = String(x);
            const found = cat.find(i=>String(i.id)===id) || cat.find(i=>String(i.id)===('fc'+id));
            return found || { img: itemPath(x) };
          }
          if (x && x.id && (!x.img && !x.icon && !x.image)){
            const f = cat.find(i=>String(i.id)===String(x.id)); return f||x;
          }
          return x||{};
        };
        const itObjs = itms.map(resolveItem);
        const armor = (u.armor!=null && Number(u.armor) > 0 ? ` • 🛡️${u.armor}` : '');
        const accP   = toPerc(u.acc);
        const critP  = toPerc(u.crit);
        const dodgeP = toPerc(u.dodge);
        const acc    = accP  != null ? ` • 🎯${accP}%`   : '';
        const crit   = critP != null ? ` • ✶${critP}%`  : '';
        const dodge  = dodgeP!= null ? ` • 👟${dodgeP}%` : '';
        const stats = `${u.hp} PV${u.shield>0?` • 🛡${u.shield}`:''}${u.mana>0?` • 🔷${u.mana}`:''}${u.atk?` • ⚔️${u.atk}`:''}${armor}${acc}${crit}${dodge}`;
        const itemsHtml = itObjs.map(it=>{
          const src = it && (it.icon || it.img || it.image);
          return src ? `<img class=\"item\" src=\"${full(src)}\" title=\"${it.name||''}\" alt=\"\">` : '';
        }).join('');
        const famHtml = fams.map(f=>`<span class="tag" title="${f.name||f}">${f.short||f.name||f}</span>`).join('');
        return `<li>
          <div class="hud-ava"><img src="${full(u.img)}" alt=""></div>
          <div class="hud-name">${u.name}</div>
          <div class="hud-stats">${stats}</div>
          <div class="hud-meta">${itemsHtml}${famHtml}</div>
        </li>`;
      }).join('');
    hudA.innerHTML = list('ally'); hudE.innerHTML = list('enemy');
    // Fallback avatar if an image fails to load (mobile-safe)
    const setFallback = (img)=>{
  const fb = FALLBACK_AVATAR;
  if (img && img.src !== fb) img.src = fb;
    };
    hudA.querySelectorAll('.hud-ava img').forEach(img=>{ img.addEventListener('error', ()=> setFallback(img)); });
    hudE.querySelectorAll('.hud-ava img').forEach(img=>{ img.addEventListener('error', ()=> setFallback(img)); });
  }

  function updateBars(u){
    const hp=u.el.querySelector('.hp'); if(hp){ hp.textContent = u.hp; }
    const sh=u.el.querySelector('.shield'); if(sh){ sh.textContent=u.shield; sh.style.display=u.shield>0?'':'none'; }
    const ma=u.el.querySelector('.mana');   if(ma){ ma.textContent=u.mana;   ma.style.display=u.mana>0?'':'none'; }
    // Per-unit bars on the board
    const hpFill = u.el.querySelector('.u-bar--hp > span');
    const maFill = u.el.querySelector('.u-bar--mana > span');
    if(hpFill){
      const maxHp = Math.max(1, u.maxHp || u.hp || 1);
      const curHp = Math.max(0, Math.min(maxHp, u.hp || 0));
      hpFill.style.width = Math.round(100 * curHp / maxHp) + '%';
    }
    if(maFill){
      const maxMana = 50;
      const curMana = Math.max(0, Math.min(maxMana, u.mana || 0));
      maFill.style.width = Math.round(100 * curMana / maxMana) + '%';
    }
  }

  // (global gauges removed)

  // --- SFX helper with light throttling ---
  const lastSfxAt = new Map();
  function playSfx(url, vol=0.7, key=url, minGapMs=120){
    try{
      if(!url) return; const now=performance.now(); const last=lastSfxAt.get(key)||0; if(now-last<minGapMs) return;
      lastSfxAt.set(key, now);
      const a = new Audio(url); a.volume=vol; a.play().catch(()=>{});
    }catch{ /* ignore */ }
  }

  // --- Helpers to merge metadata (items/families/focus) from allies/enemies arrays ---
  function normalizeItems(raw){
    if (!raw) return [];
    const arr = Array.isArray(raw) ? raw : [raw];
  return arr.map(x => x);
  }
  function normalizeFamilies(raw){
    if (!raw) return [];
    const arr = Array.isArray(raw) ? raw : [raw];
    return arr.map(x => typeof x === 'string' ? { name: x, short: String(x).slice(0,3).toUpperCase() } : x);
  }
  function buildMetaIndex(list){
    const byId = new Map(); const byName = new Map();
    if (!Array.isArray(list)) return { byId, byName };
    for (const e of list){
      const id = e?.id ?? e?.unit_id ?? e?.girl_id;
      const name = e?.name ?? e?.girl_name;
      const meta = {
        items: normalizeItems(e?.items ?? e?.item ?? e?.item_id),
        families: normalizeFamilies(e?.families ?? e?.family),
        focus_y: (e?.focus_y ?? e?.focusY ?? e?.foc_y)
      };
      if (id != null) byId.set(String(id), meta);
      if (name) byName.set(String(name).toLowerCase(), meta);
    }
    return { byId, byName };
  }
  const META_ALLY  = buildMetaIndex(ALLIES);
  const META_ENEMY = buildMetaIndex(ENEMIES);
  const ITEM_CAT = Array.isArray(window.ITEMS) ? window.ITEMS : [];
  const itemPath = (s) => {
    const clean = String(s||'').trim();
    if (!clean) return '';
    const mExt = clean.match(/\.[a-z0-9]+$/i);
    const hasExt = !!mExt;
    const base = hasExt ? clean.replace(/\.[a-z0-9]+$/i, '') : clean;
    // If base is digits-only, filenames are prefixed with 'fc'
    const filenameBase = /^\d+$/.test(base) ? ('fc' + base) : base;
    const ext = hasExt ? mExt[0] : '.png';
    return 'images/items/' + filenameBase + ext;
  };

  function spawnInitial(){
    board.querySelectorAll('.cell').forEach(c=>c.innerHTML=''); logEl.innerHTML=''; unitsById.clear();
    for(const u0 of REPLAY.initial){
      const u = {...u0};
      // enrich from side data if available
      const src = u.team === 'ally' ? META_ALLY : META_ENEMY;
      const m = src.byId.get(String(u.id)) || (u.name ? src.byName.get(String(u.name).toLowerCase()) : null) || null;
      if (m){
        if (!Array.isArray(u.items)) u.items = m.items || [];
        if (!Array.isArray(u.families)) u.families = m.families || [];
        if (u.focus_y == null && m.focus_y != null) u.focus_y = m.focus_y;
      } else {
        // basic fallback if replay embeds a single item
        if (u.item && !u.items) u.items = normalizeItems(u.item);
      }
      // resolve item IDs to full objects (so icons show)
  if (Array.isArray(u.items)){
        u.items = u.items.map(it=>{
          if (typeof it === 'number') {
            const id = String(it);
            return ITEM_CAT.find(i=>String(i.id)===id) || ITEM_CAT.find(i=>String(i.id)===('fc'+id)) || { img: itemPath(id) };
          }
          if (typeof it === 'string') {
            const s = it.trim();
            if (/^(?:https?:|data:|blob:|\/)/i.test(s) || s.includes('/')) {
              return { img: s };
            }
            const id = s.replace(/\.[a-z0-9]+$/i, '');
            const found = ITEM_CAT.find(i=>String(i.id)===String(id)) || (/^\d+$/.test(id) ? ITEM_CAT.find(i=>String(i.id)===('fc'+id)) : null);
    return found || { img: itemPath(s) };
          }
          if (it && it.id && (!it.img && !it.icon && !it.image)){
            const f = ITEM_CAT.find(i=>String(i.id)===String(it.id)); return f || it;
          }
          return it;
        });
      }
      const el = document.createElement('div');
  el.className = `unit unit--${u.team} unit--${u.class}`;
  // Portrait with per-unit bars under it
  let focY = u.focus_y;
  if (typeof focY !== 'number') { focY = 0.20; }
  else if (focY > 1) { focY = focY / 100; } // accept percent
  el.innerHTML = `
    <img src="${full(u.img)}" alt="" style="object-position:center ${Math.round(focY*100)}%">
    <div class="u-bars">
      <div class="u-bar u-bar--hp"><span></span></div>
      <div class="u-bar u-bar--mana"><span></span></div>
    </div>
  ${Array.isArray(u.items) && u.items.length ? `<div class="u-items">${u.items.map(it=>{
        const src = it?.icon || it?.img || it?.image || '';
        return src ? `<img src="${full(src)}" alt="" title="${it.name||''}">` : '';
      }).join('')}</div>` : ''}`;
      const c = cell(u.x, u.y); if (c) c.appendChild(el);
      // Robust portrait fallback on error
      const portrait = el.querySelector('img');
      if (portrait) {
        portrait.addEventListener('error', ()=>{
          const fb = FALLBACK_AVATAR;
          if (portrait.src !== fb) portrait.src = fb;
        });
      }
      u.el = el; unitsById.set(u.id, u); updateBars(u);
    }
  renderHUD();
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
        break;
      }
      case 'attack': {
        const att=unitsById.get(a.att), def=unitsById.get(a.def); if(!att||!def)break;
        const prevHp = def.hp;
        def.hp=a.hp; def.shield=a.shield; if(a.mana!==undefined) att.mana=a.mana;
  updateBars(def); updateBars(att);
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
  updateBars(src); updateBars(dst); if(a.log) log(a.log);
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
