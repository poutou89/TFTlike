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
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
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
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
document.addEventListener('DOMContentLoaded', function () {
  var _document$getElementB, _document$getElementB2, _document$getElementB3;
  if (!document.body.classList.contains('page-match')) return;
  var ASSET_BASE = (window.ASSET_BASE || '/').replace(/\/?$/, '/');
  var full = function full(p) {
    var s = String(p || '');
    if (!s) return '';
    if (/^(?:https?:|data:|blob:)/i.test(s)) return s; // absolute or data URL
    return ASSET_BASE + s.replace(/^\/+/, '');
  };
  var board = document.getElementById('board');
  var logEl = document.getElementById('battle-log');
  var hudA = document.getElementById('hud-allies');
  var hudE = document.getElementById('hud-enemies');
  var hudATitle = document.getElementById('hud-allies-title');
  var hudETitle = document.getElementById('hud-enemies-title');
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
  var ALLIES = JSON.parse(((_document$getElementB2 = document.getElementById('allies-json')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.textContent) || '[]');
  var ENEMIES = JSON.parse(((_document$getElementB3 = document.getElementById('enemies-json')) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.textContent) || '[]');
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

  // Username headers: prefer replay-provided names; else derive from allies/enemies data; else random bot name
  function randBot() {
    var a = ['Airi', 'Mika', 'Yuna', 'Nia', 'Hana', 'Suki', 'Luna', 'Momo', 'Rin', 'Saya', 'Kira', 'Nova', 'Zoe', 'Aya'];
    var b = ['Fox', 'Star', 'Bloom', 'Dash', 'Wave', 'Heart', 'Spark', 'Song', 'Dream', 'Moon', 'Sky', 'Shine'];
    return a[Math.floor(Math.random() * a.length)] + ' ' + b[Math.floor(Math.random() * b.length)];
  }
  function pickOwnerName(side) {
    if (!side) return undefined;
    if (Array.isArray(side)) {
      var first = side[0] || {};
      return first.owner_name || first.username || first.player || first.user || first.owner || undefined;
    }
    return side.owner_name || side.username || side.player || side.user || side.owner || undefined;
  }
  var allyName = REPLAY.ally_username || REPLAY.ally_name || pickOwnerName(ALLIES) || REPLAY.player_ally || randBot();
  var enemyName = REPLAY.enemy_username || REPLAY.enemy_name || pickOwnerName(ENEMIES) || REPLAY.player_enemy || randBot();
  if (hudATitle) hudATitle.textContent = allyName;
  if (hudETitle) hudETitle.textContent = enemyName;
  function renderHUD() {
    var list = function list(team) {
      return _toConsumableArray(unitsById.values()).filter(function (u) {
        return u.team === team;
      }).map(function (u) {
        var fams = Array.isArray(u.families) ? u.families : [];
        var itms = Array.isArray(u.items) ? u.items : [];
        var cat = Array.isArray(window.ITEMS) ? window.ITEMS : [];
        var toPerc = function toPerc(v) {
          if (v == null) return null;
          var n = Number(v);
          if (!isFinite(n) || n <= 0) return null;
          // Accept either 0..1 or 0..100; normalize to 0..1 then to percent
          if (n > 1) n = n / 100;
          return Math.round(n * 100);
        };
        var resolveItem = function resolveItem(x) {
          if (typeof x === 'string') {
            var s = x.trim();
            if (/^(?:https?:|data:|blob:|\/)/i.test(s) || s.includes('/')) {
              return {
                img: s
              };
            }
            // likely an ID or bare filename; strip extension and lookup in catalog
            var id = s.replace(/\.[a-z0-9]+$/i, '');
            var found = cat.find(function (i) {
              return String(i.id) === String(id);
            });
            if (!found && /^\d+$/.test(id)) {
              found = cat.find(function (i) {
                return String(i.id) === 'fc' + id;
              });
            }
            if (found) return found;
            return {
              img: itemPath(s)
            };
          }
          if (typeof x === 'number') {
            var _id = String(x);
            var _found = cat.find(function (i) {
              return String(i.id) === _id;
            }) || cat.find(function (i) {
              return String(i.id) === 'fc' + _id;
            });
            return _found || {
              img: itemPath(x)
            };
          }
          if (x && x.id && !x.img && !x.icon && !x.image) {
            var f = cat.find(function (i) {
              return String(i.id) === String(x.id);
            });
            return f || x;
          }
          return x || {};
        };
        var itObjs = itms.map(resolveItem);
        var armor = u.armor != null && Number(u.armor) > 0 ? " \u2022 \uD83D\uDEE1\uFE0F".concat(u.armor) : '';
        var accP = toPerc(u.acc);
        var critP = toPerc(u.crit);
        var dodgeP = toPerc(u.dodge);
        var acc = accP != null ? " \u2022 \uD83C\uDFAF".concat(accP, "%") : '';
        var crit = critP != null ? " \u2022 \u2736".concat(critP, "%") : '';
        var dodge = dodgeP != null ? " \u2022 \uD83D\uDC5F".concat(dodgeP, "%") : '';
        var stats = "".concat(u.hp, " PV").concat(u.shield > 0 ? " \u2022 \uD83D\uDEE1".concat(u.shield) : '').concat(u.mana > 0 ? " \u2022 \uD83D\uDD37".concat(u.mana) : '').concat(u.atk ? " \u2022 \u2694\uFE0F".concat(u.atk) : '').concat(armor).concat(acc).concat(crit).concat(dodge);
        var itemsHtml = itObjs.map(function (it) {
          var src = it && (it.icon || it.img || it.image);
          return src ? "<img class=\"item\" src=\"".concat(full(src), "\" title=\"").concat(it.name || '', "\" alt=\"\">") : '';
        }).join('');
        var famHtml = fams.map(function (f) {
          return "<span class=\"tag\" title=\"".concat(f.name || f, "\">").concat(f["short"] || f.name || f, "</span>");
        }).join('');
        return "<li>\n          <div class=\"hud-ava\"><img src=\"".concat(full(u.img), "\" alt=\"\"></div>\n          <div class=\"hud-name\">").concat(u.name, "</div>\n          <div class=\"hud-stats\">").concat(stats, "</div>\n          <div class=\"hud-meta\">").concat(itemsHtml).concat(famHtml, "</div>\n        </li>");
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

  // --- Helpers to merge metadata (items/families/focus) from allies/enemies arrays ---
  function normalizeItems(raw) {
    if (!raw) return [];
    var arr = Array.isArray(raw) ? raw : [raw];
    return arr.map(function (x) {
      return x;
    });
  }
  function normalizeFamilies(raw) {
    if (!raw) return [];
    var arr = Array.isArray(raw) ? raw : [raw];
    return arr.map(function (x) {
      return typeof x === 'string' ? {
        name: x,
        "short": String(x).slice(0, 3).toUpperCase()
      } : x;
    });
  }
  function buildMetaIndex(list) {
    var byId = new Map();
    var byName = new Map();
    if (!Array.isArray(list)) return {
      byId: byId,
      byName: byName
    };
    var _iterator = _createForOfIteratorHelper(list),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ref, _e$id, _e$name, _ref2, _e$items, _e$families, _ref3, _e$focus_y;
        var e = _step.value;
        var id = (_ref = (_e$id = e === null || e === void 0 ? void 0 : e.id) !== null && _e$id !== void 0 ? _e$id : e === null || e === void 0 ? void 0 : e.unit_id) !== null && _ref !== void 0 ? _ref : e === null || e === void 0 ? void 0 : e.girl_id;
        var name = (_e$name = e === null || e === void 0 ? void 0 : e.name) !== null && _e$name !== void 0 ? _e$name : e === null || e === void 0 ? void 0 : e.girl_name;
        var meta = {
          items: normalizeItems((_ref2 = (_e$items = e === null || e === void 0 ? void 0 : e.items) !== null && _e$items !== void 0 ? _e$items : e === null || e === void 0 ? void 0 : e.item) !== null && _ref2 !== void 0 ? _ref2 : e === null || e === void 0 ? void 0 : e.item_id),
          families: normalizeFamilies((_e$families = e === null || e === void 0 ? void 0 : e.families) !== null && _e$families !== void 0 ? _e$families : e === null || e === void 0 ? void 0 : e.family),
          focus_y: (_ref3 = (_e$focus_y = e === null || e === void 0 ? void 0 : e.focus_y) !== null && _e$focus_y !== void 0 ? _e$focus_y : e === null || e === void 0 ? void 0 : e.focusY) !== null && _ref3 !== void 0 ? _ref3 : e === null || e === void 0 ? void 0 : e.foc_y
        };
        if (id != null) byId.set(String(id), meta);
        if (name) byName.set(String(name).toLowerCase(), meta);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return {
      byId: byId,
      byName: byName
    };
  }
  var META_ALLY = buildMetaIndex(ALLIES);
  var META_ENEMY = buildMetaIndex(ENEMIES);
  var ITEM_CAT = Array.isArray(window.ITEMS) ? window.ITEMS : [];
  var itemPath = function itemPath(s) {
    var clean = String(s || '').trim();
    if (!clean) return '';
    var mExt = clean.match(/\.[a-z0-9]+$/i);
    var hasExt = !!mExt;
    var base = hasExt ? clean.replace(/\.[a-z0-9]+$/i, '') : clean;
    // If base is digits-only, filenames are prefixed with 'fc'
    var filenameBase = /^\d+$/.test(base) ? 'fc' + base : base;
    var ext = hasExt ? mExt[0] : '.png';
    return 'images/items/' + filenameBase + ext;
  };
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
        // enrich from side data if available
        var src = u.team === 'ally' ? META_ALLY : META_ENEMY;
        var m = src.byId.get(String(u.id)) || (u.name ? src.byName.get(String(u.name).toLowerCase()) : null) || null;
        if (m) {
          if (!Array.isArray(u.items)) u.items = m.items || [];
          if (!Array.isArray(u.families)) u.families = m.families || [];
          if (u.focus_y == null && m.focus_y != null) u.focus_y = m.focus_y;
        } else {
          // basic fallback if replay embeds a single item
          if (u.item && !u.items) u.items = normalizeItems(u.item);
        }
        // resolve item IDs to full objects (so icons show)
        if (Array.isArray(u.items)) {
          u.items = u.items.map(function (it) {
            if (typeof it === 'number') {
              var id = String(it);
              return ITEM_CAT.find(function (i) {
                return String(i.id) === id;
              }) || ITEM_CAT.find(function (i) {
                return String(i.id) === 'fc' + id;
              }) || {
                img: itemPath(id)
              };
            }
            if (typeof it === 'string') {
              var s = it.trim();
              if (/^(?:https?:|data:|blob:|\/)/i.test(s) || s.includes('/')) {
                return {
                  img: s
                };
              }
              var _id2 = s.replace(/\.[a-z0-9]+$/i, '');
              var found = ITEM_CAT.find(function (i) {
                return String(i.id) === String(_id2);
              }) || (/^\d+$/.test(_id2) ? ITEM_CAT.find(function (i) {
                return String(i.id) === 'fc' + _id2;
              }) : null);
              return found || {
                img: itemPath(s)
              };
            }
            if (it && it.id && !it.img && !it.icon && !it.image) {
              var f = ITEM_CAT.find(function (i) {
                return String(i.id) === String(it.id);
              });
              return f || it;
            }
            return it;
          });
        }
        var el = document.createElement('div');
        el.className = "unit unit--".concat(u.team, " unit--").concat(u["class"]);
        // Portrait with per-unit bars under it
        var focY = u.focus_y;
        if (typeof focY !== 'number') {
          focY = 0.20;
        } else if (focY > 1) {
          focY = focY / 100;
        } // accept percent
        el.innerHTML = "\n    <img src=\"".concat(full(u.img), "\" alt=\"\" style=\"object-position:center ").concat(Math.round(focY * 100), "%\">\n    <div class=\"u-bars\">\n      <div class=\"u-bar u-bar--hp\"><span></span></div>\n      <div class=\"u-bar u-bar--mana\"><span></span></div>\n    </div>\n  ").concat(Array.isArray(u.items) && u.items.length ? "<div class=\"u-items\">".concat(u.items.map(function (it) {
          var src = (it === null || it === void 0 ? void 0 : it.icon) || (it === null || it === void 0 ? void 0 : it.img) || (it === null || it === void 0 ? void 0 : it.image) || '';
          return src ? "<img src=\"".concat(full(src), "\" alt=\"\" title=\"").concat(it.name || '', "\">") : '';
        }).join(''), "</div>") : '');
        var c = cell(u.x, u.y);
        if (c) c.appendChild(el);
        u.el = el;
        unitsById.set(u.id, u);
        updateBars(u);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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
  var IS_TOUCH = window.matchMedia && window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
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
  var hintEl = document.querySelector('.tb-hint');
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

  // Selection state for touch/mobile (and keyboard/mouse as a fallback to DnD)
  var selection = {
    type: null,
    data: null,
    el: null
  }; // type: 'girl' | 'item' | null
  function clearSelection() {
    if (selection.el) selection.el.classList.remove('is-selected');
    selection = {
      type: null,
      data: null,
      el: null
    };
    board.classList.remove('is-placing', 'is-equipping');
    document.querySelectorAll('.tb-item.is-selected').forEach(function (b) {
      return b.classList.remove('is-selected');
    });
    if (hintEl && IS_TOUCH) hintEl.textContent = 'Place exactement 4 héroïnes.';
  }
  function selectGirl(girl, el) {
    clearSelection();
    selection = {
      type: 'girl',
      data: girl,
      el: el
    };
    if (el) el.classList.add('is-selected');
    board.classList.add('is-placing');
    if (hintEl && IS_TOUCH) hintEl.textContent = 'Sélectionne une case du plateau pour placer la héroïne.';
  }
  function selectItem(item, el) {
    clearSelection();
    selection = {
      type: 'item',
      data: item,
      el: el
    };
    if (el) el.classList.add('is-selected');
    board.classList.add('is-equipping');
    if (hintEl && IS_TOUCH) hintEl.textContent = 'Tape une héroïne sur le plateau pour lui attribuer l\'objet.';
  }

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
      btn.setAttribute('aria-label', title);
      btn.draggable = !IS_TOUCH;
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
      // Tap to equip (mobile-friendly)
      btn.addEventListener('click', function () {
        var already = btn.classList.contains('is-selected');
        if (already) {
          clearSelection();
          return;
        }
        selectItem(it, btn);
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
    card.draggable = !IS_TOUCH;
    card.dataset.id = girl.id;
    card.dataset.source = source;
    card.innerHTML = "\n      <button class=\"tb-card__bench-btn\" type=\"button\" title=\"Ajouter au banc\" aria-label=\"Ajouter au banc\">\uD83E\uDDFA</button>\n      <div class=\"tb-card__img\">\n        <img src=\"".concat(fullImg(girl.img), "\" alt=\"").concat(girl.name, "\">\n      </div>\n      <div class=\"tb-card__meta\">\n        <div class=\"tb-card__name\">").concat(girl.name, "</div>\n        <div class=\"tb-card__tags\">\n          <span class=\"tag ").concat(classTag(girl["class"]), "\">").concat(classLabel(girl["class"]), "</span>\n          <span class=\"tag tag-family\">").concat((_girl$family = girl.family) !== null && _girl$family !== void 0 ? _girl$family : '', "</span>\n        </div>\n      </div>\n      <div class=\"tb-card__stats\">\n        <span>PV ").concat(girl.pdv, "</span>\n        <span>ATK ").concat(girl.atk, "</span>\n        <span>PRC ").concat(Math.round(((_girl$chance_atk = girl.chance_atk) !== null && _girl$chance_atk !== void 0 ? _girl$chance_atk : 0) * 100), "%</span>\n      </div>\n    ");

    // Bench button (useful on mobile)
    var benchBtn = card.querySelector('.tb-card__bench-btn');
    benchBtn === null || benchBtn === void 0 || benchBtn.addEventListener('click', function (ev) {
      ev.stopPropagation();
      if (card.parentElement !== benchGrid) {
        benchGrid.appendChild(card);
        inBench.set(girl.id, card);
        updateLockState();
      }
    });
    card.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('text/plain', JSON.stringify(girl));
      requestAnimationFrame(function () {
        return card.classList.add('dragging');
      });
    });
    card.addEventListener('dragend', function () {
      return card.classList.remove('dragging');
    });

    // Single tap/click to select for placement (mobile and desktop alternative to DnD)
    card.addEventListener('click', function (ev) {
      var _selection$data;
      // If an item is selected, ignore selecting a card; keep equip mode
      if (selection.type === 'item') return;
      if (selection.type === 'girl' && ((_selection$data = selection.data) === null || _selection$data === void 0 ? void 0 : _selection$data.id) === girl.id) {
        clearSelection();
      } else {
        selectGirl(girl, card);
      }
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
    chip.draggable = !IS_TOUCH;
    var focalY = typeof girl.focus_y === 'number' ? "".concat(girl.focus_y, "%") : '10%';
    chip.innerHTML = "\n      <img class=\"chip-avatar\" src=\"".concat(fullImg(girl.img), "\" alt=\"").concat(girl.name, "\" style=\"object-position:center ").concat(focalY, ";\">\n      <span class=\"chip-item\"></span>\n    ");
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

    // Tap to unequip item if an item is selected, otherwise remove the unit to bench
    chip.addEventListener('click', function () {
      var _chip$parentElement2;
      var cell = (_chip$parentElement2 = chip.parentElement) === null || _chip$parentElement2 === void 0 ? void 0 : _chip$parentElement2.closest('.cell');
      if (!cell) return;

      // If we are in equip mode, assign item to this chip directly
      if (selection.type === 'item') {
        var _key = cellKey(cell.dataset.x, cell.dataset.y);
        var slot = placed.get(_key);
        if (slot) {
          slot.itemId = selection.data.id;
          var _holder = chip.querySelector('.chip-item');
          var _item = (window.ITEMS || []).find(function (i) {
            return String(i.id) === String(selection.data.id);
          });
          if (_holder && _item) {
            var _tip = _item.desc ? "".concat(_item.name, " \u2014 ").concat(_item.desc) : _item.name;
            _holder.innerHTML = "<img class=\"chip-item-img\" src=\"".concat(fullImg(_item.img), "\" alt=\"").concat(_item.name, "\" title=\"").concat(_tip, "\">");
            var img = _holder.querySelector('.chip-item-img');
            if (img) {
              img.classList.add('flash');
              setTimeout(function () {
                return img.classList.remove('flash');
              }, 600);
            }
          }
          clearSelection();
        }
        return;
      }

      // Else, remove the unit from the board (send back to bench visually)
      var key = cellKey(cell.dataset.x, cell.dataset.y);
      placed["delete"](key);
      cell.innerHTML = '';
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

  // Click-to-place/equip support
  function placeGirlOnCell(girl, cell) {
    if (!cell) return false;
    var _cell$dataset2 = cell.dataset,
      x = _cell$dataset2.x,
      y = _cell$dataset2.y;
    var key = cellKey(x, y);
    // if already placed elsewhere, free it
    var _iterator2 = _createForOfIteratorHelper(placed),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          k = _step2$value[0],
          v = _step2$value[1];
        if (v.girl.id === girl.id) {
          placed["delete"](k);
          var oldCell = board.querySelector(".cell[data-x=\"".concat(k.split(',')[0], "\"][data-y=\"").concat(k.split(',')[1], "\"]"));
          if (oldCell) oldCell.innerHTML = '';
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!placed.has(key) && placed.size >= MAX_TEAM) return false;
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
    return true;
  }
  board.addEventListener('click', function (e) {
    var cell = e.target.closest('.cell');
    if (!cell) return;
    if (selection.type === 'girl') {
      var ok = placeGirlOnCell(selection.data, cell);
      if (ok) clearSelection();
      return;
    }
    if (selection.type === 'item') {
      var key = cellKey(cell.dataset.x, cell.dataset.y);
      var slot = placed.get(key);
      if (!slot) return;
      slot.itemId = selection.data.id;
      var chip = slot.el;
      var holder = chip.querySelector('.chip-item');
      var item = (window.ITEMS || []).find(function (i) {
        return String(i.id) === String(selection.data.id);
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
      clearSelection();
      return;
    }
  });

  // Clear selection when tapping outside interactive zones
  document.addEventListener('click', function (e) {
    var _e$target$closest, _e$target;
    var within = (_e$target$closest = (_e$target = e.target).closest) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.call(_e$target, '.tb-card, .tb-item, .tb-board .cell, .tb-board, .tb-pick__grid, .tb-bench__grid');
    if (!within) clearSelection();
  });

  // ---- DnD bench ----
  benchGrid.addEventListener('dragover', function (e) {
    return e.preventDefault();
  });
  benchGrid.addEventListener('drop', function (e) {
    e.preventDefault();
    var girl = JSON.parse(e.dataTransfer.getData('text/plain') || '{}');

    // retire du board si présente
    var _iterator3 = _createForOfIteratorHelper(placed),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
          k = _step3$value[0],
          v = _step3$value[1];
        if (v.girl.id === girl.id) {
          var c = board.querySelector(".cell[data-x=\"".concat(k.split(',')[0], "\"][data-y=\"").concat(k.split(',')[1], "\"]"));
          if (c) c.innerHTML = '';
          placed["delete"](k);
          break;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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
    var _iterator4 = _createForOfIteratorHelper(placed),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _slicedToArray(_step4.value, 2),
          girl = _step4$value[1].girl;
        var _fam = (girl.family || '').toLowerCase();
        if (!_fam) continue;
        counts[_fam] = (counts[_fam] || 0) + 1;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
            // Clear any selection to avoid confusion after refreshing candidates/items
            clearSelection();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_at_js-node_modules_core-js_modules_es_array_con-731d7c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsR0FBQWtFLFNBQUEsQ0FBQWpiLENBQUE7WUFBQWliLFNBQUEsQ0FBQWhiLENBQUE7WUFBQSxPQUNVOFcsR0FBRyxDQUFDMkIsSUFBSSxDQUFDLENBQUM7VUFBQTtZQUF2QjFILElBQUksR0FBQWlLLFNBQUEsQ0FBQWpiLENBQUE7WUFDVjJhLFdBQVcsR0FBR3phLE1BQU0sRUFBQTZhLFVBQUEsR0FBQy9KLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFelksSUFBSSxjQUFBd2lCLFVBQUEsY0FBQUEsVUFBQSxHQUFJSixXQUFXLENBQUM7WUFBQ00sU0FBQSxDQUFBaGIsQ0FBQTtZQUFBO1VBQUE7WUFBQWdiLFNBQUEsQ0FBQTVoQixDQUFBO1lBQUEyaEIsR0FBQSxHQUFBQyxTQUFBLENBQUFqYixDQUFBO1VBQUE7WUFFbEQ2YSxjQUFjLENBQUMsQ0FBQztZQUNoQjtZQUNBNUosY0FBYyxDQUFDLENBQUM7WUFDaEJvRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZDtZQUNBckMsWUFBWSxHQUFHTCxPQUFPLENBQUNiLFNBQVMsQ0FBQztZQUNqQ21CLFdBQVcsQ0FBQyxDQUFDO1VBQUM7WUFBQSxPQUFBZ0osU0FBQSxDQUFBamQsQ0FBQTtRQUFBO01BQUEsR0FBQThjLFFBQUE7SUFBQSxDQUNmLEdBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqcEJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjtBQUNXO0FBQ0Q7QUFDUDtBQUNDO0FBRS9CcmlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ2I3RSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvbWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0phdmFTY3JpcHQvdGVhbS1idWlsZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvSmF2YVNjcmlwdC9yZWdpc3Rlci5qc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHBhc3MxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyX3R5cGVfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0Jyk7XHJcbiAgY29uc3QgcGFzczIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJfdHlwZV9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJyk7XHJcbiAgY29uc3QgcmVnaXN0ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItYnRuJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrUGFzc3dvcmRzKCkge1xyXG4gICAgaWYgKHBhc3MxLnZhbHVlICYmIHBhc3MxLnZhbHVlID09PSBwYXNzMi52YWx1ZSkge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVnaXN0ZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHBhc3MxICYmIHBhc3MyICYmIHJlZ2lzdGVyQnRuKSB7XHJcbiAgICBwYXNzMS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrUGFzc3dvcmRzKTtcclxuICAgIHBhc3MyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tQYXNzd29yZHMpO1xyXG4gIH1cclxufSk7XHJcbiIsIlxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21nLXJvc3Rlci10cmFjaycpO1xyXG4gIGlmICghdHJhY2spIHJldHVybjtcclxuXHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1wcmV2Jyk7XHJcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbmF2LS1uZXh0Jyk7XHJcbiAgY29uc3Qgc3RlcCA9IDI4MDsgLy8gcHggcGFyIGNsaWNcclxuXHJcbiAgY29uc3Qgc2Nyb2xsQnkgPSAoZGVsdGEpID0+IHRyYWNrLnNjcm9sbEJ5KHsgbGVmdDogZGVsdGEsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcbiAgcHJldj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGxCeSgtc3RlcCkpO1xyXG4gIG5leHQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsQnkoc3RlcCkpO1xyXG59KTtcclxuY29uc29sZS5sb2coJ2hvbWUuanMnKTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLW1hdGNoJykpIHJldHVybjtcclxuXHJcbiAgY29uc3QgQVNTRVRfQkFTRSA9ICh3aW5kb3cuQVNTRVRfQkFTRSB8fCAnLycpLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcclxuICBjb25zdCBmdWxsID0gKHApID0+IHtcclxuICAgIGNvbnN0IHMgPSBTdHJpbmcocCB8fCAnJyk7XHJcbiAgICBpZiAoIXMpIHJldHVybiAnJztcclxuICAgIGlmICgvXig/Omh0dHBzPzp8ZGF0YTp8YmxvYjopL2kudGVzdChzKSkgcmV0dXJuIHM7IC8vIGFic29sdXRlIG9yIGRhdGEgVVJMXHJcbiAgICByZXR1cm4gQVNTRVRfQkFTRSArIHMucmVwbGFjZSgvXlxcLysvLCAnJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYm9hcmQgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcclxuICBjb25zdCBsb2dFbCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGUtbG9nJyk7XHJcbiAgY29uc3QgaHVkQSAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkLWFsbGllcycpO1xyXG4gIGNvbnN0IGh1ZEUgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZC1lbmVtaWVzJyk7XHJcbiAgY29uc3QgaHVkQVRpdGxlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkLWFsbGllcy10aXRsZScpO1xyXG4gIGNvbnN0IGh1ZEVUaXRsZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZC1lbmVtaWVzLXRpdGxlJyk7XHJcbiAgY29uc3QgYnRuU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXN0YXJ0Jyk7XHJcbiAgY29uc3QgYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXBhdXNlJyk7XHJcbiAgY29uc3QgYnRuUmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJlc2V0Jyk7XHJcbiAgY29uc3QgYnRuTXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW11c2ljJyk7XHJcblxyXG4gIGlmICghYm9hcmQgfHwgIWxvZ0VsIHx8ICFodWRBIHx8ICFodWRFIHx8ICFidG5TdGFydCB8fCAhYnRuUGF1c2UgfHwgIWJ0blJlc2V0KSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ01hdGNoIFVJIG1pc3NpbmcnLCB7IGJvYXJkLCBsb2dFbCwgaHVkQSwgaHVkRSwgYnRuU3RhcnQsIGJ0blBhdXNlLCBidG5SZXNldCB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IFJFUExBWSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcGxheS1qc29uJyk/LnRleHRDb250ZW50IHx8ICd7fScpO1xyXG4gIGNvbnN0IEFMTElFUyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbGllcy1qc29uJyk/LnRleHRDb250ZW50IHx8ICdbXScpO1xyXG4gIGNvbnN0IEVORU1JRVM9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW1pZXMtanNvbicpPy50ZXh0Q29udGVudCB8fCAnW10nKTtcclxuICBpZiAoIVJFUExBWSB8fCAhQXJyYXkuaXNBcnJheShSRVBMQVkuaW5pdGlhbCkpIHsgY29uc29sZS53YXJuKCdObyByZXBsYXkgcHJvdmlkZWQnKTsgcmV0dXJuOyB9XHJcbiAgY29uc29sZS5kZWJ1ZygnUkVQTEFZOicsIFJFUExBWSxcclxuICAgICAgICAgICAgICAgICdhbGx5Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdhbGx5JykubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgJ2VuZW15Q291bnQ9JywgUkVQTEFZLmluaXRpYWwuZmlsdGVyKHU9PnUudGVhbT09PSdlbmVteScpLmxlbmd0aCk7XHJcblxyXG4gIGNvbnN0IHVuaXRzQnlJZCA9IG5ldyBNYXAoKTsgLy8gaWQgLT4gcnVudGltZSB1bml0XHJcbiAgbGV0IHRpbWVyID0gbnVsbCwgc3RlcCA9IDA7XHJcbiAgY29uc3QgVElDS19NUyA9IDQwMDtcclxuXHJcbiAgLy8gLS0tIEJhY2tncm91bmQgbXVzaWMgKEJHTSkgLS0tXHJcbiAgbGV0IGJnbSA9IG51bGwsIGJnbUVuYWJsZWQgPSB0cnVlLCBiZ21GYWRpbmcgPSBmYWxzZTtcclxuICBjb25zdCBiZ21VcmwgPSB3aW5kb3cuQkdNX1VSTDtcclxuICBpZiAoYmdtVXJsKSB7XHJcbiAgICBiZ20gPSBuZXcgQXVkaW8oYmdtVXJsKTtcclxuICAgIGJnbS5sb29wID0gdHJ1ZTtcclxuICAgIGJnbS5wcmVsb2FkID0gJ2F1dG8nO1xyXG4gICAgYmdtLnZvbHVtZSA9IDAuMDsgLy8gc3RhcnQgc2lsZW50LCBmYWRlIGluIG9uIFN0YXJ0XHJcbiAgfVxyXG4gIGlmIChidG5NdXNpYykge1xyXG4gICAgaWYgKCFiZ20pIHsgYnRuTXVzaWMuZGlzYWJsZWQgPSB0cnVlOyBidG5NdXNpYy50aXRsZSA9ICdBdWN1bmUgbXVzaXF1ZSBkaXNwb25pYmxlJzsgfVxyXG4gICAgYnRuTXVzaWMuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBiZ21FbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgICBidG5NdXNpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYmdtRW5hYmxlZCA9ICFiZ21FbmFibGVkO1xyXG4gICAgICBidG5NdXNpYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGJnbUVuYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcclxuICAgICAgaWYgKCFiZ20pIHJldHVybjtcclxuICAgICAgaWYgKGJnbUVuYWJsZWQpIHsgYmdtLnBsYXkoKS5jYXRjaCgoKT0+e30pOyB9IGVsc2UgeyBiZ20ucGF1c2UoKTsgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGJnbVBsYXkoKXsgaWYgKCFiZ20gfHwgIWJnbUVuYWJsZWQpIHJldHVybjsgYmdtRmFkaW5nPWZhbHNlOyBiZ20ucGxheSgpLmNhdGNoKChlKT0+eyBjb25zb2xlLmRlYnVnKCdiZ20gcGxheSBmYWlsZWQnLCBlKTsgfSk7IH1cclxuICBmdW5jdGlvbiBiZ21QYXVzZSgpeyBpZiAoIWJnbSkgcmV0dXJuOyBiZ20ucGF1c2UoKTsgfVxyXG4gIGZ1bmN0aW9uIGJnbUZhZGVPdXQobXM9OTAwKXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZyA9IHRydWU7IGNvbnN0IHN0YXJ0ID0gYmdtLnZvbHVtZTsgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIGNvbnN0IHN0ZXBGbiA9IChub3cpID0+IHtcclxuICAgICAgaWYgKCFiZ21GYWRpbmcpIHJldHVybjtcclxuICAgICAgY29uc3QgayA9IE1hdGgubWluKDEsIChub3cgLSB0MCkgLyBtcyk7XHJcbiAgICAgIGJnbS52b2x1bWUgPSBzdGFydCAqICgxIC0gayk7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7IGVsc2UgeyBiZ20ucGF1c2UoKTsgYmdtLnZvbHVtZSA9IHN0YXJ0OyBiZ21GYWRpbmcgPSBmYWxzZTsgfVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwRm4pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBiZ21GYWRlSW4obXM9NTAwLCB0YXJnZXQ9MC41KXtcclxuICAgIGlmICghYmdtKSByZXR1cm47IGJnbUZhZGluZz1mYWxzZTsgY29uc3Qgc3RhcnQgPSBiZ20udm9sdW1lOyBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgY29uc3Qgc3RlcEZuID0gKG5vdykgPT4ge1xyXG4gICAgICBjb25zdCBrID0gTWF0aC5taW4oMSwgKG5vdyAtIHQwKSAvIG1zKTtcclxuICAgICAgYmdtLnZvbHVtZSA9IHN0YXJ0ICsgKHRhcmdldCAtIHN0YXJ0KSAqIGs7XHJcbiAgICAgIGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgICB9O1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXBGbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjZWxsID0gKHgseSkgPT4gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZyhtc2cpeyBpZighbXNnKXJldHVybjsgY29uc3QgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgZC50ZXh0Q29udGVudD1tc2c7XHJcbiAgICBsb2dFbC5hcHBlbmRDaGlsZChkKTsgbG9nRWwuc2Nyb2xsVG9wPWxvZ0VsLnNjcm9sbEhlaWdodDsgfVxyXG5cclxuICAvLyBVc2VybmFtZSBoZWFkZXJzOiBwcmVmZXIgcmVwbGF5LXByb3ZpZGVkIG5hbWVzOyBlbHNlIGRlcml2ZSBmcm9tIGFsbGllcy9lbmVtaWVzIGRhdGE7IGVsc2UgcmFuZG9tIGJvdCBuYW1lXHJcbiAgZnVuY3Rpb24gcmFuZEJvdCgpe1xyXG4gICAgY29uc3QgYT1bJ0FpcmknLCdNaWthJywnWXVuYScsJ05pYScsJ0hhbmEnLCdTdWtpJywnTHVuYScsJ01vbW8nLCdSaW4nLCdTYXlhJywnS2lyYScsJ05vdmEnLCdab2UnLCdBeWEnXTtcclxuICAgIGNvbnN0IGI9WydGb3gnLCdTdGFyJywnQmxvb20nLCdEYXNoJywnV2F2ZScsJ0hlYXJ0JywnU3BhcmsnLCdTb25nJywnRHJlYW0nLCdNb29uJywnU2t5JywnU2hpbmUnXTtcclxuICAgIHJldHVybiBhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphLmxlbmd0aCldICsgJyAnICsgYltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYi5sZW5ndGgpXTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcGlja093bmVyTmFtZShzaWRlKXtcclxuICAgIGlmICghc2lkZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHNpZGUpKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gc2lkZVswXSB8fCB7fTtcclxuICAgICAgcmV0dXJuIGZpcnN0Lm93bmVyX25hbWUgfHwgZmlyc3QudXNlcm5hbWUgfHwgZmlyc3QucGxheWVyIHx8IGZpcnN0LnVzZXIgfHwgZmlyc3Qub3duZXIgfHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpZGUub3duZXJfbmFtZSB8fCBzaWRlLnVzZXJuYW1lIHx8IHNpZGUucGxheWVyIHx8IHNpZGUudXNlciB8fCBzaWRlLm93bmVyIHx8IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgY29uc3QgYWxseU5hbWUgID0gUkVQTEFZLmFsbHlfdXNlcm5hbWUgIHx8IFJFUExBWS5hbGx5X25hbWUgIHx8IHBpY2tPd25lck5hbWUoQUxMSUVTKSAgfHwgUkVQTEFZLnBsYXllcl9hbGx5ICB8fCByYW5kQm90KCk7XHJcbiAgY29uc3QgZW5lbXlOYW1lID0gUkVQTEFZLmVuZW15X3VzZXJuYW1lIHx8IFJFUExBWS5lbmVteV9uYW1lIHx8IHBpY2tPd25lck5hbWUoRU5FTUlFUykgfHwgUkVQTEFZLnBsYXllcl9lbmVteSB8fCByYW5kQm90KCk7XHJcbiAgaWYgKGh1ZEFUaXRsZSkgaHVkQVRpdGxlLnRleHRDb250ZW50ID0gYWxseU5hbWU7XHJcbiAgaWYgKGh1ZEVUaXRsZSkgaHVkRVRpdGxlLnRleHRDb250ZW50ID0gZW5lbXlOYW1lO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXJIVUQoKXtcclxuICAgIGNvbnN0IGxpc3QgPSAodGVhbSkgPT4gWy4uLnVuaXRzQnlJZC52YWx1ZXMoKV0uZmlsdGVyKHU9PnUudGVhbT09PXRlYW0pXHJcbiAgICAgIC5tYXAodT0+e1xyXG4gICAgICAgIGNvbnN0IGZhbXMgPSBBcnJheS5pc0FycmF5KHUuZmFtaWxpZXMpP3UuZmFtaWxpZXM6W107XHJcbiAgICAgICAgY29uc3QgaXRtcyA9IEFycmF5LmlzQXJyYXkodS5pdGVtcyk/dS5pdGVtczpbXTtcclxuICAgICAgICBjb25zdCBjYXQgID0gQXJyYXkuaXNBcnJheSh3aW5kb3cuSVRFTVMpID8gd2luZG93LklURU1TIDogW107XHJcbiAgICAgICAgY29uc3QgdG9QZXJjID0gKHYpID0+IHtcclxuICAgICAgICAgIGlmICh2ID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgbGV0IG4gPSBOdW1iZXIodik7XHJcbiAgICAgICAgICBpZiAoIWlzRmluaXRlKG4pIHx8IG4gPD0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAvLyBBY2NlcHQgZWl0aGVyIDAuLjEgb3IgMC4uMTAwOyBub3JtYWxpemUgdG8gMC4uMSB0aGVuIHRvIHBlcmNlbnRcclxuICAgICAgICAgIGlmIChuID4gMSkgbiA9IG4gLyAxMDA7XHJcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuICogMTAwKTtcclxuICAgICAgICB9O1xyXG4gICAgY29uc3QgcmVzb2x2ZUl0ZW0gPSAoeCk9PntcclxuICAgICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY29uc3QgcyA9IHgudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAoL14oPzpodHRwcz86fGRhdGE6fGJsb2I6fFxcLykvaS50ZXN0KHMpIHx8IHMuaW5jbHVkZXMoJy8nKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGltZzogcyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxpa2VseSBhbiBJRCBvciBiYXJlIGZpbGVuYW1lOyBzdHJpcCBleHRlbnNpb24gYW5kIGxvb2t1cCBpbiBjYXRhbG9nXHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcy5yZXBsYWNlKC9cXC5bYS16MC05XSskL2ksICcnKTtcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gY2F0LmZpbmQoaT0+U3RyaW5nKGkuaWQpPT09U3RyaW5nKGlkKSk7XHJcbiAgICAgICAgICAgIGlmICghZm91bmQgJiYgL15cXGQrJC8udGVzdChpZCkpIHtcclxuICAgICAgICAgICAgICBmb3VuZCA9IGNhdC5maW5kKGk9PlN0cmluZyhpLmlkKT09PSgnZmMnICsgaWQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZm91bmQpIHJldHVybiBmb3VuZDtcclxuICAgICAgcmV0dXJuIHsgaW1nOiBpdGVtUGF0aChzKSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IFN0cmluZyh4KTtcclxuICAgICAgICAgICAgY29uc3QgZm91bmQgPSBjYXQuZmluZChpPT5TdHJpbmcoaS5pZCk9PT1pZCkgfHwgY2F0LmZpbmQoaT0+U3RyaW5nKGkuaWQpPT09KCdmYycraWQpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kIHx8IHsgaW1nOiBpdGVtUGF0aCh4KSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHggJiYgeC5pZCAmJiAoIXguaW1nICYmICF4Lmljb24gJiYgIXguaW1hZ2UpKXtcclxuICAgICAgICAgICAgY29uc3QgZiA9IGNhdC5maW5kKGk9PlN0cmluZyhpLmlkKT09PVN0cmluZyh4LmlkKSk7IHJldHVybiBmfHx4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHh8fHt9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgaXRPYmpzID0gaXRtcy5tYXAocmVzb2x2ZUl0ZW0pO1xyXG4gICAgICAgIGNvbnN0IGFybW9yID0gKHUuYXJtb3IhPW51bGwgJiYgTnVtYmVyKHUuYXJtb3IpID4gMCA/IGAg4oCiIPCfm6HvuI8ke3UuYXJtb3J9YCA6ICcnKTtcclxuICAgICAgICBjb25zdCBhY2NQICAgPSB0b1BlcmModS5hY2MpO1xyXG4gICAgICAgIGNvbnN0IGNyaXRQICA9IHRvUGVyYyh1LmNyaXQpO1xyXG4gICAgICAgIGNvbnN0IGRvZGdlUCA9IHRvUGVyYyh1LmRvZGdlKTtcclxuICAgICAgICBjb25zdCBhY2MgICAgPSBhY2NQICAhPSBudWxsID8gYCDigKIg8J+OryR7YWNjUH0lYCAgIDogJyc7XHJcbiAgICAgICAgY29uc3QgY3JpdCAgID0gY3JpdFAgIT0gbnVsbCA/IGAg4oCiIOKctiR7Y3JpdFB9JWAgIDogJyc7XHJcbiAgICAgICAgY29uc3QgZG9kZ2UgID0gZG9kZ2VQIT0gbnVsbCA/IGAg4oCiIPCfkZ8ke2RvZGdlUH0lYCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHN0YXRzID0gYCR7dS5ocH0gUFYke3Uuc2hpZWxkPjA/YCDigKIg8J+boSR7dS5zaGllbGR9YDonJ30ke3UubWFuYT4wP2Ag4oCiIPCflLcke3UubWFuYX1gOicnfSR7dS5hdGs/YCDigKIg4pqU77iPJHt1LmF0a31gOicnfSR7YXJtb3J9JHthY2N9JHtjcml0fSR7ZG9kZ2V9YDtcclxuICAgICAgICBjb25zdCBpdGVtc0h0bWwgPSBpdE9ianMubWFwKGl0PT57XHJcbiAgICAgICAgICBjb25zdCBzcmMgPSBpdCAmJiAoaXQuaWNvbiB8fCBpdC5pbWcgfHwgaXQuaW1hZ2UpO1xyXG4gICAgICAgICAgcmV0dXJuIHNyYyA/IGA8aW1nIGNsYXNzPVxcXCJpdGVtXFxcIiBzcmM9XFxcIiR7ZnVsbChzcmMpfVxcXCIgdGl0bGU9XFxcIiR7aXQubmFtZXx8Jyd9XFxcIiBhbHQ9XFxcIlxcXCI+YCA6ICcnO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgICAgIGNvbnN0IGZhbUh0bWwgPSBmYW1zLm1hcChmPT5gPHNwYW4gY2xhc3M9XCJ0YWdcIiB0aXRsZT1cIiR7Zi5uYW1lfHxmfVwiPiR7Zi5zaG9ydHx8Zi5uYW1lfHxmfTwvc3Bhbj5gKS5qb2luKCcnKTtcclxuICAgICAgICByZXR1cm4gYDxsaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJodWQtYXZhXCI+PGltZyBzcmM9XCIke2Z1bGwodS5pbWcpfVwiIGFsdD1cIlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImh1ZC1uYW1lXCI+JHt1Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaHVkLXN0YXRzXCI+JHtzdGF0c308L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJodWQtbWV0YVwiPiR7aXRlbXNIdG1sfSR7ZmFtSHRtbH08L2Rpdj5cclxuICAgICAgICA8L2xpPmA7XHJcbiAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgaHVkQS5pbm5lckhUTUwgPSBsaXN0KCdhbGx5Jyk7IGh1ZEUuaW5uZXJIVE1MID0gbGlzdCgnZW5lbXknKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUJhcnModSl7XHJcbiAgICBjb25zdCBocD11LmVsLnF1ZXJ5U2VsZWN0b3IoJy5ocCcpOyBpZihocCl7IGhwLnRleHRDb250ZW50ID0gdS5ocDsgfVxyXG4gICAgY29uc3Qgc2g9dS5lbC5xdWVyeVNlbGVjdG9yKCcuc2hpZWxkJyk7IGlmKHNoKXsgc2gudGV4dENvbnRlbnQ9dS5zaGllbGQ7IHNoLnN0eWxlLmRpc3BsYXk9dS5zaGllbGQ+MD8nJzonbm9uZSc7IH1cclxuICAgIGNvbnN0IG1hPXUuZWwucXVlcnlTZWxlY3RvcignLm1hbmEnKTsgICBpZihtYSl7IG1hLnRleHRDb250ZW50PXUubWFuYTsgICBtYS5zdHlsZS5kaXNwbGF5PXUubWFuYT4wPycnOidub25lJzsgfVxyXG4gICAgLy8gUGVyLXVuaXQgYmFycyBvbiB0aGUgYm9hcmRcclxuICAgIGNvbnN0IGhwRmlsbCA9IHUuZWwucXVlcnlTZWxlY3RvcignLnUtYmFyLS1ocCA+IHNwYW4nKTtcclxuICAgIGNvbnN0IG1hRmlsbCA9IHUuZWwucXVlcnlTZWxlY3RvcignLnUtYmFyLS1tYW5hID4gc3BhbicpO1xyXG4gICAgaWYoaHBGaWxsKXtcclxuICAgICAgY29uc3QgbWF4SHAgPSBNYXRoLm1heCgxLCB1Lm1heEhwIHx8IHUuaHAgfHwgMSk7XHJcbiAgICAgIGNvbnN0IGN1ckhwID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4SHAsIHUuaHAgfHwgMCkpO1xyXG4gICAgICBocEZpbGwuc3R5bGUud2lkdGggPSBNYXRoLnJvdW5kKDEwMCAqIGN1ckhwIC8gbWF4SHApICsgJyUnO1xyXG4gICAgfVxyXG4gICAgaWYobWFGaWxsKXtcclxuICAgICAgY29uc3QgbWF4TWFuYSA9IDUwO1xyXG4gICAgICBjb25zdCBjdXJNYW5hID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4TWFuYSwgdS5tYW5hIHx8IDApKTtcclxuICAgICAgbWFGaWxsLnN0eWxlLndpZHRoID0gTWF0aC5yb3VuZCgxMDAgKiBjdXJNYW5hIC8gbWF4TWFuYSkgKyAnJSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAoZ2xvYmFsIGdhdWdlcyByZW1vdmVkKVxyXG5cclxuICAvLyAtLS0gU0ZYIGhlbHBlciB3aXRoIGxpZ2h0IHRocm90dGxpbmcgLS0tXHJcbiAgY29uc3QgbGFzdFNmeEF0ID0gbmV3IE1hcCgpO1xyXG4gIGZ1bmN0aW9uIHBsYXlTZngodXJsLCB2b2w9MC43LCBrZXk9dXJsLCBtaW5HYXBNcz0xMjApe1xyXG4gICAgdHJ5e1xyXG4gICAgICBpZighdXJsKSByZXR1cm47IGNvbnN0IG5vdz1wZXJmb3JtYW5jZS5ub3coKTsgY29uc3QgbGFzdD1sYXN0U2Z4QXQuZ2V0KGtleSl8fDA7IGlmKG5vdy1sYXN0PG1pbkdhcE1zKSByZXR1cm47XHJcbiAgICAgIGxhc3RTZnhBdC5zZXQoa2V5LCBub3cpO1xyXG4gICAgICBjb25zdCBhID0gbmV3IEF1ZGlvKHVybCk7IGEudm9sdW1lPXZvbDsgYS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuICAgIH1jYXRjaHsgLyogaWdub3JlICovIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLSBIZWxwZXJzIHRvIG1lcmdlIG1ldGFkYXRhIChpdGVtcy9mYW1pbGllcy9mb2N1cykgZnJvbSBhbGxpZXMvZW5lbWllcyBhcnJheXMgLS0tXHJcbiAgZnVuY3Rpb24gbm9ybWFsaXplSXRlbXMocmF3KXtcclxuICAgIGlmICghcmF3KSByZXR1cm4gW107XHJcbiAgICBjb25zdCBhcnIgPSBBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbcmF3XTtcclxuICByZXR1cm4gYXJyLm1hcCh4ID0+IHgpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBub3JtYWxpemVGYW1pbGllcyhyYXcpe1xyXG4gICAgaWYgKCFyYXcpIHJldHVybiBbXTtcclxuICAgIGNvbnN0IGFyciA9IEFycmF5LmlzQXJyYXkocmF3KSA/IHJhdyA6IFtyYXddO1xyXG4gICAgcmV0dXJuIGFyci5tYXAoeCA9PiB0eXBlb2YgeCA9PT0gJ3N0cmluZycgPyB7IG5hbWU6IHgsIHNob3J0OiBTdHJpbmcoeCkuc2xpY2UoMCwzKS50b1VwcGVyQ2FzZSgpIH0gOiB4KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYnVpbGRNZXRhSW5kZXgobGlzdCl7XHJcbiAgICBjb25zdCBieUlkID0gbmV3IE1hcCgpOyBjb25zdCBieU5hbWUgPSBuZXcgTWFwKCk7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHJldHVybiB7IGJ5SWQsIGJ5TmFtZSB9O1xyXG4gICAgZm9yIChjb25zdCBlIG9mIGxpc3Qpe1xyXG4gICAgICBjb25zdCBpZCA9IGU/LmlkID8/IGU/LnVuaXRfaWQgPz8gZT8uZ2lybF9pZDtcclxuICAgICAgY29uc3QgbmFtZSA9IGU/Lm5hbWUgPz8gZT8uZ2lybF9uYW1lO1xyXG4gICAgICBjb25zdCBtZXRhID0ge1xyXG4gICAgICAgIGl0ZW1zOiBub3JtYWxpemVJdGVtcyhlPy5pdGVtcyA/PyBlPy5pdGVtID8/IGU/Lml0ZW1faWQpLFxyXG4gICAgICAgIGZhbWlsaWVzOiBub3JtYWxpemVGYW1pbGllcyhlPy5mYW1pbGllcyA/PyBlPy5mYW1pbHkpLFxyXG4gICAgICAgIGZvY3VzX3k6IChlPy5mb2N1c195ID8/IGU/LmZvY3VzWSA/PyBlPy5mb2NfeSlcclxuICAgICAgfTtcclxuICAgICAgaWYgKGlkICE9IG51bGwpIGJ5SWQuc2V0KFN0cmluZyhpZCksIG1ldGEpO1xyXG4gICAgICBpZiAobmFtZSkgYnlOYW1lLnNldChTdHJpbmcobmFtZSkudG9Mb3dlckNhc2UoKSwgbWV0YSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBieUlkLCBieU5hbWUgfTtcclxuICB9XHJcbiAgY29uc3QgTUVUQV9BTExZICA9IGJ1aWxkTWV0YUluZGV4KEFMTElFUyk7XHJcbiAgY29uc3QgTUVUQV9FTkVNWSA9IGJ1aWxkTWV0YUluZGV4KEVORU1JRVMpO1xyXG4gIGNvbnN0IElURU1fQ0FUID0gQXJyYXkuaXNBcnJheSh3aW5kb3cuSVRFTVMpID8gd2luZG93LklURU1TIDogW107XHJcbiAgY29uc3QgaXRlbVBhdGggPSAocykgPT4ge1xyXG4gICAgY29uc3QgY2xlYW4gPSBTdHJpbmcoc3x8JycpLnRyaW0oKTtcclxuICAgIGlmICghY2xlYW4pIHJldHVybiAnJztcclxuICAgIGNvbnN0IG1FeHQgPSBjbGVhbi5tYXRjaCgvXFwuW2EtejAtOV0rJC9pKTtcclxuICAgIGNvbnN0IGhhc0V4dCA9ICEhbUV4dDtcclxuICAgIGNvbnN0IGJhc2UgPSBoYXNFeHQgPyBjbGVhbi5yZXBsYWNlKC9cXC5bYS16MC05XSskL2ksICcnKSA6IGNsZWFuO1xyXG4gICAgLy8gSWYgYmFzZSBpcyBkaWdpdHMtb25seSwgZmlsZW5hbWVzIGFyZSBwcmVmaXhlZCB3aXRoICdmYydcclxuICAgIGNvbnN0IGZpbGVuYW1lQmFzZSA9IC9eXFxkKyQvLnRlc3QoYmFzZSkgPyAoJ2ZjJyArIGJhc2UpIDogYmFzZTtcclxuICAgIGNvbnN0IGV4dCA9IGhhc0V4dCA/IG1FeHRbMF0gOiAnLnBuZyc7XHJcbiAgICByZXR1cm4gJ2ltYWdlcy9pdGVtcy8nICsgZmlsZW5hbWVCYXNlICsgZXh0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW5pdGlhbCgpe1xyXG4gICAgYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKS5mb3JFYWNoKGM9PmMuaW5uZXJIVE1MPScnKTsgbG9nRWwuaW5uZXJIVE1MPScnOyB1bml0c0J5SWQuY2xlYXIoKTtcclxuICAgIGZvcihjb25zdCB1MCBvZiBSRVBMQVkuaW5pdGlhbCl7XHJcbiAgICAgIGNvbnN0IHUgPSB7Li4udTB9O1xyXG4gICAgICAvLyBlbnJpY2ggZnJvbSBzaWRlIGRhdGEgaWYgYXZhaWxhYmxlXHJcbiAgICAgIGNvbnN0IHNyYyA9IHUudGVhbSA9PT0gJ2FsbHknID8gTUVUQV9BTExZIDogTUVUQV9FTkVNWTtcclxuICAgICAgY29uc3QgbSA9IHNyYy5ieUlkLmdldChTdHJpbmcodS5pZCkpIHx8ICh1Lm5hbWUgPyBzcmMuYnlOYW1lLmdldChTdHJpbmcodS5uYW1lKS50b0xvd2VyQ2FzZSgpKSA6IG51bGwpIHx8IG51bGw7XHJcbiAgICAgIGlmIChtKXtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodS5pdGVtcykpIHUuaXRlbXMgPSBtLml0ZW1zIHx8IFtdO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh1LmZhbWlsaWVzKSkgdS5mYW1pbGllcyA9IG0uZmFtaWxpZXMgfHwgW107XHJcbiAgICAgICAgaWYgKHUuZm9jdXNfeSA9PSBudWxsICYmIG0uZm9jdXNfeSAhPSBudWxsKSB1LmZvY3VzX3kgPSBtLmZvY3VzX3k7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gYmFzaWMgZmFsbGJhY2sgaWYgcmVwbGF5IGVtYmVkcyBhIHNpbmdsZSBpdGVtXHJcbiAgICAgICAgaWYgKHUuaXRlbSAmJiAhdS5pdGVtcykgdS5pdGVtcyA9IG5vcm1hbGl6ZUl0ZW1zKHUuaXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmVzb2x2ZSBpdGVtIElEcyB0byBmdWxsIG9iamVjdHMgKHNvIGljb25zIHNob3cpXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodS5pdGVtcykpe1xyXG4gICAgICAgIHUuaXRlbXMgPSB1Lml0ZW1zLm1hcChpdD0+e1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBpdCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoaXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gSVRFTV9DQVQuZmluZChpPT5TdHJpbmcoaS5pZCk9PT1pZCkgfHwgSVRFTV9DQVQuZmluZChpPT5TdHJpbmcoaS5pZCk9PT0oJ2ZjJytpZCkpIHx8IHsgaW1nOiBpdGVtUGF0aChpZCkgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0eXBlb2YgaXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMgPSBpdC50cmltKCk7XHJcbiAgICAgICAgICAgIGlmICgvXig/Omh0dHBzPzp8ZGF0YTp8YmxvYjp8XFwvKS9pLnRlc3QocykgfHwgcy5pbmNsdWRlcygnLycpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaW1nOiBzIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaWQgPSBzLnJlcGxhY2UoL1xcLlthLXowLTldKyQvaSwgJycpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3VuZCA9IElURU1fQ0FULmZpbmQoaT0+U3RyaW5nKGkuaWQpPT09U3RyaW5nKGlkKSkgfHwgKC9eXFxkKyQvLnRlc3QoaWQpID8gSVRFTV9DQVQuZmluZChpPT5TdHJpbmcoaS5pZCk9PT0oJ2ZjJytpZCkpIDogbnVsbCk7XHJcbiAgICByZXR1cm4gZm91bmQgfHwgeyBpbWc6IGl0ZW1QYXRoKHMpIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaXQgJiYgaXQuaWQgJiYgKCFpdC5pbWcgJiYgIWl0Lmljb24gJiYgIWl0LmltYWdlKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSBJVEVNX0NBVC5maW5kKGk9PlN0cmluZyhpLmlkKT09PVN0cmluZyhpdC5pZCkpOyByZXR1cm4gZiB8fCBpdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBpdDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsLmNsYXNzTmFtZSA9IGB1bml0IHVuaXQtLSR7dS50ZWFtfSB1bml0LS0ke3UuY2xhc3N9YDtcclxuICAvLyBQb3J0cmFpdCB3aXRoIHBlci11bml0IGJhcnMgdW5kZXIgaXRcclxuICBsZXQgZm9jWSA9IHUuZm9jdXNfeTtcclxuICBpZiAodHlwZW9mIGZvY1kgIT09ICdudW1iZXInKSB7IGZvY1kgPSAwLjIwOyB9XHJcbiAgZWxzZSBpZiAoZm9jWSA+IDEpIHsgZm9jWSA9IGZvY1kgLyAxMDA7IH0gLy8gYWNjZXB0IHBlcmNlbnRcclxuICBlbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCIgYWx0PVwiXCIgc3R5bGU9XCJvYmplY3QtcG9zaXRpb246Y2VudGVyICR7TWF0aC5yb3VuZChmb2NZKjEwMCl9JVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInUtYmFyc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidS1iYXIgdS1iYXItLWhwXCI+PHNwYW4+PC9zcGFuPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidS1iYXIgdS1iYXItLW1hbmFcIj48c3Bhbj48L3NwYW4+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAke0FycmF5LmlzQXJyYXkodS5pdGVtcykgJiYgdS5pdGVtcy5sZW5ndGggPyBgPGRpdiBjbGFzcz1cInUtaXRlbXNcIj4ke3UuaXRlbXMubWFwKGl0PT57XHJcbiAgICAgICAgY29uc3Qgc3JjID0gaXQ/Lmljb24gfHwgaXQ/LmltZyB8fCBpdD8uaW1hZ2UgfHwgJyc7XHJcbiAgICAgICAgcmV0dXJuIHNyYyA/IGA8aW1nIHNyYz1cIiR7ZnVsbChzcmMpfVwiIGFsdD1cIlwiIHRpdGxlPVwiJHtpdC5uYW1lfHwnJ31cIj5gIDogJyc7XHJcbiAgICAgIH0pLmpvaW4oJycpfTwvZGl2PmAgOiAnJ31gO1xyXG4gICAgICBjb25zdCBjID0gY2VsbCh1LngsIHUueSk7IGlmIChjKSBjLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgdS5lbCA9IGVsOyB1bml0c0J5SWQuc2V0KHUuaWQsIHUpOyB1cGRhdGVCYXJzKHUpO1xyXG4gICAgfVxyXG4gIHJlbmRlckhVRCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwbHlBY3Rpb24oYSl7XHJcbiAgICBzd2l0Y2goYS50KXtcclxuICAgICAgY2FzZSAnZngnOiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgY29uc3QgYXQgPSBBcnJheS5pc0FycmF5KGEuYXQpID8gYS5hdCA6IG51bGw7IGlmKCFhdCkgYnJlYWs7XHJcbiAgICAgICAgICBjb25zdCBjID0gY2VsbChhdFswXSwgYXRbMV0pOyBpZighYykgYnJlYWs7XHJcbiAgICAgICAgICBjb25zdCBraW5kID0gYS5raW5kIHx8ICdkZWZhdWx0JztcclxuICAgICAgICAgIGNvbnN0IHVybCA9ICh3aW5kb3cuRlhfVVJMUyAmJiB3aW5kb3cuRlhfVVJMU1traW5kXSkgfHwgKHdpbmRvdy5GWF9VUkxTICYmIHdpbmRvdy5GWF9VUkxTLmRlZmF1bHQpO1xyXG4gICAgICAgICAgaWYoIXVybCkgYnJlYWs7XHJcbiAgICAgICAgICBjb25zdCBmeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBmeC5jbGFzc05hbWUgPSAnZnggZngtLScra2luZDtcclxuICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBpbWcuYWx0ID0ga2luZDsgaW1nLnNyYyA9IGZ1bGwodXJsKTtcclxuICAgICAgICAgIGZ4LmFwcGVuZENoaWxkKGltZyk7IGMuYXBwZW5kQ2hpbGQoZngpO1xyXG4gICAgICAgICAgY29uc3QgZHVyID0gTWF0aC5tYXgoMjAwLCBNYXRoLm1pbig0MDAwLCBwYXJzZUludChhLmR1cnx8MTAwMCwxMCkpKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PnsgZngucmVtb3ZlKCk7IH0sIGR1cik7XHJcbiAgICAgICAgfWNhdGNoeyAvKiBpZ25vcmUgKi8gfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ21vdmUnOiB7XHJcbiAgICAgICAgY29uc3QgdT11bml0c0J5SWQuZ2V0KGEuaWQpOyBpZighdSlicmVhaztcclxuICAgICAgICBjb25zdCB0bz1jZWxsKGEudG9bMF0sYS50b1sxXSk7IGlmKCF0bylicmVhaztcclxuICB0by5hcHBlbmRDaGlsZCh1LmVsKTsgdS54PWEudG9bMF07IHUueT1hLnRvWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2F0dGFjayc6IHtcclxuICAgICAgICBjb25zdCBhdHQ9dW5pdHNCeUlkLmdldChhLmF0dCksIGRlZj11bml0c0J5SWQuZ2V0KGEuZGVmKTsgaWYoIWF0dHx8IWRlZilicmVhaztcclxuICAgICAgICBjb25zdCBwcmV2SHAgPSBkZWYuaHA7XHJcbiAgICAgICAgZGVmLmhwPWEuaHA7IGRlZi5zaGllbGQ9YS5zaGllbGQ7IGlmKGEubWFuYSE9PXVuZGVmaW5lZCkgYXR0Lm1hbmE9YS5tYW5hO1xyXG4gIHVwZGF0ZUJhcnMoZGVmKTsgdXBkYXRlQmFycyhhdHQpO1xyXG4gICAgICAgIC8vIGhhbGYgSFAgY3Jvc3NpbmdcclxuICAgICAgICBpZihwcmV2SHA+MCAmJiBkZWYuaHA+MCl7XHJcbiAgICAgICAgICBjb25zdCB3YXNBYm92ZSA9IHByZXZIcCA+IChkZWYubWF4SHB8fHByZXZIcCoyKS8yO1xyXG4gICAgICAgICAgY29uc3Qgbm93QmVsb3cgPSBkZWYuaHAgPD0gKGRlZi5tYXhIcHx8cHJldkhwKjIpLzI7XHJcbiAgICAgICAgICBpZih3YXNBYm92ZSAmJiBub3dCZWxvdyl7IHBsYXlTZngod2luZG93LlNGWF9IQUxGSFBfVVJMLCAwLjcsICdoYWxmOicrZGVmLmlkLCA0MDApOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRlZi5ocDw9MCl7IGRlZi5lbC5jbGFzc0xpc3QuYWRkKCdrbycpOyBzZXRUaW1lb3V0KCgpPT5kZWYuZWwucmVtb3ZlKCksMTIwKTsgcGxheVNmeCh3aW5kb3cuU0ZYX0RFQVRIX1VSTCwgMC44LCAnZGVhdGgnLCAxNTApOyB9XHJcbiAgICAgICAgaWYoYS5sb2cpIGxvZyhhLmxvZyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnaGVhbCc6IHtcclxuICAgICAgICBjb25zdCBzcmM9dW5pdHNCeUlkLmdldChhLnNyYyksIGRzdD11bml0c0J5SWQuZ2V0KGEuZHN0KTsgaWYoIXNyY3x8IWRzdClicmVhaztcclxuICAgICAgICBpZihhLm1hbmEhPT11bmRlZmluZWQpIHNyYy5tYW5hPWEubWFuYTtcclxuICAgICAgICBkc3QuaHA9TWF0aC5taW4oZHN0Lm1heEhwLChkc3QuaHA/PzApKyhhLmFtb3VudD8/MCkpO1xyXG4gICAgICAgIC8vIGhlYWwgU0ZYIChjcml0IGlmIGFtb3VudCBsYXJnZSBhbmQgVVJMIHByb3ZpZGVkKVxyXG4gICAgICAgIGNvbnN0IGNyaXQgPSAoYS5jcml0PT09dHJ1ZSkgfHwgKGEuYW1vdW50ICYmIGRzdC5tYXhIcCAmJiBhLmFtb3VudCA+PSAwLjI1KmRzdC5tYXhIcCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gY3JpdCAmJiB3aW5kb3cuU0ZYX0hFQUxfQ1JJVF9VUkwgPyB3aW5kb3cuU0ZYX0hFQUxfQ1JJVF9VUkwgOiB3aW5kb3cuU0ZYX0hFQUxfVVJMO1xyXG4gICAgICAgIHBsYXlTZngodXJsLCBjcml0PzAuODowLjYsIGNyaXQ/J2hlYWxjcml0JzonaGVhbCcsIDgwKTtcclxuICB1cGRhdGVCYXJzKHNyYyk7IHVwZGF0ZUJhcnMoZHN0KTsgaWYoYS5sb2cpIGxvZyhhLmxvZyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbG9nJzogaWYoYS5tc2cpIGxvZyhhLm1zZyk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVRpY2soKXtcclxuICAgIGlmKHN0ZXAgPj0gKFJFUExBWS5hY3Rpb25zPy5sZW5ndGggfHwgMCkpe1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDtcclxuICAgICAgY29uc3Qgb3V0Y29tZSA9IFJFUExBWS53aW5uZXI9PT0nYWxseScgPyAndmljdG9yeScgOiBSRVBMQVkud2lubmVyPT09J2VuZW15JyA/ICdkZWZlYXQnIDogJ2RyYXcnO1xyXG4gICAgICBsb2cob3V0Y29tZT09PSd2aWN0b3J5Jz8nVmljdG9pcmUgISc6b3V0Y29tZT09PSdkZWZlYXQnPydEw6lmYWl0ZeKApic6J8OJZ2FsaXTDqSAhJyk7XHJcbiAgICAgIC8vIHNob3cgb3ZlcmxheVxyXG4gICAgICBjb25zdCBvdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtb3ZlcmxheScpO1xyXG4gICAgICBjb25zdCB0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtdGV4dCcpO1xyXG4gICAgICBjb25zdCBidG5DID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXN1bHQtY29udGludWUnKTtcclxuICAgICAgY29uc3QgYnRuUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtc291bmQtdG9nZ2xlJyk7XHJcbiAgICAgIGlmIChvdiAmJiB0eCkge1xyXG4gICAgICAgIG92LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIG92LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpY3RvcnknLCBvdXRjb21lPT09J3ZpY3RvcnknKTtcclxuICAgICAgICBvdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1kZWZlYXQnLCBvdXRjb21lPT09J2RlZmVhdCcpO1xyXG4gICAgICAgIHR4LnRleHRDb250ZW50ID0gb3V0Y29tZT09PSd2aWN0b3J5JyA/ICdWSUNUT0lSRScgOiBvdXRjb21lPT09J2RlZmVhdCcgPyAnRMOJRkFJVEUnIDogJ8OJR0FMSVTDiSc7XHJcbiAgICAgICAgYmdtRmFkZU91dCgxMjAwKTtcclxuXHJcbiAgICAgICAgLy8gVmljdG9yeSBTRlggKGlmIHByb3ZpZGVkKVxyXG4gICAgICAgIGlmIChvdXRjb21lID09PSAndmljdG9yeScpIHtcclxuICAgICAgICAgIGNvbnN0IHNmeFVybCA9IHdpbmRvdy5TRlhfVklDVE9SWV9VUkw7XHJcbiAgICAgICAgICBpZiAoc2Z4VXJsKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYXVkID0gbmV3IEF1ZGlvKHNmeFVybCk7XHJcbiAgICAgICAgICAgICAgYXVkLnZvbHVtZSA9IDAuNzsgYXVkLmxvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBhdWQucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHsgLyogaWdub3JlICovIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG91dGNvbWUgPT09ICdkZWZlYXQnKSB7XHJcbiAgICAgICAgICBwbGF5U2Z4KHdpbmRvdy5TRlhfREVGRUFUX1VSTCwgMC43LCAnZGVmZWF0JywgMjAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNvdW5kIEZYIChXZWJBdWRpbyBzaW1wbGUgdG9uZXMpXHJcbiAgICAgICAgbGV0IGF1ZGlvRW5hYmxlZCA9IGZhbHNlLCBjdHggPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlKaW5nbGUoa2luZCl7XHJcbiAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGlmKCFhdWRpb0VuYWJsZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYoIWN0eCkgY3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0fHx3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBjdHguY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzID0ga2luZD09PSd2aWN0b3J5JyA/IFs1MjMsNjU5LDc4NF0gOiBraW5kPT09J2RlZmVhdCcgPyBbMzkyLDM0OSwyNjFdIDogWzQ0MCw0NDAsNDQwXTtcclxuICAgICAgICAgICAgbm90ZXMuZm9yRWFjaCgoZixpKT0+e1xyXG4gICAgICAgICAgICAgIGNvbnN0IG8gPSBjdHguY3JlYXRlT3NjaWxsYXRvcigpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlR2FpbigpO1xyXG4gICAgICAgICAgICAgIG8udHlwZT0nc2luZSc7IG8uZnJlcXVlbmN5LnZhbHVlPWY7XHJcbiAgICAgICAgICAgICAgby5jb25uZWN0KGcpOyBnLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICBjb25zdCB0ID0gbm93ICsgaSowLjE4OyBnLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDEsdCk7IGcuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMix0KzAuMDIpOyBnLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSx0KzAuMyk7XHJcbiAgICAgICAgICAgICAgby5zdGFydCh0KTsgby5zdG9wKHQrMC4zMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfWNhdGNoKGUpeyBjb25zb2xlLmRlYnVnKCdhdWRpbyBmYWlsZWQnLCBlKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuUykge1xyXG4gICAgICAgICAgYnRuUy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgYXVkaW9FbmFibGVkID0gIWF1ZGlvRW5hYmxlZDtcclxuICAgICAgICAgICAgYnRuUy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGF1ZGlvRW5hYmxlZD8gJ3RydWUnOidmYWxzZScpO1xyXG4gICAgICAgICAgICBpZihhdWRpb0VuYWJsZWQpeyBwbGF5SmluZ2xlKG91dGNvbWUpOyB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnRpbnVlIGJ1dHRvbiBvciBjbGljayBhbnl3aGVyZSBvbiB2ZWlsXHJcbiAgICAgICAgY29uc3QgaGlkZSA9ICgpPT4gb3YuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgaWYoYnRuQykgYnRuQy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUsIHsgb25jZTp0cnVlIH0pO1xyXG4gICAgICAgIG92LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtdmVpbCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUsIHsgb25jZTp0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGFwcGx5QWN0aW9uKFJFUExBWS5hY3Rpb25zW3N0ZXArK10pOyByZW5kZXJIVUQoKTtcclxuICB9XHJcblxyXG4gIGJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGlmICghdGltZXIpeyB0aW1lcj1zZXRJbnRlcnZhbChwbGF5VGljayxUSUNLX01TKTsgfVxyXG4gICAgaWYgKGJnbSl7XHJcbiAgICAgIGJnbUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICBpZiAoYnRuTXVzaWMpIGJ0bk11c2ljLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywndHJ1ZScpO1xyXG4gICAgICBiZ20uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBiZ20ucGxheSgpLnRoZW4oKCk9PiBiZ21GYWRlSW4oNDUwLCAwLjUpKS5jYXRjaCgoZSk9PnsgY29uc29sZS5kZWJ1ZygnYmdtIHBsYXkgYmxvY2tlZCcsIGUpOyB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICBidG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57IGlmKHRpbWVyKXsgY2xlYXJJbnRlcnZhbCh0aW1lcik7IHRpbWVyPW51bGw7IH0gYmdtUGF1c2UoKTsgfSk7XHJcbiAgYnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyBpZih0aW1lcil7IGNsZWFySW50ZXJ2YWwodGltZXIpOyB0aW1lcj1udWxsOyB9IHN0ZXA9MDsgc3Bhd25Jbml0aWFsKCk7IGlmIChiZ20pIHsgYmdtUGF1c2UoKTsgYmdtLmN1cnJlbnRUaW1lID0gMDsgfSB9KTtcclxuXHJcbiAgc3Bhd25Jbml0aWFsKCk7XHJcbn0pO1xyXG4iLCIvLyB0ZWFtLWJ1aWxkZXIuanNcclxuXHJcbi8vIGJhc2UgZGVzIGFzc2V0cyBmb3VybmllIHBhciBUd2lnOiB3aW5kb3cuQVNTRVRfQkFTRSA9IFwie3sgYXNzZXQoJycpIH19XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IEFTU0VUX0JBU0UgPSAod2luZG93LkFTU0VUX0JBU0UgfHwgJy8nKS5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XHJcbiAgY29uc3QgZnVsbEltZyA9IChwKSA9PiBBU1NFVF9CQVNFICsgU3RyaW5nKHAgfHwgJycpLnJlcGxhY2UoL15cXC8rLywgJycpO1xyXG4gIGNvbnN0IElTX1RPVUNIID0gKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocG9pbnRlcjogY29hcnNlKScpLm1hdGNoZXMpIHx8ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcclxuICBcclxuICBjb25zb2xlLmxvZygnVGVhbSBCdWlsZGVyIHNjcmlwdCBsb2FkZWQhJywgeyBBU1NFVF9CQVNFIH0pO1xyXG4gIGNvbnN0IG93bmVkRWwgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvd25lZC1naXJscy1qc29uJyk7XHJcbiAgY29uc3Qgc3VnZ2VzdGVkRWwgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Z2dlc3RlZC1naXJscy1qc29uJyk7XHJcbiAgaWYgKCFvd25lZEVsKSByZXR1cm47XHJcblxyXG4gIC8qKiBAdHlwZSB7QXJyYXl9ICovXHJcbiAgY29uc3QgT1dORUQgICAgICAgID0gSlNPTi5wYXJzZShvd25lZEVsLnRleHRDb250ZW50IHx8ICdbXScpO1xyXG4gIC8qKiBAdHlwZSB7QXJyYXl9ICovXHJcbiAgY29uc3QgU1VHR0VTVEVEICAgID0gc3VnZ2VzdGVkRWwgPyBKU09OLnBhcnNlKHN1Z2dlc3RlZEVsLnRleHRDb250ZW50IHx8ICdbXScpIDogW107XHJcblxyXG4gIGNvbnN0IHBpY2tHcmlkICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNrLWdyaWQnKTtcclxuICBjb25zdCBiZW5jaEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVuY2gtZ3JpZCcpO1xyXG4gIGNvbnN0IGJvYXJkICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gIGNvbnN0IGl0ZW1zR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcy1ncmlkJyk7XHJcbiAgY29uc3QgYnRuUmVyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yZXJvbGwnKTtcclxuICBjb25zdCByZXJvbGxDb3VudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlcm9sbC1jb3VudCcpO1xyXG4gIGNvbnN0IGJ0bkxvY2sgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbG9jaycpO1xyXG4gIGNvbnN0IGJvbnVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLWJvbnVzZXMnKTtcclxuICBjb25zdCBza2VsZXRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXNrZWxldG9uJyk7XHJcbiAgY29uc3QgaGludEVsICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRiLWhpbnQnKTtcclxuICAvLyBGbG9hdGluZyBkcmFnIGxhYmVsIGZvciBpdGVtc1xyXG4gIGxldCBkcmFnVGlwID0gbnVsbDsgY29uc3QgZ2V0RHJhZ1RpcCA9ICgpID0+IHtcclxuICAgIGlmIChkcmFnVGlwKSByZXR1cm4gZHJhZ1RpcDtcclxuICAgIGRyYWdUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRyYWdUaXAuY2xhc3NOYW1lID0gJ2RyYWctdGlwJztcclxuICAgIE9iamVjdC5hc3NpZ24oZHJhZ1RpcC5zdHlsZSwge1xyXG4gICAgICBwb3NpdGlvbjonZml4ZWQnLCB6SW5kZXg6IDk5OTk5LCBwb2ludGVyRXZlbnRzOidub25lJyxcclxuICAgICAgYmFja2dyb3VuZDoncmdiYSgyNiwgMjQsIDQ0LCAwLjkpJywgY29sb3I6JyNmZmYnLCBwYWRkaW5nOic2cHggMTBweCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czonMTBweCcsIGJvcmRlcjonMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpJyxcclxuICAgICAgYm94U2hhZG93OicwIDZweCAyMHB4IHJnYmEoMCwwLDAsLjM1KScsIGZvbnRTaXplOicxMnB4JyxcclxuICAgICAgdHJhbnNmb3JtOid0cmFuc2xhdGUoLTUwJSwgLTE0MCUpJywgd2hpdGVTcGFjZTonbm93cmFwJ1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRyYWdUaXApOyByZXR1cm4gZHJhZ1RpcDtcclxuICB9O1xyXG5cclxuICBjb25zdCBNQVhfVEVBTSAgPSA0O1xyXG4gIGNvbnN0IHBsYWNlZCAgICA9IG5ldyBNYXAoKTsgLy8gXCJ4LHlcIiAtPiB7IGdpcmwsIGVsLCBpdGVtSWQgfVxyXG4gIGNvbnN0IGluQmVuY2ggICA9IG5ldyBNYXAoKTsgLy8gZ2lybElkIC0+IGNhcmRFbGVtZW50XHJcbiAgY29uc3QgQUxMX0lURU1TID0gQXJyYXkuaXNBcnJheSh3aW5kb3cuSVRFTVMpID8gd2luZG93LklURU1TIDogW107XHJcbiAgLy8gSXRlbXM6IG9ubHkgNCBwcm9wb3NhbHMgYXQgYSB0aW1lIChubyBmdWxsIGNhdGFsb2cgdmlldyBoZXJlKVxyXG5cclxuICAvLyBTZWxlY3Rpb24gc3RhdGUgZm9yIHRvdWNoL21vYmlsZSAoYW5kIGtleWJvYXJkL21vdXNlIGFzIGEgZmFsbGJhY2sgdG8gRG5EKVxyXG4gIGxldCBzZWxlY3Rpb24gPSB7IHR5cGU6IG51bGwsIGRhdGE6IG51bGwsIGVsOiBudWxsIH07IC8vIHR5cGU6ICdnaXJsJyB8ICdpdGVtJyB8IG51bGxcclxuICBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcclxuICAgIGlmIChzZWxlY3Rpb24uZWwpIHNlbGVjdGlvbi5lbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zZWxlY3RlZCcpO1xyXG4gICAgc2VsZWN0aW9uID0geyB0eXBlOiBudWxsLCBkYXRhOiBudWxsLCBlbDogbnVsbCB9O1xyXG4gICAgYm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtcGxhY2luZycsICdpcy1lcXVpcHBpbmcnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50Yi1pdGVtLmlzLXNlbGVjdGVkJykuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VsZWN0ZWQnKSk7XHJcbiAgICBpZiAoaGludEVsICYmIElTX1RPVUNIKSBoaW50RWwudGV4dENvbnRlbnQgPSAnUGxhY2UgZXhhY3RlbWVudCA0IGjDqXJvw69uZXMuJztcclxuICB9XHJcbiAgZnVuY3Rpb24gc2VsZWN0R2lybChnaXJsLCBlbCkge1xyXG4gICAgY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgIHNlbGVjdGlvbiA9IHsgdHlwZTogJ2dpcmwnLCBkYXRhOiBnaXJsLCBlbCB9O1xyXG4gICAgaWYgKGVsKSBlbC5jbGFzc0xpc3QuYWRkKCdpcy1zZWxlY3RlZCcpO1xyXG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnaXMtcGxhY2luZycpO1xyXG4gICAgaWYgKGhpbnRFbCAmJiBJU19UT1VDSCkgaGludEVsLnRleHRDb250ZW50ID0gJ1PDqWxlY3Rpb25uZSB1bmUgY2FzZSBkdSBwbGF0ZWF1IHBvdXIgcGxhY2VyIGxhIGjDqXJvw69uZS4nO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZWxlY3RJdGVtKGl0ZW0sIGVsKSB7XHJcbiAgICBjbGVhclNlbGVjdGlvbigpO1xyXG4gICAgc2VsZWN0aW9uID0geyB0eXBlOiAnaXRlbScsIGRhdGE6IGl0ZW0sIGVsIH07XHJcbiAgICBpZiAoZWwpIGVsLmNsYXNzTGlzdC5hZGQoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdpcy1lcXVpcHBpbmcnKTtcclxuICAgIGlmIChoaW50RWwgJiYgSVNfVE9VQ0gpIGhpbnRFbC50ZXh0Q29udGVudCA9ICdUYXBlIHVuZSBow6lyb8OvbmUgc3VyIGxlIHBsYXRlYXUgcG91ciBsdWkgYXR0cmlidWVyIGxcXCdvYmpldC4nO1xyXG4gIH1cclxuXHJcbiAgLy8gaGVscGVyc1xyXG4gIGNvbnN0IHJhbmRJbnQgPSAobikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XHJcbiAgY29uc3QgcGlja04gPSAoYXJyLCBuKSA9PiB7XHJcbiAgICBjb25zdCBwb29sID0gWy4uLmFycl0sIG91dCA9IFtdO1xyXG4gICAgd2hpbGUgKG91dC5sZW5ndGggPCBNYXRoLm1pbihuLCBwb29sLmxlbmd0aCkpIHtcclxuICAgICAgb3V0LnB1c2gocG9vbC5zcGxpY2UocmFuZEludChwb29sLmxlbmd0aCksIDEpWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfTtcclxuICBjb25zdCBjZWxsS2V5ID0gKHgsIHkpID0+IGAke3h9LCR7eX1gO1xyXG4gIGNvbnN0IGNob29zZTQgPSAoYXJyKSA9PiB7XHJcbiAgICBpZiAoIWFyci5sZW5ndGgpIHJldHVybiBbXTtcclxuICAgIGlmIChhcnIubGVuZ3RoIDw9IDQpIHJldHVybiBbLi4uYXJyXTtcclxuICAgIGNvbnN0IGlkcyA9IG5ldyBTZXQoKTsgY29uc3Qgb3V0ID0gW107XHJcbiAgICB3aGlsZSAob3V0Lmxlbmd0aCA8IDQgJiYgaWRzLnNpemUgPCBhcnIubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGkgPSByYW5kSW50KGFyci5sZW5ndGgpO1xyXG4gICAgICBpZiAoIWlkcy5oYXMoaSkpIHsgaWRzLmFkZChpKTsgb3V0LnB1c2goYXJyW2ldKTsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9O1xyXG5cclxuICAvLyAtLS0tIEl0ZW1zIHByb3Bvc2FscyAoNCBhdCBhIHRpbWUpIC0tLS1cclxuICBsZXQgY3VycmVudEl0ZW1zID0gY2hvb3NlNChBTExfSVRFTVMpO1xyXG4gIGZ1bmN0aW9uIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgaWYgKCFpdGVtc0dyaWQpIHJldHVybjtcclxuICAgIC8vIEFsd2F5cyByZXBsYWNlIHByZS1yZW5kZXJlZCBjb250ZW50IHRvIGtlZXAgYmVoYXZpb3IgY29uc2lzdGVudFxyXG4gICAgaXRlbXNHcmlkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYgKCFBTExfSVRFTVMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGVtcHR5LmNsYXNzTmFtZSA9ICd0Yi1pdGVtc19fZW1wdHknO1xyXG4gICAgICBlbXB0eS50ZXh0Q29udGVudCA9ICdBam91dGUgZGVzIGltYWdlcyBkYW5zIHB1YmxpYy9pbWFnZXMvaXRlbXMvJztcclxuICAgICAgaXRlbXNHcmlkLmFwcGVuZENoaWxkKGVtcHR5KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY3VycmVudEl0ZW1zLmZvckVhY2goaXQgPT4ge1xyXG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgYnRuLnR5cGUgPSAnYnV0dG9uJzsgYnRuLmNsYXNzTmFtZSA9ICd0Yi1pdGVtJztcclxuICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pdGVtLWlkJywgaXQuaWQpO1xyXG4gIGNvbnN0IHRpdGxlID0gaXQuZGVzYyA/IGAke2l0Lm5hbWV9IOKAlCAke2l0LmRlc2N9YCA6IGl0Lm5hbWU7XHJcbiAgYnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aXRsZSk7XHJcbiAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKTtcclxuICAgICAgYnRuLmRyYWdnYWJsZSA9ICFJU19UT1VDSDtcclxuICAgICAgYnRuLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7ZnVsbEltZyhpdC5pbWcpfVwiIGFsdD1cIiR7aXQubmFtZX1cIj5gO1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkoeyBfX3R5cGU6ICdpdGVtJywgaWQ6IGl0LmlkIH0pKTtcclxuICAgICAgICBjb25zdCB0aXAgPSBnZXREcmFnVGlwKCk7XHJcbiAgICAgICAgdGlwLnRleHRDb250ZW50ID0gYCR7aXQubmFtZX0g4oaSIChkw6lwb3NlIHN1ciB1bmUgaMOpcm/Dr25lKWA7XHJcbiAgICAgICAgdGlwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB9KTtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XHJcbiAgICAgICAgaWYgKGRyYWdUaXApIGRyYWdUaXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIFRhcCB0byBlcXVpcCAobW9iaWxlLWZyaWVuZGx5KVxyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWxyZWFkeSA9IGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgaWYgKGFscmVhZHkpIHsgY2xlYXJTZWxlY3Rpb24oKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgc2VsZWN0SXRlbShpdCwgYnRuKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGl0ZW1zR3JpZC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tIFVJIHJlbmRlcmVycyAtLS0tXHJcbiAgZnVuY3Rpb24gcmVuZGVyQ2FyZChnaXJsLCB7IHNvdXJjZSB9KSB7XHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkLmNsYXNzTmFtZSA9IGB0Yi1jYXJkIHRiLWNhcmQtLSR7Z2lybC5jbGFzc31gO1xyXG4gIGNhcmQuZHJhZ2dhYmxlID0gIUlTX1RPVUNIO1xyXG4gICAgY2FyZC5kYXRhc2V0LmlkID0gZ2lybC5pZDtcclxuICAgIGNhcmQuZGF0YXNldC5zb3VyY2UgPSBzb3VyY2U7XHJcblxyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJ0Yi1jYXJkX19iZW5jaC1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJBam91dGVyIGF1IGJhbmNcIiBhcmlhLWxhYmVsPVwiQWpvdXRlciBhdSBiYW5jXCI+8J+nujwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9faW1nXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX21ldGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fbmFtZVwiPiR7Z2lybC5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX190YWdzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfVwiPiR7Y2xhc3NMYWJlbChnaXJsLmNsYXNzKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyB0YWctZmFtaWx5XCI+JHtnaXJsLmZhbWlseSA/PyAnJ308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fc3RhdHNcIj5cclxuICAgICAgICA8c3Bhbj5QViAke2dpcmwucGR2fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5BVEsgJHtnaXJsLmF0a308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+UFJDICR7TWF0aC5yb3VuZCgoZ2lybC5jaGFuY2VfYXRrID8/IDApICogMTAwKX0lPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgLy8gQmVuY2ggYnV0dG9uICh1c2VmdWwgb24gbW9iaWxlKVxyXG4gICAgY29uc3QgYmVuY2hCdG4gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy50Yi1jYXJkX19iZW5jaC1idG4nKTtcclxuICAgIGJlbmNoQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKGNhcmQucGFyZW50RWxlbWVudCAhPT0gYmVuY2hHcmlkKSB7XHJcbiAgICAgICAgYmVuY2hHcmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIGluQmVuY2guc2V0KGdpcmwuaWQsIGNhcmQpO1xyXG4gICAgICAgIHVwZGF0ZUxvY2tTdGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBKU09OLnN0cmluZ2lmeShnaXJsKSk7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBjYXJkLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJykpO1xyXG4gICAgfSk7XHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJykpO1xyXG5cclxuICAgIC8vIFNpbmdsZSB0YXAvY2xpY2sgdG8gc2VsZWN0IGZvciBwbGFjZW1lbnQgKG1vYmlsZSBhbmQgZGVza3RvcCBhbHRlcm5hdGl2ZSB0byBEbkQpXHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XHJcbiAgICAgIC8vIElmIGFuIGl0ZW0gaXMgc2VsZWN0ZWQsIGlnbm9yZSBzZWxlY3RpbmcgYSBjYXJkOyBrZWVwIGVxdWlwIG1vZGVcclxuICAgICAgaWYgKHNlbGVjdGlvbi50eXBlID09PSAnaXRlbScpIHJldHVybjtcclxuICAgICAgaWYgKHNlbGVjdGlvbi50eXBlID09PSAnZ2lybCcgJiYgc2VsZWN0aW9uLmRhdGE/LmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxlY3RHaXJsKGdpcmwsIGNhcmQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBkb3VibGUtY2xpYyAtPiB0b2dnbGUgYmFuY1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gVG9nZ2xlIGJhbmM6IHNpIGTDqWrDoCBkYW5zIGxlIGJhbmMgLT4gb24gbGUgbGFpc3NlIGFmZmljaMOpIG1haXMgb24gbGUgbWFycXVlIGNvbW1lIG5vbi1wcsOpc2VydsOpXHJcbiAgICAgIGlmIChjYXJkLnBhcmVudEVsZW1lbnQgPT09IGJlbmNoR3JpZCkge1xyXG4gICAgICAgIC8vIFJldHJhaXQgZHUgYmFuYzogb24gbGUgcmVtZXQgZGFucyBzb24gY29udGVuZXVyIHNvdXJjZSBzaSBwb3NzaWJsZSwgc2lub24gb24gbGUgc3VwcHJpbWUgcHJvcHJlbWVudFxyXG4gICAgICAgIGluQmVuY2guZGVsZXRlKGdpcmwuaWQpO1xyXG4gICAgICAgIC8vIETDqXBsYWNlciBsYSBjYXJ0ZSB2ZXJzIGxhIHpvbmUgZGUgcGljayBwb3VyIGxhIHJlbmRyZSByZXJvbGxhYmxlXHJcbiAgICAgICAgaWYgKHBpY2tHcmlkKSBwaWNrR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBlbHNlIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQWpvdXQgYXUgYmFuY1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZUNoaXAoZ2lybCwgaXRlbUlkID0gbnVsbCkge1xyXG4gICAgY29uc3QgY2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hpcC5jbGFzc05hbWUgPSBgY2hpcCAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfWA7XHJcbiAgICBjaGlwLnRpdGxlID0gZ2lybC5uYW1lO1xyXG4gICAgY2hpcC5kcmFnZ2FibGUgPSAhSVNfVE9VQ0g7XHJcbiAgY29uc3QgZm9jYWxZID0gKHR5cGVvZiBnaXJsLmZvY3VzX3kgPT09ICdudW1iZXInKSA/IGAke2dpcmwuZm9jdXNfeX0lYCA6ICcxMCUnO1xyXG4gICAgY2hpcC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbWcgY2xhc3M9XCJjaGlwLWF2YXRhclwiIHNyYz1cIiR7ZnVsbEltZyhnaXJsLmltZyl9XCIgYWx0PVwiJHtnaXJsLm5hbWV9XCIgc3R5bGU9XCJvYmplY3QtcG9zaXRpb246Y2VudGVyICR7Zm9jYWxZfTtcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjaGlwLWl0ZW1cIj48L3NwYW4+XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IGhvbGRlciA9IGNoaXAucXVlcnlTZWxlY3RvcignLmNoaXAtaXRlbScpO1xyXG4gICAgaWYgKGl0ZW1JZCkge1xyXG4gICAgICBjb25zdCBpdGVtID0gKHdpbmRvdy5JVEVNUyB8fCBbXSkuZmluZChpID0+IFN0cmluZyhpLmlkKSA9PT0gU3RyaW5nKGl0ZW1JZCkpO1xyXG4gICAgICBpZiAoaXRlbSAmJiBob2xkZXIpIHtcclxuICAgICAgICBjb25zdCB0aXAgPSBpdGVtLmRlc2MgPyBgJHtpdGVtLm5hbWV9IOKAlCAke2l0ZW0uZGVzY31gIDogaXRlbS5uYW1lO1xyXG4gICAgICAgIGhvbGRlci5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cImNoaXAtaXRlbS1pbWdcIiBzcmM9XCIke2Z1bGxJbWcoaXRlbS5pbWcpfVwiIGFsdD1cIiR7aXRlbS5uYW1lfVwiIHRpdGxlPVwiJHt0aXB9XCI+YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsaWNrIG9uIHRoZSBpdGVtIGljb24gdG8gdW5lcXVpcCAoZG9lc24ndCByZW1vdmUgdGhlIHVuaXQpXHJcbiAgICBpZiAoaG9sZGVyKSB7XHJcbiAgICAgIGhvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBjaGlwLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJy5jZWxsJyk7XHJcbiAgICAgICAgaWYgKCFjZWxsKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qga2V5ID0gY2VsbEtleShjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnkpO1xyXG4gICAgICAgIGNvbnN0IHNsb3QgPSBwbGFjZWQuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKCFzbG90KSByZXR1cm47XHJcbiAgICAgICAgc2xvdC5pdGVtSWQgPSBudWxsO1xyXG4gICAgICAgIGhvbGRlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkoZ2lybCkpO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gY2hpcC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpKTtcclxuICAgIH0pO1xyXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gY2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpKTtcclxuXHJcbiAgICAvLyBUYXAgdG8gdW5lcXVpcCBpdGVtIGlmIGFuIGl0ZW0gaXMgc2VsZWN0ZWQsIG90aGVyd2lzZSByZW1vdmUgdGhlIHVuaXQgdG8gYmVuY2hcclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBjaGlwLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJy5jZWxsJyk7XHJcbiAgICAgIGlmICghY2VsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgLy8gSWYgd2UgYXJlIGluIGVxdWlwIG1vZGUsIGFzc2lnbiBpdGVtIHRvIHRoaXMgY2hpcCBkaXJlY3RseVxyXG4gICAgICBpZiAoc2VsZWN0aW9uLnR5cGUgPT09ICdpdGVtJykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGNlbGxLZXkoY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55KTtcclxuICAgICAgICBjb25zdCBzbG90ID0gcGxhY2VkLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChzbG90KSB7XHJcbiAgICAgICAgICBzbG90Lml0ZW1JZCA9IHNlbGVjdGlvbi5kYXRhLmlkO1xyXG4gICAgICAgICAgY29uc3QgaG9sZGVyID0gY2hpcC5xdWVyeVNlbGVjdG9yKCcuY2hpcC1pdGVtJyk7XHJcbiAgICAgICAgICBjb25zdCBpdGVtID0gKHdpbmRvdy5JVEVNUyB8fCBbXSkuZmluZChpID0+IFN0cmluZyhpLmlkKSA9PT0gU3RyaW5nKHNlbGVjdGlvbi5kYXRhLmlkKSk7XHJcbiAgICAgICAgICBpZiAoaG9sZGVyICYmIGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgdGlwID0gaXRlbS5kZXNjID8gYCR7aXRlbS5uYW1lfSDigJQgJHtpdGVtLmRlc2N9YCA6IGl0ZW0ubmFtZTtcclxuICAgICAgICAgICAgaG9sZGVyLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwiY2hpcC1pdGVtLWltZ1wiIHNyYz1cIiR7ZnVsbEltZyhpdGVtLmltZyl9XCIgYWx0PVwiJHtpdGVtLm5hbWV9XCIgdGl0bGU9XCIke3RpcH1cIj5gO1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBob2xkZXIucXVlcnlTZWxlY3RvcignLmNoaXAtaXRlbS1pbWcnKTtcclxuICAgICAgICAgICAgaWYgKGltZykgeyBpbWcuY2xhc3NMaXN0LmFkZCgnZmxhc2gnKTsgc2V0VGltZW91dCgoKT0+IGltZy5jbGFzc0xpc3QucmVtb3ZlKCdmbGFzaCcpLCA2MDApOyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEVsc2UsIHJlbW92ZSB0aGUgdW5pdCBmcm9tIHRoZSBib2FyZCAoc2VuZCBiYWNrIHRvIGJlbmNoIHZpc3VhbGx5KVxyXG4gICAgICBjb25zdCBrZXkgPSBjZWxsS2V5KGNlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueSk7XHJcbiAgICAgIHBsYWNlZC5kZWxldGUoa2V5KTtcclxuICAgICAgY2VsbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgaWYgKCFpbkJlbmNoLmhhcyhnaXJsLmlkKSkge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pO1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjaGlwO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBpY2soKSB7XHJcbiAgcGlja0dyaWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IHBvb2wgPSBTVUdHRVNURUQubGVuZ3RoID8gWy4uLlNVR0dFU1RFRF0gOiBbLi4uT1dORURdO1xyXG4gIGlmIChwb29sLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAvLyBvbiBkdXBsaXF1ZSBzaSA8IDRcclxuICB3aGlsZSAocG9vbC5sZW5ndGggPCA0KSBwb29sID0gcG9vbC5jb25jYXQocG9vbCk7XHJcblxyXG4gIC8vIEV4Y2x1cmUgY2V1eCBkw6lqw6AgYXUgYmFuYyAocHLDqXNlcnbDqXMpIGR1IHRpcmFnZVxyXG4gIGNvbnN0IHByZXNlcnZlZElkcyA9IG5ldyBTZXQoQXJyYXkuZnJvbShpbkJlbmNoLmtleXMoKSkpO1xyXG4gIGNvbnN0IHBvb2wyID0gcG9vbC5maWx0ZXIoZyA9PiAhcHJlc2VydmVkSWRzLmhhcyhnLmlkKSk7XHJcblxyXG4gIC8vIFPDqWxlY3Rpb25uZSBqdXNxdSfDoCA0IHN1Z2dlc3Rpb25zIHVuaXF1ZXMgcGFybWkgbGUgcG9vbCByZXN0YW50XHJcbiAgY29uc3QgcGlja3MgPSBbXTtcclxuICBjb25zdCB0YWtlbiA9IG5ldyBTZXQoKTtcclxuICBjb25zdCB0YXJnZXQgPSBNYXRoLm1pbig0LCBwb29sMi5sZW5ndGgpO1xyXG4gIHdoaWxlIChwaWNrcy5sZW5ndGggPCB0YXJnZXQgJiYgdGFrZW4uc2l6ZSA8IHBvb2wyLmxlbmd0aCkge1xyXG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wyLmxlbmd0aCk7XHJcbiAgICBpZiAoIXRha2VuLmhhcyhpKSkgeyB0YWtlbi5hZGQoaSk7IHBpY2tzLnB1c2gocG9vbDJbaV0pOyB9XHJcbiAgfVxyXG5cclxuICBwaWNrcy5mb3JFYWNoKGcgPT4gcGlja0dyaWQuYXBwZW5kQ2hpbGQocmVuZGVyQ2FyZChnLCB7IHNvdXJjZTogJ3BpY2snIH0pKSk7XHJcbn1cclxuICBmdW5jdGlvbiBjbGFzc1RhZyhjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ3RhZy1tZWxlZSc7XHJcbiAgICAgIGNhc2UgJ2Rwc19yYW5nZWQnOiByZXR1cm4gJ3RhZy1yYW5nZWQnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICd0YWctdGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ3RhZy1oZWFsJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xhc3NMYWJlbChjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ0RQUyBDw6BDJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAnRFBTIGRpc3RhbmNlJztcclxuICAgICAgY2FzZSAndGFuayc6ICAgICAgIHJldHVybiAnVGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ0hlYWxlcic7XHJcbiAgICAgIGRlZmF1bHQ6ICAgICAgICAgICByZXR1cm4gY2xzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBEbkQgYm9hcmQgLS0tLVxyXG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQuY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gY2VsbC5kYXRhc2V0O1xyXG4gICAgY29uc3Qga2V5ID0gY2VsbEtleSh4LCB5KTtcclxuXHJcbiAgY29uc3QgZHJhZ2dpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGItY2FyZC5kcmFnZ2luZywgLmNoaXAuZHJhZ2dpbmcsIC50Yi1pdGVtLmRyYWdnaW5nJyk7XHJcbiAgICBpZiAoIWRyYWdnaW5nKSByZXR1cm47XHJcbiAgY29uc3QgZHQgPSBlLmRhdGFUcmFuc2ZlcjtcclxuICBjb25zdCBwYXlsb2FkID0gZHQuZ2V0RGF0YSgndGV4dC9wbGFpbicpIHx8ICd7fSc7XHJcbiAgbGV0IGdpcmwgPSB7fTtcclxuICB0cnkgeyBnaXJsID0gSlNPTi5wYXJzZShwYXlsb2FkKTsgfSBjYXRjaCB7fVxyXG4gIGlmIChnaXJsICYmIGdpcmwuX190eXBlID09PSAnaXRlbScpIHJldHVybjsgLy8gbGV0IHRoZSBpdGVtIGhhbmRsZXIgbWFuYWdlIGl0XHJcblxyXG4gIC8vIHNpIG3Dqm1lIGjDqXJvIGTDqWrDoCBwbGFjw6kgYWlsbGV1cnMgLT4gbGliw6hyZSBs4oCZYW5jaWVubmUgY2VsbHVsZVxyXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgcGxhY2VkKSB7XHJcbiAgICAgIGlmICh2LmdpcmwuaWQgPT09IGdpcmwuaWQpIHtcclxuICAgICAgICBwbGFjZWQuZGVsZXRlKGspO1xyXG4gICAgICAgIGNvbnN0IG9sZENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKG9sZENlbGwpIG9sZENlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBsaW1pdGUgw6lxdWlwZVxyXG4gICAgaWYgKCFwbGFjZWQuaGFzKGtleSkgJiYgcGxhY2VkLnNpemUgPj0gTUFYX1RFQU0pIHJldHVybjtcclxuXHJcbiAgICAvLyBzd2FwIHNpIGxhIGNlbGx1bGUgw6l0YWl0IG9jY3Vww6llXHJcbiAgICBpZiAocGxhY2VkLmhhcyhrZXkpKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gcGxhY2VkLmdldChrZXkpO1xyXG4gICAgICBpZiAoZXhpc3Rpbmc/LmVsKSB7XHJcbiAgICAgICAgYmVuY2hHcmlkLmFwcGVuZENoaWxkKHJlbmRlckNhcmQoZXhpc3RpbmcuZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSkpO1xyXG4gICAgICAgIGluQmVuY2guc2V0KGV4aXN0aW5nLmdpcmwuaWQsIGJlbmNoR3JpZC5sYXN0RWxlbWVudENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICBwbGFjZWQuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gIGNvbnN0IGNoaXAgPSBtYWtlQ2hpcChnaXJsKTtcclxuICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGNoaXApO1xyXG4gIHBsYWNlZC5zZXQoa2V5LCB7IGdpcmwsIGVsOiBjaGlwLCBpdGVtSWQ6IG51bGwgfSk7XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQ2xpY2stdG8tcGxhY2UvZXF1aXAgc3VwcG9ydFxyXG4gIGZ1bmN0aW9uIHBsYWNlR2lybE9uQ2VsbChnaXJsLCBjZWxsKSB7XHJcbiAgICBpZiAoIWNlbGwpIHJldHVybiBmYWxzZTtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gY2VsbC5kYXRhc2V0OyBjb25zdCBrZXkgPSBjZWxsS2V5KHgsIHkpO1xyXG4gICAgLy8gaWYgYWxyZWFkeSBwbGFjZWQgZWxzZXdoZXJlLCBmcmVlIGl0XHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBwbGFjZWQpIHtcclxuICAgICAgaWYgKHYuZ2lybC5pZCA9PT0gZ2lybC5pZCkge1xyXG4gICAgICAgIHBsYWNlZC5kZWxldGUoayk7XHJcbiAgICAgICAgY29uc3Qgb2xkQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7ay5zcGxpdCgnLCcpWzBdfVwiXVtkYXRhLXk9XCIke2suc3BsaXQoJywnKVsxXX1cIl1gKTtcclxuICAgICAgICBpZiAob2xkQ2VsbCkgb2xkQ2VsbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFwbGFjZWQuaGFzKGtleSkgJiYgcGxhY2VkLnNpemUgPj0gTUFYX1RFQU0pIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChwbGFjZWQuaGFzKGtleSkpIHtcclxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBwbGFjZWQuZ2V0KGtleSk7XHJcbiAgICAgIGlmIChleGlzdGluZz8uZWwpIHtcclxuICAgICAgICBiZW5jaEdyaWQuYXBwZW5kQ2hpbGQocmVuZGVyQ2FyZChleGlzdGluZy5naXJsLCB7IHNvdXJjZTogJ2JlbmNoJyB9KSk7XHJcbiAgICAgICAgaW5CZW5jaC5zZXQoZXhpc3RpbmcuZ2lybC5pZCwgYmVuY2hHcmlkLmxhc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICAgIHBsYWNlZC5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoaXAgPSBtYWtlQ2hpcChnaXJsKTtcclxuICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGNoaXApO1xyXG4gICAgcGxhY2VkLnNldChrZXksIHsgZ2lybCwgZWw6IGNoaXAsIGl0ZW1JZDogbnVsbCB9KTtcclxuICAgIHVwZGF0ZUxvY2tTdGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQuY2xvc2VzdCgnLmNlbGwnKTsgaWYgKCFjZWxsKSByZXR1cm47XHJcbiAgICBpZiAoc2VsZWN0aW9uLnR5cGUgPT09ICdnaXJsJykge1xyXG4gICAgICBjb25zdCBvayA9IHBsYWNlR2lybE9uQ2VsbChzZWxlY3Rpb24uZGF0YSwgY2VsbCk7XHJcbiAgICAgIGlmIChvaykgY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGlvbi50eXBlID09PSAnaXRlbScpIHtcclxuICAgICAgY29uc3Qga2V5ID0gY2VsbEtleShjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnkpO1xyXG4gICAgICBjb25zdCBzbG90ID0gcGxhY2VkLmdldChrZXkpOyBpZiAoIXNsb3QpIHJldHVybjtcclxuICAgICAgc2xvdC5pdGVtSWQgPSBzZWxlY3Rpb24uZGF0YS5pZDtcclxuICAgICAgY29uc3QgY2hpcCA9IHNsb3QuZWw7XHJcbiAgICAgIGNvbnN0IGhvbGRlciA9IGNoaXAucXVlcnlTZWxlY3RvcignLmNoaXAtaXRlbScpO1xyXG4gICAgICBjb25zdCBpdGVtID0gKHdpbmRvdy5JVEVNUyB8fCBbXSkuZmluZChpID0+IFN0cmluZyhpLmlkKSA9PT0gU3RyaW5nKHNlbGVjdGlvbi5kYXRhLmlkKSk7XHJcbiAgICAgIGlmIChob2xkZXIgJiYgaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IHRpcCA9IGl0ZW0uZGVzYyA/IGAke2l0ZW0ubmFtZX0g4oCUICR7aXRlbS5kZXNjfWAgOiBpdGVtLm5hbWU7XHJcbiAgICAgICAgaG9sZGVyLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwiY2hpcC1pdGVtLWltZ1wiIHNyYz1cIiR7ZnVsbEltZyhpdGVtLmltZyl9XCIgYWx0PVwiJHtpdGVtLm5hbWV9XCIgdGl0bGU9XCIke3RpcH1cIj5gO1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGhvbGRlci5xdWVyeVNlbGVjdG9yKCcuY2hpcC1pdGVtLWltZycpO1xyXG4gICAgICAgIGlmIChpbWcpIHsgaW1nLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoJyk7IHNldFRpbWVvdXQoKCk9PiBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnZmxhc2gnKSwgNjAwKTsgfVxyXG4gICAgICB9XHJcbiAgICAgIGNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQ2xlYXIgc2VsZWN0aW9uIHdoZW4gdGFwcGluZyBvdXRzaWRlIGludGVyYWN0aXZlIHpvbmVzXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3Qgd2l0aGluID0gZS50YXJnZXQuY2xvc2VzdD8uKCcudGItY2FyZCwgLnRiLWl0ZW0sIC50Yi1ib2FyZCAuY2VsbCwgLnRiLWJvYXJkLCAudGItcGlja19fZ3JpZCwgLnRiLWJlbmNoX19ncmlkJyk7XHJcbiAgICBpZiAoIXdpdGhpbikgY2xlYXJTZWxlY3Rpb24oKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBEbkQgYmVuY2ggLS0tLVxyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyByZXRpcmUgZHUgYm9hcmQgc2kgcHLDqXNlbnRlXHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBwbGFjZWQpIHtcclxuICAgICAgaWYgKHYuZ2lybC5pZCA9PT0gZ2lybC5pZCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKGMpIGMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5CZW5jaC5oYXMoZ2lybC5pZCkpIHtcclxuICAgICAgY29uc3QgY2FyZCA9IHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSk7XHJcbiAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBJdGVtcyBkcmFnICYgZHJvcCAtLS0tXHJcbiAgLy8gTm90ZTogaW5kaXZpZHVhbCBpdGVtIGJ1dHRvbnMgYXR0YWNoIHRoZWlyIG93biBkcmFnIGhhbmRsZXJzIGluIHJlbmRlckl0ZW1zKClcclxuXHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICAvLyBoYW5kbGUgaXRlbSBkcm9wcyBvbnRvIGNoaXBzXHJcbiAgICBjb25zdCBwYXlsb2FkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpIHx8ICcnO1xyXG4gICAgaWYgKCFwYXlsb2FkKSByZXR1cm47IC8vIGhhbmRsZWQgYWJvdmUgZm9yIGhlcm9lcyB0b29cclxuICAgIGxldCBkYXRhOyB0cnkgeyBkYXRhID0gSlNPTi5wYXJzZShwYXlsb2FkKTsgfSBjYXRjaCB7IGRhdGEgPSBudWxsOyB9XHJcbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5fX3R5cGUgIT09ICdpdGVtJykgcmV0dXJuO1xyXG4gICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jZWxsJyk7IGlmICghY2VsbCkgcmV0dXJuO1xyXG4gICAgY29uc3Qga2V5ID0gY2VsbEtleShjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnkpO1xyXG4gICAgY29uc3Qgc2xvdCA9IHBsYWNlZC5nZXQoa2V5KTsgaWYgKCFzbG90KSByZXR1cm47XHJcbiAgICAvLyBhc3NpZ24gaXRlbSAocmVwbGFjZSBhbnkgZXhpc3RpbmcpXHJcbiAgICBzbG90Lml0ZW1JZCA9IGRhdGEuaWQ7XHJcbiAgICBjb25zdCBjaGlwID0gc2xvdC5lbDtcclxuICAgIGNvbnN0IGhvbGRlciA9IGNoaXAucXVlcnlTZWxlY3RvcignLmNoaXAtaXRlbScpO1xyXG4gICAgY29uc3QgaXRlbSA9ICh3aW5kb3cuSVRFTVMgfHwgW10pLmZpbmQoaSA9PiBTdHJpbmcoaS5pZCkgPT09IFN0cmluZyhkYXRhLmlkKSk7XHJcbiAgICBpZiAoaG9sZGVyICYmIGl0ZW0pIHtcclxuICAgICAgY29uc3QgdGlwID0gaXRlbS5kZXNjID8gYCR7aXRlbS5uYW1lfSDigJQgJHtpdGVtLmRlc2N9YCA6IGl0ZW0ubmFtZTtcclxuICBob2xkZXIuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9XCJjaGlwLWl0ZW0taW1nXCIgc3JjPVwiJHtmdWxsSW1nKGl0ZW0uaW1nKX1cIiBhbHQ9XCIke2l0ZW0ubmFtZX1cIiB0aXRsZT1cIiR7dGlwfVwiPmA7XHJcbiAgY29uc3QgaW1nID0gaG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGlwLWl0ZW0taW1nJyk7XHJcbiAgaWYgKGltZykgeyBpbWcuY2xhc3NMaXN0LmFkZCgnZmxhc2gnKTsgc2V0VGltZW91dCgoKT0+IGltZy5jbGFzc0xpc3QucmVtb3ZlKCdmbGFzaCcpLCA2MDApOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoZHJhZ1RpcCAmJiBpdGVtKSB7XHJcbiAgICAgIGRyYWdUaXAudGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9IOKGkiAke3Nsb3QuZ2lybC5uYW1lfWA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PnsgaWYoZHJhZ1RpcCkgZHJhZ1RpcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9LCA4NTApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBUcmFjayBwb2ludGVyIHRvIHBvc2l0aW9uIGRyYWcgdGlwXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgaWYgKCFkcmFnVGlwIHx8IGRyYWdUaXAuc3R5bGUuZGlzcGxheSAhPT0gJ2Jsb2NrJykgcmV0dXJuO1xyXG4gICAgZHJhZ1RpcC5zdHlsZS5sZWZ0ID0gYCR7ZS5jbGllbnRYfXB4YDtcclxuICAgIGRyYWdUaXAuc3R5bGUudG9wICA9IGAke2UuY2xpZW50WX1weGA7XHJcbiAgfSk7XHJcblxyXG4gIC8vIC0tLS0gYWN0aW9ucyAtLS0tXHJcbmxldCB0aWNrZXRJZCA9IG51bGw7XHJcbmxldCBwb2xsVGltZXIgPSBudWxsO1xyXG5cclxuYnRuTG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICBpZiAoc2tlbGV0b24pIHsgc2tlbGV0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7IHNrZWxldG9uLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTsgfVxyXG4gIC8vIGJ1aWxkIHBheWxvYWRcclxuICBjb25zdCBsaW5ldXAgPSBBcnJheS5mcm9tKHBsYWNlZC5lbnRyaWVzKCkpLm1hcCgoW2tleSwgdmFsXSkgPT4ge1xyXG4gICAgY29uc3QgW3gsIHldID0ga2V5LnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcbiAgY29uc3QgaXRlbUlkID0gdmFsLml0ZW1JZCA/PyBudWxsO1xyXG4gIHJldHVybiBpdGVtSWQgPyB7IGlkOiB2YWwuZ2lybC5pZCwgeCwgeSwgaXRlbTogU3RyaW5nKGl0ZW1JZCkgfSA6IHsgaWQ6IHZhbC5naXJsLmlkLCB4LCB5IH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFNUQVJUX1VSTCAgPSB3aW5kb3cuTU0/LnN0YXJ0ICA/PyAnL21hdGNobWFraW5nL3N0YXJ0JztcclxuICBjb25zdCBTVEFUVVNfVFBMID0gd2luZG93Lk1NPy5zdGF0dXMgPz8gJy9tYXRjaG1ha2luZy9zdGF0dXMvX19JRF9fJztcclxuICBjb25zdCBzdGF0dXNVcmwgID0gKGlkKSA9PiBTVEFUVVNfVFBMLnJlcGxhY2UoJ19fSURfXycsIFN0cmluZyhpZCkpO1xyXG5cclxuICBjb25zb2xlLmxvZygnQ2FsbGluZyBTVEFSVF9VUkwgPScsIFNUQVJUX1VSTCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgID0gYXdhaXQgZmV0Y2goU1RBUlRfVVJMLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGluZXVwIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgIGxldCBkYXRhO1xyXG4gICAgdHJ5IHsgZGF0YSA9IEpTT04ucGFyc2UodGV4dCk7IH0gY2F0Y2ggeyBkYXRhID0gbnVsbDsgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdtYXRjaG1ha2luZy9zdGFydCAtPicsIHJlcy5zdGF0dXMsIGRhdGEgPz8gdGV4dCk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgYWxlcnQoYE1hdGNobWFraW5nIGZhaWxlZCAoJHtyZXMuc3RhdHVzfSk6XFxuJHtkYXRhPy5lcnJvciA/PyB0ZXh0fWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWRhdGEgfHwgKGRhdGEuc3RhdHVzICE9PSAnbWF0Y2hlZCcgJiYgZGF0YS5zdGF0dXMgIT09ICdxdWV1ZWQnKSkge1xyXG4gICAgICBhbGVydCgnUsOpcG9uc2UgaW5hdHRlbmR1ZTpcXG4nICsgKGRhdGEgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6IHRleHQpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ21hdGNoZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9tYXRjaC8ke2RhdGEubWF0Y2hJZH1gO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcXVldWVkIC0+IHBvbGwgc3RhdHVzXHJcbiAgICB0aWNrZXRJZCA9IGRhdGEudGlja2V0SWQ7XHJcbiAgICBidG5Mb2NrLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGJ0bkxvY2sudGV4dENvbnRlbnQgPSAn8J+UjiBSZWNoZXJjaGUgZW4gY291cnPigKYnO1xyXG5cclxuICAgIHBvbGxUaW1lciA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgciA9IGF3YWl0IGZldGNoKHN0YXR1c1VybCh0aWNrZXRJZCksIHsgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSk7XHJcbiAgICAgIGNvbnN0IGogPSBhd2FpdCByLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ21hdGNobWFraW5nL3N0YXR1cyAtPicsIGopO1xyXG4gICAgICBpZiAoai5zdGF0dXMgPT09ICdtYXRjaGVkJykge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwocG9sbFRpbWVyKTtcclxuICAgIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7IHNrZWxldG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpOyB9XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL21hdGNoLyR7ai5tYXRjaElkfWA7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMDApO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICBhbGVydCgnRXJyZXVyIHLDqXNlYXU6ICcgKyBlLm1lc3NhZ2UpO1xyXG4gIGlmIChza2VsZXRvbikgeyBza2VsZXRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7IHNrZWxldG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpOyB9XHJcbiAgfVxyXG59KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlTG9ja1N0YXRlKCkge1xyXG4gICAgYnRuTG9jay5kaXNhYmxlZCA9IChwbGFjZWQuc2l6ZSAhPT0gTUFYX1RFQU0pO1xyXG4gICAgcmVuZGVyQm9udXNlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tIFN5bmVyZ3kgY29tcHV0YXRpb24gKGNsaWVudC1zaWRlIG1pcnJvciBvZiBzZXJ2ZXIgdGllcnMpIC0tLVxyXG4gIGZ1bmN0aW9uIGNvbXB1dGVCb251c2VzKCkge1xyXG4gICAgY29uc3QgY291bnRzID0ge307IC8vIGZhbWlseSAtPiBjb3VudFxyXG4gICAgZm9yIChjb25zdCBbLCB7Z2lybH1dIG9mIHBsYWNlZCkge1xyXG4gICAgICBjb25zdCBmYW0gPSAoZ2lybC5mYW1pbHkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmICghZmFtKSBjb250aW51ZTsgY291bnRzW2ZhbV0gPSAoY291bnRzW2ZhbV0gfHwgMCkgKyAxO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGllcnMgPSB7fTtcclxuICAgIGZvciAoY29uc3QgW2ZhbSwgbl0gb2YgT2JqZWN0LmVudHJpZXMoY291bnRzKSkge1xyXG4gICAgICBjb25zdCB0aWVyID0gbiA+PSA0ID8gNCA6IChuID49IDMgPyAzIDogKG4gPj0gMiA/IDIgOiAwKSk7XHJcbiAgICAgIGlmICh0aWVyID09PSAwKSBjb250aW51ZTsgdGllcnNbZmFtXSA9IHsgbiwgdGllciB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpZXJzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyQm9udXNlcygpIHtcclxuICAgIGlmICghYm9udXNMaXN0KSByZXR1cm47XHJcbiAgICBjb25zdCB0aWVycyA9IGNvbXB1dGVCb251c2VzKCk7XHJcbiAgICBib251c0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBsYWJlbCA9IChmYW0sIHRpZXIsIG4pID0+IHtcclxuICAgICAgY29uc3QgbWFwID0ge1xyXG4gICAgICAgIHNvbGVpbDogezI6J0FUSyArNSUnLDM6J1Byw6ljaXNpb24gKzUlJyw0OidDcml0ICs1JSd9LFxyXG4gICAgICAgIGx1bmU6ICAgezI6J0VzcXVpdmUgKzMlJywzOidFc3F1aXZlICsyJSAmIE1hbmEgKzEwJyw0OidCb3VjbGllciArMTAnfSxcclxuICAgICAgICBuYXR1cmU6IHsyOidQViArNSUnLDM6J0JvdWNsaWVyICsxNScsNDonUFYgKzUlJ30sXHJcbiAgICAgICAgaWRvbGU6ICB7MjonQ3JpdCArNSUnLDM6J0FUSyArNSUnLDQ6J01hbmEgKzEwJ30sXHJcbiAgICAgICAgb21icmU6ICB7MjonRXNxdWl2ZSArNSUnLDM6J1Byw6ljaXNpb24gKzUlJyw0OidCb3VjbGllciArMTUnfSxcclxuICAgICAgICBhcmNhbmU6IHsyOidQcsOpY2lzaW9uICs1JScsMzonTWFuYSArMTUnLDQ6J0NyaXQgKzUlJ30sXHJcbiAgICAgICAgZXRvaWxlOiB7MjonUHLDqWNpc2lvbiArMyUnLDM6J0NyaXQgKzUlJyw0OidBVEsgKzUlJ30sXHJcbiAgICAgICAgb2NlYW46ICB7MjonRXNxdWl2ZSArMyUnLDM6J01hbmEgKzEwJyw0OidQcsOpY2lzaW9uICs1JSd9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGVmZmVjdCA9IChtYXBbZmFtXSAmJiBtYXBbZmFtXVt0aWVyXSkgPyBtYXBbZmFtXVt0aWVyXSA6IGBQYWxpZXIgJHt0aWVyfWA7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZmFtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmFtLnNsaWNlKDEpO1xyXG4gICAgICByZXR1cm4gYCR7dGl0bGV9IHgke259IOKAlCAke2VmZmVjdH1gO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IElDT04gPSB7IHNvbGVpbDon4piA77iPJywgbHVuZTon8J+MmScsIG5hdHVyZTon8J+NgycsIGlkb2xlOifwn461Jywgb21icmU6J/CfjJEnLCBhcmNhbmU6J+KcqCcsIGV0b2lsZTon4q2QJywgb2NlYW46J/CfjIonIH07XHJcbiAgICBPYmplY3QuZW50cmllcyh0aWVycykuZm9yRWFjaCgoW2ZhbSwge3RpZXIsIG59XSkgPT4ge1xyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmNsYXNzTmFtZSA9IGBib251cy1pdGVtIGZhbS0ke2ZhbX0gdGllci0ke3RpZXJ9YDtcclxuICAgICAgY29uc3QgdGl0bGUgPSBmYW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBmYW0uc2xpY2UoMSk7XHJcbiAgICAgIGNvbnN0IGVmZmVjdFRleHQgPSBsYWJlbChmYW0sIHRpZXIsIG4pLnNwbGl0KCcg4oCUICcpLnBvcCgpO1xyXG4gICAgICBjb25zdCBwY3QgPSBNYXRoLm1pbigxMDAsIE1hdGgucm91bmQoKG4gLyA0KSAqIDEwMCkpO1xyXG4gICAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYW0taWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiR7SUNPTltmYW1dIHx8ICfinKcnfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhbS1uYW1lXCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudFwiPngke259PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYXVnZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjRcIiBhcmlhLXZhbHVlbm93PVwiJHtufVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiIHN0eWxlPVwid2lkdGg6JHtwY3R9JVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZWZmZWN0XCI+JHtlZmZlY3RUZXh0fTwvc3Bhbj5cclxuICAgICAgYDtcclxuICAgICAgYm9udXNMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdFxyXG4gIHJlbmRlclBpY2soKTtcclxuICByZW5kZXJJdGVtcygpO1xyXG4gIHJlbmRlckJvbnVzZXMoKTtcclxuXHJcbiAgLy8gLS0tIFJlcm9sbCBsaW1pdMOpIMOgIDMgLS0tXHJcbiAgbGV0IHJlcm9sbHNMZWZ0ID0gTnVtYmVyKHdpbmRvdy5SRVJPTExTX0xFRlQgPz8gMyk7XHJcbiAgY29uc3QgdXBkYXRlUmVyb2xsVUkgPSAoKSA9PiB7XHJcbiAgICBpZiAocmVyb2xsQ291bnRFbCkgcmVyb2xsQ291bnRFbC50ZXh0Q29udGVudCA9IGAoJHtyZXJvbGxzTGVmdH0gcmVzdGFudCR7cmVyb2xsc0xlZnQ+MT8ncyc6Jyd9KWA7XHJcbiAgICBpZiAoYnRuUmVyb2xsKSBidG5SZXJvbGwuZGlzYWJsZWQgPSByZXJvbGxzTGVmdCA8PSAwO1xyXG4gIH07XHJcbiAgdXBkYXRlUmVyb2xsVUkoKTtcclxuICBpZiAoYnRuUmVyb2xsKSB7XHJcbiAgICBidG5SZXJvbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChyZXJvbGxzTGVmdCA8PSAwKSByZXR1cm47XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2god2luZG93LlJFUk9MTF9ERUNfVVJMLCB7IG1ldGhvZDogJ1BPU1QnLCBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXJvbGxzTGVmdCA9IE51bWJlcihkYXRhPy5sZWZ0ID8/IHJlcm9sbHNMZWZ0KTtcclxuICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICB1cGRhdGVSZXJvbGxVSSgpO1xyXG4gICAgICAvLyBDbGVhciBhbnkgc2VsZWN0aW9uIHRvIGF2b2lkIGNvbmZ1c2lvbiBhZnRlciByZWZyZXNoaW5nIGNhbmRpZGF0ZXMvaXRlbXNcclxuICAgICAgY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgcmVuZGVyUGljaygpOyAvLyBwZXJzb25uYWdlc1xyXG4gICAgICAvLyBhbHNvIHJlZnJlc2ggdGhlIDQgaXRlbSBwcm9wb3NhbHNcclxuICAgICAgY3VycmVudEl0ZW1zID0gY2hvb3NlNChBTExfSVRFTVMpO1xyXG4gICAgICByZW5kZXJJdGVtcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiXHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvdGVhbS1idWlsZGVyLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvSW5zY3JpcHRpb24uanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9ob21lLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvbWF0Y2guanMnOyBcclxuXHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzMSIsImdldEVsZW1lbnRCeUlkIiwicGFzczIiLCJyZWdpc3RlckJ0biIsImNoZWNrUGFzc3dvcmRzIiwidmFsdWUiLCJkaXNhYmxlZCIsInRyYWNrIiwicHJldiIsInF1ZXJ5U2VsZWN0b3IiLCJuZXh0Iiwic3RlcCIsInNjcm9sbEJ5IiwiZGVsdGEiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjb25zb2xlIiwibG9nIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCMiIsIl9kb2N1bWVudCRnZXRFbGVtZW50QjMiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJBU1NFVF9CQVNFIiwid2luZG93IiwicmVwbGFjZSIsImZ1bGwiLCJwIiwicyIsIlN0cmluZyIsInRlc3QiLCJib2FyZCIsImxvZ0VsIiwiaHVkQSIsImh1ZEUiLCJodWRBVGl0bGUiLCJodWRFVGl0bGUiLCJidG5TdGFydCIsImJ0blBhdXNlIiwiYnRuUmVzZXQiLCJidG5NdXNpYyIsIndhcm4iLCJSRVBMQVkiLCJKU09OIiwicGFyc2UiLCJ0ZXh0Q29udGVudCIsIkFMTElFUyIsIkVORU1JRVMiLCJBcnJheSIsImlzQXJyYXkiLCJpbml0aWFsIiwiZGVidWciLCJmaWx0ZXIiLCJ1IiwidGVhbSIsImxlbmd0aCIsInVuaXRzQnlJZCIsIk1hcCIsInRpbWVyIiwiVElDS19NUyIsImJnbSIsImJnbUVuYWJsZWQiLCJiZ21GYWRpbmciLCJiZ21VcmwiLCJCR01fVVJMIiwiQXVkaW8iLCJsb29wIiwicHJlbG9hZCIsInZvbHVtZSIsInRpdGxlIiwic2V0QXR0cmlidXRlIiwicGxheSIsInBhdXNlIiwiYmdtUGxheSIsImUiLCJiZ21QYXVzZSIsImJnbUZhZGVPdXQiLCJtcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInN0YXJ0IiwidDAiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInN0ZXBGbiIsImsiLCJNYXRoIiwibWluIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmdtRmFkZUluIiwidGFyZ2V0IiwiY2VsbCIsIngiLCJ5IiwiY29uY2F0IiwibXNnIiwiZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInJhbmRCb3QiLCJhIiwiYiIsImZsb29yIiwicmFuZG9tIiwicGlja093bmVyTmFtZSIsInNpZGUiLCJmaXJzdCIsIm93bmVyX25hbWUiLCJ1c2VybmFtZSIsInBsYXllciIsInVzZXIiLCJvd25lciIsImFsbHlOYW1lIiwiYWxseV91c2VybmFtZSIsImFsbHlfbmFtZSIsInBsYXllcl9hbGx5IiwiZW5lbXlOYW1lIiwiZW5lbXlfdXNlcm5hbWUiLCJlbmVteV9uYW1lIiwicGxheWVyX2VuZW15IiwicmVuZGVySFVEIiwibGlzdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInZhbHVlcyIsIm1hcCIsImZhbXMiLCJmYW1pbGllcyIsIml0bXMiLCJpdGVtcyIsImNhdCIsIklURU1TIiwidG9QZXJjIiwidiIsIm4iLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInJvdW5kIiwicmVzb2x2ZUl0ZW0iLCJ0cmltIiwiaW5jbHVkZXMiLCJpbWciLCJpZCIsImZvdW5kIiwiZmluZCIsImkiLCJpdGVtUGF0aCIsImljb24iLCJpbWFnZSIsImYiLCJpdE9ianMiLCJhcm1vciIsImFjY1AiLCJhY2MiLCJjcml0UCIsImNyaXQiLCJkb2RnZVAiLCJkb2RnZSIsInN0YXRzIiwiaHAiLCJzaGllbGQiLCJtYW5hIiwiYXRrIiwiaXRlbXNIdG1sIiwiaXQiLCJzcmMiLCJuYW1lIiwiam9pbiIsImZhbUh0bWwiLCJpbm5lckhUTUwiLCJ1cGRhdGVCYXJzIiwiZWwiLCJzaCIsInN0eWxlIiwiZGlzcGxheSIsIm1hIiwiaHBGaWxsIiwibWFGaWxsIiwibWF4SHAiLCJtYXgiLCJjdXJIcCIsIndpZHRoIiwibWF4TWFuYSIsImN1ck1hbmEiLCJsYXN0U2Z4QXQiLCJwbGF5U2Z4IiwidXJsIiwidm9sIiwia2V5IiwibWluR2FwTXMiLCJsYXN0IiwiZ2V0Iiwic2V0IiwiX3VudXNlZCIsIm5vcm1hbGl6ZUl0ZW1zIiwicmF3IiwiYXJyIiwibm9ybWFsaXplRmFtaWxpZXMiLCJzbGljZSIsInRvVXBwZXJDYXNlIiwiYnVpbGRNZXRhSW5kZXgiLCJieUlkIiwiYnlOYW1lIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsImRvbmUiLCJfcmVmIiwiX2UkaWQiLCJfZSRuYW1lIiwiX3JlZjIiLCJfZSRpdGVtcyIsIl9lJGZhbWlsaWVzIiwiX3JlZjMiLCJfZSRmb2N1c195IiwidW5pdF9pZCIsImdpcmxfaWQiLCJnaXJsX25hbWUiLCJtZXRhIiwiaXRlbSIsIml0ZW1faWQiLCJmYW1pbHkiLCJmb2N1c195IiwiZm9jdXNZIiwiZm9jX3kiLCJ0b0xvd2VyQ2FzZSIsImVyciIsIk1FVEFfQUxMWSIsIk1FVEFfRU5FTVkiLCJJVEVNX0NBVCIsImNsZWFuIiwibUV4dCIsIm1hdGNoIiwiaGFzRXh0IiwiYmFzZSIsImZpbGVuYW1lQmFzZSIsImV4dCIsInNwYXduSW5pdGlhbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYyIsImNsZWFyIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInUwIiwiX29iamVjdFNwcmVhZCIsIm0iLCJjbGFzc05hbWUiLCJmb2NZIiwiYXBwbHlBY3Rpb24iLCJ0IiwiYXQiLCJraW5kIiwiRlhfVVJMUyIsImZ4IiwiYWx0IiwiZHVyIiwicGFyc2VJbnQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiX3VudXNlZDIiLCJ0byIsImF0dCIsImRlZiIsInByZXZIcCIsIndhc0Fib3ZlIiwibm93QmVsb3ciLCJTRlhfSEFMRkhQX1VSTCIsImFkZCIsIlNGWF9ERUFUSF9VUkwiLCJfZHN0JGhwIiwiX2EkYW1vdW50IiwiZHN0IiwiYW1vdW50IiwiU0ZYX0hFQUxfQ1JJVF9VUkwiLCJTRlhfSEVBTF9VUkwiLCJwbGF5VGljayIsIl9SRVBMQVkkYWN0aW9ucyIsImFjdGlvbnMiLCJjbGVhckludGVydmFsIiwib3V0Y29tZSIsIndpbm5lciIsIm92IiwidHgiLCJidG5DIiwiYnRuUyIsIl9vdiRxdWVyeVNlbGVjdG9yIiwicGxheUppbmdsZSIsImF1ZGlvRW5hYmxlZCIsImN0eCIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImN1cnJlbnRUaW1lIiwibm90ZXMiLCJvIiwiY3JlYXRlT3NjaWxsYXRvciIsImciLCJjcmVhdGVHYWluIiwidHlwZSIsImZyZXF1ZW5jeSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUiLCJzdG9wIiwidG9nZ2xlIiwic2Z4VXJsIiwiU0ZYX1ZJQ1RPUllfVVJMIiwiYXVkIiwiXyIsIlNGWF9ERUZFQVRfVVJMIiwiaGlkZSIsIm9uY2UiLCJzZXRJbnRlcnZhbCIsInRoZW4iLCJyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ0b1N0cmluZ1RhZyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJHIiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsInB1c2giLCJfbiIsIkYiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsImNvbnN0cnVjdG9yIiwiZnJvbSIsInJlcXVpcmUiLCJfd2luZG93JFJFUk9MTFNfTEVGVCIsImZ1bGxJbWciLCJJU19UT1VDSCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwib3duZWRFbCIsInN1Z2dlc3RlZEVsIiwiT1dORUQiLCJTVUdHRVNURUQiLCJwaWNrR3JpZCIsImJlbmNoR3JpZCIsIml0ZW1zR3JpZCIsImJ0blJlcm9sbCIsInJlcm9sbENvdW50RWwiLCJidG5Mb2NrIiwiYm9udXNMaXN0Iiwic2tlbGV0b24iLCJoaW50RWwiLCJkcmFnVGlwIiwiZ2V0RHJhZ1RpcCIsImFzc2lnbiIsInBvc2l0aW9uIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsImJhY2tncm91bmQiLCJjb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsInRyYW5zZm9ybSIsIndoaXRlU3BhY2UiLCJNQVhfVEVBTSIsInBsYWNlZCIsImluQmVuY2giLCJBTExfSVRFTVMiLCJzZWxlY3Rpb24iLCJkYXRhIiwiY2xlYXJTZWxlY3Rpb24iLCJzZWxlY3RHaXJsIiwiZ2lybCIsInNlbGVjdEl0ZW0iLCJyYW5kSW50IiwicGlja04iLCJwb29sIiwib3V0Iiwic3BsaWNlIiwiY2VsbEtleSIsImNob29zZTQiLCJpZHMiLCJTZXQiLCJzaXplIiwiaGFzIiwiY3VycmVudEl0ZW1zIiwicmVuZGVySXRlbXMiLCJlbXB0eSIsImJ0biIsImRlc2MiLCJkcmFnZ2FibGUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwic3RyaW5naWZ5IiwiX190eXBlIiwidGlwIiwiYWxyZWFkeSIsInJlbmRlckNhcmQiLCJfZ2lybCRmYW1pbHkiLCJfZ2lybCRjaGFuY2VfYXRrIiwic291cmNlIiwiY2FyZCIsImRhdGFzZXQiLCJjbGFzc1RhZyIsImNsYXNzTGFiZWwiLCJwZHYiLCJjaGFuY2VfYXRrIiwiYmVuY2hCdG4iLCJldiIsInN0b3BQcm9wYWdhdGlvbiIsInBhcmVudEVsZW1lbnQiLCJ1cGRhdGVMb2NrU3RhdGUiLCJfc2VsZWN0aW9uJGRhdGEiLCJtYWtlQ2hpcCIsIml0ZW1JZCIsImNoaXAiLCJmb2NhbFkiLCJob2xkZXIiLCJfY2hpcCRwYXJlbnRFbGVtZW50IiwiY2xvc2VzdCIsInNsb3QiLCJfY2hpcCRwYXJlbnRFbGVtZW50MiIsInJlbmRlclBpY2siLCJwcmVzZXJ2ZWRJZHMiLCJrZXlzIiwicG9vbDIiLCJwaWNrcyIsInRha2VuIiwiY2xzIiwicHJldmVudERlZmF1bHQiLCJfY2VsbCRkYXRhc2V0IiwiZHJhZ2dpbmciLCJkdCIsInBheWxvYWQiLCJnZXREYXRhIiwiX3N0ZXAkdmFsdWUiLCJvbGRDZWxsIiwic3BsaXQiLCJleGlzdGluZyIsImxhc3RFbGVtZW50Q2hpbGQiLCJwbGFjZUdpcmxPbkNlbGwiLCJfY2VsbCRkYXRhc2V0MiIsIl9zdGVwMiR2YWx1ZSIsIm9rIiwiX2UkdGFyZ2V0JGNsb3Nlc3QiLCJfZSR0YXJnZXQiLCJ3aXRoaW4iLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX3N0ZXAzJHZhbHVlIiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJ0aWNrZXRJZCIsInBvbGxUaW1lciIsIl9jYWxsZWUyIiwiX3dpbmRvdyRNTSRzdGFydCIsIl93aW5kb3ckTU0iLCJfd2luZG93JE1NJHN0YXR1cyIsIl93aW5kb3ckTU0yIiwibGluZXVwIiwiU1RBUlRfVVJMIiwiU1RBVFVTX1RQTCIsInN0YXR1c1VybCIsInJlcyIsInRleHQiLCJfZGF0YSRlcnJvciIsIl9kYXRhIiwiX3QiLCJfY29udGV4dDIiLCJlbnRyaWVzIiwiX3ZhbCRpdGVtSWQiLCJfcmVmNCIsInZhbCIsIl9rZXkkc3BsaXQkbWFwIiwiX2tleSRzcGxpdCRtYXAyIiwiTU0iLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsIl91bnVzZWQzIiwiYWxlcnQiLCJlcnJvciIsImxvY2F0aW9uIiwiaHJlZiIsIm1hdGNoSWQiLCJfY2FsbGVlIiwiaiIsIl9jb250ZXh0IiwianNvbiIsIm1lc3NhZ2UiLCJyZW5kZXJCb251c2VzIiwiY29tcHV0ZUJvbnVzZXMiLCJjb3VudHMiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiX3N0ZXA0JHZhbHVlIiwiZmFtIiwidGllcnMiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsInRpZXIiLCJsYWJlbCIsInNvbGVpbCIsImx1bmUiLCJuYXR1cmUiLCJpZG9sZSIsIm9tYnJlIiwiYXJjYW5lIiwiZXRvaWxlIiwib2NlYW4iLCJlZmZlY3QiLCJjaGFyQXQiLCJJQ09OIiwiX3JlZjYiLCJfcmVmNyIsIl9yZWY3JCIsImxpIiwiZWZmZWN0VGV4dCIsInBvcCIsInBjdCIsInJlcm9sbHNMZWZ0IiwiUkVST0xMU19MRUZUIiwidXBkYXRlUmVyb2xsVUkiLCJfY2FsbGVlMyIsIl9kYXRhJGxlZnQiLCJfdDIiLCJfY29udGV4dDMiLCJSRVJPTExfREVDX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=