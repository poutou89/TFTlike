// team-builder.js

// base des assets fournie par Twig: window.ASSET_BASE = "{{ asset('') }}";

document.addEventListener('DOMContentLoaded', () => {
  const ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
  const fullImg = (p) => ASSET_BASE + String(p || '').replace(/^\/+/, '');
  const IS_TOUCH = (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || 'ontouchstart' in window;
  
  console.log('Team Builder script loaded!', { ASSET_BASE });
  const ownedEl      = document.getElementById('owned-girls-json');
  const suggestedEl  = document.getElementById('suggested-girls-json');
  if (!ownedEl) return;

  /** @type {Array} */
  const OWNED        = JSON.parse(ownedEl.textContent || '[]');
  /** @type {Array} */
  const SUGGESTED    = suggestedEl ? JSON.parse(suggestedEl.textContent || '[]') : [];

  const pickGrid  = document.getElementById('pick-grid');
  const benchGrid = document.getElementById('bench-grid');
  const board     = document.getElementById('board');
  const itemsGrid = document.getElementById('items-grid');
  const btnReroll = document.getElementById('btn-reroll');
  const rerollCountEl = document.getElementById('reroll-count');
  const btnLock   = document.getElementById('btn-lock');
  const bonusList = document.getElementById('team-bonuses');
  const skeleton  = document.getElementById('search-skeleton');
  const hintEl    = document.querySelector('.tb-hint');
  // Floating drag label for items
  let dragTip = null; const getDragTip = () => {
    if (dragTip) return dragTip;
    dragTip = document.createElement('div');
    dragTip.className = 'drag-tip';
    Object.assign(dragTip.style, {
      position:'fixed', zIndex: 99999, pointerEvents:'none',
      background:'rgba(26, 24, 44, 0.9)', color:'#fff', padding:'6px 10px',
      borderRadius:'10px', border:'1px solid rgba(255,255,255,.2)',
      boxShadow:'0 6px 20px rgba(0,0,0,.35)', fontSize:'12px',
      transform:'translate(-50%, -140%)', whiteSpace:'nowrap'
    });
    document.body.appendChild(dragTip); return dragTip;
  };

  const MAX_TEAM  = 4;
  const placed    = new Map(); // "x,y" -> { girl, el, itemId }
  const inBench   = new Map(); // girlId -> cardElement
  const ALL_ITEMS = Array.isArray(window.ITEMS) ? window.ITEMS : [];
  // Items: only 4 proposals at a time (no full catalog view here)

  // Selection state for touch/mobile (and keyboard/mouse as a fallback to DnD)
  let selection = { type: null, data: null, el: null }; // type: 'girl' | 'item' | null
  function clearSelection() {
    if (selection.el) selection.el.classList.remove('is-selected');
    selection = { type: null, data: null, el: null };
    board.classList.remove('is-placing', 'is-equipping');
    document.querySelectorAll('.tb-item.is-selected').forEach(b => b.classList.remove('is-selected'));
    if (hintEl && IS_TOUCH) hintEl.textContent = 'Place exactement 4 héroïnes.';
  }
  function selectGirl(girl, el) {
    clearSelection();
    selection = { type: 'girl', data: girl, el };
    if (el) el.classList.add('is-selected');
    board.classList.add('is-placing');
    if (hintEl && IS_TOUCH) hintEl.textContent = 'Sélectionne une case du plateau pour placer la héroïne.';
  }
  function selectItem(item, el) {
    clearSelection();
    selection = { type: 'item', data: item, el };
    if (el) el.classList.add('is-selected');
    board.classList.add('is-equipping');
    if (hintEl && IS_TOUCH) hintEl.textContent = 'Tape une héroïne sur le plateau pour lui attribuer l\'objet.';
  }

  // helpers
  const randInt = (n) => Math.floor(Math.random() * n);
  const pickN = (arr, n) => {
    const pool = [...arr], out = [];
    while (out.length < Math.min(n, pool.length)) {
      out.push(pool.splice(randInt(pool.length), 1)[0]);
    }
    return out;
  };
  const cellKey = (x, y) => `${x},${y}`;
  const choose4 = (arr) => {
    if (!arr.length) return [];
    if (arr.length <= 4) return [...arr];
    const ids = new Set(); const out = [];
    while (out.length < 4 && ids.size < arr.length) {
      const i = randInt(arr.length);
      if (!ids.has(i)) { ids.add(i); out.push(arr[i]); }
    }
    return out;
  };

  // ---- Items proposals (4 at a time) ----
  let currentItems = choose4(ALL_ITEMS);
  function renderItems() {
    if (!itemsGrid) return;
    // Always replace pre-rendered content to keep behavior consistent
    itemsGrid.innerHTML = '';
    if (!ALL_ITEMS.length) {
      const empty = document.createElement('div');
      empty.className = 'tb-items__empty';
      empty.textContent = 'Ajoute des images dans public/images/items/';
      itemsGrid.appendChild(empty);
      return;
    }
    currentItems.forEach(it => {
      const btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'tb-item';
      btn.setAttribute('data-item-id', it.id);
  const title = it.desc ? `${it.name} — ${it.desc}` : it.name;
  btn.setAttribute('title', title);
  btn.setAttribute('aria-label', title);
      btn.draggable = !IS_TOUCH;
      btn.innerHTML = `<img src="${fullImg(it.img)}" alt="${it.name}">`;
      btn.addEventListener('dragstart', (e) => {
        btn.classList.add('dragging');
        e.dataTransfer.setData('text/plain', JSON.stringify({ __type: 'item', id: it.id }));
        const tip = getDragTip();
        tip.textContent = `${it.name} → (dépose sur une héroïne)`;
        tip.style.display = 'block';
      });
      btn.addEventListener('dragend', () => {
        btn.classList.remove('dragging');
        if (dragTip) dragTip.style.display = 'none';
      });
      // Tap to equip (mobile-friendly)
      btn.addEventListener('click', () => {
        const already = btn.classList.contains('is-selected');
        if (already) { clearSelection(); return; }
        selectItem(it, btn);
      });
      itemsGrid.appendChild(btn);
    });
  }

  // ---- UI renderers ----
  function renderCard(girl, { source }) {
    const card = document.createElement('div');
    card.className = `tb-card tb-card--${girl.class}`;
  card.draggable = !IS_TOUCH;
    card.dataset.id = girl.id;
    card.dataset.source = source;

    card.innerHTML = `
      <button class="tb-card__bench-btn" type="button" title="Ajouter au banc" aria-label="Ajouter au banc">🧺</button>
      <div class="tb-card__img">
        <img src="${fullImg(girl.img)}" alt="${girl.name}">
      </div>
      <div class="tb-card__meta">
        <div class="tb-card__name">${girl.name}</div>
        <div class="tb-card__tags">
          <span class="tag ${classTag(girl.class)}">${classLabel(girl.class)}</span>
          <span class="tag tag-family">${girl.family ?? ''}</span>
        </div>
      </div>
      <div class="tb-card__stats">
        <span>PV ${girl.pdv}</span>
        <span>ATK ${girl.atk}</span>
        <span>PRC ${Math.round((girl.chance_atk ?? 0) * 100)}%</span>
      </div>
    `;

    // Bench button (useful on mobile)
    const benchBtn = card.querySelector('.tb-card__bench-btn');
    benchBtn?.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (card.parentElement !== benchGrid) {
        benchGrid.appendChild(card);
        inBench.set(girl.id, card);
        updateLockState();
      }
    });

    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', JSON.stringify(girl));
      requestAnimationFrame(() => card.classList.add('dragging'));
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));

    // Single tap/click to select for placement (mobile and desktop alternative to DnD)
    card.addEventListener('click', (ev) => {
      // If an item is selected, ignore selecting a card; keep equip mode
      if (selection.type === 'item') return;
      if (selection.type === 'girl' && selection.data?.id === girl.id) {
        clearSelection();
      } else {
        selectGirl(girl, card);
      }
    });

    // double-clic -> toggle banc
    card.addEventListener('dblclick', () => {
      // Toggle banc: si déjà dans le banc -> on le laisse affiché mais on le marque comme non-préservé
      if (card.parentElement === benchGrid) {
        // Retrait du banc: on le remet dans son conteneur source si possible, sinon on le supprime proprement
        inBench.delete(girl.id);
        // Déplacer la carte vers la zone de pick pour la rendre rerollable
        if (pickGrid) pickGrid.appendChild(card);
        else card.remove();
      } else {
        // Ajout au banc
        benchGrid.appendChild(card);
        inBench.set(girl.id, card);
      }
      updateLockState();
    });

    return card;
  }

  function makeChip(girl, itemId = null) {
    const chip = document.createElement('div');
    chip.className = `chip ${classTag(girl.class)}`;
    chip.title = girl.name;
    chip.draggable = !IS_TOUCH;
  const focalY = (typeof girl.focus_y === 'number') ? `${girl.focus_y}%` : '10%';
    chip.innerHTML = `
      <img class="chip-avatar" src="${fullImg(girl.img)}" alt="${girl.name}" style="object-position:center ${focalY};">
      <span class="chip-item"></span>
    `;

    const holder = chip.querySelector('.chip-item');
    if (itemId) {
      const item = (window.ITEMS || []).find(i => String(i.id) === String(itemId));
      if (item && holder) {
        const tip = item.desc ? `${item.name} — ${item.desc}` : item.name;
        holder.innerHTML = `<img class="chip-item-img" src="${fullImg(item.img)}" alt="${item.name}" title="${tip}">`;
      }
    }

    // Click on the item icon to unequip (doesn't remove the unit)
    if (holder) {
      holder.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const cell = chip.parentElement?.closest('.cell');
        if (!cell) return;
        const key = cellKey(cell.dataset.x, cell.dataset.y);
        const slot = placed.get(key);
        if (!slot) return;
        slot.itemId = null;
        holder.innerHTML = '';
      });
    }

    chip.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', JSON.stringify(girl));
      requestAnimationFrame(() => chip.classList.add('dragging'));
    });
    chip.addEventListener('dragend', () => chip.classList.remove('dragging'));

    // Tap to unequip item if an item is selected, otherwise remove the unit to bench
    chip.addEventListener('click', () => {
      const cell = chip.parentElement?.closest('.cell');
      if (!cell) return;

      // If we are in equip mode, assign item to this chip directly
      if (selection.type === 'item') {
        const key = cellKey(cell.dataset.x, cell.dataset.y);
        const slot = placed.get(key);
        if (slot) {
          slot.itemId = selection.data.id;
          const holder = chip.querySelector('.chip-item');
          const item = (window.ITEMS || []).find(i => String(i.id) === String(selection.data.id));
          if (holder && item) {
            const tip = item.desc ? `${item.name} — ${item.desc}` : item.name;
            holder.innerHTML = `<img class="chip-item-img" src="${fullImg(item.img)}" alt="${item.name}" title="${tip}">`;
            const img = holder.querySelector('.chip-item-img');
            if (img) { img.classList.add('flash'); setTimeout(()=> img.classList.remove('flash'), 600); }
          }
          clearSelection();
        }
        return;
      }

      // Else, remove the unit from the board (send back to bench visually)
      const key = cellKey(cell.dataset.x, cell.dataset.y);
      placed.delete(key);
      cell.innerHTML = '';
      if (!inBench.has(girl.id)) {
        const card = renderCard(girl, { source: 'bench' });
        benchGrid.appendChild(card);
        inBench.set(girl.id, card);
      }
      updateLockState();
    });

    return chip;
  }

function renderPick() {
  pickGrid.innerHTML = '';
  let pool = SUGGESTED.length ? [...SUGGESTED] : [...OWNED];
  if (pool.length === 0) return;

  // on duplique si < 4
  while (pool.length < 4) pool = pool.concat(pool);

  // Exclure ceux déjà au banc (préservés) du tirage
  const preservedIds = new Set(Array.from(inBench.keys()));
  const pool2 = pool.filter(g => !preservedIds.has(g.id));

  // Sélectionne jusqu'à 4 suggestions uniques parmi le pool restant
  const picks = [];
  const taken = new Set();
  const target = Math.min(4, pool2.length);
  while (picks.length < target && taken.size < pool2.length) {
    const i = Math.floor(Math.random() * pool2.length);
    if (!taken.has(i)) { taken.add(i); picks.push(pool2[i]); }
  }

  picks.forEach(g => pickGrid.appendChild(renderCard(g, { source: 'pick' })));
}
  function classTag(cls) {
    switch (cls) {
      case 'dps_melee':  return 'tag-melee';
      case 'dps_ranged': return 'tag-ranged';
      case 'tank':       return 'tag-tank';
      case 'healer':     return 'tag-heal';
      default:           return '';
    }
  }
  function classLabel(cls) {
    switch (cls) {
      case 'dps_melee':  return 'DPS CàC';
      case 'dps_ranged': return 'DPS distance';
      case 'tank':       return 'Tank';
      case 'healer':     return 'Healer';
      default:           return cls;
    }
  }

  // ---- DnD board ----
  board.addEventListener('dragover', (e) => e.preventDefault());
  board.addEventListener('drop', (e) => {
    e.preventDefault();
    const cell = e.target.closest('.cell');
    if (!cell) return;

    const { x, y } = cell.dataset;
    const key = cellKey(x, y);

  const dragging = document.querySelector('.tb-card.dragging, .chip.dragging, .tb-item.dragging');
    if (!dragging) return;
  const dt = e.dataTransfer;
  const payload = dt.getData('text/plain') || '{}';
  let girl = {};
  try { girl = JSON.parse(payload); } catch {}
  if (girl && girl.__type === 'item') return; // let the item handler manage it

  // si même héro déjà placé ailleurs -> libère l’ancienne cellule
    for (const [k, v] of placed) {
      if (v.girl.id === girl.id) {
        placed.delete(k);
        const oldCell = board.querySelector(`.cell[data-x="${k.split(',')[0]}"][data-y="${k.split(',')[1]}"]`);
        if (oldCell) oldCell.innerHTML = '';
      }
    }

    // limite équipe
    if (!placed.has(key) && placed.size >= MAX_TEAM) return;

    // swap si la cellule était occupée
    if (placed.has(key)) {
      const existing = placed.get(key);
      if (existing?.el) {
        benchGrid.appendChild(renderCard(existing.girl, { source: 'bench' }));
        inBench.set(existing.girl.id, benchGrid.lastElementChild);
      }
      placed.delete(key);
    }

  const chip = makeChip(girl);
    cell.innerHTML = '';
    cell.appendChild(chip);
  placed.set(key, { girl, el: chip, itemId: null });
    updateLockState();
  });

  // Click-to-place/equip support
  function placeGirlOnCell(girl, cell) {
    if (!cell) return false;
    const { x, y } = cell.dataset; const key = cellKey(x, y);
    // if already placed elsewhere, free it
    for (const [k, v] of placed) {
      if (v.girl.id === girl.id) {
        placed.delete(k);
        const oldCell = board.querySelector(`.cell[data-x="${k.split(',')[0]}"][data-y="${k.split(',')[1]}"]`);
        if (oldCell) oldCell.innerHTML = '';
      }
    }
    if (!placed.has(key) && placed.size >= MAX_TEAM) return false;
    if (placed.has(key)) {
      const existing = placed.get(key);
      if (existing?.el) {
        benchGrid.appendChild(renderCard(existing.girl, { source: 'bench' }));
        inBench.set(existing.girl.id, benchGrid.lastElementChild);
      }
      placed.delete(key);
    }
    const chip = makeChip(girl);
    cell.innerHTML = '';
    cell.appendChild(chip);
    placed.set(key, { girl, el: chip, itemId: null });
    updateLockState();
    return true;
  }

  board.addEventListener('click', (e) => {
    const cell = e.target.closest('.cell'); if (!cell) return;
    if (selection.type === 'girl') {
      const ok = placeGirlOnCell(selection.data, cell);
      if (ok) clearSelection();
      return;
    }
    if (selection.type === 'item') {
      const key = cellKey(cell.dataset.x, cell.dataset.y);
      const slot = placed.get(key); if (!slot) return;
      slot.itemId = selection.data.id;
      const chip = slot.el;
      const holder = chip.querySelector('.chip-item');
      const item = (window.ITEMS || []).find(i => String(i.id) === String(selection.data.id));
      if (holder && item) {
        const tip = item.desc ? `${item.name} — ${item.desc}` : item.name;
        holder.innerHTML = `<img class="chip-item-img" src="${fullImg(item.img)}" alt="${item.name}" title="${tip}">`;
        const img = holder.querySelector('.chip-item-img');
        if (img) { img.classList.add('flash'); setTimeout(()=> img.classList.remove('flash'), 600); }
      }
      clearSelection();
      return;
    }
  });

  // Clear selection when tapping outside interactive zones
  document.addEventListener('click', (e) => {
    const within = e.target.closest?.('.tb-card, .tb-item, .tb-board .cell, .tb-board, .tb-pick__grid, .tb-bench__grid');
    if (!within) clearSelection();
  });

  // ---- DnD bench ----
  benchGrid.addEventListener('dragover', (e) => e.preventDefault());
  benchGrid.addEventListener('drop', (e) => {
    e.preventDefault();
    const girl = JSON.parse(e.dataTransfer.getData('text/plain') || '{}');

    // retire du board si présente
    for (const [k, v] of placed) {
      if (v.girl.id === girl.id) {
        const c = board.querySelector(`.cell[data-x="${k.split(',')[0]}"][data-y="${k.split(',')[1]}"]`);
        if (c) c.innerHTML = '';
        placed.delete(k);
        break;
      }
    }

    if (!inBench.has(girl.id)) {
      const card = renderCard(girl, { source: 'bench' });
      benchGrid.appendChild(card);
      inBench.set(girl.id, card);
    }
    updateLockState();
  });

  // ---- Items drag & drop ----
  // Note: individual item buttons attach their own drag handlers in renderItems()

  board.addEventListener('drop', (e) => {
    // handle item drops onto chips
    const payload = e.dataTransfer.getData('text/plain') || '';
    if (!payload) return; // handled above for heroes too
    let data; try { data = JSON.parse(payload); } catch { data = null; }
    if (!data || data.__type !== 'item') return;
    const cell = e.target.closest('.cell'); if (!cell) return;
    const key = cellKey(cell.dataset.x, cell.dataset.y);
    const slot = placed.get(key); if (!slot) return;
    // assign item (replace any existing)
    slot.itemId = data.id;
    const chip = slot.el;
    const holder = chip.querySelector('.chip-item');
    const item = (window.ITEMS || []).find(i => String(i.id) === String(data.id));
    if (holder && item) {
      const tip = item.desc ? `${item.name} — ${item.desc}` : item.name;
  holder.innerHTML = `<img class="chip-item-img" src="${fullImg(item.img)}" alt="${item.name}" title="${tip}">`;
  const img = holder.querySelector('.chip-item-img');
  if (img) { img.classList.add('flash'); setTimeout(()=> img.classList.remove('flash'), 600); }
    }
    if (dragTip && item) {
      dragTip.textContent = `${item.name} → ${slot.girl.name}`;
      setTimeout(()=>{ if(dragTip) dragTip.style.display = 'none'; }, 850);
    }
  });

  // Track pointer to position drag tip
  document.addEventListener('dragover', (e) => {
    if (!dragTip || dragTip.style.display !== 'block') return;
    dragTip.style.left = `${e.clientX}px`;
    dragTip.style.top  = `${e.clientY}px`;
  });

  // ---- actions ----
let ticketId = null;
let pollTimer = null;

btnLock.addEventListener('click', async () => {
  if (skeleton) { skeleton.classList.remove('is-hidden'); skeleton.classList.add('is-visible'); }
  // build payload
  const lineup = Array.from(placed.entries()).map(([key, val]) => {
    const [x, y] = key.split(',').map(Number);
  const itemId = val.itemId ?? null;
  return itemId ? { id: val.girl.id, x, y, item: String(itemId) } : { id: val.girl.id, x, y };
  });

  const START_URL  = window.MM?.start  ?? '/matchmaking/start';
  const STATUS_TPL = window.MM?.status ?? '/matchmaking/status/__ID__';
  const statusUrl  = (id) => STATUS_TPL.replace('__ID__', String(id));

  console.log('Calling START_URL =', START_URL);

  try {
    const res  = await fetch(START_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ lineup })
    });

    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = null; }

    console.log('matchmaking/start ->', res.status, data ?? text);

    if (!res.ok) {
      alert(`Matchmaking failed (${res.status}):\n${data?.error ?? text}`);
      return;
    }
    if (!data || (data.status !== 'matched' && data.status !== 'queued')) {
      alert('Réponse inattendue:\n' + (data ? JSON.stringify(data) : text));
      return;
    }

    if (data.status === 'matched') {
      window.location.href = `/match/${data.matchId}`;
      return;
    }

    // queued -> poll status
    ticketId = data.ticketId;
    btnLock.disabled = true;
    btnLock.textContent = '🔎 Recherche en cours…';

    pollTimer = setInterval(async () => {
      const r = await fetch(statusUrl(ticketId), { credentials: 'same-origin' });
      const j = await r.json();
      console.log('matchmaking/status ->', j);
      if (j.status === 'matched') {
        clearInterval(pollTimer);
    if (skeleton) { skeleton.classList.remove('is-visible'); skeleton.classList.add('is-hidden'); }
        window.location.href = `/match/${j.matchId}`;
      }
    }, 5000);
  } catch (e) {
    console.error(e);
    alert('Erreur réseau: ' + e.message);
  if (skeleton) { skeleton.classList.remove('is-visible'); skeleton.classList.add('is-hidden'); }
  }
});

  function updateLockState() {
    btnLock.disabled = (placed.size !== MAX_TEAM);
    renderBonuses();
  }

  // --- Synergy computation (client-side mirror of server tiers) ---
  function computeBonuses() {
    const counts = {}; // family -> count
    for (const [, {girl}] of placed) {
      const fam = (girl.family || '').toLowerCase();
      if (!fam) continue; counts[fam] = (counts[fam] || 0) + 1;
    }
    const tiers = {};
    for (const [fam, n] of Object.entries(counts)) {
      const tier = n >= 4 ? 4 : (n >= 3 ? 3 : (n >= 2 ? 2 : 0));
      if (tier === 0) continue; tiers[fam] = { n, tier };
    }
    return tiers;
  }

  function renderBonuses() {
    if (!bonusList) return;
    const tiers = computeBonuses();
    bonusList.innerHTML = '';
    const label = (fam, tier, n) => {
      const map = {
        soleil: {2:'ATK +5%',3:'Précision +5%',4:'Crit +5%'},
        lune:   {2:'Esquive +3%',3:'Esquive +2% & Mana +10',4:'Bouclier +10'},
        nature: {2:'PV +5%',3:'Bouclier +15',4:'PV +5%'},
        idole:  {2:'Crit +5%',3:'ATK +5%',4:'Mana +10'},
        ombre:  {2:'Esquive +5%',3:'Précision +5%',4:'Bouclier +15'},
        arcane: {2:'Précision +5%',3:'Mana +15',4:'Crit +5%'},
        etoile: {2:'Précision +3%',3:'Crit +5%',4:'ATK +5%'},
        ocean:  {2:'Esquive +3%',3:'Mana +10',4:'Précision +5%'}
      };
      const effect = (map[fam] && map[fam][tier]) ? map[fam][tier] : `Palier ${tier}`;
      const title = fam.charAt(0).toUpperCase() + fam.slice(1);
      return `${title} x${n} — ${effect}`;
    };
    const ICON = { soleil:'☀️', lune:'🌙', nature:'🍃', idole:'🎵', ombre:'🌑', arcane:'✨', etoile:'⭐', ocean:'🌊' };
    Object.entries(tiers).forEach(([fam, {tier, n}]) => {
      const li = document.createElement('li');
      li.className = `bonus-item fam-${fam} tier-${tier}`;
      const title = fam.charAt(0).toUpperCase() + fam.slice(1);
      const effectText = label(fam, tier, n).split(' — ').pop();
      const pct = Math.min(100, Math.round((n / 4) * 100));
      li.innerHTML = `
        <span class="fam-icon" aria-hidden="true">${ICON[fam] || '✧'}</span>
        <span class="fam-name">${title}</span>
        <span class="count">x${n}</span>
        <div class="gauge" role="progressbar" aria-valuemin="0" aria-valuemax="4" aria-valuenow="${n}">
          <div class="bar" style="width:${pct}%"></div>
        </div>
        <span class="effect">${effectText}</span>
      `;
      bonusList.appendChild(li);
    });
  }

  // init
  renderPick();
  renderItems();
  renderBonuses();

  // --- Reroll limité à 3 ---
  let rerollsLeft = Number(window.REROLLS_LEFT ?? 3);
  const updateRerollUI = () => {
    if (rerollCountEl) rerollCountEl.textContent = `(${rerollsLeft} restant${rerollsLeft>1?'s':''})`;
    if (btnReroll) btnReroll.disabled = rerollsLeft <= 0;
  };
  updateRerollUI();
  if (btnReroll) {
    btnReroll.addEventListener('click', async () => {
      if (rerollsLeft <= 0) return;
      try {
        const res = await fetch(window.REROLL_DEC_URL, { method: 'POST', credentials: 'same-origin' });
        const data = await res.json();
        rerollsLeft = Number(data?.left ?? rerollsLeft);
      } catch {}
      updateRerollUI();
      // Clear any selection to avoid confusion after refreshing candidates/items
      clearSelection();
      renderPick(); // personnages
      // also refresh the 4 item proposals
      currentItems = choose4(ALL_ITEMS);
      renderItems();
    });
  }
});
