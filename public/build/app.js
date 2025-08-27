(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/JavaScript/Inscription.js":
/*!******************************************!*\
  !*** ./assets/JavaScript/Inscription.js ***!
  \******************************************/
/***/ (() => {

// assets/JavaScript/register.js
document.addEventListener('DOMContentLoaded', function () {
  var pass1 = document.getElementById('register_type_form_plainPassword_first');
  var pass2 = document.getElementById('register_type_form_plainPassword_second');
  var registerBtn = document.getElementById('register-btn');
  function checkPasswords() {
    if (pass1.value && pass1.value === pass2.value) {
      registerBtn.disabled = false;
    } else {
      registerBtn.disabled = true;
    }
  }
  if (pass1 && pass2 && registerBtn) {
    pass1.addEventListener('input', checkPasswords);
    pass2.addEventListener('input', checkPasswords);
  }
});

/***/ }),

/***/ "./assets/JavaScript/home.js":
/*!***********************************!*\
  !*** ./assets/JavaScript/home.js ***!
  \***********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var track = document.getElementById('mg-roster-track');
  if (!track) return;
  var prev = document.querySelector('.carousel__nav--prev');
  var next = document.querySelector('.carousel__nav--next');
  var step = 280; // px par clic

  var scrollBy = function scrollBy(delta) {
    return track.scrollBy({
      left: delta,
      behavior: 'smooth'
    });
  };
  prev === null || prev === void 0 || prev.addEventListener('click', function () {
    return scrollBy(-step);
  });
  next === null || next === void 0 || next.addEventListener('click', function () {
    return scrollBy(step);
  });
});
console.log('home.js');

/***/ }),

/***/ "./assets/JavaScript/match.js":
/*!************************************!*\
  !*** ./assets/JavaScript/match.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.at.js */ "./node_modules/core-js/modules/es.array.at.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.at-alternative.js */ "./node_modules/core-js/modules/es.string.at-alternative.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
document.addEventListener('DOMContentLoaded', function () {
  var _document$getElementB;
  if (!document.body.classList.contains('page-match')) return;
  var ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
  var full = function full(p) {
    return ASSET_BASE + String(p || '').replace(/^\/+/, '');
  };
  var board = document.getElementById('board');
  var logEl = document.getElementById('battle-log');
  var hudA = document.getElementById('hud-allies');
  var hudE = document.getElementById('hud-enemies');
  var btnStart = document.getElementById('btn-start');
  var btnPause = document.getElementById('btn-pause');
  var btnReset = document.getElementById('btn-reset');
  var btnMusic = document.getElementById('btn-music');
  if (!board || !logEl || !hudA || !hudE || !btnStart || !btnPause || !btnReset) {
    console.warn('Match UI missing', {
      board: board,
      logEl: logEl,
      hudA: hudA,
      hudE: hudE,
      btnStart: btnStart,
      btnPause: btnPause,
      btnReset: btnReset
    });
    return;
  }
  var REPLAY = JSON.parse(((_document$getElementB = document.getElementById('replay-json')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.textContent) || '{}');
  if (!REPLAY || !Array.isArray(REPLAY.initial)) {
    console.warn('No replay provided');
    return;
  }
  console.debug('REPLAY:', REPLAY, 'allyCount=', REPLAY.initial.filter(function (u) {
    return u.team === 'ally';
  }).length, 'enemyCount=', REPLAY.initial.filter(function (u) {
    return u.team === 'enemy';
  }).length);
  var unitsById = new Map(); // id -> runtime unit
  var timer = null,
    step = 0;
  var TICK_MS = 400;

  // --- Background music (BGM) ---
  var bgm = null,
    bgmEnabled = true,
    bgmFading = false;
  var bgmUrl = window.BGM_URL;
  if (bgmUrl) {
    bgm = new Audio(bgmUrl);
    bgm.loop = true;
    bgm.preload = 'auto';
    bgm.volume = 0.0; // start silent, fade in on Start
  }
  if (btnMusic) {
    if (!bgm) {
      btnMusic.disabled = true;
      btnMusic.title = 'Aucune musique disponible';
    }
    btnMusic.setAttribute('aria-pressed', bgmEnabled ? 'true' : 'false');
    btnMusic.addEventListener('click', function () {
      bgmEnabled = !bgmEnabled;
      btnMusic.setAttribute('aria-pressed', bgmEnabled ? 'true' : 'false');
      if (!bgm) return;
      if (bgmEnabled) {
        bgm.play()["catch"](function () {});
      } else {
        bgm.pause();
      }
    });
  }
  function bgmPlay() {
    if (!bgm || !bgmEnabled) return;
    bgmFading = false;
    bgm.play()["catch"](function (e) {
      console.debug('bgm play failed', e);
    });
  }
  function bgmPause() {
    if (!bgm) return;
    bgm.pause();
  }
  function bgmFadeOut() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 900;
    if (!bgm) return;
    bgmFading = true;
    var start = bgm.volume;
    var t0 = performance.now();
    var _stepFn = function stepFn(now) {
      if (!bgmFading) return;
      var k = Math.min(1, (now - t0) / ms);
      bgm.volume = start * (1 - k);
      if (k < 1) requestAnimationFrame(_stepFn);else {
        bgm.pause();
        bgm.volume = start;
        bgmFading = false;
      }
    };
    requestAnimationFrame(_stepFn);
  }
  function bgmFadeIn() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
    if (!bgm) return;
    bgmFading = false;
    var start = bgm.volume;
    var t0 = performance.now();
    var _stepFn2 = function stepFn(now) {
      var k = Math.min(1, (now - t0) / ms);
      bgm.volume = start + (target - start) * k;
      if (k < 1) requestAnimationFrame(_stepFn2);
    };
    requestAnimationFrame(_stepFn2);
  }
  var cell = function cell(x, y) {
    return board.querySelector(".cell[data-x=\"".concat(x, "\"][data-y=\"").concat(y, "\"]"));
  };
  function log(msg) {
    if (!msg) return;
    var d = document.createElement('div');
    d.textContent = msg;
    logEl.appendChild(d);
    logEl.scrollTop = logEl.scrollHeight;
  }
  function renderHUD() {
    var list = function list(team) {
      return _toConsumableArray(unitsById.values()).filter(function (u) {
        return u.team === team;
      }).map(function (u) {
        return "<li><img src=\"".concat(full(u.img), "\"><span>").concat(u.name, "</span><em>").concat(u.hp, " PV").concat(u.shield > 0 ? ' • 🛡' + u.shield : '').concat(u.mana > 0 ? ' • 🔷' + u.mana : '', "</em></li>");
      }).join('');
    };
    hudA.innerHTML = list('ally');
    hudE.innerHTML = list('enemy');
  }
  function updateBars(u) {
    var hp = u.el.querySelector('.hp');
    if (hp) {
      hp.textContent = u.hp;
    }
    var sh = u.el.querySelector('.shield');
    if (sh) {
      sh.textContent = u.shield;
      sh.style.display = u.shield > 0 ? '' : 'none';
    }
    var ma = u.el.querySelector('.mana');
    if (ma) {
      ma.textContent = u.mana;
      ma.style.display = u.mana > 0 ? '' : 'none';
    }
    // Per-unit bars on the board
    var hpFill = u.el.querySelector('.u-bar--hp > span');
    var maFill = u.el.querySelector('.u-bar--mana > span');
    if (hpFill) {
      var maxHp = Math.max(1, u.maxHp || u.hp || 1);
      var curHp = Math.max(0, Math.min(maxHp, u.hp || 0));
      hpFill.style.width = Math.round(100 * curHp / maxHp) + '%';
    }
    if (maFill) {
      var maxMana = 50;
      var curMana = Math.max(0, Math.min(maxMana, u.mana || 0));
      maFill.style.width = Math.round(100 * curMana / maxMana) + '%';
    }
  }

  // (global gauges removed)

  // --- SFX helper with light throttling ---
  var lastSfxAt = new Map();
  function playSfx(url) {
    var vol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.7;
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : url;
    var minGapMs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 120;
    try {
      if (!url) return;
      var now = performance.now();
      var last = lastSfxAt.get(key) || 0;
      if (now - last < minGapMs) return;
      lastSfxAt.set(key, now);
      var a = new Audio(url);
      a.volume = vol;
      a.play()["catch"](function () {});
    } catch (_unused) {/* ignore */}
  }
  function spawnInitial() {
    board.querySelectorAll('.cell').forEach(function (c) {
      return c.innerHTML = '';
    });
    logEl.innerHTML = '';
    unitsById.clear();
    var _iterator = _createForOfIteratorHelper(REPLAY.initial),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var u0 = _step.value;
        var u = _objectSpread({}, u0);
        var el = document.createElement('div');
        el.className = "unit unit--".concat(u.team, " unit--").concat(u["class"]);
        // Portrait with per-unit bars under it
        el.innerHTML = "\n    <img src=\"".concat(full(u.img), "\" alt=\"\">\n    <div class=\"u-bars\">\n      <div class=\"u-bar u-bar--hp\"><span></span></div>\n      <div class=\"u-bar u-bar--mana\"><span></span></div>\n    </div>");
        var c = cell(u.x, u.y);
        if (c) c.appendChild(el);
        u.el = el;
        unitsById.set(u.id, u);
        updateBars(u);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    renderHUD();
  }
  function applyAction(a) {
    switch (a.t) {
      case 'fx':
        {
          try {
            var at = Array.isArray(a.at) ? a.at : null;
            if (!at) break;
            var c = cell(at[0], at[1]);
            if (!c) break;
            var kind = a.kind || 'default';
            var url = window.FX_URLS && window.FX_URLS[kind] || window.FX_URLS && window.FX_URLS["default"];
            if (!url) break;
            var fx = document.createElement('div');
            fx.className = 'fx fx--' + kind;
            var img = document.createElement('img');
            img.alt = kind;
            img.src = full(url);
            fx.appendChild(img);
            c.appendChild(fx);
            var dur = Math.max(200, Math.min(4000, parseInt(a.dur || 1000, 10)));
            setTimeout(function () {
              fx.remove();
            }, dur);
          } catch (_unused2) {/* ignore */}
          break;
        }
      case 'move':
        {
          var u = unitsById.get(a.id);
          if (!u) break;
          var to = cell(a.to[0], a.to[1]);
          if (!to) break;
          to.appendChild(u.el);
          u.x = a.to[0];
          u.y = a.to[1];
          break;
        }
      case 'attack':
        {
          var att = unitsById.get(a.att),
            def = unitsById.get(a.def);
          if (!att || !def) break;
          var prevHp = def.hp;
          def.hp = a.hp;
          def.shield = a.shield;
          if (a.mana !== undefined) att.mana = a.mana;
          updateBars(def);
          updateBars(att);
          // half HP crossing
          if (prevHp > 0 && def.hp > 0) {
            var wasAbove = prevHp > (def.maxHp || prevHp * 2) / 2;
            var nowBelow = def.hp <= (def.maxHp || prevHp * 2) / 2;
            if (wasAbove && nowBelow) {
              playSfx(window.SFX_HALFHP_URL, 0.7, 'half:' + def.id, 400);
            }
          }
          if (def.hp <= 0) {
            def.el.classList.add('ko');
            setTimeout(function () {
              return def.el.remove();
            }, 120);
            playSfx(window.SFX_DEATH_URL, 0.8, 'death', 150);
          }
          if (a.log) log(a.log);
          break;
        }
      case 'heal':
        {
          var _dst$hp, _a$amount;
          var src = unitsById.get(a.src),
            dst = unitsById.get(a.dst);
          if (!src || !dst) break;
          if (a.mana !== undefined) src.mana = a.mana;
          dst.hp = Math.min(dst.maxHp, ((_dst$hp = dst.hp) !== null && _dst$hp !== void 0 ? _dst$hp : 0) + ((_a$amount = a.amount) !== null && _a$amount !== void 0 ? _a$amount : 0));
          // heal SFX (crit if amount large and URL provided)
          var crit = a.crit === true || a.amount && dst.maxHp && a.amount >= 0.25 * dst.maxHp;
          var _url = crit && window.SFX_HEAL_CRIT_URL ? window.SFX_HEAL_CRIT_URL : window.SFX_HEAL_URL;
          playSfx(_url, crit ? 0.8 : 0.6, crit ? 'healcrit' : 'heal', 80);
          updateBars(src);
          updateBars(dst);
          if (a.log) log(a.log);
          break;
        }
      case 'log':
        if (a.msg) log(a.msg);
        break;
    }
  }
  function playTick() {
    var _REPLAY$actions;
    if (step >= (((_REPLAY$actions = REPLAY.actions) === null || _REPLAY$actions === void 0 ? void 0 : _REPLAY$actions.length) || 0)) {
      clearInterval(timer);
      timer = null;
      var outcome = REPLAY.winner === 'ally' ? 'victory' : REPLAY.winner === 'enemy' ? 'defeat' : 'draw';
      log(outcome === 'victory' ? 'Victoire !' : outcome === 'defeat' ? 'Défaite…' : 'Égalité !');
      // show overlay
      var ov = document.getElementById('result-overlay');
      var tx = document.getElementById('result-text');
      var btnC = document.getElementById('btn-result-continue');
      var btnS = document.getElementById('result-sound-toggle');
      if (ov && tx) {
        var _ov$querySelector;
        var playJingle = function playJingle(kind) {
          try {
            if (!audioEnabled) return;
            if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
            var now = ctx.currentTime;
            var notes = kind === 'victory' ? [523, 659, 784] : kind === 'defeat' ? [392, 349, 261] : [440, 440, 440];
            notes.forEach(function (f, i) {
              var o = ctx.createOscillator();
              var g = ctx.createGain();
              o.type = 'sine';
              o.frequency.value = f;
              o.connect(g);
              g.connect(ctx.destination);
              var t = now + i * 0.18;
              g.gain.setValueAtTime(0.001, t);
              g.gain.exponentialRampToValueAtTime(0.2, t + 0.02);
              g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
              o.start(t);
              o.stop(t + 0.32);
            });
          } catch (e) {
            console.debug('audio failed', e);
          }
        };
        ov.classList.remove('is-hidden');
        ov.classList.toggle('is-victory', outcome === 'victory');
        ov.classList.toggle('is-defeat', outcome === 'defeat');
        tx.textContent = outcome === 'victory' ? 'VICTOIRE' : outcome === 'defeat' ? 'DÉFAITE' : 'ÉGALITÉ';
        bgmFadeOut(1200);

        // Victory SFX (if provided)
        if (outcome === 'victory') {
          var sfxUrl = window.SFX_VICTORY_URL;
          if (sfxUrl) {
            try {
              var aud = new Audio(sfxUrl);
              aud.volume = 0.7;
              aud.loop = false;
              aud.play()["catch"](function () {});
            } catch (_) {/* ignore */}
          }
        } else if (outcome === 'defeat') {
          playSfx(window.SFX_DEFEAT_URL, 0.7, 'defeat', 200);
        }

        // Sound FX (WebAudio simple tones)
        var audioEnabled = false,
          ctx = null;
        if (btnS) {
          btnS.addEventListener('click', function () {
            audioEnabled = !audioEnabled;
            btnS.setAttribute('aria-pressed', audioEnabled ? 'true' : 'false');
            if (audioEnabled) {
              playJingle(outcome);
            }
          });
        }

        // Continue button or click anywhere on veil
        var hide = function hide() {
          return ov.classList.add('is-hidden');
        };
        if (btnC) btnC.addEventListener('click', hide, {
          once: true
        });
        (_ov$querySelector = ov.querySelector('.result-veil')) === null || _ov$querySelector === void 0 || _ov$querySelector.addEventListener('click', hide, {
          once: true
        });
      }
      return;
    }
    applyAction(REPLAY.actions[step++]);
    renderHUD();
  }
  btnStart.addEventListener('click', function () {
    if (!timer) {
      timer = setInterval(playTick, TICK_MS);
    }
    if (bgm) {
      bgmEnabled = true;
      if (btnMusic) btnMusic.setAttribute('aria-pressed', 'true');
      bgm.currentTime = 0;
      bgm.play().then(function () {
        return bgmFadeIn(450, 0.5);
      })["catch"](function (e) {
        console.debug('bgm play blocked', e);
      });
    }
  });
  btnPause.addEventListener('click', function () {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    bgmPause();
  });
  btnReset.addEventListener('click', function () {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    step = 0;
    spawnInitial();
    if (bgm) {
      bgmPause();
      bgm.currentTime = 0;
    }
  });
  spawnInitial();
});

/***/ }),

/***/ "./assets/JavaScript/team-builder.js":
/*!*******************************************!*\
  !*** ./assets/JavaScript/team-builder.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
__webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
__webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
__webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
__webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
__webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
__webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
__webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// team-builder.js

// base des assets fournie par Twig: window.ASSET_BASE = "{{ asset('') }}";

document.addEventListener('DOMContentLoaded', function () {
  var _window$REROLLS_LEFT;
  var ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
  var fullImg = function fullImg(p) {
    return ASSET_BASE + String(p || '').replace(/^\/+/, '');
  };
  console.log('Team Builder script loaded!', {
    ASSET_BASE: ASSET_BASE
  });
  var ownedEl = document.getElementById('owned-girls-json');
  var suggestedEl = document.getElementById('suggested-girls-json');
  if (!ownedEl) return;

  /** @type {Array} */
  var OWNED = JSON.parse(ownedEl.textContent || '[]');
  /** @type {Array} */
  var SUGGESTED = suggestedEl ? JSON.parse(suggestedEl.textContent || '[]') : [];
  var pickGrid = document.getElementById('pick-grid');
  var benchGrid = document.getElementById('bench-grid');
  var board = document.getElementById('board');
  var btnReroll = document.getElementById('btn-reroll');
  var rerollCountEl = document.getElementById('reroll-count');
  var btnLock = document.getElementById('btn-lock');
  var bonusList = document.getElementById('team-bonuses');
  var skeleton = document.getElementById('search-skeleton');
  var MAX_TEAM = 4;
  var placed = new Map(); // "x,y" -> { girl, el }
  var inBench = new Map(); // girlId -> cardElement

  // helpers
  var randInt = function randInt(n) {
    return Math.floor(Math.random() * n);
  };
  var pickN = function pickN(arr, n) {
    var pool = _toConsumableArray(arr),
      out = [];
    while (out.length < Math.min(n, pool.length)) {
      out.push(pool.splice(randInt(pool.length), 1)[0]);
    }
    return out;
  };
  var cellKey = function cellKey(x, y) {
    return "".concat(x, ",").concat(y);
  };

  // ---- UI renderers ----
  function renderCard(girl, _ref) {
    var _girl$family, _girl$chance_atk;
    var source = _ref.source;
    var card = document.createElement('div');
    card.className = "tb-card tb-card--".concat(girl["class"]);
    card.draggable = true;
    card.dataset.id = girl.id;
    card.dataset.source = source;
    card.innerHTML = "\n      <div class=\"tb-card__img\">\n        <img src=\"".concat(fullImg(girl.img), "\" alt=\"").concat(girl.name, "\">\n      </div>\n      <div class=\"tb-card__meta\">\n        <div class=\"tb-card__name\">").concat(girl.name, "</div>\n        <div class=\"tb-card__tags\">\n          <span class=\"tag ").concat(classTag(girl["class"]), "\">").concat(classLabel(girl["class"]), "</span>\n          <span class=\"tag tag-family\">").concat((_girl$family = girl.family) !== null && _girl$family !== void 0 ? _girl$family : '', "</span>\n        </div>\n      </div>\n      <div class=\"tb-card__stats\">\n        <span>PV ").concat(girl.pdv, "</span>\n        <span>ATK ").concat(girl.atk, "</span>\n        <span>PRC ").concat(Math.round(((_girl$chance_atk = girl.chance_atk) !== null && _girl$chance_atk !== void 0 ? _girl$chance_atk : 0) * 100), "%</span>\n      </div>\n    ");
    card.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('text/plain', JSON.stringify(girl));
      requestAnimationFrame(function () {
        return card.classList.add('dragging');
      });
    });
    card.addEventListener('dragend', function () {
      return card.classList.remove('dragging');
    });

    // double-clic -> toggle banc
    card.addEventListener('dblclick', function () {
      // Toggle banc: si déjà dans le banc -> on le laisse affiché mais on le marque comme non-préservé
      if (card.parentElement === benchGrid) {
        // Retrait du banc: on le remet dans son conteneur source si possible, sinon on le supprime proprement
        inBench["delete"](girl.id);
        // Déplacer la carte vers la zone de pick pour la rendre rerollable
        if (pickGrid) pickGrid.appendChild(card);else card.remove();
      } else {
        // Ajout au banc
        benchGrid.appendChild(card);
        inBench.set(girl.id, card);
      }
      updateLockState();
    });
    return card;
  }
  function makeChip(girl) {
    var chip = document.createElement('div');
    chip.className = "chip ".concat(classTag(girl["class"]));
    chip.title = girl.name;
    chip.draggable = true;
    chip.innerHTML = "<img src=\"".concat(fullImg(girl.img), "\" alt=\"").concat(girl.name, "\"><span>").concat(girl.name, "</span>");
    chip.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('text/plain', JSON.stringify(girl));
      requestAnimationFrame(function () {
        return chip.classList.add('dragging');
      });
    });
    chip.addEventListener('dragend', function () {
      return chip.classList.remove('dragging');
    });
    chip.addEventListener('click', function () {
      var _chip$parentElement;
      var cell = (_chip$parentElement = chip.parentElement) === null || _chip$parentElement === void 0 ? void 0 : _chip$parentElement.closest('.cell');
      if (cell) {
        var key = cellKey(cell.dataset.x, cell.dataset.y);
        placed["delete"](key);
        cell.innerHTML = '';
      }
      if (!inBench.has(girl.id)) {
        var card = renderCard(girl, {
          source: 'bench'
        });
        benchGrid.appendChild(card);
        inBench.set(girl.id, card);
      }
      updateLockState();
    });
    return chip;
  }
  function renderPick() {
    pickGrid.innerHTML = '';
    var pool = SUGGESTED.length ? _toConsumableArray(SUGGESTED) : _toConsumableArray(OWNED);
    if (pool.length === 0) return;

    // on duplique si < 4
    while (pool.length < 4) pool = pool.concat(pool);

    // Exclure ceux déjà au banc (préservés) du tirage
    var preservedIds = new Set(Array.from(inBench.keys()));
    var pool2 = pool.filter(function (g) {
      return !preservedIds.has(g.id);
    });

    // Sélectionne jusqu'à 4 suggestions uniques parmi le pool restant
    var picks = [];
    var taken = new Set();
    var target = Math.min(4, pool2.length);
    while (picks.length < target && taken.size < pool2.length) {
      var i = Math.floor(Math.random() * pool2.length);
      if (!taken.has(i)) {
        taken.add(i);
        picks.push(pool2[i]);
      }
    }
    picks.forEach(function (g) {
      return pickGrid.appendChild(renderCard(g, {
        source: 'pick'
      }));
    });
  }
  function classTag(cls) {
    switch (cls) {
      case 'dps_melee':
        return 'tag-melee';
      case 'dps_ranged':
        return 'tag-ranged';
      case 'tank':
        return 'tag-tank';
      case 'healer':
        return 'tag-heal';
      default:
        return '';
    }
  }
  function classLabel(cls) {
    switch (cls) {
      case 'dps_melee':
        return 'DPS CàC';
      case 'dps_ranged':
        return 'DPS distance';
      case 'tank':
        return 'Tank';
      case 'healer':
        return 'Healer';
      default:
        return cls;
    }
  }

  // ---- DnD board ----
  board.addEventListener('dragover', function (e) {
    return e.preventDefault();
  });
  board.addEventListener('drop', function (e) {
    e.preventDefault();
    var cell = e.target.closest('.cell');
    if (!cell) return;
    var _cell$dataset = cell.dataset,
      x = _cell$dataset.x,
      y = _cell$dataset.y;
    var key = cellKey(x, y);
    var dragging = document.querySelector('.tb-card.dragging, .chip.dragging');
    if (!dragging) return;
    var girl = JSON.parse(e.dataTransfer.getData('text/plain') || '{}');

    // si même héro déjà placé ailleurs -> libère l’ancienne cellule
    var _iterator = _createForOfIteratorHelper(placed),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];
        if (v.girl.id === girl.id) {
          placed["delete"](k);
          var oldCell = board.querySelector(".cell[data-x=\"".concat(k.split(',')[0], "\"][data-y=\"").concat(k.split(',')[1], "\"]"));
          if (oldCell) oldCell.innerHTML = '';
        }
      }

      // limite équipe
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!placed.has(key) && placed.size >= MAX_TEAM) return;

    // swap si la cellule était occupée
    if (placed.has(key)) {
      var existing = placed.get(key);
      if (existing !== null && existing !== void 0 && existing.el) {
        benchGrid.appendChild(renderCard(existing.girl, {
          source: 'bench'
        }));
        inBench.set(existing.girl.id, benchGrid.lastElementChild);
      }
      placed["delete"](key);
    }
    var chip = makeChip(girl);
    cell.innerHTML = '';
    cell.appendChild(chip);
    placed.set(key, {
      girl: girl,
      el: chip
    });
    updateLockState();
  });

  // ---- DnD bench ----
  benchGrid.addEventListener('dragover', function (e) {
    return e.preventDefault();
  });
  benchGrid.addEventListener('drop', function (e) {
    e.preventDefault();
    var girl = JSON.parse(e.dataTransfer.getData('text/plain') || '{}');

    // retire du board si présente
    var _iterator2 = _createForOfIteratorHelper(placed),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          k = _step2$value[0],
          v = _step2$value[1];
        if (v.girl.id === girl.id) {
          var c = board.querySelector(".cell[data-x=\"".concat(k.split(',')[0], "\"][data-y=\"").concat(k.split(',')[1], "\"]"));
          if (c) c.innerHTML = '';
          placed["delete"](k);
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!inBench.has(girl.id)) {
      var card = renderCard(girl, {
        source: 'bench'
      });
      benchGrid.appendChild(card);
      inBench.set(girl.id, card);
    }
    updateLockState();
  });

  // ---- actions ----
  var ticketId = null;
  var pollTimer = null;
  btnLock.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var _window$MM$start, _window$MM, _window$MM$status, _window$MM2;
    var lineup, START_URL, STATUS_TPL, statusUrl, res, text, data, _data$error, _data, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (skeleton) {
            skeleton.classList.remove('is-hidden');
            skeleton.classList.add('is-visible');
          }
          // build payload
          lineup = Array.from(placed.entries()).map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              val = _ref4[1];
            var _key$split$map = key.split(',').map(Number),
              _key$split$map2 = _slicedToArray(_key$split$map, 2),
              x = _key$split$map2[0],
              y = _key$split$map2[1];
            return {
              id: val.girl.id,
              x: x,
              y: y
            };
          });
          START_URL = (_window$MM$start = (_window$MM = window.MM) === null || _window$MM === void 0 ? void 0 : _window$MM.start) !== null && _window$MM$start !== void 0 ? _window$MM$start : '/matchmaking/start';
          STATUS_TPL = (_window$MM$status = (_window$MM2 = window.MM) === null || _window$MM2 === void 0 ? void 0 : _window$MM2.status) !== null && _window$MM$status !== void 0 ? _window$MM$status : '/matchmaking/status/__ID__';
          statusUrl = function statusUrl(id) {
            return STATUS_TPL.replace('__ID__', String(id));
          };
          console.log('Calling START_URL =', START_URL);
          _context2.p = 1;
          _context2.n = 2;
          return fetch(START_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({
              lineup: lineup
            })
          });
        case 2:
          res = _context2.v;
          _context2.n = 3;
          return res.text();
        case 3:
          text = _context2.v;
          try {
            data = JSON.parse(text);
          } catch (_unused) {
            data = null;
          }
          console.log('matchmaking/start ->', res.status, data !== null && data !== void 0 ? data : text);
          if (res.ok) {
            _context2.n = 4;
            break;
          }
          alert("Matchmaking failed (".concat(res.status, "):\n").concat((_data$error = (_data = data) === null || _data === void 0 ? void 0 : _data.error) !== null && _data$error !== void 0 ? _data$error : text));
          return _context2.a(2);
        case 4:
          if (!(!data || data.status !== 'matched' && data.status !== 'queued')) {
            _context2.n = 5;
            break;
          }
          alert('Réponse inattendue:\n' + (data ? JSON.stringify(data) : text));
          return _context2.a(2);
        case 5:
          if (!(data.status === 'matched')) {
            _context2.n = 6;
            break;
          }
          window.location.href = "/match/".concat(data.matchId);
          return _context2.a(2);
        case 6:
          // queued -> poll status
          ticketId = data.ticketId;
          btnLock.disabled = true;
          btnLock.textContent = '🔎 Recherche en cours…';
          pollTimer = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
            var r, j;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.n = 1;
                  return fetch(statusUrl(ticketId), {
                    credentials: 'same-origin'
                  });
                case 1:
                  r = _context.v;
                  _context.n = 2;
                  return r.json();
                case 2:
                  j = _context.v;
                  console.log('matchmaking/status ->', j);
                  if (j.status === 'matched') {
                    clearInterval(pollTimer);
                    if (skeleton) {
                      skeleton.classList.remove('is-visible');
                      skeleton.classList.add('is-hidden');
                    }
                    window.location.href = "/match/".concat(j.matchId);
                  }
                case 3:
                  return _context.a(2);
              }
            }, _callee);
          })), 5000);
          _context2.n = 8;
          break;
        case 7:
          _context2.p = 7;
          _t = _context2.v;
          console.error(_t);
          alert('Erreur réseau: ' + _t.message);
          if (skeleton) {
            skeleton.classList.remove('is-visible');
            skeleton.classList.add('is-hidden');
          }
        case 8:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 7]]);
  })));
  function updateLockState() {
    btnLock.disabled = placed.size !== MAX_TEAM;
    renderBonuses();
  }

  // --- Synergy computation (client-side mirror of server tiers) ---
  function computeBonuses() {
    var counts = {}; // family -> count
    var _iterator3 = _createForOfIteratorHelper(placed),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
          girl = _step3$value[1].girl;
        var _fam = (girl.family || '').toLowerCase();
        if (!_fam) continue;
        counts[_fam] = (counts[_fam] || 0) + 1;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var tiers = {};
    for (var _i = 0, _Object$entries = Object.entries(counts); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        fam = _Object$entries$_i[0],
        n = _Object$entries$_i[1];
      var tier = n >= 4 ? 4 : n >= 3 ? 3 : n >= 2 ? 2 : 0;
      if (tier === 0) continue;
      tiers[fam] = {
        n: n,
        tier: tier
      };
    }
    return tiers;
  }
  function renderBonuses() {
    if (!bonusList) return;
    var tiers = computeBonuses();
    bonusList.innerHTML = '';
    var label = function label(fam, tier, n) {
      var map = {
        soleil: {
          2: 'ATK +5%',
          3: 'Précision +5%',
          4: 'Crit +5%'
        },
        lune: {
          2: 'Esquive +3%',
          3: 'Esquive +2% & Mana +10',
          4: 'Bouclier +10'
        },
        nature: {
          2: 'PV +5%',
          3: 'Bouclier +15',
          4: 'PV +5%'
        },
        idole: {
          2: 'Crit +5%',
          3: 'ATK +5%',
          4: 'Mana +10'
        },
        ombre: {
          2: 'Esquive +5%',
          3: 'Précision +5%',
          4: 'Bouclier +15'
        },
        arcane: {
          2: 'Précision +5%',
          3: 'Mana +15',
          4: 'Crit +5%'
        },
        etoile: {
          2: 'Précision +3%',
          3: 'Crit +5%',
          4: 'ATK +5%'
        },
        ocean: {
          2: 'Esquive +3%',
          3: 'Mana +10',
          4: 'Précision +5%'
        }
      };
      var effect = map[fam] && map[fam][tier] ? map[fam][tier] : "Palier ".concat(tier);
      var title = fam.charAt(0).toUpperCase() + fam.slice(1);
      return "".concat(title, " x").concat(n, " \u2014 ").concat(effect);
    };
    var ICON = {
      soleil: '☀️',
      lune: '🌙',
      nature: '🍃',
      idole: '🎵',
      ombre: '🌑',
      arcane: '✨',
      etoile: '⭐',
      ocean: '🌊'
    };
    Object.entries(tiers).forEach(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
        fam = _ref7[0],
        _ref7$ = _ref7[1],
        tier = _ref7$.tier,
        n = _ref7$.n;
      var li = document.createElement('li');
      li.className = "bonus-item fam-".concat(fam, " tier-").concat(tier);
      var title = fam.charAt(0).toUpperCase() + fam.slice(1);
      var effectText = label(fam, tier, n).split(' — ').pop();
      var pct = Math.min(100, Math.round(n / 4 * 100));
      li.innerHTML = "\n        <span class=\"fam-icon\" aria-hidden=\"true\">".concat(ICON[fam] || '✧', "</span>\n        <span class=\"fam-name\">").concat(title, "</span>\n        <span class=\"count\">x").concat(n, "</span>\n        <div class=\"gauge\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"4\" aria-valuenow=\"").concat(n, "\">\n          <div class=\"bar\" style=\"width:").concat(pct, "%\"></div>\n        </div>\n        <span class=\"effect\">").concat(effectText, "</span>\n      ");
      bonusList.appendChild(li);
    });
  }

  // init
  renderPick();
  renderBonuses();

  // --- Reroll limité à 3 ---
  var rerollsLeft = Number((_window$REROLLS_LEFT = window.REROLLS_LEFT) !== null && _window$REROLLS_LEFT !== void 0 ? _window$REROLLS_LEFT : 3);
  var updateRerollUI = function updateRerollUI() {
    if (rerollCountEl) rerollCountEl.textContent = "(".concat(rerollsLeft, " restant").concat(rerollsLeft > 1 ? 's' : '', ")");
    if (btnReroll) btnReroll.disabled = rerollsLeft <= 0;
  };
  updateRerollUI();
  if (btnReroll) {
    btnReroll.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _data$left, res, data, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(rerollsLeft <= 0)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            _context3.n = 2;
            return fetch(window.REROLL_DEC_URL, {
              method: 'POST',
              credentials: 'same-origin'
            });
          case 2:
            res = _context3.v;
            _context3.n = 3;
            return res.json();
          case 3:
            data = _context3.v;
            rerollsLeft = Number((_data$left = data === null || data === void 0 ? void 0 : data.left) !== null && _data$left !== void 0 ? _data$left : rerollsLeft);
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t2 = _context3.v;
          case 5:
            updateRerollUI();
            renderPick(); // pas de reload -> pas de clignotement
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 4]]);
    })));
  }
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _JavaScript_team_builder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JavaScript/team-builder.js */ "./assets/JavaScript/team-builder.js");
/* harmony import */ var _JavaScript_team_builder_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_JavaScript_team_builder_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _JavaScript_Inscription_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JavaScript/Inscription.js */ "./assets/JavaScript/Inscription.js");
/* harmony import */ var _JavaScript_Inscription_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_JavaScript_Inscription_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _JavaScript_home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JavaScript/home.js */ "./assets/JavaScript/home.js");
/* harmony import */ var _JavaScript_home_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_JavaScript_home_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _JavaScript_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JavaScript/match.js */ "./assets/JavaScript/match.js");
/* harmony import */ var _JavaScript_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_JavaScript_match_js__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */





console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_at_js-node_modules_core-js_modules_es_array_con-984b56"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRXhWLElBQUksY0FBQTBaLFVBQUEsY0FBQUEsVUFBQSxHQUFJSixXQUFXLENBQUM7WUFBQ00sU0FBQSxDQUFBN1IsQ0FBQTtZQUFBO1VBQUE7WUFBQTZSLFNBQUEsQ0FBQWhaLENBQUE7WUFBQStZLEdBQUEsR0FBQUMsU0FBQSxDQUFBck0sQ0FBQTtVQUFBO1lBRWxEaU0sY0FBYyxDQUFDLENBQUM7WUFDaEJsRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFBQTtZQUFBLE9BQUFzRyxTQUFBLENBQUF4UyxDQUFBO1FBQUE7TUFBQSxHQUFBcVMsUUFBQTtJQUFBLENBQ2YsR0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9YRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7QUFDVztBQUNEO0FBQ1A7QUFDQztBQUUvQnZaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ2I3RSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvbWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvdGVhbS1idWlsZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvSmF2YVNjcmlwdC9yZWdpc3Rlci5qc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhc3MxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyX3R5cGVfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0Jyk7XHJcbiAgY29uc3QgcGFzczIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJfdHlwZV9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJyk7XHJcbiAgY29uc3QgcmVnaXN0ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItYnRuJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrUGFzc3dvcmRzKCkge1xyXG4gICAgaWYgKHBhc3MxLnZhbHVlICYmIHBhc3MxLnZhbHVlID09PSBwYXNzMi52YWx1ZSkge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVnaXN0ZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHBhc3MxICYmIHBhc3MyICYmIHJlZ2lzdGVyQnRuKSB7XHJcbiAgICBwYXNzMS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrUGFzc3dvcmRzKTtcclxuICAgIHBhc3MyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tQYXNzd29yZHMpO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21nLXJvc3Rlci10cmFjaycpO1xyXG4gIGlmICghdHJhY2spIHJldHVybjtcclxuXHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1wcmV2Jyk7XHJcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1uZXh0Jyk7XHJcbiAgY29uc3Qgc3RlcCA9IDI4MDsgLy8gcHggcGFyIGNsaWNcclxuXHJcbiAgY29uc3Qgc2Nyb2xsQnkgPSAoZGVsdGEpID0+IHRyYWNrLnNjcm9sbEJ5KHsgbGVmdDogZGVsdGEsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcbiAgcHJldj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGxCeSgtc3RlcCkpO1xyXG4gIG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsQnkoc3RlcCkpO1xyXG59KTtcclxuY29uc29sZS5sb2coJ2hvbWUuanMnKTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLW1hdGNoJykpIHJldHVybjtcclxuXHJcbiAgY29uc3QgQVNTRVRfQkFTRSA9ICh3aW5kb3cuQVNTRVRfQkFTRSB8fCAnLycpLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcclxuICBjb25zdCBmdWxsID0gKHApID0+IEFTU0VUX0JBU0UgKyBTdHJpbmcocCB8fCAnJykucmVwbGFjZSgvXlxcLysvLCAnJyk7XHJcblxyXG4gIGNvbnN0IGJvYXJkICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XHJcbiAgY29uc3QgbG9nRWwgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlLWxvZycpO1xyXG4gIGNvbnN0IGh1ZEEgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZC1hbGxpZXMnKTtcclxuICBjb25zdCBodWRFICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWQtZW5lbWllcycpO1xyXG4gIGNvbnN0IGJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdGFydCcpO1xyXG4gIGNvbnN0IGJ0blBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wYXVzZScpO1xyXG4gIGNvbnN0IGJ0blJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXNldCcpO1xyXG4gIGNvbnN0IGJ0bk11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1tdXNpYycpO1xyXG5cclxuICBpZiAoIWJvYXJkIHx8ICFsb2dFbCB8fCAhaHVkQSB8fCAhaHVkRSB8fCAhYnRuU3RhcnQgfHwgIWJ0blBhdXNlIHx8ICFidG5SZXNldCkge1xyXG4gICAgY29uc29sZS53YXJuKCdNYXRjaCBVSSBtaXNzaW5nJywgeyBib2FyZCwgbG9nRWwsIGh1ZEEsIGh1ZEUsIGJ0blN0YXJ0LCBidG5QYXVzZSwgYnRuUmVzZXQgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBSRVBMQVkgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBsYXktanNvbicpPy50ZXh0Q29udGVudCB8fCAne30nKTtcclxuICBpZiAoIVJFUExBWSB8fCAhQXJyYXkuaXNBcnJheShSRVBMQVkuaW5pdGlhbCkpIHsgY29uc29sZS53YXJuKCdObyByZXBsYXkgcHJvdmlkZWQnKTsgcmV0dXJuOyB9XHJcbiAgY29uc29sZS5kZWJ1ZygnUkVQTEFZOicsIFJFUExBWSxcclxuICAgICAgICAgICAgICAgICdhbGx5Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdhbGx5JykubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgJ2VuZW15Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdlbmVteScpLmxlbmd0aCk7XHJcblxyXG4gIGNvbnN0IHVuaXRzQnlJZCA9IG5ldyBNYXAoKTsgLy8gaWQgLT4gcnVudGltZSB1bml0XHJcbiAgbGV0IHRpbWVyID0gbnVsbCwgc3RlcCA9IDA7XHJcbiAgY29uc3QgVElDS19NUyA9IDQwMDtcclxuXHJcbiAgLy8gLS0tIEJhY2tncm91bmQgbXVzaWMgKEJHTSkgLS0tXHJcbiAgbGV0IGJnbSA9IG51bGwsIGJnbUVuYWJsZWQgPSB0cnVlLCBiZ21GYWRpbmcgPSBmYWxzZTtcclxuICBjb25zdCBiZ21VcmwgPSB3aW5kb3cuQkdNX1VSTDtcclxuICBpZiAoYmdtVXJsKSB7XHJcbiAgICBiZ20gPSBuZXcgQXVkaW8oYmdtVXJsKTtcclxuICAgIGJnbS5sb29wID0gdHJ1ZTtcclxuICAgIGJnbS5wcmVsb2FkID0gJ2F1dG8nO1xyXG4gICAgYmdtLnZvbHVtZSA9IDAuMDsgLy8gc3RhcnQgc2lsZW50LCBmYWRlIGluIG9uIFN0YXJ0XHJcbiAgfVxyXG4gIGlmIChidG5NdXNpYykge1xyXG4gICAgaWYgKCFiZ20pIHsgYnRuTXVzaWMuZGlzYWJsZWQgPSB0cnVlOyBidG5NdXNpYy50aXRsZSA9ICdBdWN1bmUgbXVzaXF1ZSBkaXNwb25pYmxlJzsgfVxyXG4gICAgYnRuTXVzaWMuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBiZ21FbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgICBidG5NdXNpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYmdtRW5hYmxlZCA9ICFiZ21FbmFibGVkO1xyXG4gICAgICBidG5NdXNpYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGJnbUVuYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcclxuICAgICAgaWYgKCFiZ20pIHJldHVybjtcclxuICAgICAgaWYgKGJnbUVuYWJsZWQpIHsgYmdtLnBsYXkoKS5jYXRjaCgoKT0+e30pOyB9IGVsc2UgeyBiZ20ucGF1c2UoKTsgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGJnbVBsYXkoKXsgaWYgKCFiZ20gfHwgIWJnbUVuYWJsZWQpIHJldHVybjsgYmdtRmFkaW5nPWZhbHNlOyBiZ20ucGxheSgpLmNhdGNoKChlKT0+eyBjb25zb2xlLmRlYnVnKCdiZ20gcGxheSBmYWlsZWQnLCBlKTsgfSk7IH1cclxuICBmdW5jdGlvbiBiZ21QYXVzZSgpeyBpZiAoIWJnbSkgcmV0dXJuOyBiZ20ucGF1c2UoKTsgfVxyXG4gIGZ1bmN0aW9uIGJnbUZhZGVPdXQobXM9OTAwKXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZyA9IHRydWU7IGNvbnN0IHN0YXJ0ID0gYmdtLnZvbHVtZTsgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIGNvbnN0IHN0ZXBGbiA9IChub3cpID0+IHtcclxuICAgICAgaWYgKCFiZ21GYWRpbmcpIHJldHVybjtcclxuICAgICAgY29uc3QgayA9IE1hdGgubWluKDEsIChub3cgLSB0MCkgLyBtcyk7XHJcbiAgICAgIGJnbS52b2x1bWUgPSBzdGFydCAqICgxIC0gayk7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7IGVsc2UgeyBiZ20ucGF1c2UoKTsgYmdtLnZvbHVtZSA9IHN0YXJ0OyBiZ21GYWRpbmcgPSBmYWxzZTsgfVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwRm4pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBiZ21GYWRlSW4obXM9NTAwLCB0YXJnZXQ9MC41KXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZz1mYWxzZTsgY29uc3Qgc3RhcnQgPSBiZ20udm9sdW1lOyBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgY29uc3Qgc3RlcEZuID0gKG5vdykgPT4ge1xyXG4gICAgICBjb25zdCBrID0gTWF0aC5taW4oMSwgKG5vdyAtIHQwKSAvIG1zKTtcclxuICAgICAgYmdtLnZvbHVtZSA9IHN0YXJ0ICsgKHRhcmdldCAtIHN0YXJ0KSAqIGs7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjZWxsID0gKHgseSkgPT4gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZyhtc2cpeyBpZighbXNnKXJldHVybjsgY29uc3QgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZC50ZXh0Q29udGVudD1tc2c7XHJcbiAgICBsb2dFbC5hcHBlbmRDaGlsZChkKTsgbG9nRWwuc2Nyb2xsVG9wPWxvZ0VsLnNjcm9sbEhlaWdodDsgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJIVUQoKXtcclxuICAgIGNvbnN0IGxpc3QgPSAodGVhbSkgPT4gWy4uLnVuaXRzQnlJZC52YWx1ZXMoKV0uZmlsdGVyKHU9PnUudGVhbT09PXRlYW0pXHJcbiAgICAgIC5tYXAodT0+YDxsaT48aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCI+PHNwYW4+JHt1Lm5hbWV9PC9zcGFuPjxlbT4ke3UuaHB9IFBWJHt1LnNoaWVsZD4wPycg4oCiIPCfm6EnK3Uuc2hpZWxkOicnfSR7dS5tYW5hPjA/JyDigKIg8J+UtycrdS5tYW5hOicnfTwvZW0+PC9saT5gKS5qb2luKCcnKTtcclxuICAgIGh1ZEEuaW5uZXJIVE1MID0gbGlzdCgnYWxseScpOyBodWRFLmlubmVySFRNTCA9IGxpc3QoJ2VuZW15Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVCYXJzKHUpe1xyXG4gICAgY29uc3QgaHA9dS5lbC5xdWVyeVNlbGVjdG9yKCcuaHAnKTsgaWYoaHApeyBocC50ZXh0Q29udGVudCA9IHUuaHA7IH1cclxuICAgIGNvbnN0IHNoPXUuZWwucXVlcnlTZWxlY3RvcignLnNoaWVsZCcpOyBpZihzaCl7IHNoLnRleHRDb250ZW50PXUuc2hpZWxkOyBzaC5zdHlsZS5kaXNwbGF5PXUuc2hpZWxkPjA/Jyc6J25vbmUnOyB9XHJcbiAgICBjb25zdCBtYT11LmVsLnF1ZXJ5U2VsZWN0b3IoJy5tYW5hJyk7ICAgaWYobWEpeyBtYS50ZXh0Q29udGVudD11Lm1hbmE7ICAgbWEuc3R5bGUuZGlzcGxheT11Lm1hbmE+MD8nJzonbm9uZSc7IH1cclxuICAgIC8vIFBlci11bml0IGJhcnMgb24gdGhlIGJvYXJkXHJcbiAgICBjb25zdCBocEZpbGwgPSB1LmVsLnF1ZXJ5U2VsZWN0b3IoJy51LWJhci0taHAgPiBzcGFuJyk7XHJcbiAgICBjb25zdCBtYUZpbGwgPSB1LmVsLnF1ZXJ5U2VsZWN0b3IoJy51LWJhci0tbWFuYSA+IHNwYW4nKTtcclxuICAgIGlmKGhwRmlsbCl7XHJcbiAgICAgIGNvbnN0IG1heEhwID0gTWF0aC5tYXgoMSwgdS5tYXhIcCB8fCB1LmhwIHx8IDEpO1xyXG4gICAgICBjb25zdCBjdXJIcCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heEhwLCB1LmhwIHx8IDApKTtcclxuICAgICAgaHBGaWxsLnN0eWxlLndpZHRoID0gTWF0aC5yb3VuZCgxMDAgKiBjdXJIcCAvIG1heEhwKSArICclJztcclxuICAgIH1cclxuICAgIGlmKG1hRmlsbCl7XHJcbiAgICAgIGNvbnN0IG1heE1hbmEgPSA1MDtcclxuICAgICAgY29uc3QgY3VyTWFuYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heE1hbmEsIHUubWFuYSB8fCAwKSk7XHJcbiAgICAgIG1hRmlsbC5zdHlsZS53aWR0aCA9IE1hdGgucm91bmQoMTAwICogY3VyTWFuYSAvIG1heE1hbmEpICsgJyUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gKGdsb2JhbCBnYXVnZXMgcmVtb3ZlZClcclxuXHJcbiAgLy8gLS0tIFNGWCBoZWxwZXIgd2l0aCBsaWdodCB0aHJvdHRsaW5nIC0tLVxyXG4gIGNvbnN0IGxhc3RTZnhBdCA9IG5ldyBNYXAoKTtcclxuICBmdW5jdGlvbiBwbGF5U2Z4KHVybCwgdm9sPTAuNywga2V5PXVybCwgbWluR2FwTXM9MTIwKXtcclxuICAgIHRyeXtcclxuICAgICAgaWYoIXVybCkgcmV0dXJuOyBjb25zdCBub3c9cGVyZm9ybWFuY2Uubm93KCk7IGNvbnN0IGxhc3Q9bGFzdFNmeEF0LmdldChrZXkpfHwwOyBpZihub3ctbGFzdDxtaW5HYXBNcykgcmV0dXJuO1xyXG4gICAgICBsYXN0U2Z4QXQuc2V0KGtleSwgbm93KTtcclxuICAgICAgY29uc3QgYSA9IG5ldyBBdWRpbyh1cmwpOyBhLnZvbHVtZT12b2w7IGEucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcbiAgICB9Y2F0Y2h7IC8qIGlnbm9yZSAqLyB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkluaXRpYWwoKXtcclxuICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykuZm9yRWFjaChjPT5jLmlubmVySFRNTD0nJyk7IGxvZ0VsLmlubmVySFRNTD0nJzsgdW5pdHNCeUlkLmNsZWFyKCk7XHJcbiAgICBmb3IoY29uc3QgdTAgb2YgUkVQTEFZLmluaXRpYWwpe1xyXG4gICAgICBjb25zdCB1ID0gey4uLnUwfTtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZWwuY2xhc3NOYW1lID0gYHVuaXQgdW5pdC0tJHt1LnRlYW19IHVuaXQtLSR7dS5jbGFzc31gO1xyXG4gIC8vIFBvcnRyYWl0IHdpdGggcGVyLXVuaXQgYmFycyB1bmRlciBpdFxyXG4gIGVsLmlubmVySFRNTCA9IGBcclxuICAgIDxpbWcgc3JjPVwiJHtmdWxsKHUuaW1nKX1cIiBhbHQ9XCJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ1LWJhcnNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInUtYmFyIHUtYmFyLS1ocFwiPjxzcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInUtYmFyIHUtYmFyLS1tYW5hXCI+PHNwYW4+PC9zcGFuPjwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgICAgY29uc3QgYyA9IGNlbGwodS54LCB1LnkpOyBpZiAoYykgYy5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIHUuZWwgPSBlbDsgdW5pdHNCeUlkLnNldCh1LmlkLCB1KTsgdXBkYXRlQmFycyh1KTtcclxuICAgIH1cclxuICByZW5kZXJIVUQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGx5QWN0aW9uKGEpe1xyXG4gICAgc3dpdGNoKGEudCl7XHJcbiAgICAgIGNhc2UgJ2Z4Jzoge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgIGNvbnN0IGF0ID0gQXJyYXkuaXNBcnJheShhLmF0KSA/IGEuYXQgOiBudWxsOyBpZighYXQpIGJyZWFrO1xyXG4gICAgICAgICAgY29uc3QgYyA9IGNlbGwoYXRbMF0sIGF0WzFdKTsgaWYoIWMpIGJyZWFrO1xyXG4gICAgICAgICAgY29uc3Qga2luZCA9IGEua2luZCB8fCAnZGVmYXVsdCc7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSAod2luZG93LkZYX1VSTFMgJiYgd2luZG93LkZYX1VSTFNba2luZF0pIHx8ICh3aW5kb3cuRlhfVVJMUyAmJiB3aW5kb3cuRlhfVVJMUy5kZWZhdWx0KTtcclxuICAgICAgICAgIGlmKCF1cmwpIGJyZWFrO1xyXG4gICAgICAgICAgY29uc3QgZnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZnguY2xhc3NOYW1lID0gJ2Z4IGZ4LS0nK2tpbmQ7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgaW1nLmFsdCA9IGtpbmQ7IGltZy5zcmMgPSBmdWxsKHVybCk7XHJcbiAgICAgICAgICBmeC5hcHBlbmRDaGlsZChpbWcpOyBjLmFwcGVuZENoaWxkKGZ4KTtcclxuICAgICAgICAgIGNvbnN0IGR1ciA9IE1hdGgubWF4KDIwMCwgTWF0aC5taW4oNDAwMCwgcGFyc2VJbnQoYS5kdXJ8fDEwMDAsMTApKSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57IGZ4LnJlbW92ZSgpOyB9LCBkdXIpO1xyXG4gICAgICAgIH1jYXRjaHsgLyogaWdub3JlICovIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdtb3ZlJzoge1xyXG4gICAgICAgIGNvbnN0IHU9dW5pdHNCeUlkLmdldChhLmlkKTsgaWYoIXUpYnJlYWs7XHJcbiAgICAgICAgY29uc3QgdG89Y2VsbChhLnRvWzBdLGEudG9bMV0pOyBpZighdG8pYnJlYWs7XHJcbiAgdG8uYXBwZW5kQ2hpbGQodS5lbCk7IHUueD1hLnRvWzBdOyB1Lnk9YS50b1sxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdhdHRhY2snOiB7XHJcbiAgICAgICAgY29uc3QgYXR0PXVuaXRzQnlJZC5nZXQoYS5hdHQpLCBkZWY9dW5pdHNCeUlkLmdldChhLmRlZik7IGlmKCFhdHR8fCFkZWYpYnJlYWs7XHJcbiAgICAgICAgY29uc3QgcHJldkhwID0gZGVmLmhwO1xyXG4gICAgICAgIGRlZi5ocD1hLmhwOyBkZWYuc2hpZWxkPWEuc2hpZWxkOyBpZihhLm1hbmEhPT11bmRlZmluZWQpIGF0dC5tYW5hPWEubWFuYTtcclxuICB1cGRhdGVCYXJzKGRlZik7IHVwZGF0ZUJhcnMoYXR0KTtcclxuICAgICAgICAvLyBoYWxmIEhQIGNyb3NzaW5nXHJcbiAgICAgICAgaWYocHJldkhwPjAgJiYgZGVmLmhwPjApe1xyXG4gICAgICAgICAgY29uc3Qgd2FzQWJvdmUgPSBwcmV2SHAgPiAoZGVmLm1heEhwfHxwcmV2SHAqMikvMjtcclxuICAgICAgICAgIGNvbnN0IG5vd0JlbG93ID0gZGVmLmhwIDw9IChkZWYubWF4SHB8fHByZXZIcCoyKS8yO1xyXG4gICAgICAgICAgaWYod2FzQWJvdmUgJiYgbm93QmVsb3cpeyBwbGF5U2Z4KHdpbmRvdy5TRlhfSEFMRkhQX1VSTCwgMC43LCAnaGFsZjonK2RlZi5pZCwgNDAwKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkZWYuaHA8PTApeyBkZWYuZWwuY2xhc3NMaXN0LmFkZCgna28nKTsgc2V0VGltZW91dCgoKT0+ZGVmLmVsLnJlbW92ZSgpLDEyMCk7IHBsYXlTZngod2luZG93LlNGWF9ERUFUSF9VUkwsIDAuOCwgJ2RlYXRoJywgMTUwKTsgfVxyXG4gICAgICAgIGlmKGEubG9nKSBsb2coYS5sb2cpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2hlYWwnOiB7XHJcbiAgICAgICAgY29uc3Qgc3JjPXVuaXRzQnlJZC5nZXQoYS5zcmMpLCBkc3Q9dW5pdHNCeUlkLmdldChhLmRzdCk7IGlmKCFzcmN8fCFkc3QpYnJlYWs7XHJcbiAgICAgICAgaWYoYS5tYW5hIT09dW5kZWZpbmVkKSBzcmMubWFuYT1hLm1hbmE7XHJcbiAgICAgICAgZHN0LmhwPU1hdGgubWluKGRzdC5tYXhIcCwoZHN0LmhwPz8wKSsoYS5hbW91bnQ/PzApKTtcclxuICAgICAgICAvLyBoZWFsIFNGWCAoY3JpdCBpZiBhbW91bnQgbGFyZ2UgYW5kIFVSTCBwcm92aWRlZClcclxuICAgICAgICBjb25zdCBjcml0ID0gKGEuY3JpdD09PXRydWUpIHx8IChhLmFtb3VudCAmJiBkc3QubWF4SHAgJiYgYS5hbW91bnQgPj0gMC4yNSpkc3QubWF4SHApO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGNyaXQgJiYgd2luZG93LlNGWF9IRUFMX0NSSVRfVVJMID8gd2luZG93LlNGWF9IRUFMX0NSSVRfVVJMIDogd2luZG93LlNGWF9IRUFMX1VSTDtcclxuICAgICAgICBwbGF5U2Z4KHVybCwgY3JpdD8wLjg6MC42LCBjcml0PydoZWFsY3JpdCc6J2hlYWwnLCA4MCk7XHJcbiAgdXBkYXRlQmFycyhzcmMpOyB1cGRhdGVCYXJzKGRzdCk7IGlmKGEubG9nKSBsb2coYS5sb2cpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2xvZyc6IGlmKGEubXNnKSBsb2coYS5tc2cpOyBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlUaWNrKCl7XHJcbiAgICBpZihzdGVwID49IChSRVBMQVkuYWN0aW9ucz8ubGVuZ3RoIHx8IDApKXtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7IHRpbWVyPW51bGw7XHJcbiAgICAgIGNvbnN0IG91dGNvbWUgPSBSRVBMQVkud2lubmVyPT09J2FsbHknID8gJ3ZpY3RvcnknIDogUkVQTEFZLndpbm5lcj09PSdlbmVteScgPyAnZGVmZWF0JyA6ICdkcmF3JztcclxuICAgICAgbG9nKG91dGNvbWU9PT0ndmljdG9yeSc/J1ZpY3RvaXJlICEnOm91dGNvbWU9PT0nZGVmZWF0Jz8nRMOpZmFpdGXigKYnOifDiWdhbGl0w6kgIScpO1xyXG4gICAgICAvLyBzaG93IG92ZXJsYXlcclxuICAgICAgY29uc3Qgb3YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LW92ZXJsYXknKTtcclxuICAgICAgY29uc3QgdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXRleHQnKTtcclxuICAgICAgY29uc3QgYnRuQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVzdWx0LWNvbnRpbnVlJyk7XHJcbiAgICAgIGNvbnN0IGJ0blMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXNvdW5kLXRvZ2dsZScpO1xyXG4gICAgICBpZiAob3YgJiYgdHgpIHtcclxuICAgICAgICBvdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICBvdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aWN0b3J5Jywgb3V0Y29tZT09PSd2aWN0b3J5Jyk7XHJcbiAgICAgICAgb3YuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZGVmZWF0Jywgb3V0Y29tZT09PSdkZWZlYXQnKTtcclxuICAgICAgICB0eC50ZXh0Q29udGVudCA9IG91dGNvbWU9PT0ndmljdG9yeScgPyAnVklDVE9JUkUnIDogb3V0Y29tZT09PSdkZWZlYXQnID8gJ0TDiUZBSVRFJyA6ICfDiUdBTElUw4knO1xyXG4gICAgICAgIGJnbUZhZGVPdXQoMTIwMCk7XHJcblxyXG4gICAgICAgIC8vIFZpY3RvcnkgU0ZYIChpZiBwcm92aWRlZClcclxuICAgICAgICBpZiAob3V0Y29tZSA9PT0gJ3ZpY3RvcnknKSB7XHJcbiAgICAgICAgICBjb25zdCBzZnhVcmwgPSB3aW5kb3cuU0ZYX1ZJQ1RPUllfVVJMO1xyXG4gICAgICAgICAgaWYgKHNmeFVybCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGF1ZCA9IG5ldyBBdWRpbyhzZnhVcmwpO1xyXG4gICAgICAgICAgICAgIGF1ZC52b2x1bWUgPSAwLjc7IGF1ZC5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYXVkLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChfKSB7IC8qIGlnbm9yZSAqLyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdXRjb21lID09PSAnZGVmZWF0Jykge1xyXG4gICAgICAgICAgcGxheVNmeCh3aW5kb3cuU0ZYX0RFRkVBVF9VUkwsIDAuNywgJ2RlZmVhdCcsIDIwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTb3VuZCBGWCAoV2ViQXVkaW8gc2ltcGxlIHRvbmVzKVxyXG4gICAgICAgIGxldCBhdWRpb0VuYWJsZWQgPSBmYWxzZSwgY3R4ID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBwbGF5SmluZ2xlKGtpbmQpe1xyXG4gICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBpZighYXVkaW9FbmFibGVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmKCFjdHgpIGN0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dHx8d2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gY3R4LmN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICBjb25zdCBub3RlcyA9IGtpbmQ9PT0ndmljdG9yeScgPyBbNTIzLDY1OSw3ODRdIDoga2luZD09PSdkZWZlYXQnID8gWzM5MiwzNDksMjYxXSA6IFs0NDAsNDQwLDQ0MF07XHJcbiAgICAgICAgICAgIG5vdGVzLmZvckVhY2goKGYsaSk9PntcclxuICAgICAgICAgICAgICBjb25zdCBvID0gY3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcclxuICAgICAgICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUdhaW4oKTtcclxuICAgICAgICAgICAgICBvLnR5cGU9J3NpbmUnOyBvLmZyZXF1ZW5jeS52YWx1ZT1mO1xyXG4gICAgICAgICAgICAgIG8uY29ubmVjdChnKTsgZy5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbik7XHJcbiAgICAgICAgICAgICAgY29uc3QgdCA9IG5vdyArIGkqMC4xODsgZy5nYWluLnNldFZhbHVlQXRUaW1lKDAuMDAxLHQpOyBnLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjIsdCswLjAyKTsgZy5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsdCswLjMpO1xyXG4gICAgICAgICAgICAgIG8uc3RhcnQodCk7IG8uc3RvcCh0KzAuMzIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1jYXRjaChlKXsgY29uc29sZS5kZWJ1ZygnYXVkaW8gZmFpbGVkJywgZSk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0blMpIHtcclxuICAgICAgICAgIGJ0blMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIGF1ZGlvRW5hYmxlZCA9ICFhdWRpb0VuYWJsZWQ7XHJcbiAgICAgICAgICAgIGJ0blMuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBhdWRpb0VuYWJsZWQ/ICd0cnVlJzonZmFsc2UnKTtcclxuICAgICAgICAgICAgaWYoYXVkaW9FbmFibGVkKXsgcGxheUppbmdsZShvdXRjb21lKTsgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb250aW51ZSBidXR0b24gb3IgY2xpY2sgYW55d2hlcmUgb24gdmVpbFxyXG4gICAgICAgIGNvbnN0IGhpZGUgPSAoKT0+IG92LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIGlmKGJ0bkMpIGJ0bkMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlLCB7IG9uY2U6dHJ1ZSB9KTtcclxuICAgICAgICBvdi5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LXZlaWwnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlLCB7IG9uY2U6dHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhcHBseUFjdGlvbihSRVBMQVkuYWN0aW9uc1tzdGVwKytdKTsgcmVuZGVySFVEKCk7XHJcbiAgfVxyXG5cclxuICBidG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBpZiAoIXRpbWVyKXsgdGltZXI9c2V0SW50ZXJ2YWwocGxheVRpY2ssVElDS19NUyk7IH1cclxuICAgIGlmIChiZ20pe1xyXG4gICAgICBiZ21FbmFibGVkID0gdHJ1ZTtcclxuICAgICAgaWYgKGJ0bk11c2ljKSBidG5NdXNpYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsJ3RydWUnKTtcclxuICAgICAgYmdtLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgYmdtLnBsYXkoKS50aGVuKCgpPT4gYmdtRmFkZUluKDQ1MCwgMC41KSkuY2F0Y2goKGUpPT57IGNvbnNvbGUuZGVidWcoJ2JnbSBwbGF5IGJsb2NrZWQnLCBlKTsgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyBpZih0aW1lcil7IGNsZWFySW50ZXJ2YWwodGltZXIpOyB0aW1lcj1udWxsOyB9IGJnbVBhdXNlKCk7IH0pO1xyXG4gIGJ0blJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgaWYodGltZXIpeyBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDsgfSBzdGVwPTA7IHNwYXduSW5pdGlhbCgpOyBpZiAoYmdtKSB7IGJnbVBhdXNlKCk7IGJnbS5jdXJyZW50VGltZSA9IDA7IH0gfSk7XHJcblxyXG4gIHNwYXduSW5pdGlhbCgpO1xyXG59KTtcclxuIiwiLy8gdGVhbS1idWlsZGVyLmpzXHJcblxyXG4vLyBiYXNlIGRlcyBhc3NldHMgZm91cm5pZSBwYXIgVHdpZzogd2luZG93LkFTU0VUX0JBU0UgPSBcInt7IGFzc2V0KCcnKSB9fVwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBBU1NFVF9CQVNFID0gKHdpbmRvdy5BU1NFVF9CQVNFIHx8ICcvJykucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xyXG4gIGNvbnN0IGZ1bGxJbWcgPSAocCkgPT4gQVNTRVRfQkFTRSArIFN0cmluZyhwIHx8ICcnKS5yZXBsYWNlKC9eXFwvKy8sICcnKTtcclxuICBcclxuICBjb25zb2xlLmxvZygnVGVhbSBCdWlsZGVyIHNjcmlwdCBsb2FkZWQhJywgeyBBU1NFVF9CQVNFIH0pO1xyXG4gIGNvbnN0IG93bmVkRWwgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvd25lZC1naXJscy1qc29uJyk7XHJcbiAgY29uc3Qgc3VnZ2VzdGVkRWwgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Z2dlc3RlZC1naXJscy1qc29uJyk7XHJcbiAgaWYgKCFvd25lZEVsKSByZXR1cm47XHJcblxyXG4gIC8qKiBAdHlwZSB7QXJyYXl9ICovXHJcbiAgY29uc3QgT1dORUQgICAgICAgID0gSlNPTi5wYXJzZShvd25lZEVsLnRleHRDb250ZW50IHx8ICdbXScpO1xyXG4gIC8qKiBAdHlwZSB7QXJyYXl9ICovXHJcbiAgY29uc3QgU1VHR0VTVEVEICAgID0gc3VnZ2VzdGVkRWwgPyBKU09OLnBhcnNlKHN1Z2dlc3RlZEVsLnRleHRDb250ZW50IHx8ICdbXScpIDogW107XHJcblxyXG4gIGNvbnN0IHBpY2tHcmlkICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNrLWdyaWQnKTtcclxuICBjb25zdCBiZW5jaEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVuY2gtZ3JpZCcpO1xyXG4gIGNvbnN0IGJvYXJkICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gIGNvbnN0IGJ0blJlcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVyb2xsJyk7XHJcbiAgY29uc3QgcmVyb2xsQ291bnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXJvbGwtY291bnQnKTtcclxuICBjb25zdCBidG5Mb2NrICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWxvY2snKTtcclxuICBjb25zdCBib251c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1ib251c2VzJyk7XHJcbiAgY29uc3Qgc2tlbGV0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1za2VsZXRvbicpO1xyXG5cclxuICBjb25zdCBNQVhfVEVBTSAgPSA0O1xyXG4gIGNvbnN0IHBsYWNlZCAgICA9IG5ldyBNYXAoKTsgLy8gXCJ4LHlcIiAtPiB7IGdpcmwsIGVsIH1cclxuICBjb25zdCBpbkJlbmNoICAgPSBuZXcgTWFwKCk7IC8vIGdpcmxJZCAtPiBjYXJkRWxlbWVudFxyXG5cclxuICAvLyBoZWxwZXJzXHJcbiAgY29uc3QgcmFuZEludCA9IChuKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKTtcclxuICBjb25zdCBwaWNrTiA9IChhcnIsIG4pID0+IHtcclxuICAgIGNvbnN0IHBvb2wgPSBbLi4uYXJyXSwgb3V0ID0gW107XHJcbiAgICB3aGlsZSAob3V0Lmxlbmd0aCA8IE1hdGgubWluKG4sIHBvb2wubGVuZ3RoKSkge1xyXG4gICAgICBvdXQucHVzaChwb29sLnNwbGljZShyYW5kSW50KHBvb2wubGVuZ3RoKSwgMSlbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9O1xyXG4gIGNvbnN0IGNlbGxLZXkgPSAoeCwgeSkgPT4gYCR7eH0sJHt5fWA7XHJcblxyXG4gIC8vIC0tLS0gVUkgcmVuZGVyZXJzIC0tLS1cclxuICBmdW5jdGlvbiByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlIH0pIHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gYHRiLWNhcmQgdGItY2FyZC0tJHtnaXJsLmNsYXNzfWA7XHJcbiAgICBjYXJkLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICBjYXJkLmRhdGFzZXQuaWQgPSBnaXJsLmlkO1xyXG4gICAgY2FyZC5kYXRhc2V0LnNvdXJjZSA9IHNvdXJjZTtcclxuXHJcbiAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX2ltZ1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHtmdWxsSW1nKGdpcmwuaW1nKX1cIiBhbHQ9XCIke2dpcmwubmFtZX1cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX19tZXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX25hbWVcIj4ke2dpcmwubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fdGFnc1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgJHtjbGFzc1RhZyhnaXJsLmNsYXNzKX1cIj4ke2NsYXNzTGFiZWwoZ2lybC5jbGFzcyl9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgdGFnLWZhbWlseVwiPiR7Z2lybC5mYW1pbHkgPz8gJyd9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX3N0YXRzXCI+XHJcbiAgICAgICAgPHNwYW4+UFYgJHtnaXJsLnBkdn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+QVRLICR7Z2lybC5hdGt9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlBSQyAke01hdGgucm91bmQoKGdpcmwuY2hhbmNlX2F0ayA/PyAwKSAqIDEwMCl9JTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KGdpcmwpKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGNhcmQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKSk7XHJcbiAgICB9KTtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKSk7XHJcblxyXG4gICAgLy8gZG91YmxlLWNsaWMgLT4gdG9nZ2xlIGJhbmNcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIC8vIFRvZ2dsZSBiYW5jOiBzaSBkw6lqw6AgZGFucyBsZSBiYW5jIC0+IG9uIGxlIGxhaXNzZSBhZmZpY2jDqSBtYWlzIG9uIGxlIG1hcnF1ZSBjb21tZSBub24tcHLDqXNlcnbDqVxyXG4gICAgICBpZiAoY2FyZC5wYXJlbnRFbGVtZW50ID09PSBiZW5jaEdyaWQpIHtcclxuICAgICAgICAvLyBSZXRyYWl0IGR1IGJhbmM6IG9uIGxlIHJlbWV0IGRhbnMgc29uIGNvbnRlbmV1ciBzb3VyY2Ugc2kgcG9zc2libGUsIHNpbm9uIG9uIGxlIHN1cHByaW1lIHByb3ByZW1lbnRcclxuICAgICAgICBpbkJlbmNoLmRlbGV0ZShnaXJsLmlkKTtcclxuICAgICAgICAvLyBEw6lwbGFjZXIgbGEgY2FydGUgdmVycyBsYSB6b25lIGRlIHBpY2sgcG91ciBsYSByZW5kcmUgcmVyb2xsYWJsZVxyXG4gICAgICAgIGlmIChwaWNrR3JpZCkgcGlja0dyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgZWxzZSBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEFqb3V0IGF1IGJhbmNcclxuICAgICAgICBiZW5jaEdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlTG9ja1N0YXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VDaGlwKGdpcmwpIHtcclxuICAgIGNvbnN0IGNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoaXAuY2xhc3NOYW1lID0gYGNoaXAgJHtjbGFzc1RhZyhnaXJsLmNsYXNzKX1gO1xyXG4gICAgY2hpcC50aXRsZSA9IGdpcmwubmFtZTtcclxuICAgIGNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGNoaXAuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtmdWxsSW1nKGdpcmwuaW1nKX1cIiBhbHQ9XCIke2dpcmwubmFtZX1cIj48c3Bhbj4ke2dpcmwubmFtZX08L3NwYW4+YDtcclxuXHJcbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBKU09OLnN0cmluZ2lmeShnaXJsKSk7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBjaGlwLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJykpO1xyXG4gICAgfSk7XHJcbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiBjaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJykpO1xyXG5cclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBjaGlwLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJy5jZWxsJyk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gY2VsbEtleShjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnkpO1xyXG4gICAgICAgIHBsYWNlZC5kZWxldGUoa2V5KTtcclxuICAgICAgICBjZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghaW5CZW5jaC5oYXMoZ2lybC5pZCkpIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gcmVuZGVyQ2FyZChnaXJsLCB7IHNvdXJjZTogJ2JlbmNoJyB9KTtcclxuICAgICAgICBiZW5jaEdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlTG9ja1N0YXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hpcDtcclxuICB9XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQaWNrKCkge1xyXG4gIHBpY2tHcmlkLmlubmVySFRNTCA9ICcnO1xyXG4gIGxldCBwb29sID0gU1VHR0VTVEVELmxlbmd0aCA/IFsuLi5TVUdHRVNURURdIDogWy4uLk9XTkVEXTtcclxuICBpZiAocG9vbC5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgLy8gb24gZHVwbGlxdWUgc2kgPCA0XHJcbiAgd2hpbGUgKHBvb2wubGVuZ3RoIDwgNCkgcG9vbCA9IHBvb2wuY29uY2F0KHBvb2wpO1xyXG5cclxuICAvLyBFeGNsdXJlIGNldXggZMOpasOgIGF1IGJhbmMgKHByw6lzZXJ2w6lzKSBkdSB0aXJhZ2VcclxuICBjb25zdCBwcmVzZXJ2ZWRJZHMgPSBuZXcgU2V0KEFycmF5LmZyb20oaW5CZW5jaC5rZXlzKCkpKTtcclxuICBjb25zdCBwb29sMiA9IHBvb2wuZmlsdGVyKGcgPT4gIXByZXNlcnZlZElkcy5oYXMoZy5pZCkpO1xyXG5cclxuICAvLyBTw6lsZWN0aW9ubmUganVzcXUnw6AgNCBzdWdnZXN0aW9ucyB1bmlxdWVzIHBhcm1pIGxlIHBvb2wgcmVzdGFudFxyXG4gIGNvbnN0IHBpY2tzID0gW107XHJcbiAgY29uc3QgdGFrZW4gPSBuZXcgU2V0KCk7XHJcbiAgY29uc3QgdGFyZ2V0ID0gTWF0aC5taW4oNCwgcG9vbDIubGVuZ3RoKTtcclxuICB3aGlsZSAocGlja3MubGVuZ3RoIDwgdGFyZ2V0ICYmIHRha2VuLnNpemUgPCBwb29sMi5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb29sMi5sZW5ndGgpO1xyXG4gICAgaWYgKCF0YWtlbi5oYXMoaSkpIHsgdGFrZW4uYWRkKGkpOyBwaWNrcy5wdXNoKHBvb2wyW2ldKTsgfVxyXG4gIH1cclxuICBwaWNrcy5mb3JFYWNoKGcgPT4gcGlja0dyaWQuYXBwZW5kQ2hpbGQocmVuZGVyQ2FyZChnLCB7IHNvdXJjZTogJ3BpY2snIH0pKSk7XHJcbn1cclxuICBmdW5jdGlvbiBjbGFzc1RhZyhjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ3RhZy1tZWxlZSc7XHJcbiAgICAgIGNhc2UgJ2Rwc19yYW5nZWQnOiByZXR1cm4gJ3RhZy1yYW5nZWQnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICd0YWctdGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ3RhZy1oZWFsJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xhc3NMYWJlbChjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ0RQUyBDw6BDJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAnRFBTIGRpc3RhbmNlJztcclxuICAgICAgY2FzZSAndGFuayc6ICAgICAgIHJldHVybiAnVGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ0hlYWxlcic7XHJcbiAgICAgIGRlZmF1bHQ6ICAgICAgICAgICByZXR1cm4gY2xzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBEbkQgYm9hcmQgLS0tLVxyXG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQuY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gY2VsbC5kYXRhc2V0O1xyXG4gICAgY29uc3Qga2V5ID0gY2VsbEtleSh4LCB5KTtcclxuXHJcbiAgICBjb25zdCBkcmFnZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50Yi1jYXJkLmRyYWdnaW5nLCAuY2hpcC5kcmFnZ2luZycpO1xyXG4gICAgaWYgKCFkcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyBzaSBtw6ptZSBow6lybyBkw6lqw6AgcGxhY8OpIGFpbGxldXJzIC0+IGxpYsOocmUgbOKAmWFuY2llbm5lIGNlbGx1bGVcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHBsYWNlZCkge1xyXG4gICAgICBpZiAodi5naXJsLmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBjb25zdCBvbGRDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtrLnNwbGl0KCcsJylbMF19XCJdW2RhdGEteT1cIiR7ay5zcGxpdCgnLCcpWzFdfVwiXWApO1xyXG4gICAgICAgIGlmIChvbGRDZWxsKSBvbGRDZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGltaXRlIMOpcXVpcGVcclxuICAgIGlmICghcGxhY2VkLmhhcyhrZXkpICYmIHBsYWNlZC5zaXplID49IE1BWF9URUFNKSByZXR1cm47XHJcblxyXG4gICAgLy8gc3dhcCBzaSBsYSBjZWxsdWxlIMOpdGFpdCBvY2N1cMOpZVxyXG4gICAgaWYgKHBsYWNlZC5oYXMoa2V5KSkge1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHBsYWNlZC5nZXQoa2V5KTtcclxuICAgICAgaWYgKGV4aXN0aW5nPy5lbCkge1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGV4aXN0aW5nLmdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pKTtcclxuICAgICAgICBpbkJlbmNoLnNldChleGlzdGluZy5naXJsLmlkLCBiZW5jaEdyaWQubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaXAgPSBtYWtlQ2hpcChnaXJsKTtcclxuICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGNoaXApO1xyXG4gICAgcGxhY2VkLnNldChrZXksIHsgZ2lybCwgZWw6IGNoaXAgfSk7XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBEbkQgYmVuY2ggLS0tLVxyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyByZXRpcmUgZHUgYm9hcmQgc2kgcHLDqXNlbnRlXHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBwbGFjZWQpIHtcclxuICAgICAgaWYgKHYuZ2lybC5pZCA9PT0gZ2lybC5pZCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKGMpIGMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5CZW5jaC5oYXMoZ2lybC5pZCkpIHtcclxuICAgICAgY29uc3QgY2FyZCA9IHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSk7XHJcbiAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBhY3Rpb25zIC0tLS1cclxubGV0IHRpY2tldElkID0gbnVsbDtcclxubGV0IHBvbGxUaW1lciA9IG51bGw7XHJcblxyXG5idG5Mb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTsgc2tlbGV0b24uY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpOyB9XHJcbiAgLy8gYnVpbGQgcGF5bG9hZFxyXG4gIGNvbnN0IGxpbmV1cCA9IEFycmF5LmZyb20ocGxhY2VkLmVudHJpZXMoKSkubWFwKChba2V5LCB2YWxdKSA9PiB7XHJcbiAgICBjb25zdCBbeCwgeV0gPSBrZXkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcclxuICAgIHJldHVybiB7IGlkOiB2YWwuZ2lybC5pZCwgeCwgeSB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBTVEFSVF9VUkwgID0gd2luZG93Lk1NPy5zdGFydCAgPz8gJy9tYXRjaG1ha2luZy9zdGFydCc7XHJcbiAgY29uc3QgU1RBVFVTX1RQTCA9IHdpbmRvdy5NTT8uc3RhdHVzID8/ICcvbWF0Y2htYWtpbmcvc3RhdHVzL19fSURfXyc7XHJcbiAgY29uc3Qgc3RhdHVzVXJsICA9IChpZCkgPT4gU1RBVFVTX1RQTC5yZXBsYWNlKCdfX0lEX18nLCBTdHJpbmcoaWQpKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0NhbGxpbmcgU1RBUlRfVVJMID0nLCBTVEFSVF9VUkwpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzICA9IGF3YWl0IGZldGNoKFNUQVJUX1VSTCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxpbmV1cCB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIHRyeSB7IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpOyB9IGNhdGNoIHsgZGF0YSA9IG51bGw7IH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnbWF0Y2htYWtpbmcvc3RhcnQgLT4nLCByZXMuc3RhdHVzLCBkYXRhID8/IHRleHQpO1xyXG5cclxuICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgIGFsZXJ0KGBNYXRjaG1ha2luZyBmYWlsZWQgKCR7cmVzLnN0YXR1c30pOlxcbiR7ZGF0YT8uZXJyb3IgPz8gdGV4dH1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhIHx8IChkYXRhLnN0YXR1cyAhPT0gJ21hdGNoZWQnICYmIGRhdGEuc3RhdHVzICE9PSAncXVldWVkJykpIHtcclxuICAgICAgYWxlcnQoJ1LDqXBvbnNlIGluYXR0ZW5kdWU6XFxuJyArIChkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiB0ZXh0KSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdtYXRjaGVkJykge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbWF0Y2gvJHtkYXRhLm1hdGNoSWR9YDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHF1ZXVlZCAtPiBwb2xsIHN0YXR1c1xyXG4gICAgdGlja2V0SWQgPSBkYXRhLnRpY2tldElkO1xyXG4gICAgYnRuTG9jay5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBidG5Mb2NrLnRleHRDb250ZW50ID0gJ/CflI4gUmVjaGVyY2hlIGVuIGNvdXJz4oCmJztcclxuXHJcbiAgICBwb2xsVGltZXIgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaChzdGF0dXNVcmwodGlja2V0SWQpLCB7IGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pO1xyXG4gICAgICBjb25zdCBqID0gYXdhaXQgci5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdtYXRjaG1ha2luZy9zdGF0dXMgLT4nLCBqKTtcclxuICAgICAgaWYgKGouc3RhdHVzID09PSAnbWF0Y2hlZCcpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHBvbGxUaW1lcik7XHJcbiAgICBpZiAoc2tlbGV0b24pIHsgc2tlbGV0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTsgfVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9tYXRjaC8ke2oubWF0Y2hJZH1gO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MDAwKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgYWxlcnQoJ0VycmV1ciByw6lzZWF1OiAnICsgZS5tZXNzYWdlKTtcclxuICBpZiAoc2tlbGV0b24pIHsgc2tlbGV0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTsgfVxyXG4gIH1cclxufSk7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2tTdGF0ZSgpIHtcclxuICAgIGJ0bkxvY2suZGlzYWJsZWQgPSAocGxhY2VkLnNpemUgIT09IE1BWF9URUFNKTtcclxuICAgIHJlbmRlckJvbnVzZXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLSBTeW5lcmd5IGNvbXB1dGF0aW9uIChjbGllbnQtc2lkZSBtaXJyb3Igb2Ygc2VydmVyIHRpZXJzKSAtLS1cclxuICBmdW5jdGlvbiBjb21wdXRlQm9udXNlcygpIHtcclxuICAgIGNvbnN0IGNvdW50cyA9IHt9OyAvLyBmYW1pbHkgLT4gY291bnRcclxuICAgIGZvciAoY29uc3QgWywge2dpcmx9XSBvZiBwbGFjZWQpIHtcclxuICAgICAgY29uc3QgZmFtID0gKGdpcmwuZmFtaWx5IHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAoIWZhbSkgY29udGludWU7IGNvdW50c1tmYW1dID0gKGNvdW50c1tmYW1dIHx8IDApICsgMTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpZXJzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IFtmYW0sIG5dIG9mIE9iamVjdC5lbnRyaWVzKGNvdW50cykpIHtcclxuICAgICAgY29uc3QgdGllciA9IG4gPj0gNCA/IDQgOiAobiA+PSAzID8gMyA6IChuID49IDIgPyAyIDogMCkpO1xyXG4gICAgICBpZiAodGllciA9PT0gMCkgY29udGludWU7IHRpZXJzW2ZhbV0gPSB7IG4sIHRpZXIgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aWVycztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckJvbnVzZXMoKSB7XHJcbiAgICBpZiAoIWJvbnVzTGlzdCkgcmV0dXJuO1xyXG4gICAgY29uc3QgdGllcnMgPSBjb21wdXRlQm9udXNlcygpO1xyXG4gICAgYm9udXNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgbGFiZWwgPSAoZmFtLCB0aWVyLCBuKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcCA9IHtcclxuICAgICAgICBzb2xlaWw6IHsyOidBVEsgKzUlJywzOidQcsOpY2lzaW9uICs1JScsNDonQ3JpdCArNSUnfSxcclxuICAgICAgICBsdW5lOiAgIHsyOidFc3F1aXZlICszJScsMzonRXNxdWl2ZSArMiUgJiBNYW5hICsxMCcsNDonQm91Y2xpZXIgKzEwJ30sXHJcbiAgICAgICAgbmF0dXJlOiB7MjonUFYgKzUlJywzOidCb3VjbGllciArMTUnLDQ6J1BWICs1JSd9LFxyXG4gICAgICAgIGlkb2xlOiAgezI6J0NyaXQgKzUlJywzOidBVEsgKzUlJyw0OidNYW5hICsxMCd9LFxyXG4gICAgICAgIG9tYnJlOiAgezI6J0VzcXVpdmUgKzUlJywzOidQcsOpY2lzaW9uICs1JScsNDonQm91Y2xpZXIgKzE1J30sXHJcbiAgICAgICAgYXJjYW5lOiB7MjonUHLDqWNpc2lvbiArNSUnLDM6J01hbmEgKzE1Jyw0OidDcml0ICs1JSd9LFxyXG4gICAgICAgIGV0b2lsZTogezI6J1Byw6ljaXNpb24gKzMlJywzOidDcml0ICs1JScsNDonQVRLICs1JSd9LFxyXG4gICAgICAgIG9jZWFuOiAgezI6J0VzcXVpdmUgKzMlJywzOidNYW5hICsxMCcsNDonUHLDqWNpc2lvbiArNSUnfVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBlZmZlY3QgPSAobWFwW2ZhbV0gJiYgbWFwW2ZhbV1bdGllcl0pID8gbWFwW2ZhbV1bdGllcl0gOiBgUGFsaWVyICR7dGllcn1gO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGZhbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGZhbS5zbGljZSgxKTtcclxuICAgICAgcmV0dXJuIGAke3RpdGxlfSB4JHtufSDigJQgJHtlZmZlY3R9YDtcclxuICAgIH07XHJcbiAgICBjb25zdCBJQ09OID0geyBzb2xlaWw6J+KYgO+4jycsIGx1bmU6J/CfjJknLCBuYXR1cmU6J/CfjYMnLCBpZG9sZTon8J+OtScsIG9tYnJlOifwn4yRJywgYXJjYW5lOifinKgnLCBldG9pbGU6J+KtkCcsIG9jZWFuOifwn4yKJyB9O1xyXG4gICAgT2JqZWN0LmVudHJpZXModGllcnMpLmZvckVhY2goKFtmYW0sIHt0aWVyLCBufV0pID0+IHtcclxuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaS5jbGFzc05hbWUgPSBgYm9udXMtaXRlbSBmYW0tJHtmYW19IHRpZXItJHt0aWVyfWA7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZmFtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmFtLnNsaWNlKDEpO1xyXG4gICAgICBjb25zdCBlZmZlY3RUZXh0ID0gbGFiZWwoZmFtLCB0aWVyLCBuKS5zcGxpdCgnIOKAlCAnKS5wb3AoKTtcclxuICAgICAgY29uc3QgcGN0ID0gTWF0aC5taW4oMTAwLCBNYXRoLnJvdW5kKChuIC8gNCkgKiAxMDApKTtcclxuICAgICAgbGkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmFtLWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj4ke0lDT05bZmFtXSB8fCAn4pynJ308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYW0tbmFtZVwiPiR7dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRcIj54JHtufTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2F1Z2VcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCI0XCIgYXJpYS12YWx1ZW5vdz1cIiR7bn1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXJcIiBzdHlsZT1cIndpZHRoOiR7cGN0fSVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVmZmVjdFwiPiR7ZWZmZWN0VGV4dH08L3NwYW4+XHJcbiAgICAgIGA7XHJcbiAgICAgIGJvbnVzTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGluaXRcclxuICByZW5kZXJQaWNrKCk7XHJcbiAgcmVuZGVyQm9udXNlcygpO1xyXG5cclxuICAvLyAtLS0gUmVyb2xsIGxpbWl0w6kgw6AgMyAtLS1cclxuICBsZXQgcmVyb2xsc0xlZnQgPSBOdW1iZXIod2luZG93LlJFUk9MTFNfTEVGVCA/PyAzKTtcclxuICBjb25zdCB1cGRhdGVSZXJvbGxVSSA9ICgpID0+IHtcclxuICAgIGlmIChyZXJvbGxDb3VudEVsKSByZXJvbGxDb3VudEVsLnRleHRDb250ZW50ID0gYCgke3Jlcm9sbHNMZWZ0fSByZXN0YW50JHtyZXJvbGxzTGVmdD4xPydzJzonJ30pYDtcclxuICAgIGlmIChidG5SZXJvbGwpIGJ0blJlcm9sbC5kaXNhYmxlZCA9IHJlcm9sbHNMZWZ0IDw9IDA7XHJcbiAgfTtcclxuICB1cGRhdGVSZXJvbGxVSSgpO1xyXG4gIGlmIChidG5SZXJvbGwpIHtcclxuICAgIGJ0blJlcm9sbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHJlcm9sbHNMZWZ0IDw9IDApIHJldHVybjtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh3aW5kb3cuUkVST0xMX0RFQ19VUkwsIHsgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJlcm9sbHNMZWZ0ID0gTnVtYmVyKGRhdGE/LmxlZnQgPz8gcmVyb2xsc0xlZnQpO1xyXG4gICAgICB9IGNhdGNoIHt9XHJcbiAgICAgIHVwZGF0ZVJlcm9sbFVJKCk7XHJcbiAgICAgIHJlbmRlclBpY2soKTsgLy8gcGFzIGRlIHJlbG9hZCAtPiBwYXMgZGUgY2xpZ25vdGVtZW50XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC90ZWFtLWJ1aWxkZXIuanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9JbnNjcmlwdGlvbi5qcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L2hvbWUuanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9tYXRjaC5qcyc7IFxyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3MxIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXNzMiIsInJlZ2lzdGVyQnRuIiwiY2hlY2tQYXNzd29yZHMiLCJ2YWx1ZSIsImRpc2FibGVkIiwidHJhY2siLCJwcmV2IiwicXVlcnlTZWxlY3RvciIsIm5leHQiLCJzdGVwIiwic2Nyb2xsQnkiLCJkZWx0YSIsImxlZnQiLCJiZWhhdmlvciIsImNvbnNvbGUiLCJsb2ciLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJBU1NFVF9CQVNFIiwid2luZG93IiwicmVwbGFjZSIsImZ1bGwiLCJwIiwiU3RyaW5nIiwiYm9hcmQiLCJsb2dFbCIsImh1ZEEiLCJodWRFIiwiYnRuU3RhcnQiLCJidG5QYXVzZSIsImJ0blJlc2V0IiwiYnRuTXVzaWMiLCJ3YXJuIiwiUkVQTEFZIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJpbml0aWFsIiwiZGVidWciLCJmaWx0ZXIiLCJ1IiwidGVhbSIsImxlbmd0aCIsInVuaXRzQnlJZCIsIk1hcCIsInRpbWVyIiwiVElDS19NUyIsImJnbSIsImJnbUVuYWJsZWQiLCJiZ21GYWRpbmciLCJiZ21VcmwiLCJCR01fVVJMIiwiQXVkaW8iLCJsb29wIiwicHJlbG9hZCIsInZvbHVtZSIsInRpdGxlIiwic2V0QXR0cmlidXRlIiwicGxheSIsInBhdXNlIiwiYmdtUGxheSIsImUiLCJiZ21QYXVzZSIsImJnbUZhZGVPdXQiLCJtcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInN0YXJ0IiwidDAiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInN0ZXBGbiIsImsiLCJNYXRoIiwibWluIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmdtRmFkZUluIiwidGFyZ2V0IiwiY2VsbCIsIngiLCJ5IiwiY29uY2F0IiwibXNnIiwiZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInJlbmRlckhVRCIsImxpc3QiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ2YWx1ZXMiLCJtYXAiLCJpbWciLCJuYW1lIiwiaHAiLCJzaGllbGQiLCJtYW5hIiwiam9pbiIsImlubmVySFRNTCIsInVwZGF0ZUJhcnMiLCJlbCIsInNoIiwic3R5bGUiLCJkaXNwbGF5IiwibWEiLCJocEZpbGwiLCJtYUZpbGwiLCJtYXhIcCIsIm1heCIsImN1ckhwIiwid2lkdGgiLCJyb3VuZCIsIm1heE1hbmEiLCJjdXJNYW5hIiwibGFzdFNmeEF0IiwicGxheVNmeCIsInVybCIsInZvbCIsImtleSIsIm1pbkdhcE1zIiwibGFzdCIsImdldCIsInNldCIsImEiLCJfdW51c2VkIiwic3Bhd25Jbml0aWFsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjIiwiY2xlYXIiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwidTAiLCJfb2JqZWN0U3ByZWFkIiwiY2xhc3NOYW1lIiwiaWQiLCJlcnIiLCJmIiwiYXBwbHlBY3Rpb24iLCJ0IiwiYXQiLCJraW5kIiwiRlhfVVJMUyIsImZ4IiwiYWx0Iiwic3JjIiwiZHVyIiwicGFyc2VJbnQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiX3VudXNlZDIiLCJ0byIsImF0dCIsImRlZiIsInByZXZIcCIsIndhc0Fib3ZlIiwibm93QmVsb3ciLCJTRlhfSEFMRkhQX1VSTCIsImFkZCIsIlNGWF9ERUFUSF9VUkwiLCJfZHN0JGhwIiwiX2EkYW1vdW50IiwiZHN0IiwiYW1vdW50IiwiY3JpdCIsIlNGWF9IRUFMX0NSSVRfVVJMIiwiU0ZYX0hFQUxfVVJMIiwicGxheVRpY2siLCJfUkVQTEFZJGFjdGlvbnMiLCJhY3Rpb25zIiwiY2xlYXJJbnRlcnZhbCIsIm91dGNvbWUiLCJ3aW5uZXIiLCJvdiIsInR4IiwiYnRuQyIsImJ0blMiLCJfb3YkcXVlcnlTZWxlY3RvciIsInBsYXlKaW5nbGUiLCJhdWRpb0VuYWJsZWQiLCJjdHgiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjdXJyZW50VGltZSIsIm5vdGVzIiwiaSIsIm8iLCJjcmVhdGVPc2NpbGxhdG9yIiwiZyIsImNyZWF0ZUdhaW4iLCJ0eXBlIiwiZnJlcXVlbmN5IiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZ2FpbiIsInNldFZhbHVlQXRUaW1lIiwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSIsInN0b3AiLCJ0b2dnbGUiLCJzZnhVcmwiLCJTRlhfVklDVE9SWV9VUkwiLCJhdWQiLCJfIiwiU0ZYX0RFRkVBVF9VUkwiLCJoaWRlIiwib25jZSIsInNldEludGVydmFsIiwidGhlbiIsInIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRvU3RyaW5nVGFnIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsIkciLCJ2IiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJwdXNoIiwiX24iLCJGIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiZnJvbSIsInRlc3QiLCJyZXF1aXJlIiwiX3dpbmRvdyRSRVJPTExTX0xFRlQiLCJmdWxsSW1nIiwib3duZWRFbCIsInN1Z2dlc3RlZEVsIiwiT1dORUQiLCJTVUdHRVNURUQiLCJwaWNrR3JpZCIsImJlbmNoR3JpZCIsImJ0blJlcm9sbCIsInJlcm9sbENvdW50RWwiLCJidG5Mb2NrIiwiYm9udXNMaXN0Iiwic2tlbGV0b24iLCJNQVhfVEVBTSIsInBsYWNlZCIsImluQmVuY2giLCJyYW5kSW50IiwiZmxvb3IiLCJyYW5kb20iLCJwaWNrTiIsImFyciIsInBvb2wiLCJvdXQiLCJzcGxpY2UiLCJjZWxsS2V5IiwicmVuZGVyQ2FyZCIsImdpcmwiLCJfcmVmIiwiX2dpcmwkZmFtaWx5IiwiX2dpcmwkY2hhbmNlX2F0ayIsInNvdXJjZSIsImNhcmQiLCJkcmFnZ2FibGUiLCJkYXRhc2V0IiwiY2xhc3NUYWciLCJjbGFzc0xhYmVsIiwiZmFtaWx5IiwicGR2IiwiYXRrIiwiY2hhbmNlX2F0ayIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJzdHJpbmdpZnkiLCJwYXJlbnRFbGVtZW50IiwidXBkYXRlTG9ja1N0YXRlIiwibWFrZUNoaXAiLCJjaGlwIiwiX2NoaXAkcGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJoYXMiLCJyZW5kZXJQaWNrIiwicHJlc2VydmVkSWRzIiwiU2V0Iiwia2V5cyIsInBvb2wyIiwicGlja3MiLCJ0YWtlbiIsInNpemUiLCJjbHMiLCJwcmV2ZW50RGVmYXVsdCIsIl9jZWxsJGRhdGFzZXQiLCJkcmFnZ2luZyIsImdldERhdGEiLCJfc3RlcCR2YWx1ZSIsIm9sZENlbGwiLCJzcGxpdCIsImV4aXN0aW5nIiwibGFzdEVsZW1lbnRDaGlsZCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfc3RlcDIkdmFsdWUiLCJ0aWNrZXRJZCIsInBvbGxUaW1lciIsIl9jYWxsZWUyIiwiX3dpbmRvdyRNTSRzdGFydCIsIl93aW5kb3ckTU0iLCJfd2luZG93JE1NJHN0YXR1cyIsIl93aW5kb3ckTU0yIiwibGluZXVwIiwiU1RBUlRfVVJMIiwiU1RBVFVTX1RQTCIsInN0YXR1c1VybCIsInJlcyIsInRleHQiLCJkYXRhIiwiX2RhdGEkZXJyb3IiLCJfZGF0YSIsIl90IiwiX2NvbnRleHQyIiwiZW50cmllcyIsIl9yZWYzIiwiX3JlZjQiLCJ2YWwiLCJfa2V5JHNwbGl0JG1hcCIsIk51bWJlciIsIl9rZXkkc3BsaXQkbWFwMiIsIk1NIiwic3RhdHVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJvayIsImFsZXJ0IiwiZXJyb3IiLCJsb2NhdGlvbiIsImhyZWYiLCJtYXRjaElkIiwiX2NhbGxlZSIsImoiLCJfY29udGV4dCIsImpzb24iLCJtZXNzYWdlIiwicmVuZGVyQm9udXNlcyIsImNvbXB1dGVCb251c2VzIiwiY291bnRzIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9zdGVwMyR2YWx1ZSIsImZhbSIsInRvTG93ZXJDYXNlIiwidGllcnMiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsInRpZXIiLCJsYWJlbCIsInNvbGVpbCIsImx1bmUiLCJuYXR1cmUiLCJpZG9sZSIsIm9tYnJlIiwiYXJjYW5lIiwiZXRvaWxlIiwib2NlYW4iLCJlZmZlY3QiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIklDT04iLCJfcmVmNiIsIl9yZWY3IiwiX3JlZjckIiwibGkiLCJlZmZlY3RUZXh0IiwicG9wIiwicGN0IiwicmVyb2xsc0xlZnQiLCJSRVJPTExTX0xFRlQiLCJ1cGRhdGVSZXJvbGxVSSIsIl9jYWxsZWUzIiwiX2RhdGEkbGVmdCIsIl90MiIsIl9jb250ZXh0MyIsIlJFUk9MTF9ERUNfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==