// team-builder.js

// base des assets fournie par Twig: window.ASSET_BASE = "{{ asset('') }}";
const ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
const fullImg = (p) => ASSET_BASE + String(p || '').replace(/^\/+/, '');

console.log('Team Builder script loaded!', { ASSET_BASE });

document.addEventListener('DOMContentLoaded', () => {
  const ownedEl   = document.getElementById('owned-girls-json');
  if (!ownedEl) return;

  /** @type {Array} */
  const OWNED     = JSON.parse(ownedEl.textContent || '[]');

  const pickGrid  = document.getElementById('pick-grid');
  const benchGrid = document.getElementById('bench-grid');
  const board     = document.getElementById('board');
  const btnReroll = document.getElementById('btn-reroll');
  const btnLock   = document.getElementById('btn-lock');

  const MAX_TEAM  = 4;
  const placed    = new Map(); // "x,y" -> { girl, el }
  const inBench   = new Map(); // girlId -> cardElement

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

  // ---- UI renderers ----
  function renderCard(girl, { source }) {
    const card = document.createElement('div');
    card.className = `tb-card tb-card--${girl.class}`;
    card.draggable = true;
    card.dataset.id = girl.id;
    card.dataset.source = source;

    card.innerHTML = `
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

    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', JSON.stringify(girl));
      requestAnimationFrame(() => card.classList.add('dragging'));
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));

    // double-clic -> toggle banc
    card.addEventListener('dblclick', () => {
      if (card.parentElement === benchGrid) {
        benchGrid.removeChild(card);
        inBench.delete(girl.id);
      } else {
        benchGrid.appendChild(card);
        inBench.set(girl.id, card);
      }
      updateLockState();
    });

    return card;
  }

  function makeChip(girl) {
    const chip = document.createElement('div');
    chip.className = `chip ${classTag(girl.class)}`;
    chip.title = girl.name;
    chip.draggable = true;
    chip.innerHTML = `<img src="${fullImg(girl.img)}" alt="${girl.name}"><span>${girl.name}</span>`;

    chip.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', JSON.stringify(girl));
      requestAnimationFrame(() => chip.classList.add('dragging'));
    });
    chip.addEventListener('dragend', () => chip.classList.remove('dragging'));

    chip.addEventListener('click', () => {
      const cell = chip.parentElement?.closest('.cell');
      if (cell) {
        const key = cellKey(cell.dataset.x, cell.dataset.y);
        placed.delete(key);
        cell.innerHTML = '';
      }
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
    const picks = pickN(OWNED, 4); // toujours 4 si possible
    picks.forEach(g => pickGrid.appendChild(renderCard(g, { source: 'pick' })));
  }
  btnReroll?.addEventListener('click', (e) => {
  e.preventDefault();
  renderPick();           // re-génère 4 cartes aléatoires
});
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

    const dragging = document.querySelector('.tb-card.dragging, .chip.dragging');
    if (!dragging) return;

    const girl = JSON.parse(e.dataTransfer.getData('text/plain') || '{}');

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
    placed.set(key, { girl, el: chip });
    updateLockState();
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

  // ---- actions ----
let ticketId = null;
let pollTimer = null;

btnLock.addEventListener('click', () => {
  const lineup = Array.from(placed.entries()).map(([key, val]) => {
    const [x, y] = key.split(',').map(Number);
    return { id: val.girl.id, x, y };
  });
  const START_URL = window.MM.start;
  const statusUrl = (id) => window.MM.status.replace('__ID__', String(id));
  fetch(START_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify({ lineup }),
  })
  .then(async (r) => {
    const text = await r.text();
    let data;
    try { data = JSON.parse(text); } catch { data = null; }

    console.log('matchmaking/start ->', r.status, data ?? text);

    if (!r.ok) {
      alert('Matchmaking failed (' + r.status + '):\n' + (data?.error ?? text));
      throw new Error('HTTP ' + r.status);
    }
    return data;
  })
  .then((data) => {
    if (data.status === 'matched') {
      window.location.href = `/match/${data.matchId}`;
      return;
    }
    if (data.status === 'queued') {
      ticketId = data.ticketId;
      btnLock.disabled = true;
      btnLock.textContent = '🔎 Recherche en cours…';
      pollTimer = setInterval(async () => {
        const res = await fetch(statusUrl(ticketId), { credentials: 'same-origin' });
        const j = await res.json();
        console.log('matchmaking/status ->', j);
        if (j.status === 'matched') {
          clearInterval(pollTimer);
          window.location.href = `/match/${j.matchId}`;
        }
      }, 2000);
      return;
    }
    alert('Réponse inattendue:\n' + JSON.stringify(data));
  })
  .catch((err) => {
    console.error(err);
  });
});

  function updateLockState() {
    btnLock.disabled = (placed.size !== MAX_TEAM);
  }

  // init
  renderPick();
});
