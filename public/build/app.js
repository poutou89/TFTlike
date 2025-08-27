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
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
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
          var url = crit && window.SFX_HEAL_CRIT_URL ? window.SFX_HEAL_CRIT_URL : window.SFX_HEAL_URL;
          playSfx(url, crit ? 0.8 : 0.6, crit ? 'healcrit' : 'heal', 80);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-69e170"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUUxVSxJQUFJLGNBQUE0WSxVQUFBLGNBQUFBLFVBQUEsR0FBSUosV0FBVyxDQUFDO1lBQUNNLFNBQUEsQ0FBQXhSLENBQUE7WUFBQTtVQUFBO1lBQUF3UixTQUFBLENBQUFsWSxDQUFBO1lBQUFpWSxHQUFBLEdBQUFDLFNBQUEsQ0FBQXRNLENBQUE7VUFBQTtZQUVsRGtNLGNBQWMsQ0FBQyxDQUFDO1lBQ2hCbEcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQUE7WUFBQSxPQUFBc0csU0FBQSxDQUFBblMsQ0FBQTtRQUFBO01BQUEsR0FBQWdTLFFBQUE7SUFBQSxDQUNmLEdBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvWEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ1c7QUFDRDtBQUNQO0FBQ0M7QUFFL0J6WSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNiN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC9JbnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC9ob21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L21hdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L3RlYW0tYnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvSmF2YVNjcmlwdC9yZWdpc3Rlci5qc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhc3MxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyX3R5cGVfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0Jyk7XHJcbiAgY29uc3QgcGFzczIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJfdHlwZV9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJyk7XHJcbiAgY29uc3QgcmVnaXN0ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItYnRuJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrUGFzc3dvcmRzKCkge1xyXG4gICAgaWYgKHBhc3MxLnZhbHVlICYmIHBhc3MxLnZhbHVlID09PSBwYXNzMi52YWx1ZSkge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVnaXN0ZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHBhc3MxICYmIHBhc3MyICYmIHJlZ2lzdGVyQnRuKSB7XHJcbiAgICBwYXNzMS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrUGFzc3dvcmRzKTtcclxuICAgIHBhc3MyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tQYXNzd29yZHMpO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21nLXJvc3Rlci10cmFjaycpO1xyXG4gIGlmICghdHJhY2spIHJldHVybjtcclxuXHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1wcmV2Jyk7XHJcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1uZXh0Jyk7XHJcbiAgY29uc3Qgc3RlcCA9IDI4MDsgLy8gcHggcGFyIGNsaWNcclxuXHJcbiAgY29uc3Qgc2Nyb2xsQnkgPSAoZGVsdGEpID0+IHRyYWNrLnNjcm9sbEJ5KHsgbGVmdDogZGVsdGEsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcbiAgcHJldj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGxCeSgtc3RlcCkpO1xyXG4gIG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsQnkoc3RlcCkpO1xyXG59KTtcclxuY29uc29sZS5sb2coJ2hvbWUuanMnKTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLW1hdGNoJykpIHJldHVybjtcclxuXHJcbiAgY29uc3QgQVNTRVRfQkFTRSA9ICh3aW5kb3cuQVNTRVRfQkFTRSB8fCAnLycpLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcclxuICBjb25zdCBmdWxsID0gKHApID0+IEFTU0VUX0JBU0UgKyBTdHJpbmcocCB8fCAnJykucmVwbGFjZSgvXlxcLysvLCAnJyk7XHJcblxyXG4gIGNvbnN0IGJvYXJkICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XHJcbiAgY29uc3QgbG9nRWwgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlLWxvZycpO1xyXG4gIGNvbnN0IGh1ZEEgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZC1hbGxpZXMnKTtcclxuICBjb25zdCBodWRFICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWQtZW5lbWllcycpO1xyXG4gIGNvbnN0IGJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdGFydCcpO1xyXG4gIGNvbnN0IGJ0blBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wYXVzZScpO1xyXG4gIGNvbnN0IGJ0blJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXNldCcpO1xyXG4gIGNvbnN0IGJ0bk11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1tdXNpYycpO1xyXG5cclxuICBpZiAoIWJvYXJkIHx8ICFsb2dFbCB8fCAhaHVkQSB8fCAhaHVkRSB8fCAhYnRuU3RhcnQgfHwgIWJ0blBhdXNlIHx8ICFidG5SZXNldCkge1xyXG4gICAgY29uc29sZS53YXJuKCdNYXRjaCBVSSBtaXNzaW5nJywgeyBib2FyZCwgbG9nRWwsIGh1ZEEsIGh1ZEUsIGJ0blN0YXJ0LCBidG5QYXVzZSwgYnRuUmVzZXQgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBSRVBMQVkgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBsYXktanNvbicpPy50ZXh0Q29udGVudCB8fCAne30nKTtcclxuICBpZiAoIVJFUExBWSB8fCAhQXJyYXkuaXNBcnJheShSRVBMQVkuaW5pdGlhbCkpIHsgY29uc29sZS53YXJuKCdObyByZXBsYXkgcHJvdmlkZWQnKTsgcmV0dXJuOyB9XHJcbiAgY29uc29sZS5kZWJ1ZygnUkVQTEFZOicsIFJFUExBWSxcclxuICAgICAgICAgICAgICAgICdhbGx5Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdhbGx5JykubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgJ2VuZW15Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdlbmVteScpLmxlbmd0aCk7XHJcblxyXG4gIGNvbnN0IHVuaXRzQnlJZCA9IG5ldyBNYXAoKTsgLy8gaWQgLT4gcnVudGltZSB1bml0XHJcbiAgbGV0IHRpbWVyID0gbnVsbCwgc3RlcCA9IDA7XHJcbiAgY29uc3QgVElDS19NUyA9IDQwMDtcclxuXHJcbiAgLy8gLS0tIEJhY2tncm91bmQgbXVzaWMgKEJHTSkgLS0tXHJcbiAgbGV0IGJnbSA9IG51bGwsIGJnbUVuYWJsZWQgPSB0cnVlLCBiZ21GYWRpbmcgPSBmYWxzZTtcclxuICBjb25zdCBiZ21VcmwgPSB3aW5kb3cuQkdNX1VSTDtcclxuICBpZiAoYmdtVXJsKSB7XHJcbiAgICBiZ20gPSBuZXcgQXVkaW8oYmdtVXJsKTtcclxuICAgIGJnbS5sb29wID0gdHJ1ZTtcclxuICAgIGJnbS5wcmVsb2FkID0gJ2F1dG8nO1xyXG4gICAgYmdtLnZvbHVtZSA9IDAuMDsgLy8gc3RhcnQgc2lsZW50LCBmYWRlIGluIG9uIFN0YXJ0XHJcbiAgfVxyXG4gIGlmIChidG5NdXNpYykge1xyXG4gICAgaWYgKCFiZ20pIHsgYnRuTXVzaWMuZGlzYWJsZWQgPSB0cnVlOyBidG5NdXNpYy50aXRsZSA9ICdBdWN1bmUgbXVzaXF1ZSBkaXNwb25pYmxlJzsgfVxyXG4gICAgYnRuTXVzaWMuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBiZ21FbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgICBidG5NdXNpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYmdtRW5hYmxlZCA9ICFiZ21FbmFibGVkO1xyXG4gICAgICBidG5NdXNpYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGJnbUVuYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcclxuICAgICAgaWYgKCFiZ20pIHJldHVybjtcclxuICAgICAgaWYgKGJnbUVuYWJsZWQpIHsgYmdtLnBsYXkoKS5jYXRjaCgoKT0+e30pOyB9IGVsc2UgeyBiZ20ucGF1c2UoKTsgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGJnbVBsYXkoKXsgaWYgKCFiZ20gfHwgIWJnbUVuYWJsZWQpIHJldHVybjsgYmdtRmFkaW5nPWZhbHNlOyBiZ20ucGxheSgpLmNhdGNoKChlKT0+eyBjb25zb2xlLmRlYnVnKCdiZ20gcGxheSBmYWlsZWQnLCBlKTsgfSk7IH1cclxuICBmdW5jdGlvbiBiZ21QYXVzZSgpeyBpZiAoIWJnbSkgcmV0dXJuOyBiZ20ucGF1c2UoKTsgfVxyXG4gIGZ1bmN0aW9uIGJnbUZhZGVPdXQobXM9OTAwKXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZyA9IHRydWU7IGNvbnN0IHN0YXJ0ID0gYmdtLnZvbHVtZTsgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIGNvbnN0IHN0ZXBGbiA9IChub3cpID0+IHtcclxuICAgICAgaWYgKCFiZ21GYWRpbmcpIHJldHVybjtcclxuICAgICAgY29uc3QgayA9IE1hdGgubWluKDEsIChub3cgLSB0MCkgLyBtcyk7XHJcbiAgICAgIGJnbS52b2x1bWUgPSBzdGFydCAqICgxIC0gayk7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7IGVsc2UgeyBiZ20ucGF1c2UoKTsgYmdtLnZvbHVtZSA9IHN0YXJ0OyBiZ21GYWRpbmcgPSBmYWxzZTsgfVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwRm4pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBiZ21GYWRlSW4obXM9NTAwLCB0YXJnZXQ9MC41KXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZz1mYWxzZTsgY29uc3Qgc3RhcnQgPSBiZ20udm9sdW1lOyBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgY29uc3Qgc3RlcEZuID0gKG5vdykgPT4ge1xyXG4gICAgICBjb25zdCBrID0gTWF0aC5taW4oMSwgKG5vdyAtIHQwKSAvIG1zKTtcclxuICAgICAgYmdtLnZvbHVtZSA9IHN0YXJ0ICsgKHRhcmdldCAtIHN0YXJ0KSAqIGs7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjZWxsID0gKHgseSkgPT4gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZyhtc2cpeyBpZighbXNnKXJldHVybjsgY29uc3QgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZC50ZXh0Q29udGVudD1tc2c7XHJcbiAgICBsb2dFbC5hcHBlbmRDaGlsZChkKTsgbG9nRWwuc2Nyb2xsVG9wPWxvZ0VsLnNjcm9sbEhlaWdodDsgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJIVUQoKXtcclxuICAgIGNvbnN0IGxpc3QgPSAodGVhbSkgPT4gWy4uLnVuaXRzQnlJZC52YWx1ZXMoKV0uZmlsdGVyKHU9PnUudGVhbT09PXRlYW0pXHJcbiAgICAgIC5tYXAodT0+YDxsaT48aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCI+PHNwYW4+JHt1Lm5hbWV9PC9zcGFuPjxlbT4ke3UuaHB9IFBWJHt1LnNoaWVsZD4wPycg4oCiIPCfm6EnK3Uuc2hpZWxkOicnfSR7dS5tYW5hPjA/JyDigKIg8J+UtycrdS5tYW5hOicnfTwvZW0+PC9saT5gKS5qb2luKCcnKTtcclxuICAgIGh1ZEEuaW5uZXJIVE1MID0gbGlzdCgnYWxseScpOyBodWRFLmlubmVySFRNTCA9IGxpc3QoJ2VuZW15Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVCYXJzKHUpe1xyXG4gICAgdS5lbC5xdWVyeVNlbGVjdG9yKCcuaHAnKS50ZXh0Q29udGVudCA9IHUuaHA7XHJcbiAgICBjb25zdCBzaD11LmVsLnF1ZXJ5U2VsZWN0b3IoJy5zaGllbGQnKTsgaWYoc2gpeyBzaC50ZXh0Q29udGVudD11LnNoaWVsZDsgc2guc3R5bGUuZGlzcGxheT11LnNoaWVsZD4wPycnOidub25lJzsgfVxyXG4gICAgY29uc3QgbWE9dS5lbC5xdWVyeVNlbGVjdG9yKCcubWFuYScpOyAgIGlmKG1hKXsgbWEudGV4dENvbnRlbnQ9dS5tYW5hOyAgIG1hLnN0eWxlLmRpc3BsYXk9dS5tYW5hPjA/Jyc6J25vbmUnOyB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0gU0ZYIGhlbHBlciB3aXRoIGxpZ2h0IHRocm90dGxpbmcgLS0tXHJcbiAgY29uc3QgbGFzdFNmeEF0ID0gbmV3IE1hcCgpO1xyXG4gIGZ1bmN0aW9uIHBsYXlTZngodXJsLCB2b2w9MC43LCBrZXk9dXJsLCBtaW5HYXBNcz0xMjApe1xyXG4gICAgdHJ5e1xyXG4gICAgICBpZighdXJsKSByZXR1cm47IGNvbnN0IG5vdz1wZXJmb3JtYW5jZS5ub3coKTsgY29uc3QgbGFzdD1sYXN0U2Z4QXQuZ2V0KGtleSl8fDA7IGlmKG5vdy1sYXN0PG1pbkdhcE1zKSByZXR1cm47XHJcbiAgICAgIGxhc3RTZnhBdC5zZXQoa2V5LCBub3cpO1xyXG4gICAgICBjb25zdCBhID0gbmV3IEF1ZGlvKHVybCk7IGEudm9sdW1lPXZvbDsgYS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuICAgIH1jYXRjaHsgLyogaWdub3JlICovIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW5pdGlhbCgpe1xyXG4gICAgYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKS5mb3JFYWNoKGM9PmMuaW5uZXJIVE1MPScnKTsgbG9nRWwuaW5uZXJIVE1MPScnOyB1bml0c0J5SWQuY2xlYXIoKTtcclxuICAgIGZvcihjb25zdCB1MCBvZiBSRVBMQVkuaW5pdGlhbCl7XHJcbiAgICAgIGNvbnN0IHUgPSB7Li4udTB9O1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBlbC5jbGFzc05hbWUgPSBgdW5pdCB1bml0LS0ke3UudGVhbX0gdW5pdC0tJHt1LmNsYXNzfWA7XHJcbiAgICAgIGVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJocFwiPiR7dS5ocH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaGllbGRcIiR7dS5zaGllbGQ+MD8nJzonIHN0eWxlPVwiZGlzcGxheTpub25lXCInfT4ke3Uuc2hpZWxkfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hbmFcIiR7dS5tYW5hPjA/Jyc6JyBzdHlsZT1cImRpc3BsYXk6bm9uZVwiJ30+JHt1Lm1hbmF9PC9zcGFuPmA7XHJcbiAgICAgIGNvbnN0IGMgPSBjZWxsKHUueCwgdS55KTsgaWYgKGMpIGMuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICB1LmVsID0gZWw7IHVuaXRzQnlJZC5zZXQodS5pZCwgdSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJIVUQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGx5QWN0aW9uKGEpe1xyXG4gICAgc3dpdGNoKGEudCl7XHJcbiAgICAgIGNhc2UgJ21vdmUnOiB7XHJcbiAgICAgICAgY29uc3QgdT11bml0c0J5SWQuZ2V0KGEuaWQpOyBpZighdSlicmVhaztcclxuICAgICAgICBjb25zdCB0bz1jZWxsKGEudG9bMF0sYS50b1sxXSk7IGlmKCF0bylicmVhaztcclxuICAgICAgICB0by5hcHBlbmRDaGlsZCh1LmVsKTsgdS54PWEudG9bMF07IHUueT1hLnRvWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2F0dGFjayc6IHtcclxuICAgICAgICBjb25zdCBhdHQ9dW5pdHNCeUlkLmdldChhLmF0dCksIGRlZj11bml0c0J5SWQuZ2V0KGEuZGVmKTsgaWYoIWF0dHx8IWRlZilicmVhaztcclxuICAgICAgICBjb25zdCBwcmV2SHAgPSBkZWYuaHA7XHJcbiAgICAgICAgZGVmLmhwPWEuaHA7IGRlZi5zaGllbGQ9YS5zaGllbGQ7IGlmKGEubWFuYSE9PXVuZGVmaW5lZCkgYXR0Lm1hbmE9YS5tYW5hO1xyXG4gICAgICAgIHVwZGF0ZUJhcnMoZGVmKTsgdXBkYXRlQmFycyhhdHQpO1xyXG4gICAgICAgIC8vIGhhbGYgSFAgY3Jvc3NpbmdcclxuICAgICAgICBpZihwcmV2SHA+MCAmJiBkZWYuaHA+MCl7XHJcbiAgICAgICAgICBjb25zdCB3YXNBYm92ZSA9IHByZXZIcCA+IChkZWYubWF4SHB8fHByZXZIcCoyKS8yO1xyXG4gICAgICAgICAgY29uc3Qgbm93QmVsb3cgPSBkZWYuaHAgPD0gKGRlZi5tYXhIcHx8cHJldkhwKjIpLzI7XHJcbiAgICAgICAgICBpZih3YXNBYm92ZSAmJiBub3dCZWxvdyl7IHBsYXlTZngod2luZG93LlNGWF9IQUxGSFBfVVJMLCAwLjcsICdoYWxmOicrZGVmLmlkLCA0MDApOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRlZi5ocDw9MCl7IGRlZi5lbC5jbGFzc0xpc3QuYWRkKCdrbycpOyBzZXRUaW1lb3V0KCgpPT5kZWYuZWwucmVtb3ZlKCksMTIwKTsgcGxheVNmeCh3aW5kb3cuU0ZYX0RFQVRIX1VSTCwgMC44LCAnZGVhdGgnLCAxNTApOyB9XHJcbiAgICAgICAgaWYoYS5sb2cpIGxvZyhhLmxvZyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnaGVhbCc6IHtcclxuICAgICAgICBjb25zdCBzcmM9dW5pdHNCeUlkLmdldChhLnNyYyksIGRzdD11bml0c0J5SWQuZ2V0KGEuZHN0KTsgaWYoIXNyY3x8IWRzdClicmVhaztcclxuICAgICAgICBpZihhLm1hbmEhPT11bmRlZmluZWQpIHNyYy5tYW5hPWEubWFuYTtcclxuICAgICAgICBkc3QuaHA9TWF0aC5taW4oZHN0Lm1heEhwLChkc3QuaHA/PzApKyhhLmFtb3VudD8/MCkpO1xyXG4gICAgICAgIC8vIGhlYWwgU0ZYIChjcml0IGlmIGFtb3VudCBsYXJnZSBhbmQgVVJMIHByb3ZpZGVkKVxyXG4gICAgICAgIGNvbnN0IGNyaXQgPSAoYS5jcml0PT09dHJ1ZSkgfHwgKGEuYW1vdW50ICYmIGRzdC5tYXhIcCAmJiBhLmFtb3VudCA+PSAwLjI1KmRzdC5tYXhIcCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gY3JpdCAmJiB3aW5kb3cuU0ZYX0hFQUxfQ1JJVF9VUkwgPyB3aW5kb3cuU0ZYX0hFQUxfQ1JJVF9VUkwgOiB3aW5kb3cuU0ZYX0hFQUxfVVJMO1xyXG4gICAgICAgIHBsYXlTZngodXJsLCBjcml0PzAuODowLjYsIGNyaXQ/J2hlYWxjcml0JzonaGVhbCcsIDgwKTtcclxuICAgICAgICB1cGRhdGVCYXJzKHNyYyk7IHVwZGF0ZUJhcnMoZHN0KTsgaWYoYS5sb2cpIGxvZyhhLmxvZyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbG9nJzogaWYoYS5tc2cpIGxvZyhhLm1zZyk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVRpY2soKXtcclxuICAgIGlmKHN0ZXAgPj0gKFJFUExBWS5hY3Rpb25zPy5sZW5ndGggfHwgMCkpe1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDtcclxuICAgICAgY29uc3Qgb3V0Y29tZSA9IFJFUExBWS53aW5uZXI9PT0nYWxseScgPyAndmljdG9yeScgOiBSRVBMQVkud2lubmVyPT09J2VuZW15JyA/ICdkZWZlYXQnIDogJ2RyYXcnO1xyXG4gICAgICBsb2cob3V0Y29tZT09PSd2aWN0b3J5Jz8nVmljdG9pcmUgISc6b3V0Y29tZT09PSdkZWZlYXQnPydEw6lmYWl0ZeKApic6J8OJZ2FsaXTDqSAhJyk7XHJcbiAgICAgIC8vIHNob3cgb3ZlcmxheVxyXG4gICAgICBjb25zdCBvdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtb3ZlcmxheScpO1xyXG4gICAgICBjb25zdCB0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtdGV4dCcpO1xyXG4gICAgICBjb25zdCBidG5DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXN1bHQtY29udGludWUnKTtcclxuICAgICAgY29uc3QgYnRuUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtc291bmQtdG9nZ2xlJyk7XHJcbiAgICAgIGlmIChvdiAmJiB0eCkge1xyXG4gICAgICAgIG92LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIG92LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpY3RvcnknLCBvdXRjb21lPT09J3ZpY3RvcnknKTtcclxuICAgICAgICBvdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1kZWZlYXQnLCBvdXRjb21lPT09J2RlZmVhdCcpO1xyXG4gICAgICAgIHR4LnRleHRDb250ZW50ID0gb3V0Y29tZT09PSd2aWN0b3J5JyA/ICdWSUNUT0lSRScgOiBvdXRjb21lPT09J2RlZmVhdCcgPyAnRMOJRkFJVEUnIDogJ8OJR0FMSVTDiSc7XHJcbiAgICAgICAgYmdtRmFkZU91dCgxMjAwKTtcclxuXHJcbiAgICAgICAgLy8gVmljdG9yeSBTRlggKGlmIHByb3ZpZGVkKVxyXG4gICAgICAgIGlmIChvdXRjb21lID09PSAndmljdG9yeScpIHtcclxuICAgICAgICAgIGNvbnN0IHNmeFVybCA9IHdpbmRvdy5TRlhfVklDVE9SWV9VUkw7XHJcbiAgICAgICAgICBpZiAoc2Z4VXJsKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYXVkID0gbmV3IEF1ZGlvKHNmeFVybCk7XHJcbiAgICAgICAgICAgICAgYXVkLnZvbHVtZSA9IDAuNzsgYXVkLmxvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBhdWQucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHsgLyogaWdub3JlICovIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG91dGNvbWUgPT09ICdkZWZlYXQnKSB7XHJcbiAgICAgICAgICBwbGF5U2Z4KHdpbmRvdy5TRlhfREVGRUFUX1VSTCwgMC43LCAnZGVmZWF0JywgMjAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNvdW5kIEZYIChXZWJBdWRpbyBzaW1wbGUgdG9uZXMpXHJcbiAgICAgICAgbGV0IGF1ZGlvRW5hYmxlZCA9IGZhbHNlLCBjdHggPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlKaW5nbGUoa2luZCl7XHJcbiAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGlmKCFhdWRpb0VuYWJsZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYoIWN0eCkgY3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0fHx3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBjdHguY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzID0ga2luZD09PSd2aWN0b3J5JyA/IFs1MjMsNjU5LDc4NF0gOiBraW5kPT09J2RlZmVhdCcgPyBbMzkyLDM0OSwyNjFdIDogWzQ0MCw0NDAsNDQwXTtcclxuICAgICAgICAgICAgbm90ZXMuZm9yRWFjaCgoZixpKT0+e1xyXG4gICAgICAgICAgICAgIGNvbnN0IG8gPSBjdHguY3JlYXRlT3NjaWxsYXRvcigpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlR2FpbigpO1xyXG4gICAgICAgICAgICAgIG8udHlwZT0nc2luZSc7IG8uZnJlcXVlbmN5LnZhbHVlPWY7XHJcbiAgICAgICAgICAgICAgby5jb25uZWN0KGcpOyBnLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICBjb25zdCB0ID0gbm93ICsgaSowLjE4OyBnLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDEsdCk7IGcuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMix0KzAuMDIpOyBnLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSx0KzAuMyk7XHJcbiAgICAgICAgICAgICAgby5zdGFydCh0KTsgby5zdG9wKHQrMC4zMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfWNhdGNoKGUpeyBjb25zb2xlLmRlYnVnKCdhdWRpbyBmYWlsZWQnLCBlKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuUykge1xyXG4gICAgICAgICAgYnRuUy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgYXVkaW9FbmFibGVkID0gIWF1ZGlvRW5hYmxlZDtcclxuICAgICAgICAgICAgYnRuUy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGF1ZGlvRW5hYmxlZD8gJ3RydWUnOidmYWxzZScpO1xyXG4gICAgICAgICAgICBpZihhdWRpb0VuYWJsZWQpeyBwbGF5SmluZ2xlKG91dGNvbWUpOyB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnRpbnVlIGJ1dHRvbiBvciBjbGljayBhbnl3aGVyZSBvbiB2ZWlsXHJcbiAgICAgICAgY29uc3QgaGlkZSA9ICgpPT4gb3YuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgaWYoYnRuQykgYnRuQy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUsIHsgb25jZTp0cnVlIH0pO1xyXG4gICAgICAgIG92LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtdmVpbCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUsIHsgb25jZTp0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGFwcGx5QWN0aW9uKFJFUExBWS5hY3Rpb25zW3N0ZXArK10pOyByZW5kZXJIVUQoKTtcclxuICB9XHJcblxyXG4gIGJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGlmICghdGltZXIpeyB0aW1lcj1zZXRJbnRlcnZhbChwbGF5VGljayxUSUNLX01TKTsgfVxyXG4gICAgaWYgKGJnbSl7XHJcbiAgICAgIGJnbUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICBpZiAoYnRuTXVzaWMpIGJ0bk11c2ljLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywndHJ1ZScpO1xyXG4gICAgICBiZ20uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBiZ20ucGxheSgpLnRoZW4oKCk9PiBiZ21GYWRlSW4oNDUwLCAwLjUpKS5jYXRjaCgoZSk9PnsgY29uc29sZS5kZWJ1ZygnYmdtIHBsYXkgYmxvY2tlZCcsIGUpOyB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICBidG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57IGlmKHRpbWVyKXsgY2xlYXJJbnRlcnZhbCh0aW1lcik7IHRpbWVyPW51bGw7IH0gYmdtUGF1c2UoKTsgfSk7XHJcbiAgYnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyBpZih0aW1lcil7IGNsZWFySW50ZXJ2YWwodGltZXIpOyB0aW1lcj1udWxsOyB9IHN0ZXA9MDsgc3Bhd25Jbml0aWFsKCk7IGlmIChiZ20pIHsgYmdtUGF1c2UoKTsgYmdtLmN1cnJlbnRUaW1lID0gMDsgfSB9KTtcclxuXHJcbiAgc3Bhd25Jbml0aWFsKCk7XHJcbn0pO1xyXG4iLCIvLyB0ZWFtLWJ1aWxkZXIuanNcclxuXHJcbi8vIGJhc2UgZGVzIGFzc2V0cyBmb3VybmllIHBhciBUd2lnOiB3aW5kb3cuQVNTRVRfQkFTRSA9IFwie3sgYXNzZXQoJycpIH19XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IEFTU0VUX0JBU0UgPSAod2luZG93LkFTU0VUX0JBU0UgfHwgJy8nKS5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XHJcbiAgY29uc3QgZnVsbEltZyA9IChwKSA9PiBBU1NFVF9CQVNFICsgU3RyaW5nKHAgfHwgJycpLnJlcGxhY2UoL15cXC8rLywgJycpO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKCdUZWFtIEJ1aWxkZXIgc2NyaXB0IGxvYWRlZCEnLCB7IEFTU0VUX0JBU0UgfSk7XHJcbiAgY29uc3Qgb3duZWRFbCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293bmVkLWdpcmxzLWpzb24nKTtcclxuICBjb25zdCBzdWdnZXN0ZWRFbCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VnZ2VzdGVkLWdpcmxzLWpzb24nKTtcclxuICBpZiAoIW93bmVkRWwpIHJldHVybjtcclxuXHJcbiAgLyoqIEB0eXBlIHtBcnJheX0gKi9cclxuICBjb25zdCBPV05FRCAgICAgICAgPSBKU09OLnBhcnNlKG93bmVkRWwudGV4dENvbnRlbnQgfHwgJ1tdJyk7XHJcbiAgLyoqIEB0eXBlIHtBcnJheX0gKi9cclxuICBjb25zdCBTVUdHRVNURUQgICAgPSBzdWdnZXN0ZWRFbCA/IEpTT04ucGFyc2Uoc3VnZ2VzdGVkRWwudGV4dENvbnRlbnQgfHwgJ1tdJykgOiBbXTtcclxuXHJcbiAgY29uc3QgcGlja0dyaWQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY2stZ3JpZCcpO1xyXG4gIGNvbnN0IGJlbmNoR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZW5jaC1ncmlkJyk7XHJcbiAgY29uc3QgYm9hcmQgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XHJcbiAgY29uc3QgYnRuUmVyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXJvbGwnKTtcclxuICBjb25zdCByZXJvbGxDb3VudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlcm9sbC1jb3VudCcpO1xyXG4gIGNvbnN0IGJ0bkxvY2sgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9jaycpO1xyXG4gIGNvbnN0IGJvbnVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLWJvbnVzZXMnKTtcclxuICBjb25zdCBza2VsZXRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXNrZWxldG9uJyk7XHJcblxyXG4gIGNvbnN0IE1BWF9URUFNICA9IDQ7XHJcbiAgY29uc3QgcGxhY2VkICAgID0gbmV3IE1hcCgpOyAvLyBcIngseVwiIC0+IHsgZ2lybCwgZWwgfVxyXG4gIGNvbnN0IGluQmVuY2ggICA9IG5ldyBNYXAoKTsgLy8gZ2lybElkIC0+IGNhcmRFbGVtZW50XHJcblxyXG4gIC8vIGhlbHBlcnNcclxuICBjb25zdCByYW5kSW50ID0gKG4pID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xyXG4gIGNvbnN0IHBpY2tOID0gKGFyciwgbikgPT4ge1xyXG4gICAgY29uc3QgcG9vbCA9IFsuLi5hcnJdLCBvdXQgPSBbXTtcclxuICAgIHdoaWxlIChvdXQubGVuZ3RoIDwgTWF0aC5taW4obiwgcG9vbC5sZW5ndGgpKSB7XHJcbiAgICAgIG91dC5wdXNoKHBvb2wuc3BsaWNlKHJhbmRJbnQocG9vbC5sZW5ndGgpLCAxKVswXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH07XHJcbiAgY29uc3QgY2VsbEtleSA9ICh4LCB5KSA9PiBgJHt4fSwke3l9YDtcclxuXHJcbiAgLy8gLS0tLSBVSSByZW5kZXJlcnMgLS0tLVxyXG4gIGZ1bmN0aW9uIHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2UgfSkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSBgdGItY2FyZCB0Yi1jYXJkLS0ke2dpcmwuY2xhc3N9YDtcclxuICAgIGNhcmQuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGNhcmQuZGF0YXNldC5pZCA9IGdpcmwuaWQ7XHJcbiAgICBjYXJkLmRhdGFzZXQuc291cmNlID0gc291cmNlO1xyXG5cclxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9faW1nXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX21ldGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fbmFtZVwiPiR7Z2lybC5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX190YWdzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfVwiPiR7Y2xhc3NMYWJlbChnaXJsLmNsYXNzKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyB0YWctZmFtaWx5XCI+JHtnaXJsLmZhbWlseSA/PyAnJ308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fc3RhdHNcIj5cclxuICAgICAgICA8c3Bhbj5QViAke2dpcmwucGR2fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5BVEsgJHtnaXJsLmF0a308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+UFJDICR7TWF0aC5yb3VuZCgoZ2lybC5jaGFuY2VfYXRrID8/IDApICogMTAwKX0lPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkoZ2lybCkpO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gY2FyZC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpKTtcclxuICAgIH0pO1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpKTtcclxuXHJcbiAgICAvLyBkb3VibGUtY2xpYyAtPiB0b2dnbGUgYmFuY1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gVG9nZ2xlIGJhbmM6IHNpIGTDqWrDoCBkYW5zIGxlIGJhbmMgLT4gb24gbGUgbGFpc3NlIGFmZmljaMOpIG1haXMgb24gbGUgbWFycXVlIGNvbW1lIG5vbi1wcsOpc2VydsOpXHJcbiAgICAgIGlmIChjYXJkLnBhcmVudEVsZW1lbnQgPT09IGJlbmNoR3JpZCkge1xyXG4gICAgICAgIC8vIFJldHJhaXQgZHUgYmFuYzogb24gbGUgcmVtZXQgZGFucyBzb24gY29udGVuZXVyIHNvdXJjZSBzaSBwb3NzaWJsZSwgc2lub24gb24gbGUgc3VwcHJpbWUgcHJvcHJlbWVudFxyXG4gICAgICAgIGluQmVuY2guZGVsZXRlKGdpcmwuaWQpO1xyXG4gICAgICAgIC8vIETDqXBsYWNlciBsYSBjYXJ0ZSB2ZXJzIGxhIHpvbmUgZGUgcGljayBwb3VyIGxhIHJlbmRyZSByZXJvbGxhYmxlXHJcbiAgICAgICAgaWYgKHBpY2tHcmlkKSBwaWNrR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBlbHNlIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQWpvdXQgYXUgYmFuY1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZUNoaXAoZ2lybCkge1xyXG4gICAgY29uc3QgY2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hpcC5jbGFzc05hbWUgPSBgY2hpcCAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfWA7XHJcbiAgICBjaGlwLnRpdGxlID0gZ2lybC5uYW1lO1xyXG4gICAgY2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgY2hpcC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPjxzcGFuPiR7Z2lybC5uYW1lfTwvc3Bhbj5gO1xyXG5cclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KGdpcmwpKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGNoaXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKSk7XHJcbiAgICB9KTtcclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKSk7XHJcblxyXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IGNoaXAucGFyZW50RWxlbWVudD8uY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgICAgaWYgKGNlbGwpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBjZWxsS2V5KGNlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueSk7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpbkJlbmNoLmhhcyhnaXJsLmlkKSkge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pO1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjaGlwO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBpY2soKSB7XHJcbiAgcGlja0dyaWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IHBvb2wgPSBTVUdHRVNURUQubGVuZ3RoID8gWy4uLlNVR0dFU1RFRF0gOiBbLi4uT1dORURdO1xyXG4gIGlmIChwb29sLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAvLyBvbiBkdXBsaXF1ZSBzaSA8IDRcclxuICB3aGlsZSAocG9vbC5sZW5ndGggPCA0KSBwb29sID0gcG9vbC5jb25jYXQocG9vbCk7XHJcblxyXG4gIC8vIEV4Y2x1cmUgY2V1eCBkw6lqw6AgYXUgYmFuYyAocHLDqXNlcnbDqXMpIGR1IHRpcmFnZVxyXG4gIGNvbnN0IHByZXNlcnZlZElkcyA9IG5ldyBTZXQoQXJyYXkuZnJvbShpbkJlbmNoLmtleXMoKSkpO1xyXG4gIGNvbnN0IHBvb2wyID0gcG9vbC5maWx0ZXIoZyA9PiAhcHJlc2VydmVkSWRzLmhhcyhnLmlkKSk7XHJcblxyXG4gIC8vIFPDqWxlY3Rpb25uZSBqdXNxdSfDoCA0IHN1Z2dlc3Rpb25zIHVuaXF1ZXMgcGFybWkgbGUgcG9vbCByZXN0YW50XHJcbiAgY29uc3QgcGlja3MgPSBbXTtcclxuICBjb25zdCB0YWtlbiA9IG5ldyBTZXQoKTtcclxuICBjb25zdCB0YXJnZXQgPSBNYXRoLm1pbig0LCBwb29sMi5sZW5ndGgpO1xyXG4gIHdoaWxlIChwaWNrcy5sZW5ndGggPCB0YXJnZXQgJiYgdGFrZW4uc2l6ZSA8IHBvb2wyLmxlbmd0aCkge1xyXG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wyLmxlbmd0aCk7XHJcbiAgICBpZiAoIXRha2VuLmhhcyhpKSkgeyB0YWtlbi5hZGQoaSk7IHBpY2tzLnB1c2gocG9vbDJbaV0pOyB9XHJcbiAgfVxyXG4gIHBpY2tzLmZvckVhY2goZyA9PiBwaWNrR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGcsIHsgc291cmNlOiAncGljaycgfSkpKTtcclxufVxyXG4gIGZ1bmN0aW9uIGNsYXNzVGFnKGNscykge1xyXG4gICAgc3dpdGNoIChjbHMpIHtcclxuICAgICAgY2FzZSAnZHBzX21lbGVlJzogIHJldHVybiAndGFnLW1lbGVlJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAndGFnLXJhbmdlZCc7XHJcbiAgICAgIGNhc2UgJ3RhbmsnOiAgICAgICByZXR1cm4gJ3RhZy10YW5rJztcclxuICAgICAgY2FzZSAnaGVhbGVyJzogICAgIHJldHVybiAndGFnLWhlYWwnO1xyXG4gICAgICBkZWZhdWx0OiAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBjbGFzc0xhYmVsKGNscykge1xyXG4gICAgc3dpdGNoIChjbHMpIHtcclxuICAgICAgY2FzZSAnZHBzX21lbGVlJzogIHJldHVybiAnRFBTIEPDoEMnO1xyXG4gICAgICBjYXNlICdkcHNfcmFuZ2VkJzogcmV0dXJuICdEUFMgZGlzdGFuY2UnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICdUYW5rJztcclxuICAgICAgY2FzZSAnaGVhbGVyJzogICAgIHJldHVybiAnSGVhbGVyJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiBjbHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tIERuRCBib2FyZCAtLS0tXHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2VsbCcpO1xyXG4gICAgaWYgKCFjZWxsKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBjZWxsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBrZXkgPSBjZWxsS2V5KHgsIHkpO1xyXG5cclxuICAgIGNvbnN0IGRyYWdnaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRiLWNhcmQuZHJhZ2dpbmcsIC5jaGlwLmRyYWdnaW5nJyk7XHJcbiAgICBpZiAoIWRyYWdnaW5nKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZ2lybCA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpIHx8ICd7fScpO1xyXG5cclxuICAgIC8vIHNpIG3Dqm1lIGjDqXJvIGTDqWrDoCBwbGFjw6kgYWlsbGV1cnMgLT4gbGliw6hyZSBs4oCZYW5jaWVubmUgY2VsbHVsZVxyXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgcGxhY2VkKSB7XHJcbiAgICAgIGlmICh2LmdpcmwuaWQgPT09IGdpcmwuaWQpIHtcclxuICAgICAgICBwbGFjZWQuZGVsZXRlKGspO1xyXG4gICAgICAgIGNvbnN0IG9sZENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKG9sZENlbGwpIG9sZENlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBsaW1pdGUgw6lxdWlwZVxyXG4gICAgaWYgKCFwbGFjZWQuaGFzKGtleSkgJiYgcGxhY2VkLnNpemUgPj0gTUFYX1RFQU0pIHJldHVybjtcclxuXHJcbiAgICAvLyBzd2FwIHNpIGxhIGNlbGx1bGUgw6l0YWl0IG9jY3Vww6llXHJcbiAgICBpZiAocGxhY2VkLmhhcyhrZXkpKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gcGxhY2VkLmdldChrZXkpO1xyXG4gICAgICBpZiAoZXhpc3Rpbmc/LmVsKSB7XHJcbiAgICAgICAgYmVuY2hHcmlkLmFwcGVuZENoaWxkKHJlbmRlckNhcmQoZXhpc3RpbmcuZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSkpO1xyXG4gICAgICAgIGluQmVuY2guc2V0KGV4aXN0aW5nLmdpcmwuaWQsIGJlbmNoR3JpZC5sYXN0RWxlbWVudENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICBwbGFjZWQuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hpcCA9IG1ha2VDaGlwKGdpcmwpO1xyXG4gICAgY2VsbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2hpcCk7XHJcbiAgICBwbGFjZWQuc2V0KGtleSwgeyBnaXJsLCBlbDogY2hpcCB9KTtcclxuICAgIHVwZGF0ZUxvY2tTdGF0ZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAtLS0tIERuRCBiZW5jaCAtLS0tXHJcbiAgYmVuY2hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgYmVuY2hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZ2lybCA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpIHx8ICd7fScpO1xyXG5cclxuICAgIC8vIHJldGlyZSBkdSBib2FyZCBzaSBwcsOpc2VudGVcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHBsYWNlZCkge1xyXG4gICAgICBpZiAodi5naXJsLmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7ay5zcGxpdCgnLCcpWzBdfVwiXVtkYXRhLXk9XCIke2suc3BsaXQoJywnKVsxXX1cIl1gKTtcclxuICAgICAgICBpZiAoYykgYy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwbGFjZWQuZGVsZXRlKGspO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbkJlbmNoLmhhcyhnaXJsLmlkKSkge1xyXG4gICAgICBjb25zdCBjYXJkID0gcmVuZGVyQ2FyZChnaXJsLCB7IHNvdXJjZTogJ2JlbmNoJyB9KTtcclxuICAgICAgYmVuY2hHcmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUxvY2tTdGF0ZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAtLS0tIGFjdGlvbnMgLS0tLVxyXG5sZXQgdGlja2V0SWQgPSBudWxsO1xyXG5sZXQgcG9sbFRpbWVyID0gbnVsbDtcclxuXHJcbmJ0bkxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKHNrZWxldG9uKSB7IHNrZWxldG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7IH1cclxuICAvLyBidWlsZCBwYXlsb2FkXHJcbiAgY29uc3QgbGluZXVwID0gQXJyYXkuZnJvbShwbGFjZWQuZW50cmllcygpKS5tYXAoKFtrZXksIHZhbF0pID0+IHtcclxuICAgIGNvbnN0IFt4LCB5XSA9IGtleS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gICAgcmV0dXJuIHsgaWQ6IHZhbC5naXJsLmlkLCB4LCB5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFNUQVJUX1VSTCAgPSB3aW5kb3cuTU0/LnN0YXJ0ICA/PyAnL21hdGNobWFraW5nL3N0YXJ0JztcclxuICBjb25zdCBTVEFUVVNfVFBMID0gd2luZG93Lk1NPy5zdGF0dXMgPz8gJy9tYXRjaG1ha2luZy9zdGF0dXMvX19JRF9fJztcclxuICBjb25zdCBzdGF0dXNVcmwgID0gKGlkKSA9PiBTVEFUVVNfVFBMLnJlcGxhY2UoJ19fSURfXycsIFN0cmluZyhpZCkpO1xyXG5cclxuICBjb25zb2xlLmxvZygnQ2FsbGluZyBTVEFSVF9VUkwgPScsIFNUQVJUX1VSTCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgID0gYXdhaXQgZmV0Y2goU1RBUlRfVVJMLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGluZXVwIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgIGxldCBkYXRhO1xyXG4gICAgdHJ5IHsgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7IH0gY2F0Y2ggeyBkYXRhID0gbnVsbDsgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdtYXRjaG1ha2luZy9zdGFydCAtPicsIHJlcy5zdGF0dXMsIGRhdGEgPz8gdGV4dCk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgYWxlcnQoYE1hdGNobWFraW5nIGZhaWxlZCAoJHtyZXMuc3RhdHVzfSk6XFxuJHtkYXRhPy5lcnJvciA/PyB0ZXh0fWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEgfHwgKGRhdGEuc3RhdHVzICE9PSAnbWF0Y2hlZCcgJiYgZGF0YS5zdGF0dXMgIT09ICdxdWV1ZWQnKSkge1xyXG4gICAgICBhbGVydCgnUsOpcG9uc2UgaW5hdHRlbmR1ZTpcXG4nICsgKGRhdGEgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IHRleHQpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ21hdGNoZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9tYXRjaC8ke2RhdGEubWF0Y2hJZH1gO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcXVldWVkIC0+IHBvbGwgc3RhdHVzXHJcbiAgICB0aWNrZXRJZCA9IGRhdGEudGlja2V0SWQ7XHJcbiAgICBidG5Mb2NrLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGJ0bkxvY2sudGV4dENvbnRlbnQgPSAn8J+UjiBSZWNoZXJjaGUgZW4gY291cnPigKYnO1xyXG5cclxuICAgIHBvbGxUaW1lciA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgciA9IGF3YWl0IGZldGNoKHN0YXR1c1VybCh0aWNrZXRJZCksIHsgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSk7XHJcbiAgICAgIGNvbnN0IGogPSBhd2FpdCByLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ21hdGNobWFraW5nL3N0YXR1cyAtPicsIGopO1xyXG4gICAgICBpZiAoai5zdGF0dXMgPT09ICdtYXRjaGVkJykge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwocG9sbFRpbWVyKTtcclxuICAgIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7IHNrZWxldG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpOyB9XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL21hdGNoLyR7ai5tYXRjaElkfWA7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMDApO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICBhbGVydCgnRXJyZXVyIHLDqXNlYXU6ICcgKyBlLm1lc3NhZ2UpO1xyXG4gIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7IHNrZWxldG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpOyB9XHJcbiAgfVxyXG59KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlTG9ja1N0YXRlKCkge1xyXG4gICAgYnRuTG9jay5kaXNhYmxlZCA9IChwbGFjZWQuc2l6ZSAhPT0gTUFYX1RFQU0pO1xyXG4gICAgcmVuZGVyQm9udXNlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIFN5bmVyZ3kgY29tcHV0YXRpb24gKGNsaWVudC1zaWRlIG1pcnJvciBvZiBzZXJ2ZXIgdGllcnMpIC0tLVxyXG4gIGZ1bmN0aW9uIGNvbXB1dGVCb251c2VzKCkge1xyXG4gICAgY29uc3QgY291bnRzID0ge307IC8vIGZhbWlseSAtPiBjb3VudFxyXG4gICAgZm9yIChjb25zdCBbLCB7Z2lybH1dIG9mIHBsYWNlZCkge1xyXG4gICAgICBjb25zdCBmYW0gPSAoZ2lybC5mYW1pbHkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmICghZmFtKSBjb250aW51ZTsgY291bnRzW2ZhbV0gPSAoY291bnRzW2ZhbV0gfHwgMCkgKyAxO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGllcnMgPSB7fTtcclxuICAgIGZvciAoY29uc3QgW2ZhbSwgbl0gb2YgT2JqZWN0LmVudHJpZXMoY291bnRzKSkge1xyXG4gICAgICBjb25zdCB0aWVyID0gbiA+PSA0ID8gNCA6IChuID49IDMgPyAzIDogKG4gPj0gMiA/IDIgOiAwKSk7XHJcbiAgICAgIGlmICh0aWVyID09PSAwKSBjb250aW51ZTsgdGllcnNbZmFtXSA9IHsgbiwgdGllciB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpZXJzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyQm9udXNlcygpIHtcclxuICAgIGlmICghYm9udXNMaXN0KSByZXR1cm47XHJcbiAgICBjb25zdCB0aWVycyA9IGNvbXB1dGVCb251c2VzKCk7XHJcbiAgICBib251c0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBsYWJlbCA9IChmYW0sIHRpZXIsIG4pID0+IHtcclxuICAgICAgY29uc3QgbWFwID0ge1xyXG4gICAgICAgIHNvbGVpbDogezI6J0FUSyArNSUnLDM6J1Byw6ljaXNpb24gKzUlJyw0OidDcml0ICs1JSd9LFxyXG4gICAgICAgIGx1bmU6ICAgezI6J0VzcXVpdmUgKzMlJywzOidFc3F1aXZlICsyJSAmIE1hbmEgKzEwJyw0OidCb3VjbGllciArMTAnfSxcclxuICAgICAgICBuYXR1cmU6IHsyOidQViArNSUnLDM6J0JvdWNsaWVyICsxNScsNDonUFYgKzUlJ30sXHJcbiAgICAgICAgaWRvbGU6ICB7MjonQ3JpdCArNSUnLDM6J0FUSyArNSUnLDQ6J01hbmEgKzEwJ30sXHJcbiAgICAgICAgb21icmU6ICB7MjonRXNxdWl2ZSArNSUnLDM6J1Byw6ljaXNpb24gKzUlJyw0OidCb3VjbGllciArMTUnfSxcclxuICAgICAgICBhcmNhbmU6IHsyOidQcsOpY2lzaW9uICs1JScsMzonTWFuYSArMTUnLDQ6J0NyaXQgKzUlJ30sXHJcbiAgICAgICAgZXRvaWxlOiB7MjonUHLDqWNpc2lvbiArMyUnLDM6J0NyaXQgKzUlJyw0OidBVEsgKzUlJ30sXHJcbiAgICAgICAgb2NlYW46ICB7MjonRXNxdWl2ZSArMyUnLDM6J01hbmEgKzEwJyw0OidQcsOpY2lzaW9uICs1JSd9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGVmZmVjdCA9IChtYXBbZmFtXSAmJiBtYXBbZmFtXVt0aWVyXSkgPyBtYXBbZmFtXVt0aWVyXSA6IGBQYWxpZXIgJHt0aWVyfWA7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZmFtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmFtLnNsaWNlKDEpO1xyXG4gICAgICByZXR1cm4gYCR7dGl0bGV9IHgke259IOKAlCAke2VmZmVjdH1gO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IElDT04gPSB7IHNvbGVpbDon4piA77iPJywgbHVuZTon8J+MmScsIG5hdHVyZTon8J+NgycsIGlkb2xlOifwn461Jywgb21icmU6J/CfjJEnLCBhcmNhbmU6J+KcqCcsIGV0b2lsZTon4q2QJywgb2NlYW46J/CfjIonIH07XHJcbiAgICBPYmplY3QuZW50cmllcyh0aWVycykuZm9yRWFjaCgoW2ZhbSwge3RpZXIsIG59XSkgPT4ge1xyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmNsYXNzTmFtZSA9IGBib251cy1pdGVtIGZhbS0ke2ZhbX0gdGllci0ke3RpZXJ9YDtcclxuICAgICAgY29uc3QgdGl0bGUgPSBmYW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBmYW0uc2xpY2UoMSk7XHJcbiAgICAgIGNvbnN0IGVmZmVjdFRleHQgPSBsYWJlbChmYW0sIHRpZXIsIG4pLnNwbGl0KCcg4oCUICcpLnBvcCgpO1xyXG4gICAgICBjb25zdCBwY3QgPSBNYXRoLm1pbigxMDAsIE1hdGgucm91bmQoKG4gLyA0KSAqIDEwMCkpO1xyXG4gICAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYW0taWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiR7SUNPTltmYW1dIHx8ICfinKcnfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhbS1uYW1lXCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudFwiPngke259PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYXVnZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjRcIiBhcmlhLXZhbHVlbm93PVwiJHtufVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiIHN0eWxlPVwid2lkdGg6JHtwY3R9JVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZWZmZWN0XCI+JHtlZmZlY3RUZXh0fTwvc3Bhbj5cclxuICAgICAgYDtcclxuICAgICAgYm9udXNMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdFxyXG4gIHJlbmRlclBpY2soKTtcclxuICByZW5kZXJCb251c2VzKCk7XHJcblxyXG4gIC8vIC0tLSBSZXJvbGwgbGltaXTDqSDDoCAzIC0tLVxyXG4gIGxldCByZXJvbGxzTGVmdCA9IE51bWJlcih3aW5kb3cuUkVST0xMU19MRUZUID8/IDMpO1xyXG4gIGNvbnN0IHVwZGF0ZVJlcm9sbFVJID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlcm9sbENvdW50RWwpIHJlcm9sbENvdW50RWwudGV4dENvbnRlbnQgPSBgKCR7cmVyb2xsc0xlZnR9IHJlc3RhbnQke3Jlcm9sbHNMZWZ0PjE/J3MnOicnfSlgO1xyXG4gICAgaWYgKGJ0blJlcm9sbCkgYnRuUmVyb2xsLmRpc2FibGVkID0gcmVyb2xsc0xlZnQgPD0gMDtcclxuICB9O1xyXG4gIHVwZGF0ZVJlcm9sbFVJKCk7XHJcbiAgaWYgKGJ0blJlcm9sbCkge1xyXG4gICAgYnRuUmVyb2xsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocmVyb2xsc0xlZnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHdpbmRvdy5SRVJPTExfREVDX1VSTCwgeyBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmVyb2xsc0xlZnQgPSBOdW1iZXIoZGF0YT8ubGVmdCA/PyByZXJvbGxzTGVmdCk7XHJcbiAgICAgIH0gY2F0Y2gge31cclxuICAgICAgdXBkYXRlUmVyb2xsVUkoKTtcclxuICAgICAgcmVuZGVyUGljaygpOyAvLyBwYXMgZGUgcmVsb2FkIC0+IHBhcyBkZSBjbGlnbm90ZW1lbnRcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L3RlYW0tYnVpbGRlci5qcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L0luc2NyaXB0aW9uLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvaG9tZS5qcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L21hdGNoLmpzJzsgXHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzczEiLCJnZXRFbGVtZW50QnlJZCIsInBhc3MyIiwicmVnaXN0ZXJCdG4iLCJjaGVja1Bhc3N3b3JkcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJ0cmFjayIsInByZXYiLCJxdWVyeVNlbGVjdG9yIiwibmV4dCIsInN0ZXAiLCJzY3JvbGxCeSIsImRlbHRhIiwibGVmdCIsImJlaGF2aW9yIiwiY29uc29sZSIsImxvZyIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsImJvZHkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIkFTU0VUX0JBU0UiLCJ3aW5kb3ciLCJyZXBsYWNlIiwiZnVsbCIsInAiLCJTdHJpbmciLCJib2FyZCIsImxvZ0VsIiwiaHVkQSIsImh1ZEUiLCJidG5TdGFydCIsImJ0blBhdXNlIiwiYnRuUmVzZXQiLCJidG5NdXNpYyIsIndhcm4iLCJSRVBMQVkiLCJKU09OIiwicGFyc2UiLCJ0ZXh0Q29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsImluaXRpYWwiLCJkZWJ1ZyIsImZpbHRlciIsInUiLCJ0ZWFtIiwibGVuZ3RoIiwidW5pdHNCeUlkIiwiTWFwIiwidGltZXIiLCJUSUNLX01TIiwiYmdtIiwiYmdtRW5hYmxlZCIsImJnbUZhZGluZyIsImJnbVVybCIsIkJHTV9VUkwiLCJBdWRpbyIsImxvb3AiLCJwcmVsb2FkIiwidm9sdW1lIiwidGl0bGUiLCJzZXRBdHRyaWJ1dGUiLCJwbGF5IiwicGF1c2UiLCJiZ21QbGF5IiwiZSIsImJnbVBhdXNlIiwiYmdtRmFkZU91dCIsIm1zIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwic3RhcnQiLCJ0MCIsInBlcmZvcm1hbmNlIiwibm93Iiwic3RlcEZuIiwiayIsIk1hdGgiLCJtaW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiZ21GYWRlSW4iLCJ0YXJnZXQiLCJjZWxsIiwieCIsInkiLCJjb25jYXQiLCJtc2ciLCJkIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwicmVuZGVySFVEIiwibGlzdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInZhbHVlcyIsIm1hcCIsImltZyIsIm5hbWUiLCJocCIsInNoaWVsZCIsIm1hbmEiLCJqb2luIiwiaW5uZXJIVE1MIiwidXBkYXRlQmFycyIsImVsIiwic2giLCJzdHlsZSIsImRpc3BsYXkiLCJtYSIsImxhc3RTZnhBdCIsInBsYXlTZngiLCJ1cmwiLCJ2b2wiLCJrZXkiLCJtaW5HYXBNcyIsImxhc3QiLCJnZXQiLCJzZXQiLCJhIiwiX3VudXNlZCIsInNwYXduSW5pdGlhbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYyIsImNsZWFyIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInUwIiwiX29iamVjdFNwcmVhZCIsImNsYXNzTmFtZSIsImlkIiwiZXJyIiwiZiIsImFwcGx5QWN0aW9uIiwidCIsInRvIiwiYXR0IiwiZGVmIiwicHJldkhwIiwid2FzQWJvdmUiLCJtYXhIcCIsIm5vd0JlbG93IiwiU0ZYX0hBTEZIUF9VUkwiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiU0ZYX0RFQVRIX1VSTCIsIl9kc3QkaHAiLCJfYSRhbW91bnQiLCJzcmMiLCJkc3QiLCJhbW91bnQiLCJjcml0IiwiU0ZYX0hFQUxfQ1JJVF9VUkwiLCJTRlhfSEVBTF9VUkwiLCJwbGF5VGljayIsIl9SRVBMQVkkYWN0aW9ucyIsImFjdGlvbnMiLCJjbGVhckludGVydmFsIiwib3V0Y29tZSIsIndpbm5lciIsIm92IiwidHgiLCJidG5DIiwiYnRuUyIsIl9vdiRxdWVyeVNlbGVjdG9yIiwicGxheUppbmdsZSIsImtpbmQiLCJhdWRpb0VuYWJsZWQiLCJjdHgiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJjdXJyZW50VGltZSIsIm5vdGVzIiwiaSIsIm8iLCJjcmVhdGVPc2NpbGxhdG9yIiwiZyIsImNyZWF0ZUdhaW4iLCJ0eXBlIiwiZnJlcXVlbmN5IiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiZ2FpbiIsInNldFZhbHVlQXRUaW1lIiwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSIsInN0b3AiLCJ0b2dnbGUiLCJzZnhVcmwiLCJTRlhfVklDVE9SWV9VUkwiLCJhdWQiLCJfIiwiU0ZYX0RFRkVBVF9VUkwiLCJoaWRlIiwib25jZSIsInNldEludGVydmFsIiwidGhlbiIsInIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInRvU3RyaW5nVGFnIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsIkciLCJ2IiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJwdXNoIiwiX24iLCJGIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiZnJvbSIsInRlc3QiLCJyZXF1aXJlIiwiX3dpbmRvdyRSRVJPTExTX0xFRlQiLCJmdWxsSW1nIiwib3duZWRFbCIsInN1Z2dlc3RlZEVsIiwiT1dORUQiLCJTVUdHRVNURUQiLCJwaWNrR3JpZCIsImJlbmNoR3JpZCIsImJ0blJlcm9sbCIsInJlcm9sbENvdW50RWwiLCJidG5Mb2NrIiwiYm9udXNMaXN0Iiwic2tlbGV0b24iLCJNQVhfVEVBTSIsInBsYWNlZCIsImluQmVuY2giLCJyYW5kSW50IiwiZmxvb3IiLCJyYW5kb20iLCJwaWNrTiIsImFyciIsInBvb2wiLCJvdXQiLCJzcGxpY2UiLCJjZWxsS2V5IiwicmVuZGVyQ2FyZCIsImdpcmwiLCJfcmVmIiwiX2dpcmwkZmFtaWx5IiwiX2dpcmwkY2hhbmNlX2F0ayIsInNvdXJjZSIsImNhcmQiLCJkcmFnZ2FibGUiLCJkYXRhc2V0IiwiY2xhc3NUYWciLCJjbGFzc0xhYmVsIiwiZmFtaWx5IiwicGR2IiwiYXRrIiwicm91bmQiLCJjaGFuY2VfYXRrIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInN0cmluZ2lmeSIsInBhcmVudEVsZW1lbnQiLCJ1cGRhdGVMb2NrU3RhdGUiLCJtYWtlQ2hpcCIsImNoaXAiLCJfY2hpcCRwYXJlbnRFbGVtZW50IiwiY2xvc2VzdCIsImhhcyIsInJlbmRlclBpY2siLCJwcmVzZXJ2ZWRJZHMiLCJTZXQiLCJrZXlzIiwicG9vbDIiLCJwaWNrcyIsInRha2VuIiwic2l6ZSIsImNscyIsInByZXZlbnREZWZhdWx0IiwiX2NlbGwkZGF0YXNldCIsImRyYWdnaW5nIiwiZ2V0RGF0YSIsIl9zdGVwJHZhbHVlIiwib2xkQ2VsbCIsInNwbGl0IiwiZXhpc3RpbmciLCJsYXN0RWxlbWVudENoaWxkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsInRpY2tldElkIiwicG9sbFRpbWVyIiwiX2NhbGxlZTIiLCJfd2luZG93JE1NJHN0YXJ0IiwiX3dpbmRvdyRNTSIsIl93aW5kb3ckTU0kc3RhdHVzIiwiX3dpbmRvdyRNTTIiLCJsaW5ldXAiLCJTVEFSVF9VUkwiLCJTVEFUVVNfVFBMIiwic3RhdHVzVXJsIiwicmVzIiwidGV4dCIsImRhdGEiLCJfZGF0YSRlcnJvciIsIl9kYXRhIiwiX3QiLCJfY29udGV4dDIiLCJlbnRyaWVzIiwiX3JlZjMiLCJfcmVmNCIsInZhbCIsIl9rZXkkc3BsaXQkbWFwIiwiTnVtYmVyIiwiX2tleSRzcGxpdCRtYXAyIiwiTU0iLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsIm9rIiwiYWxlcnQiLCJlcnJvciIsImxvY2F0aW9uIiwiaHJlZiIsIm1hdGNoSWQiLCJfY2FsbGVlIiwiaiIsIl9jb250ZXh0IiwianNvbiIsIm1lc3NhZ2UiLCJyZW5kZXJCb251c2VzIiwiY29tcHV0ZUJvbnVzZXMiLCJjb3VudHMiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX3N0ZXAzJHZhbHVlIiwiZmFtIiwidG9Mb3dlckNhc2UiLCJ0aWVycyIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwidGllciIsImxhYmVsIiwic29sZWlsIiwibHVuZSIsIm5hdHVyZSIsImlkb2xlIiwib21icmUiLCJhcmNhbmUiLCJldG9pbGUiLCJvY2VhbiIsImVmZmVjdCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiSUNPTiIsIl9yZWY2IiwiX3JlZjciLCJfcmVmNyQiLCJsaSIsImVmZmVjdFRleHQiLCJwb3AiLCJwY3QiLCJyZXJvbGxzTGVmdCIsIlJFUk9MTFNfTEVGVCIsInVwZGF0ZVJlcm9sbFVJIiwiX2NhbGxlZTMiLCJfZGF0YSRsZWZ0IiwiX3QyIiwiX2NvbnRleHQzIiwiUkVST0xMX0RFQ19VUkwiXSwic291cmNlUm9vdCI6IiJ9