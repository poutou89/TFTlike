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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.math.sign.js */ "./node_modules/core-js/modules/es.math.sign.js");
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
__webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// assets/JavaScript/match.js
document.addEventListener('DOMContentLoaded', function () {
  var _document$getElementB, _document$getElementB2;
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
  /** @type {{id:number,name:string,img:string,class:string,family?:string,hp:number,atk:number,shield:number,mana:number,acc:number,crit:number,dodge:number,x:number,y:number}[]} */
  var ALLIES = JSON.parse(((_document$getElementB = document.getElementById('allies-json')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.textContent) || '[]');
  var ENEMIES = JSON.parse(((_document$getElementB2 = document.getElementById('enemies-json')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.textContent) || '[]');
  console.log('MATCH DATA ->', {
    ALLIES: ALLIES,
    ENEMIES: ENEMIES
  });

  // ---- state ----
  var units = []; // {team,id,name,img,class,family,maxHp,hp,atk,shield,mana,acc,crit,dodge,x,y,el}
  var timer = null;

  // ---- constants ----
  var TICK_MS = 400;
  var CRIT_MULT = 1.5;
  var HEAL_COST = 20;

  // ---- helpers ----
  var cell = function cell(x, y) {
    return board.querySelector(".cell[data-x=\"".concat(x, "\"][data-y=\"").concat(y, "\"]"));
  };
  var inBounds = function inBounds(x, y) {
    return x >= 0 && x < 7 && y >= 0 && y < 4;
  };
  var dist = function dist(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  };
  var clamp01 = function clamp01(v) {
    return Math.max(0, Math.min(1, v));
  };
  var pctToProb = function pctToProb(v) {
    return clamp01((v || 0) / 100);
  };
  var roll = function roll(p) {
    return Math.random() < p;
  };
  var rangeFor = function rangeFor(cls) {
    return cls === 'dps_ranged' || cls === 'healer' ? 2 : 1;
  };
  function log(msg) {
    var line = document.createElement('div');
    line.textContent = msg;
    logEl.appendChild(line);
    logEl.scrollTop = logEl.scrollHeight;
  }
  function renderHUD() {
    var line = function line(u) {
      return "<li><img src=\"".concat(full(u.img), "\"><span>").concat(u.name, "</span><em>").concat(u.hp, " PV").concat(u.shield > 0 ? ' • 🛡' + u.shield : '').concat(u.mana > 0 ? ' • 🔷' + u.mana : '', "</em></li>");
    };
    hudA.innerHTML = units.filter(function (u) {
      return u.team === 'ally';
    }).map(line).join('');
    hudE.innerHTML = units.filter(function (u) {
      return u.team === 'enemy';
    }).map(line).join('');
  }
  function spawn(u0) {
    var u = {
      team: u0.team,
      id: u0.id,
      name: u0.name,
      img: u0.img,
      "class": u0["class"],
      family: u0.family,
      maxHp: u0.hp,
      hp: u0.hp,
      atk: u0.atk,
      shield: u0.shield || 0,
      mana: u0.mana || 0,
      acc: pctToProb(u0.acc),
      crit: pctToProb(u0.crit),
      dodge: pctToProb(u0.dodge),
      x: u0.x,
      y: u0.y,
      el: null
    };
    var el = document.createElement('div');
    el.className = "unit unit--".concat(u.team, " unit--").concat(u["class"]);
    el.innerHTML = "\n      <img src=\"".concat(full(u.img), "\" alt=\"\">\n      <span class=\"hp\">").concat(u.hp, "</span>\n      <span class=\"shield\"").concat(u.shield > 0 ? '' : ' style="display:none"', ">").concat(u.shield, "</span>\n      <span class=\"mana\"").concat(u.mana > 0 ? '' : ' style="display:none"', ">").concat(u.mana, "</span>");
    var c = cell(u.x, u.y);
    if (c) c.appendChild(el);
    u.el = el;
    units.push(u);
  }
  function reset() {
    board.querySelectorAll('.cell').forEach(function (c) {
      return c.innerHTML = '';
    });
    hudA.innerHTML = '';
    hudE.innerHTML = '';
    logEl.innerHTML = '';
    units = [];
    ALLIES.forEach(function (u) {
      return spawn(_objectSpread(_objectSpread({}, u), {}, {
        team: 'ally'
      }));
    });
    ENEMIES.forEach(function (u) {
      return spawn(_objectSpread(_objectSpread({}, u), {}, {
        team: 'enemy'
      }));
    });
    renderHUD();
  }
  function nearestEnemy(me) {
    var best = null,
      bestD = 999;
    var _iterator = _createForOfIteratorHelper(units),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var u = _step.value;
        if (u.team === me.team || u.hp <= 0) continue;
        var d = dist(me, u);
        if (d < bestD) {
          best = u;
          bestD = d;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return best;
  }
  function moveToward(me, target) {
    var dx = Math.sign(target.x - me.x);
    var dy = Math.sign(target.y - me.y);
    var candidates = [{
      x: me.x + dx,
      y: me.y
    }, {
      x: me.x,
      y: me.y + dy
    }].filter(function (p) {
      return inBounds(p.x, p.y);
    });
    var _iterator2 = _createForOfIteratorHelper(candidates),
      _step2;
    try {
      var _loop = function _loop() {
          var p = _step2.value;
          var occ = units.find(function (u) {
            return u.hp > 0 && u.x === p.x && u.y === p.y;
          });
          if (!occ) {
            var to = cell(p.x, p.y);
            if (to) {
              to.appendChild(me.el);
              me.x = p.x;
              me.y = p.y;
            }
            return {
              v: true
            };
          }
        },
        _ret;
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _ret = _loop();
        if (_ret) return _ret.v;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return false;
  }
  function updateBars(u) {
    u.el.querySelector('.hp').textContent = u.hp;
    var sh = u.el.querySelector('.shield');
    if (sh) {
      sh.textContent = Math.max(0, u.shield);
      sh.style.display = u.shield > 0 ? '' : 'none';
    }
    var ma = u.el.querySelector('.mana');
    if (ma) {
      ma.textContent = Math.max(0, u.mana);
      ma.style.display = u.mana > 0 ? '' : 'none';
    }
  }
  function applyDamage(def, rawDmg, byName) {
    // réduction passive tank (20%)
    if (def["class"] === 'tank') rawDmg = Math.round(rawDmg * 0.8);
    var dmg = rawDmg;

    // bouclier absorbe en premier
    if (def.shield > 0) {
      var absorbed = Math.min(def.shield, dmg);
      def.shield -= absorbed;
      dmg -= absorbed;
      if (absorbed > 0) log("".concat(byName, " entame le bouclier de ").concat(def.name, " (").concat(absorbed, ")"));
    }
    if (dmg > 0) {
      def.hp = Math.max(0, def.hp - dmg);
      if (def.hp <= 0) {
        def.el.classList.add('ko');
        setTimeout(function () {
          return def.el.remove();
        }, 150);
      }
    }
    updateBars(def);
  }
  function attack(att, def) {
    // précision / esquive
    if (!roll(att.acc)) {
      log("".concat(att.name, " rate ").concat(def.name));
      return;
    }
    if (roll(def.dodge)) {
      log("".concat(def.name, " esquive l'attaque de ").concat(att.name));
      return;
    }

    // dégâts (+critique)
    var dmg = att.atk;
    var isCrit = roll(att.crit);
    if (isCrit) dmg = Math.round(dmg * CRIT_MULT);
    applyDamage(def, dmg, att.name);
    log("".concat(att.name, " frappe ").concat(def.name, " (").concat(dmg).concat(isCrit ? ' ⚡ crit' : '', ")"));

    // petit gain de mana offensif
    att.mana = Math.min(100, (att.mana || 0) + 5);
    updateBars(att);
  }
  function heal(healer) {
    // cible : allié le plus blessé (dans la portée du heal = 2)
    var R = rangeFor('healer');
    var target = null,
      worst = 2;
    var _iterator3 = _createForOfIteratorHelper(units),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var u = _step3.value;
        if (u.team !== healer.team || u.hp <= 0 || u.hp >= u.maxHp) continue;
        if (dist(healer, u) > R) continue;
        var r = u.hp / u.maxHp; // plus petit => plus blessé
        if (r < worst) {
          worst = r;
          target = u;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (!target) return false;
    if ((healer.mana || 0) < HEAL_COST) return false;
    var amount = Math.max(10, Math.round(0.6 * healer.atk));
    healer.mana -= HEAL_COST;
    target.hp = Math.min(target.maxHp, target.hp + amount);
    updateBars(healer);
    updateBars(target);
    log("".concat(healer.name, " soigne ").concat(target.name, " (+").concat(amount, ")"));
    return true;
  }
  function tick() {
    // fin ?
    var aliveA = units.some(function (u) {
      return u.team === 'ally' && u.hp > 0;
    });
    var aliveE = units.some(function (u) {
      return u.team === 'enemy' && u.hp > 0;
    });
    if (!aliveA || !aliveE) {
      clearInterval(timer);
      timer = null;
      log(!aliveA && !aliveE ? 'Égalité !' : !aliveA ? 'Défaite…' : 'Victoire !');
      return;
    }

    // ordre déterministe: alliés puis ennemis
    var turn = _toConsumableArray(units).filter(function (u) {
      return u.hp > 0;
    }).sort(function (a, b) {
      return a.team === b.team ? 0 : a.team === 'ally' ? -1 : 1;
    });
    var _iterator4 = _createForOfIteratorHelper(turn),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var me = _step4.value;
        if (me.hp <= 0) continue;

        // tick mana passif
        me.mana = Math.min(100, (me.mana || 0) + (me["class"] === 'healer' ? 10 : 3));
        updateBars(me);
        if (me["class"] === 'healer') {
          if (heal(me)) continue; // soin prioritaire si possible
        }
        var foe = nearestEnemy(me);
        if (!foe) continue;
        var d = dist(me, foe);
        var R = rangeFor(me["class"]);
        if (d <= R) attack(me, foe);else moveToward(me, foe);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    renderHUD();
  }

  // ---- buttons ----
  btnStart.addEventListener('click', function () {
    if (!timer) timer = setInterval(tick, TICK_MS);
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
    reset();
  });

  // init
  reset();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-45bd0e"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUEyQixNQUFBLE1BQUE5SCxDQUFBLEdBQUFtRyxDQUFBLENBQUEyQixNQUFBLFlBQUFsRSxDQUFBLE1BQUFKLENBQUEsR0FBQXVHLEtBQUEsQ0FBQS9KLENBQUEsR0FBQTRELENBQUEsR0FBQTVELENBQUEsRUFBQTRELENBQUEsSUFBQUosQ0FBQSxDQUFBSSxDQUFBLElBQUF1QyxDQUFBLENBQUF2QyxDQUFBLFVBQUFKLENBQUE7QUFBQW9ILG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBREE7O0FBRUE7O0FBRUFuTyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDbEQsSUFBTXdCLFVBQVUsR0FBRyxDQUFDQyxNQUFNLENBQUNELFVBQVUsSUFBSSxHQUFHLEVBQUVFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0VBQ2xF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QUFBLENBQUF2UixDQUFBO2NBQUE7WUFBQSxHQUFBcVIsT0FBQTtVQUFBLENBQ0YsSUFBRSxJQUFJLENBQUM7VUFBQ3RCLFNBQUEsQ0FBQXZNLENBQUE7VUFBQTtRQUFBO1VBQUF1TSxTQUFBLENBQUF6UixDQUFBO1VBQUF3UixFQUFBLEdBQUFDLFNBQUEsQ0FBQTFQLENBQUE7VUFFVDFDLE9BQU8sQ0FBQ3NULEtBQUssQ0FBQW5CLEVBQUUsQ0FBQztVQUNoQmtCLEtBQUssQ0FBQyxpQkFBaUIsR0FBR2xCLEVBQUEsQ0FBRTJCLE9BQU8sQ0FBQztRQUFDO1VBQUEsT0FBQTFCLFNBQUEsQ0FBQS9QLENBQUE7TUFBQTtJQUFBLEdBQUFnUCxRQUFBO0VBQUEsQ0FFeEMsR0FBQztFQUVBLFNBQVM1QixlQUFlQSxDQUFBLEVBQUc7SUFDekJqQyxPQUFPLENBQUNsTyxRQUFRLEdBQUlvTyxNQUFNLENBQUMyQyxJQUFJLEtBQUs1QyxRQUFTO0VBQy9DOztFQUVBO0VBQ0F3QyxVQUFVLENBQUMsQ0FBQztBQUNkLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvUkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ1c7QUFDRDtBQUNQO0FBQ0M7QUFFL0JqUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNiN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC9JbnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSmF2YVNjcmlwdC9ob21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L21hdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KYXZhU2NyaXB0L3RlYW0tYnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL0phdmFTY3JpcHQvcmVnaXN0ZXIuanNcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwYXNzMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlcl90eXBlX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdCcpO1xyXG4gIGNvbnN0IHBhc3MyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyX3R5cGVfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZCcpO1xyXG4gIGNvbnN0IHJlZ2lzdGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWJ0bicpO1xyXG5cclxuICBmdW5jdGlvbiBjaGVja1Bhc3N3b3JkcygpIHtcclxuICAgIGlmIChwYXNzMS52YWx1ZSAmJiBwYXNzMS52YWx1ZSA9PT0gcGFzczIudmFsdWUpIHtcclxuICAgICAgcmVnaXN0ZXJCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlZ2lzdGVyQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChwYXNzMSAmJiBwYXNzMiAmJiByZWdpc3RlckJ0bikge1xyXG4gICAgcGFzczEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja1Bhc3N3b3Jkcyk7XHJcbiAgICBwYXNzMi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrUGFzc3dvcmRzKTtcclxuICB9XHJcbn0pO1xyXG4iLCJcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCB0cmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZy1yb3N0ZXItdHJhY2snKTtcclxuICBpZiAoIXRyYWNrKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX25hdi0tcHJldicpO1xyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX25hdi0tbmV4dCcpO1xyXG4gIGNvbnN0IHN0ZXAgPSAyODA7IC8vIHB4IHBhciBjbGljXHJcblxyXG4gIGNvbnN0IHNjcm9sbEJ5ID0gKGRlbHRhKSA9PiB0cmFjay5zY3JvbGxCeSh7IGxlZnQ6IGRlbHRhLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG4gIHByZXY/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsQnkoLXN0ZXApKTtcclxuICBuZXh0Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbEJ5KHN0ZXApKTtcclxufSk7XHJcbmNvbnNvbGUubG9nKCdob21lLmpzJyk7XHJcbiIsIi8vIGFzc2V0cy9KYXZhU2NyaXB0L21hdGNoLmpzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygncGFnZS1tYXRjaCcpKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IEFTU0VUX0JBU0UgPSAod2luZG93LkFTU0VUX0JBU0UgfHwgJy8nKS5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XHJcbiAgY29uc3QgZnVsbCA9IChwKSA9PiBBU1NFVF9CQVNFICsgU3RyaW5nKHAgfHwgJycpLnJlcGxhY2UoL15cXC8rLywgJycpO1xyXG5cclxuICBjb25zdCBib2FyZCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gIGNvbnN0IGxvZ0VsICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhdHRsZS1sb2cnKTtcclxuICBjb25zdCBodWRBICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWQtYWxsaWVzJyk7XHJcbiAgY29uc3QgaHVkRSAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkLWVuZW1pZXMnKTtcclxuICBjb25zdCBidG5TdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc3RhcnQnKTtcclxuICBjb25zdCBidG5QYXVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcGF1c2UnKTtcclxuICBjb25zdCBidG5SZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVzZXQnKTtcclxuXHJcbiAgICBpZiAoIWJvYXJkIHx8ICFsb2dFbCB8fCAhaHVkQSB8fCAhaHVkRSB8fCAhYnRuU3RhcnQgfHwgIWJ0blBhdXNlIHx8ICFidG5SZXNldCkge1xyXG4gICAgY29uc29sZS53YXJuKCdNYXRjaCBVSSBtaXNzaW5nJywgeyBib2FyZCwgbG9nRWwsIGh1ZEEsIGh1ZEUsIGJ0blN0YXJ0LCBidG5QYXVzZSwgYnRuUmVzZXQgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKiBAdHlwZSB7e2lkOm51bWJlcixuYW1lOnN0cmluZyxpbWc6c3RyaW5nLGNsYXNzOnN0cmluZyxmYW1pbHk/OnN0cmluZyxocDpudW1iZXIsYXRrOm51bWJlcixzaGllbGQ6bnVtYmVyLG1hbmE6bnVtYmVyLGFjYzpudW1iZXIsY3JpdDpudW1iZXIsZG9kZ2U6bnVtYmVyLHg6bnVtYmVyLHk6bnVtYmVyfVtdfSAqL1xyXG4gIGNvbnN0IEFMTElFUyAgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxpZXMtanNvbicpPy50ZXh0Q29udGVudCB8fCAnW10nKTtcclxuICBjb25zdCBFTkVNSUVTID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbWllcy1qc29uJyk/LnRleHRDb250ZW50IHx8ICdbXScpO1xyXG4gIGNvbnNvbGUubG9nKCdNQVRDSCBEQVRBIC0+JywgeyBBTExJRVMsIEVORU1JRVMgfSk7XHJcblxyXG4gIC8vIC0tLS0gc3RhdGUgLS0tLVxyXG4gIGxldCB1bml0cyA9IFtdOyAvLyB7dGVhbSxpZCxuYW1lLGltZyxjbGFzcyxmYW1pbHksbWF4SHAsaHAsYXRrLHNoaWVsZCxtYW5hLGFjYyxjcml0LGRvZGdlLHgseSxlbH1cclxuICBsZXQgdGltZXIgPSBudWxsO1xyXG5cclxuICAvLyAtLS0tIGNvbnN0YW50cyAtLS0tXHJcbiAgY29uc3QgVElDS19NUyA9IDQwMDtcclxuICBjb25zdCBDUklUX01VTFQgPSAxLjU7XHJcbiAgY29uc3QgSEVBTF9DT1NUID0gMjA7XHJcblxyXG4gIC8vIC0tLS0gaGVscGVycyAtLS0tXHJcbiAgY29uc3QgY2VsbCA9ICh4LHkpID0+IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5jZWxsW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWApO1xyXG4gIGNvbnN0IGluQm91bmRzID0gKHgseSkgPT4gKHg+PTAgJiYgeDw3ICYmIHk+PTAgJiYgeTw0KTtcclxuICBjb25zdCBkaXN0ID0gKGEsYikgPT4gTWF0aC5hYnMoYS54IC0gYi54KSArIE1hdGguYWJzKGEueSAtIGIueSk7XHJcbiAgY29uc3QgY2xhbXAwMSA9ICh2KSA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2KSk7XHJcbiAgY29uc3QgcGN0VG9Qcm9iID0gKHYpID0+IGNsYW1wMDEoKHYgfHwgMCkgLyAxMDApO1xyXG4gIGNvbnN0IHJvbGwgPSAocCkgPT4gTWF0aC5yYW5kb20oKSA8IHA7XHJcbiAgY29uc3QgcmFuZ2VGb3IgPSAoY2xzKSA9PiAoY2xzID09PSAnZHBzX3JhbmdlZCcgfHwgY2xzID09PSAnaGVhbGVyJyA/IDIgOiAxKTtcclxuXHJcbiAgZnVuY3Rpb24gbG9nKG1zZykge1xyXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGluZS50ZXh0Q29udGVudCA9IG1zZztcclxuICAgIGxvZ0VsLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgbG9nRWwuc2Nyb2xsVG9wID0gbG9nRWwuc2Nyb2xsSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVySFVEKCkge1xyXG4gICAgY29uc3QgbGluZSA9ICh1KSA9PlxyXG4gICAgICBgPGxpPjxpbWcgc3JjPVwiJHtmdWxsKHUuaW1nKX1cIj48c3Bhbj4ke3UubmFtZX08L3NwYW4+PGVtPiR7dS5ocH0gUFYke3Uuc2hpZWxkPjAgPyAnIOKAoiDwn5uhJyt1LnNoaWVsZCA6ICcnfSR7dS5tYW5hPjAgPyAnIOKAoiDwn5S3Jyt1Lm1hbmEgOiAnJ308L2VtPjwvbGk+YDtcclxuICAgIGh1ZEEuaW5uZXJIVE1MID0gdW5pdHMuZmlsdGVyKHUgPT4gdS50ZWFtPT09J2FsbHknKS5tYXAobGluZSkuam9pbignJyk7XHJcbiAgICBodWRFLmlubmVySFRNTCA9IHVuaXRzLmZpbHRlcih1ID0+IHUudGVhbT09PSdlbmVteScpLm1hcChsaW5lKS5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduKHUwKSB7XHJcbiAgICBjb25zdCB1ID0ge1xyXG4gICAgICB0ZWFtOiB1MC50ZWFtLFxyXG4gICAgICBpZDogdTAuaWQsIG5hbWU6IHUwLm5hbWUsIGltZzogdTAuaW1nLCBjbGFzczogdTAuY2xhc3MsIGZhbWlseTogdTAuZmFtaWx5LFxyXG4gICAgICBtYXhIcDogdTAuaHAsIGhwOiB1MC5ocCwgYXRrOiB1MC5hdGssXHJcbiAgICAgIHNoaWVsZDogdTAuc2hpZWxkIHx8IDAsIG1hbmE6IHUwLm1hbmEgfHwgMCxcclxuICAgICAgYWNjOiBwY3RUb1Byb2IodTAuYWNjKSwgY3JpdDogcGN0VG9Qcm9iKHUwLmNyaXQpLCBkb2RnZTogcGN0VG9Qcm9iKHUwLmRvZGdlKSxcclxuICAgICAgeDogdTAueCwgeTogdTAueSwgZWw6IG51bGxcclxuICAgIH07XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gYHVuaXQgdW5pdC0tJHt1LnRlYW19IHVuaXQtLSR7dS5jbGFzc31gO1xyXG4gICAgZWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW1nIHNyYz1cIiR7ZnVsbCh1LmltZyl9XCIgYWx0PVwiXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaHBcIj4ke3UuaHB9PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInNoaWVsZFwiJHt1LnNoaWVsZD4wPycnOicgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIid9PiR7dS5zaGllbGR9PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1hbmFcIiR7dS5tYW5hPjA/Jyc6JyBzdHlsZT1cImRpc3BsYXk6bm9uZVwiJ30+JHt1Lm1hbmF9PC9zcGFuPmA7XHJcbiAgICBjb25zdCBjID0gY2VsbCh1LngsIHUueSk7XHJcbiAgICBpZiAoYykgYy5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICB1LmVsID0gZWw7XHJcbiAgICB1bml0cy5wdXNoKHUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLmZvckVhY2goYyA9PiBjLmlubmVySFRNTCA9ICcnKTtcclxuICAgIGh1ZEEuaW5uZXJIVE1MID0gJyc7IGh1ZEUuaW5uZXJIVE1MID0gJyc7IGxvZ0VsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdW5pdHMgPSBbXTtcclxuICAgIEFMTElFUy5mb3JFYWNoKHUgPT4gc3Bhd24oey4uLnUsIHRlYW06J2FsbHknfSkpO1xyXG4gICAgRU5FTUlFUy5mb3JFYWNoKHUgPT4gc3Bhd24oey4uLnUsIHRlYW06J2VuZW15J30pKTtcclxuICAgIHJlbmRlckhVRCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbmVhcmVzdEVuZW15KG1lKSB7XHJcbiAgICBsZXQgYmVzdCA9IG51bGwsIGJlc3REID0gOTk5O1xyXG4gICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7XHJcbiAgICAgIGlmICh1LnRlYW0gPT09IG1lLnRlYW0gfHwgdS5ocCA8PSAwKSBjb250aW51ZTtcclxuICAgICAgY29uc3QgZCA9IGRpc3QobWUsIHUpO1xyXG4gICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3QgPSB1OyBiZXN0RCA9IGQ7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBiZXN0O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVRvd2FyZChtZSwgdGFyZ2V0KSB7XHJcbiAgICBjb25zdCBkeCA9IE1hdGguc2lnbih0YXJnZXQueCAtIG1lLngpO1xyXG4gICAgY29uc3QgZHkgPSBNYXRoLnNpZ24odGFyZ2V0LnkgLSBtZS55KTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBbXHJcbiAgICAgIHt4OiBtZS54ICsgZHgsIHk6IG1lLnl9LFxyXG4gICAgICB7eDogbWUueCwgeTogbWUueSArIGR5fSxcclxuICAgIF0uZmlsdGVyKHAgPT4gaW5Cb3VuZHMocC54LHAueSkpO1xyXG5cclxuICAgIGZvciAoY29uc3QgcCBvZiBjYW5kaWRhdGVzKSB7XHJcbiAgICAgIGNvbnN0IG9jYyA9IHVuaXRzLmZpbmQodSA9PiB1LmhwPjAgJiYgdS54PT09cC54ICYmIHUueT09PXAueSk7XHJcbiAgICAgIGlmICghb2NjKSB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBjZWxsKHAueCwgcC55KTtcclxuICAgICAgICBpZiAodG8pIHsgdG8uYXBwZW5kQ2hpbGQobWUuZWwpOyBtZS54ID0gcC54OyBtZS55ID0gcC55OyB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUJhcnModSkge1xyXG4gICAgdS5lbC5xdWVyeVNlbGVjdG9yKCcuaHAnKS50ZXh0Q29udGVudCA9IHUuaHA7XHJcbiAgICBjb25zdCBzaCA9IHUuZWwucXVlcnlTZWxlY3RvcignLnNoaWVsZCcpO1xyXG4gICAgaWYgKHNoKSB7IHNoLnRleHRDb250ZW50ID0gTWF0aC5tYXgoMCwgdS5zaGllbGQpOyBzaC5zdHlsZS5kaXNwbGF5ID0gdS5zaGllbGQ+MCA/ICcnIDogJ25vbmUnOyB9XHJcbiAgICBjb25zdCBtYSA9IHUuZWwucXVlcnlTZWxlY3RvcignLm1hbmEnKTtcclxuICAgIGlmIChtYSkgeyBtYS50ZXh0Q29udGVudCA9IE1hdGgubWF4KDAsIHUubWFuYSk7ICAgbWEuc3R5bGUuZGlzcGxheSA9IHUubWFuYT4wICAgPyAnJyA6ICdub25lJzsgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwbHlEYW1hZ2UoZGVmLCByYXdEbWcsIGJ5TmFtZSkge1xyXG4gICAgLy8gcsOpZHVjdGlvbiBwYXNzaXZlIHRhbmsgKDIwJSlcclxuICAgIGlmIChkZWYuY2xhc3MgPT09ICd0YW5rJykgcmF3RG1nID0gTWF0aC5yb3VuZChyYXdEbWcgKiAwLjgpO1xyXG5cclxuICAgIGxldCBkbWcgPSByYXdEbWc7XHJcblxyXG4gICAgLy8gYm91Y2xpZXIgYWJzb3JiZSBlbiBwcmVtaWVyXHJcbiAgICBpZiAoZGVmLnNoaWVsZCA+IDApIHtcclxuICAgICAgY29uc3QgYWJzb3JiZWQgPSBNYXRoLm1pbihkZWYuc2hpZWxkLCBkbWcpO1xyXG4gICAgICBkZWYuc2hpZWxkIC09IGFic29yYmVkO1xyXG4gICAgICBkbWcgLT0gYWJzb3JiZWQ7XHJcbiAgICAgIGlmIChhYnNvcmJlZCA+IDApIGxvZyhgJHtieU5hbWV9IGVudGFtZSBsZSBib3VjbGllciBkZSAke2RlZi5uYW1lfSAoJHthYnNvcmJlZH0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRtZyA+IDApIHtcclxuICAgICAgZGVmLmhwID0gTWF0aC5tYXgoMCwgZGVmLmhwIC0gZG1nKTtcclxuICAgICAgaWYgKGRlZi5ocCA8PSAwKSB7XHJcbiAgICAgICAgZGVmLmVsLmNsYXNzTGlzdC5hZGQoJ2tvJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkZWYuZWwucmVtb3ZlKCksIDE1MCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUJhcnMoZGVmKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF0dGFjayhhdHQsIGRlZikge1xyXG4gICAgLy8gcHLDqWNpc2lvbiAvIGVzcXVpdmVcclxuICAgIGlmICghcm9sbChhdHQuYWNjKSkgeyBsb2coYCR7YXR0Lm5hbWV9IHJhdGUgJHtkZWYubmFtZX1gKTsgcmV0dXJuOyB9XHJcbiAgICBpZiAocm9sbChkZWYuZG9kZ2UpKSB7IGxvZyhgJHtkZWYubmFtZX0gZXNxdWl2ZSBsJ2F0dGFxdWUgZGUgJHthdHQubmFtZX1gKTsgcmV0dXJuOyB9XHJcblxyXG4gICAgLy8gZMOpZ8OidHMgKCtjcml0aXF1ZSlcclxuICAgIGxldCBkbWcgPSBhdHQuYXRrO1xyXG4gICAgY29uc3QgaXNDcml0ID0gcm9sbChhdHQuY3JpdCk7XHJcbiAgICBpZiAoaXNDcml0KSBkbWcgPSBNYXRoLnJvdW5kKGRtZyAqIENSSVRfTVVMVCk7XHJcblxyXG4gICAgYXBwbHlEYW1hZ2UoZGVmLCBkbWcsIGF0dC5uYW1lKTtcclxuICAgIGxvZyhgJHthdHQubmFtZX0gZnJhcHBlICR7ZGVmLm5hbWV9ICgke2RtZ30ke2lzQ3JpdCA/ICcg4pqhIGNyaXQnIDogJyd9KWApO1xyXG5cclxuICAgIC8vIHBldGl0IGdhaW4gZGUgbWFuYSBvZmZlbnNpZlxyXG4gICAgYXR0Lm1hbmEgPSBNYXRoLm1pbigxMDAsIChhdHQubWFuYSB8fCAwKSArIDUpO1xyXG4gICAgdXBkYXRlQmFycyhhdHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGVhbChoZWFsZXIpIHtcclxuICAgIC8vIGNpYmxlIDogYWxsacOpIGxlIHBsdXMgYmxlc3PDqSAoZGFucyBsYSBwb3J0w6llIGR1IGhlYWwgPSAyKVxyXG4gICAgY29uc3QgUiA9IHJhbmdlRm9yKCdoZWFsZXInKTtcclxuICAgIGxldCB0YXJnZXQgPSBudWxsLCB3b3JzdCA9IDI7XHJcbiAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHtcclxuICAgICAgaWYgKHUudGVhbSAhPT0gaGVhbGVyLnRlYW0gfHwgdS5ocCA8PSAwIHx8IHUuaHAgPj0gdS5tYXhIcCkgY29udGludWU7XHJcbiAgICAgIGlmIChkaXN0KGhlYWxlciwgdSkgPiBSKSBjb250aW51ZTtcclxuICAgICAgY29uc3QgciA9IHUuaHAgLyB1Lm1heEhwOyAvLyBwbHVzIHBldGl0ID0+IHBsdXMgYmxlc3PDqVxyXG4gICAgICBpZiAociA8IHdvcnN0KSB7IHdvcnN0ID0gcjsgdGFyZ2V0ID0gdTsgfVxyXG4gICAgfVxyXG4gICAgaWYgKCF0YXJnZXQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAoKGhlYWxlci5tYW5hIHx8IDApIDwgSEVBTF9DT1NUKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgYW1vdW50ID0gTWF0aC5tYXgoMTAsIE1hdGgucm91bmQoMC42ICogaGVhbGVyLmF0aykpO1xyXG4gICAgaGVhbGVyLm1hbmEgLT0gSEVBTF9DT1NUO1xyXG4gICAgdGFyZ2V0LmhwID0gTWF0aC5taW4odGFyZ2V0Lm1heEhwLCB0YXJnZXQuaHAgKyBhbW91bnQpO1xyXG4gICAgdXBkYXRlQmFycyhoZWFsZXIpO1xyXG4gICAgdXBkYXRlQmFycyh0YXJnZXQpO1xyXG4gICAgbG9nKGAke2hlYWxlci5uYW1lfSBzb2lnbmUgJHt0YXJnZXQubmFtZX0gKCske2Ftb3VudH0pYCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRpY2soKSB7XHJcbiAgICAvLyBmaW4gP1xyXG4gICAgY29uc3QgYWxpdmVBID0gdW5pdHMuc29tZSh1ID0+IHUudGVhbT09PSdhbGx5JyAmJiB1LmhwPjApO1xyXG4gICAgY29uc3QgYWxpdmVFID0gdW5pdHMuc29tZSh1ID0+IHUudGVhbT09PSdlbmVteScgJiYgdS5ocD4wKTtcclxuICAgIGlmICghYWxpdmVBIHx8ICFhbGl2ZUUpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7IHRpbWVyID0gbnVsbDtcclxuICAgICAgbG9nKCFhbGl2ZUEgJiYgIWFsaXZlRSA/ICfDiWdhbGl0w6kgIScgOiAhYWxpdmVBID8gJ0TDqWZhaXRl4oCmJyA6ICdWaWN0b2lyZSAhJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvcmRyZSBkw6l0ZXJtaW5pc3RlOiBhbGxpw6lzIHB1aXMgZW5uZW1pc1xyXG4gICAgY29uc3QgdHVybiA9IFsuLi51bml0c11cclxuICAgICAgLmZpbHRlcih1ID0+IHUuaHA+MClcclxuICAgICAgLnNvcnQoKGEsYikgPT4gKGEudGVhbSA9PT0gYi50ZWFtID8gMCA6IChhLnRlYW0gPT09ICdhbGx5JyA/IC0xIDogMSkpKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IG1lIG9mIHR1cm4pIHtcclxuICAgICAgaWYgKG1lLmhwIDw9IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gdGljayBtYW5hIHBhc3NpZlxyXG4gICAgICBtZS5tYW5hID0gTWF0aC5taW4oMTAwLCAobWUubWFuYSB8fCAwKSArIChtZS5jbGFzcyA9PT0gJ2hlYWxlcicgPyAxMCA6IDMpKTtcclxuICAgICAgdXBkYXRlQmFycyhtZSk7XHJcblxyXG4gICAgICBpZiAobWUuY2xhc3MgPT09ICdoZWFsZXInKSB7XHJcbiAgICAgICAgaWYgKGhlYWwobWUpKSBjb250aW51ZTsgLy8gc29pbiBwcmlvcml0YWlyZSBzaSBwb3NzaWJsZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmb2UgPSBuZWFyZXN0RW5lbXkobWUpO1xyXG4gICAgICBpZiAoIWZvZSkgY29udGludWU7XHJcblxyXG4gICAgICBjb25zdCBkID0gZGlzdChtZSwgZm9lKTtcclxuICAgICAgY29uc3QgUiA9IHJhbmdlRm9yKG1lLmNsYXNzKTtcclxuXHJcbiAgICAgIGlmIChkIDw9IFIpIGF0dGFjayhtZSwgZm9lKTtcclxuICAgICAgZWxzZSBtb3ZlVG93YXJkKG1lLCBmb2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckhVRCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBidXR0b25zIC0tLS1cclxuICBidG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgaWYgKCF0aW1lcikgdGltZXIgPSBzZXRJbnRlcnZhbCh0aWNrLCBUSUNLX01TKTsgfSk7XHJcbiAgYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGlmICh0aW1lcikgeyBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXIgPSBudWxsOyB9IH0pO1xyXG4gIGJ0blJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBpZiAodGltZXIpIHsgY2xlYXJJbnRlcnZhbCh0aW1lcik7IHRpbWVyID0gbnVsbDsgfSByZXNldCgpOyB9KTtcclxuXHJcbiAgLy8gaW5pdFxyXG4gIHJlc2V0KCk7XHJcbn0pO1xyXG4iLCIvLyB0ZWFtLWJ1aWxkZXIuanNcclxuXHJcbi8vIGJhc2UgZGVzIGFzc2V0cyBmb3VybmllIHBhciBUd2lnOiB3aW5kb3cuQVNTRVRfQkFTRSA9IFwie3sgYXNzZXQoJycpIH19XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IEFTU0VUX0JBU0UgPSAod2luZG93LkFTU0VUX0JBU0UgfHwgJy8nKS5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XHJcbiAgY29uc3QgZnVsbEltZyA9IChwKSA9PiBBU1NFVF9CQVNFICsgU3RyaW5nKHAgfHwgJycpLnJlcGxhY2UoL15cXC8rLywgJycpO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKCdUZWFtIEJ1aWxkZXIgc2NyaXB0IGxvYWRlZCEnLCB7IEFTU0VUX0JBU0UgfSk7XHJcbiAgY29uc3Qgb3duZWRFbCAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293bmVkLWdpcmxzLWpzb24nKTtcclxuICBpZiAoIW93bmVkRWwpIHJldHVybjtcclxuXHJcbiAgLyoqIEB0eXBlIHtBcnJheX0gKi9cclxuICBjb25zdCBPV05FRCAgICAgPSBKU09OLnBhcnNlKG93bmVkRWwudGV4dENvbnRlbnQgfHwgJ1tdJyk7XHJcblxyXG4gIGNvbnN0IHBpY2tHcmlkICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWNrLWdyaWQnKTtcclxuICBjb25zdCBiZW5jaEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVuY2gtZ3JpZCcpO1xyXG4gIGNvbnN0IGJvYXJkICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gIGNvbnN0IGJ0blJlcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVyb2xsJyk7XHJcbiAgY29uc3QgYnRuTG9jayAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1sb2NrJyk7XHJcblxyXG4gIGNvbnN0IE1BWF9URUFNICA9IDQ7XHJcbiAgY29uc3QgcGxhY2VkICAgID0gbmV3IE1hcCgpOyAvLyBcIngseVwiIC0+IHsgZ2lybCwgZWwgfVxyXG4gIGNvbnN0IGluQmVuY2ggICA9IG5ldyBNYXAoKTsgLy8gZ2lybElkIC0+IGNhcmRFbGVtZW50XHJcblxyXG4gIC8vIGhlbHBlcnNcclxuICBjb25zdCByYW5kSW50ID0gKG4pID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xyXG4gIGNvbnN0IHBpY2tOID0gKGFyciwgbikgPT4ge1xyXG4gICAgY29uc3QgcG9vbCA9IFsuLi5hcnJdLCBvdXQgPSBbXTtcclxuICAgIHdoaWxlIChvdXQubGVuZ3RoIDwgTWF0aC5taW4obiwgcG9vbC5sZW5ndGgpKSB7XHJcbiAgICAgIG91dC5wdXNoKHBvb2wuc3BsaWNlKHJhbmRJbnQocG9vbC5sZW5ndGgpLCAxKVswXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG4gIH07XHJcbiAgY29uc3QgY2VsbEtleSA9ICh4LCB5KSA9PiBgJHt4fSwke3l9YDtcclxuXHJcbiAgLy8gLS0tLSBVSSByZW5kZXJlcnMgLS0tLVxyXG4gIGZ1bmN0aW9uIHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2UgfSkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSBgdGItY2FyZCB0Yi1jYXJkLS0ke2dpcmwuY2xhc3N9YDtcclxuICAgIGNhcmQuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGNhcmQuZGF0YXNldC5pZCA9IGdpcmwuaWQ7XHJcbiAgICBjYXJkLmRhdGFzZXQuc291cmNlID0gc291cmNlO1xyXG5cclxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9faW1nXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRiLWNhcmRfX21ldGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fbmFtZVwiPiR7Z2lybC5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0Yi1jYXJkX190YWdzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfVwiPiR7Y2xhc3NMYWJlbChnaXJsLmNsYXNzKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyB0YWctZmFtaWx5XCI+JHtnaXJsLmZhbWlseSA/PyAnJ308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGItY2FyZF9fc3RhdHNcIj5cclxuICAgICAgICA8c3Bhbj5QViAke2dpcmwucGR2fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5BVEsgJHtnaXJsLmF0a308L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+UFJDICR7TWF0aC5yb3VuZCgoZ2lybC5jaGFuY2VfYXRrID8/IDApICogMTAwKX0lPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkoZ2lybCkpO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gY2FyZC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpKTtcclxuICAgIH0pO1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpKTtcclxuXHJcbiAgICAvLyBkb3VibGUtY2xpYyAtPiB0b2dnbGUgYmFuY1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGNhcmQucGFyZW50RWxlbWVudCA9PT0gYmVuY2hHcmlkKSB7XHJcbiAgICAgICAgYmVuY2hHcmlkLnJlbW92ZUNoaWxkKGNhcmQpO1xyXG4gICAgICAgIGluQmVuY2guZGVsZXRlKGdpcmwuaWQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZUNoaXAoZ2lybCkge1xyXG4gICAgY29uc3QgY2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hpcC5jbGFzc05hbWUgPSBgY2hpcCAke2NsYXNzVGFnKGdpcmwuY2xhc3MpfWA7XHJcbiAgICBjaGlwLnRpdGxlID0gZ2lybC5uYW1lO1xyXG4gICAgY2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgY2hpcC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2Z1bGxJbWcoZ2lybC5pbWcpfVwiIGFsdD1cIiR7Z2lybC5uYW1lfVwiPjxzcGFuPiR7Z2lybC5uYW1lfTwvc3Bhbj5gO1xyXG5cclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcclxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KGdpcmwpKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGNoaXAuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKSk7XHJcbiAgICB9KTtcclxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IGNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKSk7XHJcblxyXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IGNoaXAucGFyZW50RWxlbWVudD8uY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgICAgaWYgKGNlbGwpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBjZWxsS2V5KGNlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueSk7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpbkJlbmNoLmhhcyhnaXJsLmlkKSkge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSByZW5kZXJDYXJkKGdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pO1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBpbkJlbmNoLnNldChnaXJsLmlkLCBjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjaGlwO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBpY2soKSB7XHJcbiAgcGlja0dyaWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IHBvb2wgPSBbLi4uT1dORURdO1xyXG4gIGlmIChwb29sLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAvLyBvbiBkdXBsaXF1ZSBzaSA8IDRcclxuICB3aGlsZSAocG9vbC5sZW5ndGggPCA0KSBwb29sID0gcG9vbC5jb25jYXQoT1dORUQpO1xyXG5cclxuICBjb25zdCBwaWNrcyA9IFtdO1xyXG4gIGNvbnN0IHRha2VuID0gbmV3IFNldCgpO1xyXG4gIHdoaWxlIChwaWNrcy5sZW5ndGggPCA0ICYmIHRha2VuLnNpemUgPCBwb29sLmxlbmd0aCkge1xyXG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wubGVuZ3RoKTtcclxuICAgIGlmICghdGFrZW4uaGFzKGkpKSB7IHRha2VuLmFkZChpKTsgcGlja3MucHVzaChwb29sW2ldKTsgfVxyXG4gIH1cclxuICBwaWNrcy5mb3JFYWNoKGcgPT4gcGlja0dyaWQuYXBwZW5kQ2hpbGQocmVuZGVyQ2FyZChnLCB7IHNvdXJjZTogJ3BpY2snIH0pKSk7XHJcbn1cclxuICBmdW5jdGlvbiBjbGFzc1RhZyhjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ3RhZy1tZWxlZSc7XHJcbiAgICAgIGNhc2UgJ2Rwc19yYW5nZWQnOiByZXR1cm4gJ3RhZy1yYW5nZWQnO1xyXG4gICAgICBjYXNlICd0YW5rJzogICAgICAgcmV0dXJuICd0YWctdGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ3RhZy1oZWFsJztcclxuICAgICAgZGVmYXVsdDogICAgICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xhc3NMYWJlbChjbHMpIHtcclxuICAgIHN3aXRjaCAoY2xzKSB7XHJcbiAgICAgIGNhc2UgJ2Rwc19tZWxlZSc6ICByZXR1cm4gJ0RQUyBDw6BDJztcclxuICAgICAgY2FzZSAnZHBzX3JhbmdlZCc6IHJldHVybiAnRFBTIGRpc3RhbmNlJztcclxuICAgICAgY2FzZSAndGFuayc6ICAgICAgIHJldHVybiAnVGFuayc7XHJcbiAgICAgIGNhc2UgJ2hlYWxlcic6ICAgICByZXR1cm4gJ0hlYWxlcic7XHJcbiAgICAgIGRlZmF1bHQ6ICAgICAgICAgICByZXR1cm4gY2xzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBEbkQgYm9hcmQgLS0tLVxyXG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQuY2xvc2VzdCgnLmNlbGwnKTtcclxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gY2VsbC5kYXRhc2V0O1xyXG4gICAgY29uc3Qga2V5ID0gY2VsbEtleSh4LCB5KTtcclxuXHJcbiAgICBjb25zdCBkcmFnZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50Yi1jYXJkLmRyYWdnaW5nLCAuY2hpcC5kcmFnZ2luZycpO1xyXG4gICAgaWYgKCFkcmFnZ2luZykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyBzaSBtw6ptZSBow6lybyBkw6lqw6AgcGxhY8OpIGFpbGxldXJzIC0+IGxpYsOocmUgbOKAmWFuY2llbm5lIGNlbGx1bGVcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHBsYWNlZCkge1xyXG4gICAgICBpZiAodi5naXJsLmlkID09PSBnaXJsLmlkKSB7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBjb25zdCBvbGRDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS14PVwiJHtrLnNwbGl0KCcsJylbMF19XCJdW2RhdGEteT1cIiR7ay5zcGxpdCgnLCcpWzFdfVwiXWApO1xyXG4gICAgICAgIGlmIChvbGRDZWxsKSBvbGRDZWxsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGltaXRlIMOpcXVpcGVcclxuICAgIGlmICghcGxhY2VkLmhhcyhrZXkpICYmIHBsYWNlZC5zaXplID49IE1BWF9URUFNKSByZXR1cm47XHJcblxyXG4gICAgLy8gc3dhcCBzaSBsYSBjZWxsdWxlIMOpdGFpdCBvY2N1cMOpZVxyXG4gICAgaWYgKHBsYWNlZC5oYXMoa2V5KSkge1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHBsYWNlZC5nZXQoa2V5KTtcclxuICAgICAgaWYgKGV4aXN0aW5nPy5lbCkge1xyXG4gICAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChyZW5kZXJDYXJkKGV4aXN0aW5nLmdpcmwsIHsgc291cmNlOiAnYmVuY2gnIH0pKTtcclxuICAgICAgICBpbkJlbmNoLnNldChleGlzdGluZy5naXJsLmlkLCBiZW5jaEdyaWQubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgcGxhY2VkLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaXAgPSBtYWtlQ2hpcChnaXJsKTtcclxuICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjZWxsLmFwcGVuZENoaWxkKGNoaXApO1xyXG4gICAgcGxhY2VkLnNldChrZXksIHsgZ2lybCwgZWw6IGNoaXAgfSk7XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBEbkQgYmVuY2ggLS0tLVxyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gIGJlbmNoR3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGdpcmwgPSBKU09OLnBhcnNlKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSB8fCAne30nKTtcclxuXHJcbiAgICAvLyByZXRpcmUgZHUgYm9hcmQgc2kgcHLDqXNlbnRlXHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBwbGFjZWQpIHtcclxuICAgICAgaWYgKHYuZ2lybC5pZCA9PT0gZ2lybC5pZCkge1xyXG4gICAgICAgIGNvbnN0IGMgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLXg9XCIke2suc3BsaXQoJywnKVswXX1cIl1bZGF0YS15PVwiJHtrLnNwbGl0KCcsJylbMV19XCJdYCk7XHJcbiAgICAgICAgaWYgKGMpIGMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcGxhY2VkLmRlbGV0ZShrKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5CZW5jaC5oYXMoZ2lybC5pZCkpIHtcclxuICAgICAgY29uc3QgY2FyZCA9IHJlbmRlckNhcmQoZ2lybCwgeyBzb3VyY2U6ICdiZW5jaCcgfSk7XHJcbiAgICAgIGJlbmNoR3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgaW5CZW5jaC5zZXQoZ2lybC5pZCwgY2FyZCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NrU3RhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLSBhY3Rpb25zIC0tLS1cclxubGV0IHRpY2tldElkID0gbnVsbDtcclxubGV0IHBvbGxUaW1lciA9IG51bGw7XHJcblxyXG5idG5Mb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGJ1aWxkIHBheWxvYWRcclxuICBjb25zdCBsaW5ldXAgPSBBcnJheS5mcm9tKHBsYWNlZC5lbnRyaWVzKCkpLm1hcCgoW2tleSwgdmFsXSkgPT4ge1xyXG4gICAgY29uc3QgW3gsIHldID0ga2V5LnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcbiAgICByZXR1cm4geyBpZDogdmFsLmdpcmwuaWQsIHgsIHkgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgU1RBUlRfVVJMICA9IHdpbmRvdy5NTT8uc3RhcnQgID8/ICcvbWF0Y2htYWtpbmcvc3RhcnQnO1xyXG4gIGNvbnN0IFNUQVRVU19UUEwgPSB3aW5kb3cuTU0/LnN0YXR1cyA/PyAnL21hdGNobWFraW5nL3N0YXR1cy9fX0lEX18nO1xyXG4gIGNvbnN0IHN0YXR1c1VybCAgPSAoaWQpID0+IFNUQVRVU19UUEwucmVwbGFjZSgnX19JRF9fJywgU3RyaW5nKGlkKSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdDYWxsaW5nIFNUQVJUX1VSTCA9JywgU1RBUlRfVVJMKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyAgPSBhd2FpdCBmZXRjaChTVEFSVF9VUkwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsaW5ldXAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xyXG4gICAgbGV0IGRhdGE7XHJcbiAgICB0cnkgeyBkYXRhID0gSlNPTi5wYXJzZSh0ZXh0KTsgfSBjYXRjaCB7IGRhdGEgPSBudWxsOyB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ21hdGNobWFraW5nL3N0YXJ0IC0+JywgcmVzLnN0YXR1cywgZGF0YSA/PyB0ZXh0KTtcclxuXHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICBhbGVydChgTWF0Y2htYWtpbmcgZmFpbGVkICgke3Jlcy5zdGF0dXN9KTpcXG4ke2RhdGE/LmVycm9yID8/IHRleHR9YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghZGF0YSB8fCAoZGF0YS5zdGF0dXMgIT09ICdtYXRjaGVkJyAmJiBkYXRhLnN0YXR1cyAhPT0gJ3F1ZXVlZCcpKSB7XHJcbiAgICAgIGFsZXJ0KCdSw6lwb25zZSBpbmF0dGVuZHVlOlxcbicgKyAoZGF0YSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogdGV4dCkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnbWF0Y2hlZCcpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL21hdGNoLyR7ZGF0YS5tYXRjaElkfWA7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBxdWV1ZWQgLT4gcG9sbCBzdGF0dXNcclxuICAgIHRpY2tldElkID0gZGF0YS50aWNrZXRJZDtcclxuICAgIGJ0bkxvY2suZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgYnRuTG9jay50ZXh0Q29udGVudCA9ICfwn5SOIFJlY2hlcmNoZSBlbiBjb3Vyc+KApic7XHJcblxyXG4gICAgcG9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByID0gYXdhaXQgZmV0Y2goc3RhdHVzVXJsKHRpY2tldElkKSwgeyBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyB9KTtcclxuICAgICAgY29uc3QgaiA9IGF3YWl0IHIuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZygnbWF0Y2htYWtpbmcvc3RhdHVzIC0+Jywgaik7XHJcbiAgICAgIGlmIChqLnN0YXR1cyA9PT0gJ21hdGNoZWQnKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9tYXRjaC8ke2oubWF0Y2hJZH1gO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MDAwKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgYWxlcnQoJ0VycmV1ciByw6lzZWF1OiAnICsgZS5tZXNzYWdlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVMb2NrU3RhdGUoKSB7XHJcbiAgICBidG5Mb2NrLmRpc2FibGVkID0gKHBsYWNlZC5zaXplICE9PSBNQVhfVEVBTSk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0XHJcbiAgcmVuZGVyUGljaygpO1xyXG59KTtcclxuIiwiXHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvdGVhbS1idWlsZGVyLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvSW5zY3JpcHRpb24uanMnO1xyXG5pbXBvcnQgJy4vSmF2YVNjcmlwdC9ob21lLmpzJztcclxuaW1wb3J0ICcuL0phdmFTY3JpcHQvbWF0Y2guanMnOyBcclxuXHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzMSIsImdldEVsZW1lbnRCeUlkIiwicGFzczIiLCJyZWdpc3RlckJ0biIsImNoZWNrUGFzc3dvcmRzIiwidmFsdWUiLCJkaXNhYmxlZCIsInRyYWNrIiwicHJldiIsInF1ZXJ5U2VsZWN0b3IiLCJuZXh0Iiwic3RlcCIsInNjcm9sbEJ5IiwiZGVsdGEiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjb25zb2xlIiwibG9nIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCMiIsImJvZHkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIkFTU0VUX0JBU0UiLCJ3aW5kb3ciLCJyZXBsYWNlIiwiZnVsbCIsInAiLCJTdHJpbmciLCJib2FyZCIsImxvZ0VsIiwiaHVkQSIsImh1ZEUiLCJidG5TdGFydCIsImJ0blBhdXNlIiwiYnRuUmVzZXQiLCJ3YXJuIiwiQUxMSUVTIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJFTkVNSUVTIiwidW5pdHMiLCJ0aW1lciIsIlRJQ0tfTVMiLCJDUklUX01VTFQiLCJIRUFMX0NPU1QiLCJjZWxsIiwieCIsInkiLCJjb25jYXQiLCJpbkJvdW5kcyIsImRpc3QiLCJhIiwiYiIsIk1hdGgiLCJhYnMiLCJjbGFtcDAxIiwidiIsIm1heCIsIm1pbiIsInBjdFRvUHJvYiIsInJvbGwiLCJyYW5kb20iLCJyYW5nZUZvciIsImNscyIsIm1zZyIsImxpbmUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJyZW5kZXJIVUQiLCJ1IiwiaW1nIiwibmFtZSIsImhwIiwic2hpZWxkIiwibWFuYSIsImlubmVySFRNTCIsImZpbHRlciIsInRlYW0iLCJtYXAiLCJqb2luIiwic3Bhd24iLCJ1MCIsImlkIiwiZmFtaWx5IiwibWF4SHAiLCJhdGsiLCJhY2MiLCJjcml0IiwiZG9kZ2UiLCJlbCIsImNsYXNzTmFtZSIsImMiLCJwdXNoIiwicmVzZXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIl9vYmplY3RTcHJlYWQiLCJuZWFyZXN0RW5lbXkiLCJtZSIsImJlc3QiLCJiZXN0RCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJkIiwiZXJyIiwiZSIsImYiLCJtb3ZlVG93YXJkIiwidGFyZ2V0IiwiZHgiLCJzaWduIiwiZHkiLCJjYW5kaWRhdGVzIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9sb29wIiwib2NjIiwiZmluZCIsInRvIiwiX3JldCIsInVwZGF0ZUJhcnMiLCJzaCIsInN0eWxlIiwiZGlzcGxheSIsIm1hIiwiYXBwbHlEYW1hZ2UiLCJkZWYiLCJyYXdEbWciLCJieU5hbWUiLCJyb3VuZCIsImRtZyIsImFic29yYmVkIiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImF0dGFjayIsImF0dCIsImlzQ3JpdCIsImhlYWwiLCJoZWFsZXIiLCJSIiwid29yc3QiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiciIsImFtb3VudCIsInRpY2siLCJhbGl2ZUEiLCJzb21lIiwiYWxpdmVFIiwiY2xlYXJJbnRlcnZhbCIsInR1cm4iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzb3J0IiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsImZvZSIsInNldEludGVydmFsIiwidCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJHIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiX24iLCJGIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiZnJvbSIsInRlc3QiLCJyZXF1aXJlIiwiZnVsbEltZyIsIm93bmVkRWwiLCJPV05FRCIsInBpY2tHcmlkIiwiYmVuY2hHcmlkIiwiYnRuUmVyb2xsIiwiYnRuTG9jayIsIk1BWF9URUFNIiwicGxhY2VkIiwiTWFwIiwiaW5CZW5jaCIsInJhbmRJbnQiLCJmbG9vciIsInBpY2tOIiwiYXJyIiwicG9vbCIsIm91dCIsInNwbGljZSIsImNlbGxLZXkiLCJyZW5kZXJDYXJkIiwiZ2lybCIsIl9yZWYiLCJfZ2lybCRmYW1pbHkiLCJfZ2lybCRjaGFuY2VfYXRrIiwic291cmNlIiwiY2FyZCIsImRyYWdnYWJsZSIsImRhdGFzZXQiLCJjbGFzc1RhZyIsImNsYXNzTGFiZWwiLCJwZHYiLCJjaGFuY2VfYXRrIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInN0cmluZ2lmeSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInNldCIsInVwZGF0ZUxvY2tTdGF0ZSIsIm1ha2VDaGlwIiwiY2hpcCIsInRpdGxlIiwiX2NoaXAkcGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJrZXkiLCJoYXMiLCJyZW5kZXJQaWNrIiwicGlja3MiLCJ0YWtlbiIsIlNldCIsInNpemUiLCJnIiwicHJldmVudERlZmF1bHQiLCJfY2VsbCRkYXRhc2V0IiwiZHJhZ2dpbmciLCJnZXREYXRhIiwiX3N0ZXAkdmFsdWUiLCJrIiwib2xkQ2VsbCIsInNwbGl0IiwiZXhpc3RpbmciLCJnZXQiLCJsYXN0RWxlbWVudENoaWxkIiwiX3N0ZXAyJHZhbHVlIiwidGlja2V0SWQiLCJwb2xsVGltZXIiLCJfY2FsbGVlMiIsIl93aW5kb3ckTU0kc3RhcnQiLCJfd2luZG93JE1NIiwiX3dpbmRvdyRNTSRzdGF0dXMiLCJfd2luZG93JE1NMiIsImxpbmV1cCIsIlNUQVJUX1VSTCIsIlNUQVRVU19UUEwiLCJzdGF0dXNVcmwiLCJyZXMiLCJ0ZXh0IiwiZGF0YSIsIl9kYXRhJGVycm9yIiwiX2RhdGEiLCJfdCIsIl9jb250ZXh0MiIsImVudHJpZXMiLCJfcmVmMyIsIl9yZWY0IiwidmFsIiwiX2tleSRzcGxpdCRtYXAiLCJOdW1iZXIiLCJfa2V5JHNwbGl0JG1hcDIiLCJNTSIsInN0YXJ0Iiwic3RhdHVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJfdW51c2VkIiwib2siLCJhbGVydCIsImVycm9yIiwibG9jYXRpb24iLCJocmVmIiwibWF0Y2hJZCIsIl9jYWxsZWUiLCJqIiwiX2NvbnRleHQiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=