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
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// team-builder.js

// base des assets fournie par Twig: window.ASSET_BASE = "{{ asset('') }}";
var ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
var fullImg = function fullImg(p) {
  return ASSET_BASE + String(p || '').replace(/^\/+/, '');
};
console.log('Team Builder script loaded!', {
  ASSET_BASE: ASSET_BASE
});
document.addEventListener('DOMContentLoaded', function () {
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
    var picks = pickN(OWNED, 4); // toujours 4 si possible
    picks.forEach(function (g) {
      return pickGrid.appendChild(renderCard(g, {
        source: 'pick'
      }));
    });
  }
  btnReroll === null || btnReroll === void 0 || btnReroll.addEventListener('click', function (e) {
    e.preventDefault();
    renderPick(); // re-génère 4 cartes aléatoires
  });
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
  btnLock.addEventListener('click', function () {
    var lineup = Array.from(placed.entries()).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        val = _ref3[1];
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
    var START_URL = window.MM.start;
    var statusUrl = function statusUrl(id) {
      return window.MM.status.replace('__ID__', String(id));
    };
    fetch(START_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        lineup: lineup
      })
    }).then(/*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(r) {
        var text, data, _data$error, _data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return r.text();
            case 1:
              text = _context.v;
              try {
                data = JSON.parse(text);
              } catch (_unused) {
                data = null;
              }
              console.log('matchmaking/start ->', r.status, data !== null && data !== void 0 ? data : text);
              if (r.ok) {
                _context.n = 2;
                break;
              }
              alert('Matchmaking failed (' + r.status + '):\n' + ((_data$error = (_data = data) === null || _data === void 0 ? void 0 : _data.error) !== null && _data$error !== void 0 ? _data$error : text));
              throw new Error('HTTP ' + r.status);
            case 2:
              return _context.a(2, data);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }()).then(function (data) {
      if (data.status === 'matched') {
        window.location.href = "/match/".concat(data.matchId);
        return;
      }
      if (data.status === 'queued') {
        ticketId = data.ticketId;
        btnLock.disabled = true;
        btnLock.textContent = '🔎 Recherche en cours…';
        pollTimer = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var res, j;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.n = 1;
                return fetch(statusUrl(ticketId), {
                  credentials: 'same-origin'
                });
              case 1:
                res = _context2.v;
                _context2.n = 2;
                return res.json();
              case 2:
                j = _context2.v;
                console.log('matchmaking/status ->', j);
                if (j.status === 'matched') {
                  clearInterval(pollTimer);
                  window.location.href = "/match/".concat(j.matchId);
                }
              case 3:
                return _context2.a(2);
            }
          }, _callee2);
        })), 2000);
        return;
      }
      alert('Réponse inattendue:\n' + JSON.stringify(data));
    })["catch"](function (err) {
      console.error(err);
    });
  });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-9441c2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vYXNzZXRzL0phdmFTY3JpcHQvSW5zY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC90ZWFtLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9KYXZhU2NyaXB0L3JlZ2lzdGVyLmpzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcGFzczEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJfdHlwZV9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QnKTtcclxuICBjb25zdCBwYXNzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlcl90eXBlX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQnKTtcclxuICBjb25zdCByZWdpc3RlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1idG4nKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tQYXNzd29yZHMoKSB7XHJcbiAgICBpZiAocGFzczEudmFsdWUgJiYgcGFzczEudmFsdWUgPT09IHBhc3MyLnZhbHVlKSB7XHJcbiAgICAgIHJlZ2lzdGVyQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocGFzczEgJiYgcGFzczIgJiYgcmVnaXN0ZXJCdG4pIHtcclxuICAgIHBhc3MxLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tQYXNzd29yZHMpO1xyXG4gICAgcGFzczIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja1Bhc3N3b3Jkcyk7XHJcbiAgfVxyXG59KTtcclxuIiwiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWctcm9zdGVyLXRyYWNrJyk7XHJcbiAgaWYgKCF0cmFjaykgcmV0dXJuO1xyXG5cclxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19uYXYtLXByZXYnKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19uYXYtLW5leHQnKTtcclxuICBjb25zdCBzdGVwID0gMjgwOyAvLyBweCBwYXIgY2xpY1xyXG5cclxuICBjb25zdCBzY3JvbGxCeSA9IChkZWx0YSkgPT4gdHJhY2suc2Nyb2xsQnkoeyBsZWZ0OiBkZWx0YSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuICBwcmV2Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbEJ5KC1zdGVwKSk7XHJcbiAgbmV4dD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGxCeShzdGVwKSk7XHJcbn0pO1xyXG5jb25zb2xlLmxvZygnaG9tZS5qcycpO1xyXG4iLCIvLyB0ZWFtLWJ1aWxkZXIuanNcclxuXHJcbi8vIGJhc2UgZGVzIGFzc2V0cyBmb3VybmllIHBhciBUd2lnOiB3aW5kb3cuQVNTRVRfQkFTRSA9IFwie3sgYXNzZXQoJycpIH19XCI7XHJcbmNvbnN0IEFTU0VUX0JBU0UgPSAod2luZG93LkFTU0VUX0JBU0UgfHwgJy8nKS5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XHJcbmNvbnN0IGZ1bGxJbWcgPSAocCkgPT4gQVNTRVRfQkFTRSArIFN0cmluZyhwIHx8ICcnKS5yZXBsYWNlKC9eXFwvKy8sICcnKTtcclxuXHJcbmNvbnNvbGUubG9nKCdUZWFtIEJ1aWxkZXIgc2NyaXB0IGxvYWRlZCEnLCB7IEFTU0VUX0JBU0UgfSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IG93bmVkRWwgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvd25lZC1naXJscy1qc29uJyk7XHJcbiAgaWYgKCFvd25lZEVsKSByZXR1cm47XHJcblxyXG4gIC8qKiBAdHlwZSB7QXJyYXl9ICovXHJcbiAgY29uc3QgT1dORUQgICAgID0gSlNPTi5wYXJzZShvd25lZEVsLnRleHRDb250ZW50IHx8ICdbXScpO1xyXG5cclxuICBjb25zdCBwaWNrR3JpZCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGljay1ncmlkJyk7XHJcbiAgY29uc3QgYmVuY2hHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlbmNoLWdyaWQnKTtcclxuICBjb25zdCBib2FyZCAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcclxuICBjb25zdCBidG5SZXJvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJlcm9sbCcpO1xyXG4gIGNvbnN0IGJ0bkxvY2sgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9jaycpO1xyXG5cclxuICBjb25zdCBNQVhfVEVBTSAgPSA0O1xyXG4gIGNvbnN0IHBsYWNlZCAgICA9IG5ldyBNYXAoKTsgLy8gXCJ4LHlcIiAtPiB7IGdpcmwsIGVsIH1cclxuICBjb25zdCBpbkJlbmNoICAgPSBuZXcgTWFwKCk7IC8vIGdpcmxJZCAtPiBjYXJkRWxlbWVudFxyXG5cclxuICAvLyBoZWxwZXJzXHJcbiAgY29uc3QgcmFuZEludCA9IChuKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKTtcclxuICBjb25zdCBwaWNrTiA9IChhcnIsIG4pID0+IHtcclxuICAgIGNvbnN0IHBvb2wgPSBbLi4uYXJyXSwgb3V0ID0gW107XHJcbiAgICB3aGlsZSAob3V0Lmxlbmd0aCA8IE1hdGgubWluKG4sIHBvb2wubGVuZ3RoKSkge1xyXG4gICAgICBvdXQucHVzaChwb29sLnNwbGljZShyYW5kSW50KHBvb2wubGVuZ3RoKSwgMSlbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9O1xyXG4gIGNvbnN0IGNlbGxLZXkgPSAoeCwgeSkgPT4gYCR7eH0sJHt5fWA7XHJcblxyXG4gIC8vIC0tLS0gVUkgcmVuZGVyZXJzIC0tLS1cclxuICBmdW5jdGlvbiByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlIH0pIHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gYHRiLWNhcmQgdGItY2FyZC0tJHtnaXJsLmNsYXNzfWA7XHJcbiAgICBjYXJkLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICBjYXJkLmRhdGFzZXQuaWQgPSBnaXJsLmlkO1xyXG4gICAgY2FyZC5kYXRhc2V0LnNvdXJjZSA9IHNvdXJjZTtcclxuXHJcbiAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX2ltZ1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHtmdWxsSW1nKGdpcmwuaW1nKX1cIiBhbHQ9XCIke2dpcmwubmFtZX1cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX19tZXRhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX25hbWVcIj4ke2dpcmwubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fdGFnc1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgJHtjbGFzc1RhZyhnaXJsLmNsYXNzKX1cIj4ke2NsYXNzTGFiZWwoZ2lybC5jbGFzcyl9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgdGFnLWZhbWlseVwiPiR7Z2lybC5mYW1pbHkgPz8gJyd9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX3N0YXRzXCI+XHJcbiAgICAgICAgPHNwYW4+UFYgJHtnaXJsLnBkdn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+QVRLICR7Z2lybC5hdGt9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlBSQyAke01hdGgucm91bmQoKGdpcmwuY2hhbmNlX2F0ayA/PyAwKSAqIDEwMCl9JTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KGdpcmwpKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGNhcmQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKSk7XHJcbiAgICB9KTtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKSk7XHJcblxyXG4gICAgLy8gZG91YmxlLWNsaWMgLT4gdG9nZ2xlIGJhbmNcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChjYXJkLnBhcmVudEVsZW1lbnQgPT09IGJlbmNoR3JpZCkge1xyXG4gICAgICAgIGJlbmNoR3JpZC5yZW1vdmVDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLmRlbGV0ZShnaXJsLmlkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBiZW5jaEdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlTG9ja1N0YXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VDaGlwKGdpcmwpIHtcclxuICAgIGNvbnN0IGNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoaXAuY2xhc3NOYW1lID0gYGNoaXAgJHtjbGFzc1RhZyhnaXJsLmNsYXNzKX1gO1xyXG4gICAgY2hpcC50aXRsZSA9IGdpcmwubmFtZTtcclxuICAgIGNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGNoaXAuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtmdWxsSW1nKGdpcmwuaW1nKX1cIiBhbHQ9XCIke2dpcmwubmFtZX1cIj48c3Bhbj4ke2dpcmwubmFtZX08L3NwYW4+YDtcclxuXHJcbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBKU09OLnN0cmluZ2lmeShnaXJsKSk7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBjaGlwLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJykpO1xyXG4gICAgfSk7XHJcbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiBjaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJykpO1xyXG5cclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBjaGlwLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJy5jZWxsJyk7XHJcbiAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gY2VsbEtleShjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnkpO1xyXG4gICAgICAgIHBsYWNlZC5kZWxldGUoa2V5KTtcclxuICAgICAgICBjZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghaW5CZW5jaC5oYXMoZ2lybC5pZCkpIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gcmVuZGVyQ2FyZChnaXJsLCB7IHNvdXJjZTogJ2JlbmNoJyB9KTtcclxuICAgICAgICBiZW5jaEdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlTG9ja1N0YXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hpcDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlclBpY2soKSB7XHJcbiAgICBwaWNrR3JpZC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHBpY2tzID0gcGlja04oT1dORUQsIDQpOyAvLyB0b3Vqb3VycyA0IHNpIHBvc3NpYmxlXHJcbiAgICBwaWNrcy5mb3JFYWNoKGcgPT4gcGlja0dyaWQuYXBwZW5kQ2hpbGQocmVuZGVyQ2FyZChnLCB7IHNvdXJjZTogJ3BpY2snIH0pKSk7XHJcbiAgfVxyXG4gIGJ0blJlcm9sbD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICByZW5kZXJQaWNrKCk7ICAgICAgICAgICAvLyByZS1nw6luw6hyZSA0IGNhcnRlcyBhbMOpYXRvaXJlc1xyXG59KTtcclxuICBmdW5jdGlvbiBjbGFzc1RhZyhjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ3RhZy1tZWxlZSc7XHJcbiAgICAgIGNhc2UgJ2Rwc19yYW5nZWQnOiByZXR1cm4gJ3RhZy1yYW5nZWQnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICd0YWctdGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ3RhZy1oZWFsJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xhc3NMYWJlbChjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ0RQUyBDw6BDJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAnRFBTIGRpc3RhbmNlJztcclxuICAgICAgY2FzZSAndGFuayc6ICAgICAgIHJldHVybiAnVGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ0hlYWxlcic7XHJcbiAgICAgIGRlZmF1bHQ6ICAgICAgICAgICByZXR1cm4gY2xzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBEbkQgYm9hcmQgLS0tLVxyXG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQuY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gY2VsbC5kYXRhc2V0O1xyXG4gICAgY29uc3Qga2V5ID0gY2VsbEtleSh4LCB5KTtcclxuXHJcbiAgICBjb25zdCBkcmFnZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50Yi1jYXJkLmRyYWdnaW5nLCAuY2hpcC5kcmFnZ2luZycpO1xyXG4gICAgaWYgKCFkcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyBzaSBtw6ptZSBow6lybyBkw6lqw6AgcGxhY8OpIGFpbGxldXJzIC0+IGxpYsOocmUgbOKAmWFuY2llbm5lIGNlbGx1bGVcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHBsYWNlZCkge1xyXG4gICAgICBpZiAodi5naXJsLmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBjb25zdCBvbGRDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtrLnNwbGl0KCcsJylbMF19XCJdW2RhdGEteT1cIiR7ay5zcGxpdCgnLCcpWzFdfVwiXWApO1xyXG4gICAgICAgIGlmIChvbGRDZWxsKSBvbGRDZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGltaXRlIMOpcXVpcGVcclxuICAgIGlmICghcGxhY2VkLmhhcyhrZXkpICYmIHBsYWNlZC5zaXplID49IE1BWF9URUFNKSByZXR1cm47XHJcblxyXG4gICAgLy8gc3dhcCBzaSBsYSBjZWxsdWxlIMOpdGFpdCBvY2N1cMOpZVxyXG4gICAgaWYgKHBsYWNlZC5oYXMoa2V5KSkge1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHBsYWNlZC5nZXQoa2V5KTtcclxuICAgICAgaWYgKGV4aXN0aW5nPy5lbCkge1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGV4aXN0aW5nLmdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pKTtcclxuICAgICAgICBpbkJlbmNoLnNldChleGlzdGluZy5naXJsLmlkLCBiZW5jaEdyaWQubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaXAgPSBtYWtlQ2hpcChnaXJsKTtcclxuICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGNoaXApO1xyXG4gICAgcGxhY2VkLnNldChrZXksIHsgZ2lybCwgZWw6IGNoaXAgfSk7XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBEbkQgYmVuY2ggLS0tLVxyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyByZXRpcmUgZHUgYm9hcmQgc2kgcHLDqXNlbnRlXHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBwbGFjZWQpIHtcclxuICAgICAgaWYgKHYuZ2lybC5pZCA9PT0gZ2lybC5pZCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKGMpIGMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5CZW5jaC5oYXMoZ2lybC5pZCkpIHtcclxuICAgICAgY29uc3QgY2FyZCA9IHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSk7XHJcbiAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBhY3Rpb25zIC0tLS1cclxubGV0IHRpY2tldElkID0gbnVsbDtcclxubGV0IHBvbGxUaW1lciA9IG51bGw7XHJcblxyXG5idG5Mb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGxpbmV1cCA9IEFycmF5LmZyb20ocGxhY2VkLmVudHJpZXMoKSkubWFwKChba2V5LCB2YWxdKSA9PiB7XHJcbiAgICBjb25zdCBbeCwgeV0gPSBrZXkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcclxuICAgIHJldHVybiB7IGlkOiB2YWwuZ2lybC5pZCwgeCwgeSB9O1xyXG4gIH0pO1xyXG4gIGNvbnN0IFNUQVJUX1VSTCA9IHdpbmRvdy5NTS5zdGFydDtcclxuICBjb25zdCBzdGF0dXNVcmwgPSAoaWQpID0+IHdpbmRvdy5NTS5zdGF0dXMucmVwbGFjZSgnX19JRF9fJywgU3RyaW5nKGlkKSk7XHJcbiAgZmV0Y2goU1RBUlRfVVJMLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxpbmV1cCB9KSxcclxuICB9KVxyXG4gIC50aGVuKGFzeW5jIChyKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgci50ZXh0KCk7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIHRyeSB7IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpOyB9IGNhdGNoIHsgZGF0YSA9IG51bGw7IH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnbWF0Y2htYWtpbmcvc3RhcnQgLT4nLCByLnN0YXR1cywgZGF0YSA/PyB0ZXh0KTtcclxuXHJcbiAgICBpZiAoIXIub2spIHtcclxuICAgICAgYWxlcnQoJ01hdGNobWFraW5nIGZhaWxlZCAoJyArIHIuc3RhdHVzICsgJyk6XFxuJyArIChkYXRhPy5lcnJvciA/PyB0ZXh0KSk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSFRUUCAnICsgci5zdGF0dXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSlcclxuICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnbWF0Y2hlZCcpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL21hdGNoLyR7ZGF0YS5tYXRjaElkfWA7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3F1ZXVlZCcpIHtcclxuICAgICAgdGlja2V0SWQgPSBkYXRhLnRpY2tldElkO1xyXG4gICAgICBidG5Mb2NrLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgYnRuTG9jay50ZXh0Q29udGVudCA9ICfwn5SOIFJlY2hlcmNoZSBlbiBjb3Vyc+KApic7XHJcbiAgICAgIHBvbGxUaW1lciA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChzdGF0dXNVcmwodGlja2V0SWQpLCB7IGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pO1xyXG4gICAgICAgIGNvbnN0IGogPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaG1ha2luZy9zdGF0dXMgLT4nLCBqKTtcclxuICAgICAgICBpZiAoai5zdGF0dXMgPT09ICdtYXRjaGVkJykge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL21hdGNoLyR7ai5tYXRjaElkfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAyMDAwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYWxlcnQoJ1LDqXBvbnNlIGluYXR0ZW5kdWU6XFxuJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVMb2NrU3RhdGUoKSB7XHJcbiAgICBidG5Mb2NrLmRpc2FibGVkID0gKHBsYWNlZC5zaXplICE9PSBNQVhfVEVBTSk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0XHJcbiAgcmVuZGVyUGljaygpO1xyXG59KTtcclxuIiwiXHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvdGVhbS1idWlsZGVyLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvSW5zY3JpcHRpb24uanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9ob21lLmpzJztcclxuXHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzczEiLCJnZXRFbGVtZW50QnlJZCIsInBhc3MyIiwicmVnaXN0ZXJCdG4iLCJjaGVja1Bhc3N3b3JkcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJ0cmFjayIsInByZXYiLCJxdWVyeVNlbGVjdG9yIiwibmV4dCIsInN0ZXAiLCJzY3JvbGxCeSIsImRlbHRhIiwibGVmdCIsImJlaGF2aW9yIiwiY29uc29sZSIsImxvZyIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9uIiwiRiIsInMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZnJvbSIsInRlc3QiLCJyZXF1aXJlIiwiQVNTRVRfQkFTRSIsIndpbmRvdyIsInJlcGxhY2UiLCJmdWxsSW1nIiwiU3RyaW5nIiwib3duZWRFbCIsIk9XTkVEIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJwaWNrR3JpZCIsImJlbmNoR3JpZCIsImJvYXJkIiwiYnRuUmVyb2xsIiwiYnRuTG9jayIsIk1BWF9URUFNIiwicGxhY2VkIiwiTWFwIiwiaW5CZW5jaCIsInJhbmRJbnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwaWNrTiIsImFyciIsInBvb2wiLCJvdXQiLCJtaW4iLCJzcGxpY2UiLCJjZWxsS2V5IiwieCIsImNvbmNhdCIsInJlbmRlckNhcmQiLCJnaXJsIiwiX3JlZiIsIl9naXJsJGZhbWlseSIsIl9naXJsJGNoYW5jZV9hdGsiLCJzb3VyY2UiLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRyYWdnYWJsZSIsImRhdGFzZXQiLCJpZCIsImlubmVySFRNTCIsImltZyIsImNsYXNzVGFnIiwiY2xhc3NMYWJlbCIsImZhbWlseSIsInBkdiIsImF0ayIsInJvdW5kIiwiY2hhbmNlX2F0ayIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJzdHJpbmdpZnkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsInNldCIsInVwZGF0ZUxvY2tTdGF0ZSIsIm1ha2VDaGlwIiwiY2hpcCIsInRpdGxlIiwiX2NoaXAkcGFyZW50RWxlbWVudCIsImNlbGwiLCJjbG9zZXN0Iiwia2V5IiwiaGFzIiwicmVuZGVyUGljayIsInBpY2tzIiwiZm9yRWFjaCIsImciLCJwcmV2ZW50RGVmYXVsdCIsImNscyIsInRhcmdldCIsIl9jZWxsJGRhdGFzZXQiLCJkcmFnZ2luZyIsImdldERhdGEiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIl9zdGVwJHZhbHVlIiwiayIsIm9sZENlbGwiLCJzcGxpdCIsImVyciIsInNpemUiLCJleGlzdGluZyIsImdldCIsImVsIiwibGFzdEVsZW1lbnRDaGlsZCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfc3RlcDIkdmFsdWUiLCJ0aWNrZXRJZCIsInBvbGxUaW1lciIsImxpbmV1cCIsImVudHJpZXMiLCJtYXAiLCJfcmVmMiIsIl9yZWYzIiwidmFsIiwiX2tleSRzcGxpdCRtYXAiLCJOdW1iZXIiLCJfa2V5JHNwbGl0JG1hcDIiLCJTVEFSVF9VUkwiLCJNTSIsInN0YXJ0Iiwic3RhdHVzVXJsIiwic3RhdHVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiX3JlZjQiLCJfY2FsbGVlIiwidGV4dCIsImRhdGEiLCJfZGF0YSRlcnJvciIsIl9kYXRhIiwiX2NvbnRleHQiLCJfdW51c2VkIiwib2siLCJhbGVydCIsImVycm9yIiwiRXJyb3IiLCJfeCIsImxvY2F0aW9uIiwiaHJlZiIsIm1hdGNoSWQiLCJzZXRJbnRlcnZhbCIsIl9jYWxsZWUyIiwicmVzIiwiaiIsIl9jb250ZXh0MiIsImpzb24iLCJjbGVhckludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==