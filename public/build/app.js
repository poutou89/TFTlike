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
    u.el.querySelector('.hp').textContent = u.hp;
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
        el.innerHTML = "\n        <img src=\"".concat(full(u.img), "\" alt=\"\">\n        <span class=\"hp\">").concat(u.hp, "</span>\n        <span class=\"shield\"").concat(u.shield > 0 ? '' : ' style="display:none"', ">").concat(u.shield, "</span>\n        <span class=\"mana\"").concat(u.mana > 0 ? '' : ' style="display:none"', ">").concat(u.mana, "</span>");
        var c = cell(u.x, u.y);
        if (c) c.appendChild(el);
        u.el = el;
        unitsById.set(u.id, u);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQUEsQ0FBQTBLLENBQUEsVUFBQWdELGlCQUFBLENBQUFoRCxDQUFBO0FBQUEsU0FBQWdELGtCQUFBaEQsQ0FBQSxFQUFBM0YsQ0FBQSxhQUFBQSxDQUFBLElBQUFBLENBQUEsR0FBQTJGLENBQUEsQ0FBQXBLLE1BQUEsTUFBQXlFLENBQUEsR0FBQTJGLENBQUEsQ0FBQXBLLE1BQUEsWUFBQW1CLENBQUEsTUFBQWlFLENBQUEsR0FBQTNGLEtBQUEsQ0FBQWdGLENBQUEsR0FBQXRELENBQUEsR0FBQXNELENBQUEsRUFBQXRELENBQUEsSUFBQWlFLENBQUEsQ0FBQWpFLENBQUEsSUFBQWlKLENBQUEsQ0FBQWpKLENBQUEsVUFBQWlFLENBQUE7QUFBQXNJLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFB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LENBQUMsQ0FBQztVQUFBO1lBQXhGbkIsR0FBRyxHQUFBc0UsU0FBQSxDQUFBdE0sQ0FBQTtZQUFBc00sU0FBQSxDQUFBaFMsQ0FBQTtZQUFBLE9BQ1UwTixHQUFHLENBQUM2QixJQUFJLENBQUMsQ0FBQztVQUFBO1lBQXZCM0IsSUFBSSxHQUFBb0UsU0FBQSxDQUFBdE0sQ0FBQTtZQUNWZ00sV0FBVyxHQUFHcEQsTUFBTSxFQUFBd0QsVUFBQSxHQUFDbEUsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUVsVixJQUFJLGNBQUFvWixVQUFBLGNBQUFBLFVBQUEsR0FBSUosV0FBVyxDQUFDO1lBQUNNLFNBQUEsQ0FBQWhTLENBQUE7WUFBQTtVQUFBO1lBQUFnUyxTQUFBLENBQUExWSxDQUFBO1lBQUF5WSxHQUFBLEdBQUFDLFNBQUEsQ0FBQXRNLENBQUE7VUFBQTtZQUVsRGtNLGNBQWMsQ0FBQyxDQUFDO1lBQ2hCbEcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQUE7WUFBQSxPQUFBc0csU0FBQSxDQUFBM1MsQ0FBQTtRQUFBO01BQUEsR0FBQXdTLFFBQUE7SUFBQSxDQUNmLEdBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvWEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ1c7QUFDRDtBQUNQO0FBQ0M7QUFFL0JqWixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNiN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC9JbnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC9ob21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L21hdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L3RlYW0tYnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvSmF2YVNjcmlwdC9yZWdpc3Rlci5qc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhc3MxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyX3R5cGVfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0Jyk7XHJcbiAgY29uc3QgcGFzczIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJfdHlwZV9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJyk7XHJcbiAgY29uc3QgcmVnaXN0ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItYnRuJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrUGFzc3dvcmRzKCkge1xyXG4gICAgaWYgKHBhc3MxLnZhbHVlICYmIHBhc3MxLnZhbHVlID09PSBwYXNzMi52YWx1ZSkge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVnaXN0ZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHBhc3MxICYmIHBhc3MyICYmIHJlZ2lzdGVyQnRuKSB7XHJcbiAgICBwYXNzMS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrUGFzc3dvcmRzKTtcclxuICAgIHBhc3MyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tQYXNzd29yZHMpO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21nLXJvc3Rlci10cmFjaycpO1xyXG4gIGlmICghdHJhY2spIHJldHVybjtcclxuXHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1wcmV2Jyk7XHJcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1uZXh0Jyk7XHJcbiAgY29uc3Qgc3RlcCA9IDI4MDsgLy8gcHggcGFyIGNsaWNcclxuXHJcbiAgY29uc3Qgc2Nyb2xsQnkgPSAoZGVsdGEpID0+IHRyYWNrLnNjcm9sbEJ5KHsgbGVmdDogZGVsdGEsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcbiAgcHJldj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGxCeSgtc3RlcCkpO1xyXG4gIG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsQnkoc3RlcCkpO1xyXG59KTtcclxuY29uc29sZS5sb2coJ2hvbWUuanMnKTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLW1hdGNoJykpIHJldHVybjtcclxuXHJcbiAgY29uc3QgQVNTRVRfQkFTRSA9ICh3aW5kb3cuQVNTRVRfQkFTRSB8fCAnLycpLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcclxuICBjb25zdCBmdWxsID0gKHApID0+IEFTU0VUX0JBU0UgKyBTdHJpbmcocCB8fCAnJykucmVwbGFjZSgvXlxcLysvLCAnJyk7XHJcblxyXG4gIGNvbnN0IGJvYXJkICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XHJcbiAgY29uc3QgbG9nRWwgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlLWxvZycpO1xyXG4gIGNvbnN0IGh1ZEEgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZC1hbGxpZXMnKTtcclxuICBjb25zdCBodWRFICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWQtZW5lbWllcycpO1xyXG4gIGNvbnN0IGJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdGFydCcpO1xyXG4gIGNvbnN0IGJ0blBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wYXVzZScpO1xyXG4gIGNvbnN0IGJ0blJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXNldCcpO1xyXG4gIGNvbnN0IGJ0bk11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1tdXNpYycpO1xyXG5cclxuICBpZiAoIWJvYXJkIHx8ICFsb2dFbCB8fCAhaHVkQSB8fCAhaHVkRSB8fCAhYnRuU3RhcnQgfHwgIWJ0blBhdXNlIHx8ICFidG5SZXNldCkge1xyXG4gICAgY29uc29sZS53YXJuKCdNYXRjaCBVSSBtaXNzaW5nJywgeyBib2FyZCwgbG9nRWwsIGh1ZEEsIGh1ZEUsIGJ0blN0YXJ0LCBidG5QYXVzZSwgYnRuUmVzZXQgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBSRVBMQVkgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBsYXktanNvbicpPy50ZXh0Q29udGVudCB8fCAne30nKTtcclxuICBpZiAoIVJFUExBWSB8fCAhQXJyYXkuaXNBcnJheShSRVBMQVkuaW5pdGlhbCkpIHsgY29uc29sZS53YXJuKCdObyByZXBsYXkgcHJvdmlkZWQnKTsgcmV0dXJuOyB9XHJcbiAgY29uc29sZS5kZWJ1ZygnUkVQTEFZOicsIFJFUExBWSxcclxuICAgICAgICAgICAgICAgICdhbGx5Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdhbGx5JykubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgJ2VuZW15Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdlbmVteScpLmxlbmd0aCk7XHJcblxyXG4gIGNvbnN0IHVuaXRzQnlJZCA9IG5ldyBNYXAoKTsgLy8gaWQgLT4gcnVudGltZSB1bml0XHJcbiAgbGV0IHRpbWVyID0gbnVsbCwgc3RlcCA9IDA7XHJcbiAgY29uc3QgVElDS19NUyA9IDQwMDtcclxuXHJcbiAgLy8gLS0tIEJhY2tncm91bmQgbXVzaWMgKEJHTSkgLS0tXHJcbiAgbGV0IGJnbSA9IG51bGwsIGJnbUVuYWJsZWQgPSB0cnVlLCBiZ21GYWRpbmcgPSBmYWxzZTtcclxuICBjb25zdCBiZ21VcmwgPSB3aW5kb3cuQkdNX1VSTDtcclxuICBpZiAoYmdtVXJsKSB7XHJcbiAgICBiZ20gPSBuZXcgQXVkaW8oYmdtVXJsKTtcclxuICAgIGJnbS5sb29wID0gdHJ1ZTtcclxuICAgIGJnbS5wcmVsb2FkID0gJ2F1dG8nO1xyXG4gICAgYmdtLnZvbHVtZSA9IDAuMDsgLy8gc3RhcnQgc2lsZW50LCBmYWRlIGluIG9uIFN0YXJ0XHJcbiAgfVxyXG4gIGlmIChidG5NdXNpYykge1xyXG4gICAgaWYgKCFiZ20pIHsgYnRuTXVzaWMuZGlzYWJsZWQgPSB0cnVlOyBidG5NdXNpYy50aXRsZSA9ICdBdWN1bmUgbXVzaXF1ZSBkaXNwb25pYmxlJzsgfVxyXG4gICAgYnRuTXVzaWMuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBiZ21FbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgICBidG5NdXNpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYmdtRW5hYmxlZCA9ICFiZ21FbmFibGVkO1xyXG4gICAgICBidG5NdXNpYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGJnbUVuYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcclxuICAgICAgaWYgKCFiZ20pIHJldHVybjtcclxuICAgICAgaWYgKGJnbUVuYWJsZWQpIHsgYmdtLnBsYXkoKS5jYXRjaCgoKT0+e30pOyB9IGVsc2UgeyBiZ20ucGF1c2UoKTsgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGJnbVBsYXkoKXsgaWYgKCFiZ20gfHwgIWJnbUVuYWJsZWQpIHJldHVybjsgYmdtRmFkaW5nPWZhbHNlOyBiZ20ucGxheSgpLmNhdGNoKChlKT0+eyBjb25zb2xlLmRlYnVnKCdiZ20gcGxheSBmYWlsZWQnLCBlKTsgfSk7IH1cclxuICBmdW5jdGlvbiBiZ21QYXVzZSgpeyBpZiAoIWJnbSkgcmV0dXJuOyBiZ20ucGF1c2UoKTsgfVxyXG4gIGZ1bmN0aW9uIGJnbUZhZGVPdXQobXM9OTAwKXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZyA9IHRydWU7IGNvbnN0IHN0YXJ0ID0gYmdtLnZvbHVtZTsgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIGNvbnN0IHN0ZXBGbiA9IChub3cpID0+IHtcclxuICAgICAgaWYgKCFiZ21GYWRpbmcpIHJldHVybjtcclxuICAgICAgY29uc3QgayA9IE1hdGgubWluKDEsIChub3cgLSB0MCkgLyBtcyk7XHJcbiAgICAgIGJnbS52b2x1bWUgPSBzdGFydCAqICgxIC0gayk7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7IGVsc2UgeyBiZ20ucGF1c2UoKTsgYmdtLnZvbHVtZSA9IHN0YXJ0OyBiZ21GYWRpbmcgPSBmYWxzZTsgfVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwRm4pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBiZ21GYWRlSW4obXM9NTAwLCB0YXJnZXQ9MC41KXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZz1mYWxzZTsgY29uc3Qgc3RhcnQgPSBiZ20udm9sdW1lOyBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgY29uc3Qgc3RlcEZuID0gKG5vdykgPT4ge1xyXG4gICAgICBjb25zdCBrID0gTWF0aC5taW4oMSwgKG5vdyAtIHQwKSAvIG1zKTtcclxuICAgICAgYmdtLnZvbHVtZSA9IHN0YXJ0ICsgKHRhcmdldCAtIHN0YXJ0KSAqIGs7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjZWxsID0gKHgseSkgPT4gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZyhtc2cpeyBpZighbXNnKXJldHVybjsgY29uc3QgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZC50ZXh0Q29udGVudD1tc2c7XHJcbiAgICBsb2dFbC5hcHBlbmRDaGlsZChkKTsgbG9nRWwuc2Nyb2xsVG9wPWxvZ0VsLnNjcm9sbEhlaWdodDsgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJIVUQoKXtcclxuICAgIGNvbnN0IGxpc3QgPSAodGVhbSkgPT4gWy4uLnVuaXRzQnlJZC52YWx1ZXMoKV0uZmlsdGVyKHU9PnUudGVhbT09PXRlYW0pXHJcbiAgICAgIC5tYXAodT0+YDxsaT48aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCI+PHNwYW4+JHt1Lm5hbWV9PC9zcGFuPjxlbT4ke3UuaHB9IFBWJHt1LnNoaWVsZD4wPycg4oCiIPCfm6EnK3Uuc2hpZWxkOicnfSR7dS5tYW5hPjA/JyDigKIg8J+UtycrdS5tYW5hOicnfTwvZW0+PC9saT5gKS5qb2luKCcnKTtcclxuICAgIGh1ZEEuaW5uZXJIVE1MID0gbGlzdCgnYWxseScpOyBodWRFLmlubmVySFRNTCA9IGxpc3QoJ2VuZW15Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVCYXJzKHUpe1xyXG4gICAgdS5lbC5xdWVyeVNlbGVjdG9yKCcuaHAnKS50ZXh0Q29udGVudCA9IHUuaHA7XHJcbiAgICBjb25zdCBzaD11LmVsLnF1ZXJ5U2VsZWN0b3IoJy5zaGllbGQnKTsgaWYoc2gpeyBzaC50ZXh0Q29udGVudD11LnNoaWVsZDsgc2guc3R5bGUuZGlzcGxheT11LnNoaWVsZD4wPycnOidub25lJzsgfVxyXG4gICAgY29uc3QgbWE9dS5lbC5xdWVyeVNlbGVjdG9yKCcubWFuYScpOyAgIGlmKG1hKXsgbWEudGV4dENvbnRlbnQ9dS5tYW5hOyAgIG1hLnN0eWxlLmRpc3BsYXk9dS5tYW5hPjA/Jyc6J25vbmUnOyB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0gU0ZYIGhlbHBlciB3aXRoIGxpZ2h0IHRocm90dGxpbmcgLS0tXHJcbiAgY29uc3QgbGFzdFNmeEF0ID0gbmV3IE1hcCgpO1xyXG4gIGZ1bmN0aW9uIHBsYXlTZngodXJsLCB2b2w9MC43LCBrZXk9dXJsLCBtaW5HYXBNcz0xMjApe1xyXG4gICAgdHJ5e1xyXG4gICAgICBpZighdXJsKSByZXR1cm47IGNvbnN0IG5vdz1wZXJmb3JtYW5jZS5ub3coKTsgY29uc3QgbGFzdD1sYXN0U2Z4QXQuZ2V0KGtleSl8fDA7IGlmKG5vdy1sYXN0PG1pbkdhcE1zKSByZXR1cm47XHJcbiAgICAgIGxhc3RTZnhBdC5zZXQoa2V5LCBub3cpO1xyXG4gICAgICBjb25zdCBhID0gbmV3IEF1ZGlvKHVybCk7IGEudm9sdW1lPXZvbDsgYS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuICAgIH1jYXRjaHsgLyogaWdub3JlICovIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW5pdGlhbCgpe1xyXG4gICAgYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKS5mb3JFYWNoKGM9PmMuaW5uZXJIVE1MPScnKTsgbG9nRWwuaW5uZXJIVE1MPScnOyB1bml0c0J5SWQuY2xlYXIoKTtcclxuICAgIGZvcihjb25zdCB1MCBvZiBSRVBMQVkuaW5pdGlhbCl7XHJcbiAgICAgIGNvbnN0IHUgPSB7Li4udTB9O1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBlbC5jbGFzc05hbWUgPSBgdW5pdCB1bml0LS0ke3UudGVhbX0gdW5pdC0tJHt1LmNsYXNzfWA7XHJcbiAgICAgIGVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJocFwiPiR7dS5ocH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaGllbGRcIiR7dS5zaGllbGQ+MD8nJzonIHN0eWxlPVwiZGlzcGxheTpub25lXCInfT4ke3Uuc2hpZWxkfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hbmFcIiR7dS5tYW5hPjA/Jyc6JyBzdHlsZT1cImRpc3BsYXk6bm9uZVwiJ30+JHt1Lm1hbmF9PC9zcGFuPmA7XHJcbiAgICAgIGNvbnN0IGMgPSBjZWxsKHUueCwgdS55KTsgaWYgKGMpIGMuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICB1LmVsID0gZWw7IHVuaXRzQnlJZC5zZXQodS5pZCwgdSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJIVUQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGx5QWN0aW9uKGEpe1xyXG4gICAgc3dpdGNoKGEudCl7XHJcbiAgICAgIGNhc2UgJ2Z4Jzoge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgIGNvbnN0IGF0ID0gQXJyYXkuaXNBcnJheShhLmF0KSA/IGEuYXQgOiBudWxsOyBpZighYXQpIGJyZWFrO1xyXG4gICAgICAgICAgY29uc3QgYyA9IGNlbGwoYXRbMF0sIGF0WzFdKTsgaWYoIWMpIGJyZWFrO1xyXG4gICAgICAgICAgY29uc3Qga2luZCA9IGEua2luZCB8fCAnZGVmYXVsdCc7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSAod2luZG93LkZYX1VSTFMgJiYgd2luZG93LkZYX1VSTFNba2luZF0pIHx8ICh3aW5kb3cuRlhfVVJMUyAmJiB3aW5kb3cuRlhfVVJMUy5kZWZhdWx0KTtcclxuICAgICAgICAgIGlmKCF1cmwpIGJyZWFrO1xyXG4gICAgICAgICAgY29uc3QgZnggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZnguY2xhc3NOYW1lID0gJ2Z4IGZ4LS0nK2tpbmQ7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgaW1nLmFsdCA9IGtpbmQ7IGltZy5zcmMgPSBmdWxsKHVybCk7XHJcbiAgICAgICAgICBmeC5hcHBlbmRDaGlsZChpbWcpOyBjLmFwcGVuZENoaWxkKGZ4KTtcclxuICAgICAgICAgIGNvbnN0IGR1ciA9IE1hdGgubWF4KDIwMCwgTWF0aC5taW4oNDAwMCwgcGFyc2VJbnQoYS5kdXJ8fDEwMDAsMTApKSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57IGZ4LnJlbW92ZSgpOyB9LCBkdXIpO1xyXG4gICAgICAgIH1jYXRjaHsgLyogaWdub3JlICovIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdtb3ZlJzoge1xyXG4gICAgICAgIGNvbnN0IHU9dW5pdHNCeUlkLmdldChhLmlkKTsgaWYoIXUpYnJlYWs7XHJcbiAgICAgICAgY29uc3QgdG89Y2VsbChhLnRvWzBdLGEudG9bMV0pOyBpZighdG8pYnJlYWs7XHJcbiAgICAgICAgdG8uYXBwZW5kQ2hpbGQodS5lbCk7IHUueD1hLnRvWzBdOyB1Lnk9YS50b1sxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdhdHRhY2snOiB7XHJcbiAgICAgICAgY29uc3QgYXR0PXVuaXRzQnlJZC5nZXQoYS5hdHQpLCBkZWY9dW5pdHNCeUlkLmdldChhLmRlZik7IGlmKCFhdHR8fCFkZWYpYnJlYWs7XHJcbiAgICAgICAgY29uc3QgcHJldkhwID0gZGVmLmhwO1xyXG4gICAgICAgIGRlZi5ocD1hLmhwOyBkZWYuc2hpZWxkPWEuc2hpZWxkOyBpZihhLm1hbmEhPT11bmRlZmluZWQpIGF0dC5tYW5hPWEubWFuYTtcclxuICAgICAgICB1cGRhdGVCYXJzKGRlZik7IHVwZGF0ZUJhcnMoYXR0KTtcclxuICAgICAgICAvLyBoYWxmIEhQIGNyb3NzaW5nXHJcbiAgICAgICAgaWYocHJldkhwPjAgJiYgZGVmLmhwPjApe1xyXG4gICAgICAgICAgY29uc3Qgd2FzQWJvdmUgPSBwcmV2SHAgPiAoZGVmLm1heEhwfHxwcmV2SHAqMikvMjtcclxuICAgICAgICAgIGNvbnN0IG5vd0JlbG93ID0gZGVmLmhwIDw9IChkZWYubWF4SHB8fHByZXZIcCoyKS8yO1xyXG4gICAgICAgICAgaWYod2FzQWJvdmUgJiYgbm93QmVsb3cpeyBwbGF5U2Z4KHdpbmRvdy5TRlhfSEFMRkhQX1VSTCwgMC43LCAnaGFsZjonK2RlZi5pZCwgNDAwKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkZWYuaHA8PTApeyBkZWYuZWwuY2xhc3NMaXN0LmFkZCgna28nKTsgc2V0VGltZW91dCgoKT0+ZGVmLmVsLnJlbW92ZSgpLDEyMCk7IHBsYXlTZngod2luZG93LlNGWF9ERUFUSF9VUkwsIDAuOCwgJ2RlYXRoJywgMTUwKTsgfVxyXG4gICAgICAgIGlmKGEubG9nKSBsb2coYS5sb2cpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2hlYWwnOiB7XHJcbiAgICAgICAgY29uc3Qgc3JjPXVuaXRzQnlJZC5nZXQoYS5zcmMpLCBkc3Q9dW5pdHNCeUlkLmdldChhLmRzdCk7IGlmKCFzcmN8fCFkc3QpYnJlYWs7XHJcbiAgICAgICAgaWYoYS5tYW5hIT09dW5kZWZpbmVkKSBzcmMubWFuYT1hLm1hbmE7XHJcbiAgICAgICAgZHN0LmhwPU1hdGgubWluKGRzdC5tYXhIcCwoZHN0LmhwPz8wKSsoYS5hbW91bnQ/PzApKTtcclxuICAgICAgICAvLyBoZWFsIFNGWCAoY3JpdCBpZiBhbW91bnQgbGFyZ2UgYW5kIFVSTCBwcm92aWRlZClcclxuICAgICAgICBjb25zdCBjcml0ID0gKGEuY3JpdD09PXRydWUpIHx8IChhLmFtb3VudCAmJiBkc3QubWF4SHAgJiYgYS5hbW91bnQgPj0gMC4yNSpkc3QubWF4SHApO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGNyaXQgJiYgd2luZG93LlNGWF9IRUFMX0NSSVRfVVJMID8gd2luZG93LlNGWF9IRUFMX0NSSVRfVVJMIDogd2luZG93LlNGWF9IRUFMX1VSTDtcclxuICAgICAgICBwbGF5U2Z4KHVybCwgY3JpdD8wLjg6MC42LCBjcml0PydoZWFsY3JpdCc6J2hlYWwnLCA4MCk7XHJcbiAgICAgICAgdXBkYXRlQmFycyhzcmMpOyB1cGRhdGVCYXJzKGRzdCk7IGlmKGEubG9nKSBsb2coYS5sb2cpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2xvZyc6IGlmKGEubXNnKSBsb2coYS5tc2cpOyBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlUaWNrKCl7XHJcbiAgICBpZihzdGVwID49IChSRVBMQVkuYWN0aW9ucz8ubGVuZ3RoIHx8IDApKXtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7IHRpbWVyPW51bGw7XHJcbiAgICAgIGNvbnN0IG91dGNvbWUgPSBSRVBMQVkud2lubmVyPT09J2FsbHknID8gJ3ZpY3RvcnknIDogUkVQTEFZLndpbm5lcj09PSdlbmVteScgPyAnZGVmZWF0JyA6ICdkcmF3JztcclxuICAgICAgbG9nKG91dGNvbWU9PT0ndmljdG9yeSc/J1ZpY3RvaXJlICEnOm91dGNvbWU9PT0nZGVmZWF0Jz8nRMOpZmFpdGXigKYnOifDiWdhbGl0w6kgIScpO1xyXG4gICAgICAvLyBzaG93IG92ZXJsYXlcclxuICAgICAgY29uc3Qgb3YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LW92ZXJsYXknKTtcclxuICAgICAgY29uc3QgdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXRleHQnKTtcclxuICAgICAgY29uc3QgYnRuQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVzdWx0LWNvbnRpbnVlJyk7XHJcbiAgICAgIGNvbnN0IGJ0blMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXNvdW5kLXRvZ2dsZScpO1xyXG4gICAgICBpZiAob3YgJiYgdHgpIHtcclxuICAgICAgICBvdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICBvdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aWN0b3J5Jywgb3V0Y29tZT09PSd2aWN0b3J5Jyk7XHJcbiAgICAgICAgb3YuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZGVmZWF0Jywgb3V0Y29tZT09PSdkZWZlYXQnKTtcclxuICAgICAgICB0eC50ZXh0Q29udGVudCA9IG91dGNvbWU9PT0ndmljdG9yeScgPyAnVklDVE9JUkUnIDogb3V0Y29tZT09PSdkZWZlYXQnID8gJ0TDiUZBSVRFJyA6ICfDiUdBTElUw4knO1xyXG4gICAgICAgIGJnbUZhZGVPdXQoMTIwMCk7XHJcblxyXG4gICAgICAgIC8vIFZpY3RvcnkgU0ZYIChpZiBwcm92aWRlZClcclxuICAgICAgICBpZiAob3V0Y29tZSA9PT0gJ3ZpY3RvcnknKSB7XHJcbiAgICAgICAgICBjb25zdCBzZnhVcmwgPSB3aW5kb3cuU0ZYX1ZJQ1RPUllfVVJMO1xyXG4gICAgICAgICAgaWYgKHNmeFVybCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGF1ZCA9IG5ldyBBdWRpbyhzZnhVcmwpO1xyXG4gICAgICAgICAgICAgIGF1ZC52b2x1bWUgPSAwLjc7IGF1ZC5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYXVkLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChfKSB7IC8qIGlnbm9yZSAqLyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdXRjb21lID09PSAnZGVmZWF0Jykge1xyXG4gICAgICAgICAgcGxheVNmeCh3aW5kb3cuU0ZYX0RFRkVBVF9VUkwsIDAuNywgJ2RlZmVhdCcsIDIwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTb3VuZCBGWCAoV2ViQXVkaW8gc2ltcGxlIHRvbmVzKVxyXG4gICAgICAgIGxldCBhdWRpb0VuYWJsZWQgPSBmYWxzZSwgY3R4ID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBwbGF5SmluZ2xlKGtpbmQpe1xyXG4gICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBpZighYXVkaW9FbmFibGVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmKCFjdHgpIGN0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dHx8d2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gY3R4LmN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICBjb25zdCBub3RlcyA9IGtpbmQ9PT0ndmljdG9yeScgPyBbNTIzLDY1OSw3ODRdIDoga2luZD09PSdkZWZlYXQnID8gWzM5MiwzNDksMjYxXSA6IFs0NDAsNDQwLDQ0MF07XHJcbiAgICAgICAgICAgIG5vdGVzLmZvckVhY2goKGYsaSk9PntcclxuICAgICAgICAgICAgICBjb25zdCBvID0gY3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcclxuICAgICAgICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUdhaW4oKTtcclxuICAgICAgICAgICAgICBvLnR5cGU9J3NpbmUnOyBvLmZyZXF1ZW5jeS52YWx1ZT1mO1xyXG4gICAgICAgICAgICAgIG8uY29ubmVjdChnKTsgZy5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbik7XHJcbiAgICAgICAgICAgICAgY29uc3QgdCA9IG5vdyArIGkqMC4xODsgZy5nYWluLnNldFZhbHVlQXRUaW1lKDAuMDAxLHQpOyBnLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjIsdCswLjAyKTsgZy5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsdCswLjMpO1xyXG4gICAgICAgICAgICAgIG8uc3RhcnQodCk7IG8uc3RvcCh0KzAuMzIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1jYXRjaChlKXsgY29uc29sZS5kZWJ1ZygnYXVkaW8gZmFpbGVkJywgZSk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0blMpIHtcclxuICAgICAgICAgIGJ0blMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgIGF1ZGlvRW5hYmxlZCA9ICFhdWRpb0VuYWJsZWQ7XHJcbiAgICAgICAgICAgIGJ0blMuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBhdWRpb0VuYWJsZWQ/ICd0cnVlJzonZmFsc2UnKTtcclxuICAgICAgICAgICAgaWYoYXVkaW9FbmFibGVkKXsgcGxheUppbmdsZShvdXRjb21lKTsgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb250aW51ZSBidXR0b24gb3IgY2xpY2sgYW55d2hlcmUgb24gdmVpbFxyXG4gICAgICAgIGNvbnN0IGhpZGUgPSAoKT0+IG92LmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIGlmKGJ0bkMpIGJ0bkMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlLCB7IG9uY2U6dHJ1ZSB9KTtcclxuICAgICAgICBvdi5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LXZlaWwnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlLCB7IG9uY2U6dHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhcHBseUFjdGlvbihSRVBMQVkuYWN0aW9uc1tzdGVwKytdKTsgcmVuZGVySFVEKCk7XHJcbiAgfVxyXG5cclxuICBidG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBpZiAoIXRpbWVyKXsgdGltZXI9c2V0SW50ZXJ2YWwocGxheVRpY2ssVElDS19NUyk7IH1cclxuICAgIGlmIChiZ20pe1xyXG4gICAgICBiZ21FbmFibGVkID0gdHJ1ZTtcclxuICAgICAgaWYgKGJ0bk11c2ljKSBidG5NdXNpYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsJ3RydWUnKTtcclxuICAgICAgYmdtLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgYmdtLnBsYXkoKS50aGVuKCgpPT4gYmdtRmFkZUluKDQ1MCwgMC41KSkuY2F0Y2goKGUpPT57IGNvbnNvbGUuZGVidWcoJ2JnbSBwbGF5IGJsb2NrZWQnLCBlKTsgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyBpZih0aW1lcil7IGNsZWFySW50ZXJ2YWwodGltZXIpOyB0aW1lcj1udWxsOyB9IGJnbVBhdXNlKCk7IH0pO1xyXG4gIGJ0blJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgaWYodGltZXIpeyBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDsgfSBzdGVwPTA7IHNwYXduSW5pdGlhbCgpOyBpZiAoYmdtKSB7IGJnbVBhdXNlKCk7IGJnbS5jdXJyZW50VGltZSA9IDA7IH0gfSk7XHJcblxyXG4gIHNwYXduSW5pdGlhbCgpO1xyXG59KTtcclxuIiwiLy8gdGVhbS1idWlsZGVyLmpzXHJcblxyXG4vLyBiYXNlIGRlcyBhc3NldHMgZm91cm5pZSBwYXIgVHdpZzogd2luZG93LkFTU0VUX0JBU0UgPSBcInt7IGFzc2V0KCcnKSB9fVwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBBU1NFVF9CQVNFID0gKHdpbmRvdy5BU1NFVF9CQVNFIHx8ICcvJykucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xyXG4gIGNvbnN0IGZ1bGxJbWcgPSAocCkgPT4gQVNTRVRfQkFTRSArIFN0cmluZyhwIHx8ICcnKS5yZXBsYWNlKC9eXFwvKy8sICcnKTtcclxuICBcclxuICBjb25zb2xlLmxvZygnVGVhbSBCdWlsZGVyIHNjcmlwdCBsb2FkZWQhJywgeyBBU1NFVF9CQVNFIH0pO1xyXG4gIGNvbnN0IG93bmVkRWwgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvd25lZC1naXJscy1qc29uJyk7XHJcbiAgY29uc3Qgc3VnZ2VzdGVkRWwgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Z2dlc3RlZC1naXJscy1qc29uJyk7XHJcbiAgaWYgKCFvd25lZEVsKSByZXR1cm47XHJcblxyXG4gIC8qKiBAdHlwZSB7QXJyYXl9ICovXHJcbiAgY29uc3QgT1dORUQgICAgICAgID0gSlNPTi5wYXJzZShvd25lZEVsLnRleHRDb250ZW50IHx8ICdbXScpO1xyXG4gIC8qKiBAdHlwZSB7QXJyYXl9ICovXHJcbiAgY29uc3QgU1VHR0VTVEVEICAgID0gc3VnZ2VzdGVkRWwgPyBKU09OLnBhcnNlKHN1Z2dlc3RlZEVsLnRleHRDb250ZW50IHx8ICdbXScpIDogW107XHJcblxyXG4gIGNvbnN0IHBpY2tHcmlkICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNrLWdyaWQnKTtcclxuICBjb25zdCBiZW5jaEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVuY2gtZ3JpZCcpO1xyXG4gIGNvbnN0IGJvYXJkICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gIGNvbnN0IGJ0blJlcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVyb2xsJyk7XHJcbiAgY29uc3QgcmVyb2xsQ291bnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXJvbGwtY291bnQnKTtcclxuICBjb25zdCBidG5Mb2NrICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWxvY2snKTtcclxuICBjb25zdCBib251c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1ib251c2VzJyk7XHJcbiAgY29uc3Qgc2tlbGV0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1za2VsZXRvbicpO1xyXG5cclxuICBjb25zdCBNQVhfVEVBTSAgPSA0O1xyXG4gIGNvbnN0IHBsYWNlZCAgICA9IG5ldyBNYXAoKTsgLy8gXCJ4LHlcIiAtPiB7IGdpcmwsIGVsIH1cclxuICBjb25zdCBpbkJlbmNoICAgPSBuZXcgTWFwKCk7IC8vIGdpcmxJZCAtPiBjYXJkRWxlbWVudFxyXG5cclxuICAvLyBoZWxwZXJzXHJcbiAgY29uc3QgcmFuZEludCA9IChuKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKTtcclxuICBjb25zdCBwaWNrTiA9IChhcnIsIG4pID0+IHtcclxuICAgIGNvbnN0IHBvb2wgPSBbLi4uYXJyXSwgb3V0ID0gW107XHJcbiAgICB3aGlsZSAob3V0Lmxlbmd0aCA8IE1hdGgubWluKG4sIHBvb2wubGVuZ3RoKSkge1xyXG4gICAgICBvdXQucHVzaChwb29sLnNwbGljZShyYW5kSW50KHBvb2wubGVuZ3RoKSwgMSlbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9O1xyXG4gIGNvbnN0IGNlbGxLZXkgPSAoeCwgeSkgPT4gYCR7eH0sJHt5fWA7XHJcblxyXG4gIC8vIC0tLS0gVUkgcmVuZGVyZXJzIC0tLS1cclxuICBmdW5jdGlvbiByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlIH0pIHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gYHRiLWNhcmQgdGItY2FyZC0tJHtnaXJsLmNsYXNzfWA7XHJcbiAgICBjYXJkLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICBjYXJkLmRhdGFzZXQuaWQgPSBnaXJsLmlkO1xyXG4gICAgY2FyZC5kYXRhc2V0LnNvdXJjZSA9IHNvdXJjZTtcclxuXHJcbiAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX2ltZ1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHtmdWxsSW1nKGdpcmwuaW1nKX1cIiBhbHQ9XCIke2dpcmwubmFtZX1cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX19tZXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX25hbWVcIj4ke2dpcmwubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fdGFnc1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgJHtjbGFzc1RhZyhnaXJsLmNsYXNzKX1cIj4ke2NsYXNzTGFiZWwoZ2lybC5jbGFzcyl9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgdGFnLWZhbWlseVwiPiR7Z2lybC5mYW1pbHkgPz8gJyd9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX3N0YXRzXCI+XHJcbiAgICAgICAgPHNwYW4+UFYgJHtnaXJsLnBkdn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+QVRLICR7Z2lybC5hdGt9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlBSQyAke01hdGgucm91bmQoKGdpcmwuY2hhbmNlX2F0ayA/PyAwKSAqIDEwMCl9JTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KGdpcmwpKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGNhcmQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKSk7XHJcbiAgICB9KTtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKSk7XHJcblxyXG4gICAgLy8gZG91YmxlLWNsaWMgLT4gdG9nZ2xlIGJhbmNcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIC8vIFRvZ2dsZSBiYW5jOiBzaSBkw6lqw6AgZGFucyBsZSBiYW5jIC0+IG9uIGxlIGxhaXNzZSBhZmZpY2jDqSBtYWlzIG9uIGxlIG1hcnF1ZSBjb21tZSBub24tcHLDqXNlcnbDqVxyXG4gICAgICBpZiAoY2FyZC5wYXJlbnRFbGVtZW50ID09PSBiZW5jaEdyaWQpIHtcclxuICAgICAgICAvLyBSZXRyYWl0IGR1IGJhbmM6IG9uIGxlIHJlbWV0IGRhbnMgc29uIGNvbnRlbmV1ciBzb3VyY2Ugc2kgcG9zc2libGUsIHNpbm9uIG9uIGxlIHN1cHByaW1lIHByb3ByZW1lbnRcclxuICAgICAgICBpbkJlbmNoLmRlbGV0ZShnaXJsLmlkKTtcclxuICAgICAgICAvLyBEw6lwbGFjZXIgbGEgY2FydGUgdmVycyBsYSB6b25lIGRlIHBpY2sgcG91ciBsYSByZW5kcmUgcmVyb2xsYWJsZVxyXG4gICAgICAgIGlmIChwaWNrR3JpZCkgcGlja0dyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgZWxzZSBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEFqb3V0IGF1IGJhbmNcclxuICAgICAgICBiZW5jaEdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlTG9ja1N0YXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VDaGlwKGdpcmwpIHtcclxuICAgIGNvbnN0IGNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoaXAuY2xhc3NOYW1lID0gYGNoaXAgJHtjbGFzc1RhZyhnaXJsLmNsYXNzKX1gO1xyXG4gICAgY2hpcC50aXRsZSA9IGdpcmwubmFtZTtcclxuICAgIGNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGNoaXAuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtmdWxsSW1nKGdpcmwuaW1nKX1cIiBhbHQ9XCIke2dpcmwubmFtZX1cIj48c3Bhbj4ke2dpcmwubmFtZX08L3NwYW4+YDtcclxuXHJcbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBKU09OLnN0cmluZ2lmeShnaXJsKSk7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBjaGlwLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJykpO1xyXG4gICAgfSk7XHJcbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiBjaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJykpO1xyXG5cclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBjaGlwLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJy5jZWxsJyk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gY2VsbEtleShjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnkpO1xyXG4gICAgICAgIHBsYWNlZC5kZWxldGUoa2V5KTtcclxuICAgICAgICBjZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghaW5CZW5jaC5oYXMoZ2lybC5pZCkpIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gcmVuZGVyQ2FyZChnaXJsLCB7IHNvdXJjZTogJ2JlbmNoJyB9KTtcclxuICAgICAgICBiZW5jaEdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlTG9ja1N0YXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hpcDtcclxuICB9XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQaWNrKCkge1xyXG4gIHBpY2tHcmlkLmlubmVySFRNTCA9ICcnO1xyXG4gIGxldCBwb29sID0gU1VHR0VTVEVELmxlbmd0aCA/IFsuLi5TVUdHRVNURURdIDogWy4uLk9XTkVEXTtcclxuICBpZiAocG9vbC5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgLy8gb24gZHVwbGlxdWUgc2kgPCA0XHJcbiAgd2hpbGUgKHBvb2wubGVuZ3RoIDwgNCkgcG9vbCA9IHBvb2wuY29uY2F0KHBvb2wpO1xyXG5cclxuICAvLyBFeGNsdXJlIGNldXggZMOpasOgIGF1IGJhbmMgKHByw6lzZXJ2w6lzKSBkdSB0aXJhZ2VcclxuICBjb25zdCBwcmVzZXJ2ZWRJZHMgPSBuZXcgU2V0KEFycmF5LmZyb20oaW5CZW5jaC5rZXlzKCkpKTtcclxuICBjb25zdCBwb29sMiA9IHBvb2wuZmlsdGVyKGcgPT4gIXByZXNlcnZlZElkcy5oYXMoZy5pZCkpO1xyXG5cclxuICAvLyBTw6lsZWN0aW9ubmUganVzcXUnw6AgNCBzdWdnZXN0aW9ucyB1bmlxdWVzIHBhcm1pIGxlIHBvb2wgcmVzdGFudFxyXG4gIGNvbnN0IHBpY2tzID0gW107XHJcbiAgY29uc3QgdGFrZW4gPSBuZXcgU2V0KCk7XHJcbiAgY29uc3QgdGFyZ2V0ID0gTWF0aC5taW4oNCwgcG9vbDIubGVuZ3RoKTtcclxuICB3aGlsZSAocGlja3MubGVuZ3RoIDwgdGFyZ2V0ICYmIHRha2VuLnNpemUgPCBwb29sMi5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb29sMi5sZW5ndGgpO1xyXG4gICAgaWYgKCF0YWtlbi5oYXMoaSkpIHsgdGFrZW4uYWRkKGkpOyBwaWNrcy5wdXNoKHBvb2wyW2ldKTsgfVxyXG4gIH1cclxuICBwaWNrcy5mb3JFYWNoKGcgPT4gcGlja0dyaWQuYXBwZW5kQ2hpbGQocmVuZGVyQ2FyZChnLCB7IHNvdXJjZTogJ3BpY2snIH0pKSk7XHJcbn1cclxuICBmdW5jdGlvbiBjbGFzc1RhZyhjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ3RhZy1tZWxlZSc7XHJcbiAgICAgIGNhc2UgJ2Rwc19yYW5nZWQnOiByZXR1cm4gJ3RhZy1yYW5nZWQnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICd0YWctdGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ3RhZy1oZWFsJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xhc3NMYWJlbChjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ0RQUyBDw6BDJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAnRFBTIGRpc3RhbmNlJztcclxuICAgICAgY2FzZSAndGFuayc6ICAgICAgIHJldHVybiAnVGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ0hlYWxlcic7XHJcbiAgICAgIGRlZmF1bHQ6ICAgICAgICAgICByZXR1cm4gY2xzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBEbkQgYm9hcmQgLS0tLVxyXG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQuY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gY2VsbC5kYXRhc2V0O1xyXG4gICAgY29uc3Qga2V5ID0gY2VsbEtleSh4LCB5KTtcclxuXHJcbiAgICBjb25zdCBkcmFnZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50Yi1jYXJkLmRyYWdnaW5nLCAuY2hpcC5kcmFnZ2luZycpO1xyXG4gICAgaWYgKCFkcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyBzaSBtw6ptZSBow6lybyBkw6lqw6AgcGxhY8OpIGFpbGxldXJzIC0+IGxpYsOocmUgbOKAmWFuY2llbm5lIGNlbGx1bGVcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHBsYWNlZCkge1xyXG4gICAgICBpZiAodi5naXJsLmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBjb25zdCBvbGRDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtrLnNwbGl0KCcsJylbMF19XCJdW2RhdGEteT1cIiR7ay5zcGxpdCgnLCcpWzFdfVwiXWApO1xyXG4gICAgICAgIGlmIChvbGRDZWxsKSBvbGRDZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGltaXRlIMOpcXVpcGVcclxuICAgIGlmICghcGxhY2VkLmhhcyhrZXkpICYmIHBsYWNlZC5zaXplID49IE1BWF9URUFNKSByZXR1cm47XHJcblxyXG4gICAgLy8gc3dhcCBzaSBsYSBjZWxsdWxlIMOpdGFpdCBvY2N1cMOpZVxyXG4gICAgaWYgKHBsYWNlZC5oYXMoa2V5KSkge1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHBsYWNlZC5nZXQoa2V5KTtcclxuICAgICAgaWYgKGV4aXN0aW5nPy5lbCkge1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGV4aXN0aW5nLmdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pKTtcclxuICAgICAgICBpbkJlbmNoLnNldChleGlzdGluZy5naXJsLmlkLCBiZW5jaEdyaWQubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaXAgPSBtYWtlQ2hpcChnaXJsKTtcclxuICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGNoaXApO1xyXG4gICAgcGxhY2VkLnNldChrZXksIHsgZ2lybCwgZWw6IGNoaXAgfSk7XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBEbkQgYmVuY2ggLS0tLVxyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyByZXRpcmUgZHUgYm9hcmQgc2kgcHLDqXNlbnRlXHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBwbGFjZWQpIHtcclxuICAgICAgaWYgKHYuZ2lybC5pZCA9PT0gZ2lybC5pZCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKGMpIGMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5CZW5jaC5oYXMoZ2lybC5pZCkpIHtcclxuICAgICAgY29uc3QgY2FyZCA9IHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSk7XHJcbiAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBhY3Rpb25zIC0tLS1cclxubGV0IHRpY2tldElkID0gbnVsbDtcclxubGV0IHBvbGxUaW1lciA9IG51bGw7XHJcblxyXG5idG5Mb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTsgc2tlbGV0b24uY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpOyB9XHJcbiAgLy8gYnVpbGQgcGF5bG9hZFxyXG4gIGNvbnN0IGxpbmV1cCA9IEFycmF5LmZyb20ocGxhY2VkLmVudHJpZXMoKSkubWFwKChba2V5LCB2YWxdKSA9PiB7XHJcbiAgICBjb25zdCBbeCwgeV0gPSBrZXkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcclxuICAgIHJldHVybiB7IGlkOiB2YWwuZ2lybC5pZCwgeCwgeSB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBTVEFSVF9VUkwgID0gd2luZG93Lk1NPy5zdGFydCAgPz8gJy9tYXRjaG1ha2luZy9zdGFydCc7XHJcbiAgY29uc3QgU1RBVFVTX1RQTCA9IHdpbmRvdy5NTT8uc3RhdHVzID8/ICcvbWF0Y2htYWtpbmcvc3RhdHVzL19fSURfXyc7XHJcbiAgY29uc3Qgc3RhdHVzVXJsICA9IChpZCkgPT4gU1RBVFVTX1RQTC5yZXBsYWNlKCdfX0lEX18nLCBTdHJpbmcoaWQpKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0NhbGxpbmcgU1RBUlRfVVJMID0nLCBTVEFSVF9VUkwpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzICA9IGF3YWl0IGZldGNoKFNUQVJUX1VSTCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxpbmV1cCB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIHRyeSB7IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpOyB9IGNhdGNoIHsgZGF0YSA9IG51bGw7IH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnbWF0Y2htYWtpbmcvc3RhcnQgLT4nLCByZXMuc3RhdHVzLCBkYXRhID8/IHRleHQpO1xyXG5cclxuICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgIGFsZXJ0KGBNYXRjaG1ha2luZyBmYWlsZWQgKCR7cmVzLnN0YXR1c30pOlxcbiR7ZGF0YT8uZXJyb3IgPz8gdGV4dH1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkYXRhIHx8IChkYXRhLnN0YXR1cyAhPT0gJ21hdGNoZWQnICYmIGRhdGEuc3RhdHVzICE9PSAncXVldWVkJykpIHtcclxuICAgICAgYWxlcnQoJ1LDqXBvbnNlIGluYXR0ZW5kdWU6XFxuJyArIChkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiB0ZXh0KSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdtYXRjaGVkJykge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbWF0Y2gvJHtkYXRhLm1hdGNoSWR9YDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHF1ZXVlZCAtPiBwb2xsIHN0YXR1c1xyXG4gICAgdGlja2V0SWQgPSBkYXRhLnRpY2tldElkO1xyXG4gICAgYnRuTG9jay5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBidG5Mb2NrLnRleHRDb250ZW50ID0gJ/CflI4gUmVjaGVyY2hlIGVuIGNvdXJz4oCmJztcclxuXHJcbiAgICBwb2xsVGltZXIgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaChzdGF0dXNVcmwodGlja2V0SWQpLCB7IGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pO1xyXG4gICAgICBjb25zdCBqID0gYXdhaXQgci5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdtYXRjaG1ha2luZy9zdGF0dXMgLT4nLCBqKTtcclxuICAgICAgaWYgKGouc3RhdHVzID09PSAnbWF0Y2hlZCcpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHBvbGxUaW1lcik7XHJcbiAgICBpZiAoc2tlbGV0b24pIHsgc2tlbGV0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTsgfVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9tYXRjaC8ke2oubWF0Y2hJZH1gO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MDAwKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgYWxlcnQoJ0VycmV1ciByw6lzZWF1OiAnICsgZS5tZXNzYWdlKTtcclxuICBpZiAoc2tlbGV0b24pIHsgc2tlbGV0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTsgfVxyXG4gIH1cclxufSk7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2tTdGF0ZSgpIHtcclxuICAgIGJ0bkxvY2suZGlzYWJsZWQgPSAocGxhY2VkLnNpemUgIT09IE1BWF9URUFNKTtcclxuICAgIHJlbmRlckJvbnVzZXMoKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLSBTeW5lcmd5IGNvbXB1dGF0aW9uIChjbGllbnQtc2lkZSBtaXJyb3Igb2Ygc2VydmVyIHRpZXJzKSAtLS1cclxuICBmdW5jdGlvbiBjb21wdXRlQm9udXNlcygpIHtcclxuICAgIGNvbnN0IGNvdW50cyA9IHt9OyAvLyBmYW1pbHkgLT4gY291bnRcclxuICAgIGZvciAoY29uc3QgWywge2dpcmx9XSBvZiBwbGFjZWQpIHtcclxuICAgICAgY29uc3QgZmFtID0gKGdpcmwuZmFtaWx5IHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAoIWZhbSkgY29udGludWU7IGNvdW50c1tmYW1dID0gKGNvdW50c1tmYW1dIHx8IDApICsgMTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpZXJzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IFtmYW0sIG5dIG9mIE9iamVjdC5lbnRyaWVzKGNvdW50cykpIHtcclxuICAgICAgY29uc3QgdGllciA9IG4gPj0gNCA/IDQgOiAobiA+PSAzID8gMyA6IChuID49IDIgPyAyIDogMCkpO1xyXG4gICAgICBpZiAodGllciA9PT0gMCkgY29udGludWU7IHRpZXJzW2ZhbV0gPSB7IG4sIHRpZXIgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aWVycztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckJvbnVzZXMoKSB7XHJcbiAgICBpZiAoIWJvbnVzTGlzdCkgcmV0dXJuO1xyXG4gICAgY29uc3QgdGllcnMgPSBjb21wdXRlQm9udXNlcygpO1xyXG4gICAgYm9udXNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgbGFiZWwgPSAoZmFtLCB0aWVyLCBuKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcCA9IHtcclxuICAgICAgICBzb2xlaWw6IHsyOidBVEsgKzUlJywzOidQcsOpY2lzaW9uICs1JScsNDonQ3JpdCArNSUnfSxcclxuICAgICAgICBsdW5lOiAgIHsyOidFc3F1aXZlICszJScsMzonRXNxdWl2ZSArMiUgJiBNYW5hICsxMCcsNDonQm91Y2xpZXIgKzEwJ30sXHJcbiAgICAgICAgbmF0dXJlOiB7MjonUFYgKzUlJywzOidCb3VjbGllciArMTUnLDQ6J1BWICs1JSd9LFxyXG4gICAgICAgIGlkb2xlOiAgezI6J0NyaXQgKzUlJywzOidBVEsgKzUlJyw0OidNYW5hICsxMCd9LFxyXG4gICAgICAgIG9tYnJlOiAgezI6J0VzcXVpdmUgKzUlJywzOidQcsOpY2lzaW9uICs1JScsNDonQm91Y2xpZXIgKzE1J30sXHJcbiAgICAgICAgYXJjYW5lOiB7MjonUHLDqWNpc2lvbiArNSUnLDM6J01hbmEgKzE1Jyw0OidDcml0ICs1JSd9LFxyXG4gICAgICAgIGV0b2lsZTogezI6J1Byw6ljaXNpb24gKzMlJywzOidDcml0ICs1JScsNDonQVRLICs1JSd9LFxyXG4gICAgICAgIG9jZWFuOiAgezI6J0VzcXVpdmUgKzMlJywzOidNYW5hICsxMCcsNDonUHLDqWNpc2lvbiArNSUnfVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBlZmZlY3QgPSAobWFwW2ZhbV0gJiYgbWFwW2ZhbV1bdGllcl0pID8gbWFwW2ZhbV1bdGllcl0gOiBgUGFsaWVyICR7dGllcn1gO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGZhbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGZhbS5zbGljZSgxKTtcclxuICAgICAgcmV0dXJuIGAke3RpdGxlfSB4JHtufSDigJQgJHtlZmZlY3R9YDtcclxuICAgIH07XHJcbiAgICBjb25zdCBJQ09OID0geyBzb2xlaWw6J+KYgO+4jycsIGx1bmU6J/CfjJknLCBuYXR1cmU6J/CfjYMnLCBpZG9sZTon8J+OtScsIG9tYnJlOifwn4yRJywgYXJjYW5lOifinKgnLCBldG9pbGU6J+KtkCcsIG9jZWFuOifwn4yKJyB9O1xyXG4gICAgT2JqZWN0LmVudHJpZXModGllcnMpLmZvckVhY2goKFtmYW0sIHt0aWVyLCBufV0pID0+IHtcclxuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaS5jbGFzc05hbWUgPSBgYm9udXMtaXRlbSBmYW0tJHtmYW19IHRpZXItJHt0aWVyfWA7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZmFtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmFtLnNsaWNlKDEpO1xyXG4gICAgICBjb25zdCBlZmZlY3RUZXh0ID0gbGFiZWwoZmFtLCB0aWVyLCBuKS5zcGxpdCgnIOKAlCAnKS5wb3AoKTtcclxuICAgICAgY29uc3QgcGN0ID0gTWF0aC5taW4oMTAwLCBNYXRoLnJvdW5kKChuIC8gNCkgKiAxMDApKTtcclxuICAgICAgbGkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmFtLWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj4ke0lDT05bZmFtXSB8fCAn4pynJ308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYW0tbmFtZVwiPiR7dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRcIj54JHtufTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2F1Z2VcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCI0XCIgYXJpYS12YWx1ZW5vdz1cIiR7bn1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXJcIiBzdHlsZT1cIndpZHRoOiR7cGN0fSVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVmZmVjdFwiPiR7ZWZmZWN0VGV4dH08L3NwYW4+XHJcbiAgICAgIGA7XHJcbiAgICAgIGJvbnVzTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGluaXRcclxuICByZW5kZXJQaWNrKCk7XHJcbiAgcmVuZGVyQm9udXNlcygpO1xyXG5cclxuICAvLyAtLS0gUmVyb2xsIGxpbWl0w6kgw6AgMyAtLS1cclxuICBsZXQgcmVyb2xsc0xlZnQgPSBOdW1iZXIod2luZG93LlJFUk9MTFNfTEVGVCA/PyAzKTtcclxuICBjb25zdCB1cGRhdGVSZXJvbGxVSSA9ICgpID0+IHtcclxuICAgIGlmIChyZXJvbGxDb3VudEVsKSByZXJvbGxDb3VudEVsLnRleHRDb250ZW50ID0gYCgke3Jlcm9sbHNMZWZ0fSByZXN0YW50JHtyZXJvbGxzTGVmdD4xPydzJzonJ30pYDtcclxuICAgIGlmIChidG5SZXJvbGwpIGJ0blJlcm9sbC5kaXNhYmxlZCA9IHJlcm9sbHNMZWZ0IDw9IDA7XHJcbiAgfTtcclxuICB1cGRhdGVSZXJvbGxVSSgpO1xyXG4gIGlmIChidG5SZXJvbGwpIHtcclxuICAgIGJ0blJlcm9sbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHJlcm9sbHNMZWZ0IDw9IDApIHJldHVybjtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh3aW5kb3cuUkVST0xMX0RFQ19VUkwsIHsgbWV0aG9kOiAnUE9TVCcsIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJlcm9sbHNMZWZ0ID0gTnVtYmVyKGRhdGE/LmxlZnQgPz8gcmVyb2xsc0xlZnQpO1xyXG4gICAgICB9IGNhdGNoIHt9XHJcbiAgICAgIHVwZGF0ZVJlcm9sbFVJKCk7XHJcbiAgICAgIHJlbmRlclBpY2soKTsgLy8gcGFzIGRlIHJlbG9hZCAtPiBwYXMgZGUgY2xpZ25vdGVtZW50XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCJcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC90ZWFtLWJ1aWxkZXIuanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9JbnNjcmlwdGlvbi5qcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L2hvbWUuanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9tYXRjaC5qcyc7IFxyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3MxIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXNzMiIsInJlZ2lzdGVyQnRuIiwiY2hlY2tQYXNzd29yZHMiLCJ2YWx1ZSIsImRpc2FibGVkIiwidHJhY2siLCJwcmV2IiwicXVlcnlTZWxlY3RvciIsIm5leHQiLCJzdGVwIiwic2Nyb2xsQnkiLCJkZWx0YSIsImxlZnQiLCJiZWhhdmlvciIsImNvbnNvbGUiLCJsb2ciLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJBU1NFVF9CQVNFIiwid2luZG93IiwicmVwbGFjZSIsImZ1bGwiLCJwIiwiU3RyaW5nIiwiYm9hcmQiLCJsb2dFbCIsImh1ZEEiLCJodWRFIiwiYnRuU3RhcnQiLCJidG5QYXVzZSIsImJ0blJlc2V0IiwiYnRuTXVzaWMiLCJ3YXJuIiwiUkVQTEFZIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJpbml0aWFsIiwiZGVidWciLCJmaWx0ZXIiLCJ1IiwidGVhbSIsImxlbmd0aCIsInVuaXRzQnlJZCIsIk1hcCIsInRpbWVyIiwiVElDS19NUyIsImJnbSIsImJnbUVuYWJsZWQiLCJiZ21GYWRpbmciLCJiZ21VcmwiLCJCR01fVVJMIiwiQXVkaW8iLCJsb29wIiwicHJlbG9hZCIsInZvbHVtZSIsInRpdGxlIiwic2V0QXR0cmlidXRlIiwicGxheSIsInBhdXNlIiwiYmdtUGxheSIsImUiLCJiZ21QYXVzZSIsImJnbUZhZGVPdXQiLCJtcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInN0YXJ0IiwidDAiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInN0ZXBGbiIsImsiLCJNYXRoIiwibWluIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmdtRmFkZUluIiwidGFyZ2V0IiwiY2VsbCIsIngiLCJ5IiwiY29uY2F0IiwibXNnIiwiZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInJlbmRlckhVRCIsImxpc3QiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ2YWx1ZXMiLCJtYXAiLCJpbWciLCJuYW1lIiwiaHAiLCJzaGllbGQiLCJtYW5hIiwiam9pbiIsImlubmVySFRNTCIsInVwZGF0ZUJhcnMiLCJlbCIsInNoIiwic3R5bGUiLCJkaXNwbGF5IiwibWEiLCJsYXN0U2Z4QXQiLCJwbGF5U2Z4IiwidXJsIiwidm9sIiwia2V5IiwibWluR2FwTXMiLCJsYXN0IiwiZ2V0Iiwic2V0IiwiYSIsIl91bnVzZWQiLCJzcGF3bkluaXRpYWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImMiLCJjbGVhciIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJ1MCIsIl9vYmplY3RTcHJlYWQiLCJjbGFzc05hbWUiLCJpZCIsImVyciIsImYiLCJhcHBseUFjdGlvbiIsInQiLCJhdCIsImtpbmQiLCJGWF9VUkxTIiwiZngiLCJhbHQiLCJzcmMiLCJkdXIiLCJtYXgiLCJwYXJzZUludCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJfdW51c2VkMiIsInRvIiwiYXR0IiwiZGVmIiwicHJldkhwIiwid2FzQWJvdmUiLCJtYXhIcCIsIm5vd0JlbG93IiwiU0ZYX0hBTEZIUF9VUkwiLCJhZGQiLCJTRlhfREVBVEhfVVJMIiwiX2RzdCRocCIsIl9hJGFtb3VudCIsImRzdCIsImFtb3VudCIsImNyaXQiLCJTRlhfSEVBTF9DUklUX1VSTCIsIlNGWF9IRUFMX1VSTCIsInBsYXlUaWNrIiwiX1JFUExBWSRhY3Rpb25zIiwiYWN0aW9ucyIsImNsZWFySW50ZXJ2YWwiLCJvdXRjb21lIiwid2lubmVyIiwib3YiLCJ0eCIsImJ0bkMiLCJidG5TIiwiX292JHF1ZXJ5U2VsZWN0b3IiLCJwbGF5SmluZ2xlIiwiYXVkaW9FbmFibGVkIiwiY3R4IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3VycmVudFRpbWUiLCJub3RlcyIsImkiLCJvIiwiY3JlYXRlT3NjaWxsYXRvciIsImciLCJjcmVhdGVHYWluIiwidHlwZSIsImZyZXF1ZW5jeSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUiLCJzdG9wIiwidG9nZ2xlIiwic2Z4VXJsIiwiU0ZYX1ZJQ1RPUllfVVJMIiwiYXVkIiwiXyIsIlNGWF9ERUZFQVRfVVJMIiwiaGlkZSIsIm9uY2UiLCJzZXRJbnRlcnZhbCIsInRoZW4iLCJyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ0b1N0cmluZ1RhZyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJHIiwidiIsImJpbmQiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwicHVzaCIsIl9uIiwiRiIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsImZyb20iLCJ0ZXN0IiwicmVxdWlyZSIsIl93aW5kb3ckUkVST0xMU19MRUZUIiwiZnVsbEltZyIsIm93bmVkRWwiLCJzdWdnZXN0ZWRFbCIsIk9XTkVEIiwiU1VHR0VTVEVEIiwicGlja0dyaWQiLCJiZW5jaEdyaWQiLCJidG5SZXJvbGwiLCJyZXJvbGxDb3VudEVsIiwiYnRuTG9jayIsImJvbnVzTGlzdCIsInNrZWxldG9uIiwiTUFYX1RFQU0iLCJwbGFjZWQiLCJpbkJlbmNoIiwicmFuZEludCIsImZsb29yIiwicmFuZG9tIiwicGlja04iLCJhcnIiLCJwb29sIiwib3V0Iiwic3BsaWNlIiwiY2VsbEtleSIsInJlbmRlckNhcmQiLCJnaXJsIiwiX3JlZiIsIl9naXJsJGZhbWlseSIsIl9naXJsJGNoYW5jZV9hdGsiLCJzb3VyY2UiLCJjYXJkIiwiZHJhZ2dhYmxlIiwiZGF0YXNldCIsImNsYXNzVGFnIiwiY2xhc3NMYWJlbCIsImZhbWlseSIsInBkdiIsImF0ayIsInJvdW5kIiwiY2hhbmNlX2F0ayIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJzdHJpbmdpZnkiLCJwYXJlbnRFbGVtZW50IiwidXBkYXRlTG9ja1N0YXRlIiwibWFrZUNoaXAiLCJjaGlwIiwiX2NoaXAkcGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJoYXMiLCJyZW5kZXJQaWNrIiwicHJlc2VydmVkSWRzIiwiU2V0Iiwia2V5cyIsInBvb2wyIiwicGlja3MiLCJ0YWtlbiIsInNpemUiLCJjbHMiLCJwcmV2ZW50RGVmYXVsdCIsIl9jZWxsJGRhdGFzZXQiLCJkcmFnZ2luZyIsImdldERhdGEiLCJfc3RlcCR2YWx1ZSIsIm9sZENlbGwiLCJzcGxpdCIsImV4aXN0aW5nIiwibGFzdEVsZW1lbnRDaGlsZCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfc3RlcDIkdmFsdWUiLCJ0aWNrZXRJZCIsInBvbGxUaW1lciIsIl9jYWxsZWUyIiwiX3dpbmRvdyRNTSRzdGFydCIsIl93aW5kb3ckTU0iLCJfd2luZG93JE1NJHN0YXR1cyIsIl93aW5kb3ckTU0yIiwibGluZXVwIiwiU1RBUlRfVVJMIiwiU1RBVFVTX1RQTCIsInN0YXR1c1VybCIsInJlcyIsInRleHQiLCJkYXRhIiwiX2RhdGEkZXJyb3IiLCJfZGF0YSIsIl90IiwiX2NvbnRleHQyIiwiZW50cmllcyIsIl9yZWYzIiwiX3JlZjQiLCJ2YWwiLCJfa2V5JHNwbGl0JG1hcCIsIk51bWJlciIsIl9rZXkkc3BsaXQkbWFwMiIsIk1NIiwic3RhdHVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJvayIsImFsZXJ0IiwiZXJyb3IiLCJsb2NhdGlvbiIsImhyZWYiLCJtYXRjaElkIiwiX2NhbGxlZSIsImoiLCJfY29udGV4dCIsImpzb24iLCJtZXNzYWdlIiwicmVuZGVyQm9udXNlcyIsImNvbXB1dGVCb251c2VzIiwiY291bnRzIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9zdGVwMyR2YWx1ZSIsImZhbSIsInRvTG93ZXJDYXNlIiwidGllcnMiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsInRpZXIiLCJsYWJlbCIsInNvbGVpbCIsImx1bmUiLCJuYXR1cmUiLCJpZG9sZSIsIm9tYnJlIiwiYXJjYW5lIiwiZXRvaWxlIiwib2NlYW4iLCJlZmZlY3QiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIklDT04iLCJfcmVmNiIsIl9yZWY3IiwiX3JlZjckIiwibGkiLCJlZmZlY3RUZXh0IiwicG9wIiwicGN0IiwicmVyb2xsc0xlZnQiLCJSRVJPTExTX0xFRlQiLCJ1cGRhdGVSZXJvbGxVSSIsIl9jYWxsZWUzIiwiX2RhdGEkbGVmdCIsIl90MiIsIl9jb250ZXh0MyIsIlJFUk9MTF9ERUNfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==