module.exports =
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

/***/ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultBitmap.png":
/*!**************************************************************************!*\
  !*** ./node_modules/arraybuffer-loader!./src/builtins/defaultBitmap.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../node_modules/arraybuffer-loader/lib/to-array-buffer.js */ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js")("iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAADZElEQVR42u3a70vbQBgH8O/7vOibvsmbFUEEWUGGUhQ25nDuhSKIUFDxlYi0SAd94atRmFiHCH2x4W8iiNtwowXRgd1QipJYY3N/1F4kTQ6XLKS9yyHcvWyO8MnT5y53Tw5EcIMESIAESIAESIAESIAEPFVAq/6l8G4oAQCp4aniwbUVJ6BVzafwqKXy1VZMgNb+CHzbyK4ZB+Bi0nnk0VyhsDiSoAmvvnMHmGUVAF6UG+0ffsxRhsRHky/AyCsAUpumX0wAAIs6T4CxDADDtcdZsal6gjmdH8AsAEC6+s8Fa48SFExeAKusAEju+V367AmUCi9ANQ0AU3pwcOw2cMEH0FwAAKz5X228pRLR5AI4TgIAtIDL24oLUE94AB6W7LsH/cONN14Ilh44AOqD9s2LQR1KHiB9zgGgOSGeuA3ocPrME1Q4ANaceyePAzrcjHmAZYs9IBeW4/fzHiAwTCwAgTle9ACZK44ALDT9e6x7gL4aT0BQCHb4AqgA5/1TTOMLoJ7vZSMM0H/GHnCeDnu+CrU8vGYPcN5FADBYD0vCaYPDy+i0p337GSMsS1Z4vA3t9QgAZTt0IuIxFRPSKicAQHlvhk3FXF5GhBByMa8qo/sBO6BarwuYbYrYnFKDYEvE7phKgcxvEQBqnvhgiQCUOgoAO4C3JOS3L/hv23UXxVldBECfcueAqpAa0WGy/QeULREAY6aTXRFDgBuA13+ElOncAERMAGaA9hBQD4gQQHsIRE1AZoD2xrgQS5nOZyHgFKmWDSIG4GRAVidiAE4GRB6AzAB2AKIPQFaA5myHA5AV4ESNugZhC7BLR50lIBPAebrzBGQCKAFQNSIMcDvRTQIwAHxNApM3RBygGK0uyhxwOwGsPAgEnPWj5ycRCNiJtBHlAChGKQVwANzPY+CXSMDNWISiLA9AfRA5IhJQ68UnoQAt+AtOPIBKhJosF8B6UM0yLkAxQk2WCyDX9SiUh1gkQAIkoCuAvjGuquMbuijAtwG7MPL8yBICOHSPk3W8Ne8KcEUdmBi6FADYos+QleIH0N/ogOxd7AD6uAS6WRU8WcBdlgZMG/EnYUlwEpLLoQ4PjzGbiA5UsRMRsbQ+5ziDJmYqJuR6NaMomdXuFuZyPSABEiABEiABEiABEiAc8Bd6VyvCEKGqcQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultSound.wav":
/*!*************************************************************************!*\
  !*** ./node_modules/arraybuffer-loader!./src/builtins/defaultSound.wav ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../node_modules/arraybuffer-loader/lib/to-array-buffer.js */ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js")("UklGRiYAAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YQIAAAAAAA==")

/***/ }),

/***/ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultVector.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/arraybuffer-loader!./src/builtins/defaultVector.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../node_modules/arraybuffer-loader/lib/to-array-buffer.js */ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js")("PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cmVjdCBmaWxsPSIjQ0NDIiBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIvPgogIDx0ZXh0IGZpbGw9ImJsYWNrIiB5PSIxMDciIHg9IjM1LjUiIGZvbnQtc2l6ZT0iMTI4Ij4/PC90ZXh0PgogPC9nPgo8L3N2Zz4K")

/***/ }),

/***/ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/arraybuffer-loader/lib/to-array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (base64Data) {
  var isBrowser = typeof window !== 'undefined' && typeof window.atob === 'function'
  var binary = isBrowser ? window.atob(base64Data) : new Buffer(base64Data, 'base64').toString('binary')
  var bytes = new Uint8Array(binary.length)

  for (var i = 0; i < binary.length; ++i) {
    bytes[i] = binary.charCodeAt(i)
  }

  return bytes.buffer
}


/***/ }),

/***/ "./node_modules/microee/index.js":
/*!***************************************!*\
  !*** ./node_modules/microee/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function M() { this._events = {}; }
M.prototype = {
  on: function(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function(ev, cb) {
    var e = this._events[ev] || [], i;
    for(i = e.length-1; i >= 0 && e[i]; i--){
      if(e[i] === cb || e[i].cb === cb) { e.splice(i, 1); }
    }
  },
  removeAllListeners: function(ev) {
    if(!ev) { this._events = {}; }
    else { this._events[ev] && (this._events[ev] = []); }
  },
  listeners: function(ev) {
    return (this._events ? this._events[ev] || [] : []);
  },
  emit: function(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1), i, e = this._events[ev] || [];
    for(i = e.length-1; i >= 0 && e[i]; i--){
      e[i].apply(this, args);
    }
    return this;
  },
  when: function(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function(ev, cb, when) {
    if(!cb) return this;
    function c() {
      if(!when) this.removeListener(ev, c);
      if(cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function(dest) {
  var o = M.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
module.exports = M;


/***/ }),

/***/ "./node_modules/minilog/lib/common/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/minilog/lib/common/filter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// default filter
var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js");

var levelMap = { debug: 1, info: 2, warn: 3, error: 4 };

function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}

Transform.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function(name, level) {
  this._white.push({ n: name, l: levelMap[level] });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function(name, level) {
  this._black.push({ n: name, l: levelMap[level] });
  return this;
};

Filter.prototype.clear = function() {
  this._white = [];
  this._black = [];
  return this;
};

function test(rule, name) {
  // use .test for RegExps
  return (rule.n.test ? rule.n.test(name) : rule.n == name);
};

Filter.prototype.test = function(name, level) {
  var i, len = Math.max(this._white.length, this._black.length);
  for(i = 0; i < len; i++) {
    if(this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if(this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};

Filter.prototype.write = function(name, level, args) {
  if(!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};

module.exports = Filter;


/***/ }),

/***/ "./node_modules/minilog/lib/common/minilog.js":
/*!****************************************************!*\
  !*** ./node_modules/minilog/lib/common/minilog.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    Filter = __webpack_require__(/*! ./filter.js */ "./node_modules/minilog/lib/common/filter.js");

var log = new Transform(),
    slice = Array.prototype.slice;

exports = module.exports = function create(name) {
  var o   = function() { log.write(name, undefined, slice.call(arguments)); return o; };
  o.debug = function() { log.write(name, 'debug', slice.call(arguments)); return o; };
  o.info  = function() { log.write(name, 'info',  slice.call(arguments)); return o; };
  o.warn  = function() { log.write(name, 'warn',  slice.call(arguments)); return o; };
  o.error = function() { log.write(name, 'error', slice.call(arguments)); return o; };
  o.log   = o.debug; // for interface compliance with Node and browser consoles
  o.suggest = exports.suggest;
  o.format = log.format;
  return o;
};

// filled in separately
exports.defaultBackend = exports.defaultFormatter = null;

exports.pipe = function(dest) {
  return log.pipe(dest);
};

exports.end = exports.unpipe = exports.disable = function(from) {
  return log.unpipe(from);
};

exports.Transform = Transform;
exports.Filter = Filter;
// this is the default filter that's applied when .enable() is called normally
// you can bypass it completely and set up your own pipes
exports.suggest = new Filter();

exports.enable = function() {
  if(exports.defaultFormatter) {
    return log.pipe(exports.suggest) // filter
              .pipe(exports.defaultFormatter) // formatter
              .pipe(exports.defaultBackend); // backend
  }
  return log.pipe(exports.suggest) // filter
            .pipe(exports.defaultBackend); // formatter
};



/***/ }),

/***/ "./node_modules/minilog/lib/common/transform.js":
/*!******************************************************!*\
  !*** ./node_modules/minilog/lib/common/transform.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var microee = __webpack_require__(/*! microee */ "./node_modules/microee/index.js");

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform() {}

microee.mixin(Transform);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform.prototype.write = function(name, level, args) {
  this.emit('item', name, level, args);
};

Transform.prototype.end = function() {
  this.emit('end');
  this.removeAllListeners();
};

Transform.prototype.pipe = function(dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);

  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() { !dest._isStdio && dest.end(); }

  s.on('item', onItem);
  s.on('end', onEnd);

  s.when('unpipe', function(from) {
    var match = (from === dest) || typeof from == 'undefined';
    if(match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });

  return dest;
};

Transform.prototype.unpipe = function(from) {
  this.emit('unpipe', from);
  return this;
};

Transform.prototype.format = function(dest) {
  throw new Error([
    'Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:',
    'var Minilog = require(\'minilog\');',
    'Minilog',
    '  .pipe(Minilog.backends.console.formatClean)',
    '  .pipe(Minilog.backends.console);'].join('\n'));
};

Transform.mixin = function(dest) {
  var o = Transform.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};

module.exports = Transform;


/***/ }),

/***/ "./node_modules/minilog/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/minilog/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./common/minilog.js */ "./node_modules/minilog/lib/common/minilog.js");

var consoleLogger = __webpack_require__(/*! ./node/console.js */ "./node_modules/minilog/lib/node/console.js");

// if we are running inside Electron then use the web version of console.js
var isElectron = (typeof window !== 'undefined' && window.process && window.process.type === 'renderer');
if (isElectron) {
  consoleLogger = __webpack_require__(/*! ./web/console.js */ "./node_modules/minilog/lib/web/console.js").minilog;
}

// intercept the pipe method and transparently wrap the stringifier, if the
// destination is a Node core stream

module.exports.Stringifier = __webpack_require__(/*! ./node/stringify.js */ "./node_modules/minilog/lib/node/stringify.js");

var oldPipe = module.exports.pipe;
module.exports.pipe = function(dest) {
  if(dest instanceof __webpack_require__(/*! stream */ "stream")) {
    return oldPipe.call(module.exports, new (module.exports.Stringifier)).pipe(dest);
  } else {
    return oldPipe.call(module.exports, dest);
  }
};

module.exports.defaultBackend = consoleLogger;
module.exports.defaultFormatter = consoleLogger.formatMinilog;

module.exports.backends = {
  redis: __webpack_require__(/*! ./node/redis.js */ "./node_modules/minilog/lib/node/redis.js"),
  nodeConsole: consoleLogger,
  console: consoleLogger
};


/***/ }),

/***/ "./node_modules/minilog/lib/node/console.js":
/*!**************************************************!*\
  !*** ./node_modules/minilog/lib/node/console.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function ConsoleBackend() { }

Transform.mixin(ConsoleBackend);

ConsoleBackend.prototype.write = function() {
  console.log.apply(console, arguments);
};

var e = new ConsoleBackend();

var levelMap = __webpack_require__(/*! ./formatters/util.js */ "./node_modules/minilog/lib/node/formatters/util.js").levelMap;

e.filterEnv = function() {
  console.error('Minilog.backends.console.filterEnv is deprecated in Minilog v2.');
  // return the instance of Minilog
  return __webpack_require__(/*! ../common/minilog.js */ "./node_modules/minilog/lib/common/minilog.js");
};

e.formatters = [
    'formatClean', 'formatColor', 'formatNpm',
    'formatLearnboost', 'formatMinilog', 'formatWithStack', 'formatTime'
];

e.formatClean = new (__webpack_require__(/*! ./formatters/clean.js */ "./node_modules/minilog/lib/node/formatters/clean.js"));
e.formatColor = new (__webpack_require__(/*! ./formatters/color.js */ "./node_modules/minilog/lib/node/formatters/color.js"));
e.formatNpm = new (__webpack_require__(/*! ./formatters/npm.js */ "./node_modules/minilog/lib/node/formatters/npm.js"));
e.formatLearnboost = new (__webpack_require__(/*! ./formatters/learnboost.js */ "./node_modules/minilog/lib/node/formatters/learnboost.js"));
e.formatMinilog = new (__webpack_require__(/*! ./formatters/minilog.js */ "./node_modules/minilog/lib/node/formatters/minilog.js"));
e.formatWithStack = new (__webpack_require__(/*! ./formatters/withstack.js */ "./node_modules/minilog/lib/node/formatters/withstack.js"));
e.formatTime = new (__webpack_require__(/*! ./formatters/time.js */ "./node_modules/minilog/lib/node/formatters/time.js"));

module.exports = e;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/clean.js":
/*!***********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/clean.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function FormatClean() {}

Transform.mixin(FormatClean);

FormatClean.prototype.write = function(name, level, args) {
  function pad(s) { return (s.toString().length == 1? '0'+s : s); }
  this.emit('item', (name ? name + ' ' : '') + (level ? level + ' ' : '') + args.join(' '));
};

module.exports = FormatClean;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/color.js":
/*!***********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/color.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style;

function FormatColor() {}

Transform.mixin(FormatColor);

FormatColor.prototype.write = function(name, level, args) {
  var colors = { debug: 'magenta', info: 'cyan', warn: 'yellow', error: 'red' };
  function pad(s) { return (s.toString().length == 4? ' '+s : s); }
  this.emit('item', (name ? name + ' ' : '')
          + (level ? style('- ' + pad(level.toUpperCase()) + ' -', colors[level]) + ' ' : '')
          + args.join(' '));
};

module.exports = FormatColor;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/learnboost.js":
/*!****************************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/learnboost.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style;

function FormatLearnboost() {}

Transform.mixin(FormatLearnboost);

FormatLearnboost.prototype.write = function(name, level, args) {
  var colors = { debug: 'grey', info: 'cyan', warn: 'yellow', error: 'red' };
  this.emit('item', (name ? style(name +' ', 'grey') : '')
          + (level ? style(level, colors[level]) + ' ' : '')
          + args.join(' '));
};

module.exports = FormatLearnboost;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/minilog.js":
/*!*************************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/minilog.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style,
    util = __webpack_require__(/*! util */ "util");

function FormatMinilog() {}

Transform.mixin(FormatMinilog);

FormatMinilog.prototype.write = function(name, level, args) {
  var colors = { debug: 'blue', info: 'cyan', warn: 'yellow', error: 'red' };
  this.emit('item', (name ? style(name +' ', 'grey') : '')
            + (level ? style(level, colors[level]) + ' ' : '')
            + args.map(function(item) {
              return (typeof item == 'string' ? item : util.inspect(item, null, 3, true));
            }).join(' '));
};

module.exports = FormatMinilog;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/npm.js":
/*!*********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/npm.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function FormatNpm() {}

Transform.mixin(FormatNpm);

FormatNpm.prototype.write = function(name, level, args) {
  var out = {
        debug: '\033[34;40m' + 'debug' + '\033[39m ',
        info: '\033[32m' + 'info'  + '\033[39m  ',
        warn: '\033[30;41m' + 'WARN' + '\033[0m  ',
        error: '\033[31;40m' + 'ERR!' + '\033[0m  '
      };
  this.emit('item', (name ? '\033[37;40m'+ name +'\033[0m ' : '')
          + (level && out[level]? out[level] : '')
          + args.join(' '));
};

module.exports = FormatNpm;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/time.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/time.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style,
    util = __webpack_require__(/*! util */ "util");

function FormatTime() {}

function timestamp() {
  var d = new Date();
  return ('0' + d.getDate()).slice(-2) + '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
    d.getFullYear() + ' ' +
    ('0' + d.getHours()).slice(-2) + ':' +
    ('0' + d.getMinutes()).slice(-2) + ':' +
    ('0' + d.getSeconds()).slice(-2) + '.' +
    ('00' + d.getMilliseconds()).slice(-3);
}

Transform.mixin(FormatTime);

FormatTime.prototype.write = function(name, level, args) {
  var colors = { debug: 'blue', info: 'cyan', warn: 'yellow', error: 'red' };
  this.emit('item', style(timestamp() +' ', 'grey')
            + (name ? style(name +' ', 'grey') : '')
            + (level ? style(level, colors[level]) + ' ' : '')
            + args.map(function(item) {
              return (typeof item == 'string' ? item : util.inspect(item, null, 3, true));
            }).join(' '));
};

module.exports = FormatTime;


/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/util.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var styles = {
    //styles
    'bold'      : ['\033[1m',  '\033[22m'],
    'italic'    : ['\033[3m',  '\033[23m'],
    'underline' : ['\033[4m',  '\033[24m'],
    'inverse'   : ['\033[7m',  '\033[27m'],
    //grayscale
    'white'     : ['\033[37m', '\033[39m'],
    'grey'      : ['\033[90m', '\033[39m'],
    'black'     : ['\033[30m', '\033[39m'],
    //colors
    'blue'      : ['\033[34m', '\033[39m'],
    'cyan'      : ['\033[36m', '\033[39m'],
    'green'     : ['\033[32m', '\033[39m'],
    'magenta'   : ['\033[35m', '\033[39m'],
    'red'       : ['\033[31m', '\033[39m'],
    'yellow'    : ['\033[33m', '\033[39m']
  };

exports.levelMap = { debug: 1, info: 2, warn: 3, error: 4 };

exports.style = function(str, style) {
  return styles[style][0] + str + styles[style][1];
}



/***/ }),

/***/ "./node_modules/minilog/lib/node/formatters/withstack.js":
/*!***************************************************************!*\
  !*** ./node_modules/minilog/lib/node/formatters/withstack.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    style = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/node/formatters/util.js").style;

function FormatNpm() {}

Transform.mixin(FormatNpm);

function noop(a){
  return a;
}

var types = {
  string: noop,
  number: noop,
  default: JSON.stringify.bind(JSON)
};

function stringify(args) {
  return args.map(function(arg) {
    return (types[typeof arg] || types.default)(arg);
  });
}

FormatNpm.prototype.write = function(name, level, args) {
  var colors = { debug: 'magenta', info: 'cyan', warn: 'yellow', error: 'red' };
  function pad(s) { return (s.toString().length == 4? ' '+s : s); }
  function getStack() {
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function (err, stack) {
      return stack;
    };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }

  var frame = getStack()[5],
      fileName = FormatNpm.fullPath ? frame.getFileName() : frame.getFileName().replace(/^.*\/(.+)$/, '/$1');

  this.emit('item', (name ? name + ' ' : '')
          + (level ? style(pad(level), colors[level]) + ' ' : '')
          + style(fileName + ":" + frame.getLineNumber(), 'grey')
          + ' '
          + stringify(args).join(' '));
};

FormatNpm.fullPath = true;

module.exports = FormatNpm;



/***/ }),

/***/ "./node_modules/minilog/lib/node/redis.js":
/*!************************************************!*\
  !*** ./node_modules/minilog/lib/node/redis.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function RedisBackend(options) {
  this.client = options.client;
  this.key = options.key;
}

RedisBackend.prototype.write = function(str) {
  this.client.rpush(this.key, str);
};

RedisBackend.prototype.end = function() {};

RedisBackend.prototype.clear = function(cb) {
  this.client.del(this.key, cb);
};

module.exports = RedisBackend;


/***/ }),

/***/ "./node_modules/minilog/lib/node/stringify.js":
/*!****************************************************!*\
  !*** ./node_modules/minilog/lib/node/stringify.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

function Stringify() {}

Transform.mixin(Stringify);

Stringify.prototype.write = function(name, level, args) {
  var result = [];
  if(name) result.push(name);
  if(level) result.push(level);
  result = result.concat(args);
  for(var i = 0; i < result.length; i++) {
    if(result[i] && typeof result[i] == 'object') {
      // Buffers in Node.js look bad when stringified
      if(result[i].constructor && result[i].constructor.isBuffer) {
        result[i] = result[i].toString();
      } else {
        try {
          result[i] = JSON.stringify(result[i]);
        } catch(stringifyError) {
          // happens when an object has a circular structure
          // do not throw an error, when printing, the toString() method of the object will be used
        }
      }
    } else {
      result[i] = result[i];
    }
  }
  this.emit('item',  result.join(' ') + '\n');
};

module.exports = Stringify;


/***/ }),

/***/ "./node_modules/minilog/lib/web/console.js":
/*!*************************************************!*\
  !*** ./node_modules/minilog/lib/web/console.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");

var newlines = /\n+$/,
    logger = new Transform();

logger.write = function(name, level, args) {
  var i = args.length-1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if(console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if(JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if(args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for(i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch(e) {}
    console.log(args.join(' '));
  }
};

logger.formatters = ['color', 'minilog'];
logger.color = __webpack_require__(/*! ./formatters/color.js */ "./node_modules/minilog/lib/web/formatters/color.js");
logger.minilog = __webpack_require__(/*! ./formatters/minilog.js */ "./node_modules/minilog/lib/web/formatters/minilog.js");

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/color.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/color.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js");

var colors = { debug: ['cyan'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, [ '%c'+name+' %c'+level, color('gray'), color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/minilog.js":
/*!************************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/minilog.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
    color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js"),
    colors = { debug: ['gray'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },
    logger = new Transform();

logger.write = function(name, level, args) {
  var fn = console.log;
  if(level != 'debug' && console[level]) {
    fn = console[level];
  }

  var subset = [], i = 0;
  if(level != 'info') {
    for(; i < args.length; i++) {
      if(typeof args[i] != 'string') break;
    }
    fn.apply(console, [ '%c'+name +' '+ args.slice(0, i).join(' '), color.apply(color, colors[level]) ].concat(args.slice(i)));
  } else {
    fn.apply(console, [ '%c'+name, color.apply(color, colors[level]) ].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function() { };

module.exports = logger;


/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/util.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue:  '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color(fg, isInverse) {
  if(isInverse) {
    return 'color: #fff; background: '+hex[fg]+';';
  } else {
    return 'color: '+hex[fg]+';';
  }
}

module.exports = color;


/***/ }),

/***/ "./src/Asset.js":
/*!**********************!*\
  !*** ./src/Asset.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Use JS implemented TextDecoder and TextEncoder if it is not provided by the
// browser.
var _TextDecoder;

var _TextEncoder;

var encoding = __webpack_require__(/*! text-encoding */ "text-encoding");

if (typeof TextDecoder === 'undefined' || typeof TextEncoder === 'undefined') {
  _TextDecoder = encoding.TextDecoder;
  _TextEncoder = encoding.TextEncoder;
} else {
  /* global TextDecoder TextEncoder */
  _TextDecoder = TextDecoder;
  _TextEncoder = TextEncoder;
}

var base64js = __webpack_require__(/*! base64-js */ "base64-js");

var md5 = __webpack_require__(/*! js-md5 */ "js-md5");

var memoizedToString = function () {
  var strings = {};
  return function (assetId, data) {
    if (!strings.hasOwnProperty(assetId)) {
      strings[assetId] = base64js.fromByteArray(data);
    }

    return strings[assetId];
  };
}();

var Asset =
/*#__PURE__*/
function () {
  /**
   * Construct an Asset.
   * @param {AssetType} assetType - The type of this asset (sound, image, etc.)
   * @param {string} assetId - The ID of this asset.
   * @param {DataFormat} [dataFormat] - The format of the data (WAV, PNG, etc.); required iff `data` is present.
   * @param {Buffer} [data] - The in-memory data for this asset; optional.
   * @param {bool} [generateId] - Whether to create id from an md5 hash of data
   */
  function Asset(assetType, assetId, dataFormat, data, generateId) {
    _classCallCheck(this, Asset);

    /** @type {AssetType} */
    this.assetType = assetType;
    /** @type {string} */

    this.assetId = assetId;
    this.setData(data, dataFormat || assetType.runtimeFormat, generateId);
    /** @type {Asset[]} */

    this.dependencies = [];
  }

  _createClass(Asset, [{
    key: "setData",
    value: function setData(data, dataFormat, generateId) {
      if (data && !dataFormat) {
        throw new Error('Data provided without specifying its format');
      }
      /** @type {DataFormat} */


      this.dataFormat = dataFormat;
      /** @type {Buffer} */

      this.data = data;
      if (generateId) this.assetId = md5(data);
    }
    /**
     * @returns {string} - This asset's data, decoded as text.
     */

  }, {
    key: "decodeText",
    value: function decodeText() {
      var decoder = new _TextDecoder();
      return decoder.decode(this.data);
    }
    /**
     * Same as `setData` but encodes text first.
     * @param {string} data - the text data to encode and store.
     * @param {DataFormat} dataFormat - the format of the data (DataFormat.SVG for example).
     * @param {bool} generateId - after setting data, set the id to an md5 of the data?
     */

  }, {
    key: "encodeTextData",
    value: function encodeTextData(data, dataFormat, generateId) {
      var encoder = new _TextEncoder();
      this.setData(encoder.encode(data), dataFormat, generateId);
    }
    /**
     * @param {string} [contentType] - Optionally override the content type to be included in the data URI.
     * @returns {string} - A data URI representing the asset's data.
     */

  }, {
    key: "encodeDataURI",
    value: function encodeDataURI(contentType) {
      contentType = contentType || this.assetType.contentType;
      return "data:".concat(contentType, ";base64,").concat(memoizedToString(this.assetId, this.data));
    }
  }]);

  return Asset;
}();

module.exports = Asset;

/***/ }),

/***/ "./src/AssetType.js":
/*!**************************!*\
  !*** ./src/AssetType.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataFormat = __webpack_require__(/*! ./DataFormat */ "./src/DataFormat.js");
/**
 * Enumeration of the supported asset types.
 * @type {Object.<String,AssetType>}
 * @typedef {Object} AssetType - Information about a supported asset type.
 * @property {string} contentType - the MIME type associated with this kind of data. Useful for data URIs, etc.
 * @property {string} name - The human-readable name of this asset type.
 * @property {DataFormat} runtimeFormat - The default format used for runtime, in-memory storage of this asset. For
 *     example, a project stored in SB2 format on disk will be returned as JSON when loaded into memory.
 * @property {boolean} immutable - Indicates if the asset id is determined by the asset content.
 */


var AssetType = {
  ImageBitmap: {
    contentType: 'image/png',
    name: 'ImageBitmap',
    runtimeFormat: DataFormat.PNG,
    immutable: true
  },
  ImageVector: {
    contentType: 'image/svg+xml',
    name: 'ImageVector',
    runtimeFormat: DataFormat.SVG,
    immutable: true
  },
  Project: {
    contentType: 'application/json',
    name: 'Project',
    runtimeFormat: DataFormat.JSON,
    immutable: false
  },
  Sound: {
    contentType: 'audio/x-wav',
    name: 'Sound',
    runtimeFormat: DataFormat.WAV,
    immutable: true
  },
  Sprite: {
    contentType: 'application/json',
    name: 'Sprite',
    runtimeFormat: DataFormat.JSON,
    immutable: true
  }
};
module.exports = AssetType;

/***/ }),

/***/ "./src/BuiltinHelper.js":
/*!******************************!*\
  !*** ./src/BuiltinHelper.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var md5 = __webpack_require__(/*! js-md5 */ "js-md5");

var log = __webpack_require__(/*! ./log */ "./src/log.js");

var Asset = __webpack_require__(/*! ./Asset */ "./src/Asset.js");

var AssetType = __webpack_require__(/*! ./AssetType */ "./src/AssetType.js");

var DataFormat = __webpack_require__(/*! ./DataFormat */ "./src/DataFormat.js");

var Helper = __webpack_require__(/*! ./Helper */ "./src/Helper.js");
/**
 * @typedef {object} BuiltinAssetRecord
 * @property {AssetType} type - The type of the asset.
 * @property {DataFormat} format - The format of the asset's data.
 * @property {?string} id - The asset's unique ID.
 * @property {Buffer} data - The asset's data.
 */

/**
 * @type {BuiltinAssetRecord[]}
 */


var DefaultAssets = [{
  type: AssetType.ImageBitmap,
  format: DataFormat.PNG,
  id: null,
  data: new Buffer(__webpack_require__(/*! arraybuffer-loader!./builtins/defaultBitmap.png */ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultBitmap.png") // eslint-disable-line global-require
  )
}, {
  type: AssetType.Sound,
  format: DataFormat.WAV,
  id: null,
  data: new Buffer(__webpack_require__(/*! arraybuffer-loader!./builtins/defaultSound.wav */ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultSound.wav") // eslint-disable-line global-require
  )
}, {
  type: AssetType.ImageVector,
  format: DataFormat.SVG,
  id: null,
  data: new Buffer(__webpack_require__(/*! arraybuffer-loader!./builtins/defaultVector.svg */ "./node_modules/arraybuffer-loader/index.js!./src/builtins/defaultVector.svg") // eslint-disable-line global-require
  )
}];
/**
 * @type {BuiltinAssetRecord[]}
 */

var BuiltinAssets = DefaultAssets.concat([]);

var BuiltinHelper =
/*#__PURE__*/
function (_Helper) {
  _inherits(BuiltinHelper, _Helper);

  function BuiltinHelper(parent) {
    var _this;

    _classCallCheck(this, BuiltinHelper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BuiltinHelper).call(this, parent));
    /**
     * In-memory storage for all built-in assets.
     * @type {Object.<AssetType, AssetIdMap>} Maps asset type to a map of asset ID to actual assets.
     * @typedef {Object.<string, BuiltinAssetRecord>} AssetIdMap - Maps asset ID to asset.
     */

    _this.assets = {};
    BuiltinAssets.forEach(function (assetRecord) {
      assetRecord.id = _this._store(assetRecord.type, assetRecord.format, assetRecord.data, assetRecord.id);
    });
    return _this;
  }
  /**
   * Call `setDefaultAssetId` on the parent `ScratchStorage` instance to register all built-in default assets.
   */


  _createClass(BuiltinHelper, [{
    key: "registerDefaultAssets",
    value: function registerDefaultAssets() {
      var numAssets = DefaultAssets.length;

      for (var assetIndex = 0; assetIndex < numAssets; ++assetIndex) {
        var assetRecord = DefaultAssets[assetIndex];
        this.parent.setDefaultAssetId(assetRecord.type, assetRecord.id);
      }
    }
    /**
     * Synchronously fetch a cached asset for a given asset id. Returns null if not found.
     * @param {string} assetId - The id for the asset to fetch.
     * @returns {?Asset} The asset for assetId, if it exists.
     */

  }, {
    key: "get",
    value: function get(assetId) {
      var asset = null;

      if (this.assets.hasOwnProperty(assetId)) {
        /** @type{BuiltinAssetRecord} */
        var assetRecord = this.assets[assetId];
        asset = new Asset(assetRecord.type, assetRecord.id, assetRecord.format, assetRecord.data);
      }

      return asset;
    }
    /**
     * Alias for store (old name of store)
     * @deprecated Use BuiltinHelper.store
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {string} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */

  }, {
    key: "cache",
    value: function cache(assetType, dataFormat, data, id) {
      log.warn('Deprecation: BuiltinHelper.cache has been replaced with BuiltinHelper.store.');
      return this.store(assetType, dataFormat, data, id);
    }
    /**
     * Deprecated external API for _store
     * @deprecated Not for external use. Create assets and keep track of them outside of the storage instance.
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {(string|number)} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */

  }, {
    key: "store",
    value: function store(assetType, dataFormat, data, id) {
      log.warn('Deprecation: use Storage.createAsset. BuiltinHelper is for internal use only.');
      return this._store(assetType, dataFormat, data, id);
    }
    /**
     * Cache an asset for future lookups by ID.
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {(string|number)} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */

  }, {
    key: "_store",
    value: function _store(assetType, dataFormat, data, id) {
      if (!dataFormat) throw new Error('Data cached without specifying its format');

      if (id !== '' && id !== null && typeof id !== 'undefined') {
        if (this.assets.hasOwnProperty(id) && assetType.immutable) return id;
      } else if (assetType.immutable) {
        id = md5(data);
      } else {
        throw new Error('Tried to cache data without an id');
      }

      this.assets[id] = {
        type: assetType,
        format: dataFormat,
        id: id,
        data: data
      };
      return id;
    }
    /**
     * Fetch an asset but don't process dependencies.
     * @param {AssetType} assetType - The type of asset to fetch.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {Promise.<Asset>} A promise for the contents of the asset.
     */

  }, {
    key: "load",
    value: function load(assetType, assetId) {
      return Promise.resolve(this.get(assetId));
    }
  }]);

  return BuiltinHelper;
}(Helper);

module.exports = BuiltinHelper;

/***/ }),

/***/ "./src/DataFormat.js":
/*!***************************!*\
  !*** ./src/DataFormat.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Enumeration of the supported data formats.
 * @enum {string}
 */
var DataFormat = {
  JPG: 'jpg',
  JSON: 'json',
  MP3: 'mp3',
  PNG: 'png',
  SB2: 'sb2',
  SB3: 'sb3',
  SVG: 'svg',
  WAV: 'wav'
};
module.exports = DataFormat;

/***/ }),

/***/ "./src/Helper.js":
/*!***********************!*\
  !*** ./src/Helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Base class for asset load/save helpers.
 * @abstract
 */
var Helper =
/*#__PURE__*/
function () {
  function Helper(parent) {
    _classCallCheck(this, Helper);

    this.parent = parent;
  }
  /**
   * Fetch an asset but don't process dependencies.
   * @param {AssetType} assetType - The type of asset to fetch.
   * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
   * @param {DataFormat} dataFormat - The file format / file extension of the asset to fetch: PNG, JPG, etc.
   * @return {Promise.<Asset>} A promise for the contents of the asset.
   */


  _createClass(Helper, [{
    key: "load",
    value: function load(assetType, assetId, dataFormat) {
      return Promise.reject(new Error("No asset of type ".concat(assetType, " for ID ").concat(assetId, " with format ").concat(dataFormat)));
    }
  }]);

  return Helper;
}();

module.exports = Helper;

/***/ }),

/***/ "./src/ScratchStorage.js":
/*!*******************************!*\
  !*** ./src/ScratchStorage.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var log = __webpack_require__(/*! ./log */ "./src/log.js");

var BuiltinHelper = __webpack_require__(/*! ./BuiltinHelper */ "./src/BuiltinHelper.js");

var WebHelper = __webpack_require__(/*! ./WebHelper */ "./src/WebHelper.js");

var _Asset = __webpack_require__(/*! ./Asset */ "./src/Asset.js");

var _AssetType = __webpack_require__(/*! ./AssetType */ "./src/AssetType.js");

var _DataFormat = __webpack_require__(/*! ./DataFormat */ "./src/DataFormat.js");

var ScratchStorage =
/*#__PURE__*/
function () {
  function ScratchStorage() {
    _classCallCheck(this, ScratchStorage);

    this.defaultAssetId = {};
    this.builtinHelper = new BuiltinHelper(this);
    this.webHelper = new WebHelper(this);
    this.builtinHelper.registerDefaultAssets(this);
    this._helpers = [{
      helper: this.builtinHelper,
      priority: 100
    }, {
      helper: this.webHelper,
      priority: -100
    }];
  }
  /**
   * @return {Asset} - the `Asset` class constructor.
   * @constructor
   */


  _createClass(ScratchStorage, [{
    key: "addHelper",

    /**
     * Add a storage helper to this manager. Helpers with a higher priority number will be checked first when loading
     * or storing assets. For comparison, the helper for built-in assets has `priority=100` and the default web helper
     * has `priority=-100`. The relative order of helpers with equal priorities is undefined.
     * @param {Helper} helper - the helper to be added.
     * @param {number} [priority] - the priority for this new helper (default: 0).
     */
    value: function addHelper(helper) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this._helpers.push({
        helper: helper,
        priority: priority
      });

      this._helpers.sort(function (a, b) {
        return b.priority - a.priority;
      });
    }
    /**
     * Synchronously fetch a cached asset from built-in storage. Assets are cached when they are loaded.
     * @param {string} assetId - The id of the asset to fetch.
     * @returns {?Asset} The asset, if it exists.
     */

  }, {
    key: "get",
    value: function get(assetId) {
      return this.builtinHelper.get(assetId);
    }
    /**
     * Deprecated API for caching built-in assets. Use createAsset.
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {string} id - The id for the cached asset.
     * @returns {string} The calculated id of the cached asset, or the supplied id if the asset is mutable.
     */

  }, {
    key: "cache",
    value: function cache(assetType, dataFormat, data, id) {
      log.warn('Deprecation: Storage.cache is deprecated. Use Storage.createAsset, and store assets externally.');
      return this.builtinHelper._store(assetType, dataFormat, data, id);
    }
    /**
     * Construct an Asset, and optionally generate an md5 hash of its data to create an id
     * @param {AssetType} assetType - The type of the asset to cache.
     * @param {DataFormat} dataFormat - The dataFormat of the data for the cached asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {string} [id] - The id for the cached asset.
     * @param {bool} [generateId] - flag to set id to an md5 hash of data if `id` isn't supplied
     * @returns {Asset} generated Asset with `id` attribute set if not supplied
     */

  }, {
    key: "createAsset",
    value: function createAsset(assetType, dataFormat, data, id, generateId) {
      if (!dataFormat) throw new Error('Tried to create asset without a dataFormat');
      return new _Asset(assetType, id, dataFormat, data, generateId);
    }
    /**
     * Register a web-based source for assets. Sources will be checked in order of registration.
     * @param {Array.<AssetType>} types - The types of asset provided by this source.
     * @param {UrlFunction} getFunction - A function which computes a GET URL from an Asset.
     * @param {UrlFunction} createFunction - A function which computes a POST URL for asset data.
     * @param {UrlFunction} updateFunction - A function which computes a PUT URL for asset data.
     */

  }, {
    key: "addWebStore",
    value: function addWebStore(types, getFunction, createFunction, updateFunction) {
      this.webHelper.addStore(types, getFunction, createFunction, updateFunction);
    }
    /**
     * Register a web-based source for assets. Sources will be checked in order of registration.
     * @deprecated Please use addWebStore
     * @param {Array.<AssetType>} types - The types of asset provided by this source.
     * @param {UrlFunction} urlFunction - A function which computes a GET URL from an Asset.
     */

  }, {
    key: "addWebSource",
    value: function addWebSource(types, urlFunction) {
      log.warn('Deprecation: Storage.addWebSource has been replaced by addWebStore.');
      this.addWebStore(types, urlFunction);
    }
    /**
     * TODO: Should this be removed in favor of requesting an asset with `null` as the ID?
     * @param {AssetType} type - Get the default ID for assets of this type.
     * @return {?string} The ID of the default asset of the given type, if any.
     */

  }, {
    key: "getDefaultAssetId",
    value: function getDefaultAssetId(type) {
      if (this.defaultAssetId.hasOwnProperty(type.name)) {
        return this.defaultAssetId[type.name];
      }
    }
    /**
     * Set the default ID for a particular type of asset. This default asset will be used if a requested asset cannot
     * be found and automatic fallback is enabled. Ideally this should be an asset that is available locally or even
     * one built into this module.
     * TODO: Should this be removed in favor of requesting an asset with `null` as the ID?
     * @param {AssetType} type - The type of asset for which the default will be set.
     * @param {string} id - The default ID to use for this type of asset.
     */

  }, {
    key: "setDefaultAssetId",
    value: function setDefaultAssetId(type, id) {
      this.defaultAssetId[type.name] = id;
    }
    /**
     * Fetch an asset by type & ID.
     * @param {AssetType} assetType - The type of asset to fetch. This also determines which asset store to use.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @param {DataFormat} [dataFormat] - Optional: load this format instead of the AssetType's default.
     * @return {Promise.<Asset>} A promise for the requested Asset.
     *   If the promise is resolved with non-null, the value is the requested asset or a fallback.
     *   If the promise is resolved with null, the desired asset could not be found with the current asset sources.
     *   If the promise is rejected, there was an error on at least one asset source. HTTP 404 does not count as an
     *   error here, but (for example) HTTP 403 does.
     */

  }, {
    key: "load",
    value: function load(assetType, assetId, dataFormat) {
      var _this = this;

      /** @type {Helper[]} */
      var helpers = this._helpers.map(function (x) {
        return x.helper;
      });

      var errors = [];
      var helperIndex = 0;
      dataFormat = dataFormat || assetType.runtimeFormat;
      return new Promise(function (resolve, reject) {
        var tryNextHelper = function tryNextHelper() {
          if (helperIndex < helpers.length) {
            var helper = helpers[helperIndex++];
            helper.load(assetType, assetId, dataFormat).then(function (asset) {
              if (asset === null) {
                tryNextHelper();
              } else {
                // TODO? this.localHelper.cache(assetType, assetId, asset);
                if (helper !== _this.builtinHelper && assetType.immutable) {
                  asset.assetId = _this.builtinHelper._store(assetType, asset.dataFormat, asset.data, assetId);
                } // Note that other attempts may have caused errors, effectively suppressed here.


                resolve(asset);
              }
            }, function (error) {
              errors.push(error); // TODO: maybe some types of error should prevent trying the next helper?

              tryNextHelper();
            });
          } else if (errors.length === 0) {
            // Nothing went wrong but we couldn't find the asset.
            resolve(null);
          } else {
            // At least one thing went wrong and also we couldn't find the asset.
            reject(errors);
          }
        };

        tryNextHelper();
      });
    }
    /**
     * Store an asset by type & ID.
     * @param {AssetType} assetType - The type of asset to fetch. This also determines which asset store to use.
     * @param {?DataFormat} [dataFormat] - Optional: load this format instead of the AssetType's default.
     * @param {Buffer} data - Data to store for the asset
     * @param {?string} [assetId] - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {Promise.<object>} A promise for asset metadata
     */

  }, {
    key: "store",
    value: function store(assetType, dataFormat, data, assetId) {
      var _this2 = this;

      dataFormat = dataFormat || assetType.runtimeFormat;
      return new Promise(function (resolve, reject) {
        return _this2.webHelper.store(assetType, dataFormat, data, assetId).then(function (body) {
          _this2.builtinHelper._store(assetType, dataFormat, data, body.id);

          return resolve(body);
        }).catch(function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: "Asset",
    get: function get() {
      return _Asset;
    }
    /**
     * @return {AssetType} - the list of supported asset types.
     * @constructor
     */

  }, {
    key: "AssetType",
    get: function get() {
      return _AssetType;
    }
    /**
     * @return {DataFormat} - the list of supported data formats.
     * @constructor
     */

  }, {
    key: "DataFormat",
    get: function get() {
      return _DataFormat;
    }
    /**
     * @deprecated Please use the `Asset` member of a storage instance instead.
     * @return {Asset} - the `Asset` class constructor.
     * @constructor
     */

  }], [{
    key: "Asset",
    get: function get() {
      return _Asset;
    }
    /**
     * @deprecated Please use the `AssetType` member of a storage instance instead.
     * @return {AssetType} - the list of supported asset types.
     * @constructor
     */

  }, {
    key: "AssetType",
    get: function get() {
      return _AssetType;
    }
  }]);

  return ScratchStorage;
}();

module.exports = ScratchStorage;

/***/ }),

/***/ "./src/WebHelper.js":
/*!**************************!*\
  !*** ./src/WebHelper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var nets = __webpack_require__(/*! nets */ "nets");

var log = __webpack_require__(/*! ./log */ "./src/log.js");

var Asset = __webpack_require__(/*! ./Asset */ "./src/Asset.js");

var Helper = __webpack_require__(/*! ./Helper */ "./src/Helper.js");
/**
 * @typedef {function} UrlFunction - A function which computes a URL from asset information.
 * @param {Asset} - The asset for which the URL should be computed.
 * @returns {(string|object)} - A string representing the URL for the asset request OR an object with configuration for
 *                              the underlying `nets` call (necessary for configuring e.g. authentication)
 */


var WebHelper =
/*#__PURE__*/
function (_Helper) {
  _inherits(WebHelper, _Helper);

  function WebHelper(parent) {
    var _this;

    _classCallCheck(this, WebHelper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebHelper).call(this, parent));
    /**
     * @type {Array.<StoreRecord>}
     * @typedef {object} StoreRecord
     * @property {Array.<string>} types - The types of asset provided by this store, from AssetType's name field.
     * @property {UrlFunction} getFunction - A function which computes a URL from an Asset.
     * @property {UrlFunction} createFunction - A function which computes a URL from an Asset.
     * @property {UrlFunction} updateFunction - A function which computes a URL from an Asset.
     */

    _this.stores = [];
    return _this;
  }
  /**
   * Register a web-based source for assets. Sources will be checked in order of registration.
   * @deprecated Please use addStore
   * @param {Array.<AssetType>} types - The types of asset provided by this source.
   * @param {UrlFunction} urlFunction - A function which computes a URL from an Asset.
   */


  _createClass(WebHelper, [{
    key: "addSource",
    value: function addSource(types, urlFunction) {
      log.warn('Deprecation: WebHelper.addSource has been replaced with WebHelper.addStore.');
      this.addStore(types, urlFunction);
    }
    /**
     * Register a web-based store for assets. Sources will be checked in order of registration.
     * @param {Array.<AssetType>} types - The types of asset provided by this store.
     * @param {UrlFunction} getFunction - A function which computes a GET URL for an Asset
     * @param {UrlFunction} createFunction - A function which computes a POST URL for an Asset
     * @param {UrlFunction} updateFunction - A function which computes a PUT URL for an Asset
     */

  }, {
    key: "addStore",
    value: function addStore(types, getFunction, createFunction, updateFunction) {
      this.stores.push({
        types: types.map(function (assetType) {
          return assetType.name;
        }),
        get: getFunction,
        create: createFunction,
        update: updateFunction
      });
    }
    /**
     * Fetch an asset but don't process dependencies.
     * @param {AssetType} assetType - The type of asset to fetch.
     * @param {string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @param {DataFormat} dataFormat - The file format / file extension of the asset to fetch: PNG, JPG, etc.
     * @return {Promise.<Asset>} A promise for the contents of the asset.
     */

  }, {
    key: "load",
    value: function load(assetType, assetId, dataFormat) {
      /** @type {Array.<{url:string, result:*}>} List of URLs attempted & errors encountered. */
      var errors = [];
      var stores = this.stores.slice();
      var asset = new Asset(assetType, assetId, dataFormat);
      var storeIndex = 0;
      return new Promise(function (resolve, reject) {
        var tryNextSource = function tryNextSource() {
          /** @type {UrlFunction} */
          var reqConfigFunction;

          while (storeIndex < stores.length) {
            var store = stores[storeIndex];
            ++storeIndex;

            if (store.types.indexOf(assetType.name) >= 0) {
              reqConfigFunction = store.get;
              break;
            }
          }

          if (reqConfigFunction) {
            var reqConfig = reqConfigFunction(asset);

            if (reqConfig === false) {
              tryNextSource();
              return;
            }

            if (typeof reqConfig === 'string') {
              reqConfig = {
                url: reqConfig
              };
            }

            nets(Object.assign({
              method: 'get'
            }, reqConfig), function (err, resp, body) {
              // body is a Buffer
              if (err || Math.floor(resp.statusCode / 100) !== 2) {
                // 兼容处理: file:// 协议下 ajax 请求，通过走 rawRequest, status code 为 0
                if (resp.statusCode === 0 && resp.rawRequest && resp.rawRequest.readyState === 4) {
                  if (resp.rawRequest.response) {
                    var body2 = new Buffer(new Uint8Array(resp.rawRequest.response));
                    asset.setData(body2, dataFormat);
                    resolve(asset);
                  } else {
                    resolve(null); // no sources matching asset
                  }
                } else {
                  tryNextSource();
                }
              } else {
                asset.setData(body, dataFormat);
                resolve(asset);
              }
            });
          } else if (errors.length > 0) {
            reject(errors);
          } else {
            resolve(null); // no stores matching asset
          }
        };

        tryNextSource();
      });
    }
    /**
     * Create or update an asset with provided data. The create function is called if no asset id is provided
     * @param {AssetType} assetType - The type of asset to create or update.
     * @param {?DataFormat} dataFormat - DataFormat of the data for the stored asset.
     * @param {Buffer} data - The data for the cached asset.
     * @param {?string} assetId - The ID of the asset to fetch: a project ID, MD5, etc.
     * @return {Promise.<object>} A promise for the response from the create or update request
     */

  }, {
    key: "store",
    value: function store(assetType, dataFormat, data, assetId) {
      var asset = new Asset(assetType, assetId, dataFormat); // If we have an asset id, we should update, otherwise create to get an id

      var create = assetId === '' || assetId === null || typeof assetId === 'undefined'; // Use the first store with the appropriate asset type and url function

      var store = this.stores.filter(function (s) {
        return (// Only use stores for the incoming asset type
          s.types.indexOf(assetType.name) !== -1 && ( // Only use stores that have a create function if this is a create request
          // or an update function if this is an update request
          create && s.create || s.update)
        );
      })[0];
      var method = create ? 'post' : 'put';
      return new Promise(function (resolve, reject) {
        if (!store) return reject('No appropriate stores');
        var reqConfig = create ? store.create(asset) : store.update(asset);

        if (typeof reqConfig === 'string') {
          reqConfig = {
            url: reqConfig
          };
        }

        return nets(Object.assign({
          body: data,
          method: method,
          encoding: undefined // eslint-disable-line no-undefined

        }, reqConfig), function (err, resp, body) {
          if (err || Math.floor(resp.statusCode / 100) !== 2) {
            return reject(err || resp.statusCode);
          } // xhr makes it difficult to both send FormData and automatically
          // parse a JSON response. So try to parse everything as JSON.


          if (typeof body === 'string') {
            try {
              body = JSON.parse(body);
            } catch (parseError) {
              // If it's not parseable, then we can't add the id even
              // if we want to, so stop here
              return resolve(body);
            }
          }

          return resolve(Object.assign({
            id: body['content-name'] || assetId
          }, body));
        });
      });
    }
  }]);

  return WebHelper;
}(Helper);

module.exports = WebHelper;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ScratchStorage = __webpack_require__(/*! ./ScratchStorage */ "./src/ScratchStorage.js");
/**
 * Export for use with NPM & Node.js.
 * @type {ScratchStorage}
 */


module.exports = ScratchStorage;

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var minilog = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/index.js");

minilog.enable();
module.exports = minilog('storage');

/***/ }),

/***/ "base64-js":
/*!****************************!*\
  !*** external "base64-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("base64-js");

/***/ }),

/***/ "js-md5":
/*!*************************!*\
  !*** external "js-md5" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-md5");

/***/ }),

/***/ "nets":
/*!***********************!*\
  !*** external "nets" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nets");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "text-encoding":
/*!********************************!*\
  !*** external "text-encoding" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("text-encoding");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=scratch-storage.js.map