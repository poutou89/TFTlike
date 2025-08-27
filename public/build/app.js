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
          def.hp = a.hp;
          def.shield = a.shield;
          if (a.mana !== undefined) att.mana = a.mana;
          updateBars(def);
          updateBars(att);
          if (def.hp <= 0) {
            def.el.classList.add('ko');
            setTimeout(function () {
              return def.el.remove();
            }, 120);
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
    if (!timer) timer = setInterval(playTick, TICK_MS);
  });
  btnPause.addEventListener('click', function () {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  });
  btnReset.addEventListener('click', function () {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    step = 0;
    spawnInitial();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3hELElBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsd0NBQXdDLENBQUM7RUFDL0UsSUFBTUMsS0FBSyxHQUFHSixRQUFRLENBQUNHLGNBQWMsQ0FBQyx5Q0FBeUMsQ0FBQztFQUNoRixJQUFNRSxXQUFXLEdBQUdMLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUUzRCxTQUFTRyxjQUFjQSxDQUFBLEVBQUc7SUFDeEIsSUFBSUosS0FBSyxDQUFDSyxLQUFLLElBQUlMLEtBQUssQ0FBQ0ssS0FBSyxLQUFLSCxLQUFLLENBQUNHLEtBQUssRUFBRTtNQUM5Q0YsV0FBVyxDQUFDRyxRQUFRLEdBQUcsS0FBSztJQUM5QixDQUFDLE1BQU07TUFDTEgsV0FBVyxDQUFDRyxRQUFRLEdBQUcsSUFBSTtJQUM3QjtFQUNGO0VBRUEsSUFBSU4sS0FBSyxJQUFJRSxLQUFLLElBQUlDLFdBQVcsRUFBRTtJQUNqQ0gsS0FBSyxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVLLGNBQWMsQ0FBQztJQUMvQ0YsS0FBSyxDQUFDSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVLLGNBQWMsQ0FBQztFQUNqRDtBQUNGLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7O0FDakJGTixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDbEQsSUFBTVEsS0FBSyxHQUFHVCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztFQUN4RCxJQUFJLENBQUNNLEtBQUssRUFBRTtFQUVaLElBQU1DLElBQUksR0FBR1YsUUFBUSxDQUFDVyxhQUFhLENBQUMsc0JBQXNCLENBQUM7RUFDM0QsSUFBTUMsSUFBSSxHQUFHWixRQUFRLENBQUNXLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztFQUMzRCxJQUFNRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7O0VBRWxCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLO0lBQUEsT0FBS04sS0FBSyxDQUFDSyxRQUFRLENBQUM7TUFBRUUsSUFBSSxFQUFFRCxLQUFLO01BQUVFLFFBQVEsRUFBRTtJQUFTLENBQUMsQ0FBQztFQUFBO0VBRS9FUCxJQUFJLGFBQUpBLElBQUksZUFBSkEsSUFBSSxDQUFFVCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFBQSxPQUFNYSxRQUFRLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO0VBQUEsRUFBQztFQUN0REQsSUFBSSxhQUFKQSxJQUFJLGVBQUpBLElBQUksQ0FBRVgsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQUEsT0FBTWEsUUFBUSxDQUFDRCxJQUFJLENBQUM7RUFBQSxFQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUNGSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkdEJuQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFBQSxJQUFBbUIscUJBQUE7RUFDbEQsSUFBSSxDQUFDcEIsUUFBUSxDQUFDcUIsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtFQUVyRCxJQUFNQyxVQUFVLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDRCxVQUFVLElBQUksR0FBRyxFQUFFRSxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztFQUNsRSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBSUMsQ0FBQztJQUFBLE9BQUtKLFVBQVUsR0FBR0ssTUFBTSxDQUFDRCxDQUFDLElBQUksRUFBRSxDQUFDLENBQUNGLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0VBQUE7RUFFcEUsSUFBTUksS0FBSyxHQUFNOUIsUUFBUSxDQUFDRyxjQUFjLENBQUMsT0FBTyxDQUFDO0VBQ2pELElBQU00QixLQUFLLEdBQU0vQixRQUFRLENBQUNHLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDdEQsSUFBTTZCLElBQUksR0FBT2hDLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUN0RCxJQUFNOEIsSUFBSSxHQUFPakMsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3ZELElBQU0rQixRQUFRLEdBQUdsQyxRQUFRLENBQUNHLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDckQsSUFBTWdDLFFBQVEsR0FBR25DLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUNyRCxJQUFNaUMsUUFBUSxHQUFHcEMsUUFBUSxDQUFDRyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBRXJELElBQUksQ0FBQzJCLEtBQUssSUFBSSxDQUFDQyxLQUFLLElBQUksQ0FBQ0MsSUFBSSxJQUFJLENBQUNDLElBQUksSUFBSSxDQUFDQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUFJLENBQUNDLFFBQVEsRUFBRTtJQUM3RWxCLE9BQU8sQ0FBQ21CLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtNQUFFUCxLQUFLLEVBQUxBLEtBQUs7TUFBRUMsS0FBSyxFQUFMQSxLQUFLO01BQUVDLElBQUksRUFBSkEsSUFBSTtNQUFFQyxJQUFJLEVBQUpBLElBQUk7TUFBRUMsUUFBUSxFQUFSQSxRQUFRO01BQUVDLFFBQVEsRUFBUkEsUUFBUTtNQUFFQyxRQUFRLEVBQVJBO0lBQVMsQ0FBQyxDQUFDO0lBQzVGO0VBQ0Y7RUFFQSxJQUFNRSxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQUFwQixxQkFBQSxHQUFBcEIsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDLGNBQUFpQixxQkFBQSx1QkFBdENBLHFCQUFBLENBQXdDcUIsV0FBVyxLQUFJLElBQUksQ0FBQztFQUN0RixJQUFJLENBQUNILE1BQU0sSUFBSSxDQUFDSSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0wsTUFBTSxDQUFDTSxPQUFPLENBQUMsRUFBRTtJQUFFMUIsT0FBTyxDQUFDbUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQUU7RUFBUTtFQUM3Rm5CLE9BQU8sQ0FBQzJCLEtBQUssQ0FBQyxTQUFTLEVBQUVQLE1BQU0sRUFDakIsWUFBWSxFQUFFQSxNQUFNLENBQUNNLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDLFVBQUFDLENBQUM7SUFBQSxPQUFFQSxDQUFDLENBQUNDLElBQUksS0FBRyxNQUFNO0VBQUEsRUFBQyxDQUFDQyxNQUFNLEVBQzlELGFBQWEsRUFBRVgsTUFBTSxDQUFDTSxPQUFPLENBQUNFLE1BQU0sQ0FBQyxVQUFBQyxDQUFDO0lBQUEsT0FBRUEsQ0FBQyxDQUFDQyxJQUFJLEtBQUcsT0FBTztFQUFBLEVBQUMsQ0FBQ0MsTUFBTSxDQUFDO0VBRS9FLElBQU1DLFNBQVMsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDN0IsSUFBSUMsS0FBSyxHQUFHLElBQUk7SUFBRXZDLElBQUksR0FBRyxDQUFDO0VBQzFCLElBQU13QyxPQUFPLEdBQUcsR0FBRztFQUVuQixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBSUMsQ0FBQyxFQUFDQyxDQUFDO0lBQUEsT0FBSzFCLEtBQUssQ0FBQ25CLGFBQWEsbUJBQUE4QyxNQUFBLENBQWtCRixDQUFDLG1CQUFBRSxNQUFBLENBQWNELENBQUMsUUFBSSxDQUFDO0VBQUE7RUFFaEYsU0FBU3JDLEdBQUdBLENBQUN1QyxHQUFHLEVBQUM7SUFBRSxJQUFHLENBQUNBLEdBQUcsRUFBQztJQUFRLElBQU1DLENBQUMsR0FBQzNELFFBQVEsQ0FBQzRELGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFBRUQsQ0FBQyxDQUFDbEIsV0FBVyxHQUFDaUIsR0FBRztJQUN6RjNCLEtBQUssQ0FBQzhCLFdBQVcsQ0FBQ0YsQ0FBQyxDQUFDO0lBQUU1QixLQUFLLENBQUMrQixTQUFTLEdBQUMvQixLQUFLLENBQUNnQyxZQUFZO0VBQUU7RUFFNUQsU0FBU0MsU0FBU0EsQ0FBQSxFQUFFO0lBQ2xCLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFJakIsSUFBSTtNQUFBLE9BQUtrQixrQkFBQSxDQUFJaEIsU0FBUyxDQUFDaUIsTUFBTSxDQUFDLENBQUMsRUFBRXJCLE1BQU0sQ0FBQyxVQUFBQyxDQUFDO1FBQUEsT0FBRUEsQ0FBQyxDQUFDQyxJQUFJLEtBQUdBLElBQUk7TUFBQSxFQUFDLENBQ3BFb0IsR0FBRyxDQUFDLFVBQUFyQixDQUFDO1FBQUEseUJBQUFVLE1BQUEsQ0FBbUI5QixJQUFJLENBQUNvQixDQUFDLENBQUNzQixHQUFHLENBQUMsZUFBQVosTUFBQSxDQUFXVixDQUFDLENBQUN1QixJQUFJLGlCQUFBYixNQUFBLENBQWNWLENBQUMsQ0FBQ3dCLEVBQUUsU0FBQWQsTUFBQSxDQUFNVixDQUFDLENBQUN5QixNQUFNLEdBQUMsQ0FBQyxHQUFDLE9BQU8sR0FBQ3pCLENBQUMsQ0FBQ3lCLE1BQU0sR0FBQyxFQUFFLEVBQUFmLE1BQUEsQ0FBR1YsQ0FBQyxDQUFDMEIsSUFBSSxHQUFDLENBQUMsR0FBQyxPQUFPLEdBQUMxQixDQUFDLENBQUMwQixJQUFJLEdBQUMsRUFBRTtNQUFBLENBQVksQ0FBQyxDQUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFDaEsxQyxJQUFJLENBQUMyQyxTQUFTLEdBQUdWLElBQUksQ0FBQyxNQUFNLENBQUM7SUFBRWhDLElBQUksQ0FBQzBDLFNBQVMsR0FBR1YsSUFBSSxDQUFDLE9BQU8sQ0FBQztFQUMvRDtFQUVBLFNBQVNXLFVBQVVBLENBQUM3QixDQUFDLEVBQUM7SUFDcEJBLENBQUMsQ0FBQzhCLEVBQUUsQ0FBQ2xFLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzhCLFdBQVcsR0FBR00sQ0FBQyxDQUFDd0IsRUFBRTtJQUM1QyxJQUFNTyxFQUFFLEdBQUMvQixDQUFDLENBQUM4QixFQUFFLENBQUNsRSxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQUUsSUFBR21FLEVBQUUsRUFBQztNQUFFQSxFQUFFLENBQUNyQyxXQUFXLEdBQUNNLENBQUMsQ0FBQ3lCLE1BQU07TUFBRU0sRUFBRSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBQ2pDLENBQUMsQ0FBQ3lCLE1BQU0sR0FBQyxDQUFDLEdBQUMsRUFBRSxHQUFDLE1BQU07SUFBRTtJQUNoSCxJQUFNUyxFQUFFLEdBQUNsQyxDQUFDLENBQUM4QixFQUFFLENBQUNsRSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQUksSUFBR3NFLEVBQUUsRUFBQztNQUFFQSxFQUFFLENBQUN4QyxXQUFXLEdBQUNNLENBQUMsQ0FBQzBCLElBQUk7TUFBSVEsRUFBRSxDQUFDRixLQUFLLENBQUNDLE9BQU8sR0FBQ2pDLENBQUMsQ0FBQzBCLElBQUksR0FBQyxDQUFDLEdBQUMsRUFBRSxHQUFDLE1BQU07SUFBRTtFQUNoSDtFQUVBLFNBQVNTLFlBQVlBLENBQUEsRUFBRTtJQUNyQnBELEtBQUssQ0FBQ3FELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsQ0FBQztNQUFBLE9BQUVBLENBQUMsQ0FBQ1YsU0FBUyxHQUFDLEVBQUU7SUFBQSxFQUFDO0lBQUU1QyxLQUFLLENBQUM0QyxTQUFTLEdBQUMsRUFBRTtJQUFFekIsU0FBUyxDQUFDb0MsS0FBSyxDQUFDLENBQUM7SUFBQyxJQUFBQyxTQUFBLEdBQUFDLDBCQUFBLENBQ2xGbEQsTUFBTSxDQUFDTSxPQUFPO01BQUE2QyxLQUFBO0lBQUE7TUFBOUIsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBK0I7UUFBQSxJQUFyQkMsRUFBRSxHQUFBSixLQUFBLENBQUFsRixLQUFBO1FBQ1YsSUFBTXdDLENBQUMsR0FBQStDLGFBQUEsS0FBT0QsRUFBRSxDQUFDO1FBQ2pCLElBQU1oQixFQUFFLEdBQUc3RSxRQUFRLENBQUM0RCxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3hDaUIsRUFBRSxDQUFDa0IsU0FBUyxpQkFBQXRDLE1BQUEsQ0FBaUJWLENBQUMsQ0FBQ0MsSUFBSSxhQUFBUyxNQUFBLENBQVVWLENBQUMsU0FBTSxDQUFFO1FBQ3REOEIsRUFBRSxDQUFDRixTQUFTLDJCQUFBbEIsTUFBQSxDQUNFOUIsSUFBSSxDQUFDb0IsQ0FBQyxDQUFDc0IsR0FBRyxDQUFDLCtDQUFBWixNQUFBLENBQ0pWLENBQUMsQ0FBQ3dCLEVBQUUsNkNBQUFkLE1BQUEsQ0FDRFYsQ0FBQyxDQUFDeUIsTUFBTSxHQUFDLENBQUMsR0FBQyxFQUFFLEdBQUMsdUJBQXVCLE9BQUFmLE1BQUEsQ0FBSVYsQ0FBQyxDQUFDeUIsTUFBTSwyQ0FBQWYsTUFBQSxDQUNuRFYsQ0FBQyxDQUFDMEIsSUFBSSxHQUFDLENBQUMsR0FBQyxFQUFFLEdBQUMsdUJBQXVCLE9BQUFoQixNQUFBLENBQUlWLENBQUMsQ0FBQzBCLElBQUksWUFBUztRQUM1RSxJQUFNWSxDQUFDLEdBQUcvQixJQUFJLENBQUNQLENBQUMsQ0FBQ1EsQ0FBQyxFQUFFUixDQUFDLENBQUNTLENBQUMsQ0FBQztRQUFFLElBQUk2QixDQUFDLEVBQUVBLENBQUMsQ0FBQ3hCLFdBQVcsQ0FBQ2dCLEVBQUUsQ0FBQztRQUNsRDlCLENBQUMsQ0FBQzhCLEVBQUUsR0FBR0EsRUFBRTtRQUFFM0IsU0FBUyxDQUFDOEMsR0FBRyxDQUFDakQsQ0FBQyxDQUFDa0QsRUFBRSxFQUFFbEQsQ0FBQyxDQUFDO01BQ25DO0lBQUMsU0FBQW1ELEdBQUE7TUFBQVgsU0FBQSxDQUFBWSxDQUFBLENBQUFELEdBQUE7SUFBQTtNQUFBWCxTQUFBLENBQUFhLENBQUE7SUFBQTtJQUNEcEMsU0FBUyxDQUFDLENBQUM7RUFDYjtFQUVBLFNBQVNxQyxXQUFXQSxDQUFDQyxDQUFDLEVBQUM7SUFDckIsUUFBT0EsQ0FBQyxDQUFDQyxDQUFDO01BQ1IsS0FBSyxNQUFNO1FBQUU7VUFDWCxJQUFNeEQsQ0FBQyxHQUFDRyxTQUFTLENBQUNzRCxHQUFHLENBQUNGLENBQUMsQ0FBQ0wsRUFBRSxDQUFDO1VBQUUsSUFBRyxDQUFDbEQsQ0FBQyxFQUFDO1VBQ25DLElBQU0wRCxFQUFFLEdBQUNuRCxJQUFJLENBQUNnRCxDQUFDLENBQUNHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQ0gsQ0FBQyxDQUFDRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFBRSxJQUFHLENBQUNBLEVBQUUsRUFBQztVQUN2Q0EsRUFBRSxDQUFDNUMsV0FBVyxDQUFDZCxDQUFDLENBQUM4QixFQUFFLENBQUM7VUFBRTlCLENBQUMsQ0FBQ1EsQ0FBQyxHQUFDK0MsQ0FBQyxDQUFDRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1VBQUUxRCxDQUFDLENBQUNTLENBQUMsR0FBQzhDLENBQUMsQ0FBQ0csRUFBRSxDQUFDLENBQUMsQ0FBQztVQUM5QztRQUNGO01BQ0EsS0FBSyxRQUFRO1FBQUU7VUFDYixJQUFNQyxHQUFHLEdBQUN4RCxTQUFTLENBQUNzRCxHQUFHLENBQUNGLENBQUMsQ0FBQ0ksR0FBRyxDQUFDO1lBQUVDLEdBQUcsR0FBQ3pELFNBQVMsQ0FBQ3NELEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDSyxHQUFHLENBQUM7VUFBRSxJQUFHLENBQUNELEdBQUcsSUFBRSxDQUFDQyxHQUFHLEVBQUM7VUFDeEVBLEdBQUcsQ0FBQ3BDLEVBQUUsR0FBQytCLENBQUMsQ0FBQy9CLEVBQUU7VUFBRW9DLEdBQUcsQ0FBQ25DLE1BQU0sR0FBQzhCLENBQUMsQ0FBQzlCLE1BQU07VUFBRSxJQUFHOEIsQ0FBQyxDQUFDN0IsSUFBSSxLQUFHbUMsU0FBUyxFQUFFRixHQUFHLENBQUNqQyxJQUFJLEdBQUM2QixDQUFDLENBQUM3QixJQUFJO1VBQ3hFRyxVQUFVLENBQUMrQixHQUFHLENBQUM7VUFBRS9CLFVBQVUsQ0FBQzhCLEdBQUcsQ0FBQztVQUNoQyxJQUFHQyxHQUFHLENBQUNwQyxFQUFFLElBQUUsQ0FBQyxFQUFDO1lBQUVvQyxHQUFHLENBQUM5QixFQUFFLENBQUN2RCxTQUFTLENBQUN1RixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQUVDLFVBQVUsQ0FBQztjQUFBLE9BQUlILEdBQUcsQ0FBQzlCLEVBQUUsQ0FBQ2tDLE1BQU0sQ0FBQyxDQUFDO1lBQUEsR0FBQyxHQUFHLENBQUM7VUFBRTtVQUNoRixJQUFHVCxDQUFDLENBQUNuRixHQUFHLEVBQUVBLEdBQUcsQ0FBQ21GLENBQUMsQ0FBQ25GLEdBQUcsQ0FBQztVQUNwQjtRQUNGO01BQ0EsS0FBSyxNQUFNO1FBQUU7VUFBQSxJQUFBNkYsT0FBQSxFQUFBQyxTQUFBO1VBQ1gsSUFBTUMsR0FBRyxHQUFDaEUsU0FBUyxDQUFDc0QsR0FBRyxDQUFDRixDQUFDLENBQUNZLEdBQUcsQ0FBQztZQUFFQyxHQUFHLEdBQUNqRSxTQUFTLENBQUNzRCxHQUFHLENBQUNGLENBQUMsQ0FBQ2EsR0FBRyxDQUFDO1VBQUUsSUFBRyxDQUFDRCxHQUFHLElBQUUsQ0FBQ0MsR0FBRyxFQUFDO1VBQ3hFLElBQUdiLENBQUMsQ0FBQzdCLElBQUksS0FBR21DLFNBQVMsRUFBRU0sR0FBRyxDQUFDekMsSUFBSSxHQUFDNkIsQ0FBQyxDQUFDN0IsSUFBSTtVQUN0QzBDLEdBQUcsQ0FBQzVDLEVBQUUsR0FBQzZDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLEtBQUssRUFBQyxFQUFBTixPQUFBLEdBQUNHLEdBQUcsQ0FBQzVDLEVBQUUsY0FBQXlDLE9BQUEsY0FBQUEsT0FBQSxHQUFFLENBQUMsTUFBQUMsU0FBQSxHQUFHWCxDQUFDLENBQUNpQixNQUFNLGNBQUFOLFNBQUEsY0FBQUEsU0FBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO1VBQ3BEckMsVUFBVSxDQUFDc0MsR0FBRyxDQUFDO1VBQUV0QyxVQUFVLENBQUN1QyxHQUFHLENBQUM7VUFBRSxJQUFHYixDQUFDLENBQUNuRixHQUFHLEVBQUVBLEdBQUcsQ0FBQ21GLENBQUMsQ0FBQ25GLEdBQUcsQ0FBQztVQUN0RDtRQUNGO01BQ0EsS0FBSyxLQUFLO1FBQUUsSUFBR21GLENBQUMsQ0FBQzVDLEdBQUcsRUFBRXZDLEdBQUcsQ0FBQ21GLENBQUMsQ0FBQzVDLEdBQUcsQ0FBQztRQUFFO0lBQ3BDO0VBQ0Y7RUFFQSxTQUFTOEQsUUFBUUEsQ0FBQSxFQUFFO0lBQUEsSUFBQUMsZUFBQTtJQUNqQixJQUFHNUcsSUFBSSxLQUFLLEVBQUE0RyxlQUFBLEdBQUFuRixNQUFNLENBQUNvRixPQUFPLGNBQUFELGVBQUEsdUJBQWRBLGVBQUEsQ0FBZ0J4RSxNQUFNLEtBQUksQ0FBQyxDQUFDLEVBQUM7TUFDdkMwRSxhQUFhLENBQUN2RSxLQUFLLENBQUM7TUFBRUEsS0FBSyxHQUFDLElBQUk7TUFDaEMsSUFBTXdFLE9BQU8sR0FBR3RGLE1BQU0sQ0FBQ3VGLE1BQU0sS0FBRyxNQUFNLEdBQUcsU0FBUyxHQUFHdkYsTUFBTSxDQUFDdUYsTUFBTSxLQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTTtNQUNoRzFHLEdBQUcsQ0FBQ3lHLE9BQU8sS0FBRyxTQUFTLEdBQUMsWUFBWSxHQUFDQSxPQUFPLEtBQUcsUUFBUSxHQUFDLFVBQVUsR0FBQyxXQUFXLENBQUM7TUFDL0U7TUFDQSxJQUFNRSxFQUFFLEdBQUc5SCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwRCxJQUFNNEgsRUFBRSxHQUFHL0gsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO01BQ2pELElBQU02SCxJQUFJLEdBQUdoSSxRQUFRLENBQUNHLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztNQUMzRCxJQUFNOEgsSUFBSSxHQUFHakksUUFBUSxDQUFDRyxjQUFjLENBQUMscUJBQXFCLENBQUM7TUFDM0QsSUFBSTJILEVBQUUsSUFBSUMsRUFBRSxFQUFFO1FBQUEsSUFBQUcsaUJBQUE7UUFBQSxJQVFIQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVVBLENBQUNDLElBQUksRUFBQztVQUN2QixJQUFHO1lBQ0QsSUFBRyxDQUFDQyxZQUFZLEVBQUU7WUFDbEIsSUFBRyxDQUFDQyxHQUFHLEVBQUVBLEdBQUcsR0FBRyxLQUFLN0csTUFBTSxDQUFDOEcsWUFBWSxJQUFFOUcsTUFBTSxDQUFDK0csa0JBQWtCLEVBQUUsQ0FBQztZQUNyRSxJQUFNQyxHQUFHLEdBQUdILEdBQUcsQ0FBQ0ksV0FBVztZQUMzQixJQUFNQyxLQUFLLEdBQUdQLElBQUksS0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxHQUFHQSxJQUFJLEtBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO1lBQ2hHTyxLQUFLLENBQUN2RCxPQUFPLENBQUMsVUFBQ2dCLENBQUMsRUFBQ3dDLENBQUMsRUFBRztjQUNuQixJQUFNQyxDQUFDLEdBQUdQLEdBQUcsQ0FBQ1EsZ0JBQWdCLENBQUMsQ0FBQztjQUNoQyxJQUFNQyxDQUFDLEdBQUdULEdBQUcsQ0FBQ1UsVUFBVSxDQUFDLENBQUM7Y0FDMUJILENBQUMsQ0FBQ0ksSUFBSSxHQUFDLE1BQU07Y0FBRUosQ0FBQyxDQUFDSyxTQUFTLENBQUMzSSxLQUFLLEdBQUM2RixDQUFDO2NBQ2xDeUMsQ0FBQyxDQUFDTSxPQUFPLENBQUNKLENBQUMsQ0FBQztjQUFFQSxDQUFDLENBQUNJLE9BQU8sQ0FBQ2IsR0FBRyxDQUFDYyxXQUFXLENBQUM7Y0FDeEMsSUFBTTdDLENBQUMsR0FBR2tDLEdBQUcsR0FBR0csQ0FBQyxHQUFDLElBQUk7Y0FBRUcsQ0FBQyxDQUFDTSxJQUFJLENBQUNDLGNBQWMsQ0FBQyxLQUFLLEVBQUMvQyxDQUFDLENBQUM7Y0FBRXdDLENBQUMsQ0FBQ00sSUFBSSxDQUFDRSw0QkFBNEIsQ0FBQyxHQUFHLEVBQUNoRCxDQUFDLEdBQUMsSUFBSSxDQUFDO2NBQUV3QyxDQUFDLENBQUNNLElBQUksQ0FBQ0UsNEJBQTRCLENBQUMsS0FBSyxFQUFDaEQsQ0FBQyxHQUFDLEdBQUcsQ0FBQztjQUN6SnNDLENBQUMsQ0FBQ1csS0FBSyxDQUFDakQsQ0FBQyxDQUFDO2NBQUVzQyxDQUFDLENBQUNZLElBQUksQ0FBQ2xELENBQUMsR0FBQyxJQUFJLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1VBQ0osQ0FBQyxRQUFNSixDQUFDLEVBQUM7WUFBRWpGLE9BQU8sQ0FBQzJCLEtBQUssQ0FBQyxjQUFjLEVBQUVzRCxDQUFDLENBQUM7VUFBRTtRQUMvQyxDQUFDO1FBdEJEMkIsRUFBRSxDQUFDeEcsU0FBUyxDQUFDeUYsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNoQ2UsRUFBRSxDQUFDeEcsU0FBUyxDQUFDb0ksTUFBTSxDQUFDLFlBQVksRUFBRTlCLE9BQU8sS0FBRyxTQUFTLENBQUM7UUFDdERFLEVBQUUsQ0FBQ3hHLFNBQVMsQ0FBQ29JLE1BQU0sQ0FBQyxXQUFXLEVBQUU5QixPQUFPLEtBQUcsUUFBUSxDQUFDO1FBQ3BERyxFQUFFLENBQUN0RixXQUFXLEdBQUdtRixPQUFPLEtBQUcsU0FBUyxHQUFHLFVBQVUsR0FBR0EsT0FBTyxLQUFHLFFBQVEsR0FBRyxTQUFTLEdBQUcsU0FBUzs7UUFFOUY7UUFDQSxJQUFJUyxZQUFZLEdBQUcsS0FBSztVQUFFQyxHQUFHLEdBQUcsSUFBSTtRQWlCcEMsSUFBSUwsSUFBSSxFQUFFO1VBQ1JBLElBQUksQ0FBQ2hJLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxZQUFJO1lBQ2hDb0ksWUFBWSxHQUFHLENBQUNBLFlBQVk7WUFDNUJKLElBQUksQ0FBQzBCLFlBQVksQ0FBQyxjQUFjLEVBQUV0QixZQUFZLEdBQUUsTUFBTSxHQUFDLE9BQU8sQ0FBQztZQUMvRCxJQUFHQSxZQUFZLEVBQUM7Y0FBRUYsVUFBVSxDQUFDUCxPQUFPLENBQUM7WUFBRTtVQUN6QyxDQUFDLENBQUM7UUFDSjs7UUFFQTtRQUNBLElBQU1nQyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQTtVQUFBLE9BQVE5QixFQUFFLENBQUN4RyxTQUFTLENBQUN1RixHQUFHLENBQUMsV0FBVyxDQUFDO1FBQUE7UUFDL0MsSUFBR21CLElBQUksRUFBRUEsSUFBSSxDQUFDL0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFMkosSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBQztRQUFLLENBQUMsQ0FBQztRQUM1RCxDQUFBM0IsaUJBQUEsR0FBQUosRUFBRSxDQUFDbkgsYUFBYSxDQUFDLGNBQWMsQ0FBQyxjQUFBdUgsaUJBQUEsZUFBaENBLGlCQUFBLENBQWtDakksZ0JBQWdCLENBQUMsT0FBTyxFQUFFMkosSUFBSSxFQUFFO1VBQUVDLElBQUksRUFBQztRQUFLLENBQUMsQ0FBQztNQUNsRjtNQUNBO0lBQ0Y7SUFDQXhELFdBQVcsQ0FBQy9ELE1BQU0sQ0FBQ29GLE9BQU8sQ0FBQzdHLElBQUksRUFBRSxDQUFDLENBQUM7SUFBRW1ELFNBQVMsQ0FBQyxDQUFDO0VBQ2xEO0VBRUE5QixRQUFRLENBQUNqQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSTtJQUFFLElBQUcsQ0FBQ21ELEtBQUssRUFBRUEsS0FBSyxHQUFDMEcsV0FBVyxDQUFDdEMsUUFBUSxFQUFDbkUsT0FBTyxDQUFDO0VBQUUsQ0FBQyxDQUFDO0VBQzNGbEIsUUFBUSxDQUFDbEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUk7SUFBRSxJQUFHbUQsS0FBSyxFQUFDO01BQUV1RSxhQUFhLENBQUN2RSxLQUFLLENBQUM7TUFBRUEsS0FBSyxHQUFDLElBQUk7SUFBRTtFQUFFLENBQUMsQ0FBQztFQUMxRmhCLFFBQVEsQ0FBQ25DLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFJO0lBQUUsSUFBR21ELEtBQUssRUFBQztNQUFFdUUsYUFBYSxDQUFDdkUsS0FBSyxDQUFDO01BQUVBLEtBQUssR0FBQyxJQUFJO0lBQUU7SUFBRXZDLElBQUksR0FBQyxDQUFDO0lBQUVxRSxZQUFZLENBQUMsQ0FBQztFQUFFLENBQUMsQ0FBQztFQUVsSEEsWUFBWSxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7MEJDbEpGLHVLQUFBaUIsQ0FBQSxFQUFBSSxDQUFBLEVBQUF3RCxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQXJFLENBQUEsR0FBQW9FLENBQUEsQ0FBQUUsUUFBQSxrQkFBQXBCLENBQUEsR0FBQWtCLENBQUEsQ0FBQUcsV0FBQSw4QkFBQXRCLEVBQUFtQixDQUFBLEVBQUFwRSxDQUFBLEVBQUFrRCxDQUFBLEVBQUFELENBQUEsUUFBQXZELENBQUEsR0FBQU0sQ0FBQSxJQUFBQSxDQUFBLENBQUF3RSxTQUFBLFlBQUFDLFNBQUEsR0FBQXpFLENBQUEsR0FBQXlFLFNBQUEsRUFBQXJILENBQUEsR0FBQXNILE1BQUEsQ0FBQUMsTUFBQSxDQUFBakYsQ0FBQSxDQUFBOEUsU0FBQSxVQUFBSSxtQkFBQSxDQUFBeEgsQ0FBQSx1QkFBQWdILENBQUEsRUFBQXBFLENBQUEsRUFBQWtELENBQUEsUUFBQUQsQ0FBQSxFQUFBdkQsQ0FBQSxFQUFBdEMsQ0FBQSxFQUFBcUQsQ0FBQSxNQUFBeEUsQ0FBQSxHQUFBaUgsQ0FBQSxRQUFBckYsQ0FBQSxPQUFBZ0gsQ0FBQSxLQUFBNUksQ0FBQSxLQUFBK0QsQ0FBQSxLQUFBOEUsQ0FBQSxFQUFBdEUsQ0FBQSxFQUFBRyxDQUFBLEVBQUEzQyxDQUFBLEVBQUF5QyxDQUFBLEVBQUF6QyxDQUFBLENBQUErRyxJQUFBLENBQUF2RSxDQUFBLE1BQUF4QyxDQUFBLFdBQUFBLEVBQUE0QyxDQUFBLEVBQUF3RCxDQUFBLFdBQUFuQixDQUFBLEdBQUFyQyxDQUFBLEVBQUFsQixDQUFBLE1BQUF0QyxDQUFBLEdBQUFvRCxDQUFBLEVBQUFxRSxDQUFBLENBQUE3RSxDQUFBLEdBQUFvRSxDQUFBLEVBQUF6RCxDQUFBLGdCQUFBM0MsRUFBQW9HLENBQUEsRUFBQXBFLENBQUEsU0FBQU4sQ0FBQSxHQUFBMEUsQ0FBQSxFQUFBaEgsQ0FBQSxHQUFBNEMsQ0FBQSxFQUFBWSxDQUFBLE9BQUEvQyxDQUFBLElBQUE0QyxDQUFBLEtBQUF5QyxDQUFBLElBQUF0QyxDQUFBLEdBQUEzRSxDQUFBLENBQUFxQixNQUFBLEVBQUFzRCxDQUFBLFVBQUFzQyxDQUFBLEVBQUFELENBQUEsR0FBQWhILENBQUEsQ0FBQTJFLENBQUEsR0FBQTVDLENBQUEsR0FBQTZHLENBQUEsQ0FBQTVJLENBQUEsRUFBQStJLENBQUEsR0FBQS9CLENBQUEsS0FBQW1CLENBQUEsUUFBQWxCLENBQUEsR0FBQThCLENBQUEsS0FBQWhGLENBQUEsTUFBQTVDLENBQUEsR0FBQTZGLENBQUEsRUFBQXZELENBQUEsR0FBQXVELENBQUEsWUFBQXZELENBQUEsV0FBQXVELENBQUEsTUFBQUEsQ0FBQSxNQUFBekMsQ0FBQSxJQUFBeUMsQ0FBQSxPQUFBakYsQ0FBQSxNQUFBa0YsQ0FBQSxHQUFBa0IsQ0FBQSxRQUFBcEcsQ0FBQSxHQUFBaUYsQ0FBQSxRQUFBdkQsQ0FBQSxNQUFBbUYsQ0FBQSxDQUFBQyxDQUFBLEdBQUE5RSxDQUFBLEVBQUE2RSxDQUFBLENBQUE3RSxDQUFBLEdBQUFpRCxDQUFBLE9BQUFqRixDQUFBLEdBQUFnSCxDQUFBLEtBQUE5QixDQUFBLEdBQUFrQixDQUFBLFFBQUFuQixDQUFBLE1BQUFqRCxDQUFBLElBQUFBLENBQUEsR0FBQWdGLENBQUEsTUFBQS9CLENBQUEsTUFBQW1CLENBQUEsRUFBQW5CLENBQUEsTUFBQWpELENBQUEsRUFBQTZFLENBQUEsQ0FBQTdFLENBQUEsR0FBQWdGLENBQUEsRUFBQXRGLENBQUEsY0FBQXdELENBQUEsSUFBQWtCLENBQUEsYUFBQXpELENBQUEsUUFBQTlDLENBQUEsT0FBQW1DLENBQUEscUJBQUFrRCxDQUFBLEVBQUFqSCxDQUFBLEVBQUErSSxDQUFBLFFBQUF2RSxDQUFBLFlBQUF3RSxTQUFBLHVDQUFBcEgsQ0FBQSxVQUFBNUIsQ0FBQSxJQUFBK0IsQ0FBQSxDQUFBL0IsQ0FBQSxFQUFBK0ksQ0FBQSxHQUFBdEYsQ0FBQSxHQUFBekQsQ0FBQSxFQUFBbUIsQ0FBQSxHQUFBNEgsQ0FBQSxHQUFBcEUsQ0FBQSxHQUFBbEIsQ0FBQSxPQUFBYyxDQUFBLEdBQUFwRCxDQUFBLE1BQUFTLENBQUEsS0FBQW9GLENBQUEsS0FBQXZELENBQUEsR0FBQUEsQ0FBQSxRQUFBQSxDQUFBLFNBQUFtRixDQUFBLENBQUE3RSxDQUFBLFFBQUFoQyxDQUFBLENBQUEwQixDQUFBLEVBQUF0QyxDQUFBLEtBQUF5SCxDQUFBLENBQUE3RSxDQUFBLEdBQUE1QyxDQUFBLEdBQUF5SCxDQUFBLENBQUFDLENBQUEsR0FBQTFILENBQUEsYUFBQXFELENBQUEsTUFBQXdDLENBQUEsUUFBQXZELENBQUEsS0FBQXdELENBQUEsWUFBQXRDLENBQUEsR0FBQXFDLENBQUEsQ0FBQUMsQ0FBQSxXQUFBdEMsQ0FBQSxHQUFBQSxDQUFBLENBQUFzRSxJQUFBLENBQUFqQyxDQUFBLEVBQUE3RixDQUFBLFVBQUE2SCxTQUFBLDJDQUFBckUsQ0FBQSxDQUFBWCxJQUFBLFNBQUFXLENBQUEsRUFBQXhELENBQUEsR0FBQXdELENBQUEsQ0FBQWhHLEtBQUEsRUFBQThFLENBQUEsU0FBQUEsQ0FBQSxvQkFBQUEsQ0FBQSxLQUFBa0IsQ0FBQSxHQUFBcUMsQ0FBQSxlQUFBckMsQ0FBQSxDQUFBc0UsSUFBQSxDQUFBakMsQ0FBQSxHQUFBdkQsQ0FBQSxTQUFBdEMsQ0FBQSxHQUFBNkgsU0FBQSx1Q0FBQS9CLENBQUEsZ0JBQUF4RCxDQUFBLE9BQUF1RCxDQUFBLEdBQUF6QyxDQUFBLGNBQUFJLENBQUEsSUFBQS9DLENBQUEsR0FBQWdILENBQUEsQ0FBQTdFLENBQUEsUUFBQTVDLENBQUEsR0FBQWdILENBQUEsQ0FBQWMsSUFBQSxDQUFBbEYsQ0FBQSxFQUFBNkUsQ0FBQSxPQUFBbEUsQ0FBQSxrQkFBQUMsQ0FBQSxJQUFBcUMsQ0FBQSxHQUFBekMsQ0FBQSxFQUFBZCxDQUFBLE1BQUF0QyxDQUFBLEdBQUF3RCxDQUFBLGNBQUFILENBQUEsbUJBQUE3RixLQUFBLEVBQUFnRyxDQUFBLEVBQUFYLElBQUEsRUFBQXBDLENBQUEsU0FBQXVHLENBQUEsRUFBQWxCLENBQUEsRUFBQUQsQ0FBQSxRQUFBN0YsQ0FBQSxRQUFBdUQsQ0FBQSxnQkFBQThELFVBQUEsY0FBQVUsa0JBQUEsY0FBQUMsMkJBQUEsS0FBQXhFLENBQUEsR0FBQThELE1BQUEsQ0FBQVcsY0FBQSxNQUFBM0YsQ0FBQSxNQUFBTSxDQUFBLElBQUFZLENBQUEsQ0FBQUEsQ0FBQSxJQUFBWixDQUFBLFNBQUE0RSxtQkFBQSxDQUFBaEUsQ0FBQSxPQUFBWixDQUFBLGlDQUFBWSxDQUFBLEdBQUF4RCxDQUFBLEdBQUFnSSwwQkFBQSxDQUFBWixTQUFBLEdBQUFDLFNBQUEsQ0FBQUQsU0FBQSxHQUFBRSxNQUFBLENBQUFDLE1BQUEsQ0FBQWpGLENBQUEsWUFBQWUsRUFBQUQsQ0FBQSxXQUFBa0UsTUFBQSxDQUFBWSxjQUFBLEdBQUFaLE1BQUEsQ0FBQVksY0FBQSxDQUFBOUUsQ0FBQSxFQUFBNEUsMEJBQUEsS0FBQTVFLENBQUEsQ0FBQStFLFNBQUEsR0FBQUgsMEJBQUEsRUFBQVIsbUJBQUEsQ0FBQXBFLENBQUEsRUFBQTBDLENBQUEseUJBQUExQyxDQUFBLENBQUFnRSxTQUFBLEdBQUFFLE1BQUEsQ0FBQUMsTUFBQSxDQUFBdkgsQ0FBQSxHQUFBb0QsQ0FBQSxXQUFBMkUsaUJBQUEsQ0FBQVgsU0FBQSxHQUFBWSwwQkFBQSxFQUFBUixtQkFBQSxDQUFBeEgsQ0FBQSxpQkFBQWdJLDBCQUFBLEdBQUFSLG1CQUFBLENBQUFRLDBCQUFBLGlCQUFBRCxpQkFBQSxHQUFBQSxpQkFBQSxDQUFBSyxXQUFBLHdCQUFBWixtQkFBQSxDQUFBUSwwQkFBQSxFQUFBbEMsQ0FBQSx3QkFBQTBCLG1CQUFBLENBQUF4SCxDQUFBLEdBQUF3SCxtQkFBQSxDQUFBeEgsQ0FBQSxFQUFBOEYsQ0FBQSxnQkFBQTBCLG1CQUFBLENBQUF4SCxDQUFBLEVBQUE0QyxDQUFBLGlDQUFBNEUsbUJBQUEsQ0FBQXhILENBQUEsOERBQUFxSSxZQUFBLFlBQUFBLGFBQUEsYUFBQUMsQ0FBQSxFQUFBekMsQ0FBQSxFQUFBMEMsQ0FBQSxFQUFBbEYsQ0FBQTtBQUFBLFNBQUFtRSxvQkFBQXBFLENBQUEsRUFBQTRELENBQUEsRUFBQXBFLENBQUEsRUFBQVksQ0FBQSxRQUFBcUMsQ0FBQSxHQUFBeUIsTUFBQSxDQUFBa0IsY0FBQSxRQUFBM0MsQ0FBQSx1QkFBQXpDLENBQUEsSUFBQXlDLENBQUEsUUFBQTJCLG1CQUFBLFlBQUFpQixtQkFBQXJGLENBQUEsRUFBQTRELENBQUEsRUFBQXBFLENBQUEsRUFBQVksQ0FBQSxhQUFBc0MsRUFBQWtCLENBQUEsRUFBQXBFLENBQUEsSUFBQTRFLG1CQUFBLENBQUFwRSxDQUFBLEVBQUE0RCxDQUFBLFlBQUE1RCxDQUFBLGdCQUFBc0YsT0FBQSxDQUFBMUIsQ0FBQSxFQUFBcEUsQ0FBQSxFQUFBUSxDQUFBLFNBQUE0RCxDQUFBLEdBQUFuQixDQUFBLEdBQUFBLENBQUEsQ0FBQXpDLENBQUEsRUFBQTRELENBQUEsSUFBQXhKLEtBQUEsRUFBQW9GLENBQUEsRUFBQStGLFVBQUEsR0FBQW5GLENBQUEsRUFBQW9GLFlBQUEsR0FBQXBGLENBQUEsRUFBQXFGLFFBQUEsR0FBQXJGLENBQUEsTUFBQUosQ0FBQSxDQUFBNEQsQ0FBQSxJQUFBcEUsQ0FBQSxJQUFBa0QsQ0FBQSxhQUFBQSxDQUFBLGNBQUFBLENBQUEsbUJBQUEwQixtQkFBQSxDQUFBcEUsQ0FBQSxFQUFBNEQsQ0FBQSxFQUFBcEUsQ0FBQSxFQUFBWSxDQUFBO0FBQUEsU0FBQXNGLG1CQUFBbEcsQ0FBQSxFQUFBWSxDQUFBLEVBQUFKLENBQUEsRUFBQTRELENBQUEsRUFBQWxCLENBQUEsRUFBQXZDLENBQUEsRUFBQWpCLENBQUEsY0FBQXVELENBQUEsR0FBQWpELENBQUEsQ0FBQVcsQ0FBQSxFQUFBakIsQ0FBQSxHQUFBdEMsQ0FBQSxHQUFBNkYsQ0FBQSxDQUFBckksS0FBQSxXQUFBb0YsQ0FBQSxnQkFBQVEsQ0FBQSxDQUFBUixDQUFBLEtBQUFpRCxDQUFBLENBQUFoRCxJQUFBLEdBQUFXLENBQUEsQ0FBQXhELENBQUEsSUFBQStJLE9BQUEsQ0FBQUMsT0FBQSxDQUFBaEosQ0FBQSxFQUFBaUosSUFBQSxDQUFBakMsQ0FBQSxFQUFBbEIsQ0FBQTtBQUFBLFNBQUFvRCxrQkFBQXRHLENBQUEsNkJBQUFZLENBQUEsU0FBQUosQ0FBQSxHQUFBK0YsU0FBQSxhQUFBSixPQUFBLFdBQUEvQixDQUFBLEVBQUFsQixDQUFBLFFBQUF2QyxDQUFBLEdBQUFYLENBQUEsQ0FBQXdHLEtBQUEsQ0FBQTVGLENBQUEsRUFBQUosQ0FBQSxZQUFBaUcsTUFBQXpHLENBQUEsSUFBQWtHLGtCQUFBLENBQUF2RixDQUFBLEVBQUF5RCxDQUFBLEVBQUFsQixDQUFBLEVBQUF1RCxLQUFBLEVBQUFDLE1BQUEsVUFBQTFHLENBQUEsY0FBQTBHLE9BQUExRyxDQUFBLElBQUFrRyxrQkFBQSxDQUFBdkYsQ0FBQSxFQUFBeUQsQ0FBQSxFQUFBbEIsQ0FBQSxFQUFBdUQsS0FBQSxFQUFBQyxNQUFBLFdBQUExRyxDQUFBLEtBQUF5RyxLQUFBO0FBQUEsU0FBQUUsZUFBQXZDLENBQUEsRUFBQTVELENBQUEsV0FBQW9HLGVBQUEsQ0FBQXhDLENBQUEsS0FBQXlDLHFCQUFBLENBQUF6QyxDQUFBLEVBQUE1RCxDQUFBLEtBQUFzRywyQkFBQSxDQUFBMUMsQ0FBQSxFQUFBNUQsQ0FBQSxLQUFBdUcsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBOUIsU0FBQTtBQUFBLFNBQUE0QixzQkFBQXpDLENBQUEsRUFBQVksQ0FBQSxRQUFBcEUsQ0FBQSxXQUFBd0QsQ0FBQSxnQ0FBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFDLE1BQUEsQ0FBQUMsUUFBQSxLQUFBRixDQUFBLDRCQUFBeEQsQ0FBQSxRQUFBSixDQUFBLEVBQUFSLENBQUEsRUFBQWlELENBQUEsRUFBQTdGLENBQUEsRUFBQXVELENBQUEsT0FBQUYsQ0FBQSxPQUFBeUMsQ0FBQSxpQkFBQUQsQ0FBQSxJQUFBckMsQ0FBQSxHQUFBQSxDQUFBLENBQUFzRSxJQUFBLENBQUFkLENBQUEsR0FBQW5KLElBQUEsUUFBQStKLENBQUEsUUFBQU4sTUFBQSxDQUFBOUQsQ0FBQSxNQUFBQSxDQUFBLFVBQUFILENBQUEsdUJBQUFBLENBQUEsSUFBQUQsQ0FBQSxHQUFBeUMsQ0FBQSxDQUFBaUMsSUFBQSxDQUFBdEUsQ0FBQSxHQUFBWCxJQUFBLE1BQUFVLENBQUEsQ0FBQXFHLElBQUEsQ0FBQXhHLENBQUEsQ0FBQTVGLEtBQUEsR0FBQStGLENBQUEsQ0FBQXJELE1BQUEsS0FBQTBILENBQUEsR0FBQXZFLENBQUEsaUJBQUEyRCxDQUFBLElBQUFsQixDQUFBLE9BQUFsRCxDQUFBLEdBQUFvRSxDQUFBLHlCQUFBM0QsQ0FBQSxZQUFBRyxDQUFBLGVBQUF4RCxDQUFBLEdBQUF3RCxDQUFBLGNBQUE4RCxNQUFBLENBQUF0SCxDQUFBLE1BQUFBLENBQUEsMkJBQUE4RixDQUFBLFFBQUFsRCxDQUFBLGFBQUFXLENBQUE7QUFBQSxTQUFBaUcsZ0JBQUF4QyxDQUFBLFFBQUFySCxLQUFBLENBQUFDLE9BQUEsQ0FBQW9ILENBQUEsVUFBQUEsQ0FBQTtBQUFBLFNBQUF2RSwyQkFBQXVFLENBQUEsRUFBQTVELENBQUEsUUFBQUksQ0FBQSx5QkFBQXlELE1BQUEsSUFBQUQsQ0FBQSxDQUFBQyxNQUFBLENBQUFDLFFBQUEsS0FBQUYsQ0FBQSxxQkFBQXhELENBQUEsUUFBQTdELEtBQUEsQ0FBQUMsT0FBQSxDQUFBb0gsQ0FBQSxNQUFBeEQsQ0FBQSxHQUFBa0csMkJBQUEsQ0FBQTFDLENBQUEsTUFBQTVELENBQUEsSUFBQTRELENBQUEsdUJBQUFBLENBQUEsQ0FBQTlHLE1BQUEsSUFBQXNELENBQUEsS0FBQXdELENBQUEsR0FBQXhELENBQUEsT0FBQXFHLEVBQUEsTUFBQUMsQ0FBQSxZQUFBQSxFQUFBLGVBQUFuSCxDQUFBLEVBQUFtSCxDQUFBLEVBQUFsSCxDQUFBLFdBQUFBLEVBQUEsV0FBQWlILEVBQUEsSUFBQTdDLENBQUEsQ0FBQTlHLE1BQUEsS0FBQTJDLElBQUEsV0FBQUEsSUFBQSxNQUFBckYsS0FBQSxFQUFBd0osQ0FBQSxDQUFBNkMsRUFBQSxVQUFBekcsQ0FBQSxXQUFBQSxFQUFBNEQsQ0FBQSxVQUFBQSxDQUFBLEtBQUEzRCxDQUFBLEVBQUF5RyxDQUFBLGdCQUFBakMsU0FBQSxpSkFBQS9CLENBQUEsRUFBQXZDLENBQUEsT0FBQXZELENBQUEsZ0JBQUEyQyxDQUFBLFdBQUFBLEVBQUEsSUFBQWEsQ0FBQSxHQUFBQSxDQUFBLENBQUFzRSxJQUFBLENBQUFkLENBQUEsTUFBQXBFLENBQUEsV0FBQUEsRUFBQSxRQUFBb0UsQ0FBQSxHQUFBeEQsQ0FBQSxDQUFBM0YsSUFBQSxXQUFBMEYsQ0FBQSxHQUFBeUQsQ0FBQSxDQUFBbkUsSUFBQSxFQUFBbUUsQ0FBQSxLQUFBNUQsQ0FBQSxXQUFBQSxFQUFBNEQsQ0FBQSxJQUFBaEgsQ0FBQSxPQUFBOEYsQ0FBQSxHQUFBa0IsQ0FBQSxLQUFBM0QsQ0FBQSxXQUFBQSxFQUFBLFVBQUFFLENBQUEsWUFBQUMsQ0FBQSxjQUFBQSxDQUFBLDhCQUFBeEQsQ0FBQSxRQUFBOEYsQ0FBQTtBQUFBLFNBQUEzRSxtQkFBQTZGLENBQUEsV0FBQStDLGtCQUFBLENBQUEvQyxDQUFBLEtBQUFnRCxnQkFBQSxDQUFBaEQsQ0FBQSxLQUFBMEMsMkJBQUEsQ0FBQTFDLENBQUEsS0FBQWlELGtCQUFBO0FBQUEsU0FBQUEsbUJBQUEsY0FBQXBDLFNBQUE7QUFBQSxTQUFBNkIsNEJBQUExQyxDQUFBLEVBQUF6RCxDQUFBLFFBQUF5RCxDQUFBLDJCQUFBQSxDQUFBLFNBQUFrRCxpQkFBQSxDQUFBbEQsQ0FBQSxFQUFBekQsQ0FBQSxPQUFBQyxDQUFBLE1BQUEyRyxRQUFBLENBQUFyQyxJQUFBLENBQUFkLENBQUEsRUFBQW9ELEtBQUEsNkJBQUE1RyxDQUFBLElBQUF3RCxDQUFBLENBQUFxRCxXQUFBLEtBQUE3RyxDQUFBLEdBQUF3RCxDQUFBLENBQUFxRCxXQUFBLENBQUE5SSxJQUFBLGFBQUFpQyxDQUFBLGNBQUFBLENBQUEsR0FBQTdELEtBQUEsQ0FBQTJLLElBQUEsQ0FBQXRELENBQUEsb0JBQUF4RCxDQUFBLCtDQUFBK0csSUFBQSxDQUFBL0csQ0FBQSxJQUFBMEcsaUJBQUEsQ0FBQWxELENBQUEsRUFBQXpELENBQUE7QUFBQSxTQUFBeUcsaUJBQUFoRCxDQUFBLDhCQUFBQyxNQUFBLFlBQUFELENBQUEsQ0FBQUMsTUFBQSxDQUFBQyxRQUFBLGFBQUFGLENBQUEsdUJBQUFySCxLQUFBLENBQUEySyxJQUFBLENBQUF0RCxDQUFBO0FBQUEsU0FBQStDLG1CQUFBL0MsQ0FBQSxRQUFBckgsS0FBQSxDQUFBQyxPQUFBLENBQUFvSCxDQUFBLFVBQUFrRCxpQkFBQSxDQUFBbEQsQ0FBQTtBQUFBLFNBQUFrRCxrQkFBQWxELENBQUEsRUFBQXpELENBQUEsYUFBQUEsQ0FBQSxJQUFBQSxDQUFBLEdBQUF5RCxDQUFBLENBQUE5RyxNQUFBLE1BQUFxRCxDQUFBLEdBQUF5RCxDQUFBLENBQUE5RyxNQUFBLFlBQUFrRCxDQUFBLE1BQUFSLENBQUEsR0FBQWpELEtBQUEsQ0FBQTRELENBQUEsR0FBQUgsQ0FBQSxHQUFBRyxDQUFBLEVBQUFILENBQUEsSUFBQVIsQ0FBQSxDQUFBUSxDQUFBLElBQUE0RCxDQUFBLENBQUE1RCxDQUFBLFVBQUFSLENBQUE7QUFBQTRILG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFB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QyxDQUFDO1VBQUE7WUFBeEZuQixHQUFHLEdBQUF1RSxTQUFBLENBQUE5TSxDQUFBO1lBQUE4TSxTQUFBLENBQUE1UixDQUFBO1lBQUEsT0FDVXFOLEdBQUcsQ0FBQzhCLElBQUksQ0FBQyxDQUFDO1VBQUE7WUFBdkI1QixJQUFJLEdBQUFxRSxTQUFBLENBQUE5TSxDQUFBO1lBQ1Z3TSxXQUFXLEdBQUdyRCxNQUFNLEVBQUF5RCxVQUFBLEdBQUNuRSxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRWxTLElBQUksY0FBQXFXLFVBQUEsY0FBQUEsVUFBQSxHQUFJSixXQUFXLENBQUM7WUFBQ00sU0FBQSxDQUFBNVIsQ0FBQTtZQUFBO1VBQUE7WUFBQTRSLFNBQUEsQ0FBQTNWLENBQUE7WUFBQTBWLEdBQUEsR0FBQUMsU0FBQSxDQUFBOU0sQ0FBQTtVQUFBO1lBRWxEME0sY0FBYyxDQUFDLENBQUM7WUFDaEJyRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFBQTtZQUFBLE9BQUF5RyxTQUFBLENBQUFqUixDQUFBO1FBQUE7TUFBQSxHQUFBOFEsUUFBQTtJQUFBLENBQ2YsR0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9YRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7QUFDVztBQUNEO0FBQ1A7QUFDQztBQUUvQmxXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ2I3RSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvbWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvdGVhbS1idWlsZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9KYXZhU2NyaXB0L3JlZ2lzdGVyLmpzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFzczEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJfdHlwZV9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QnKTtcclxuICBjb25zdCBwYXNzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlcl90eXBlX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQnKTtcclxuICBjb25zdCByZWdpc3RlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1idG4nKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tQYXNzd29yZHMoKSB7XHJcbiAgICBpZiAocGFzczEudmFsdWUgJiYgcGFzczEudmFsdWUgPT09IHBhc3MyLnZhbHVlKSB7XHJcbiAgICAgIHJlZ2lzdGVyQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocGFzczEgJiYgcGFzczIgJiYgcmVnaXN0ZXJCdG4pIHtcclxuICAgIHBhc3MxLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tQYXNzd29yZHMpO1xyXG4gICAgcGFzczIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja1Bhc3N3b3Jkcyk7XHJcbiAgfVxyXG59KTtcclxuIiwiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWctcm9zdGVyLXRyYWNrJyk7XHJcbiAgaWYgKCF0cmFjaykgcmV0dXJuO1xyXG5cclxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19uYXYtLXByZXYnKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19uYXYtLW5leHQnKTtcclxuICBjb25zdCBzdGVwID0gMjgwOyAvLyBweCBwYXIgY2xpY1xyXG5cclxuICBjb25zdCBzY3JvbGxCeSA9IChkZWx0YSkgPT4gdHJhY2suc2Nyb2xsQnkoeyBsZWZ0OiBkZWx0YSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuICBwcmV2Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbEJ5KC1zdGVwKSk7XHJcbiAgbmV4dD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGxCeShzdGVwKSk7XHJcbn0pO1xyXG5jb25zb2xlLmxvZygnaG9tZS5qcycpO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2UtbWF0Y2gnKSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBBU1NFVF9CQVNFID0gKHdpbmRvdy5BU1NFVF9CQVNFIHx8ICcvJykucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xyXG4gIGNvbnN0IGZ1bGwgPSAocCkgPT4gQVNTRVRfQkFTRSArIFN0cmluZyhwIHx8ICcnKS5yZXBsYWNlKC9eXFwvKy8sICcnKTtcclxuXHJcbiAgY29uc3QgYm9hcmQgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcclxuICBjb25zdCBsb2dFbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGUtbG9nJyk7XHJcbiAgY29uc3QgaHVkQSAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkLWFsbGllcycpO1xyXG4gIGNvbnN0IGh1ZEUgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZC1lbmVtaWVzJyk7XHJcbiAgY29uc3QgYnRuU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXN0YXJ0Jyk7XHJcbiAgY29uc3QgYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXBhdXNlJyk7XHJcbiAgY29uc3QgYnRuUmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJlc2V0Jyk7XHJcblxyXG4gIGlmICghYm9hcmQgfHwgIWxvZ0VsIHx8ICFodWRBIHx8ICFodWRFIHx8ICFidG5TdGFydCB8fCAhYnRuUGF1c2UgfHwgIWJ0blJlc2V0KSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ01hdGNoIFVJIG1pc3NpbmcnLCB7IGJvYXJkLCBsb2dFbCwgaHVkQSwgaHVkRSwgYnRuU3RhcnQsIGJ0blBhdXNlLCBidG5SZXNldCB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IFJFUExBWSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcGxheS1qc29uJyk/LnRleHRDb250ZW50IHx8ICd7fScpO1xyXG4gIGlmICghUkVQTEFZIHx8ICFBcnJheS5pc0FycmF5KFJFUExBWS5pbml0aWFsKSkgeyBjb25zb2xlLndhcm4oJ05vIHJlcGxheSBwcm92aWRlZCcpOyByZXR1cm47IH1cclxuICBjb25zb2xlLmRlYnVnKCdSRVBMQVk6JywgUkVQTEFZLFxyXG4gICAgICAgICAgICAgICAgJ2FsbHlDb3VudD0nLCBSRVBMQVkuaW5pdGlhbC5maWx0ZXIodT0+dS50ZWFtPT09J2FsbHknKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAnZW5lbXlDb3VudD0nLCBSRVBMQVkuaW5pdGlhbC5maWx0ZXIodT0+dS50ZWFtPT09J2VuZW15JykubGVuZ3RoKTtcclxuXHJcbiAgY29uc3QgdW5pdHNCeUlkID0gbmV3IE1hcCgpOyAvLyBpZCAtPiBydW50aW1lIHVuaXRcclxuICBsZXQgdGltZXIgPSBudWxsLCBzdGVwID0gMDtcclxuICBjb25zdCBUSUNLX01TID0gNDAwO1xyXG5cclxuICBjb25zdCBjZWxsID0gKHgseSkgPT4gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZyhtc2cpeyBpZighbXNnKXJldHVybjsgY29uc3QgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZC50ZXh0Q29udGVudD1tc2c7XHJcbiAgICBsb2dFbC5hcHBlbmRDaGlsZChkKTsgbG9nRWwuc2Nyb2xsVG9wPWxvZ0VsLnNjcm9sbEhlaWdodDsgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJIVUQoKXtcclxuICAgIGNvbnN0IGxpc3QgPSAodGVhbSkgPT4gWy4uLnVuaXRzQnlJZC52YWx1ZXMoKV0uZmlsdGVyKHU9PnUudGVhbT09PXRlYW0pXHJcbiAgICAgIC5tYXAodT0+YDxsaT48aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCI+PHNwYW4+JHt1Lm5hbWV9PC9zcGFuPjxlbT4ke3UuaHB9IFBWJHt1LnNoaWVsZD4wPycg4oCiIPCfm6EnK3Uuc2hpZWxkOicnfSR7dS5tYW5hPjA/JyDigKIg8J+UtycrdS5tYW5hOicnfTwvZW0+PC9saT5gKS5qb2luKCcnKTtcclxuICAgIGh1ZEEuaW5uZXJIVE1MID0gbGlzdCgnYWxseScpOyBodWRFLmlubmVySFRNTCA9IGxpc3QoJ2VuZW15Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVCYXJzKHUpe1xyXG4gICAgdS5lbC5xdWVyeVNlbGVjdG9yKCcuaHAnKS50ZXh0Q29udGVudCA9IHUuaHA7XHJcbiAgICBjb25zdCBzaD11LmVsLnF1ZXJ5U2VsZWN0b3IoJy5zaGllbGQnKTsgaWYoc2gpeyBzaC50ZXh0Q29udGVudD11LnNoaWVsZDsgc2guc3R5bGUuZGlzcGxheT11LnNoaWVsZD4wPycnOidub25lJzsgfVxyXG4gICAgY29uc3QgbWE9dS5lbC5xdWVyeVNlbGVjdG9yKCcubWFuYScpOyAgIGlmKG1hKXsgbWEudGV4dENvbnRlbnQ9dS5tYW5hOyAgIG1hLnN0eWxlLmRpc3BsYXk9dS5tYW5hPjA/Jyc6J25vbmUnOyB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkluaXRpYWwoKXtcclxuICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykuZm9yRWFjaChjPT5jLmlubmVySFRNTD0nJyk7IGxvZ0VsLmlubmVySFRNTD0nJzsgdW5pdHNCeUlkLmNsZWFyKCk7XHJcbiAgICBmb3IoY29uc3QgdTAgb2YgUkVQTEFZLmluaXRpYWwpe1xyXG4gICAgICBjb25zdCB1ID0gey4uLnUwfTtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZWwuY2xhc3NOYW1lID0gYHVuaXQgdW5pdC0tJHt1LnRlYW19IHVuaXQtLSR7dS5jbGFzc31gO1xyXG4gICAgICBlbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGltZyBzcmM9XCIke2Z1bGwodS5pbWcpfVwiIGFsdD1cIlwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaHBcIj4ke3UuaHB9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2hpZWxkXCIke3Uuc2hpZWxkPjA/Jyc6JyBzdHlsZT1cImRpc3BsYXk6bm9uZVwiJ30+JHt1LnNoaWVsZH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYW5hXCIke3UubWFuYT4wPycnOicgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIid9PiR7dS5tYW5hfTwvc3Bhbj5gO1xyXG4gICAgICBjb25zdCBjID0gY2VsbCh1LngsIHUueSk7IGlmIChjKSBjLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgdS5lbCA9IGVsOyB1bml0c0J5SWQuc2V0KHUuaWQsIHUpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVySFVEKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhcHBseUFjdGlvbihhKXtcclxuICAgIHN3aXRjaChhLnQpe1xyXG4gICAgICBjYXNlICdtb3ZlJzoge1xyXG4gICAgICAgIGNvbnN0IHU9dW5pdHNCeUlkLmdldChhLmlkKTsgaWYoIXUpYnJlYWs7XHJcbiAgICAgICAgY29uc3QgdG89Y2VsbChhLnRvWzBdLGEudG9bMV0pOyBpZighdG8pYnJlYWs7XHJcbiAgICAgICAgdG8uYXBwZW5kQ2hpbGQodS5lbCk7IHUueD1hLnRvWzBdOyB1Lnk9YS50b1sxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdhdHRhY2snOiB7XHJcbiAgICAgICAgY29uc3QgYXR0PXVuaXRzQnlJZC5nZXQoYS5hdHQpLCBkZWY9dW5pdHNCeUlkLmdldChhLmRlZik7IGlmKCFhdHR8fCFkZWYpYnJlYWs7XHJcbiAgICAgICAgZGVmLmhwPWEuaHA7IGRlZi5zaGllbGQ9YS5zaGllbGQ7IGlmKGEubWFuYSE9PXVuZGVmaW5lZCkgYXR0Lm1hbmE9YS5tYW5hO1xyXG4gICAgICAgIHVwZGF0ZUJhcnMoZGVmKTsgdXBkYXRlQmFycyhhdHQpO1xyXG4gICAgICAgIGlmKGRlZi5ocDw9MCl7IGRlZi5lbC5jbGFzc0xpc3QuYWRkKCdrbycpOyBzZXRUaW1lb3V0KCgpPT5kZWYuZWwucmVtb3ZlKCksMTIwKTsgfVxyXG4gICAgICAgIGlmKGEubG9nKSBsb2coYS5sb2cpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2hlYWwnOiB7XHJcbiAgICAgICAgY29uc3Qgc3JjPXVuaXRzQnlJZC5nZXQoYS5zcmMpLCBkc3Q9dW5pdHNCeUlkLmdldChhLmRzdCk7IGlmKCFzcmN8fCFkc3QpYnJlYWs7XHJcbiAgICAgICAgaWYoYS5tYW5hIT09dW5kZWZpbmVkKSBzcmMubWFuYT1hLm1hbmE7XHJcbiAgICAgICAgZHN0LmhwPU1hdGgubWluKGRzdC5tYXhIcCwoZHN0LmhwPz8wKSsoYS5hbW91bnQ/PzApKTtcclxuICAgICAgICB1cGRhdGVCYXJzKHNyYyk7IHVwZGF0ZUJhcnMoZHN0KTsgaWYoYS5sb2cpIGxvZyhhLmxvZyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbG9nJzogaWYoYS5tc2cpIGxvZyhhLm1zZyk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVRpY2soKXtcclxuICAgIGlmKHN0ZXAgPj0gKFJFUExBWS5hY3Rpb25zPy5sZW5ndGggfHwgMCkpe1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDtcclxuICAgICAgY29uc3Qgb3V0Y29tZSA9IFJFUExBWS53aW5uZXI9PT0nYWxseScgPyAndmljdG9yeScgOiBSRVBMQVkud2lubmVyPT09J2VuZW15JyA/ICdkZWZlYXQnIDogJ2RyYXcnO1xyXG4gICAgICBsb2cob3V0Y29tZT09PSd2aWN0b3J5Jz8nVmljdG9pcmUgISc6b3V0Y29tZT09PSdkZWZlYXQnPydEw6lmYWl0ZeKApic6J8OJZ2FsaXTDqSAhJyk7XHJcbiAgICAgIC8vIHNob3cgb3ZlcmxheVxyXG4gICAgICBjb25zdCBvdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtb3ZlcmxheScpO1xyXG4gICAgICBjb25zdCB0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtdGV4dCcpO1xyXG4gICAgICBjb25zdCBidG5DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXN1bHQtY29udGludWUnKTtcclxuICAgICAgY29uc3QgYnRuUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtc291bmQtdG9nZ2xlJyk7XHJcbiAgICAgIGlmIChvdiAmJiB0eCkge1xyXG4gICAgICAgIG92LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIG92LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpY3RvcnknLCBvdXRjb21lPT09J3ZpY3RvcnknKTtcclxuICAgICAgICBvdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1kZWZlYXQnLCBvdXRjb21lPT09J2RlZmVhdCcpO1xyXG4gICAgICAgIHR4LnRleHRDb250ZW50ID0gb3V0Y29tZT09PSd2aWN0b3J5JyA/ICdWSUNUT0lSRScgOiBvdXRjb21lPT09J2RlZmVhdCcgPyAnRMOJRkFJVEUnIDogJ8OJR0FMSVTDiSc7XHJcblxyXG4gICAgICAgIC8vIFNvdW5kIEZYIChXZWJBdWRpbyBzaW1wbGUgdG9uZXMpXHJcbiAgICAgICAgbGV0IGF1ZGlvRW5hYmxlZCA9IGZhbHNlLCBjdHggPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlKaW5nbGUoa2luZCl7XHJcbiAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGlmKCFhdWRpb0VuYWJsZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYoIWN0eCkgY3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0fHx3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBjdHguY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzID0ga2luZD09PSd2aWN0b3J5JyA/IFs1MjMsNjU5LDc4NF0gOiBraW5kPT09J2RlZmVhdCcgPyBbMzkyLDM0OSwyNjFdIDogWzQ0MCw0NDAsNDQwXTtcclxuICAgICAgICAgICAgbm90ZXMuZm9yRWFjaCgoZixpKT0+e1xyXG4gICAgICAgICAgICAgIGNvbnN0IG8gPSBjdHguY3JlYXRlT3NjaWxsYXRvcigpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlR2FpbigpO1xyXG4gICAgICAgICAgICAgIG8udHlwZT0nc2luZSc7IG8uZnJlcXVlbmN5LnZhbHVlPWY7XHJcbiAgICAgICAgICAgICAgby5jb25uZWN0KGcpOyBnLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICBjb25zdCB0ID0gbm93ICsgaSowLjE4OyBnLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDEsdCk7IGcuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMix0KzAuMDIpOyBnLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSx0KzAuMyk7XHJcbiAgICAgICAgICAgICAgby5zdGFydCh0KTsgby5zdG9wKHQrMC4zMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfWNhdGNoKGUpeyBjb25zb2xlLmRlYnVnKCdhdWRpbyBmYWlsZWQnLCBlKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuUykge1xyXG4gICAgICAgICAgYnRuUy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgYXVkaW9FbmFibGVkID0gIWF1ZGlvRW5hYmxlZDtcclxuICAgICAgICAgICAgYnRuUy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGF1ZGlvRW5hYmxlZD8gJ3RydWUnOidmYWxzZScpO1xyXG4gICAgICAgICAgICBpZihhdWRpb0VuYWJsZWQpeyBwbGF5SmluZ2xlKG91dGNvbWUpOyB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnRpbnVlIGJ1dHRvbiBvciBjbGljayBhbnl3aGVyZSBvbiB2ZWlsXHJcbiAgICAgICAgY29uc3QgaGlkZSA9ICgpPT4gb3YuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgaWYoYnRuQykgYnRuQy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUsIHsgb25jZTp0cnVlIH0pO1xyXG4gICAgICAgIG92LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtdmVpbCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUsIHsgb25jZTp0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGFwcGx5QWN0aW9uKFJFUExBWS5hY3Rpb25zW3N0ZXArK10pOyByZW5kZXJIVUQoKTtcclxuICB9XHJcblxyXG4gIGJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgaWYoIXRpbWVyKSB0aW1lcj1zZXRJbnRlcnZhbChwbGF5VGljayxUSUNLX01TKTsgfSk7XHJcbiAgYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyBpZih0aW1lcil7IGNsZWFySW50ZXJ2YWwodGltZXIpOyB0aW1lcj1udWxsOyB9IH0pO1xyXG4gIGJ0blJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgaWYodGltZXIpeyBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDsgfSBzdGVwPTA7IHNwYXduSW5pdGlhbCgpOyB9KTtcclxuXHJcbiAgc3Bhd25Jbml0aWFsKCk7XHJcbn0pO1xyXG4iLCIvLyB0ZWFtLWJ1aWxkZXIuanNcclxuXHJcbi8vIGJhc2UgZGVzIGFzc2V0cyBmb3VybmllIHBhciBUd2lnOiB3aW5kb3cuQVNTRVRfQkFTRSA9IFwie3sgYXNzZXQoJycpIH19XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IEFTU0VUX0JBU0UgPSAod2luZG93LkFTU0VUX0JBU0UgfHwgJy8nKS5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XHJcbiAgY29uc3QgZnVsbEltZyA9IChwKSA9PiBBU1NFVF9CQVNFICsgU3RyaW5nKHAgfHwgJycpLnJlcGxhY2UoL15cXC8rLywgJycpO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKCdUZWFtIEJ1aWxkZXIgc2NyaXB0IGxvYWRlZCEnLCB7IEFTU0VUX0JBU0UgfSk7XHJcbiAgY29uc3Qgb3duZWRFbCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293bmVkLWdpcmxzLWpzb24nKTtcclxuICBjb25zdCBzdWdnZXN0ZWRFbCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VnZ2VzdGVkLWdpcmxzLWpzb24nKTtcclxuICBpZiAoIW93bmVkRWwpIHJldHVybjtcclxuXHJcbiAgLyoqIEB0eXBlIHtBcnJheX0gKi9cclxuICBjb25zdCBPV05FRCAgICAgICAgPSBKU09OLnBhcnNlKG93bmVkRWwudGV4dENvbnRlbnQgfHwgJ1tdJyk7XHJcbiAgLyoqIEB0eXBlIHtBcnJheX0gKi9cclxuICBjb25zdCBTVUdHRVNURUQgICAgPSBzdWdnZXN0ZWRFbCA/IEpTT04ucGFyc2Uoc3VnZ2VzdGVkRWwudGV4dENvbnRlbnQgfHwgJ1tdJykgOiBbXTtcclxuXHJcbiAgY29uc3QgcGlja0dyaWQgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY2stZ3JpZCcpO1xyXG4gIGNvbnN0IGJlbmNoR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZW5jaC1ncmlkJyk7XHJcbiAgY29uc3QgYm9hcmQgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XHJcbiAgY29uc3QgYnRuUmVyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXJvbGwnKTtcclxuICBjb25zdCByZXJvbGxDb3VudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlcm9sbC1jb3VudCcpO1xyXG4gIGNvbnN0IGJ0bkxvY2sgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9jaycpO1xyXG4gIGNvbnN0IGJvbnVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLWJvbnVzZXMnKTtcclxuICBjb25zdCBza2VsZXRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXNrZWxldG9uJyk7XHJcblxyXG4gIGNvbnN0IE1BWF9URUFNICA9IDQ7XHJcbiAgY29uc3QgcGxhY2VkICAgID0gbmV3IE1hcCgpOyAvLyBcIngseVwiIC0+IHsgZ2lybCwgZWwgfVxyXG4gIGNvbnN0IGluQmVuY2ggICA9IG5ldyBNYXAoKTsgLy8gZ2lybElkIC0+IGNhcmRFbGVtZW50XHJcblxyXG4gIC8vIGhlbHBlcnNcclxuICBjb25zdCByYW5kSW50ID0gKG4pID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xyXG4gIGNvbnN0IHBpY2tOID0gKGFyciwgbikgPT4ge1xyXG4gICAgY29uc3QgcG9vbCA9IFsuLi5hcnJdLCBvdXQgPSBbXTtcclxuICAgIHdoaWxlIChvdXQubGVuZ3RoIDwgTWF0aC5taW4obiwgcG9vbC5sZW5ndGgpKSB7XHJcbiAgICAgIG91dC5wdXNoKHBvb2wuc3BsaWNlKHJhbmRJbnQocG9vbC5sZW5ndGgpLCAxKVswXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH07XHJcbiAgY29uc3QgY2VsbEtleSA9ICh4LCB5KSA9PiBgJHt4fSwke3l9YDtcclxuXHJcbiAgLy8gLS0tLSBVSSByZW5kZXJlcnMgLS0tLVxyXG4gIGZ1bmN0aW9uIHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2UgfSkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSBgdGItY2FyZCB0Yi1jYXJkLS0ke2dpcmwuY2xhc3N9YDtcclxuICAgIGNhcmQuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGNhcmQuZGF0YXNldC5pZCA9IGdpcmwuaWQ7XHJcbiAgICBjYXJkLmRhdGFzZXQuc291cmNlID0gc291cmNlO1xyXG5cclxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9faW1nXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX21ldGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fbmFtZVwiPiR7Z2lybC5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX190YWdzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfVwiPiR7Y2xhc3NMYWJlbChnaXJsLmNsYXNzKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyB0YWctZmFtaWx5XCI+JHtnaXJsLmZhbWlseSA/PyAnJ308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fc3RhdHNcIj5cclxuICAgICAgICA8c3Bhbj5QViAke2dpcmwucGR2fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5BVEsgJHtnaXJsLmF0a308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+UFJDICR7TWF0aC5yb3VuZCgoZ2lybC5jaGFuY2VfYXRrID8/IDApICogMTAwKX0lPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkoZ2lybCkpO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gY2FyZC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpKTtcclxuICAgIH0pO1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpKTtcclxuXHJcbiAgICAvLyBkb3VibGUtY2xpYyAtPiB0b2dnbGUgYmFuY1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gVG9nZ2xlIGJhbmM6IHNpIGTDqWrDoCBkYW5zIGxlIGJhbmMgLT4gb24gbGUgbGFpc3NlIGFmZmljaMOpIG1haXMgb24gbGUgbWFycXVlIGNvbW1lIG5vbi1wcsOpc2VydsOpXHJcbiAgICAgIGlmIChjYXJkLnBhcmVudEVsZW1lbnQgPT09IGJlbmNoR3JpZCkge1xyXG4gICAgICAgIC8vIFJldHJhaXQgZHUgYmFuYzogb24gbGUgcmVtZXQgZGFucyBzb24gY29udGVuZXVyIHNvdXJjZSBzaSBwb3NzaWJsZSwgc2lub24gb24gbGUgc3VwcHJpbWUgcHJvcHJlbWVudFxyXG4gICAgICAgIGluQmVuY2guZGVsZXRlKGdpcmwuaWQpO1xyXG4gICAgICAgIC8vIETDqXBsYWNlciBsYSBjYXJ0ZSB2ZXJzIGxhIHpvbmUgZGUgcGljayBwb3VyIGxhIHJlbmRyZSByZXJvbGxhYmxlXHJcbiAgICAgICAgaWYgKHBpY2tHcmlkKSBwaWNrR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBlbHNlIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQWpvdXQgYXUgYmFuY1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZUNoaXAoZ2lybCkge1xyXG4gICAgY29uc3QgY2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hpcC5jbGFzc05hbWUgPSBgY2hpcCAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfWA7XHJcbiAgICBjaGlwLnRpdGxlID0gZ2lybC5uYW1lO1xyXG4gICAgY2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgY2hpcC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPjxzcGFuPiR7Z2lybC5uYW1lfTwvc3Bhbj5gO1xyXG5cclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KGdpcmwpKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGNoaXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKSk7XHJcbiAgICB9KTtcclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKSk7XHJcblxyXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IGNoaXAucGFyZW50RWxlbWVudD8uY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgICAgaWYgKGNlbGwpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBjZWxsS2V5KGNlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueSk7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpbkJlbmNoLmhhcyhnaXJsLmlkKSkge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pO1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjaGlwO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBpY2soKSB7XHJcbiAgcGlja0dyaWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IHBvb2wgPSBTVUdHRVNURUQubGVuZ3RoID8gWy4uLlNVR0dFU1RFRF0gOiBbLi4uT1dORURdO1xyXG4gIGlmIChwb29sLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAvLyBvbiBkdXBsaXF1ZSBzaSA8IDRcclxuICB3aGlsZSAocG9vbC5sZW5ndGggPCA0KSBwb29sID0gcG9vbC5jb25jYXQocG9vbCk7XHJcblxyXG4gIC8vIEV4Y2x1cmUgY2V1eCBkw6lqw6AgYXUgYmFuYyAocHLDqXNlcnbDqXMpIGR1IHRpcmFnZVxyXG4gIGNvbnN0IHByZXNlcnZlZElkcyA9IG5ldyBTZXQoQXJyYXkuZnJvbShpbkJlbmNoLmtleXMoKSkpO1xyXG4gIGNvbnN0IHBvb2wyID0gcG9vbC5maWx0ZXIoZyA9PiAhcHJlc2VydmVkSWRzLmhhcyhnLmlkKSk7XHJcblxyXG4gIC8vIFPDqWxlY3Rpb25uZSBqdXNxdSfDoCA0IHN1Z2dlc3Rpb25zIHVuaXF1ZXMgcGFybWkgbGUgcG9vbCByZXN0YW50XHJcbiAgY29uc3QgcGlja3MgPSBbXTtcclxuICBjb25zdCB0YWtlbiA9IG5ldyBTZXQoKTtcclxuICBjb25zdCB0YXJnZXQgPSBNYXRoLm1pbig0LCBwb29sMi5sZW5ndGgpO1xyXG4gIHdoaWxlIChwaWNrcy5sZW5ndGggPCB0YXJnZXQgJiYgdGFrZW4uc2l6ZSA8IHBvb2wyLmxlbmd0aCkge1xyXG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wyLmxlbmd0aCk7XHJcbiAgICBpZiAoIXRha2VuLmhhcyhpKSkgeyB0YWtlbi5hZGQoaSk7IHBpY2tzLnB1c2gocG9vbDJbaV0pOyB9XHJcbiAgfVxyXG4gIHBpY2tzLmZvckVhY2goZyA9PiBwaWNrR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGcsIHsgc291cmNlOiAncGljaycgfSkpKTtcclxufVxyXG4gIGZ1bmN0aW9uIGNsYXNzVGFnKGNscykge1xyXG4gICAgc3dpdGNoIChjbHMpIHtcclxuICAgICAgY2FzZSAnZHBzX21lbGVlJzogIHJldHVybiAndGFnLW1lbGVlJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAndGFnLXJhbmdlZCc7XHJcbiAgICAgIGNhc2UgJ3RhbmsnOiAgICAgICByZXR1cm4gJ3RhZy10YW5rJztcclxuICAgICAgY2FzZSAnaGVhbGVyJzogICAgIHJldHVybiAndGFnLWhlYWwnO1xyXG4gICAgICBkZWZhdWx0OiAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBjbGFzc0xhYmVsKGNscykge1xyXG4gICAgc3dpdGNoIChjbHMpIHtcclxuICAgICAgY2FzZSAnZHBzX21lbGVlJzogIHJldHVybiAnRFBTIEPDoEMnO1xyXG4gICAgICBjYXNlICdkcHNfcmFuZ2VkJzogcmV0dXJuICdEUFMgZGlzdGFuY2UnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICdUYW5rJztcclxuICAgICAgY2FzZSAnaGVhbGVyJzogICAgIHJldHVybiAnSGVhbGVyJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiBjbHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tIERuRCBib2FyZCAtLS0tXHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2VsbCcpO1xyXG4gICAgaWYgKCFjZWxsKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBjZWxsLmRhdGFzZXQ7XHJcbiAgICBjb25zdCBrZXkgPSBjZWxsS2V5KHgsIHkpO1xyXG5cclxuICAgIGNvbnN0IGRyYWdnaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRiLWNhcmQuZHJhZ2dpbmcsIC5jaGlwLmRyYWdnaW5nJyk7XHJcbiAgICBpZiAoIWRyYWdnaW5nKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZ2lybCA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpIHx8ICd7fScpO1xyXG5cclxuICAgIC8vIHNpIG3Dqm1lIGjDqXJvIGTDqWrDoCBwbGFjw6kgYWlsbGV1cnMgLT4gbGliw6hyZSBs4oCZYW5jaWVubmUgY2VsbHVsZVxyXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgcGxhY2VkKSB7XHJcbiAgICAgIGlmICh2LmdpcmwuaWQgPT09IGdpcmwuaWQpIHtcclxuICAgICAgICBwbGFjZWQuZGVsZXRlKGspO1xyXG4gICAgICAgIGNvbnN0IG9sZENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKG9sZENlbGwpIG9sZENlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBsaW1pdGUgw6lxdWlwZVxyXG4gICAgaWYgKCFwbGFjZWQuaGFzKGtleSkgJiYgcGxhY2VkLnNpemUgPj0gTUFYX1RFQU0pIHJldHVybjtcclxuXHJcbiAgICAvLyBzd2FwIHNpIGxhIGNlbGx1bGUgw6l0YWl0IG9jY3Vww6llXHJcbiAgICBpZiAocGxhY2VkLmhhcyhrZXkpKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gcGxhY2VkLmdldChrZXkpO1xyXG4gICAgICBpZiAoZXhpc3Rpbmc/LmVsKSB7XHJcbiAgICAgICAgYmVuY2hHcmlkLmFwcGVuZENoaWxkKHJlbmRlckNhcmQoZXhpc3RpbmcuZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSkpO1xyXG4gICAgICAgIGluQmVuY2guc2V0KGV4aXN0aW5nLmdpcmwuaWQsIGJlbmNoR3JpZC5sYXN0RWxlbWVudENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICBwbGFjZWQuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hpcCA9IG1ha2VDaGlwKGdpcmwpO1xyXG4gICAgY2VsbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2hpcCk7XHJcbiAgICBwbGFjZWQuc2V0KGtleSwgeyBnaXJsLCBlbDogY2hpcCB9KTtcclxuICAgIHVwZGF0ZUxvY2tTdGF0ZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAtLS0tIERuRCBiZW5jaCAtLS0tXHJcbiAgYmVuY2hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgYmVuY2hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZ2lybCA9IEpTT04ucGFyc2UoZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpIHx8ICd7fScpO1xyXG5cclxuICAgIC8vIHJldGlyZSBkdSBib2FyZCBzaSBwcsOpc2VudGVcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHBsYWNlZCkge1xyXG4gICAgICBpZiAodi5naXJsLmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7ay5zcGxpdCgnLCcpWzBdfVwiXVtkYXRhLXk9XCIke2suc3BsaXQoJywnKVsxXX1cIl1gKTtcclxuICAgICAgICBpZiAoYykgYy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwbGFjZWQuZGVsZXRlKGspO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbkJlbmNoLmhhcyhnaXJsLmlkKSkge1xyXG4gICAgICBjb25zdCBjYXJkID0gcmVuZGVyQ2FyZChnaXJsLCB7IHNvdXJjZTogJ2JlbmNoJyB9KTtcclxuICAgICAgYmVuY2hHcmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUxvY2tTdGF0ZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvLyAtLS0tIGFjdGlvbnMgLS0tLVxyXG5sZXQgdGlja2V0SWQgPSBudWxsO1xyXG5sZXQgcG9sbFRpbWVyID0gbnVsbDtcclxuXHJcbmJ0bkxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKHNrZWxldG9uKSB7IHNrZWxldG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpOyBza2VsZXRvbi5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7IH1cclxuICAvLyBidWlsZCBwYXlsb2FkXHJcbiAgY29uc3QgbGluZXVwID0gQXJyYXkuZnJvbShwbGFjZWQuZW50cmllcygpKS5tYXAoKFtrZXksIHZhbF0pID0+IHtcclxuICAgIGNvbnN0IFt4LCB5XSA9IGtleS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gICAgcmV0dXJuIHsgaWQ6IHZhbC5naXJsLmlkLCB4LCB5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFNUQVJUX1VSTCAgPSB3aW5kb3cuTU0/LnN0YXJ0ICA/PyAnL21hdGNobWFraW5nL3N0YXJ0JztcclxuICBjb25zdCBTVEFUVVNfVFBMID0gd2luZG93Lk1NPy5zdGF0dXMgPz8gJy9tYXRjaG1ha2luZy9zdGF0dXMvX19JRF9fJztcclxuICBjb25zdCBzdGF0dXNVcmwgID0gKGlkKSA9PiBTVEFUVVNfVFBMLnJlcGxhY2UoJ19fSURfXycsIFN0cmluZyhpZCkpO1xyXG5cclxuICBjb25zb2xlLmxvZygnQ2FsbGluZyBTVEFSVF9VUkwgPScsIFNUQVJUX1VSTCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgID0gYXdhaXQgZmV0Y2goU1RBUlRfVVJMLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGluZXVwIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgIGxldCBkYXRhO1xyXG4gICAgdHJ5IHsgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7IH0gY2F0Y2ggeyBkYXRhID0gbnVsbDsgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdtYXRjaG1ha2luZy9zdGFydCAtPicsIHJlcy5zdGF0dXMsIGRhdGEgPz8gdGV4dCk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgYWxlcnQoYE1hdGNobWFraW5nIGZhaWxlZCAoJHtyZXMuc3RhdHVzfSk6XFxuJHtkYXRhPy5lcnJvciA/PyB0ZXh0fWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEgfHwgKGRhdGEuc3RhdHVzICE9PSAnbWF0Y2hlZCcgJiYgZGF0YS5zdGF0dXMgIT09ICdxdWV1ZWQnKSkge1xyXG4gICAgICBhbGVydCgnUsOpcG9uc2UgaW5hdHRlbmR1ZTpcXG4nICsgKGRhdGEgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IHRleHQpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ21hdGNoZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9tYXRjaC8ke2RhdGEubWF0Y2hJZH1gO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcXVldWVkIC0+IHBvbGwgc3RhdHVzXHJcbiAgICB0aWNrZXRJZCA9IGRhdGEudGlja2V0SWQ7XHJcbiAgICBidG5Mb2NrLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGJ0bkxvY2sudGV4dENvbnRlbnQgPSAn8J+UjiBSZWNoZXJjaGUgZW4gY291cnPigKYnO1xyXG5cclxuICAgIHBvbGxUaW1lciA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgciA9IGF3YWl0IGZldGNoKHN0YXR1c1VybCh0aWNrZXRJZCksIHsgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSk7XHJcbiAgICAgIGNvbnN0IGogPSBhd2FpdCByLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ21hdGNobWFraW5nL3N0YXR1cyAtPicsIGopO1xyXG4gICAgICBpZiAoai5zdGF0dXMgPT09ICdtYXRjaGVkJykge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwocG9sbFRpbWVyKTtcclxuICAgIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7IHNrZWxldG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpOyB9XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL21hdGNoLyR7ai5tYXRjaElkfWA7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMDApO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICBhbGVydCgnRXJyZXVyIHLDqXNlYXU6ICcgKyBlLm1lc3NhZ2UpO1xyXG4gIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7IHNrZWxldG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpOyB9XHJcbiAgfVxyXG59KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlTG9ja1N0YXRlKCkge1xyXG4gICAgYnRuTG9jay5kaXNhYmxlZCA9IChwbGFjZWQuc2l6ZSAhPT0gTUFYX1RFQU0pO1xyXG4gICAgcmVuZGVyQm9udXNlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIFN5bmVyZ3kgY29tcHV0YXRpb24gKGNsaWVudC1zaWRlIG1pcnJvciBvZiBzZXJ2ZXIgdGllcnMpIC0tLVxyXG4gIGZ1bmN0aW9uIGNvbXB1dGVCb251c2VzKCkge1xyXG4gICAgY29uc3QgY291bnRzID0ge307IC8vIGZhbWlseSAtPiBjb3VudFxyXG4gICAgZm9yIChjb25zdCBbLCB7Z2lybH1dIG9mIHBsYWNlZCkge1xyXG4gICAgICBjb25zdCBmYW0gPSAoZ2lybC5mYW1pbHkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmICghZmFtKSBjb250aW51ZTsgY291bnRzW2ZhbV0gPSAoY291bnRzW2ZhbV0gfHwgMCkgKyAxO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGllcnMgPSB7fTtcclxuICAgIGZvciAoY29uc3QgW2ZhbSwgbl0gb2YgT2JqZWN0LmVudHJpZXMoY291bnRzKSkge1xyXG4gICAgICBjb25zdCB0aWVyID0gbiA+PSA0ID8gNCA6IChuID49IDMgPyAzIDogKG4gPj0gMiA/IDIgOiAwKSk7XHJcbiAgICAgIGlmICh0aWVyID09PSAwKSBjb250aW51ZTsgdGllcnNbZmFtXSA9IHsgbiwgdGllciB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpZXJzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyQm9udXNlcygpIHtcclxuICAgIGlmICghYm9udXNMaXN0KSByZXR1cm47XHJcbiAgICBjb25zdCB0aWVycyA9IGNvbXB1dGVCb251c2VzKCk7XHJcbiAgICBib251c0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBsYWJlbCA9IChmYW0sIHRpZXIsIG4pID0+IHtcclxuICAgICAgY29uc3QgbWFwID0ge1xyXG4gICAgICAgIHNvbGVpbDogezI6J0FUSyArNSUnLDM6J1Byw6ljaXNpb24gKzUlJyw0OidDcml0ICs1JSd9LFxyXG4gICAgICAgIGx1bmU6ICAgezI6J0VzcXVpdmUgKzMlJywzOidFc3F1aXZlICsyJSAmIE1hbmEgKzEwJyw0OidCb3VjbGllciArMTAnfSxcclxuICAgICAgICBuYXR1cmU6IHsyOidQViArNSUnLDM6J0JvdWNsaWVyICsxNScsNDonUFYgKzUlJ30sXHJcbiAgICAgICAgaWRvbGU6ICB7MjonQ3JpdCArNSUnLDM6J0FUSyArNSUnLDQ6J01hbmEgKzEwJ30sXHJcbiAgICAgICAgb21icmU6ICB7MjonRXNxdWl2ZSArNSUnLDM6J1Byw6ljaXNpb24gKzUlJyw0OidCb3VjbGllciArMTUnfSxcclxuICAgICAgICBhcmNhbmU6IHsyOidQcsOpY2lzaW9uICs1JScsMzonTWFuYSArMTUnLDQ6J0NyaXQgKzUlJ30sXHJcbiAgICAgICAgZXRvaWxlOiB7MjonUHLDqWNpc2lvbiArMyUnLDM6J0NyaXQgKzUlJyw0OidBVEsgKzUlJ30sXHJcbiAgICAgICAgb2NlYW46ICB7MjonRXNxdWl2ZSArMyUnLDM6J01hbmEgKzEwJyw0OidQcsOpY2lzaW9uICs1JSd9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGVmZmVjdCA9IChtYXBbZmFtXSAmJiBtYXBbZmFtXVt0aWVyXSkgPyBtYXBbZmFtXVt0aWVyXSA6IGBQYWxpZXIgJHt0aWVyfWA7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZmFtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmFtLnNsaWNlKDEpO1xyXG4gICAgICByZXR1cm4gYCR7dGl0bGV9IHgke259IOKAlCAke2VmZmVjdH1gO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IElDT04gPSB7IHNvbGVpbDon4piA77iPJywgbHVuZTon8J+MmScsIG5hdHVyZTon8J+NgycsIGlkb2xlOifwn461Jywgb21icmU6J/CfjJEnLCBhcmNhbmU6J+KcqCcsIGV0b2lsZTon4q2QJywgb2NlYW46J/CfjIonIH07XHJcbiAgICBPYmplY3QuZW50cmllcyh0aWVycykuZm9yRWFjaCgoW2ZhbSwge3RpZXIsIG59XSkgPT4ge1xyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmNsYXNzTmFtZSA9IGBib251cy1pdGVtIGZhbS0ke2ZhbX0gdGllci0ke3RpZXJ9YDtcclxuICAgICAgY29uc3QgdGl0bGUgPSBmYW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBmYW0uc2xpY2UoMSk7XHJcbiAgICAgIGNvbnN0IGVmZmVjdFRleHQgPSBsYWJlbChmYW0sIHRpZXIsIG4pLnNwbGl0KCcg4oCUICcpLnBvcCgpO1xyXG4gICAgICBjb25zdCBwY3QgPSBNYXRoLm1pbigxMDAsIE1hdGgucm91bmQoKG4gLyA0KSAqIDEwMCkpO1xyXG4gICAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYW0taWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiR7SUNPTltmYW1dIHx8ICfinKcnfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhbS1uYW1lXCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudFwiPngke259PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYXVnZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjRcIiBhcmlhLXZhbHVlbm93PVwiJHtufVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiIHN0eWxlPVwid2lkdGg6JHtwY3R9JVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZWZmZWN0XCI+JHtlZmZlY3RUZXh0fTwvc3Bhbj5cclxuICAgICAgYDtcclxuICAgICAgYm9udXNMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdFxyXG4gIHJlbmRlclBpY2soKTtcclxuICByZW5kZXJCb251c2VzKCk7XHJcblxyXG4gIC8vIC0tLSBSZXJvbGwgbGltaXTDqSDDoCAzIC0tLVxyXG4gIGxldCByZXJvbGxzTGVmdCA9IE51bWJlcih3aW5kb3cuUkVST0xMU19MRUZUID8/IDMpO1xyXG4gIGNvbnN0IHVwZGF0ZVJlcm9sbFVJID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlcm9sbENvdW50RWwpIHJlcm9sbENvdW50RWwudGV4dENvbnRlbnQgPSBgKCR7cmVyb2xsc0xlZnR9IHJlc3RhbnQke3Jlcm9sbHNMZWZ0PjE/J3MnOicnfSlgO1xyXG4gICAgaWYgKGJ0blJlcm9sbCkgYnRuUmVyb2xsLmRpc2FibGVkID0gcmVyb2xsc0xlZnQgPD0gMDtcclxuICB9O1xyXG4gIHVwZGF0ZVJlcm9sbFVJKCk7XHJcbiAgaWYgKGJ0blJlcm9sbCkge1xyXG4gICAgYnRuUmVyb2xsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocmVyb2xsc0xlZnQgPD0gMCkgcmV0dXJuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHdpbmRvdy5SRVJPTExfREVDX1VSTCwgeyBtZXRob2Q6ICdQT1NUJywgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmVyb2xsc0xlZnQgPSBOdW1iZXIoZGF0YT8ubGVmdCA/PyByZXJvbGxzTGVmdCk7XHJcbiAgICAgIH0gY2F0Y2gge31cclxuICAgICAgdXBkYXRlUmVyb2xsVUkoKTtcclxuICAgICAgcmVuZGVyUGljaygpOyAvLyBwYXMgZGUgcmVsb2FkIC0+IHBhcyBkZSBjbGlnbm90ZW1lbnRcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L3RlYW0tYnVpbGRlci5qcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L0luc2NyaXB0aW9uLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvaG9tZS5qcyc7XHJcbmltcG9ydCAnLi9KYXZhU2NyaXB0L21hdGNoLmpzJzsgXHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzczEiLCJnZXRFbGVtZW50QnlJZCIsInBhc3MyIiwicmVnaXN0ZXJCdG4iLCJjaGVja1Bhc3N3b3JkcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJ0cmFjayIsInByZXYiLCJxdWVyeVNlbGVjdG9yIiwibmV4dCIsInN0ZXAiLCJzY3JvbGxCeSIsImRlbHRhIiwibGVmdCIsImJlaGF2aW9yIiwiY29uc29sZSIsImxvZyIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsImJvZHkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIkFTU0VUX0JBU0UiLCJ3aW5kb3ciLCJyZXBsYWNlIiwiZnVsbCIsInAiLCJTdHJpbmciLCJib2FyZCIsImxvZ0VsIiwiaHVkQSIsImh1ZEUiLCJidG5TdGFydCIsImJ0blBhdXNlIiwiYnRuUmVzZXQiLCJ3YXJuIiwiUkVQTEFZIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJpbml0aWFsIiwiZGVidWciLCJmaWx0ZXIiLCJ1IiwidGVhbSIsImxlbmd0aCIsInVuaXRzQnlJZCIsIk1hcCIsInRpbWVyIiwiVElDS19NUyIsImNlbGwiLCJ4IiwieSIsImNvbmNhdCIsIm1zZyIsImQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJyZW5kZXJIVUQiLCJsaXN0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidmFsdWVzIiwibWFwIiwiaW1nIiwibmFtZSIsImhwIiwic2hpZWxkIiwibWFuYSIsImpvaW4iLCJpbm5lckhUTUwiLCJ1cGRhdGVCYXJzIiwiZWwiLCJzaCIsInN0eWxlIiwiZGlzcGxheSIsIm1hIiwic3Bhd25Jbml0aWFsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjIiwiY2xlYXIiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwidTAiLCJfb2JqZWN0U3ByZWFkIiwiY2xhc3NOYW1lIiwic2V0IiwiaWQiLCJlcnIiLCJlIiwiZiIsImFwcGx5QWN0aW9uIiwiYSIsInQiLCJnZXQiLCJ0byIsImF0dCIsImRlZiIsInVuZGVmaW5lZCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJfZHN0JGhwIiwiX2EkYW1vdW50Iiwic3JjIiwiZHN0IiwiTWF0aCIsIm1pbiIsIm1heEhwIiwiYW1vdW50IiwicGxheVRpY2siLCJfUkVQTEFZJGFjdGlvbnMiLCJhY3Rpb25zIiwiY2xlYXJJbnRlcnZhbCIsIm91dGNvbWUiLCJ3aW5uZXIiLCJvdiIsInR4IiwiYnRuQyIsImJ0blMiLCJfb3YkcXVlcnlTZWxlY3RvciIsInBsYXlKaW5nbGUiLCJraW5kIiwiYXVkaW9FbmFibGVkIiwiY3R4IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0Iiwibm93IiwiY3VycmVudFRpbWUiLCJub3RlcyIsImkiLCJvIiwiY3JlYXRlT3NjaWxsYXRvciIsImciLCJjcmVhdGVHYWluIiwidHlwZSIsImZyZXF1ZW5jeSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUiLCJzdGFydCIsInN0b3AiLCJ0b2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJoaWRlIiwib25jZSIsInNldEludGVydmFsIiwiciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidG9TdHJpbmdUYWciLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiRyIsInYiLCJiaW5kIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJwdXNoIiwiX24iLCJGIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiZnJvbSIsInRlc3QiLCJyZXF1aXJlIiwiX3dpbmRvdyRSRVJPTExTX0xFRlQiLCJmdWxsSW1nIiwib3duZWRFbCIsInN1Z2dlc3RlZEVsIiwiT1dORUQiLCJTVUdHRVNURUQiLCJwaWNrR3JpZCIsImJlbmNoR3JpZCIsImJ0blJlcm9sbCIsInJlcm9sbENvdW50RWwiLCJidG5Mb2NrIiwiYm9udXNMaXN0Iiwic2tlbGV0b24iLCJNQVhfVEVBTSIsInBsYWNlZCIsImluQmVuY2giLCJyYW5kSW50IiwiZmxvb3IiLCJyYW5kb20iLCJwaWNrTiIsImFyciIsInBvb2wiLCJvdXQiLCJzcGxpY2UiLCJjZWxsS2V5IiwicmVuZGVyQ2FyZCIsImdpcmwiLCJfcmVmIiwiX2dpcmwkZmFtaWx5IiwiX2dpcmwkY2hhbmNlX2F0ayIsInNvdXJjZSIsImNhcmQiLCJkcmFnZ2FibGUiLCJkYXRhc2V0IiwiY2xhc3NUYWciLCJjbGFzc0xhYmVsIiwiZmFtaWx5IiwicGR2IiwiYXRrIiwicm91bmQiLCJjaGFuY2VfYXRrIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInN0cmluZ2lmeSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhcmVudEVsZW1lbnQiLCJ1cGRhdGVMb2NrU3RhdGUiLCJtYWtlQ2hpcCIsImNoaXAiLCJ0aXRsZSIsIl9jaGlwJHBhcmVudEVsZW1lbnQiLCJjbG9zZXN0Iiwia2V5IiwiaGFzIiwicmVuZGVyUGljayIsInByZXNlcnZlZElkcyIsIlNldCIsImtleXMiLCJwb29sMiIsInBpY2tzIiwidGFrZW4iLCJ0YXJnZXQiLCJzaXplIiwiY2xzIiwicHJldmVudERlZmF1bHQiLCJfY2VsbCRkYXRhc2V0IiwiZHJhZ2dpbmciLCJnZXREYXRhIiwiX3N0ZXAkdmFsdWUiLCJrIiwib2xkQ2VsbCIsInNwbGl0IiwiZXhpc3RpbmciLCJsYXN0RWxlbWVudENoaWxkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsInRpY2tldElkIiwicG9sbFRpbWVyIiwiX2NhbGxlZTIiLCJfd2luZG93JE1NJHN0YXJ0IiwiX3dpbmRvdyRNTSIsIl93aW5kb3ckTU0kc3RhdHVzIiwiX3dpbmRvdyRNTTIiLCJsaW5ldXAiLCJTVEFSVF9VUkwiLCJTVEFUVVNfVFBMIiwic3RhdHVzVXJsIiwicmVzIiwidGV4dCIsImRhdGEiLCJfZGF0YSRlcnJvciIsIl9kYXRhIiwiX3QiLCJfY29udGV4dDIiLCJlbnRyaWVzIiwiX3JlZjMiLCJfcmVmNCIsInZhbCIsIl9rZXkkc3BsaXQkbWFwIiwiTnVtYmVyIiwiX2tleSRzcGxpdCRtYXAyIiwiTU0iLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsIl91bnVzZWQiLCJvayIsImFsZXJ0IiwiZXJyb3IiLCJsb2NhdGlvbiIsImhyZWYiLCJtYXRjaElkIiwiX2NhbGxlZSIsImoiLCJfY29udGV4dCIsImpzb24iLCJtZXNzYWdlIiwicmVuZGVyQm9udXNlcyIsImNvbXB1dGVCb251c2VzIiwiY291bnRzIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9zdGVwMyR2YWx1ZSIsImZhbSIsInRvTG93ZXJDYXNlIiwidGllcnMiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsInRpZXIiLCJsYWJlbCIsInNvbGVpbCIsImx1bmUiLCJuYXR1cmUiLCJpZG9sZSIsIm9tYnJlIiwiYXJjYW5lIiwiZXRvaWxlIiwib2NlYW4iLCJlZmZlY3QiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIklDT04iLCJfcmVmNiIsIl9yZWY3IiwiX3JlZjckIiwibGkiLCJlZmZlY3RUZXh0IiwicG9wIiwicGN0IiwicmVyb2xsc0xlZnQiLCJSRVJPTExTX0xFRlQiLCJ1cGRhdGVSZXJvbGxVSSIsIl9jYWxsZWUzIiwiX2RhdGEkbGVmdCIsIl90MiIsIl9jb250ZXh0MyIsIlJFUk9MTF9ERUNfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==