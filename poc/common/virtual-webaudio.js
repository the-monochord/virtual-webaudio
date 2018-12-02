var virtualWebaudio =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ramda/es/F.js":
/*!************************************!*\
  !*** ./node_modules/ramda/es/F.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./always */ \"./node_modules/ramda/es/always.js\");\n\n/**\n * A function that always returns `false`. Any passed in parameters are ignored.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Function\n * @sig * -> Boolean\n * @param {*}\n * @return {Boolean}\n * @see R.always, R.T\n * @example\n *\n *      R.F(); //=> false\n */\n\nvar F =\n/*#__PURE__*/\nObject(_always__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\n/* harmony default export */ __webpack_exports__[\"default\"] = (F);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/F.js?");

/***/ }),

/***/ "./node_modules/ramda/es/T.js":
/*!************************************!*\
  !*** ./node_modules/ramda/es/T.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./always */ \"./node_modules/ramda/es/always.js\");\n\n/**\n * A function that always returns `true`. Any passed in parameters are ignored.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Function\n * @sig * -> Boolean\n * @param {*}\n * @return {Boolean}\n * @see R.always, R.F\n * @example\n *\n *      R.T(); //=> true\n */\n\nvar T =\n/*#__PURE__*/\nObject(_always__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true);\n/* harmony default export */ __webpack_exports__[\"default\"] = (T);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/T.js?");

/***/ }),

/***/ "./node_modules/ramda/es/__.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/__.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * A special placeholder value used to specify \"gaps\" within curried functions,\n * allowing partial application of any combination of arguments, regardless of\n * their positions.\n *\n * If `g` is a curried ternary function and `_` is `R.__`, the following are\n * equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2, _)(1, 3)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @constant\n * @memberOf R\n * @since v0.6.0\n * @category Function\n * @example\n *\n *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');\n *      greet('Alice'); //=> 'Hello, Alice!'\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  '@@functional/placeholder': true\n});\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/__.js?");

/***/ }),

/***/ "./node_modules/ramda/es/add.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/add.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Adds two values.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Math\n * @sig Number -> Number -> Number\n * @param {Number} a\n * @param {Number} b\n * @return {Number}\n * @see R.subtract\n * @example\n *\n *      R.add(2, 3);       //=>  5\n *      R.add(7)(10);      //=> 17\n */\n\nvar add =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function add(a, b) {\n  return Number(a) + Number(b);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/add.js?");

/***/ }),

/***/ "./node_modules/ramda/es/addIndex.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/addIndex.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n\n\n\n/**\n * Creates a new list iteration function from an existing one by adding two new\n * parameters to its callback function: the current index, and the entire list.\n *\n * This would turn, for instance, [`R.map`](#map) function into one that\n * more closely resembles `Array.prototype.map`. Note that this will only work\n * for functions in which the iteration callback function is the first\n * parameter, and where the list is the last parameter. (This latter might be\n * unimportant if the list parameter is not used.)\n *\n * @func\n * @memberOf R\n * @since v0.15.0\n * @category Function\n * @category List\n * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)\n * @param {Function} fn A list iteration function that does not pass index or list to its callback\n * @return {Function} An altered list iteration function that passes (item, index, list) to its callback\n * @example\n *\n *      var mapIndexed = R.addIndex(R.map);\n *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);\n *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']\n */\n\nvar addIndex =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function addIndex(fn) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fn.length, function () {\n    var idx = 0;\n    var origFn = arguments[0];\n    var list = arguments[arguments.length - 1];\n    var args = Array.prototype.slice.call(arguments, 0);\n\n    args[0] = function () {\n      var result = origFn.apply(this, Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arguments, [idx, list]));\n      idx += 1;\n      return result;\n    };\n\n    return fn.apply(this, args);\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addIndex);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/addIndex.js?");

/***/ }),

/***/ "./node_modules/ramda/es/adjust.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/adjust.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n\n/**\n * Applies a function to the value at the given index of an array, returning a\n * new copy of the array with the element at the given index replaced with the\n * result of the function application.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category List\n * @sig (a -> a) -> Number -> [a] -> [a]\n * @param {Function} fn The function to apply.\n * @param {Number} idx The index.\n * @param {Array|Arguments} list An array-like object whose value\n *        at the supplied index will be replaced.\n * @return {Array} A copy of the supplied array-like object with\n *         the element at index `idx` replaced with the value\n *         returned by applying `fn` to the existing element.\n * @see R.update\n * @example\n *\n *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]\n *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]\n * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]\n * @symb R.adjust(f, 0, [a, b]) = [f(a), b]\n */\n\nvar adjust =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function adjust(fn, idx, list) {\n  if (idx >= list.length || idx < -list.length) {\n    return list;\n  }\n\n  var start = idx < 0 ? list.length : 0;\n\n  var _idx = start + idx;\n\n  var _list = Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list);\n\n  _list[_idx] = fn(list[_idx]);\n  return _list;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (adjust);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/adjust.js?");

/***/ }),

/***/ "./node_modules/ramda/es/all.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/all.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xall */ \"./node_modules/ramda/es/internal/_xall.js\");\n\n\n\n/**\n * Returns `true` if all elements of the list match the predicate, `false` if\n * there are any that don't.\n *\n * Dispatches to the `all` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig (a -> Boolean) -> [a] -> Boolean\n * @param {Function} fn The predicate function.\n * @param {Array} list The array to consider.\n * @return {Boolean} `true` if the predicate is satisfied by every element, `false`\n *         otherwise.\n * @see R.any, R.none, R.transduce\n * @example\n *\n *      var equals3 = R.equals(3);\n *      R.all(equals3)([3, 3, 3, 3]); //=> true\n *      R.all(equals3)([3, 3, 1, 3]); //=> false\n */\n\nvar all =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['all'], _internal_xall__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function all(fn, list) {\n  var idx = 0;\n\n  while (idx < list.length) {\n    if (!fn(list[idx])) {\n      return false;\n    }\n\n    idx += 1;\n  }\n\n  return true;\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (all);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/all.js?");

/***/ }),

/***/ "./node_modules/ramda/es/allPass.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/allPass.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./max */ \"./node_modules/ramda/es/max.js\");\n/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pluck */ \"./node_modules/ramda/es/pluck.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n\n\n\n\n\n/**\n * Takes a list of predicates and returns a predicate that returns true for a\n * given list of arguments if every one of the provided predicates is satisfied\n * by those arguments.\n *\n * The function returned is a curried function whose arity matches that of the\n * highest-arity predicate.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Logic\n * @sig [(*... -> Boolean)] -> (*... -> Boolean)\n * @param {Array} predicates An array of predicates to check\n * @return {Function} The combined predicate\n * @see R.anyPass\n * @example\n *\n *      var isQueen = R.propEq('rank', 'Q');\n *      var isSpade = R.propEq('suit', '♠︎');\n *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);\n *\n *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false\n *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true\n */\n\nvar allPass =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function allPass(preds) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_reduce__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_max__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 0, Object(_pluck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('length', preds)), function () {\n    var idx = 0;\n    var len = preds.length;\n\n    while (idx < len) {\n      if (!preds[idx].apply(this, arguments)) {\n        return false;\n      }\n\n      idx += 1;\n    }\n\n    return true;\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (allPass);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/allPass.js?");

/***/ }),

/***/ "./node_modules/ramda/es/always.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/always.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Returns a function that always returns the given value. Note that for\n * non-primitives the value returned is a reference to the original value.\n *\n * This function is known as `const`, `constant`, or `K` (for K combinator) in\n * other languages and libraries.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig a -> (* -> a)\n * @param {*} val The value to wrap in a function\n * @return {Function} A Function :: * -> val.\n * @example\n *\n *      var t = R.always('Tee');\n *      t(); //=> 'Tee'\n */\n\nvar always =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function always(val) {\n  return function () {\n    return val;\n  };\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (always);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/always.js?");

/***/ }),

/***/ "./node_modules/ramda/es/and.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/and.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns `true` if both arguments are `true`; `false` otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Logic\n * @sig a -> b -> a | b\n * @param {Any} a\n * @param {Any} b\n * @return {Any} the first argument if it is falsy, otherwise the second argument.\n * @see R.both\n * @example\n *\n *      R.and(true, true); //=> true\n *      R.and(true, false); //=> false\n *      R.and(false, true); //=> false\n *      R.and(false, false); //=> false\n */\n\nvar and =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function and(a, b) {\n  return a && b;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (and);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/and.js?");

/***/ }),

/***/ "./node_modules/ramda/es/any.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/any.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xany__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xany */ \"./node_modules/ramda/es/internal/_xany.js\");\n\n\n\n/**\n * Returns `true` if at least one of elements of the list match the predicate,\n * `false` otherwise.\n *\n * Dispatches to the `any` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig (a -> Boolean) -> [a] -> Boolean\n * @param {Function} fn The predicate function.\n * @param {Array} list The array to consider.\n * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`\n *         otherwise.\n * @see R.all, R.none, R.transduce\n * @example\n *\n *      var lessThan0 = R.flip(R.lt)(0);\n *      var lessThan2 = R.flip(R.lt)(2);\n *      R.any(lessThan0)([1, 2]); //=> false\n *      R.any(lessThan2)([1, 2]); //=> true\n */\n\nvar any =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['any'], _internal_xany__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function any(fn, list) {\n  var idx = 0;\n\n  while (idx < list.length) {\n    if (fn(list[idx])) {\n      return true;\n    }\n\n    idx += 1;\n  }\n\n  return false;\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (any);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/any.js?");

/***/ }),

/***/ "./node_modules/ramda/es/anyPass.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/anyPass.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./max */ \"./node_modules/ramda/es/max.js\");\n/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pluck */ \"./node_modules/ramda/es/pluck.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n\n\n\n\n\n/**\n * Takes a list of predicates and returns a predicate that returns true for a\n * given list of arguments if at least one of the provided predicates is\n * satisfied by those arguments.\n *\n * The function returned is a curried function whose arity matches that of the\n * highest-arity predicate.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Logic\n * @sig [(*... -> Boolean)] -> (*... -> Boolean)\n * @param {Array} predicates An array of predicates to check\n * @return {Function} The combined predicate\n * @see R.allPass\n * @example\n *\n *      var isClub = R.propEq('suit', '♣');\n *      var isSpade = R.propEq('suit', '♠');\n *      var isBlackCard = R.anyPass([isClub, isSpade]);\n *\n *      isBlackCard({rank: '10', suit: '♣'}); //=> true\n *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true\n *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false\n */\n\nvar anyPass =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function anyPass(preds) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_reduce__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_max__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 0, Object(_pluck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('length', preds)), function () {\n    var idx = 0;\n    var len = preds.length;\n\n    while (idx < len) {\n      if (preds[idx].apply(this, arguments)) {\n        return true;\n      }\n\n      idx += 1;\n    }\n\n    return false;\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (anyPass);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/anyPass.js?");

/***/ }),

/***/ "./node_modules/ramda/es/ap.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/ap.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n\n\n\n\n/**\n * ap applies a list of functions to a list of values.\n *\n * Dispatches to the `ap` method of the second argument, if present. Also\n * treats curried functions as applicatives.\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category Function\n * @sig [a -> b] -> [a] -> [b]\n * @sig Apply f => f (a -> b) -> f a -> f b\n * @sig (a -> b -> c) -> (a -> b) -> (a -> c)\n * @param {*} applyF\n * @param {*} applyX\n * @return {*}\n * @example\n *\n *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]\n *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> [\"tasty pizza\", \"tasty salad\", \"PIZZA\", \"SALAD\"]\n *\n *      // R.ap can also be used as S combinator\n *      // when only two functions are passed\n *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'\n * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]\n */\n\nvar ap =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function ap(applyF, applyX) {\n  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {\n    return applyF(x)(applyX(x));\n  } : // else\n  Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function (acc, f) {\n    return Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(acc, Object(_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(f, applyX));\n  }, [], applyF);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ap);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/ap.js?");

/***/ }),

/***/ "./node_modules/ramda/es/aperture.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/aperture.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_aperture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_aperture */ \"./node_modules/ramda/es/internal/_aperture.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xaperture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xaperture */ \"./node_modules/ramda/es/internal/_xaperture.js\");\n\n\n\n\n/**\n * Returns a new list, composed of n-tuples of consecutive elements. If `n` is\n * greater than the length of the list, an empty list is returned.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.12.0\n * @category List\n * @sig Number -> [a] -> [[a]]\n * @param {Number} n The size of the tuples to create\n * @param {Array} list The list to split into `n`-length tuples\n * @return {Array} The resulting list of `n`-length tuples\n * @see R.transduce\n * @example\n *\n *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]\n *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]\n *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []\n */\n\nvar aperture =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([], _internal_xaperture__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _internal_aperture__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (aperture);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/aperture.js?");

/***/ }),

/***/ "./node_modules/ramda/es/append.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/append.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Returns a new list containing the contents of the given list, followed by\n * the given element.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig a -> [a] -> [a]\n * @param {*} el The element to add to the end of the new list.\n * @param {Array} list The list of elements to add a new item to.\n *        list.\n * @return {Array} A new list containing the elements of the old list followed by `el`.\n * @see R.prepend\n * @example\n *\n *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']\n *      R.append('tests', []); //=> ['tests']\n *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]\n */\n\nvar append =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function append(el, list) {\n  return Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list, [el]);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (append);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/append.js?");

/***/ }),

/***/ "./node_modules/ramda/es/apply.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/apply.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Applies function `fn` to the argument list `args`. This is useful for\n * creating a fixed-arity function from a variadic function. `fn` should be a\n * bound function if context is significant.\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category Function\n * @sig (*... -> a) -> [*] -> a\n * @param {Function} fn The function which will be called with `args`\n * @param {Array} args The arguments to call `fn` with\n * @return {*} result The result, equivalent to `fn(...args)`\n * @see R.call, R.unapply\n * @example\n *\n *      var nums = [1, 2, 3, -99, 42, 6, 7];\n *      R.apply(Math.max, nums); //=> 42\n * @symb R.apply(f, [a, b, c]) = f(a, b, c)\n */\n\nvar apply =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function apply(fn, args) {\n  return fn.apply(this, args);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apply);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/apply.js?");

/***/ }),

/***/ "./node_modules/ramda/es/applySpec.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/applySpec.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply */ \"./node_modules/ramda/es/apply.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./max */ \"./node_modules/ramda/es/max.js\");\n/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pluck */ \"./node_modules/ramda/es/pluck.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./values */ \"./node_modules/ramda/es/values.js\");\n\n\n\n\n\n\n\n\n/**\n * Given a spec object recursively mapping properties to functions, creates a\n * function producing an object of the same structure, by mapping each property\n * to the result of calling its associated function with the supplied arguments.\n *\n * @func\n * @memberOf R\n * @since v0.20.0\n * @category Function\n * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})\n * @param {Object} spec an object recursively mapping properties to functions for\n *        producing the values for these properties.\n * @return {Function} A function that returns an object of the same structure\n * as `spec', with each property set to the value returned by calling its\n * associated function with the supplied arguments.\n * @see R.converge, R.juxt\n * @example\n *\n *      var getMetrics = R.applySpec({\n *        sum: R.add,\n *        nested: { mul: R.multiply }\n *      });\n *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }\n * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }\n */\n\nvar applySpec =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function applySpec(spec) {\n  spec = Object(_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function (v) {\n    return typeof v == 'function' ? v : applySpec(v);\n  }, spec);\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_reduce__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_max__WEBPACK_IMPORTED_MODULE_4__[\"default\"], 0, Object(_pluck__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('length', Object(_values__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(spec))), function () {\n    var args = arguments;\n    return Object(_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function (f) {\n      return Object(_apply__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(f, args);\n    }, spec);\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (applySpec);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/applySpec.js?");

/***/ }),

/***/ "./node_modules/ramda/es/applyTo.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/applyTo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n* Takes a value and applies a function to it.\n*\n* This function is also known as the `thrush` combinator.\n*\n* @func\n* @memberOf R\n * @since v0.25.0\n* @category Function\n* @sig a -> (a -> b) -> b\n* @param {*} x The value\n* @param {Function} f The function to apply\n* @return {*} The result of applying `f` to `x`\n* @example\n*\n*      var t42 = R.applyTo(42);\n*      t42(R.identity); //=> 42\n*      t42(R.add(1)); //=> 43\n*/\n\nvar applyTo =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function applyTo(x, f) {\n  return f(x);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (applyTo);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/applyTo.js?");

/***/ }),

/***/ "./node_modules/ramda/es/ascend.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/ascend.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Makes an ascending comparator function out of a function that returns a value\n * that can be compared with `<` and `>`.\n *\n * @func\n * @memberOf R\n * @since v0.23.0\n * @category Function\n * @sig Ord b => (a -> b) -> a -> a -> Number\n * @param {Function} fn A function of arity one that returns a value that can be compared\n * @param {*} a The first item to be compared.\n * @param {*} b The second item to be compared.\n * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`\n * @see R.descend\n * @example\n *\n *      var byAge = R.ascend(R.prop('age'));\n *      var people = [\n *        // ...\n *      ];\n *      var peopleByYoungestFirst = R.sort(byAge, people);\n */\n\nvar ascend =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function ascend(fn, a, b) {\n  var aa = fn(a);\n  var bb = fn(b);\n  return aa < bb ? -1 : aa > bb ? 1 : 0;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ascend);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/ascend.js?");

/***/ }),

/***/ "./node_modules/ramda/es/assoc.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/assoc.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Makes a shallow clone of an object, setting or overriding the specified\n * property with the given value. Note that this copies and flattens prototype\n * properties onto the new object as well. All non-primitive properties are\n * copied by reference.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Object\n * @sig String -> a -> {k: v} -> {k: v}\n * @param {String} prop The property name to set\n * @param {*} val The new value\n * @param {Object} obj The object to clone\n * @return {Object} A new object equivalent to the original except for the changed property.\n * @see R.dissoc\n * @example\n *\n *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}\n */\n\nvar assoc =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function assoc(prop, val, obj) {\n  var result = {};\n\n  for (var p in obj) {\n    result[p] = obj[p];\n  }\n\n  result[prop] = val;\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (assoc);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/assoc.js?");

/***/ }),

/***/ "./node_modules/ramda/es/assocPath.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/assocPath.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isArray */ \"./node_modules/ramda/es/internal/_isArray.js\");\n/* harmony import */ var _internal_isInteger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_isInteger */ \"./node_modules/ramda/es/internal/_isInteger.js\");\n/* harmony import */ var _assoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assoc */ \"./node_modules/ramda/es/assoc.js\");\n/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isNil */ \"./node_modules/ramda/es/isNil.js\");\n\n\n\n\n\n\n/**\n * Makes a shallow clone of an object, setting or overriding the nodes required\n * to create the given path, and placing the specific value at the tail end of\n * that path. Note that this copies and flattens prototype properties onto the\n * new object as well. All non-primitive properties are copied by reference.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Object\n * @typedefn Idx = String | Int\n * @sig [Idx] -> a -> {a} -> {a}\n * @param {Array} path the path to set\n * @param {*} val The new value\n * @param {Object} obj The object to clone\n * @return {Object} A new object equivalent to the original except along the specified path.\n * @see R.dissocPath\n * @example\n *\n *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}\n *\n *      // Any missing or non-object keys in path will be overridden\n *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}\n */\n\nvar assocPath =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function assocPath(path, val, obj) {\n  if (path.length === 0) {\n    return val;\n  }\n\n  var idx = path[0];\n\n  if (path.length > 1) {\n    var nextObj = !Object(_isNil__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(obj) && Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(idx, obj) ? obj[idx] : Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(path[1]) ? [] : {};\n    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);\n  }\n\n  if (Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(idx) && Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj)) {\n    var arr = [].concat(obj);\n    arr[idx] = val;\n    return arr;\n  } else {\n    return Object(_assoc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(idx, val, obj);\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (assocPath);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/assocPath.js?");

/***/ }),

/***/ "./node_modules/ramda/es/binary.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/binary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _nAry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nAry */ \"./node_modules/ramda/es/nAry.js\");\n\n\n/**\n * Wraps a function of any arity (including nullary) in a function that accepts\n * exactly 2 parameters. Any extraneous parameters will not be passed to the\n * supplied function.\n *\n * @func\n * @memberOf R\n * @since v0.2.0\n * @category Function\n * @sig (* -> c) -> (a, b -> c)\n * @param {Function} fn The function to wrap.\n * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of\n *         arity 2.\n * @see R.nAry, R.unary\n * @example\n *\n *      var takesThreeArgs = function(a, b, c) {\n *        return [a, b, c];\n *      };\n *      takesThreeArgs.length; //=> 3\n *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]\n *\n *      var takesTwoArgs = R.binary(takesThreeArgs);\n *      takesTwoArgs.length; //=> 2\n *      // Only 2 arguments are passed to the wrapped function\n *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]\n * @symb R.binary(f)(a, b, c) = f(a, b)\n */\n\nvar binary =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function binary(fn) {\n  return Object(_nAry__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(2, fn);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (binary);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/binary.js?");

/***/ }),

/***/ "./node_modules/ramda/es/bind.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/bind.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Creates a function that is bound to a context.\n * Note: `R.bind` does not provide the additional argument-binding capabilities of\n * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).\n *\n * @func\n * @memberOf R\n * @since v0.6.0\n * @category Function\n * @category Object\n * @sig (* -> *) -> {*} -> (* -> *)\n * @param {Function} fn The function to bind to context\n * @param {Object} thisObj The context to bind `fn` to\n * @return {Function} A function that will execute in the context of `thisObj`.\n * @see R.partial\n * @example\n *\n *      var log = R.bind(console.log, console);\n *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}\n *      // logs {a: 2}\n * @symb R.bind(f, o)(a, b) = f.call(o, a, b)\n */\n\nvar bind =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function bind(fn, thisObj) {\n  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn.length, function () {\n    return fn.apply(thisObj, arguments);\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bind);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/bind.js?");

/***/ }),

/***/ "./node_modules/ramda/es/both.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/both.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isFunction */ \"./node_modules/ramda/es/internal/_isFunction.js\");\n/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./and */ \"./node_modules/ramda/es/and.js\");\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lift */ \"./node_modules/ramda/es/lift.js\");\n\n\n\n\n/**\n * A function which calls the two provided functions and returns the `&&`\n * of the results.\n * It returns the result of the first function if it is false-y and the result\n * of the second function otherwise. Note that this is short-circuited,\n * meaning that the second function will not be invoked if the first returns a\n * false-y value.\n *\n * In addition to functions, `R.both` also accepts any fantasy-land compatible\n * applicative functor.\n *\n * @func\n * @memberOf R\n * @since v0.12.0\n * @category Logic\n * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)\n * @param {Function} f A predicate\n * @param {Function} g Another predicate\n * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.\n * @see R.and\n * @example\n *\n *      var gt10 = R.gt(R.__, 10)\n *      var lt20 = R.lt(R.__, 20)\n *      var f = R.both(gt10, lt20);\n *      f(15); //=> true\n *      f(30); //=> false\n */\n\nvar both =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function both(f, g) {\n  return Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(f) ? function _both() {\n    return f.apply(this, arguments) && g.apply(this, arguments);\n  } : Object(_lift__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_and__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(f, g);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (both);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/both.js?");

/***/ }),

/***/ "./node_modules/ramda/es/call.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/call.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ \"./node_modules/ramda/es/curry.js\");\n\n/**\n * Returns the result of calling its first argument with the remaining\n * arguments. This is occasionally useful as a converging function for\n * [`R.converge`](#converge): the first branch can produce a function while the\n * remaining branches produce values to be passed to that function as its\n * arguments.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Function\n * @sig (*... -> a),*... -> a\n * @param {Function} fn The function to apply to the remaining arguments.\n * @param {...*} args Any number of positional arguments.\n * @return {*}\n * @see R.apply\n * @example\n *\n *      R.call(R.add, 1, 2); //=> 3\n *\n *      var indentN = R.pipe(R.repeat(' '),\n *                           R.join(''),\n *                           R.replace(/^(?!$)/gm));\n *\n *      var format = R.converge(R.call, [\n *                                  R.pipe(R.prop('indent'), indentN),\n *                                  R.prop('value')\n *                              ]);\n *\n *      format({indent: 2, value: 'foo\\nbar\\nbaz\\n'}); //=> '  foo\\n  bar\\n  baz\\n'\n * @symb R.call(f, a, b) = f(a, b)\n */\n\nvar call =\n/*#__PURE__*/\nObject(_curry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function call(fn) {\n  return fn.apply(this, Array.prototype.slice.call(arguments, 1));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (call);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/call.js?");

/***/ }),

/***/ "./node_modules/ramda/es/chain.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/chain.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_makeFlat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_makeFlat */ \"./node_modules/ramda/es/internal/_makeFlat.js\");\n/* harmony import */ var _internal_xchain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xchain */ \"./node_modules/ramda/es/internal/_xchain.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n\n\n\n\n\n/**\n * `chain` maps a function over a list and concatenates the results. `chain`\n * is also known as `flatMap` in some libraries\n *\n * Dispatches to the `chain` method of the second argument, if present,\n * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category List\n * @sig Chain m => (a -> m b) -> m a -> m b\n * @param {Function} fn The function to map with\n * @param {Array} list The list to map over\n * @return {Array} The result of flat-mapping `list` with `fn`\n * @example\n *\n *      var duplicate = n => [n, n];\n *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]\n *\n *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]\n */\n\nvar chain =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['fantasy-land/chain', 'chain'], _internal_xchain__WEBPACK_IMPORTED_MODULE_3__[\"default\"], function chain(fn, monad) {\n  if (typeof monad === 'function') {\n    return function (x) {\n      return fn(monad(x))(x);\n    };\n  }\n\n  return Object(_internal_makeFlat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(false)(Object(_map__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(fn, monad));\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (chain);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/chain.js?");

/***/ }),

/***/ "./node_modules/ramda/es/clamp.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/clamp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Restricts a number to be within a range.\n *\n * Also works for other ordered types such as Strings and Dates.\n *\n * @func\n * @memberOf R\n * @since v0.20.0\n * @category Relation\n * @sig Ord a => a -> a -> a -> a\n * @param {Number} minimum The lower limit of the clamp (inclusive)\n * @param {Number} maximum The upper limit of the clamp (inclusive)\n * @param {Number} value Value to be clamped\n * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise\n * @example\n *\n *      R.clamp(1, 10, -5) // => 1\n *      R.clamp(1, 10, 15) // => 10\n *      R.clamp(1, 10, 4)  // => 4\n */\n\nvar clamp =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function clamp(min, max, value) {\n  if (min > max) {\n    throw new Error('min must not be greater than max in clamp(min, max, value)');\n  }\n\n  return value < min ? min : value > max ? max : value;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clamp);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/clamp.js?");

/***/ }),

/***/ "./node_modules/ramda/es/clone.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/clone.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_clone */ \"./node_modules/ramda/es/internal/_clone.js\");\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n\n/**\n * Creates a deep copy of the value which may contain (nested) `Array`s and\n * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are\n * assigned by reference rather than copied\n *\n * Dispatches to a `clone` method if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig {*} -> {*}\n * @param {*} value The object or array to clone\n * @return {*} A deeply cloned copy of `val`\n * @example\n *\n *      var objects = [{}, {}, {}];\n *      var objectsClone = R.clone(objects);\n *      objects === objectsClone; //=> false\n *      objects[0] === objectsClone[0]; //=> false\n */\n\nvar clone =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function clone(value) {\n  return value != null && typeof value.clone === 'function' ? value.clone() : Object(_internal_clone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value, [], [], true);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clone);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/clone.js?");

/***/ }),

/***/ "./node_modules/ramda/es/comparator.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/comparator.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Makes a comparator function out of a function that reports whether the first\n * element is less than the second.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)\n * @param {Function} pred A predicate function of arity two which will return `true` if the first argument\n * is less than the second, `false` otherwise\n * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`\n * @example\n *\n *      var byAge = R.comparator((a, b) => a.age < b.age);\n *      var people = [\n *        // ...\n *      ];\n *      var peopleByIncreasingAge = R.sort(byAge, people);\n */\n\nvar comparator =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function comparator(pred) {\n  return function (a, b) {\n    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;\n  };\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (comparator);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/comparator.js?");

/***/ }),

/***/ "./node_modules/ramda/es/complement.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/complement.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lift */ \"./node_modules/ramda/es/lift.js\");\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not */ \"./node_modules/ramda/es/not.js\");\n\n\n/**\n * Takes a function `f` and returns a function `g` such that if called with the same arguments\n * when `f` returns a \"truthy\" value, `g` returns `false` and when `f` returns a \"falsy\" value `g` returns `true`.\n *\n * `R.complement` may be applied to any functor\n *\n * @func\n * @memberOf R\n * @since v0.12.0\n * @category Logic\n * @sig (*... -> *) -> (*... -> Boolean)\n * @param {Function} f\n * @return {Function}\n * @see R.not\n * @example\n *\n *      var isNotNil = R.complement(R.isNil);\n *      isNil(null); //=> true\n *      isNotNil(null); //=> false\n *      isNil(7); //=> false\n *      isNotNil(7); //=> true\n */\n\nvar complement =\n/*#__PURE__*/\nObject(_lift__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_not__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (complement);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/complement.js?");

/***/ }),

/***/ "./node_modules/ramda/es/compose.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/compose.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return compose; });\n/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe */ \"./node_modules/ramda/es/pipe.js\");\n/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverse */ \"./node_modules/ramda/es/reverse.js\");\n\n\n/**\n * Performs right-to-left function composition. The rightmost function may have\n * any arity; the remaining functions must be unary.\n *\n * **Note:** The result of compose is not automatically curried.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)\n * @param {...Function} ...functions The functions to compose\n * @return {Function}\n * @see R.pipe\n * @example\n *\n *      var classyGreeting = (firstName, lastName) => \"The name's \" + lastName + \", \" + firstName + \" \" + lastName\n *      var yellGreeting = R.compose(R.toUpper, classyGreeting);\n *      yellGreeting('James', 'Bond'); //=> \"THE NAME'S BOND, JAMES BOND\"\n *\n *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7\n *\n * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))\n */\n\nfunction compose() {\n  if (arguments.length === 0) {\n    throw new Error('compose requires at least one argument');\n  }\n\n  return _pipe__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, Object(_reverse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arguments));\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/compose.js?");

/***/ }),

/***/ "./node_modules/ramda/es/composeK.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/composeK.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return composeK; });\n/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chain */ \"./node_modules/ramda/es/chain.js\");\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ \"./node_modules/ramda/es/compose.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n\n\n\n/**\n * Returns the right-to-left Kleisli composition of the provided functions,\n * each of which must return a value of a type supported by [`chain`](#chain).\n *\n * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category Function\n * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)\n * @param {...Function} ...functions The functions to compose\n * @return {Function}\n * @see R.pipeK\n * @example\n *\n *       //  get :: String -> Object -> Maybe *\n *       var get = R.curry((propName, obj) => Maybe(obj[propName]))\n *\n *       //  getStateCode :: Maybe String -> Maybe String\n *       var getStateCode = R.composeK(\n *         R.compose(Maybe.of, R.toUpper),\n *         get('state'),\n *         get('address'),\n *         get('user'),\n *       );\n *       getStateCode({\"user\":{\"address\":{\"state\":\"ny\"}}}); //=> Maybe.Just(\"NY\")\n *       getStateCode({}); //=> Maybe.Nothing()\n * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))\n */\n\nfunction composeK() {\n  if (arguments.length === 0) {\n    throw new Error('composeK requires at least one argument');\n  }\n\n  var init = Array.prototype.slice.call(arguments);\n  var last = init.pop();\n  return Object(_compose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_compose__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apply(this, Object(_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_chain__WEBPACK_IMPORTED_MODULE_0__[\"default\"], init)), last);\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/composeK.js?");

/***/ }),

/***/ "./node_modules/ramda/es/composeP.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/composeP.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return composeP; });\n/* harmony import */ var _pipeP__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipeP */ \"./node_modules/ramda/es/pipeP.js\");\n/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverse */ \"./node_modules/ramda/es/reverse.js\");\n\n\n/**\n * Performs right-to-left composition of one or more Promise-returning\n * functions. The rightmost function may have any arity; the remaining\n * functions must be unary.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category Function\n * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)\n * @param {...Function} functions The functions to compose\n * @return {Function}\n * @see R.pipeP\n * @example\n *\n *      var db = {\n *        users: {\n *          JOE: {\n *            name: 'Joe',\n *            followers: ['STEVE', 'SUZY']\n *          }\n *        }\n *      }\n *\n *      // We'll pretend to do a db lookup which returns a promise\n *      var lookupUser = (userId) => Promise.resolve(db.users[userId])\n *      var lookupFollowers = (user) => Promise.resolve(user.followers)\n *      lookupUser('JOE').then(lookupFollowers)\n *\n *      //  followersForUser :: String -> Promise [UserId]\n *      var followersForUser = R.composeP(lookupFollowers, lookupUser);\n *      followersForUser('JOE').then(followers => console.log('Followers:', followers))\n *      // Followers: [\"STEVE\",\"SUZY\"]\n */\n\nfunction composeP() {\n  if (arguments.length === 0) {\n    throw new Error('composeP requires at least one argument');\n  }\n\n  return _pipeP__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, Object(_reverse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arguments));\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/composeP.js?");

/***/ }),

/***/ "./node_modules/ramda/es/concat.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/concat.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isArray */ \"./node_modules/ramda/es/internal/_isArray.js\");\n/* harmony import */ var _internal_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isFunction */ \"./node_modules/ramda/es/internal/_isFunction.js\");\n/* harmony import */ var _internal_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_isString */ \"./node_modules/ramda/es/internal/_isString.js\");\n/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toString */ \"./node_modules/ramda/es/toString.js\");\n\n\n\n\n\n/**\n * Returns the result of concatenating the given lists or strings.\n *\n * Note: `R.concat` expects both arguments to be of the same type,\n * unlike the native `Array.prototype.concat` method. It will throw\n * an error if you `concat` an Array with a non-Array value.\n *\n * Dispatches to the `concat` method of the first argument, if present.\n * Can also concatenate two members of a [fantasy-land\n * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a] -> [a]\n * @sig String -> String -> String\n * @param {Array|String} firstList The first list\n * @param {Array|String} secondList The second list\n * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of\n * `secondList`.\n *\n * @example\n *\n *      R.concat('ABC', 'DEF'); // 'ABCDEF'\n *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]\n *      R.concat([], []); //=> []\n */\n\nvar concat =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function concat(a, b) {\n  if (Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a)) {\n    if (Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b)) {\n      return a.concat(b);\n    }\n\n    throw new TypeError(Object(_toString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b) + ' is not an array');\n  }\n\n  if (Object(_internal_isString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a)) {\n    if (Object(_internal_isString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(b)) {\n      return a + b;\n    }\n\n    throw new TypeError(Object(_toString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b) + ' is not a string');\n  }\n\n  if (a != null && Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a['fantasy-land/concat'])) {\n    return a['fantasy-land/concat'](b);\n  }\n\n  if (a != null && Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a.concat)) {\n    return a.concat(b);\n  }\n\n  throw new TypeError(Object(_toString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a) + ' does not have a method named \"concat\" or \"fantasy-land/concat\"');\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (concat);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/concat.js?");

/***/ }),

/***/ "./node_modules/ramda/es/cond.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/cond.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./max */ \"./node_modules/ramda/es/max.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n\n\n\n\n\n/**\n * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.\n * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments\n * to `fn` are applied to each of the predicates in turn until one returns a\n * \"truthy\" value, at which point `fn` returns the result of applying its\n * arguments to the corresponding transformer. If none of the predicates\n * matches, `fn` returns undefined.\n *\n * @func\n * @memberOf R\n * @since v0.6.0\n * @category Logic\n * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)\n * @param {Array} pairs A list of [predicate, transformer]\n * @return {Function}\n * @example\n *\n *      var fn = R.cond([\n *        [R.equals(0),   R.always('water freezes at 0°C')],\n *        [R.equals(100), R.always('water boils at 100°C')],\n *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']\n *      ]);\n *      fn(0); //=> 'water freezes at 0°C'\n *      fn(50); //=> 'nothing special happens at 50°C'\n *      fn(100); //=> 'water boils at 100°C'\n */\n\nvar cond =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function cond(pairs) {\n  var arity = Object(_reduce__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_max__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 0, Object(_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function (pair) {\n    return pair[0].length;\n  }, pairs));\n  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arity, function () {\n    var idx = 0;\n\n    while (idx < pairs.length) {\n      if (pairs[idx][0].apply(this, arguments)) {\n        return pairs[idx][1].apply(this, arguments);\n      }\n\n      idx += 1;\n    }\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cond);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/cond.js?");

/***/ }),

/***/ "./node_modules/ramda/es/construct.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/construct.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _constructN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructN */ \"./node_modules/ramda/es/constructN.js\");\n\n\n/**\n * Wraps a constructor function inside a curried function that can be called\n * with the same arguments and returns the same type.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (* -> {*}) -> (* -> {*})\n * @param {Function} fn The constructor function to wrap.\n * @return {Function} A wrapped, curried constructor function.\n * @see R.invoker\n * @example\n *\n *      // Constructor function\n *      function Animal(kind) {\n *        this.kind = kind;\n *      };\n *      Animal.prototype.sighting = function() {\n *        return \"It's a \" + this.kind + \"!\";\n *      }\n *\n *      var AnimalConstructor = R.construct(Animal)\n *\n *      // Notice we no longer need the 'new' keyword:\n *      AnimalConstructor('Pig'); //=> {\"kind\": \"Pig\", \"sighting\": function (){...}};\n *\n *      var animalTypes = [\"Lion\", \"Tiger\", \"Bear\"];\n *      var animalSighting = R.invoker(0, 'sighting');\n *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);\n *      R.map(sightNewAnimal, animalTypes); //=> [\"It's a Lion!\", \"It's a Tiger!\", \"It's a Bear!\"]\n */\n\nvar construct =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function construct(Fn) {\n  return Object(_constructN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Fn.length, Fn);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (construct);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/construct.js?");

/***/ }),

/***/ "./node_modules/ramda/es/constructN.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/constructN.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curry */ \"./node_modules/ramda/es/curry.js\");\n/* harmony import */ var _nAry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nAry */ \"./node_modules/ramda/es/nAry.js\");\n\n\n\n/**\n * Wraps a constructor function inside a curried function that can be called\n * with the same arguments and returns the same type. The arity of the function\n * returned is specified to allow using variadic constructor functions.\n *\n * @func\n * @memberOf R\n * @since v0.4.0\n * @category Function\n * @sig Number -> (* -> {*}) -> (* -> {*})\n * @param {Number} n The arity of the constructor function.\n * @param {Function} Fn The constructor function to wrap.\n * @return {Function} A wrapped, curried constructor function.\n * @example\n *\n *      // Variadic Constructor function\n *      function Salad() {\n *        this.ingredients = arguments;\n *      }\n *\n *      Salad.prototype.recipe = function() {\n *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);\n *        return R.join('\\n', instructions);\n *      };\n *\n *      var ThreeLayerSalad = R.constructN(3, Salad);\n *\n *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.\n *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');\n *\n *      console.log(salad.recipe());\n *      // Add a dollop of Mayonnaise\n *      // Add a dollop of Potato Chips\n *      // Add a dollop of Ketchup\n */\n\nvar constructN =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function constructN(n, Fn) {\n  if (n > 10) {\n    throw new Error('Constructor with greater than ten arguments');\n  }\n\n  if (n === 0) {\n    return function () {\n      return new Fn();\n    };\n  }\n\n  return Object(_curry__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_nAry__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {\n    switch (arguments.length) {\n      case 1:\n        return new Fn($0);\n\n      case 2:\n        return new Fn($0, $1);\n\n      case 3:\n        return new Fn($0, $1, $2);\n\n      case 4:\n        return new Fn($0, $1, $2, $3);\n\n      case 5:\n        return new Fn($0, $1, $2, $3, $4);\n\n      case 6:\n        return new Fn($0, $1, $2, $3, $4, $5);\n\n      case 7:\n        return new Fn($0, $1, $2, $3, $4, $5, $6);\n\n      case 8:\n        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);\n\n      case 9:\n        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);\n\n      case 10:\n        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);\n    }\n  }));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (constructN);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/constructN.js?");

/***/ }),

/***/ "./node_modules/ramda/es/contains.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/contains.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_contains */ \"./node_modules/ramda/es/internal/_contains.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Returns `true` if the specified value is equal, in [`R.equals`](#equals)\n * terms, to at least one element of the given list; `false` otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig a -> [a] -> Boolean\n * @param {Object} a The item to compare against.\n * @param {Array} list The array to consider.\n * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.\n * @see R.any\n * @example\n *\n *      R.contains(3, [1, 2, 3]); //=> true\n *      R.contains(4, [1, 2, 3]); //=> false\n *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true\n *      R.contains([42], [[42]]); //=> true\n */\n\nvar contains =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contains);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/contains.js?");

/***/ }),

/***/ "./node_modules/ramda/es/converge.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/converge.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_map */ \"./node_modules/ramda/es/internal/_map.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./max */ \"./node_modules/ramda/es/max.js\");\n/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pluck */ \"./node_modules/ramda/es/pluck.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n\n\n\n\n\n\n/**\n * Accepts a converging function and a list of branching functions and returns\n * a new function. When invoked, this new function is applied to some\n * arguments, each branching function is applied to those same arguments. The\n * results of each branching function are passed as arguments to the converging\n * function to produce the return value.\n *\n * @func\n * @memberOf R\n * @since v0.4.2\n * @category Function\n * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)\n * @param {Function} after A function. `after` will be invoked with the return values of\n *        `fn1` and `fn2` as its arguments.\n * @param {Array} functions A list of functions.\n * @return {Function} A new function.\n * @see R.useWith\n * @example\n *\n *      var average = R.converge(R.divide, [R.sum, R.length])\n *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4\n *\n *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])\n *      strangeConcat(\"Yodel\") //=> \"YODELyodel\"\n *\n * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))\n */\n\nvar converge =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function converge(after, fns) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_reduce__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_max__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 0, Object(_pluck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('length', fns)), function () {\n    var args = arguments;\n    var context = this;\n    return after.apply(context, Object(_internal_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (fn) {\n      return fn.apply(context, args);\n    }, fns));\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (converge);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/converge.js?");

/***/ }),

/***/ "./node_modules/ramda/es/countBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/countBy.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduceBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduceBy */ \"./node_modules/ramda/es/reduceBy.js\");\n\n/**\n * Counts the elements of a list according to how many match each value of a\n * key generated by the supplied function. Returns an object mapping the keys\n * produced by `fn` to the number of occurrences in the list. Note that all\n * keys are coerced to strings because of how JavaScript objects work.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig (a -> String) -> [a] -> {*}\n * @param {Function} fn The function used to map values to keys.\n * @param {Array} list The list to count elements from.\n * @return {Object} An object mapping keys to number of occurrences in the list.\n * @example\n *\n *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];\n *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}\n *\n *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];\n *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}\n */\n\nvar countBy =\n/*#__PURE__*/\nObject(_reduceBy__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (acc, elem) {\n  return acc + 1;\n}, 0);\n/* harmony default export */ __webpack_exports__[\"default\"] = (countBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/countBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/curry.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/curry.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n\n\n/**\n * Returns a curried equivalent of the provided function. The curried function\n * has two unusual capabilities. First, its arguments needn't be provided one\n * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the\n * following are equivalent:\n *\n *   - `g(1)(2)(3)`\n *   - `g(1)(2, 3)`\n *   - `g(1, 2)(3)`\n *   - `g(1, 2, 3)`\n *\n * Secondly, the special placeholder value [`R.__`](#__) may be used to specify\n * \"gaps\", allowing partial application of any combination of arguments,\n * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),\n * the following are equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (* -> a) -> (* -> a)\n * @param {Function} fn The function to curry.\n * @return {Function} A new, curried function.\n * @see R.curryN\n * @example\n *\n *      var addFourNumbers = (a, b, c, d) => a + b + c + d;\n *\n *      var curriedAddFourNumbers = R.curry(addFourNumbers);\n *      var f = curriedAddFourNumbers(1, 2);\n *      var g = f(3);\n *      g(4); //=> 10\n */\n\nvar curry =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function curry(fn) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn.length, fn);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (curry);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/curry.js?");

/***/ }),

/***/ "./node_modules/ramda/es/curryN.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/curryN.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_curryN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_curryN */ \"./node_modules/ramda/es/internal/_curryN.js\");\n\n\n\n\n/**\n * Returns a curried equivalent of the provided function, with the specified\n * arity. The curried function has two unusual capabilities. First, its\n * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the\n * following are equivalent:\n *\n *   - `g(1)(2)(3)`\n *   - `g(1)(2, 3)`\n *   - `g(1, 2)(3)`\n *   - `g(1, 2, 3)`\n *\n * Secondly, the special placeholder value [`R.__`](#__) may be used to specify\n * \"gaps\", allowing partial application of any combination of arguments,\n * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),\n * the following are equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @func\n * @memberOf R\n * @since v0.5.0\n * @category Function\n * @sig Number -> (* -> a) -> (* -> a)\n * @param {Number} length The arity for the returned function.\n * @param {Function} fn The function to curry.\n * @return {Function} A new, curried function.\n * @see R.curry\n * @example\n *\n *      var sumArgs = (...args) => R.sum(args);\n *\n *      var curriedAddFourNumbers = R.curryN(4, sumArgs);\n *      var f = curriedAddFourNumbers(1, 2);\n *      var g = f(3);\n *      g(4); //=> 10\n */\n\nvar curryN =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function curryN(length, fn) {\n  if (length === 1) {\n    return Object(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn);\n  }\n\n  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length, Object(_internal_curryN__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(length, [], fn));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (curryN);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/curryN.js?");

/***/ }),

/***/ "./node_modules/ramda/es/dec.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/dec.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./node_modules/ramda/es/add.js\");\n\n/**\n * Decrements its argument.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Math\n * @sig Number -> Number\n * @param {Number} n\n * @return {Number} n - 1\n * @see R.inc\n * @example\n *\n *      R.dec(42); //=> 41\n */\n\nvar dec =\n/*#__PURE__*/\nObject(_add__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(-1);\n/* harmony default export */ __webpack_exports__[\"default\"] = (dec);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/dec.js?");

/***/ }),

/***/ "./node_modules/ramda/es/defaultTo.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/defaultTo.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns the second argument if it is not `null`, `undefined` or `NaN`;\n * otherwise the first argument is returned.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category Logic\n * @sig a -> b -> a | b\n * @param {a} default The default value.\n * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.\n * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value\n * @example\n *\n *      var defaultTo42 = R.defaultTo(42);\n *\n *      defaultTo42(null);  //=> 42\n *      defaultTo42(undefined);  //=> 42\n *      defaultTo42('Ramda');  //=> 'Ramda'\n *      // parseInt('string') results in NaN\n *      defaultTo42(parseInt('string')); //=> 42\n */\n\nvar defaultTo =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function defaultTo(d, v) {\n  return v == null || v !== v ? d : v;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultTo);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/defaultTo.js?");

/***/ }),

/***/ "./node_modules/ramda/es/descend.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/descend.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Makes a descending comparator function out of a function that returns a value\n * that can be compared with `<` and `>`.\n *\n * @func\n * @memberOf R\n * @since v0.23.0\n * @category Function\n * @sig Ord b => (a -> b) -> a -> a -> Number\n * @param {Function} fn A function of arity one that returns a value that can be compared\n * @param {*} a The first item to be compared.\n * @param {*} b The second item to be compared.\n * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`\n * @see R.ascend\n * @example\n *\n *      var byAge = R.descend(R.prop('age'));\n *      var people = [\n *        // ...\n *      ];\n *      var peopleByOldestFirst = R.sort(byAge, people);\n */\n\nvar descend =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function descend(fn, a, b) {\n  var aa = fn(a);\n  var bb = fn(b);\n  return aa > bb ? -1 : aa < bb ? 1 : 0;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (descend);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/descend.js?");

/***/ }),

/***/ "./node_modules/ramda/es/difference.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/difference.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_contains */ \"./node_modules/ramda/es/internal/_contains.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Finds the set (i.e. no duplicates) of all elements in the first list not\n * contained in the second list. Objects and Arrays are compared in terms of\n * value equality, not reference equality.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig [*] -> [*] -> [*]\n * @param {Array} list1 The first list.\n * @param {Array} list2 The second list.\n * @return {Array} The elements in `list1` that are not in `list2`.\n * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without\n * @example\n *\n *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]\n *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]\n *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]\n */\n\nvar difference =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function difference(first, second) {\n  var out = [];\n  var idx = 0;\n  var firstLen = first.length;\n\n  while (idx < firstLen) {\n    if (!Object(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(first[idx], second) && !Object(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(first[idx], out)) {\n      out[out.length] = first[idx];\n    }\n\n    idx += 1;\n  }\n\n  return out;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (difference);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/difference.js?");

/***/ }),

/***/ "./node_modules/ramda/es/differenceWith.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/differenceWith.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_containsWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_containsWith */ \"./node_modules/ramda/es/internal/_containsWith.js\");\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n\n/**\n * Finds the set (i.e. no duplicates) of all elements in the first list not\n * contained in the second list. Duplication is determined according to the\n * value returned by applying the supplied predicate to two list elements.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]\n * @param {Function} pred A predicate used to test whether two items are equal.\n * @param {Array} list1 The first list.\n * @param {Array} list2 The second list.\n * @return {Array} The elements in `list1` that are not in `list2`.\n * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith\n * @example\n *\n *      var cmp = (x, y) => x.a === y.a;\n *      var l1 = [{a: 1}, {a: 2}, {a: 3}];\n *      var l2 = [{a: 3}, {a: 4}];\n *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]\n */\n\nvar differenceWith =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function differenceWith(pred, first, second) {\n  var out = [];\n  var idx = 0;\n  var firstLen = first.length;\n\n  while (idx < firstLen) {\n    if (!Object(_internal_containsWith__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pred, first[idx], second) && !Object(_internal_containsWith__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pred, first[idx], out)) {\n      out.push(first[idx]);\n    }\n\n    idx += 1;\n  }\n\n  return out;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (differenceWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/differenceWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/dissoc.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/dissoc.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns a new object that does not contain a `prop` property.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category Object\n * @sig String -> {k: v} -> {k: v}\n * @param {String} prop The name of the property to dissociate\n * @param {Object} obj The object to clone\n * @return {Object} A new object equivalent to the original but without the specified property\n * @see R.assoc\n * @example\n *\n *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}\n */\n\nvar dissoc =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function dissoc(prop, obj) {\n  var result = {};\n\n  for (var p in obj) {\n    result[p] = obj[p];\n  }\n\n  delete result[prop];\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dissoc);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/dissoc.js?");

/***/ }),

/***/ "./node_modules/ramda/es/dissocPath.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/dissocPath.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isInteger */ \"./node_modules/ramda/es/internal/_isInteger.js\");\n/* harmony import */ var _assoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assoc */ \"./node_modules/ramda/es/assoc.js\");\n/* harmony import */ var _dissoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dissoc */ \"./node_modules/ramda/es/dissoc.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove */ \"./node_modules/ramda/es/remove.js\");\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update */ \"./node_modules/ramda/es/update.js\");\n\n\n\n\n\n\n/**\n * Makes a shallow clone of an object, omitting the property at the given path.\n * Note that this copies and flattens prototype properties onto the new object\n * as well. All non-primitive properties are copied by reference.\n *\n * @func\n * @memberOf R\n * @since v0.11.0\n * @category Object\n * @typedefn Idx = String | Int\n * @sig [Idx] -> {k: v} -> {k: v}\n * @param {Array} path The path to the value to omit\n * @param {Object} obj The object to clone\n * @return {Object} A new object without the property at path\n * @see R.assocPath\n * @example\n *\n *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}\n */\n\nvar dissocPath =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function dissocPath(path, obj) {\n  switch (path.length) {\n    case 0:\n      return obj;\n\n    case 1:\n      return Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(path[0]) ? Object(_remove__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(path[0], 1, obj) : Object(_dissoc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(path[0], obj);\n\n    default:\n      var head = path[0];\n      var tail = Array.prototype.slice.call(path, 1);\n\n      if (obj[head] == null) {\n        return obj;\n      } else if (Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(path[0])) {\n        return Object(_update__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(head, dissocPath(tail, obj[head]), obj);\n      } else {\n        return Object(_assoc__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(head, dissocPath(tail, obj[head]), obj);\n      }\n\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dissocPath);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/dissocPath.js?");

/***/ }),

/***/ "./node_modules/ramda/es/divide.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/divide.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Divides two numbers. Equivalent to `a / b`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Math\n * @sig Number -> Number -> Number\n * @param {Number} a The first value.\n * @param {Number} b The second value.\n * @return {Number} The result of `a / b`.\n * @see R.multiply\n * @example\n *\n *      R.divide(71, 100); //=> 0.71\n *\n *      var half = R.divide(R.__, 2);\n *      half(42); //=> 21\n *\n *      var reciprocal = R.divide(1);\n *      reciprocal(4);   //=> 0.25\n */\n\nvar divide =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function divide(a, b) {\n  return a / b;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (divide);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/divide.js?");

/***/ }),

/***/ "./node_modules/ramda/es/drop.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/drop.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xdrop */ \"./node_modules/ramda/es/internal/_xdrop.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n\n\n\n\n/**\n * Returns all but the first `n` elements of the given list, string, or\n * transducer/transformer (or object with a `drop` method).\n *\n * Dispatches to the `drop` method of the second argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Number -> [a] -> [a]\n * @sig Number -> String -> String\n * @param {Number} n\n * @param {*} list\n * @return {*} A copy of list without the first `n` elements\n * @see R.take, R.transduce, R.dropLast, R.dropWhile\n * @example\n *\n *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']\n *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']\n *      R.drop(3, ['foo', 'bar', 'baz']); //=> []\n *      R.drop(4, ['foo', 'bar', 'baz']); //=> []\n *      R.drop(3, 'ramda');               //=> 'da'\n */\n\nvar drop =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['drop'], _internal_xdrop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function drop(n, xs) {\n  return Object(_slice__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Math.max(0, n), Infinity, xs);\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drop);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/drop.js?");

/***/ }),

/***/ "./node_modules/ramda/es/dropLast.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/dropLast.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_dropLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_dropLast */ \"./node_modules/ramda/es/internal/_dropLast.js\");\n/* harmony import */ var _internal_xdropLast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xdropLast */ \"./node_modules/ramda/es/internal/_xdropLast.js\");\n\n\n\n\n/**\n * Returns a list containing all but the last `n` elements of the given `list`.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category List\n * @sig Number -> [a] -> [a]\n * @sig Number -> String -> String\n * @param {Number} n The number of elements of `list` to skip.\n * @param {Array} list The list of elements to consider.\n * @return {Array} A copy of the list with only the first `list.length - n` elements\n * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile\n * @example\n *\n *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']\n *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']\n *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []\n *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []\n *      R.dropLast(3, 'ramda');               //=> 'ra'\n */\n\nvar dropLast =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([], _internal_xdropLast__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _internal_dropLast__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropLast);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/dropLast.js?");

/***/ }),

/***/ "./node_modules/ramda/es/dropLastWhile.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/dropLastWhile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_dropLastWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_dropLastWhile */ \"./node_modules/ramda/es/internal/_dropLastWhile.js\");\n/* harmony import */ var _internal_xdropLastWhile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xdropLastWhile */ \"./node_modules/ramda/es/internal/_xdropLastWhile.js\");\n\n\n\n\n/**\n * Returns a new list excluding all the tailing elements of a given list which\n * satisfy the supplied predicate function. It passes each value from the right\n * to the supplied predicate function, skipping elements until the predicate\n * function returns a `falsy` value. The predicate function is applied to one argument:\n * *(value)*.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category List\n * @sig (a -> Boolean) -> [a] -> [a]\n * @sig (a -> Boolean) -> String -> String\n * @param {Function} predicate The function to be called on each element\n * @param {Array} xs The collection to iterate over.\n * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.\n * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile\n * @example\n *\n *      var lteThree = x => x <= 3;\n *\n *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]\n *\n *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'\n */\n\nvar dropLastWhile =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([], _internal_xdropLastWhile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _internal_dropLastWhile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropLastWhile);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/dropLastWhile.js?");

/***/ }),

/***/ "./node_modules/ramda/es/dropRepeats.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/dropRepeats.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xdropRepeatsWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xdropRepeatsWith */ \"./node_modules/ramda/es/internal/_xdropRepeatsWith.js\");\n/* harmony import */ var _dropRepeatsWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropRepeatsWith */ \"./node_modules/ramda/es/dropRepeatsWith.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n\n\n\n\n\n/**\n * Returns a new list without any consecutively repeating elements.\n * [`R.equals`](#equals) is used to determine equality.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category List\n * @sig [a] -> [a]\n * @param {Array} list The array to consider.\n * @return {Array} `list` without repeating elements.\n * @see R.transduce\n * @example\n *\n *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]\n */\n\nvar dropRepeats =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([],\n/*#__PURE__*/\nObject(_internal_xdropRepeatsWith__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_equals__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/*#__PURE__*/\nObject(_dropRepeatsWith__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_equals__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropRepeats);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/dropRepeats.js?");

/***/ }),

/***/ "./node_modules/ramda/es/dropRepeatsWith.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/dropRepeatsWith.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xdropRepeatsWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xdropRepeatsWith */ \"./node_modules/ramda/es/internal/_xdropRepeatsWith.js\");\n/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./last */ \"./node_modules/ramda/es/last.js\");\n\n\n\n\n/**\n * Returns a new list without any consecutively repeating elements. Equality is\n * determined by applying the supplied predicate to each pair of consecutive elements. The\n * first element in a series of equal elements will be preserved.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category List\n * @sig ((a, a) -> Boolean) -> [a] -> [a]\n * @param {Function} pred A predicate used to test whether two items are equal.\n * @param {Array} list The array to consider.\n * @return {Array} `list` without repeating elements.\n * @see R.transduce\n * @example\n *\n *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];\n *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]\n */\n\nvar dropRepeatsWith =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([], _internal_xdropRepeatsWith__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function dropRepeatsWith(pred, list) {\n  var result = [];\n  var idx = 1;\n  var len = list.length;\n\n  if (len !== 0) {\n    result[0] = list[0];\n\n    while (idx < len) {\n      if (!pred(Object(_last__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(result), list[idx])) {\n        result[result.length] = list[idx];\n      }\n\n      idx += 1;\n    }\n  }\n\n  return result;\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropRepeatsWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/dropRepeatsWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/dropWhile.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/dropWhile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xdropWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xdropWhile */ \"./node_modules/ramda/es/internal/_xdropWhile.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n\n\n\n\n/**\n * Returns a new list excluding the leading elements of a given list which\n * satisfy the supplied predicate function. It passes each value to the supplied\n * predicate function, skipping elements while the predicate function returns\n * `true`. The predicate function is applied to one argument: *(value)*.\n *\n * Dispatches to the `dropWhile` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category List\n * @sig (a -> Boolean) -> [a] -> [a]\n * @sig (a -> Boolean) -> String -> String\n * @param {Function} fn The function called per iteration.\n * @param {Array} xs The collection to iterate over.\n * @return {Array} A new array.\n * @see R.takeWhile, R.transduce, R.addIndex\n * @example\n *\n *      var lteTwo = x => x <= 2;\n *\n *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]\n *\n *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'\n */\n\nvar dropWhile =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['dropWhile'], _internal_xdropWhile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function dropWhile(pred, xs) {\n  var idx = 0;\n  var len = xs.length;\n\n  while (idx < len && pred(xs[idx])) {\n    idx += 1;\n  }\n\n  return Object(_slice__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(idx, Infinity, xs);\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropWhile);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/dropWhile.js?");

/***/ }),

/***/ "./node_modules/ramda/es/either.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/either.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isFunction */ \"./node_modules/ramda/es/internal/_isFunction.js\");\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lift */ \"./node_modules/ramda/es/lift.js\");\n/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./or */ \"./node_modules/ramda/es/or.js\");\n\n\n\n\n/**\n * A function wrapping calls to the two functions in an `||` operation,\n * returning the result of the first function if it is truth-y and the result\n * of the second function otherwise. Note that this is short-circuited,\n * meaning that the second function will not be invoked if the first returns a\n * truth-y value.\n *\n * In addition to functions, `R.either` also accepts any fantasy-land compatible\n * applicative functor.\n *\n * @func\n * @memberOf R\n * @since v0.12.0\n * @category Logic\n * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)\n * @param {Function} f a predicate\n * @param {Function} g another predicate\n * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.\n * @see R.or\n * @example\n *\n *      var gt10 = x => x > 10;\n *      var even = x => x % 2 === 0;\n *      var f = R.either(gt10, even);\n *      f(101); //=> true\n *      f(8); //=> true\n */\n\nvar either =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function either(f, g) {\n  return Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(f) ? function _either() {\n    return f.apply(this, arguments) || g.apply(this, arguments);\n  } : Object(_lift__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_or__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(f, g);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (either);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/either.js?");

/***/ }),

/***/ "./node_modules/ramda/es/empty.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/empty.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_isArguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isArguments */ \"./node_modules/ramda/es/internal/_isArguments.js\");\n/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isArray */ \"./node_modules/ramda/es/internal/_isArray.js\");\n/* harmony import */ var _internal_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_isObject */ \"./node_modules/ramda/es/internal/_isObject.js\");\n/* harmony import */ var _internal_isString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_isString */ \"./node_modules/ramda/es/internal/_isString.js\");\n\n\n\n\n\n/**\n * Returns the empty value of its argument's type. Ramda defines the empty\n * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other\n * types are supported if they define `<Type>.empty`,\n * `<Type>.prototype.empty` or implement the\n * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).\n *\n * Dispatches to the `empty` method of the first argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category Function\n * @sig a -> a\n * @param {*} x\n * @return {*}\n * @example\n *\n *      R.empty(Just(42));      //=> Nothing()\n *      R.empty([1, 2, 3]);     //=> []\n *      R.empty('unicorns');    //=> ''\n *      R.empty({x: 1, y: 2});  //=> {}\n */\n\nvar empty =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function empty(x) {\n  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x) ? [] : Object(_internal_isString__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(x) ? '' : Object(_internal_isObject__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(x) ? {} : Object(_internal_isArguments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x) ? function () {\n    return arguments;\n  }() : // else\n  void 0;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (empty);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/empty.js?");

/***/ }),

/***/ "./node_modules/ramda/es/endsWith.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/endsWith.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takeLast */ \"./node_modules/ramda/es/takeLast.js\");\n\n\n\n/**\n * Checks if a list ends with the provided values\n *\n * @func\n * @memberOf R\n * @since v0.24.0\n * @category List\n * @sig [a] -> Boolean\n * @sig String -> Boolean\n * @param {*} suffix\n * @param {*} list\n * @return {Boolean}\n * @example\n *\n *      R.endsWith('c', 'abc')                //=> true\n *      R.endsWith('b', 'abc')                //=> false\n *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true\n *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false\n */\n\nvar endsWith =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (suffix, list) {\n  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_takeLast__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(suffix.length, list), suffix);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (endsWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/endsWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/eqBy.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/eqBy.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n\n\n/**\n * Takes a function and two values in its domain and returns `true` if the\n * values map to the same value in the codomain; `false` otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.18.0\n * @category Relation\n * @sig (a -> b) -> a -> a -> Boolean\n * @param {Function} f\n * @param {*} x\n * @param {*} y\n * @return {Boolean}\n * @example\n *\n *      R.eqBy(Math.abs, 5, -5); //=> true\n */\n\nvar eqBy =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function eqBy(f, x, y) {\n  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(f(x), f(y));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eqBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/eqBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/eqProps.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/eqProps.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n\n\n/**\n * Reports whether two objects have the same value, in [`R.equals`](#equals)\n * terms, for the specified property. Useful as a curried predicate.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig k -> {k: v} -> {k: v} -> Boolean\n * @param {String} prop The name of the property to compare\n * @param {Object} obj1\n * @param {Object} obj2\n * @return {Boolean}\n *\n * @example\n *\n *      var o1 = { a: 1, b: 2, c: 3, d: 4 };\n *      var o2 = { a: 10, b: 20, c: 3, d: 40 };\n *      R.eqProps('a', o1, o2); //=> false\n *      R.eqProps('c', o1, o2); //=> true\n */\n\nvar eqProps =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function eqProps(prop, obj1, obj2) {\n  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj1[prop], obj2[prop]);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eqProps);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/eqProps.js?");

/***/ }),

/***/ "./node_modules/ramda/es/equals.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/equals.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_equals */ \"./node_modules/ramda/es/internal/_equals.js\");\n\n\n/**\n * Returns `true` if its arguments are equivalent, `false` otherwise. Handles\n * cyclical data structures.\n *\n * Dispatches symmetrically to the `equals` methods of both arguments, if\n * present.\n *\n * @func\n * @memberOf R\n * @since v0.15.0\n * @category Relation\n * @sig a -> b -> Boolean\n * @param {*} a\n * @param {*} b\n * @return {Boolean}\n * @example\n *\n *      R.equals(1, 1); //=> true\n *      R.equals(1, '1'); //=> false\n *      R.equals([1, 2, 3], [1, 2, 3]); //=> true\n *\n *      var a = {}; a.v = a;\n *      var b = {}; b.v = b;\n *      R.equals(a, b); //=> true\n */\n\nvar equals =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function equals(a, b) {\n  return Object(_internal_equals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a, b, [], []);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (equals);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/equals.js?");

/***/ }),

/***/ "./node_modules/ramda/es/evolve.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/evolve.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Creates a new object by recursively evolving a shallow copy of `object`,\n * according to the `transformation` functions. All non-primitive properties\n * are copied by reference.\n *\n * A `transformation` function will not be invoked if its corresponding key\n * does not exist in the evolved object.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Object\n * @sig {k: (v -> v)} -> {k: v} -> {k: v}\n * @param {Object} transformations The object specifying transformation functions to apply\n *        to the object.\n * @param {Object} object The object to be transformed.\n * @return {Object} The transformed object.\n * @example\n *\n *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};\n *      var transformations = {\n *        firstName: R.trim,\n *        lastName: R.trim, // Will not get invoked.\n *        data: {elapsed: R.add(1), remaining: R.add(-1)}\n *      };\n *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}\n */\n\nvar evolve =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function evolve(transformations, object) {\n  var result = {};\n  var transformation, key, type;\n\n  for (key in object) {\n    transformation = transformations[key];\n    type = typeof transformation;\n    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (evolve);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/evolve.js?");

/***/ }),

/***/ "./node_modules/ramda/es/filter.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/filter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_filter */ \"./node_modules/ramda/es/internal/_filter.js\");\n/* harmony import */ var _internal_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_isObject */ \"./node_modules/ramda/es/internal/_isObject.js\");\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _internal_xfilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/_xfilter */ \"./node_modules/ramda/es/internal/_xfilter.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keys */ \"./node_modules/ramda/es/keys.js\");\n\n\n\n\n\n\n\n/**\n * Takes a predicate and a `Filterable`, and returns a new filterable of the\n * same type containing the members of the given filterable which satisfy the\n * given predicate. Filterable objects include plain objects or any object\n * that has a filter method such as `Array`.\n *\n * Dispatches to the `filter` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Filterable f => (a -> Boolean) -> f a -> f a\n * @param {Function} pred\n * @param {Array} filterable\n * @return {Array} Filterable\n * @see R.reject, R.transduce, R.addIndex\n * @example\n *\n *      var isEven = n => n % 2 === 0;\n *\n *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]\n *\n *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}\n */\n\nvar filter =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['filter'], _internal_xfilter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], function (pred, filterable) {\n  return Object(_internal_isObject__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(filterable) ? Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function (acc, key) {\n    if (pred(filterable[key])) {\n      acc[key] = filterable[key];\n    }\n\n    return acc;\n  }, {}, Object(_keys__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(filterable)) : // else\n  Object(_internal_filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pred, filterable);\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (filter);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/filter.js?");

/***/ }),

/***/ "./node_modules/ramda/es/find.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/find.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xfind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xfind */ \"./node_modules/ramda/es/internal/_xfind.js\");\n\n\n\n/**\n * Returns the first element of the list which matches the predicate, or\n * `undefined` if no element matches.\n *\n * Dispatches to the `find` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig (a -> Boolean) -> [a] -> a | undefined\n * @param {Function} fn The predicate function used to determine if the element is the\n *        desired one.\n * @param {Array} list The array to consider.\n * @return {Object} The element found, or `undefined`.\n * @see R.transduce\n * @example\n *\n *      var xs = [{a: 1}, {a: 2}, {a: 3}];\n *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}\n *      R.find(R.propEq('a', 4))(xs); //=> undefined\n */\n\nvar find =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['find'], _internal_xfind__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function find(fn, list) {\n  var idx = 0;\n  var len = list.length;\n\n  while (idx < len) {\n    if (fn(list[idx])) {\n      return list[idx];\n    }\n\n    idx += 1;\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (find);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/find.js?");

/***/ }),

/***/ "./node_modules/ramda/es/findIndex.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/findIndex.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xfindIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xfindIndex */ \"./node_modules/ramda/es/internal/_xfindIndex.js\");\n\n\n\n/**\n * Returns the index of the first element of the list which matches the\n * predicate, or `-1` if no element matches.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.1\n * @category List\n * @sig (a -> Boolean) -> [a] -> Number\n * @param {Function} fn The predicate function used to determine if the element is the\n * desired one.\n * @param {Array} list The array to consider.\n * @return {Number} The index of the element found, or `-1`.\n * @see R.transduce\n * @example\n *\n *      var xs = [{a: 1}, {a: 2}, {a: 3}];\n *      R.findIndex(R.propEq('a', 2))(xs); //=> 1\n *      R.findIndex(R.propEq('a', 4))(xs); //=> -1\n */\n\nvar findIndex =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([], _internal_xfindIndex__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function findIndex(fn, list) {\n  var idx = 0;\n  var len = list.length;\n\n  while (idx < len) {\n    if (fn(list[idx])) {\n      return idx;\n    }\n\n    idx += 1;\n  }\n\n  return -1;\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (findIndex);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/findIndex.js?");

/***/ }),

/***/ "./node_modules/ramda/es/findLast.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/findLast.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xfindLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xfindLast */ \"./node_modules/ramda/es/internal/_xfindLast.js\");\n\n\n\n/**\n * Returns the last element of the list which matches the predicate, or\n * `undefined` if no element matches.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.1\n * @category List\n * @sig (a -> Boolean) -> [a] -> a | undefined\n * @param {Function} fn The predicate function used to determine if the element is the\n * desired one.\n * @param {Array} list The array to consider.\n * @return {Object} The element found, or `undefined`.\n * @see R.transduce\n * @example\n *\n *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];\n *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}\n *      R.findLast(R.propEq('a', 4))(xs); //=> undefined\n */\n\nvar findLast =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([], _internal_xfindLast__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function findLast(fn, list) {\n  var idx = list.length - 1;\n\n  while (idx >= 0) {\n    if (fn(list[idx])) {\n      return list[idx];\n    }\n\n    idx -= 1;\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (findLast);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/findLast.js?");

/***/ }),

/***/ "./node_modules/ramda/es/findLastIndex.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/findLastIndex.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xfindLastIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xfindLastIndex */ \"./node_modules/ramda/es/internal/_xfindLastIndex.js\");\n\n\n\n/**\n * Returns the index of the last element of the list which matches the\n * predicate, or `-1` if no element matches.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.1\n * @category List\n * @sig (a -> Boolean) -> [a] -> Number\n * @param {Function} fn The predicate function used to determine if the element is the\n * desired one.\n * @param {Array} list The array to consider.\n * @return {Number} The index of the element found, or `-1`.\n * @see R.transduce\n * @example\n *\n *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];\n *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1\n *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1\n */\n\nvar findLastIndex =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([], _internal_xfindLastIndex__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function findLastIndex(fn, list) {\n  var idx = list.length - 1;\n\n  while (idx >= 0) {\n    if (fn(list[idx])) {\n      return idx;\n    }\n\n    idx -= 1;\n  }\n\n  return -1;\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (findLastIndex);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/findLastIndex.js?");

/***/ }),

/***/ "./node_modules/ramda/es/flatten.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/flatten.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_makeFlat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_makeFlat */ \"./node_modules/ramda/es/internal/_makeFlat.js\");\n\n\n/**\n * Returns a new list by pulling every item out of it (and all its sub-arrays)\n * and putting them in a new array, depth-first.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [b]\n * @param {Array} list The array to consider.\n * @return {Array} The flattened list.\n * @see R.unnest\n * @example\n *\n *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);\n *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n */\n\nvar flatten =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_makeFlat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (flatten);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/flatten.js?");

/***/ }),

/***/ "./node_modules/ramda/es/flip.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/flip.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n\n\n/**\n * Returns a new function much like the supplied one, except that the first two\n * arguments' order is reversed.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)\n * @param {Function} fn The function to invoke with its first two parameters reversed.\n * @return {*} The result of invoking `fn` with its first two parameters' order reversed.\n * @example\n *\n *      var mergeThree = (a, b, c) => [].concat(a, b, c);\n *\n *      mergeThree(1, 2, 3); //=> [1, 2, 3]\n *\n *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]\n * @symb R.flip(f)(a, b, c) = f(b, a, c)\n */\n\nvar flip =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function flip(fn) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn.length, function (a, b) {\n    var args = Array.prototype.slice.call(arguments, 0);\n    args[0] = b;\n    args[1] = a;\n    return fn.apply(this, args);\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (flip);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/flip.js?");

/***/ }),

/***/ "./node_modules/ramda/es/forEach.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/forEach.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/es/internal/_checkForMethod.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Iterate over an input `list`, calling a provided function `fn` for each\n * element in the list.\n *\n * `fn` receives one argument: *(value)*.\n *\n * Note: `R.forEach` does not skip deleted or unassigned indices (sparse\n * arrays), unlike the native `Array.prototype.forEach` method. For more\n * details on this behavior, see:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description\n *\n * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns\n * the original array. In some libraries this function is named `each`.\n *\n * Dispatches to the `forEach` method of the second argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.1\n * @category List\n * @sig (a -> *) -> [a] -> [a]\n * @param {Function} fn The function to invoke. Receives one argument, `value`.\n * @param {Array} list The list to iterate over.\n * @return {Array} The original list.\n * @see R.addIndex\n * @example\n *\n *      var printXPlusFive = x => console.log(x + 5);\n *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]\n *      // logs 6\n *      // logs 7\n *      // logs 8\n * @symb R.forEach(f, [a, b, c]) = [a, b, c]\n */\n\nvar forEach =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('forEach', function forEach(fn, list) {\n  var len = list.length;\n  var idx = 0;\n\n  while (idx < len) {\n    fn(list[idx]);\n    idx += 1;\n  }\n\n  return list;\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (forEach);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/forEach.js?");

/***/ }),

/***/ "./node_modules/ramda/es/forEachObjIndexed.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/forEachObjIndexed.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./node_modules/ramda/es/keys.js\");\n\n\n/**\n * Iterate over an input `object`, calling a provided function `fn` for each\n * key and value in the object.\n *\n * `fn` receives three argument: *(value, key, obj)*.\n *\n * @func\n * @memberOf R\n * @since v0.23.0\n * @category Object\n * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a\n * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.\n * @param {Object} obj The object to iterate over.\n * @return {Object} The original object.\n * @example\n *\n *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);\n *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}\n *      // logs x:1\n *      // logs y:2\n * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}\n */\n\nvar forEachObjIndexed =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function forEachObjIndexed(fn, obj) {\n  var keyList = Object(_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\n  var idx = 0;\n\n  while (idx < keyList.length) {\n    var key = keyList[idx];\n    fn(obj[key], key, obj);\n    idx += 1;\n  }\n\n  return obj;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (forEachObjIndexed);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/forEachObjIndexed.js?");

/***/ }),

/***/ "./node_modules/ramda/es/fromPairs.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/fromPairs.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Creates a new object from a list key-value pairs. If a key appears in\n * multiple pairs, the rightmost pair is included in the object.\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category List\n * @sig [[k,v]] -> {k: v}\n * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.\n * @return {Object} The object made by pairing up `keys` and `values`.\n * @see R.toPairs, R.pair\n * @example\n *\n *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}\n */\n\nvar fromPairs =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function fromPairs(pairs) {\n  var result = {};\n  var idx = 0;\n\n  while (idx < pairs.length) {\n    result[pairs[idx][0]] = pairs[idx][1];\n    idx += 1;\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fromPairs);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/fromPairs.js?");

/***/ }),

/***/ "./node_modules/ramda/es/groupBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/groupBy.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/es/internal/_checkForMethod.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _reduceBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduceBy */ \"./node_modules/ramda/es/reduceBy.js\");\n\n\n\n/**\n * Splits a list into sub-lists stored in an object, based on the result of\n * calling a String-returning function on each element, and grouping the\n * results according to values returned.\n *\n * Dispatches to the `groupBy` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig (a -> String) -> [a] -> {String: [a]}\n * @param {Function} fn Function :: a -> String\n * @param {Array} list The array to group\n * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements\n *         that produced that key when passed to `fn`.\n * @see R.transduce\n * @example\n *\n *      var byGrade = R.groupBy(function(student) {\n *        var score = student.score;\n *        return score < 65 ? 'F' :\n *               score < 70 ? 'D' :\n *               score < 80 ? 'C' :\n *               score < 90 ? 'B' : 'A';\n *      });\n *      var students = [{name: 'Abby', score: 84},\n *                      {name: 'Eddy', score: 58},\n *                      // ...\n *                      {name: 'Jack', score: 69}];\n *      byGrade(students);\n *      // {\n *      //   'A': [{name: 'Dianne', score: 99}],\n *      //   'B': [{name: 'Abby', score: 84}]\n *      //   // ...,\n *      //   'F': [{name: 'Eddy', score: 58}]\n *      // }\n */\n\nvar groupBy =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('groupBy',\n/*#__PURE__*/\nObject(_reduceBy__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function (acc, item) {\n  if (acc == null) {\n    acc = [];\n  }\n\n  acc.push(item);\n  return acc;\n}, null)));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (groupBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/groupBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/groupWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/groupWith.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Takes a list and returns a list of lists where each sublist's elements are\n * all satisfied pairwise comparison according to the provided function.\n * Only adjacent elements are passed to the comparison function.\n *\n * @func\n * @memberOf R\n * @since v0.21.0\n * @category List\n * @sig ((a, a) → Boolean) → [a] → [[a]]\n * @param {Function} fn Function for determining whether two given (adjacent)\n *        elements should be in the same group\n * @param {Array} list The array to group. Also accepts a string, which will be\n *        treated as a list of characters.\n * @return {List} A list that contains sublists of elements,\n *         whose concatenations are equal to the original list.\n * @example\n *\n * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])\n * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]\n *\n * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])\n * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]\n *\n * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])\n * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]\n *\n * R.groupWith(R.eqBy(isVowel), 'aestiou')\n * //=> ['ae', 'st', 'iou']\n */\n\nvar groupWith =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (fn, list) {\n  var res = [];\n  var idx = 0;\n  var len = list.length;\n\n  while (idx < len) {\n    var nextidx = idx + 1;\n\n    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {\n      nextidx += 1;\n    }\n\n    res.push(list.slice(idx, nextidx));\n    idx = nextidx;\n  }\n\n  return res;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (groupWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/groupWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/gt.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/gt.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns `true` if the first argument is greater than the second; `false`\n * otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord a => a -> a -> Boolean\n * @param {*} a\n * @param {*} b\n * @return {Boolean}\n * @see R.lt\n * @example\n *\n *      R.gt(2, 1); //=> true\n *      R.gt(2, 2); //=> false\n *      R.gt(2, 3); //=> false\n *      R.gt('a', 'z'); //=> false\n *      R.gt('z', 'a'); //=> true\n */\n\nvar gt =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function gt(a, b) {\n  return a > b;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gt);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/gt.js?");

/***/ }),

/***/ "./node_modules/ramda/es/gte.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/gte.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns `true` if the first argument is greater than or equal to the second;\n * `false` otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord a => a -> a -> Boolean\n * @param {Number} a\n * @param {Number} b\n * @return {Boolean}\n * @see R.lte\n * @example\n *\n *      R.gte(2, 1); //=> true\n *      R.gte(2, 2); //=> true\n *      R.gte(2, 3); //=> false\n *      R.gte('a', 'z'); //=> false\n *      R.gte('z', 'a'); //=> true\n */\n\nvar gte =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function gte(a, b) {\n  return a >= b;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gte);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/gte.js?");

/***/ }),

/***/ "./node_modules/ramda/es/has.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/has.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n\n\n/**\n * Returns whether or not an object has an own property with the specified name\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category Object\n * @sig s -> {s: x} -> Boolean\n * @param {String} prop The name of the property to check for.\n * @param {Object} obj The object to query.\n * @return {Boolean} Whether the property exists.\n * @example\n *\n *      var hasName = R.has('name');\n *      hasName({name: 'alice'});   //=> true\n *      hasName({name: 'bob'});     //=> true\n *      hasName({});                //=> false\n *\n *      var point = {x: 0, y: 0};\n *      var pointHas = R.has(R.__, point);\n *      pointHas('x');  //=> true\n *      pointHas('y');  //=> true\n *      pointHas('z');  //=> false\n */\n\nvar has =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (has);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/has.js?");

/***/ }),

/***/ "./node_modules/ramda/es/hasIn.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/hasIn.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns whether or not an object or its prototype chain has a property with\n * the specified name\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category Object\n * @sig s -> {s: x} -> Boolean\n * @param {String} prop The name of the property to check for.\n * @param {Object} obj The object to query.\n * @return {Boolean} Whether the property exists.\n * @example\n *\n *      function Rectangle(width, height) {\n *        this.width = width;\n *        this.height = height;\n *      }\n *      Rectangle.prototype.area = function() {\n *        return this.width * this.height;\n *      };\n *\n *      var square = new Rectangle(2, 2);\n *      R.hasIn('width', square);  //=> true\n *      R.hasIn('area', square);  //=> true\n */\n\nvar hasIn =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function hasIn(prop, obj) {\n  return prop in obj;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hasIn);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/hasIn.js?");

/***/ }),

/***/ "./node_modules/ramda/es/head.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/head.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nth */ \"./node_modules/ramda/es/nth.js\");\n\n/**\n * Returns the first element of the given list or string. In some libraries\n * this function is named `first`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> a | Undefined\n * @sig String -> String\n * @param {Array|String} list\n * @return {*}\n * @see R.tail, R.init, R.last\n * @example\n *\n *      R.head(['fi', 'fo', 'fum']); //=> 'fi'\n *      R.head([]); //=> undefined\n *\n *      R.head('abc'); //=> 'a'\n *      R.head(''); //=> ''\n */\n\nvar head =\n/*#__PURE__*/\nObject(_nth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0);\n/* harmony default export */ __webpack_exports__[\"default\"] = (head);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/head.js?");

/***/ }),

/***/ "./node_modules/ramda/es/identical.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/identical.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns true if its arguments are identical, false otherwise. Values are\n * identical if they reference the same memory. `NaN` is identical to `NaN`;\n * `0` and `-0` are not identical.\n *\n * @func\n * @memberOf R\n * @since v0.15.0\n * @category Relation\n * @sig a -> a -> Boolean\n * @param {*} a\n * @param {*} b\n * @return {Boolean}\n * @example\n *\n *      var o = {};\n *      R.identical(o, o); //=> true\n *      R.identical(1, 1); //=> true\n *      R.identical(1, '1'); //=> false\n *      R.identical([], []); //=> false\n *      R.identical(0, -0); //=> false\n *      R.identical(NaN, NaN); //=> true\n */\n\nvar identical =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function identical(a, b) {\n  // SameValue algorithm\n  if (a === b) {\n    // Steps 1-5, 7-10\n    // Steps 6.b-6.e: +0 != -0\n    return a !== 0 || 1 / a === 1 / b;\n  } else {\n    // Step 6.a: NaN == NaN\n    return a !== a && b !== b;\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (identical);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/identical.js?");

/***/ }),

/***/ "./node_modules/ramda/es/identity.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/identity.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_identity */ \"./node_modules/ramda/es/internal/_identity.js\");\n\n\n/**\n * A function that does nothing but return the parameter supplied to it. Good\n * as a default or placeholder function.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig a -> a\n * @param {*} x The value to return.\n * @return {*} The input value, `x`.\n * @example\n *\n *      R.identity(1); //=> 1\n *\n *      var obj = {};\n *      R.identity(obj) === obj; //=> true\n * @symb R.identity(a) = a\n */\n\nvar identity =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_internal_identity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (identity);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/identity.js?");

/***/ }),

/***/ "./node_modules/ramda/es/ifElse.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/ifElse.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n\n\n/**\n * Creates a function that will process either the `onTrue` or the `onFalse`\n * function depending upon the result of the `condition` predicate.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Logic\n * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)\n * @param {Function} condition A predicate function\n * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.\n * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.\n * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`\n *                    function depending upon the result of the `condition` predicate.\n * @see R.unless, R.when\n * @example\n *\n *      var incCount = R.ifElse(\n *        R.has('count'),\n *        R.over(R.lensProp('count'), R.inc),\n *        R.assoc('count', 1)\n *      );\n *      incCount({});           //=> { count: 1 }\n *      incCount({ count: 1 }); //=> { count: 2 }\n */\n\nvar ifElse =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function ifElse(condition, onTrue, onFalse) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {\n    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ifElse);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/ifElse.js?");

/***/ }),

/***/ "./node_modules/ramda/es/inc.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/inc.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./node_modules/ramda/es/add.js\");\n\n/**\n * Increments its argument.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Math\n * @sig Number -> Number\n * @param {Number} n\n * @return {Number} n + 1\n * @see R.dec\n * @example\n *\n *      R.inc(42); //=> 43\n */\n\nvar inc =\n/*#__PURE__*/\nObject(_add__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n/* harmony default export */ __webpack_exports__[\"default\"] = (inc);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/inc.js?");

/***/ }),

/***/ "./node_modules/ramda/es/index.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/index.js ***!
  \****************************************/
/*! exports provided: F, T, __, add, addIndex, adjust, all, allPass, always, and, any, anyPass, ap, aperture, append, apply, applySpec, applyTo, ascend, assoc, assocPath, binary, bind, both, call, chain, clamp, clone, comparator, complement, compose, composeK, composeP, concat, cond, construct, constructN, contains, converge, countBy, curry, curryN, dec, defaultTo, descend, difference, differenceWith, dissoc, dissocPath, divide, drop, dropLast, dropLastWhile, dropRepeats, dropRepeatsWith, dropWhile, either, empty, endsWith, eqBy, eqProps, equals, evolve, filter, find, findIndex, findLast, findLastIndex, flatten, flip, forEach, forEachObjIndexed, fromPairs, groupBy, groupWith, gt, gte, has, hasIn, head, identical, identity, ifElse, inc, indexBy, indexOf, init, innerJoin, insert, insertAll, intersection, intersperse, into, invert, invertObj, invoker, is, isEmpty, isNil, join, juxt, keys, keysIn, last, lastIndexOf, length, lens, lensIndex, lensPath, lensProp, lift, liftN, lt, lte, map, mapAccum, mapAccumRight, mapObjIndexed, match, mathMod, max, maxBy, mean, median, memoize, memoizeWith, merge, mergeAll, mergeDeepLeft, mergeDeepRight, mergeDeepWith, mergeDeepWithKey, mergeWith, mergeWithKey, min, minBy, modulo, multiply, nAry, negate, none, not, nth, nthArg, o, objOf, of, omit, once, or, over, pair, partial, partialRight, partition, path, pathEq, pathOr, pathSatisfies, pick, pickAll, pickBy, pipe, pipeK, pipeP, pluck, prepend, product, project, prop, propEq, propIs, propOr, propSatisfies, props, range, reduce, reduceBy, reduceRight, reduceWhile, reduced, reject, remove, repeat, replace, reverse, scan, sequence, set, slice, sort, sortBy, sortWith, split, splitAt, splitEvery, splitWhen, startsWith, subtract, sum, symmetricDifference, symmetricDifferenceWith, tail, take, takeLast, takeLastWhile, takeWhile, tap, test, times, toLower, toPairs, toPairsIn, toString, toUpper, transduce, transpose, traverse, trim, tryCatch, type, unapply, unary, uncurryN, unfold, union, unionWith, uniq, uniqBy, uniqWith, unless, unnest, until, update, useWith, values, valuesIn, view, when, where, whereEq, without, xprod, zip, zipObj, zipWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./F */ \"./node_modules/ramda/es/F.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"F\", function() { return _F__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _T__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./T */ \"./node_modules/ramda/es/T.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"T\", function() { return _T__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__ */ \"./node_modules/ramda/es/__.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__\", function() { return ___WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add */ \"./node_modules/ramda/es/add.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _add__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _addIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addIndex */ \"./node_modules/ramda/es/addIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addIndex\", function() { return _addIndex__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adjust */ \"./node_modules/ramda/es/adjust.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"adjust\", function() { return _adjust__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all */ \"./node_modules/ramda/es/all.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"all\", function() { return _all__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _allPass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allPass */ \"./node_modules/ramda/es/allPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"allPass\", function() { return _allPass__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./always */ \"./node_modules/ramda/es/always.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"always\", function() { return _always__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./and */ \"./node_modules/ramda/es/and.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"and\", function() { return _and__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./any */ \"./node_modules/ramda/es/any.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"any\", function() { return _any__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _anyPass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./anyPass */ \"./node_modules/ramda/es/anyPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"anyPass\", function() { return _anyPass__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ap */ \"./node_modules/ramda/es/ap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ap\", function() { return _ap__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _aperture__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aperture */ \"./node_modules/ramda/es/aperture.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"aperture\", function() { return _aperture__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./append */ \"./node_modules/ramda/es/append.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return _append__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./apply */ \"./node_modules/ramda/es/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _apply__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _applySpec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./applySpec */ \"./node_modules/ramda/es/applySpec.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"applySpec\", function() { return _applySpec__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _applyTo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./applyTo */ \"./node_modules/ramda/es/applyTo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"applyTo\", function() { return _applyTo__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _ascend__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ascend */ \"./node_modules/ramda/es/ascend.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ascend\", function() { return _ascend__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _assoc__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assoc */ \"./node_modules/ramda/es/assoc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"assoc\", function() { return _assoc__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _assocPath__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assocPath */ \"./node_modules/ramda/es/assocPath.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"assocPath\", function() { return _assocPath__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./binary */ \"./node_modules/ramda/es/binary.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"binary\", function() { return _binary__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bind */ \"./node_modules/ramda/es/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _bind__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _both__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./both */ \"./node_modules/ramda/es/both.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"both\", function() { return _both__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./call */ \"./node_modules/ramda/es/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _call__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chain */ \"./node_modules/ramda/es/chain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chain\", function() { return _chain__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./clamp */ \"./node_modules/ramda/es/clamp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clamp\", function() { return _clamp__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clone */ \"./node_modules/ramda/es/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone\", function() { return _clone__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _comparator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./comparator */ \"./node_modules/ramda/es/comparator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"comparator\", function() { return _comparator__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _complement__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./complement */ \"./node_modules/ramda/es/complement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"complement\", function() { return _complement__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./compose */ \"./node_modules/ramda/es/compose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return _compose__WEBPACK_IMPORTED_MODULE_30__[\"default\"]; });\n\n/* harmony import */ var _composeK__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./composeK */ \"./node_modules/ramda/es/composeK.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeK\", function() { return _composeK__WEBPACK_IMPORTED_MODULE_31__[\"default\"]; });\n\n/* harmony import */ var _composeP__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./composeP */ \"./node_modules/ramda/es/composeP.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"composeP\", function() { return _composeP__WEBPACK_IMPORTED_MODULE_32__[\"default\"]; });\n\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./concat */ \"./node_modules/ramda/es/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _concat__WEBPACK_IMPORTED_MODULE_33__[\"default\"]; });\n\n/* harmony import */ var _cond__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cond */ \"./node_modules/ramda/es/cond.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cond\", function() { return _cond__WEBPACK_IMPORTED_MODULE_34__[\"default\"]; });\n\n/* harmony import */ var _construct__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./construct */ \"./node_modules/ramda/es/construct.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"construct\", function() { return _construct__WEBPACK_IMPORTED_MODULE_35__[\"default\"]; });\n\n/* harmony import */ var _constructN__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./constructN */ \"./node_modules/ramda/es/constructN.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"constructN\", function() { return _constructN__WEBPACK_IMPORTED_MODULE_36__[\"default\"]; });\n\n/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./contains */ \"./node_modules/ramda/es/contains.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"contains\", function() { return _contains__WEBPACK_IMPORTED_MODULE_37__[\"default\"]; });\n\n/* harmony import */ var _converge__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./converge */ \"./node_modules/ramda/es/converge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"converge\", function() { return _converge__WEBPACK_IMPORTED_MODULE_38__[\"default\"]; });\n\n/* harmony import */ var _countBy__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./countBy */ \"./node_modules/ramda/es/countBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"countBy\", function() { return _countBy__WEBPACK_IMPORTED_MODULE_39__[\"default\"]; });\n\n/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./curry */ \"./node_modules/ramda/es/curry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return _curry__WEBPACK_IMPORTED_MODULE_40__[\"default\"]; });\n\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"curryN\", function() { return _curryN__WEBPACK_IMPORTED_MODULE_41__[\"default\"]; });\n\n/* harmony import */ var _dec__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dec */ \"./node_modules/ramda/es/dec.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dec\", function() { return _dec__WEBPACK_IMPORTED_MODULE_42__[\"default\"]; });\n\n/* harmony import */ var _defaultTo__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./defaultTo */ \"./node_modules/ramda/es/defaultTo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"defaultTo\", function() { return _defaultTo__WEBPACK_IMPORTED_MODULE_43__[\"default\"]; });\n\n/* harmony import */ var _descend__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./descend */ \"./node_modules/ramda/es/descend.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"descend\", function() { return _descend__WEBPACK_IMPORTED_MODULE_44__[\"default\"]; });\n\n/* harmony import */ var _difference__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./difference */ \"./node_modules/ramda/es/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _difference__WEBPACK_IMPORTED_MODULE_45__[\"default\"]; });\n\n/* harmony import */ var _differenceWith__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./differenceWith */ \"./node_modules/ramda/es/differenceWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"differenceWith\", function() { return _differenceWith__WEBPACK_IMPORTED_MODULE_46__[\"default\"]; });\n\n/* harmony import */ var _dissoc__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./dissoc */ \"./node_modules/ramda/es/dissoc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dissoc\", function() { return _dissoc__WEBPACK_IMPORTED_MODULE_47__[\"default\"]; });\n\n/* harmony import */ var _dissocPath__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dissocPath */ \"./node_modules/ramda/es/dissocPath.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dissocPath\", function() { return _dissocPath__WEBPACK_IMPORTED_MODULE_48__[\"default\"]; });\n\n/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./divide */ \"./node_modules/ramda/es/divide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return _divide__WEBPACK_IMPORTED_MODULE_49__[\"default\"]; });\n\n/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./drop */ \"./node_modules/ramda/es/drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _drop__WEBPACK_IMPORTED_MODULE_50__[\"default\"]; });\n\n/* harmony import */ var _dropLast__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./dropLast */ \"./node_modules/ramda/es/dropLast.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropLast\", function() { return _dropLast__WEBPACK_IMPORTED_MODULE_51__[\"default\"]; });\n\n/* harmony import */ var _dropLastWhile__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./dropLastWhile */ \"./node_modules/ramda/es/dropLastWhile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropLastWhile\", function() { return _dropLastWhile__WEBPACK_IMPORTED_MODULE_52__[\"default\"]; });\n\n/* harmony import */ var _dropRepeats__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dropRepeats */ \"./node_modules/ramda/es/dropRepeats.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRepeats\", function() { return _dropRepeats__WEBPACK_IMPORTED_MODULE_53__[\"default\"]; });\n\n/* harmony import */ var _dropRepeatsWith__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./dropRepeatsWith */ \"./node_modules/ramda/es/dropRepeatsWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRepeatsWith\", function() { return _dropRepeatsWith__WEBPACK_IMPORTED_MODULE_54__[\"default\"]; });\n\n/* harmony import */ var _dropWhile__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./dropWhile */ \"./node_modules/ramda/es/dropWhile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropWhile\", function() { return _dropWhile__WEBPACK_IMPORTED_MODULE_55__[\"default\"]; });\n\n/* harmony import */ var _either__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./either */ \"./node_modules/ramda/es/either.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"either\", function() { return _either__WEBPACK_IMPORTED_MODULE_56__[\"default\"]; });\n\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./empty */ \"./node_modules/ramda/es/empty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"empty\", function() { return _empty__WEBPACK_IMPORTED_MODULE_57__[\"default\"]; });\n\n/* harmony import */ var _endsWith__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./endsWith */ \"./node_modules/ramda/es/endsWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"endsWith\", function() { return _endsWith__WEBPACK_IMPORTED_MODULE_58__[\"default\"]; });\n\n/* harmony import */ var _eqBy__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./eqBy */ \"./node_modules/ramda/es/eqBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"eqBy\", function() { return _eqBy__WEBPACK_IMPORTED_MODULE_59__[\"default\"]; });\n\n/* harmony import */ var _eqProps__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./eqProps */ \"./node_modules/ramda/es/eqProps.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"eqProps\", function() { return _eqProps__WEBPACK_IMPORTED_MODULE_60__[\"default\"]; });\n\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"equals\", function() { return _equals__WEBPACK_IMPORTED_MODULE_61__[\"default\"]; });\n\n/* harmony import */ var _evolve__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./evolve */ \"./node_modules/ramda/es/evolve.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"evolve\", function() { return _evolve__WEBPACK_IMPORTED_MODULE_62__[\"default\"]; });\n\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./filter */ \"./node_modules/ramda/es/filter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _filter__WEBPACK_IMPORTED_MODULE_63__[\"default\"]; });\n\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./find */ \"./node_modules/ramda/es/find.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _find__WEBPACK_IMPORTED_MODULE_64__[\"default\"]; });\n\n/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./findIndex */ \"./node_modules/ramda/es/findIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _findIndex__WEBPACK_IMPORTED_MODULE_65__[\"default\"]; });\n\n/* harmony import */ var _findLast__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./findLast */ \"./node_modules/ramda/es/findLast.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findLast\", function() { return _findLast__WEBPACK_IMPORTED_MODULE_66__[\"default\"]; });\n\n/* harmony import */ var _findLastIndex__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./findLastIndex */ \"./node_modules/ramda/es/findLastIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findLastIndex\", function() { return _findLastIndex__WEBPACK_IMPORTED_MODULE_67__[\"default\"]; });\n\n/* harmony import */ var _flatten__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./flatten */ \"./node_modules/ramda/es/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten\", function() { return _flatten__WEBPACK_IMPORTED_MODULE_68__[\"default\"]; });\n\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./flip */ \"./node_modules/ramda/es/flip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flip\", function() { return _flip__WEBPACK_IMPORTED_MODULE_69__[\"default\"]; });\n\n/* harmony import */ var _forEach__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./forEach */ \"./node_modules/ramda/es/forEach.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"forEach\", function() { return _forEach__WEBPACK_IMPORTED_MODULE_70__[\"default\"]; });\n\n/* harmony import */ var _forEachObjIndexed__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./forEachObjIndexed */ \"./node_modules/ramda/es/forEachObjIndexed.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"forEachObjIndexed\", function() { return _forEachObjIndexed__WEBPACK_IMPORTED_MODULE_71__[\"default\"]; });\n\n/* harmony import */ var _fromPairs__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./fromPairs */ \"./node_modules/ramda/es/fromPairs.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fromPairs\", function() { return _fromPairs__WEBPACK_IMPORTED_MODULE_72__[\"default\"]; });\n\n/* harmony import */ var _groupBy__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./groupBy */ \"./node_modules/ramda/es/groupBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"groupBy\", function() { return _groupBy__WEBPACK_IMPORTED_MODULE_73__[\"default\"]; });\n\n/* harmony import */ var _groupWith__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./groupWith */ \"./node_modules/ramda/es/groupWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"groupWith\", function() { return _groupWith__WEBPACK_IMPORTED_MODULE_74__[\"default\"]; });\n\n/* harmony import */ var _gt__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./gt */ \"./node_modules/ramda/es/gt.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"gt\", function() { return _gt__WEBPACK_IMPORTED_MODULE_75__[\"default\"]; });\n\n/* harmony import */ var _gte__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./gte */ \"./node_modules/ramda/es/gte.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"gte\", function() { return _gte__WEBPACK_IMPORTED_MODULE_76__[\"default\"]; });\n\n/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./has */ \"./node_modules/ramda/es/has.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"has\", function() { return _has__WEBPACK_IMPORTED_MODULE_77__[\"default\"]; });\n\n/* harmony import */ var _hasIn__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./hasIn */ \"./node_modules/ramda/es/hasIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasIn\", function() { return _hasIn__WEBPACK_IMPORTED_MODULE_78__[\"default\"]; });\n\n/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./head */ \"./node_modules/ramda/es/head.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"head\", function() { return _head__WEBPACK_IMPORTED_MODULE_79__[\"default\"]; });\n\n/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./identical */ \"./node_modules/ramda/es/identical.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identical\", function() { return _identical__WEBPACK_IMPORTED_MODULE_80__[\"default\"]; });\n\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./identity */ \"./node_modules/ramda/es/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _identity__WEBPACK_IMPORTED_MODULE_81__[\"default\"]; });\n\n/* harmony import */ var _ifElse__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./ifElse */ \"./node_modules/ramda/es/ifElse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ifElse\", function() { return _ifElse__WEBPACK_IMPORTED_MODULE_82__[\"default\"]; });\n\n/* harmony import */ var _inc__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./inc */ \"./node_modules/ramda/es/inc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"inc\", function() { return _inc__WEBPACK_IMPORTED_MODULE_83__[\"default\"]; });\n\n/* harmony import */ var _indexBy__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./indexBy */ \"./node_modules/ramda/es/indexBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"indexBy\", function() { return _indexBy__WEBPACK_IMPORTED_MODULE_84__[\"default\"]; });\n\n/* harmony import */ var _indexOf__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./indexOf */ \"./node_modules/ramda/es/indexOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"indexOf\", function() { return _indexOf__WEBPACK_IMPORTED_MODULE_85__[\"default\"]; });\n\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./init */ \"./node_modules/ramda/es/init.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return _init__WEBPACK_IMPORTED_MODULE_86__[\"default\"]; });\n\n/* harmony import */ var _innerJoin__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./innerJoin */ \"./node_modules/ramda/es/innerJoin.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"innerJoin\", function() { return _innerJoin__WEBPACK_IMPORTED_MODULE_87__[\"default\"]; });\n\n/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./insert */ \"./node_modules/ramda/es/insert.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insert\", function() { return _insert__WEBPACK_IMPORTED_MODULE_88__[\"default\"]; });\n\n/* harmony import */ var _insertAll__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./insertAll */ \"./node_modules/ramda/es/insertAll.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertAll\", function() { return _insertAll__WEBPACK_IMPORTED_MODULE_89__[\"default\"]; });\n\n/* harmony import */ var _intersection__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./intersection */ \"./node_modules/ramda/es/intersection.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"intersection\", function() { return _intersection__WEBPACK_IMPORTED_MODULE_90__[\"default\"]; });\n\n/* harmony import */ var _intersperse__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./intersperse */ \"./node_modules/ramda/es/intersperse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"intersperse\", function() { return _intersperse__WEBPACK_IMPORTED_MODULE_91__[\"default\"]; });\n\n/* harmony import */ var _into__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./into */ \"./node_modules/ramda/es/into.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"into\", function() { return _into__WEBPACK_IMPORTED_MODULE_92__[\"default\"]; });\n\n/* harmony import */ var _invert__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./invert */ \"./node_modules/ramda/es/invert.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"invert\", function() { return _invert__WEBPACK_IMPORTED_MODULE_93__[\"default\"]; });\n\n/* harmony import */ var _invertObj__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./invertObj */ \"./node_modules/ramda/es/invertObj.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"invertObj\", function() { return _invertObj__WEBPACK_IMPORTED_MODULE_94__[\"default\"]; });\n\n/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./invoker */ \"./node_modules/ramda/es/invoker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"invoker\", function() { return _invoker__WEBPACK_IMPORTED_MODULE_95__[\"default\"]; });\n\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./is */ \"./node_modules/ramda/es/is.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"is\", function() { return _is__WEBPACK_IMPORTED_MODULE_96__[\"default\"]; });\n\n/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./isEmpty */ \"./node_modules/ramda/es/isEmpty.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return _isEmpty__WEBPACK_IMPORTED_MODULE_97__[\"default\"]; });\n\n/* harmony import */ var _isNil__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./isNil */ \"./node_modules/ramda/es/isNil.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNil\", function() { return _isNil__WEBPACK_IMPORTED_MODULE_98__[\"default\"]; });\n\n/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./join */ \"./node_modules/ramda/es/join.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"join\", function() { return _join__WEBPACK_IMPORTED_MODULE_99__[\"default\"]; });\n\n/* harmony import */ var _juxt__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./juxt */ \"./node_modules/ramda/es/juxt.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"juxt\", function() { return _juxt__WEBPACK_IMPORTED_MODULE_100__[\"default\"]; });\n\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./keys */ \"./node_modules/ramda/es/keys.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"keys\", function() { return _keys__WEBPACK_IMPORTED_MODULE_101__[\"default\"]; });\n\n/* harmony import */ var _keysIn__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./keysIn */ \"./node_modules/ramda/es/keysIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"keysIn\", function() { return _keysIn__WEBPACK_IMPORTED_MODULE_102__[\"default\"]; });\n\n/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./last */ \"./node_modules/ramda/es/last.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"last\", function() { return _last__WEBPACK_IMPORTED_MODULE_103__[\"default\"]; });\n\n/* harmony import */ var _lastIndexOf__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./lastIndexOf */ \"./node_modules/ramda/es/lastIndexOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lastIndexOf\", function() { return _lastIndexOf__WEBPACK_IMPORTED_MODULE_104__[\"default\"]; });\n\n/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./length */ \"./node_modules/ramda/es/length.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"length\", function() { return _length__WEBPACK_IMPORTED_MODULE_105__[\"default\"]; });\n\n/* harmony import */ var _lens__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./lens */ \"./node_modules/ramda/es/lens.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lens\", function() { return _lens__WEBPACK_IMPORTED_MODULE_106__[\"default\"]; });\n\n/* harmony import */ var _lensIndex__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./lensIndex */ \"./node_modules/ramda/es/lensIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lensIndex\", function() { return _lensIndex__WEBPACK_IMPORTED_MODULE_107__[\"default\"]; });\n\n/* harmony import */ var _lensPath__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./lensPath */ \"./node_modules/ramda/es/lensPath.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lensPath\", function() { return _lensPath__WEBPACK_IMPORTED_MODULE_108__[\"default\"]; });\n\n/* harmony import */ var _lensProp__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./lensProp */ \"./node_modules/ramda/es/lensProp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lensProp\", function() { return _lensProp__WEBPACK_IMPORTED_MODULE_109__[\"default\"]; });\n\n/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./lift */ \"./node_modules/ramda/es/lift.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lift\", function() { return _lift__WEBPACK_IMPORTED_MODULE_110__[\"default\"]; });\n\n/* harmony import */ var _liftN__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./liftN */ \"./node_modules/ramda/es/liftN.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"liftN\", function() { return _liftN__WEBPACK_IMPORTED_MODULE_111__[\"default\"]; });\n\n/* harmony import */ var _lt__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./lt */ \"./node_modules/ramda/es/lt.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lt\", function() { return _lt__WEBPACK_IMPORTED_MODULE_112__[\"default\"]; });\n\n/* harmony import */ var _lte__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./lte */ \"./node_modules/ramda/es/lte.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lte\", function() { return _lte__WEBPACK_IMPORTED_MODULE_113__[\"default\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _map__WEBPACK_IMPORTED_MODULE_114__[\"default\"]; });\n\n/* harmony import */ var _mapAccum__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./mapAccum */ \"./node_modules/ramda/es/mapAccum.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mapAccum\", function() { return _mapAccum__WEBPACK_IMPORTED_MODULE_115__[\"default\"]; });\n\n/* harmony import */ var _mapAccumRight__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./mapAccumRight */ \"./node_modules/ramda/es/mapAccumRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mapAccumRight\", function() { return _mapAccumRight__WEBPACK_IMPORTED_MODULE_116__[\"default\"]; });\n\n/* harmony import */ var _mapObjIndexed__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./mapObjIndexed */ \"./node_modules/ramda/es/mapObjIndexed.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mapObjIndexed\", function() { return _mapObjIndexed__WEBPACK_IMPORTED_MODULE_117__[\"default\"]; });\n\n/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./match */ \"./node_modules/ramda/es/match.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"match\", function() { return _match__WEBPACK_IMPORTED_MODULE_118__[\"default\"]; });\n\n/* harmony import */ var _mathMod__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./mathMod */ \"./node_modules/ramda/es/mathMod.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mathMod\", function() { return _mathMod__WEBPACK_IMPORTED_MODULE_119__[\"default\"]; });\n\n/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./max */ \"./node_modules/ramda/es/max.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"max\", function() { return _max__WEBPACK_IMPORTED_MODULE_120__[\"default\"]; });\n\n/* harmony import */ var _maxBy__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./maxBy */ \"./node_modules/ramda/es/maxBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"maxBy\", function() { return _maxBy__WEBPACK_IMPORTED_MODULE_121__[\"default\"]; });\n\n/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./mean */ \"./node_modules/ramda/es/mean.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mean\", function() { return _mean__WEBPACK_IMPORTED_MODULE_122__[\"default\"]; });\n\n/* harmony import */ var _median__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./median */ \"./node_modules/ramda/es/median.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"median\", function() { return _median__WEBPACK_IMPORTED_MODULE_123__[\"default\"]; });\n\n/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./memoize */ \"./node_modules/ramda/es/memoize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memoize\", function() { return _memoize__WEBPACK_IMPORTED_MODULE_124__[\"default\"]; });\n\n/* harmony import */ var _memoizeWith__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./memoizeWith */ \"./node_modules/ramda/es/memoizeWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"memoizeWith\", function() { return _memoizeWith__WEBPACK_IMPORTED_MODULE_125__[\"default\"]; });\n\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./merge */ \"./node_modules/ramda/es/merge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return _merge__WEBPACK_IMPORTED_MODULE_126__[\"default\"]; });\n\n/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./mergeAll */ \"./node_modules/ramda/es/mergeAll.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeAll\", function() { return _mergeAll__WEBPACK_IMPORTED_MODULE_127__[\"default\"]; });\n\n/* harmony import */ var _mergeDeepLeft__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./mergeDeepLeft */ \"./node_modules/ramda/es/mergeDeepLeft.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeDeepLeft\", function() { return _mergeDeepLeft__WEBPACK_IMPORTED_MODULE_128__[\"default\"]; });\n\n/* harmony import */ var _mergeDeepRight__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./mergeDeepRight */ \"./node_modules/ramda/es/mergeDeepRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeDeepRight\", function() { return _mergeDeepRight__WEBPACK_IMPORTED_MODULE_129__[\"default\"]; });\n\n/* harmony import */ var _mergeDeepWith__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./mergeDeepWith */ \"./node_modules/ramda/es/mergeDeepWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeDeepWith\", function() { return _mergeDeepWith__WEBPACK_IMPORTED_MODULE_130__[\"default\"]; });\n\n/* harmony import */ var _mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./mergeDeepWithKey */ \"./node_modules/ramda/es/mergeDeepWithKey.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeDeepWithKey\", function() { return _mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_131__[\"default\"]; });\n\n/* harmony import */ var _mergeWith__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./mergeWith */ \"./node_modules/ramda/es/mergeWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeWith\", function() { return _mergeWith__WEBPACK_IMPORTED_MODULE_132__[\"default\"]; });\n\n/* harmony import */ var _mergeWithKey__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./mergeWithKey */ \"./node_modules/ramda/es/mergeWithKey.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeWithKey\", function() { return _mergeWithKey__WEBPACK_IMPORTED_MODULE_133__[\"default\"]; });\n\n/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./min */ \"./node_modules/ramda/es/min.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"min\", function() { return _min__WEBPACK_IMPORTED_MODULE_134__[\"default\"]; });\n\n/* harmony import */ var _minBy__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./minBy */ \"./node_modules/ramda/es/minBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"minBy\", function() { return _minBy__WEBPACK_IMPORTED_MODULE_135__[\"default\"]; });\n\n/* harmony import */ var _modulo__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./modulo */ \"./node_modules/ramda/es/modulo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"modulo\", function() { return _modulo__WEBPACK_IMPORTED_MODULE_136__[\"default\"]; });\n\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./multiply */ \"./node_modules/ramda/es/multiply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return _multiply__WEBPACK_IMPORTED_MODULE_137__[\"default\"]; });\n\n/* harmony import */ var _nAry__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./nAry */ \"./node_modules/ramda/es/nAry.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nAry\", function() { return _nAry__WEBPACK_IMPORTED_MODULE_138__[\"default\"]; });\n\n/* harmony import */ var _negate__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./negate */ \"./node_modules/ramda/es/negate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"negate\", function() { return _negate__WEBPACK_IMPORTED_MODULE_139__[\"default\"]; });\n\n/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./none */ \"./node_modules/ramda/es/none.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"none\", function() { return _none__WEBPACK_IMPORTED_MODULE_140__[\"default\"]; });\n\n/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./not */ \"./node_modules/ramda/es/not.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"not\", function() { return _not__WEBPACK_IMPORTED_MODULE_141__[\"default\"]; });\n\n/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./nth */ \"./node_modules/ramda/es/nth.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nth\", function() { return _nth__WEBPACK_IMPORTED_MODULE_142__[\"default\"]; });\n\n/* harmony import */ var _nthArg__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./nthArg */ \"./node_modules/ramda/es/nthArg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nthArg\", function() { return _nthArg__WEBPACK_IMPORTED_MODULE_143__[\"default\"]; });\n\n/* harmony import */ var _o__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./o */ \"./node_modules/ramda/es/o.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"o\", function() { return _o__WEBPACK_IMPORTED_MODULE_144__[\"default\"]; });\n\n/* harmony import */ var _objOf__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./objOf */ \"./node_modules/ramda/es/objOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"objOf\", function() { return _objOf__WEBPACK_IMPORTED_MODULE_145__[\"default\"]; });\n\n/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./of */ \"./node_modules/ramda/es/of.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"of\", function() { return _of__WEBPACK_IMPORTED_MODULE_146__[\"default\"]; });\n\n/* harmony import */ var _omit__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./omit */ \"./node_modules/ramda/es/omit.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"omit\", function() { return _omit__WEBPACK_IMPORTED_MODULE_147__[\"default\"]; });\n\n/* harmony import */ var _once__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./once */ \"./node_modules/ramda/es/once.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"once\", function() { return _once__WEBPACK_IMPORTED_MODULE_148__[\"default\"]; });\n\n/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./or */ \"./node_modules/ramda/es/or.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"or\", function() { return _or__WEBPACK_IMPORTED_MODULE_149__[\"default\"]; });\n\n/* harmony import */ var _over__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./over */ \"./node_modules/ramda/es/over.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"over\", function() { return _over__WEBPACK_IMPORTED_MODULE_150__[\"default\"]; });\n\n/* harmony import */ var _pair__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./pair */ \"./node_modules/ramda/es/pair.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pair\", function() { return _pair__WEBPACK_IMPORTED_MODULE_151__[\"default\"]; });\n\n/* harmony import */ var _partial__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./partial */ \"./node_modules/ramda/es/partial.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"partial\", function() { return _partial__WEBPACK_IMPORTED_MODULE_152__[\"default\"]; });\n\n/* harmony import */ var _partialRight__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./partialRight */ \"./node_modules/ramda/es/partialRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"partialRight\", function() { return _partialRight__WEBPACK_IMPORTED_MODULE_153__[\"default\"]; });\n\n/* harmony import */ var _partition__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./partition */ \"./node_modules/ramda/es/partition.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"partition\", function() { return _partition__WEBPACK_IMPORTED_MODULE_154__[\"default\"]; });\n\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./path */ \"./node_modules/ramda/es/path.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"path\", function() { return _path__WEBPACK_IMPORTED_MODULE_155__[\"default\"]; });\n\n/* harmony import */ var _pathEq__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./pathEq */ \"./node_modules/ramda/es/pathEq.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pathEq\", function() { return _pathEq__WEBPACK_IMPORTED_MODULE_156__[\"default\"]; });\n\n/* harmony import */ var _pathOr__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./pathOr */ \"./node_modules/ramda/es/pathOr.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pathOr\", function() { return _pathOr__WEBPACK_IMPORTED_MODULE_157__[\"default\"]; });\n\n/* harmony import */ var _pathSatisfies__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./pathSatisfies */ \"./node_modules/ramda/es/pathSatisfies.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pathSatisfies\", function() { return _pathSatisfies__WEBPACK_IMPORTED_MODULE_158__[\"default\"]; });\n\n/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./pick */ \"./node_modules/ramda/es/pick.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pick\", function() { return _pick__WEBPACK_IMPORTED_MODULE_159__[\"default\"]; });\n\n/* harmony import */ var _pickAll__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./pickAll */ \"./node_modules/ramda/es/pickAll.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pickAll\", function() { return _pickAll__WEBPACK_IMPORTED_MODULE_160__[\"default\"]; });\n\n/* harmony import */ var _pickBy__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./pickBy */ \"./node_modules/ramda/es/pickBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pickBy\", function() { return _pickBy__WEBPACK_IMPORTED_MODULE_161__[\"default\"]; });\n\n/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./pipe */ \"./node_modules/ramda/es/pipe.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pipe\", function() { return _pipe__WEBPACK_IMPORTED_MODULE_162__[\"default\"]; });\n\n/* harmony import */ var _pipeK__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./pipeK */ \"./node_modules/ramda/es/pipeK.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pipeK\", function() { return _pipeK__WEBPACK_IMPORTED_MODULE_163__[\"default\"]; });\n\n/* harmony import */ var _pipeP__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./pipeP */ \"./node_modules/ramda/es/pipeP.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pipeP\", function() { return _pipeP__WEBPACK_IMPORTED_MODULE_164__[\"default\"]; });\n\n/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./pluck */ \"./node_modules/ramda/es/pluck.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pluck\", function() { return _pluck__WEBPACK_IMPORTED_MODULE_165__[\"default\"]; });\n\n/* harmony import */ var _prepend__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./prepend */ \"./node_modules/ramda/es/prepend.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prepend\", function() { return _prepend__WEBPACK_IMPORTED_MODULE_166__[\"default\"]; });\n\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./product */ \"./node_modules/ramda/es/product.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"product\", function() { return _product__WEBPACK_IMPORTED_MODULE_167__[\"default\"]; });\n\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./project */ \"./node_modules/ramda/es/project.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"project\", function() { return _project__WEBPACK_IMPORTED_MODULE_168__[\"default\"]; });\n\n/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./prop */ \"./node_modules/ramda/es/prop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prop\", function() { return _prop__WEBPACK_IMPORTED_MODULE_169__[\"default\"]; });\n\n/* harmony import */ var _propEq__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./propEq */ \"./node_modules/ramda/es/propEq.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"propEq\", function() { return _propEq__WEBPACK_IMPORTED_MODULE_170__[\"default\"]; });\n\n/* harmony import */ var _propIs__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./propIs */ \"./node_modules/ramda/es/propIs.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"propIs\", function() { return _propIs__WEBPACK_IMPORTED_MODULE_171__[\"default\"]; });\n\n/* harmony import */ var _propOr__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./propOr */ \"./node_modules/ramda/es/propOr.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"propOr\", function() { return _propOr__WEBPACK_IMPORTED_MODULE_172__[\"default\"]; });\n\n/* harmony import */ var _propSatisfies__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./propSatisfies */ \"./node_modules/ramda/es/propSatisfies.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"propSatisfies\", function() { return _propSatisfies__WEBPACK_IMPORTED_MODULE_173__[\"default\"]; });\n\n/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./props */ \"./node_modules/ramda/es/props.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"props\", function() { return _props__WEBPACK_IMPORTED_MODULE_174__[\"default\"]; });\n\n/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./range */ \"./node_modules/ramda/es/range.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return _range__WEBPACK_IMPORTED_MODULE_175__[\"default\"]; });\n\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _reduce__WEBPACK_IMPORTED_MODULE_176__[\"default\"]; });\n\n/* harmony import */ var _reduceBy__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./reduceBy */ \"./node_modules/ramda/es/reduceBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduceBy\", function() { return _reduceBy__WEBPACK_IMPORTED_MODULE_177__[\"default\"]; });\n\n/* harmony import */ var _reduceRight__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./reduceRight */ \"./node_modules/ramda/es/reduceRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduceRight\", function() { return _reduceRight__WEBPACK_IMPORTED_MODULE_178__[\"default\"]; });\n\n/* harmony import */ var _reduceWhile__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./reduceWhile */ \"./node_modules/ramda/es/reduceWhile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduceWhile\", function() { return _reduceWhile__WEBPACK_IMPORTED_MODULE_179__[\"default\"]; });\n\n/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./reduced */ \"./node_modules/ramda/es/reduced.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduced\", function() { return _reduced__WEBPACK_IMPORTED_MODULE_180__[\"default\"]; });\n\n/* harmony import */ var _reject__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./reject */ \"./node_modules/ramda/es/reject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reject\", function() { return _reject__WEBPACK_IMPORTED_MODULE_181__[\"default\"]; });\n\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./remove */ \"./node_modules/ramda/es/remove.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return _remove__WEBPACK_IMPORTED_MODULE_182__[\"default\"]; });\n\n/* harmony import */ var _repeat__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./repeat */ \"./node_modules/ramda/es/repeat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"repeat\", function() { return _repeat__WEBPACK_IMPORTED_MODULE_183__[\"default\"]; });\n\n/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./replace */ \"./node_modules/ramda/es/replace.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"replace\", function() { return _replace__WEBPACK_IMPORTED_MODULE_184__[\"default\"]; });\n\n/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./reverse */ \"./node_modules/ramda/es/reverse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reverse\", function() { return _reverse__WEBPACK_IMPORTED_MODULE_185__[\"default\"]; });\n\n/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./scan */ \"./node_modules/ramda/es/scan.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scan\", function() { return _scan__WEBPACK_IMPORTED_MODULE_186__[\"default\"]; });\n\n/* harmony import */ var _sequence__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./sequence */ \"./node_modules/ramda/es/sequence.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sequence\", function() { return _sequence__WEBPACK_IMPORTED_MODULE_187__[\"default\"]; });\n\n/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./set */ \"./node_modules/ramda/es/set.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return _set__WEBPACK_IMPORTED_MODULE_188__[\"default\"]; });\n\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _slice__WEBPACK_IMPORTED_MODULE_189__[\"default\"]; });\n\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./sort */ \"./node_modules/ramda/es/sort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sort\", function() { return _sort__WEBPACK_IMPORTED_MODULE_190__[\"default\"]; });\n\n/* harmony import */ var _sortBy__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./sortBy */ \"./node_modules/ramda/es/sortBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sortBy\", function() { return _sortBy__WEBPACK_IMPORTED_MODULE_191__[\"default\"]; });\n\n/* harmony import */ var _sortWith__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./sortWith */ \"./node_modules/ramda/es/sortWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sortWith\", function() { return _sortWith__WEBPACK_IMPORTED_MODULE_192__[\"default\"]; });\n\n/* harmony import */ var _split__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./split */ \"./node_modules/ramda/es/split.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"split\", function() { return _split__WEBPACK_IMPORTED_MODULE_193__[\"default\"]; });\n\n/* harmony import */ var _splitAt__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./splitAt */ \"./node_modules/ramda/es/splitAt.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"splitAt\", function() { return _splitAt__WEBPACK_IMPORTED_MODULE_194__[\"default\"]; });\n\n/* harmony import */ var _splitEvery__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./splitEvery */ \"./node_modules/ramda/es/splitEvery.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"splitEvery\", function() { return _splitEvery__WEBPACK_IMPORTED_MODULE_195__[\"default\"]; });\n\n/* harmony import */ var _splitWhen__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./splitWhen */ \"./node_modules/ramda/es/splitWhen.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"splitWhen\", function() { return _splitWhen__WEBPACK_IMPORTED_MODULE_196__[\"default\"]; });\n\n/* harmony import */ var _startsWith__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./startsWith */ \"./node_modules/ramda/es/startsWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"startsWith\", function() { return _startsWith__WEBPACK_IMPORTED_MODULE_197__[\"default\"]; });\n\n/* harmony import */ var _subtract__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./subtract */ \"./node_modules/ramda/es/subtract.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return _subtract__WEBPACK_IMPORTED_MODULE_198__[\"default\"]; });\n\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./sum */ \"./node_modules/ramda/es/sum.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return _sum__WEBPACK_IMPORTED_MODULE_199__[\"default\"]; });\n\n/* harmony import */ var _symmetricDifference__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./symmetricDifference */ \"./node_modules/ramda/es/symmetricDifference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"symmetricDifference\", function() { return _symmetricDifference__WEBPACK_IMPORTED_MODULE_200__[\"default\"]; });\n\n/* harmony import */ var _symmetricDifferenceWith__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./symmetricDifferenceWith */ \"./node_modules/ramda/es/symmetricDifferenceWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"symmetricDifferenceWith\", function() { return _symmetricDifferenceWith__WEBPACK_IMPORTED_MODULE_201__[\"default\"]; });\n\n/* harmony import */ var _tail__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./tail */ \"./node_modules/ramda/es/tail.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tail\", function() { return _tail__WEBPACK_IMPORTED_MODULE_202__[\"default\"]; });\n\n/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./take */ \"./node_modules/ramda/es/take.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"take\", function() { return _take__WEBPACK_IMPORTED_MODULE_203__[\"default\"]; });\n\n/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./takeLast */ \"./node_modules/ramda/es/takeLast.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"takeLast\", function() { return _takeLast__WEBPACK_IMPORTED_MODULE_204__[\"default\"]; });\n\n/* harmony import */ var _takeLastWhile__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./takeLastWhile */ \"./node_modules/ramda/es/takeLastWhile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"takeLastWhile\", function() { return _takeLastWhile__WEBPACK_IMPORTED_MODULE_205__[\"default\"]; });\n\n/* harmony import */ var _takeWhile__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./takeWhile */ \"./node_modules/ramda/es/takeWhile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"takeWhile\", function() { return _takeWhile__WEBPACK_IMPORTED_MODULE_206__[\"default\"]; });\n\n/* harmony import */ var _tap__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./tap */ \"./node_modules/ramda/es/tap.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tap\", function() { return _tap__WEBPACK_IMPORTED_MODULE_207__[\"default\"]; });\n\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./test */ \"./node_modules/ramda/es/test.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return _test__WEBPACK_IMPORTED_MODULE_208__[\"default\"]; });\n\n/* harmony import */ var _times__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./times */ \"./node_modules/ramda/es/times.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"times\", function() { return _times__WEBPACK_IMPORTED_MODULE_209__[\"default\"]; });\n\n/* harmony import */ var _toLower__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./toLower */ \"./node_modules/ramda/es/toLower.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toLower\", function() { return _toLower__WEBPACK_IMPORTED_MODULE_210__[\"default\"]; });\n\n/* harmony import */ var _toPairs__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./toPairs */ \"./node_modules/ramda/es/toPairs.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toPairs\", function() { return _toPairs__WEBPACK_IMPORTED_MODULE_211__[\"default\"]; });\n\n/* harmony import */ var _toPairsIn__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./toPairsIn */ \"./node_modules/ramda/es/toPairsIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toPairsIn\", function() { return _toPairsIn__WEBPACK_IMPORTED_MODULE_212__[\"default\"]; });\n\n/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./toString */ \"./node_modules/ramda/es/toString.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toString\", function() { return _toString__WEBPACK_IMPORTED_MODULE_213__[\"default\"]; });\n\n/* harmony import */ var _toUpper__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./toUpper */ \"./node_modules/ramda/es/toUpper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toUpper\", function() { return _toUpper__WEBPACK_IMPORTED_MODULE_214__[\"default\"]; });\n\n/* harmony import */ var _transduce__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./transduce */ \"./node_modules/ramda/es/transduce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"transduce\", function() { return _transduce__WEBPACK_IMPORTED_MODULE_215__[\"default\"]; });\n\n/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./transpose */ \"./node_modules/ramda/es/transpose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"transpose\", function() { return _transpose__WEBPACK_IMPORTED_MODULE_216__[\"default\"]; });\n\n/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./traverse */ \"./node_modules/ramda/es/traverse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"traverse\", function() { return _traverse__WEBPACK_IMPORTED_MODULE_217__[\"default\"]; });\n\n/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./trim */ \"./node_modules/ramda/es/trim.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"trim\", function() { return _trim__WEBPACK_IMPORTED_MODULE_218__[\"default\"]; });\n\n/* harmony import */ var _tryCatch__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./tryCatch */ \"./node_modules/ramda/es/tryCatch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tryCatch\", function() { return _tryCatch__WEBPACK_IMPORTED_MODULE_219__[\"default\"]; });\n\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./type */ \"./node_modules/ramda/es/type.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"type\", function() { return _type__WEBPACK_IMPORTED_MODULE_220__[\"default\"]; });\n\n/* harmony import */ var _unapply__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./unapply */ \"./node_modules/ramda/es/unapply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unapply\", function() { return _unapply__WEBPACK_IMPORTED_MODULE_221__[\"default\"]; });\n\n/* harmony import */ var _unary__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./unary */ \"./node_modules/ramda/es/unary.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unary\", function() { return _unary__WEBPACK_IMPORTED_MODULE_222__[\"default\"]; });\n\n/* harmony import */ var _uncurryN__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./uncurryN */ \"./node_modules/ramda/es/uncurryN.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uncurryN\", function() { return _uncurryN__WEBPACK_IMPORTED_MODULE_223__[\"default\"]; });\n\n/* harmony import */ var _unfold__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./unfold */ \"./node_modules/ramda/es/unfold.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unfold\", function() { return _unfold__WEBPACK_IMPORTED_MODULE_224__[\"default\"]; });\n\n/* harmony import */ var _union__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./union */ \"./node_modules/ramda/es/union.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"union\", function() { return _union__WEBPACK_IMPORTED_MODULE_225__[\"default\"]; });\n\n/* harmony import */ var _unionWith__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./unionWith */ \"./node_modules/ramda/es/unionWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unionWith\", function() { return _unionWith__WEBPACK_IMPORTED_MODULE_226__[\"default\"]; });\n\n/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./uniq */ \"./node_modules/ramda/es/uniq.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uniq\", function() { return _uniq__WEBPACK_IMPORTED_MODULE_227__[\"default\"]; });\n\n/* harmony import */ var _uniqBy__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./uniqBy */ \"./node_modules/ramda/es/uniqBy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uniqBy\", function() { return _uniqBy__WEBPACK_IMPORTED_MODULE_228__[\"default\"]; });\n\n/* harmony import */ var _uniqWith__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./uniqWith */ \"./node_modules/ramda/es/uniqWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uniqWith\", function() { return _uniqWith__WEBPACK_IMPORTED_MODULE_229__[\"default\"]; });\n\n/* harmony import */ var _unless__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(/*! ./unless */ \"./node_modules/ramda/es/unless.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unless\", function() { return _unless__WEBPACK_IMPORTED_MODULE_230__[\"default\"]; });\n\n/* harmony import */ var _unnest__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(/*! ./unnest */ \"./node_modules/ramda/es/unnest.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unnest\", function() { return _unnest__WEBPACK_IMPORTED_MODULE_231__[\"default\"]; });\n\n/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(/*! ./until */ \"./node_modules/ramda/es/until.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"until\", function() { return _until__WEBPACK_IMPORTED_MODULE_232__[\"default\"]; });\n\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(/*! ./update */ \"./node_modules/ramda/es/update.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return _update__WEBPACK_IMPORTED_MODULE_233__[\"default\"]; });\n\n/* harmony import */ var _useWith__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(/*! ./useWith */ \"./node_modules/ramda/es/useWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useWith\", function() { return _useWith__WEBPACK_IMPORTED_MODULE_234__[\"default\"]; });\n\n/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(/*! ./values */ \"./node_modules/ramda/es/values.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"values\", function() { return _values__WEBPACK_IMPORTED_MODULE_235__[\"default\"]; });\n\n/* harmony import */ var _valuesIn__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(/*! ./valuesIn */ \"./node_modules/ramda/es/valuesIn.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"valuesIn\", function() { return _valuesIn__WEBPACK_IMPORTED_MODULE_236__[\"default\"]; });\n\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(/*! ./view */ \"./node_modules/ramda/es/view.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"view\", function() { return _view__WEBPACK_IMPORTED_MODULE_237__[\"default\"]; });\n\n/* harmony import */ var _when__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(/*! ./when */ \"./node_modules/ramda/es/when.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"when\", function() { return _when__WEBPACK_IMPORTED_MODULE_238__[\"default\"]; });\n\n/* harmony import */ var _where__WEBPACK_IMPORTED_MODULE_239__ = __webpack_require__(/*! ./where */ \"./node_modules/ramda/es/where.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"where\", function() { return _where__WEBPACK_IMPORTED_MODULE_239__[\"default\"]; });\n\n/* harmony import */ var _whereEq__WEBPACK_IMPORTED_MODULE_240__ = __webpack_require__(/*! ./whereEq */ \"./node_modules/ramda/es/whereEq.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"whereEq\", function() { return _whereEq__WEBPACK_IMPORTED_MODULE_240__[\"default\"]; });\n\n/* harmony import */ var _without__WEBPACK_IMPORTED_MODULE_241__ = __webpack_require__(/*! ./without */ \"./node_modules/ramda/es/without.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"without\", function() { return _without__WEBPACK_IMPORTED_MODULE_241__[\"default\"]; });\n\n/* harmony import */ var _xprod__WEBPACK_IMPORTED_MODULE_242__ = __webpack_require__(/*! ./xprod */ \"./node_modules/ramda/es/xprod.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"xprod\", function() { return _xprod__WEBPACK_IMPORTED_MODULE_242__[\"default\"]; });\n\n/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_243__ = __webpack_require__(/*! ./zip */ \"./node_modules/ramda/es/zip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zip\", function() { return _zip__WEBPACK_IMPORTED_MODULE_243__[\"default\"]; });\n\n/* harmony import */ var _zipObj__WEBPACK_IMPORTED_MODULE_244__ = __webpack_require__(/*! ./zipObj */ \"./node_modules/ramda/es/zipObj.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zipObj\", function() { return _zipObj__WEBPACK_IMPORTED_MODULE_244__[\"default\"]; });\n\n/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_245__ = __webpack_require__(/*! ./zipWith */ \"./node_modules/ramda/es/zipWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zipWith\", function() { return _zipWith__WEBPACK_IMPORTED_MODULE_245__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/index.js?");

/***/ }),

/***/ "./node_modules/ramda/es/indexBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/indexBy.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduceBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduceBy */ \"./node_modules/ramda/es/reduceBy.js\");\n\n/**\n * Given a function that generates a key, turns a list of objects into an\n * object indexing the objects by the given key. Note that if multiple\n * objects generate the same value for the indexing key only the last value\n * will be included in the generated object.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category List\n * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}\n * @param {Function} fn Function :: a -> String\n * @param {Array} array The array of objects to index\n * @return {Object} An object indexing each array element by the given property.\n * @example\n *\n *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];\n *      R.indexBy(R.prop('id'), list);\n *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}\n */\n\nvar indexBy =\n/*#__PURE__*/\nObject(_reduceBy__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (acc, elem) {\n  return elem;\n}, null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/indexBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/indexOf.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/indexOf.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_indexOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_indexOf */ \"./node_modules/ramda/es/internal/_indexOf.js\");\n/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isArray */ \"./node_modules/ramda/es/internal/_isArray.js\");\n\n\n\n/**\n * Returns the position of the first occurrence of an item in an array, or -1\n * if the item is not included in the array. [`R.equals`](#equals) is used to\n * determine equality.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig a -> [a] -> Number\n * @param {*} target The item to find.\n * @param {Array} xs The array to search in.\n * @return {Number} the index of the target, or -1 if the target is not found.\n * @see R.lastIndexOf\n * @example\n *\n *      R.indexOf(3, [1,2,3,4]); //=> 2\n *      R.indexOf(10, [1,2,3,4]); //=> -1\n */\n\nvar indexOf =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function indexOf(target, xs) {\n  return typeof xs.indexOf === 'function' && !Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(xs) ? xs.indexOf(target) : Object(_internal_indexOf__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(xs, target, 0);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexOf);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/indexOf.js?");

/***/ }),

/***/ "./node_modules/ramda/es/init.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/init.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n\n/**\n * Returns all but the last element of the given list or string.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {*} list\n * @return {*}\n * @see R.last, R.head, R.tail\n * @example\n *\n *      R.init([1, 2, 3]);  //=> [1, 2]\n *      R.init([1, 2]);     //=> [1]\n *      R.init([1]);        //=> []\n *      R.init([]);         //=> []\n *\n *      R.init('abc');  //=> 'ab'\n *      R.init('ab');   //=> 'a'\n *      R.init('a');    //=> ''\n *      R.init('');     //=> ''\n */\n\nvar init =\n/*#__PURE__*/\nObject(_slice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, -1);\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/init.js?");

/***/ }),

/***/ "./node_modules/ramda/es/innerJoin.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/innerJoin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_containsWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_containsWith */ \"./node_modules/ramda/es/internal/_containsWith.js\");\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _internal_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_filter */ \"./node_modules/ramda/es/internal/_filter.js\");\n\n\n\n/**\n * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list\n * `xs'` comprising each of the elements of `xs` which is equal to one or more\n * elements of `ys` according to `pred`.\n *\n * `pred` must be a binary function expecting an element from each list.\n *\n * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should\n * not be significant, but since `xs'` is ordered the implementation guarantees\n * that its values are in the same order as they appear in `xs`. Duplicates are\n * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.\n *\n * @func\n * @memberOf R\n * @since v0.24.0\n * @category Relation\n * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]\n * @param {Function} pred\n * @param {Array} xs\n * @param {Array} ys\n * @return {Array}\n * @see R.intersection\n * @example\n *\n *      R.innerJoin(\n *        (record, id) => record.id === id,\n *        [{id: 824, name: 'Richie Furay'},\n *         {id: 956, name: 'Dewey Martin'},\n *         {id: 313, name: 'Bruce Palmer'},\n *         {id: 456, name: 'Stephen Stills'},\n *         {id: 177, name: 'Neil Young'}],\n *        [177, 456, 999]\n *      );\n *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]\n */\n\nvar innerJoin =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function innerJoin(pred, xs, ys) {\n  return Object(_internal_filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function (x) {\n    return Object(_internal_containsWith__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pred, x, ys);\n  }, xs);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (innerJoin);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/innerJoin.js?");

/***/ }),

/***/ "./node_modules/ramda/es/insert.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/insert.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Inserts the supplied element into the list, at the specified `index`. _Note that\n\n * this is not destructive_: it returns a copy of the list with the changes.\n * <small>No lists have been harmed in the application of this function.</small>\n *\n * @func\n * @memberOf R\n * @since v0.2.2\n * @category List\n * @sig Number -> a -> [a] -> [a]\n * @param {Number} index The position to insert the element\n * @param {*} elt The element to insert into the Array\n * @param {Array} list The list to insert into\n * @return {Array} A new Array with `elt` inserted at `index`.\n * @example\n *\n *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]\n */\n\nvar insert =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function insert(idx, elt, list) {\n  idx = idx < list.length && idx >= 0 ? idx : list.length;\n  var result = Array.prototype.slice.call(list, 0);\n  result.splice(idx, 0, elt);\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insert);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/insert.js?");

/***/ }),

/***/ "./node_modules/ramda/es/insertAll.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/insertAll.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Inserts the sub-list into the list, at the specified `index`. _Note that this is not\n * destructive_: it returns a copy of the list with the changes.\n * <small>No lists have been harmed in the application of this function.</small>\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category List\n * @sig Number -> [a] -> [a] -> [a]\n * @param {Number} index The position to insert the sub-list\n * @param {Array} elts The sub-list to insert into the Array\n * @param {Array} list The list to insert the sub-list into\n * @return {Array} A new Array with `elts` inserted starting at `index`.\n * @example\n *\n *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]\n */\n\nvar insertAll =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function insertAll(idx, elts, list) {\n  idx = idx < list.length && idx >= 0 ? idx : list.length;\n  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertAll);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/insertAll.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_Set.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/internal/_Set.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_contains */ \"./node_modules/ramda/es/internal/_contains.js\");\n\n\nvar _Set =\n/*#__PURE__*/\nfunction () {\n  function _Set() {\n    /* globals Set */\n    this._nativeSet = typeof Set === 'function' ? new Set() : null;\n    this._items = {};\n  } // until we figure out why jsdoc chokes on this\n  // @param item The item to add to the Set\n  // @returns {boolean} true if the item did not exist prior, otherwise false\n  //\n\n\n  _Set.prototype.add = function (item) {\n    return !hasOrAdd(item, true, this);\n  }; //\n  // @param item The item to check for existence in the Set\n  // @returns {boolean} true if the item exists in the Set, otherwise false\n  //\n\n\n  _Set.prototype.has = function (item) {\n    return hasOrAdd(item, false, this);\n  }; //\n  // Combines the logic for checking whether an item is a member of the set and\n  // for adding a new item to the set.\n  //\n  // @param item       The item to check or add to the Set instance.\n  // @param shouldAdd  If true, the item will be added to the set if it doesn't\n  //                   already exist.\n  // @param set        The set instance to check or add to.\n  // @return {boolean} true if the item already existed, otherwise false.\n  //\n\n\n  return _Set;\n}();\n\nfunction hasOrAdd(item, shouldAdd, set) {\n  var type = typeof item;\n  var prevSize, newSize;\n\n  switch (type) {\n    case 'string':\n    case 'number':\n      // distinguish between +0 and -0\n      if (item === 0 && 1 / item === -Infinity) {\n        if (set._items['-0']) {\n          return true;\n        } else {\n          if (shouldAdd) {\n            set._items['-0'] = true;\n          }\n\n          return false;\n        }\n      } // these types can all utilise the native Set\n\n\n      if (set._nativeSet !== null) {\n        if (shouldAdd) {\n          prevSize = set._nativeSet.size;\n\n          set._nativeSet.add(item);\n\n          newSize = set._nativeSet.size;\n          return newSize === prevSize;\n        } else {\n          return set._nativeSet.has(item);\n        }\n      } else {\n        if (!(type in set._items)) {\n          if (shouldAdd) {\n            set._items[type] = {};\n            set._items[type][item] = true;\n          }\n\n          return false;\n        } else if (item in set._items[type]) {\n          return true;\n        } else {\n          if (shouldAdd) {\n            set._items[type][item] = true;\n          }\n\n          return false;\n        }\n      }\n\n    case 'boolean':\n      // set._items['boolean'] holds a two element array\n      // representing [ falseExists, trueExists ]\n      if (type in set._items) {\n        var bIdx = item ? 1 : 0;\n\n        if (set._items[type][bIdx]) {\n          return true;\n        } else {\n          if (shouldAdd) {\n            set._items[type][bIdx] = true;\n          }\n\n          return false;\n        }\n      } else {\n        if (shouldAdd) {\n          set._items[type] = item ? [false, true] : [true, false];\n        }\n\n        return false;\n      }\n\n    case 'function':\n      // compare functions for reference equality\n      if (set._nativeSet !== null) {\n        if (shouldAdd) {\n          prevSize = set._nativeSet.size;\n\n          set._nativeSet.add(item);\n\n          newSize = set._nativeSet.size;\n          return newSize === prevSize;\n        } else {\n          return set._nativeSet.has(item);\n        }\n      } else {\n        if (!(type in set._items)) {\n          if (shouldAdd) {\n            set._items[type] = [item];\n          }\n\n          return false;\n        }\n\n        if (!Object(_contains__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, set._items[type])) {\n          if (shouldAdd) {\n            set._items[type].push(item);\n          }\n\n          return false;\n        }\n\n        return true;\n      }\n\n    case 'undefined':\n      if (set._items[type]) {\n        return true;\n      } else {\n        if (shouldAdd) {\n          set._items[type] = true;\n        }\n\n        return false;\n      }\n\n    case 'object':\n      if (item === null) {\n        if (!set._items['null']) {\n          if (shouldAdd) {\n            set._items['null'] = true;\n          }\n\n          return false;\n        }\n\n        return true;\n      }\n\n    /* falls through */\n\n    default:\n      // reduce the search size of heterogeneous sets by creating buckets\n      // for each type.\n      type = Object.prototype.toString.call(item);\n\n      if (!(type in set._items)) {\n        if (shouldAdd) {\n          set._items[type] = [item];\n        }\n\n        return false;\n      } // scan through all previously applied items\n\n\n      if (!Object(_contains__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, set._items[type])) {\n        if (shouldAdd) {\n          set._items[type].push(item);\n        }\n\n        return false;\n      }\n\n      return true;\n  }\n} // A simple Set type that honours R.equals semantics\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Set);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_Set.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_aperture.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_aperture.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _aperture; });\nfunction _aperture(n, list) {\n  var idx = 0;\n  var limit = list.length - (n - 1);\n  var acc = new Array(limit >= 0 ? limit : 0);\n\n  while (idx < limit) {\n    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);\n    idx += 1;\n  }\n\n  return acc;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_aperture.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_arity.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_arity.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arity; });\nfunction _arity(n, fn) {\n  /* eslint-disable no-unused-vars */\n  switch (n) {\n    case 0:\n      return function () {\n        return fn.apply(this, arguments);\n      };\n\n    case 1:\n      return function (a0) {\n        return fn.apply(this, arguments);\n      };\n\n    case 2:\n      return function (a0, a1) {\n        return fn.apply(this, arguments);\n      };\n\n    case 3:\n      return function (a0, a1, a2) {\n        return fn.apply(this, arguments);\n      };\n\n    case 4:\n      return function (a0, a1, a2, a3) {\n        return fn.apply(this, arguments);\n      };\n\n    case 5:\n      return function (a0, a1, a2, a3, a4) {\n        return fn.apply(this, arguments);\n      };\n\n    case 6:\n      return function (a0, a1, a2, a3, a4, a5) {\n        return fn.apply(this, arguments);\n      };\n\n    case 7:\n      return function (a0, a1, a2, a3, a4, a5, a6) {\n        return fn.apply(this, arguments);\n      };\n\n    case 8:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7) {\n        return fn.apply(this, arguments);\n      };\n\n    case 9:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {\n        return fn.apply(this, arguments);\n      };\n\n    case 10:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {\n        return fn.apply(this, arguments);\n      };\n\n    default:\n      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');\n  }\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_arity.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_arrayFromIterator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ramda/es/internal/_arrayFromIterator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayFromIterator; });\nfunction _arrayFromIterator(iter) {\n  var list = [];\n  var next;\n\n  while (!(next = iter.next()).done) {\n    list.push(next.value);\n  }\n\n  return list;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_arrayFromIterator.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_assign.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_assign.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objectAssign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_objectAssign */ \"./node_modules/ramda/es/internal/_objectAssign.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (typeof Object.assign === 'function' ? Object.assign : _objectAssign__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_assign.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_checkForMethod.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_checkForMethod.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _checkForMethod; });\n/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/es/internal/_isArray.js\");\n\n/**\n * This checks whether a function has a [methodname] function. If it isn't an\n * array it will execute that function otherwise it will default to the ramda\n * implementation.\n *\n * @private\n * @param {Function} fn ramda implemtation\n * @param {String} methodname property to check for a custom implementation\n * @return {Object} Whatever the return value of the method is.\n */\n\nfunction _checkForMethod(methodname, fn) {\n  return function () {\n    var length = arguments.length;\n\n    if (length === 0) {\n      return fn();\n    }\n\n    var obj = arguments[length - 1];\n    return Object(_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_checkForMethod.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_clone.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_clone.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _clone; });\n/* harmony import */ var _cloneRegExp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneRegExp */ \"./node_modules/ramda/es/internal/_cloneRegExp.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ \"./node_modules/ramda/es/type.js\");\n\n\n/**\n * Copies an object.\n *\n * @private\n * @param {*} value The value to be copied\n * @param {Array} refFrom Array containing the source references\n * @param {Array} refTo Array containing the copied source references\n * @param {Boolean} deep Whether or not to perform deep cloning.\n * @return {*} The copied value.\n */\n\nfunction _clone(value, refFrom, refTo, deep) {\n  var copy = function copy(copiedValue) {\n    var len = refFrom.length;\n    var idx = 0;\n\n    while (idx < len) {\n      if (value === refFrom[idx]) {\n        return refTo[idx];\n      }\n\n      idx += 1;\n    }\n\n    refFrom[idx + 1] = value;\n    refTo[idx + 1] = copiedValue;\n\n    for (var key in value) {\n      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];\n    }\n\n    return copiedValue;\n  };\n\n  switch (Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value)) {\n    case 'Object':\n      return copy({});\n\n    case 'Array':\n      return copy([]);\n\n    case 'Date':\n      return new Date(value.valueOf());\n\n    case 'RegExp':\n      return Object(_cloneRegExp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value);\n\n    default:\n      return value;\n  }\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_clone.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_cloneRegExp.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_cloneRegExp.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _cloneRegExp; });\nfunction _cloneRegExp(pattern) {\n  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_cloneRegExp.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_complement.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_complement.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _complement; });\nfunction _complement(f) {\n  return function () {\n    return !f.apply(this, arguments);\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_complement.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_concat.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_concat.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _concat; });\n/**\n * Private `concat` function to merge two array-like objects.\n *\n * @private\n * @param {Array|Arguments} [set1=[]] An array-like object.\n * @param {Array|Arguments} [set2=[]] An array-like object.\n * @return {Array} A new, merged array.\n * @example\n *\n *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]\n */\nfunction _concat(set1, set2) {\n  set1 = set1 || [];\n  set2 = set2 || [];\n  var idx;\n  var len1 = set1.length;\n  var len2 = set2.length;\n  var result = [];\n  idx = 0;\n\n  while (idx < len1) {\n    result[result.length] = set1[idx];\n    idx += 1;\n  }\n\n  idx = 0;\n\n  while (idx < len2) {\n    result[result.length] = set2[idx];\n    idx += 1;\n  }\n\n  return result;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_concat.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_contains.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_contains.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _contains; });\n/* harmony import */ var _indexOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_indexOf */ \"./node_modules/ramda/es/internal/_indexOf.js\");\n\nfunction _contains(a, list) {\n  return Object(_indexOf__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list, a, 0) >= 0;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_contains.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_containsWith.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_containsWith.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _containsWith; });\nfunction _containsWith(pred, x, list) {\n  var idx = 0;\n  var len = list.length;\n\n  while (idx < len) {\n    if (pred(x, list[idx])) {\n      return true;\n    }\n\n    idx += 1;\n  }\n\n  return false;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_containsWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_createPartialApplicator.js":
/*!********************************************************************!*\
  !*** ./node_modules/ramda/es/internal/_createPartialApplicator.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createPartialApplicator; });\n/* harmony import */ var _arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\nfunction _createPartialApplicator(concat) {\n  return Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (fn, args) {\n    return Object(_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Math.max(0, fn.length - args.length), function () {\n      return fn.apply(this, concat(args, arguments));\n    });\n  });\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_createPartialApplicator.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_curry1.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_curry1.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _curry1; });\n/* harmony import */ var _isPlaceholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/es/internal/_isPlaceholder.js\");\n\n/**\n * Optimized internal one-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\nfunction _curry1(fn) {\n  return function f1(a) {\n    if (arguments.length === 0 || Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a)) {\n      return f1;\n    } else {\n      return fn.apply(this, arguments);\n    }\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_curry1.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_curry2.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_curry2.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _curry2; });\n/* harmony import */ var _curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _isPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/es/internal/_isPlaceholder.js\");\n\n\n/**\n * Optimized internal two-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\nfunction _curry2(fn) {\n  return function f2(a, b) {\n    switch (arguments.length) {\n      case 0:\n        return f2;\n\n      case 1:\n        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a) ? f2 : Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (_b) {\n          return fn(a, _b);\n        });\n\n      default:\n        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b) ? f2 : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (_a) {\n          return fn(_a, b);\n        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (_b) {\n          return fn(a, _b);\n        }) : fn(a, b);\n    }\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_curry2.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_curry3.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_curry3.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _curry3; });\n/* harmony import */ var _curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _isPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/es/internal/_isPlaceholder.js\");\n\n\n\n/**\n * Optimized internal three-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\nfunction _curry3(fn) {\n  return function f3(a, b, c) {\n    switch (arguments.length) {\n      case 0:\n        return f3;\n\n      case 1:\n        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a) ? f3 : Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (_b, _c) {\n          return fn(a, _b, _c);\n        });\n\n      case 2:\n        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(b) ? f3 : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (_a, _c) {\n          return fn(_a, b, _c);\n        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(b) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (_b, _c) {\n          return fn(a, _b, _c);\n        }) : Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (_c) {\n          return fn(a, b, _c);\n        });\n\n      default:\n        return Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(b) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(c) ? f3 : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(b) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (_a, _b) {\n          return fn(_a, _b, c);\n        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(c) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (_a, _c) {\n          return fn(_a, b, _c);\n        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(b) && Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(c) ? Object(_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (_b, _c) {\n          return fn(a, _b, _c);\n        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (_a) {\n          return fn(_a, b, c);\n        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(b) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (_b) {\n          return fn(a, _b, c);\n        }) : Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(c) ? Object(_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (_c) {\n          return fn(a, b, _c);\n        }) : fn(a, b, c);\n    }\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_curry3.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_curryN.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_curryN.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _curryN; });\n/* harmony import */ var _arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _isPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/es/internal/_isPlaceholder.js\");\n\n\n/**\n * Internal curryN function.\n *\n * @private\n * @category Function\n * @param {Number} length The arity of the curried function.\n * @param {Array} received An array of arguments received thus far.\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\nfunction _curryN(length, received, fn) {\n  return function () {\n    var combined = [];\n    var argsIdx = 0;\n    var left = length;\n    var combinedIdx = 0;\n\n    while (combinedIdx < received.length || argsIdx < arguments.length) {\n      var result;\n\n      if (combinedIdx < received.length && (!Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(received[combinedIdx]) || argsIdx >= arguments.length)) {\n        result = received[combinedIdx];\n      } else {\n        result = arguments[argsIdx];\n        argsIdx += 1;\n      }\n\n      combined[combinedIdx] = result;\n\n      if (!Object(_isPlaceholder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result)) {\n        left -= 1;\n      }\n\n      combinedIdx += 1;\n    }\n\n    return left <= 0 ? fn.apply(this, combined) : Object(_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(left, _curryN(length, combined, fn));\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_curryN.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_dispatchable.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_dispatchable.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _dispatchable; });\n/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/es/internal/_isArray.js\");\n/* harmony import */ var _isTransformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isTransformer */ \"./node_modules/ramda/es/internal/_isTransformer.js\");\n\n\n/**\n * Returns a function that dispatches with different strategies based on the\n * object in list position (last argument). If it is an array, executes [fn].\n * Otherwise, if it has a function with one of the given method names, it will\n * execute that function (functor case). Otherwise, if it is a transformer,\n * uses transducer [xf] to return a new transformer (transducer case).\n * Otherwise, it will default to executing [fn].\n *\n * @private\n * @param {Array} methodNames properties to check for a custom implementation\n * @param {Function} xf transducer to initialize if object is transformer\n * @param {Function} fn default ramda implementation\n * @return {Function} A function that dispatches on object in list position\n */\n\nfunction _dispatchable(methodNames, xf, fn) {\n  return function () {\n    if (arguments.length === 0) {\n      return fn();\n    }\n\n    var args = Array.prototype.slice.call(arguments, 0);\n    var obj = args.pop();\n\n    if (!Object(_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj)) {\n      var idx = 0;\n\n      while (idx < methodNames.length) {\n        if (typeof obj[methodNames[idx]] === 'function') {\n          return obj[methodNames[idx]].apply(obj, args);\n        }\n\n        idx += 1;\n      }\n\n      if (Object(_isTransformer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj)) {\n        var transducer = xf.apply(null, args);\n        return transducer(obj);\n      }\n    }\n\n    return fn.apply(this, arguments);\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_dispatchable.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_dropLast.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_dropLast.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dropLast; });\n/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../take */ \"./node_modules/ramda/es/take.js\");\n\nfunction dropLast(n, xs) {\n  return Object(_take__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(n < xs.length ? xs.length - n : 0, xs);\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_dropLast.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_dropLastWhile.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_dropLastWhile.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dropLastWhile; });\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slice */ \"./node_modules/ramda/es/slice.js\");\n\nfunction dropLastWhile(pred, xs) {\n  var idx = xs.length - 1;\n\n  while (idx >= 0 && pred(xs[idx])) {\n    idx -= 1;\n  }\n\n  return Object(_slice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, idx + 1, xs);\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_dropLastWhile.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_equals.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_equals.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _equals; });\n/* harmony import */ var _arrayFromIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayFromIterator */ \"./node_modules/ramda/es/internal/_arrayFromIterator.js\");\n/* harmony import */ var _containsWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_containsWith */ \"./node_modules/ramda/es/internal/_containsWith.js\");\n/* harmony import */ var _functionName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functionName */ \"./node_modules/ramda/es/internal/_functionName.js\");\n/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_has */ \"./node_modules/ramda/es/internal/_has.js\");\n/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../identical */ \"./node_modules/ramda/es/identical.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../keys */ \"./node_modules/ramda/es/keys.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type */ \"./node_modules/ramda/es/type.js\");\n\n\n\n\n\n\n\n/**\n * private _uniqContentEquals function.\n * That function is checking equality of 2 iterator contents with 2 assumptions\n * - iterators lengths are the same\n * - iterators values are unique\n *\n * false-positive result will be returned for comparision of, e.g.\n * - [1,2,3] and [1,2,3,4]\n * - [1,1,1] and [1,2,3]\n * */\n\nfunction _uniqContentEquals(aIterator, bIterator, stackA, stackB) {\n  var a = Object(_arrayFromIterator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(aIterator);\n\n  var b = Object(_arrayFromIterator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bIterator);\n\n  function eq(_a, _b) {\n    return _equals(_a, _b, stackA.slice(), stackB.slice());\n  } // if *a* array contains any element that is not included in *b*\n\n\n  return !Object(_containsWith__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (b, aItem) {\n    return !Object(_containsWith__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(eq, aItem, b);\n  }, b, a);\n}\n\nfunction _equals(a, b, stackA, stackB) {\n  if (Object(_identical__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a, b)) {\n    return true;\n  }\n\n  var typeA = Object(_type__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(a);\n\n  if (typeA !== Object(_type__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(b)) {\n    return false;\n  }\n\n  if (a == null || b == null) {\n    return false;\n  }\n\n  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {\n    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);\n  }\n\n  if (typeof a.equals === 'function' || typeof b.equals === 'function') {\n    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);\n  }\n\n  switch (typeA) {\n    case 'Arguments':\n    case 'Array':\n    case 'Object':\n      if (typeof a.constructor === 'function' && Object(_functionName__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a.constructor) === 'Promise') {\n        return a === b;\n      }\n\n      break;\n\n    case 'Boolean':\n    case 'Number':\n    case 'String':\n      if (!(typeof a === typeof b && Object(_identical__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a.valueOf(), b.valueOf()))) {\n        return false;\n      }\n\n      break;\n\n    case 'Date':\n      if (!Object(_identical__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a.valueOf(), b.valueOf())) {\n        return false;\n      }\n\n      break;\n\n    case 'Error':\n      return a.name === b.name && a.message === b.message;\n\n    case 'RegExp':\n      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {\n        return false;\n      }\n\n      break;\n  }\n\n  var idx = stackA.length - 1;\n\n  while (idx >= 0) {\n    if (stackA[idx] === a) {\n      return stackB[idx] === b;\n    }\n\n    idx -= 1;\n  }\n\n  switch (typeA) {\n    case 'Map':\n      if (a.size !== b.size) {\n        return false;\n      }\n\n      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));\n\n    case 'Set':\n      if (a.size !== b.size) {\n        return false;\n      }\n\n      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));\n\n    case 'Arguments':\n    case 'Array':\n    case 'Object':\n    case 'Boolean':\n    case 'Number':\n    case 'String':\n    case 'Date':\n    case 'Error':\n    case 'RegExp':\n    case 'Int8Array':\n    case 'Uint8Array':\n    case 'Uint8ClampedArray':\n    case 'Int16Array':\n    case 'Uint16Array':\n    case 'Int32Array':\n    case 'Uint32Array':\n    case 'Float32Array':\n    case 'Float64Array':\n    case 'ArrayBuffer':\n      break;\n\n    default:\n      // Values of other types are only equal if identical.\n      return false;\n  }\n\n  var keysA = Object(_keys__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(a);\n\n  if (keysA.length !== Object(_keys__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(b).length) {\n    return false;\n  }\n\n  var extendedStackA = stackA.concat([a]);\n  var extendedStackB = stackB.concat([b]);\n  idx = keysA.length - 1;\n\n  while (idx >= 0) {\n    var key = keysA[idx];\n\n    if (!(Object(_has__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {\n      return false;\n    }\n\n    idx -= 1;\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_equals.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_filter.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_filter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _filter; });\nfunction _filter(fn, list) {\n  var idx = 0;\n  var len = list.length;\n  var result = [];\n\n  while (idx < len) {\n    if (fn(list[idx])) {\n      result[result.length] = list[idx];\n    }\n\n    idx += 1;\n  }\n\n  return result;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_filter.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_flatCat.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_flatCat.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forceReduced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_forceReduced */ \"./node_modules/ramda/es/internal/_forceReduced.js\");\n/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike */ \"./node_modules/ramda/es/internal/_isArrayLike.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\n\nvar preservingReduced = function (xf) {\n  return {\n    '@@transducer/init': _xfBase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init,\n    '@@transducer/result': function (result) {\n      return xf['@@transducer/result'](result);\n    },\n    '@@transducer/step': function (result, input) {\n      var ret = xf['@@transducer/step'](result, input);\n      return ret['@@transducer/reduced'] ? Object(_forceReduced__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ret) : ret;\n    }\n  };\n};\n\nvar _flatCat = function _xcat(xf) {\n  var rxf = preservingReduced(xf);\n  return {\n    '@@transducer/init': _xfBase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init,\n    '@@transducer/result': function (result) {\n      return rxf['@@transducer/result'](result);\n    },\n    '@@transducer/step': function (result, input) {\n      return !Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input) ? Object(_reduce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(rxf, result, [input]) : Object(_reduce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(rxf, result, input);\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_flatCat);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_flatCat.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_forceReduced.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_forceReduced.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _forceReduced; });\nfunction _forceReduced(x) {\n  return {\n    '@@transducer/value': x,\n    '@@transducer/reduced': true\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_forceReduced.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_functionName.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_functionName.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _functionName; });\nfunction _functionName(f) {\n  // String(x => x) evaluates to \"x => x\", so the pattern may not match.\n  var match = String(f).match(/^function (\\w*)/);\n  return match == null ? '' : match[1];\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_functionName.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_has.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/internal/_has.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _has; });\nfunction _has(prop, obj) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_has.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_identity.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _identity; });\nfunction _identity(x) {\n  return x;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_identity.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_indexOf.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_indexOf.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _indexOf; });\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../equals */ \"./node_modules/ramda/es/equals.js\");\n\nfunction _indexOf(list, a, idx) {\n  var inf, item; // Array.prototype.indexOf doesn't exist below IE9\n\n  if (typeof list.indexOf === 'function') {\n    switch (typeof a) {\n      case 'number':\n        if (a === 0) {\n          // manually crawl the list to distinguish between +0 and -0\n          inf = 1 / a;\n\n          while (idx < list.length) {\n            item = list[idx];\n\n            if (item === 0 && 1 / item === inf) {\n              return idx;\n            }\n\n            idx += 1;\n          }\n\n          return -1;\n        } else if (a !== a) {\n          // NaN\n          while (idx < list.length) {\n            item = list[idx];\n\n            if (typeof item === 'number' && item !== item) {\n              return idx;\n            }\n\n            idx += 1;\n          }\n\n          return -1;\n        } // non-zero numbers can utilise Set\n\n\n        return list.indexOf(a, idx);\n      // all these types can utilise Set\n\n      case 'string':\n      case 'boolean':\n      case 'function':\n      case 'undefined':\n        return list.indexOf(a, idx);\n\n      case 'object':\n        if (a === null) {\n          // null can utilise Set\n          return list.indexOf(a, idx);\n        }\n\n    }\n  } // anything else not covered above, defer to R.equals\n\n\n  while (idx < list.length) {\n    if (Object(_equals__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list[idx], a)) {\n      return idx;\n    }\n\n    idx += 1;\n  }\n\n  return -1;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_indexOf.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isArguments.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isArguments.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has */ \"./node_modules/ramda/es/internal/_has.js\");\n\nvar toString = Object.prototype.toString;\n\nvar _isArguments = function () {\n  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {\n    return toString.call(x) === '[object Arguments]';\n  } : function _isArguments(x) {\n    return Object(_has__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('callee', x);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_isArguments);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isArguments.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Tests whether or not an object is an array.\n *\n * @private\n * @param {*} val The object to test.\n * @return {Boolean} `true` if `val` is an array, `false` otherwise.\n * @example\n *\n *      _isArray([]); //=> true\n *      _isArray(null); //=> false\n *      _isArray({}); //=> false\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (Array.isArray || function _isArray(val) {\n  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';\n});\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isArray.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isArrayLike.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/es/internal/_isArray.js\");\n/* harmony import */ var _isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isString */ \"./node_modules/ramda/es/internal/_isString.js\");\n\n\n\n/**\n * Tests whether or not an object is similar to an array.\n *\n * @private\n * @category Type\n * @category List\n * @sig * -> Boolean\n * @param {*} x The object to test.\n * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.\n * @example\n *\n *      _isArrayLike([]); //=> true\n *      _isArrayLike(true); //=> false\n *      _isArrayLike({}); //=> false\n *      _isArrayLike({length: 10}); //=> false\n *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true\n */\n\nvar _isArrayLike =\n/*#__PURE__*/\nObject(_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function isArrayLike(x) {\n  if (Object(_isArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x)) {\n    return true;\n  }\n\n  if (!x) {\n    return false;\n  }\n\n  if (typeof x !== 'object') {\n    return false;\n  }\n\n  if (Object(_isString__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x)) {\n    return false;\n  }\n\n  if (x.nodeType === 1) {\n    return !!x.length;\n  }\n\n  if (x.length === 0) {\n    return true;\n  }\n\n  if (x.length > 0) {\n    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);\n  }\n\n  return false;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_isArrayLike);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isArrayLike.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isFunction.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isFunction; });\nfunction _isFunction(x) {\n  return Object.prototype.toString.call(x) === '[object Function]';\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isFunction.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isInteger.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isInteger.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Determine if the passed argument is an integer.\n *\n * @private\n * @param {*} n\n * @category Type\n * @return {Boolean}\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (Number.isInteger || function _isInteger(n) {\n  return n << 0 === n;\n});\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isInteger.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isNumber.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isNumber.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isNumber; });\nfunction _isNumber(x) {\n  return Object.prototype.toString.call(x) === '[object Number]';\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isNumber.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isObject.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isObject; });\nfunction _isObject(x) {\n  return Object.prototype.toString.call(x) === '[object Object]';\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isObject.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isPlaceholder.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isPlaceholder.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isPlaceholder; });\nfunction _isPlaceholder(a) {\n  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isPlaceholder.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isRegExp.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isRegExp.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isRegExp; });\nfunction _isRegExp(x) {\n  return Object.prototype.toString.call(x) === '[object RegExp]';\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isRegExp.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isString.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isString.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isString; });\nfunction _isString(x) {\n  return Object.prototype.toString.call(x) === '[object String]';\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isString.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isTransformer.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isTransformer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isTransformer; });\nfunction _isTransformer(obj) {\n  return typeof obj['@@transducer/step'] === 'function';\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_isTransformer.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_makeFlat.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_makeFlat.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _makeFlat; });\n/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike */ \"./node_modules/ramda/es/internal/_isArrayLike.js\");\n\n/**\n * `_makeFlat` is a helper function that returns a one-level or fully recursive\n * function based on the flag passed in.\n *\n * @private\n */\n\nfunction _makeFlat(recursive) {\n  return function flatt(list) {\n    var value, jlen, j;\n    var result = [];\n    var idx = 0;\n    var ilen = list.length;\n\n    while (idx < ilen) {\n      if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list[idx])) {\n        value = recursive ? flatt(list[idx]) : list[idx];\n        j = 0;\n        jlen = value.length;\n\n        while (j < jlen) {\n          result[result.length] = value[j];\n          j += 1;\n        }\n      } else {\n        result[result.length] = list[idx];\n      }\n\n      idx += 1;\n    }\n\n    return result;\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_makeFlat.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_map.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/internal/_map.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _map; });\nfunction _map(fn, functor) {\n  var idx = 0;\n  var len = functor.length;\n  var result = Array(len);\n\n  while (idx < len) {\n    result[idx] = fn(functor[idx]);\n    idx += 1;\n  }\n\n  return result;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_map.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_objectAssign.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_objectAssign.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectAssign; });\n/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has */ \"./node_modules/ramda/es/internal/_has.js\");\n // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign\n\nfunction _objectAssign(target) {\n  if (target == null) {\n    throw new TypeError('Cannot convert undefined or null to object');\n  }\n\n  var output = Object(target);\n  var idx = 1;\n  var length = arguments.length;\n\n  while (idx < length) {\n    var source = arguments[idx];\n\n    if (source != null) {\n      for (var nextKey in source) {\n        if (Object(_has__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nextKey, source)) {\n          output[nextKey] = source[nextKey];\n        }\n      }\n    }\n\n    idx += 1;\n  }\n\n  return output;\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_objectAssign.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_of.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/es/internal/_of.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _of; });\nfunction _of(x) {\n  return [x];\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_of.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_pipe.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _pipe; });\nfunction _pipe(f, g) {\n  return function () {\n    return g.call(this, f.apply(this, arguments));\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_pipe.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_pipeP.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_pipeP.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _pipeP; });\nfunction _pipeP(f, g) {\n  return function () {\n    var ctx = this;\n    return f.apply(ctx, arguments).then(function (x) {\n      return g.call(ctx, x);\n    });\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_pipeP.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_quote.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_quote.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _quote; });\nfunction _quote(s) {\n  var escaped = s.replace(/\\\\/g, '\\\\\\\\').replace(/[\\b]/g, '\\\\b') // \\b matches word boundary; [\\b] matches backspace\n  .replace(/\\f/g, '\\\\f').replace(/\\n/g, '\\\\n').replace(/\\r/g, '\\\\r').replace(/\\t/g, '\\\\t').replace(/\\v/g, '\\\\v').replace(/\\0/g, '\\\\0');\n  return '\"' + escaped.replace(/\"/g, '\\\\\"') + '\"';\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_quote.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_reduce.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_reduce.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _reduce; });\n/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike */ \"./node_modules/ramda/es/internal/_isArrayLike.js\");\n/* harmony import */ var _xwrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xwrap */ \"./node_modules/ramda/es/internal/_xwrap.js\");\n/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind */ \"./node_modules/ramda/es/bind.js\");\n\n\n\n\nfunction _arrayReduce(xf, acc, list) {\n  var idx = 0;\n  var len = list.length;\n\n  while (idx < len) {\n    acc = xf['@@transducer/step'](acc, list[idx]);\n\n    if (acc && acc['@@transducer/reduced']) {\n      acc = acc['@@transducer/value'];\n      break;\n    }\n\n    idx += 1;\n  }\n\n  return xf['@@transducer/result'](acc);\n}\n\nfunction _iterableReduce(xf, acc, iter) {\n  var step = iter.next();\n\n  while (!step.done) {\n    acc = xf['@@transducer/step'](acc, step.value);\n\n    if (acc && acc['@@transducer/reduced']) {\n      acc = acc['@@transducer/value'];\n      break;\n    }\n\n    step = iter.next();\n  }\n\n  return xf['@@transducer/result'](acc);\n}\n\nfunction _methodReduce(xf, acc, obj, methodName) {\n  return xf['@@transducer/result'](obj[methodName](Object(_bind__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(xf['@@transducer/step'], xf), acc));\n}\n\nvar symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';\nfunction _reduce(fn, acc, list) {\n  if (typeof fn === 'function') {\n    fn = Object(_xwrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn);\n  }\n\n  if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list)) {\n    return _arrayReduce(fn, acc, list);\n  }\n\n  if (typeof list['fantasy-land/reduce'] === 'function') {\n    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');\n  }\n\n  if (list[symIterator] != null) {\n    return _iterableReduce(fn, acc, list[symIterator]());\n  }\n\n  if (typeof list.next === 'function') {\n    return _iterableReduce(fn, acc, list);\n  }\n\n  if (typeof list.reduce === 'function') {\n    return _methodReduce(fn, acc, list, 'reduce');\n  }\n\n  throw new TypeError('reduce: list must be array or iterable');\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_reduce.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_reduced.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_reduced.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _reduced; });\nfunction _reduced(x) {\n  return x && x['@@transducer/reduced'] ? x : {\n    '@@transducer/value': x,\n    '@@transducer/reduced': true\n  };\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_reduced.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_stepCat.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_stepCat.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _stepCat; });\n/* harmony import */ var _assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assign */ \"./node_modules/ramda/es/internal/_assign.js\");\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_identity */ \"./node_modules/ramda/es/internal/_identity.js\");\n/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isArrayLike */ \"./node_modules/ramda/es/internal/_isArrayLike.js\");\n/* harmony import */ var _isTransformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isTransformer */ \"./node_modules/ramda/es/internal/_isTransformer.js\");\n/* harmony import */ var _objOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objOf */ \"./node_modules/ramda/es/objOf.js\");\n\n\n\n\n\nvar _stepCatArray = {\n  '@@transducer/init': Array,\n  '@@transducer/step': function (xs, x) {\n    xs.push(x);\n    return xs;\n  },\n  '@@transducer/result': _identity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nvar _stepCatString = {\n  '@@transducer/init': String,\n  '@@transducer/step': function (a, b) {\n    return a + b;\n  },\n  '@@transducer/result': _identity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nvar _stepCatObject = {\n  '@@transducer/init': Object,\n  '@@transducer/step': function (result, input) {\n    return Object(_assign__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(result, Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input) ? Object(_objOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(input[0], input[1]) : input);\n  },\n  '@@transducer/result': _identity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nfunction _stepCat(obj) {\n  if (Object(_isTransformer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj)) {\n    return obj;\n  }\n\n  if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj)) {\n    return _stepCatArray;\n  }\n\n  if (typeof obj === 'string') {\n    return _stepCatString;\n  }\n\n  if (typeof obj === 'object') {\n    return _stepCatObject;\n  }\n\n  throw new Error('Cannot create transformer for ' + obj);\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_stepCat.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_toISOString.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_toISOString.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.\n */\nvar pad = function pad(n) {\n  return (n < 10 ? '0' : '') + n;\n};\n\nvar _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {\n  return d.toISOString();\n} : function _toISOString(d) {\n  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_toISOString);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_toISOString.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_toString.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_toString.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toString; });\n/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_contains */ \"./node_modules/ramda/es/internal/_contains.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_map */ \"./node_modules/ramda/es/internal/_map.js\");\n/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_quote */ \"./node_modules/ramda/es/internal/_quote.js\");\n/* harmony import */ var _toISOString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toISOString */ \"./node_modules/ramda/es/internal/_toISOString.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../keys */ \"./node_modules/ramda/es/keys.js\");\n/* harmony import */ var _reject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reject */ \"./node_modules/ramda/es/reject.js\");\n\n\n\n\n\n\nfunction _toString(x, seen) {\n  var recur = function recur(y) {\n    var xs = seen.concat([x]);\n    return Object(_contains__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(y, xs) ? '<Circular>' : _toString(y, xs);\n  }; //  mapPairs :: (Object, [String]) -> [String]\n\n\n  var mapPairs = function (obj, keys) {\n    return Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (k) {\n      return Object(_quote__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(k) + ': ' + recur(obj[k]);\n    }, keys.slice().sort());\n  };\n\n  switch (Object.prototype.toString.call(x)) {\n    case '[object Arguments]':\n      return '(function() { return arguments; }(' + Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(recur, x).join(', ') + '))';\n\n    case '[object Array]':\n      return '[' + Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(recur, x).concat(mapPairs(x, Object(_reject__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function (k) {\n        return /^\\d+$/.test(k);\n      }, Object(_keys__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(x)))).join(', ') + ']';\n\n    case '[object Boolean]':\n      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();\n\n    case '[object Date]':\n      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : Object(_quote__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_toISOString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(x))) + ')';\n\n    case '[object Null]':\n      return 'null';\n\n    case '[object Number]':\n      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);\n\n    case '[object String]':\n      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : Object(_quote__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x);\n\n    case '[object Undefined]':\n      return 'undefined';\n\n    default:\n      if (typeof x.toString === 'function') {\n        var repr = x.toString();\n\n        if (repr !== '[object Object]') {\n          return repr;\n        }\n      }\n\n      return '{' + mapPairs(x, Object(_keys__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(x)).join(', ') + '}';\n  }\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_toString.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xall.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xall.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ \"./node_modules/ramda/es/internal/_reduced.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\nvar XAll =\n/*#__PURE__*/\nfunction () {\n  function XAll(f, xf) {\n    this.xf = xf;\n    this.f = f;\n    this.all = true;\n  }\n\n  XAll.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init;\n\n  XAll.prototype['@@transducer/result'] = function (result) {\n    if (this.all) {\n      result = this.xf['@@transducer/step'](result, true);\n    }\n\n    return this.xf['@@transducer/result'](result);\n  };\n\n  XAll.prototype['@@transducer/step'] = function (result, input) {\n    if (!this.f(input)) {\n      this.all = false;\n      result = Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.xf['@@transducer/step'](result, false));\n    }\n\n    return result;\n  };\n\n  return XAll;\n}();\n\nvar _xall =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xall(f, xf) {\n  return new XAll(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xall);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xall.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xany.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xany.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ \"./node_modules/ramda/es/internal/_reduced.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\nvar XAny =\n/*#__PURE__*/\nfunction () {\n  function XAny(f, xf) {\n    this.xf = xf;\n    this.f = f;\n    this.any = false;\n  }\n\n  XAny.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init;\n\n  XAny.prototype['@@transducer/result'] = function (result) {\n    if (!this.any) {\n      result = this.xf['@@transducer/step'](result, false);\n    }\n\n    return this.xf['@@transducer/result'](result);\n  };\n\n  XAny.prototype['@@transducer/step'] = function (result, input) {\n    if (this.f(input)) {\n      this.any = true;\n      result = Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.xf['@@transducer/step'](result, true));\n    }\n\n    return result;\n  };\n\n  return XAny;\n}();\n\nvar _xany =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xany(f, xf) {\n  return new XAny(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xany);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xany.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xaperture.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xaperture.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\nvar XAperture =\n/*#__PURE__*/\nfunction () {\n  function XAperture(n, xf) {\n    this.xf = xf;\n    this.pos = 0;\n    this.full = false;\n    this.acc = new Array(n);\n  }\n\n  XAperture.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init;\n\n  XAperture.prototype['@@transducer/result'] = function (result) {\n    this.acc = null;\n    return this.xf['@@transducer/result'](result);\n  };\n\n  XAperture.prototype['@@transducer/step'] = function (result, input) {\n    this.store(input);\n    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;\n  };\n\n  XAperture.prototype.store = function (input) {\n    this.acc[this.pos] = input;\n    this.pos += 1;\n\n    if (this.pos === this.acc.length) {\n      this.pos = 0;\n      this.full = true;\n    }\n  };\n\n  XAperture.prototype.getCopy = function () {\n    return Object(_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));\n  };\n\n  return XAperture;\n}();\n\nvar _xaperture =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function _xaperture(n, xf) {\n  return new XAperture(n, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xaperture);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xaperture.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xchain.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xchain.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _flatCat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatCat */ \"./node_modules/ramda/es/internal/_flatCat.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map */ \"./node_modules/ramda/es/map.js\");\n\n\n\n\nvar _xchain =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xchain(f, xf) {\n  return Object(_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(f, Object(_flatCat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(xf));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xchain);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xchain.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdrop.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdrop.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\nvar XDrop =\n/*#__PURE__*/\nfunction () {\n  function XDrop(n, xf) {\n    this.xf = xf;\n    this.n = n;\n  }\n\n  XDrop.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init;\n  XDrop.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].result;\n\n  XDrop.prototype['@@transducer/step'] = function (result, input) {\n    if (this.n > 0) {\n      this.n -= 1;\n      return result;\n    }\n\n    return this.xf['@@transducer/step'](result, input);\n  };\n\n  return XDrop;\n}();\n\nvar _xdrop =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xdrop(n, xf) {\n  return new XDrop(n, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xdrop);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xdrop.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdropLast.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdropLast.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\nvar XDropLast =\n/*#__PURE__*/\nfunction () {\n  function XDropLast(n, xf) {\n    this.xf = xf;\n    this.pos = 0;\n    this.full = false;\n    this.acc = new Array(n);\n  }\n\n  XDropLast.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init;\n\n  XDropLast.prototype['@@transducer/result'] = function (result) {\n    this.acc = null;\n    return this.xf['@@transducer/result'](result);\n  };\n\n  XDropLast.prototype['@@transducer/step'] = function (result, input) {\n    if (this.full) {\n      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);\n    }\n\n    this.store(input);\n    return result;\n  };\n\n  XDropLast.prototype.store = function (input) {\n    this.acc[this.pos] = input;\n    this.pos += 1;\n\n    if (this.pos === this.acc.length) {\n      this.pos = 0;\n      this.full = true;\n    }\n  };\n\n  return XDropLast;\n}();\n\nvar _xdropLast =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xdropLast(n, xf) {\n  return new XDropLast(n, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xdropLast);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xdropLast.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdropLastWhile.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdropLastWhile.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\nvar XDropLastWhile =\n/*#__PURE__*/\nfunction () {\n  function XDropLastWhile(fn, xf) {\n    this.f = fn;\n    this.retained = [];\n    this.xf = xf;\n  }\n\n  XDropLastWhile.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init;\n\n  XDropLastWhile.prototype['@@transducer/result'] = function (result) {\n    this.retained = null;\n    return this.xf['@@transducer/result'](result);\n  };\n\n  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {\n    return this.f(input) ? this.retain(result, input) : this.flush(result, input);\n  };\n\n  XDropLastWhile.prototype.flush = function (result, input) {\n    result = Object(_reduce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.xf['@@transducer/step'], result, this.retained);\n    this.retained = [];\n    return this.xf['@@transducer/step'](result, input);\n  };\n\n  XDropLastWhile.prototype.retain = function (result, input) {\n    this.retained.push(input);\n    return result;\n  };\n\n  return XDropLastWhile;\n}();\n\nvar _xdropLastWhile =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xdropLastWhile(fn, xf) {\n  return new XDropLastWhile(fn, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xdropLastWhile);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xdropLastWhile.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdropRepeatsWith.js":
/*!*************************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdropRepeatsWith.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\nvar XDropRepeatsWith =\n/*#__PURE__*/\nfunction () {\n  function XDropRepeatsWith(pred, xf) {\n    this.xf = xf;\n    this.pred = pred;\n    this.lastValue = undefined;\n    this.seenFirstValue = false;\n  }\n\n  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init;\n  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].result;\n\n  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {\n    var sameAsLast = false;\n\n    if (!this.seenFirstValue) {\n      this.seenFirstValue = true;\n    } else if (this.pred(this.lastValue, input)) {\n      sameAsLast = true;\n    }\n\n    this.lastValue = input;\n    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);\n  };\n\n  return XDropRepeatsWith;\n}();\n\nvar _xdropRepeatsWith =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xdropRepeatsWith(pred, xf) {\n  return new XDropRepeatsWith(pred, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xdropRepeatsWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xdropRepeatsWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xdropWhile.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xdropWhile.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\nvar XDropWhile =\n/*#__PURE__*/\nfunction () {\n  function XDropWhile(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n\n  XDropWhile.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init;\n  XDropWhile.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].result;\n\n  XDropWhile.prototype['@@transducer/step'] = function (result, input) {\n    if (this.f) {\n      if (this.f(input)) {\n        return result;\n      }\n\n      this.f = null;\n    }\n\n    return this.xf['@@transducer/step'](result, input);\n  };\n\n  return XDropWhile;\n}();\n\nvar _xdropWhile =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xdropWhile(f, xf) {\n  return new XDropWhile(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xdropWhile);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xdropWhile.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfBase.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfBase.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: function () {\n    return this.xf['@@transducer/init']();\n  },\n  result: function (result) {\n    return this.xf['@@transducer/result'](result);\n  }\n});\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xfBase.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfilter.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfilter.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\nvar XFilter =\n/*#__PURE__*/\nfunction () {\n  function XFilter(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n\n  XFilter.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init;\n  XFilter.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].result;\n\n  XFilter.prototype['@@transducer/step'] = function (result, input) {\n    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;\n  };\n\n  return XFilter;\n}();\n\nvar _xfilter =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xfilter(f, xf) {\n  return new XFilter(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xfilter);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xfilter.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfind.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfind.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ \"./node_modules/ramda/es/internal/_reduced.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\nvar XFind =\n/*#__PURE__*/\nfunction () {\n  function XFind(f, xf) {\n    this.xf = xf;\n    this.f = f;\n    this.found = false;\n  }\n\n  XFind.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init;\n\n  XFind.prototype['@@transducer/result'] = function (result) {\n    if (!this.found) {\n      result = this.xf['@@transducer/step'](result, void 0);\n    }\n\n    return this.xf['@@transducer/result'](result);\n  };\n\n  XFind.prototype['@@transducer/step'] = function (result, input) {\n    if (this.f(input)) {\n      this.found = true;\n      result = Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.xf['@@transducer/step'](result, input));\n    }\n\n    return result;\n  };\n\n  return XFind;\n}();\n\nvar _xfind =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xfind(f, xf) {\n  return new XFind(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xfind);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xfind.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfindIndex.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfindIndex.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ \"./node_modules/ramda/es/internal/_reduced.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\nvar XFindIndex =\n/*#__PURE__*/\nfunction () {\n  function XFindIndex(f, xf) {\n    this.xf = xf;\n    this.f = f;\n    this.idx = -1;\n    this.found = false;\n  }\n\n  XFindIndex.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init;\n\n  XFindIndex.prototype['@@transducer/result'] = function (result) {\n    if (!this.found) {\n      result = this.xf['@@transducer/step'](result, -1);\n    }\n\n    return this.xf['@@transducer/result'](result);\n  };\n\n  XFindIndex.prototype['@@transducer/step'] = function (result, input) {\n    this.idx += 1;\n\n    if (this.f(input)) {\n      this.found = true;\n      result = Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.xf['@@transducer/step'](result, this.idx));\n    }\n\n    return result;\n  };\n\n  return XFindIndex;\n}();\n\nvar _xfindIndex =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xfindIndex(f, xf) {\n  return new XFindIndex(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xfindIndex);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xfindIndex.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfindLast.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfindLast.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\nvar XFindLast =\n/*#__PURE__*/\nfunction () {\n  function XFindLast(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n\n  XFindLast.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init;\n\n  XFindLast.prototype['@@transducer/result'] = function (result) {\n    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));\n  };\n\n  XFindLast.prototype['@@transducer/step'] = function (result, input) {\n    if (this.f(input)) {\n      this.last = input;\n    }\n\n    return result;\n  };\n\n  return XFindLast;\n}();\n\nvar _xfindLast =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xfindLast(f, xf) {\n  return new XFindLast(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xfindLast);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xfindLast.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xfindLastIndex.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xfindLastIndex.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\nvar XFindLastIndex =\n/*#__PURE__*/\nfunction () {\n  function XFindLastIndex(f, xf) {\n    this.xf = xf;\n    this.f = f;\n    this.idx = -1;\n    this.lastIdx = -1;\n  }\n\n  XFindLastIndex.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init;\n\n  XFindLastIndex.prototype['@@transducer/result'] = function (result) {\n    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));\n  };\n\n  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {\n    this.idx += 1;\n\n    if (this.f(input)) {\n      this.lastIdx = this.idx;\n    }\n\n    return result;\n  };\n\n  return XFindLastIndex;\n}();\n\nvar _xfindLastIndex =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xfindLastIndex(f, xf) {\n  return new XFindLastIndex(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xfindLastIndex);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xfindLastIndex.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xmap.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xmap.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\nvar XMap =\n/*#__PURE__*/\nfunction () {\n  function XMap(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n\n  XMap.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init;\n  XMap.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].result;\n\n  XMap.prototype['@@transducer/step'] = function (result, input) {\n    return this.xf['@@transducer/step'](result, this.f(input));\n  };\n\n  return XMap;\n}();\n\nvar _xmap =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xmap(f, xf) {\n  return new XMap(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xmap);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xmap.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xreduceBy.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xreduceBy.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curryN */ \"./node_modules/ramda/es/internal/_curryN.js\");\n/* harmony import */ var _has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has */ \"./node_modules/ramda/es/internal/_has.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\nvar XReduceBy =\n/*#__PURE__*/\nfunction () {\n  function XReduceBy(valueFn, valueAcc, keyFn, xf) {\n    this.valueFn = valueFn;\n    this.valueAcc = valueAcc;\n    this.keyFn = keyFn;\n    this.xf = xf;\n    this.inputs = {};\n  }\n\n  XReduceBy.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init;\n\n  XReduceBy.prototype['@@transducer/result'] = function (result) {\n    var key;\n\n    for (key in this.inputs) {\n      if (Object(_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(key, this.inputs)) {\n        result = this.xf['@@transducer/step'](result, this.inputs[key]);\n\n        if (result['@@transducer/reduced']) {\n          result = result['@@transducer/value'];\n          break;\n        }\n      }\n    }\n\n    this.inputs = null;\n    return this.xf['@@transducer/result'](result);\n  };\n\n  XReduceBy.prototype['@@transducer/step'] = function (result, input) {\n    var key = this.keyFn(input);\n    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];\n    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);\n    return result;\n  };\n\n  return XReduceBy;\n}();\n\nvar _xreduceBy =\n/*#__PURE__*/\nObject(_curryN__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {\n  return new XReduceBy(valueFn, valueAcc, keyFn, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xreduceBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xreduceBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xtake.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xtake.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ \"./node_modules/ramda/es/internal/_reduced.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\nvar XTake =\n/*#__PURE__*/\nfunction () {\n  function XTake(n, xf) {\n    this.xf = xf;\n    this.n = n;\n    this.i = 0;\n  }\n\n  XTake.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init;\n  XTake.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].result;\n\n  XTake.prototype['@@transducer/step'] = function (result, input) {\n    this.i += 1;\n    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);\n    return this.n >= 0 && this.i >= this.n ? Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ret) : ret;\n  };\n\n  return XTake;\n}();\n\nvar _xtake =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xtake(n, xf) {\n  return new XTake(n, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xtake);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xtake.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xtakeWhile.js":
/*!*******************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xtakeWhile.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_reduced */ \"./node_modules/ramda/es/internal/_reduced.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\n\nvar XTakeWhile =\n/*#__PURE__*/\nfunction () {\n  function XTakeWhile(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n\n  XTakeWhile.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init;\n  XTakeWhile.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"].result;\n\n  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {\n    return this.f(input) ? this.xf['@@transducer/step'](result, input) : Object(_reduced__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result);\n  };\n\n  return XTakeWhile;\n}();\n\nvar _xtakeWhile =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xtakeWhile(f, xf) {\n  return new XTakeWhile(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xtakeWhile);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xtakeWhile.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xtap.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xtap.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _xfBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/es/internal/_xfBase.js\");\n\n\n\nvar XTap =\n/*#__PURE__*/\nfunction () {\n  function XTap(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n\n  XTap.prototype['@@transducer/init'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init;\n  XTap.prototype['@@transducer/result'] = _xfBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].result;\n\n  XTap.prototype['@@transducer/step'] = function (result, input) {\n    this.f(input);\n    return this.xf['@@transducer/step'](result, input);\n  };\n\n  return XTap;\n}();\n\nvar _xtap =\n/*#__PURE__*/\nObject(_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function _xtap(f, xf) {\n  return new XTap(f, xf);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_xtap);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xtap.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_xwrap.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_xwrap.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _xwrap; });\nvar XWrap =\n/*#__PURE__*/\nfunction () {\n  function XWrap(fn) {\n    this.f = fn;\n  }\n\n  XWrap.prototype['@@transducer/init'] = function () {\n    throw new Error('init not implemented on XWrap');\n  };\n\n  XWrap.prototype['@@transducer/result'] = function (acc) {\n    return acc;\n  };\n\n  XWrap.prototype['@@transducer/step'] = function (acc, x) {\n    return this.f(acc, x);\n  };\n\n  return XWrap;\n}();\n\nfunction _xwrap(fn) {\n  return new XWrap(fn);\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/internal/_xwrap.js?");

/***/ }),

/***/ "./node_modules/ramda/es/intersection.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/es/intersection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_contains */ \"./node_modules/ramda/es/internal/_contains.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_filter */ \"./node_modules/ramda/es/internal/_filter.js\");\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flip */ \"./node_modules/ramda/es/flip.js\");\n/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uniq */ \"./node_modules/ramda/es/uniq.js\");\n\n\n\n\n\n/**\n * Combines two lists into a set (i.e. no duplicates) composed of those\n * elements common to both lists.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig [*] -> [*] -> [*]\n * @param {Array} list1 The first list.\n * @param {Array} list2 The second list.\n * @return {Array} The list of elements found in both `list1` and `list2`.\n * @see R.innerJoin\n * @example\n *\n *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]\n */\n\nvar intersection =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function intersection(list1, list2) {\n  var lookupList, filteredList;\n\n  if (list1.length > list2.length) {\n    lookupList = list1;\n    filteredList = list2;\n  } else {\n    lookupList = list2;\n    filteredList = list1;\n  }\n\n  return Object(_uniq__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_internal_filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_flip__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lookupList), filteredList));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (intersection);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/intersection.js?");

/***/ }),

/***/ "./node_modules/ramda/es/intersperse.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/intersperse.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/es/internal/_checkForMethod.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Creates a new list with the separator interposed between elements.\n *\n * Dispatches to the `intersperse` method of the second argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category List\n * @sig a -> [a] -> [a]\n * @param {*} separator The element to add to the list.\n * @param {Array} list The list to be interposed.\n * @return {Array} The new list.\n * @example\n *\n *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']\n */\n\nvar intersperse =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('intersperse', function intersperse(separator, list) {\n  var out = [];\n  var idx = 0;\n  var length = list.length;\n\n  while (idx < length) {\n    if (idx === length - 1) {\n      out.push(list[idx]);\n    } else {\n      out.push(list[idx], separator);\n    }\n\n    idx += 1;\n  }\n\n  return out;\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (intersperse);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/intersperse.js?");

/***/ }),

/***/ "./node_modules/ramda/es/into.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/into.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_clone */ \"./node_modules/ramda/es/internal/_clone.js\");\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _internal_isTransformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isTransformer */ \"./node_modules/ramda/es/internal/_isTransformer.js\");\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _internal_stepCat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_stepCat */ \"./node_modules/ramda/es/internal/_stepCat.js\");\n\n\n\n\n\n/**\n * Transforms the items of the list with the transducer and appends the\n * transformed items to the accumulator using an appropriate iterator function\n * based on the accumulator type.\n *\n * The accumulator can be an array, string, object or a transformer. Iterated\n * items will be appended to arrays and concatenated to strings. Objects will\n * be merged directly or 2-item arrays will be merged as key, value pairs.\n *\n * The accumulator can also be a transformer object that provides a 2-arity\n * reducing iterator function, step, 0-arity initial value function, init, and\n * 1-arity result extraction function result. The step function is used as the\n * iterator function in reduce. The result function is used to convert the\n * final accumulator into the return type and in most cases is R.identity. The\n * init function is used to provide the initial accumulator.\n *\n * The iteration is performed with [`R.reduce`](#reduce) after initializing the\n * transducer.\n *\n * @func\n * @memberOf R\n * @since v0.12.0\n * @category List\n * @sig a -> (b -> b) -> [c] -> a\n * @param {*} acc The initial accumulator value.\n * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @example\n *\n *      var numbers = [1, 2, 3, 4];\n *      var transducer = R.compose(R.map(R.add(1)), R.take(2));\n *\n *      R.into([], transducer, numbers); //=> [2, 3]\n *\n *      var intoArray = R.into([]);\n *      intoArray(transducer, numbers); //=> [2, 3]\n */\n\nvar into =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function into(acc, xf, list) {\n  return Object(_internal_isTransformer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(acc) ? Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(xf(acc), acc['@@transducer/init'](), list) : Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(xf(Object(_internal_stepCat__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(acc)), Object(_internal_clone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(acc, [], [], false), list);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (into);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/into.js?");

/***/ }),

/***/ "./node_modules/ramda/es/invert.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/invert.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ \"./node_modules/ramda/es/keys.js\");\n\n\n\n/**\n * Same as [`R.invertObj`](#invertObj), however this accounts for objects with\n * duplicate values by putting the values into an array.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Object\n * @sig {s: x} -> {x: [ s, ... ]}\n * @param {Object} obj The object or array to invert\n * @return {Object} out A new object with keys in an array.\n * @see R.invertObj\n * @example\n *\n *      var raceResultsByFirstName = {\n *        first: 'alice',\n *        second: 'jake',\n *        third: 'alice',\n *      };\n *      R.invert(raceResultsByFirstName);\n *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }\n */\n\nvar invert =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function invert(obj) {\n  var props = Object(_keys__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj);\n  var len = props.length;\n  var idx = 0;\n  var out = {};\n\n  while (idx < len) {\n    var key = props[idx];\n    var val = obj[key];\n    var list = Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(val, out) ? out[val] : out[val] = [];\n    list[list.length] = key;\n    idx += 1;\n  }\n\n  return out;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (invert);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/invert.js?");

/***/ }),

/***/ "./node_modules/ramda/es/invertObj.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/invertObj.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./node_modules/ramda/es/keys.js\");\n\n\n/**\n * Returns a new object with the keys of the given object as values, and the\n * values of the given object, which are coerced to strings, as keys. Note\n * that the last key found is preferred when handling the same value.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Object\n * @sig {s: x} -> {x: s}\n * @param {Object} obj The object or array to invert\n * @return {Object} out A new object\n * @see R.invert\n * @example\n *\n *      var raceResults = {\n *        first: 'alice',\n *        second: 'jake'\n *      };\n *      R.invertObj(raceResults);\n *      //=> { 'alice': 'first', 'jake':'second' }\n *\n *      // Alternatively:\n *      var raceResults = ['alice', 'jake'];\n *      R.invertObj(raceResults);\n *      //=> { 'alice': '0', 'jake':'1' }\n */\n\nvar invertObj =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function invertObj(obj) {\n  var props = Object(_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\n  var len = props.length;\n  var idx = 0;\n  var out = {};\n\n  while (idx < len) {\n    var key = props[idx];\n    out[obj[key]] = key;\n    idx += 1;\n  }\n\n  return out;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (invertObj);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/invertObj.js?");

/***/ }),

/***/ "./node_modules/ramda/es/invoker.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/invoker.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isFunction */ \"./node_modules/ramda/es/internal/_isFunction.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString */ \"./node_modules/ramda/es/toString.js\");\n\n\n\n\n/**\n * Turns a named method with a specified arity into a function that can be\n * called directly supplied with arguments and a target object.\n *\n * The returned function is curried and accepts `arity + 1` parameters where\n * the final parameter is the target object.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)\n * @param {Number} arity Number of arguments the returned function should take\n *        before the target object.\n * @param {String} method Name of the method to call.\n * @return {Function} A new curried function.\n * @see R.construct\n * @example\n *\n *      var sliceFrom = R.invoker(1, 'slice');\n *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'\n *      var sliceFrom6 = R.invoker(2, 'slice')(6);\n *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'\n * @symb R.invoker(0, 'method')(o) = o['method']()\n * @symb R.invoker(1, 'method')(a, o) = o['method'](a)\n * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)\n */\n\nvar invoker =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function invoker(arity, method) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arity + 1, function () {\n    var target = arguments[arity];\n\n    if (target != null && Object(_internal_isFunction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target[method])) {\n      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));\n    }\n\n    throw new TypeError(Object(_toString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target) + ' does not have a method named \"' + method + '\"');\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (invoker);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/invoker.js?");

/***/ }),

/***/ "./node_modules/ramda/es/is.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/is.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * See if an object (`val`) is an instance of the supplied constructor. This\n * function will check up the inheritance chain, if any.\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category Type\n * @sig (* -> {*}) -> a -> Boolean\n * @param {Object} ctor A constructor\n * @param {*} val The value to test\n * @return {Boolean}\n * @example\n *\n *      R.is(Object, {}); //=> true\n *      R.is(Number, 1); //=> true\n *      R.is(Object, 1); //=> false\n *      R.is(String, 's'); //=> true\n *      R.is(String, new String('')); //=> true\n *      R.is(Object, new String('')); //=> true\n *      R.is(Object, 's'); //=> false\n *      R.is(Number, {}); //=> false\n */\n\nvar is =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function is(Ctor, val) {\n  return val != null && val.constructor === Ctor || val instanceof Ctor;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (is);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/is.js?");

/***/ }),

/***/ "./node_modules/ramda/es/isEmpty.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/isEmpty.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ \"./node_modules/ramda/es/empty.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n\n\n\n/**\n * Returns `true` if the given value is its type's empty value; `false`\n * otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Logic\n * @sig a -> Boolean\n * @param {*} x\n * @return {Boolean}\n * @see R.empty\n * @example\n *\n *      R.isEmpty([1, 2, 3]);   //=> false\n *      R.isEmpty([]);          //=> true\n *      R.isEmpty('');          //=> true\n *      R.isEmpty(null);        //=> false\n *      R.isEmpty({});          //=> true\n *      R.isEmpty({length: 0}); //=> false\n */\n\nvar isEmpty =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function isEmpty(x) {\n  return x != null && Object(_equals__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x, Object(_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isEmpty);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/isEmpty.js?");

/***/ }),

/***/ "./node_modules/ramda/es/isNil.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/isNil.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Checks if the input value is `null` or `undefined`.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Type\n * @sig * -> Boolean\n * @param {*} x The value to test.\n * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.\n * @example\n *\n *      R.isNil(null); //=> true\n *      R.isNil(undefined); //=> true\n *      R.isNil(0); //=> false\n *      R.isNil([]); //=> false\n */\n\nvar isNil =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function isNil(x) {\n  return x == null;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isNil);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/isNil.js?");

/***/ }),

/***/ "./node_modules/ramda/es/join.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/join.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoker */ \"./node_modules/ramda/es/invoker.js\");\n\n/**\n * Returns a string made by inserting the `separator` between each element and\n * concatenating all the elements into a single string.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig String -> [a] -> String\n * @param {Number|String} separator The string used to separate the elements.\n * @param {Array} xs The elements to join into a string.\n * @return {String} str The string made by concatenating `xs` with `separator`.\n * @see R.split\n * @example\n *\n *      var spacer = R.join(' ');\n *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'\n *      R.join('|', [1, 2, 3]);    //=> '1|2|3'\n */\n\nvar join =\n/*#__PURE__*/\nObject(_invoker__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 'join');\n/* harmony default export */ __webpack_exports__[\"default\"] = (join);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/join.js?");

/***/ }),

/***/ "./node_modules/ramda/es/juxt.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/juxt.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _converge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converge */ \"./node_modules/ramda/es/converge.js\");\n\n\n/**\n * juxt applies a list of functions to a list of values.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category Function\n * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])\n * @param {Array} fns An array of functions\n * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.\n * @see R.applySpec\n * @example\n *\n *      var getRange = R.juxt([Math.min, Math.max]);\n *      getRange(3, 4, 9, -3); //=> [-3, 9]\n * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]\n */\n\nvar juxt =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function juxt(fns) {\n  return Object(_converge__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return Array.prototype.slice.call(arguments, 0);\n  }, fns);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (juxt);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/juxt.js?");

/***/ }),

/***/ "./node_modules/ramda/es/keys.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/keys.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n/* harmony import */ var _internal_isArguments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isArguments */ \"./node_modules/ramda/es/internal/_isArguments.js\");\n\n\n // cover IE < 9 keys issues\n\nvar hasEnumBug = !\n/*#__PURE__*/\n{\n  toString: null\n}.propertyIsEnumerable('toString');\nvar nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug\n\nvar hasArgsEnumBug =\n/*#__PURE__*/\nfunction () {\n  'use strict';\n\n  return arguments.propertyIsEnumerable('length');\n}();\n\nvar contains = function contains(list, item) {\n  var idx = 0;\n\n  while (idx < list.length) {\n    if (list[idx] === item) {\n      return true;\n    }\n\n    idx += 1;\n  }\n\n  return false;\n};\n/**\n * Returns a list containing the names of all the enumerable own properties of\n * the supplied object.\n * Note that the order of the output array is not guaranteed to be consistent\n * across different JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig {k: v} -> [k]\n * @param {Object} obj The object to extract properties from\n * @return {Array} An array of the object's own properties.\n * @see R.keysIn, R.values\n * @example\n *\n *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']\n */\n\n\nvar _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {\n  return Object(obj) !== obj ? [] : Object.keys(obj);\n} : function keys(obj) {\n  if (Object(obj) !== obj) {\n    return [];\n  }\n\n  var prop, nIdx;\n  var ks = [];\n\n  var checkArgsLength = hasArgsEnumBug && Object(_internal_isArguments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj);\n\n  for (prop in obj) {\n    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prop, obj) && (!checkArgsLength || prop !== 'length')) {\n      ks[ks.length] = prop;\n    }\n  }\n\n  if (hasEnumBug) {\n    nIdx = nonEnumerableProps.length - 1;\n\n    while (nIdx >= 0) {\n      prop = nonEnumerableProps[nIdx];\n\n      if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prop, obj) && !contains(ks, prop)) {\n        ks[ks.length] = prop;\n      }\n\n      nIdx -= 1;\n    }\n  }\n\n  return ks;\n};\n\nvar keys =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_keys);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (keys);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/keys.js?");

/***/ }),

/***/ "./node_modules/ramda/es/keysIn.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/keysIn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Returns a list containing the names of all the properties of the supplied\n * object, including prototype properties.\n * Note that the order of the output array is not guaranteed to be consistent\n * across different JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.2.0\n * @category Object\n * @sig {k: v} -> [k]\n * @param {Object} obj The object to extract properties from\n * @return {Array} An array of the object's own and prototype properties.\n * @see R.keys, R.valuesIn\n * @example\n *\n *      var F = function() { this.x = 'X'; };\n *      F.prototype.y = 'Y';\n *      var f = new F();\n *      R.keysIn(f); //=> ['x', 'y']\n */\n\nvar keysIn =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function keysIn(obj) {\n  var prop;\n  var ks = [];\n\n  for (prop in obj) {\n    ks[ks.length] = prop;\n  }\n\n  return ks;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (keysIn);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/keysIn.js?");

/***/ }),

/***/ "./node_modules/ramda/es/last.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/last.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nth */ \"./node_modules/ramda/es/nth.js\");\n\n/**\n * Returns the last element of the given list or string.\n *\n * @func\n * @memberOf R\n * @since v0.1.4\n * @category List\n * @sig [a] -> a | Undefined\n * @sig String -> String\n * @param {*} list\n * @return {*}\n * @see R.init, R.head, R.tail\n * @example\n *\n *      R.last(['fi', 'fo', 'fum']); //=> 'fum'\n *      R.last([]); //=> undefined\n *\n *      R.last('abc'); //=> 'c'\n *      R.last(''); //=> ''\n */\n\nvar last =\n/*#__PURE__*/\nObject(_nth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(-1);\n/* harmony default export */ __webpack_exports__[\"default\"] = (last);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/last.js?");

/***/ }),

/***/ "./node_modules/ramda/es/lastIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/lastIndexOf.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isArray */ \"./node_modules/ramda/es/internal/_isArray.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n\n\n\n/**\n * Returns the position of the last occurrence of an item in an array, or -1 if\n * the item is not included in the array. [`R.equals`](#equals) is used to\n * determine equality.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig a -> [a] -> Number\n * @param {*} target The item to find.\n * @param {Array} xs The array to search in.\n * @return {Number} the index of the target, or -1 if the target is not found.\n * @see R.indexOf\n * @example\n *\n *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6\n *      R.lastIndexOf(10, [1,2,3,4]); //=> -1\n */\n\nvar lastIndexOf =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lastIndexOf(target, xs) {\n  if (typeof xs.lastIndexOf === 'function' && !Object(_internal_isArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(xs)) {\n    return xs.lastIndexOf(target);\n  } else {\n    var idx = xs.length - 1;\n\n    while (idx >= 0) {\n      if (Object(_equals__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(xs[idx], target)) {\n        return idx;\n      }\n\n      idx -= 1;\n    }\n\n    return -1;\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lastIndexOf);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/lastIndexOf.js?");

/***/ }),

/***/ "./node_modules/ramda/es/length.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/length.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isNumber */ \"./node_modules/ramda/es/internal/_isNumber.js\");\n\n\n/**\n * Returns the number of elements in the array by returning `list.length`.\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category List\n * @sig [a] -> Number\n * @param {Array} list The array to inspect.\n * @return {Number} The length of the array.\n * @example\n *\n *      R.length([]); //=> 0\n *      R.length([1, 2, 3]); //=> 3\n */\n\nvar length =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function length(list) {\n  return list != null && Object(_internal_isNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list.length) ? list.length : NaN;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (length);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/length.js?");

/***/ }),

/***/ "./node_modules/ramda/es/lens.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/lens.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n\n\n/**\n * Returns a lens for the given getter and setter functions. The getter \"gets\"\n * the value of the focus; the setter \"sets\" the value of the focus. The setter\n * should not mutate the data structure.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Object\n * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s\n * @sig (s -> a) -> ((a, s) -> s) -> Lens s a\n * @param {Function} getter\n * @param {Function} setter\n * @return {Lens}\n * @see R.view, R.set, R.over, R.lensIndex, R.lensProp\n * @example\n *\n *      var xLens = R.lens(R.prop('x'), R.assoc('x'));\n *\n *      R.view(xLens, {x: 1, y: 2});            //=> 1\n *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}\n *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}\n */\n\nvar lens =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lens(getter, setter) {\n  return function (toFunctorFn) {\n    return function (target) {\n      return Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (focus) {\n        return setter(focus, target);\n      }, toFunctorFn(getter(target)));\n    };\n  };\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lens);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/lens.js?");

/***/ }),

/***/ "./node_modules/ramda/es/lensIndex.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/lensIndex.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _lens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lens */ \"./node_modules/ramda/es/lens.js\");\n/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nth */ \"./node_modules/ramda/es/nth.js\");\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update */ \"./node_modules/ramda/es/update.js\");\n\n\n\n\n/**\n * Returns a lens whose focus is the specified index.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category Object\n * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s\n * @sig Number -> Lens s a\n * @param {Number} n\n * @return {Lens}\n * @see R.view, R.set, R.over\n * @example\n *\n *      var headLens = R.lensIndex(0);\n *\n *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'\n *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']\n *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']\n */\n\nvar lensIndex =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lensIndex(n) {\n  return Object(_lens__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_nth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(n), Object(_update__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(n));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lensIndex);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/lensIndex.js?");

/***/ }),

/***/ "./node_modules/ramda/es/lensPath.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/lensPath.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _assocPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assocPath */ \"./node_modules/ramda/es/assocPath.js\");\n/* harmony import */ var _lens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lens */ \"./node_modules/ramda/es/lens.js\");\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path */ \"./node_modules/ramda/es/path.js\");\n\n\n\n\n/**\n * Returns a lens whose focus is the specified path.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category Object\n * @typedefn Idx = String | Int\n * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s\n * @sig [Idx] -> Lens s a\n * @param {Array} path The path to use.\n * @return {Lens}\n * @see R.view, R.set, R.over\n * @example\n *\n *      var xHeadYLens = R.lensPath(['x', 0, 'y']);\n *\n *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});\n *      //=> 2\n *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});\n *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}\n *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});\n *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}\n */\n\nvar lensPath =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lensPath(p) {\n  return Object(_lens__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_path__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(p), Object(_assocPath__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(p));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lensPath);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/lensPath.js?");

/***/ }),

/***/ "./node_modules/ramda/es/lensProp.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/lensProp.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _assoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assoc */ \"./node_modules/ramda/es/assoc.js\");\n/* harmony import */ var _lens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lens */ \"./node_modules/ramda/es/lens.js\");\n/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prop */ \"./node_modules/ramda/es/prop.js\");\n\n\n\n\n/**\n * Returns a lens whose focus is the specified property.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category Object\n * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s\n * @sig String -> Lens s a\n * @param {String} k\n * @return {Lens}\n * @see R.view, R.set, R.over\n * @example\n *\n *      var xLens = R.lensProp('x');\n *\n *      R.view(xLens, {x: 1, y: 2});            //=> 1\n *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}\n *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}\n */\n\nvar lensProp =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lensProp(k) {\n  return Object(_lens__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_prop__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(k), Object(_assoc__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(k));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lensProp);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/lensProp.js?");

/***/ }),

/***/ "./node_modules/ramda/es/lift.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/lift.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _liftN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liftN */ \"./node_modules/ramda/es/liftN.js\");\n\n\n/**\n * \"lifts\" a function of arity > 1 so that it may \"map over\" a list, Function or other\n * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category Function\n * @sig (*... -> *) -> ([*]... -> [*])\n * @param {Function} fn The function to lift into higher context\n * @return {Function} The lifted function.\n * @see R.liftN\n * @example\n *\n *      var madd3 = R.lift((a, b, c) => a + b + c);\n *\n *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]\n *\n *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);\n *\n *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]\n */\n\nvar lift =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lift(fn) {\n  return Object(_liftN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn.length, fn);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lift);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/lift.js?");

/***/ }),

/***/ "./node_modules/ramda/es/liftN.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/liftN.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ap */ \"./node_modules/ramda/es/ap.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n\n\n\n\n\n/**\n * \"lifts\" a function to be the specified arity, so that it may \"map over\" that\n * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category Function\n * @sig Number -> (*... -> *) -> ([*]... -> [*])\n * @param {Function} fn The function to lift into higher context\n * @return {Function} The lifted function.\n * @see R.lift, R.ap\n * @example\n *\n *      var madd3 = R.liftN(3, (...args) => R.sum(args));\n *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]\n */\n\nvar liftN =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function liftN(arity, fn) {\n  var lifted = Object(_curryN__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arity, fn);\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arity, function () {\n    return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(_map__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (liftN);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/liftN.js?");

/***/ }),

/***/ "./node_modules/ramda/es/lt.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/lt.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns `true` if the first argument is less than the second; `false`\n * otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord a => a -> a -> Boolean\n * @param {*} a\n * @param {*} b\n * @return {Boolean}\n * @see R.gt\n * @example\n *\n *      R.lt(2, 1); //=> false\n *      R.lt(2, 2); //=> false\n *      R.lt(2, 3); //=> true\n *      R.lt('a', 'z'); //=> true\n *      R.lt('z', 'a'); //=> false\n */\n\nvar lt =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lt(a, b) {\n  return a < b;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lt);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/lt.js?");

/***/ }),

/***/ "./node_modules/ramda/es/lte.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/lte.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns `true` if the first argument is less than or equal to the second;\n * `false` otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord a => a -> a -> Boolean\n * @param {Number} a\n * @param {Number} b\n * @return {Boolean}\n * @see R.gte\n * @example\n *\n *      R.lte(2, 1); //=> false\n *      R.lte(2, 2); //=> true\n *      R.lte(2, 3); //=> true\n *      R.lte('a', 'z'); //=> true\n *      R.lte('z', 'a'); //=> false\n */\n\nvar lte =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function lte(a, b) {\n  return a <= b;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lte);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/lte.js?");

/***/ }),

/***/ "./node_modules/ramda/es/map.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/map.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_map */ \"./node_modules/ramda/es/internal/_map.js\");\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _internal_xmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_xmap */ \"./node_modules/ramda/es/internal/_xmap.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keys */ \"./node_modules/ramda/es/keys.js\");\n\n\n\n\n\n\n\n/**\n * Takes a function and\n * a [functor](https://github.com/fantasyland/fantasy-land#functor),\n * applies the function to each of the functor's values, and returns\n * a functor of the same shape.\n *\n * Ramda provides suitable `map` implementations for `Array` and `Object`,\n * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.\n *\n * Dispatches to the `map` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * Also treats functions as functors and will compose them together.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Functor f => (a -> b) -> f a -> f b\n * @param {Function} fn The function to be called on every element of the input `list`.\n * @param {Array} list The list to be iterated over.\n * @return {Array} The new list.\n * @see R.transduce, R.addIndex\n * @example\n *\n *      var double = x => x * 2;\n *\n *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]\n *\n *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}\n * @symb R.map(f, [a, b]) = [f(a), f(b)]\n * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }\n * @symb R.map(f, functor_o) = functor_o.map(f)\n */\n\nvar map =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['fantasy-land/map', 'map'], _internal_xmap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], function map(fn, functor) {\n  switch (Object.prototype.toString.call(functor)) {\n    case '[object Function]':\n      return Object(_curryN__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(functor.length, function () {\n        return fn.call(this, functor.apply(this, arguments));\n      });\n\n    case '[object Object]':\n      return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function (acc, key) {\n        acc[key] = fn(functor[key]);\n        return acc;\n      }, {}, Object(_keys__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(functor));\n\n    default:\n      return Object(_internal_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fn, functor);\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (map);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/map.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mapAccum.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/mapAccum.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * The `mapAccum` function behaves like a combination of map and reduce; it\n * applies a function to each element of a list, passing an accumulating\n * parameter from left to right, and returning a final value of this\n * accumulator together with the new list.\n *\n * The iterator function receives two arguments, *acc* and *value*, and should\n * return a tuple *[acc, value]*.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category List\n * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])\n * @param {Function} fn The function to be called on every element of the input `list`.\n * @param {*} acc The accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @see R.addIndex, R.mapAccumRight\n * @example\n *\n *      var digits = ['1', '2', '3', '4'];\n *      var appender = (a, b) => [a + b, a + b];\n *\n *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]\n * @symb R.mapAccum(f, a, [b, c, d]) = [\n *   f(f(f(a, b)[0], c)[0], d)[0],\n *   [\n *     f(a, b)[1],\n *     f(f(a, b)[0], c)[1],\n *     f(f(f(a, b)[0], c)[0], d)[1]\n *   ]\n * ]\n */\n\nvar mapAccum =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mapAccum(fn, acc, list) {\n  var idx = 0;\n  var len = list.length;\n  var result = [];\n  var tuple = [acc];\n\n  while (idx < len) {\n    tuple = fn(tuple[0], list[idx]);\n    result[idx] = tuple[1];\n    idx += 1;\n  }\n\n  return [tuple[0], result];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mapAccum);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mapAccum.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mapAccumRight.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/mapAccumRight.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * The `mapAccumRight` function behaves like a combination of map and reduce; it\n * applies a function to each element of a list, passing an accumulating\n * parameter from right to left, and returning a final value of this\n * accumulator together with the new list.\n *\n * Similar to [`mapAccum`](#mapAccum), except moves through the input list from\n * the right to the left.\n *\n * The iterator function receives two arguments, *value* and *acc*, and should\n * return a tuple *[value, acc]*.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category List\n * @sig ((x, acc) -> (y, acc)) -> acc -> [x] -> ([y], acc)\n * @param {Function} fn The function to be called on every element of the input `list`.\n * @param {*} acc The accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @see R.addIndex, R.mapAccum\n * @example\n *\n *      var digits = ['1', '2', '3', '4'];\n *      var append = (a, b) => [a + b, a + b];\n *\n *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']\n * @symb R.mapAccumRight(f, a, [b, c, d]) = [\n *   [\n *     f(b, f(c, f(d, a)[0])[0])[1],\n *     f(c, f(d, a)[0])[1],\n *     f(d, a)[1],\n *   ]\n *   f(b, f(c, f(d, a)[0])[0])[0],\n * ]\n */\n\nvar mapAccumRight =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mapAccumRight(fn, acc, list) {\n  var idx = list.length - 1;\n  var result = [];\n  var tuple = [acc];\n\n  while (idx >= 0) {\n    tuple = fn(list[idx], tuple[0]);\n    result[idx] = tuple[1];\n    idx -= 1;\n  }\n\n  return [result, tuple[0]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mapAccumRight);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mapAccumRight.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mapObjIndexed.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/mapObjIndexed.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ \"./node_modules/ramda/es/keys.js\");\n\n\n\n/**\n * An Object-specific version of [`map`](#map). The function is applied to three\n * arguments: *(value, key, obj)*. If only the value is significant, use\n * [`map`](#map) instead.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Object\n * @sig ((*, String, Object) -> *) -> Object -> Object\n * @param {Function} fn\n * @param {Object} obj\n * @return {Object}\n * @see R.map\n * @example\n *\n *      var values = { x: 1, y: 2, z: 3 };\n *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);\n *\n *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }\n */\n\nvar mapObjIndexed =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mapObjIndexed(fn, obj) {\n  return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (acc, key) {\n    acc[key] = fn(obj[key], key, obj);\n    return acc;\n  }, {}, Object(_keys__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mapObjIndexed);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mapObjIndexed.js?");

/***/ }),

/***/ "./node_modules/ramda/es/match.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/match.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Tests a regular expression against a String. Note that this function will\n * return an empty array when there are no matches. This differs from\n * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)\n * which returns `null` when there are no matches.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category String\n * @sig RegExp -> String -> [String | Undefined]\n * @param {RegExp} rx A regular expression.\n * @param {String} str The string to match against\n * @return {Array} The list of matches or empty array.\n * @see R.test\n * @example\n *\n *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']\n *      R.match(/a/, 'b'); //=> []\n *      R.match(/a/, null); //=> TypeError: null does not have a method named \"match\"\n */\n\nvar match =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function match(rx, str) {\n  return str.match(rx) || [];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (match);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/match.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mathMod.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/mathMod.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isInteger */ \"./node_modules/ramda/es/internal/_isInteger.js\");\n\n\n/**\n * `mathMod` behaves like the modulo operator should mathematically, unlike the\n * `%` operator (and by extension, [`R.modulo`](#modulo)). So while\n * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer\n * arguments, and returns NaN when the modulus is zero or negative.\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category Math\n * @sig Number -> Number -> Number\n * @param {Number} m The dividend.\n * @param {Number} p the modulus.\n * @return {Number} The result of `b mod a`.\n * @see R.modulo\n * @example\n *\n *      R.mathMod(-17, 5);  //=> 3\n *      R.mathMod(17, 5);   //=> 2\n *      R.mathMod(17, -5);  //=> NaN\n *      R.mathMod(17, 0);   //=> NaN\n *      R.mathMod(17.2, 5); //=> NaN\n *      R.mathMod(17, 5.3); //=> NaN\n *\n *      var clock = R.mathMod(R.__, 12);\n *      clock(15); //=> 3\n *      clock(24); //=> 0\n *\n *      var seventeenMod = R.mathMod(17);\n *      seventeenMod(3);  //=> 2\n *      seventeenMod(4);  //=> 1\n *      seventeenMod(10); //=> 7\n */\n\nvar mathMod =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mathMod(m, p) {\n  if (!Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(m)) {\n    return NaN;\n  }\n\n  if (!Object(_internal_isInteger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(p) || p < 1) {\n    return NaN;\n  }\n\n  return (m % p + p) % p;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mathMod);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mathMod.js?");

/***/ }),

/***/ "./node_modules/ramda/es/max.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/max.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns the larger of its two arguments.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord a => a -> a -> a\n * @param {*} a\n * @param {*} b\n * @return {*}\n * @see R.maxBy, R.min\n * @example\n *\n *      R.max(789, 123); //=> 789\n *      R.max('a', 'b'); //=> 'b'\n */\n\nvar max =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function max(a, b) {\n  return b > a ? b : a;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (max);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/max.js?");

/***/ }),

/***/ "./node_modules/ramda/es/maxBy.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/maxBy.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Takes a function and two values, and returns whichever value produces the\n * larger result when passed to the provided function.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Relation\n * @sig Ord b => (a -> b) -> a -> a -> a\n * @param {Function} f\n * @param {*} a\n * @param {*} b\n * @return {*}\n * @see R.max, R.minBy\n * @example\n *\n *      //  square :: Number -> Number\n *      var square = n => n * n;\n *\n *      R.maxBy(square, -3, 2); //=> -3\n *\n *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5\n *      R.reduce(R.maxBy(square), 0, []); //=> 0\n */\n\nvar maxBy =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function maxBy(f, a, b) {\n  return f(b) > f(a) ? b : a;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (maxBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/maxBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mean.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/mean.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sum */ \"./node_modules/ramda/es/sum.js\");\n\n\n/**\n * Returns the mean of the given list of numbers.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category Math\n * @sig [Number] -> Number\n * @param {Array} list\n * @return {Number}\n * @see R.median\n * @example\n *\n *      R.mean([2, 7, 9]); //=> 6\n *      R.mean([]); //=> NaN\n */\n\nvar mean =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mean(list) {\n  return Object(_sum__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list) / list.length;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mean);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mean.js?");

/***/ }),

/***/ "./node_modules/ramda/es/median.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/median.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mean */ \"./node_modules/ramda/es/mean.js\");\n\n\n/**\n * Returns the median of the given list of numbers.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category Math\n * @sig [Number] -> Number\n * @param {Array} list\n * @return {Number}\n * @see R.mean\n * @example\n *\n *      R.median([2, 9, 7]); //=> 7\n *      R.median([7, 2, 10, 9]); //=> 8\n *      R.median([]); //=> NaN\n */\n\nvar median =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function median(list) {\n  var len = list.length;\n\n  if (len === 0) {\n    return NaN;\n  }\n\n  var width = 2 - len % 2;\n  var idx = (len - width) / 2;\n  return Object(_mean__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Array.prototype.slice.call(list, 0).sort(function (a, b) {\n    return a < b ? -1 : a > b ? 1 : 0;\n  }).slice(idx, idx + width));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (median);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/median.js?");

/***/ }),

/***/ "./node_modules/ramda/es/memoize.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/memoize.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _memoizeWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoizeWith */ \"./node_modules/ramda/es/memoizeWith.js\");\n/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toString */ \"./node_modules/ramda/es/toString.js\");\n\n\n/**\n * Creates a new function that, when invoked, caches the result of calling `fn`\n * for a given argument set and returns the result. Subsequent calls to the\n * memoized `fn` with the same argument set will not result in an additional\n * call to `fn`; instead, the cached result for that set of arguments will be\n * returned.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (*... -> a) -> (*... -> a)\n * @param {Function} fn The function to memoize.\n * @return {Function} Memoized version of `fn`.\n * @see R.memoizeWith\n * @deprecated since v0.25.0\n * @example\n *\n *      let count = 0;\n *      const factorial = R.memoize(n => {\n *        count += 1;\n *        return R.product(R.range(1, n + 1));\n *      });\n *      factorial(5); //=> 120\n *      factorial(5); //=> 120\n *      factorial(5); //=> 120\n *      count; //=> 1\n */\n\nvar memoize =\n/*#__PURE__*/\nObject(_memoizeWith__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n  return Object(_toString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arguments);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (memoize);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/memoize.js?");

/***/ }),

/***/ "./node_modules/ramda/es/memoizeWith.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/memoizeWith.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n\n\n\n/**\n * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an\n * additional function that will be applied to a given argument set and used to\n * create the cache key under which the results of the function to be memoized\n * will be stored. Care must be taken when implementing key generation to avoid\n * clashes that may overwrite previous entries erroneously.\n *\n *\n * @func\n * @memberOf R\n * @since v0.24.0\n * @category Function\n * @sig (*... -> String) -> (*... -> a) -> (*... -> a)\n * @param {Function} fn The function to generate the cache key.\n * @param {Function} fn The function to memoize.\n * @return {Function} Memoized version of `fn`.\n * @see R.memoize\n * @example\n *\n *      let count = 0;\n *      const factorial = R.memoizeWith(R.identity, n => {\n *        count += 1;\n *        return R.product(R.range(1, n + 1));\n *      });\n *      factorial(5); //=> 120\n *      factorial(5); //=> 120\n *      factorial(5); //=> 120\n *      count; //=> 1\n */\n\nvar memoizeWith =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function memoizeWith(mFn, fn) {\n  var cache = {};\n  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn.length, function () {\n    var key = mFn.apply(this, arguments);\n\n    if (!Object(_internal_has__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(key, cache)) {\n      cache[key] = fn.apply(this, arguments);\n    }\n\n    return cache[key];\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (memoizeWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/memoizeWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/merge.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/merge.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_assign */ \"./node_modules/ramda/es/internal/_assign.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Create a new object with the own properties of the first object merged with\n * the own properties of the second object. If a key exists in both objects,\n * the value from the second object will be used.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig {k: v} -> {k: v} -> {k: v}\n * @param {Object} l\n * @param {Object} r\n * @return {Object}\n * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey\n * @example\n *\n *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });\n *      //=> { 'name': 'fred', 'age': 40 }\n *\n *      var resetToDefault = R.merge(R.__, {x: 0});\n *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}\n * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }\n */\n\nvar merge =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function merge(l, r) {\n  return Object(_internal_assign__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, l, r);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (merge);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/merge.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mergeAll.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/mergeAll.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_assign */ \"./node_modules/ramda/es/internal/_assign.js\");\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n\n/**\n * Merges a list of objects together into one object.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category List\n * @sig [{k: v}] -> {k: v}\n * @param {Array} list An array of objects\n * @return {Object} A merged object.\n * @see R.reduce\n * @example\n *\n *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}\n *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}\n * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }\n */\n\nvar mergeAll =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function mergeAll(list) {\n  return _internal_assign__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(null, [{}].concat(list));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mergeAll);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mergeAll.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mergeDeepLeft.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/mergeDeepLeft.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeDeepWithKey */ \"./node_modules/ramda/es/mergeDeepWithKey.js\");\n\n\n/**\n * Creates a new object with the own properties of the first object merged with\n * the own properties of the second object. If a key exists in both objects:\n * - and both values are objects, the two values will be recursively merged\n * - otherwise the value from the first object will be used.\n *\n * @func\n * @memberOf R\n * @since v0.24.0\n * @category Object\n * @sig {a} -> {a} -> {a}\n * @param {Object} lObj\n * @param {Object} rObj\n * @return {Object}\n * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey\n * @example\n *\n *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},\n *                      { age: 40, contact: { email: 'baa@example.com' }});\n *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}\n */\n\nvar mergeDeepLeft =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mergeDeepLeft(lObj, rObj) {\n  return Object(_mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (k, lVal, rVal) {\n    return lVal;\n  }, lObj, rObj);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mergeDeepLeft);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mergeDeepLeft.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mergeDeepRight.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/es/mergeDeepRight.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeDeepWithKey */ \"./node_modules/ramda/es/mergeDeepWithKey.js\");\n\n\n/**\n * Creates a new object with the own properties of the first object merged with\n * the own properties of the second object. If a key exists in both objects:\n * - and both values are objects, the two values will be recursively merged\n * - otherwise the value from the second object will be used.\n *\n * @func\n * @memberOf R\n * @since v0.24.0\n * @category Object\n * @sig {a} -> {a} -> {a}\n * @param {Object} lObj\n * @param {Object} rObj\n * @return {Object}\n * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey\n * @example\n *\n *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},\n *                       { age: 40, contact: { email: 'baa@example.com' }});\n *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}\n */\n\nvar mergeDeepRight =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mergeDeepRight(lObj, rObj) {\n  return Object(_mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (k, lVal, rVal) {\n    return rVal;\n  }, lObj, rObj);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mergeDeepRight);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mergeDeepRight.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mergeDeepWith.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/mergeDeepWith.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeDeepWithKey */ \"./node_modules/ramda/es/mergeDeepWithKey.js\");\n\n\n/**\n * Creates a new object with the own properties of the two provided objects.\n * If a key exists in both objects:\n * - and both associated values are also objects then the values will be\n *   recursively merged.\n * - otherwise the provided function is applied to associated values using the\n *   resulting value as the new value associated with the key.\n * If a key only exists in one object, the value will be associated with the key\n * of the resulting object.\n *\n * @func\n * @memberOf R\n * @since v0.24.0\n * @category Object\n * @sig ((a, a) -> a) -> {a} -> {a} -> {a}\n * @param {Function} fn\n * @param {Object} lObj\n * @param {Object} rObj\n * @return {Object}\n * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey\n * @example\n *\n *      R.mergeDeepWith(R.concat,\n *                      { a: true, c: { values: [10, 20] }},\n *                      { b: true, c: { values: [15, 35] }});\n *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}\n */\n\nvar mergeDeepWith =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mergeDeepWith(fn, lObj, rObj) {\n  return Object(_mergeDeepWithKey__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (k, lVal, rVal) {\n    return fn(lVal, rVal);\n  }, lObj, rObj);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mergeDeepWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mergeDeepWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mergeDeepWithKey.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/mergeDeepWithKey.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _internal_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isObject */ \"./node_modules/ramda/es/internal/_isObject.js\");\n/* harmony import */ var _mergeWithKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeWithKey */ \"./node_modules/ramda/es/mergeWithKey.js\");\n\n\n\n/**\n * Creates a new object with the own properties of the two provided objects.\n * If a key exists in both objects:\n * - and both associated values are also objects then the values will be\n *   recursively merged.\n * - otherwise the provided function is applied to the key and associated values\n *   using the resulting value as the new value associated with the key.\n * If a key only exists in one object, the value will be associated with the key\n * of the resulting object.\n *\n * @func\n * @memberOf R\n * @since v0.24.0\n * @category Object\n * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}\n * @param {Function} fn\n * @param {Object} lObj\n * @param {Object} rObj\n * @return {Object}\n * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith\n * @example\n *\n *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r\n *      R.mergeDeepWithKey(concatValues,\n *                         { a: true, c: { thing: 'foo', values: [10, 20] }},\n *                         { b: true, c: { thing: 'bar', values: [15, 35] }});\n *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}\n */\n\nvar mergeDeepWithKey =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mergeDeepWithKey(fn, lObj, rObj) {\n  return Object(_mergeWithKey__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function (k, lVal, rVal) {\n    if (Object(_internal_isObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lVal) && Object(_internal_isObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rVal)) {\n      return mergeDeepWithKey(fn, lVal, rVal);\n    } else {\n      return fn(k, lVal, rVal);\n    }\n  }, lObj, rObj);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mergeDeepWithKey);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mergeDeepWithKey.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mergeWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/mergeWith.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _mergeWithKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeWithKey */ \"./node_modules/ramda/es/mergeWithKey.js\");\n\n\n/**\n * Creates a new object with the own properties of the two provided objects. If\n * a key exists in both objects, the provided function is applied to the values\n * associated with the key in each object, with the result being used as the\n * value associated with the key in the returned object.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category Object\n * @sig ((a, a) -> a) -> {a} -> {a} -> {a}\n * @param {Function} fn\n * @param {Object} l\n * @param {Object} r\n * @return {Object}\n * @see R.mergeDeepWith, R.merge, R.mergeWithKey\n * @example\n *\n *      R.mergeWith(R.concat,\n *                  { a: true, values: [10, 20] },\n *                  { b: true, values: [15, 35] });\n *      //=> { a: true, b: true, values: [10, 20, 15, 35] }\n */\n\nvar mergeWith =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mergeWith(fn, l, r) {\n  return Object(_mergeWithKey__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (_, _l, _r) {\n    return fn(_l, _r);\n  }, l, r);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mergeWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mergeWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/mergeWithKey.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/es/mergeWithKey.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n\n\n/**\n * Creates a new object with the own properties of the two provided objects. If\n * a key exists in both objects, the provided function is applied to the key\n * and the values associated with the key in each object, with the result being\n * used as the value associated with the key in the returned object.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category Object\n * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}\n * @param {Function} fn\n * @param {Object} l\n * @param {Object} r\n * @return {Object}\n * @see R.mergeDeepWithKey, R.merge, R.mergeWith\n * @example\n *\n *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r\n *      R.mergeWithKey(concatValues,\n *                     { a: true, thing: 'foo', values: [10, 20] },\n *                     { b: true, thing: 'bar', values: [15, 35] });\n *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }\n * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }\n */\n\nvar mergeWithKey =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function mergeWithKey(fn, l, r) {\n  var result = {};\n  var k;\n\n  for (k in l) {\n    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(k, l)) {\n      result[k] = Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(k, r) ? fn(k, l[k], r[k]) : l[k];\n    }\n  }\n\n  for (k in r) {\n    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(k, r) && !Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(k, result)) {\n      result[k] = r[k];\n    }\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mergeWithKey);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/mergeWithKey.js?");

/***/ }),

/***/ "./node_modules/ramda/es/min.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/min.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns the smaller of its two arguments.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord a => a -> a -> a\n * @param {*} a\n * @param {*} b\n * @return {*}\n * @see R.minBy, R.max\n * @example\n *\n *      R.min(789, 123); //=> 123\n *      R.min('a', 'b'); //=> 'a'\n */\n\nvar min =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function min(a, b) {\n  return b < a ? b : a;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (min);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/min.js?");

/***/ }),

/***/ "./node_modules/ramda/es/minBy.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/minBy.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Takes a function and two values, and returns whichever value produces the\n * smaller result when passed to the provided function.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Relation\n * @sig Ord b => (a -> b) -> a -> a -> a\n * @param {Function} f\n * @param {*} a\n * @param {*} b\n * @return {*}\n * @see R.min, R.maxBy\n * @example\n *\n *      //  square :: Number -> Number\n *      var square = n => n * n;\n *\n *      R.minBy(square, -3, 2); //=> 2\n *\n *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1\n *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity\n */\n\nvar minBy =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function minBy(f, a, b) {\n  return f(b) < f(a) ? b : a;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (minBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/minBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/modulo.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/modulo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Divides the first parameter by the second and returns the remainder. Note\n * that this function preserves the JavaScript-style behavior for modulo. For\n * mathematical modulo see [`mathMod`](#mathMod).\n *\n * @func\n * @memberOf R\n * @since v0.1.1\n * @category Math\n * @sig Number -> Number -> Number\n * @param {Number} a The value to the divide.\n * @param {Number} b The pseudo-modulus\n * @return {Number} The result of `b % a`.\n * @see R.mathMod\n * @example\n *\n *      R.modulo(17, 3); //=> 2\n *      // JS behavior:\n *      R.modulo(-17, 3); //=> -2\n *      R.modulo(17, -3); //=> 2\n *\n *      var isOdd = R.modulo(R.__, 2);\n *      isOdd(42); //=> 0\n *      isOdd(21); //=> 1\n */\n\nvar modulo =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function modulo(a, b) {\n  return a % b;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modulo);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/modulo.js?");

/***/ }),

/***/ "./node_modules/ramda/es/multiply.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/multiply.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Multiplies two numbers. Equivalent to `a * b` but curried.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Math\n * @sig Number -> Number -> Number\n * @param {Number} a The first value.\n * @param {Number} b The second value.\n * @return {Number} The result of `a * b`.\n * @see R.divide\n * @example\n *\n *      var double = R.multiply(2);\n *      var triple = R.multiply(3);\n *      double(3);       //=>  6\n *      triple(4);       //=> 12\n *      R.multiply(2, 5);  //=> 10\n */\n\nvar multiply =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function multiply(a, b) {\n  return a * b;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (multiply);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/multiply.js?");

/***/ }),

/***/ "./node_modules/ramda/es/nAry.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/nAry.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Wraps a function of any arity (including nullary) in a function that accepts\n * exactly `n` parameters. Any extraneous parameters will not be passed to the\n * supplied function.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig Number -> (* -> a) -> (* -> a)\n * @param {Number} n The desired arity of the new function.\n * @param {Function} fn The function to wrap.\n * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of\n *         arity `n`.\n * @see R.binary, R.unary\n * @example\n *\n *      var takesTwoArgs = (a, b) => [a, b];\n *\n *      takesTwoArgs.length; //=> 2\n *      takesTwoArgs(1, 2); //=> [1, 2]\n *\n *      var takesOneArg = R.nAry(1, takesTwoArgs);\n *      takesOneArg.length; //=> 1\n *      // Only `n` arguments are passed to the wrapped function\n *      takesOneArg(1, 2); //=> [1, undefined]\n * @symb R.nAry(0, f)(a, b) = f()\n * @symb R.nAry(1, f)(a, b) = f(a)\n * @symb R.nAry(2, f)(a, b) = f(a, b)\n */\n\nvar nAry =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function nAry(n, fn) {\n  switch (n) {\n    case 0:\n      return function () {\n        return fn.call(this);\n      };\n\n    case 1:\n      return function (a0) {\n        return fn.call(this, a0);\n      };\n\n    case 2:\n      return function (a0, a1) {\n        return fn.call(this, a0, a1);\n      };\n\n    case 3:\n      return function (a0, a1, a2) {\n        return fn.call(this, a0, a1, a2);\n      };\n\n    case 4:\n      return function (a0, a1, a2, a3) {\n        return fn.call(this, a0, a1, a2, a3);\n      };\n\n    case 5:\n      return function (a0, a1, a2, a3, a4) {\n        return fn.call(this, a0, a1, a2, a3, a4);\n      };\n\n    case 6:\n      return function (a0, a1, a2, a3, a4, a5) {\n        return fn.call(this, a0, a1, a2, a3, a4, a5);\n      };\n\n    case 7:\n      return function (a0, a1, a2, a3, a4, a5, a6) {\n        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);\n      };\n\n    case 8:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7) {\n        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);\n      };\n\n    case 9:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {\n        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);\n      };\n\n    case 10:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {\n        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);\n      };\n\n    default:\n      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nAry);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/nAry.js?");

/***/ }),

/***/ "./node_modules/ramda/es/negate.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/negate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Negates its argument.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Math\n * @sig Number -> Number\n * @param {Number} n\n * @return {Number}\n * @example\n *\n *      R.negate(42); //=> -42\n */\n\nvar negate =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function negate(n) {\n  return -n;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (negate);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/negate.js?");

/***/ }),

/***/ "./node_modules/ramda/es/none.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/none.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_complement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_complement */ \"./node_modules/ramda/es/internal/_complement.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xany__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_xany */ \"./node_modules/ramda/es/internal/_xany.js\");\n/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./any */ \"./node_modules/ramda/es/any.js\");\n\n\n\n\n\n/**\n * Returns `true` if no elements of the list match the predicate, `false`\n * otherwise.\n *\n * Dispatches to the `any` method of the second argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.12.0\n * @category List\n * @sig (a -> Boolean) -> [a] -> Boolean\n * @param {Function} fn The predicate function.\n * @param {Array} list The array to consider.\n * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.\n * @see R.all, R.any\n * @example\n *\n *      var isEven = n => n % 2 === 0;\n *      var isOdd = n => n % 2 === 1;\n *\n *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true\n *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false\n */\n\nvar none =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_complement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(['any'], _internal_xany__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _any__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (none);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/none.js?");

/***/ }),

/***/ "./node_modules/ramda/es/not.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/not.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * A function that returns the `!` of its argument. It will return `true` when\n * passed false-y value, and `false` when passed a truth-y one.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Logic\n * @sig * -> Boolean\n * @param {*} a any value\n * @return {Boolean} the logical inverse of passed argument.\n * @see R.complement\n * @example\n *\n *      R.not(true); //=> false\n *      R.not(false); //=> true\n *      R.not(0); //=> true\n *      R.not(1); //=> false\n */\n\nvar not =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function not(a) {\n  return !a;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (not);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/not.js?");

/***/ }),

/***/ "./node_modules/ramda/es/nth.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/nth.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isString */ \"./node_modules/ramda/es/internal/_isString.js\");\n\n\n/**\n * Returns the nth element of the given list or string. If n is negative the\n * element at index length + n is returned.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Number -> [a] -> a | Undefined\n * @sig Number -> String -> String\n * @param {Number} offset\n * @param {*} list\n * @return {*}\n * @example\n *\n *      var list = ['foo', 'bar', 'baz', 'quux'];\n *      R.nth(1, list); //=> 'bar'\n *      R.nth(-1, list); //=> 'quux'\n *      R.nth(-99, list); //=> undefined\n *\n *      R.nth(2, 'abc'); //=> 'c'\n *      R.nth(3, 'abc'); //=> ''\n * @symb R.nth(-1, [a, b, c]) = c\n * @symb R.nth(0, [a, b, c]) = a\n * @symb R.nth(1, [a, b, c]) = b\n */\n\nvar nth =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function nth(offset, list) {\n  var idx = offset < 0 ? list.length + offset : offset;\n  return Object(_internal_isString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list) ? list.charAt(idx) : list[idx];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nth);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/nth.js?");

/***/ }),

/***/ "./node_modules/ramda/es/nthArg.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/nthArg.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n/* harmony import */ var _nth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nth */ \"./node_modules/ramda/es/nth.js\");\n\n\n\n/**\n * Returns a function which returns its nth argument.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Function\n * @sig Number -> *... -> *\n * @param {Number} n\n * @return {Function}\n * @example\n *\n *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'\n *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'\n * @symb R.nthArg(-1)(a, b, c) = c\n * @symb R.nthArg(0)(a, b, c) = a\n * @symb R.nthArg(1)(a, b, c) = b\n */\n\nvar nthArg =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function nthArg(n) {\n  var arity = n < 0 ? 1 : n + 1;\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arity, function () {\n    return Object(_nth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(n, arguments);\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nthArg);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/nthArg.js?");

/***/ }),

/***/ "./node_modules/ramda/es/o.js":
/*!************************************!*\
  !*** ./node_modules/ramda/es/o.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * `o` is a curried composition function that returns a unary function.\n * Like [`compose`](#compose), `o` performs right-to-left function composition.\n * Unlike [`compose`](#compose), the rightmost function passed to `o` will be\n * invoked with only one argument.\n *\n * @func\n * @memberOf R\n * @since v0.24.0\n * @category Function\n * @sig (b -> c) -> (a -> b) -> a -> c\n * @param {Function} f\n * @param {Function} g\n * @return {Function}\n * @see R.compose, R.pipe\n * @example\n *\n *      var classyGreeting = name => \"The name's \" + name.last + \", \" + name.first + \" \" + name.last\n *      var yellGreeting = R.o(R.toUpper, classyGreeting);\n *      yellGreeting({first: 'James', last: 'Bond'}); //=> \"THE NAME'S BOND, JAMES BOND\"\n *\n *      R.o(R.multiply(10), R.add(10))(-4) //=> 60\n *\n * @symb R.o(f, g, x) = f(g(x))\n */\n\nvar o =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function o(f, g, x) {\n  return f(g(x));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (o);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/o.js?");

/***/ }),

/***/ "./node_modules/ramda/es/objOf.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/objOf.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Creates an object containing a single key:value pair.\n *\n * @func\n * @memberOf R\n * @since v0.18.0\n * @category Object\n * @sig String -> a -> {String:a}\n * @param {String} key\n * @param {*} val\n * @return {Object}\n * @see R.pair\n * @example\n *\n *      var matchPhrases = R.compose(\n *        R.objOf('must'),\n *        R.map(R.objOf('match_phrase'))\n *      );\n *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}\n */\n\nvar objOf =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function objOf(key, val) {\n  var obj = {};\n  obj[key] = val;\n  return obj;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (objOf);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/objOf.js?");

/***/ }),

/***/ "./node_modules/ramda/es/of.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/of.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_of */ \"./node_modules/ramda/es/internal/_of.js\");\n\n\n/**\n * Returns a singleton array containing the value provided.\n *\n * Note this `of` is different from the ES6 `of`; See\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category Function\n * @sig a -> [a]\n * @param {*} x any value\n * @return {Array} An array wrapping `x`.\n * @example\n *\n *      R.of(null); //=> [null]\n *      R.of([42]); //=> [[42]]\n */\n\nvar of =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_internal_of__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (of);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/of.js?");

/***/ }),

/***/ "./node_modules/ramda/es/omit.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/omit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns a partial copy of an object omitting the keys specified.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig [String] -> {String: *} -> {String: *}\n * @param {Array} names an array of String property names to omit from the new object\n * @param {Object} obj The object to copy from\n * @return {Object} A new object with properties from `names` not on it.\n * @see R.pick\n * @example\n *\n *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}\n */\n\nvar omit =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function omit(names, obj) {\n  var result = {};\n  var index = {};\n  var idx = 0;\n  var len = names.length;\n\n  while (idx < len) {\n    index[names[idx]] = 1;\n    idx += 1;\n  }\n\n  for (var prop in obj) {\n    if (!index.hasOwnProperty(prop)) {\n      result[prop] = obj[prop];\n    }\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (omit);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/omit.js?");

/***/ }),

/***/ "./node_modules/ramda/es/once.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/once.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n\n/**\n * Accepts a function `fn` and returns a function that guards invocation of\n * `fn` such that `fn` can only ever be called once, no matter how many times\n * the returned function is invoked. The first value calculated is returned in\n * subsequent invocations.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (a... -> b) -> (a... -> b)\n * @param {Function} fn The function to wrap in a call-only-once wrapper.\n * @return {Function} The wrapped function.\n * @example\n *\n *      var addOneOnce = R.once(x => x + 1);\n *      addOneOnce(10); //=> 11\n *      addOneOnce(addOneOnce(50)); //=> 11\n */\n\nvar once =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function once(fn) {\n  var called = false;\n  var result;\n  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn.length, function () {\n    if (called) {\n      return result;\n    }\n\n    called = true;\n    result = fn.apply(this, arguments);\n    return result;\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (once);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/once.js?");

/***/ }),

/***/ "./node_modules/ramda/es/or.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/es/or.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns `true` if one or both of its arguments are `true`. Returns `false`\n * if both arguments are `false`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Logic\n * @sig a -> b -> a | b\n * @param {Any} a\n * @param {Any} b\n * @return {Any} the first argument if truthy, otherwise the second argument.\n * @see R.either\n * @example\n *\n *      R.or(true, true); //=> true\n *      R.or(true, false); //=> true\n *      R.or(false, true); //=> true\n *      R.or(false, false); //=> false\n */\n\nvar or =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function or(a, b) {\n  return a || b;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (or);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/or.js?");

/***/ }),

/***/ "./node_modules/ramda/es/over.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/over.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n // `Identity` is a functor that holds a single value, where `map` simply\n// transforms the held value with the provided function.\n\nvar Identity = function (x) {\n  return {\n    value: x,\n    map: function (f) {\n      return Identity(f(x));\n    }\n  };\n};\n/**\n * Returns the result of \"setting\" the portion of the given data structure\n * focused by the given lens to the result of applying the given function to\n * the focused value.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category Object\n * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s\n * @sig Lens s a -> (a -> a) -> s -> s\n * @param {Lens} lens\n * @param {*} v\n * @param {*} x\n * @return {*}\n * @see R.prop, R.lensIndex, R.lensProp\n * @example\n *\n *      var headLens = R.lensIndex(0);\n *\n *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']\n */\n\n\nvar over =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function over(lens, f, x) {\n  // The value returned by the getter function is first transformed with `f`,\n  // then set as the value of an `Identity`. This is then mapped over with the\n  // setter function of the lens.\n  return lens(function (y) {\n    return Identity(f(y));\n  })(x).value;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (over);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/over.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pair.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/pair.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.\n *\n * @func\n * @memberOf R\n * @since v0.18.0\n * @category List\n * @sig a -> b -> (a,b)\n * @param {*} fst\n * @param {*} snd\n * @return {Array}\n * @see R.objOf, R.of\n * @example\n *\n *      R.pair('foo', 'bar'); //=> ['foo', 'bar']\n */\n\nvar pair =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pair(fst, snd) {\n  return [fst, snd];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pair);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pair.js?");

/***/ }),

/***/ "./node_modules/ramda/es/partial.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/partial.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_createPartialApplicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_createPartialApplicator */ \"./node_modules/ramda/es/internal/_createPartialApplicator.js\");\n\n\n/**\n * Takes a function `f` and a list of arguments, and returns a function `g`.\n * When applied, `g` returns the result of applying `f` to the arguments\n * provided initially followed by the arguments provided to `g`.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category Function\n * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)\n * @param {Function} f\n * @param {Array} args\n * @return {Function}\n * @see R.partialRight\n * @example\n *\n *      var multiply2 = (a, b) => a * b;\n *      var double = R.partial(multiply2, [2]);\n *      double(2); //=> 4\n *\n *      var greet = (salutation, title, firstName, lastName) =>\n *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';\n *\n *      var sayHello = R.partial(greet, ['Hello']);\n *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);\n *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'\n * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)\n */\n\nvar partial =\n/*#__PURE__*/\nObject(_internal_createPartialApplicator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (partial);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/partial.js?");

/***/ }),

/***/ "./node_modules/ramda/es/partialRight.js":
/*!***********************************************!*\
  !*** ./node_modules/ramda/es/partialRight.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_createPartialApplicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_createPartialApplicator */ \"./node_modules/ramda/es/internal/_createPartialApplicator.js\");\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flip */ \"./node_modules/ramda/es/flip.js\");\n\n\n\n/**\n * Takes a function `f` and a list of arguments, and returns a function `g`.\n * When applied, `g` returns the result of applying `f` to the arguments\n * provided to `g` followed by the arguments provided initially.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category Function\n * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)\n * @param {Function} f\n * @param {Array} args\n * @return {Function}\n * @see R.partial\n * @example\n *\n *      var greet = (salutation, title, firstName, lastName) =>\n *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';\n *\n *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);\n *\n *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'\n * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)\n */\n\nvar partialRight =\n/*#__PURE__*/\nObject(_internal_createPartialApplicator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n/*#__PURE__*/\nObject(_flip__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (partialRight);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/partialRight.js?");

/***/ }),

/***/ "./node_modules/ramda/es/partition.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/partition.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./node_modules/ramda/es/filter.js\");\n/* harmony import */ var _juxt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juxt */ \"./node_modules/ramda/es/juxt.js\");\n/* harmony import */ var _reject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reject */ \"./node_modules/ramda/es/reject.js\");\n\n\n\n/**\n * Takes a predicate and a list or other `Filterable` object and returns the\n * pair of filterable objects of the same type of elements which do and do not\n * satisfy, the predicate, respectively. Filterable objects include plain objects or any object\n * that has a filter method such as `Array`.\n *\n * @func\n * @memberOf R\n * @since v0.1.4\n * @category List\n * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]\n * @param {Function} pred A predicate to determine which side the element belongs to.\n * @param {Array} filterable the list (or other filterable) to partition.\n * @return {Array} An array, containing first the subset of elements that satisfy the\n *         predicate, and second the subset of elements that do not satisfy.\n * @see R.filter, R.reject\n * @example\n *\n *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);\n *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]\n *\n *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });\n *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]\n */\n\nvar partition =\n/*#__PURE__*/\nObject(_juxt__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _reject__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (partition);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/partition.js?");

/***/ }),

/***/ "./node_modules/ramda/es/path.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Retrieve the value at a given path.\n *\n * @func\n * @memberOf R\n * @since v0.2.0\n * @category Object\n * @typedefn Idx = String | Int\n * @sig [Idx] -> {a} -> a | Undefined\n * @param {Array} path The path to use.\n * @param {Object} obj The object to retrieve the nested property from.\n * @return {*} The data at `path`.\n * @see R.prop\n * @example\n *\n *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2\n *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined\n */\n\nvar path =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function path(paths, obj) {\n  var val = obj;\n  var idx = 0;\n\n  while (idx < paths.length) {\n    if (val == null) {\n      return;\n    }\n\n    val = val[paths[idx]];\n    idx += 1;\n  }\n\n  return val;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (path);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/path.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pathEq.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/pathEq.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path */ \"./node_modules/ramda/es/path.js\");\n\n\n\n/**\n * Determines whether a nested path on an object has a specific value, in\n * [`R.equals`](#equals) terms. Most likely used to filter a list.\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category Relation\n * @typedefn Idx = String | Int\n * @sig [Idx] -> a -> {a} -> Boolean\n * @param {Array} path The path of the nested property to use\n * @param {*} val The value to compare the nested property with\n * @param {Object} obj The object to check the nested property in\n * @return {Boolean} `true` if the value equals the nested object property,\n *         `false` otherwise.\n * @example\n *\n *      var user1 = { address: { zipCode: 90210 } };\n *      var user2 = { address: { zipCode: 55555 } };\n *      var user3 = { name: 'Bob' };\n *      var users = [ user1, user2, user3 ];\n *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);\n *      R.filter(isFamous, users); //=> [ user1 ]\n */\n\nvar pathEq =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pathEq(_path, val, obj) {\n  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_path__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_path, obj), val);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pathEq);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pathEq.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pathOr.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/pathOr.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _defaultTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTo */ \"./node_modules/ramda/es/defaultTo.js\");\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path */ \"./node_modules/ramda/es/path.js\");\n\n\n\n/**\n * If the given, non-null object has a value at the given path, returns the\n * value at that path. Otherwise returns the provided default value.\n *\n * @func\n * @memberOf R\n * @since v0.18.0\n * @category Object\n * @typedefn Idx = String | Int\n * @sig a -> [Idx] -> {a} -> a\n * @param {*} d The default value.\n * @param {Array} p The path to use.\n * @param {Object} obj The object to retrieve the nested property from.\n * @return {*} The data at `path` of the supplied object or the default value.\n * @example\n *\n *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2\n *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> \"N/A\"\n */\n\nvar pathOr =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pathOr(d, p, obj) {\n  return Object(_defaultTo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(d, Object(_path__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(p, obj));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pathOr);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pathOr.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pathSatisfies.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/pathSatisfies.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ \"./node_modules/ramda/es/path.js\");\n\n\n/**\n * Returns `true` if the specified object property at given path satisfies the\n * given predicate; `false` otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category Logic\n * @typedefn Idx = String | Int\n * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean\n * @param {Function} pred\n * @param {Array} propPath\n * @param {*} obj\n * @return {Boolean}\n * @see R.propSatisfies, R.path\n * @example\n *\n *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true\n */\n\nvar pathSatisfies =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pathSatisfies(pred, propPath, obj) {\n  return propPath.length > 0 && pred(Object(_path__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(propPath, obj));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pathSatisfies);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pathSatisfies.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pick.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/pick.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns a partial copy of an object containing only the keys specified. If\n * the key does not exist, the property is ignored.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig [k] -> {k: v} -> {k: v}\n * @param {Array} names an array of String property names to copy onto a new object\n * @param {Object} obj The object to copy from\n * @return {Object} A new object with only properties from `names` on it.\n * @see R.omit, R.props\n * @example\n *\n *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}\n *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}\n */\n\nvar pick =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pick(names, obj) {\n  var result = {};\n  var idx = 0;\n\n  while (idx < names.length) {\n    if (names[idx] in obj) {\n      result[names[idx]] = obj[names[idx]];\n    }\n\n    idx += 1;\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pick);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pick.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pickAll.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/pickAll.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Similar to `pick` except that this one includes a `key: undefined` pair for\n * properties that don't exist.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig [k] -> {k: v} -> {k: v}\n * @param {Array} names an array of String property names to copy onto a new object\n * @param {Object} obj The object to copy from\n * @return {Object} A new object with only properties from `names` on it.\n * @see R.pick\n * @example\n *\n *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}\n *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}\n */\n\nvar pickAll =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pickAll(names, obj) {\n  var result = {};\n  var idx = 0;\n  var len = names.length;\n\n  while (idx < len) {\n    var name = names[idx];\n    result[name] = obj[name];\n    idx += 1;\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pickAll);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pickAll.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pickBy.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/pickBy.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns a partial copy of an object containing only the keys that satisfy\n * the supplied predicate.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Object\n * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}\n * @param {Function} pred A predicate to determine whether or not a key\n *        should be included on the output object.\n * @param {Object} obj The object to copy from\n * @return {Object} A new object with only properties that satisfy `pred`\n *         on it.\n * @see R.pick, R.filter\n * @example\n *\n *      var isUpperCase = (val, key) => key.toUpperCase() === key;\n *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}\n */\n\nvar pickBy =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pickBy(test, obj) {\n  var result = {};\n\n  for (var prop in obj) {\n    if (test(obj[prop], prop, obj)) {\n      result[prop] = obj[prop];\n    }\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pickBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pickBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pipe.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/pipe.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pipe; });\n/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _internal_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_pipe */ \"./node_modules/ramda/es/internal/_pipe.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n/* harmony import */ var _tail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tail */ \"./node_modules/ramda/es/tail.js\");\n\n\n\n\n/**\n * Performs left-to-right function composition. The leftmost function may have\n * any arity; the remaining functions must be unary.\n *\n * In some libraries this function is named `sequence`.\n *\n * **Note:** The result of pipe is not automatically curried.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)\n * @param {...Function} functions\n * @return {Function}\n * @see R.compose\n * @example\n *\n *      var f = R.pipe(Math.pow, R.negate, R.inc);\n *\n *      f(3, 4); // -(3^4) + 1\n * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))\n */\n\nfunction pipe() {\n  if (arguments.length === 0) {\n    throw new Error('pipe requires at least one argument');\n  }\n\n  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arguments[0].length, Object(_reduce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_internal_pipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"], arguments[0], Object(_tail__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arguments)));\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pipe.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pipeK.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/pipeK.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pipeK; });\n/* harmony import */ var _composeK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composeK */ \"./node_modules/ramda/es/composeK.js\");\n/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverse */ \"./node_modules/ramda/es/reverse.js\");\n\n\n/**\n * Returns the left-to-right Kleisli composition of the provided functions,\n * each of which must return a value of a type supported by [`chain`](#chain).\n *\n * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category Function\n * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)\n * @param {...Function}\n * @return {Function}\n * @see R.composeK\n * @example\n *\n *      //  parseJson :: String -> Maybe *\n *      //  get :: String -> Object -> Maybe *\n *\n *      //  getStateCode :: Maybe String -> Maybe String\n *      var getStateCode = R.pipeK(\n *        parseJson,\n *        get('user'),\n *        get('address'),\n *        get('state'),\n *        R.compose(Maybe.of, R.toUpper)\n *      );\n *\n *      getStateCode('{\"user\":{\"address\":{\"state\":\"ny\"}}}');\n *      //=> Just('NY')\n *      getStateCode('[Invalid JSON]');\n *      //=> Nothing()\n * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))\n */\n\nfunction pipeK() {\n  if (arguments.length === 0) {\n    throw new Error('pipeK requires at least one argument');\n  }\n\n  return _composeK__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, Object(_reverse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arguments));\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pipeK.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pipeP.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/pipeP.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pipeP; });\n/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _internal_pipeP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_pipeP */ \"./node_modules/ramda/es/internal/_pipeP.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n/* harmony import */ var _tail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tail */ \"./node_modules/ramda/es/tail.js\");\n\n\n\n\n/**\n * Performs left-to-right composition of one or more Promise-returning\n * functions. The leftmost function may have any arity; the remaining functions\n * must be unary.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category Function\n * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)\n * @param {...Function} functions\n * @return {Function}\n * @see R.composeP\n * @example\n *\n *      //  followersForUser :: String -> Promise [User]\n *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);\n */\n\nfunction pipeP() {\n  if (arguments.length === 0) {\n    throw new Error('pipeP requires at least one argument');\n  }\n\n  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arguments[0].length, Object(_reduce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_internal_pipeP__WEBPACK_IMPORTED_MODULE_1__[\"default\"], arguments[0], Object(_tail__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arguments)));\n}\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pipeP.js?");

/***/ }),

/***/ "./node_modules/ramda/es/pluck.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/pluck.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prop */ \"./node_modules/ramda/es/prop.js\");\n\n\n\n/**\n * Returns a new list by plucking the same named property off all objects in\n * the list supplied.\n *\n * `pluck` will work on\n * any [functor](https://github.com/fantasyland/fantasy-land#functor) in\n * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Functor f => k -> f {k: v} -> f v\n * @param {Number|String} key The key name to pluck off of each object.\n * @param {Array} f The array or functor to consider.\n * @return {Array} The list of values for the given key.\n * @see R.props\n * @example\n *\n *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]\n *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]\n *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}\n * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]\n * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]\n */\n\nvar pluck =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function pluck(p, list) {\n  return Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_prop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(p), list);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pluck);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/pluck.js?");

/***/ }),

/***/ "./node_modules/ramda/es/prepend.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/prepend.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Returns a new list with the given element at the front, followed by the\n * contents of the list.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig a -> [a] -> [a]\n * @param {*} el The item to add to the head of the output list.\n * @param {Array} list The array to add to the tail of the output list.\n * @return {Array} A new array.\n * @see R.append\n * @example\n *\n *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']\n */\n\nvar prepend =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function prepend(el, list) {\n  return Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([el], list);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prepend);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/prepend.js?");

/***/ }),

/***/ "./node_modules/ramda/es/product.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/product.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _multiply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiply */ \"./node_modules/ramda/es/multiply.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n\n\n/**\n * Multiplies together all the elements of a list.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Math\n * @sig [Number] -> Number\n * @param {Array} list An array of numbers\n * @return {Number} The product of all the numbers in the list.\n * @see R.reduce\n * @example\n *\n *      R.product([2,4,6,8,100,1]); //=> 38400\n */\n\nvar product =\n/*#__PURE__*/\nObject(_reduce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_multiply__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 1);\n/* harmony default export */ __webpack_exports__[\"default\"] = (product);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/product.js?");

/***/ }),

/***/ "./node_modules/ramda/es/project.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/project.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_map */ \"./node_modules/ramda/es/internal/_map.js\");\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ \"./node_modules/ramda/es/identity.js\");\n/* harmony import */ var _pickAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickAll */ \"./node_modules/ramda/es/pickAll.js\");\n/* harmony import */ var _useWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWith */ \"./node_modules/ramda/es/useWith.js\");\n\n\n\n\n/**\n * Reasonable analog to SQL `select` statement.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @category Relation\n * @sig [k] -> [{k: v}] -> [{k: v}]\n * @param {Array} props The property names to project\n * @param {Array} objs The objects to query\n * @return {Array} An array of objects with just the `props` properties.\n * @example\n *\n *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};\n *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};\n *      var kids = [abby, fred];\n *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]\n */\n\nvar project =\n/*#__PURE__*/\nObject(_useWith__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_internal_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"], [_pickAll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _identity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]); // passing `identity` gives correct arity\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (project);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/project.js?");

/***/ }),

/***/ "./node_modules/ramda/es/prop.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/prop.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ \"./node_modules/ramda/es/path.js\");\n\n\n/**\n * Returns a function that when supplied an object returns the indicated\n * property of that object, if it exists.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig s -> {s: a} -> a | Undefined\n * @param {String} p The property name\n * @param {Object} obj The object to query\n * @return {*} The value at `obj.p`.\n * @see R.path\n * @example\n *\n *      R.prop('x', {x: 100}); //=> 100\n *      R.prop('x', {}); //=> undefined\n */\n\nvar prop =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function prop(p, obj) {\n  return Object(_path__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([p], obj);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prop);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/prop.js?");

/***/ }),

/***/ "./node_modules/ramda/es/propEq.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/propEq.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n\n\n/**\n * Returns `true` if the specified object property is equal, in\n * [`R.equals`](#equals) terms, to the given value; `false` otherwise.\n * You can test multiple properties with [`R.where`](#where).\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig String -> a -> Object -> Boolean\n * @param {String} name\n * @param {*} val\n * @param {*} obj\n * @return {Boolean}\n * @see R.whereEq, R.propSatisfies, R.equals\n * @example\n *\n *      var abby = {name: 'Abby', age: 7, hair: 'blond'};\n *      var fred = {name: 'Fred', age: 12, hair: 'brown'};\n *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};\n *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};\n *      var kids = [abby, fred, rusty, alois];\n *      var hasBrownHair = R.propEq('hair', 'brown');\n *      R.filter(hasBrownHair, kids); //=> [fred, rusty]\n */\n\nvar propEq =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function propEq(name, val, obj) {\n  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(val, obj[name]);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (propEq);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/propEq.js?");

/***/ }),

/***/ "./node_modules/ramda/es/propIs.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/propIs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ \"./node_modules/ramda/es/is.js\");\n\n\n/**\n * Returns `true` if the specified object property is of the given type;\n * `false` otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category Type\n * @sig Type -> String -> Object -> Boolean\n * @param {Function} type\n * @param {String} name\n * @param {*} obj\n * @return {Boolean}\n * @see R.is, R.propSatisfies\n * @example\n *\n *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true\n *      R.propIs(Number, 'x', {x: 'foo'});    //=> false\n *      R.propIs(Number, 'x', {});            //=> false\n */\n\nvar propIs =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function propIs(type, name, obj) {\n  return Object(_is__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(type, obj[name]);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (propIs);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/propIs.js?");

/***/ }),

/***/ "./node_modules/ramda/es/propOr.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/propOr.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n\n\n/**\n * If the given, non-null object has an own property with the specified name,\n * returns the value of that property. Otherwise returns the provided default\n * value.\n *\n * @func\n * @memberOf R\n * @since v0.6.0\n * @category Object\n * @sig a -> String -> Object -> a\n * @param {*} val The default value.\n * @param {String} p The name of the property to return.\n * @param {Object} obj The object to query.\n * @return {*} The value of given property of the supplied object or the default value.\n * @example\n *\n *      var alice = {\n *        name: 'ALICE',\n *        age: 101\n *      };\n *      var favorite = R.prop('favoriteLibrary');\n *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');\n *\n *      favorite(alice);  //=> undefined\n *      favoriteWithDefault(alice);  //=> 'Ramda'\n */\n\nvar propOr =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function propOr(val, p, obj) {\n  return obj != null && Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(p, obj) ? obj[p] : val;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (propOr);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/propOr.js?");

/***/ }),

/***/ "./node_modules/ramda/es/propSatisfies.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/propSatisfies.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Returns `true` if the specified object property satisfies the given\n * predicate; `false` otherwise. You can test multiple properties with\n * [`R.where`](#where).\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category Logic\n * @sig (a -> Boolean) -> String -> {String: a} -> Boolean\n * @param {Function} pred\n * @param {String} name\n * @param {*} obj\n * @return {Boolean}\n * @see R.where, R.propEq, R.propIs\n * @example\n *\n *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true\n */\n\nvar propSatisfies =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function propSatisfies(pred, name, obj) {\n  return pred(obj[name]);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (propSatisfies);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/propSatisfies.js?");

/***/ }),

/***/ "./node_modules/ramda/es/props.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/props.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Acts as multiple `prop`: array of keys in, array of values out. Preserves\n * order.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig [k] -> {k: v} -> [v]\n * @param {Array} ps The property names to fetch\n * @param {Object} obj The object to query\n * @return {Array} The corresponding values or partially applied function.\n * @example\n *\n *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]\n *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]\n *\n *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));\n *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'\n */\n\nvar props =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function props(ps, obj) {\n  var len = ps.length;\n  var out = [];\n  var idx = 0;\n\n  while (idx < len) {\n    out[idx] = obj[ps[idx]];\n    idx += 1;\n  }\n\n  return out;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/props.js?");

/***/ }),

/***/ "./node_modules/ramda/es/range.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/range.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isNumber */ \"./node_modules/ramda/es/internal/_isNumber.js\");\n\n\n/**\n * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Number -> Number -> [Number]\n * @param {Number} from The first number in the list.\n * @param {Number} to One more than the last number in the list.\n * @return {Array} The list of numbers in tthe set `[a, b)`.\n * @example\n *\n *      R.range(1, 5);    //=> [1, 2, 3, 4]\n *      R.range(50, 53);  //=> [50, 51, 52]\n */\n\nvar range =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function range(from, to) {\n  if (!(Object(_internal_isNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(from) && Object(_internal_isNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(to))) {\n    throw new TypeError('Both arguments to range must be numbers');\n  }\n\n  var result = [];\n  var n = from;\n\n  while (n < to) {\n    result.push(n);\n    n += 1;\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (range);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/range.js?");

/***/ }),

/***/ "./node_modules/ramda/es/reduce.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/reduce.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n\n\n/**\n * Returns a single item by iterating through the list, successively calling\n * the iterator function and passing it an accumulator value and the current\n * value from the array, and then passing the result to the next call.\n *\n * The iterator function receives two values: *(acc, value)*. It may use\n * [`R.reduced`](#reduced) to shortcut the iteration.\n *\n * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function\n * is *(value, acc)*.\n *\n * Note: `R.reduce` does not skip deleted or unassigned indices (sparse\n * arrays), unlike the native `Array.prototype.reduce` method. For more details\n * on this behavior, see:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description\n *\n * Dispatches to the `reduce` method of the third argument, if present. When\n * doing so, it is up to the user to handle the [`R.reduced`](#reduced)\n * shortcuting, as this is not implemented by `reduce`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig ((a, b) -> a) -> a -> [b] -> a\n * @param {Function} fn The iterator function. Receives two values, the accumulator and the\n *        current element from the array.\n * @param {*} acc The accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @see R.reduced, R.addIndex, R.reduceRight\n * @example\n *\n *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10\n *      //          -               -10\n *      //         / \\              / \\\n *      //        -   4           -6   4\n *      //       / \\              / \\\n *      //      -   3   ==>     -3   3\n *      //     / \\              / \\\n *      //    -   2           -1   2\n *      //   / \\              / \\\n *      //  0   1            0   1\n *\n * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)\n */\n\nvar reduce =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_internal_reduce__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reduce);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/reduce.js?");

/***/ }),

/***/ "./node_modules/ramda/es/reduceBy.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/reduceBy.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curryN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curryN */ \"./node_modules/ramda/es/internal/_curryN.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _internal_xreduceBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/_xreduceBy */ \"./node_modules/ramda/es/internal/_xreduceBy.js\");\n\n\n\n\n\n/**\n * Groups the elements of the list according to the result of calling\n * the String-returning function `keyFn` on each element and reduces the elements\n * of each group to a single value via the reducer function `valueFn`.\n *\n * This function is basically a more general [`groupBy`](#groupBy) function.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.20.0\n * @category List\n * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}\n * @param {Function} valueFn The function that reduces the elements of each group to a single\n *        value. Receives two values, accumulator for a particular group and the current element.\n * @param {*} acc The (initial) accumulator value for each group.\n * @param {Function} keyFn The function that maps the list's element into a key.\n * @param {Array} list The array to group.\n * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of\n *         `valueFn` for elements which produced that key when passed to `keyFn`.\n * @see R.groupBy, R.reduce\n * @example\n *\n *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);\n *      var namesByGrade = reduceToNamesBy(function(student) {\n *        var score = student.score;\n *        return score < 65 ? 'F' :\n *               score < 70 ? 'D' :\n *               score < 80 ? 'C' :\n *               score < 90 ? 'B' : 'A';\n *      });\n *      var students = [{name: 'Lucy', score: 92},\n *                      {name: 'Drew', score: 85},\n *                      // ...\n *                      {name: 'Bart', score: 62}];\n *      namesByGrade(students);\n *      // {\n *      //   'A': ['Lucy'],\n *      //   'B': ['Drew']\n *      //   // ...,\n *      //   'F': ['Bart']\n *      // }\n */\n\nvar reduceBy =\n/*#__PURE__*/\nObject(_internal_curryN__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, [],\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([], _internal_xreduceBy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], function reduceBy(valueFn, valueAcc, keyFn, list) {\n  return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function (acc, elt) {\n    var key = keyFn(elt);\n    acc[key] = valueFn(Object(_internal_has__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(key, acc) ? acc[key] : valueAcc, elt);\n    return acc;\n  }, {}, list);\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reduceBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/reduceBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/reduceRight.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/reduceRight.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Returns a single item by iterating through the list, successively calling\n * the iterator function and passing it an accumulator value and the current\n * value from the array, and then passing the result to the next call.\n *\n * Similar to [`reduce`](#reduce), except moves through the input list from the\n * right to the left.\n *\n * The iterator function receives two values: *(value, acc)*, while the arguments'\n * order of `reduce`'s iterator function is *(acc, value)*.\n *\n * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse\n * arrays), unlike the native `Array.prototype.reduceRight` method. For more details\n * on this behavior, see:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig ((a, b) -> b) -> b -> [a] -> b\n * @param {Function} fn The iterator function. Receives two values, the current element from the array\n *        and the accumulator.\n * @param {*} acc The accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @see R.reduce, R.addIndex\n * @example\n *\n *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2\n *      //    -               -2\n *      //   / \\              / \\\n *      //  1   -            1   3\n *      //     / \\              / \\\n *      //    2   -     ==>    2  -1\n *      //       / \\              / \\\n *      //      3   -            3   4\n *      //         / \\              / \\\n *      //        4   0            4   0\n *\n * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))\n */\n\nvar reduceRight =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function reduceRight(fn, acc, list) {\n  var idx = list.length - 1;\n\n  while (idx >= 0) {\n    acc = fn(list[idx], acc);\n    idx -= 1;\n  }\n\n  return acc;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reduceRight);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/reduceRight.js?");

/***/ }),

/***/ "./node_modules/ramda/es/reduceWhile.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/es/reduceWhile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curryN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curryN */ \"./node_modules/ramda/es/internal/_curryN.js\");\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _internal_reduced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_reduced */ \"./node_modules/ramda/es/internal/_reduced.js\");\n\n\n\n/**\n * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating\n * through the list, successively calling the iterator function. `reduceWhile`\n * also takes a predicate that is evaluated before each step. If the predicate\n * returns `false`, it \"short-circuits\" the iteration and returns the current\n * value of the accumulator.\n *\n * @func\n * @memberOf R\n * @since v0.22.0\n * @category List\n * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a\n * @param {Function} pred The predicate. It is passed the accumulator and the\n *        current element.\n * @param {Function} fn The iterator function. Receives two values, the\n *        accumulator and the current element.\n * @param {*} a The accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @see R.reduce, R.reduced\n * @example\n *\n *      var isOdd = (acc, x) => x % 2 === 1;\n *      var xs = [1, 3, 5, 60, 777, 800];\n *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9\n *\n *      var ys = [2, 4, 6]\n *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111\n */\n\nvar reduceWhile =\n/*#__PURE__*/\nObject(_internal_curryN__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, [], function _reduceWhile(pred, fn, a, list) {\n  return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (acc, x) {\n    return pred(acc, x) ? fn(acc, x) : Object(_internal_reduced__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(acc);\n  }, a, list);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reduceWhile);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/reduceWhile.js?");

/***/ }),

/***/ "./node_modules/ramda/es/reduced.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/reduced.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_reduced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_reduced */ \"./node_modules/ramda/es/internal/_reduced.js\");\n\n\n/**\n * Returns a value wrapped to indicate that it is the final value of the reduce\n * and transduce functions. The returned value should be considered a black\n * box: the internal structure is not guaranteed to be stable.\n *\n * Note: this optimization is unavailable to functions not explicitly listed\n * above. For instance, it is not currently supported by\n * [`reduceRight`](#reduceRight).\n *\n * @func\n * @memberOf R\n * @since v0.15.0\n * @category List\n * @sig a -> *\n * @param {*} x The final value of the reduce.\n * @return {*} The wrapped value.\n * @see R.reduce, R.transduce\n * @example\n *\n *     R.reduce(\n *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),\n *       [],\n *       [1, 2, 3, 4, 5]) // [1, 2, 3]\n */\n\nvar reduced =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_internal_reduced__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reduced);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/reduced.js?");

/***/ }),

/***/ "./node_modules/ramda/es/reject.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/reject.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_complement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_complement */ \"./node_modules/ramda/es/internal/_complement.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./node_modules/ramda/es/filter.js\");\n\n\n\n/**\n * The complement of [`filter`](#filter).\n *\n * Acts as a transducer if a transformer is given in list position. Filterable\n * objects include plain objects or any object that has a filter method such\n * as `Array`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Filterable f => (a -> Boolean) -> f a -> f a\n * @param {Function} pred\n * @param {Array} filterable\n * @return {Array}\n * @see R.filter, R.transduce, R.addIndex\n * @example\n *\n *      var isOdd = (n) => n % 2 === 1;\n *\n *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]\n *\n *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}\n */\n\nvar reject =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function reject(pred, filterable) {\n  return Object(_filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_internal_complement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pred), filterable);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reject);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/reject.js?");

/***/ }),

/***/ "./node_modules/ramda/es/remove.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/remove.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Removes the sub-list of `list` starting at index `start` and containing\n * `count` elements. _Note that this is not destructive_: it returns a copy of\n * the list with the changes.\n * <small>No lists have been harmed in the application of this function.</small>\n *\n * @func\n * @memberOf R\n * @since v0.2.2\n * @category List\n * @sig Number -> Number -> [a] -> [a]\n * @param {Number} start The position to start removing elements\n * @param {Number} count The number of elements to remove\n * @param {Array} list The list to remove from\n * @return {Array} A new Array with `count` elements from `start` removed.\n * @example\n *\n *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]\n */\n\nvar remove =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function remove(start, count, list) {\n  var result = Array.prototype.slice.call(list, 0);\n  result.splice(start, count);\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (remove);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/remove.js?");

/***/ }),

/***/ "./node_modules/ramda/es/repeat.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/repeat.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./always */ \"./node_modules/ramda/es/always.js\");\n/* harmony import */ var _times__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./times */ \"./node_modules/ramda/es/times.js\");\n\n\n\n/**\n * Returns a fixed list of size `n` containing a specified identical value.\n *\n * @func\n * @memberOf R\n * @since v0.1.1\n * @category List\n * @sig a -> n -> [a]\n * @param {*} value The value to repeat.\n * @param {Number} n The desired size of the output list.\n * @return {Array} A new array containing `n` `value`s.\n * @see R.times\n * @example\n *\n *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']\n *\n *      var obj = {};\n *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]\n *      repeatedObjs[0] === repeatedObjs[1]; //=> true\n * @symb R.repeat(a, 0) = []\n * @symb R.repeat(a, 1) = [a]\n * @symb R.repeat(a, 2) = [a, a]\n */\n\nvar repeat =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function repeat(value, n) {\n  return Object(_times__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_always__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value), n);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (repeat);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/repeat.js?");

/***/ }),

/***/ "./node_modules/ramda/es/replace.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/replace.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Replace a substring or regex match in a string with a replacement.\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category String\n * @sig RegExp|String -> String -> String -> String\n * @param {RegExp|String} pattern A regular expression or a substring to match.\n * @param {String} replacement The string to replace the matches with.\n * @param {String} str The String to do the search and replacement in.\n * @return {String} The result.\n * @example\n *\n *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'\n *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'\n *\n *      // Use the \"g\" (global) flag to replace all occurrences:\n *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'\n */\n\nvar replace =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function replace(regex, replacement, str) {\n  return str.replace(regex, replacement);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (replace);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/replace.js?");

/***/ }),

/***/ "./node_modules/ramda/es/reverse.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/reverse.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_isString */ \"./node_modules/ramda/es/internal/_isString.js\");\n\n\n/**\n * Returns a new list or string with the elements or characters in reverse\n * order.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {Array|String} list\n * @return {Array|String}\n * @example\n *\n *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]\n *      R.reverse([1, 2]);     //=> [2, 1]\n *      R.reverse([1]);        //=> [1]\n *      R.reverse([]);         //=> []\n *\n *      R.reverse('abc');      //=> 'cba'\n *      R.reverse('ab');       //=> 'ba'\n *      R.reverse('a');        //=> 'a'\n *      R.reverse('');         //=> ''\n */\n\nvar reverse =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function reverse(list) {\n  return Object(_internal_isString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reverse);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/reverse.js?");

/***/ }),

/***/ "./node_modules/ramda/es/scan.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/scan.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Scan is similar to [`reduce`](#reduce), but returns a list of successively\n * reduced values from the left\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category List\n * @sig ((a, b) -> a) -> a -> [b] -> [a]\n * @param {Function} fn The iterator function. Receives two values, the accumulator and the\n *        current element from the array\n * @param {*} acc The accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {Array} A list of all intermediately reduced values.\n * @see R.reduce\n * @example\n *\n *      var numbers = [1, 2, 3, 4];\n *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]\n * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]\n */\n\nvar scan =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function scan(fn, acc, list) {\n  var idx = 0;\n  var len = list.length;\n  var result = [acc];\n\n  while (idx < len) {\n    acc = fn(acc, list[idx]);\n    result[idx + 1] = acc;\n    idx += 1;\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scan);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/scan.js?");

/***/ }),

/***/ "./node_modules/ramda/es/sequence.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/sequence.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ap */ \"./node_modules/ramda/es/ap.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n/* harmony import */ var _prepend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prepend */ \"./node_modules/ramda/es/prepend.js\");\n/* harmony import */ var _reduceRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduceRight */ \"./node_modules/ramda/es/reduceRight.js\");\n\n\n\n\n\n/**\n * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)\n * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an\n * Applicative of Traversable.\n *\n * Dispatches to the `sequence` method of the second argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category List\n * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)\n * @param {Function} of\n * @param {*} traversable\n * @return {*}\n * @see R.traverse\n * @example\n *\n *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])\n *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()\n *\n *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]\n *      R.sequence(R.of, Nothing());       //=> [Nothing()]\n */\n\nvar sequence =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function sequence(of, traversable) {\n  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : Object(_reduceRight__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function (x, acc) {\n    return Object(_ap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_prepend__WEBPACK_IMPORTED_MODULE_3__[\"default\"], x), acc);\n  }, of([]), traversable);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sequence);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/sequence.js?");

/***/ }),

/***/ "./node_modules/ramda/es/set.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/set.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./always */ \"./node_modules/ramda/es/always.js\");\n/* harmony import */ var _over__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./over */ \"./node_modules/ramda/es/over.js\");\n\n\n\n/**\n * Returns the result of \"setting\" the portion of the given data structure\n * focused by the given lens to the given value.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category Object\n * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s\n * @sig Lens s a -> a -> s -> s\n * @param {Lens} lens\n * @param {*} v\n * @param {*} x\n * @return {*}\n * @see R.prop, R.lensIndex, R.lensProp\n * @example\n *\n *      var xLens = R.lensProp('x');\n *\n *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}\n *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}\n */\n\nvar set =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function set(lens, v, x) {\n  return Object(_over__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lens, Object(_always__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(v), x);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (set);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/set.js?");

/***/ }),

/***/ "./node_modules/ramda/es/slice.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/slice.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/es/internal/_checkForMethod.js\");\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n\n/**\n * Returns the elements of the given list or string (or object with a `slice`\n * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).\n *\n * Dispatches to the `slice` method of the third argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.4\n * @category List\n * @sig Number -> Number -> [a] -> [a]\n * @sig Number -> Number -> String -> String\n * @param {Number} fromIndex The start index (inclusive).\n * @param {Number} toIndex The end index (exclusive).\n * @param {*} list\n * @return {*}\n * @example\n *\n *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']\n *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']\n *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']\n *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']\n *      R.slice(0, 3, 'ramda');                     //=> 'ram'\n */\n\nvar slice =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('slice', function slice(fromIndex, toIndex, list) {\n  return Array.prototype.slice.call(list, fromIndex, toIndex);\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slice);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/slice.js?");

/***/ }),

/***/ "./node_modules/ramda/es/sort.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/sort.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Returns a copy of the list, sorted according to the comparator function,\n * which should accept two values at a time and return a negative number if the\n * first value is smaller, a positive number if it's larger, and zero if they\n * are equal. Please note that this is a **copy** of the list. It does not\n * modify the original.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig ((a, a) -> Number) -> [a] -> [a]\n * @param {Function} comparator A sorting function :: a -> b -> Int\n * @param {Array} list The list to sort\n * @return {Array} a new array with its elements sorted by the comparator function.\n * @example\n *\n *      var diff = function(a, b) { return a - b; };\n *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]\n */\n\nvar sort =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function sort(comparator, list) {\n  return Array.prototype.slice.call(list, 0).sort(comparator);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sort);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/sort.js?");

/***/ }),

/***/ "./node_modules/ramda/es/sortBy.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/sortBy.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Sorts the list according to the supplied function.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord b => (a -> b) -> [a] -> [a]\n * @param {Function} fn\n * @param {Array} list The list to sort.\n * @return {Array} A new list sorted by the keys generated by `fn`.\n * @example\n *\n *      var sortByFirstItem = R.sortBy(R.prop(0));\n *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));\n *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];\n *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]\n *      var alice = {\n *        name: 'ALICE',\n *        age: 101\n *      };\n *      var bob = {\n *        name: 'Bob',\n *        age: -10\n *      };\n *      var clara = {\n *        name: 'clara',\n *        age: 314.159\n *      };\n *      var people = [clara, bob, alice];\n *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]\n */\n\nvar sortBy =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function sortBy(fn, list) {\n  return Array.prototype.slice.call(list, 0).sort(function (a, b) {\n    var aa = fn(a);\n    var bb = fn(b);\n    return aa < bb ? -1 : aa > bb ? 1 : 0;\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sortBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/sortBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/sortWith.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/sortWith.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Sorts a list according to a list of comparators.\n *\n * @func\n * @memberOf R\n * @since v0.23.0\n * @category Relation\n * @sig [(a, a) -> Number] -> [a] -> [a]\n * @param {Array} functions A list of comparator functions.\n * @param {Array} list The list to sort.\n * @return {Array} A new list sorted according to the comarator functions.\n * @example\n *\n *      var alice = {\n *        name: 'alice',\n *        age: 40\n *      };\n *      var bob = {\n *        name: 'bob',\n *        age: 30\n *      };\n *      var clara = {\n *        name: 'clara',\n *        age: 40\n *      };\n *      var people = [clara, bob, alice];\n *      var ageNameSort = R.sortWith([\n *        R.descend(R.prop('age')),\n *        R.ascend(R.prop('name'))\n *      ]);\n *      ageNameSort(people); //=> [alice, clara, bob]\n */\n\nvar sortWith =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function sortWith(fns, list) {\n  return Array.prototype.slice.call(list, 0).sort(function (a, b) {\n    var result = 0;\n    var i = 0;\n\n    while (result === 0 && i < fns.length) {\n      result = fns[i](a, b);\n      i += 1;\n    }\n\n    return result;\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sortWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/sortWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/split.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/split.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoker */ \"./node_modules/ramda/es/invoker.js\");\n\n/**\n * Splits a string into an array of strings based on the given\n * separator.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category String\n * @sig (String | RegExp) -> String -> [String]\n * @param {String|RegExp} sep The pattern.\n * @param {String} str The string to separate into an array.\n * @return {Array} The array of strings from `str` separated by `str`.\n * @see R.join\n * @example\n *\n *      var pathComponents = R.split('/');\n *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']\n *\n *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']\n */\n\nvar split =\n/*#__PURE__*/\nObject(_invoker__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 'split');\n/* harmony default export */ __webpack_exports__[\"default\"] = (split);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/split.js?");

/***/ }),

/***/ "./node_modules/ramda/es/splitAt.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/splitAt.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./length */ \"./node_modules/ramda/es/length.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n\n\n\n/**\n * Splits a given list or string at a given index.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category List\n * @sig Number -> [a] -> [[a], [a]]\n * @sig Number -> String -> [String, String]\n * @param {Number} index The index where the array/string is split.\n * @param {Array|String} array The array/string to be split.\n * @return {Array}\n * @example\n *\n *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]\n *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']\n *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']\n */\n\nvar splitAt =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function splitAt(index, array) {\n  return [Object(_slice__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(0, index, array), Object(_slice__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(index, Object(_length__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array), array)];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (splitAt);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/splitAt.js?");

/***/ }),

/***/ "./node_modules/ramda/es/splitEvery.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/splitEvery.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n\n\n/**\n * Splits a collection into slices of the specified length.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category List\n * @sig Number -> [a] -> [[a]]\n * @sig Number -> String -> [String]\n * @param {Number} n\n * @param {Array} list\n * @return {Array}\n * @example\n *\n *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]\n *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']\n */\n\nvar splitEvery =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function splitEvery(n, list) {\n  if (n <= 0) {\n    throw new Error('First argument to splitEvery must be a positive integer');\n  }\n\n  var result = [];\n  var idx = 0;\n\n  while (idx < list.length) {\n    result.push(Object(_slice__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(idx, idx += n, list));\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (splitEvery);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/splitEvery.js?");

/***/ }),

/***/ "./node_modules/ramda/es/splitWhen.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/splitWhen.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Takes a list and a predicate and returns a pair of lists with the following properties:\n *\n *  - the result of concatenating the two output lists is equivalent to the input list;\n *  - none of the elements of the first output list satisfies the predicate; and\n *  - if the second output list is non-empty, its first element satisfies the predicate.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category List\n * @sig (a -> Boolean) -> [a] -> [[a], [a]]\n * @param {Function} pred The predicate that determines where the array is split.\n * @param {Array} list The array to be split.\n * @return {Array}\n * @example\n *\n *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]\n */\n\nvar splitWhen =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function splitWhen(pred, list) {\n  var idx = 0;\n  var len = list.length;\n  var prefix = [];\n\n  while (idx < len && !pred(list[idx])) {\n    prefix.push(list[idx]);\n    idx += 1;\n  }\n\n  return [prefix, Array.prototype.slice.call(list, idx)];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (splitWhen);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/splitWhen.js?");

/***/ }),

/***/ "./node_modules/ramda/es/startsWith.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/es/startsWith.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./take */ \"./node_modules/ramda/es/take.js\");\n\n\n\n/**\n * Checks if a list starts with the provided values\n *\n * @func\n * @memberOf R\n * @since v0.24.0\n * @category List\n * @sig [a] -> Boolean\n * @sig String -> Boolean\n * @param {*} prefix\n * @param {*} list\n * @return {Boolean}\n * @example\n *\n *      R.startsWith('a', 'abc')                //=> true\n *      R.startsWith('b', 'abc')                //=> false\n *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true\n *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false\n */\n\nvar startsWith =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (prefix, list) {\n  return Object(_equals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_take__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(prefix.length, list), prefix);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startsWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/startsWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/subtract.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/subtract.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Subtracts its second argument from its first argument.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Math\n * @sig Number -> Number -> Number\n * @param {Number} a The first value.\n * @param {Number} b The second value.\n * @return {Number} The result of `a - b`.\n * @see R.add\n * @example\n *\n *      R.subtract(10, 8); //=> 2\n *\n *      var minus5 = R.subtract(R.__, 5);\n *      minus5(17); //=> 12\n *\n *      var complementaryAngle = R.subtract(90);\n *      complementaryAngle(30); //=> 60\n *      complementaryAngle(72); //=> 18\n */\n\nvar subtract =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function subtract(a, b) {\n  return Number(a) - Number(b);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (subtract);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/subtract.js?");

/***/ }),

/***/ "./node_modules/ramda/es/sum.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/sum.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./node_modules/ramda/es/add.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reduce */ \"./node_modules/ramda/es/reduce.js\");\n\n\n/**\n * Adds together all the elements of a list.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Math\n * @sig [Number] -> Number\n * @param {Array} list An array of numbers\n * @return {Number} The sum of all the numbers in the list.\n * @see R.reduce\n * @example\n *\n *      R.sum([2,4,6,8,100,1]); //=> 121\n */\n\nvar sum =\n/*#__PURE__*/\nObject(_reduce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_add__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 0);\n/* harmony default export */ __webpack_exports__[\"default\"] = (sum);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/sum.js?");

/***/ }),

/***/ "./node_modules/ramda/es/symmetricDifference.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/es/symmetricDifference.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./node_modules/ramda/es/concat.js\");\n/* harmony import */ var _difference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./difference */ \"./node_modules/ramda/es/difference.js\");\n\n\n\n/**\n * Finds the set (i.e. no duplicates) of all elements contained in the first or\n * second list, but not both.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category Relation\n * @sig [*] -> [*] -> [*]\n * @param {Array} list1 The first list.\n * @param {Array} list2 The second list.\n * @return {Array} The elements in `list1` or `list2`, but not both.\n * @see R.symmetricDifferenceWith, R.difference, R.differenceWith\n * @example\n *\n *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]\n *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]\n */\n\nvar symmetricDifference =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function symmetricDifference(list1, list2) {\n  return Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_difference__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(list1, list2), Object(_difference__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(list2, list1));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (symmetricDifference);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/symmetricDifference.js?");

/***/ }),

/***/ "./node_modules/ramda/es/symmetricDifferenceWith.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/es/symmetricDifferenceWith.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./node_modules/ramda/es/concat.js\");\n/* harmony import */ var _differenceWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differenceWith */ \"./node_modules/ramda/es/differenceWith.js\");\n\n\n\n/**\n * Finds the set (i.e. no duplicates) of all elements contained in the first or\n * second list, but not both. Duplication is determined according to the value\n * returned by applying the supplied predicate to two list elements.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category Relation\n * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]\n * @param {Function} pred A predicate used to test whether two items are equal.\n * @param {Array} list1 The first list.\n * @param {Array} list2 The second list.\n * @return {Array} The elements in `list1` or `list2`, but not both.\n * @see R.symmetricDifference, R.difference, R.differenceWith\n * @example\n *\n *      var eqA = R.eqBy(R.prop('a'));\n *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];\n *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];\n *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]\n */\n\nvar symmetricDifferenceWith =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function symmetricDifferenceWith(pred, list1, list2) {\n  return Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_differenceWith__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pred, list1, list2), Object(_differenceWith__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pred, list2, list1));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (symmetricDifferenceWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/symmetricDifferenceWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/tail.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/tail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/es/internal/_checkForMethod.js\");\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n\n\n\n/**\n * Returns all but the first element of the given list or string (or object\n * with a `tail` method).\n *\n * Dispatches to the `slice` method of the first argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {*} list\n * @return {*}\n * @see R.head, R.init, R.last\n * @example\n *\n *      R.tail([1, 2, 3]);  //=> [2, 3]\n *      R.tail([1, 2]);     //=> [2]\n *      R.tail([1]);        //=> []\n *      R.tail([]);         //=> []\n *\n *      R.tail('abc');  //=> 'bc'\n *      R.tail('ab');   //=> 'b'\n *      R.tail('a');    //=> ''\n *      R.tail('');     //=> ''\n */\n\nvar tail =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_checkForMethod__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('tail',\n/*#__PURE__*/\nObject(_slice__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(1, Infinity)));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tail);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/tail.js?");

/***/ }),

/***/ "./node_modules/ramda/es/take.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/take.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xtake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xtake */ \"./node_modules/ramda/es/internal/_xtake.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n\n\n\n\n/**\n * Returns the first `n` elements of the given list, string, or\n * transducer/transformer (or object with a `take` method).\n *\n * Dispatches to the `take` method of the second argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Number -> [a] -> [a]\n * @sig Number -> String -> String\n * @param {Number} n\n * @param {*} list\n * @return {*}\n * @see R.drop\n * @example\n *\n *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']\n *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']\n *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\n *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\n *      R.take(3, 'ramda');               //=> 'ram'\n *\n *      var personnel = [\n *        'Dave Brubeck',\n *        'Paul Desmond',\n *        'Eugene Wright',\n *        'Joe Morello',\n *        'Gerry Mulligan',\n *        'Bob Bates',\n *        'Joe Dodge',\n *        'Ron Crotty'\n *      ];\n *\n *      var takeFive = R.take(5);\n *      takeFive(personnel);\n *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']\n * @symb R.take(-1, [a, b]) = [a, b]\n * @symb R.take(0, [a, b]) = []\n * @symb R.take(1, [a, b]) = [a]\n * @symb R.take(2, [a, b]) = [a, b]\n */\n\nvar take =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['take'], _internal_xtake__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function take(n, xs) {\n  return Object(_slice__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(0, n < 0 ? Infinity : n, xs);\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (take);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/take.js?");

/***/ }),

/***/ "./node_modules/ramda/es/takeLast.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/takeLast.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop */ \"./node_modules/ramda/es/drop.js\");\n\n\n/**\n * Returns a new list containing the last `n` elements of the given list.\n * If `n > list.length`, returns a list of `list.length` elements.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category List\n * @sig Number -> [a] -> [a]\n * @sig Number -> String -> String\n * @param {Number} n The number of elements to return.\n * @param {Array} xs The collection to consider.\n * @return {Array}\n * @see R.dropLast\n * @example\n *\n *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']\n *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']\n *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\n *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\n *      R.takeLast(3, 'ramda');               //=> 'mda'\n */\n\nvar takeLast =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function takeLast(n, xs) {\n  return Object(_drop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(n >= 0 ? xs.length - n : 0, xs);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (takeLast);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/takeLast.js?");

/***/ }),

/***/ "./node_modules/ramda/es/takeLastWhile.js":
/*!************************************************!*\
  !*** ./node_modules/ramda/es/takeLastWhile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n\n\n/**\n * Returns a new list containing the last `n` elements of a given list, passing\n * each value to the supplied predicate function, and terminating when the\n * predicate function returns `false`. Excludes the element that caused the\n * predicate function to fail. The predicate function is passed one argument:\n * *(value)*.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category List\n * @sig (a -> Boolean) -> [a] -> [a]\n * @sig (a -> Boolean) -> String -> String\n * @param {Function} fn The function called per iteration.\n * @param {Array} xs The collection to iterate over.\n * @return {Array} A new array.\n * @see R.dropLastWhile, R.addIndex\n * @example\n *\n *      var isNotOne = x => x !== 1;\n *\n *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]\n *\n *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'\n */\n\nvar takeLastWhile =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function takeLastWhile(fn, xs) {\n  var idx = xs.length - 1;\n\n  while (idx >= 0 && fn(xs[idx])) {\n    idx -= 1;\n  }\n\n  return Object(_slice__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(idx + 1, Infinity, xs);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (takeLastWhile);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/takeLastWhile.js?");

/***/ }),

/***/ "./node_modules/ramda/es/takeWhile.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/takeWhile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xtakeWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xtakeWhile */ \"./node_modules/ramda/es/internal/_xtakeWhile.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice */ \"./node_modules/ramda/es/slice.js\");\n\n\n\n\n/**\n * Returns a new list containing the first `n` elements of a given list,\n * passing each value to the supplied predicate function, and terminating when\n * the predicate function returns `false`. Excludes the element that caused the\n * predicate function to fail. The predicate function is passed one argument:\n * *(value)*.\n *\n * Dispatches to the `takeWhile` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig (a -> Boolean) -> [a] -> [a]\n * @sig (a -> Boolean) -> String -> String\n * @param {Function} fn The function called per iteration.\n * @param {Array} xs The collection to iterate over.\n * @return {Array} A new array.\n * @see R.dropWhile, R.transduce, R.addIndex\n * @example\n *\n *      var isNotFour = x => x !== 4;\n *\n *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]\n *\n *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'\n */\n\nvar takeWhile =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['takeWhile'], _internal_xtakeWhile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function takeWhile(fn, xs) {\n  var idx = 0;\n  var len = xs.length;\n\n  while (idx < len && fn(xs[idx])) {\n    idx += 1;\n  }\n\n  return Object(_slice__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(0, idx, xs);\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (takeWhile);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/takeWhile.js?");

/***/ }),

/***/ "./node_modules/ramda/es/tap.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/tap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/es/internal/_dispatchable.js\");\n/* harmony import */ var _internal_xtap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_xtap */ \"./node_modules/ramda/es/internal/_xtap.js\");\n\n\n\n/**\n * Runs the given function with the supplied object, then returns the object.\n *\n * Acts as a transducer if a transformer is given as second parameter.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (a -> *) -> a -> a\n * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.\n * @param {*} x\n * @return {*} `x`.\n * @example\n *\n *      var sayX = x => console.log('x is ' + x);\n *      R.tap(sayX, 100); //=> 100\n *      // logs 'x is 100'\n * @symb R.tap(f, a) = a\n */\n\nvar tap =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n/*#__PURE__*/\nObject(_internal_dispatchable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([], _internal_xtap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], function tap(fn, x) {\n  fn(x);\n  return x;\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tap);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/tap.js?");

/***/ }),

/***/ "./node_modules/ramda/es/test.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/test.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_cloneRegExp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_cloneRegExp */ \"./node_modules/ramda/es/internal/_cloneRegExp.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_isRegExp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_isRegExp */ \"./node_modules/ramda/es/internal/_isRegExp.js\");\n/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString */ \"./node_modules/ramda/es/toString.js\");\n\n\n\n\n/**\n * Determines whether a given string matches a given regular expression.\n *\n * @func\n * @memberOf R\n * @since v0.12.0\n * @category String\n * @sig RegExp -> String -> Boolean\n * @param {RegExp} pattern\n * @param {String} str\n * @return {Boolean}\n * @see R.match\n * @example\n *\n *      R.test(/^x/, 'xyz'); //=> true\n *      R.test(/^y/, 'xyz'); //=> false\n */\n\nvar test =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function test(pattern, str) {\n  if (!Object(_internal_isRegExp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pattern)) {\n    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + Object(_toString__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pattern));\n  }\n\n  return Object(_internal_cloneRegExp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pattern).test(str);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/test.js?");

/***/ }),

/***/ "./node_modules/ramda/es/times.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/times.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Calls an input function `n` times, returning an array containing the results\n * of those function calls.\n *\n * `fn` is passed one argument: The current value of `n`, which begins at `0`\n * and is gradually incremented to `n - 1`.\n *\n * @func\n * @memberOf R\n * @since v0.2.3\n * @category List\n * @sig (Number -> a) -> Number -> [a]\n * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.\n * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.\n * @return {Array} An array containing the return values of all calls to `fn`.\n * @see R.repeat\n * @example\n *\n *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]\n * @symb R.times(f, 0) = []\n * @symb R.times(f, 1) = [f(0)]\n * @symb R.times(f, 2) = [f(0), f(1)]\n */\n\nvar times =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function times(fn, n) {\n  var len = Number(n);\n  var idx = 0;\n  var list;\n\n  if (len < 0 || isNaN(len)) {\n    throw new RangeError('n must be a non-negative number');\n  }\n\n  list = new Array(len);\n\n  while (idx < len) {\n    list[idx] = fn(idx);\n    idx += 1;\n  }\n\n  return list;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (times);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/times.js?");

/***/ }),

/***/ "./node_modules/ramda/es/toLower.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/toLower.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoker */ \"./node_modules/ramda/es/invoker.js\");\n\n/**\n * The lower case version of a string.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category String\n * @sig String -> String\n * @param {String} str The string to lower case.\n * @return {String} The lower case version of `str`.\n * @see R.toUpper\n * @example\n *\n *      R.toLower('XYZ'); //=> 'xyz'\n */\n\nvar toLower =\n/*#__PURE__*/\nObject(_invoker__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, 'toLowerCase');\n/* harmony default export */ __webpack_exports__[\"default\"] = (toLower);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/toLower.js?");

/***/ }),

/***/ "./node_modules/ramda/es/toPairs.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/toPairs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n\n\n/**\n * Converts an object into an array of key, value arrays. Only the object's\n * own properties are used.\n * Note that the order of the output array is not guaranteed to be consistent\n * across different JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.4.0\n * @category Object\n * @sig {String: *} -> [[String,*]]\n * @param {Object} obj The object to extract from\n * @return {Array} An array of key, value arrays from the object's own properties.\n * @see R.fromPairs\n * @example\n *\n *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]\n */\n\nvar toPairs =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function toPairs(obj) {\n  var pairs = [];\n\n  for (var prop in obj) {\n    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prop, obj)) {\n      pairs[pairs.length] = [prop, obj[prop]];\n    }\n  }\n\n  return pairs;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toPairs);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/toPairs.js?");

/***/ }),

/***/ "./node_modules/ramda/es/toPairsIn.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/toPairsIn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Converts an object into an array of key, value arrays. The object's own\n * properties and prototype properties are used. Note that the order of the\n * output array is not guaranteed to be consistent across different JS\n * platforms.\n *\n * @func\n * @memberOf R\n * @since v0.4.0\n * @category Object\n * @sig {String: *} -> [[String,*]]\n * @param {Object} obj The object to extract from\n * @return {Array} An array of key, value arrays from the object's own\n *         and prototype properties.\n * @example\n *\n *      var F = function() { this.x = 'X'; };\n *      F.prototype.y = 'Y';\n *      var f = new F();\n *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]\n */\n\nvar toPairsIn =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function toPairsIn(obj) {\n  var pairs = [];\n\n  for (var prop in obj) {\n    pairs[pairs.length] = [prop, obj[prop]];\n  }\n\n  return pairs;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toPairsIn);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/toPairsIn.js?");

/***/ }),

/***/ "./node_modules/ramda/es/toString.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/toString.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _internal_toString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_toString */ \"./node_modules/ramda/es/internal/_toString.js\");\n\n\n/**\n * Returns the string representation of the given value. `eval`'ing the output\n * should result in a value equivalent to the input value. Many of the built-in\n * `toString` methods do not satisfy this requirement.\n *\n * If the given value is an `[object Object]` with a `toString` method other\n * than `Object.prototype.toString`, this method is invoked with no arguments\n * to produce the return value. This means user-defined constructor functions\n * can provide a suitable `toString` method. For example:\n *\n *     function Point(x, y) {\n *       this.x = x;\n *       this.y = y;\n *     }\n *\n *     Point.prototype.toString = function() {\n *       return 'new Point(' + this.x + ', ' + this.y + ')';\n *     };\n *\n *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category String\n * @sig * -> String\n * @param {*} val\n * @return {String}\n * @example\n *\n *      R.toString(42); //=> '42'\n *      R.toString('abc'); //=> '\"abc\"'\n *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'\n *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{\"bar\": 2, \"baz\": 3, \"foo\": 1}'\n *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date(\"2001-02-03T04:05:06.000Z\")'\n */\n\nvar toString =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function toString(val) {\n  return Object(_internal_toString__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(val, []);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toString);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/toString.js?");

/***/ }),

/***/ "./node_modules/ramda/es/toUpper.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/toUpper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoker */ \"./node_modules/ramda/es/invoker.js\");\n\n/**\n * The upper case version of a string.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category String\n * @sig String -> String\n * @param {String} str The string to upper case.\n * @return {String} The upper case version of `str`.\n * @see R.toLower\n * @example\n *\n *      R.toUpper('abc'); //=> 'ABC'\n */\n\nvar toUpper =\n/*#__PURE__*/\nObject(_invoker__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, 'toUpperCase');\n/* harmony default export */ __webpack_exports__[\"default\"] = (toUpper);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/toUpper.js?");

/***/ }),

/***/ "./node_modules/ramda/es/transduce.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/transduce.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/es/internal/_reduce.js\");\n/* harmony import */ var _internal_xwrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_xwrap */ \"./node_modules/ramda/es/internal/_xwrap.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n\n\n\n/**\n * Initializes a transducer using supplied iterator function. Returns a single\n * item by iterating through the list, successively calling the transformed\n * iterator function and passing it an accumulator value and the current value\n * from the array, and then passing the result to the next call.\n *\n * The iterator function receives two values: *(acc, value)*. It will be\n * wrapped as a transformer to initialize the transducer. A transformer can be\n * passed directly in place of an iterator function. In both cases, iteration\n * may be stopped early with the [`R.reduced`](#reduced) function.\n *\n * A transducer is a function that accepts a transformer and returns a\n * transformer and can be composed directly.\n *\n * A transformer is an an object that provides a 2-arity reducing iterator\n * function, step, 0-arity initial value function, init, and 1-arity result\n * extraction function, result. The step function is used as the iterator\n * function in reduce. The result function is used to convert the final\n * accumulator into the return type and in most cases is\n * [`R.identity`](#identity). The init function can be used to provide an\n * initial accumulator, but is ignored by transduce.\n *\n * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.\n *\n * @func\n * @memberOf R\n * @since v0.12.0\n * @category List\n * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a\n * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.\n * @param {Function} fn The iterator function. Receives two values, the accumulator and the\n *        current element from the array. Wrapped as transformer, if necessary, and used to\n *        initialize the transducer\n * @param {*} acc The initial accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @see R.reduce, R.reduced, R.into\n * @example\n *\n *      var numbers = [1, 2, 3, 4];\n *      var transducer = R.compose(R.map(R.add(1)), R.take(2));\n *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]\n *\n *      var isOdd = (x) => x % 2 === 1;\n *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));\n *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]\n */\n\nvar transduce =\n/*#__PURE__*/\nObject(_curryN__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4, function transduce(xf, fn, acc, list) {\n  return Object(_internal_reduce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(xf(typeof fn === 'function' ? Object(_internal_xwrap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn) : fn), acc, list);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (transduce);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/transduce.js?");

/***/ }),

/***/ "./node_modules/ramda/es/transpose.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/transpose.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Transposes the rows and columns of a 2D list.\n * When passed a list of `n` lists of length `x`,\n * returns a list of `x` lists of length `n`.\n *\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category List\n * @sig [[a]] -> [[a]]\n * @param {Array} list A 2D list\n * @return {Array} A 2D list\n * @example\n *\n *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]\n *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]\n *\n *      // If some of the rows are shorter than the following rows, their elements are skipped:\n *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]\n * @symb R.transpose([[a], [b], [c]]) = [a, b, c]\n * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]\n * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]\n */\n\nvar transpose =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function transpose(outerlist) {\n  var i = 0;\n  var result = [];\n\n  while (i < outerlist.length) {\n    var innerlist = outerlist[i];\n    var j = 0;\n\n    while (j < innerlist.length) {\n      if (typeof result[j] === 'undefined') {\n        result[j] = [];\n      }\n\n      result[j].push(innerlist[j]);\n      j += 1;\n    }\n\n    i += 1;\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transpose);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/transpose.js?");

/***/ }),

/***/ "./node_modules/ramda/es/traverse.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/traverse.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n/* harmony import */ var _sequence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequence */ \"./node_modules/ramda/es/sequence.js\");\n\n\n\n/**\n * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning\n * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),\n * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative\n * into an Applicative of Traversable.\n *\n * Dispatches to the `traverse` method of the third argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category List\n * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)\n * @param {Function} of\n * @param {Function} f\n * @param {*} traversable\n * @return {*}\n * @see R.sequence\n * @example\n *\n *      // Returns `Nothing` if the given divisor is `0`\n *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)\n *\n *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])\n *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing\n */\n\nvar traverse =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function traverse(of, f, traversable) {\n  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : Object(_sequence__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(of, Object(_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(f, traversable));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (traverse);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/traverse.js?");

/***/ }),

/***/ "./node_modules/ramda/es/trim.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/trim.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\nvar ws = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' + '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028' + '\\u2029\\uFEFF';\nvar zeroWidth = '\\u200b';\nvar hasProtoTrim = typeof String.prototype.trim === 'function';\n/**\n * Removes (strips) whitespace from both ends of the string.\n *\n * @func\n * @memberOf R\n * @since v0.6.0\n * @category String\n * @sig String -> String\n * @param {String} str The string to trim.\n * @return {String} Trimmed version of `str`.\n * @example\n *\n *      R.trim('   xyz  '); //=> 'xyz'\n *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']\n */\n\nvar _trim = !hasProtoTrim ||\n/*#__PURE__*/\nws.trim() || !\n/*#__PURE__*/\nzeroWidth.trim() ? function trim(str) {\n  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');\n  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');\n  return str.replace(beginRx, '').replace(endRx, '');\n} : function trim(str) {\n  return str.trim();\n};\n\nvar trim =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_trim);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (trim);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/trim.js?");

/***/ }),

/***/ "./node_modules/ramda/es/tryCatch.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/tryCatch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_arity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/es/internal/_arity.js\");\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n\n/**\n * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned\n * function evaluates the `tryer`; if it does not throw, it simply returns the\n * result. If the `tryer` *does* throw, the returned function evaluates the\n * `catcher` function and returns its result. Note that for effective\n * composition with this function, both the `tryer` and `catcher` functions\n * must return the same type of results.\n *\n * @func\n * @memberOf R\n * @since v0.20.0\n * @category Function\n * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)\n * @param {Function} tryer The function that may throw.\n * @param {Function} catcher The function that will be evaluated if `tryer` throws.\n * @return {Function} A new function that will catch exceptions and send then to the catcher.\n * @example\n *\n *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true\n *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false\n */\n\nvar tryCatch =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function _tryCatch(tryer, catcher) {\n  return Object(_internal_arity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tryer.length, function () {\n    try {\n      return tryer.apply(this, arguments);\n    } catch (e) {\n      return catcher.apply(this, Object(_internal_concat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([e], arguments));\n    }\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tryCatch);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/tryCatch.js?");

/***/ }),

/***/ "./node_modules/ramda/es/type.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/type.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Gives a single-word string description of the (native) type of a value,\n * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not\n * attempt to distinguish user Object types any further, reporting them all as\n * 'Object'.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Type\n * @sig (* -> {*}) -> String\n * @param {*} val The value to test\n * @return {String}\n * @example\n *\n *      R.type({}); //=> \"Object\"\n *      R.type(1); //=> \"Number\"\n *      R.type(false); //=> \"Boolean\"\n *      R.type('s'); //=> \"String\"\n *      R.type(null); //=> \"Null\"\n *      R.type([]); //=> \"Array\"\n *      R.type(/[A-z]/); //=> \"RegExp\"\n *      R.type(() => {}); //=> \"Function\"\n *      R.type(undefined); //=> \"Undefined\"\n */\n\nvar type =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function type(val) {\n  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (type);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/type.js?");

/***/ }),

/***/ "./node_modules/ramda/es/unapply.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/unapply.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Takes a function `fn`, which takes a single array argument, and returns a\n * function which:\n *\n *   - takes any number of positional arguments;\n *   - passes these arguments to `fn` as an array; and\n *   - returns the result.\n *\n * In other words, `R.unapply` derives a variadic function from a function which\n * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Function\n * @sig ([*...] -> a) -> (*... -> a)\n * @param {Function} fn\n * @return {Function}\n * @see R.apply\n * @example\n *\n *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'\n * @symb R.unapply(f)(a, b) = f([a, b])\n */\n\nvar unapply =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function unapply(fn) {\n  return function () {\n    return fn(Array.prototype.slice.call(arguments, 0));\n  };\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unapply);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/unapply.js?");

/***/ }),

/***/ "./node_modules/ramda/es/unary.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/unary.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _nAry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nAry */ \"./node_modules/ramda/es/nAry.js\");\n\n\n/**\n * Wraps a function of any arity (including nullary) in a function that accepts\n * exactly 1 parameter. Any extraneous parameters will not be passed to the\n * supplied function.\n *\n * @func\n * @memberOf R\n * @since v0.2.0\n * @category Function\n * @sig (* -> b) -> (a -> b)\n * @param {Function} fn The function to wrap.\n * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of\n *         arity 1.\n * @see R.binary, R.nAry\n * @example\n *\n *      var takesTwoArgs = function(a, b) {\n *        return [a, b];\n *      };\n *      takesTwoArgs.length; //=> 2\n *      takesTwoArgs(1, 2); //=> [1, 2]\n *\n *      var takesOneArg = R.unary(takesTwoArgs);\n *      takesOneArg.length; //=> 1\n *      // Only 1 argument is passed to the wrapped function\n *      takesOneArg(1, 2); //=> [1, undefined]\n * @symb R.unary(f)(a, b, c) = f(a)\n */\n\nvar unary =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function unary(fn) {\n  return Object(_nAry__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, fn);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unary);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/unary.js?");

/***/ }),

/***/ "./node_modules/ramda/es/uncurryN.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/uncurryN.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n\n\n/**\n * Returns a function of arity `n` from a (manually) curried function.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category Function\n * @sig Number -> (a -> b) -> (a -> c)\n * @param {Number} length The arity for the returned function.\n * @param {Function} fn The function to uncurry.\n * @return {Function} A new function.\n * @see R.curry\n * @example\n *\n *      var addFour = a => b => c => d => a + b + c + d;\n *\n *      var uncurriedAddFour = R.uncurryN(4, addFour);\n *      uncurriedAddFour(1, 2, 3, 4); //=> 10\n */\n\nvar uncurryN =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function uncurryN(depth, fn) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(depth, function () {\n    var currentDepth = 1;\n    var value = fn;\n    var idx = 0;\n    var endIdx;\n\n    while (currentDepth <= depth && typeof value === 'function') {\n      endIdx = currentDepth === depth ? arguments.length : idx + value.length;\n      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));\n      currentDepth += 1;\n      idx = endIdx;\n    }\n\n    return value;\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uncurryN);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/uncurryN.js?");

/***/ }),

/***/ "./node_modules/ramda/es/unfold.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/unfold.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Builds a list from a seed value. Accepts an iterator function, which returns\n * either false to stop iteration or an array of length 2 containing the value\n * to add to the resulting list and the seed to be used in the next call to the\n * iterator function.\n *\n * The iterator function receives one argument: *(seed)*.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category List\n * @sig (a -> [b]) -> * -> [b]\n * @param {Function} fn The iterator function. receives one argument, `seed`, and returns\n *        either false to quit iteration or an array of length two to proceed. The element\n *        at index 0 of this array will be added to the resulting array, and the element\n *        at index 1 will be passed to the next call to `fn`.\n * @param {*} seed The seed value.\n * @return {Array} The final list.\n * @example\n *\n *      var f = n => n > 50 ? false : [-n, n + 10];\n *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]\n * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]\n */\n\nvar unfold =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function unfold(fn, seed) {\n  var pair = fn(seed);\n  var result = [];\n\n  while (pair && pair.length) {\n    result[result.length] = pair[0];\n    pair = fn(pair[1]);\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unfold);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/unfold.js?");

/***/ }),

/***/ "./node_modules/ramda/es/union.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/union.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compose */ \"./node_modules/ramda/es/compose.js\");\n/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uniq */ \"./node_modules/ramda/es/uniq.js\");\n\n\n\n\n/**\n * Combines two lists into a set (i.e. no duplicates) composed of the elements\n * of each list.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig [*] -> [*] -> [*]\n * @param {Array} as The first list.\n * @param {Array} bs The second list.\n * @return {Array} The first and second lists concatenated, with\n *         duplicates removed.\n * @example\n *\n *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]\n */\n\nvar union =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n/*#__PURE__*/\nObject(_compose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_uniq__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _internal_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (union);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/union.js?");

/***/ }),

/***/ "./node_modules/ramda/es/unionWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/es/unionWith.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/es/internal/_concat.js\");\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _uniqWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uniqWith */ \"./node_modules/ramda/es/uniqWith.js\");\n\n\n\n/**\n * Combines two lists into a set (i.e. no duplicates) composed of the elements\n * of each list. Duplication is determined according to the value returned by\n * applying the supplied predicate to two list elements.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]\n * @param {Function} pred A predicate used to test whether two items are equal.\n * @param {Array} list1 The first list.\n * @param {Array} list2 The second list.\n * @return {Array} The first and second lists concatenated, with\n *         duplicates removed.\n * @see R.union\n * @example\n *\n *      var l1 = [{a: 1}, {a: 2}];\n *      var l2 = [{a: 1}, {a: 4}];\n *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]\n */\n\nvar unionWith =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function unionWith(pred, list1, list2) {\n  return Object(_uniqWith__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pred, Object(_internal_concat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list1, list2));\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unionWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/unionWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/uniq.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/uniq.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ \"./node_modules/ramda/es/identity.js\");\n/* harmony import */ var _uniqBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniqBy */ \"./node_modules/ramda/es/uniqBy.js\");\n\n\n/**\n * Returns a new list containing only one copy of each element in the original\n * list. [`R.equals`](#equals) is used to determine equality.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a]\n * @param {Array} list The array to consider.\n * @return {Array} The list of unique items.\n * @example\n *\n *      R.uniq([1, 1, 2, 1]); //=> [1, 2]\n *      R.uniq([1, '1']);     //=> [1, '1']\n *      R.uniq([[42], [42]]); //=> [[42]]\n */\n\nvar uniq =\n/*#__PURE__*/\nObject(_uniqBy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_identity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (uniq);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/uniq.js?");

/***/ }),

/***/ "./node_modules/ramda/es/uniqBy.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/uniqBy.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_Set */ \"./node_modules/ramda/es/internal/_Set.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Returns a new list containing only one copy of each element in the original\n * list, based upon the value returned by applying the supplied function to\n * each list element. Prefers the first item if the supplied function produces\n * the same value on two items. [`R.equals`](#equals) is used for comparison.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category List\n * @sig (a -> b) -> [a] -> [a]\n * @param {Function} fn A function used to produce a value to use during comparisons.\n * @param {Array} list The array to consider.\n * @return {Array} The list of unique items.\n * @example\n *\n *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]\n */\n\nvar uniqBy =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function uniqBy(fn, list) {\n  var set = new _internal_Set__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var result = [];\n  var idx = 0;\n  var appliedItem, item;\n\n  while (idx < list.length) {\n    item = list[idx];\n    appliedItem = fn(item);\n\n    if (set.add(appliedItem)) {\n      result.push(item);\n    }\n\n    idx += 1;\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uniqBy);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/uniqBy.js?");

/***/ }),

/***/ "./node_modules/ramda/es/uniqWith.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/uniqWith.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_containsWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_containsWith */ \"./node_modules/ramda/es/internal/_containsWith.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n\n/**\n * Returns a new list containing only one copy of each element in the original\n * list, based upon the value returned by applying the supplied predicate to\n * two list elements. Prefers the first item if two items compare equal based\n * on the predicate.\n *\n * @func\n * @memberOf R\n * @since v0.2.0\n * @category List\n * @sig ((a, a) -> Boolean) -> [a] -> [a]\n * @param {Function} pred A predicate used to test whether two items are equal.\n * @param {Array} list The array to consider.\n * @return {Array} The list of unique items.\n * @example\n *\n *      var strEq = R.eqBy(String);\n *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]\n *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]\n *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]\n *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']\n */\n\nvar uniqWith =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function uniqWith(pred, list) {\n  var idx = 0;\n  var len = list.length;\n  var result = [];\n  var item;\n\n  while (idx < len) {\n    item = list[idx];\n\n    if (!Object(_internal_containsWith__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pred, item, result)) {\n      result[result.length] = item;\n    }\n\n    idx += 1;\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uniqWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/uniqWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/unless.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/unless.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Tests the final argument by passing it to the given predicate function. If\n * the predicate is not satisfied, the function will return the result of\n * calling the `whenFalseFn` function with the same argument. If the predicate\n * is satisfied, the argument is returned as is.\n *\n * @func\n * @memberOf R\n * @since v0.18.0\n * @category Logic\n * @sig (a -> Boolean) -> (a -> a) -> a -> a\n * @param {Function} pred        A predicate function\n * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates\n *                               to a falsy value.\n * @param {*}        x           An object to test with the `pred` function and\n *                               pass to `whenFalseFn` if necessary.\n * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.\n * @see R.ifElse, R.when\n * @example\n *\n *      let safeInc = R.unless(R.isNil, R.inc);\n *      safeInc(null); //=> null\n *      safeInc(1); //=> 2\n */\n\nvar unless =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function unless(pred, whenFalseFn, x) {\n  return pred(x) ? x : whenFalseFn(x);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unless);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/unless.js?");

/***/ }),

/***/ "./node_modules/ramda/es/unnest.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/unnest.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_identity */ \"./node_modules/ramda/es/internal/_identity.js\");\n/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chain */ \"./node_modules/ramda/es/chain.js\");\n\n\n/**\n * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from\n * any [Chain](https://github.com/fantasyland/fantasy-land#chain).\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category List\n * @sig Chain c => c (c a) -> c a\n * @param {*} list\n * @return {*}\n * @see R.flatten, R.chain\n * @example\n *\n *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]\n *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]\n */\n\nvar unnest =\n/*#__PURE__*/\nObject(_chain__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_internal_identity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (unnest);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/unnest.js?");

/***/ }),

/***/ "./node_modules/ramda/es/until.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/until.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Takes a predicate, a transformation function, and an initial value,\n * and returns a value of the same type as the initial value.\n * It does so by applying the transformation until the predicate is satisfied,\n * at which point it returns the satisfactory value.\n *\n * @func\n * @memberOf R\n * @since v0.20.0\n * @category Logic\n * @sig (a -> Boolean) -> (a -> a) -> a -> a\n * @param {Function} pred A predicate function\n * @param {Function} fn The iterator function\n * @param {*} init Initial value\n * @return {*} Final value that satisfies predicate\n * @example\n *\n *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128\n */\n\nvar until =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function until(pred, fn, init) {\n  var val = init;\n\n  while (!pred(val)) {\n    val = fn(val);\n  }\n\n  return val;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (until);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/until.js?");

/***/ }),

/***/ "./node_modules/ramda/es/update.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/update.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjust */ \"./node_modules/ramda/es/adjust.js\");\n/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./always */ \"./node_modules/ramda/es/always.js\");\n\n\n\n/**\n * Returns a new copy of the array with the element at the provided index\n * replaced with the given value.\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category List\n * @sig Number -> a -> [a] -> [a]\n * @param {Number} idx The index to update.\n * @param {*} x The value to exist at the given index of the returned array.\n * @param {Array|Arguments} list The source array-like object to be updated.\n * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.\n * @see R.adjust\n * @example\n *\n *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]\n *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]\n * @symb R.update(-1, a, [b, c]) = [b, a]\n * @symb R.update(0, a, [b, c]) = [a, c]\n * @symb R.update(1, a, [b, c]) = [b, a]\n */\n\nvar update =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function update(idx, x, list) {\n  return Object(_adjust__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_always__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x), idx, list);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (update);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/update.js?");

/***/ }),

/***/ "./node_modules/ramda/es/useWith.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/useWith.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _curryN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curryN */ \"./node_modules/ramda/es/curryN.js\");\n\n\n/**\n * Accepts a function `fn` and a list of transformer functions and returns a\n * new curried function. When the new function is invoked, it calls the\n * function `fn` with parameters consisting of the result of calling each\n * supplied handler on successive arguments to the new function.\n *\n * If more arguments are passed to the returned function than transformer\n * functions, those arguments are passed directly to `fn` as additional\n * parameters. If you expect additional arguments that don't need to be\n * transformed, although you can ignore them, it's best to pass an identity\n * function so that the new function reports the correct arity.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)\n * @param {Function} fn The function to wrap.\n * @param {Array} transformers A list of transformer functions\n * @return {Function} The wrapped function.\n * @see R.converge\n * @example\n *\n *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81\n *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81\n *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32\n *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32\n * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))\n */\n\nvar useWith =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function useWith(fn, transformers) {\n  return Object(_curryN__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(transformers.length, function () {\n    var args = [];\n    var idx = 0;\n\n    while (idx < transformers.length) {\n      args.push(transformers[idx].call(this, arguments[idx]));\n      idx += 1;\n    }\n\n    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/useWith.js?");

/***/ }),

/***/ "./node_modules/ramda/es/values.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/values.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./node_modules/ramda/es/keys.js\");\n\n\n/**\n * Returns a list of all the enumerable own properties of the supplied object.\n * Note that the order of the output array is not guaranteed across different\n * JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig {k: v} -> [v]\n * @param {Object} obj The object to extract values from\n * @return {Array} An array of the values of the object's own properties.\n * @see R.valuesIn, R.keys\n * @example\n *\n *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]\n */\n\nvar values =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function values(obj) {\n  var props = Object(_keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\n  var len = props.length;\n  var vals = [];\n  var idx = 0;\n\n  while (idx < len) {\n    vals[idx] = obj[props[idx]];\n    idx += 1;\n  }\n\n  return vals;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (values);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/values.js?");

/***/ }),

/***/ "./node_modules/ramda/es/valuesIn.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/es/valuesIn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n/**\n * Returns a list of all the properties, including prototype properties, of the\n * supplied object.\n * Note that the order of the output array is not guaranteed to be consistent\n * across different JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.2.0\n * @category Object\n * @sig {k: v} -> [v]\n * @param {Object} obj The object to extract values from\n * @return {Array} An array of the values of the object's own and prototype properties.\n * @see R.values, R.keysIn\n * @example\n *\n *      var F = function() { this.x = 'X'; };\n *      F.prototype.y = 'Y';\n *      var f = new F();\n *      R.valuesIn(f); //=> ['X', 'Y']\n */\n\nvar valuesIn =\n/*#__PURE__*/\nObject(_internal_curry1__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function valuesIn(obj) {\n  var prop;\n  var vs = [];\n\n  for (prop in obj) {\n    vs[vs.length] = obj[prop];\n  }\n\n  return vs;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (valuesIn);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/valuesIn.js?");

/***/ }),

/***/ "./node_modules/ramda/es/view.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/view.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n // `Const` is a functor that effectively ignores the function given to `map`.\n\nvar Const = function (x) {\n  return {\n    value: x,\n    'fantasy-land/map': function () {\n      return this;\n    }\n  };\n};\n/**\n * Returns a \"view\" of the given data structure, determined by the given lens.\n * The lens's focus determines which portion of the data structure is visible.\n *\n * @func\n * @memberOf R\n * @since v0.16.0\n * @category Object\n * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s\n * @sig Lens s a -> s -> a\n * @param {Lens} lens\n * @param {*} x\n * @return {*}\n * @see R.prop, R.lensIndex, R.lensProp\n * @example\n *\n *      var xLens = R.lensProp('x');\n *\n *      R.view(xLens, {x: 1, y: 2});  //=> 1\n *      R.view(xLens, {x: 4, y: 2});  //=> 4\n */\n\n\nvar view =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function view(lens, x) {\n  // Using `Const` effectively ignores the setter function of the `lens`,\n  // leaving the value returned by the getter function unmodified.\n  return lens(Const)(x).value;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (view);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/view.js?");

/***/ }),

/***/ "./node_modules/ramda/es/when.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/when.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Tests the final argument by passing it to the given predicate function. If\n * the predicate is satisfied, the function will return the result of calling\n * the `whenTrueFn` function with the same argument. If the predicate is not\n * satisfied, the argument is returned as is.\n *\n * @func\n * @memberOf R\n * @since v0.18.0\n * @category Logic\n * @sig (a -> Boolean) -> (a -> a) -> a -> a\n * @param {Function} pred       A predicate function\n * @param {Function} whenTrueFn A function to invoke when the `condition`\n *                              evaluates to a truthy value.\n * @param {*}        x          An object to test with the `pred` function and\n *                              pass to `whenTrueFn` if necessary.\n * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.\n * @see R.ifElse, R.unless\n * @example\n *\n *      // truncate :: String -> String\n *      var truncate = R.when(\n *        R.propSatisfies(R.gt(R.__, 10), 'length'),\n *        R.pipe(R.take(10), R.append('…'), R.join(''))\n *      );\n *      truncate('12345');         //=> '12345'\n *      truncate('0123456789ABC'); //=> '0123456789…'\n */\n\nvar when =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function when(pred, whenTrueFn, x) {\n  return pred(x) ? whenTrueFn(x) : x;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (when);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/when.js?");

/***/ }),

/***/ "./node_modules/ramda/es/where.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/where.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _internal_has__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/es/internal/_has.js\");\n\n\n/**\n * Takes a spec object and a test object; returns true if the test satisfies\n * the spec. Each of the spec's own properties must be a predicate function.\n * Each predicate is applied to the value of the corresponding property of the\n * test object. `where` returns true if all the predicates return true, false\n * otherwise.\n *\n * `where` is well suited to declaratively expressing constraints for other\n * functions such as [`filter`](#filter) and [`find`](#find).\n *\n * @func\n * @memberOf R\n * @since v0.1.1\n * @category Object\n * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean\n * @param {Object} spec\n * @param {Object} testObj\n * @return {Boolean}\n * @see R.propSatisfies, R.whereEq\n * @example\n *\n *      // pred :: Object -> Boolean\n *      var pred = R.where({\n *        a: R.equals('foo'),\n *        b: R.complement(R.equals('bar')),\n *        x: R.gt(R.__, 10),\n *        y: R.lt(R.__, 20)\n *      });\n *\n *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true\n *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false\n *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false\n *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false\n *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false\n */\n\nvar where =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function where(spec, testObj) {\n  for (var prop in spec) {\n    if (Object(_internal_has__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prop, spec) && !spec[prop](testObj[prop])) {\n      return false;\n    }\n  }\n\n  return true;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (where);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/where.js?");

/***/ }),

/***/ "./node_modules/ramda/es/whereEq.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/whereEq.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equals */ \"./node_modules/ramda/es/equals.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./node_modules/ramda/es/map.js\");\n/* harmony import */ var _where__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./where */ \"./node_modules/ramda/es/where.js\");\n\n\n\n\n/**\n * Takes a spec object and a test object; returns true if the test satisfies\n * the spec, false otherwise. An object satisfies the spec if, for each of the\n * spec's own properties, accessing that property of the object gives the same\n * value (in [`R.equals`](#equals) terms) as accessing that property of the\n * spec.\n *\n * `whereEq` is a specialization of [`where`](#where).\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category Object\n * @sig {String: *} -> {String: *} -> Boolean\n * @param {Object} spec\n * @param {Object} testObj\n * @return {Boolean}\n * @see R.propEq, R.where\n * @example\n *\n *      // pred :: Object -> Boolean\n *      var pred = R.whereEq({a: 1, b: 2});\n *\n *      pred({a: 1});              //=> false\n *      pred({a: 1, b: 2});        //=> true\n *      pred({a: 1, b: 2, c: 3});  //=> true\n *      pred({a: 1, b: 1});        //=> false\n */\n\nvar whereEq =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function whereEq(spec, testObj) {\n  return Object(_where__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_equals__WEBPACK_IMPORTED_MODULE_1__[\"default\"], spec), testObj);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (whereEq);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/whereEq.js?");

/***/ }),

/***/ "./node_modules/ramda/es/without.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/without.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_contains */ \"./node_modules/ramda/es/internal/_contains.js\");\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flip */ \"./node_modules/ramda/es/flip.js\");\n/* harmony import */ var _reject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reject */ \"./node_modules/ramda/es/reject.js\");\n\n\n\n\n/**\n * Returns a new list without values in the first argument.\n * [`R.equals`](#equals) is used to determine equality.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category List\n * @sig [a] -> [a] -> [a]\n * @param {Array} list1 The values to be removed from `list2`.\n * @param {Array} list2 The array to remove values from.\n * @return {Array} The new array without values in `list1`.\n * @see R.transduce, R.difference\n * @example\n *\n *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]\n */\n\nvar without =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function (xs, list) {\n  return Object(_reject__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_flip__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_internal_contains__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(xs), list);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (without);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/without.js?");

/***/ }),

/***/ "./node_modules/ramda/es/xprod.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/xprod.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Creates a new list out of the two supplied by creating each possible pair\n * from the lists.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [b] -> [[a,b]]\n * @param {Array} as The first list.\n * @param {Array} bs The second list.\n * @return {Array} The list made by combining each possible pair from\n *         `as` and `bs` into pairs (`[a, b]`).\n * @example\n *\n *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]\n * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]\n */\n\nvar xprod =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function xprod(a, b) {\n  // = xprodWith(prepend); (takes about 3 times as long...)\n  var idx = 0;\n  var ilen = a.length;\n  var j;\n  var jlen = b.length;\n  var result = [];\n\n  while (idx < ilen) {\n    j = 0;\n\n    while (j < jlen) {\n      result[result.length] = [a[idx], b[j]];\n      j += 1;\n    }\n\n    idx += 1;\n  }\n\n  return result;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (xprod);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/xprod.js?");

/***/ }),

/***/ "./node_modules/ramda/es/zip.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/es/zip.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Creates a new list out of the two supplied by pairing up equally-positioned\n * items from both lists. The returned list is truncated to the length of the\n * shorter of the two input lists.\n * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [b] -> [[a,b]]\n * @param {Array} list1 The first array to consider.\n * @param {Array} list2 The second array to consider.\n * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.\n * @example\n *\n *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]\n * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]\n */\n\nvar zip =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function zip(a, b) {\n  var rv = [];\n  var idx = 0;\n  var len = Math.min(a.length, b.length);\n\n  while (idx < len) {\n    rv[idx] = [a[idx], b[idx]];\n    idx += 1;\n  }\n\n  return rv;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (zip);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/zip.js?");

/***/ }),

/***/ "./node_modules/ramda/es/zipObj.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/es/zipObj.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/es/internal/_curry2.js\");\n\n/**\n * Creates a new object out of a list of keys and a list of values.\n * Key/value pairing is truncated to the length of the shorter of the two lists.\n * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category List\n * @sig [String] -> [*] -> {String: *}\n * @param {Array} keys The array that will be properties on the output object.\n * @param {Array} values The list of values on the output object.\n * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.\n * @example\n *\n *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}\n */\n\nvar zipObj =\n/*#__PURE__*/\nObject(_internal_curry2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function zipObj(keys, values) {\n  var idx = 0;\n  var len = Math.min(keys.length, values.length);\n  var out = {};\n\n  while (idx < len) {\n    out[keys[idx]] = values[idx];\n    idx += 1;\n  }\n\n  return out;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (zipObj);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/zipObj.js?");

/***/ }),

/***/ "./node_modules/ramda/es/zipWith.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/es/zipWith.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _internal_curry3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/es/internal/_curry3.js\");\n\n/**\n * Creates a new list out of the two supplied by applying the function to each\n * equally-positioned pair in the lists. The returned list is truncated to the\n * length of the shorter of the two input lists.\n *\n * @function\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig ((a, b) -> c) -> [a] -> [b] -> [c]\n * @param {Function} fn The function used to combine the two elements into one value.\n * @param {Array} list1 The first array to consider.\n * @param {Array} list2 The second array to consider.\n * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`\n *         using `fn`.\n * @example\n *\n *      var f = (x, y) => {\n *        // ...\n *      };\n *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);\n *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]\n * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]\n */\n\nvar zipWith =\n/*#__PURE__*/\nObject(_internal_curry3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function zipWith(fn, a, b) {\n  var rv = [];\n  var idx = 0;\n  var len = Math.min(a.length, b.length);\n\n  while (idx < len) {\n    rv[idx] = fn(a[idx], b[idx]);\n    idx += 1;\n  }\n\n  return rv;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (zipWith);\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/es/zipWith.js?");

/***/ }),

/***/ "./src/Events.js":
/*!***********************!*\
  !*** ./src/Events.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Events =\n/*#__PURE__*/\nfunction () {\n  function Events() {\n    _classCallCheck(this, Events);\n\n    this.data = [];\n  }\n\n  _createClass(Events, [{\n    key: \"add\",\n    value: function add(eventName, param, targetId, time) {\n      var args = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];\n      this.data.push({\n        targetId: targetId,\n        eventName: eventName,\n        param: param,\n        time: time,\n        args: args\n      });\n    }\n  }]);\n\n  return Events;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\n\n//# sourceURL=webpack://virtualWebaudio/./src/Events.js?");

/***/ }),

/***/ "./src/UniqueIdGenerator.js":
/*!**********************************!*\
  !*** ./src/UniqueIdGenerator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar UniqueIdGenerator =\n/*#__PURE__*/\nfunction () {\n  function UniqueIdGenerator() {\n    var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n    _classCallCheck(this, UniqueIdGenerator);\n\n    this.value = seed;\n  }\n\n  _createClass(UniqueIdGenerator, [{\n    key: \"generate\",\n    value: function generate() {\n      return '#' + ++this.value;\n    }\n  }]);\n\n  return UniqueIdGenerator;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UniqueIdGenerator);\n\n//# sourceURL=webpack://virtualWebaudio/./src/UniqueIdGenerator.js?");

/***/ }),

/***/ "./src/VirtualAudioContext.js":
/*!************************************!*\
  !*** ./src/VirtualAudioContext.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _UniqueIdGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UniqueIdGenerator */ \"./src/UniqueIdGenerator.js\");\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ \"./src/Events.js\");\n/* harmony import */ var _VirtualOscillatorNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VirtualOscillatorNode */ \"./src/VirtualOscillatorNode.js\");\n/* harmony import */ var _VirtualGainNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VirtualGainNode */ \"./src/VirtualGainNode.js\");\n/* harmony import */ var _VirtualPeriodicWave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VirtualPeriodicWave */ \"./src/VirtualPeriodicWave.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar VirtualAudioContext =\n/*#__PURE__*/\nfunction () {\n  function VirtualAudioContext() {\n    _classCallCheck(this, VirtualAudioContext);\n\n    this._ = {\n      uniqueIdGenerator: new _UniqueIdGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0),\n      events: new _Events__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n      initialTime: Date.now(),\n      unitOfTimeInSeconds: 0.02\n    };\n  }\n\n  _createClass(VirtualAudioContext, [{\n    key: \"createGain\",\n\n    /*\r\n    get listener\r\n    get sampleRate\r\n    get state\r\n      createAnalyser()\r\n    createBiquadFilter()\r\n    createBuffer()\r\n    createBufferSource()\r\n    createChannelMerger()\r\n    createChannelSplitter()\r\n    createConstantSource()\r\n    createConvolver()\r\n    createDelay()\r\n    createDynamicsCompressor()\r\n    */\n    value: function createGain() {\n      var id = this._.uniqueIdGenerator.generate();\n\n      return new _VirtualGainNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"](id, this);\n    }\n    /*\r\n    createIIRFilter()\r\n    */\n\n  }, {\n    key: \"createOscillator\",\n    value: function createOscillator() {\n      var id = this._.uniqueIdGenerator.generate();\n\n      return new _VirtualOscillatorNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"](id, this);\n    }\n    /*\r\n    createPanner()\r\n    */\n\n  }, {\n    key: \"createPeriodicWave\",\n    value: function createPeriodicWave(real, imag\n    /*, constraints */\n    ) {\n      var id = this._.uniqueIdGenerator.generate();\n\n      return new _VirtualPeriodicWave__WEBPACK_IMPORTED_MODULE_5__[\"default\"](id, this, real, imag);\n    }\n    /*\r\n    createScriptProcessor()\r\n    createStereoPanner()\r\n    createWaveShaper()\r\n    decodeAudioData()\r\n    resume()\r\n    */\n\n  }, {\n    key: \"currentTime\",\n    get: function get() {\n      var _this$_ = this._,\n          initialTime = _this$_.initialTime,\n          unitOfTimeInSeconds = _this$_.unitOfTimeInSeconds;\n      var realTimeInSeconds = (Date.now() - initialTime) / 1000;\n      var throttle = unitOfTimeInSeconds * 1000;\n      return Math.round(realTimeInSeconds * throttle) / throttle;\n    }\n  }, {\n    key: \"destination\",\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_0__[\"CTX_DESTINATION\"];\n    }\n  }]);\n\n  return VirtualAudioContext;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VirtualAudioContext);\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualAudioContext.js?");

/***/ }),

/***/ "./src/VirtualAudioNode.js":
/*!*********************************!*\
  !*** ./src/VirtualAudioNode.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _VirtualAudioParam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VirtualAudioParam */ \"./src/VirtualAudioParam.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar VirtualAudioNode =\n/*#__PURE__*/\nfunction () {\n  function VirtualAudioNode(id, ctx) {\n    _classCallCheck(this, VirtualAudioNode);\n\n    this._ = {\n      id: id,\n      ctx: ctx\n    };\n  }\n\n  _createClass(VirtualAudioNode, [{\n    key: \"connect\",\n    value: function connect(destination\n    /*, outputIndex, inputIndex */\n    ) {\n      if (destination instanceof VirtualAudioNode) {\n        this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CONNECT, [destination._.id], this._.id, this._.ctx.currentTime);\n      } else if (destination instanceof _VirtualAudioParam__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CONNECT, [destination._.nodeId, destination._.name], this._.id, this._.ctx.currentTime);\n      } else if (destination === this._.ctx.destination) {\n        this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CONNECT, [destination], this._.id, this._.ctx.currentTime);\n      }\n    }\n  }, {\n    key: \"disconnect\",\n    value: function disconnect()\n    /*, output, input */\n    {\n      var destination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n      if (destination === null) {\n        this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].DISCONNECT, [], this._.id, this._.ctx.currentTime);\n      } else if (destination instanceof VirtualAudioNode) {\n        this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].DISCONNECT, [destination._.id], this._.id, this._.ctx.currentTime);\n      } else if (destination instanceof _VirtualAudioParam__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].DISCONNECT, [destination._.nodeId, destination._.name], this._.id, this._.ctx.currentTime);\n      } else if (destination === this._.ctx.destination) {\n        this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].DISCONNECT, [destination], this._.id, this._.ctx.currentTime);\n      }\n    }\n  }]);\n\n  return VirtualAudioNode;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VirtualAudioNode);\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualAudioNode.js?");

/***/ }),

/***/ "./src/VirtualAudioParam.js":
/*!**********************************!*\
  !*** ./src/VirtualAudioParam.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar VirtualAudioParam =\n/*#__PURE__*/\nfunction () {\n  function VirtualAudioParam(nodeId, ctx, name, defaultValue) {\n    _classCallCheck(this, VirtualAudioParam);\n\n    this._ = {\n      nodeId: nodeId,\n      ctx: ctx,\n      name: name,\n      defaultValue: defaultValue\n    };\n  }\n\n  _createClass(VirtualAudioParam, [{\n    key: \"setValueAtTime\",\n    value: function setValueAtTime() {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CALL, [this._.name, 'setValueAtTime'], this._.nodeId, this._.ctx.currentTime, Object(ramda__WEBPACK_IMPORTED_MODULE_2__[\"adjust\"])(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"markTimeArg\"], 1, args));\n    }\n  }, {\n    key: \"linearRampToValueAtTime\",\n    value: function linearRampToValueAtTime() {\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CALL, [this._.name, 'linearRampToValueAtTime'], this._.nodeId, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: \"exponentialRampToValueAtTime\",\n    value: function exponentialRampToValueAtTime() {\n      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n        args[_key3] = arguments[_key3];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CALL, [this._.name, 'exponentialRampToValueAtTime'], this._.nodeId, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: \"setTargetAtTime\",\n    value: function setTargetAtTime() {\n      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n        args[_key4] = arguments[_key4];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CALL, [this._.name, 'setTargetAtTime'], this._.nodeId, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: \"setValueCurveAtTime\",\n    value: function setValueCurveAtTime() {\n      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n        args[_key5] = arguments[_key5];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CALL, [this._.name, 'setValueCurveAtTime'], this._.nodeId, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: \"cancelScheduledValues\",\n    value: function cancelScheduledValues() {\n      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {\n        args[_key6] = arguments[_key6];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CALL, [this._.name, 'cancelScheduledValues'], this._.nodeId, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: \"cancelAndHoldAtTime\",\n    value: function cancelAndHoldAtTime() {\n      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {\n        args[_key7] = arguments[_key7];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CALL, [this._.name, 'cancelAndHoldAtTime'], this._.nodeId, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: \"value\",\n    get: function get() {\n      return this._.defaultValue;\n    },\n    set: function set(newValue) {\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].UPDATE, this._.name, this._.nodeId, this._.ctx.currentTime, [newValue]);\n    }\n  }]);\n\n  return VirtualAudioParam;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VirtualAudioParam);\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualAudioParam.js?");

/***/ }),

/***/ "./src/VirtualGainNode.js":
/*!********************************!*\
  !*** ./src/VirtualGainNode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VirtualAudioNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VirtualAudioNode */ \"./src/VirtualAudioNode.js\");\n/* harmony import */ var _VirtualAudioParam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VirtualAudioParam */ \"./src/VirtualAudioParam.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar VirtualGainNode =\n/*#__PURE__*/\nfunction (_VirtualAudioNode) {\n  _inherits(VirtualGainNode, _VirtualAudioNode);\n\n  function VirtualGainNode(id, ctx) {\n    var _this;\n\n    _classCallCheck(this, VirtualGainNode);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(VirtualGainNode).call(this, id, ctx));\n    _this.gain = new _VirtualAudioParam__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id, ctx, 'gain', 1);\n\n    ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_2__[\"EVENTS\"].CREATE, 'gain', id, ctx.currentTime);\n\n    return _this;\n  }\n\n  return VirtualGainNode;\n}(_VirtualAudioNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VirtualGainNode);\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualGainNode.js?");

/***/ }),

/***/ "./src/VirtualOscillatorNode.js":
/*!**************************************!*\
  !*** ./src/VirtualOscillatorNode.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VirtualAudioNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VirtualAudioNode */ \"./src/VirtualAudioNode.js\");\n/* harmony import */ var _VirtualAudioParam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VirtualAudioParam */ \"./src/VirtualAudioParam.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar VirtualOscillatorNode =\n/*#__PURE__*/\nfunction (_VirtualAudioNode) {\n  _inherits(VirtualOscillatorNode, _VirtualAudioNode);\n\n  function VirtualOscillatorNode(id, ctx) {\n    var _this;\n\n    _classCallCheck(this, VirtualOscillatorNode);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(VirtualOscillatorNode).call(this, id, ctx));\n    _this._.type = 'sine';\n    _this.frequency = new _VirtualAudioParam__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id, ctx, 'frequency', 440);\n    _this.detune = new _VirtualAudioParam__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id, ctx, 'detune', 0);\n\n    ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_2__[\"EVENTS\"].CREATE, 'oscillator', id, ctx.currentTime);\n\n    return _this;\n  }\n\n  _createClass(VirtualOscillatorNode, [{\n    key: \"start\",\n    value: function start() {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_2__[\"EVENTS\"].CALL, ['start'], this._.id, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_2__[\"EVENTS\"].CALL, ['stop'], this._.id, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: \"setPeriodicWave\",\n    value: function setPeriodicWave() {\n      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n        args[_key3] = arguments[_key3];\n      }\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_2__[\"EVENTS\"].CALL, ['setPeriodicWave'], this._.id, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: \"type\",\n    get: function get() {\n      return this._.type;\n    },\n    set: function set(newValue) {\n      this._.type = newValue;\n\n      this._.ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_2__[\"EVENTS\"].SET, 'type', this._.id, this._.ctx.currentTime, [newValue]);\n    }\n  }]);\n\n  return VirtualOscillatorNode;\n}(_VirtualAudioNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VirtualOscillatorNode);\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualOscillatorNode.js?");

/***/ }),

/***/ "./src/VirtualPeriodicWave.js":
/*!************************************!*\
  !*** ./src/VirtualPeriodicWave.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar VirtualPeriodicWave = function VirtualPeriodicWave(id, ctx) {\n  _classCallCheck(this, VirtualPeriodicWave);\n\n  this._ = {\n    id: id,\n    ctx: ctx\n  };\n\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  ctx._.events.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EVENTS\"].CREATE, 'periodicWave', id, ctx.currentTime, args);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VirtualPeriodicWave);\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualPeriodicWave.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: CTX_DESTINATION, EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CTX_DESTINATION\", function() { return CTX_DESTINATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EVENTS\", function() { return EVENTS; });\nvar CTX_DESTINATION = 'ctx.destination';\nvar EVENTS = {\n  CREATE: 'CREATE',\n  UPDATE: 'UPDATE',\n  CONNECT: 'CONNECT',\n  CALL: 'CALL',\n  REMOVE: 'REMOVE',\n  NOP: 'NOP',\n  DISCONNECT: 'DISCONNECT',\n  SET: 'SET'\n};\n\n\n//# sourceURL=webpack://virtualWebaudio/./src/constants.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: invertEvent, getNodeById, setNodeById, removeNodeById, markTimeArg, parseTimeArg, applyEventToContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"invertEvent\", function() { return invertEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNodeById\", function() { return getNodeById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setNodeById\", function() { return setNodeById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeNodeById\", function() { return removeNodeById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"markTimeArg\", function() { return markTimeArg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseTimeArg\", function() { return parseTimeArg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyEventToContext\", function() { return applyEventToContext; });\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _VirtualPeriodicWave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VirtualPeriodicWave */ \"./src/VirtualPeriodicWave.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar invertEvent = Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"cond\"])([[Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"propEq\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CREATE), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"assoc\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].REMOVE)], [Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"propEq\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].UPDATE), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"assoc\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].NOP)], [Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"propEq\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CONNECT), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"assoc\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].DISCONNECT)], [Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"propEq\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].DISCONNECT), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"assoc\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CONNECT)], [Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"propEq\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].SET), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"assoc\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].NOP)], [Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"propEq\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CALL), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"cond\"])([[Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"equals\"])('start'), ramda__WEBPACK_IMPORTED_MODULE_0__[\"last\"], Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"prop\"])('param')), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"evolve\"])({\n  param: Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(-1, 'stop')\n})], [Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"equals\"])('stop'), ramda__WEBPACK_IMPORTED_MODULE_0__[\"last\"], Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"prop\"])('param')), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"evolve\"])({\n  param: Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(-1, 'start')\n})], [Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"equals\"])('setValueAtTime'), ramda__WEBPACK_IMPORTED_MODULE_0__[\"last\"], Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"prop\"])('param')), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"evolve\"])({\n  param: Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(-1, 'cancelScheduledValues'),\n  args: Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"takeLast\"])(1)\n})], [Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"contains\"])(ramda__WEBPACK_IMPORTED_MODULE_0__[\"__\"], ['setPeriodicWave', 'linearRampToValueAtTime', 'exponentialRampToValueAtTime', 'setTargetAtTime', 'setValueCurveAtTime', 'cancelScheduledValues', 'cancelAndHoldAtTime']), ramda__WEBPACK_IMPORTED_MODULE_0__[\"last\"], Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"prop\"])('param')), function (_ref) {\n  var param = _ref.param;\n  console.warn(\"inverting: inversion has not yet been implemented for \".concat(param));\n}], [ramda__WEBPACK_IMPORTED_MODULE_0__[\"T\"], function (_ref2) {\n  var param = _ref2.param;\n  console.error(\"inverting: unknown command \".concat(param));\n}]])], [ramda__WEBPACK_IMPORTED_MODULE_0__[\"T\"], function (_ref3) {\n  var eventName = _ref3.eventName;\n  console.error(\"inverting: unknown event \".concat(eventName));\n}]]);\n\nvar getNodeById = function getNodeById(id, ctx) {\n  return ctx._nodes[id];\n};\n\nvar setNodeById = function setNodeById(id, node, ctx) {\n  if (!ctx._nodes) {\n    ctx._nodes = {};\n  }\n\n  ctx._nodes[id] = node;\n};\n\nvar removeNodeById = function removeNodeById(id, ctx) {\n  delete ctx._nodes[id];\n};\n\nvar TIME_MARK = '{{currentTime}}';\n\nvar markTimeArg = function markTimeArg(arg) {\n  return TIME_MARK + ' + ' + arg;\n};\n\nvar parseTimeArg = Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])(function (time, arg) {\n  return Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"when\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"both\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"is\"])(String), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"startsWith\"])(TIME_MARK + ' + ')), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(time), parseFloat, Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"replace\"])(TIME_MARK + ' + ', '')))(arg);\n});\nvar applyEventToContext = Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"curry\"])(function (_ref4, ctx) {\n  var targetId = _ref4.targetId,\n      eventName = _ref4.eventName,\n      param = _ref4.param,\n      time = _ref4.time,\n      args = _ref4.args;\n\n  // TODO: how to deal with time?\n  switch (eventName) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CREATE:\n      switch (param) {\n        case 'oscillator':\n          {\n            var node = ctx.createOscillator();\n            setNodeById(targetId, node, ctx);\n          }\n          break;\n\n        case 'gain':\n          {\n            var _node = ctx.createGain();\n\n            setNodeById(targetId, _node, ctx);\n          }\n          break;\n\n        case 'periodicWave':\n          {\n            var _node2 = Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"apply\"])(ctx.createPeriodicWave.bind(ctx), args);\n\n            setNodeById(targetId, _node2, ctx);\n          }\n          break;\n\n        default:\n          {\n            console.error('unknown node type', param);\n          }\n      }\n\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].UPDATE:\n      {\n        var _node3 = getNodeById(targetId, ctx);\n\n        _node3[param].value = args[0];\n      }\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].SET:\n      {\n        var _node4 = getNodeById(targetId, ctx);\n\n        _node4[param] = args[0];\n      }\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CONNECT:\n      {\n        var _node5 = getNodeById(targetId, ctx);\n\n        switch (param.length) {\n          case 1:\n            {\n              var target = param[0] === _constants__WEBPACK_IMPORTED_MODULE_1__[\"CTX_DESTINATION\"] ? ctx.destination : getNodeById(param[0], ctx);\n\n              _node5.connect(target);\n            }\n            break;\n\n          case 2:\n            {\n              var _target = getNodeById(param[0], ctx);\n\n              var property = _target[param[1]];\n\n              _node5.connect(property);\n            }\n        }\n      }\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].CALL:\n      {\n        var _node6 = getNodeById(targetId, ctx);\n\n        switch (Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"length\"])(param)) {\n          case 1:\n            {\n              var _param = _slicedToArray(param, 1),\n                  command = _param[0];\n\n              switch (command) {\n                case 'start':\n                case 'stop':\n                  Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"apply\"])(_node6[command].bind(_node6), args);\n                  break;\n\n                case 'setPeriodicWave':\n                  if (args[0] instanceof _VirtualPeriodicWave__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n                    var nodeId = args[0]._.id; // args[0] is a VirtualPeriodicWave, but we need the real one\n\n                    var argNode = getNodeById(nodeId, ctx);\n\n                    _node6[command](argNode);\n                  } else {\n                    _node6[command](args[0]);\n                  }\n\n                  break;\n\n                default:\n                  {\n                    console.error('unknown command', command);\n                  }\n              }\n            }\n            break;\n\n          case 2:\n            {\n              var _param2 = _slicedToArray(param, 2),\n                  paramName = _param2[0],\n                  _command = _param2[1];\n\n              switch (_command) {\n                case 'setValueAtTime':\n                case 'linearRampToValueAtTime':\n                case 'exponentialRampToValueAtTime':\n                case 'setTargetAtTime':\n                case 'setValueCurveAtTime':\n                case 'cancelScheduledValues':\n                case 'cancelAndHoldAtTime':\n                  Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"apply\"])(_node6[paramName][_command].bind(_node6[paramName]), Object(ramda__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(parseTimeArg(time), args));\n                  break;\n\n                default:\n                  {\n                    console.error('unknown command', _command);\n                  }\n              }\n            }\n            break;\n        }\n      }\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].REMOVE:\n      removeNodeById(targetId, ctx);\n      break;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"EVENTS\"].DISCONNECT:\n      {\n        var _node7 = getNodeById(targetId, ctx);\n\n        switch (param.length) {\n          case 0:\n            _node7.disconnect();\n\n            break;\n\n          case 1:\n            {\n              var _target2 = param[0] === _constants__WEBPACK_IMPORTED_MODULE_1__[\"CTX_DESTINATION\"] ? ctx.destination : getNodeById(param[0], ctx);\n\n              _node7.disconnect(_target2);\n            }\n            break;\n\n          case 2:\n            {\n              var _target3 = getNodeById(param[0], ctx);\n\n              var _property = _target3[param[1]];\n\n              _node7.disconnect(_property);\n            }\n        }\n      }\n      break;\n\n    default:\n      {\n        console.error('unknown event', eventName);\n      }\n  }\n});\n\n\n//# sourceURL=webpack://virtualWebaudio/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: VirtualAudioContext, diff, patch, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diff\", function() { return diff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patch\", function() { return patch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _VirtualAudioContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VirtualAudioContext */ \"./src/VirtualAudioContext.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VirtualAudioContext\", function() { return _VirtualAudioContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/index.js\");\n\n\n\n // -------------\n\nvar diff = function diff(virtualCtxA, virtualCtxB) {\n  var a = virtualCtxA._.events.data;\n  var b = virtualCtxB._.events.data;\n  var removed = Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"compose\"])(ramda__WEBPACK_IMPORTED_MODULE_3__[\"reverse\"], Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"reject\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"propEq\"])('eventName', _constants__WEBPACK_IMPORTED_MODULE_2__[\"EVENTS\"].NOP)), Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"map\"])(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"invertEvent\"]), ramda__WEBPACK_IMPORTED_MODULE_3__[\"without\"])(b, a);\n  var added = Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"without\"])(a, b);\n  return Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"concat\"])(removed, added);\n};\n\nvar patch = function patch(eventsData, ctx) {\n  var now = ctx.currentTime;\n  Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"compose\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"forEach\"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"applyEventToContext\"])(ramda__WEBPACK_IMPORTED_MODULE_3__[\"__\"], ctx)), Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"map\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"evolve\"])({\n    time: Object(ramda__WEBPACK_IMPORTED_MODULE_3__[\"add\"])(now)\n  })))(eventsData);\n};\n\nvar render = function render(virtualCtx, ctx) {\n  patch(virtualCtx._.events.data, ctx);\n};\n\n\n\n//# sourceURL=webpack://virtualWebaudio/./src/index.js?");

/***/ })

/******/ });