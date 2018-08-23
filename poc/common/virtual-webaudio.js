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

/***/ "./node_modules/ramda/src/T.js":
/*!*************************************!*\
  !*** ./node_modules/ramda/src/T.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar always = /*#__PURE__*/__webpack_require__(/*! ./always */ \"./node_modules/ramda/src/always.js\");\n\n/**\n * A function that always returns `true`. Any passed in parameters are ignored.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Function\n * @sig * -> Boolean\n * @param {*}\n * @return {Boolean}\n * @see R.always, R.F\n * @example\n *\n *      R.T(); //=> true\n */\n\nvar T = /*#__PURE__*/always(true);\nmodule.exports = T;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/T.js?");

/***/ }),

/***/ "./node_modules/ramda/src/__.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/__.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A special placeholder value used to specify \"gaps\" within curried functions,\n * allowing partial application of any combination of arguments, regardless of\n * their positions.\n *\n * If `g` is a curried ternary function and `_` is `R.__`, the following are\n * equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2, _)(1, 3)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @constant\n * @memberOf R\n * @since v0.6.0\n * @category Function\n * @example\n *\n *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');\n *      greet('Alice'); //=> 'Hello, Alice!'\n */\nmodule.exports = { '@@functional/placeholder': true };\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/__.js?");

/***/ }),

/***/ "./node_modules/ramda/src/add.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/add.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\n/**\n * Adds two values.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Math\n * @sig Number -> Number -> Number\n * @param {Number} a\n * @param {Number} b\n * @return {Number}\n * @see R.subtract\n * @example\n *\n *      R.add(2, 3);       //=>  5\n *      R.add(7)(10);      //=> 17\n */\n\nvar add = /*#__PURE__*/_curry2(function add(a, b) {\n  return Number(a) + Number(b);\n});\nmodule.exports = add;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/add.js?");

/***/ }),

/***/ "./node_modules/ramda/src/always.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/always.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\n/**\n * Returns a function that always returns the given value. Note that for\n * non-primitives the value returned is a reference to the original value.\n *\n * This function is known as `const`, `constant`, or `K` (for K combinator) in\n * other languages and libraries.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig a -> (* -> a)\n * @param {*} val The value to wrap in a function\n * @return {Function} A Function :: * -> val.\n * @example\n *\n *      var t = R.always('Tee');\n *      t(); //=> 'Tee'\n */\n\nvar always = /*#__PURE__*/_curry1(function always(val) {\n  return function () {\n    return val;\n  };\n});\nmodule.exports = always;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/always.js?");

/***/ }),

/***/ "./node_modules/ramda/src/apply.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/apply.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\n/**\n * Applies function `fn` to the argument list `args`. This is useful for\n * creating a fixed-arity function from a variadic function. `fn` should be a\n * bound function if context is significant.\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category Function\n * @sig (*... -> a) -> [*] -> a\n * @param {Function} fn The function which will be called with `args`\n * @param {Array} args The arguments to call `fn` with\n * @return {*} result The result, equivalent to `fn(...args)`\n * @see R.call, R.unapply\n * @example\n *\n *      var nums = [1, 2, 3, -99, 42, 6, 7];\n *      R.apply(Math.max, nums); //=> 42\n * @symb R.apply(f, [a, b, c]) = f(a, b, c)\n */\n\nvar apply = /*#__PURE__*/_curry2(function apply(fn, args) {\n  return fn.apply(this, args);\n});\nmodule.exports = apply;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/apply.js?");

/***/ }),

/***/ "./node_modules/ramda/src/assoc.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/assoc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry3 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/src/internal/_curry3.js\");\n\n/**\n * Makes a shallow clone of an object, setting or overriding the specified\n * property with the given value. Note that this copies and flattens prototype\n * properties onto the new object as well. All non-primitive properties are\n * copied by reference.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Object\n * @sig String -> a -> {k: v} -> {k: v}\n * @param {String} prop The property name to set\n * @param {*} val The new value\n * @param {Object} obj The object to clone\n * @return {Object} A new object equivalent to the original except for the changed property.\n * @see R.dissoc\n * @example\n *\n *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}\n */\n\nvar assoc = /*#__PURE__*/_curry3(function assoc(prop, val, obj) {\n  var result = {};\n  for (var p in obj) {\n    result[p] = obj[p];\n  }\n  result[prop] = val;\n  return result;\n});\nmodule.exports = assoc;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/assoc.js?");

/***/ }),

/***/ "./node_modules/ramda/src/bind.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/bind.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _arity = /*#__PURE__*/__webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\n/**\n * Creates a function that is bound to a context.\n * Note: `R.bind` does not provide the additional argument-binding capabilities of\n * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).\n *\n * @func\n * @memberOf R\n * @since v0.6.0\n * @category Function\n * @category Object\n * @sig (* -> *) -> {*} -> (* -> *)\n * @param {Function} fn The function to bind to context\n * @param {Object} thisObj The context to bind `fn` to\n * @return {Function} A function that will execute in the context of `thisObj`.\n * @see R.partial\n * @example\n *\n *      var log = R.bind(console.log, console);\n *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}\n *      // logs {a: 2}\n * @symb R.bind(f, o)(a, b) = f.call(o, a, b)\n */\n\nvar bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {\n  return _arity(fn.length, function () {\n    return fn.apply(thisObj, arguments);\n  });\n});\nmodule.exports = bind;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/bind.js?");

/***/ }),

/***/ "./node_modules/ramda/src/compose.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/compose.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pipe = /*#__PURE__*/__webpack_require__(/*! ./pipe */ \"./node_modules/ramda/src/pipe.js\");\n\nvar reverse = /*#__PURE__*/__webpack_require__(/*! ./reverse */ \"./node_modules/ramda/src/reverse.js\");\n\n/**\n * Performs right-to-left function composition. The rightmost function may have\n * any arity; the remaining functions must be unary.\n *\n * **Note:** The result of compose is not automatically curried.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)\n * @param {...Function} ...functions The functions to compose\n * @return {Function}\n * @see R.pipe\n * @example\n *\n *      var classyGreeting = (firstName, lastName) => \"The name's \" + lastName + \", \" + firstName + \" \" + lastName\n *      var yellGreeting = R.compose(R.toUpper, classyGreeting);\n *      yellGreeting('James', 'Bond'); //=> \"THE NAME'S BOND, JAMES BOND\"\n *\n *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7\n *\n * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))\n */\n\nfunction compose() {\n  if (arguments.length === 0) {\n    throw new Error('compose requires at least one argument');\n  }\n  return pipe.apply(this, reverse(arguments));\n}\nmodule.exports = compose;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/compose.js?");

/***/ }),

/***/ "./node_modules/ramda/src/concat.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/concat.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _isArray = /*#__PURE__*/__webpack_require__(/*! ./internal/_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n\nvar _isFunction = /*#__PURE__*/__webpack_require__(/*! ./internal/_isFunction */ \"./node_modules/ramda/src/internal/_isFunction.js\");\n\nvar _isString = /*#__PURE__*/__webpack_require__(/*! ./internal/_isString */ \"./node_modules/ramda/src/internal/_isString.js\");\n\nvar toString = /*#__PURE__*/__webpack_require__(/*! ./toString */ \"./node_modules/ramda/src/toString.js\");\n\n/**\n * Returns the result of concatenating the given lists or strings.\n *\n * Note: `R.concat` expects both arguments to be of the same type,\n * unlike the native `Array.prototype.concat` method. It will throw\n * an error if you `concat` an Array with a non-Array value.\n *\n * Dispatches to the `concat` method of the first argument, if present.\n * Can also concatenate two members of a [fantasy-land\n * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a] -> [a]\n * @sig String -> String -> String\n * @param {Array|String} firstList The first list\n * @param {Array|String} secondList The second list\n * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of\n * `secondList`.\n *\n * @example\n *\n *      R.concat('ABC', 'DEF'); // 'ABCDEF'\n *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]\n *      R.concat([], []); //=> []\n */\n\nvar concat = /*#__PURE__*/_curry2(function concat(a, b) {\n  if (_isArray(a)) {\n    if (_isArray(b)) {\n      return a.concat(b);\n    }\n    throw new TypeError(toString(b) + ' is not an array');\n  }\n  if (_isString(a)) {\n    if (_isString(b)) {\n      return a + b;\n    }\n    throw new TypeError(toString(b) + ' is not a string');\n  }\n  if (a != null && _isFunction(a['fantasy-land/concat'])) {\n    return a['fantasy-land/concat'](b);\n  }\n  if (a != null && _isFunction(a.concat)) {\n    return a.concat(b);\n  }\n  throw new TypeError(toString(a) + ' does not have a method named \"concat\" or \"fantasy-land/concat\"');\n});\nmodule.exports = concat;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/concat.js?");

/***/ }),

/***/ "./node_modules/ramda/src/cond.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/cond.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _arity = /*#__PURE__*/__webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar map = /*#__PURE__*/__webpack_require__(/*! ./map */ \"./node_modules/ramda/src/map.js\");\n\nvar max = /*#__PURE__*/__webpack_require__(/*! ./max */ \"./node_modules/ramda/src/max.js\");\n\nvar reduce = /*#__PURE__*/__webpack_require__(/*! ./reduce */ \"./node_modules/ramda/src/reduce.js\");\n\n/**\n * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.\n * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments\n * to `fn` are applied to each of the predicates in turn until one returns a\n * \"truthy\" value, at which point `fn` returns the result of applying its\n * arguments to the corresponding transformer. If none of the predicates\n * matches, `fn` returns undefined.\n *\n * @func\n * @memberOf R\n * @since v0.6.0\n * @category Logic\n * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)\n * @param {Array} pairs A list of [predicate, transformer]\n * @return {Function}\n * @example\n *\n *      var fn = R.cond([\n *        [R.equals(0),   R.always('water freezes at 0°C')],\n *        [R.equals(100), R.always('water boils at 100°C')],\n *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']\n *      ]);\n *      fn(0); //=> 'water freezes at 0°C'\n *      fn(50); //=> 'nothing special happens at 50°C'\n *      fn(100); //=> 'water boils at 100°C'\n */\n\nvar cond = /*#__PURE__*/_curry1(function cond(pairs) {\n  var arity = reduce(max, 0, map(function (pair) {\n    return pair[0].length;\n  }, pairs));\n  return _arity(arity, function () {\n    var idx = 0;\n    while (idx < pairs.length) {\n      if (pairs[idx][0].apply(this, arguments)) {\n        return pairs[idx][1].apply(this, arguments);\n      }\n      idx += 1;\n    }\n  });\n});\nmodule.exports = cond;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/cond.js?");

/***/ }),

/***/ "./node_modules/ramda/src/curry.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/curry.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar curryN = /*#__PURE__*/__webpack_require__(/*! ./curryN */ \"./node_modules/ramda/src/curryN.js\");\n\n/**\n * Returns a curried equivalent of the provided function. The curried function\n * has two unusual capabilities. First, its arguments needn't be provided one\n * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the\n * following are equivalent:\n *\n *   - `g(1)(2)(3)`\n *   - `g(1)(2, 3)`\n *   - `g(1, 2)(3)`\n *   - `g(1, 2, 3)`\n *\n * Secondly, the special placeholder value [`R.__`](#__) may be used to specify\n * \"gaps\", allowing partial application of any combination of arguments,\n * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),\n * the following are equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (* -> a) -> (* -> a)\n * @param {Function} fn The function to curry.\n * @return {Function} A new, curried function.\n * @see R.curryN\n * @example\n *\n *      var addFourNumbers = (a, b, c, d) => a + b + c + d;\n *\n *      var curriedAddFourNumbers = R.curry(addFourNumbers);\n *      var f = curriedAddFourNumbers(1, 2);\n *      var g = f(3);\n *      g(4); //=> 10\n */\n\nvar curry = /*#__PURE__*/_curry1(function curry(fn) {\n  return curryN(fn.length, fn);\n});\nmodule.exports = curry;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/curry.js?");

/***/ }),

/***/ "./node_modules/ramda/src/curryN.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/curryN.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _arity = /*#__PURE__*/__webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _curryN = /*#__PURE__*/__webpack_require__(/*! ./internal/_curryN */ \"./node_modules/ramda/src/internal/_curryN.js\");\n\n/**\n * Returns a curried equivalent of the provided function, with the specified\n * arity. The curried function has two unusual capabilities. First, its\n * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the\n * following are equivalent:\n *\n *   - `g(1)(2)(3)`\n *   - `g(1)(2, 3)`\n *   - `g(1, 2)(3)`\n *   - `g(1, 2, 3)`\n *\n * Secondly, the special placeholder value [`R.__`](#__) may be used to specify\n * \"gaps\", allowing partial application of any combination of arguments,\n * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),\n * the following are equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @func\n * @memberOf R\n * @since v0.5.0\n * @category Function\n * @sig Number -> (* -> a) -> (* -> a)\n * @param {Number} length The arity for the returned function.\n * @param {Function} fn The function to curry.\n * @return {Function} A new, curried function.\n * @see R.curry\n * @example\n *\n *      var sumArgs = (...args) => R.sum(args);\n *\n *      var curriedAddFourNumbers = R.curryN(4, sumArgs);\n *      var f = curriedAddFourNumbers(1, 2);\n *      var g = f(3);\n *      g(4); //=> 10\n */\n\nvar curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {\n  if (length === 1) {\n    return _curry1(fn);\n  }\n  return _arity(length, _curryN(length, [], fn));\n});\nmodule.exports = curryN;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/curryN.js?");

/***/ }),

/***/ "./node_modules/ramda/src/equals.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/equals.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _equals = /*#__PURE__*/__webpack_require__(/*! ./internal/_equals */ \"./node_modules/ramda/src/internal/_equals.js\");\n\n/**\n * Returns `true` if its arguments are equivalent, `false` otherwise. Handles\n * cyclical data structures.\n *\n * Dispatches symmetrically to the `equals` methods of both arguments, if\n * present.\n *\n * @func\n * @memberOf R\n * @since v0.15.0\n * @category Relation\n * @sig a -> b -> Boolean\n * @param {*} a\n * @param {*} b\n * @return {Boolean}\n * @example\n *\n *      R.equals(1, 1); //=> true\n *      R.equals(1, '1'); //=> false\n *      R.equals([1, 2, 3], [1, 2, 3]); //=> true\n *\n *      var a = {}; a.v = a;\n *      var b = {}; b.v = b;\n *      R.equals(a, b); //=> true\n */\n\nvar equals = /*#__PURE__*/_curry2(function equals(a, b) {\n  return _equals(a, b, [], []);\n});\nmodule.exports = equals;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/equals.js?");

/***/ }),

/***/ "./node_modules/ramda/src/evolve.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/evolve.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\n/**\n * Creates a new object by recursively evolving a shallow copy of `object`,\n * according to the `transformation` functions. All non-primitive properties\n * are copied by reference.\n *\n * A `transformation` function will not be invoked if its corresponding key\n * does not exist in the evolved object.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Object\n * @sig {k: (v -> v)} -> {k: v} -> {k: v}\n * @param {Object} transformations The object specifying transformation functions to apply\n *        to the object.\n * @param {Object} object The object to be transformed.\n * @return {Object} The transformed object.\n * @example\n *\n *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};\n *      var transformations = {\n *        firstName: R.trim,\n *        lastName: R.trim, // Will not get invoked.\n *        data: {elapsed: R.add(1), remaining: R.add(-1)}\n *      };\n *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}\n */\n\nvar evolve = /*#__PURE__*/_curry2(function evolve(transformations, object) {\n  var result = {};\n  var transformation, key, type;\n  for (key in object) {\n    transformation = transformations[key];\n    type = typeof transformation === 'undefined' ? 'undefined' : _typeof(transformation);\n    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];\n  }\n  return result;\n});\nmodule.exports = evolve;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/evolve.js?");

/***/ }),

/***/ "./node_modules/ramda/src/filter.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/filter.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _dispatchable = /*#__PURE__*/__webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/src/internal/_dispatchable.js\");\n\nvar _filter = /*#__PURE__*/__webpack_require__(/*! ./internal/_filter */ \"./node_modules/ramda/src/internal/_filter.js\");\n\nvar _isObject = /*#__PURE__*/__webpack_require__(/*! ./internal/_isObject */ \"./node_modules/ramda/src/internal/_isObject.js\");\n\nvar _reduce = /*#__PURE__*/__webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/src/internal/_reduce.js\");\n\nvar _xfilter = /*#__PURE__*/__webpack_require__(/*! ./internal/_xfilter */ \"./node_modules/ramda/src/internal/_xfilter.js\");\n\nvar keys = /*#__PURE__*/__webpack_require__(/*! ./keys */ \"./node_modules/ramda/src/keys.js\");\n\n/**\n * Takes a predicate and a `Filterable`, and returns a new filterable of the\n * same type containing the members of the given filterable which satisfy the\n * given predicate. Filterable objects include plain objects or any object\n * that has a filter method such as `Array`.\n *\n * Dispatches to the `filter` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Filterable f => (a -> Boolean) -> f a -> f a\n * @param {Function} pred\n * @param {Array} filterable\n * @return {Array} Filterable\n * @see R.reject, R.transduce, R.addIndex\n * @example\n *\n *      var isEven = n => n % 2 === 0;\n *\n *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]\n *\n *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}\n */\n\nvar filter = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['filter'], _xfilter, function (pred, filterable) {\n  return _isObject(filterable) ? _reduce(function (acc, key) {\n    if (pred(filterable[key])) {\n      acc[key] = filterable[key];\n    }\n    return acc;\n  }, {}, keys(filterable)) :\n  // else\n  _filter(pred, filterable);\n}));\nmodule.exports = filter;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/filter.js?");

/***/ }),

/***/ "./node_modules/ramda/src/flip.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/flip.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar curryN = /*#__PURE__*/__webpack_require__(/*! ./curryN */ \"./node_modules/ramda/src/curryN.js\");\n\n/**\n * Returns a new function much like the supplied one, except that the first two\n * arguments' order is reversed.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)\n * @param {Function} fn The function to invoke with its first two parameters reversed.\n * @return {*} The result of invoking `fn` with its first two parameters' order reversed.\n * @example\n *\n *      var mergeThree = (a, b, c) => [].concat(a, b, c);\n *\n *      mergeThree(1, 2, 3); //=> [1, 2, 3]\n *\n *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]\n * @symb R.flip(f)(a, b, c) = f(b, a, c)\n */\n\nvar flip = /*#__PURE__*/_curry1(function flip(fn) {\n  return curryN(fn.length, function (a, b) {\n    var args = Array.prototype.slice.call(arguments, 0);\n    args[0] = b;\n    args[1] = a;\n    return fn.apply(this, args);\n  });\n});\nmodule.exports = flip;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/flip.js?");

/***/ }),

/***/ "./node_modules/ramda/src/forEach.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/forEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _checkForMethod = /*#__PURE__*/__webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/src/internal/_checkForMethod.js\");\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\n/**\n * Iterate over an input `list`, calling a provided function `fn` for each\n * element in the list.\n *\n * `fn` receives one argument: *(value)*.\n *\n * Note: `R.forEach` does not skip deleted or unassigned indices (sparse\n * arrays), unlike the native `Array.prototype.forEach` method. For more\n * details on this behavior, see:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description\n *\n * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns\n * the original array. In some libraries this function is named `each`.\n *\n * Dispatches to the `forEach` method of the second argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.1\n * @category List\n * @sig (a -> *) -> [a] -> [a]\n * @param {Function} fn The function to invoke. Receives one argument, `value`.\n * @param {Array} list The list to iterate over.\n * @return {Array} The original list.\n * @see R.addIndex\n * @example\n *\n *      var printXPlusFive = x => console.log(x + 5);\n *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]\n *      // logs 6\n *      // logs 7\n *      // logs 8\n * @symb R.forEach(f, [a, b, c]) = [a, b, c]\n */\n\nvar forEach = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('forEach', function forEach(fn, list) {\n  var len = list.length;\n  var idx = 0;\n  while (idx < len) {\n    fn(list[idx]);\n    idx += 1;\n  }\n  return list;\n}));\nmodule.exports = forEach;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/forEach.js?");

/***/ }),

/***/ "./node_modules/ramda/src/identical.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/identical.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\n/**\n * Returns true if its arguments are identical, false otherwise. Values are\n * identical if they reference the same memory. `NaN` is identical to `NaN`;\n * `0` and `-0` are not identical.\n *\n * @func\n * @memberOf R\n * @since v0.15.0\n * @category Relation\n * @sig a -> a -> Boolean\n * @param {*} a\n * @param {*} b\n * @return {Boolean}\n * @example\n *\n *      var o = {};\n *      R.identical(o, o); //=> true\n *      R.identical(1, 1); //=> true\n *      R.identical(1, '1'); //=> false\n *      R.identical([], []); //=> false\n *      R.identical(0, -0); //=> false\n *      R.identical(NaN, NaN); //=> true\n */\n\nvar identical = /*#__PURE__*/_curry2(function identical(a, b) {\n  // SameValue algorithm\n  if (a === b) {\n    // Steps 1-5, 7-10\n    // Steps 6.b-6.e: +0 != -0\n    return a !== 0 || 1 / a === 1 / b;\n  } else {\n    // Step 6.a: NaN == NaN\n    return a !== a && b !== b;\n  }\n});\nmodule.exports = identical;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/identical.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_arity.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_arity.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _arity(n, fn) {\n  /* eslint-disable no-unused-vars */\n  switch (n) {\n    case 0:\n      return function () {\n        return fn.apply(this, arguments);\n      };\n    case 1:\n      return function (a0) {\n        return fn.apply(this, arguments);\n      };\n    case 2:\n      return function (a0, a1) {\n        return fn.apply(this, arguments);\n      };\n    case 3:\n      return function (a0, a1, a2) {\n        return fn.apply(this, arguments);\n      };\n    case 4:\n      return function (a0, a1, a2, a3) {\n        return fn.apply(this, arguments);\n      };\n    case 5:\n      return function (a0, a1, a2, a3, a4) {\n        return fn.apply(this, arguments);\n      };\n    case 6:\n      return function (a0, a1, a2, a3, a4, a5) {\n        return fn.apply(this, arguments);\n      };\n    case 7:\n      return function (a0, a1, a2, a3, a4, a5, a6) {\n        return fn.apply(this, arguments);\n      };\n    case 8:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7) {\n        return fn.apply(this, arguments);\n      };\n    case 9:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {\n        return fn.apply(this, arguments);\n      };\n    case 10:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {\n        return fn.apply(this, arguments);\n      };\n    default:\n      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');\n  }\n}\nmodule.exports = _arity;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_arity.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_arrayFromIterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_arrayFromIterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _arrayFromIterator(iter) {\n  var list = [];\n  var next;\n  while (!(next = iter.next()).done) {\n    list.push(next.value);\n  }\n  return list;\n}\nmodule.exports = _arrayFromIterator;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_arrayFromIterator.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_checkForMethod.js":
/*!************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_checkForMethod.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _isArray = /*#__PURE__*/__webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n\n/**\n * This checks whether a function has a [methodname] function. If it isn't an\n * array it will execute that function otherwise it will default to the ramda\n * implementation.\n *\n * @private\n * @param {Function} fn ramda implemtation\n * @param {String} methodname property to check for a custom implementation\n * @return {Object} Whatever the return value of the method is.\n */\n\nfunction _checkForMethod(methodname, fn) {\n  return function () {\n    var length = arguments.length;\n    if (length === 0) {\n      return fn();\n    }\n    var obj = arguments[length - 1];\n    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));\n  };\n}\nmodule.exports = _checkForMethod;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_checkForMethod.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_complement.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_complement.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _complement(f) {\n  return function () {\n    return !f.apply(this, arguments);\n  };\n}\nmodule.exports = _complement;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_complement.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_contains.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_contains.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _indexOf = /*#__PURE__*/__webpack_require__(/*! ./_indexOf */ \"./node_modules/ramda/src/internal/_indexOf.js\");\n\nfunction _contains(a, list) {\n  return _indexOf(list, a, 0) >= 0;\n}\nmodule.exports = _contains;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_contains.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_containsWith.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_containsWith.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _containsWith(pred, x, list) {\n  var idx = 0;\n  var len = list.length;\n\n  while (idx < len) {\n    if (pred(x, list[idx])) {\n      return true;\n    }\n    idx += 1;\n  }\n  return false;\n}\nmodule.exports = _containsWith;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_containsWith.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry1.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry1.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Optimized internal one-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\nfunction _curry1(fn) {\n  return function f1(a) {\n    if (arguments.length === 0 || _isPlaceholder(a)) {\n      return f1;\n    } else {\n      return fn.apply(this, arguments);\n    }\n  };\n}\nmodule.exports = _curry1;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_curry1.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry2.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry2.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Optimized internal two-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\nfunction _curry2(fn) {\n  return function f2(a, b) {\n    switch (arguments.length) {\n      case 0:\n        return f2;\n      case 1:\n        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {\n          return fn(a, _b);\n        });\n      default:\n        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {\n          return fn(_a, b);\n        }) : _isPlaceholder(b) ? _curry1(function (_b) {\n          return fn(a, _b);\n        }) : fn(a, b);\n    }\n  };\n}\nmodule.exports = _curry2;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_curry2.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry3.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry3.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Optimized internal three-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\nfunction _curry3(fn) {\n  return function f3(a, b, c) {\n    switch (arguments.length) {\n      case 0:\n        return f3;\n      case 1:\n        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {\n          return fn(a, _b, _c);\n        });\n      case 2:\n        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {\n          return fn(_a, b, _c);\n        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {\n          return fn(a, _b, _c);\n        }) : _curry1(function (_c) {\n          return fn(a, b, _c);\n        });\n      default:\n        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {\n          return fn(_a, _b, c);\n        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {\n          return fn(_a, b, _c);\n        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {\n          return fn(a, _b, _c);\n        }) : _isPlaceholder(a) ? _curry1(function (_a) {\n          return fn(_a, b, c);\n        }) : _isPlaceholder(b) ? _curry1(function (_b) {\n          return fn(a, _b, c);\n        }) : _isPlaceholder(c) ? _curry1(function (_c) {\n          return fn(a, b, _c);\n        }) : fn(a, b, c);\n    }\n  };\n}\nmodule.exports = _curry3;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_curry3.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curryN.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curryN.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _arity = /*#__PURE__*/__webpack_require__(/*! ./_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Internal curryN function.\n *\n * @private\n * @category Function\n * @param {Number} length The arity of the curried function.\n * @param {Array} received An array of arguments received thus far.\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\nfunction _curryN(length, received, fn) {\n  return function () {\n    var combined = [];\n    var argsIdx = 0;\n    var left = length;\n    var combinedIdx = 0;\n    while (combinedIdx < received.length || argsIdx < arguments.length) {\n      var result;\n      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {\n        result = received[combinedIdx];\n      } else {\n        result = arguments[argsIdx];\n        argsIdx += 1;\n      }\n      combined[combinedIdx] = result;\n      if (!_isPlaceholder(result)) {\n        left -= 1;\n      }\n      combinedIdx += 1;\n    }\n    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));\n  };\n}\nmodule.exports = _curryN;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_curryN.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_dispatchable.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_dispatchable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _isArray = /*#__PURE__*/__webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n\nvar _isTransformer = /*#__PURE__*/__webpack_require__(/*! ./_isTransformer */ \"./node_modules/ramda/src/internal/_isTransformer.js\");\n\n/**\n * Returns a function that dispatches with different strategies based on the\n * object in list position (last argument). If it is an array, executes [fn].\n * Otherwise, if it has a function with one of the given method names, it will\n * execute that function (functor case). Otherwise, if it is a transformer,\n * uses transducer [xf] to return a new transformer (transducer case).\n * Otherwise, it will default to executing [fn].\n *\n * @private\n * @param {Array} methodNames properties to check for a custom implementation\n * @param {Function} xf transducer to initialize if object is transformer\n * @param {Function} fn default ramda implementation\n * @return {Function} A function that dispatches on object in list position\n */\n\nfunction _dispatchable(methodNames, xf, fn) {\n  return function () {\n    if (arguments.length === 0) {\n      return fn();\n    }\n    var args = Array.prototype.slice.call(arguments, 0);\n    var obj = args.pop();\n    if (!_isArray(obj)) {\n      var idx = 0;\n      while (idx < methodNames.length) {\n        if (typeof obj[methodNames[idx]] === 'function') {\n          return obj[methodNames[idx]].apply(obj, args);\n        }\n        idx += 1;\n      }\n      if (_isTransformer(obj)) {\n        var transducer = xf.apply(null, args);\n        return transducer(obj);\n      }\n    }\n    return fn.apply(this, arguments);\n  };\n}\nmodule.exports = _dispatchable;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_dispatchable.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_equals.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_equals.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _arrayFromIterator = /*#__PURE__*/__webpack_require__(/*! ./_arrayFromIterator */ \"./node_modules/ramda/src/internal/_arrayFromIterator.js\");\n\nvar _containsWith = /*#__PURE__*/__webpack_require__(/*! ./_containsWith */ \"./node_modules/ramda/src/internal/_containsWith.js\");\n\nvar _functionName = /*#__PURE__*/__webpack_require__(/*! ./_functionName */ \"./node_modules/ramda/src/internal/_functionName.js\");\n\nvar _has = /*#__PURE__*/__webpack_require__(/*! ./_has */ \"./node_modules/ramda/src/internal/_has.js\");\n\nvar identical = /*#__PURE__*/__webpack_require__(/*! ../identical */ \"./node_modules/ramda/src/identical.js\");\n\nvar keys = /*#__PURE__*/__webpack_require__(/*! ../keys */ \"./node_modules/ramda/src/keys.js\");\n\nvar type = /*#__PURE__*/__webpack_require__(/*! ../type */ \"./node_modules/ramda/src/type.js\");\n\n/**\n * private _uniqContentEquals function.\n * That function is checking equality of 2 iterator contents with 2 assumptions\n * - iterators lengths are the same\n * - iterators values are unique\n *\n * false-positive result will be returned for comparision of, e.g.\n * - [1,2,3] and [1,2,3,4]\n * - [1,1,1] and [1,2,3]\n * */\n\nfunction _uniqContentEquals(aIterator, bIterator, stackA, stackB) {\n  var a = _arrayFromIterator(aIterator);\n  var b = _arrayFromIterator(bIterator);\n\n  function eq(_a, _b) {\n    return _equals(_a, _b, stackA.slice(), stackB.slice());\n  }\n\n  // if *a* array contains any element that is not included in *b*\n  return !_containsWith(function (b, aItem) {\n    return !_containsWith(eq, aItem, b);\n  }, b, a);\n}\n\nfunction _equals(a, b, stackA, stackB) {\n  if (identical(a, b)) {\n    return true;\n  }\n\n  var typeA = type(a);\n\n  if (typeA !== type(b)) {\n    return false;\n  }\n\n  if (a == null || b == null) {\n    return false;\n  }\n\n  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {\n    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);\n  }\n\n  if (typeof a.equals === 'function' || typeof b.equals === 'function') {\n    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);\n  }\n\n  switch (typeA) {\n    case 'Arguments':\n    case 'Array':\n    case 'Object':\n      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {\n        return a === b;\n      }\n      break;\n    case 'Boolean':\n    case 'Number':\n    case 'String':\n      if (!((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && identical(a.valueOf(), b.valueOf()))) {\n        return false;\n      }\n      break;\n    case 'Date':\n      if (!identical(a.valueOf(), b.valueOf())) {\n        return false;\n      }\n      break;\n    case 'Error':\n      return a.name === b.name && a.message === b.message;\n    case 'RegExp':\n      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {\n        return false;\n      }\n      break;\n  }\n\n  var idx = stackA.length - 1;\n  while (idx >= 0) {\n    if (stackA[idx] === a) {\n      return stackB[idx] === b;\n    }\n    idx -= 1;\n  }\n\n  switch (typeA) {\n    case 'Map':\n      if (a.size !== b.size) {\n        return false;\n      }\n\n      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));\n    case 'Set':\n      if (a.size !== b.size) {\n        return false;\n      }\n\n      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));\n    case 'Arguments':\n    case 'Array':\n    case 'Object':\n    case 'Boolean':\n    case 'Number':\n    case 'String':\n    case 'Date':\n    case 'Error':\n    case 'RegExp':\n    case 'Int8Array':\n    case 'Uint8Array':\n    case 'Uint8ClampedArray':\n    case 'Int16Array':\n    case 'Uint16Array':\n    case 'Int32Array':\n    case 'Uint32Array':\n    case 'Float32Array':\n    case 'Float64Array':\n    case 'ArrayBuffer':\n      break;\n    default:\n      // Values of other types are only equal if identical.\n      return false;\n  }\n\n  var keysA = keys(a);\n  if (keysA.length !== keys(b).length) {\n    return false;\n  }\n\n  var extendedStackA = stackA.concat([a]);\n  var extendedStackB = stackB.concat([b]);\n\n  idx = keysA.length - 1;\n  while (idx >= 0) {\n    var key = keysA[idx];\n    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {\n      return false;\n    }\n    idx -= 1;\n  }\n  return true;\n}\nmodule.exports = _equals;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_equals.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_filter.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_filter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _filter(fn, list) {\n  var idx = 0;\n  var len = list.length;\n  var result = [];\n\n  while (idx < len) {\n    if (fn(list[idx])) {\n      result[result.length] = list[idx];\n    }\n    idx += 1;\n  }\n  return result;\n}\nmodule.exports = _filter;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_filter.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_functionName.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_functionName.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _functionName(f) {\n  // String(x => x) evaluates to \"x => x\", so the pattern may not match.\n  var match = String(f).match(/^function (\\w*)/);\n  return match == null ? '' : match[1];\n}\nmodule.exports = _functionName;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_functionName.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_has.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/internal/_has.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _has(prop, obj) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\nmodule.exports = _has;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_has.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_indexOf.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_indexOf.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar equals = /*#__PURE__*/__webpack_require__(/*! ../equals */ \"./node_modules/ramda/src/equals.js\");\n\nfunction _indexOf(list, a, idx) {\n  var inf, item;\n  // Array.prototype.indexOf doesn't exist below IE9\n  if (typeof list.indexOf === 'function') {\n    switch (typeof a === 'undefined' ? 'undefined' : _typeof(a)) {\n      case 'number':\n        if (a === 0) {\n          // manually crawl the list to distinguish between +0 and -0\n          inf = 1 / a;\n          while (idx < list.length) {\n            item = list[idx];\n            if (item === 0 && 1 / item === inf) {\n              return idx;\n            }\n            idx += 1;\n          }\n          return -1;\n        } else if (a !== a) {\n          // NaN\n          while (idx < list.length) {\n            item = list[idx];\n            if (typeof item === 'number' && item !== item) {\n              return idx;\n            }\n            idx += 1;\n          }\n          return -1;\n        }\n        // non-zero numbers can utilise Set\n        return list.indexOf(a, idx);\n\n      // all these types can utilise Set\n      case 'string':\n      case 'boolean':\n      case 'function':\n      case 'undefined':\n        return list.indexOf(a, idx);\n\n      case 'object':\n        if (a === null) {\n          // null can utilise Set\n          return list.indexOf(a, idx);\n        }\n    }\n  }\n  // anything else not covered above, defer to R.equals\n  while (idx < list.length) {\n    if (equals(list[idx], a)) {\n      return idx;\n    }\n    idx += 1;\n  }\n  return -1;\n}\nmodule.exports = _indexOf;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_indexOf.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArguments.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArguments.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _has = /*#__PURE__*/__webpack_require__(/*! ./_has */ \"./node_modules/ramda/src/internal/_has.js\");\n\nvar toString = Object.prototype.toString;\nvar _isArguments = function _isArguments() {\n  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {\n    return toString.call(x) === '[object Arguments]';\n  } : function _isArguments(x) {\n    return _has('callee', x);\n  };\n};\n\nmodule.exports = _isArguments;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_isArguments.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArray.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Tests whether or not an object is an array.\n *\n * @private\n * @param {*} val The object to test.\n * @return {Boolean} `true` if `val` is an array, `false` otherwise.\n * @example\n *\n *      _isArray([]); //=> true\n *      _isArray(null); //=> false\n *      _isArray({}); //=> false\n */\nmodule.exports = Array.isArray || function _isArray(val) {\n  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';\n};\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_isArray.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArrayLike.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArrayLike.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isArray = /*#__PURE__*/__webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n\nvar _isString = /*#__PURE__*/__webpack_require__(/*! ./_isString */ \"./node_modules/ramda/src/internal/_isString.js\");\n\n/**\n * Tests whether or not an object is similar to an array.\n *\n * @private\n * @category Type\n * @category List\n * @sig * -> Boolean\n * @param {*} x The object to test.\n * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.\n * @example\n *\n *      _isArrayLike([]); //=> true\n *      _isArrayLike(true); //=> false\n *      _isArrayLike({}); //=> false\n *      _isArrayLike({length: 10}); //=> false\n *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true\n */\n\nvar _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {\n  if (_isArray(x)) {\n    return true;\n  }\n  if (!x) {\n    return false;\n  }\n  if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object') {\n    return false;\n  }\n  if (_isString(x)) {\n    return false;\n  }\n  if (x.nodeType === 1) {\n    return !!x.length;\n  }\n  if (x.length === 0) {\n    return true;\n  }\n  if (x.length > 0) {\n    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);\n  }\n  return false;\n});\nmodule.exports = _isArrayLike;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_isArrayLike.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isFunction.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isFunction.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _isFunction(x) {\n  return Object.prototype.toString.call(x) === '[object Function]';\n}\nmodule.exports = _isFunction;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_isFunction.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isObject.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isObject.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _isObject(x) {\n  return Object.prototype.toString.call(x) === '[object Object]';\n}\nmodule.exports = _isObject;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_isObject.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isPlaceholder.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isPlaceholder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction _isPlaceholder(a) {\n       return a != null && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a['@@functional/placeholder'] === true;\n}\nmodule.exports = _isPlaceholder;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_isPlaceholder.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isString.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isString.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _isString(x) {\n  return Object.prototype.toString.call(x) === '[object String]';\n}\nmodule.exports = _isString;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_isString.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isTransformer.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isTransformer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _isTransformer(obj) {\n  return typeof obj['@@transducer/step'] === 'function';\n}\nmodule.exports = _isTransformer;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_isTransformer.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_map.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/internal/_map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _map(fn, functor) {\n  var idx = 0;\n  var len = functor.length;\n  var result = Array(len);\n  while (idx < len) {\n    result[idx] = fn(functor[idx]);\n    idx += 1;\n  }\n  return result;\n}\nmodule.exports = _map;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_map.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_pipe.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/internal/_pipe.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _pipe(f, g) {\n  return function () {\n    return g.call(this, f.apply(this, arguments));\n  };\n}\nmodule.exports = _pipe;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_pipe.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_quote.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_quote.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _quote(s) {\n  var escaped = s.replace(/\\\\/g, '\\\\\\\\').replace(/[\\b]/g, '\\\\b') // \\b matches word boundary; [\\b] matches backspace\n  .replace(/\\f/g, '\\\\f').replace(/\\n/g, '\\\\n').replace(/\\r/g, '\\\\r').replace(/\\t/g, '\\\\t').replace(/\\v/g, '\\\\v').replace(/\\0/g, '\\\\0');\n\n  return '\"' + escaped.replace(/\"/g, '\\\\\"') + '\"';\n}\nmodule.exports = _quote;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_quote.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_reduce.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_reduce.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _isArrayLike = /*#__PURE__*/__webpack_require__(/*! ./_isArrayLike */ \"./node_modules/ramda/src/internal/_isArrayLike.js\");\n\nvar _xwrap = /*#__PURE__*/__webpack_require__(/*! ./_xwrap */ \"./node_modules/ramda/src/internal/_xwrap.js\");\n\nvar bind = /*#__PURE__*/__webpack_require__(/*! ../bind */ \"./node_modules/ramda/src/bind.js\");\n\nfunction _arrayReduce(xf, acc, list) {\n  var idx = 0;\n  var len = list.length;\n  while (idx < len) {\n    acc = xf['@@transducer/step'](acc, list[idx]);\n    if (acc && acc['@@transducer/reduced']) {\n      acc = acc['@@transducer/value'];\n      break;\n    }\n    idx += 1;\n  }\n  return xf['@@transducer/result'](acc);\n}\n\nfunction _iterableReduce(xf, acc, iter) {\n  var step = iter.next();\n  while (!step.done) {\n    acc = xf['@@transducer/step'](acc, step.value);\n    if (acc && acc['@@transducer/reduced']) {\n      acc = acc['@@transducer/value'];\n      break;\n    }\n    step = iter.next();\n  }\n  return xf['@@transducer/result'](acc);\n}\n\nfunction _methodReduce(xf, acc, obj, methodName) {\n  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));\n}\n\nvar symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';\n\nfunction _reduce(fn, acc, list) {\n  if (typeof fn === 'function') {\n    fn = _xwrap(fn);\n  }\n  if (_isArrayLike(list)) {\n    return _arrayReduce(fn, acc, list);\n  }\n  if (typeof list['fantasy-land/reduce'] === 'function') {\n    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');\n  }\n  if (list[symIterator] != null) {\n    return _iterableReduce(fn, acc, list[symIterator]());\n  }\n  if (typeof list.next === 'function') {\n    return _iterableReduce(fn, acc, list);\n  }\n  if (typeof list.reduce === 'function') {\n    return _methodReduce(fn, acc, list, 'reduce');\n  }\n\n  throw new TypeError('reduce: list must be array or iterable');\n}\nmodule.exports = _reduce;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_reduce.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_toISOString.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_toISOString.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.\n */\nvar pad = function pad(n) {\n  return (n < 10 ? '0' : '') + n;\n};\n\nvar _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {\n  return d.toISOString();\n} : function _toISOString(d) {\n  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';\n};\n\nmodule.exports = _toISOString;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_toISOString.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_toString.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_toString.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _contains = /*#__PURE__*/__webpack_require__(/*! ./_contains */ \"./node_modules/ramda/src/internal/_contains.js\");\n\nvar _map = /*#__PURE__*/__webpack_require__(/*! ./_map */ \"./node_modules/ramda/src/internal/_map.js\");\n\nvar _quote = /*#__PURE__*/__webpack_require__(/*! ./_quote */ \"./node_modules/ramda/src/internal/_quote.js\");\n\nvar _toISOString = /*#__PURE__*/__webpack_require__(/*! ./_toISOString */ \"./node_modules/ramda/src/internal/_toISOString.js\");\n\nvar keys = /*#__PURE__*/__webpack_require__(/*! ../keys */ \"./node_modules/ramda/src/keys.js\");\n\nvar reject = /*#__PURE__*/__webpack_require__(/*! ../reject */ \"./node_modules/ramda/src/reject.js\");\n\nfunction _toString(x, seen) {\n  var recur = function recur(y) {\n    var xs = seen.concat([x]);\n    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);\n  };\n\n  //  mapPairs :: (Object, [String]) -> [String]\n  var mapPairs = function mapPairs(obj, keys) {\n    return _map(function (k) {\n      return _quote(k) + ': ' + recur(obj[k]);\n    }, keys.slice().sort());\n  };\n\n  switch (Object.prototype.toString.call(x)) {\n    case '[object Arguments]':\n      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';\n    case '[object Array]':\n      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {\n        return (/^\\d+$/.test(k)\n        );\n      }, keys(x)))).join(', ') + ']';\n    case '[object Boolean]':\n      return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();\n    case '[object Date]':\n      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';\n    case '[object Null]':\n      return 'null';\n    case '[object Number]':\n      return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);\n    case '[object String]':\n      return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);\n    case '[object Undefined]':\n      return 'undefined';\n    default:\n      if (typeof x.toString === 'function') {\n        var repr = x.toString();\n        if (repr !== '[object Object]') {\n          return repr;\n        }\n      }\n      return '{' + mapPairs(x, keys(x)).join(', ') + '}';\n  }\n}\nmodule.exports = _toString;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_toString.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfBase.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfBase.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  init: function init() {\n    return this.xf['@@transducer/init']();\n  },\n  result: function result(_result) {\n    return this.xf['@@transducer/result'](_result);\n  }\n};\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_xfBase.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfilter.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfilter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _xfBase = /*#__PURE__*/__webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/src/internal/_xfBase.js\");\n\nvar XFilter = /*#__PURE__*/function () {\n\n  function XFilter(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n  XFilter.prototype['@@transducer/init'] = _xfBase.init;\n  XFilter.prototype['@@transducer/result'] = _xfBase.result;\n  XFilter.prototype['@@transducer/step'] = function (result, input) {\n    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;\n  };\n\n  return XFilter;\n}();\n\nvar _xfilter = /*#__PURE__*/_curry2(function _xfilter(f, xf) {\n  return new XFilter(f, xf);\n});\nmodule.exports = _xfilter;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_xfilter.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xmap.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xmap.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _xfBase = /*#__PURE__*/__webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/src/internal/_xfBase.js\");\n\nvar XMap = /*#__PURE__*/function () {\n\n  function XMap(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n  XMap.prototype['@@transducer/init'] = _xfBase.init;\n  XMap.prototype['@@transducer/result'] = _xfBase.result;\n  XMap.prototype['@@transducer/step'] = function (result, input) {\n    return this.xf['@@transducer/step'](result, this.f(input));\n  };\n\n  return XMap;\n}();\n\nvar _xmap = /*#__PURE__*/_curry2(function _xmap(f, xf) {\n  return new XMap(f, xf);\n});\nmodule.exports = _xmap;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_xmap.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xwrap.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xwrap.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar XWrap = /*#__PURE__*/function () {\n  function XWrap(fn) {\n    this.f = fn;\n  }\n  XWrap.prototype['@@transducer/init'] = function () {\n    throw new Error('init not implemented on XWrap');\n  };\n  XWrap.prototype['@@transducer/result'] = function (acc) {\n    return acc;\n  };\n  XWrap.prototype['@@transducer/step'] = function (acc, x) {\n    return this.f(acc, x);\n  };\n\n  return XWrap;\n}();\n\nfunction _xwrap(fn) {\n  return new XWrap(fn);\n}\nmodule.exports = _xwrap;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/internal/_xwrap.js?");

/***/ }),

/***/ "./node_modules/ramda/src/keys.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/keys.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _has = /*#__PURE__*/__webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/src/internal/_has.js\");\n\nvar _isArguments = /*#__PURE__*/__webpack_require__(/*! ./internal/_isArguments */ \"./node_modules/ramda/src/internal/_isArguments.js\");\n\n// cover IE < 9 keys issues\n\n\nvar hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');\nvar nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];\n// Safari bug\nvar hasArgsEnumBug = /*#__PURE__*/function () {\n  'use strict';\n\n  return arguments.propertyIsEnumerable('length');\n}();\n\nvar contains = function contains(list, item) {\n  var idx = 0;\n  while (idx < list.length) {\n    if (list[idx] === item) {\n      return true;\n    }\n    idx += 1;\n  }\n  return false;\n};\n\n/**\n * Returns a list containing the names of all the enumerable own properties of\n * the supplied object.\n * Note that the order of the output array is not guaranteed to be consistent\n * across different JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig {k: v} -> [k]\n * @param {Object} obj The object to extract properties from\n * @return {Array} An array of the object's own properties.\n * @see R.keysIn, R.values\n * @example\n *\n *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']\n */\nvar _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {\n  return Object(obj) !== obj ? [] : Object.keys(obj);\n} : function keys(obj) {\n  if (Object(obj) !== obj) {\n    return [];\n  }\n  var prop, nIdx;\n  var ks = [];\n  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);\n  for (prop in obj) {\n    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {\n      ks[ks.length] = prop;\n    }\n  }\n  if (hasEnumBug) {\n    nIdx = nonEnumerableProps.length - 1;\n    while (nIdx >= 0) {\n      prop = nonEnumerableProps[nIdx];\n      if (_has(prop, obj) && !contains(ks, prop)) {\n        ks[ks.length] = prop;\n      }\n      nIdx -= 1;\n    }\n  }\n  return ks;\n};\nvar keys = /*#__PURE__*/_curry1(_keys);\nmodule.exports = keys;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/keys.js?");

/***/ }),

/***/ "./node_modules/ramda/src/map.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _dispatchable = /*#__PURE__*/__webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/src/internal/_dispatchable.js\");\n\nvar _map = /*#__PURE__*/__webpack_require__(/*! ./internal/_map */ \"./node_modules/ramda/src/internal/_map.js\");\n\nvar _reduce = /*#__PURE__*/__webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/src/internal/_reduce.js\");\n\nvar _xmap = /*#__PURE__*/__webpack_require__(/*! ./internal/_xmap */ \"./node_modules/ramda/src/internal/_xmap.js\");\n\nvar curryN = /*#__PURE__*/__webpack_require__(/*! ./curryN */ \"./node_modules/ramda/src/curryN.js\");\n\nvar keys = /*#__PURE__*/__webpack_require__(/*! ./keys */ \"./node_modules/ramda/src/keys.js\");\n\n/**\n * Takes a function and\n * a [functor](https://github.com/fantasyland/fantasy-land#functor),\n * applies the function to each of the functor's values, and returns\n * a functor of the same shape.\n *\n * Ramda provides suitable `map` implementations for `Array` and `Object`,\n * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.\n *\n * Dispatches to the `map` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * Also treats functions as functors and will compose them together.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Functor f => (a -> b) -> f a -> f b\n * @param {Function} fn The function to be called on every element of the input `list`.\n * @param {Array} list The list to be iterated over.\n * @return {Array} The new list.\n * @see R.transduce, R.addIndex\n * @example\n *\n *      var double = x => x * 2;\n *\n *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]\n *\n *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}\n * @symb R.map(f, [a, b]) = [f(a), f(b)]\n * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }\n * @symb R.map(f, functor_o) = functor_o.map(f)\n */\n\nvar map = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {\n  switch (Object.prototype.toString.call(functor)) {\n    case '[object Function]':\n      return curryN(functor.length, function () {\n        return fn.call(this, functor.apply(this, arguments));\n      });\n    case '[object Object]':\n      return _reduce(function (acc, key) {\n        acc[key] = fn(functor[key]);\n        return acc;\n      }, {}, keys(functor));\n    default:\n      return _map(fn, functor);\n  }\n}));\nmodule.exports = map;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/map.js?");

/***/ }),

/***/ "./node_modules/ramda/src/max.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/max.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\n/**\n * Returns the larger of its two arguments.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord a => a -> a -> a\n * @param {*} a\n * @param {*} b\n * @return {*}\n * @see R.maxBy, R.min\n * @example\n *\n *      R.max(789, 123); //=> 789\n *      R.max('a', 'b'); //=> 'b'\n */\n\nvar max = /*#__PURE__*/_curry2(function max(a, b) {\n  return b > a ? b : a;\n});\nmodule.exports = max;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/max.js?");

/***/ }),

/***/ "./node_modules/ramda/src/pipe.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/pipe.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _arity = /*#__PURE__*/__webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _pipe = /*#__PURE__*/__webpack_require__(/*! ./internal/_pipe */ \"./node_modules/ramda/src/internal/_pipe.js\");\n\nvar reduce = /*#__PURE__*/__webpack_require__(/*! ./reduce */ \"./node_modules/ramda/src/reduce.js\");\n\nvar tail = /*#__PURE__*/__webpack_require__(/*! ./tail */ \"./node_modules/ramda/src/tail.js\");\n\n/**\n * Performs left-to-right function composition. The leftmost function may have\n * any arity; the remaining functions must be unary.\n *\n * In some libraries this function is named `sequence`.\n *\n * **Note:** The result of pipe is not automatically curried.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)\n * @param {...Function} functions\n * @return {Function}\n * @see R.compose\n * @example\n *\n *      var f = R.pipe(Math.pow, R.negate, R.inc);\n *\n *      f(3, 4); // -(3^4) + 1\n * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))\n */\n\nfunction pipe() {\n  if (arguments.length === 0) {\n    throw new Error('pipe requires at least one argument');\n  }\n  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));\n}\nmodule.exports = pipe;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/pipe.js?");

/***/ }),

/***/ "./node_modules/ramda/src/propEq.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/propEq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry3 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/src/internal/_curry3.js\");\n\nvar equals = /*#__PURE__*/__webpack_require__(/*! ./equals */ \"./node_modules/ramda/src/equals.js\");\n\n/**\n * Returns `true` if the specified object property is equal, in\n * [`R.equals`](#equals) terms, to the given value; `false` otherwise.\n * You can test multiple properties with [`R.where`](#where).\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig String -> a -> Object -> Boolean\n * @param {String} name\n * @param {*} val\n * @param {*} obj\n * @return {Boolean}\n * @see R.whereEq, R.propSatisfies, R.equals\n * @example\n *\n *      var abby = {name: 'Abby', age: 7, hair: 'blond'};\n *      var fred = {name: 'Fred', age: 12, hair: 'brown'};\n *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};\n *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};\n *      var kids = [abby, fred, rusty, alois];\n *      var hasBrownHair = R.propEq('hair', 'brown');\n *      R.filter(hasBrownHair, kids); //=> [fred, rusty]\n */\n\nvar propEq = /*#__PURE__*/_curry3(function propEq(name, val, obj) {\n  return equals(val, obj[name]);\n});\nmodule.exports = propEq;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/propEq.js?");

/***/ }),

/***/ "./node_modules/ramda/src/reduce.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/reduce.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry3 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/src/internal/_curry3.js\");\n\nvar _reduce = /*#__PURE__*/__webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/src/internal/_reduce.js\");\n\n/**\n * Returns a single item by iterating through the list, successively calling\n * the iterator function and passing it an accumulator value and the current\n * value from the array, and then passing the result to the next call.\n *\n * The iterator function receives two values: *(acc, value)*. It may use\n * [`R.reduced`](#reduced) to shortcut the iteration.\n *\n * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function\n * is *(value, acc)*.\n *\n * Note: `R.reduce` does not skip deleted or unassigned indices (sparse\n * arrays), unlike the native `Array.prototype.reduce` method. For more details\n * on this behavior, see:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description\n *\n * Dispatches to the `reduce` method of the third argument, if present. When\n * doing so, it is up to the user to handle the [`R.reduced`](#reduced)\n * shortcuting, as this is not implemented by `reduce`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig ((a, b) -> a) -> a -> [b] -> a\n * @param {Function} fn The iterator function. Receives two values, the accumulator and the\n *        current element from the array.\n * @param {*} acc The accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @see R.reduced, R.addIndex, R.reduceRight\n * @example\n *\n *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10\n *      //          -               -10\n *      //         / \\              / \\\n *      //        -   4           -6   4\n *      //       / \\              / \\\n *      //      -   3   ==>     -3   3\n *      //     / \\              / \\\n *      //    -   2           -1   2\n *      //   / \\              / \\\n *      //  0   1            0   1\n *\n * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)\n */\n\nvar reduce = /*#__PURE__*/_curry3(_reduce);\nmodule.exports = reduce;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/reduce.js?");

/***/ }),

/***/ "./node_modules/ramda/src/reject.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/reject.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _complement = /*#__PURE__*/__webpack_require__(/*! ./internal/_complement */ \"./node_modules/ramda/src/internal/_complement.js\");\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar filter = /*#__PURE__*/__webpack_require__(/*! ./filter */ \"./node_modules/ramda/src/filter.js\");\n\n/**\n * The complement of [`filter`](#filter).\n *\n * Acts as a transducer if a transformer is given in list position. Filterable\n * objects include plain objects or any object that has a filter method such\n * as `Array`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Filterable f => (a -> Boolean) -> f a -> f a\n * @param {Function} pred\n * @param {Array} filterable\n * @return {Array}\n * @see R.filter, R.transduce, R.addIndex\n * @example\n *\n *      var isOdd = (n) => n % 2 === 1;\n *\n *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]\n *\n *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}\n */\n\nvar reject = /*#__PURE__*/_curry2(function reject(pred, filterable) {\n  return filter(_complement(pred), filterable);\n});\nmodule.exports = reject;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/reject.js?");

/***/ }),

/***/ "./node_modules/ramda/src/reverse.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/reverse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isString = /*#__PURE__*/__webpack_require__(/*! ./internal/_isString */ \"./node_modules/ramda/src/internal/_isString.js\");\n\n/**\n * Returns a new list or string with the elements or characters in reverse\n * order.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {Array|String} list\n * @return {Array|String}\n * @example\n *\n *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]\n *      R.reverse([1, 2]);     //=> [2, 1]\n *      R.reverse([1]);        //=> [1]\n *      R.reverse([]);         //=> []\n *\n *      R.reverse('abc');      //=> 'cba'\n *      R.reverse('ab');       //=> 'ba'\n *      R.reverse('a');        //=> 'a'\n *      R.reverse('');         //=> ''\n */\n\nvar reverse = /*#__PURE__*/_curry1(function reverse(list) {\n  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();\n});\nmodule.exports = reverse;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/reverse.js?");

/***/ }),

/***/ "./node_modules/ramda/src/slice.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/slice.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _checkForMethod = /*#__PURE__*/__webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/src/internal/_checkForMethod.js\");\n\nvar _curry3 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/src/internal/_curry3.js\");\n\n/**\n * Returns the elements of the given list or string (or object with a `slice`\n * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).\n *\n * Dispatches to the `slice` method of the third argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.4\n * @category List\n * @sig Number -> Number -> [a] -> [a]\n * @sig Number -> Number -> String -> String\n * @param {Number} fromIndex The start index (inclusive).\n * @param {Number} toIndex The end index (exclusive).\n * @param {*} list\n * @return {*}\n * @example\n *\n *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']\n *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']\n *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']\n *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']\n *      R.slice(0, 3, 'ramda');                     //=> 'ram'\n */\n\nvar slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {\n  return Array.prototype.slice.call(list, fromIndex, toIndex);\n}));\nmodule.exports = slice;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/slice.js?");

/***/ }),

/***/ "./node_modules/ramda/src/tail.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/tail.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _checkForMethod = /*#__PURE__*/__webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/src/internal/_checkForMethod.js\");\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar slice = /*#__PURE__*/__webpack_require__(/*! ./slice */ \"./node_modules/ramda/src/slice.js\");\n\n/**\n * Returns all but the first element of the given list or string (or object\n * with a `tail` method).\n *\n * Dispatches to the `slice` method of the first argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {*} list\n * @return {*}\n * @see R.head, R.init, R.last\n * @example\n *\n *      R.tail([1, 2, 3]);  //=> [2, 3]\n *      R.tail([1, 2]);     //=> [2]\n *      R.tail([1]);        //=> []\n *      R.tail([]);         //=> []\n *\n *      R.tail('abc');  //=> 'bc'\n *      R.tail('ab');   //=> 'b'\n *      R.tail('a');    //=> ''\n *      R.tail('');     //=> ''\n */\n\nvar tail = /*#__PURE__*/_curry1( /*#__PURE__*/_checkForMethod('tail', /*#__PURE__*/slice(1, Infinity)));\nmodule.exports = tail;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/tail.js?");

/***/ }),

/***/ "./node_modules/ramda/src/toPairs.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/toPairs.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _has = /*#__PURE__*/__webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/src/internal/_has.js\");\n\n/**\n * Converts an object into an array of key, value arrays. Only the object's\n * own properties are used.\n * Note that the order of the output array is not guaranteed to be consistent\n * across different JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.4.0\n * @category Object\n * @sig {String: *} -> [[String,*]]\n * @param {Object} obj The object to extract from\n * @return {Array} An array of key, value arrays from the object's own properties.\n * @see R.fromPairs\n * @example\n *\n *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]\n */\n\nvar toPairs = /*#__PURE__*/_curry1(function toPairs(obj) {\n  var pairs = [];\n  for (var prop in obj) {\n    if (_has(prop, obj)) {\n      pairs[pairs.length] = [prop, obj[prop]];\n    }\n  }\n  return pairs;\n});\nmodule.exports = toPairs;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/toPairs.js?");

/***/ }),

/***/ "./node_modules/ramda/src/toString.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/toString.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _toString = /*#__PURE__*/__webpack_require__(/*! ./internal/_toString */ \"./node_modules/ramda/src/internal/_toString.js\");\n\n/**\n * Returns the string representation of the given value. `eval`'ing the output\n * should result in a value equivalent to the input value. Many of the built-in\n * `toString` methods do not satisfy this requirement.\n *\n * If the given value is an `[object Object]` with a `toString` method other\n * than `Object.prototype.toString`, this method is invoked with no arguments\n * to produce the return value. This means user-defined constructor functions\n * can provide a suitable `toString` method. For example:\n *\n *     function Point(x, y) {\n *       this.x = x;\n *       this.y = y;\n *     }\n *\n *     Point.prototype.toString = function() {\n *       return 'new Point(' + this.x + ', ' + this.y + ')';\n *     };\n *\n *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'\n *\n * @func\n * @memberOf R\n * @since v0.14.0\n * @category String\n * @sig * -> String\n * @param {*} val\n * @return {String}\n * @example\n *\n *      R.toString(42); //=> '42'\n *      R.toString('abc'); //=> '\"abc\"'\n *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'\n *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{\"bar\": 2, \"baz\": 3, \"foo\": 1}'\n *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date(\"2001-02-03T04:05:06.000Z\")'\n */\n\nvar toString = /*#__PURE__*/_curry1(function toString(val) {\n  return _toString(val, []);\n});\nmodule.exports = toString;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/toString.js?");

/***/ }),

/***/ "./node_modules/ramda/src/type.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/type.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\n/**\n * Gives a single-word string description of the (native) type of a value,\n * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not\n * attempt to distinguish user Object types any further, reporting them all as\n * 'Object'.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Type\n * @sig (* -> {*}) -> String\n * @param {*} val The value to test\n * @return {String}\n * @example\n *\n *      R.type({}); //=> \"Object\"\n *      R.type(1); //=> \"Number\"\n *      R.type(false); //=> \"Boolean\"\n *      R.type('s'); //=> \"String\"\n *      R.type(null); //=> \"Null\"\n *      R.type([]); //=> \"Array\"\n *      R.type(/[A-z]/); //=> \"RegExp\"\n *      R.type(() => {}); //=> \"Function\"\n *      R.type(undefined); //=> \"Undefined\"\n */\n\nvar type = /*#__PURE__*/_curry1(function type(val) {\n  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);\n});\nmodule.exports = type;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/type.js?");

/***/ }),

/***/ "./node_modules/ramda/src/without.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/without.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _contains = /*#__PURE__*/__webpack_require__(/*! ./internal/_contains */ \"./node_modules/ramda/src/internal/_contains.js\");\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar flip = /*#__PURE__*/__webpack_require__(/*! ./flip */ \"./node_modules/ramda/src/flip.js\");\n\nvar reject = /*#__PURE__*/__webpack_require__(/*! ./reject */ \"./node_modules/ramda/src/reject.js\");\n\n/**\n * Returns a new list without values in the first argument.\n * [`R.equals`](#equals) is used to determine equality.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * @func\n * @memberOf R\n * @since v0.19.0\n * @category List\n * @sig [a] -> [a] -> [a]\n * @param {Array} list1 The values to be removed from `list2`.\n * @param {Array} list2 The array to remove values from.\n * @return {Array} The new array without values in `list1`.\n * @see R.transduce, R.difference\n * @example\n *\n *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]\n */\n\nvar without = /*#__PURE__*/_curry2(function (xs, list) {\n  return reject(flip(_contains)(xs), list);\n});\nmodule.exports = without;\n\n//# sourceURL=webpack://virtualWebaudio/./node_modules/ramda/src/without.js?");

/***/ }),

/***/ "./src/Events.js":
/*!***********************!*\
  !*** ./src/Events.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Events = function () {\n  function Events() {\n    _classCallCheck(this, Events);\n\n    this.data = [];\n  }\n\n  _createClass(Events, [{\n    key: \"add\",\n    value: function add(eventName, param, targetId, time) {\n      var args = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];\n\n      this.data.push({\n        targetId: targetId,\n        eventName: eventName,\n        param: param,\n        time: time,\n        args: args\n      });\n    }\n  }]);\n\n  return Events;\n}();\n\nexports.default = Events;\n\n//# sourceURL=webpack://virtualWebaudio/./src/Events.js?");

/***/ }),

/***/ "./src/UniqueIdGenerator.js":
/*!**********************************!*\
  !*** ./src/UniqueIdGenerator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar UniqueIdGenerator = function () {\n  function UniqueIdGenerator() {\n    var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n    _classCallCheck(this, UniqueIdGenerator);\n\n    this.value = seed;\n  }\n\n  _createClass(UniqueIdGenerator, [{\n    key: 'generate',\n    value: function generate() {\n      return '#' + ++this.value;\n    }\n  }]);\n\n  return UniqueIdGenerator;\n}();\n\nexports.default = UniqueIdGenerator;\n\n//# sourceURL=webpack://virtualWebaudio/./src/UniqueIdGenerator.js?");

/***/ }),

/***/ "./src/VirtualAudioContext.js":
/*!************************************!*\
  !*** ./src/VirtualAudioContext.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nvar _UniqueIdGenerator = __webpack_require__(/*! ./UniqueIdGenerator */ \"./src/UniqueIdGenerator.js\");\n\nvar _UniqueIdGenerator2 = _interopRequireDefault(_UniqueIdGenerator);\n\nvar _Events = __webpack_require__(/*! ./Events */ \"./src/Events.js\");\n\nvar _Events2 = _interopRequireDefault(_Events);\n\nvar _VirtualOscillatorNode = __webpack_require__(/*! ./VirtualOscillatorNode */ \"./src/VirtualOscillatorNode.js\");\n\nvar _VirtualOscillatorNode2 = _interopRequireDefault(_VirtualOscillatorNode);\n\nvar _VirtualGainNode = __webpack_require__(/*! ./VirtualGainNode */ \"./src/VirtualGainNode.js\");\n\nvar _VirtualGainNode2 = _interopRequireDefault(_VirtualGainNode);\n\nvar _VirtualPeriodicWave = __webpack_require__(/*! ./VirtualPeriodicWave */ \"./src/VirtualPeriodicWave.js\");\n\nvar _VirtualPeriodicWave2 = _interopRequireDefault(_VirtualPeriodicWave);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar VirtualAudioContext = function () {\n  function VirtualAudioContext() {\n    _classCallCheck(this, VirtualAudioContext);\n\n    this._ = {\n      uniqueIdGenerator: new _UniqueIdGenerator2.default(0),\n      events: new _Events2.default(),\n      initialTime: Date.now()\n    };\n  }\n\n  _createClass(VirtualAudioContext, [{\n    key: 'createGain',\n\n    /*\r\n    get listener\r\n    get sampleRate\r\n    get state\r\n      createAnalyser()\r\n    createBiquadFilter()\r\n    createBuffer()\r\n    createBufferSource()\r\n    createChannelMerger()\r\n    createChannelSplitter()\r\n    createConstantSource()\r\n    createConvolver()\r\n    createDelay()\r\n    createDynamicsCompressor()\r\n    */\n    value: function createGain() {\n      var id = this._.uniqueIdGenerator.generate();\n      return new _VirtualGainNode2.default(id, this);\n    }\n    /*\r\n    createIIRFilter()\r\n    */\n\n  }, {\n    key: 'createOscillator',\n    value: function createOscillator() {\n      var id = this._.uniqueIdGenerator.generate();\n      return new _VirtualOscillatorNode2.default(id, this);\n    }\n    /*\r\n    createPanner()\r\n    */\n\n  }, {\n    key: 'createPeriodicWave',\n    value: function createPeriodicWave(real, imag /*, constraints */) {\n      var id = this._.uniqueIdGenerator.generate();\n      return new _VirtualPeriodicWave2.default(id, this, real, imag);\n    }\n    /*\r\n    createScriptProcessor()\r\n    createStereoPanner()\r\n    createWaveShaper()\r\n    decodeAudioData()\r\n    resume()\r\n    */\n\n  }, {\n    key: 'currentTime',\n    get: function get() {\n      return Math.floor((Date.now() - this._.initialTime) / 10) * 10; // manual 10ms throttle\n    }\n  }, {\n    key: 'destination',\n    get: function get() {\n      return _constants.CTX_DESTINATION;\n    }\n  }]);\n\n  return VirtualAudioContext;\n}();\n\nexports.default = VirtualAudioContext;\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualAudioContext.js?");

/***/ }),

/***/ "./src/VirtualAudioNode.js":
/*!*********************************!*\
  !*** ./src/VirtualAudioNode.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nvar _VirtualAudioParam = __webpack_require__(/*! ./VirtualAudioParam */ \"./src/VirtualAudioParam.js\");\n\nvar _VirtualAudioParam2 = _interopRequireDefault(_VirtualAudioParam);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar VirtualAudioNode = function () {\n  function VirtualAudioNode(id, ctx) {\n    _classCallCheck(this, VirtualAudioNode);\n\n    this._ = {\n      id: id,\n      ctx: ctx\n    };\n  }\n\n  _createClass(VirtualAudioNode, [{\n    key: 'connect',\n    value: function connect(destination /*, outputIndex, inputIndex */) {\n      if (destination instanceof VirtualAudioNode) {\n        this._.ctx._.events.add(_constants.EVENTS.CONNECT, destination._.id, this._.id, this._.ctx.currentTime);\n      } else if (destination instanceof _VirtualAudioParam2.default) {\n        this._.ctx._.events.add(_constants.EVENTS.CONNECT, destination._.nodeId, this._.id, this._.ctx.currentTime, [destination._.name]);\n      } else if (destination === this._.ctx.destination) {\n        this._.ctx._.events.add(_constants.EVENTS.CONNECT, destination, this._.id, this._.ctx.currentTime);\n      }\n    }\n  }, {\n    key: 'disconnect',\n    value: function disconnect() /*, output, input */{\n      var destination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n      if (destination === null) {\n        this._.ctx._.events.add(_constants.EVENTS.DISCONNECT, null, this._.id, this._.ctx.currentTime);\n      } else if (destination instanceof VirtualAudioNode) {\n        this._.ctx._.events.add(_constants.EVENTS.DISCONNECT, destination._.id, this._.id, this._.ctx.currentTime);\n      } else if (destination instanceof _VirtualAudioParam2.default) {\n        this._.ctx._.events.add(_constants.EVENTS.DISCONNECT, destination._.nodeId, this._.id, this._.ctx.currentTime, [destination._.name]);\n      } else if (destination === this._.ctx.destination) {\n        this._.ctx._.events.add(_constants.EVENTS.DISCONNECT, destination, this._.id, this._.ctx.currentTime);\n      }\n    }\n  }]);\n\n  return VirtualAudioNode;\n}();\n\nexports.default = VirtualAudioNode;\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualAudioNode.js?");

/***/ }),

/***/ "./src/VirtualAudioParam.js":
/*!**********************************!*\
  !*** ./src/VirtualAudioParam.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar VirtualAudioParam = function () {\n  function VirtualAudioParam(nodeId, ctx, name, defaultValue) {\n    _classCallCheck(this, VirtualAudioParam);\n\n    this._ = {\n      nodeId: nodeId,\n      ctx: ctx,\n      name: name,\n      defaultValue: defaultValue\n    };\n  }\n\n  _createClass(VirtualAudioParam, [{\n    key: 'value',\n    get: function get() {\n      return this._.defaultValue;\n    },\n    set: function set(newValue) {\n      this._.ctx._.events.add(_constants.EVENTS.UPDATE, null, this._.nodeId, this._.ctx.currentTime, [_defineProperty({}, this._.name, newValue)]);\n    }\n\n    /*\r\n    setValueAtTime () {\r\n      }\r\n    linearRampToValueAtTime () {\r\n      }\r\n    exponentialRampToValueAtTime () {\r\n      }\r\n    setTargetAtTime () {\r\n      }\r\n    setValueCurveAtTime () {\r\n      }\r\n    cancelScheduledValues () {\r\n      }\r\n    cancelAndHoldAtTime () {\r\n      }\r\n    */\n\n  }]);\n\n  return VirtualAudioParam;\n}();\n\nexports.default = VirtualAudioParam;\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualAudioParam.js?");

/***/ }),

/***/ "./src/VirtualGainNode.js":
/*!********************************!*\
  !*** ./src/VirtualGainNode.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _VirtualAudioNode2 = __webpack_require__(/*! ./VirtualAudioNode */ \"./src/VirtualAudioNode.js\");\n\nvar _VirtualAudioNode3 = _interopRequireDefault(_VirtualAudioNode2);\n\nvar _VirtualAudioParam = __webpack_require__(/*! ./VirtualAudioParam */ \"./src/VirtualAudioParam.js\");\n\nvar _VirtualAudioParam2 = _interopRequireDefault(_VirtualAudioParam);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar VirtualGainNode = function (_VirtualAudioNode) {\n  _inherits(VirtualGainNode, _VirtualAudioNode);\n\n  function VirtualGainNode(id, ctx) {\n    _classCallCheck(this, VirtualGainNode);\n\n    var _this = _possibleConstructorReturn(this, (VirtualGainNode.__proto__ || Object.getPrototypeOf(VirtualGainNode)).call(this, id, ctx));\n\n    _this.gain = new _VirtualAudioParam2.default(id, ctx, 'gain', 1);\n\n    ctx._.events.add(_constants.EVENTS.CREATE, 'gain', id, ctx.currentTime);\n    return _this;\n  }\n\n  return VirtualGainNode;\n}(_VirtualAudioNode3.default);\n\nexports.default = VirtualGainNode;\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualGainNode.js?");

/***/ }),

/***/ "./src/VirtualOscillatorNode.js":
/*!**************************************!*\
  !*** ./src/VirtualOscillatorNode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _VirtualAudioNode2 = __webpack_require__(/*! ./VirtualAudioNode */ \"./src/VirtualAudioNode.js\");\n\nvar _VirtualAudioNode3 = _interopRequireDefault(_VirtualAudioNode2);\n\nvar _VirtualAudioParam = __webpack_require__(/*! ./VirtualAudioParam */ \"./src/VirtualAudioParam.js\");\n\nvar _VirtualAudioParam2 = _interopRequireDefault(_VirtualAudioParam);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar VirtualOscillatorNode = function (_VirtualAudioNode) {\n  _inherits(VirtualOscillatorNode, _VirtualAudioNode);\n\n  function VirtualOscillatorNode(id, ctx) {\n    _classCallCheck(this, VirtualOscillatorNode);\n\n    var _this = _possibleConstructorReturn(this, (VirtualOscillatorNode.__proto__ || Object.getPrototypeOf(VirtualOscillatorNode)).call(this, id, ctx));\n\n    _this.type = new _VirtualAudioParam2.default(id, ctx, 'type', 'sine');\n    _this.frequency = new _VirtualAudioParam2.default(id, ctx, 'frequency', 440);\n    _this.detune = new _VirtualAudioParam2.default(id, ctx, 'detune', 0);\n\n    ctx._.events.add(_constants.EVENTS.CREATE, 'oscillator', id, ctx.currentTime);\n    return _this;\n  }\n\n  _createClass(VirtualOscillatorNode, [{\n    key: 'start',\n    value: function start() {\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      this._.ctx._.events.add(_constants.EVENTS.CALL, 'start', this._.id, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: 'stop',\n    value: function stop() {\n      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      this._.ctx._.events.add(_constants.EVENTS.CALL, 'stop', this._.id, this._.ctx.currentTime, args);\n    }\n  }, {\n    key: 'setPeriodicWave',\n    value: function setPeriodicWave() {\n      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n        args[_key3] = arguments[_key3];\n      }\n\n      this._.ctx._.events.add(_constants.EVENTS.CALL, 'setPeriodicWave', this._.id, this._.ctx.currentTime, args);\n    }\n  }]);\n\n  return VirtualOscillatorNode;\n}(_VirtualAudioNode3.default);\n\nexports.default = VirtualOscillatorNode;\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualOscillatorNode.js?");

/***/ }),

/***/ "./src/VirtualPeriodicWave.js":
/*!************************************!*\
  !*** ./src/VirtualPeriodicWave.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar VirtualPeriodicWave = function VirtualPeriodicWave(id, ctx) {\n  _classCallCheck(this, VirtualPeriodicWave);\n\n  this._ = {\n    id: id,\n    ctx: ctx\n  };\n\n  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  this._.events.add(_constants.EVENTS.CREATE, 'periodicWave', id, this.currentTime, args);\n};\n\nexports.default = VirtualPeriodicWave;\n\n//# sourceURL=webpack://virtualWebaudio/./src/VirtualPeriodicWave.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CTX_DESTINATION = 'ctx.destination';\n\nvar EVENTS = {\n  CREATE: 'CREATE',\n  UPDATE: 'UPDATE',\n  CONNECT: 'CONNECT',\n  CALL: 'CALL',\n  REMOVE: 'REMOVE',\n  NOP: 'NOP',\n  DISCONNECT: 'DISCONNECT'\n};\n\nexports.CTX_DESTINATION = CTX_DESTINATION;\nexports.EVENTS = EVENTS;\n\n//# sourceURL=webpack://virtualWebaudio/./src/constants.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.applyEventToContext = exports.removeNodeById = exports.setNodeById = exports.getNodeById = exports.invertEvent = undefined;\n\nvar _toPairs2 = __webpack_require__(/*! ramda/src/toPairs */ \"./node_modules/ramda/src/toPairs.js\");\n\nvar _toPairs3 = _interopRequireDefault(_toPairs2);\n\nvar _apply2 = __webpack_require__(/*! ramda/src/apply */ \"./node_modules/ramda/src/apply.js\");\n\nvar _apply3 = _interopRequireDefault(_apply2);\n\nvar _curry2 = __webpack_require__(/*! ramda/src/curry */ \"./node_modules/ramda/src/curry.js\");\n\nvar _curry3 = _interopRequireDefault(_curry2);\n\nvar _T2 = __webpack_require__(/*! ramda/src/T */ \"./node_modules/ramda/src/T.js\");\n\nvar _T3 = _interopRequireDefault(_T2);\n\nvar _assoc2 = __webpack_require__(/*! ramda/src/assoc */ \"./node_modules/ramda/src/assoc.js\");\n\nvar _assoc3 = _interopRequireDefault(_assoc2);\n\nvar _propEq2 = __webpack_require__(/*! ramda/src/propEq */ \"./node_modules/ramda/src/propEq.js\");\n\nvar _propEq3 = _interopRequireDefault(_propEq2);\n\nvar _cond2 = __webpack_require__(/*! ramda/src/cond */ \"./node_modules/ramda/src/cond.js\");\n\nvar _cond3 = _interopRequireDefault(_cond2);\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar invertEvent = (0, _cond3.default)([[(0, _propEq3.default)('eventName', _constants.EVENTS.CREATE), (0, _assoc3.default)('eventName', _constants.EVENTS.REMOVE)], [(0, _propEq3.default)('eventName', _constants.EVENTS.UPDATE), (0, _assoc3.default)('eventName', _constants.EVENTS.NOP)], [(0, _propEq3.default)('eventName', _constants.EVENTS.CONNECT), (0, _assoc3.default)('eventName', _constants.EVENTS.DISCONNECT)], [(0, _propEq3.default)('eventName', _constants.EVENTS.DISCONNECT), (0, _assoc3.default)('eventName', _constants.EVENTS.CONNECT)], [(0, _propEq3.default)('eventName', _constants.EVENTS.CALL), (0, _cond3.default)([[(0, _propEq3.default)('param', 'start'), (0, _assoc3.default)('param', 'stop')], [(0, _propEq3.default)('param', 'stop'), (0, _assoc3.default)('param', 'start')], [(0, _propEq3.default)('param', 'setPeriodicWave'), (0, _assoc3.default)('eventName', _constants.EVENTS.NOP)], [_T3.default, function (_ref) {\n  var param = _ref.param;\n\n  console.error('unknown command ' + param);\n}]])], [_T3.default, function (_ref2) {\n  var eventName = _ref2.eventName;\n\n  console.error('unknown event ' + eventName);\n}]]);\n\nvar getNodeById = function getNodeById(id, ctx) {\n  return ctx._nodes[id];\n};\n\nvar setNodeById = function setNodeById(id, node, ctx) {\n  if (!ctx._nodes) {\n    ctx._nodes = {};\n  }\n  ctx._nodes[id] = node;\n};\n\nvar removeNodeById = function removeNodeById(id, ctx) {\n  delete ctx._nodes[id];\n};\n\nvar applyEventToContext = (0, _curry3.default)(function (_ref3, ctx) {\n  var targetId = _ref3.targetId,\n      eventName = _ref3.eventName,\n      param = _ref3.param,\n      time = _ref3.time,\n      args = _ref3.args;\n\n  console.log(targetId, eventName, param, time, args);\n  // TODO: how to deal with time?\n\n  switch (eventName) {\n    case _constants.EVENTS.CREATE:\n      switch (param) {\n        case 'oscillator':\n          {\n            var node = ctx.createOscillator();\n            setNodeById(targetId, node, ctx);\n          }\n          break;\n        case 'gain':\n          {\n            var _node = ctx.createGain();\n            setNodeById(targetId, _node, ctx);\n          }\n          break;\n        case 'periodicWave':\n          {\n            var _node2 = (0, _apply3.default)(ctx.createPeriodicWave, args);\n            setNodeById(targetId, _node2, ctx);\n          }\n          break;\n        default:\n          {\n            console.error('unknown node type', param);\n          }\n      }\n      break;\n    case _constants.EVENTS.UPDATE:\n      {\n        var _node3 = getNodeById(targetId, ctx);\n\n        var _toPairs$ = _slicedToArray((0, _toPairs3.default)(args)[0], 2),\n            key = _toPairs$[0],\n            value = _toPairs$[1];\n\n        _node3[key].value = value;\n      }\n      break;\n    case _constants.EVENTS.CONNECT:\n      {\n        var _node4 = getNodeById(targetId, ctx);\n\n        if (param === _constants.CTX_DESTINATION) {\n          _node4.connect(ctx.destination);\n        } else {\n          var target = getNodeById(param, ctx);\n\n          if (args.length === 0) {\n            _node4.connect(target);\n          } else {\n            var property = target[args[0]];\n\n            _node4.connect(property);\n          }\n        }\n      }\n      break;\n    case _constants.EVENTS.CALL:\n      {\n        var _node5 = getNodeById(targetId, ctx);\n\n        switch (param) {\n          case 'start':\n          case 'stop':\n          case 'setPeriodicWave':\n            (0, _apply3.default)(_node5[param], args);\n            break;\n          default:\n            {\n              console.error('unknown command', param);\n            }\n        }\n      }\n      break;\n    case _constants.EVENTS.REMOVE:\n      removeNodeById(targetId, ctx);\n      break;\n    case _constants.EVENTS.DISCONNECT:\n      {\n        var _node6 = getNodeById(targetId, ctx);\n\n        if (param === null) {\n          _node6.disconnect();\n        } else if (param === _constants.CTX_DESTINATION) {\n          _node6.disconnect(ctx.destination);\n        } else {\n          var _target = getNodeById(param, ctx);\n\n          if (args.length === 0) {\n            _node6.disconnect(_target);\n          } else {\n            var _property = _target[args[0]];\n\n            _node6.disconnect(_property);\n          }\n        }\n      }\n      break;\n    default:\n      {\n        console.error('unknown event', eventName);\n      }\n  }\n});\n\nexports.invertEvent = invertEvent;\nexports.getNodeById = getNodeById;\nexports.setNodeById = setNodeById;\nexports.removeNodeById = removeNodeById;\nexports.applyEventToContext = applyEventToContext;\n\n//# sourceURL=webpack://virtualWebaudio/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = exports.patch = exports.diff = exports.VirtualAudioContext = undefined;\n\nvar _add2 = __webpack_require__(/*! ramda/src/add */ \"./node_modules/ramda/src/add.js\");\n\nvar _add3 = _interopRequireDefault(_add2);\n\nvar _evolve2 = __webpack_require__(/*! ramda/src/evolve */ \"./node_modules/ramda/src/evolve.js\");\n\nvar _evolve3 = _interopRequireDefault(_evolve2);\n\nvar _2 = __webpack_require__(/*! ramda/src/__ */ \"./node_modules/ramda/src/__.js\");\n\nvar _3 = _interopRequireDefault(_2);\n\nvar _forEach2 = __webpack_require__(/*! ramda/src/forEach */ \"./node_modules/ramda/src/forEach.js\");\n\nvar _forEach3 = _interopRequireDefault(_forEach2);\n\nvar _concat2 = __webpack_require__(/*! ramda/src/concat */ \"./node_modules/ramda/src/concat.js\");\n\nvar _concat3 = _interopRequireDefault(_concat2);\n\nvar _propEq2 = __webpack_require__(/*! ramda/src/propEq */ \"./node_modules/ramda/src/propEq.js\");\n\nvar _propEq3 = _interopRequireDefault(_propEq2);\n\nvar _reject2 = __webpack_require__(/*! ramda/src/reject */ \"./node_modules/ramda/src/reject.js\");\n\nvar _reject3 = _interopRequireDefault(_reject2);\n\nvar _without2 = __webpack_require__(/*! ramda/src/without */ \"./node_modules/ramda/src/without.js\");\n\nvar _without3 = _interopRequireDefault(_without2);\n\nvar _compose2 = __webpack_require__(/*! ramda/src/compose */ \"./node_modules/ramda/src/compose.js\");\n\nvar _compose3 = _interopRequireDefault(_compose2);\n\nvar _map2 = __webpack_require__(/*! ramda/src/map */ \"./node_modules/ramda/src/map.js\");\n\nvar _map3 = _interopRequireDefault(_map2);\n\nvar _VirtualAudioContext = __webpack_require__(/*! ./VirtualAudioContext */ \"./src/VirtualAudioContext.js\");\n\nvar _VirtualAudioContext2 = _interopRequireDefault(_VirtualAudioContext);\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// -------------\n\nvar diff = function diff(virtualCtxA, virtualCtxB) {\n  var a = (0, _map3.default)(JSON.stringify, virtualCtxA._.events.data);\n  var b = (0, _map3.default)(JSON.stringify, virtualCtxB._.events.data);\n\n  var removed = (0, _compose3.default)((0, _reject3.default)((0, _propEq3.default)('eventName', _constants.EVENTS.NOP)), (0, _map3.default)((0, _compose3.default)(_helpers.invertEvent, JSON.parse)), _without3.default)(b, a);\n\n  var added = (0, _map3.default)(JSON.parse, (0, _without3.default)(a, b));\n\n  return (0, _concat3.default)(removed, added);\n};\n\nvar patch = function patch(eventsData, ctx) {\n  var now = Date.now();\n\n  (0, _compose3.default)((0, _forEach3.default)((0, _helpers.applyEventToContext)(_3.default, ctx)),\n  // TODO: SORT BY targetId, time DESC\n  (0, _map3.default)((0, _evolve3.default)({\n    time: (0, _add3.default)(now)\n  })))(eventsData);\n};\n\nvar render = function render(virtualCtx, ctx) {\n  patch(virtualCtx._.events.data, ctx);\n};\n\nexports.VirtualAudioContext = _VirtualAudioContext2.default;\nexports.diff = diff;\nexports.patch = patch;\nexports.render = render;\n\n//# sourceURL=webpack://virtualWebaudio/./src/index.js?");

/***/ })

/******/ });