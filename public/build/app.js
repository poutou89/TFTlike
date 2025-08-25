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
      log(REPLAY.winner === 'ally' ? 'Victoire !' : REPLAY.winner === 'enemy' ? 'Défaite…' : 'Égalité !');
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
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// team-builder.js

// base des assets fournie par Twig: window.ASSET_BASE = "{{ asset('') }}";

document.addEventListener('DOMContentLoaded', function () {
  var ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
  var fullImg = function fullImg(p) {
    return ASSET_BASE + String(p || '').replace(/^\/+/, '');
  };
  console.log('Team Builder script loaded!', {
    ASSET_BASE: ASSET_BASE
  });
  var ownedEl = document.getElementById('owned-girls-json');
  if (!ownedEl) return;

  /** @type {Array} */
  var OWNED = JSON.parse(ownedEl.textContent || '[]');
  var pickGrid = document.getElementById('pick-grid');
  var benchGrid = document.getElementById('bench-grid');
  var board = document.getElementById('board');
  var btnReroll = document.getElementById('btn-reroll');
  var btnLock = document.getElementById('btn-lock');
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
      if (card.parentElement === benchGrid) {
        benchGrid.removeChild(card);
        inBench["delete"](girl.id);
      } else {
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
    var pool = _toConsumableArray(OWNED);
    if (pool.length === 0) return;

    // on duplique si < 4
    while (pool.length < 4) pool = pool.concat(OWNED);
    var picks = [];
    var taken = new Set();
    while (picks.length < 4 && taken.size < pool.length) {
      var i = Math.floor(Math.random() * pool.length);
      if (!taken.has(i)) {
        taken.add(i);
        picks.push(pool[i]);
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
        case 8:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 7]]);
  })));
  function updateLockState() {
    btnLock.disabled = placed.size !== MAX_TEAM;
  }

  // init
  renderPick();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-f947ab"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvSW5zY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC9tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC90ZWFtLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9KYXZhU2NyaXB0L3JlZ2lzdGVyLmpzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFzczEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJfdHlwZV9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QnKTtcclxuICBjb25zdCBwYXNzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlcl90eXBlX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQnKTtcclxuICBjb25zdCByZWdpc3RlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1idG4nKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tQYXNzd29yZHMoKSB7XHJcbiAgICBpZiAocGFzczEudmFsdWUgJiYgcGFzczEudmFsdWUgPT09IHBhc3MyLnZhbHVlKSB7XHJcbiAgICAgIHJlZ2lzdGVyQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocGFzczEgJiYgcGFzczIgJiYgcmVnaXN0ZXJCdG4pIHtcclxuICAgIHBhc3MxLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tQYXNzd29yZHMpO1xyXG4gICAgcGFzczIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja1Bhc3N3b3Jkcyk7XHJcbiAgfVxyXG59KTtcclxuIiwiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWctcm9zdGVyLXRyYWNrJyk7XHJcbiAgaWYgKCF0cmFjaykgcmV0dXJuO1xyXG5cclxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19uYXYtLXByZXYnKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19uYXYtLW5leHQnKTtcclxuICBjb25zdCBzdGVwID0gMjgwOyAvLyBweCBwYXIgY2xpY1xyXG5cclxuICBjb25zdCBzY3JvbGxCeSA9IChkZWx0YSkgPT4gdHJhY2suc2Nyb2xsQnkoeyBsZWZ0OiBkZWx0YSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuICBwcmV2Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbEJ5KC1zdGVwKSk7XHJcbiAgbmV4dD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGxCeShzdGVwKSk7XHJcbn0pO1xyXG5jb25zb2xlLmxvZygnaG9tZS5qcycpO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2UtbWF0Y2gnKSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBBU1NFVF9CQVNFID0gKHdpbmRvdy5BU1NFVF9CQVNFIHx8ICcvJykucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xyXG4gIGNvbnN0IGZ1bGwgPSAocCkgPT4gQVNTRVRfQkFTRSArIFN0cmluZyhwIHx8ICcnKS5yZXBsYWNlKC9eXFwvKy8sICcnKTtcclxuXHJcbiAgY29uc3QgYm9hcmQgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcclxuICBjb25zdCBsb2dFbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGUtbG9nJyk7XHJcbiAgY29uc3QgaHVkQSAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkLWFsbGllcycpO1xyXG4gIGNvbnN0IGh1ZEUgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZC1lbmVtaWVzJyk7XHJcbiAgY29uc3QgYnRuU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXN0YXJ0Jyk7XHJcbiAgY29uc3QgYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXBhdXNlJyk7XHJcbiAgY29uc3QgYnRuUmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJlc2V0Jyk7XHJcblxyXG4gIGlmICghYm9hcmQgfHwgIWxvZ0VsIHx8ICFodWRBIHx8ICFodWRFIHx8ICFidG5TdGFydCB8fCAhYnRuUGF1c2UgfHwgIWJ0blJlc2V0KSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ01hdGNoIFVJIG1pc3NpbmcnLCB7IGJvYXJkLCBsb2dFbCwgaHVkQSwgaHVkRSwgYnRuU3RhcnQsIGJ0blBhdXNlLCBidG5SZXNldCB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IFJFUExBWSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcGxheS1qc29uJyk/LnRleHRDb250ZW50IHx8ICd7fScpO1xyXG4gIGlmICghUkVQTEFZIHx8ICFBcnJheS5pc0FycmF5KFJFUExBWS5pbml0aWFsKSkgeyBjb25zb2xlLndhcm4oJ05vIHJlcGxheSBwcm92aWRlZCcpOyByZXR1cm47IH1cclxuICBjb25zb2xlLmRlYnVnKCdSRVBMQVk6JywgUkVQTEFZLFxyXG4gICAgICAgICAgICAgICAgJ2FsbHlDb3VudD0nLCBSRVBMQVkuaW5pdGlhbC5maWx0ZXIodT0+dS50ZWFtPT09J2FsbHknKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAnZW5lbXlDb3VudD0nLCBSRVBMQVkuaW5pdGlhbC5maWx0ZXIodT0+dS50ZWFtPT09J2VuZW15JykubGVuZ3RoKTtcclxuXHJcbiAgY29uc3QgdW5pdHNCeUlkID0gbmV3IE1hcCgpOyAvLyBpZCAtPiBydW50aW1lIHVuaXRcclxuICBsZXQgdGltZXIgPSBudWxsLCBzdGVwID0gMDtcclxuICBjb25zdCBUSUNLX01TID0gNDAwO1xyXG5cclxuICBjb25zdCBjZWxsID0gKHgseSkgPT4gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZyhtc2cpeyBpZighbXNnKXJldHVybjsgY29uc3QgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZC50ZXh0Q29udGVudD1tc2c7XHJcbiAgICBsb2dFbC5hcHBlbmRDaGlsZChkKTsgbG9nRWwuc2Nyb2xsVG9wPWxvZ0VsLnNjcm9sbEhlaWdodDsgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJIVUQoKXtcclxuICAgIGNvbnN0IGxpc3QgPSAodGVhbSkgPT4gWy4uLnVuaXRzQnlJZC52YWx1ZXMoKV0uZmlsdGVyKHU9PnUudGVhbT09PXRlYW0pXHJcbiAgICAgIC5tYXAodT0+YDxsaT48aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCI+PHNwYW4+JHt1Lm5hbWV9PC9zcGFuPjxlbT4ke3UuaHB9IFBWJHt1LnNoaWVsZD4wPycg4oCiIPCfm6EnK3Uuc2hpZWxkOicnfSR7dS5tYW5hPjA/JyDigKIg8J+UtycrdS5tYW5hOicnfTwvZW0+PC9saT5gKS5qb2luKCcnKTtcclxuICAgIGh1ZEEuaW5uZXJIVE1MID0gbGlzdCgnYWxseScpOyBodWRFLmlubmVySFRNTCA9IGxpc3QoJ2VuZW15Jyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVCYXJzKHUpe1xyXG4gICAgdS5lbC5xdWVyeVNlbGVjdG9yKCcuaHAnKS50ZXh0Q29udGVudCA9IHUuaHA7XHJcbiAgICBjb25zdCBzaD11LmVsLnF1ZXJ5U2VsZWN0b3IoJy5zaGllbGQnKTsgaWYoc2gpeyBzaC50ZXh0Q29udGVudD11LnNoaWVsZDsgc2guc3R5bGUuZGlzcGxheT11LnNoaWVsZD4wPycnOidub25lJzsgfVxyXG4gICAgY29uc3QgbWE9dS5lbC5xdWVyeVNlbGVjdG9yKCcubWFuYScpOyAgIGlmKG1hKXsgbWEudGV4dENvbnRlbnQ9dS5tYW5hOyAgIG1hLnN0eWxlLmRpc3BsYXk9dS5tYW5hPjA/Jyc6J25vbmUnOyB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkluaXRpYWwoKXtcclxuICAgIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykuZm9yRWFjaChjPT5jLmlubmVySFRNTD0nJyk7IGxvZ0VsLmlubmVySFRNTD0nJzsgdW5pdHNCeUlkLmNsZWFyKCk7XHJcbiAgICBmb3IoY29uc3QgdTAgb2YgUkVQTEFZLmluaXRpYWwpe1xyXG4gICAgICBjb25zdCB1ID0gey4uLnUwfTtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZWwuY2xhc3NOYW1lID0gYHVuaXQgdW5pdC0tJHt1LnRlYW19IHVuaXQtLSR7dS5jbGFzc31gO1xyXG4gICAgICBlbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGltZyBzcmM9XCIke2Z1bGwodS5pbWcpfVwiIGFsdD1cIlwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaHBcIj4ke3UuaHB9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2hpZWxkXCIke3Uuc2hpZWxkPjA/Jyc6JyBzdHlsZT1cImRpc3BsYXk6bm9uZVwiJ30+JHt1LnNoaWVsZH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYW5hXCIke3UubWFuYT4wPycnOicgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIid9PiR7dS5tYW5hfTwvc3Bhbj5gO1xyXG4gICAgICBjb25zdCBjID0gY2VsbCh1LngsIHUueSk7IGlmIChjKSBjLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgdS5lbCA9IGVsOyB1bml0c0J5SWQuc2V0KHUuaWQsIHUpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVySFVEKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhcHBseUFjdGlvbihhKXtcclxuICAgIHN3aXRjaChhLnQpe1xyXG4gICAgICBjYXNlICdtb3ZlJzoge1xyXG4gICAgICAgIGNvbnN0IHU9dW5pdHNCeUlkLmdldChhLmlkKTsgaWYoIXUpYnJlYWs7XHJcbiAgICAgICAgY29uc3QgdG89Y2VsbChhLnRvWzBdLGEudG9bMV0pOyBpZighdG8pYnJlYWs7XHJcbiAgICAgICAgdG8uYXBwZW5kQ2hpbGQodS5lbCk7IHUueD1hLnRvWzBdOyB1Lnk9YS50b1sxXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdhdHRhY2snOiB7XHJcbiAgICAgICAgY29uc3QgYXR0PXVuaXRzQnlJZC5nZXQoYS5hdHQpLCBkZWY9dW5pdHNCeUlkLmdldChhLmRlZik7IGlmKCFhdHR8fCFkZWYpYnJlYWs7XHJcbiAgICAgICAgZGVmLmhwPWEuaHA7IGRlZi5zaGllbGQ9YS5zaGllbGQ7IGlmKGEubWFuYSE9PXVuZGVmaW5lZCkgYXR0Lm1hbmE9YS5tYW5hO1xyXG4gICAgICAgIHVwZGF0ZUJhcnMoZGVmKTsgdXBkYXRlQmFycyhhdHQpO1xyXG4gICAgICAgIGlmKGRlZi5ocDw9MCl7IGRlZi5lbC5jbGFzc0xpc3QuYWRkKCdrbycpOyBzZXRUaW1lb3V0KCgpPT5kZWYuZWwucmVtb3ZlKCksMTIwKTsgfVxyXG4gICAgICAgIGlmKGEubG9nKSBsb2coYS5sb2cpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2hlYWwnOiB7XHJcbiAgICAgICAgY29uc3Qgc3JjPXVuaXRzQnlJZC5nZXQoYS5zcmMpLCBkc3Q9dW5pdHNCeUlkLmdldChhLmRzdCk7IGlmKCFzcmN8fCFkc3QpYnJlYWs7XHJcbiAgICAgICAgaWYoYS5tYW5hIT09dW5kZWZpbmVkKSBzcmMubWFuYT1hLm1hbmE7XHJcbiAgICAgICAgZHN0LmhwPU1hdGgubWluKGRzdC5tYXhIcCwoZHN0LmhwPz8wKSsoYS5hbW91bnQ/PzApKTtcclxuICAgICAgICB1cGRhdGVCYXJzKHNyYyk7IHVwZGF0ZUJhcnMoZHN0KTsgaWYoYS5sb2cpIGxvZyhhLmxvZyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbG9nJzogaWYoYS5tc2cpIGxvZyhhLm1zZyk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVRpY2soKXtcclxuICAgIGlmKHN0ZXAgPj0gKFJFUExBWS5hY3Rpb25zPy5sZW5ndGggfHwgMCkpe1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDtcclxuICAgICAgbG9nKFJFUExBWS53aW5uZXI9PT0nYWxseSc/J1ZpY3RvaXJlICEnOlJFUExBWS53aW5uZXI9PT0nZW5lbXknPydEw6lmYWl0ZeKApic6J8OJZ2FsaXTDqSAhJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGFwcGx5QWN0aW9uKFJFUExBWS5hY3Rpb25zW3N0ZXArK10pOyByZW5kZXJIVUQoKTtcclxuICB9XHJcblxyXG4gIGJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgaWYoIXRpbWVyKSB0aW1lcj1zZXRJbnRlcnZhbChwbGF5VGljayxUSUNLX01TKTsgfSk7XHJcbiAgYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyBpZih0aW1lcil7IGNsZWFySW50ZXJ2YWwodGltZXIpOyB0aW1lcj1udWxsOyB9IH0pO1xyXG4gIGJ0blJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgaWYodGltZXIpeyBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDsgfSBzdGVwPTA7IHNwYXduSW5pdGlhbCgpOyB9KTtcclxuXHJcbiAgc3Bhd25Jbml0aWFsKCk7XHJcbn0pO1xyXG4iLCIvLyB0ZWFtLWJ1aWxkZXIuanNcclxuXHJcbi8vIGJhc2UgZGVzIGFzc2V0cyBmb3VybmllIHBhciBUd2lnOiB3aW5kb3cuQVNTRVRfQkFTRSA9IFwie3sgYXNzZXQoJycpIH19XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IEFTU0VUX0JBU0UgPSAod2luZG93LkFTU0VUX0JBU0UgfHwgJy8nKS5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XHJcbiAgY29uc3QgZnVsbEltZyA9IChwKSA9PiBBU1NFVF9CQVNFICsgU3RyaW5nKHAgfHwgJycpLnJlcGxhY2UoL15cXC8rLywgJycpO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKCdUZWFtIEJ1aWxkZXIgc2NyaXB0IGxvYWRlZCEnLCB7IEFTU0VUX0JBU0UgfSk7XHJcbiAgY29uc3Qgb3duZWRFbCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293bmVkLWdpcmxzLWpzb24nKTtcclxuICBpZiAoIW93bmVkRWwpIHJldHVybjtcclxuXHJcbiAgLyoqIEB0eXBlIHtBcnJheX0gKi9cclxuICBjb25zdCBPV05FRCAgICAgPSBKU09OLnBhcnNlKG93bmVkRWwudGV4dENvbnRlbnQgfHwgJ1tdJyk7XHJcblxyXG4gIGNvbnN0IHBpY2tHcmlkICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNrLWdyaWQnKTtcclxuICBjb25zdCBiZW5jaEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVuY2gtZ3JpZCcpO1xyXG4gIGNvbnN0IGJvYXJkICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gIGNvbnN0IGJ0blJlcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVyb2xsJyk7XHJcbiAgY29uc3QgYnRuTG9jayAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1sb2NrJyk7XHJcblxyXG4gIGNvbnN0IE1BWF9URUFNICA9IDQ7XHJcbiAgY29uc3QgcGxhY2VkICAgID0gbmV3IE1hcCgpOyAvLyBcIngseVwiIC0+IHsgZ2lybCwgZWwgfVxyXG4gIGNvbnN0IGluQmVuY2ggICA9IG5ldyBNYXAoKTsgLy8gZ2lybElkIC0+IGNhcmRFbGVtZW50XHJcblxyXG4gIC8vIGhlbHBlcnNcclxuICBjb25zdCByYW5kSW50ID0gKG4pID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xyXG4gIGNvbnN0IHBpY2tOID0gKGFyciwgbikgPT4ge1xyXG4gICAgY29uc3QgcG9vbCA9IFsuLi5hcnJdLCBvdXQgPSBbXTtcclxuICAgIHdoaWxlIChvdXQubGVuZ3RoIDwgTWF0aC5taW4obiwgcG9vbC5sZW5ndGgpKSB7XHJcbiAgICAgIG91dC5wdXNoKHBvb2wuc3BsaWNlKHJhbmRJbnQocG9vbC5sZW5ndGgpLCAxKVswXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH07XHJcbiAgY29uc3QgY2VsbEtleSA9ICh4LCB5KSA9PiBgJHt4fSwke3l9YDtcclxuXHJcbiAgLy8gLS0tLSBVSSByZW5kZXJlcnMgLS0tLVxyXG4gIGZ1bmN0aW9uIHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2UgfSkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSBgdGItY2FyZCB0Yi1jYXJkLS0ke2dpcmwuY2xhc3N9YDtcclxuICAgIGNhcmQuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGNhcmQuZGF0YXNldC5pZCA9IGdpcmwuaWQ7XHJcbiAgICBjYXJkLmRhdGFzZXQuc291cmNlID0gc291cmNlO1xyXG5cclxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9faW1nXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX21ldGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fbmFtZVwiPiR7Z2lybC5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX190YWdzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfVwiPiR7Y2xhc3NMYWJlbChnaXJsLmNsYXNzKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyB0YWctZmFtaWx5XCI+JHtnaXJsLmZhbWlseSA/PyAnJ308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fc3RhdHNcIj5cclxuICAgICAgICA8c3Bhbj5QViAke2dpcmwucGR2fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5BVEsgJHtnaXJsLmF0a308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+UFJDICR7TWF0aC5yb3VuZCgoZ2lybC5jaGFuY2VfYXRrID8/IDApICogMTAwKX0lPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkoZ2lybCkpO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gY2FyZC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpKTtcclxuICAgIH0pO1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpKTtcclxuXHJcbiAgICAvLyBkb3VibGUtY2xpYyAtPiB0b2dnbGUgYmFuY1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGNhcmQucGFyZW50RWxlbWVudCA9PT0gYmVuY2hHcmlkKSB7XHJcbiAgICAgICAgYmVuY2hHcmlkLnJlbW92ZUNoaWxkKGNhcmQpO1xyXG4gICAgICAgIGluQmVuY2guZGVsZXRlKGdpcmwuaWQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZUNoaXAoZ2lybCkge1xyXG4gICAgY29uc3QgY2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hpcC5jbGFzc05hbWUgPSBgY2hpcCAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfWA7XHJcbiAgICBjaGlwLnRpdGxlID0gZ2lybC5uYW1lO1xyXG4gICAgY2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgY2hpcC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPjxzcGFuPiR7Z2lybC5uYW1lfTwvc3Bhbj5gO1xyXG5cclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KGdpcmwpKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGNoaXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKSk7XHJcbiAgICB9KTtcclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKSk7XHJcblxyXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IGNoaXAucGFyZW50RWxlbWVudD8uY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgICAgaWYgKGNlbGwpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBjZWxsS2V5KGNlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueSk7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpbkJlbmNoLmhhcyhnaXJsLmlkKSkge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pO1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjaGlwO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBpY2soKSB7XHJcbiAgcGlja0dyaWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IHBvb2wgPSBbLi4uT1dORURdO1xyXG4gIGlmIChwb29sLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAvLyBvbiBkdXBsaXF1ZSBzaSA8IDRcclxuICB3aGlsZSAocG9vbC5sZW5ndGggPCA0KSBwb29sID0gcG9vbC5jb25jYXQoT1dORUQpO1xyXG5cclxuICBjb25zdCBwaWNrcyA9IFtdO1xyXG4gIGNvbnN0IHRha2VuID0gbmV3IFNldCgpO1xyXG4gIHdoaWxlIChwaWNrcy5sZW5ndGggPCA0ICYmIHRha2VuLnNpemUgPCBwb29sLmxlbmd0aCkge1xyXG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wubGVuZ3RoKTtcclxuICAgIGlmICghdGFrZW4uaGFzKGkpKSB7IHRha2VuLmFkZChpKTsgcGlja3MucHVzaChwb29sW2ldKTsgfVxyXG4gIH1cclxuICBwaWNrcy5mb3JFYWNoKGcgPT4gcGlja0dyaWQuYXBwZW5kQ2hpbGQocmVuZGVyQ2FyZChnLCB7IHNvdXJjZTogJ3BpY2snIH0pKSk7XHJcbn1cclxuICBmdW5jdGlvbiBjbGFzc1RhZyhjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ3RhZy1tZWxlZSc7XHJcbiAgICAgIGNhc2UgJ2Rwc19yYW5nZWQnOiByZXR1cm4gJ3RhZy1yYW5nZWQnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICd0YWctdGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ3RhZy1oZWFsJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xhc3NMYWJlbChjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ0RQUyBDw6BDJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAnRFBTIGRpc3RhbmNlJztcclxuICAgICAgY2FzZSAndGFuayc6ICAgICAgIHJldHVybiAnVGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ0hlYWxlcic7XHJcbiAgICAgIGRlZmF1bHQ6ICAgICAgICAgICByZXR1cm4gY2xzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBEbkQgYm9hcmQgLS0tLVxyXG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQuY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gY2VsbC5kYXRhc2V0O1xyXG4gICAgY29uc3Qga2V5ID0gY2VsbEtleSh4LCB5KTtcclxuXHJcbiAgICBjb25zdCBkcmFnZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50Yi1jYXJkLmRyYWdnaW5nLCAuY2hpcC5kcmFnZ2luZycpO1xyXG4gICAgaWYgKCFkcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyBzaSBtw6ptZSBow6lybyBkw6lqw6AgcGxhY8OpIGFpbGxldXJzIC0+IGxpYsOocmUgbOKAmWFuY2llbm5lIGNlbGx1bGVcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHBsYWNlZCkge1xyXG4gICAgICBpZiAodi5naXJsLmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBjb25zdCBvbGRDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtrLnNwbGl0KCcsJylbMF19XCJdW2RhdGEteT1cIiR7ay5zcGxpdCgnLCcpWzFdfVwiXWApO1xyXG4gICAgICAgIGlmIChvbGRDZWxsKSBvbGRDZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGltaXRlIMOpcXVpcGVcclxuICAgIGlmICghcGxhY2VkLmhhcyhrZXkpICYmIHBsYWNlZC5zaXplID49IE1BWF9URUFNKSByZXR1cm47XHJcblxyXG4gICAgLy8gc3dhcCBzaSBsYSBjZWxsdWxlIMOpdGFpdCBvY2N1cMOpZVxyXG4gICAgaWYgKHBsYWNlZC5oYXMoa2V5KSkge1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHBsYWNlZC5nZXQoa2V5KTtcclxuICAgICAgaWYgKGV4aXN0aW5nPy5lbCkge1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGV4aXN0aW5nLmdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pKTtcclxuICAgICAgICBpbkJlbmNoLnNldChleGlzdGluZy5naXJsLmlkLCBiZW5jaEdyaWQubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaXAgPSBtYWtlQ2hpcChnaXJsKTtcclxuICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGNoaXApO1xyXG4gICAgcGxhY2VkLnNldChrZXksIHsgZ2lybCwgZWw6IGNoaXAgfSk7XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBEbkQgYmVuY2ggLS0tLVxyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyByZXRpcmUgZHUgYm9hcmQgc2kgcHLDqXNlbnRlXHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBwbGFjZWQpIHtcclxuICAgICAgaWYgKHYuZ2lybC5pZCA9PT0gZ2lybC5pZCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKGMpIGMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5CZW5jaC5oYXMoZ2lybC5pZCkpIHtcclxuICAgICAgY29uc3QgY2FyZCA9IHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSk7XHJcbiAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBhY3Rpb25zIC0tLS1cclxubGV0IHRpY2tldElkID0gbnVsbDtcclxubGV0IHBvbGxUaW1lciA9IG51bGw7XHJcblxyXG5idG5Mb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGJ1aWxkIHBheWxvYWRcclxuICBjb25zdCBsaW5ldXAgPSBBcnJheS5mcm9tKHBsYWNlZC5lbnRyaWVzKCkpLm1hcCgoW2tleSwgdmFsXSkgPT4ge1xyXG4gICAgY29uc3QgW3gsIHldID0ga2V5LnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcbiAgICByZXR1cm4geyBpZDogdmFsLmdpcmwuaWQsIHgsIHkgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgU1RBUlRfVVJMICA9IHdpbmRvdy5NTT8uc3RhcnQgID8/ICcvbWF0Y2htYWtpbmcvc3RhcnQnO1xyXG4gIGNvbnN0IFNUQVRVU19UUEwgPSB3aW5kb3cuTU0/LnN0YXR1cyA/PyAnL21hdGNobWFraW5nL3N0YXR1cy9fX0lEX18nO1xyXG4gIGNvbnN0IHN0YXR1c1VybCAgPSAoaWQpID0+IFNUQVRVU19UUEwucmVwbGFjZSgnX19JRF9fJywgU3RyaW5nKGlkKSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdDYWxsaW5nIFNUQVJUX1VSTCA9JywgU1RBUlRfVVJMKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyAgPSBhd2FpdCBmZXRjaChTVEFSVF9VUkwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsaW5ldXAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xyXG4gICAgbGV0IGRhdGE7XHJcbiAgICB0cnkgeyBkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTsgfSBjYXRjaCB7IGRhdGEgPSBudWxsOyB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ21hdGNobWFraW5nL3N0YXJ0IC0+JywgcmVzLnN0YXR1cywgZGF0YSA/PyB0ZXh0KTtcclxuXHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICBhbGVydChgTWF0Y2htYWtpbmcgZmFpbGVkICgke3Jlcy5zdGF0dXN9KTpcXG4ke2RhdGE/LmVycm9yID8/IHRleHR9YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghZGF0YSB8fCAoZGF0YS5zdGF0dXMgIT09ICdtYXRjaGVkJyAmJiBkYXRhLnN0YXR1cyAhPT0gJ3F1ZXVlZCcpKSB7XHJcbiAgICAgIGFsZXJ0KCdSw6lwb25zZSBpbmF0dGVuZHVlOlxcbicgKyAoZGF0YSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogdGV4dCkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnbWF0Y2hlZCcpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL21hdGNoLyR7ZGF0YS5tYXRjaElkfWA7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBxdWV1ZWQgLT4gcG9sbCBzdGF0dXNcclxuICAgIHRpY2tldElkID0gZGF0YS50aWNrZXRJZDtcclxuICAgIGJ0bkxvY2suZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgYnRuTG9jay50ZXh0Q29udGVudCA9ICfwn5SOIFJlY2hlcmNoZSBlbiBjb3Vyc+KApic7XHJcblxyXG4gICAgcG9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByID0gYXdhaXQgZmV0Y2goc3RhdHVzVXJsKHRpY2tldElkKSwgeyBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyB9KTtcclxuICAgICAgY29uc3QgaiA9IGF3YWl0IHIuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZygnbWF0Y2htYWtpbmcvc3RhdHVzIC0+Jywgaik7XHJcbiAgICAgIGlmIChqLnN0YXR1cyA9PT0gJ21hdGNoZWQnKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9tYXRjaC8ke2oubWF0Y2hJZH1gO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MDAwKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgYWxlcnQoJ0VycmV1ciByw6lzZWF1OiAnICsgZS5tZXNzYWdlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVMb2NrU3RhdGUoKSB7XHJcbiAgICBidG5Mb2NrLmRpc2FibGVkID0gKHBsYWNlZC5zaXplICE9PSBNQVhfVEVBTSk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0XHJcbiAgcmVuZGVyUGljaygpO1xyXG59KTtcclxuIiwiXHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvdGVhbS1idWlsZGVyLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvSW5zY3JpcHRpb24uanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9ob21lLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvbWF0Y2guanMnOyBcclxuXHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzMSIsImdldEVsZW1lbnRCeUlkIiwicGFzczIiLCJyZWdpc3RlckJ0biIsImNoZWNrUGFzc3dvcmRzIiwidmFsdWUiLCJkaXNhYmxlZCIsInRyYWNrIiwicHJldiIsInF1ZXJ5U2VsZWN0b3IiLCJuZXh0Iiwic3RlcCIsInNjcm9sbEJ5IiwiZGVsdGEiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjb25zb2xlIiwibG9nIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiQVNTRVRfQkFTRSIsIndpbmRvdyIsInJlcGxhY2UiLCJmdWxsIiwicCIsIlN0cmluZyIsImJvYXJkIiwibG9nRWwiLCJodWRBIiwiaHVkRSIsImJ0blN0YXJ0IiwiYnRuUGF1c2UiLCJidG5SZXNldCIsIndhcm4iLCJSRVBMQVkiLCJKU09OIiwicGFyc2UiLCJ0ZXh0Q29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsImluaXRpYWwiLCJkZWJ1ZyIsImZpbHRlciIsInUiLCJ0ZWFtIiwibGVuZ3RoIiwidW5pdHNCeUlkIiwiTWFwIiwidGltZXIiLCJUSUNLX01TIiwiY2VsbCIsIngiLCJ5IiwiY29uY2F0IiwibXNnIiwiZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInJlbmRlckhVRCIsImxpc3QiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ2YWx1ZXMiLCJtYXAiLCJpbWciLCJuYW1lIiwiaHAiLCJzaGllbGQiLCJtYW5hIiwiam9pbiIsImlubmVySFRNTCIsInVwZGF0ZUJhcnMiLCJlbCIsInNoIiwic3R5bGUiLCJkaXNwbGF5IiwibWEiLCJzcGF3bkluaXRpYWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImMiLCJjbGVhciIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJ1MCIsIl9vYmplY3RTcHJlYWQiLCJjbGFzc05hbWUiLCJzZXQiLCJpZCIsImVyciIsImUiLCJmIiwiYXBwbHlBY3Rpb24iLCJhIiwidCIsImdldCIsInRvIiwiYXR0IiwiZGVmIiwidW5kZWZpbmVkIiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsIl9kc3QkaHAiLCJfYSRhbW91bnQiLCJzcmMiLCJkc3QiLCJNYXRoIiwibWluIiwibWF4SHAiLCJhbW91bnQiLCJwbGF5VGljayIsIl9SRVBMQVkkYWN0aW9ucyIsImFjdGlvbnMiLCJjbGVhckludGVydmFsIiwid2lubmVyIiwic2V0SW50ZXJ2YWwiLCJyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsIkciLCJ2IiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwicHVzaCIsIl9uIiwiRiIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsImZyb20iLCJ0ZXN0IiwicmVxdWlyZSIsImZ1bGxJbWciLCJvd25lZEVsIiwiT1dORUQiLCJwaWNrR3JpZCIsImJlbmNoR3JpZCIsImJ0blJlcm9sbCIsImJ0bkxvY2siLCJNQVhfVEVBTSIsInBsYWNlZCIsImluQmVuY2giLCJyYW5kSW50IiwiZmxvb3IiLCJyYW5kb20iLCJwaWNrTiIsImFyciIsInBvb2wiLCJvdXQiLCJzcGxpY2UiLCJjZWxsS2V5IiwicmVuZGVyQ2FyZCIsImdpcmwiLCJfcmVmIiwiX2dpcmwkZmFtaWx5IiwiX2dpcmwkY2hhbmNlX2F0ayIsInNvdXJjZSIsImNhcmQiLCJkcmFnZ2FibGUiLCJkYXRhc2V0IiwiY2xhc3NUYWciLCJjbGFzc0xhYmVsIiwiZmFtaWx5IiwicGR2IiwiYXRrIiwicm91bmQiLCJjaGFuY2VfYXRrIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInN0cmluZ2lmeSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInVwZGF0ZUxvY2tTdGF0ZSIsIm1ha2VDaGlwIiwiY2hpcCIsInRpdGxlIiwiX2NoaXAkcGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJrZXkiLCJoYXMiLCJyZW5kZXJQaWNrIiwicGlja3MiLCJ0YWtlbiIsIlNldCIsInNpemUiLCJnIiwiY2xzIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJfY2VsbCRkYXRhc2V0IiwiZHJhZ2dpbmciLCJnZXREYXRhIiwiX3N0ZXAkdmFsdWUiLCJrIiwib2xkQ2VsbCIsInNwbGl0IiwiZXhpc3RpbmciLCJsYXN0RWxlbWVudENoaWxkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsInRpY2tldElkIiwicG9sbFRpbWVyIiwiX2NhbGxlZTIiLCJfd2luZG93JE1NJHN0YXJ0IiwiX3dpbmRvdyRNTSIsIl93aW5kb3ckTU0kc3RhdHVzIiwiX3dpbmRvdyRNTTIiLCJsaW5ldXAiLCJTVEFSVF9VUkwiLCJTVEFUVVNfVFBMIiwic3RhdHVzVXJsIiwicmVzIiwidGV4dCIsImRhdGEiLCJfZGF0YSRlcnJvciIsIl9kYXRhIiwiX3QiLCJfY29udGV4dDIiLCJlbnRyaWVzIiwiX3JlZjMiLCJfcmVmNCIsInZhbCIsIl9rZXkkc3BsaXQkbWFwIiwiTnVtYmVyIiwiX2tleSRzcGxpdCRtYXAyIiwiTU0iLCJzdGFydCIsInN0YXR1cyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiX3VudXNlZCIsIm9rIiwiYWxlcnQiLCJlcnJvciIsImxvY2F0aW9uIiwiaHJlZiIsIm1hdGNoSWQiLCJfY2FsbGVlIiwiaiIsIl9jb250ZXh0IiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9