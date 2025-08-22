// assets/JavaScript/match.js
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
  /** @type {{id:number,name:string,img:string,class:string,family?:string,hp:number,atk:number,shield:number,mana:number,acc:number,crit:number,dodge:number,x:number,y:number}[]} */
  const ALLIES  = JSON.parse(document.getElementById('allies-json')?.textContent || '[]');
  const ENEMIES = JSON.parse(document.getElementById('enemies-json')?.textContent || '[]');
  console.log('MATCH DATA ->', { ALLIES, ENEMIES });

  // ---- state ----
  let units = []; // {team,id,name,img,class,family,maxHp,hp,atk,shield,mana,acc,crit,dodge,x,y,el}
  let timer = null;

  // ---- constants ----
  const TICK_MS = 400;
  const CRIT_MULT = 1.5;
  const HEAL_COST = 20;

  // ---- helpers ----
  const cell = (x,y) => board.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
  const inBounds = (x,y) => (x>=0 && x<7 && y>=0 && y<4);
  const dist = (a,b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const pctToProb = (v) => clamp01((v || 0) / 100);
  const roll = (p) => Math.random() < p;
  const rangeFor = (cls) => (cls === 'dps_ranged' || cls === 'healer' ? 2 : 1);

  function log(msg) {
    const line = document.createElement('div');
    line.textContent = msg;
    logEl.appendChild(line);
    logEl.scrollTop = logEl.scrollHeight;
  }

  function renderHUD() {
    const line = (u) =>
      `<li><img src="${full(u.img)}"><span>${u.name}</span><em>${u.hp} PV${u.shield>0 ? ' • 🛡'+u.shield : ''}${u.mana>0 ? ' • 🔷'+u.mana : ''}</em></li>`;
    hudA.innerHTML = units.filter(u => u.team==='ally').map(line).join('');
    hudE.innerHTML = units.filter(u => u.team==='enemy').map(line).join('');
  }

  function spawn(u0) {
    const u = {
      team: u0.team,
      id: u0.id, name: u0.name, img: u0.img, class: u0.class, family: u0.family,
      maxHp: u0.hp, hp: u0.hp, atk: u0.atk,
      shield: u0.shield || 0, mana: u0.mana || 0,
      acc: pctToProb(u0.acc), crit: pctToProb(u0.crit), dodge: pctToProb(u0.dodge),
      x: u0.x, y: u0.y, el: null
    };
    const el = document.createElement('div');
    el.className = `unit unit--${u.team} unit--${u.class}`;
    el.innerHTML = `
      <img src="${full(u.img)}" alt="">
      <span class="hp">${u.hp}</span>
      <span class="shield"${u.shield>0?'':' style="display:none"'}>${u.shield}</span>
      <span class="mana"${u.mana>0?'':' style="display:none"'}>${u.mana}</span>`;
    const c = cell(u.x, u.y);
    if (c) c.appendChild(el);
    u.el = el;
    units.push(u);
  }

  function reset() {
    board.querySelectorAll('.cell').forEach(c => c.innerHTML = '');
    hudA.innerHTML = ''; hudE.innerHTML = ''; logEl.innerHTML = '';
    units = [];
    ALLIES.forEach(u => spawn({...u, team:'ally'}));
    ENEMIES.forEach(u => spawn({...u, team:'enemy'}));
    renderHUD();
  }

  function nearestEnemy(me) {
    let best = null, bestD = 999;
    for (const u of units) {
      if (u.team === me.team || u.hp <= 0) continue;
      const d = dist(me, u);
      if (d < bestD) { best = u; bestD = d; }
    }
    return best;
  }

  function moveToward(me, target) {
    const dx = Math.sign(target.x - me.x);
    const dy = Math.sign(target.y - me.y);
    const candidates = [
      {x: me.x + dx, y: me.y},
      {x: me.x, y: me.y + dy},
    ].filter(p => inBounds(p.x,p.y));

    for (const p of candidates) {
      const occ = units.find(u => u.hp>0 && u.x===p.x && u.y===p.y);
      if (!occ) {
        const to = cell(p.x, p.y);
        if (to) { to.appendChild(me.el); me.x = p.x; me.y = p.y; }
        return true;
      }
    }
    return false;
  }

  function updateBars(u) {
    u.el.querySelector('.hp').textContent = u.hp;
    const sh = u.el.querySelector('.shield');
    if (sh) { sh.textContent = Math.max(0, u.shield); sh.style.display = u.shield>0 ? '' : 'none'; }
    const ma = u.el.querySelector('.mana');
    if (ma) { ma.textContent = Math.max(0, u.mana);   ma.style.display = u.mana>0   ? '' : 'none'; }
  }

  function applyDamage(def, rawDmg, byName) {
    // réduction passive tank (20%)
    if (def.class === 'tank') rawDmg = Math.round(rawDmg * 0.8);

    let dmg = rawDmg;

    // bouclier absorbe en premier
    if (def.shield > 0) {
      const absorbed = Math.min(def.shield, dmg);
      def.shield -= absorbed;
      dmg -= absorbed;
      if (absorbed > 0) log(`${byName} entame le bouclier de ${def.name} (${absorbed})`);
    }

    if (dmg > 0) {
      def.hp = Math.max(0, def.hp - dmg);
      if (def.hp <= 0) {
        def.el.classList.add('ko');
        setTimeout(() => def.el.remove(), 150);
      }
    }
    updateBars(def);
  }

  function attack(att, def) {
    // précision / esquive
    if (!roll(att.acc)) { log(`${att.name} rate ${def.name}`); return; }
    if (roll(def.dodge)) { log(`${def.name} esquive l'attaque de ${att.name}`); return; }

    // dégâts (+critique)
    let dmg = att.atk;
    const isCrit = roll(att.crit);
    if (isCrit) dmg = Math.round(dmg * CRIT_MULT);

    applyDamage(def, dmg, att.name);
    log(`${att.name} frappe ${def.name} (${dmg}${isCrit ? ' ⚡ crit' : ''})`);

    // petit gain de mana offensif
    att.mana = Math.min(100, (att.mana || 0) + 5);
    updateBars(att);
  }

  function heal(healer) {
    // cible : allié le plus blessé (dans la portée du heal = 2)
    const R = rangeFor('healer');
    let target = null, worst = 2;
    for (const u of units) {
      if (u.team !== healer.team || u.hp <= 0 || u.hp >= u.maxHp) continue;
      if (dist(healer, u) > R) continue;
      const r = u.hp / u.maxHp; // plus petit => plus blessé
      if (r < worst) { worst = r; target = u; }
    }
    if (!target) return false;

    if ((healer.mana || 0) < HEAL_COST) return false;

    const amount = Math.max(10, Math.round(0.6 * healer.atk));
    healer.mana -= HEAL_COST;
    target.hp = Math.min(target.maxHp, target.hp + amount);
    updateBars(healer);
    updateBars(target);
    log(`${healer.name} soigne ${target.name} (+${amount})`);
    return true;
  }

  function tick() {
    // fin ?
    const aliveA = units.some(u => u.team==='ally' && u.hp>0);
    const aliveE = units.some(u => u.team==='enemy' && u.hp>0);
    if (!aliveA || !aliveE) {
      clearInterval(timer); timer = null;
      log(!aliveA && !aliveE ? 'Égalité !' : !aliveA ? 'Défaite…' : 'Victoire !');
      return;
    }

    // ordre déterministe: alliés puis ennemis
    const turn = [...units]
      .filter(u => u.hp>0)
      .sort((a,b) => (a.team === b.team ? 0 : (a.team === 'ally' ? -1 : 1)));

    for (const me of turn) {
      if (me.hp <= 0) continue;

      // tick mana passif
      me.mana = Math.min(100, (me.mana || 0) + (me.class === 'healer' ? 10 : 3));
      updateBars(me);

      if (me.class === 'healer') {
        if (heal(me)) continue; // soin prioritaire si possible
      }

      const foe = nearestEnemy(me);
      if (!foe) continue;

      const d = dist(me, foe);
      const R = rangeFor(me.class);

      if (d <= R) attack(me, foe);
      else moveToward(me, foe);
    }

    renderHUD();
  }

  // ---- buttons ----
  btnStart.addEventListener('click', () => { if (!timer) timer = setInterval(tick, TICK_MS); });
  btnPause.addEventListener('click', () => { if (timer) { clearInterval(timer); timer = null; } });
  btnReset.addEventListener('click', () => { if (timer) { clearInterval(timer); timer = null; } reset(); });

  // init
  reset();
});
