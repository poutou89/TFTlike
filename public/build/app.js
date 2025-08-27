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
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
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
__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
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
__webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
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
  var itemsGrid = document.getElementById('items-grid');
  var btnReroll = document.getElementById('btn-reroll');
  var rerollCountEl = document.getElementById('reroll-count');
  var btnLock = document.getElementById('btn-lock');
  var bonusList = document.getElementById('team-bonuses');
  var skeleton = document.getElementById('search-skeleton');
  // Floating drag label for items
  var dragTip = null;
  var getDragTip = function getDragTip() {
    if (dragTip) return dragTip;
    dragTip = document.createElement('div');
    dragTip.className = 'drag-tip';
    Object.assign(dragTip.style, {
      position: 'fixed',
      zIndex: 99999,
      pointerEvents: 'none',
      background: 'rgba(26, 24, 44, 0.9)',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: '10px',
      border: '1px solid rgba(255,255,255,.2)',
      boxShadow: '0 6px 20px rgba(0,0,0,.35)',
      fontSize: '12px',
      transform: 'translate(-50%, -140%)',
      whiteSpace: 'nowrap'
    });
    document.body.appendChild(dragTip);
    return dragTip;
  };
  var MAX_TEAM = 4;
  var placed = new Map(); // "x,y" -> { girl, el, itemId }
  var inBench = new Map(); // girlId -> cardElement
  var ALL_ITEMS = Array.isArray(window.ITEMS) ? window.ITEMS : [];
  // Items: only 4 proposals at a time (no full catalog view here)

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
  var choose4 = function choose4(arr) {
    if (!arr.length) return [];
    if (arr.length <= 4) return _toConsumableArray(arr);
    var ids = new Set();
    var out = [];
    while (out.length < 4 && ids.size < arr.length) {
      var i = randInt(arr.length);
      if (!ids.has(i)) {
        ids.add(i);
        out.push(arr[i]);
      }
    }
    return out;
  };

  // ---- Items proposals (4 at a time) ----
  var currentItems = choose4(ALL_ITEMS);
  function renderItems() {
    if (!itemsGrid) return;
    // Always replace pre-rendered content to keep behavior consistent
    itemsGrid.innerHTML = '';
    if (!ALL_ITEMS.length) {
      var empty = document.createElement('div');
      empty.className = 'tb-items__empty';
      empty.textContent = 'Ajoute des images dans public/images/items/';
      itemsGrid.appendChild(empty);
      return;
    }
    currentItems.forEach(function (it) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tb-item';
      btn.setAttribute('data-item-id', it.id);
      var title = it.desc ? "".concat(it.name, " \u2014 ").concat(it.desc) : it.name;
      btn.setAttribute('title', title);
      btn.draggable = true;
      btn.innerHTML = "<img src=\"".concat(fullImg(it.img), "\" alt=\"").concat(it.name, "\">");
      btn.addEventListener('dragstart', function (e) {
        btn.classList.add('dragging');
        e.dataTransfer.setData('text/plain', JSON.stringify({
          __type: 'item',
          id: it.id
        }));
        var tip = getDragTip();
        tip.textContent = "".concat(it.name, " \u2192 (d\xE9pose sur une h\xE9ro\xEFne)");
        tip.style.display = 'block';
      });
      btn.addEventListener('dragend', function () {
        btn.classList.remove('dragging');
        if (dragTip) dragTip.style.display = 'none';
      });
      itemsGrid.appendChild(btn);
    });
  }

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
    var itemId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var chip = document.createElement('div');
    chip.className = "chip ".concat(classTag(girl["class"]));
    chip.title = girl.name;
    chip.draggable = true;
    chip.innerHTML = "\n      <img class=\"chip-avatar\" src=\"".concat(fullImg(girl.img), "\" alt=\"").concat(girl.name, "\">\n      <span class=\"chip-name\">").concat(girl.name, "</span>\n      <span class=\"chip-item\"></span>\n    ");
    var holder = chip.querySelector('.chip-item');
    if (itemId) {
      var item = (window.ITEMS || []).find(function (i) {
        return String(i.id) === String(itemId);
      });
      if (item && holder) {
        var tip = item.desc ? "".concat(item.name, " \u2014 ").concat(item.desc) : item.name;
        holder.innerHTML = "<img class=\"chip-item-img\" src=\"".concat(fullImg(item.img), "\" alt=\"").concat(item.name, "\" title=\"").concat(tip, "\">");
      }
    }

    // Click on the item icon to unequip (doesn't remove the unit)
    if (holder) {
      holder.addEventListener('click', function (ev) {
        var _chip$parentElement;
        ev.stopPropagation();
        var cell = (_chip$parentElement = chip.parentElement) === null || _chip$parentElement === void 0 ? void 0 : _chip$parentElement.closest('.cell');
        if (!cell) return;
        var key = cellKey(cell.dataset.x, cell.dataset.y);
        var slot = placed.get(key);
        if (!slot) return;
        slot.itemId = null;
        holder.innerHTML = '';
      });
    }
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
      var _chip$parentElement2;
      var cell = (_chip$parentElement2 = chip.parentElement) === null || _chip$parentElement2 === void 0 ? void 0 : _chip$parentElement2.closest('.cell');
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
    var dragging = document.querySelector('.tb-card.dragging, .chip.dragging, .tb-item.dragging');
    if (!dragging) return;
    var dt = e.dataTransfer;
    var payload = dt.getData('text/plain') || '{}';
    var girl = {};
    try {
      girl = JSON.parse(payload);
    } catch (_unused) {}
    if (girl && girl.__type === 'item') return; // let the item handler manage it

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
      el: chip,
      itemId: null
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

  // ---- Items drag & drop ----
  // Note: individual item buttons attach their own drag handlers in renderItems()

  board.addEventListener('drop', function (e) {
    // handle item drops onto chips
    var payload = e.dataTransfer.getData('text/plain') || '';
    if (!payload) return; // handled above for heroes too
    var data;
    try {
      data = JSON.parse(payload);
    } catch (_unused2) {
      data = null;
    }
    if (!data || data.__type !== 'item') return;
    var cell = e.target.closest('.cell');
    if (!cell) return;
    var key = cellKey(cell.dataset.x, cell.dataset.y);
    var slot = placed.get(key);
    if (!slot) return;
    // assign item (replace any existing)
    slot.itemId = data.id;
    var chip = slot.el;
    var holder = chip.querySelector('.chip-item');
    var item = (window.ITEMS || []).find(function (i) {
      return String(i.id) === String(data.id);
    });
    if (holder && item) {
      var tip = item.desc ? "".concat(item.name, " \u2014 ").concat(item.desc) : item.name;
      holder.innerHTML = "<img class=\"chip-item-img\" src=\"".concat(fullImg(item.img), "\" alt=\"").concat(item.name, "\" title=\"").concat(tip, "\">");
      var img = holder.querySelector('.chip-item-img');
      if (img) {
        img.classList.add('flash');
        setTimeout(function () {
          return img.classList.remove('flash');
        }, 600);
      }
    }
    if (dragTip && item) {
      dragTip.textContent = "".concat(item.name, " \u2192 ").concat(slot.girl.name);
      setTimeout(function () {
        if (dragTip) dragTip.style.display = 'none';
      }, 850);
    }
  });

  // Track pointer to position drag tip
  document.addEventListener('dragover', function (e) {
    if (!dragTip || dragTip.style.display !== 'block') return;
    dragTip.style.left = "".concat(e.clientX, "px");
    dragTip.style.top = "".concat(e.clientY, "px");
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
            var _val$itemId;
            var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              val = _ref4[1];
            var _key$split$map = key.split(',').map(Number),
              _key$split$map2 = _slicedToArray(_key$split$map, 2),
              x = _key$split$map2[0],
              y = _key$split$map2[1];
            var itemId = (_val$itemId = val.itemId) !== null && _val$itemId !== void 0 ? _val$itemId : null;
            return itemId ? {
              id: val.girl.id,
              x: x,
              y: y,
              item: String(itemId)
            } : {
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
          } catch (_unused3) {
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
  renderItems();
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
            renderPick(); // personnages
            // also refresh the 4 item proposals
            currentItems = choose4(ALL_ITEMS);
            renderItems();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_at_js-node_modules_core-js_modules_es_array_con-dff057"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGdCRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7QUFDVztBQUNEO0FBQ1A7QUFDQztBQUUvQmxjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ2I3RSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvbWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvdGVhbS1idWlsZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvSmF2YVNjcmlwdC9yZWdpc3Rlci5qc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhc3MxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyX3R5cGVfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0Jyk7XHJcbiAgY29uc3QgcGFzczIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJfdHlwZV9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJyk7XHJcbiAgY29uc3QgcmVnaXN0ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItYnRuJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrUGFzc3dvcmRzKCkge1xyXG4gICAgaWYgKHBhc3MxLnZhbHVlICYmIHBhc3MxLnZhbHVlID09PSBwYXNzMi52YWx1ZSkge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVnaXN0ZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHBhc3MxICYmIHBhc3MyICYmIHJlZ2lzdGVyQnRuKSB7XHJcbiAgICBwYXNzMS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrUGFzc3dvcmRzKTtcclxuICAgIHBhc3MyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tQYXNzd29yZHMpO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21nLXJvc3Rlci10cmFjaycpO1xyXG4gIGlmICghdHJhY2spIHJldHVybjtcclxuXHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1wcmV2Jyk7XHJcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1uZXh0Jyk7XHJcbiAgY29uc3Qgc3RlcCA9IDI4MDsgLy8gcHggcGFyIGNsaWNcclxuXHJcbiAgY29uc3Qgc2Nyb2xsQnkgPSAoZGVsdGEpID0+IHRyYWNrLnNjcm9sbEJ5KHsgbGVmdDogZGVsdGEsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcbiAgcHJldj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGxCeSgtc3RlcCkpO1xyXG4gIG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsQnkoc3RlcCkpO1xyXG59KTtcclxuY29uc29sZS5sb2coJ2hvbWUuanMnKTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLW1hdGNoJykpIHJldHVybjtcclxuXHJcbiAgY29uc3QgQVNTRVRfQkFTRSA9ICh3aW5kb3cuQVNTRVRfQkFTRSB8fCAnLycpLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcclxuICBjb25zdCBmdWxsID0gKHApID0+IEFTU0VUX0JBU0UgKyBTdHJpbmcocCB8fCAnJykucmVwbGFjZSgvXlxcLysvLCAnJyk7XHJcblxyXG4gIGNvbnN0IGJvYXJkICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XHJcbiAgY29uc3QgbG9nRWwgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlLWxvZycpO1xyXG4gIGNvbnN0IGh1ZEEgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZC1hbGxpZXMnKTtcclxuICBjb25zdCBodWRFICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWQtZW5lbWllcycpO1xyXG4gIGNvbnN0IGJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdGFydCcpO1xyXG4gIGNvbnN0IGJ0blBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wYXVzZScpO1xyXG4gIGNvbnN0IGJ0blJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXNldCcpO1xyXG4gIGNvbnN0IGJ0bk11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1tdXNpYycpO1xyXG5cclxuICBpZiAoIWJvYXJkIHx8ICFsb2dFbCB8fCAhaHVkQSB8fCAhaHVkRSB8fCAhYnRuU3RhcnQgfHwgIWJ0blBhdXNlIHx8ICFidG5SZXNldCkge1xyXG4gICAgY29uc29sZS53YXJuKCdNYXRjaCBVSSBtaXNzaW5nJywgeyBib2FyZCwgbG9nRWwsIGh1ZEEsIGh1ZEUsIGJ0blN0YXJ0LCBidG5QYXVzZSwgYnRuUmVzZXQgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBSRVBMQVkgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBsYXktanNvbicpPy50ZXh0Q29udGVudCB8fCAne30nKTtcclxuICBpZiAoIVJFUExBWSB8fCAhQXJyYXkuaXNBcnJheShSRVBMQVkuaW5pdGlhbCkpIHsgY29uc29sZS53YXJuKCdObyByZXBsYXkgcHJvdmlkZWQnKTsgcmV0dXJuOyB9XHJcbiAgY29uc29sZS5kZWJ1ZygnUkVQTEFZOicsIFJFUExBWSxcclxuICAgICAgICAgICAgICAgICdhbGx5Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdhbGx5JykubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgJ2VuZW15Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdlbmVteScpLmxlbmd0aCk7XHJcblxyXG4gIGNvbnN0IHVuaXRzQnlJZCA9IG5ldyBNYXAoKTsgLy8gaWQgLT4gcnVudGltZSB1bml0XHJcbiAgbGV0IHRpbWVyID0gbnVsbCwgc3RlcCA9IDA7XHJcbiAgY29uc3QgVElDS19NUyA9IDQwMDtcclxuXHJcbiAgLy8gLS0tIEJhY2tncm91bmQgbXVzaWMgKEJHTSkgLS0tXHJcbiAgbGV0IGJnbSA9IG51bGwsIGJnbUVuYWJsZWQgPSB0cnVlLCBiZ21GYWRpbmcgPSBmYWxzZTtcclxuICBjb25zdCBiZ21VcmwgPSB3aW5kb3cuQkdNX1VSTDtcclxuICBpZiAoYmdtVXJsKSB7XHJcbiAgICBiZ20gPSBuZXcgQXVkaW8oYmdtVXJsKTtcclxuICAgIGJnbS5sb29wID0gdHJ1ZTtcclxuICAgIGJnbS5wcmVsb2FkID0gJ2F1dG8nO1xyXG4gICAgYmdtLnZvbHVtZSA9IDAuMDsgLy8gc3RhcnQgc2lsZW50LCBmYWRlIGluIG9uIFN0YXJ0XHJcbiAgfVxyXG4gIGlmIChidG5NdXNpYykge1xyXG4gICAgaWYgKCFiZ20pIHsgYnRuTXVzaWMuZGlzYWJsZWQgPSB0cnVlOyBidG5NdXNpYy50aXRsZSA9ICdBdWN1bmUgbXVzaXF1ZSBkaXNwb25pYmxlJzsgfVxyXG4gICAgYnRuTXVzaWMuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBiZ21FbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgICBidG5NdXNpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYmdtRW5hYmxlZCA9ICFiZ21FbmFibGVkO1xyXG4gICAgICBidG5NdXNpYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGJnbUVuYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcclxuICAgICAgaWYgKCFiZ20pIHJldHVybjtcclxuICAgICAgaWYgKGJnbUVuYWJsZWQpIHsgYmdtLnBsYXkoKS5jYXRjaCgoKT0+e30pOyB9IGVsc2UgeyBiZ20ucGF1c2UoKTsgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGJnbVBsYXkoKXsgaWYgKCFiZ20gfHwgIWJnbUVuYWJsZWQpIHJldHVybjsgYmdtRmFkaW5nPWZhbHNlOyBiZ20ucGxheSgpLmNhdGNoKChlKT0+eyBjb25zb2xlLmRlYnVnKCdiZ20gcGxheSBmYWlsZWQnLCBlKTsgfSk7IH1cclxuICBmdW5jdGlvbiBiZ21QYXVzZSgpeyBpZiAoIWJnbSkgcmV0dXJuOyBiZ20ucGF1c2UoKTsgfVxyXG4gIGZ1bmN0aW9uIGJnbUZhZGVPdXQobXM9OTAwKXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZyA9IHRydWU7IGNvbnN0IHN0YXJ0ID0gYmdtLnZvbHVtZTsgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIGNvbnN0IHN0ZXBGbiA9IChub3cpID0+IHtcclxuICAgICAgaWYgKCFiZ21GYWRpbmcpIHJldHVybjtcclxuICAgICAgY29uc3QgayA9IE1hdGgubWluKDEsIChub3cgLSB0MCkgLyBtcyk7XHJcbiAgICAgIGJnbS52b2x1bWUgPSBzdGFydCAqICgxIC0gayk7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7IGVsc2UgeyBiZ20ucGF1c2UoKTsgYmdtLnZvbHVtZSA9IHN0YXJ0OyBiZ21GYWRpbmcgPSBmYWxzZTsgfVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwRm4pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBiZ21GYWRlSW4obXM9NTAwLCB0YXJnZXQ9MC41KXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZz1mYWxzZTsgY29uc3Qgc3RhcnQgPSBiZ20udm9sdW1lOyBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgY29uc3Qgc3RlcEZuID0gKG5vdykgPT4ge1xyXG4gICAgICBjb25zdCBrID0gTWF0aC5taW4oMSwgKG5vdyAtIHQwKSAvIG1zKTtcclxuICAgICAgYmdtLnZvbHVtZSA9IHN0YXJ0ICsgKHRhcmdldCAtIHN0YXJ0KSAqIGs7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjZWxsID0gKHgseSkgPT4gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZyhtc2cpeyBpZighbXNnKXJldHVybjsgY29uc3QgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZC50ZXh0Q29udGVudD1tc2c7XHJcbiAgICBsb2dFbC5hcHBlbmRDaGlsZChkKTsgbG9nRWwuc2Nyb2xsVG9wPWxvZ0VsLnNjcm9sbEhlaWdodDsgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJIVUQoKXtcclxuICAgIGNvbnN0IGxpc3QgPSAodGVhbSkgPT4gWy4uLnVuaXRzQnlJZC52YWx1ZXMoKV0uZmlsdGVyKHU9PnUudGVhbT09PXRlYW0pXHJcbiAgICAgIC5tYXAodT0+YDxsaT48aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCI+PHNwYW4+JHt1Lm5hbWV9PC9zcGFuPjxlbT4ke3UuaHB9IFBWJHt1LnNoaWVsZD4wPycg4oCiIPCfm6EnK3Uuc2hpZWxkOicnfSR7dS5tYW5hPjA/JyDigKIg8J+UtycrdS5tYW5hOicnfTwvZW0+PC9saT5gKS5qb2luKCcnKTtcclxuICAgIGh1ZEEuaW5uZXJIVE1MID0gbGlzdCgnYWxseScpOyBodWRFLmlubmVySFRNTCA9IGxpc3QoJ2VuZW15Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVCYXJzKHUpe1xyXG4gICAgY29uc3QgaHA9dS5lbC5xdWVyeVNlbGVjdG9yKCcuaHAnKTsgaWYoaHApeyBocC50ZXh0Q29udGVudCA9IHUuaHA7IH1cclxuICAgIGNvbnN0IHNoPXUuZWwucXVlcnlTZWxlY3RvcignLnNoaWVsZCcpOyBpZihzaCl7IHNoLnRleHRDb250ZW50PXUuc2hpZWxkOyBzaC5zdHlsZS5kaXNwbGF5PXUuc2hpZWxkPjA/Jyc6J25vbmUnOyB9XHJcbiAgICBjb25zdCBtYT11LmVsLnF1ZXJ5U2VsZWN0b3IoJy5tYW5hJyk7ICAgaWYobWEpeyBtYS50ZXh0Q29udGVudD11Lm1hbmE7ICAgbWEuc3R5bGUuZGlzcGxheT11Lm1hbmE+MD8nJzonbm9uZSc7IH1cclxuICAgIC8vIFBlci11bml0IGJhcnMgb24gdGhlIGJvYXJkXHJcbiAgICBjb25zdCBocEZpbGwgPSB1LmVsLnF1ZXJ5U2VsZWN0b3IoJy51LWJhci0taHAgPiBzcGFuJyk7XHJcbiAgICBjb25zdCBtYUZpbGwgPSB1LmVsLnF1ZXJ5U2VsZWN0b3IoJy51LWJhci0tbWFuYSA+IHNwYW4nKTtcclxuICAgIGlmKGhwRmlsbCl7XHJcbiAgICAgIGNvbnN0IG1heEhwID0gTWF0aC5tYXgoMSwgdS5tYXhIcCB8fCB1LmhwIHx8IDEpO1xyXG4gICAgICBjb25zdCBjdXJIcCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heEhwLCB1LmhwIHx8IDApKTtcclxuICAgICAgaHBGaWxsLnN0eWxlLndpZHRoID0gTWF0aC5yb3VuZCgxMDAgKiBjdXJIcCAvIG1heEhwKSArICclJztcclxuICAgIH1cclxuICAgIGlmKG1hRmlsbCl7XHJcbiAgICAgIGNvbnN0IG1heE1hbmEgPSA1MDtcclxuICAgICAgY29uc3QgY3VyTWFuYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heE1hbmEsIHUubWFuYSB8fCAwKSk7XHJcbiAgICAgIG1hRmlsbC5zdHlsZS53aWR0aCA9IE1hdGgucm91bmQoMTAwICogY3VyTWFuYSAvIG1heE1hbmEpICsgJyUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gKGdsb2JhbCBnYXVnZXMgcmVtb3ZlZClcclxuXHJcbiAgLy8gLS0tIFNGWCBoZWxwZXIgd2l0aCBsaWdodCB0aHJvdHRsaW5nIC0tLVxyXG4gIGNvbnN0IGxhc3RTZnhBdCA9IG5ldyBNYXAoKTtcclxuICBmdW5jdGlvbiBwbGF5U2Z4KHVybCwgdm9sPTAuNywga2V5PXVybCwgbWluR2FwTXM9MTIwKXtcclxuICAgIHRyeXtcclxuICAgICAgaWYoIXVybCkgcmV0dXJuOyBjb25zdCBub3c9cGVyZm9ybWFuY2Uubm93KCk7IGNvbnN0IGxhc3Q9bGFzdFNmeEF0LmdldChrZXkpfHwwOyBpZihub3ctbGFzdDxtaW5HYXBNcykgcmV0dXJuO1xyXG4gICAgICBsYXN0U2Z4QXQuc2V0KGtleSwgbm93KTtcclxuICAgICAgY29uc3QgYSA9IG5ldyBBdWRpbyh1cmwpOyBhLnZvbHVtZT12b2w7IGEucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcbiAgICB9Y2F0Y2h7IC8qIGlnbm9yZSAqLyB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkluaXRpYWwoKXtcclxuICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykuZm9yRWFjaChjPT5jLmlubmVySFRNTD0nJyk7IGxvZ0VsLmlubmVySFRNTD0nJzsgdW5pdHNCeUlkLmNsZWFyKCk7XHJcbiAgICBmb3IoY29uc3QgdTAgb2YgUkVQTEFZLmluaXRpYWwpe1xyXG4gICAgICBjb25zdCB1ID0gey4uLnUwfTtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZWwuY2xhc3NOYW1lID0gYHVuaXQgdW5pdC0tJHt1LnRlYW19IHVuaXQtLSR7dS5jbGFzc31gO1xyXG4gIC8vIFBvcnRyYWl0IHdpdGggcGVyLXVuaXQgYmFycyB1bmRlciBpdFxyXG4gIGVsLmlubmVySFRNTCA9IGBcclxuICAgIDxpbWcgc3JjPVwiJHtmdWxsKHUuaW1nKX1cIiBhbHQ9XCJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ1LWJhcnNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInUtYmFyIHUtYmFyLS1ocFwiPjxzcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInUtYmFyIHUtYmFyLS1tYW5hXCI+PHNwYW4+PC9zcGFuPjwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgICAgY29uc3QgYyA9IGNlbGwodS54LCB1LnkpOyBpZiAoYykgYy5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIHUuZWwgPSBlbDsgdW5pdHNCeUlkLnNldCh1LmlkLCB1KTsgdXBkYXRlQmFycyh1KTtcclxuICAgIH1cclxuICByZW5kZXJIVUQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGx5QWN0aW9uKGEpe1xyXG4gICAgc3dpdGNoKGEudCl7XHJcbiAgICAgIGNhc2UgJ2Z4Jzoge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgIGNvbnN0IGF0ID0gQXJyYXkuaXNBcnJheShhLmF0KSA/IGEuYXQgOiBudWxsOyBpZighYXQpIGJyZWFrO1xyXG4gICAgICAgICAgY29uc3QgYyA9IGNlbGwoYXRbMF0sIGF0WzFdKTsgaWYoIWMpIGJyZWFrO1xyXG4gICAgICAgICAgY29uc3Qga2luZCA9IGEua2luZCB8fCAnZGVmYXVsdCc7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSAod2luZG93LkZYX1VSTFMgJiYgd2luZG93LkZYX1VSTFNba2luZF0pIHx8ICh3aW5kb3cuRlhfVVJMUyAmJiB3aW5kb3cuRlhfVVJMUy5kZWZhdWx0KTtcclxuICAgICAgICAgIGlmKCF1cmwpIGJyZWFrO1xyXG4gICAgICAgICAgY29uc3QgZnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZnguY2xhc3NOYW1lID0gJ2Z4IGZ4LS0nK2tpbmQ7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgaW1nLmFsdCA9IGtpbmQ7IGltZy5zcmMgPSBmdWxsKHVybCk7XHJcbiAgICAgICAgICBmeC5hcHBlbmRDaGlsZChpbWcpOyBjLmFwcGVuZENoaWxkKGZ4KTtcclxuICAgICAgICAgIGNvbnN0IGR1ciA9IE1hdGgubWF4KDIwMCwgTWF0aC5taW4oNDAwMCwgcGFyc2VJbnQoYS5kdXJ8fDEwMDAsMTApKSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57IGZ4LnJlbW92ZSgpOyB9LCBkdXIpO1xyXG4gICAgICAgIH1jYXRjaHsgLyogaWdub3JlICovIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdtb3ZlJzoge1xyXG4gICAgICAgIGNvbnN0IHU9dW5pdHNCeUlkLmdldChhLmlkKTsgaWYoIXUpYnJlYWs7XHJcbiAgICAgICAgY29uc3QgdG89Y2VsbChhLnRvWzBdLGEudG9bMV0pOyBpZighdG8pYnJlYWs7XHJcbiAgdG8uYXBwZW5kQ2hpbGQodS5lbCk7IHUueD1hLnRvWzBdOyB1Lnk9YS50b1sxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdhdHRhY2snOiB7XHJcbiAgICAgICAgY29uc3QgYXR0PXVuaXRzQnlJZC5nZXQoYS5hdHQpLCBkZWY9dW5pdHNCeUlkLmdldChhLmRlZik7IGlmKCFhdHR8fCFkZWYpYnJlYWs7XHJcbiAgICAgICAgY29uc3QgcHJldkhwID0gZGVmLmhwO1xyXG4gICAgICAgIGRlZi5ocD1hLmhwOyBkZWYuc2hpZWxkPWEuc2hpZWxkOyBpZihhLm1hbmEhPT11bmRlZmluZWQpIGF0dC5tYW5hPWEubWFuYTtcclxuICB1cGRhdGVCYXJzKGRlZik7IHVwZGF0ZUJhcnMoYXR0KTtcclxuICAgICAgICAvLyBoYWxmIEhQIGNyb3NzaW5nXHJcbiAgICAgICAgaWYocHJldkhwPjAgJiYgZGVmLmhwPjApe1xyXG4gICAgICAgICAgY29uc3Qgd2FzQWJvdmUgPSBwcmV2SHAgPiAoZGVmLm1heEhwfHxwcmV2SHAqMikvMjtcclxuICAgICAgICAgIGNvbnN0IG5vd0JlbG93ID0gZGVmLmhwIDw9IChkZWYubWF4SHB8fHByZXZIcCoyKS8yO1xyXG4gICAgICAgICAgaWYod2FzQWJvdmUgJiYgbm93QmVsb3cpeyBwbGF5U2Z4KHdpbmRvdy5TRlhfSEFMRkhQX1VSTCwgMC43LCAnaGFsZjonK2RlZi5pZCwgNDAwKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkZWYuaHA8PTApeyBkZWYuZWwuY2xhc3NMaXN0LmFkZCgna28nKTsgc2V0VGltZW91dCgoKT0+ZGVmLmVsLnJlbW92ZSgpLDEyMCk7IHBsYXlTZngod2luZG93LlNGWF9ERUFUSF9VUkwsIDAuOCwgJ2RlYXRoJywgMTUwKTsgfVxyXG4gICAgICAgIGlmKGEubG9nKSBsb2coYS5sb2cpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2hlYWwnOiB7XHJcbiAgICAgICAgY29uc3Qgc3JjPXVuaXRzQnlJZC5nZXQoYS5zcmMpLCBkc3Q9dW5pdHNCeUlkLmdldChhLmRzdCk7IGlmKCFzcmN8fCFkc3QpYnJlYWs7XHJcbiAgICAgICAgaWYoYS5tYW5hIT09dW5kZWZpbmVkKSBzcmMubWFuYT1hLm1hbmE7XHJcbiAgICAgICAgZHN0LmhwPU1hdGgubWluKGRzdC5tYXhIcCwoZHN0LmhwPz8wKSsoYS5hbW91bnQ/PzApKTtcclxuICAgICAgICAvLyBoZWFsIFNGWCAoY3JpdCBpZiBhbW91bnQgbGFyZ2UgYW5kIFVSTCBwcm92aWRlZClcclxuICAgICAgICBjb25zdCBjcml0ID0gKGEuY3JpdD09PXRydWUpIHx8IChhLmFtb3VudCAmJiBkc3QubWF4SHAgJiYgYS5hbW91bnQgPj0gMC4yNSpkc3QubWF4SHApO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGNyaXQgJiYgd2luZG93LlNGWF9IRUFMX0NSSVRfVVJMID8gd2luZG93LlNGWF9IRUFMX0NSSVRfVVJMIDogd2luZG93LlNGWF9IRUFMX1VSTDtcclxuICAgICAgICBwbGF5U2Z4KHVybCwgY3JpdD8wLjg6MC42LCBjcml0PydoZWFsY3JpdCc6J2hlYWwnLCA4MCk7XHJcbiAgdXBkYXRlQmFycyhzcmMpOyB1cGRhdGVCYXJzKGRzdCk7IGlmKGEubG9nKSBsb2coYS5sb2cpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2xvZyc6IGlmKGEubXNnKSBsb2coYS5tc2cpOyBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlUaWNrKCl7XHJcbiAgICBpZihzdGVwID49IChSRVBMQVkuYWN0aW9ucz8ubGVuZ3RoIHx8IDApKXtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7IHRpbWVyPW51bGw7XHJcbiAgICAgIGNvbnN0IG91dGNvbWUgPSBSRVBMQVkud2lubmVyPT09J2FsbHknID8gJ3ZpY3RvcnknIDogUkVQTEFZLndpbm5lcj09PSdlbmVteScgPyAnZGVmZWF0JyA6ICdkcmF3JztcclxuICAgICAgbG9nKG91dGNvbWU9PT0ndmljdG9yeSc/J1ZpY3RvaXJlICEnOm91dGNvbWU9PT0nZGVmZWF0Jz8nRMOpZmFpdGXigKYnOifDiWdhbGl0w6kgIScpO1xyXG4gICAgICAvLyBzaG93IG92ZXJsYXlcclxuICAgICAgY29uc3Qgb3YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LW92ZXJsYXknKTtcclxuICAgICAgY29uc3QgdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXRleHQnKTtcclxuICAgICAgY29uc3QgYnRuQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVzdWx0LWNvbnRpbnVlJyk7XHJcbiAgICAgIGNvbnN0IGJ0blMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXNvdW5kLXRvZ2dsZScpO1xyXG4gICAgICBpZiAob3YgJiYgdHgpIHtcclxuICAgICAgICBvdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICBvdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aWN0b3J5Jywgb3V0Y29tZT09PSd2aWN0b3J5Jyk7XHJcbiAgICAgICAgb3YuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZGVmZWF0Jywgb3V0Y29tZT09PSdkZWZlYXQnKTtcclxuICAgICAgICB0eC50ZXh0Q29udGVudCA9IG91dGNvbWU9PT0ndmljdG9yeScgPyAnVklDVE9JUkUnIDogb3V0Y29tZT09PSdkZWZlYXQnID8gJ0TDiUZBSVRFJyA6ICfDiUdBTElUw4knO1xyXG4gICAgICAgIGJnbUZhZGVPdXQoMTIwMCk7XHJcblxyXG4gICAgICAgIC8vIFZpY3RvcnkgU0ZYIChpZiBwcm92aWRlZClcclxuICAgICAgICBpZiAob3V0Y29tZSA9PT0gJ3ZpY3RvcnknKSB7XHJcbiAgICAgICAgICBjb25zdCBzZnhVcmwgPSB3aW5kb3cuU0ZYX1ZJQ1RPUllfVVJMO1xyXG4gICAgICAgICAgaWYgKHNmeFVybCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGF1ZCA9IG5ldyBBdWRpbyhzZnhVcmwpO1xyXG4gICAgICAgICAgICAgIGF1ZC52b2x1bWUgPSAwLjc7IGF1ZC5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYXVkLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChfKSB7IC8qIGlnbm9yZSAqLyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdXRjb21lID09PSAnZGVmZWF0Jykge1xyXG4gICAgICAgICAgcGxheVNmeCh3aW5kb3cuU0ZYX0RFRkVBVF9VUkwsIDAuNywgJ2RlZmVhdCcsIDIwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTb3VuZCBGWCAoV2ViQXVkaW8gc2ltcGxlIHRvbmVzKVxyXG4gICAgICAgIGxldCBhdWRpb0VuYWJsZWQgPSBmYWxzZSwgY3R4ID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBwbGF5SmluZ2xlKGtpbmQpe1xyXG4gICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBpZighYXVkaW9FbmFibGVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmKCFjdHgpIGN0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dHx8d2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gY3R4LmN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICBjb25zdCBub3RlcyA9IGtpbmQ9PT0ndmljdG9yeScgPyBbNTIzLDY1OSw3ODRdIDoga2luZD09PSdkZWZlYXQnID8gWzM5MiwzNDksMjYxXSA6IFs0NDAsNDQwLDQ0MF07XHJcbiAgICAgICAgICAgIG5vdGVzLmZvckVhY2goKGYsaSk9PntcclxuICAgICAgICAgICAgICBjb25zdCBvID0gY3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcclxuICAgICAgICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUdhaW4oKTtcclxuICAgICAgICAgICAgICBvLnR5cGU9J3NpbmUnOyBvLmZyZXF1ZW5jeS52YWx1ZT1mO1xyXG4gICAgICAgICAgICAgIG8uY29ubmVjdChnKTsgZy5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbik7XHJcbiAgICAgICAgICAgICAgY29uc3QgdCA9IG5vdyArIGkqMC4xODsgZy5nYWluLnNldFZhbHVlQXRUaW1lKDAuMDAxLHQpOyBnLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjIsdCswLjAyKTsgZy5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsdCswLjMpO1xyXG4gICAgICAgICAgICAgIG8uc3RhcnQodCk7IG8uc3RvcCh0KzAuMzIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1jYXRjaChlKXsgY29uc29sZS5kZWJ1ZygnYXVkaW8gZmFpbGVkJywgZSk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0blMpIHtcclxuICAgICAgICAgIGJ0blMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIGF1ZGlvRW5hYmxlZCA9ICFhdWRpb0VuYWJsZWQ7XHJcbiAgICAgICAgICAgIGJ0blMuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBhdWRpb0VuYWJsZWQ/ICd0cnVlJzonZmFsc2UnKTtcclxuICAgICAgICAgICAgaWYoYXVkaW9FbmFibGVkKXsgcGxheUppbmdsZShvdXRjb21lKTsgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb250aW51ZSBidXR0b24gb3IgY2xpY2sgYW55d2hlcmUgb24gdmVpbFxyXG4gICAgICAgIGNvbnN0IGhpZGUgPSAoKT0+IG92LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIGlmKGJ0bkMpIGJ0bkMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlLCB7IG9uY2U6dHJ1ZSB9KTtcclxuICAgICAgICBvdi5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LXZlaWwnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlLCB7IG9uY2U6dHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhcHBseUFjdGlvbihSRVBMQVkuYWN0aW9uc1tzdGVwKytdKTsgcmVuZGVySFVEKCk7XHJcbiAgfVxyXG5cclxuICBidG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBpZiAoIXRpbWVyKXsgdGltZXI9c2V0SW50ZXJ2YWwocGxheVRpY2ssVElDS19NUyk7IH1cclxuICAgIGlmIChiZ20pe1xyXG4gICAgICBiZ21FbmFibGVkID0gdHJ1ZTtcclxuICAgICAgaWYgKGJ0bk11c2ljKSBidG5NdXNpYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsJ3RydWUnKTtcclxuICAgICAgYmdtLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgYmdtLnBsYXkoKS50aGVuKCgpPT4gYmdtRmFkZUluKDQ1MCwgMC41KSkuY2F0Y2goKGUpPT57IGNvbnNvbGUuZGVidWcoJ2JnbSBwbGF5IGJsb2NrZWQnLCBlKTsgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyBpZih0aW1lcil7IGNsZWFySW50ZXJ2YWwodGltZXIpOyB0aW1lcj1udWxsOyB9IGJnbVBhdXNlKCk7IH0pO1xyXG4gIGJ0blJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgaWYodGltZXIpeyBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDsgfSBzdGVwPTA7IHNwYXduSW5pdGlhbCgpOyBpZiAoYmdtKSB7IGJnbVBhdXNlKCk7IGJnbS5jdXJyZW50VGltZSA9IDA7IH0gfSk7XHJcblxyXG4gIHNwYXduSW5pdGlhbCgpO1xyXG59KTtcclxuIiwiLy8gdGVhbS1idWlsZGVyLmpzXHJcblxyXG4vLyBiYXNlIGRlcyBhc3NldHMgZm91cm5pZSBwYXIgVHdpZzogd2luZG93LkFTU0VUX0JBU0UgPSBcInt7IGFzc2V0KCcnKSB9fVwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBBU1NFVF9CQVNFID0gKHdpbmRvdy5BU1NFVF9CQVNFIHx8ICcvJykucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xyXG4gIGNvbnN0IGZ1bGxJbWcgPSAocCkgPT4gQVNTRVRfQkFTRSArIFN0cmluZyhwIHx8ICcnKS5yZXBsYWNlKC9eXFwvKy8sICcnKTtcclxuICBcclxuICBjb25zb2xlLmxvZygnVGVhbSBCdWlsZGVyIHNjcmlwdCBsb2FkZWQhJywgeyBBU1NFVF9CQVNFIH0pO1xyXG4gIGNvbnN0IG93bmVkRWwgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvd25lZC1naXJscy1qc29uJyk7XHJcbiAgY29uc3Qgc3VnZ2VzdGVkRWwgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Z2dlc3RlZC1naXJscy1qc29uJyk7XHJcbiAgaWYgKCFvd25lZEVsKSByZXR1cm47XHJcblxyXG4gIC8qKiBAdHlwZSB7QXJyYXl9ICovXHJcbiAgY29uc3QgT1dORUQgICAgICAgID0gSlNPTi5wYXJzZShvd25lZEVsLnRleHRDb250ZW50IHx8ICdbXScpO1xyXG4gIC8qKiBAdHlwZSB7QXJyYXl9ICovXHJcbiAgY29uc3QgU1VHR0VTVEVEICAgID0gc3VnZ2VzdGVkRWwgPyBKU09OLnBhcnNlKHN1Z2dlc3RlZEVsLnRleHRDb250ZW50IHx8ICdbXScpIDogW107XHJcblxyXG4gIGNvbnN0IHBpY2tHcmlkICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNrLWdyaWQnKTtcclxuICBjb25zdCBiZW5jaEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVuY2gtZ3JpZCcpO1xyXG4gIGNvbnN0IGJvYXJkICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gIGNvbnN0IGl0ZW1zR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcy1ncmlkJyk7XHJcbiAgY29uc3QgYnRuUmVyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXJvbGwnKTtcclxuICBjb25zdCByZXJvbGxDb3VudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlcm9sbC1jb3VudCcpO1xyXG4gIGNvbnN0IGJ0bkxvY2sgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9jaycpO1xyXG4gIGNvbnN0IGJvbnVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLWJvbnVzZXMnKTtcclxuICBjb25zdCBza2VsZXRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXNrZWxldG9uJyk7XHJcbiAgLy8gRmxvYXRpbmcgZHJhZyBsYWJlbCBmb3IgaXRlbXNcclxuICBsZXQgZHJhZ1RpcCA9IG51bGw7IGNvbnN0IGdldERyYWdUaXAgPSAoKSA9PiB7XHJcbiAgICBpZiAoZHJhZ1RpcCkgcmV0dXJuIGRyYWdUaXA7XHJcbiAgICBkcmFnVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkcmFnVGlwLmNsYXNzTmFtZSA9ICdkcmFnLXRpcCc7XHJcbiAgICBPYmplY3QuYXNzaWduKGRyYWdUaXAuc3R5bGUsIHtcclxuICAgICAgcG9zaXRpb246J2ZpeGVkJywgekluZGV4OiA5OTk5OSwgcG9pbnRlckV2ZW50czonbm9uZScsXHJcbiAgICAgIGJhY2tncm91bmQ6J3JnYmEoMjYsIDI0LCA0NCwgMC45KScsIGNvbG9yOicjZmZmJywgcGFkZGluZzonNnB4IDEwcHgnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6JzEwcHgnLCBib3JkZXI6JzFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yKScsXHJcbiAgICAgIGJveFNoYWRvdzonMCA2cHggMjBweCByZ2JhKDAsMCwwLC4zNSknLCBmb250U2l6ZTonMTJweCcsXHJcbiAgICAgIHRyYW5zZm9ybTondHJhbnNsYXRlKC01MCUsIC0xNDAlKScsIHdoaXRlU3BhY2U6J25vd3JhcCdcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkcmFnVGlwKTsgcmV0dXJuIGRyYWdUaXA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgTUFYX1RFQU0gID0gNDtcclxuICBjb25zdCBwbGFjZWQgICAgPSBuZXcgTWFwKCk7IC8vIFwieCx5XCIgLT4geyBnaXJsLCBlbCwgaXRlbUlkIH1cclxuICBjb25zdCBpbkJlbmNoICAgPSBuZXcgTWFwKCk7IC8vIGdpcmxJZCAtPiBjYXJkRWxlbWVudFxyXG4gIGNvbnN0IEFMTF9JVEVNUyA9IEFycmF5LmlzQXJyYXkod2luZG93LklURU1TKSA/IHdpbmRvdy5JVEVNUyA6IFtdO1xyXG4gIC8vIEl0ZW1zOiBvbmx5IDQgcHJvcG9zYWxzIGF0IGEgdGltZSAobm8gZnVsbCBjYXRhbG9nIHZpZXcgaGVyZSlcclxuXHJcbiAgLy8gaGVscGVyc1xyXG4gIGNvbnN0IHJhbmRJbnQgPSAobikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XHJcbiAgY29uc3QgcGlja04gPSAoYXJyLCBuKSA9PiB7XHJcbiAgICBjb25zdCBwb29sID0gWy4uLmFycl0sIG91dCA9IFtdO1xyXG4gICAgd2hpbGUgKG91dC5sZW5ndGggPCBNYXRoLm1pbihuLCBwb29sLmxlbmd0aCkpIHtcclxuICAgICAgb3V0LnB1c2gocG9vbC5zcGxpY2UocmFuZEludChwb29sLmxlbmd0aCksIDEpWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfTtcclxuICBjb25zdCBjZWxsS2V5ID0gKHgsIHkpID0+IGAke3h9LCR7eX1gO1xyXG4gIGNvbnN0IGNob29zZTQgPSAoYXJyKSA9PiB7XHJcbiAgICBpZiAoIWFyci5sZW5ndGgpIHJldHVybiBbXTtcclxuICAgIGlmIChhcnIubGVuZ3RoIDw9IDQpIHJldHVybiBbLi4uYXJyXTtcclxuICAgIGNvbnN0IGlkcyA9IG5ldyBTZXQoKTsgY29uc3Qgb3V0ID0gW107XHJcbiAgICB3aGlsZSAob3V0Lmxlbmd0aCA8IDQgJiYgaWRzLnNpemUgPCBhcnIubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGkgPSByYW5kSW50KGFyci5sZW5ndGgpO1xyXG4gICAgICBpZiAoIWlkcy5oYXMoaSkpIHsgaWRzLmFkZChpKTsgb3V0LnB1c2goYXJyW2ldKTsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9O1xyXG5cclxuICAvLyAtLS0tIEl0ZW1zIHByb3Bvc2FscyAoNCBhdCBhIHRpbWUpIC0tLS1cclxuICBsZXQgY3VycmVudEl0ZW1zID0gY2hvb3NlNChBTExfSVRFTVMpO1xyXG4gIGZ1bmN0aW9uIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgaWYgKCFpdGVtc0dyaWQpIHJldHVybjtcclxuICAgIC8vIEFsd2F5cyByZXBsYWNlIHByZS1yZW5kZXJlZCBjb250ZW50IHRvIGtlZXAgYmVoYXZpb3IgY29uc2lzdGVudFxyXG4gICAgaXRlbXNHcmlkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYgKCFBTExfSVRFTVMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGVtcHR5LmNsYXNzTmFtZSA9ICd0Yi1pdGVtc19fZW1wdHknO1xyXG4gICAgICBlbXB0eS50ZXh0Q29udGVudCA9ICdBam91dGUgZGVzIGltYWdlcyBkYW5zIHB1YmxpYy9pbWFnZXMvaXRlbXMvJztcclxuICAgICAgaXRlbXNHcmlkLmFwcGVuZENoaWxkKGVtcHR5KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY3VycmVudEl0ZW1zLmZvckVhY2goaXQgPT4ge1xyXG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgYnRuLnR5cGUgPSAnYnV0dG9uJzsgYnRuLmNsYXNzTmFtZSA9ICd0Yi1pdGVtJztcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pdGVtLWlkJywgaXQuaWQpO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGl0LmRlc2MgPyBgJHtpdC5uYW1lfSDigJQgJHtpdC5kZXNjfWAgOiBpdC5uYW1lO1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCd0aXRsZScsIHRpdGxlKTtcclxuICAgICAgYnRuLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgIGJ0bi5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2Z1bGxJbWcoaXQuaW1nKX1cIiBhbHQ9XCIke2l0Lm5hbWV9XCI+YDtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KHsgX190eXBlOiAnaXRlbScsIGlkOiBpdC5pZCB9KSk7XHJcbiAgICAgICAgY29uc3QgdGlwID0gZ2V0RHJhZ1RpcCgpO1xyXG4gICAgICAgIHRpcC50ZXh0Q29udGVudCA9IGAke2l0Lm5hbWV9IOKGkiAoZMOpcG9zZSBzdXIgdW5lIGjDqXJvw69uZSlgO1xyXG4gICAgICAgIHRpcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgfSk7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xyXG4gICAgICAgIGlmIChkcmFnVGlwKSBkcmFnVGlwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpdGVtc0dyaWQuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBVSSByZW5kZXJlcnMgLS0tLVxyXG4gIGZ1bmN0aW9uIHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2UgfSkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSBgdGItY2FyZCB0Yi1jYXJkLS0ke2dpcmwuY2xhc3N9YDtcclxuICAgIGNhcmQuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGNhcmQuZGF0YXNldC5pZCA9IGdpcmwuaWQ7XHJcbiAgICBjYXJkLmRhdGFzZXQuc291cmNlID0gc291cmNlO1xyXG5cclxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9faW1nXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX21ldGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fbmFtZVwiPiR7Z2lybC5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX190YWdzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfVwiPiR7Y2xhc3NMYWJlbChnaXJsLmNsYXNzKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyB0YWctZmFtaWx5XCI+JHtnaXJsLmZhbWlseSA/PyAnJ308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fc3RhdHNcIj5cclxuICAgICAgICA8c3Bhbj5QViAke2dpcmwucGR2fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5BVEsgJHtnaXJsLmF0a308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+UFJDICR7TWF0aC5yb3VuZCgoZ2lybC5jaGFuY2VfYXRrID8/IDApICogMTAwKX0lPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkoZ2lybCkpO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gY2FyZC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpKTtcclxuICAgIH0pO1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpKTtcclxuXHJcbiAgICAvLyBkb3VibGUtY2xpYyAtPiB0b2dnbGUgYmFuY1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gVG9nZ2xlIGJhbmM6IHNpIGTDqWrDoCBkYW5zIGxlIGJhbmMgLT4gb24gbGUgbGFpc3NlIGFmZmljaMOpIG1haXMgb24gbGUgbWFycXVlIGNvbW1lIG5vbi1wcsOpc2VydsOpXHJcbiAgICAgIGlmIChjYXJkLnBhcmVudEVsZW1lbnQgPT09IGJlbmNoR3JpZCkge1xyXG4gICAgICAgIC8vIFJldHJhaXQgZHUgYmFuYzogb24gbGUgcmVtZXQgZGFucyBzb24gY29udGVuZXVyIHNvdXJjZSBzaSBwb3NzaWJsZSwgc2lub24gb24gbGUgc3VwcHJpbWUgcHJvcHJlbWVudFxyXG4gICAgICAgIGluQmVuY2guZGVsZXRlKGdpcmwuaWQpO1xyXG4gICAgICAgIC8vIETDqXBsYWNlciBsYSBjYXJ0ZSB2ZXJzIGxhIHpvbmUgZGUgcGljayBwb3VyIGxhIHJlbmRyZSByZXJvbGxhYmxlXHJcbiAgICAgICAgaWYgKHBpY2tHcmlkKSBwaWNrR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBlbHNlIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQWpvdXQgYXUgYmFuY1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZUNoaXAoZ2lybCwgaXRlbUlkID0gbnVsbCkge1xyXG4gICAgY29uc3QgY2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hpcC5jbGFzc05hbWUgPSBgY2hpcCAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfWA7XHJcbiAgICBjaGlwLnRpdGxlID0gZ2lybC5uYW1lO1xyXG4gICAgY2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgY2hpcC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbWcgY2xhc3M9XCJjaGlwLWF2YXRhclwiIHNyYz1cIiR7ZnVsbEltZyhnaXJsLmltZyl9XCIgYWx0PVwiJHtnaXJsLm5hbWV9XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY2hpcC1uYW1lXCI+JHtnaXJsLm5hbWV9PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNoaXAtaXRlbVwiPjwvc3Bhbj5cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgaG9sZGVyID0gY2hpcC5xdWVyeVNlbGVjdG9yKCcuY2hpcC1pdGVtJyk7XHJcbiAgICBpZiAoaXRlbUlkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSAod2luZG93LklURU1TIHx8IFtdKS5maW5kKGkgPT4gU3RyaW5nKGkuaWQpID09PSBTdHJpbmcoaXRlbUlkKSk7XHJcbiAgICAgIGlmIChpdGVtICYmIGhvbGRlcikge1xyXG4gICAgICAgIGNvbnN0IHRpcCA9IGl0ZW0uZGVzYyA/IGAke2l0ZW0ubmFtZX0g4oCUICR7aXRlbS5kZXNjfWAgOiBpdGVtLm5hbWU7XHJcbiAgICAgICAgaG9sZGVyLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwiY2hpcC1pdGVtLWltZ1wiIHNyYz1cIiR7ZnVsbEltZyhpdGVtLmltZyl9XCIgYWx0PVwiJHtpdGVtLm5hbWV9XCIgdGl0bGU9XCIke3RpcH1cIj5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xpY2sgb24gdGhlIGl0ZW0gaWNvbiB0byB1bmVxdWlwIChkb2Vzbid0IHJlbW92ZSB0aGUgdW5pdClcclxuICAgIGlmIChob2xkZXIpIHtcclxuICAgICAgaG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XHJcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IGNoaXAucGFyZW50RWxlbWVudD8uY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgICAgICBpZiAoIWNlbGwpIHJldHVybjtcclxuICAgICAgICBjb25zdCBrZXkgPSBjZWxsS2V5KGNlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueSk7XHJcbiAgICAgICAgY29uc3Qgc2xvdCA9IHBsYWNlZC5nZXQoa2V5KTtcclxuICAgICAgICBpZiAoIXNsb3QpIHJldHVybjtcclxuICAgICAgICBzbG90Lml0ZW1JZCA9IG51bGw7XHJcbiAgICAgICAgaG9sZGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBKU09OLnN0cmluZ2lmeShnaXJsKSk7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBjaGlwLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJykpO1xyXG4gICAgfSk7XHJcbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiBjaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJykpO1xyXG5cclxuICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjZWxsID0gY2hpcC5wYXJlbnRFbGVtZW50Py5jbG9zZXN0KCcuY2VsbCcpO1xyXG4gICAgICBpZiAoY2VsbCkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGNlbGxLZXkoY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55KTtcclxuICAgICAgICBwbGFjZWQuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWluQmVuY2guaGFzKGdpcmwuaWQpKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSk7XHJcbiAgICAgICAgYmVuY2hHcmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIGluQmVuY2guc2V0KGdpcmwuaWQsIGNhcmQpO1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZUxvY2tTdGF0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNoaXA7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUGljaygpIHtcclxuICBwaWNrR3JpZC5pbm5lckhUTUwgPSAnJztcclxuICBsZXQgcG9vbCA9IFNVR0dFU1RFRC5sZW5ndGggPyBbLi4uU1VHR0VTVEVEXSA6IFsuLi5PV05FRF07XHJcbiAgaWYgKHBvb2wubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gIC8vIG9uIGR1cGxpcXVlIHNpIDwgNFxyXG4gIHdoaWxlIChwb29sLmxlbmd0aCA8IDQpIHBvb2wgPSBwb29sLmNvbmNhdChwb29sKTtcclxuXHJcbiAgLy8gRXhjbHVyZSBjZXV4IGTDqWrDoCBhdSBiYW5jIChwcsOpc2VydsOpcykgZHUgdGlyYWdlXHJcbiAgY29uc3QgcHJlc2VydmVkSWRzID0gbmV3IFNldChBcnJheS5mcm9tKGluQmVuY2gua2V5cygpKSk7XHJcbiAgY29uc3QgcG9vbDIgPSBwb29sLmZpbHRlcihnID0+ICFwcmVzZXJ2ZWRJZHMuaGFzKGcuaWQpKTtcclxuXHJcbiAgLy8gU8OpbGVjdGlvbm5lIGp1c3F1J8OgIDQgc3VnZ2VzdGlvbnMgdW5pcXVlcyBwYXJtaSBsZSBwb29sIHJlc3RhbnRcclxuICBjb25zdCBwaWNrcyA9IFtdO1xyXG4gIGNvbnN0IHRha2VuID0gbmV3IFNldCgpO1xyXG4gIGNvbnN0IHRhcmdldCA9IE1hdGgubWluKDQsIHBvb2wyLmxlbmd0aCk7XHJcbiAgd2hpbGUgKHBpY2tzLmxlbmd0aCA8IHRhcmdldCAmJiB0YWtlbi5zaXplIDwgcG9vbDIubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9vbDIubGVuZ3RoKTtcclxuICAgIGlmICghdGFrZW4uaGFzKGkpKSB7IHRha2VuLmFkZChpKTsgcGlja3MucHVzaChwb29sMltpXSk7IH1cclxuICB9XHJcblxyXG4gIHBpY2tzLmZvckVhY2goZyA9PiBwaWNrR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGcsIHsgc291cmNlOiAncGljaycgfSkpKTtcclxufVxyXG4gIGZ1bmN0aW9uIGNsYXNzVGFnKGNscykge1xyXG4gICAgc3dpdGNoIChjbHMpIHtcclxuICAgICAgY2FzZSAnZHBzX21lbGVlJzogIHJldHVybiAndGFnLW1lbGVlJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAndGFnLXJhbmdlZCc7XHJcbiAgICAgIGNhc2UgJ3RhbmsnOiAgICAgICByZXR1cm4gJ3RhZy10YW5rJztcclxuICAgICAgY2FzZSAnaGVhbGVyJzogICAgIHJldHVybiAndGFnLWhlYWwnO1xyXG4gICAgICBkZWZhdWx0OiAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBjbGFzc0xhYmVsKGNscykge1xyXG4gICAgc3dpdGNoIChjbHMpIHtcclxuICAgICAgY2FzZSAnZHBzX21lbGVlJzogIHJldHVybiAnRFBTIEPDoEMnO1xyXG4gICAgICBjYXNlICdkcHNfcmFuZ2VkJzogcmV0dXJuICdEUFMgZGlzdGFuY2UnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICdUYW5rJztcclxuICAgICAgY2FzZSAnaGVhbGVyJzogICAgIHJldHVybiAnSGVhbGVyJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiBjbHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tIERuRCBib2FyZCAtLS0tXHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2VsbCcpO1xyXG4gICAgaWYgKCFjZWxsKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBjZWxsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBrZXkgPSBjZWxsS2V5KHgsIHkpO1xyXG5cclxuICBjb25zdCBkcmFnZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50Yi1jYXJkLmRyYWdnaW5nLCAuY2hpcC5kcmFnZ2luZywgLnRiLWl0ZW0uZHJhZ2dpbmcnKTtcclxuICAgIGlmICghZHJhZ2dpbmcpIHJldHVybjtcclxuICBjb25zdCBkdCA9IGUuZGF0YVRyYW5zZmVyO1xyXG4gIGNvbnN0IHBheWxvYWQgPSBkdC5nZXREYXRhKCd0ZXh0L3BsYWluJykgfHwgJ3t9JztcclxuICBsZXQgZ2lybCA9IHt9O1xyXG4gIHRyeSB7IGdpcmwgPSBKU09OLnBhcnNlKHBheWxvYWQpOyB9IGNhdGNoIHt9XHJcbiAgaWYgKGdpcmwgJiYgZ2lybC5fX3R5cGUgPT09ICdpdGVtJykgcmV0dXJuOyAvLyBsZXQgdGhlIGl0ZW0gaGFuZGxlciBtYW5hZ2UgaXRcclxuXHJcbiAgICAvLyBzaSBtw6ptZSBow6lybyBkw6lqw6AgcGxhY8OpIGFpbGxldXJzIC0+IGxpYsOocmUgbOKAmWFuY2llbm5lIGNlbGx1bGVcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHBsYWNlZCkge1xyXG4gICAgICBpZiAodi5naXJsLmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBjb25zdCBvbGRDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtrLnNwbGl0KCcsJylbMF19XCJdW2RhdGEteT1cIiR7ay5zcGxpdCgnLCcpWzFdfVwiXWApO1xyXG4gICAgICAgIGlmIChvbGRDZWxsKSBvbGRDZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGltaXRlIMOpcXVpcGVcclxuICAgIGlmICghcGxhY2VkLmhhcyhrZXkpICYmIHBsYWNlZC5zaXplID49IE1BWF9URUFNKSByZXR1cm47XHJcblxyXG4gICAgLy8gc3dhcCBzaSBsYSBjZWxsdWxlIMOpdGFpdCBvY2N1cMOpZVxyXG4gICAgaWYgKHBsYWNlZC5oYXMoa2V5KSkge1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHBsYWNlZC5nZXQoa2V5KTtcclxuICAgICAgaWYgKGV4aXN0aW5nPy5lbCkge1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGV4aXN0aW5nLmdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pKTtcclxuICAgICAgICBpbkJlbmNoLnNldChleGlzdGluZy5naXJsLmlkLCBiZW5jaEdyaWQubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICBjb25zdCBjaGlwID0gbWFrZUNoaXAoZ2lybCk7XHJcbiAgICBjZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChjaGlwKTtcclxuICBwbGFjZWQuc2V0KGtleSwgeyBnaXJsLCBlbDogY2hpcCwgaXRlbUlkOiBudWxsIH0pO1xyXG4gICAgdXBkYXRlTG9ja1N0YXRlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIC0tLS0gRG5EIGJlbmNoIC0tLS1cclxuICBiZW5jaEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICBiZW5jaEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBnaXJsID0gSlNPTi5wYXJzZShlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJykgfHwgJ3t9Jyk7XHJcblxyXG4gICAgLy8gcmV0aXJlIGR1IGJvYXJkIHNpIHByw6lzZW50ZVxyXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgcGxhY2VkKSB7XHJcbiAgICAgIGlmICh2LmdpcmwuaWQgPT09IGdpcmwuaWQpIHtcclxuICAgICAgICBjb25zdCBjID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtrLnNwbGl0KCcsJylbMF19XCJdW2RhdGEteT1cIiR7ay5zcGxpdCgnLCcpWzFdfVwiXWApO1xyXG4gICAgICAgIGlmIChjKSBjLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHBsYWNlZC5kZWxldGUoayk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWluQmVuY2guaGFzKGdpcmwuaWQpKSB7XHJcbiAgICAgIGNvbnN0IGNhcmQgPSByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pO1xyXG4gICAgICBiZW5jaEdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgIGluQmVuY2guc2V0KGdpcmwuaWQsIGNhcmQpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTG9ja1N0YXRlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIC0tLS0gSXRlbXMgZHJhZyAmIGRyb3AgLS0tLVxyXG4gIC8vIE5vdGU6IGluZGl2aWR1YWwgaXRlbSBidXR0b25zIGF0dGFjaCB0aGVpciBvd24gZHJhZyBoYW5kbGVycyBpbiByZW5kZXJJdGVtcygpXHJcblxyXG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgLy8gaGFuZGxlIGl0ZW0gZHJvcHMgb250byBjaGlwc1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAnJztcclxuICAgIGlmICghcGF5bG9hZCkgcmV0dXJuOyAvLyBoYW5kbGVkIGFib3ZlIGZvciBoZXJvZXMgdG9vXHJcbiAgICBsZXQgZGF0YTsgdHJ5IHsgZGF0YSA9IEpTT04ucGFyc2UocGF5bG9hZCk7IH0gY2F0Y2ggeyBkYXRhID0gbnVsbDsgfVxyXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEuX190eXBlICE9PSAnaXRlbScpIHJldHVybjtcclxuICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2VsbCcpOyBpZiAoIWNlbGwpIHJldHVybjtcclxuICAgIGNvbnN0IGtleSA9IGNlbGxLZXkoY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55KTtcclxuICAgIGNvbnN0IHNsb3QgPSBwbGFjZWQuZ2V0KGtleSk7IGlmICghc2xvdCkgcmV0dXJuO1xyXG4gICAgLy8gYXNzaWduIGl0ZW0gKHJlcGxhY2UgYW55IGV4aXN0aW5nKVxyXG4gICAgc2xvdC5pdGVtSWQgPSBkYXRhLmlkO1xyXG4gICAgY29uc3QgY2hpcCA9IHNsb3QuZWw7XHJcbiAgICBjb25zdCBob2xkZXIgPSBjaGlwLnF1ZXJ5U2VsZWN0b3IoJy5jaGlwLWl0ZW0nKTtcclxuICAgIGNvbnN0IGl0ZW0gPSAod2luZG93LklURU1TIHx8IFtdKS5maW5kKGkgPT4gU3RyaW5nKGkuaWQpID09PSBTdHJpbmcoZGF0YS5pZCkpO1xyXG4gICAgaWYgKGhvbGRlciAmJiBpdGVtKSB7XHJcbiAgICAgIGNvbnN0IHRpcCA9IGl0ZW0uZGVzYyA/IGAke2l0ZW0ubmFtZX0g4oCUICR7aXRlbS5kZXNjfWAgOiBpdGVtLm5hbWU7XHJcbiAgaG9sZGVyLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwiY2hpcC1pdGVtLWltZ1wiIHNyYz1cIiR7ZnVsbEltZyhpdGVtLmltZyl9XCIgYWx0PVwiJHtpdGVtLm5hbWV9XCIgdGl0bGU9XCIke3RpcH1cIj5gO1xyXG4gIGNvbnN0IGltZyA9IGhvbGRlci5xdWVyeVNlbGVjdG9yKCcuY2hpcC1pdGVtLWltZycpO1xyXG4gIGlmIChpbWcpIHsgaW1nLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoJyk7IHNldFRpbWVvdXQoKCk9PiBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnZmxhc2gnKSwgNjAwKTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRyYWdUaXAgJiYgaXRlbSkge1xyXG4gICAgICBkcmFnVGlwLnRleHRDb250ZW50ID0gYCR7aXRlbS5uYW1lfSDihpIgJHtzbG90LmdpcmwubmFtZX1gO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57IGlmKGRyYWdUaXApIGRyYWdUaXAuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfSwgODUwKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVHJhY2sgcG9pbnRlciB0byBwb3NpdGlvbiBkcmFnIHRpcFxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICAgIGlmICghZHJhZ1RpcCB8fCBkcmFnVGlwLnN0eWxlLmRpc3BsYXkgIT09ICdibG9jaycpIHJldHVybjtcclxuICAgIGRyYWdUaXAuc3R5bGUubGVmdCA9IGAke2UuY2xpZW50WH1weGA7XHJcbiAgICBkcmFnVGlwLnN0eWxlLnRvcCAgPSBgJHtlLmNsaWVudFl9cHhgO1xyXG4gIH0pO1xyXG5cclxuICAvLyAtLS0tIGFjdGlvbnMgLS0tLVxyXG5sZXQgdGlja2V0SWQgPSBudWxsO1xyXG5sZXQgcG9sbFRpbWVyID0gbnVsbDtcclxuXHJcbmJ0bkxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKHNrZWxldG9uKSB7IHNrZWxldG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7IH1cclxuICAvLyBidWlsZCBwYXlsb2FkXHJcbiAgY29uc3QgbGluZXVwID0gQXJyYXkuZnJvbShwbGFjZWQuZW50cmllcygpKS5tYXAoKFtrZXksIHZhbF0pID0+IHtcclxuICAgIGNvbnN0IFt4LCB5XSA9IGtleS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gIGNvbnN0IGl0ZW1JZCA9IHZhbC5pdGVtSWQgPz8gbnVsbDtcclxuICByZXR1cm4gaXRlbUlkID8geyBpZDogdmFsLmdpcmwuaWQsIHgsIHksIGl0ZW06IFN0cmluZyhpdGVtSWQpIH0gOiB7IGlkOiB2YWwuZ2lybC5pZCwgeCwgeSB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBTVEFSVF9VUkwgID0gd2luZG93Lk1NPy5zdGFydCAgPz8gJy9tYXRjaG1ha2luZy9zdGFydCc7XHJcbiAgY29uc3QgU1RBVFVTX1RQTCA9IHdpbmRvdy5NTT8uc3RhdHVzID8/ICcvbWF0Y2htYWtpbmcvc3RhdHVzL19fSURfXyc7XHJcbiAgY29uc3Qgc3RhdHVzVXJsICA9IChpZCkgPT4gU1RBVFVTX1RQTC5yZXBsYWNlKCdfX0lEX18nLCBTdHJpbmcoaWQpKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0NhbGxpbmcgU1RBUlRfVVJMID0nLCBTVEFSVF9VUkwpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzICA9IGF3YWl0IGZldGNoKFNUQVJUX1VSTCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxpbmV1cCB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIHRyeSB7IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpOyB9IGNhdGNoIHsgZGF0YSA9IG51bGw7IH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnbWF0Y2htYWtpbmcvc3RhcnQgLT4nLCByZXMuc3RhdHVzLCBkYXRhID8/IHRleHQpO1xyXG5cclxuICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgIGFsZXJ0KGBNYXRjaG1ha2luZyBmYWlsZWQgKCR7cmVzLnN0YXR1c30pOlxcbiR7ZGF0YT8uZXJyb3IgPz8gdGV4dH1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhIHx8IChkYXRhLnN0YXR1cyAhPT0gJ21hdGNoZWQnICYmIGRhdGEuc3RhdHVzICE9PSAncXVldWVkJykpIHtcclxuICAgICAgYWxlcnQoJ1LDqXBvbnNlIGluYXR0ZW5kdWU6XFxuJyArIChkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiB0ZXh0KSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdtYXRjaGVkJykge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbWF0Y2gvJHtkYXRhLm1hdGNoSWR9YDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHF1ZXVlZCAtPiBwb2xsIHN0YXR1c1xyXG4gICAgdGlja2V0SWQgPSBkYXRhLnRpY2tldElkO1xyXG4gICAgYnRuTG9jay5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBidG5Mb2NrLnRleHRDb250ZW50ID0gJ/CflI4gUmVjaGVyY2hlIGVuIGNvdXJz4oCmJztcclxuXHJcbiAgICBwb2xsVGltZXIgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaChzdGF0dXNVcmwodGlja2V0SWQpLCB7IGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pO1xyXG4gICAgICBjb25zdCBqID0gYXdhaXQgci5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdtYXRjaG1ha2luZy9zdGF0dXMgLT4nLCBqKTtcclxuICAgICAgaWYgKGouc3RhdHVzID09PSAnbWF0Y2hlZCcpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHBvbGxUaW1lcik7XHJcbiAgICBpZiAoc2tlbGV0b24pIHsgc2tlbGV0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTsgfVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9tYXRjaC8ke2oubWF0Y2hJZH1gO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MDAwKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgYWxlcnQoJ0VycmV1ciByw6lzZWF1OiAnICsgZS5tZXNzYWdlKTtcclxuICBpZiAoc2tlbGV0b24pIHsgc2tlbGV0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTsgfVxyXG4gIH1cclxufSk7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2tTdGF0ZSgpIHtcclxuICAgIGJ0bkxvY2suZGlzYWJsZWQgPSAocGxhY2VkLnNpemUgIT09IE1BWF9URUFNKTtcclxuICAgIHJlbmRlckJvbnVzZXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLSBTeW5lcmd5IGNvbXB1dGF0aW9uIChjbGllbnQtc2lkZSBtaXJyb3Igb2Ygc2VydmVyIHRpZXJzKSAtLS1cclxuICBmdW5jdGlvbiBjb21wdXRlQm9udXNlcygpIHtcclxuICAgIGNvbnN0IGNvdW50cyA9IHt9OyAvLyBmYW1pbHkgLT4gY291bnRcclxuICAgIGZvciAoY29uc3QgWywge2dpcmx9XSBvZiBwbGFjZWQpIHtcclxuICAgICAgY29uc3QgZmFtID0gKGdpcmwuZmFtaWx5IHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAoIWZhbSkgY29udGludWU7IGNvdW50c1tmYW1dID0gKGNvdW50c1tmYW1dIHx8IDApICsgMTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpZXJzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IFtmYW0sIG5dIG9mIE9iamVjdC5lbnRyaWVzKGNvdW50cykpIHtcclxuICAgICAgY29uc3QgdGllciA9IG4gPj0gNCA/IDQgOiAobiA+PSAzID8gMyA6IChuID49IDIgPyAyIDogMCkpO1xyXG4gICAgICBpZiAodGllciA9PT0gMCkgY29udGludWU7IHRpZXJzW2ZhbV0gPSB7IG4sIHRpZXIgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aWVycztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckJvbnVzZXMoKSB7XHJcbiAgICBpZiAoIWJvbnVzTGlzdCkgcmV0dXJuO1xyXG4gICAgY29uc3QgdGllcnMgPSBjb21wdXRlQm9udXNlcygpO1xyXG4gICAgYm9udXNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgbGFiZWwgPSAoZmFtLCB0aWVyLCBuKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcCA9IHtcclxuICAgICAgICBzb2xlaWw6IHsyOidBVEsgKzUlJywzOidQcsOpY2lzaW9uICs1JScsNDonQ3JpdCArNSUnfSxcclxuICAgICAgICBsdW5lOiAgIHsyOidFc3F1aXZlICszJScsMzonRXNxdWl2ZSArMiUgJiBNYW5hICsxMCcsNDonQm91Y2xpZXIgKzEwJ30sXHJcbiAgICAgICAgbmF0dXJlOiB7MjonUFYgKzUlJywzOidCb3VjbGllciArMTUnLDQ6J1BWICs1JSd9LFxyXG4gICAgICAgIGlkb2xlOiAgezI6J0NyaXQgKzUlJywzOidBVEsgKzUlJyw0OidNYW5hICsxMCd9LFxyXG4gICAgICAgIG9tYnJlOiAgezI6J0VzcXVpdmUgKzUlJywzOidQcsOpY2lzaW9uICs1JScsNDonQm91Y2xpZXIgKzE1J30sXHJcbiAgICAgICAgYXJjYW5lOiB7MjonUHLDqWNpc2lvbiArNSUnLDM6J01hbmEgKzE1Jyw0OidDcml0ICs1JSd9LFxyXG4gICAgICAgIGV0b2lsZTogezI6J1Byw6ljaXNpb24gKzMlJywzOidDcml0ICs1JScsNDonQVRLICs1JSd9LFxyXG4gICAgICAgIG9jZWFuOiAgezI6J0VzcXVpdmUgKzMlJywzOidNYW5hICsxMCcsNDonUHLDqWNpc2lvbiArNSUnfVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBlZmZlY3QgPSAobWFwW2ZhbV0gJiYgbWFwW2ZhbV1bdGllcl0pID8gbWFwW2ZhbV1bdGllcl0gOiBgUGFsaWVyICR7dGllcn1gO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGZhbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGZhbS5zbGljZSgxKTtcclxuICAgICAgcmV0dXJuIGAke3RpdGxlfSB4JHtufSDigJQgJHtlZmZlY3R9YDtcclxuICAgIH07XHJcbiAgICBjb25zdCBJQ09OID0geyBzb2xlaWw6J+KYgO+4jycsIGx1bmU6J/CfjJknLCBuYXR1cmU6J/CfjYMnLCBpZG9sZTon8J+OtScsIG9tYnJlOifwn4yRJywgYXJjYW5lOifinKgnLCBldG9pbGU6J+KtkCcsIG9jZWFuOifwn4yKJyB9O1xyXG4gICAgT2JqZWN0LmVudHJpZXModGllcnMpLmZvckVhY2goKFtmYW0sIHt0aWVyLCBufV0pID0+IHtcclxuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaS5jbGFzc05hbWUgPSBgYm9udXMtaXRlbSBmYW0tJHtmYW19IHRpZXItJHt0aWVyfWA7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZmFtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmFtLnNsaWNlKDEpO1xyXG4gICAgICBjb25zdCBlZmZlY3RUZXh0ID0gbGFiZWwoZmFtLCB0aWVyLCBuKS5zcGxpdCgnIOKAlCAnKS5wb3AoKTtcclxuICAgICAgY29uc3QgcGN0ID0gTWF0aC5taW4oMTAwLCBNYXRoLnJvdW5kKChuIC8gNCkgKiAxMDApKTtcclxuICAgICAgbGkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmFtLWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj4ke0lDT05bZmFtXSB8fCAn4pynJ308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYW0tbmFtZVwiPiR7dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRcIj54JHtufTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2F1Z2VcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCI0XCIgYXJpYS12YWx1ZW5vdz1cIiR7bn1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXJcIiBzdHlsZT1cIndpZHRoOiR7cGN0fSVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVmZmVjdFwiPiR7ZWZmZWN0VGV4dH08L3NwYW4+XHJcbiAgICAgIGA7XHJcbiAgICAgIGJvbnVzTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGluaXRcclxuICByZW5kZXJQaWNrKCk7XHJcbiAgcmVuZGVySXRlbXMoKTtcclxuICByZW5kZXJCb251c2VzKCk7XHJcblxyXG4gIC8vIC0tLSBSZXJvbGwgbGltaXTDqSDDoCAzIC0tLVxyXG4gIGxldCByZXJvbGxzTGVmdCA9IE51bWJlcih3aW5kb3cuUkVST0xMU19MRUZUID8/IDMpO1xyXG4gIGNvbnN0IHVwZGF0ZVJlcm9sbFVJID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlcm9sbENvdW50RWwpIHJlcm9sbENvdW50RWwudGV4dENvbnRlbnQgPSBgKCR7cmVyb2xsc0xlZnR9IHJlc3RhbnQke3Jlcm9sbHNMZWZ0PjE/J3MnOicnfSlgO1xyXG4gICAgaWYgKGJ0blJlcm9sbCkgYnRuUmVyb2xsLmRpc2FibGVkID0gcmVyb2xsc0xlZnQgPD0gMDtcclxuICB9O1xyXG4gIHVwZGF0ZVJlcm9sbFVJKCk7XHJcbiAgaWYgKGJ0blJlcm9sbCkge1xyXG4gICAgYnRuUmVyb2xsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocmVyb2xsc0xlZnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHdpbmRvdy5SRVJPTExfREVDX1VSTCwgeyBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmVyb2xsc0xlZnQgPSBOdW1iZXIoZGF0YT8ubGVmdCA/PyByZXJvbGxzTGVmdCk7XHJcbiAgICAgIH0gY2F0Y2gge31cclxuICAgICAgdXBkYXRlUmVyb2xsVUkoKTtcclxuICByZW5kZXJQaWNrKCk7IC8vIHBlcnNvbm5hZ2VzXHJcbiAgLy8gYWxzbyByZWZyZXNoIHRoZSA0IGl0ZW0gcHJvcG9zYWxzXHJcbiAgY3VycmVudEl0ZW1zID0gY2hvb3NlNChBTExfSVRFTVMpO1xyXG4gIHJlbmRlckl0ZW1zKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC90ZWFtLWJ1aWxkZXIuanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9JbnNjcmlwdGlvbi5qcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L2hvbWUuanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9tYXRjaC5qcyc7IFxyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3MxIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXNzMiIsInJlZ2lzdGVyQnRuIiwiY2hlY2tQYXNzd29yZHMiLCJ2YWx1ZSIsImRpc2FibGVkIiwidHJhY2siLCJwcmV2IiwicXVlcnlTZWxlY3RvciIsIm5leHQiLCJzdGVwIiwic2Nyb2xsQnkiLCJkZWx0YSIsImxlZnQiLCJiZWhhdmlvciIsImNvbnNvbGUiLCJsb2ciLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJBU1NFVF9CQVNFIiwid2luZG93IiwicmVwbGFjZSIsImZ1bGwiLCJwIiwiU3RyaW5nIiwiYm9hcmQiLCJsb2dFbCIsImh1ZEEiLCJodWRFIiwiYnRuU3RhcnQiLCJidG5QYXVzZSIsImJ0blJlc2V0IiwiYnRuTXVzaWMiLCJ3YXJuIiwiUkVQTEFZIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJpbml0aWFsIiwiZGVidWciLCJmaWx0ZXIiLCJ1IiwidGVhbSIsImxlbmd0aCIsInVuaXRzQnlJZCIsIk1hcCIsInRpbWVyIiwiVElDS19NUyIsImJnbSIsImJnbUVuYWJsZWQiLCJiZ21GYWRpbmciLCJiZ21VcmwiLCJCR01fVVJMIiwiQXVkaW8iLCJsb29wIiwicHJlbG9hZCIsInZvbHVtZSIsInRpdGxlIiwic2V0QXR0cmlidXRlIiwicGxheSIsInBhdXNlIiwiYmdtUGxheSIsImUiLCJiZ21QYXVzZSIsImJnbUZhZGVPdXQiLCJtcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInN0YXJ0IiwidDAiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInN0ZXBGbiIsImsiLCJNYXRoIiwibWluIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmdtRmFkZUluIiwidGFyZ2V0IiwiY2VsbCIsIngiLCJ5IiwiY29uY2F0IiwibXNnIiwiZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInJlbmRlckhVRCIsImxpc3QiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ2YWx1ZXMiLCJtYXAiLCJpbWciLCJuYW1lIiwiaHAiLCJzaGllbGQiLCJtYW5hIiwiam9pbiIsImlubmVySFRNTCIsInVwZGF0ZUJhcnMiLCJlbCIsInNoIiwic3R5bGUiLCJkaXNwbGF5IiwibWEiLCJocEZpbGwiLCJtYUZpbGwiLCJtYXhIcCIsIm1heCIsImN1ckhwIiwid2lkdGgiLCJyb3VuZCIsIm1heE1hbmEiLCJjdXJNYW5hIiwibGFzdFNmeEF0IiwicGxheVNmeCIsInVybCIsInZvbCIsImtleSIsIm1pbkdhcE1zIiwibGFzdCIsImdldCIsInNldCIsImEiLCJfdW51c2VkIiwic3Bhd25Jbml0aWFsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjIiwiY2xlYXIiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwidTAiLCJfb2JqZWN0U3ByZWFkIiwiY2xhc3NOYW1lIiwiaWQiLCJlcnIiLCJmIiwiYXBwbHlBY3Rpb24iLCJ0IiwiYXQiLCJraW5kIiwiRlhfVVJMUyIsImZ4IiwiYWx0Iiwic3JjIiwiZHVyIiwicGFyc2VJbnQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiX3VudXNlZDIiLCJ0byIsImF0dCIsImRlZiIsInByZXZIcCIsIndhc0Fib3ZlIiwibm93QmVsb3ciLCJTRlhfSEFMRkhQX1VSTCIsImFkZCIsIlNGWF9ERUFUSF9VUkwiLCJfZHN0JGhwIiwiX2EkYW1vdW50IiwiZHN0IiwiYW1vdW50IiwiY3JpdCIsIlNGWF9IRUFMX0NSSVRfVVJMIiwiU0ZYX0hFQUxfVVJMIiwicGxheVRpY2siLCJfUkVQTEFZJGFjdGlvbnMiLCJhY3Rpb25zIiwiY2xlYXJJbnRlcnZhbCIsIm91dGNvbWUiLCJ3aW5uZXIiLCJvdiIsInR4IiwiYnRuQyIsImJ0blMiLCJfb3YkcXVlcnlTZWxlY3RvciIsInBsYXlKaW5nbGUiLCJhdWRpb0VuYWJsZWQiLCJjdHgiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjdXJyZW50VGltZSIsIm5vdGVzIiwiaSIsIm8iLCJjcmVhdGVPc2NpbGxhdG9yIiwiZyIsImNyZWF0ZUdhaW4iLCJ0eXBlIiwiZnJlcXVlbmN5IiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZ2FpbiIsInNldFZhbHVlQXRUaW1lIiwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSIsInN0b3AiLCJ0b2dnbGUiLCJzZnhVcmwiLCJTRlhfVklDVE9SWV9VUkwiLCJhdWQiLCJfIiwiU0ZYX0RFRkVBVF9VUkwiLCJoaWRlIiwib25jZSIsInNldEludGVydmFsIiwidGhlbiIsInIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRvU3RyaW5nVGFnIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsIkciLCJ2IiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJwdXNoIiwiX24iLCJGIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiZnJvbSIsInRlc3QiLCJyZXF1aXJlIiwiX3dpbmRvdyRSRVJPTExTX0xFRlQiLCJmdWxsSW1nIiwib3duZWRFbCIsInN1Z2dlc3RlZEVsIiwiT1dORUQiLCJTVUdHRVNURUQiLCJwaWNrR3JpZCIsImJlbmNoR3JpZCIsIml0ZW1zR3JpZCIsImJ0blJlcm9sbCIsInJlcm9sbENvdW50RWwiLCJidG5Mb2NrIiwiYm9udXNMaXN0Iiwic2tlbGV0b24iLCJkcmFnVGlwIiwiZ2V0RHJhZ1RpcCIsImFzc2lnbiIsInBvc2l0aW9uIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsImJhY2tncm91bmQiLCJjb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsInRyYW5zZm9ybSIsIndoaXRlU3BhY2UiLCJNQVhfVEVBTSIsInBsYWNlZCIsImluQmVuY2giLCJBTExfSVRFTVMiLCJJVEVNUyIsInJhbmRJbnQiLCJmbG9vciIsInJhbmRvbSIsInBpY2tOIiwiYXJyIiwicG9vbCIsIm91dCIsInNwbGljZSIsImNlbGxLZXkiLCJjaG9vc2U0IiwiaWRzIiwiU2V0Iiwic2l6ZSIsImhhcyIsImN1cnJlbnRJdGVtcyIsInJlbmRlckl0ZW1zIiwiZW1wdHkiLCJpdCIsImJ0biIsImRlc2MiLCJkcmFnZ2FibGUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwic3RyaW5naWZ5IiwiX190eXBlIiwidGlwIiwicmVuZGVyQ2FyZCIsImdpcmwiLCJfcmVmIiwiX2dpcmwkZmFtaWx5IiwiX2dpcmwkY2hhbmNlX2F0ayIsInNvdXJjZSIsImNhcmQiLCJkYXRhc2V0IiwiY2xhc3NUYWciLCJjbGFzc0xhYmVsIiwiZmFtaWx5IiwicGR2IiwiYXRrIiwiY2hhbmNlX2F0ayIsInBhcmVudEVsZW1lbnQiLCJ1cGRhdGVMb2NrU3RhdGUiLCJtYWtlQ2hpcCIsIml0ZW1JZCIsImNoaXAiLCJob2xkZXIiLCJpdGVtIiwiZmluZCIsImV2IiwiX2NoaXAkcGFyZW50RWxlbWVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsb3Nlc3QiLCJzbG90IiwiX2NoaXAkcGFyZW50RWxlbWVudDIiLCJyZW5kZXJQaWNrIiwicHJlc2VydmVkSWRzIiwia2V5cyIsInBvb2wyIiwicGlja3MiLCJ0YWtlbiIsImNscyIsInByZXZlbnREZWZhdWx0IiwiX2NlbGwkZGF0YXNldCIsImRyYWdnaW5nIiwiZHQiLCJwYXlsb2FkIiwiZ2V0RGF0YSIsIl9zdGVwJHZhbHVlIiwib2xkQ2VsbCIsInNwbGl0IiwiZXhpc3RpbmciLCJsYXN0RWxlbWVudENoaWxkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsImRhdGEiLCJjbGllbnRYIiwidG9wIiwiY2xpZW50WSIsInRpY2tldElkIiwicG9sbFRpbWVyIiwiX2NhbGxlZTIiLCJfd2luZG93JE1NJHN0YXJ0IiwiX3dpbmRvdyRNTSIsIl93aW5kb3ckTU0kc3RhdHVzIiwiX3dpbmRvdyRNTTIiLCJsaW5ldXAiLCJTVEFSVF9VUkwiLCJTVEFUVVNfVFBMIiwic3RhdHVzVXJsIiwicmVzIiwidGV4dCIsIl9kYXRhJGVycm9yIiwiX2RhdGEiLCJfdCIsIl9jb250ZXh0MiIsImVudHJpZXMiLCJfcmVmMyIsIl92YWwkaXRlbUlkIiwiX3JlZjQiLCJ2YWwiLCJfa2V5JHNwbGl0JG1hcCIsIk51bWJlciIsIl9rZXkkc3BsaXQkbWFwMiIsIk1NIiwic3RhdHVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJfdW51c2VkMyIsIm9rIiwiYWxlcnQiLCJlcnJvciIsImxvY2F0aW9uIiwiaHJlZiIsIm1hdGNoSWQiLCJfY2FsbGVlIiwiaiIsIl9jb250ZXh0IiwianNvbiIsIm1lc3NhZ2UiLCJyZW5kZXJCb251c2VzIiwiY29tcHV0ZUJvbnVzZXMiLCJjb3VudHMiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX3N0ZXAzJHZhbHVlIiwiZmFtIiwidG9Mb3dlckNhc2UiLCJ0aWVycyIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwidGllciIsImxhYmVsIiwic29sZWlsIiwibHVuZSIsIm5hdHVyZSIsImlkb2xlIiwib21icmUiLCJhcmNhbmUiLCJldG9pbGUiLCJvY2VhbiIsImVmZmVjdCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiSUNPTiIsIl9yZWY2IiwiX3JlZjciLCJfcmVmNyQiLCJsaSIsImVmZmVjdFRleHQiLCJwb3AiLCJwY3QiLCJyZXJvbGxzTGVmdCIsIlJFUk9MTFNfTEVGVCIsInVwZGF0ZVJlcm9sbFVJIiwiX2NhbGxlZTMiLCJfZGF0YSRsZWZ0IiwiX3QyIiwiX2NvbnRleHQzIiwiUkVST0xMX0RFQ19VUkwiXSwic291cmNlUm9vdCI6IiJ9