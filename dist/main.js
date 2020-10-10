/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoffeeMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _Milk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);




var coffeeMachine = new _CoffeeMachine__WEBPACK_IMPORTED_MODULE_0__["CoffeeMachine"](new _Coffee__WEBPACK_IMPORTED_MODULE_1__["Coffee"](1000), new _Water__WEBPACK_IMPORTED_MODULE_2__["Water"](5000), new _Milk__WEBPACK_IMPORTED_MODULE_3__["Milk"](2000));
var espresso = document.getElementById('espresso');
var americano = document.getElementById('americano');
var latte = document.getElementById('latte');
var extraCoffee = document.getElementById('extraCoffee');
var extraWater = document.getElementById('extraWater');
var extraMilk = document.getElementById('extraMilk');
espresso.addEventListener('click', function () {
  setTimeout(function () {
    return coffeeMachine.getEspresso();
  }, 2000);
});
americano.addEventListener('click', function () {
  setTimeout(function () {
    return coffeeMachine.getAmericano();
  }, 2000);
});
latte.addEventListener('click', function () {
  setTimeout(function () {
    return coffeeMachine.getLatte();
  }, 2000);
});
extraCoffee.addEventListener('click', function () {
  setTimeout(function () {
    return coffeeMachine.extraCoffee();
  }, 1000);
});
extraWater.addEventListener('click', function () {
  setTimeout(function () {
    return coffeeMachine.extraWater();
  }, 1000);
});
extraMilk.addEventListener('click', function () {
  setTimeout(function () {
    return coffeeMachine.extraMilk();
  }, 1000);
}); // console.log(coffeeMachine);
// coffeeMachine.getEspresso();
// coffeeMachine.getAmericano();
// coffeeMachine.getLatte();
// coffeeMachine.extraCoffee();
// coffeeMachine.extraWater();
// coffeeMachine.extraMilk();
// coffeeMachine.water.amount += 1000;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeMachine", function() { return CoffeeMachine; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoffeeMachine = /*#__PURE__*/function () {
  function CoffeeMachine(coffee, water, milk) {
    _classCallCheck(this, CoffeeMachine);

    this.coffee = coffee;
    this.water = water;
    this.milk = milk;
  }

  _createClass(CoffeeMachine, [{
    key: "getEspresso",
    value: function getEspresso() {
      if (this.coffee.amount > 10 && this.water.amount > 50) {
        this.coffee.amount -= 10;
        this.water.amount -= 50;
        return alert('Espresso done!');
      } else {
        alert('Not enough ingredients!!!');
      }
    }
  }, {
    key: "getAmericano",
    value: function getAmericano() {
      if (this.coffee.amount > 10 && this.water.amount > 100) {
        this.coffee.amount -= 10;
        this.water.amount -= 100;
        return alert('Americano done!');
      } else {
        alert('Not enough ingredients!!!');
      }
    }
  }, {
    key: "getLatte",
    value: function getLatte() {
      if (this.coffee.amount > 10 && this.water.amount > 100 && this.milk.amount > 150) {
        this.coffee.amount -= 10;
        this.water.amount -= 50;
        this.milk.amount -= 150;
        return alert('Latte done!');
      } else {
        alert('Not enough ingredients!!!');
      }
    }
  }, {
    key: "extraCoffee",
    value: function extraCoffee() {
      if (this.coffee.amount > 10) {
        this.coffee.amount -= 10;
        return alert('extra coffee');
      } else {
        alert('Not enough coffee!!!');
      }
    }
  }, {
    key: "extraWater",
    value: function extraWater() {
      if (this.water.amount > 50) {
        this.water.amount -= 50;
        return alert('extra water');
      } else {
        alert('Not enough water!!!');
      }
    }
  }, {
    key: "extraMilk",
    value: function extraMilk() {
      if (this.milk.amount > 100) {
        this.milk.amount -= 100;
        return alert('extra milk');
      } else {
        alert('Not enough milk!!!');
      }
    }
  }]);

  return CoffeeMachine;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coffee", function() { return Coffee; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Coffee = /*#__PURE__*/function () {
  function Coffee(amount) {
    _classCallCheck(this, Coffee);

    this._amount = amount;
  }

  _createClass(Coffee, [{
    key: "amount",
    set: function set(amount) {
      this._amount = amount;
    },
    get: function get() {
      return this._amount;
    }
  }]);

  return Coffee;
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Water", function() { return Water; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Water = /*#__PURE__*/function () {
  function Water(amount) {
    _classCallCheck(this, Water);

    this._amount = amount;
  }

  _createClass(Water, [{
    key: "amount",
    set: function set(amount) {
      this._amount = amount;
    },
    get: function get() {
      return this._amount;
    }
  }]);

  return Water;
}();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Milk", function() { return Milk; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Milk = /*#__PURE__*/function () {
  function Milk(amount) {
    _classCallCheck(this, Milk);

    this._amount = amount;
  }

  _createClass(Milk, [{
    key: "amount",
    set: function set(amount) {
      this._amount = amount;
    },
    get: function get() {
      return this._amount;
    }
  }]);

  return Milk;
}();

/***/ })
/******/ ]);