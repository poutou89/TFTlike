document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('page-match')) return;

  const ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
  const full = (p) => ASSET_BASE + String(p || '').replace(/^\/+/, '');

  const board    = document.getElementById('board');
  const logEl    = document.getElementById('battle-log');
  const hudA     = document.getElementById('hud-allies');
  const hudE     = document.getElementById('hud-enemies');
  const btnStart = document.getElementById('btn-start');
  const btnPause = document.getElementById('btn-pause');
  const btnReset = document.getElementById('btn-reset');

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

  const cell = (x,y) => board.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);

  function log(msg){ if(!msg)return; const d=document.createElement('div'); d.textContent=msg;
    logEl.appendChild(d); logEl.scrollTop=logEl.scrollHeight; }

  function renderHUD(){
    const list = (team) => [...unitsById.values()].filter(u=>u.team===team)
      .map(u=>`<li><img src="${full(u.img)}"><span>${u.name}</span><em>${u.hp} PV${u.shield>0?' • 🛡'+u.shield:''}${u.mana>0?' • 🔷'+u.mana:''}</em></li>`).join('');
    hudA.innerHTML = list('ally'); hudE.innerHTML = list('enemy');
  }

  function updateBars(u){
    u.el.querySelector('.hp').textContent = u.hp;
    const sh=u.el.querySelector('.shield'); if(sh){ sh.textContent=u.shield; sh.style.display=u.shield>0?'':'none'; }
    const ma=u.el.querySelector('.mana');   if(ma){ ma.textContent=u.mana;   ma.style.display=u.mana>0?'':'none'; }
  }

  function spawnInitial(){
    board.querySelectorAll('.cell').forEach(c=>c.innerHTML=''); logEl.innerHTML=''; unitsById.clear();
    for(const u0 of REPLAY.initial){
      const u = {...u0};
      const el = document.createElement('div');
      el.className = `unit unit--${u.team} unit--${u.class}`;
      el.innerHTML = `
        <img src="${full(u.img)}" alt="">
        <span class="hp">${u.hp}</span>
        <span class="shield"${u.shield>0?'':' style="display:none"'}>${u.shield}</span>
        <span class="mana"${u.mana>0?'':' style="display:none"'}>${u.mana}</span>`;
      const c = cell(u.x, u.y); if (c) c.appendChild(el);
      u.el = el; unitsById.set(u.id, u);
    }
    renderHUD();
  }

  function applyAction(a){
    switch(a.t){
      case 'move': {
        const u=unitsById.get(a.id); if(!u)break;
        const to=cell(a.to[0],a.to[1]); if(!to)break;
        to.appendChild(u.el); u.x=a.to[0]; u.y=a.to[1];
        break;
      }
      case 'attack': {
        const att=unitsById.get(a.att), def=unitsById.get(a.def); if(!att||!def)break;
        def.hp=a.hp; def.shield=a.shield; if(a.mana!==undefined) att.mana=a.mana;
        updateBars(def); updateBars(att);
        if(def.hp<=0){ def.el.classList.add('ko'); setTimeout(()=>def.el.remove(),120); }
        if(a.log) log(a.log);
        break;
      }
      case 'heal': {
        const src=unitsById.get(a.src), dst=unitsById.get(a.dst); if(!src||!dst)break;
        if(a.mana!==undefined) src.mana=a.mana;
        dst.hp=Math.min(dst.maxHp,(dst.hp??0)+(a.amount??0));
        updateBars(src); updateBars(dst); if(a.log) log(a.log);
        break;
      }
      case 'log': if(a.msg) log(a.msg); break;
    }
  }

  function playTick(){
    if(step >= (REPLAY.actions?.length || 0)){
      clearInterval(timer); timer=null;
      log(REPLAY.winner==='ally'?'Victoire !':REPLAY.winner==='enemy'?'Défaite…':'Égalité !');
      return;
    }
    applyAction(REPLAY.actions[step++]); renderHUD();
  }

  btnStart.addEventListener('click', ()=>{ if(!timer) timer=setInterval(playTick,TICK_MS); });
  btnPause.addEventListener('click', ()=>{ if(timer){ clearInterval(timer); timer=null; } });
  btnReset.addEventListener('click', ()=>{ if(timer){ clearInterval(timer); timer=null; } step=0; spawnInitial(); });

  spawnInitial();
});
