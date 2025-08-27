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
  var gaugeHp = document.getElementById('gauge-hp');
  var gaugeHpTxt = document.getElementById('gauge-hp-text');
  var gaugeMana = document.getElementById('gauge-mana');
  var gaugeManaTxt = document.getElementById('gauge-mana-text');
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
    updateTeamGauges();
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
  }
  function updateTeamGauges() {
    if (!gaugeHp || !gaugeMana) return;
    var allies = _toConsumableArray(unitsById.values()).filter(function (u) {
      return u.team === 'ally';
    });
    // Totals: HP considers shield as extra buffer; Mana vs max 50 per design
    var curHp = 0,
      maxHp = 0,
      curMana = 0,
      maxMana = 0;
    var _iterator = _createForOfIteratorHelper(allies),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var u = _step.value;
        var hp = Math.max(0, u.hp || 0);
        var sh = Math.max(0, u.shield || 0);
        var mh = Math.max(hp, u.maxHp || hp); // fallback
        curHp += hp + sh;
        maxHp += (u.maxHp || mh) + sh; // include shield in current and cap with same shield for visual
        var m = Math.max(0, u.mana || 0);
        curMana += m;
        maxMana += 50; // global threshold is 50 per unit
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var hpPct = maxHp > 0 ? Math.min(100, Math.round(100 * curHp / maxHp)) : 0;
    var maPct = maxMana > 0 ? Math.min(100, Math.round(100 * curMana / maxMana)) : 0;
    var hpFill = gaugeHp.querySelector('.gauge__fill');
    var maFill = gaugeMana.querySelector('.gauge__fill');
    if (hpFill) hpFill.style.width = hpPct + '%';
    if (maFill) maFill.style.width = maPct + '%';
    if (gaugeHpTxt) gaugeHpTxt.textContent = "".concat(curHp, "/").concat(maxHp);
    if (gaugeManaTxt) gaugeManaTxt.textContent = "".concat(curMana, "/").concat(maxMana);
  }

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
    var _iterator2 = _createForOfIteratorHelper(REPLAY.initial),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var u0 = _step2.value;
        var u = _objectSpread({}, u0);
        var el = document.createElement('div');
        el.className = "unit unit--".concat(u.team, " unit--").concat(u["class"]);
        // Image-only unit on the board; numeric badges are hidden in CSS for a clean look
        el.innerHTML = "<img src=\"".concat(full(u.img), "\" alt=\"\">");
        var c = cell(u.x, u.y);
        if (c) c.appendChild(el);
        u.el = el;
        unitsById.set(u.id, u);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    renderHUD();
    updateTeamGauges();
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
          updateTeamGauges();
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
          updateTeamGauges();
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
          updateTeamGauges();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7Ozs7Ozs7O0FDYjdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvSW5zY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC9tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC90ZWFtLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL0phdmFTY3JpcHQvcmVnaXN0ZXIuanNcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXNzMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlcl90eXBlX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdCcpO1xyXG4gIGNvbnN0IHBhc3MyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyX3R5cGVfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZCcpO1xyXG4gIGNvbnN0IHJlZ2lzdGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWJ0bicpO1xyXG5cclxuICBmdW5jdGlvbiBjaGVja1Bhc3N3b3JkcygpIHtcclxuICAgIGlmIChwYXNzMS52YWx1ZSAmJiBwYXNzMS52YWx1ZSA9PT0gcGFzczIudmFsdWUpIHtcclxuICAgICAgcmVnaXN0ZXJCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlZ2lzdGVyQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChwYXNzMSAmJiBwYXNzMiAmJiByZWdpc3RlckJ0bikge1xyXG4gICAgcGFzczEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja1Bhc3N3b3Jkcyk7XHJcbiAgICBwYXNzMi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrUGFzc3dvcmRzKTtcclxuICB9XHJcbn0pO1xyXG4iLCJcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCB0cmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZy1yb3N0ZXItdHJhY2snKTtcclxuICBpZiAoIXRyYWNrKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX25hdi0tcHJldicpO1xyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX25hdi0tbmV4dCcpO1xyXG4gIGNvbnN0IHN0ZXAgPSAyODA7IC8vIHB4IHBhciBjbGljXHJcblxyXG4gIGNvbnN0IHNjcm9sbEJ5ID0gKGRlbHRhKSA9PiB0cmFjay5zY3JvbGxCeSh7IGxlZnQ6IGRlbHRhLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG4gIHByZXY/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsQnkoLXN0ZXApKTtcclxuICBuZXh0Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbEJ5KHN0ZXApKTtcclxufSk7XHJcbmNvbnNvbGUubG9nKCdob21lLmpzJyk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygncGFnZS1tYXRjaCcpKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IEFTU0VUX0JBU0UgPSAod2luZG93LkFTU0VUX0JBU0UgfHwgJy8nKS5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XHJcbiAgY29uc3QgZnVsbCA9IChwKSA9PiBBU1NFVF9CQVNFICsgU3RyaW5nKHAgfHwgJycpLnJlcGxhY2UoL15cXC8rLywgJycpO1xyXG5cclxuICBjb25zdCBib2FyZCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gIGNvbnN0IGxvZ0VsICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdHRsZS1sb2cnKTtcclxuICBjb25zdCBodWRBICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWQtYWxsaWVzJyk7XHJcbiAgY29uc3QgaHVkRSAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkLWVuZW1pZXMnKTtcclxuICBjb25zdCBnYXVnZUhwICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYXVnZS1ocCcpO1xyXG4gIGNvbnN0IGdhdWdlSHBUeHQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhdWdlLWhwLXRleHQnKTtcclxuICBjb25zdCBnYXVnZU1hbmE9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYXVnZS1tYW5hJyk7XHJcbiAgY29uc3QgZ2F1Z2VNYW5hVHh0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2F1Z2UtbWFuYS10ZXh0Jyk7XHJcbiAgY29uc3QgYnRuU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXN0YXJ0Jyk7XHJcbiAgY29uc3QgYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXBhdXNlJyk7XHJcbiAgY29uc3QgYnRuUmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJlc2V0Jyk7XHJcbiAgY29uc3QgYnRuTXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW11c2ljJyk7XHJcblxyXG4gIGlmICghYm9hcmQgfHwgIWxvZ0VsIHx8ICFodWRBIHx8ICFodWRFIHx8ICFidG5TdGFydCB8fCAhYnRuUGF1c2UgfHwgIWJ0blJlc2V0KSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ01hdGNoIFVJIG1pc3NpbmcnLCB7IGJvYXJkLCBsb2dFbCwgaHVkQSwgaHVkRSwgYnRuU3RhcnQsIGJ0blBhdXNlLCBidG5SZXNldCB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IFJFUExBWSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcGxheS1qc29uJyk/LnRleHRDb250ZW50IHx8ICd7fScpO1xyXG4gIGlmICghUkVQTEFZIHx8ICFBcnJheS5pc0FycmF5KFJFUExBWS5pbml0aWFsKSkgeyBjb25zb2xlLndhcm4oJ05vIHJlcGxheSBwcm92aWRlZCcpOyByZXR1cm47IH1cclxuICBjb25zb2xlLmRlYnVnKCdSRVBMQVk6JywgUkVQTEFZLFxyXG4gICAgICAgICAgICAgICAgJ2FsbHlDb3VudD0nLCBSRVBMQVkuaW5pdGlhbC5maWx0ZXIodT0+dS50ZWFtPT09J2FsbHknKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAnZW5lbXlDb3VudD0nLCBSRVBMQVkuaW5pdGlhbC5maWx0ZXIodT0+dS50ZWFtPT09J2VuZW15JykubGVuZ3RoKTtcclxuXHJcbiAgY29uc3QgdW5pdHNCeUlkID0gbmV3IE1hcCgpOyAvLyBpZCAtPiBydW50aW1lIHVuaXRcclxuICBsZXQgdGltZXIgPSBudWxsLCBzdGVwID0gMDtcclxuICBjb25zdCBUSUNLX01TID0gNDAwO1xyXG5cclxuICAvLyAtLS0gQmFja2dyb3VuZCBtdXNpYyAoQkdNKSAtLS1cclxuICBsZXQgYmdtID0gbnVsbCwgYmdtRW5hYmxlZCA9IHRydWUsIGJnbUZhZGluZyA9IGZhbHNlO1xyXG4gIGNvbnN0IGJnbVVybCA9IHdpbmRvdy5CR01fVVJMO1xyXG4gIGlmIChiZ21VcmwpIHtcclxuICAgIGJnbSA9IG5ldyBBdWRpbyhiZ21VcmwpO1xyXG4gICAgYmdtLmxvb3AgPSB0cnVlO1xyXG4gICAgYmdtLnByZWxvYWQgPSAnYXV0byc7XHJcbiAgICBiZ20udm9sdW1lID0gMC4wOyAvLyBzdGFydCBzaWxlbnQsIGZhZGUgaW4gb24gU3RhcnRcclxuICB9XHJcbiAgaWYgKGJ0bk11c2ljKSB7XHJcbiAgICBpZiAoIWJnbSkgeyBidG5NdXNpYy5kaXNhYmxlZCA9IHRydWU7IGJ0bk11c2ljLnRpdGxlID0gJ0F1Y3VuZSBtdXNpcXVlIGRpc3BvbmlibGUnOyB9XHJcbiAgICBidG5NdXNpYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGJnbUVuYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcclxuICAgIGJ0bk11c2ljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBiZ21FbmFibGVkID0gIWJnbUVuYWJsZWQ7XHJcbiAgICAgIGJ0bk11c2ljLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgYmdtRW5hYmxlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xyXG4gICAgICBpZiAoIWJnbSkgcmV0dXJuO1xyXG4gICAgICBpZiAoYmdtRW5hYmxlZCkgeyBiZ20ucGxheSgpLmNhdGNoKCgpPT57fSk7IH0gZWxzZSB7IGJnbS5wYXVzZSgpOyB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYmdtUGxheSgpeyBpZiAoIWJnbSB8fCAhYmdtRW5hYmxlZCkgcmV0dXJuOyBiZ21GYWRpbmc9ZmFsc2U7IGJnbS5wbGF5KCkuY2F0Y2goKGUpPT57IGNvbnNvbGUuZGVidWcoJ2JnbSBwbGF5IGZhaWxlZCcsIGUpOyB9KTsgfVxyXG4gIGZ1bmN0aW9uIGJnbVBhdXNlKCl7IGlmICghYmdtKSByZXR1cm47IGJnbS5wYXVzZSgpOyB9XHJcbiAgZnVuY3Rpb24gYmdtRmFkZU91dChtcz05MDApe1xyXG4gICAgaWYgKCFiZ20pIHJldHVybjsgYmdtRmFkaW5nID0gdHJ1ZTsgY29uc3Qgc3RhcnQgPSBiZ20udm9sdW1lOyBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgY29uc3Qgc3RlcEZuID0gKG5vdykgPT4ge1xyXG4gICAgICBpZiAoIWJnbUZhZGluZykgcmV0dXJuO1xyXG4gICAgICBjb25zdCBrID0gTWF0aC5taW4oMSwgKG5vdyAtIHQwKSAvIG1zKTtcclxuICAgICAgYmdtLnZvbHVtZSA9IHN0YXJ0ICogKDEgLSBrKTtcclxuICAgICAgaWYgKGsgPCAxKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcEZuKTsgZWxzZSB7IGJnbS5wYXVzZSgpOyBiZ20udm9sdW1lID0gc3RhcnQ7IGJnbUZhZGluZyA9IGZhbHNlOyB9XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGJnbUZhZGVJbihtcz01MDAsIHRhcmdldD0wLjUpe1xyXG4gICAgaWYgKCFiZ20pIHJldHVybjsgYmdtRmFkaW5nPWZhbHNlOyBjb25zdCBzdGFydCA9IGJnbS52b2x1bWU7IGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICBjb25zdCBzdGVwRm4gPSAobm93KSA9PiB7XHJcbiAgICAgIGNvbnN0IGsgPSBNYXRoLm1pbigxLCAobm93IC0gdDApIC8gbXMpO1xyXG4gICAgICBiZ20udm9sdW1lID0gc3RhcnQgKyAodGFyZ2V0IC0gc3RhcnQpICogaztcclxuICAgICAgaWYgKGsgPCAxKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcEZuKTtcclxuICAgIH07XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcEZuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNlbGwgPSAoeCx5KSA9PiBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gKTtcclxuXHJcbiAgZnVuY3Rpb24gbG9nKG1zZyl7IGlmKCFtc2cpcmV0dXJuOyBjb25zdCBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBkLnRleHRDb250ZW50PW1zZztcclxuICAgIGxvZ0VsLmFwcGVuZENoaWxkKGQpOyBsb2dFbC5zY3JvbGxUb3A9bG9nRWwuc2Nyb2xsSGVpZ2h0OyB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckhVRCgpe1xyXG4gICAgY29uc3QgbGlzdCA9ICh0ZWFtKSA9PiBbLi4udW5pdHNCeUlkLnZhbHVlcygpXS5maWx0ZXIodT0+dS50ZWFtPT09dGVhbSlcclxuICAgICAgLm1hcCh1PT5gPGxpPjxpbWcgc3JjPVwiJHtmdWxsKHUuaW1nKX1cIj48c3Bhbj4ke3UubmFtZX08L3NwYW4+PGVtPiR7dS5ocH0gUFYke3Uuc2hpZWxkPjA/JyDigKIg8J+boScrdS5zaGllbGQ6Jyd9JHt1Lm1hbmE+MD8nIOKAoiDwn5S3Jyt1Lm1hbmE6Jyd9PC9lbT48L2xpPmApLmpvaW4oJycpO1xyXG4gICAgaHVkQS5pbm5lckhUTUwgPSBsaXN0KCdhbGx5Jyk7IGh1ZEUuaW5uZXJIVE1MID0gbGlzdCgnZW5lbXknKTtcclxuICAgIHVwZGF0ZVRlYW1HYXVnZXMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUJhcnModSl7XHJcbiAgICBjb25zdCBocD11LmVsLnF1ZXJ5U2VsZWN0b3IoJy5ocCcpOyBpZihocCl7IGhwLnRleHRDb250ZW50ID0gdS5ocDsgfVxyXG4gICAgY29uc3Qgc2g9dS5lbC5xdWVyeVNlbGVjdG9yKCcuc2hpZWxkJyk7IGlmKHNoKXsgc2gudGV4dENvbnRlbnQ9dS5zaGllbGQ7IHNoLnN0eWxlLmRpc3BsYXk9dS5zaGllbGQ+MD8nJzonbm9uZSc7IH1cclxuICAgIGNvbnN0IG1hPXUuZWwucXVlcnlTZWxlY3RvcignLm1hbmEnKTsgICBpZihtYSl7IG1hLnRleHRDb250ZW50PXUubWFuYTsgICBtYS5zdHlsZS5kaXNwbGF5PXUubWFuYT4wPycnOidub25lJzsgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlVGVhbUdhdWdlcygpe1xyXG4gICAgaWYoIWdhdWdlSHAgfHwgIWdhdWdlTWFuYSkgcmV0dXJuO1xyXG4gICAgY29uc3QgYWxsaWVzID0gWy4uLnVuaXRzQnlJZC52YWx1ZXMoKV0uZmlsdGVyKHU9PnUudGVhbT09PSdhbGx5Jyk7XHJcbiAgICAvLyBUb3RhbHM6IEhQIGNvbnNpZGVycyBzaGllbGQgYXMgZXh0cmEgYnVmZmVyOyBNYW5hIHZzIG1heCA1MCBwZXIgZGVzaWduXHJcbiAgICBsZXQgY3VySHA9MCwgbWF4SHA9MCwgY3VyTWFuYT0wLCBtYXhNYW5hPTA7XHJcbiAgICBmb3IoY29uc3QgdSBvZiBhbGxpZXMpe1xyXG4gICAgICBjb25zdCBocCA9IE1hdGgubWF4KDAsIHUuaHB8fDApOyBjb25zdCBzaCA9IE1hdGgubWF4KDAsIHUuc2hpZWxkfHwwKTtcclxuICAgICAgY29uc3QgbWggPSBNYXRoLm1heChocCwgdS5tYXhIcHx8aHApOyAvLyBmYWxsYmFja1xyXG4gICAgICBjdXJIcCArPSBocCArIHNoOyBtYXhIcCArPSAodS5tYXhIcHx8bWgpICsgc2g7IC8vIGluY2x1ZGUgc2hpZWxkIGluIGN1cnJlbnQgYW5kIGNhcCB3aXRoIHNhbWUgc2hpZWxkIGZvciB2aXN1YWxcclxuICAgICAgY29uc3QgbSA9IE1hdGgubWF4KDAsIHUubWFuYXx8MCk7XHJcbiAgICAgIGN1ck1hbmEgKz0gbTsgbWF4TWFuYSArPSA1MDsgLy8gZ2xvYmFsIHRocmVzaG9sZCBpcyA1MCBwZXIgdW5pdFxyXG4gICAgfVxyXG4gICAgY29uc3QgaHBQY3QgPSBtYXhIcD4wID8gTWF0aC5taW4oMTAwLCBNYXRoLnJvdW5kKDEwMCpjdXJIcC9tYXhIcCkpIDogMDtcclxuICAgIGNvbnN0IG1hUGN0ID0gbWF4TWFuYT4wID8gTWF0aC5taW4oMTAwLCBNYXRoLnJvdW5kKDEwMCpjdXJNYW5hL21heE1hbmEpKSA6IDA7XHJcbiAgICBjb25zdCBocEZpbGwgPSBnYXVnZUhwLnF1ZXJ5U2VsZWN0b3IoJy5nYXVnZV9fZmlsbCcpO1xyXG4gICAgY29uc3QgbWFGaWxsID0gZ2F1Z2VNYW5hLnF1ZXJ5U2VsZWN0b3IoJy5nYXVnZV9fZmlsbCcpO1xyXG4gICAgaWYoaHBGaWxsKSBocEZpbGwuc3R5bGUud2lkdGggPSBocFBjdCArICclJztcclxuICAgIGlmKG1hRmlsbCkgbWFGaWxsLnN0eWxlLndpZHRoID0gbWFQY3QgKyAnJSc7XHJcbiAgICBpZihnYXVnZUhwVHh0KSBnYXVnZUhwVHh0LnRleHRDb250ZW50ID0gYCR7Y3VySHB9LyR7bWF4SHB9YDtcclxuICAgIGlmKGdhdWdlTWFuYVR4dCkgZ2F1Z2VNYW5hVHh0LnRleHRDb250ZW50ID0gYCR7Y3VyTWFuYX0vJHttYXhNYW5hfWA7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0gU0ZYIGhlbHBlciB3aXRoIGxpZ2h0IHRocm90dGxpbmcgLS0tXHJcbiAgY29uc3QgbGFzdFNmeEF0ID0gbmV3IE1hcCgpO1xyXG4gIGZ1bmN0aW9uIHBsYXlTZngodXJsLCB2b2w9MC43LCBrZXk9dXJsLCBtaW5HYXBNcz0xMjApe1xyXG4gICAgdHJ5e1xyXG4gICAgICBpZighdXJsKSByZXR1cm47IGNvbnN0IG5vdz1wZXJmb3JtYW5jZS5ub3coKTsgY29uc3QgbGFzdD1sYXN0U2Z4QXQuZ2V0KGtleSl8fDA7IGlmKG5vdy1sYXN0PG1pbkdhcE1zKSByZXR1cm47XHJcbiAgICAgIGxhc3RTZnhBdC5zZXQoa2V5LCBub3cpO1xyXG4gICAgICBjb25zdCBhID0gbmV3IEF1ZGlvKHVybCk7IGEudm9sdW1lPXZvbDsgYS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuICAgIH1jYXRjaHsgLyogaWdub3JlICovIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW5pdGlhbCgpe1xyXG4gICAgYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKS5mb3JFYWNoKGM9PmMuaW5uZXJIVE1MPScnKTsgbG9nRWwuaW5uZXJIVE1MPScnOyB1bml0c0J5SWQuY2xlYXIoKTtcclxuICAgIGZvcihjb25zdCB1MCBvZiBSRVBMQVkuaW5pdGlhbCl7XHJcbiAgICAgIGNvbnN0IHUgPSB7Li4udTB9O1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBlbC5jbGFzc05hbWUgPSBgdW5pdCB1bml0LS0ke3UudGVhbX0gdW5pdC0tJHt1LmNsYXNzfWA7XHJcbiAgLy8gSW1hZ2Utb25seSB1bml0IG9uIHRoZSBib2FyZDsgbnVtZXJpYyBiYWRnZXMgYXJlIGhpZGRlbiBpbiBDU1MgZm9yIGEgY2xlYW4gbG9va1xyXG4gIGVsLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCIgYWx0PVwiXCI+YDtcclxuICAgICAgY29uc3QgYyA9IGNlbGwodS54LCB1LnkpOyBpZiAoYykgYy5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgIHUuZWwgPSBlbDsgdW5pdHNCeUlkLnNldCh1LmlkLCB1KTtcclxuICAgIH1cclxuICByZW5kZXJIVUQoKTtcclxuICB1cGRhdGVUZWFtR2F1Z2VzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhcHBseUFjdGlvbihhKXtcclxuICAgIHN3aXRjaChhLnQpe1xyXG4gICAgICBjYXNlICdmeCc6IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICBjb25zdCBhdCA9IEFycmF5LmlzQXJyYXkoYS5hdCkgPyBhLmF0IDogbnVsbDsgaWYoIWF0KSBicmVhaztcclxuICAgICAgICAgIGNvbnN0IGMgPSBjZWxsKGF0WzBdLCBhdFsxXSk7IGlmKCFjKSBicmVhaztcclxuICAgICAgICAgIGNvbnN0IGtpbmQgPSBhLmtpbmQgfHwgJ2RlZmF1bHQnO1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gKHdpbmRvdy5GWF9VUkxTICYmIHdpbmRvdy5GWF9VUkxTW2tpbmRdKSB8fCAod2luZG93LkZYX1VSTFMgJiYgd2luZG93LkZYX1VSTFMuZGVmYXVsdCk7XHJcbiAgICAgICAgICBpZighdXJsKSBicmVhaztcclxuICAgICAgICAgIGNvbnN0IGZ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IGZ4LmNsYXNzTmFtZSA9ICdmeCBmeC0tJytraW5kO1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IGltZy5hbHQgPSBraW5kOyBpbWcuc3JjID0gZnVsbCh1cmwpO1xyXG4gICAgICAgICAgZnguYXBwZW5kQ2hpbGQoaW1nKTsgYy5hcHBlbmRDaGlsZChmeCk7XHJcbiAgICAgICAgICBjb25zdCBkdXIgPSBNYXRoLm1heCgyMDAsIE1hdGgubWluKDQwMDAsIHBhcnNlSW50KGEuZHVyfHwxMDAwLDEwKSkpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+eyBmeC5yZW1vdmUoKTsgfSwgZHVyKTtcclxuICAgICAgICB9Y2F0Y2h7IC8qIGlnbm9yZSAqLyB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbW92ZSc6IHtcclxuICAgICAgICBjb25zdCB1PXVuaXRzQnlJZC5nZXQoYS5pZCk7IGlmKCF1KWJyZWFrO1xyXG4gICAgICAgIGNvbnN0IHRvPWNlbGwoYS50b1swXSxhLnRvWzFdKTsgaWYoIXRvKWJyZWFrO1xyXG4gICAgICAgIHRvLmFwcGVuZENoaWxkKHUuZWwpOyB1Lng9YS50b1swXTsgdS55PWEudG9bMV07XHJcbiAgdXBkYXRlVGVhbUdhdWdlcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2F0dGFjayc6IHtcclxuICAgICAgICBjb25zdCBhdHQ9dW5pdHNCeUlkLmdldChhLmF0dCksIGRlZj11bml0c0J5SWQuZ2V0KGEuZGVmKTsgaWYoIWF0dHx8IWRlZilicmVhaztcclxuICAgICAgICBjb25zdCBwcmV2SHAgPSBkZWYuaHA7XHJcbiAgICAgICAgZGVmLmhwPWEuaHA7IGRlZi5zaGllbGQ9YS5zaGllbGQ7IGlmKGEubWFuYSE9PXVuZGVmaW5lZCkgYXR0Lm1hbmE9YS5tYW5hO1xyXG4gICAgICAgIHVwZGF0ZUJhcnMoZGVmKTsgdXBkYXRlQmFycyhhdHQpO1xyXG4gIHVwZGF0ZVRlYW1HYXVnZXMoKTtcclxuICAgICAgICAvLyBoYWxmIEhQIGNyb3NzaW5nXHJcbiAgICAgICAgaWYocHJldkhwPjAgJiYgZGVmLmhwPjApe1xyXG4gICAgICAgICAgY29uc3Qgd2FzQWJvdmUgPSBwcmV2SHAgPiAoZGVmLm1heEhwfHxwcmV2SHAqMikvMjtcclxuICAgICAgICAgIGNvbnN0IG5vd0JlbG93ID0gZGVmLmhwIDw9IChkZWYubWF4SHB8fHByZXZIcCoyKS8yO1xyXG4gICAgICAgICAgaWYod2FzQWJvdmUgJiYgbm93QmVsb3cpeyBwbGF5U2Z4KHdpbmRvdy5TRlhfSEFMRkhQX1VSTCwgMC43LCAnaGFsZjonK2RlZi5pZCwgNDAwKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkZWYuaHA8PTApeyBkZWYuZWwuY2xhc3NMaXN0LmFkZCgna28nKTsgc2V0VGltZW91dCgoKT0+ZGVmLmVsLnJlbW92ZSgpLDEyMCk7IHBsYXlTZngod2luZG93LlNGWF9ERUFUSF9VUkwsIDAuOCwgJ2RlYXRoJywgMTUwKTsgfVxyXG4gICAgICAgIGlmKGEubG9nKSBsb2coYS5sb2cpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2hlYWwnOiB7XHJcbiAgICAgICAgY29uc3Qgc3JjPXVuaXRzQnlJZC5nZXQoYS5zcmMpLCBkc3Q9dW5pdHNCeUlkLmdldChhLmRzdCk7IGlmKCFzcmN8fCFkc3QpYnJlYWs7XHJcbiAgICAgICAgaWYoYS5tYW5hIT09dW5kZWZpbmVkKSBzcmMubWFuYT1hLm1hbmE7XHJcbiAgICAgICAgZHN0LmhwPU1hdGgubWluKGRzdC5tYXhIcCwoZHN0LmhwPz8wKSsoYS5hbW91bnQ/PzApKTtcclxuICAgICAgICAvLyBoZWFsIFNGWCAoY3JpdCBpZiBhbW91bnQgbGFyZ2UgYW5kIFVSTCBwcm92aWRlZClcclxuICAgICAgICBjb25zdCBjcml0ID0gKGEuY3JpdD09PXRydWUpIHx8IChhLmFtb3VudCAmJiBkc3QubWF4SHAgJiYgYS5hbW91bnQgPj0gMC4yNSpkc3QubWF4SHApO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGNyaXQgJiYgd2luZG93LlNGWF9IRUFMX0NSSVRfVVJMID8gd2luZG93LlNGWF9IRUFMX0NSSVRfVVJMIDogd2luZG93LlNGWF9IRUFMX1VSTDtcclxuICAgICAgICBwbGF5U2Z4KHVybCwgY3JpdD8wLjg6MC42LCBjcml0PydoZWFsY3JpdCc6J2hlYWwnLCA4MCk7XHJcbiAgdXBkYXRlQmFycyhzcmMpOyB1cGRhdGVCYXJzKGRzdCk7IHVwZGF0ZVRlYW1HYXVnZXMoKTsgaWYoYS5sb2cpIGxvZyhhLmxvZyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbG9nJzogaWYoYS5tc2cpIGxvZyhhLm1zZyk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVRpY2soKXtcclxuICAgIGlmKHN0ZXAgPj0gKFJFUExBWS5hY3Rpb25zPy5sZW5ndGggfHwgMCkpe1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDtcclxuICAgICAgY29uc3Qgb3V0Y29tZSA9IFJFUExBWS53aW5uZXI9PT0nYWxseScgPyAndmljdG9yeScgOiBSRVBMQVkud2lubmVyPT09J2VuZW15JyA/ICdkZWZlYXQnIDogJ2RyYXcnO1xyXG4gICAgICBsb2cob3V0Y29tZT09PSd2aWN0b3J5Jz8nVmljdG9pcmUgISc6b3V0Y29tZT09PSdkZWZlYXQnPydEw6lmYWl0ZeKApic6J8OJZ2FsaXTDqSAhJyk7XHJcbiAgICAgIC8vIHNob3cgb3ZlcmxheVxyXG4gICAgICBjb25zdCBvdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtb3ZlcmxheScpO1xyXG4gICAgICBjb25zdCB0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtdGV4dCcpO1xyXG4gICAgICBjb25zdCBidG5DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXN1bHQtY29udGludWUnKTtcclxuICAgICAgY29uc3QgYnRuUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtc291bmQtdG9nZ2xlJyk7XHJcbiAgICAgIGlmIChvdiAmJiB0eCkge1xyXG4gICAgICAgIG92LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIG92LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpY3RvcnknLCBvdXRjb21lPT09J3ZpY3RvcnknKTtcclxuICAgICAgICBvdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1kZWZlYXQnLCBvdXRjb21lPT09J2RlZmVhdCcpO1xyXG4gICAgICAgIHR4LnRleHRDb250ZW50ID0gb3V0Y29tZT09PSd2aWN0b3J5JyA/ICdWSUNUT0lSRScgOiBvdXRjb21lPT09J2RlZmVhdCcgPyAnRMOJRkFJVEUnIDogJ8OJR0FMSVTDiSc7XHJcbiAgICAgICAgYmdtRmFkZU91dCgxMjAwKTtcclxuXHJcbiAgICAgICAgLy8gVmljdG9yeSBTRlggKGlmIHByb3ZpZGVkKVxyXG4gICAgICAgIGlmIChvdXRjb21lID09PSAndmljdG9yeScpIHtcclxuICAgICAgICAgIGNvbnN0IHNmeFVybCA9IHdpbmRvdy5TRlhfVklDVE9SWV9VUkw7XHJcbiAgICAgICAgICBpZiAoc2Z4VXJsKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYXVkID0gbmV3IEF1ZGlvKHNmeFVybCk7XHJcbiAgICAgICAgICAgICAgYXVkLnZvbHVtZSA9IDAuNzsgYXVkLmxvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBhdWQucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHsgLyogaWdub3JlICovIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG91dGNvbWUgPT09ICdkZWZlYXQnKSB7XHJcbiAgICAgICAgICBwbGF5U2Z4KHdpbmRvdy5TRlhfREVGRUFUX1VSTCwgMC43LCAnZGVmZWF0JywgMjAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNvdW5kIEZYIChXZWJBdWRpbyBzaW1wbGUgdG9uZXMpXHJcbiAgICAgICAgbGV0IGF1ZGlvRW5hYmxlZCA9IGZhbHNlLCBjdHggPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlKaW5nbGUoa2luZCl7XHJcbiAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGlmKCFhdWRpb0VuYWJsZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYoIWN0eCkgY3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0fHx3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBjdHguY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzID0ga2luZD09PSd2aWN0b3J5JyA/IFs1MjMsNjU5LDc4NF0gOiBraW5kPT09J2RlZmVhdCcgPyBbMzkyLDM0OSwyNjFdIDogWzQ0MCw0NDAsNDQwXTtcclxuICAgICAgICAgICAgbm90ZXMuZm9yRWFjaCgoZixpKT0+e1xyXG4gICAgICAgICAgICAgIGNvbnN0IG8gPSBjdHguY3JlYXRlT3NjaWxsYXRvcigpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlR2FpbigpO1xyXG4gICAgICAgICAgICAgIG8udHlwZT0nc2luZSc7IG8uZnJlcXVlbmN5LnZhbHVlPWY7XHJcbiAgICAgICAgICAgICAgby5jb25uZWN0KGcpOyBnLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICBjb25zdCB0ID0gbm93ICsgaSowLjE4OyBnLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDEsdCk7IGcuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMix0KzAuMDIpOyBnLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSx0KzAuMyk7XHJcbiAgICAgICAgICAgICAgby5zdGFydCh0KTsgby5zdG9wKHQrMC4zMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfWNhdGNoKGUpeyBjb25zb2xlLmRlYnVnKCdhdWRpbyBmYWlsZWQnLCBlKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuUykge1xyXG4gICAgICAgICAgYnRuUy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgYXVkaW9FbmFibGVkID0gIWF1ZGlvRW5hYmxlZDtcclxuICAgICAgICAgICAgYnRuUy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGF1ZGlvRW5hYmxlZD8gJ3RydWUnOidmYWxzZScpO1xyXG4gICAgICAgICAgICBpZihhdWRpb0VuYWJsZWQpeyBwbGF5SmluZ2xlKG91dGNvbWUpOyB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnRpbnVlIGJ1dHRvbiBvciBjbGljayBhbnl3aGVyZSBvbiB2ZWlsXHJcbiAgICAgICAgY29uc3QgaGlkZSA9ICgpPT4gb3YuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgaWYoYnRuQykgYnRuQy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUsIHsgb25jZTp0cnVlIH0pO1xyXG4gICAgICAgIG92LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtdmVpbCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUsIHsgb25jZTp0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGFwcGx5QWN0aW9uKFJFUExBWS5hY3Rpb25zW3N0ZXArK10pOyByZW5kZXJIVUQoKTtcclxuICB9XHJcblxyXG4gIGJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGlmICghdGltZXIpeyB0aW1lcj1zZXRJbnRlcnZhbChwbGF5VGljayxUSUNLX01TKTsgfVxyXG4gICAgaWYgKGJnbSl7XHJcbiAgICAgIGJnbUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICBpZiAoYnRuTXVzaWMpIGJ0bk11c2ljLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywndHJ1ZScpO1xyXG4gICAgICBiZ20uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBiZ20ucGxheSgpLnRoZW4oKCk9PiBiZ21GYWRlSW4oNDUwLCAwLjUpKS5jYXRjaCgoZSk9PnsgY29uc29sZS5kZWJ1ZygnYmdtIHBsYXkgYmxvY2tlZCcsIGUpOyB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICBidG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57IGlmKHRpbWVyKXsgY2xlYXJJbnRlcnZhbCh0aW1lcik7IHRpbWVyPW51bGw7IH0gYmdtUGF1c2UoKTsgfSk7XHJcbiAgYnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyBpZih0aW1lcil7IGNsZWFySW50ZXJ2YWwodGltZXIpOyB0aW1lcj1udWxsOyB9IHN0ZXA9MDsgc3Bhd25Jbml0aWFsKCk7IGlmIChiZ20pIHsgYmdtUGF1c2UoKTsgYmdtLmN1cnJlbnRUaW1lID0gMDsgfSB9KTtcclxuXHJcbiAgc3Bhd25Jbml0aWFsKCk7XHJcbn0pO1xyXG4iLCIvLyB0ZWFtLWJ1aWxkZXIuanNcclxuXHJcbi8vIGJhc2UgZGVzIGFzc2V0cyBmb3VybmllIHBhciBUd2lnOiB3aW5kb3cuQVNTRVRfQkFTRSA9IFwie3sgYXNzZXQoJycpIH19XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IEFTU0VUX0JBU0UgPSAod2luZG93LkFTU0VUX0JBU0UgfHwgJy8nKS5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XHJcbiAgY29uc3QgZnVsbEltZyA9IChwKSA9PiBBU1NFVF9CQVNFICsgU3RyaW5nKHAgfHwgJycpLnJlcGxhY2UoL15cXC8rLywgJycpO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKCdUZWFtIEJ1aWxkZXIgc2NyaXB0IGxvYWRlZCEnLCB7IEFTU0VUX0JBU0UgfSk7XHJcbiAgY29uc3Qgb3duZWRFbCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293bmVkLWdpcmxzLWpzb24nKTtcclxuICBjb25zdCBzdWdnZXN0ZWRFbCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VnZ2VzdGVkLWdpcmxzLWpzb24nKTtcclxuICBpZiAoIW93bmVkRWwpIHJldHVybjtcclxuXHJcbiAgLyoqIEB0eXBlIHtBcnJheX0gKi9cclxuICBjb25zdCBPV05FRCAgICAgICAgPSBKU09OLnBhcnNlKG93bmVkRWwudGV4dENvbnRlbnQgfHwgJ1tdJyk7XHJcbiAgLyoqIEB0eXBlIHtBcnJheX0gKi9cclxuICBjb25zdCBTVUdHRVNURUQgICAgPSBzdWdnZXN0ZWRFbCA/IEpTT04ucGFyc2Uoc3VnZ2VzdGVkRWwudGV4dENvbnRlbnQgfHwgJ1tdJykgOiBbXTtcclxuXHJcbiAgY29uc3QgcGlja0dyaWQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY2stZ3JpZCcpO1xyXG4gIGNvbnN0IGJlbmNoR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZW5jaC1ncmlkJyk7XHJcbiAgY29uc3QgYm9hcmQgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XHJcbiAgY29uc3QgYnRuUmVyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXJvbGwnKTtcclxuICBjb25zdCByZXJvbGxDb3VudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlcm9sbC1jb3VudCcpO1xyXG4gIGNvbnN0IGJ0bkxvY2sgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9jaycpO1xyXG4gIGNvbnN0IGJvbnVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLWJvbnVzZXMnKTtcclxuICBjb25zdCBza2VsZXRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXNrZWxldG9uJyk7XHJcblxyXG4gIGNvbnN0IE1BWF9URUFNICA9IDQ7XHJcbiAgY29uc3QgcGxhY2VkICAgID0gbmV3IE1hcCgpOyAvLyBcIngseVwiIC0+IHsgZ2lybCwgZWwgfVxyXG4gIGNvbnN0IGluQmVuY2ggICA9IG5ldyBNYXAoKTsgLy8gZ2lybElkIC0+IGNhcmRFbGVtZW50XHJcblxyXG4gIC8vIGhlbHBlcnNcclxuICBjb25zdCByYW5kSW50ID0gKG4pID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xyXG4gIGNvbnN0IHBpY2tOID0gKGFyciwgbikgPT4ge1xyXG4gICAgY29uc3QgcG9vbCA9IFsuLi5hcnJdLCBvdXQgPSBbXTtcclxuICAgIHdoaWxlIChvdXQubGVuZ3RoIDwgTWF0aC5taW4obiwgcG9vbC5sZW5ndGgpKSB7XHJcbiAgICAgIG91dC5wdXNoKHBvb2wuc3BsaWNlKHJhbmRJbnQocG9vbC5sZW5ndGgpLCAxKVswXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH07XHJcbiAgY29uc3QgY2VsbEtleSA9ICh4LCB5KSA9PiBgJHt4fSwke3l9YDtcclxuXHJcbiAgLy8gLS0tLSBVSSByZW5kZXJlcnMgLS0tLVxyXG4gIGZ1bmN0aW9uIHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2UgfSkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSBgdGItY2FyZCB0Yi1jYXJkLS0ke2dpcmwuY2xhc3N9YDtcclxuICAgIGNhcmQuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGNhcmQuZGF0YXNldC5pZCA9IGdpcmwuaWQ7XHJcbiAgICBjYXJkLmRhdGFzZXQuc291cmNlID0gc291cmNlO1xyXG5cclxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9faW1nXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX21ldGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fbmFtZVwiPiR7Z2lybC5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX190YWdzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfVwiPiR7Y2xhc3NMYWJlbChnaXJsLmNsYXNzKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyB0YWctZmFtaWx5XCI+JHtnaXJsLmZhbWlseSA/PyAnJ308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fc3RhdHNcIj5cclxuICAgICAgICA8c3Bhbj5QViAke2dpcmwucGR2fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5BVEsgJHtnaXJsLmF0a308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+UFJDICR7TWF0aC5yb3VuZCgoZ2lybC5jaGFuY2VfYXRrID8/IDApICogMTAwKX0lPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkoZ2lybCkpO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gY2FyZC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpKTtcclxuICAgIH0pO1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpKTtcclxuXHJcbiAgICAvLyBkb3VibGUtY2xpYyAtPiB0b2dnbGUgYmFuY1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gVG9nZ2xlIGJhbmM6IHNpIGTDqWrDoCBkYW5zIGxlIGJhbmMgLT4gb24gbGUgbGFpc3NlIGFmZmljaMOpIG1haXMgb24gbGUgbWFycXVlIGNvbW1lIG5vbi1wcsOpc2VydsOpXHJcbiAgICAgIGlmIChjYXJkLnBhcmVudEVsZW1lbnQgPT09IGJlbmNoR3JpZCkge1xyXG4gICAgICAgIC8vIFJldHJhaXQgZHUgYmFuYzogb24gbGUgcmVtZXQgZGFucyBzb24gY29udGVuZXVyIHNvdXJjZSBzaSBwb3NzaWJsZSwgc2lub24gb24gbGUgc3VwcHJpbWUgcHJvcHJlbWVudFxyXG4gICAgICAgIGluQmVuY2guZGVsZXRlKGdpcmwuaWQpO1xyXG4gICAgICAgIC8vIETDqXBsYWNlciBsYSBjYXJ0ZSB2ZXJzIGxhIHpvbmUgZGUgcGljayBwb3VyIGxhIHJlbmRyZSByZXJvbGxhYmxlXHJcbiAgICAgICAgaWYgKHBpY2tHcmlkKSBwaWNrR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBlbHNlIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQWpvdXQgYXUgYmFuY1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZUNoaXAoZ2lybCkge1xyXG4gICAgY29uc3QgY2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hpcC5jbGFzc05hbWUgPSBgY2hpcCAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfWA7XHJcbiAgICBjaGlwLnRpdGxlID0gZ2lybC5uYW1lO1xyXG4gICAgY2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgY2hpcC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPjxzcGFuPiR7Z2lybC5uYW1lfTwvc3Bhbj5gO1xyXG5cclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KGdpcmwpKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGNoaXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKSk7XHJcbiAgICB9KTtcclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKSk7XHJcblxyXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IGNoaXAucGFyZW50RWxlbWVudD8uY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgICAgaWYgKGNlbGwpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBjZWxsS2V5KGNlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueSk7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpbkJlbmNoLmhhcyhnaXJsLmlkKSkge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pO1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjaGlwO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBpY2soKSB7XHJcbiAgcGlja0dyaWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IHBvb2wgPSBTVUdHRVNURUQubGVuZ3RoID8gWy4uLlNVR0dFU1RFRF0gOiBbLi4uT1dORURdO1xyXG4gIGlmIChwb29sLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAvLyBvbiBkdXBsaXF1ZSBzaSA8IDRcclxuICB3aGlsZSAocG9vbC5sZW5ndGggPCA0KSBwb29sID0gcG9vbC5jb25jYXQocG9vbCk7XHJcblxyXG4gIC8vIEV4Y2x1cmUgY2V1eCBkw6lqw6AgYXUgYmFuYyAocHLDqXNlcnbDqXMpIGR1IHRpcmFnZVxyXG4gIGNvbnN0IHByZXNlcnZlZElkcyA9IG5ldyBTZXQoQXJyYXkuZnJvbShpbkJlbmNoLmtleXMoKSkpO1xyXG4gIGNvbnN0IHBvb2wyID0gcG9vbC5maWx0ZXIoZyA9PiAhcHJlc2VydmVkSWRzLmhhcyhnLmlkKSk7XHJcblxyXG4gIC8vIFPDqWxlY3Rpb25uZSBqdXNxdSfDoCA0IHN1Z2dlc3Rpb25zIHVuaXF1ZXMgcGFybWkgbGUgcG9vbCByZXN0YW50XHJcbiAgY29uc3QgcGlja3MgPSBbXTtcclxuICBjb25zdCB0YWtlbiA9IG5ldyBTZXQoKTtcclxuICBjb25zdCB0YXJnZXQgPSBNYXRoLm1pbig0LCBwb29sMi5sZW5ndGgpO1xyXG4gIHdoaWxlIChwaWNrcy5sZW5ndGggPCB0YXJnZXQgJiYgdGFrZW4uc2l6ZSA8IHBvb2wyLmxlbmd0aCkge1xyXG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wyLmxlbmd0aCk7XHJcbiAgICBpZiAoIXRha2VuLmhhcyhpKSkgeyB0YWtlbi5hZGQoaSk7IHBpY2tzLnB1c2gocG9vbDJbaV0pOyB9XHJcbiAgfVxyXG4gIHBpY2tzLmZvckVhY2goZyA9PiBwaWNrR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGcsIHsgc291cmNlOiAncGljaycgfSkpKTtcclxufVxyXG4gIGZ1bmN0aW9uIGNsYXNzVGFnKGNscykge1xyXG4gICAgc3dpdGNoIChjbHMpIHtcclxuICAgICAgY2FzZSAnZHBzX21lbGVlJzogIHJldHVybiAndGFnLW1lbGVlJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAndGFnLXJhbmdlZCc7XHJcbiAgICAgIGNhc2UgJ3RhbmsnOiAgICAgICByZXR1cm4gJ3RhZy10YW5rJztcclxuICAgICAgY2FzZSAnaGVhbGVyJzogICAgIHJldHVybiAndGFnLWhlYWwnO1xyXG4gICAgICBkZWZhdWx0OiAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBjbGFzc0xhYmVsKGNscykge1xyXG4gICAgc3dpdGNoIChjbHMpIHtcclxuICAgICAgY2FzZSAnZHBzX21lbGVlJzogIHJldHVybiAnRFBTIEPDoEMnO1xyXG4gICAgICBjYXNlICdkcHNfcmFuZ2VkJzogcmV0dXJuICdEUFMgZGlzdGFuY2UnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICdUYW5rJztcclxuICAgICAgY2FzZSAnaGVhbGVyJzogICAgIHJldHVybiAnSGVhbGVyJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiBjbHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tIERuRCBib2FyZCAtLS0tXHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2VsbCcpO1xyXG4gICAgaWYgKCFjZWxsKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBjZWxsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBrZXkgPSBjZWxsS2V5KHgsIHkpO1xyXG5cclxuICAgIGNvbnN0IGRyYWdnaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRiLWNhcmQuZHJhZ2dpbmcsIC5jaGlwLmRyYWdnaW5nJyk7XHJcbiAgICBpZiAoIWRyYWdnaW5nKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZ2lybCA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpIHx8ICd7fScpO1xyXG5cclxuICAgIC8vIHNpIG3Dqm1lIGjDqXJvIGTDqWrDoCBwbGFjw6kgYWlsbGV1cnMgLT4gbGliw6hyZSBs4oCZYW5jaWVubmUgY2VsbHVsZVxyXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgcGxhY2VkKSB7XHJcbiAgICAgIGlmICh2LmdpcmwuaWQgPT09IGdpcmwuaWQpIHtcclxuICAgICAgICBwbGFjZWQuZGVsZXRlKGspO1xyXG4gICAgICAgIGNvbnN0IG9sZENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKG9sZENlbGwpIG9sZENlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBsaW1pdGUgw6lxdWlwZVxyXG4gICAgaWYgKCFwbGFjZWQuaGFzKGtleSkgJiYgcGxhY2VkLnNpemUgPj0gTUFYX1RFQU0pIHJldHVybjtcclxuXHJcbiAgICAvLyBzd2FwIHNpIGxhIGNlbGx1bGUgw6l0YWl0IG9jY3Vww6llXHJcbiAgICBpZiAocGxhY2VkLmhhcyhrZXkpKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gcGxhY2VkLmdldChrZXkpO1xyXG4gICAgICBpZiAoZXhpc3Rpbmc/LmVsKSB7XHJcbiAgICAgICAgYmVuY2hHcmlkLmFwcGVuZENoaWxkKHJlbmRlckNhcmQoZXhpc3RpbmcuZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSkpO1xyXG4gICAgICAgIGluQmVuY2guc2V0KGV4aXN0aW5nLmdpcmwuaWQsIGJlbmNoR3JpZC5sYXN0RWxlbWVudENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICBwbGFjZWQuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hpcCA9IG1ha2VDaGlwKGdpcmwpO1xyXG4gICAgY2VsbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2hpcCk7XHJcbiAgICBwbGFjZWQuc2V0KGtleSwgeyBnaXJsLCBlbDogY2hpcCB9KTtcclxuICAgIHVwZGF0ZUxvY2tTdGF0ZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAtLS0tIERuRCBiZW5jaCAtLS0tXHJcbiAgYmVuY2hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgYmVuY2hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZ2lybCA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpIHx8ICd7fScpO1xyXG5cclxuICAgIC8vIHJldGlyZSBkdSBib2FyZCBzaSBwcsOpc2VudGVcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHBsYWNlZCkge1xyXG4gICAgICBpZiAodi5naXJsLmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7ay5zcGxpdCgnLCcpWzBdfVwiXVtkYXRhLXk9XCIke2suc3BsaXQoJywnKVsxXX1cIl1gKTtcclxuICAgICAgICBpZiAoYykgYy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwbGFjZWQuZGVsZXRlKGspO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbkJlbmNoLmhhcyhnaXJsLmlkKSkge1xyXG4gICAgICBjb25zdCBjYXJkID0gcmVuZGVyQ2FyZChnaXJsLCB7IHNvdXJjZTogJ2JlbmNoJyB9KTtcclxuICAgICAgYmVuY2hHcmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUxvY2tTdGF0ZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAtLS0tIGFjdGlvbnMgLS0tLVxyXG5sZXQgdGlja2V0SWQgPSBudWxsO1xyXG5sZXQgcG9sbFRpbWVyID0gbnVsbDtcclxuXHJcbmJ0bkxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKHNrZWxldG9uKSB7IHNrZWxldG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7IH1cclxuICAvLyBidWlsZCBwYXlsb2FkXHJcbiAgY29uc3QgbGluZXVwID0gQXJyYXkuZnJvbShwbGFjZWQuZW50cmllcygpKS5tYXAoKFtrZXksIHZhbF0pID0+IHtcclxuICAgIGNvbnN0IFt4LCB5XSA9IGtleS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gICAgcmV0dXJuIHsgaWQ6IHZhbC5naXJsLmlkLCB4LCB5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFNUQVJUX1VSTCAgPSB3aW5kb3cuTU0/LnN0YXJ0ICA/PyAnL21hdGNobWFraW5nL3N0YXJ0JztcclxuICBjb25zdCBTVEFUVVNfVFBMID0gd2luZG93Lk1NPy5zdGF0dXMgPz8gJy9tYXRjaG1ha2luZy9zdGF0dXMvX19JRF9fJztcclxuICBjb25zdCBzdGF0dXNVcmwgID0gKGlkKSA9PiBTVEFUVVNfVFBMLnJlcGxhY2UoJ19fSURfXycsIFN0cmluZyhpZCkpO1xyXG5cclxuICBjb25zb2xlLmxvZygnQ2FsbGluZyBTVEFSVF9VUkwgPScsIFNUQVJUX1VSTCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgID0gYXdhaXQgZmV0Y2goU1RBUlRfVVJMLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGluZXVwIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgIGxldCBkYXRhO1xyXG4gICAgdHJ5IHsgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7IH0gY2F0Y2ggeyBkYXRhID0gbnVsbDsgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdtYXRjaG1ha2luZy9zdGFydCAtPicsIHJlcy5zdGF0dXMsIGRhdGEgPz8gdGV4dCk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgYWxlcnQoYE1hdGNobWFraW5nIGZhaWxlZCAoJHtyZXMuc3RhdHVzfSk6XFxuJHtkYXRhPy5lcnJvciA/PyB0ZXh0fWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEgfHwgKGRhdGEuc3RhdHVzICE9PSAnbWF0Y2hlZCcgJiYgZGF0YS5zdGF0dXMgIT09ICdxdWV1ZWQnKSkge1xyXG4gICAgICBhbGVydCgnUsOpcG9uc2UgaW5hdHRlbmR1ZTpcXG4nICsgKGRhdGEgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IHRleHQpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ21hdGNoZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9tYXRjaC8ke2RhdGEubWF0Y2hJZH1gO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcXVldWVkIC0+IHBvbGwgc3RhdHVzXHJcbiAgICB0aWNrZXRJZCA9IGRhdGEudGlja2V0SWQ7XHJcbiAgICBidG5Mb2NrLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGJ0bkxvY2sudGV4dENvbnRlbnQgPSAn8J+UjiBSZWNoZXJjaGUgZW4gY291cnPigKYnO1xyXG5cclxuICAgIHBvbGxUaW1lciA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgciA9IGF3YWl0IGZldGNoKHN0YXR1c1VybCh0aWNrZXRJZCksIHsgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSk7XHJcbiAgICAgIGNvbnN0IGogPSBhd2FpdCByLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ21hdGNobWFraW5nL3N0YXR1cyAtPicsIGopO1xyXG4gICAgICBpZiAoai5zdGF0dXMgPT09ICdtYXRjaGVkJykge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwocG9sbFRpbWVyKTtcclxuICAgIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7IHNrZWxldG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpOyB9XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL21hdGNoLyR7ai5tYXRjaElkfWA7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMDApO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICBhbGVydCgnRXJyZXVyIHLDqXNlYXU6ICcgKyBlLm1lc3NhZ2UpO1xyXG4gIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7IHNrZWxldG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpOyB9XHJcbiAgfVxyXG59KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlTG9ja1N0YXRlKCkge1xyXG4gICAgYnRuTG9jay5kaXNhYmxlZCA9IChwbGFjZWQuc2l6ZSAhPT0gTUFYX1RFQU0pO1xyXG4gICAgcmVuZGVyQm9udXNlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIFN5bmVyZ3kgY29tcHV0YXRpb24gKGNsaWVudC1zaWRlIG1pcnJvciBvZiBzZXJ2ZXIgdGllcnMpIC0tLVxyXG4gIGZ1bmN0aW9uIGNvbXB1dGVCb251c2VzKCkge1xyXG4gICAgY29uc3QgY291bnRzID0ge307IC8vIGZhbWlseSAtPiBjb3VudFxyXG4gICAgZm9yIChjb25zdCBbLCB7Z2lybH1dIG9mIHBsYWNlZCkge1xyXG4gICAgICBjb25zdCBmYW0gPSAoZ2lybC5mYW1pbHkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmICghZmFtKSBjb250aW51ZTsgY291bnRzW2ZhbV0gPSAoY291bnRzW2ZhbV0gfHwgMCkgKyAxO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGllcnMgPSB7fTtcclxuICAgIGZvciAoY29uc3QgW2ZhbSwgbl0gb2YgT2JqZWN0LmVudHJpZXMoY291bnRzKSkge1xyXG4gICAgICBjb25zdCB0aWVyID0gbiA+PSA0ID8gNCA6IChuID49IDMgPyAzIDogKG4gPj0gMiA/IDIgOiAwKSk7XHJcbiAgICAgIGlmICh0aWVyID09PSAwKSBjb250aW51ZTsgdGllcnNbZmFtXSA9IHsgbiwgdGllciB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpZXJzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyQm9udXNlcygpIHtcclxuICAgIGlmICghYm9udXNMaXN0KSByZXR1cm47XHJcbiAgICBjb25zdCB0aWVycyA9IGNvbXB1dGVCb251c2VzKCk7XHJcbiAgICBib251c0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBsYWJlbCA9IChmYW0sIHRpZXIsIG4pID0+IHtcclxuICAgICAgY29uc3QgbWFwID0ge1xyXG4gICAgICAgIHNvbGVpbDogezI6J0FUSyArNSUnLDM6J1Byw6ljaXNpb24gKzUlJyw0OidDcml0ICs1JSd9LFxyXG4gICAgICAgIGx1bmU6ICAgezI6J0VzcXVpdmUgKzMlJywzOidFc3F1aXZlICsyJSAmIE1hbmEgKzEwJyw0OidCb3VjbGllciArMTAnfSxcclxuICAgICAgICBuYXR1cmU6IHsyOidQViArNSUnLDM6J0JvdWNsaWVyICsxNScsNDonUFYgKzUlJ30sXHJcbiAgICAgICAgaWRvbGU6ICB7MjonQ3JpdCArNSUnLDM6J0FUSyArNSUnLDQ6J01hbmEgKzEwJ30sXHJcbiAgICAgICAgb21icmU6ICB7MjonRXNxdWl2ZSArNSUnLDM6J1Byw6ljaXNpb24gKzUlJyw0OidCb3VjbGllciArMTUnfSxcclxuICAgICAgICBhcmNhbmU6IHsyOidQcsOpY2lzaW9uICs1JScsMzonTWFuYSArMTUnLDQ6J0NyaXQgKzUlJ30sXHJcbiAgICAgICAgZXRvaWxlOiB7MjonUHLDqWNpc2lvbiArMyUnLDM6J0NyaXQgKzUlJyw0OidBVEsgKzUlJ30sXHJcbiAgICAgICAgb2NlYW46ICB7MjonRXNxdWl2ZSArMyUnLDM6J01hbmEgKzEwJyw0OidQcsOpY2lzaW9uICs1JSd9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGVmZmVjdCA9IChtYXBbZmFtXSAmJiBtYXBbZmFtXVt0aWVyXSkgPyBtYXBbZmFtXVt0aWVyXSA6IGBQYWxpZXIgJHt0aWVyfWA7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZmFtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmFtLnNsaWNlKDEpO1xyXG4gICAgICByZXR1cm4gYCR7dGl0bGV9IHgke259IOKAlCAke2VmZmVjdH1gO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IElDT04gPSB7IHNvbGVpbDon4piA77iPJywgbHVuZTon8J+MmScsIG5hdHVyZTon8J+NgycsIGlkb2xlOifwn461Jywgb21icmU6J/CfjJEnLCBhcmNhbmU6J+KcqCcsIGV0b2lsZTon4q2QJywgb2NlYW46J/CfjIonIH07XHJcbiAgICBPYmplY3QuZW50cmllcyh0aWVycykuZm9yRWFjaCgoW2ZhbSwge3RpZXIsIG59XSkgPT4ge1xyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmNsYXNzTmFtZSA9IGBib251cy1pdGVtIGZhbS0ke2ZhbX0gdGllci0ke3RpZXJ9YDtcclxuICAgICAgY29uc3QgdGl0bGUgPSBmYW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBmYW0uc2xpY2UoMSk7XHJcbiAgICAgIGNvbnN0IGVmZmVjdFRleHQgPSBsYWJlbChmYW0sIHRpZXIsIG4pLnNwbGl0KCcg4oCUICcpLnBvcCgpO1xyXG4gICAgICBjb25zdCBwY3QgPSBNYXRoLm1pbigxMDAsIE1hdGgucm91bmQoKG4gLyA0KSAqIDEwMCkpO1xyXG4gICAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYW0taWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiR7SUNPTltmYW1dIHx8ICfinKcnfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhbS1uYW1lXCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudFwiPngke259PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYXVnZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjRcIiBhcmlhLXZhbHVlbm93PVwiJHtufVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiIHN0eWxlPVwid2lkdGg6JHtwY3R9JVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZWZmZWN0XCI+JHtlZmZlY3RUZXh0fTwvc3Bhbj5cclxuICAgICAgYDtcclxuICAgICAgYm9udXNMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdFxyXG4gIHJlbmRlclBpY2soKTtcclxuICByZW5kZXJCb251c2VzKCk7XHJcblxyXG4gIC8vIC0tLSBSZXJvbGwgbGltaXTDqSDDoCAzIC0tLVxyXG4gIGxldCByZXJvbGxzTGVmdCA9IE51bWJlcih3aW5kb3cuUkVST0xMU19MRUZUID8/IDMpO1xyXG4gIGNvbnN0IHVwZGF0ZVJlcm9sbFVJID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlcm9sbENvdW50RWwpIHJlcm9sbENvdW50RWwudGV4dENvbnRlbnQgPSBgKCR7cmVyb2xsc0xlZnR9IHJlc3RhbnQke3Jlcm9sbHNMZWZ0PjE/J3MnOicnfSlgO1xyXG4gICAgaWYgKGJ0blJlcm9sbCkgYnRuUmVyb2xsLmRpc2FibGVkID0gcmVyb2xsc0xlZnQgPD0gMDtcclxuICB9O1xyXG4gIHVwZGF0ZVJlcm9sbFVJKCk7XHJcbiAgaWYgKGJ0blJlcm9sbCkge1xyXG4gICAgYnRuUmVyb2xsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocmVyb2xsc0xlZnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHdpbmRvdy5SRVJPTExfREVDX1VSTCwgeyBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmVyb2xsc0xlZnQgPSBOdW1iZXIoZGF0YT8ubGVmdCA/PyByZXJvbGxzTGVmdCk7XHJcbiAgICAgIH0gY2F0Y2gge31cclxuICAgICAgdXBkYXRlUmVyb2xsVUkoKTtcclxuICAgICAgcmVuZGVyUGljaygpOyAvLyBwYXMgZGUgcmVsb2FkIC0+IHBhcyBkZSBjbGlnbm90ZW1lbnRcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L3RlYW0tYnVpbGRlci5qcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L0luc2NyaXB0aW9uLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvaG9tZS5qcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L21hdGNoLmpzJzsgXHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzczEiLCJnZXRFbGVtZW50QnlJZCIsInBhc3MyIiwicmVnaXN0ZXJCdG4iLCJjaGVja1Bhc3N3b3JkcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJ0cmFjayIsInByZXYiLCJxdWVyeVNlbGVjdG9yIiwibmV4dCIsInN0ZXAiLCJzY3JvbGxCeSIsImRlbHRhIiwibGVmdCIsImJlaGF2aW9yIiwiY29uc29sZSIsImxvZyIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsImJvZHkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIkFTU0VUX0JBU0UiLCJ3aW5kb3ciLCJyZXBsYWNlIiwiZnVsbCIsInAiLCJTdHJpbmciLCJib2FyZCIsImxvZ0VsIiwiaHVkQSIsImh1ZEUiLCJnYXVnZUhwIiwiZ2F1Z2VIcFR4dCIsImdhdWdlTWFuYSIsImdhdWdlTWFuYVR4dCIsImJ0blN0YXJ0IiwiYnRuUGF1c2UiLCJidG5SZXNldCIsImJ0bk11c2ljIiwid2FybiIsIlJFUExBWSIsIkpTT04iLCJwYXJzZSIsInRleHRDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiaW5pdGlhbCIsImRlYnVnIiwiZmlsdGVyIiwidSIsInRlYW0iLCJsZW5ndGgiLCJ1bml0c0J5SWQiLCJNYXAiLCJ0aW1lciIsIlRJQ0tfTVMiLCJiZ20iLCJiZ21FbmFibGVkIiwiYmdtRmFkaW5nIiwiYmdtVXJsIiwiQkdNX1VSTCIsIkF1ZGlvIiwibG9vcCIsInByZWxvYWQiLCJ2b2x1bWUiLCJ0aXRsZSIsInNldEF0dHJpYnV0ZSIsInBsYXkiLCJwYXVzZSIsImJnbVBsYXkiLCJlIiwiYmdtUGF1c2UiLCJiZ21GYWRlT3V0IiwibXMiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJzdGFydCIsInQwIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdGVwRm4iLCJrIiwiTWF0aCIsIm1pbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJnbUZhZGVJbiIsInRhcmdldCIsImNlbGwiLCJ4IiwieSIsImNvbmNhdCIsIm1zZyIsImQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJyZW5kZXJIVUQiLCJsaXN0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidmFsdWVzIiwibWFwIiwiaW1nIiwibmFtZSIsImhwIiwic2hpZWxkIiwibWFuYSIsImpvaW4iLCJpbm5lckhUTUwiLCJ1cGRhdGVUZWFtR2F1Z2VzIiwidXBkYXRlQmFycyIsImVsIiwic2giLCJzdHlsZSIsImRpc3BsYXkiLCJtYSIsImFsbGllcyIsImN1ckhwIiwibWF4SHAiLCJjdXJNYW5hIiwibWF4TWFuYSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJtYXgiLCJtaCIsIm0iLCJlcnIiLCJmIiwiaHBQY3QiLCJyb3VuZCIsIm1hUGN0IiwiaHBGaWxsIiwibWFGaWxsIiwid2lkdGgiLCJsYXN0U2Z4QXQiLCJwbGF5U2Z4IiwidXJsIiwidm9sIiwia2V5IiwibWluR2FwTXMiLCJsYXN0IiwiZ2V0Iiwic2V0IiwiYSIsIl91bnVzZWQiLCJzcGF3bkluaXRpYWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImMiLCJjbGVhciIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ1MCIsIl9vYmplY3RTcHJlYWQiLCJjbGFzc05hbWUiLCJpZCIsImFwcGx5QWN0aW9uIiwidCIsImF0Iiwia2luZCIsIkZYX1VSTFMiLCJmeCIsImFsdCIsInNyYyIsImR1ciIsInBhcnNlSW50Iiwic2V0VGltZW91dCIsInJlbW92ZSIsIl91bnVzZWQyIiwidG8iLCJhdHQiLCJkZWYiLCJwcmV2SHAiLCJ3YXNBYm92ZSIsIm5vd0JlbG93IiwiU0ZYX0hBTEZIUF9VUkwiLCJhZGQiLCJTRlhfREVBVEhfVVJMIiwiX2RzdCRocCIsIl9hJGFtb3VudCIsImRzdCIsImFtb3VudCIsImNyaXQiLCJTRlhfSEVBTF9DUklUX1VSTCIsIlNGWF9IRUFMX1VSTCIsInBsYXlUaWNrIiwiX1JFUExBWSRhY3Rpb25zIiwiYWN0aW9ucyIsImNsZWFySW50ZXJ2YWwiLCJvdXRjb21lIiwid2lubmVyIiwib3YiLCJ0eCIsImJ0bkMiLCJidG5TIiwiX292JHF1ZXJ5U2VsZWN0b3IiLCJwbGF5SmluZ2xlIiwiYXVkaW9FbmFibGVkIiwiY3R4IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3VycmVudFRpbWUiLCJub3RlcyIsImkiLCJvIiwiY3JlYXRlT3NjaWxsYXRvciIsImciLCJjcmVhdGVHYWluIiwidHlwZSIsImZyZXF1ZW5jeSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUiLCJzdG9wIiwidG9nZ2xlIiwic2Z4VXJsIiwiU0ZYX1ZJQ1RPUllfVVJMIiwiYXVkIiwiXyIsIlNGWF9ERUZFQVRfVVJMIiwiaGlkZSIsIm9uY2UiLCJzZXRJbnRlcnZhbCIsInRoZW4iLCJyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ0b1N0cmluZ1RhZyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJHIiwidiIsImJpbmQiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJwdXNoIiwiX24iLCJGIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiZnJvbSIsInRlc3QiLCJyZXF1aXJlIiwiX3dpbmRvdyRSRVJPTExTX0xFRlQiLCJmdWxsSW1nIiwib3duZWRFbCIsInN1Z2dlc3RlZEVsIiwiT1dORUQiLCJTVUdHRVNURUQiLCJwaWNrR3JpZCIsImJlbmNoR3JpZCIsImJ0blJlcm9sbCIsInJlcm9sbENvdW50RWwiLCJidG5Mb2NrIiwiYm9udXNMaXN0Iiwic2tlbGV0b24iLCJNQVhfVEVBTSIsInBsYWNlZCIsImluQmVuY2giLCJyYW5kSW50IiwiZmxvb3IiLCJyYW5kb20iLCJwaWNrTiIsImFyciIsInBvb2wiLCJvdXQiLCJzcGxpY2UiLCJjZWxsS2V5IiwicmVuZGVyQ2FyZCIsImdpcmwiLCJfcmVmIiwiX2dpcmwkZmFtaWx5IiwiX2dpcmwkY2hhbmNlX2F0ayIsInNvdXJjZSIsImNhcmQiLCJkcmFnZ2FibGUiLCJkYXRhc2V0IiwiY2xhc3NUYWciLCJjbGFzc0xhYmVsIiwiZmFtaWx5IiwicGR2IiwiYXRrIiwiY2hhbmNlX2F0ayIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJzdHJpbmdpZnkiLCJwYXJlbnRFbGVtZW50IiwidXBkYXRlTG9ja1N0YXRlIiwibWFrZUNoaXAiLCJjaGlwIiwiX2NoaXAkcGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJoYXMiLCJyZW5kZXJQaWNrIiwicHJlc2VydmVkSWRzIiwiU2V0Iiwia2V5cyIsInBvb2wyIiwicGlja3MiLCJ0YWtlbiIsInNpemUiLCJjbHMiLCJwcmV2ZW50RGVmYXVsdCIsIl9jZWxsJGRhdGFzZXQiLCJkcmFnZ2luZyIsImdldERhdGEiLCJfc3RlcCR2YWx1ZSIsIm9sZENlbGwiLCJzcGxpdCIsImV4aXN0aW5nIiwibGFzdEVsZW1lbnRDaGlsZCIsIl9zdGVwMiR2YWx1ZSIsInRpY2tldElkIiwicG9sbFRpbWVyIiwiX2NhbGxlZTIiLCJfd2luZG93JE1NJHN0YXJ0IiwiX3dpbmRvdyRNTSIsIl93aW5kb3ckTU0kc3RhdHVzIiwiX3dpbmRvdyRNTTIiLCJsaW5ldXAiLCJTVEFSVF9VUkwiLCJTVEFUVVNfVFBMIiwic3RhdHVzVXJsIiwicmVzIiwidGV4dCIsImRhdGEiLCJfZGF0YSRlcnJvciIsIl9kYXRhIiwiX3QiLCJfY29udGV4dDIiLCJlbnRyaWVzIiwiX3JlZjMiLCJfcmVmNCIsInZhbCIsIl9rZXkkc3BsaXQkbWFwIiwiTnVtYmVyIiwiX2tleSRzcGxpdCRtYXAyIiwiTU0iLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsIm9rIiwiYWxlcnQiLCJlcnJvciIsImxvY2F0aW9uIiwiaHJlZiIsIm1hdGNoSWQiLCJfY2FsbGVlIiwiaiIsIl9jb250ZXh0IiwianNvbiIsIm1lc3NhZ2UiLCJyZW5kZXJCb251c2VzIiwiY29tcHV0ZUJvbnVzZXMiLCJjb3VudHMiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX3N0ZXAzJHZhbHVlIiwiZmFtIiwidG9Mb3dlckNhc2UiLCJ0aWVycyIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwidGllciIsImxhYmVsIiwic29sZWlsIiwibHVuZSIsIm5hdHVyZSIsImlkb2xlIiwib21icmUiLCJhcmNhbmUiLCJldG9pbGUiLCJvY2VhbiIsImVmZmVjdCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiSUNPTiIsIl9yZWY2IiwiX3JlZjciLCJfcmVmNyQiLCJsaSIsImVmZmVjdFRleHQiLCJwb3AiLCJwY3QiLCJyZXJvbGxzTGVmdCIsIlJFUk9MTFNfTEVGVCIsInVwZGF0ZVJlcm9sbFVJIiwiX2NhbGxlZTMiLCJfZGF0YSRsZWZ0IiwiX3QyIiwiX2NvbnRleHQzIiwiUkVST0xMX0RFQ19VUkwiXSwic291cmNlUm9vdCI6IiJ9