(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commons"],{

/***/ "./node_modules/@worker-runner/core/esm/core.js":
/*!******************************************************!*\
  !*** ./node_modules/@worker-runner/core/esm/core.js ***!
  \******************************************************/
/*! exports provided: BaseWorkerRunnerResolver, CODE_TO_ERROR_MAP, ConnectController, ConnectEnvironment, ConnectionWasClosedError, LocalResolverBridge, NodeResolverAction, NodeRunnerResolverBase, PromiseListResolver, RUNNER_BRIDGE_CONTROLLER, RunnerBridge, RunnerController, RunnerControllerAction, RunnerDestroyError, RunnerEnvironment, RunnerEnvironmentAction, RunnerExecuteError, RunnerInitError, RunnerNotFound, TransferRunnerData, WORKER_RUNNER_ERROR_CODE, WORKER_RUNNER_ERROR_MESSAGES, WorkerDestroyError, WorkerResolverAction, WorkerRunnerError, WorkerRunnerErrorCode, WorkerRunnerErrorSerializer, WorkerRunnerUnexpectedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseWorkerRunnerResolver", function() { return BaseWorkerRunnerResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE_TO_ERROR_MAP", function() { return CODE_TO_ERROR_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectController", function() { return ConnectController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectEnvironment", function() { return ConnectEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionWasClosedError", function() { return ConnectionWasClosedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalResolverBridge", function() { return LocalResolverBridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeResolverAction", function() { return NodeResolverAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeRunnerResolverBase", function() { return NodeRunnerResolverBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseListResolver", function() { return PromiseListResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUNNER_BRIDGE_CONTROLLER", function() { return RUNNER_BRIDGE_CONTROLLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerBridge", function() { return RunnerBridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerController", function() { return RunnerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerControllerAction", function() { return RunnerControllerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerDestroyError", function() { return RunnerDestroyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerEnvironment", function() { return RunnerEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerEnvironmentAction", function() { return RunnerEnvironmentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerExecuteError", function() { return RunnerExecuteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerInitError", function() { return RunnerInitError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerNotFound", function() { return RunnerNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferRunnerData", function() { return TransferRunnerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKER_RUNNER_ERROR_CODE", function() { return WORKER_RUNNER_ERROR_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKER_RUNNER_ERROR_MESSAGES", function() { return WORKER_RUNNER_ERROR_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerDestroyError", function() { return WorkerDestroyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerResolverAction", function() { return WorkerResolverAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerError", function() { return WorkerRunnerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerErrorCode", function() { return WorkerRunnerErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerErrorSerializer", function() { return WorkerRunnerErrorSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerUnexpectedError", function() { return WorkerRunnerUnexpectedError; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-names */ "./node_modules/core-js/modules/es.object.get-own-property-names.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.set */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _worker_runner_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @worker-runner/core */ "./node_modules/@worker-runner/core/esm/core.js");




























var _CODE_TO_ERROR_MAP;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

var PromiseListResolver = /*#__PURE__*/function () {
  function PromiseListResolver() {
    _classCallCheck(this, PromiseListResolver);

    this.promises = new Map();
  }

  _createClass(PromiseListResolver, [{
    key: "promise",
    value: function promise(id) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        return _this.promises.set(id, {
          resolve: resolve,
          reject: reject
        });
      });
    }
  }, {
    key: "resolve",
    value: function resolve(id, data) {
      var promise$ = this.promises.get(id);

      if (promise$) {
        this.promises["delete"](id);
        promise$.resolve(data);
      }
    }
  }, {
    key: "reject",
    value: function reject(id, error) {
      var promise$ = this.promises.get(id);

      if (promise$) {
        this.promises["delete"](id);
        promise$.reject(error);
      }
    }
  }, {
    key: "forget",
    value: function forget(id) {
      var promise$ = this.promises.get(id);
      this.promises["delete"](id);
      return promise$;
    }
  }]);

  return PromiseListResolver;
}();

var ConnectEnvironmentAction;

(function (ConnectEnvironmentAction) {
  ConnectEnvironmentAction["DISCONNECTED"] = "DISCONNECTED";
  ConnectEnvironmentAction["DESTROYED_BY_REQUEST"] = "DESTROYED_BY_REQUEST";
  ConnectEnvironmentAction["DESTROYED_WITH_ERROR"] = "DESTROYED_WITH_ERROR";
  ConnectEnvironmentAction["DESTROYED_BY_FORCE"] = "DESTROYED_BY_FORCE";
})(ConnectEnvironmentAction || (ConnectEnvironmentAction = {}));

var ConnectControllerAction;

(function (ConnectControllerAction) {
  ConnectControllerAction["INTERRUPT_LISTENING"] = "INTERRUPT_LISTENING";
  ConnectControllerAction["DISCONNECT"] = "DISCONNECT";
  ConnectControllerAction["DESTROY"] = "DESTROY";
})(ConnectControllerAction || (ConnectControllerAction = {}));

var ConnectController = /*#__PURE__*/function () {
  function ConnectController(config) {
    _classCallCheck(this, ConnectController);

    this.promiseListResolver = new PromiseListResolver();
    this.messageHandler = this.onMessage.bind(this);
    this.lastActionId = 0;
    this.forceDestroyHandler = config.forceDestroyHandler;
    this.destroyErrorDeserializer = config.destroyErrorDeserializer;
    this.disconnectErrorFactory = config.disconnectErrorFactory || this.defaultDisconnectErrorFactory;
    this.port = config.port;
    this.port.addEventListener('message', this.messageHandler);
    this.port.start();
  }

  _createClass(ConnectController, [{
    key: "destroy",
    value: function destroy() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var destroyAction;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                destroyAction = {
                  id: this.resolveActionId(),
                  type: ConnectControllerAction.DESTROY
                };
                _context.prev = 1;
                _context.next = 4;
                return this.sendAction(destroyAction);

              case 4:
                _context.prev = 4;
                this.stopListen();
                return _context.finish(4);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1,, 4, 7]]);
      }));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var disconnectAction;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                disconnectAction = {
                  type: ConnectControllerAction.DISCONNECT
                }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

                _context2.next = 3;
                return this.sendAction(disconnectAction);

              case 3:
                this.stopListen();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "sendAction",
    value: function sendAction(action) {
      if (this.disconnectStatus) {
        throw this.disconnectStatus;
      }

      var actionId = this.resolveActionId();

      var transfer = action.transfer,
          actionWithoutTransfer = __rest(action, ["transfer"]);

      var actionWidthId = Object.assign(Object.assign({}, actionWithoutTransfer), {
        id: actionId
      });
      var response$ = this.promiseListResolver.promise(actionId); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      this.port.postMessage(actionWidthId, transfer);
      return response$;
    }
    /** Stop listening on the port without notifying *ConnectEnvironment* */

  }, {
    key: "stopListen",
    value: function stopListen() {
      var isClosePort = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.disconnectStatus || (this.disconnectStatus = this.disconnectErrorFactory(new _worker_runner_core__WEBPACK_IMPORTED_MODULE_27__["ConnectionWasClosedError"]()));
      this.port.removeEventListener('message', this.messageHandler);

      if (isClosePort) {
        this.port.close();
      } else {
        var interruptListeningAction = {
          id: this.resolveActionId(),
          type: ConnectControllerAction.INTERRUPT_LISTENING
        };
        this.port.postMessage(interruptListeningAction);
      }

      var promises$ = this.promiseListResolver.promises.values();

      var _iterator = _createForOfIteratorHelper(promises$),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var promise = _step.value;
          promise.reject(this.disconnectStatus);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.promiseListResolver.promises.clear();
    }
  }, {
    key: "handleAction",
    value: function handleAction(actionWithId) {
      var _a;

      switch (actionWithId.type) {
        case ConnectEnvironmentAction.DESTROYED_BY_FORCE:
          this.stopListen();
          (_a = this.forceDestroyHandler) === null || _a === void 0 ? void 0 : _a.call(this);
          break;

        case ConnectEnvironmentAction.DESTROYED_WITH_ERROR:
          {
            var error = this.destroyErrorDeserializer(actionWithId.error);
            this.promiseListResolver.reject(actionWithId.id, error);
            break;
          }

        default:
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var _b2 = actionWithId,
                id = _b2.id,
                action = __rest(_b2, ["id"]);

            this.promiseListResolver.resolve(id, action);
            break;
          }
      }
    }
  }, {
    key: "onMessage",
    value: function onMessage(event) {
      this.handleAction(event.data);
    }
  }, {
    key: "resolveActionId",
    value: function resolveActionId() {
      return this.lastActionId++;
    }
  }, {
    key: "defaultDisconnectErrorFactory",
    value: function defaultDisconnectErrorFactory(error) {
      return error;
    }
  }]);

  return ConnectController;
}();

var WorkerRunnerErrorCode;

(function (WorkerRunnerErrorCode) {
  WorkerRunnerErrorCode["CONNECTION_WAS_CLOSED"] = "CONNECTION_WAS_CLOSED";
  WorkerRunnerErrorCode["RUNNER_NOT_FOUND"] = "RUNNER_NOT_FOUND";
  WorkerRunnerErrorCode["RUNNER_INIT_ERROR"] = "RUNNER_INIT_ERROR";
  WorkerRunnerErrorCode["RUNNER_EXECUTE_ERROR"] = "RUNNER_EXECUTE_ERROR";
  WorkerRunnerErrorCode["RUNNER_DESTROY_ERROR"] = "RUNNER_DESTROY_ERROR";
  WorkerRunnerErrorCode["WORKER_DESTROY_ERROR"] = "WORKER_DESTROY_ERROR";
  WorkerRunnerErrorCode["UNEXPECTED_ERROR"] = "UNEXPECTED_ERROR";
})(WorkerRunnerErrorCode || (WorkerRunnerErrorCode = {}));

var WORKER_RUNNER_ERROR_MESSAGES = {
  /**
   * @example
   * <"MyRunnerToken": MyRunner.methodName(...)>
   * <"MyRunnerToken".methodName(...)>
   * <MyRunner.methodName(...)>
   * <methodName(...)>
   * <"MyRunnerToken">
   * <MyRunner>
   */
  formatRunnerInfo: function formatRunnerInfo() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var prefix = arguments.length > 1 ? arguments[1] : undefined;
    var info = '';

    if (config.token) {
      info += "\"".concat(config.token, "\"");
    }

    if (config.runnerName) {
      info += info ? ": ".concat(config.runnerName) : config.runnerName;
    }

    if (config.methodName) {
      info += info ? ".".concat(config.runnerName) : "".concat(config.runnerName);
      info += '(...)';
    }

    if (!info) {
      return '';
    }

    info = "<".concat(info, ">");

    if (prefix) {
      info = prefix + ' ' + info;
    }

    return ' ' + info;
  },
  CONSTRUCTOR_NOT_FOUND: function CONSTRUCTOR_NOT_FOUND() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return "Runner constructor".concat(this.formatRunnerInfo(config, 'for'), " not found");
  },
  CONNECTION_WAS_CLOSED: function CONNECTION_WAS_CLOSED() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return "Connection".concat(this.formatRunnerInfo(config, 'with'), " was closed");
  },
  RUNNER_INIT_ERROR: function RUNNER_INIT_ERROR() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return "An error occurred while initializing Runner".concat(this.formatRunnerInfo(config));
  },
  RUNNER_DESTROY_ERROR: function RUNNER_DESTROY_ERROR() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return "An error occurred while destroying Runner".concat(this.formatRunnerInfo(config));
  },
  EXECUTE_ERROR: function EXECUTE_ERROR() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return "Runtime Error".concat(this.formatRunnerInfo(config, 'for'));
  },
  WORKER_DESTROY_ERROR: function WORKER_DESTROY_ERROR() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return "An error occurred while destroying Runner".concat(this.formatRunnerInfo(config));
  },
  WORKER_NOT_INIT: function WORKER_NOT_INIT() {
    return 'Worker not init';
  },
  UNEXPECTED_ERROR: function UNEXPECTED_ERROR() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return "Unexpected Error".concat(this.formatRunnerInfo(config, 'for'));
  }
};

var _a;

var WORKER_RUNNER_ERROR_CODE = '__workerRunner_errorCode';

var WorkerRunnerError = /*#__PURE__*/function (_Error) {
  _inherits(WorkerRunnerError, _Error);

  var _super = _createSuper(WorkerRunnerError);

  function WorkerRunnerError() {
    var _this2;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WorkerRunnerError);

    _this2 = _super.call(this, config.message);

    if (config.stack) {
      _this2.stack = config.stack;
    } else if (Error.captureStackTrace) {
      if (config.captureOpt) {
        Error.captureStackTrace(_assertThisInitialized(_this2), config.captureOpt);
      }

      Error.captureStackTrace(WorkerRunnerError);
    }

    _this2.name = config.name || WorkerRunnerError.name;
    return _this2;
  }

  return WorkerRunnerError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var WorkerRunnerUnexpectedError = /*#__PURE__*/function (_WorkerRunnerError) {
  _inherits(WorkerRunnerUnexpectedError, _WorkerRunnerError);

  var _super2 = _createSuper(WorkerRunnerUnexpectedError);

  function WorkerRunnerUnexpectedError() {
    var _this3;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WorkerRunnerUnexpectedError);

    _this3 = _super2.call(this, {
      name: config.name || WorkerRunnerUnexpectedError.name,
      message: config.message || WORKER_RUNNER_ERROR_MESSAGES.UNEXPECTED_ERROR(),
      stack: config.stack,
      captureOpt: config.captureOpt || WorkerRunnerUnexpectedError
    });
    _this3[_a] = WorkerRunnerErrorCode.UNEXPECTED_ERROR;
    return _this3;
  }

  return WorkerRunnerUnexpectedError;
}(WorkerRunnerError);

_a = WORKER_RUNNER_ERROR_CODE;

var _a$1, _b, _c, _d, _e, _f;

var ConnectionWasClosedError = /*#__PURE__*/function (_WorkerRunnerError2) {
  _inherits(ConnectionWasClosedError, _WorkerRunnerError2);

  var _super3 = _createSuper(ConnectionWasClosedError);

  function ConnectionWasClosedError() {
    var _this4;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ConnectionWasClosedError);

    _this4 = _super3.call(this, {
      name: config.name || ConnectionWasClosedError.name,
      message: config.message || WORKER_RUNNER_ERROR_MESSAGES.CONNECTION_WAS_CLOSED(),
      stack: config.stack,
      captureOpt: config.captureOpt || ConnectionWasClosedError
    });
    _this4[_a$1] = WorkerRunnerErrorCode.CONNECTION_WAS_CLOSED;
    return _this4;
  }

  return ConnectionWasClosedError;
}(WorkerRunnerError);

_a$1 = WORKER_RUNNER_ERROR_CODE;

var RunnerNotFound = /*#__PURE__*/function (_WorkerRunnerError3) {
  _inherits(RunnerNotFound, _WorkerRunnerError3);

  var _super4 = _createSuper(RunnerNotFound);

  function RunnerNotFound() {
    var _this5;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, RunnerNotFound);

    _this5 = _super4.call(this, {
      name: config.name || RunnerNotFound.name,
      message: config.message || WORKER_RUNNER_ERROR_MESSAGES.CONSTRUCTOR_NOT_FOUND(),
      stack: config.stack,
      captureOpt: config.captureOpt || RunnerNotFound
    });
    _this5[_b] = WorkerRunnerErrorCode.RUNNER_NOT_FOUND;
    return _this5;
  }

  return RunnerNotFound;
}(WorkerRunnerError);

_b = WORKER_RUNNER_ERROR_CODE;

var RunnerInitError = /*#__PURE__*/function (_WorkerRunnerError4) {
  _inherits(RunnerInitError, _WorkerRunnerError4);

  var _super5 = _createSuper(RunnerInitError);

  function RunnerInitError() {
    var _this6;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, RunnerInitError);

    _this6 = _super5.call(this, {
      name: config.name || RunnerInitError.name,
      message: config.message || WORKER_RUNNER_ERROR_MESSAGES.RUNNER_INIT_ERROR(),
      stack: config.stack,
      captureOpt: config.captureOpt || RunnerInitError
    });
    _this6[_c] = WorkerRunnerErrorCode.RUNNER_INIT_ERROR;
    return _this6;
  }

  return RunnerInitError;
}(WorkerRunnerError);

_c = WORKER_RUNNER_ERROR_CODE;

var RunnerExecuteError = /*#__PURE__*/function (_WorkerRunnerError5) {
  _inherits(RunnerExecuteError, _WorkerRunnerError5);

  var _super6 = _createSuper(RunnerExecuteError);

  function RunnerExecuteError() {
    var _this7;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, RunnerExecuteError);

    _this7 = _super6.call(this, {
      name: config.name || RunnerExecuteError.name,
      message: config.message || WORKER_RUNNER_ERROR_MESSAGES.EXECUTE_ERROR(),
      stack: config.stack,
      captureOpt: config.captureOpt || RunnerExecuteError
    });
    _this7[_d] = WorkerRunnerErrorCode.RUNNER_EXECUTE_ERROR;
    return _this7;
  }

  return RunnerExecuteError;
}(WorkerRunnerError);

_d = WORKER_RUNNER_ERROR_CODE;

var RunnerDestroyError = /*#__PURE__*/function (_WorkerRunnerError6) {
  _inherits(RunnerDestroyError, _WorkerRunnerError6);

  var _super7 = _createSuper(RunnerDestroyError);

  function RunnerDestroyError() {
    var _this8;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, RunnerDestroyError);

    _this8 = _super7.call(this, {
      name: config.name || RunnerDestroyError.name,
      message: config.message || WORKER_RUNNER_ERROR_MESSAGES.CONNECTION_WAS_CLOSED(),
      stack: config.stack,
      captureOpt: config.captureOpt || RunnerDestroyError
    });
    _this8[_e] = WorkerRunnerErrorCode.RUNNER_DESTROY_ERROR;
    return _this8;
  }

  return RunnerDestroyError;
}(WorkerRunnerError);

_e = WORKER_RUNNER_ERROR_CODE;

var WorkerDestroyError = /*#__PURE__*/function (_WorkerRunnerError7) {
  _inherits(WorkerDestroyError, _WorkerRunnerError7);

  var _super8 = _createSuper(WorkerDestroyError);

  function WorkerDestroyError() {
    var _this9;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WorkerDestroyError);

    _this9 = _super8.call(this, {
      name: config.name || WorkerDestroyError.name,
      message: config.message || WORKER_RUNNER_ERROR_MESSAGES.WORKER_DESTROY_ERROR(),
      stack: config.stack,
      captureOpt: config.captureOpt || WorkerDestroyError
    });
    _this9[_f] = WorkerRunnerErrorCode.RUNNER_DESTROY_ERROR;
    _this9.originalErrors = new Array();

    if (config.originalErrors) {
      var _this9$originalErrors;

      (_this9$originalErrors = _this9.originalErrors).push.apply(_this9$originalErrors, _toConsumableArray(config.originalErrors));
    }

    return _this9;
  }

  return WorkerDestroyError;
}(WorkerRunnerError);

_f = WORKER_RUNNER_ERROR_CODE;
var MESSAGE_PORT_CONNECT_ENVIRONMENT_DATA = '__workerRunner_connectEnvironmentData';

var ConnectEnvironment = /*#__PURE__*/function () {
  function ConnectEnvironment(config) {
    _classCallCheck(this, ConnectEnvironment);

    this.connectedPorts = new Set();
    this.isDestroyed = false;
    this.actionsHandler = config.actionsHandler;
    this.destroyHandler = config.destroyHandler;
    this.destroyErrorSerializer = config.destroyErrorSerializer;
  }

  _createClass(ConnectEnvironment, [{
    key: "addPort",
    value: function addPort(port) {
      var handler = this.onMessage.bind(this, port);
      port.addEventListener('message', handler);
      port.start();
      this.createMessagePortData(port, {
        handler: handler,
        listeningInterrupter: this.listeningInterrupterFactory()
      });
      this.connectedPorts.add(port);
    }
  }, {
    key: "closeConnection",
    value: function closeConnection(port) {
      var _a;

      var handler = (_a = this.getMessagePortData(port)) === null || _a === void 0 ? void 0 : _a.handler;

      if (handler) {
        port.removeEventListener('message', handler);
      }

      port.close();
      this.connectedPorts["delete"](port);
      this.deleteMessagePortData(port);
    }
  }, {
    key: "handleAction",
    value: function handleAction(port, actionWithId) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = actionWithId.type;
                _context3.next = _context3.t0 === ConnectControllerAction.INTERRUPT_LISTENING ? 3 : _context3.t0 === ConnectControllerAction.DISCONNECT ? 5 : _context3.t0 === ConnectControllerAction.DESTROY ? 7 : 10;
                break;

              case 3:
                this.onInterruptListening(port);
                return _context3.abrupt("break", 13);

              case 5:
                this.onDisconnect(port, actionWithId.id);
                return _context3.abrupt("break", 13);

              case 7:
                _context3.next = 9;
                return this.onDestroy(port, actionWithId.id);

              case 9:
                return _context3.abrupt("break", 13);

              case 10:
                _context3.next = 12;
                return this.onCustomAction(port, actionWithId);

              case 12:
                return _context3.abrupt("break", 13);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "forceDestroy",
    value: function forceDestroy() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var destroyAction, _iterator2, _step2, port;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.destroyHandler();

              case 3:
                _context4.prev = 3;
                destroyAction = {
                  type: ConnectEnvironmentAction.DESTROYED_BY_FORCE
                };
                _iterator2 = _createForOfIteratorHelper(this.connectedPorts);

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    port = _step2.value;
                    this.sendAction(port, destroyAction);
                    this.closeConnection(port);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                return _context4.finish(3);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0,, 3, 8]]);
      }));
    }
  }, {
    key: "onInterruptListening",
    value: function onInterruptListening(port) {
      var portData = this.getMessagePortData(port);

      if (!portData) {
        throw new ConnectionWasClosedError();
      }

      portData.listeningInterrupter.resolve();
      var listeningInterrupter = this.listeningInterrupterFactory();
      portData.listeningInterrupter = listeningInterrupter;
    }
  }, {
    key: "onDisconnect",
    value: function onDisconnect(port, actionId) {
      if (this.connectedPorts.size <= 1) {
        this.onDestroy(port, actionId);
      }

      var disconnectAction = {
        id: actionId,
        type: ConnectEnvironmentAction.DISCONNECTED
      };
      this.sendAction(port, disconnectAction);
      this.closeConnection(port);
    }
  }, {
    key: "onDestroy",
    value: function onDestroy(port, actionId) {
      var _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var handler, hasError, errorAction, destroyAction;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                handler = (_a = this.getMessagePortData(port)) === null || _a === void 0 ? void 0 : _a.handler;
                this.connectedPorts["delete"](port);
                hasError = false;
                _context5.prev = 3;
                _context5.next = 6;
                return this.forceDestroy();

              case 6:
                _context5.next = 13;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](3);
                hasError = true;
                errorAction = {
                  id: actionId,
                  type: ConnectEnvironmentAction.DESTROYED_WITH_ERROR,
                  error: this.destroyErrorSerializer(_context5.t0)
                };
                this.sendAction(port, errorAction);

              case 13:
                if (!hasError) {
                  destroyAction = {
                    id: actionId,
                    type: ConnectEnvironmentAction.DESTROYED_BY_REQUEST
                  };
                  this.sendAction(port, destroyAction);
                }

                if (handler) {
                  port.removeEventListener('message', handler);
                }

                this.isDestroyed = true;
                port.close();

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[3, 8]]);
      }));
    }
  }, {
    key: "onCustomAction",
    value: function onCustomAction(port, actionWithId) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var id, action, portData, isListeningInterrupt, result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = actionWithId.id, action = __rest(actionWithId, ["id"]);
                portData = this.getMessagePortData(port);

                if (portData) {
                  _context6.next = 4;
                  break;
                }

                throw new ConnectionWasClosedError();

              case 4:
                isListeningInterrupt = false;
                _context6.next = 7;
                return Promise.race([portData.listeningInterrupter.promise.then(function () {
                  return isListeningInterrupt = true;
                }), this.actionsHandler(action)]);

              case 7:
                result = _context6.sent;

                if (!isListeningInterrupt) {
                  _context6.next = 10;
                  break;
                }

                return _context6.abrupt("return");

              case 10:
                this.handleCustomActionResponse(port, result, id);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "sendAction",
    value: function sendAction(port, action) {
      if (this.isDestroyed) {
        throw new ConnectionWasClosedError();
      }

      var _a = action,
          transfer = _a.transfer,
          actionWithoutTransfer = __rest(_a, ["transfer"]);

      port.postMessage(actionWithoutTransfer, transfer);
    }
  }, {
    key: "handleCustomActionResponse",
    value: function handleCustomActionResponse(port, response, actionId) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var responseActionWithId;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                responseActionWithId = Object.assign(Object.assign({}, response), {
                  id: actionId
                });
                this.sendAction(port, responseActionWithId);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(response) {
      return response;
    }
  }, {
    key: "listeningInterrupterFactory",
    value: function listeningInterrupterFactory() {
      var resolver;
      var promise = new Promise(function (resolve) {
        resolver = resolve;
      }); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      return {
        promise: promise,
        resolve: resolver
      };
    }
  }, {
    key: "createMessagePortData",
    value: function createMessagePortData(port, data) {
      port[MESSAGE_PORT_CONNECT_ENVIRONMENT_DATA] = data;
    }
  }, {
    key: "getMessagePortData",
    value: function getMessagePortData(port) {
      return port[MESSAGE_PORT_CONNECT_ENVIRONMENT_DATA];
    }
  }, {
    key: "deleteMessagePortData",
    value: function deleteMessagePortData(port) {
      port[MESSAGE_PORT_CONNECT_ENVIRONMENT_DATA] = undefined;
    }
  }, {
    key: "onMessage",
    value: function onMessage(port, event) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.handleAction(port, event.data);

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }]);

  return ConnectEnvironment;
}();

var CODE_TO_ERROR_MAP = (_CODE_TO_ERROR_MAP = {}, _defineProperty(_CODE_TO_ERROR_MAP, WorkerRunnerErrorCode.CONNECTION_WAS_CLOSED, ConnectionWasClosedError), _defineProperty(_CODE_TO_ERROR_MAP, WorkerRunnerErrorCode.RUNNER_INIT_ERROR, RunnerInitError), _defineProperty(_CODE_TO_ERROR_MAP, WorkerRunnerErrorCode.RUNNER_NOT_FOUND, RunnerNotFound), _defineProperty(_CODE_TO_ERROR_MAP, WorkerRunnerErrorCode.RUNNER_EXECUTE_ERROR, RunnerExecuteError), _defineProperty(_CODE_TO_ERROR_MAP, WorkerRunnerErrorCode.RUNNER_DESTROY_ERROR, RunnerDestroyError), _defineProperty(_CODE_TO_ERROR_MAP, WorkerRunnerErrorCode.WORKER_DESTROY_ERROR, WorkerDestroyError), _defineProperty(_CODE_TO_ERROR_MAP, WorkerRunnerErrorCode.UNEXPECTED_ERROR, WorkerRunnerUnexpectedError), _CODE_TO_ERROR_MAP);

var WorkerRunnerErrorSerializer = /*#__PURE__*/function () {
  function WorkerRunnerErrorSerializer() {
    _classCallCheck(this, WorkerRunnerErrorSerializer);

    this.codeToErrorMap = CODE_TO_ERROR_MAP;
  }

  _createClass(WorkerRunnerErrorSerializer, [{
    key: "serialize",
    value: function serialize() {
      var _this10 = this;

      var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var alternativeError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _a, _b, _c;

      var errorCode = (_c = (_b = (_a = error[WORKER_RUNNER_ERROR_CODE]) !== null && _a !== void 0 ? _a : alternativeError[WORKER_RUNNER_ERROR_CODE]) !== null && _b !== void 0 ? _b : alternativeError.errorCode) !== null && _c !== void 0 ? _c : WorkerRunnerErrorCode.UNEXPECTED_ERROR;
      var serializedError;

      if (error instanceof Error) {
        serializedError = {
          errorCode: errorCode,
          name: error.name || alternativeError.name || WorkerRunnerUnexpectedError.name,
          message: error.message || alternativeError.message || WORKER_RUNNER_ERROR_MESSAGES.UNEXPECTED_ERROR(),
          stack: error.stack || alternativeError.stack || new Error().stack
        };

        if (error instanceof WorkerDestroyError) {
          serializedError.originalErrors = error.originalErrors.map(function (originalError) {
            return _this10.serialize(originalError);
          });
        }
      } else {
        serializedError = {
          errorCode: errorCode,
          name: alternativeError.name || WorkerRunnerUnexpectedError.name,
          message: error ? String(error) : alternativeError.message || WORKER_RUNNER_ERROR_MESSAGES.UNEXPECTED_ERROR(),
          stack: alternativeError.stack || new Error().stack
        };
      }

      if (!serializedError.originalErrors) {
        if (alternativeError instanceof WorkerDestroyError) {
          serializedError.originalErrors = alternativeError.originalErrors.map(function (originalError) {
            return _this10.serialize(originalError);
          });
        }
      }

      return serializedError;
    }
  }, {
    key: "deserialize",
    value: function deserialize(error) {
      var _this11 = this;

      var _a;

      if (error.errorCode === WorkerRunnerErrorCode.WORKER_DESTROY_ERROR) {
        return new WorkerDestroyError(Object.assign(Object.assign({
          captureOpt: this.deserialize
        }, error), {
          originalErrors: (_a = error.originalErrors) === null || _a === void 0 ? void 0 : _a.map(function (originalError) {
            return _this11.deserialize(originalError);
          })
        }));
      }

      var errorConstructor = this.codeToErrorMap[error.errorCode];

      if (!errorConstructor) {
        errorConstructor = WorkerRunnerUnexpectedError;
      }

      return new errorConstructor(Object.assign({
        captureOpt: this.deserialize
      }, error));
    }
  }]);

  return WorkerRunnerErrorSerializer;
}();

var WORKER_RUNNER_ERROR_SERIALIZER = new WorkerRunnerErrorSerializer();
var NodeResolverAction;

(function (NodeResolverAction) {
  NodeResolverAction["INIT_RUNNER"] = "INIT_RUNNER";
})(NodeResolverAction || (NodeResolverAction = {}));

var RunnerEnvironmentAction;

(function (RunnerEnvironmentAction) {
  RunnerEnvironmentAction["EXECUTED"] = "EXECUTED";
  RunnerEnvironmentAction["EXECUTED_WITH_RUNNER_RESULT"] = "EXECUTED_WITH_RUNNER_RESULT";
  RunnerEnvironmentAction["EXECUTE_ERROR"] = "EXECUTE_ERROR";
  RunnerEnvironmentAction["RESOLVED"] = "RESOLVED";
})(RunnerEnvironmentAction || (RunnerEnvironmentAction = {}));

var RunnerControllerAction;

(function (RunnerControllerAction) {
  RunnerControllerAction["EXECUTE"] = "EXECUTE";
  RunnerControllerAction["RESOLVE"] = "RESOLVE";
})(RunnerControllerAction || (RunnerControllerAction = {}));

var RunnerController = /*#__PURE__*/function () {
  function RunnerController(config) {
    _classCallCheck(this, RunnerController);

    // TODO use Factory
    this.errorSerializer = WORKER_RUNNER_ERROR_SERIALIZER;
    this.isMarkedForTransfer = false;
    this.originalRunnerName = config.originalRunnerName;
    this.runnerBridgeConstructor = config.runnerBridgeConstructor;
    this.resolvedRunner = new this.runnerBridgeConstructor(this);
    this.token = config.token;
    this.onConnectionClosed = config.onConnectionClosed;
    this.runnerControllerPartFactory = config.runnerControllerPartFactory;
    this.connectController = this.buildConnectController({
      port: config.port,
      destroyErrorDeserializer: this.errorSerializer.deserialize.bind(this.errorSerializer),
      forceDestroyHandler: this.onConnectionClosed,
      disconnectErrorFactory: this.disconnectErrorFactory.bind(this)
    });
  }

  _createClass(RunnerController, [{
    key: "execute",
    value: function execute(methodName, args) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var serializedArgumentsData, actionResult;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return NodeRunnerResolverBase.serializeArguments(args);

              case 2:
                serializedArgumentsData = _context9.sent;
                _context9.next = 5;
                return this.connectController.sendAction({
                  type: RunnerControllerAction.EXECUTE,
                  args: serializedArgumentsData.args,
                  method: methodName,
                  transfer: serializedArgumentsData.transfer
                });

              case 5:
                actionResult = _context9.sent;
                return _context9.abrupt("return", this.handleExecuteResult(actionResult));

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return this.connectController.disconnect();

              case 3:
                _context10.prev = 3;
                (_a = this.onConnectionClosed) === null || _a === void 0 ? void 0 : _a.call(this);
                return _context10.finish(3);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0,, 3, 6]]);
      }));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return this.connectController.destroy();

              case 3:
                _context11.prev = 3;
                (_a = this.onConnectionClosed) === null || _a === void 0 ? void 0 : _a.call(this);
                return _context11.finish(3);

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0,, 3, 6]]);
      }));
    }
  }, {
    key: "cloneControl",
    value: function cloneControl() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.t0 = this.constructor;
                _context12.t1 = this.token;
                _context12.t2 = this.runnerBridgeConstructor;
                _context12.next = 5;
                return this.resolveControl();

              case 5:
                _context12.t3 = _context12.sent;
                _context12.t4 = this.originalRunnerName;
                _context12.t5 = this.runnerControllerPartFactory;
                _context12.t6 = {
                  token: _context12.t1,
                  runnerBridgeConstructor: _context12.t2,
                  port: _context12.t3,
                  originalRunnerName: _context12.t4,
                  runnerControllerPartFactory: _context12.t5
                };
                return _context12.abrupt("return", new _context12.t0(_context12.t6));

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "markForTransfer",
    value: function markForTransfer() {
      if (this.connectController.disconnectStatus) {
        throw this.connectController.disconnectStatus;
      }

      this.isMarkedForTransfer = true;
    }
  }, {
    key: "resolveControl",
    value: function resolveControl() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var actionResult;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.connectController.sendAction({
                  type: RunnerControllerAction.RESOLVE
                });

              case 2:
                actionResult = _context13.sent;
                return _context13.abrupt("return", actionResult.port);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }, {
    key: "resolveOrTransferControl",
    value: function resolveOrTransferControl() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!this.isMarkedForTransfer) {
                  _context14.next = 2;
                  break;
                }

                return _context14.abrupt("return", this.transferControl());

              case 2:
                return _context14.abrupt("return", this.resolveControl());

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
  }, {
    key: "stopListen",
    value: function stopListen() {
      var isClosePort = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var _a;

      if (this.connectController.disconnectStatus) {
        throw this.connectController.disconnectStatus;
      }

      this.connectController.stopListen(isClosePort);
      (_a = this.onConnectionClosed) === null || _a === void 0 ? void 0 : _a.call(this);
    }
  }, {
    key: "handleExecuteResult",
    value: function handleExecuteResult(actionResult) {
      switch (actionResult.type) {
        case RunnerEnvironmentAction.EXECUTE_ERROR:
          throw this.errorSerializer.deserialize(actionResult);

        case RunnerEnvironmentAction.EXECUTED_WITH_RUNNER_RESULT:
          return this.runnerControllerPartFactory({
            token: actionResult.token,
            port: actionResult.port
          }).resolvedRunner;

        default:
          return actionResult.response;
      }
    }
  }, {
    key: "buildConnectController",
    value: function buildConnectController(config) {
      return new ConnectController(config);
    }
  }, {
    key: "transferControl",
    value: function transferControl() {
      this.stopListen(false);
      return this.connectController.port;
    }
  }, {
    key: "disconnectErrorFactory",
    value: function disconnectErrorFactory(error) {
      return new ConnectionWasClosedError(Object.assign(Object.assign({}, error), {
        message: WORKER_RUNNER_ERROR_MESSAGES.CONNECTION_WAS_CLOSED({
          token: this.token,
          runnerName: this.originalRunnerName
        })
      }));
    }
  }]);

  return RunnerController;
}();

var EXECUTE_RUNNER_CONTROLLER_METHOD = '__workerRunner_executeControllerMethod';
var RUNNER_BRIDGE_CONTROLLER = '__workerRunner_bridgeController';

var RunnerBridge = /*#__PURE__*/function () {
  function RunnerBridge(controller) {
    _classCallCheck(this, RunnerBridge);

    this[RUNNER_BRIDGE_CONTROLLER] = controller;
  } // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any


  _createClass(RunnerBridge, [{
    key: "disconnect",

    /** Unsubscribe from runner, if the control object was the last, then runner will be automatically destroyed */
    value: function disconnect() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this[RUNNER_BRIDGE_CONTROLLER].disconnect();

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
    /** Destroying and remove Runner instance from resolved Runners list in `RunnerResolver` instance */

  }, {
    key: "destroy",
    value: function destroy() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this[RUNNER_BRIDGE_CONTROLLER].destroy();

              case 2:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
    }
    /** Returns a new control object for the same Runner instance */

  }, {
    key: "cloneControl",
    value: function cloneControl() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var runnerController;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this[RUNNER_BRIDGE_CONTROLLER].cloneControl();

              case 2:
                runnerController = _context17.sent;
                return _context17.abrupt("return", runnerController.resolvedRunner);

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
    }
    /**
     * When a Runner is flagged for transfer, if it is used as argument or as method result,
     * the original control will be transferred. The original Resolved Runner will lose control.
     * In this case, the transfer of the Resolved Runner will be faster
     * because it will not take time to request a copy of the control.
     * It is convenient to use as an automatic disconnect after returning the result of a method.
     */

  }, {
    key: "markForTransfer",
    value: function markForTransfer() {
      this[RUNNER_BRIDGE_CONTROLLER].markForTransfer();
      return this;
    }
  }, {
    key: EXECUTE_RUNNER_CONTROLLER_METHOD,
    value: function value(methodName, args) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", this[RUNNER_BRIDGE_CONTROLLER].execute(methodName, args));

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
    }
  }], [{
    key: "isRunnerBridge",
    value: function isRunnerBridge(instance) {
      return !!instance && !!instance[RUNNER_BRIDGE_CONTROLLER];
    }
  }]);

  return RunnerBridge;
}();

var RunnersListController = /*#__PURE__*/function () {
  function RunnersListController(config) {
    _classCallCheck(this, RunnersListController);

    this.runnerByTokenDataRecord = {};
    this.runnerTokenMap = new Map();
    this.applyRunnerMap(config.runners);
  }

  _createClass(RunnersListController, [{
    key: "getRunnerToken",
    value: function getRunnerToken(runner) {
      var runnerToken = this.runnerTokenMap.get(runner);

      if (!runnerToken) {
        throw new RunnerNotFound({
          message: WORKER_RUNNER_ERROR_MESSAGES.CONSTRUCTOR_NOT_FOUND({
            runnerName: runner.name
          })
        });
      }

      return runnerToken;
    }
  }, {
    key: "getRunnerTokenByInstance",
    value: function getRunnerTokenByInstance(runnerInstance) {
      return this.getRunnerToken(Object.getPrototypeOf(runnerInstance).constructor);
    }
  }, {
    key: "getRunner",
    value: function getRunner(token) {
      var runnerData = this.runnerByTokenDataRecord[token];

      if (!runnerData) {
        throw new RunnerNotFound({
          message: WORKER_RUNNER_ERROR_MESSAGES.CONSTRUCTOR_NOT_FOUND({
            token: token
          })
        });
      }

      return runnerData.runnerConstructor;
    }
  }, {
    key: "checkToken",
    value: function checkToken(token) {
      return token in this.runnerByTokenDataRecord;
    }
  }, {
    key: "getRunnerBridgeConstructor",
    value: function getRunnerBridgeConstructor(token) {
      var runnerData = this.runnerByTokenDataRecord[token];

      if (!runnerData) {
        throw new RunnerNotFound({
          message: WORKER_RUNNER_ERROR_MESSAGES.CONSTRUCTOR_NOT_FOUND({
            token: token
          })
        });
      }

      return runnerData.bridgeConstructor;
    }
  }, {
    key: "getRunnerList",
    value: function getRunnerList() {
      var runnersList = new Array();

      var _iterator3 = _createForOfIteratorHelper(this.runnerTokenMap),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              runner = _step3$value[0],
              token = _step3$value[1];

          runnersList.push({
            runner: runner,
            token: token
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return runnersList;
    }
  }, {
    key: "applyRunnerMap",
    value: function applyRunnerMap(runnersMap) {
      var _iterator4 = _createForOfIteratorHelper(runnersMap),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var runner = _step4.value;
          var token = void 0;
          var runnerConstructor = void 0;

          if ('token' in runner) {
            token = runner.token;
            runnerConstructor = runner.runner;
          } else {
            token = runner.name;
            runnerConstructor = runner;
          }

          this.runnerByTokenDataRecord[token] = {
            bridgeConstructor: this.resolveRunnerBridgeConstructor(runnerConstructor),
            runnerConstructor: runnerConstructor
          };
          this.runnerTokenMap.set(runnerConstructor, token);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "recursiveOverrideProperty",
    value: function recursiveOverrideProperty(construct, proto) {
      var _this12 = this;

      var _iterator5 = _createForOfIteratorHelper(Object.getOwnPropertyNames(proto.prototype)),
          _step5;

      try {
        var _loop = function _loop() {
          var key = _step5.value;

          if (!(key in RunnerBridge.prototype)) {
            construct.prototype[key] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return this[EXECUTE_RUNNER_CONTROLLER_METHOD](key, args);
            };
          }

          var parent = Object.getPrototypeOf(proto);

          if (parent.prototype) {
            _this12.recursiveOverrideProperty(construct, parent);
          }
        };

        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "resolveRunnerBridgeConstructor",
    value: function resolveRunnerBridgeConstructor(runner) {
      var className = 'Resolved' + runner.name;

      var ResolvedRunner = _defineProperty({}, className, /*#__PURE__*/function (_RunnerBridge) {
        _inherits(_class, _RunnerBridge);

        var _super9 = _createSuper(_class);

        function _class() {
          _classCallCheck(this, _class);

          return _super9.apply(this, arguments);
        }

        return _class;
      }(RunnerBridge))[className];

      this.recursiveOverrideProperty(ResolvedRunner, runner);
      return ResolvedRunner;
    }
  }]);

  return RunnersListController;
}();

var RunnerArgumentType;

(function (RunnerArgumentType) {
  RunnerArgumentType["JSON"] = "JSON";
  RunnerArgumentType["RUNNER_INSTANCE"] = "RUNNER_INSTANCE";
})(RunnerArgumentType || (RunnerArgumentType = {}));
/** Allows you to use `Transferable` data as argument or a method result. */


var TransferRunnerData = function TransferRunnerData(data, transfer) {
  _classCallCheck(this, TransferRunnerData);

  this.data = data;
  this.transfer = transfer;
};

var WorkerResolverBridgeAction;

(function (WorkerResolverBridgeAction) {
  WorkerResolverBridgeAction["CONNECTED"] = "CONNECTED";
})(WorkerResolverBridgeAction || (WorkerResolverBridgeAction = {}));

var ResolverBridgeAction;

(function (ResolverBridgeAction) {
  ResolverBridgeAction["CONNECT"] = "CONNECT";
  ResolverBridgeAction["DISCONNECT"] = "DISCONNECT";
  ResolverBridgeAction["DESTROY"] = "DESTROY";
})(ResolverBridgeAction || (ResolverBridgeAction = {}));

var ResolverBridge = /*#__PURE__*/function () {
  function ResolverBridge(config) {
    _classCallCheck(this, ResolverBridge);

    this.workerMessageHandler = this.onWorkerMessage.bind(this);
    this.worker = config.worker;
  }

  _createClass(ResolverBridge, [{
    key: "connect",
    value: function connect() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        var _this13 = this;

        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!this.connectInfo) {
                  _context19.next = 2;
                  break;
                }

                throw new WorkerRunnerUnexpectedError({
                  message: 'Connection already established'
                });

              case 2:
                return _context19.abrupt("return", new Promise(function (resolve, reject) {
                  var actionId = _this13.resolveActionId();

                  _this13.connectInfo = {
                    actionId: actionId,
                    resolve: resolve,
                    reject: reject
                  };

                  _this13.worker.addEventListener('message', _this13.workerMessageHandler);

                  var initAction = {
                    id: actionId,
                    type: ResolverBridgeAction.CONNECT
                  };

                  _this13.worker.postMessage(initAction);
                }));

              case 3:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
    }
  }, {
    key: "onWorkerMessage",
    value: function onWorkerMessage(event) {
      var action = event.data;

      switch (action.type) {
        case WorkerResolverBridgeAction.CONNECTED:
          this.onConnected(action);
          break;

        default:
          throw new WorkerRunnerUnexpectedError({
            message: 'Unexpected action type in Node resolver Bridge from Worker resolver Bridge'
          });
      }
    }
  }, {
    key: "onConnected",
    value: function onConnected(action) {
      if (!this.connectInfo) {
        throw new WorkerRunnerUnexpectedError({
          message: 'Connection was established before initiation'
        });
      }

      if (this.connectInfo.actionId === action.id) {
        this.connectInfo.resolve(action.port);
      }
    }
  }, {
    key: "resolveActionId",
    value: function resolveActionId() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var lastId = this.worker[ResolverBridge.LAST_WORKER_ACTION_ID];

      if (typeof lastId !== 'number') {
        lastId = 0;
      } else {
        lastId++;
      } // eslint-disable-next-line @typescript-eslint/no-explicit-any


      this.worker[ResolverBridge.LAST_WORKER_ACTION_ID] = lastId;
      return lastId;
    }
  }]);

  return ResolverBridge;
}();

ResolverBridge.LAST_WORKER_ACTION_ID = '__workerRunner_lastActionId';
var WorkerResolverAction;

(function (WorkerResolverAction) {
  WorkerResolverAction["RUNNER_INITED"] = "RUNNER_INITED";
  WorkerResolverAction["RUNNER_INIT_ERROR"] = "RUNNER_INIT_ERROR";
})(WorkerResolverAction || (WorkerResolverAction = {}));

var DEFAULT_RUNNER_RESOLVER_BASE_CONFIG = {
  workerName: 'Worker Runner',
  runners: [],
  workerPath: 'worker.js'
};

var NodeRunnerResolverBase = /*#__PURE__*/function () {
  function NodeRunnerResolverBase(config) {
    _classCallCheck(this, NodeRunnerResolverBase);

    this.runnerControllers = new Set();
    this.errorSerializer = WORKER_RUNNER_ERROR_SERIALIZER;
    this.runnersListController = new RunnersListController({
      runners: config.runners || DEFAULT_RUNNER_RESOLVER_BASE_CONFIG.runners
    });
    this.workerName = config.workerName || DEFAULT_RUNNER_RESOLVER_BASE_CONFIG.workerName;
    this.workerPath = config.workerPath || DEFAULT_RUNNER_RESOLVER_BASE_CONFIG.workerPath;
  }
  /** TODO extract serialize / deserialize arguments to component */


  _createClass(NodeRunnerResolverBase, [{
    key: "run",

    /** Launches and prepares RunnerResolver for work */
    value: function run() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        var port;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                this.buildResolverBridge(); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

                _context20.next = 3;
                return this.resolverBridge.connect();

              case 3:
                port = _context20.sent;
                this.connectController = new ConnectController({
                  port: port,
                  destroyErrorDeserializer: this.errorSerializer.deserialize.bind(this.errorSerializer),
                  forceDestroyHandler: this.destroyByForce.bind(this)
                });

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
    }
    /** Returns a runner control object that will call the methods of the source instance */

  }, {
    key: "resolve",
    value: function resolve(identifier) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
        var _this14 = this;

        var token, action, runnerController;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!(typeof identifier === 'string')) {
                  _context21.next = 6;
                  break;
                }

                token = identifier;

                if (this.runnersListController.checkToken(token)) {
                  _context21.next = 4;
                  break;
                }

                throw new RunnerNotFound({
                  message: WORKER_RUNNER_ERROR_MESSAGES.CONSTRUCTOR_NOT_FOUND({
                    token: token
                  })
                });

              case 4:
                _context21.next = 7;
                break;

              case 6:
                token = this.runnersListController.getRunnerToken(identifier);

              case 7:
                _context21.next = 9;
                return this.sendInitAction(token, args);

              case 9:
                action = _context21.sent;
                runnerController = this.runnerControllerPartFactory({
                  token: token,
                  port: action.port,
                  onConnectionClosed: function onConnectionClosed() {
                    return _this14.runnerControllers["delete"](runnerController);
                  }
                });
                this.runnerControllers.add(runnerController);
                return _context21.abrupt("return", runnerController.resolvedRunner);

              case 13:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
    }
    /** Destroying of all resolved Runners instance */

  }, {
    key: "destroy",
    value: function destroy() {
      var _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!this.connectController) {
                  _context22.next = 10;
                  break;
                }

                _context22.next = 3;
                return this.connectController.destroy();

              case 3:
                this.destroyRunnerControllers();
                (_a = this.worker) === null || _a === void 0 ? void 0 : _a.terminate();
                this.worker = undefined;
                this.connectController = undefined;
                this.resolverBridge = undefined;
                _context22.next = 11;
                break;

              case 10:
                throw new ConnectionWasClosedError({
                  message: WORKER_RUNNER_ERROR_MESSAGES.WORKER_NOT_INIT()
                });

              case 11:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
    }
  }, {
    key: "buildResolverBridge",
    value: function buildResolverBridge() {
      this.worker = new Worker(this.workerPath, {
        name: this.workerName
      });
      this.resolverBridge = new ResolverBridge({
        worker: this.worker
      });
    }
  }, {
    key: "runnerControllerPartFactory",
    value: function runnerControllerPartFactory(config) {
      var runnerBridgeConstructor = this.runnersListController.getRunnerBridgeConstructor(config.token);
      var originalRunnerName = this.runnersListController.getRunner(config.token).name;
      return this.runnerControllerFactory(Object.assign(Object.assign({}, config), {
        runnerBridgeConstructor: runnerBridgeConstructor,
        originalRunnerName: originalRunnerName,
        runnerControllerPartFactory: this.runnerControllerPartFactory.bind(this)
      }));
    }
  }, {
    key: "runnerControllerFactory",
    value: function runnerControllerFactory(config) {
      return new RunnerController(config);
    }
  }, {
    key: "sendInitAction",
    value: function sendInitAction(token, args) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
        var serializedArguments, action, responseAction;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (this.connectController) {
                  _context23.next = 2;
                  break;
                }

                throw new ConnectionWasClosedError({
                  message: WORKER_RUNNER_ERROR_MESSAGES.WORKER_NOT_INIT()
                });

              case 2:
                _context23.prev = 2;
                _context23.next = 5;
                return NodeRunnerResolverBase.serializeArguments(args);

              case 5:
                serializedArguments = _context23.sent;
                action = {
                  type: NodeResolverAction.INIT_RUNNER,
                  token: token,
                  args: serializedArguments.args,
                  transfer: serializedArguments.transfer
                };
                _context23.next = 9;
                return this.connectController.sendAction(action);

              case 9:
                responseAction = _context23.sent;

                if (!(responseAction.type === WorkerResolverAction.RUNNER_INIT_ERROR)) {
                  _context23.next = 12;
                  break;
                }

                throw this.errorSerializer.deserialize(responseAction);

              case 12:
                return _context23.abrupt("return", responseAction);

              case 15:
                _context23.prev = 15;
                _context23.t0 = _context23["catch"](2);

                if (!(_context23.t0 instanceof WorkerRunnerError)) {
                  _context23.next = 19;
                  break;
                }

                throw _context23.t0;

              case 19:
                throw new WorkerRunnerUnexpectedError(this.errorSerializer.serialize(_context23.t0, {
                  message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_INIT_ERROR({
                    token: token,
                    runnerName: this.runnersListController.getRunner(token).name
                  }),
                  stack: _context23.t0 === null || _context23.t0 === void 0 ? void 0 : _context23.t0.stack
                }));

              case 20:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[2, 15]]);
      }));
    }
  }, {
    key: "destroyRunnerControllers",
    value: function destroyRunnerControllers() {
      var _iterator6 = _createForOfIteratorHelper(this.runnerControllers),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var runnerController = _step6.value;
          runnerController.stopListen();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      this.runnerControllers.clear();
    }
  }, {
    key: "destroyByForce",
    value: function destroyByForce() {
      throw new WorkerRunnerUnexpectedError({
        message: 'Runner Resolver cannot be destroyed by force'
      });
    }
    /**
     * Wraps the Runner and returns a Runner control object that will call the methods of the original Runner instance.
     * The original Runner instance will be executed in the same area in which it was wrapped.
     */

  }, {
    key: "wrapRunner",
    value: function wrapRunner(runnerInstance) {
      var _this15 = this;

      if (!this.resolverBridge) {
        throw new ConnectionWasClosedError({
          message: WORKER_RUNNER_ERROR_MESSAGES.WORKER_NOT_INIT()
        });
      }

      var token = this.runnersListController.getRunnerTokenByInstance(runnerInstance);
      var port = this.resolverBridge.workerRunnerResolver.wrapRunner(runnerInstance);
      var runnerController = this.runnerControllerPartFactory({
        token: token,
        port: port,
        onConnectionClosed: function onConnectionClosed() {
          return _this15.runnerControllers["delete"](runnerController);
        }
      });
      this.runnerControllers.add(runnerController);
      return runnerController.resolvedRunner;
    }
  }], [{
    key: "serializeArguments",
    value: function serializeArguments(args) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
        var _this16 = this;

        var serializedArguments, argsMap, argumentIndex;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                serializedArguments = {
                  args: new Array(),
                  transfer: new Array()
                };
                argsMap = new Map();
                _context25.next = 4;
                return Promise.all(args.map(function (argumentWithTransferData, index) {
                  return __awaiter(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
                    var argument, _serializedArguments$, controller, transferPort;

                    return regeneratorRuntime.wrap(function _callee24$(_context24) {
                      while (1) {
                        switch (_context24.prev = _context24.next) {
                          case 0:
                            if (argumentWithTransferData instanceof TransferRunnerData) {
                              (_serializedArguments$ = serializedArguments.transfer).push.apply(_serializedArguments$, _toConsumableArray(argumentWithTransferData.transfer));

                              argument = argumentWithTransferData.data;
                            } else {
                              argument = argumentWithTransferData;
                            }

                            if (!RunnerBridge.isRunnerBridge(argument)) {
                              _context24.next = 10;
                              break;
                            }

                            controller = argument[RUNNER_BRIDGE_CONTROLLER]; // TODO close all connection after throw error 

                            _context24.next = 5;
                            return controller.resolveOrTransferControl();

                          case 5:
                            transferPort = _context24.sent;
                            argsMap.set(index, {
                              type: RunnerArgumentType.RUNNER_INSTANCE,
                              port: transferPort,
                              token: controller.token
                            });
                            serializedArguments.transfer.push(transferPort);
                            _context24.next = 11;
                            break;

                          case 10:
                            argsMap.set(index, {
                              type: RunnerArgumentType.JSON,
                              data: argument
                            });

                          case 11:
                          case "end":
                            return _context24.stop();
                        }
                      }
                    }, _callee24);
                  }));
                }));

              case 4:
                for (argumentIndex = 0; argumentIndex < args.length; argumentIndex++) {
                  serializedArguments.args.push(argsMap.get(argumentIndex));
                }

                return _context25.abrupt("return", serializedArguments);

              case 6:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }));
    }
  }]);

  return NodeRunnerResolverBase;
}();

var LocalWorkerResolverBridge = /*#__PURE__*/function () {
  function LocalWorkerResolverBridge(config) {
    _classCallCheck(this, LocalWorkerResolverBridge);

    config.newConnectionHandler(config.port);
  }

  _createClass(LocalWorkerResolverBridge, [{
    key: "destroy",
    value: function destroy() {// Stub
    }
  }]);

  return LocalWorkerResolverBridge;
}();

var LocalResolverBridge = /*#__PURE__*/function () {
  function LocalResolverBridge(config) {
    var _this17 = this;

    _classCallCheck(this, LocalResolverBridge);

    this.messageChanel = new MessageChannel();
    this.workerRunnerResolver = config.workerRunnerResolverFactory({
      bridgeFactory: function bridgeFactory(config) {
        return new LocalWorkerResolverBridge(Object.assign(Object.assign({}, config), {
          port: _this17.messageChanel.port1
        }));
      }
    });
    this.workerRunnerResolver.run();
  }

  _createClass(LocalResolverBridge, [{
    key: "connect",
    value: function connect() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                return _context26.abrupt("return", this.messageChanel.port2);

              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
    }
  }]);

  return LocalResolverBridge;
}();

var RunnerEnvironment = /*#__PURE__*/function () {
  function RunnerEnvironment(config) {
    _classCallCheck(this, RunnerEnvironment);

    this.connectedControllers = new Array(); // TODO Need disconnect?

    this.token = config.token;
    this.errorSerializer = config.errorSerializer;
    this.runnerInstance = config.runner;
    this.workerRunnerResolver = config.workerRunnerResolver;
    this.onDestroyed = config.onDestroyed;
    this.connectEnvironment = this.connectEnvironmentFactory({
      destroyErrorSerializer: this.destroyErrorSerializer.bind(this),
      actionsHandler: this.handleAction.bind(this),
      destroyHandler: this.handleDestroy.bind(this)
    });
    this.connectEnvironment.addPort(config.port);
  }

  _createClass(RunnerEnvironment, [{
    key: "execute",
    value: function execute(action) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
        var response, deserializeArgumentsData, _this$runnerInstance;

        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                deserializeArgumentsData = this.workerRunnerResolver.deserializeArguments(action.args);
                _context27.prev = 1;
                _context27.next = 4;
                return (_this$runnerInstance = this.runnerInstance)[action.method].apply(_this$runnerInstance, _toConsumableArray(deserializeArgumentsData.args));

              case 4:
                response = _context27.sent;
                _context27.next = 12;
                break;

              case 7:
                _context27.prev = 7;
                _context27.t0 = _context27["catch"](1);
                _context27.next = 11;
                return Promise.all(deserializeArgumentsData.controllers.map(function (controller) {
                  return controller.disconnect();
                }));

              case 11:
                return _context27.abrupt("return", Object.assign({
                  type: RunnerEnvironmentAction.EXECUTE_ERROR
                }, this.errorSerializer.serialize(_context27.t0, new RunnerExecuteError({
                  message: WORKER_RUNNER_ERROR_MESSAGES.EXECUTE_ERROR({
                    token: this.token,
                    runnerName: this.runnerName,
                    methodName: action.method
                  }),
                  stack: _context27.t0 === null || _context27.t0 === void 0 ? void 0 : _context27.t0.stack
                }))));

              case 12:
                this.addConnectedControllers(deserializeArgumentsData.controllers);
                _context27.next = 15;
                return this.handleExecuteResponse(response);

              case 15:
                return _context27.abrupt("return", _context27.sent);

              case 16:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this, [[1, 7]]);
      }));
    }
  }, {
    key: "addConnectedControllers",
    value: function addConnectedControllers(controllers) {
      var _this$connectedContro;

      (_this$connectedContro = this.connectedControllers).push.apply(_this$connectedContro, _toConsumableArray(controllers));
    }
  }, {
    key: "handleDestroy",
    value: function handleDestroy() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.prev = 0;

                if (!this.runnerInstance.destroy) {
                  _context28.next = 4;
                  break;
                }

                _context28.next = 4;
                return this.runnerInstance.destroy();

              case 4:
                _context28.prev = 4;
                this.onDestroyed();
                return _context28.finish(4);

              case 7:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this, [[0,, 4, 7]]);
      }));
    }
  }, {
    key: "handleAction",
    value: function handleAction(action) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.t0 = action.type;
                _context29.next = _context29.t0 === RunnerControllerAction.EXECUTE ? 3 : _context29.t0 === RunnerControllerAction.RESOLVE ? 12 : 15;
                break;

              case 3:
                _context29.prev = 3;
                _context29.next = 6;
                return this.execute(action);

              case 6:
                return _context29.abrupt("return", _context29.sent);

              case 9:
                _context29.prev = 9;
                _context29.t1 = _context29["catch"](3);
                return _context29.abrupt("return", Object.assign({
                  type: RunnerEnvironmentAction.EXECUTE_ERROR
                }, this.errorSerializer.serialize(_context29.t1, new RunnerExecuteError({
                  message: WORKER_RUNNER_ERROR_MESSAGES.EXECUTE_ERROR({
                    token: this.token,
                    methodName: action.method,
                    runnerName: this.runnerName
                  }),
                  stack: _context29.t1 === null || _context29.t1 === void 0 ? void 0 : _context29.t1.stack
                }))));

              case 12:
                _context29.next = 14;
                return this.resolve();

              case 14:
                return _context29.abrupt("return", _context29.sent);

              case 15:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this, [[3, 9]]);
      }));
    }
  }, {
    key: "handleExecuteResponse",
    value: function handleExecuteResponse(executeResult) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
        var runnerController, transferPort, response, transfer;
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!RunnerBridge.isRunnerBridge(executeResult)) {
                  _context30.next = 8;
                  break;
                }

                runnerController = executeResult[RUNNER_BRIDGE_CONTROLLER];
                _context30.next = 4;
                return runnerController.resolveOrTransferControl();

              case 4:
                transferPort = _context30.sent;
                return _context30.abrupt("return", {
                  type: RunnerEnvironmentAction.EXECUTED_WITH_RUNNER_RESULT,
                  port: transferPort,
                  token: runnerController.token,
                  transfer: [transferPort]
                });

              case 8:
                transfer = [];

                if (executeResult instanceof TransferRunnerData) {
                  transfer.push.apply(transfer, _toConsumableArray(executeResult.transfer));
                  response = executeResult.data;
                } else {
                  response = executeResult;
                }

                return _context30.abrupt("return", {
                  type: RunnerEnvironmentAction.EXECUTED,
                  response: response,
                  transfer: transfer
                });

              case 11:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30);
      }));
    }
  }, {
    key: "connectEnvironmentFactory",
    value: function connectEnvironmentFactory(config) {
      return new ConnectEnvironment(config);
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }, {
    key: "destroyErrorSerializer",
    value: function destroyErrorSerializer(error) {
      return this.errorSerializer.serialize(error, new RunnerDestroyError({
        message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_DESTROY_ERROR({
          token: this.token,
          runnerName: this.runnerName
        }),
        stack: error === null || error === void 0 ? void 0 : error.stack
      }));
    }
  }, {
    key: "resolve",
    value: function resolve() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
        var messageChanel;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                messageChanel = new MessageChannel();
                this.connectEnvironment.addPort(messageChanel.port1);
                return _context31.abrupt("return", {
                  type: RunnerEnvironmentAction.RESOLVED,
                  port: messageChanel.port2,
                  transfer: [messageChanel.port2]
                });

              case 3:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
    }
  }, {
    key: "runnerName",
    get: function get() {
      return this.runnerInstance.constructor.name;
    }
  }]);

  return RunnerEnvironment;
}();

var WorkerResolverBridge = /*#__PURE__*/function () {
  function WorkerResolverBridge(config) {
    _classCallCheck(this, WorkerResolverBridge);

    this.messageHandler = this.onMessage.bind(this);
    this.onNewConnection = config.newConnectionHandler;
    self.addEventListener('message', this.messageHandler);
  }

  _createClass(WorkerResolverBridge, [{
    key: "destroy",
    value: function destroy() {
      self.removeEventListener('message', this.messageHandler);
    }
  }, {
    key: "onMessage",
    value: function onMessage(event) {
      var action = event.data;

      if (action.type === ResolverBridgeAction.CONNECT) {
        var messageChannel = new MessageChannel();
        this.onNewConnection(messageChannel.port1);
        var connectedAction = {
          id: action.id,
          type: WorkerResolverBridgeAction.CONNECTED,
          port: messageChannel.port2
        };
        self.postMessage(connectedAction, [messageChannel.port2]);
      } else {
        throw new WorkerRunnerUnexpectedError({
          message: 'Unexpected action type in Worker resolver Bridge from Node resolver Bridge'
        });
      }
    }
  }]);

  return WorkerResolverBridge;
}();

var BaseWorkerRunnerResolver = /*#__PURE__*/function () {
  function BaseWorkerRunnerResolver(config) {
    _classCallCheck(this, BaseWorkerRunnerResolver);

    this.runnerEnvironments = new Set();
    this.RunnerEnvironmentConstructor = RunnerEnvironment; // TODO replace to factory

    this.errorSerializer = this.buildWorkerErrorSerializer();
    this.newConnectionHandler = this.handleNewConnection.bind(this);
    this.connectEnvironment = new ConnectEnvironment({
      destroyErrorSerializer: this.destroyErrorSerializer.bind(this),
      actionsHandler: this.handleAction.bind(this),
      destroyHandler: this.handleDestroy.bind(this)
    });
    this.runnersListController = new RunnersListController(config);
    this.bridgeFactory = config.bridgeFactory || this.defaultBridgeFactory;
  }

  _createClass(BaseWorkerRunnerResolver, [{
    key: "run",
    value: function run() {
      this.resolverBridge = this.bridgeFactory({
        newConnectionHandler: this.newConnectionHandler
      });
    }
  }, {
    key: "handleAction",
    value: function handleAction(action) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
        var runnerName, errorAction;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.t0 = action.type;
                _context32.next = _context32.t0 === NodeResolverAction.INIT_RUNNER ? 3 : 14;
                break;

              case 3:
                _context32.prev = 3;
                _context32.next = 6;
                return this.initRunnerInstance(action);

              case 6:
                return _context32.abrupt("return", _context32.sent);

              case 9:
                _context32.prev = 9;
                _context32.t1 = _context32["catch"](3);

                try {
                  runnerName = this.runnersListController.getRunner(action.token).name;
                } catch (
                /** Only try get name */
                _a) {
                  /** Only try get name */
                }

                errorAction = Object.assign({
                  type: WorkerResolverAction.RUNNER_INIT_ERROR
                }, this.errorSerializer.serialize(_context32.t1, new RunnerNotFound({
                  message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_INIT_ERROR({
                    token: action.token,
                    runnerName: runnerName
                  }),
                  stack: _context32.t1 === null || _context32.t1 === void 0 ? void 0 : _context32.t1.stack
                })));
                return _context32.abrupt("return", errorAction);

              case 14:
                throw new _worker_runner_core__WEBPACK_IMPORTED_MODULE_27__["WorkerRunnerUnexpectedError"]({
                  message: 'Unexpected Action type for Worker Runner Resolver'
                });

              case 15:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this, [[3, 9]]);
      }));
    }
  }, {
    key: "deserializeArguments",
    value: function deserializeArguments(args) {
      var result = {
        args: new Array(),
        controllers: new Array()
      };

      var _iterator7 = _createForOfIteratorHelper(args),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var argument = _step7.value;

          switch (argument.type) {
            case RunnerArgumentType.RUNNER_INSTANCE:
              {
                var controller = this.runnerControllerPartFactory({
                  port: argument.port,
                  token: argument.token
                });
                result.controllers.push(controller);
                result.args.push(controller.resolvedRunner);
                break;
              }

            default:
              result.args.push(argument.data);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return result;
    }
  }, {
    key: "handleDestroy",
    value: function handleDestroy() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
        var _this18 = this;

        var destroyErrors, destroying$, _iterator8, _step8, _loop2;

        return regeneratorRuntime.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                destroyErrors = new Array();
                destroying$ = new Array();
                _iterator8 = _createForOfIteratorHelper(this.runnerEnvironments);

                try {
                  _loop2 = function _loop2() {
                    var runnerEnvironment = _step8.value;
                    destroying$.push(runnerEnvironment.handleDestroy()["catch"](function (error) {
                      destroyErrors.push(_this18.errorSerializer.serialize(error, new RunnerDestroyError({
                        message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_DESTROY_ERROR({
                          token: runnerEnvironment.token,
                          runnerName: runnerEnvironment.runnerName
                        }),
                        stack: error === null || error === void 0 ? void 0 : error.stack
                      })));
                    }));
                  };

                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    _loop2();
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }

                _context33.next = 6;
                return Promise.all(destroying$);

              case 6:
                this.runnerEnvironments.clear();

                if (!(destroyErrors.length > 0)) {
                  _context33.next = 9;
                  break;
                }

                throw new WorkerDestroyError({
                  originalErrors: destroyErrors
                });

              case 9:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
    }
  }, {
    key: "wrapRunner",
    value: function wrapRunner(runner) {
      var _this19 = this;

      var messageChanel = new MessageChannel();
      var runnerEnvironment = new this.RunnerEnvironmentConstructor({
        token: this.runnersListController.getRunnerTokenByInstance(runner),
        runner: runner,
        port: messageChanel.port1,
        workerRunnerResolver: this,
        errorSerializer: this.errorSerializer,
        onDestroyed: function onDestroyed() {
          return _this19.runnerEnvironments["delete"](runnerEnvironment);
        }
      });
      this.runnerEnvironments.add(runnerEnvironment);
      return messageChanel.port2;
    }
  }, {
    key: "buildWorkerErrorSerializer",
    value: function buildWorkerErrorSerializer() {
      return WORKER_RUNNER_ERROR_SERIALIZER;
    }
  }, {
    key: "runnerControllerPartFactory",
    value: function runnerControllerPartFactory(config) {
      var runnerBridgeConstructor = this.runnersListController.getRunnerBridgeConstructor(config.token);
      var originalRunnerName = this.runnersListController.getRunner(config.token).name;
      return this.runnerControllerFactory(Object.assign(Object.assign({}, config), {
        runnerBridgeConstructor: runnerBridgeConstructor,
        originalRunnerName: originalRunnerName,
        runnerControllerPartFactory: this.runnerControllerPartFactory.bind(this)
      }));
    }
  }, {
    key: "runnerControllerFactory",
    value: function runnerControllerFactory(config) {
      return new RunnerController(config);
    }
  }, {
    key: "defaultBridgeFactory",
    value: function defaultBridgeFactory(config) {
      return new WorkerResolverBridge(config);
    }
  }, {
    key: "handleNewConnection",
    value: function handleNewConnection(port) {
      this.connectEnvironment.addPort(port);
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }, {
    key: "destroyErrorSerializer",
    value: function destroyErrorSerializer(error) {
      return this.errorSerializer.serialize(error, new WorkerDestroyError({
        stack: error === null || error === void 0 ? void 0 : error.stack
      }));
    }
  }, {
    key: "initRunnerInstance",
    value: function initRunnerInstance(action) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
        var _this20 = this;

        var runnerConstructor, messageChanel, deserializeArgumentsData, runner, errorAction, runnerEnvironment, responseAction;
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                runnerConstructor = this.runnersListController.getRunner(action.token);
                messageChanel = new MessageChannel();
                deserializeArgumentsData = this.deserializeArguments(action.args);
                _context34.prev = 3;
                runner = _construct(runnerConstructor, _toConsumableArray(deserializeArgumentsData.args));
                _context34.next = 13;
                break;

              case 7:
                _context34.prev = 7;
                _context34.t0 = _context34["catch"](3);
                errorAction = Object.assign({
                  type: WorkerResolverAction.RUNNER_INIT_ERROR
                }, this.errorSerializer.serialize(_context34.t0, new RunnerInitError({
                  message: WORKER_RUNNER_ERROR_MESSAGES.RUNNER_INIT_ERROR({
                    token: action.token,
                    runnerName: runnerConstructor.name
                  }),
                  stack: _context34.t0 === null || _context34.t0 === void 0 ? void 0 : _context34.t0.stack
                })));
                _context34.next = 12;
                return Promise.all(deserializeArgumentsData.controllers.map(function (controller) {
                  return controller.disconnect();
                }));

              case 12:
                return _context34.abrupt("return", errorAction);

              case 13:
                runnerEnvironment = new this.RunnerEnvironmentConstructor({
                  token: action.token,
                  runner: runner,
                  port: messageChanel.port1,
                  workerRunnerResolver: this,
                  errorSerializer: this.errorSerializer,
                  onDestroyed: function onDestroyed() {
                    return _this20.runnerEnvironments["delete"](runnerEnvironment);
                  }
                });
                this.runnerEnvironments.add(runnerEnvironment);
                runnerEnvironment.addConnectedControllers(deserializeArgumentsData.controllers);
                responseAction = {
                  type: WorkerResolverAction.RUNNER_INITED,
                  port: messageChanel.port2,
                  transfer: [messageChanel.port2]
                };
                return _context34.abrupt("return", responseAction);

              case 18:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this, [[3, 7]]);
      }));
    }
  }]);

  return BaseWorkerRunnerResolver;
}();



/***/ }),

/***/ "./node_modules/@worker-runner/promise/esm/promise.js":
/*!************************************************************!*\
  !*** ./node_modules/@worker-runner/promise/esm/promise.js ***!
  \************************************************************/
/*! exports provided: LocalRunnerResolver, NodeRunnerResolver, RunnerResolver, WorkerRunnerResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalRunnerResolver", function() { return LocalRunnerResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeRunnerResolver", function() { return NodeRunnerResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerResolver", function() { return RunnerResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerRunnerResolver", function() { return WorkerRunnerResolver; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _worker_runner_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @worker-runner/core */ "./node_modules/@worker-runner/core/esm/core.js");















function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var NodeRunnerResolver = /*#__PURE__*/function (_NodeRunnerResolverBa) {
  _inherits(NodeRunnerResolver, _NodeRunnerResolverBa);

  var _super = _createSuper(NodeRunnerResolver);

  function NodeRunnerResolver() {
    _classCallCheck(this, NodeRunnerResolver);

    return _super.apply(this, arguments);
  }

  return NodeRunnerResolver;
}(_worker_runner_core__WEBPACK_IMPORTED_MODULE_14__["NodeRunnerResolverBase"]);

var WorkerRunnerResolver = /*#__PURE__*/function (_BaseWorkerRunnerReso) {
  _inherits(WorkerRunnerResolver, _BaseWorkerRunnerReso);

  var _super2 = _createSuper(WorkerRunnerResolver);

  function WorkerRunnerResolver() {
    _classCallCheck(this, WorkerRunnerResolver);

    return _super2.apply(this, arguments);
  }

  return WorkerRunnerResolver;
}(_worker_runner_core__WEBPACK_IMPORTED_MODULE_14__["BaseWorkerRunnerResolver"]);

var LocalRunnerResolver = /*#__PURE__*/function (_NodeRunnerResolver) {
  _inherits(LocalRunnerResolver, _NodeRunnerResolver);

  var _super3 = _createSuper(LocalRunnerResolver);

  function LocalRunnerResolver() {
    var _this;

    _classCallCheck(this, LocalRunnerResolver);

    _this = _super3.apply(this, arguments);
    _this.WorkerResolverConstructor = WorkerRunnerResolver;
    return _this;
  }

  _createClass(LocalRunnerResolver, [{
    key: "buildResolverBridge",
    value: function buildResolverBridge() {
      var _this2 = this;

      this.resolverBridge = new _worker_runner_core__WEBPACK_IMPORTED_MODULE_14__["LocalResolverBridge"]({
        workerRunnerResolverFactory: function workerRunnerResolverFactory(config) {
          return new WorkerRunnerResolver(Object.assign(Object.assign({}, config), {
            runners: _this2.runnersListController.getRunnerList()
          }));
        }
      });
    }
  }]);

  return LocalRunnerResolver;
}(NodeRunnerResolver);
/** @deprecated use **NodeRunnerResolver** and **WorkerRunnerResolver** */


var RunnerResolver = /*#__PURE__*/function (_NodeRunnerResolver2) {
  _inherits(RunnerResolver, _NodeRunnerResolver2);

  var _super4 = _createSuper(RunnerResolver);

  /** @deprecated use **NodeRunnerResolver** and **WorkerRunnerResolver** */
  function RunnerResolver(config) {
    var _this3;

    _classCallCheck(this, RunnerResolver);

    _this3 = _super4.call(this, config);
    _this3.workerRunnerResolver = new WorkerRunnerResolver(config);
    return _this3;
  }

  _createClass(RunnerResolver, [{
    key: "runInWorker",
    value: function runInWorker() {
      this.workerRunnerResolver.run();
    }
  }]);

  return RunnerResolver;
}(NodeRunnerResolver);



/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-names.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js").f;

var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: nativeGetOwnPropertyNames
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "./node_modules/core-js/modules/es.object.set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/scripts/common.ts":
/*!*******************************!*\
  !*** ./src/scripts/common.ts ***!
  \*******************************/
/*! exports provided: runners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runners", function() { return runners; });
/* harmony import */ var _library_runner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-runner */ "./src/scripts/library-runner.ts");

var runners = [_library_runner__WEBPACK_IMPORTED_MODULE_0__["LibraryRunner"]];

/***/ }),

/***/ "./src/scripts/library-runner.ts":
/*!***************************************!*\
  !*** ./src/scripts/library-runner.ts ***!
  \***************************************/
/*! exports provided: LibraryRunner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryRunner", function() { return LibraryRunner; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__);









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var WORKER_LOG_STYLE = 'background-color: #FFCC33; padding: 4px; border-radius: 3px; color: black;';
var BOOK_LOG_STYLE = 'font-weight: bold;';
var SECONDS_LOG_STYLE = BOOK_LOG_STYLE;
var LibraryRunner = /*#__PURE__*/function () {
  function LibraryRunner() {
    var books = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, LibraryRunner);

    this.books = books;
  }

  _createClass(LibraryRunner, [{
    key: "addBook",
    value: function addBook(book) {
      this.books.push(book);
      console.log("%cWorker:%c Book %c\"".concat(book, "\"%c added to library"), WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '');
    }
  }, {
    key: "checkBook",
    value: function checkBook(book) {
      var isExist = this.books.indexOf(book) !== -1;
      console.log("%cWorker:%c Book %c\"".concat(book, "\"%c is exist in the library: "), WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '', isExist);
      return isExist;
    }
  }, {
    key: "reserveBook",
    value: function reserveBook(book, seconds) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("%cWorker:%c Book %c\"".concat(book, "\"%c reserved for %c").concat(seconds, "%c seconds"), WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '', SECONDS_LOG_STYLE, '');
                this.books = this.books.filter(function (libraryBook) {
                  return libraryBook !== book;
                });
                _context.next = 4;
                return new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve();
                  }, seconds * 1000);
                });

              case 4:
                this.books.push(book);
                console.log("%cWorker:%c Reservation for book %c\"".concat(book, "\"%c completed after %c").concat(seconds, "%c seconds"), WORKER_LOG_STYLE, '', BOOK_LOG_STYLE, '', SECONDS_LOG_STYLE, '');
                return _context.abrupt("return", book);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }]);

  return LibraryRunner;
}();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3V0aWxzL3Byb21pc2UtbGlzdC5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL2Nvbm5lY3QvZW52aXJvbm1lbnQvY29ubmVjdC1lbnZpcm9ubWVudC5hY3Rpb25zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9tb2R1bGVzL2NvcmUvY29ubmVjdC9jb250cm9sbGVyL2Nvbm5lY3QtY29udHJvbGxlci5hY3Rpb25zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9tb2R1bGVzL2NvcmUvY29ubmVjdC9jb250cm9sbGVyL2Nvbm5lY3QuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL2Vycm9ycy9lcnJvci1jb2RlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9tb2R1bGVzL2NvcmUvZXJyb3JzL2Vycm9yLW1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL21vZHVsZXMvY29yZS9lcnJvcnMvd29ya2VyLXJ1bm5lci1lcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL2Vycm9ycy9ydW5uZXItZXJyb3JzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9tb2R1bGVzL2NvcmUvY29ubmVjdC9lbnZpcm9ubWVudC9jb25uZWN0LmVudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9tb2R1bGVzL2NvcmUvZXJyb3JzL2Vycm9yLWNvZGUtbWFwLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9tb2R1bGVzL2NvcmUvZXJyb3JzL2Vycm9yLnNlcmlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL21vZHVsZXMvY29yZS9yZXNvbHZlci9ub2RlL25vZGUtcmVzb2x2ZXIuYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3J1bm5lci9lbnZpcm9ubWVudC9ydW5uZXItZW52aXJvbm1lbnQuYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3J1bm5lci9jb250cm9sbGVyL3J1bm5lci1jb250cm9sbGVyLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL21vZHVsZXMvY29yZS9ydW5uZXIvY29udHJvbGxlci9ydW5uZXIuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3J1bm5lci9ydW5uZXItYnJpZGdlL3J1bm5lci5icmlkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL21vZHVsZXMvY29yZS9ydW5uZXIvcnVubmVyLWJyaWRnZS9ydW5uZXJzLWxpc3QuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3R5cGVzL3J1bm5lci1hcmd1bWVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3V0aWxzL3RyYW5zZmVyLXJ1bm5lci1kYXRhLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9tb2R1bGVzL2NvcmUvcmVzb2x2ZXIvcmVzb2x2ZXItYnJpZGdlL3dvcmtlci93b3JrZXItcmVzb2x2ZXItYnJpZGdlLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL21vZHVsZXMvY29yZS9yZXNvbHZlci9yZXNvbHZlci1icmlkZ2Uvbm9kZS9yZXNvbHZlci1icmlkZ2UuYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3Jlc29sdmVyL3Jlc29sdmVyLWJyaWRnZS9ub2RlL3Jlc29sdmVyLmJyaWRnZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3Jlc29sdmVyL3dvcmtlci93b3JrZXItcmVzb2x2ZXIuYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3Jlc29sdmVyL25vZGUvbm9kZS1ydW5uZXIucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL21vZHVsZXMvY29yZS9yZXNvbHZlci9yZXNvbHZlci1icmlkZ2Uvd29ya2VyL2xvY2FsLXJlc29sdmVyLmJyaWRnZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3Jlc29sdmVyL3Jlc29sdmVyLWJyaWRnZS9ub2RlL2xvY2FsLXJlc29sdmVyLmJyaWRnZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9jb3JlL3J1bm5lci9lbnZpcm9ubWVudC9ydW5uZXIuZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL21vZHVsZXMvY29yZS9yZXNvbHZlci9yZXNvbHZlci1icmlkZ2Uvd29ya2VyL3dvcmtlci1yZXNvbHZlci5icmlkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL21vZHVsZXMvY29yZS9yZXNvbHZlci93b3JrZXIvd29ya2VyLXJ1bm5lci5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9wcm9taXNlL3Jlc29sdmVycy9ub2RlLXJ1bm5lci5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9wcm9taXNlL3Jlc29sdmVycy93b3JrZXItcnVubmVyLnJlc29sdmVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9tb2R1bGVzL3Byb21pc2UvcmVzb2x2ZXJzL2xvY2FsLXJ1bm5lci5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbW9kdWxlcy9wcm9taXNlL3Jlc29sdmVycy9ydW5uZXIucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29sbGVjdGlvbi1zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mcmVlemluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1wcm9taXNlLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWZsZWN0LmNvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tbW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xpYnJhcnktcnVubmVyLnRzIl0sIm5hbWVzIjpbIkNvbm5lY3Rpb25XYXNDbG9zZWRFcnJvciIsIldvcmtlclJ1bm5lclVuZXhwZWN0ZWRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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b3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElQcm9taXNlTWV0aG9kczxUID0gdW5rbm93biwgRSA9IHVua25vd24+IHtcbiAgICByZXNvbHZlOiAoZGF0YTogVCkgPT4gdm9pZDtcbiAgICByZWplY3Q6IChlcnJvcjogRSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFByb21pc2VMaXN0UmVzb2x2ZXI8VCwgRSA9IHVua25vd24+IHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJvbWlzZXMgPSBuZXcgTWFwPG51bWJlciwgSVByb21pc2VNZXRob2RzPFQsICBFPj4oKTtcblxuICAgIHB1YmxpYyBwcm9taXNlPFIgZXh0ZW5kcyBUID0gVD4oaWQ6IG51bWJlcik6IFByb21pc2U8Uj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gdGhpcy5wcm9taXNlcy5zZXQoXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHtyZXNvbHZlOiByZXNvbHZlIGFzIChkYXRhOiBUKSA9PiB2b2lkLCByZWplY3R9KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzb2x2ZTxSIGV4dGVuZHMgVCA9IFQ+KGlkOiBudW1iZXIsIGRhdGE6IFIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSQgPSB0aGlzLnByb21pc2VzLmdldChpZCk7XG4gICAgICAgIGlmIChwcm9taXNlJCkge1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlcy5kZWxldGUoaWQpO1xuICAgICAgICAgICAgcHJvbWlzZSQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWplY3Q8UiBleHRlbmRzIEUgPSBFPihpZDogbnVtYmVyLCBlcnJvcjogUik6IHZvaWQge1xuICAgICAgICBjb25zdCBwcm9taXNlJCA9IHRoaXMucHJvbWlzZXMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKHByb21pc2UkKSB7XG4gICAgICAgICAgICB0aGlzLnByb21pc2VzLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICBwcm9taXNlJC5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZvcmdldChpZDogbnVtYmVyKTogSVByb21pc2VNZXRob2RzPFQsICBFPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IHByb21pc2UkID0gdGhpcy5wcm9taXNlcy5nZXQoaWQpO1xuICAgICAgICB0aGlzLnByb21pc2VzLmRlbGV0ZShpZCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlJDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYW5Qcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Jhbi1wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBKc29uT2JqZWN0LCBUcmFuc2ZlcmFibGVKc29uT2JqZWN0IH0gZnJvbSBcIi4uLy4uL3R5cGVzL2pzb24tb2JqZWN0XCI7XG5cbmV4cG9ydCBlbnVtIENvbm5lY3RFbnZpcm9ubWVudEFjdGlvbiB7XG4gICAgRElTQ09OTkVDVEVEID0gJ0RJU0NPTk5FQ1RFRCcsXG4gICAgREVTVFJPWUVEX0JZX1JFUVVFU1QgPSAnREVTVFJPWUVEX0JZX1JFUVVFU1QnLFxuICAgIERFU1RST1lFRF9XSVRIX0VSUk9SID0gJ0RFU1RST1lFRF9XSVRIX0VSUk9SJyxcbiAgICBERVNUUk9ZRURfQllfRk9SQ0UgPSAnREVTVFJPWUVEX0JZX0ZPUkNFJyxcbn1cblxuZXhwb3J0IHR5cGUgSUNvbm5lY3RFbnZpcm9ubWVudEFjdGlvbiA9IHtcbiAgICBpZDogbnVtYmVyO1xufSAmIFBhcnRpYWw8UmVjb3JkPHN0cmluZywgVHJhbnNmZXJhYmxlSnNvbk9iamVjdD4+XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbm5lY3RFbnZpcm9ubWVudERpc2Nvbm5lY3RlZEFjdGlvbiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0eXBlOiBDb25uZWN0RW52aXJvbm1lbnRBY3Rpb24uRElTQ09OTkVDVEVEO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25uZWN0RW52aXJvbm1lbnREZXN0cm95ZWRCeVJlcXVlc3RBY3Rpb24ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdHlwZTogQ29ubmVjdEVudmlyb25tZW50QWN0aW9uLkRFU1RST1lFRF9CWV9SRVFVRVNUO1xufVxuXG5leHBvcnQgdHlwZSBJQ29ubmVjdEVudmlyb25tZW50RGVzdHJveWVkV2l0aEVycm9yQWN0aW9uID0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdHlwZTogQ29ubmVjdEVudmlyb25tZW50QWN0aW9uLkRFU1RST1lFRF9XSVRIX0VSUk9SO1xuICAgIGVycm9yOiBSZWNvcmQ8c3RyaW5nLCBKc29uT2JqZWN0Pixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29ubmVjdEVudmlyb25tZW50RGVzdHJveWVkQnlGb3JjZUFjdGlvbiB7XG4gICAgdHlwZTogQ29ubmVjdEVudmlyb25tZW50QWN0aW9uLkRFU1RST1lFRF9CWV9GT1JDRTtcbn1cblxuZXhwb3J0IHR5cGUgSUNvbm5lY3RFbnZpcm9ubWVudEFjdGlvbnMgPVxuICAgIHwgSUNvbm5lY3RFbnZpcm9ubWVudERpc2Nvbm5lY3RlZEFjdGlvblxuICAgIHwgSUNvbm5lY3RFbnZpcm9ubWVudERlc3Ryb3llZEJ5UmVxdWVzdEFjdGlvblxuICAgIHwgSUNvbm5lY3RFbnZpcm9ubWVudERlc3Ryb3llZFdpdGhFcnJvckFjdGlvblxuICAgIHwgSUNvbm5lY3RFbnZpcm9ubWVudERlc3Ryb3llZEJ5Rm9yY2VBY3Rpb247XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvc3NpYmxlQ29ubmVjdEVudmlyb25tZW50QWN0aW9uUHJvcGVydGllcyB7XG4gICAgdHJhbnNmZXI/OiBUcmFuc2ZlcmFibGVbXVxufVxuXG50eXBlIElCYW5uZWRDb25uZWN0RW52aXJvbm1lbnRBY3Rpb25Qcm9wZXJ0aWVzXG4gICAgPSBPbWl0PElDb25uZWN0RW52aXJvbm1lbnRBY3Rpb25zLCBrZXlvZiBJUG9zc2libGVDb25uZWN0RW52aXJvbm1lbnRBY3Rpb25Qcm9wZXJ0aWVzPlxuICAgICYge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBpZDogYW55O1xuICAgIH1cblxuXG5leHBvcnQgdHlwZSBJQ29ubmVjdEVudmlyb25tZW50QWN0aW9uUHJvcGVydGllc1JlcXVpcmVtZW50czxUPiA9IFxuICAgIEJhblByb3BlcnRpZXM8VCwgSUJhbm5lZENvbm5lY3RFbnZpcm9ubWVudEFjdGlvblByb3BlcnRpZXM+ICYgSVBvc3NpYmxlQ29ubmVjdEVudmlyb25tZW50QWN0aW9uUHJvcGVydGllcztcbiIsImltcG9ydCB7IEJhblByb3BlcnRpZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvYmFuLXByb3BlcnRpZXNcIjtcbmltcG9ydCB7IFRyYW5zZmVyYWJsZUpzb25PYmplY3QgfSBmcm9tIFwiLi4vLi4vdHlwZXMvanNvbi1vYmplY3RcIjtcblxuZXhwb3J0IGVudW0gQ29ubmVjdENvbnRyb2xsZXJBY3Rpb24ge1xuICAgIElOVEVSUlVQVF9MSVNURU5JTkcgPSAnSU5URVJSVVBUX0xJU1RFTklORycsXG4gICAgRElTQ09OTkVDVCA9ICdESVNDT05ORUNUJyxcbiAgICBERVNUUk9ZID0gJ0RFU1RST1knLFxufVxuXG5leHBvcnQgdHlwZSBJQ29ubmVjdENvbnRyb2xsZXJBY3Rpb24gPSB7XG4gICAgaWQ6IG51bWJlcjtcbn0gJiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIFRyYW5zZmVyYWJsZUpzb25PYmplY3Q+PlxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25uZWN0Q29udHJvbGxlckludGVycnVwdExpc3RlbmluZ0FjdGlvbiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0eXBlOiBDb25uZWN0Q29udHJvbGxlckFjdGlvbi5JTlRFUlJVUFRfTElTVEVOSU5HO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25uZWN0Q29udHJvbGxlckRpc2Nvbm5lY3RBY3Rpb24ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdHlwZTogQ29ubmVjdENvbnRyb2xsZXJBY3Rpb24uRElTQ09OTkVDVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29ubmVjdENvbnRyb2xsZXJEZXN0cm95QWN0aW9uIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHR5cGU6IENvbm5lY3RDb250cm9sbGVyQWN0aW9uLkRFU1RST1k7XG59XG5cbmV4cG9ydCB0eXBlIElDb25uZWN0Q29udHJvbGxlckFjdGlvbnMgPVxuICAgIHwgSUNvbm5lY3RDb250cm9sbGVySW50ZXJydXB0TGlzdGVuaW5nQWN0aW9uXG4gICAgfCBJQ29ubmVjdENvbnRyb2xsZXJEaXNjb25uZWN0QWN0aW9uXG4gICAgfCBJQ29ubmVjdENvbnRyb2xsZXJEZXN0cm95QWN0aW9uO1xuXG50eXBlIElCYW5uZWRDb25uZWN0Q29udHJvbGxlckFjdGlvblByb3BlcnRpZXMgPSBJQ29ubmVjdENvbnRyb2xsZXJBY3Rpb25zICYge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgaWQ6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUG9zc2libGVDb25uZWN0Q29udHJvbGxlckFjdGlvblByb3BlcnRpZXMge1xuICAgIHRyYW5zZmVyPzogVHJhbnNmZXJhYmxlW11cbn1cblxuZXhwb3J0IHR5cGUgSUNvbm5lY3RDb250cm9sbGVyQWN0aW9uUHJvcGVydGllc1JlcXVpcmVtZW50czxUPiA9IFxuICAgIEJhblByb3BlcnRpZXM8VCwgSUJhbm5lZENvbm5lY3RDb250cm9sbGVyQWN0aW9uUHJvcGVydGllcz4gJiBJUG9zc2libGVDb25uZWN0Q29udHJvbGxlckFjdGlvblByb3BlcnRpZXM7XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uV2FzQ2xvc2VkRXJyb3IgfSBmcm9tIFwiQHdvcmtlci1ydW5uZXIvY29yZVwiO1xuaW1wb3J0IHsgUHJvbWlzZUxpc3RSZXNvbHZlciB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9taXNlLWxpc3QucmVzb2x2ZXJcIjtcbmltcG9ydCB7IENvbm5lY3RFbnZpcm9ubWVudEFjdGlvbiwgSUNvbm5lY3RFbnZpcm9ubWVudEFjdGlvbiwgSUNvbm5lY3RFbnZpcm9ubWVudEFjdGlvblByb3BlcnRpZXNSZXF1aXJlbWVudHMsIElDb25uZWN0RW52aXJvbm1lbnRBY3Rpb25zLCBJQ29ubmVjdEVudmlyb25tZW50RGVzdHJveWVkV2l0aEVycm9yQWN0aW9uIH0gZnJvbSBcIi4uL2Vudmlyb25tZW50L2Nvbm5lY3QtZW52aXJvbm1lbnQuYWN0aW9uc1wiO1xuaW1wb3J0IHsgSUNvbm5lY3RDb250cm9sbGVyRXJyb3JEZXNlcmlhbGl6ZXIgfSBmcm9tIFwiLi9jb25uZWN0LWNvbnRyb2xsZXItZXJyb3ItZGVzZXJpYWxpemVyXCI7XG5pbXBvcnQgeyBDb25uZWN0Q29udHJvbGxlckFjdGlvbiwgSUNvbm5lY3RDb250cm9sbGVyQWN0aW9uLCBJQ29ubmVjdENvbnRyb2xsZXJBY3Rpb25Qcm9wZXJ0aWVzUmVxdWlyZW1lbnRzLCBJQ29ubmVjdENvbnRyb2xsZXJEZXN0cm95QWN0aW9uLCBJQ29ubmVjdENvbnRyb2xsZXJEaXNjb25uZWN0QWN0aW9uLCBJQ29ubmVjdENvbnRyb2xsZXJJbnRlcnJ1cHRMaXN0ZW5pbmdBY3Rpb24sICB9IGZyb20gXCIuL2Nvbm5lY3QtY29udHJvbGxlci5hY3Rpb25zXCI7XG5cbnR5cGUgRGlzY29ubmVjdEVycm9yRmFjdG9yeSA9IChlcnJvcjogQ29ubmVjdGlvbldhc0Nsb3NlZEVycm9yKSA9PiBDb25uZWN0aW9uV2FzQ2xvc2VkRXJyb3I7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbm5lY3RDb250cm9sbGVyQ29uZmlnIHtcbiAgICBwb3J0OiBNZXNzYWdlUG9ydCxcbiAgICBmb3JjZURlc3Ryb3lIYW5kbGVyPzogKCkgPT4gdm9pZDtcbiAgICBkZXN0cm95RXJyb3JEZXNlcmlhbGl6ZXI6IElDb25uZWN0Q29udHJvbGxlckVycm9yRGVzZXJpYWxpemVyO1xuICAgIGRpc2Nvbm5lY3RFcnJvckZhY3Rvcnk/OiBEaXNjb25uZWN0RXJyb3JGYWN0b3J5O1xufVxuXG5leHBvcnQgY2xhc3MgQ29ubmVjdENvbnRyb2xsZXIge1xuICAgIHB1YmxpYyByZWFkb25seSBwb3J0OiBNZXNzYWdlUG9ydDtcbiAgICBwdWJsaWMgZGlzY29ubmVjdFN0YXR1cz86IENvbm5lY3Rpb25XYXNDbG9zZWRFcnJvcjtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBwcm9taXNlTGlzdFJlc29sdmVyID0gbmV3IFByb21pc2VMaXN0UmVzb2x2ZXI8SUNvbm5lY3RFbnZpcm9ubWVudEFjdGlvbj4oKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGlzY29ubmVjdEVycm9yRmFjdG9yeTogRGlzY29ubmVjdEVycm9yRmFjdG9yeTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZUhhbmRsZXIgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9yY2VEZXN0cm95SGFuZGxlcj86ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95RXJyb3JEZXNlcmlhbGl6ZXI6IElDb25uZWN0Q29udHJvbGxlckVycm9yRGVzZXJpYWxpemVyO1xuICAgIHByaXZhdGUgbGFzdEFjdGlvbklkID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUNvbm5lY3RDb250cm9sbGVyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuZm9yY2VEZXN0cm95SGFuZGxlciA9IGNvbmZpZy5mb3JjZURlc3Ryb3lIYW5kbGVyO1xuICAgICAgICB0aGlzLmRlc3Ryb3lFcnJvckRlc2VyaWFsaXplciA9IGNvbmZpZy5kZXN0cm95RXJyb3JEZXNlcmlhbGl6ZXI7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdEVycm9yRmFjdG9yeSA9IGNvbmZpZy5kaXNjb25uZWN0RXJyb3JGYWN0b3J5IHx8IHRoaXMuZGVmYXVsdERpc2Nvbm5lY3RFcnJvckZhY3Rvcnk7XG4gICAgICAgIHRoaXMucG9ydCA9IGNvbmZpZy5wb3J0O1xuICAgICAgICB0aGlzLnBvcnQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubWVzc2FnZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLnBvcnQuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGVzdHJveUFjdGlvbjogSUNvbm5lY3RDb250cm9sbGVyRGVzdHJveUFjdGlvbiA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnJlc29sdmVBY3Rpb25JZCgpLFxuICAgICAgICAgICAgdHlwZTogQ29ubmVjdENvbnRyb2xsZXJBY3Rpb24uREVTVFJPWSxcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNlbmRBY3Rpb24oZGVzdHJveUFjdGlvbiBhcyBhbnkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5zdG9wTGlzdGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGlzY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGlzY29ubmVjdEFjdGlvbjogT21pdDxJQ29ubmVjdENvbnRyb2xsZXJEaXNjb25uZWN0QWN0aW9uLCAnaWQnPiA9IHtcbiAgICAgICAgICAgIHR5cGU6IENvbm5lY3RDb250cm9sbGVyQWN0aW9uLkRJU0NPTk5FQ1QsXG4gICAgICAgIH07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZEFjdGlvbihkaXNjb25uZWN0QWN0aW9uIGFzIGFueSk7XG4gICAgICAgIHRoaXMuc3RvcExpc3RlbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kQWN0aW9uPFxuICAgICAgICBPIGV4dGVuZHMgSUNvbm5lY3RDb250cm9sbGVyQWN0aW9uUHJvcGVydGllc1JlcXVpcmVtZW50czxPPixcbiAgICAgICAgSSBleHRlbmRzIElDb25uZWN0RW52aXJvbm1lbnRBY3Rpb25Qcm9wZXJ0aWVzUmVxdWlyZW1lbnRzPEk+LFxuICAgID4oYWN0aW9uOiBPKTogUHJvbWlzZTxJPiB7XG4gICAgICAgIGlmICh0aGlzLmRpc2Nvbm5lY3RTdGF0dXMpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZGlzY29ubmVjdFN0YXR1cztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25JZCA9IHRoaXMucmVzb2x2ZUFjdGlvbklkKCk7XG4gICAgICAgIGNvbnN0IHt0cmFuc2ZlciwgLi4uYWN0aW9uV2l0aG91dFRyYW5zZmVyfSA9IGFjdGlvbjsgXG4gICAgICAgIGNvbnN0IGFjdGlvbldpZHRoSWQ6IElDb25uZWN0Q29udHJvbGxlckFjdGlvbiAmIE8gPSB7XG4gICAgICAgICAgICAuLi5hY3Rpb25XaXRob3V0VHJhbnNmZXIgYXMgTyxcbiAgICAgICAgICAgIGlkOiBhY3Rpb25JZCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UkID0gdGhpcy5wcm9taXNlTGlzdFJlc29sdmVyLnByb21pc2UoYWN0aW9uSWQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2UoYWN0aW9uV2lkdGhJZCwgdHJhbnNmZXIhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlJCBhcyB1bmtub3duIGFzIFByb21pc2U8ST47XG4gICAgfVxuXG4gICAgLyoqIFN0b3AgbGlzdGVuaW5nIG9uIHRoZSBwb3J0IHdpdGhvdXQgbm90aWZ5aW5nICpDb25uZWN0RW52aXJvbm1lbnQqICovXG4gICAgcHVibGljIHN0b3BMaXN0ZW4oaXNDbG9zZVBvcnQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdFN0YXR1cyB8fD0gdGhpcy5kaXNjb25uZWN0RXJyb3JGYWN0b3J5KG5ldyAgQ29ubmVjdGlvbldhc0Nsb3NlZEVycm9yKCkpO1xuICAgICAgICB0aGlzLnBvcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubWVzc2FnZUhhbmRsZXIpO1xuICAgICAgICBpZiAoaXNDbG9zZVBvcnQpIHtcbiAgICAgICAgICAgIHRoaXMucG9ydC5jbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJydXB0TGlzdGVuaW5nQWN0aW9uOiBJQ29ubmVjdENvbnRyb2xsZXJJbnRlcnJ1cHRMaXN0ZW5pbmdBY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMucmVzb2x2ZUFjdGlvbklkKCksXG4gICAgICAgICAgICAgICAgdHlwZTogQ29ubmVjdENvbnRyb2xsZXJBY3Rpb24uSU5URVJSVVBUX0xJU1RFTklORyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZShpbnRlcnJ1cHRMaXN0ZW5pbmdBY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2VzJCA9IHRoaXMucHJvbWlzZUxpc3RSZXNvbHZlci5wcm9taXNlcy52YWx1ZXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzJCkge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QodGhpcy5kaXNjb25uZWN0U3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb21pc2VMaXN0UmVzb2x2ZXIucHJvbWlzZXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFuZGxlQWN0aW9uKGFjdGlvbldpdGhJZDogSUNvbm5lY3RFbnZpcm9ubWVudEFjdGlvbiB8IElDb25uZWN0RW52aXJvbm1lbnRBY3Rpb25zKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoKGFjdGlvbldpdGhJZCBhcyBJQ29ubmVjdEVudmlyb25tZW50QWN0aW9ucykudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDb25uZWN0RW52aXJvbm1lbnRBY3Rpb24uREVTVFJPWUVEX0JZX0ZPUkNFOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcExpc3RlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VEZXN0cm95SGFuZGxlcj8uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbm5lY3RFbnZpcm9ubWVudEFjdGlvbi5ERVNUUk9ZRURfV0lUSF9FUlJPUjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5kZXN0cm95RXJyb3JEZXNlcmlhbGl6ZXIoXG4gICAgICAgICAgICAgICAgICAgIChhY3Rpb25XaXRoSWQgYXMgSUNvbm5lY3RFbnZpcm9ubWVudERlc3Ryb3llZFdpdGhFcnJvckFjdGlvbikuZXJyb3JcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZUxpc3RSZXNvbHZlci5yZWplY3QoKGFjdGlvbldpdGhJZCBhcyBJQ29ubmVjdEVudmlyb25tZW50QWN0aW9uKS5pZCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgY29uc3Qge2lkLCAuLi5hY3Rpb259ID0gYWN0aW9uV2l0aElkIGFzIGFueTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb21pc2VMaXN0UmVzb2x2ZXIucmVzb2x2ZShpZCwgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25NZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQ8SUNvbm5lY3RFbnZpcm9ubWVudEFjdGlvbiB8IElDb25uZWN0RW52aXJvbm1lbnRBY3Rpb25zPik6IHZvaWQge1xuICAgICAgICB0aGlzLmhhbmRsZUFjdGlvbihldmVudC5kYXRhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc29sdmVBY3Rpb25JZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0QWN0aW9uSWQrKztcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmF1bHREaXNjb25uZWN0RXJyb3JGYWN0b3J5KHRoaXM6IG5ldmVyLCBlcnJvcjogQ29ubmVjdGlvbldhc0Nsb3NlZEVycm9yKTogQ29ubmVjdGlvbldhc0Nsb3NlZEVycm9yIHtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIFdvcmtlclJ1bm5lckVycm9yQ29kZSB7XG4gICAgQ09OTkVDVElPTl9XQVNfQ0xPU0VEID0gJ0NPTk5FQ1RJT05fV0FTX0NMT1NFRCcsXG5cbiAgICBSVU5ORVJfTk9UX0ZPVU5EID0gJ1JVTk5FUl9OT1RfRk9VTkQnLFxuICAgIFJVTk5FUl9JTklUX0VSUk9SID0gJ1JVTk5FUl9JTklUX0VSUk9SJyxcbiAgICBSVU5ORVJfRVhFQ1VURV9FUlJPUiA9ICdSVU5ORVJfRVhFQ1VURV9FUlJPUicsXG4gICAgUlVOTkVSX0RFU1RST1lfRVJST1IgPSAnUlVOTkVSX0RFU1RST1lfRVJST1InLFxuXG4gICAgV09SS0VSX0RFU1RST1lfRVJST1IgPSAnV09SS0VSX0RFU1RST1lfRVJST1InLFxuXG4gICAgVU5FWFBFQ1RFRF9FUlJPUiA9ICdVTkVYUEVDVEVEX0VSUk9SJyxcbn1cbiIsImltcG9ydCB7IFJ1bm5lclRva2VuIH0gZnJvbSBcIi4uL3J1bm5lci9ydW5uZXItYnJpZGdlL3J1bm5lcnMtbGlzdC5jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bm5lck1lc3NhZ2VDb25maWcge1xuICAgIHRva2VuPzogUnVubmVyVG9rZW47XG4gICAgcnVubmVyTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUnVubmVyRXhlY3V0ZU1lc3NhZ2VDb25maWcgZXh0ZW5kcyBJUnVubmVyTWVzc2FnZUNvbmZpZyB7XG4gICAgbWV0aG9kTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMgPSB7XG4gICAgLyoqXG4gICAgICogQGV4YW1wbGUgXG4gICAgICogPFwiTXlSdW5uZXJUb2tlblwiOiBNeVJ1bm5lci5tZXRob2ROYW1lKC4uLik+XG4gICAgICogPFwiTXlSdW5uZXJUb2tlblwiLm1ldGhvZE5hbWUoLi4uKT5cbiAgICAgKiA8TXlSdW5uZXIubWV0aG9kTmFtZSguLi4pPlxuICAgICAqIDxtZXRob2ROYW1lKC4uLik+XG4gICAgICogPFwiTXlSdW5uZXJUb2tlblwiPlxuICAgICAqIDxNeVJ1bm5lcj5cbiAgICAgKi9cbiAgICBmb3JtYXRSdW5uZXJJbmZvKGNvbmZpZzogUmVhZG9ubHk8SVJ1bm5lckV4ZWN1dGVNZXNzYWdlQ29uZmlnPiA9IHt9LCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgaW5mbyA9ICcnO1xuICAgICAgICBpZiAoY29uZmlnLnRva2VuKSB7XG4gICAgICAgICAgICBpbmZvICs9IGBcIiR7Y29uZmlnLnRva2VufVwiYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLnJ1bm5lck5hbWUpIHtcbiAgICAgICAgICAgIGluZm8gKz0gaW5mbyA/IGA6ICR7Y29uZmlnLnJ1bm5lck5hbWV9YCA6IGNvbmZpZy5ydW5uZXJOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcubWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgaW5mbyArPSBpbmZvID8gYC4ke2NvbmZpZy5ydW5uZXJOYW1lfWAgOiBgJHtjb25maWcucnVubmVyTmFtZX1gO1xuICAgICAgICAgICAgaW5mbyArPSAnKC4uLiknO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGluZm8gPSBgPCR7aW5mb30+YDtcbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgaW5mbyA9IHByZWZpeCArICcgJyArIGluZm87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcgJyArIGluZm87XG4gICAgfSxcblxuICAgIENPTlNUUlVDVE9SX05PVF9GT1VORChjb25maWc6IFJlYWRvbmx5PElSdW5uZXJNZXNzYWdlQ29uZmlnPiA9IHt9KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBSdW5uZXIgY29uc3RydWN0b3Ike3RoaXMuZm9ybWF0UnVubmVySW5mbyhjb25maWcsICdmb3InKX0gbm90IGZvdW5kYDtcbiAgICB9LFxuICAgIENPTk5FQ1RJT05fV0FTX0NMT1NFRChjb25maWc6IFJlYWRvbmx5PElSdW5uZXJNZXNzYWdlQ29uZmlnPiA9IHt9KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBDb25uZWN0aW9uJHt0aGlzLmZvcm1hdFJ1bm5lckluZm8oY29uZmlnLCAnd2l0aCcpfSB3YXMgY2xvc2VkYDtcbiAgICB9LFxuXG4gICAgUlVOTkVSX0lOSVRfRVJST1IoY29uZmlnOiBSZWFkb25seTxJUnVubmVyTWVzc2FnZUNvbmZpZz4gPSB7fSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgaW5pdGlhbGl6aW5nIFJ1bm5lciR7dGhpcy5mb3JtYXRSdW5uZXJJbmZvKGNvbmZpZyl9YDtcbiAgICB9LFxuICAgIFJVTk5FUl9ERVNUUk9ZX0VSUk9SKGNvbmZpZzogUmVhZG9ubHk8SVJ1bm5lck1lc3NhZ2VDb25maWc+ID0ge30pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYEFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlc3Ryb3lpbmcgUnVubmVyJHt0aGlzLmZvcm1hdFJ1bm5lckluZm8oY29uZmlnKX1gO1xuICAgIH0sXG4gICAgRVhFQ1VURV9FUlJPUihjb25maWc6IFJlYWRvbmx5PElSdW5uZXJFeGVjdXRlTWVzc2FnZUNvbmZpZz4gPSB7fSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgUnVudGltZSBFcnJvciR7dGhpcy5mb3JtYXRSdW5uZXJJbmZvKGNvbmZpZywgJ2ZvcicpfWA7XG4gICAgfSxcbiAgICBXT1JLRVJfREVTVFJPWV9FUlJPUihjb25maWc6IFJlYWRvbmx5PElSdW5uZXJNZXNzYWdlQ29uZmlnPiA9IHt9KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZXN0cm95aW5nIFJ1bm5lciR7dGhpcy5mb3JtYXRSdW5uZXJJbmZvKGNvbmZpZyl9YDtcbiAgICB9LFxuICAgIFdPUktFUl9OT1RfSU5JVCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ1dvcmtlciBub3QgaW5pdCc7XG4gICAgfSxcblxuICAgIFVORVhQRUNURURfRVJST1IoY29uZmlnOiBSZWFkb25seTxJUnVubmVyTWVzc2FnZUNvbmZpZz4gPSB7fSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgVW5leHBlY3RlZCBFcnJvciR7dGhpcy5mb3JtYXRSdW5uZXJJbmZvKGNvbmZpZywgJ2ZvcicpfWA7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uL3R5cGVzL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IFdvcmtlclJ1bm5lckVycm9yQ29kZSB9IGZyb20gJy4vZXJyb3ItY29kZSc7XG5pbXBvcnQgeyBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTIH0gZnJvbSAnLi9lcnJvci1tZXNzYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBJUnVubmVyRXJyb3JDb25maWdCYXNlIHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bm5lckVycm9yQ29uZmlnU3RhY2sge1xuICAgIHN0YWNrPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSdW5uZXJFcnJvckNvbmZpZ0NhcHR1cmVPcHQge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY2FwdHVyZU9wdD86ICgoLi4uYXJnczogYW55W10pID0+IGFueSkgfCBDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IHR5cGUgSVdvcmtlclJ1bm5lckVycm9yQ29uZmlnID0gSVJ1bm5lckVycm9yQ29uZmlnQmFzZVxuICAgICYgKElSdW5uZXJFcnJvckNvbmZpZ1N0YWNrIHwgSVJ1bm5lckVycm9yQ29uZmlnQ2FwdHVyZU9wdCk7XG5cbmV4cG9ydCBjb25zdCBXT1JLRVJfUlVOTkVSX0VSUk9SX0NPREUgPSAnX193b3JrZXJSdW5uZXJfZXJyb3JDb2RlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdvcmtlclJ1bm5lckVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIHB1YmxpYyBhYnN0cmFjdCBbV09SS0VSX1JVTk5FUl9FUlJPUl9DT0RFXTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJV29ya2VyUnVubmVyRXJyb3JDb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcubWVzc2FnZSk7XG4gICAgICAgIGlmICgoY29uZmlnIGFzIElSdW5uZXJFcnJvckNvbmZpZ1N0YWNrKS5zdGFjaykge1xuICAgICAgICAgICAgdGhpcy5zdGFjayA9IChjb25maWcgYXMgSVJ1bm5lckVycm9yQ29uZmlnU3RhY2spLnN0YWNrO1xuICAgICAgICB9IGVsc2UgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBpZiAoKGNvbmZpZyBhcyBJUnVubmVyRXJyb3JDb25maWdDYXB0dXJlT3B0KS5jYXB0dXJlT3B0KSB7XG4gICAgICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgKGNvbmZpZyBhcyBJUnVubmVyRXJyb3JDb25maWdDYXB0dXJlT3B0KS5jYXB0dXJlT3B0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKFdvcmtlclJ1bm5lckVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZSB8fCBXb3JrZXJSdW5uZXJFcnJvci5uYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmtlclJ1bm5lclVuZXhwZWN0ZWRFcnJvciBleHRlbmRzIFdvcmtlclJ1bm5lckVycm9yIHtcbiAgICBwdWJsaWMgW1dPUktFUl9SVU5ORVJfRVJST1JfQ09ERV0gPSBXb3JrZXJSdW5uZXJFcnJvckNvZGUuVU5FWFBFQ1RFRF9FUlJPUjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSVdvcmtlclJ1bm5lckVycm9yQ29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogY29uZmlnLm5hbWUgfHwgV29ya2VyUnVubmVyVW5leHBlY3RlZEVycm9yLm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBjb25maWcubWVzc2FnZSB8fCBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTLlVORVhQRUNURURfRVJST1IoKSxcbiAgICAgICAgICAgIHN0YWNrOiAoY29uZmlnIGFzIElSdW5uZXJFcnJvckNvbmZpZ1N0YWNrKS5zdGFjayxcbiAgICAgICAgICAgIGNhcHR1cmVPcHQ6IChjb25maWcgYXMgSVJ1bm5lckVycm9yQ29uZmlnQ2FwdHVyZU9wdCkuY2FwdHVyZU9wdCB8fCBXb3JrZXJSdW5uZXJVbmV4cGVjdGVkRXJyb3IsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFdvcmtlclJ1bm5lckVycm9yQ29kZSB9IGZyb20gJy4vZXJyb3ItY29kZSc7XG5pbXBvcnQgeyBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTIH0gZnJvbSAnLi9lcnJvci1tZXNzYWdlJztcbmltcG9ydCB7IElSdW5uZXJFcnJvckNvbmZpZ0NhcHR1cmVPcHQsIElSdW5uZXJFcnJvckNvbmZpZ1N0YWNrLCBJV29ya2VyUnVubmVyRXJyb3JDb25maWcsIFdvcmtlclJ1bm5lckVycm9yLCBXT1JLRVJfUlVOTkVSX0VSUk9SX0NPREUgfSBmcm9tICcuL3dvcmtlci1ydW5uZXItZXJyb3InO1xuXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbldhc0Nsb3NlZEVycm9yIGV4dGVuZHMgV29ya2VyUnVubmVyRXJyb3Ige1xuICAgIHB1YmxpYyBbV09SS0VSX1JVTk5FUl9FUlJPUl9DT0RFXSA9IFdvcmtlclJ1bm5lckVycm9yQ29kZS5DT05ORUNUSU9OX1dBU19DTE9TRUQ7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJV29ya2VyUnVubmVyRXJyb3JDb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBjb25maWcubmFtZSB8fCBDb25uZWN0aW9uV2FzQ2xvc2VkRXJyb3IubmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvbmZpZy5tZXNzYWdlIHx8ICBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTLkNPTk5FQ1RJT05fV0FTX0NMT1NFRCgpLFxuICAgICAgICAgICAgc3RhY2s6IChjb25maWcgYXMgSVJ1bm5lckVycm9yQ29uZmlnU3RhY2spLnN0YWNrLFxuICAgICAgICAgICAgY2FwdHVyZU9wdDogKGNvbmZpZyBhcyBJUnVubmVyRXJyb3JDb25maWdDYXB0dXJlT3B0KS5jYXB0dXJlT3B0IHx8IENvbm5lY3Rpb25XYXNDbG9zZWRFcnJvcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUnVubmVyTm90Rm91bmQgZXh0ZW5kcyBXb3JrZXJSdW5uZXJFcnJvciB7XG4gICAgcHVibGljIFtXT1JLRVJfUlVOTkVSX0VSUk9SX0NPREVdID0gV29ya2VyUnVubmVyRXJyb3JDb2RlLlJVTk5FUl9OT1RfRk9VTkQ7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBSZWFkb25seTxJV29ya2VyUnVubmVyRXJyb3JDb25maWc+ID0ge30pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbmFtZTogY29uZmlnLm5hbWUgfHwgUnVubmVyTm90Rm91bmQubmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvbmZpZy5tZXNzYWdlIHx8IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuQ09OU1RSVUNUT1JfTk9UX0ZPVU5EKCksXG4gICAgICAgICAgICBzdGFjazogKGNvbmZpZyBhcyBJUnVubmVyRXJyb3JDb25maWdTdGFjaykuc3RhY2ssXG4gICAgICAgICAgICBjYXB0dXJlT3B0OiAoY29uZmlnIGFzIElSdW5uZXJFcnJvckNvbmZpZ0NhcHR1cmVPcHQpLmNhcHR1cmVPcHQgfHwgUnVubmVyTm90Rm91bmQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJ1bm5lckluaXRFcnJvciBleHRlbmRzIFdvcmtlclJ1bm5lckVycm9yIHtcbiAgICBwdWJsaWMgW1dPUktFUl9SVU5ORVJfRVJST1JfQ09ERV0gPSBXb3JrZXJSdW5uZXJFcnJvckNvZGUuUlVOTkVSX0lOSVRfRVJST1I7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJV29ya2VyUnVubmVyRXJyb3JDb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBjb25maWcubmFtZSB8fCBSdW5uZXJJbml0RXJyb3IubmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvbmZpZy5tZXNzYWdlIHx8IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuUlVOTkVSX0lOSVRfRVJST1IoKSxcbiAgICAgICAgICAgIHN0YWNrOiAoY29uZmlnIGFzIElSdW5uZXJFcnJvckNvbmZpZ1N0YWNrKS5zdGFjayxcbiAgICAgICAgICAgIGNhcHR1cmVPcHQ6IChjb25maWcgYXMgSVJ1bm5lckVycm9yQ29uZmlnQ2FwdHVyZU9wdCkuY2FwdHVyZU9wdCB8fCBSdW5uZXJJbml0RXJyb3IsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJ1bm5lckV4ZWN1dGVFcnJvciBleHRlbmRzIFdvcmtlclJ1bm5lckVycm9yIHtcbiAgICBwdWJsaWMgW1dPUktFUl9SVU5ORVJfRVJST1JfQ09ERV0gPSBXb3JrZXJSdW5uZXJFcnJvckNvZGUuUlVOTkVSX0VYRUNVVEVfRVJST1I7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJV29ya2VyUnVubmVyRXJyb3JDb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBjb25maWcubmFtZSB8fCBSdW5uZXJFeGVjdXRlRXJyb3IubmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvbmZpZy5tZXNzYWdlIHx8IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuRVhFQ1VURV9FUlJPUigpLFxuICAgICAgICAgICAgc3RhY2s6IChjb25maWcgYXMgSVJ1bm5lckVycm9yQ29uZmlnU3RhY2spLnN0YWNrLFxuICAgICAgICAgICAgY2FwdHVyZU9wdDogKGNvbmZpZyBhcyBJUnVubmVyRXJyb3JDb25maWdDYXB0dXJlT3B0KS5jYXB0dXJlT3B0IHx8IFJ1bm5lckV4ZWN1dGVFcnJvcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUnVubmVyRGVzdHJveUVycm9yIGV4dGVuZHMgV29ya2VyUnVubmVyRXJyb3Ige1xuICAgIHB1YmxpYyBbV09SS0VSX1JVTk5FUl9FUlJPUl9DT0RFXSA9IFdvcmtlclJ1bm5lckVycm9yQ29kZS5SVU5ORVJfREVTVFJPWV9FUlJPUjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElXb3JrZXJSdW5uZXJFcnJvckNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5hbWU6IGNvbmZpZy5uYW1lIHx8IFJ1bm5lckRlc3Ryb3lFcnJvci5uYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogY29uZmlnLm1lc3NhZ2UgfHwgV09SS0VSX1JVTk5FUl9FUlJPUl9NRVNTQUdFUy5DT05ORUNUSU9OX1dBU19DTE9TRUQoKSxcbiAgICAgICAgICAgIHN0YWNrOiAoY29uZmlnIGFzIElSdW5uZXJFcnJvckNvbmZpZ1N0YWNrKS5zdGFjayxcbiAgICAgICAgICAgIGNhcHR1cmVPcHQ6IChjb25maWcgYXMgSVJ1bm5lckVycm9yQ29uZmlnQ2FwdHVyZU9wdCkuY2FwdHVyZU9wdCB8fCBSdW5uZXJEZXN0cm95RXJyb3IsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmtlckRlc3Ryb3lFcnJvciBleHRlbmRzIFdvcmtlclJ1bm5lckVycm9yIHtcbiAgICBwdWJsaWMgW1dPUktFUl9SVU5ORVJfRVJST1JfQ09ERV0gPSBXb3JrZXJSdW5uZXJFcnJvckNvZGUuUlVOTkVSX0RFU1RST1lfRVJST1I7XG4gICAgcHVibGljIG9yaWdpbmFsRXJyb3JzID0gbmV3IEFycmF5PEVycm9yPigpO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSVdvcmtlclJ1bm5lckVycm9yQ29uZmlnICYge29yaWdpbmFsRXJyb3JzPzogRXJyb3JbXX0gPSB7fSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBuYW1lOiBjb25maWcubmFtZSB8fCBXb3JrZXJEZXN0cm95RXJyb3IubmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvbmZpZy5tZXNzYWdlIHx8IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuV09SS0VSX0RFU1RST1lfRVJST1IoKSxcbiAgICAgICAgICAgIHN0YWNrOiAoY29uZmlnIGFzIElSdW5uZXJFcnJvckNvbmZpZ1N0YWNrKS5zdGFjayxcbiAgICAgICAgICAgIGNhcHR1cmVPcHQ6IChjb25maWcgYXMgSVJ1bm5lckVycm9yQ29uZmlnQ2FwdHVyZU9wdCkuY2FwdHVyZU9wdCB8fCBXb3JrZXJEZXN0cm95RXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29uZmlnLm9yaWdpbmFsRXJyb3JzKSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsRXJyb3JzLnB1c2goLi4uY29uZmlnLm9yaWdpbmFsRXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbm5lY3Rpb25XYXNDbG9zZWRFcnJvciB9IGZyb20gXCIuLi8uLi9lcnJvcnMvcnVubmVyLWVycm9yc1wiO1xuaW1wb3J0IHsgVHJhbnNmZXJhYmxlSnNvbk9iamVjdCB9IGZyb20gXCIuLi8uLi90eXBlcy9qc29uLW9iamVjdFwiO1xuaW1wb3J0IHsgQ29ubmVjdENvbnRyb2xsZXJBY3Rpb24sIElDb25uZWN0Q29udHJvbGxlckFjdGlvbiwgSUNvbm5lY3RDb250cm9sbGVyQWN0aW9ucyB9IGZyb20gXCIuLi9jb250cm9sbGVyL2Nvbm5lY3QtY29udHJvbGxlci5hY3Rpb25zXCI7XG5pbXBvcnQgeyBDb25uZWN0RW52aXJvbm1lbnRFcnJvclNlcmlhbGl6ZXIgfSBmcm9tIFwiLi9jb25uZWN0LWVudmlyb25tZW50LWVycm9yLXNlcmlhbGl6ZXJcIjtcbmltcG9ydCB7IENvbm5lY3RFbnZpcm9ubWVudEFjdGlvbiwgSUNvbm5lY3RFbnZpcm9ubWVudEFjdGlvbiwgSUNvbm5lY3RFbnZpcm9ubWVudEFjdGlvbnMsIElDb25uZWN0RW52aXJvbm1lbnREZXN0cm95ZWRCeUZvcmNlQWN0aW9uLCBJQ29ubmVjdEVudmlyb25tZW50RGVzdHJveWVkQnlSZXF1ZXN0QWN0aW9uLCBJQ29ubmVjdEVudmlyb25tZW50RGVzdHJveWVkV2l0aEVycm9yQWN0aW9uLCBJQ29ubmVjdEVudmlyb25tZW50RGlzY29ubmVjdGVkQWN0aW9uIH0gZnJvbSBcIi4vY29ubmVjdC1lbnZpcm9ubWVudC5hY3Rpb25zXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG50eXBlIENvbm5lY3RFbnZpcm9ubWVudEFjdGlvbnNIYW5kbGVyID0gKGFjdGlvbjogYW55KSA9PiBhbnk7XG5cbmNvbnN0IE1FU1NBR0VfUE9SVF9DT05ORUNUX0VOVklST05NRU5UX0RBVEEgPSAnX193b3JrZXJSdW5uZXJfY29ubmVjdEVudmlyb25tZW50RGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpc3RlbmluZ0ludGVycnVwdGVyIHtcbiAgICBwcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xuICAgIHJlc29sdmU6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2VQb3J0Q29ubmVjdEVudmlyb25tZW50RGF0YSB7XG4gICAgaGFuZGxlcjogQ29ubmVjdEVudmlyb25tZW50QWN0aW9uc0hhbmRsZXI7XG4gICAgbGlzdGVuaW5nSW50ZXJydXB0ZXI6IElMaXN0ZW5pbmdJbnRlcnJ1cHRlcjtcbn0gXG5cbmludGVyZmFjZSBJTWVzc2FnZVBvcnRXaXRoQ29ubmVjdEVudmlyb25tZW50RGF0YSB7XG4gICAgW01FU1NBR0VfUE9SVF9DT05ORUNUX0VOVklST05NRU5UX0RBVEFdPzogSU1lc3NhZ2VQb3J0Q29ubmVjdEVudmlyb25tZW50RGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29ubmVjdEVudmlyb25tZW50Q29uZmlne1xuICAgIGFjdGlvbnNIYW5kbGVyOiBDb25uZWN0RW52aXJvbm1lbnRBY3Rpb25zSGFuZGxlcjtcbiAgICBkZXN0cm95RXJyb3JTZXJpYWxpemVyOiBDb25uZWN0RW52aXJvbm1lbnRFcnJvclNlcmlhbGl6ZXI7XG4gICAgZGVzdHJveUhhbmRsZXI6ICgpID0+IFByb21pc2U8dm9pZD4gfCB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ29ubmVjdEVudmlyb25tZW50IHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29ubmVjdGVkUG9ydHMgPSBuZXcgU2V0PE1lc3NhZ2VQb3J0PigpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBkZXN0cm95RXJyb3JTZXJpYWxpemVyOiBDb25uZWN0RW52aXJvbm1lbnRFcnJvclNlcmlhbGl6ZXI7XG4gICAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgYWN0aW9uc0hhbmRsZXI6IENvbm5lY3RFbnZpcm9ubWVudEFjdGlvbnNIYW5kbGVyO1xuICAgIHByaXZhdGUgZGVzdHJveUhhbmRsZXI6ICgpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElDb25uZWN0RW52aXJvbm1lbnRDb25maWcpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlciA9IGNvbmZpZy5hY3Rpb25zSGFuZGxlcjtcbiAgICAgICAgdGhpcy5kZXN0cm95SGFuZGxlciA9IGNvbmZpZy5kZXN0cm95SGFuZGxlcjtcbiAgICAgICAgdGhpcy5kZXN0cm95RXJyb3JTZXJpYWxpemVyID0gY29uZmlnLmRlc3Ryb3lFcnJvclNlcmlhbGl6ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFBvcnQocG9ydDogTWVzc2FnZVBvcnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgcG9ydCk7XG4gICAgICAgIHBvcnQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZXIpO1xuICAgICAgICBwb3J0LnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVzc2FnZVBvcnREYXRhKHBvcnQsIHtcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBsaXN0ZW5pbmdJbnRlcnJ1cHRlcjogdGhpcy5saXN0ZW5pbmdJbnRlcnJ1cHRlckZhY3RvcnkoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkUG9ydHMuYWRkKHBvcnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZUNvbm5lY3Rpb24ocG9ydDogTWVzc2FnZVBvcnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZ2V0TWVzc2FnZVBvcnREYXRhKHBvcnQpPy5oYW5kbGVyO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgcG9ydC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgcG9ydC5jbG9zZSgpO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZFBvcnRzLmRlbGV0ZShwb3J0KTtcbiAgICAgICAgdGhpcy5kZWxldGVNZXNzYWdlUG9ydERhdGEocG9ydCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGhhbmRsZUFjdGlvbihcbiAgICAgICAgcG9ydDogTWVzc2FnZVBvcnQsXG4gICAgICAgIGFjdGlvbldpdGhJZDogSUNvbm5lY3RDb250cm9sbGVyQWN0aW9uIHwgSUNvbm5lY3RDb250cm9sbGVyQWN0aW9uc1xuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBzd2l0Y2ggKChhY3Rpb25XaXRoSWQgYXMgSUNvbm5lY3RDb250cm9sbGVyQWN0aW9ucykudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDb25uZWN0Q29udHJvbGxlckFjdGlvbi5JTlRFUlJVUFRfTElTVEVOSU5HOlxuICAgICAgICAgICAgICAgIHRoaXMub25JbnRlcnJ1cHRMaXN0ZW5pbmcocG9ydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbm5lY3RDb250cm9sbGVyQWN0aW9uLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRpc2Nvbm5lY3QocG9ydCwgYWN0aW9uV2l0aElkLmlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29ubmVjdENvbnRyb2xsZXJBY3Rpb24uREVTVFJPWTpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm9uRGVzdHJveShwb3J0LCBhY3Rpb25XaXRoSWQuaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkN1c3RvbUFjdGlvbihwb3J0LCBhY3Rpb25XaXRoSWQgYXMgSUNvbm5lY3RDb250cm9sbGVyQWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBmb3JjZURlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRlc3Ryb3lIYW5kbGVyKCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBjb25zdCBkZXN0cm95QWN0aW9uOiBJQ29ubmVjdEVudmlyb25tZW50RGVzdHJveWVkQnlGb3JjZUFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBDb25uZWN0RW52aXJvbm1lbnRBY3Rpb24uREVTVFJPWUVEX0JZX0ZPUkNFLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcG9ydCBvZiB0aGlzLmNvbm5lY3RlZFBvcnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQWN0aW9uKHBvcnQsIGRlc3Ryb3lBY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VDb25uZWN0aW9uKHBvcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSW50ZXJydXB0TGlzdGVuaW5nKHBvcnQ6IE1lc3NhZ2VQb3J0KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvcnREYXRhID0gdGhpcy5nZXRNZXNzYWdlUG9ydERhdGEocG9ydCk7XG4gICAgICAgIGlmICghcG9ydERhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25uZWN0aW9uV2FzQ2xvc2VkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBwb3J0RGF0YS5saXN0ZW5pbmdJbnRlcnJ1cHRlci5yZXNvbHZlKCk7XG4gICAgICAgIGNvbnN0IGxpc3RlbmluZ0ludGVycnVwdGVyID0gdGhpcy5saXN0ZW5pbmdJbnRlcnJ1cHRlckZhY3RvcnkoKTtcbiAgICAgICAgcG9ydERhdGEubGlzdGVuaW5nSW50ZXJydXB0ZXIgPSBsaXN0ZW5pbmdJbnRlcnJ1cHRlcjtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIG9uRGlzY29ubmVjdChwb3J0OiBNZXNzYWdlUG9ydCwgYWN0aW9uSWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWRQb3J0cy5zaXplIDw9IDEpIHtcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95KHBvcnQsIGFjdGlvbklkKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RBY3Rpb246IElDb25uZWN0RW52aXJvbm1lbnREaXNjb25uZWN0ZWRBY3Rpb24gPSB7XG4gICAgICAgICAgICBpZDogYWN0aW9uSWQsXG4gICAgICAgICAgICB0eXBlOiBDb25uZWN0RW52aXJvbm1lbnRBY3Rpb24uRElTQ09OTkVDVEVELFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbmRBY3Rpb24ocG9ydCwgZGlzY29ubmVjdEFjdGlvbik7XG4gICAgICAgIHRoaXMuY2xvc2VDb25uZWN0aW9uKHBvcnQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBvbkRlc3Ryb3kocG9ydDogTWVzc2FnZVBvcnQsIGFjdGlvbklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZ2V0TWVzc2FnZVBvcnREYXRhKHBvcnQpPy5oYW5kbGVyO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZFBvcnRzLmRlbGV0ZShwb3J0KTtcbiAgICAgICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZvcmNlRGVzdHJveSgpO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBlcnJvckFjdGlvbjogSUNvbm5lY3RFbnZpcm9ubWVudERlc3Ryb3llZFdpdGhFcnJvckFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBpZDogYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgdHlwZTogQ29ubmVjdEVudmlyb25tZW50QWN0aW9uLkRFU1RST1lFRF9XSVRIX0VSUk9SLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0aGlzLmRlc3Ryb3lFcnJvclNlcmlhbGl6ZXIoZXJyb3IpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZW5kQWN0aW9uKHBvcnQsIGVycm9yQWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc0Vycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBkZXN0cm95QWN0aW9uOiBJQ29ubmVjdEVudmlyb25tZW50RGVzdHJveWVkQnlSZXF1ZXN0QWN0aW9uID0ge1xuICAgICAgICAgICAgICAgIGlkOiBhY3Rpb25JZCxcbiAgICAgICAgICAgICAgICB0eXBlOiBDb25uZWN0RW52aXJvbm1lbnRBY3Rpb24uREVTVFJPWUVEX0JZX1JFUVVFU1QsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zZW5kQWN0aW9uKHBvcnQsIGRlc3Ryb3lBY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYW5kbGVyKSB7IFxuICAgICAgICAgICAgcG9ydC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHBvcnQuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgb25DdXN0b21BY3Rpb24ocG9ydDogTWVzc2FnZVBvcnQsIGFjdGlvbldpdGhJZDogSUNvbm5lY3RDb250cm9sbGVyQWN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHtpZCwgLi4uYWN0aW9ufSA9IGFjdGlvbldpdGhJZDtcbiAgICAgICAgY29uc3QgcG9ydERhdGEgPSB0aGlzLmdldE1lc3NhZ2VQb3J0RGF0YShwb3J0KTtcbiAgICAgICAgaWYgKCFwb3J0RGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbm5lY3Rpb25XYXNDbG9zZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpc0xpc3RlbmluZ0ludGVycnVwdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgcG9ydERhdGEubGlzdGVuaW5nSW50ZXJydXB0ZXIucHJvbWlzZS50aGVuKCgpID0+IGlzTGlzdGVuaW5nSW50ZXJydXB0ID0gdHJ1ZSksXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyKGFjdGlvbikgYXMgUmVjb3JkPHN0cmluZywgVHJhbnNmZXJhYmxlSnNvbk9iamVjdD5cbiAgICAgICAgXSlcbiAgICAgICAgaWYgKGlzTGlzdGVuaW5nSW50ZXJydXB0KSB7XG4gICAgICAgICAgICAvLyBBYm9ydGluZyB0aGUgYWN0aW9uIGJlY2F1c2UgdGhlIGNvbm5lY3Rpb24gd2FzIGNsb3NlZFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ3VzdG9tQWN0aW9uUmVzcG9uc2UocG9ydCwgcmVzdWx0IGFzIFJlY29yZDxzdHJpbmcsIFRyYW5zZmVyYWJsZUpzb25PYmplY3Q+LCBpZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNlbmRBY3Rpb24oXG4gICAgICAgIHBvcnQ6IE1lc3NhZ2VQb3J0LFxuICAgICAgICBhY3Rpb246IElDb25uZWN0RW52aXJvbm1lbnRBY3Rpb25zXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29ubmVjdGlvbldhc0Nsb3NlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge3RyYW5zZmVyLCAuLi5hY3Rpb25XaXRob3V0VHJhbnNmZXJ9ID0gYWN0aW9uIGFzIFJlY29yZDxzdHJpbmcsIFRyYW5zZmVyYWJsZUpzb25PYmplY3Q+O1xuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKGFjdGlvbldpdGhvdXRUcmFuc2ZlciwgdHJhbnNmZXIgYXMgVHJhbnNmZXJhYmxlW10pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBoYW5kbGVDdXN0b21BY3Rpb25SZXNwb25zZSAoXG4gICAgICAgIHBvcnQ6IE1lc3NhZ2VQb3J0LFxuICAgICAgICByZXNwb25zZTogUmVjb3JkPHN0cmluZywgVHJhbnNmZXJhYmxlSnNvbk9iamVjdD4sXG4gICAgICAgIGFjdGlvbklkOiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQWN0aW9uV2l0aElkID0ge1xuICAgICAgICAgICAgLi4ucmVzcG9uc2UsXG4gICAgICAgICAgICBpZDogYWN0aW9uSWQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VuZEFjdGlvbihwb3J0LCByZXNwb25zZUFjdGlvbldpdGhJZCBhcyBJQ29ubmVjdEVudmlyb25tZW50QWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZVJlc3BvbnNlKFxuICAgICAgICByZXNwb25zZTogUmVjb3JkPHN0cmluZywgVHJhbnNmZXJhYmxlSnNvbk9iamVjdD5cbiAgICApOiBSZWNvcmQ8c3RyaW5nLCBUcmFuc2ZlcmFibGVKc29uT2JqZWN0PiB8IElDb25uZWN0RW52aXJvbm1lbnRBY3Rpb24ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGxpc3RlbmluZ0ludGVycnVwdGVyRmFjdG9yeSgpOiBJTGlzdGVuaW5nSW50ZXJydXB0ZXIge1xuICAgICAgICBsZXQgcmVzb2x2ZXI6IElMaXN0ZW5pbmdJbnRlcnJ1cHRlclsncmVzb2x2ZSddO1xuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICByZXR1cm4ge3Byb21pc2UsIHJlc29sdmU6IHJlc29sdmVyIX07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU1lc3NhZ2VQb3J0RGF0YShwb3J0OiBNZXNzYWdlUG9ydCwgZGF0YTogSU1lc3NhZ2VQb3J0Q29ubmVjdEVudmlyb25tZW50RGF0YSk6IHZvaWQge1xuICAgICAgICAocG9ydCBhcyB1bmtub3duIGFzIElNZXNzYWdlUG9ydFdpdGhDb25uZWN0RW52aXJvbm1lbnREYXRhKVtNRVNTQUdFX1BPUlRfQ09OTkVDVF9FTlZJUk9OTUVOVF9EQVRBXSA9IGRhdGE7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE1lc3NhZ2VQb3J0RGF0YShwb3J0OiBNZXNzYWdlUG9ydCk6IElNZXNzYWdlUG9ydENvbm5lY3RFbnZpcm9ubWVudERhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gKHBvcnQgYXMgdW5rbm93biBhcyBJTWVzc2FnZVBvcnRXaXRoQ29ubmVjdEVudmlyb25tZW50RGF0YSlbTUVTU0FHRV9QT1JUX0NPTk5FQ1RfRU5WSVJPTk1FTlRfREFUQV07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRlbGV0ZU1lc3NhZ2VQb3J0RGF0YShwb3J0OiBNZXNzYWdlUG9ydCk6IHZvaWQge1xuICAgICAgICAocG9ydCBhcyB1bmtub3duIGFzIElNZXNzYWdlUG9ydFdpdGhDb25uZWN0RW52aXJvbm1lbnREYXRhKVtNRVNTQUdFX1BPUlRfQ09OTkVDVF9FTlZJUk9OTUVOVF9EQVRBXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhc3luYyBvbk1lc3NhZ2UoXG4gICAgICAgIHBvcnQ6IE1lc3NhZ2VQb3J0LFxuICAgICAgICBldmVudDogTWVzc2FnZUV2ZW50PElDb25uZWN0RW52aXJvbm1lbnRBY3Rpb24gfCBJQ29ubmVjdENvbnRyb2xsZXJBY3Rpb25zPixcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVBY3Rpb24ocG9ydCwgZXZlbnQuZGF0YSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uL3R5cGVzL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IFdvcmtlclJ1bm5lckVycm9yQ29kZSB9IGZyb20gJy4vZXJyb3ItY29kZSc7XG5pbXBvcnQgeyBSdW5uZXJEZXN0cm95RXJyb3IsIFJ1bm5lckV4ZWN1dGVFcnJvciwgUnVubmVyTm90Rm91bmQsIENvbm5lY3Rpb25XYXNDbG9zZWRFcnJvciwgV29ya2VyRGVzdHJveUVycm9yLCBSdW5uZXJJbml0RXJyb3IgfSBmcm9tICcuL3J1bm5lci1lcnJvcnMnO1xuaW1wb3J0IHsgSVdvcmtlclJ1bm5lckVycm9yQ29uZmlnLCBXb3JrZXJSdW5uZXJFcnJvciwgV29ya2VyUnVubmVyVW5leHBlY3RlZEVycm9yIH0gZnJvbSAnLi93b3JrZXItcnVubmVyLWVycm9yJztcblxuZXhwb3J0IGNvbnN0IENPREVfVE9fRVJST1JfTUFQOiBSZWNvcmQ8c3RyaW5nLCBDb25zdHJ1Y3RvcjxXb3JrZXJSdW5uZXJFcnJvciwgW0lXb3JrZXJSdW5uZXJFcnJvckNvbmZpZ10+PiA9IHtcbiAgICBbV29ya2VyUnVubmVyRXJyb3JDb2RlLkNPTk5FQ1RJT05fV0FTX0NMT1NFRF06IENvbm5lY3Rpb25XYXNDbG9zZWRFcnJvcixcblxuICAgIFtXb3JrZXJSdW5uZXJFcnJvckNvZGUuUlVOTkVSX0lOSVRfRVJST1JdOiBSdW5uZXJJbml0RXJyb3IsXG4gICAgW1dvcmtlclJ1bm5lckVycm9yQ29kZS5SVU5ORVJfTk9UX0ZPVU5EXTogUnVubmVyTm90Rm91bmQsXG4gICAgW1dvcmtlclJ1bm5lckVycm9yQ29kZS5SVU5ORVJfRVhFQ1VURV9FUlJPUl06IFJ1bm5lckV4ZWN1dGVFcnJvcixcbiAgICBbV29ya2VyUnVubmVyRXJyb3JDb2RlLlJVTk5FUl9ERVNUUk9ZX0VSUk9SXTogUnVubmVyRGVzdHJveUVycm9yLFxuXG4gICAgW1dvcmtlclJ1bm5lckVycm9yQ29kZS5XT1JLRVJfREVTVFJPWV9FUlJPUl06IFdvcmtlckRlc3Ryb3lFcnJvcixcblxuICAgIFtXb3JrZXJSdW5uZXJFcnJvckNvZGUuVU5FWFBFQ1RFRF9FUlJPUl06IFdvcmtlclJ1bm5lclVuZXhwZWN0ZWRFcnJvcixcbn07XG4iLCJpbXBvcnQgeyBXb3JrZXJSdW5uZXJFcnJvckNvZGUgfSBmcm9tICcuL2Vycm9yLWNvZGUnO1xuaW1wb3J0IHsgQ09ERV9UT19FUlJPUl9NQVAgfSBmcm9tICcuL2Vycm9yLWNvZGUtbWFwJztcbmltcG9ydCB7IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMgfSBmcm9tICcuL2Vycm9yLW1lc3NhZ2UnO1xuaW1wb3J0IHsgV29ya2VyRGVzdHJveUVycm9yIH0gZnJvbSAnLi9ydW5uZXItZXJyb3JzJztcbmltcG9ydCB7IElSdW5uZXJFcnJvckNvbmZpZ0Jhc2UsIFdvcmtlclJ1bm5lckVycm9yLCBXb3JrZXJSdW5uZXJVbmV4cGVjdGVkRXJyb3IsIFdPUktFUl9SVU5ORVJfRVJST1JfQ09ERSB9IGZyb20gJy4vd29ya2VyLXJ1bm5lci1lcnJvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlcmlhbGl6ZWRFcnJvciBleHRlbmRzIElSdW5uZXJFcnJvckNvbmZpZ0Jhc2Uge1xuICAgIGVycm9yQ29kZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzdGFjaz86IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgb3JpZ2luYWxFcnJvcnM/OiBJU2VyaWFsaXplZEVycm9yW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlcmlhbGl6ZWRFcnJvckFjdGlvbjxUPiBleHRlbmRzIElTZXJpYWxpemVkRXJyb3Ige1xuICAgIHR5cGU6IFQ7XG59XG5cbmV4cG9ydCBjbGFzcyBXb3JrZXJSdW5uZXJFcnJvclNlcmlhbGl6ZXIge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjb2RlVG9FcnJvck1hcCA9IENPREVfVE9fRVJST1JfTUFQO1xuXG4gICAgcHVibGljIHNlcmlhbGl6ZShcbiAgICAgICAgZXJyb3I6IHVua25vd24gPSB7fSxcbiAgICAgICAgYWx0ZXJuYXRpdmVFcnJvcjogUGFydGlhbDxJU2VyaWFsaXplZEVycm9yPiB8IFdvcmtlclJ1bm5lckVycm9yID0ge30sXG4gICAgKTogSVNlcmlhbGl6ZWRFcnJvciB7XG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IChlcnJvciBhcyBXb3JrZXJSdW5uZXJFcnJvcilbV09SS0VSX1JVTk5FUl9FUlJPUl9DT0RFXVxuICAgICAgICAgICAgPz8gKGFsdGVybmF0aXZlRXJyb3IgYXMgV29ya2VyUnVubmVyRXJyb3IpW1dPUktFUl9SVU5ORVJfRVJST1JfQ09ERV1cbiAgICAgICAgICAgID8/IChhbHRlcm5hdGl2ZUVycm9yIGFzIFBhcnRpYWw8SVNlcmlhbGl6ZWRFcnJvcj4pLmVycm9yQ29kZVxuICAgICAgICAgICAgPz8gV29ya2VyUnVubmVyRXJyb3JDb2RlLlVORVhQRUNURURfRVJST1I7XG4gICAgICAgIGxldCBzZXJpYWxpemVkRXJyb3I6IElTZXJpYWxpemVkRXJyb3I7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGVycm9yLm5hbWUgfHwgYWx0ZXJuYXRpdmVFcnJvci5uYW1lIHx8IFdvcmtlclJ1bm5lclVuZXhwZWN0ZWRFcnJvci5uYW1lLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgYWx0ZXJuYXRpdmVFcnJvci5tZXNzYWdlIHx8IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuVU5FWFBFQ1RFRF9FUlJPUigpLFxuICAgICAgICAgICAgICAgIHN0YWNrOiBlcnJvci5zdGFjayB8fCBhbHRlcm5hdGl2ZUVycm9yLnN0YWNrIHx8IG5ldyBFcnJvcigpLnN0YWNrLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFdvcmtlckRlc3Ryb3lFcnJvcikge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRFcnJvci5vcmlnaW5hbEVycm9ycyA9IGVycm9yLm9yaWdpbmFsRXJyb3JzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvciA9PiB0aGlzLnNlcmlhbGl6ZShvcmlnaW5hbEVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGFsdGVybmF0aXZlRXJyb3IubmFtZSB8fCBXb3JrZXJSdW5uZXJVbmV4cGVjdGVkRXJyb3IubmFtZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclxuICAgICAgICAgICAgICAgICAgICA/IFN0cmluZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgOiAoYWx0ZXJuYXRpdmVFcnJvci5tZXNzYWdlIHx8IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuVU5FWFBFQ1RFRF9FUlJPUigpKSxcbiAgICAgICAgICAgICAgICBzdGFjazogYWx0ZXJuYXRpdmVFcnJvci5zdGFjayB8fCBuZXcgRXJyb3IoKS5zdGFjayxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXJpYWxpemVkRXJyb3Iub3JpZ2luYWxFcnJvcnMpIHtcbiAgICAgICAgICAgIGlmIChhbHRlcm5hdGl2ZUVycm9yIGluc3RhbmNlb2YgV29ya2VyRGVzdHJveUVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZEVycm9yLm9yaWdpbmFsRXJyb3JzID0gYWx0ZXJuYXRpdmVFcnJvci5vcmlnaW5hbEVycm9ycy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXJyb3IgPT4gdGhpcy5zZXJpYWxpemUob3JpZ2luYWxFcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVkRXJyb3I7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2VyaWFsaXplKGVycm9yOiBJU2VyaWFsaXplZEVycm9yKTogV29ya2VyUnVubmVyRXJyb3Ige1xuICAgICAgICBpZiAoZXJyb3IuZXJyb3JDb2RlID09PSBXb3JrZXJSdW5uZXJFcnJvckNvZGUuV09SS0VSX0RFU1RST1lfRVJST1IpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV29ya2VyRGVzdHJveUVycm9yKHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlT3B0OiB0aGlzLmRlc2VyaWFsaXplLFxuICAgICAgICAgICAgICAgIC4uLmVycm9yLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXJyb3JzOiBlcnJvci5vcmlnaW5hbEVycm9ycz8ubWFwKG9yaWdpbmFsRXJyb3IgPT4gdGhpcy5kZXNlcmlhbGl6ZShvcmlnaW5hbEVycm9yKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlcnJvckNvbnN0cnVjdG9yID0gdGhpcy5jb2RlVG9FcnJvck1hcFtlcnJvci5lcnJvckNvZGVdO1xuICAgICAgICBpZiAoIWVycm9yQ29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGVycm9yQ29uc3RydWN0b3IgPSBXb3JrZXJSdW5uZXJVbmV4cGVjdGVkRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvckNvbnN0cnVjdG9yKHtcbiAgICAgICAgICAgIGNhcHR1cmVPcHQ6IHRoaXMuZGVzZXJpYWxpemUsXG4gICAgICAgICAgICAuLi5lcnJvcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgV09SS0VSX1JVTk5FUl9FUlJPUl9TRVJJQUxJWkVSID0gbmV3IFdvcmtlclJ1bm5lckVycm9yU2VyaWFsaXplcigpO1xuIiwiaW1wb3J0IHsgUnVubmVyVG9rZW4gfSBmcm9tICcuLi8uLi9ydW5uZXIvcnVubmVyLWJyaWRnZS9ydW5uZXJzLWxpc3QuY29udHJvbGxlcic7XG5pbXBvcnQgeyBJUnVubmVyQXJndW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcy9ydW5uZXItYXJndW1lbnQnO1xuXG5leHBvcnQgZW51bSBOb2RlUmVzb2x2ZXJBY3Rpb24ge1xuICAgIElOSVRfUlVOTkVSID0gJ0lOSVRfUlVOTkVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTm9kZVJlc29sdmVySW5pdFJ1bm5lckFjdGlvbiB7XG4gICAgdHlwZTogTm9kZVJlc29sdmVyQWN0aW9uLklOSVRfUlVOTkVSO1xuICAgIHRva2VuOiBSdW5uZXJUb2tlbjtcbiAgICBhcmdzOiBJUnVubmVyQXJndW1lbnRbXTtcbiAgICB0cmFuc2ZlcjogVHJhbnNmZXJhYmxlW11cbn1cbiIsImltcG9ydCB7IElTZXJpYWxpemVkRXJyb3JBY3Rpb24gfSBmcm9tICcuLi8uLi9lcnJvcnMvZXJyb3Iuc2VyaWFsaXplcic7XG5pbXBvcnQgeyBUcmFuc2ZlcmFibGVKc29uT2JqZWN0IH0gZnJvbSAnLi4vLi4vdHlwZXMvanNvbi1vYmplY3QnO1xuaW1wb3J0IHsgUnVubmVyVG9rZW4gfSBmcm9tICcuLi9ydW5uZXItYnJpZGdlL3J1bm5lcnMtbGlzdC5jb250cm9sbGVyJztcblxuZXhwb3J0IGVudW0gUnVubmVyRW52aXJvbm1lbnRBY3Rpb24ge1xuICAgIEVYRUNVVEVEID0gJ0VYRUNVVEVEJyxcbiAgICBFWEVDVVRFRF9XSVRIX1JVTk5FUl9SRVNVTFQgPSAnRVhFQ1VURURfV0lUSF9SVU5ORVJfUkVTVUxUJyxcbiAgICBFWEVDVVRFX0VSUk9SID0gJ0VYRUNVVEVfRVJST1InLFxuICAgIFJFU09MVkVEID0gJ1JFU09MVkVEJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUnVubmVyRW52aXJvbm1lbnRFeGVjdXRlZEFjdGlvbiB7XG4gICAgdHlwZTogUnVubmVyRW52aXJvbm1lbnRBY3Rpb24uRVhFQ1VURUQ7XG4gICAgcmVzcG9uc2U6IFRyYW5zZmVyYWJsZUpzb25PYmplY3Q7XG4gICAgdHJhbnNmZXI/OiBUcmFuc2ZlcmFibGVbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSdW5uZXJFbnZpcm9ubWVudEV4ZWN1dGVkV2l0aFJ1bm5lclJlc3VsdEFjdGlvbiB7XG4gICAgdHlwZTogUnVubmVyRW52aXJvbm1lbnRBY3Rpb24uRVhFQ1VURURfV0lUSF9SVU5ORVJfUkVTVUxUO1xuICAgIHBvcnQ6IE1lc3NhZ2VQb3J0O1xuICAgIHRva2VuOiBSdW5uZXJUb2tlbjtcbiAgICB0cmFuc2ZlcjogW01lc3NhZ2VQb3J0XTtcbn1cblxuZXhwb3J0IHR5cGUgSVJ1bm5lckVudmlyb25tZW50RXhlY3V0ZUVycm9yQWN0aW9uID0gSVNlcmlhbGl6ZWRFcnJvckFjdGlvbjxSdW5uZXJFbnZpcm9ubWVudEFjdGlvbi5FWEVDVVRFX0VSUk9SPjtcblxuZXhwb3J0IGludGVyZmFjZSBJUnVubmVyRW52aXJvbm1lbnRSZXNvbHZlZEFjdGlvbiB7XG4gICAgdHlwZTogUnVubmVyRW52aXJvbm1lbnRBY3Rpb24uUkVTT0xWRUQ7XG4gICAgcG9ydDogTWVzc2FnZVBvcnQ7XG4gICAgdHJhbnNmZXI6IFtNZXNzYWdlUG9ydF07XG59XG5cbmV4cG9ydCB0eXBlIElSdW5uZXJFbnZpcm9ubWVudEV4ZWN1dGVSZXN1bHRBY3Rpb24gPSBcbiAgICB8IElSdW5uZXJFbnZpcm9ubWVudEV4ZWN1dGVkQWN0aW9uXG4gICAgfCBJUnVubmVyRW52aXJvbm1lbnRFeGVjdXRlRXJyb3JBY3Rpb25cbiAgICB8IElSdW5uZXJFbnZpcm9ubWVudEV4ZWN1dGVkV2l0aFJ1bm5lclJlc3VsdEFjdGlvbjtcblxuZXhwb3J0IHR5cGUgSVJ1bm5lckVudmlyb25tZW50QWN0aW9uID0gXG4gICAgfCBJUnVubmVyRW52aXJvbm1lbnRFeGVjdXRlZEFjdGlvblxuICAgIHwgSVJ1bm5lckVudmlyb25tZW50RXhlY3V0ZUVycm9yQWN0aW9uXG4gICAgfCBJUnVubmVyRW52aXJvbm1lbnRFeGVjdXRlZFdpdGhSdW5uZXJSZXN1bHRBY3Rpb25cbiAgICB8IElSdW5uZXJFbnZpcm9ubWVudFJlc29sdmVkQWN0aW9uO1xuIiwiaW1wb3J0IHsgSVJ1bm5lckFyZ3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVubmVyLWFyZ3VtZW50JztcblxuZXhwb3J0IGVudW0gUnVubmVyQ29udHJvbGxlckFjdGlvbiB7XG4gICAgRVhFQ1VURSA9ICdFWEVDVVRFJyxcbiAgICBSRVNPTFZFID0gJ1JFU09MVkUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSdW5uZXJDb250cm9sbGVyRXhlY3V0ZUFjdGlvbiB7XG4gICAgdHlwZTogUnVubmVyQ29udHJvbGxlckFjdGlvbi5FWEVDVVRFO1xuICAgIG1ldGhvZDogc3RyaW5nO1xuICAgIGFyZ3M6IElSdW5uZXJBcmd1bWVudFtdO1xuICAgIHRyYW5zZmVyPzogVHJhbnNmZXJhYmxlW11cbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIElSdW5uZXJDb250cm9sbGVyUmVzb2x2ZUFjdGlvbiB7XG4gICAgdHlwZTogUnVubmVyQ29udHJvbGxlckFjdGlvbi5SRVNPTFZFO1xufVxuXG5leHBvcnQgdHlwZSBJUnVubmVyQ29udHJvbGxlckFjdGlvbiA9IElSdW5uZXJDb250cm9sbGVyRXhlY3V0ZUFjdGlvbiB8IElSdW5uZXJDb250cm9sbGVyUmVzb2x2ZUFjdGlvbjtcblxuIiwiaW1wb3J0IHsgSUNvbm5lY3RDb250cm9sbGVyRXJyb3JEZXNlcmlhbGl6ZXIgfSBmcm9tICcuLi8uLi9jb25uZWN0L2NvbnRyb2xsZXIvY29ubmVjdC1jb250cm9sbGVyLWVycm9yLWRlc2VyaWFsaXplcic7XG5pbXBvcnQgeyBDb25uZWN0Q29udHJvbGxlciwgSUNvbm5lY3RDb250cm9sbGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29ubmVjdC9jb250cm9sbGVyL2Nvbm5lY3QuY29udHJvbGxlcic7XG5pbXBvcnQgeyBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2Vycm9yLW1lc3NhZ2UnO1xuaW1wb3J0IHsgV29ya2VyUnVubmVyRXJyb3JTZXJpYWxpemVyLCBXT1JLRVJfUlVOTkVSX0VSUk9SX1NFUklBTElaRVIgfSBmcm9tICcuLi8uLi9lcnJvcnMvZXJyb3Iuc2VyaWFsaXplcic7XG5pbXBvcnQgeyBDb25uZWN0aW9uV2FzQ2xvc2VkRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcnMvcnVubmVyLWVycm9ycyc7XG5pbXBvcnQgeyBOb2RlUnVubmVyUmVzb2x2ZXJCYXNlIH0gZnJvbSAnLi4vLi4vcmVzb2x2ZXIvbm9kZS9ub2RlLXJ1bm5lci5yZXNvbHZlcic7XG5pbXBvcnQgeyBJUnVubmVyUGFyYW1ldGVyLCBJUnVubmVyU2VyaWFsaXplZE1ldGhvZFJlc3VsdCwgUnVubmVyQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi90eXBlcy9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBJUnVubmVyRW52aXJvbm1lbnRFeGVjdXRlUmVzdWx0QWN0aW9uLCBJUnVubmVyRW52aXJvbm1lbnRSZXNvbHZlZEFjdGlvbiwgUnVubmVyRW52aXJvbm1lbnRBY3Rpb24gfSBmcm9tICcuLi9lbnZpcm9ubWVudC9ydW5uZXItZW52aXJvbm1lbnQuYWN0aW9ucyc7XG5pbXBvcnQgeyBSZXNvbHZlZFJ1bm5lciB9IGZyb20gJy4uL3Jlc29sdmVkLXJ1bm5lcic7XG5pbXBvcnQgeyBJUnVubmVyQnJpZGdlQ29uc3RydWN0b3IgfSBmcm9tICcuLi9ydW5uZXItYnJpZGdlL3J1bm5lci5icmlkZ2UnO1xuaW1wb3J0IHsgUnVubmVyVG9rZW4gfSBmcm9tICcuLi9ydW5uZXItYnJpZGdlL3J1bm5lcnMtbGlzdC5jb250cm9sbGVyJztcbmltcG9ydCB7IElSdW5uZXJDb250cm9sbGVyRXhlY3V0ZUFjdGlvbiwgUnVubmVyQ29udHJvbGxlckFjdGlvbiB9IGZyb20gJy4vcnVubmVyLWNvbnRyb2xsZXIuYWN0aW9ucyc7XG5cbnR5cGUgUnVubmVyQ29udHJvbGxlclBhcnRGYWN0b3J5PFIgZXh0ZW5kcyBSdW5uZXJDb25zdHJ1Y3Rvcj4gPSAoY29uZmlnOiB7XG4gICAgdG9rZW46IFJ1bm5lclRva2VuLFxuICAgIHBvcnQ6IE1lc3NhZ2VQb3J0LFxufSkgPT4gUnVubmVyQ29udHJvbGxlcjxSPjtcblxuZXhwb3J0IGludGVyZmFjZSBJUnVubmVyQ29udHJvbGxlckNvbmZpZzxSIGV4dGVuZHMgUnVubmVyQ29uc3RydWN0b3I+IHtcbiAgICB0b2tlbjogUnVubmVyVG9rZW47XG4gICAgb3JpZ2luYWxSdW5uZXJOYW1lOiBzdHJpbmc7XG4gICAgcG9ydDogTWVzc2FnZVBvcnQ7XG4gICAgcnVubmVyQnJpZGdlQ29uc3RydWN0b3I6IElSdW5uZXJCcmlkZ2VDb25zdHJ1Y3RvcjxSPjtcbiAgICBvbkNvbm5lY3Rpb25DbG9zZWQ/OiAoKSA9PiB2b2lkO1xuICAgIHJ1bm5lckNvbnRyb2xsZXJQYXJ0RmFjdG9yeTogUnVubmVyQ29udHJvbGxlclBhcnRGYWN0b3J5PFI+O1xufVxuXG5leHBvcnQgY2xhc3MgUnVubmVyQ29udHJvbGxlcjxSIGV4dGVuZHMgUnVubmVyQ29uc3RydWN0b3I+IHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgdG9rZW46IFJ1bm5lclRva2VuO1xuICAgIHB1YmxpYyByZXNvbHZlZFJ1bm5lcjogUmVzb2x2ZWRSdW5uZXI8SW5zdGFuY2VUeXBlPFI+PjtcblxuICAgIHB1YmxpYyByZWFkb25seSBvcmlnaW5hbFJ1bm5lck5hbWU6IHN0cmluZztcbiAgICAvLyBUT0RPIHVzZSBGYWN0b3J5XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGVycm9yU2VyaWFsaXplcjogV29ya2VyUnVubmVyRXJyb3JTZXJpYWxpemVyID0gV09SS0VSX1JVTk5FUl9FUlJPUl9TRVJJQUxJWkVSO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjb25uZWN0Q29udHJvbGxlcjogQ29ubmVjdENvbnRyb2xsZXI7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJ1bm5lckNvbnRyb2xsZXJQYXJ0RmFjdG9yeTogUnVubmVyQ29udHJvbGxlclBhcnRGYWN0b3J5PFI+O1xuXG4gICAgcHJpdmF0ZSBpc01hcmtlZEZvclRyYW5zZmVyID0gZmFsc2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvbkNvbm5lY3Rpb25DbG9zZWQ/OiAoKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcnVubmVyQnJpZGdlQ29uc3RydWN0b3I6IElSdW5uZXJCcmlkZ2VDb25zdHJ1Y3RvcjxSPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUmVhZG9ubHk8SVJ1bm5lckNvbnRyb2xsZXJDb25maWc8Uj4+KSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxSdW5uZXJOYW1lID0gY29uZmlnLm9yaWdpbmFsUnVubmVyTmFtZTtcbiAgICAgICAgdGhpcy5ydW5uZXJCcmlkZ2VDb25zdHJ1Y3RvciA9IGNvbmZpZy5ydW5uZXJCcmlkZ2VDb25zdHJ1Y3RvcjtcbiAgICAgICAgdGhpcy5yZXNvbHZlZFJ1bm5lciA9IG5ldyB0aGlzLnJ1bm5lckJyaWRnZUNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLnRva2VuID0gY29uZmlnLnRva2VuO1xuICAgICAgICB0aGlzLm9uQ29ubmVjdGlvbkNsb3NlZCA9IGNvbmZpZy5vbkNvbm5lY3Rpb25DbG9zZWQ7XG4gICAgICAgIHRoaXMucnVubmVyQ29udHJvbGxlclBhcnRGYWN0b3J5ID0gY29uZmlnLnJ1bm5lckNvbnRyb2xsZXJQYXJ0RmFjdG9yeTtcbiAgICAgICAgdGhpcy5jb25uZWN0Q29udHJvbGxlciA9IHRoaXMuYnVpbGRDb25uZWN0Q29udHJvbGxlcih7XG4gICAgICAgICAgICBwb3J0OiBjb25maWcucG9ydCxcbiAgICAgICAgICAgIGRlc3Ryb3lFcnJvckRlc2VyaWFsaXplcjogdGhpcy5lcnJvclNlcmlhbGl6ZXJcbiAgICAgICAgICAgICAgICAuZGVzZXJpYWxpemUuYmluZCh0aGlzLmVycm9yU2VyaWFsaXplcikgYXMgSUNvbm5lY3RDb250cm9sbGVyRXJyb3JEZXNlcmlhbGl6ZXIsXG4gICAgICAgICAgICBmb3JjZURlc3Ryb3lIYW5kbGVyOiB0aGlzLm9uQ29ubmVjdGlvbkNsb3NlZCxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RFcnJvckZhY3Rvcnk6IHRoaXMuZGlzY29ubmVjdEVycm9yRmFjdG9yeS5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShcbiAgICAgICAgbWV0aG9kTmFtZTogc3RyaW5nLFxuICAgICAgICBhcmdzOiBJUnVubmVyUGFyYW1ldGVyW10sXG4gICAgKTogUHJvbWlzZTxJUnVubmVyU2VyaWFsaXplZE1ldGhvZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkQXJndW1lbnRzRGF0YSA9IGF3YWl0IE5vZGVSdW5uZXJSZXNvbHZlckJhc2Uuc2VyaWFsaXplQXJndW1lbnRzKGFyZ3MpO1xuICAgICAgICBjb25zdCBhY3Rpb25SZXN1bHQgPSBhd2FpdCB0aGlzLmNvbm5lY3RDb250cm9sbGVyXG4gICAgICAgICAgICAuc2VuZEFjdGlvbjxJUnVubmVyQ29udHJvbGxlckV4ZWN1dGVBY3Rpb24sIElSdW5uZXJFbnZpcm9ubWVudEV4ZWN1dGVSZXN1bHRBY3Rpb24+KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSdW5uZXJDb250cm9sbGVyQWN0aW9uLkVYRUNVVEUsXG4gICAgICAgICAgICAgICAgYXJnczogc2VyaWFsaXplZEFyZ3VtZW50c0RhdGEuYXJncyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IHNlcmlhbGl6ZWRBcmd1bWVudHNEYXRhLnRyYW5zZmVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUV4ZWN1dGVSZXN1bHQoYWN0aW9uUmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGlzY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdENvbnRyb2xsZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbm5lY3Rpb25DbG9zZWQ/LigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3RDb250cm9sbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMub25Db25uZWN0aW9uQ2xvc2VkPy4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbG9uZUNvbnRyb2woKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFJ1bm5lckNvbnRyb2xsZXIpKHtcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnRva2VuLFxuICAgICAgICAgICAgcnVubmVyQnJpZGdlQ29uc3RydWN0b3I6IHRoaXMucnVubmVyQnJpZGdlQ29uc3RydWN0b3IsXG4gICAgICAgICAgICBwb3J0OiBhd2FpdCB0aGlzLnJlc29sdmVDb250cm9sKCksXG4gICAgICAgICAgICBvcmlnaW5hbFJ1bm5lck5hbWU6IHRoaXMub3JpZ2luYWxSdW5uZXJOYW1lLFxuICAgICAgICAgICAgcnVubmVyQ29udHJvbGxlclBhcnRGYWN0b3J5OiB0aGlzLnJ1bm5lckNvbnRyb2xsZXJQYXJ0RmFjdG9yeSxcbiAgICAgICAgfSkgYXMgdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0ZvclRyYW5zZmVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0Q29udHJvbGxlci5kaXNjb25uZWN0U3RhdHVzKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmNvbm5lY3RDb250cm9sbGVyLmRpc2Nvbm5lY3RTdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc01hcmtlZEZvclRyYW5zZmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVzb2x2ZUNvbnRyb2woKTogUHJvbWlzZTxNZXNzYWdlUG9ydD4ge1xuICAgICAgICBjb25zdCBhY3Rpb25SZXN1bHQgPSBhd2FpdCB0aGlzLmNvbm5lY3RDb250cm9sbGVyLnNlbmRBY3Rpb24oe1xuICAgICAgICAgICAgdHlwZTogUnVubmVyQ29udHJvbGxlckFjdGlvbi5SRVNPTFZFLFxuICAgICAgICB9KSBhcyBJUnVubmVyRW52aXJvbm1lbnRSZXNvbHZlZEFjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvblJlc3VsdC5wb3J0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyByZXNvbHZlT3JUcmFuc2ZlckNvbnRyb2woKTogUHJvbWlzZTxNZXNzYWdlUG9ydD4ge1xuICAgICAgICBpZiAodGhpcy5pc01hcmtlZEZvclRyYW5zZmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2ZlckNvbnRyb2woKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlQ29udHJvbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wTGlzdGVuKGlzQ2xvc2VQb3J0ID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0Q29udHJvbGxlci5kaXNjb25uZWN0U3RhdHVzKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmNvbm5lY3RDb250cm9sbGVyLmRpc2Nvbm5lY3RTdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0Q29udHJvbGxlci5zdG9wTGlzdGVuKGlzQ2xvc2VQb3J0KTtcbiAgICAgICAgdGhpcy5vbkNvbm5lY3Rpb25DbG9zZWQ/LigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVFeGVjdXRlUmVzdWx0KGFjdGlvblJlc3VsdDogSVJ1bm5lckVudmlyb25tZW50RXhlY3V0ZVJlc3VsdEFjdGlvbik6IElSdW5uZXJTZXJpYWxpemVkTWV0aG9kUmVzdWx0IHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb25SZXN1bHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSdW5uZXJFbnZpcm9ubWVudEFjdGlvbi5FWEVDVVRFX0VSUk9SOlxuICAgICAgICAgICAgICAgIHRocm93IHRoaXMuZXJyb3JTZXJpYWxpemVyLmRlc2VyaWFsaXplKGFjdGlvblJlc3VsdCk7XG4gICAgICAgICAgICBjYXNlIFJ1bm5lckVudmlyb25tZW50QWN0aW9uLkVYRUNVVEVEX1dJVEhfUlVOTkVSX1JFU1VMVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ydW5uZXJDb250cm9sbGVyUGFydEZhY3Rvcnkoe1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uUmVzdWx0LnRva2VuLFxuICAgICAgICAgICAgICAgICAgICBwb3J0OiBhY3Rpb25SZXN1bHQucG9ydCxcbiAgICAgICAgICAgICAgICB9KS5yZXNvbHZlZFJ1bm5lcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvblJlc3VsdC5yZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZENvbm5lY3RDb250cm9sbGVyKFxuICAgICAgICBjb25maWc6IElDb25uZWN0Q29udHJvbGxlckNvbmZpZyxcbiAgICApOiBDb25uZWN0Q29udHJvbGxlciB7XG4gICAgICAgIHJldHVybiBuZXcgQ29ubmVjdENvbnRyb2xsZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZmVyQ29udHJvbCgpOiBNZXNzYWdlUG9ydCB7XG4gICAgICAgIHRoaXMuc3RvcExpc3RlbihmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3RDb250cm9sbGVyLnBvcnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNjb25uZWN0RXJyb3JGYWN0b3J5KGVycm9yOiBDb25uZWN0aW9uV2FzQ2xvc2VkRXJyb3IpOiBDb25uZWN0aW9uV2FzQ2xvc2VkRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENvbm5lY3Rpb25XYXNDbG9zZWRFcnJvcih7XG4gICAgICAgICAgICAuLi5lcnJvcixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuQ09OTkVDVElPTl9XQVNfQ0xPU0VEKHtcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy50b2tlbixcbiAgICAgICAgICAgICAgICBydW5uZXJOYW1lOiB0aGlzLm9yaWdpbmFsUnVubmVyTmFtZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yLCBJUnVubmVyUGFyYW1ldGVyLCBJUnVubmVyU2VyaWFsaXplZE1ldGhvZFJlc3VsdCwgUnVubmVyQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi90eXBlcy9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBSdW5uZXJDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci9ydW5uZXIuY29udHJvbGxlcic7XG5pbXBvcnQgeyBSZXNvbHZlZFJ1bm5lciB9IGZyb20gJy4uL3Jlc29sdmVkLXJ1bm5lcic7XG5cbmV4cG9ydCB0eXBlIElSdW5uZXJCcmlkZ2VDb25zdHJ1Y3RvcjxUIGV4dGVuZHMgUnVubmVyQ29uc3RydWN0b3IgPSBSdW5uZXJDb25zdHJ1Y3Rvcj5cbiAgICA9IENvbnN0cnVjdG9yPFJlc29sdmVkUnVubmVyPEluc3RhbmNlVHlwZTxUPj4sIENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgUnVubmVyQnJpZGdlPj47XG5cbmV4cG9ydCBjb25zdCBFWEVDVVRFX1JVTk5FUl9DT05UUk9MTEVSX01FVEhPRCA9ICdfX3dvcmtlclJ1bm5lcl9leGVjdXRlQ29udHJvbGxlck1ldGhvZCc7XG5leHBvcnQgY29uc3QgUlVOTkVSX0JSSURHRV9DT05UUk9MTEVSID0gJ19fd29ya2VyUnVubmVyX2JyaWRnZUNvbnRyb2xsZXInO1xuXG5leHBvcnQgY2xhc3MgUnVubmVyQnJpZGdlIHtcblxuICAgIHByaXZhdGUgW1JVTk5FUl9CUklER0VfQ09OVFJPTExFUl06IFJ1bm5lckNvbnRyb2xsZXI8UnVubmVyQ29uc3RydWN0b3I+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNvbnRyb2xsZXI6IFJ1bm5lckNvbnRyb2xsZXI8UnVubmVyQ29uc3RydWN0b3I+LFxuICAgICkge1xuICAgICAgICB0aGlzW1JVTk5FUl9CUklER0VfQ09OVFJPTExFUl0gPSBjb250cm9sbGVyO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcHVibGljIHN0YXRpYyBpc1J1bm5lckJyaWRnZShpbnN0YW5jZTogYW55KTogaW5zdGFuY2UgaXMgUnVubmVyQnJpZGdlIHtcbiAgICAgICAgcmV0dXJuICEhaW5zdGFuY2UgJiYgISFpbnN0YW5jZVtSVU5ORVJfQlJJREdFX0NPTlRST0xMRVJdO1xuICAgIH1cblxuICAgIC8qKiBVbnN1YnNjcmliZSBmcm9tIHJ1bm5lciwgaWYgdGhlIGNvbnRyb2wgb2JqZWN0IHdhcyB0aGUgbGFzdCwgdGhlbiBydW5uZXIgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlc3Ryb3llZCAqL1xuICAgIHB1YmxpYyBhc3luYyBkaXNjb25uZWN0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzW1JVTk5FUl9CUklER0VfQ09OVFJPTExFUl0uZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIC8qKiBEZXN0cm95aW5nIGFuZCByZW1vdmUgUnVubmVyIGluc3RhbmNlIGZyb20gcmVzb2x2ZWQgUnVubmVycyBsaXN0IGluIGBSdW5uZXJSZXNvbHZlcmAgaW5zdGFuY2UgKi9cbiAgICBwdWJsaWMgYXN5bmMgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpc1tSVU5ORVJfQlJJREdFX0NPTlRST0xMRVJdLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKiogUmV0dXJucyBhIG5ldyBjb250cm9sIG9iamVjdCBmb3IgdGhlIHNhbWUgUnVubmVyIGluc3RhbmNlICovXG4gICAgcHVibGljIGFzeW5jIGNsb25lQ29udHJvbCgpOiBQcm9taXNlPHRoaXM+IHtcbiAgICAgICAgY29uc3QgcnVubmVyQ29udHJvbGxlciA9IGF3YWl0IHRoaXNbUlVOTkVSX0JSSURHRV9DT05UUk9MTEVSXS5jbG9uZUNvbnRyb2woKTtcbiAgICAgICAgcmV0dXJuIHJ1bm5lckNvbnRyb2xsZXIucmVzb2x2ZWRSdW5uZXIgYXMgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBhIFJ1bm5lciBpcyBmbGFnZ2VkIGZvciB0cmFuc2ZlciwgaWYgaXQgaXMgdXNlZCBhcyBhcmd1bWVudCBvciBhcyBtZXRob2QgcmVzdWx0LFxuICAgICAqIHRoZSBvcmlnaW5hbCBjb250cm9sIHdpbGwgYmUgdHJhbnNmZXJyZWQuIFRoZSBvcmlnaW5hbCBSZXNvbHZlZCBSdW5uZXIgd2lsbCBsb3NlIGNvbnRyb2wuXG4gICAgICogSW4gdGhpcyBjYXNlLCB0aGUgdHJhbnNmZXIgb2YgdGhlIFJlc29sdmVkIFJ1bm5lciB3aWxsIGJlIGZhc3RlclxuICAgICAqIGJlY2F1c2UgaXQgd2lsbCBub3QgdGFrZSB0aW1lIHRvIHJlcXVlc3QgYSBjb3B5IG9mIHRoZSBjb250cm9sLlxuICAgICAqIEl0IGlzIGNvbnZlbmllbnQgdG8gdXNlIGFzIGFuIGF1dG9tYXRpYyBkaXNjb25uZWN0IGFmdGVyIHJldHVybmluZyB0aGUgcmVzdWx0IG9mIGEgbWV0aG9kLlxuICAgICAqL1xuICAgIHB1YmxpYyBtYXJrRm9yVHJhbnNmZXIoKTogdGhpcyB7XG4gICAgICAgIHRoaXNbUlVOTkVSX0JSSURHRV9DT05UUk9MTEVSXS5tYXJrRm9yVHJhbnNmZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBhc3luYyBbRVhFQ1VURV9SVU5ORVJfQ09OVFJPTExFUl9NRVRIT0RdKFxuICAgICAgICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgICAgIGFyZ3M6IElSdW5uZXJQYXJhbWV0ZXJbXSxcbiAgICApOiBQcm9taXNlPElSdW5uZXJTZXJpYWxpemVkTWV0aG9kUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzW1JVTk5FUl9CUklER0VfQ09OVFJPTExFUl0uZXhlY3V0ZShtZXRob2ROYW1lLCBhcmdzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTIH0gZnJvbSBcIi4uLy4uL2Vycm9ycy9lcnJvci1tZXNzYWdlXCI7XG5pbXBvcnQgeyBSdW5uZXJOb3RGb3VuZCB9IGZyb20gXCIuLi8uLi9lcnJvcnMvcnVubmVyLWVycm9yc1wiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIFJ1bm5lckNvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyBKc29uT2JqZWN0IH0gZnJvbSBcIi4uLy4uL3R5cGVzL2pzb24tb2JqZWN0XCI7XG5pbXBvcnQgeyBFWEVDVVRFX1JVTk5FUl9DT05UUk9MTEVSX01FVEhPRCwgSVJ1bm5lckJyaWRnZUNvbnN0cnVjdG9yLCBSdW5uZXJCcmlkZ2UgfSBmcm9tIFwiLi9ydW5uZXIuYnJpZGdlXCI7XG5cbi8qKlxuICogUnVubmVyIGlkZW50aWZpY2F0aW9uIHRva2VuLlxuICogQnkgZGVmYXVsdCBlcXVhbCB0byB0aGUgUnVubmVyIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0IHR5cGUgUnVubmVyVG9rZW4gPSBzdHJpbmc7XG5cbmludGVyZmFjZSBJUnVubmVyV2lkdGhUb2tlbjxSIGV4dGVuZHMgUnVubmVyQ29uc3RydWN0b3IgPSBSdW5uZXJDb25zdHJ1Y3Rvcj4ge1xuICAgIHRva2VuOiBSdW5uZXJUb2tlbixcbiAgICBydW5uZXI6IFIsXG59XG5cbmV4cG9ydCB0eXBlIFJ1bm5lcnNMaXN0ID0gUmVhZG9ubHlBcnJheTxJUnVubmVyV2lkdGhUb2tlbiB8IFJ1bm5lckNvbnN0cnVjdG9yPlxuXG50eXBlIGlzTGl0ZXJhbFN0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiA9IHN0cmluZyBleHRlbmRzIFQgPyBmYWxzZSA6IHRydWU7XG5cbmV4cG9ydCB0eXBlIEFueVJ1bm5lckZyb21MaXN0PFQgZXh0ZW5kcyBSdW5uZXJzTGlzdD5cbiAgICA9IFQgZXh0ZW5kcyBBcnJheUxpa2U8aW5mZXIgVE9SPlxuICAgICAgICA/IFRPUiBleHRlbmRzIElSdW5uZXJXaWR0aFRva2VuXG4gICAgICAgICAgICA/IFRPUlsncnVubmVyJ11cbiAgICAgICAgICAgIDogVE9SXG4gICAgICAgIDogbmV2ZXI7XG5cbmV4cG9ydCB0eXBlIFJ1bm5lcklkZW50aWZpZXI8TSBleHRlbmRzIFJ1bm5lcnNMaXN0ID0gUnVubmVyc0xpc3Q+ID0gUnVubmVyVG9rZW4gfCBBbnlSdW5uZXJGcm9tTGlzdDxNPjtcblxudHlwZSBSdW5uZXJCeVRva2VuPE0gZXh0ZW5kcyBSdW5uZXJzTGlzdCwgVCBleHRlbmRzIFJ1bm5lclRva2VuPlxuICAgID0gaXNMaXRlcmFsU3RyaW5nPFQ+IGV4dGVuZHMgdHJ1ZVxuICAgICAgICA/IE0gZXh0ZW5kcyBBcnJheUxpa2U8aW5mZXIgVE9SPlxuICAgICAgICAgICAgPyBUT1IgZXh0ZW5kcyBJUnVubmVyV2lkdGhUb2tlblxuICAgICAgICAgICAgICAgID8gVCBleHRlbmRzIFRPUlsndG9rZW4nXVxuICAgICAgICAgICAgICAgICAgICA/IGlzTGl0ZXJhbFN0cmluZzxUT1JbJ3Rva2VuJ10+IGV4dGVuZHMgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBUT1JbJ3J1bm5lciddXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5ldmVyXG4gICAgICAgICAgICAgICAgICAgIDogbmV2ZXJcbiAgICAgICAgICAgICAgICA6IG5ldmVyXG4gICAgICAgICAgICA6IG5ldmVyXG4gICAgICAgIDpuZXZlcjtcblxudHlwZSBOb3RUYXJnZXRSdW5uZXJzPE0gZXh0ZW5kcyBSdW5uZXJzTGlzdCwgVCBleHRlbmRzIFJ1bm5lclRva2VuPlxuICAgID0gaXNMaXRlcmFsU3RyaW5nPFQ+IGV4dGVuZHMgdHJ1ZVxuICAgICAgICA/IE0gZXh0ZW5kcyBBcnJheUxpa2U8aW5mZXIgVE9SPlxuICAgICAgICAgICAgPyBUT1IgZXh0ZW5kcyBJUnVubmVyV2lkdGhUb2tlblxuICAgICAgICAgICAgICAgID8gVCBleHRlbmRzIFRPUlsndG9rZW4nXVxuICAgICAgICAgICAgICAgICAgICA/IG5ldmVyXG4gICAgICAgICAgICAgICAgICAgIDogaXNMaXRlcmFsU3RyaW5nPFRPUlsndG9rZW4nXT4gZXh0ZW5kcyB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFRPUlsncnVubmVyJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV2ZXJcbiAgICAgICAgICAgICAgICA6IG5ldmVyXG4gICAgICAgICAgICA6IG5ldmVyXG4gICAgICAgIDogbmV2ZXI7XG5cbnR5cGUgUnVubmVySW5JZGVudGlmaWVyTWFwPE0gZXh0ZW5kcyBSdW5uZXJzTGlzdCwgUiBleHRlbmRzIFJ1bm5lckNvbnN0cnVjdG9yPlxuICAgID0gTSBleHRlbmRzIEFycmF5TGlrZTxpbmZlciBUT1I+XG4gICAgICAgID8gVE9SIGV4dGVuZHMgUiBcbiAgICAgICAgICAgID8gUlxuICAgICAgICAgICAgOiBUT1IgZXh0ZW5kcyBJUnVubmVyV2lkdGhUb2tlblxuICAgICAgICAgICAgICAgID8gVE9SWydydW5uZXInXSBleHRlbmRzIFJcbiAgICAgICAgICAgICAgICAgICAgPyBUT1JbJ3J1bm5lciddXG4gICAgICAgICAgICAgICAgICAgIDogbmV2ZXJcbiAgICAgICAgICAgICAgICA6IG5ldmVyXG4gICAgICAgIDogbmV2ZXI7XG5cbi8vIFRPRE8gSnVzdCB0cmFuc2ZlciBSdW5uZXJJZGVudGlmaWVyTWFwIHRvIElSdW5uZXJXaWR0aFRva2VuXG5leHBvcnQgdHlwZSBSdW5uZXJCeUlkZW50aWZpZXI8TSBleHRlbmRzIFJ1bm5lcnNMaXN0LCBUIGV4dGVuZHMgUnVubmVySWRlbnRpZmllcj5cbiAgICA9IFQgZXh0ZW5kcyBSdW5uZXJDb25zdHJ1Y3RvclxuICAgICAgICA/IFJ1bm5lckluSWRlbnRpZmllck1hcDxNLCBUPlxuICAgICAgICA6IFQgZXh0ZW5kcyBSdW5uZXJUb2tlblxuICAgICAgICAgICAgPyBSdW5uZXJCeVRva2VuPE0sIFQ+IGV4dGVuZHMgbmV2ZXJcbiAgICAgICAgICAgICAgICA/IEV4Y2x1ZGU8QW55UnVubmVyRnJvbUxpc3Q8TT4sIE5vdFRhcmdldFJ1bm5lcnM8TSwgVD4+XG4gICAgICAgICAgICAgICAgOiBSdW5uZXJCeVRva2VuPE0sIFQ+XG4gICAgICAgICAgICA6IG5ldmVyXG5cbmludGVyZmFjZSBJUnVubmVyQnJpZGdlQ29sbGVjdGlvbkNvbmZpZzxNIGV4dGVuZHMgUnVubmVyc0xpc3Q+IHtcbiAgICBydW5uZXJzOiBNO1xufVxuXG5pbnRlcmZhY2UgSVJ1bm5lckJ5VG9rZW5EYXRhUmVjb3JkIHtcbiAgICBbdG9rZW46IHN0cmluZ106IHtcbiAgICAgICAgcnVubmVyQ29uc3RydWN0b3I6IFJ1bm5lckNvbnN0cnVjdG9yO1xuICAgICAgICBicmlkZ2VDb25zdHJ1Y3RvcjogSVJ1bm5lckJyaWRnZUNvbnN0cnVjdG9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJ1bm5lcnNMaXN0Q29udHJvbGxlcjxMIGV4dGVuZHMgUnVubmVyc0xpc3Q+IHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgcnVubmVyQnlUb2tlbkRhdGFSZWNvcmQ6IElSdW5uZXJCeVRva2VuRGF0YVJlY29yZCA9IHt9O1xuICAgIHB1YmxpYyByZWFkb25seSBydW5uZXJUb2tlbk1hcCA9IG5ldyBNYXA8QW55UnVubmVyRnJvbUxpc3Q8TD4sIFJ1bm5lclRva2VuPigpO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJUnVubmVyQnJpZGdlQ29sbGVjdGlvbkNvbmZpZzxMPikge1xuICAgICAgICB0aGlzLmFwcGx5UnVubmVyTWFwKGNvbmZpZy5ydW5uZXJzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UnVubmVyVG9rZW48UiBleHRlbmRzIEFueVJ1bm5lckZyb21MaXN0PEw+PihydW5uZXI6IFIpOiBSdW5uZXJUb2tlbiB7XG4gICAgICAgIGNvbnN0IHJ1bm5lclRva2VuID0gdGhpcy5ydW5uZXJUb2tlbk1hcC5nZXQocnVubmVyKTtcbiAgICAgICAgaWYgKCFydW5uZXJUb2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bm5lck5vdEZvdW5kKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTLkNPTlNUUlVDVE9SX05PVF9GT1VORCh7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lck5hbWU6IHJ1bm5lci5uYW1lLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnVubmVyVG9rZW47XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJ1bm5lclRva2VuQnlJbnN0YW5jZTxSIGV4dGVuZHMgQW55UnVubmVyRnJvbUxpc3Q8TD4+KHJ1bm5lckluc3RhbmNlOiBJbnN0YW5jZVR5cGU8Uj4pOiBSdW5uZXJUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJ1bm5lclRva2VuKE9iamVjdC5nZXRQcm90b3R5cGVPZihydW5uZXJJbnN0YW5jZSkuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSdW5uZXI8VCBleHRlbmRzIFJ1bm5lclRva2VuID0gUnVubmVyVG9rZW4+KHRva2VuOiBUKTogUnVubmVyQnlJZGVudGlmaWVyPEwsIFQ+IHtcbiAgICAgICAgY29uc3QgcnVubmVyRGF0YSA9IHRoaXMucnVubmVyQnlUb2tlbkRhdGFSZWNvcmRbdG9rZW5dO1xuICAgICAgICBpZiAoIXJ1bm5lckRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSdW5uZXJOb3RGb3VuZCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogV09SS0VSX1JVTk5FUl9FUlJPUl9NRVNTQUdFUy5DT05TVFJVQ1RPUl9OT1RfRk9VTkQoeyB0b2tlbjogdG9rZW4gfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydW5uZXJEYXRhLnJ1bm5lckNvbnN0cnVjdG9yIGFzIFJ1bm5lckJ5SWRlbnRpZmllcjxMLCBUPjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tUb2tlbjxUIGV4dGVuZHMgUnVubmVyVG9rZW4gPSBSdW5uZXJUb2tlbj4odG9rZW46IFQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRva2VuIGluIHRoaXMucnVubmVyQnlUb2tlbkRhdGFSZWNvcmQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJ1bm5lckJyaWRnZUNvbnN0cnVjdG9yPFQgZXh0ZW5kcyBSdW5uZXJUb2tlbiA9IFJ1bm5lclRva2VuPihcbiAgICAgICAgdG9rZW46IFRcbiAgICApOiBJUnVubmVyQnJpZGdlQ29uc3RydWN0b3I8UnVubmVyQnlJZGVudGlmaWVyPEwsIFQ+PiB7XG4gICAgICAgIGNvbnN0IHJ1bm5lckRhdGEgPSB0aGlzLnJ1bm5lckJ5VG9rZW5EYXRhUmVjb3JkW3Rva2VuXTtcbiAgICAgICAgaWYgKCFydW5uZXJEYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUnVubmVyTm90Rm91bmQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuQ09OU1RSVUNUT1JfTk9UX0ZPVU5EKHsgdG9rZW46IHRva2VuIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnVubmVyRGF0YS5icmlkZ2VDb25zdHJ1Y3RvciBhcyBJUnVubmVyQnJpZGdlQ29uc3RydWN0b3I8UnVubmVyQnlJZGVudGlmaWVyPEwsIFQ+PjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UnVubmVyTGlzdCgpOiBJUnVubmVyV2lkdGhUb2tlbjxBbnlSdW5uZXJGcm9tTGlzdDxMPj5bXSB7XG4gICAgICAgIGNvbnN0IHJ1bm5lcnNMaXN0ID0gbmV3IEFycmF5PElSdW5uZXJXaWR0aFRva2VuPEFueVJ1bm5lckZyb21MaXN0PEw+Pj4oKTtcbiAgICAgICAgZm9yIChjb25zdCBbcnVubmVyLCB0b2tlbl0gb2YgdGhpcy5ydW5uZXJUb2tlbk1hcCkge1xuICAgICAgICAgICAgcnVubmVyc0xpc3QucHVzaCh7IHJ1bm5lciwgdG9rZW4gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJ1bm5lcnNMaXN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwbHlSdW5uZXJNYXAocnVubmVyc01hcDogTCk6IHZvaWQge1xuICAgICAgICBmb3IgKGNvbnN0IHJ1bm5lciBvZiBydW5uZXJzTWFwKSB7XG4gICAgICAgICAgICBsZXQgdG9rZW46IFJ1bm5lclRva2VuO1xuICAgICAgICAgICAgbGV0IHJ1bm5lckNvbnN0cnVjdG9yOiBBbnlSdW5uZXJGcm9tTGlzdDxMPjtcbiAgICAgICAgICAgIGlmICgndG9rZW4nIGluIHJ1bm5lcikge1xuICAgICAgICAgICAgICAgIHRva2VuID0gcnVubmVyLnRva2VuO1xuICAgICAgICAgICAgICAgIHJ1bm5lckNvbnN0cnVjdG9yID0gcnVubmVyLnJ1bm5lciBhcyBBbnlSdW5uZXJGcm9tTGlzdDxMPjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSBydW5uZXIubmFtZTtcbiAgICAgICAgICAgICAgICBydW5uZXJDb25zdHJ1Y3RvciA9IHJ1bm5lciBhcyBBbnlSdW5uZXJGcm9tTGlzdDxMPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucnVubmVyQnlUb2tlbkRhdGFSZWNvcmRbdG9rZW5dID0ge1xuICAgICAgICAgICAgICAgIGJyaWRnZUNvbnN0cnVjdG9yOiB0aGlzLnJlc29sdmVSdW5uZXJCcmlkZ2VDb25zdHJ1Y3RvcihydW5uZXJDb25zdHJ1Y3RvciksXG4gICAgICAgICAgICAgICAgcnVubmVyQ29uc3RydWN0b3I6IHJ1bm5lckNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMucnVubmVyVG9rZW5NYXAuc2V0KHJ1bm5lckNvbnN0cnVjdG9yLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY3Vyc2l2ZU92ZXJyaWRlUHJvcGVydHkoY29uc3RydWN0OiBDb25zdHJ1Y3RvciwgcHJvdG86IENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvLnByb3RvdHlwZSkpIHtcbiAgICAgICAgICAgIGlmICghKGtleSBpbiBSdW5uZXJCcmlkZ2UucHJvdG90eXBlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdC5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKHRoaXM6IFJ1bm5lckJyaWRnZSwgLi4uYXJnczogSnNvbk9iamVjdFtdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW0VYRUNVVEVfUlVOTkVSX0NPTlRST0xMRVJfTUVUSE9EXShrZXksIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgICAgICAgICAgaWYgKHBhcmVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3Vyc2l2ZU92ZXJyaWRlUHJvcGVydHkoY29uc3RydWN0LCBwYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlUnVubmVyQnJpZGdlQ29uc3RydWN0b3IocnVubmVyOiBSdW5uZXJDb25zdHJ1Y3Rvcik6IElSdW5uZXJCcmlkZ2VDb25zdHJ1Y3RvcjxSdW5uZXJDb25zdHJ1Y3Rvcj4ge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSAnUmVzb2x2ZWQnICsgcnVubmVyLm5hbWU7XG4gICAgICAgIGNvbnN0IFJlc29sdmVkUnVubmVyID0ge1tjbGFzc05hbWVdOiBjbGFzcyBleHRlbmRzIFJ1bm5lckJyaWRnZSB7fX1bY2xhc3NOYW1lXTtcbiAgICAgICAgdGhpcy5yZWN1cnNpdmVPdmVycmlkZVByb3BlcnR5KFJlc29sdmVkUnVubmVyLCBydW5uZXIpO1xuICAgICAgICByZXR1cm4gUmVzb2x2ZWRSdW5uZXIgYXMgdW5rbm93biBhcyBJUnVubmVyQnJpZGdlQ29uc3RydWN0b3I8UnVubmVyQ29uc3RydWN0b3I+O1xuICAgIH1cbn0gXG4iLCJpbXBvcnQgeyBSdW5uZXJUb2tlbiB9IGZyb20gJy4uL3J1bm5lci9ydW5uZXItYnJpZGdlL3J1bm5lcnMtbGlzdC5jb250cm9sbGVyJztcbmltcG9ydCB7IEpzb25PYmplY3QgfSBmcm9tICcuL2pzb24tb2JqZWN0JztcblxuZXhwb3J0IGVudW0gUnVubmVyQXJndW1lbnRUeXBlIHtcbiAgICBKU09OID0gJ0pTT04nLFxuICAgIFJVTk5FUl9JTlNUQU5DRSA9ICdSVU5ORVJfSU5TVEFOQ0UnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSdW5uZXJKU09OQXJndW1lbnQge1xuICAgIHR5cGU6IFJ1bm5lckFyZ3VtZW50VHlwZS5KU09OO1xuICAgIGRhdGE6IEpzb25PYmplY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bm5lckVudmlyb25tZW50QXJndW1lbnQge1xuICAgIHR5cGU6IFJ1bm5lckFyZ3VtZW50VHlwZS5SVU5ORVJfSU5TVEFOQ0U7XG4gICAgcG9ydDogTWVzc2FnZVBvcnQ7XG4gICAgdG9rZW46IFJ1bm5lclRva2VuO1xufVxuXG5leHBvcnQgdHlwZSBJUnVubmVyQXJndW1lbnQgPSBJUnVubmVySlNPTkFyZ3VtZW50IHwgSVJ1bm5lckVudmlyb25tZW50QXJndW1lbnQ7XG4iLCJpbXBvcnQgeyBUcmFuc2ZlcmFibGVKc29uT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMvanNvbi1vYmplY3QnO1xuXG4vKiogQWxsb3dzIHlvdSB0byB1c2UgYFRyYW5zZmVyYWJsZWAgZGF0YSBhcyBhcmd1bWVudCBvciBhIG1ldGhvZCByZXN1bHQuICovXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJSdW5uZXJEYXRhPFxuICAgIEQgZXh0ZW5kcyBUcmFuc2ZlcmFibGVKc29uT2JqZWN0ID0gVHJhbnNmZXJhYmxlSnNvbk9iamVjdCxcbiAgICBUIGV4dGVuZHMgVHJhbnNmZXJhYmxlID0gVHJhbnNmZXJhYmxlXG4+IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGRhdGE6IEQsXG4gICAgICAgIHB1YmxpYyB0cmFuc2ZlcjogVFtdLFxuICAgICkgeyB9XG59XG4iLCJleHBvcnQgZW51bSBXb3JrZXJSZXNvbHZlckJyaWRnZUFjdGlvbiB7XG4gICAgQ09OTkVDVEVEID0gJ0NPTk5FQ1RFRCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtlclJlc29sdmVyQnJpZGdlQ29ubmVjdGVkQWN0aW9uIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHR5cGU6IFdvcmtlclJlc29sdmVyQnJpZGdlQWN0aW9uLkNPTk5FQ1RFRDtcbiAgICBwb3J0OiBNZXNzYWdlUG9ydDtcbn1cbiIsImV4cG9ydCBlbnVtIFJlc29sdmVyQnJpZGdlQWN0aW9uIHtcbiAgICBDT05ORUNUID0gJ0NPTk5FQ1QnLFxuICAgIERJU0NPTk5FQ1QgPSAnRElTQ09OTkVDVCcsXG4gICAgREVTVFJPWSA9ICdERVNUUk9ZJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVzb2x2ZXJCcmlkZ2VDb25uZWN0QWN0aW9uIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHR5cGU6IFJlc29sdmVyQnJpZGdlQWN0aW9uLkNPTk5FQ1Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc29sdmVyQnJpZGdlRGlzY29ubmVjdEFjdGlvbiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0eXBlOiBSZXNvbHZlckJyaWRnZUFjdGlvbi5ESVNDT05ORUNUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvbHZlckJyaWRnZURlc3Ryb3lBY3Rpb24ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdHlwZTogUmVzb2x2ZXJCcmlkZ2VBY3Rpb24uREVTVFJPWTtcbn1cbiIsImltcG9ydCB7IFdvcmtlclJ1bm5lclVuZXhwZWN0ZWRFcnJvciB9IGZyb20gXCIuLi8uLi8uLi9lcnJvcnMvd29ya2VyLXJ1bm5lci1lcnJvclwiO1xuaW1wb3J0IHsgSVByb21pc2VNZXRob2RzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3Byb21pc2UtbGlzdC5yZXNvbHZlclwiO1xuaW1wb3J0IHsgSVdvcmtlclJlc29sdmVyQnJpZGdlQ29ubmVjdGVkQWN0aW9uLCBXb3JrZXJSZXNvbHZlckJyaWRnZUFjdGlvbiB9IGZyb20gXCIuLi93b3JrZXIvd29ya2VyLXJlc29sdmVyLWJyaWRnZS5hY3Rpb25zXCI7XG5pbXBvcnQgeyBJQmFzZVJlc29sdmVyQnJpZGdlIH0gZnJvbSAnLi9iYXNlLXJlc29sdmVyLmJyaWRnZSdcbmltcG9ydCB7IElSZXNvbHZlckJyaWRnZUNvbm5lY3RBY3Rpb24sIFJlc29sdmVyQnJpZGdlQWN0aW9uIH0gZnJvbSBcIi4vcmVzb2x2ZXItYnJpZGdlLmFjdGlvbnNcIjtcblxuaW50ZXJmYWNlIElCcmlkZ2VDb25uZWN0SW5mbyBleHRlbmRzIFJlYWRvbmx5PElQcm9taXNlTWV0aG9kczxNZXNzYWdlUG9ydD4+e1xuICAgIHJlYWRvbmx5IGFjdGlvbklkOiBudW1iZXIsXG4gICAgbWVzc2FnZVBvcnQ/OiBNZXNzYWdlUG9ydCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVzb2x2ZXJCcmlkZ2VDb25maWcge1xuICAgIHdvcmtlcjogV29ya2VyO1xufVxuXG5leHBvcnQgY2xhc3MgUmVzb2x2ZXJCcmlkZ2UgaW1wbGVtZW50cyBJQmFzZVJlc29sdmVyQnJpZGdlIHtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBMQVNUX1dPUktFUl9BQ1RJT05fSUQgPSAnX193b3JrZXJSdW5uZXJfbGFzdEFjdGlvbklkJztcbiAgICBcbiAgICBwdWJsaWMgbWVzc2FnZVBvcnQ/OiBNZXNzYWdlUG9ydDtcblxuICAgIC8qKiBUaGUgYnJpZGdlIGhhcyBhIGNvbm5lY3Rpb24gaWYgdGhlIHByb3BlcnR5IGV4aXN0ICovXG4gICAgcHJpdmF0ZSBjb25uZWN0SW5mbz86IElCcmlkZ2VDb25uZWN0SW5mbztcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdvcmtlcjogV29ya2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd29ya2VyTWVzc2FnZUhhbmRsZXIgPSB0aGlzLm9uV29ya2VyTWVzc2FnZS5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJUmVzb2x2ZXJCcmlkZ2VDb25maWcpIHtcbiAgICAgICAgdGhpcy53b3JrZXIgPSBjb25maWcud29ya2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25uZWN0KCk6IFByb21pc2U8TWVzc2FnZVBvcnQ+IHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdEluZm8pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrZXJSdW5uZXJVbmV4cGVjdGVkRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb25uZWN0aW9uIGFscmVhZHkgZXN0YWJsaXNoZWQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbklkID0gdGhpcy5yZXNvbHZlQWN0aW9uSWQoKTtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdEluZm8gPSB7IGFjdGlvbklkLCByZXNvbHZlLCByZWplY3QgfTtcbiAgICAgICAgICAgIHRoaXMud29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLndvcmtlck1lc3NhZ2VIYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnN0IGluaXRBY3Rpb246IElSZXNvbHZlckJyaWRnZUNvbm5lY3RBY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGFjdGlvbklkLFxuICAgICAgICAgICAgICAgIHR5cGU6IFJlc29sdmVyQnJpZGdlQWN0aW9uLkNPTk5FQ1QsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UoaW5pdEFjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Xb3JrZXJNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYWN0aW9uOiBJV29ya2VyUmVzb2x2ZXJCcmlkZ2VDb25uZWN0ZWRBY3Rpb24gPSBldmVudC5kYXRhO1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFdvcmtlclJlc29sdmVyQnJpZGdlQWN0aW9uLkNPTk5FQ1RFRDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29ubmVjdGVkKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrZXJSdW5uZXJVbmV4cGVjdGVkRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVW5leHBlY3RlZCBhY3Rpb24gdHlwZSBpbiBOb2RlIHJlc29sdmVyIEJyaWRnZSBmcm9tIFdvcmtlciByZXNvbHZlciBCcmlkZ2UnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvbm5lY3RlZChhY3Rpb246IElXb3JrZXJSZXNvbHZlckJyaWRnZUNvbm5lY3RlZEFjdGlvbik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdEluZm8pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrZXJSdW5uZXJVbmV4cGVjdGVkRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb25uZWN0aW9uIHdhcyBlc3RhYmxpc2hlZCBiZWZvcmUgaW5pdGlhdGlvbicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0SW5mby5hY3Rpb25JZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RJbmZvLnJlc29sdmUoYWN0aW9uLnBvcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlQWN0aW9uSWQoKTogbnVtYmVyIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgbGV0IGxhc3RJZCA9ICh0aGlzLndvcmtlciBhcyBhbnkpW1Jlc29sdmVyQnJpZGdlLkxBU1RfV09SS0VSX0FDVElPTl9JRF07XG4gICAgICAgIGlmICh0eXBlb2YgbGFzdElkICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbGFzdElkID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RJZCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICh0aGlzLndvcmtlciBhcyBhbnkpW1Jlc29sdmVyQnJpZGdlLkxBU1RfV09SS0VSX0FDVElPTl9JRF0gPSBsYXN0SWQ7XG4gICAgICAgIHJldHVybiBsYXN0SWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSVNlcmlhbGl6ZWRFcnJvckFjdGlvbiB9IGZyb20gJy4uLy4uL2Vycm9ycy9lcnJvci5zZXJpYWxpemVyJztcblxuZXhwb3J0IGVudW0gV29ya2VyUmVzb2x2ZXJBY3Rpb24ge1xuICAgIFJVTk5FUl9JTklURUQgPSAnUlVOTkVSX0lOSVRFRCcsXG4gICAgUlVOTkVSX0lOSVRfRVJST1IgPSAnUlVOTkVSX0lOSVRfRVJST1InLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElXb3JrZXJSZXNvbHZlclJ1bm5lckluaXRlZEFjdGlvbiB7XG4gICAgdHlwZTogV29ya2VyUmVzb2x2ZXJBY3Rpb24uUlVOTkVSX0lOSVRFRDtcbiAgICBwb3J0OiBNZXNzYWdlUG9ydDtcbiAgICB0cmFuc2ZlcjogW01lc3NhZ2VQb3J0XTtcbn1cblxuZXhwb3J0IHR5cGUgSVdvcmtlclJlc29sdmVyUnVubmVySW5pdEVycm9yQWN0aW9uID0gSVNlcmlhbGl6ZWRFcnJvckFjdGlvbjxXb3JrZXJSZXNvbHZlckFjdGlvbi5SVU5ORVJfSU5JVF9FUlJPUj47XG5cbmV4cG9ydCB0eXBlIElXb3JrZXJSZXNvbHZlckFjdGlvbiA9ICBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0ZWRBY3Rpb24gfCBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0RXJyb3JBY3Rpb247XG4iLCJpbXBvcnQgeyBJQ29ubmVjdENvbnRyb2xsZXJFcnJvckRlc2VyaWFsaXplciB9IGZyb20gJy4uLy4uL2Nvbm5lY3QvY29udHJvbGxlci9jb25uZWN0LWNvbnRyb2xsZXItZXJyb3ItZGVzZXJpYWxpemVyJztcbmltcG9ydCB7IENvbm5lY3RDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vY29ubmVjdC9jb250cm9sbGVyL2Nvbm5lY3QuY29udHJvbGxlcic7XG5pbXBvcnQgeyBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2Vycm9yLW1lc3NhZ2UnO1xuaW1wb3J0IHsgV29ya2VyUnVubmVyRXJyb3JTZXJpYWxpemVyLCBXT1JLRVJfUlVOTkVSX0VSUk9SX1NFUklBTElaRVIgfSBmcm9tICcuLi8uLi9lcnJvcnMvZXJyb3Iuc2VyaWFsaXplcic7XG5pbXBvcnQgeyBDb25uZWN0aW9uV2FzQ2xvc2VkRXJyb3IsIFJ1bm5lck5vdEZvdW5kIH0gZnJvbSAnLi4vLi4vZXJyb3JzL3J1bm5lci1lcnJvcnMnO1xuaW1wb3J0IHsgV29ya2VyUnVubmVyRXJyb3IsIFdvcmtlclJ1bm5lclVuZXhwZWN0ZWRFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ycy93b3JrZXItcnVubmVyLWVycm9yJztcbmltcG9ydCB7IElSdW5uZXJDb250cm9sbGVyQ29uZmlnLCBSdW5uZXJDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vcnVubmVyL2NvbnRyb2xsZXIvcnVubmVyLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgUnVubmVyQnJpZGdlLCBSVU5ORVJfQlJJREdFX0NPTlRST0xMRVIgfSBmcm9tICcuLi8uLi9ydW5uZXIvcnVubmVyLWJyaWRnZS9ydW5uZXIuYnJpZGdlJztcbmltcG9ydCB7IEFueVJ1bm5lckZyb21MaXN0LCBSdW5uZXJzTGlzdENvbnRyb2xsZXIsIFJ1bm5lcnNMaXN0LCBSdW5uZXJUb2tlbiwgUnVubmVySWRlbnRpZmllciB9IGZyb20gJy4uLy4uL3J1bm5lci9ydW5uZXItYnJpZGdlL3J1bm5lcnMtbGlzdC5jb250cm9sbGVyJztcbmltcG9ydCB7IElSdW5uZXJQYXJhbWV0ZXIsIElSdW5uZXJTZXJpYWxpemVkUGFyYW1ldGVyIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29uc3RydWN0b3InO1xuaW1wb3J0IHsgSnNvbk9iamVjdCB9IGZyb20gJy4uLy4uL3R5cGVzL2pzb24tb2JqZWN0JztcbmltcG9ydCB7IElSdW5uZXJBcmd1bWVudCwgUnVubmVyQXJndW1lbnRUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVubmVyLWFyZ3VtZW50JztcbmltcG9ydCB7IFRyYW5zZmVyUnVubmVyRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zZmVyLXJ1bm5lci1kYXRhJztcbmltcG9ydCB7IElSdW5uZXJSZXNvbHZlckNvbmZpZ0Jhc2UgfSBmcm9tICcuLi9iYXNlLXJ1bm5lci5yZXNvbHZlcic7XG5pbXBvcnQgeyBJQmFzZVJlc29sdmVyQnJpZGdlIH0gZnJvbSAnLi4vcmVzb2x2ZXItYnJpZGdlL25vZGUvYmFzZS1yZXNvbHZlci5icmlkZ2UnO1xuaW1wb3J0IHsgTG9jYWxSZXNvbHZlckJyaWRnZSB9IGZyb20gJy4uL3Jlc29sdmVyLWJyaWRnZS9ub2RlL2xvY2FsLXJlc29sdmVyLmJyaWRnZSc7XG5pbXBvcnQgeyBSZXNvbHZlckJyaWRnZSB9IGZyb20gJy4uL3Jlc29sdmVyLWJyaWRnZS9ub2RlL3Jlc29sdmVyLmJyaWRnZSc7XG5pbXBvcnQgeyBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0ZWRBY3Rpb24sIElXb3JrZXJSZXNvbHZlclJ1bm5lckluaXRFcnJvckFjdGlvbiwgV29ya2VyUmVzb2x2ZXJBY3Rpb24gfSBmcm9tICcuLi93b3JrZXIvd29ya2VyLXJlc29sdmVyLmFjdGlvbnMnO1xuaW1wb3J0IHsgSU5vZGVSZXNvbHZlckluaXRSdW5uZXJBY3Rpb24sIE5vZGVSZXNvbHZlckFjdGlvbiB9IGZyb20gJy4vbm9kZS1yZXNvbHZlci5hY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBJTm9kZVJ1bm5lclJlc29sdmVyQ29uZmlnQmFzZTxMIGV4dGVuZHMgUnVubmVyc0xpc3Q+IGV4dGVuZHMgSVJ1bm5lclJlc29sdmVyQ29uZmlnQmFzZTxMPiB7XG4gICAgLyoqXG4gICAgICogQGRlZmF1bHQgJ1dvcmtlciBSdW5uZXInXG4gICAgICovXG4gICAgd29ya2VyTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAZGVmYXVsdCAnd29ya2VyLmpzJ1xuICAgICAqL1xuICAgIHdvcmtlclBhdGg/OiBzdHJpbmc7XG59XG5cbmNvbnN0IERFRkFVTFRfUlVOTkVSX1JFU09MVkVSX0JBU0VfQ09ORklHOiBSZXF1aXJlZDxJTm9kZVJ1bm5lclJlc29sdmVyQ29uZmlnQmFzZTxuZXZlcltdPj4gPSB7XG4gICAgd29ya2VyTmFtZTogJ1dvcmtlciBSdW5uZXInLFxuICAgIHJ1bm5lcnM6IFtdLFxuICAgIHdvcmtlclBhdGg6ICd3b3JrZXIuanMnLFxufTtcblxuZXhwb3J0IGNsYXNzIE5vZGVSdW5uZXJSZXNvbHZlckJhc2U8TCBleHRlbmRzIFJ1bm5lcnNMaXN0PiAge1xuXG4gICAgcHJvdGVjdGVkIHJ1bm5lckNvbnRyb2xsZXJzID0gbmV3IFNldDxSdW5uZXJDb250cm9sbGVyPEFueVJ1bm5lckZyb21MaXN0PEw+Pj4oKTtcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXJCcmlkZ2U/OiBJQmFzZVJlc29sdmVyQnJpZGdlIHwgTG9jYWxSZXNvbHZlckJyaWRnZTxMPjtcbiAgICBwcm90ZWN0ZWQgY29ubmVjdENvbnRyb2xsZXI/OiBDb25uZWN0Q29udHJvbGxlcjtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBlcnJvclNlcmlhbGl6ZXI6IFdvcmtlclJ1bm5lckVycm9yU2VyaWFsaXplciA9IFdPUktFUl9SVU5ORVJfRVJST1JfU0VSSUFMSVpFUjtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgd29ya2VyTmFtZTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB3b3JrZXJQYXRoOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJ1bm5lcnNMaXN0Q29udHJvbGxlcjogUnVubmVyc0xpc3RDb250cm9sbGVyPEw+O1xuXG4gICAgcHJpdmF0ZSB3b3JrZXI/OiBXb3JrZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFJlYWRvbmx5PElOb2RlUnVubmVyUmVzb2x2ZXJDb25maWdCYXNlPEw+Pikge1xuICAgICAgICB0aGlzLnJ1bm5lcnNMaXN0Q29udHJvbGxlciA9IG5ldyBSdW5uZXJzTGlzdENvbnRyb2xsZXIoe1xuICAgICAgICAgICAgcnVubmVyczogY29uZmlnLnJ1bm5lcnMgfHwgREVGQVVMVF9SVU5ORVJfUkVTT0xWRVJfQkFTRV9DT05GSUcucnVubmVycyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMud29ya2VyTmFtZSA9IGNvbmZpZy53b3JrZXJOYW1lIHx8IERFRkFVTFRfUlVOTkVSX1JFU09MVkVSX0JBU0VfQ09ORklHLndvcmtlck5hbWU7XG4gICAgICAgIHRoaXMud29ya2VyUGF0aCA9IGNvbmZpZy53b3JrZXJQYXRoIHx8IERFRkFVTFRfUlVOTkVSX1JFU09MVkVSX0JBU0VfQ09ORklHLndvcmtlclBhdGg7XG4gICAgfVxuXG4gICAgLyoqIFRPRE8gZXh0cmFjdCBzZXJpYWxpemUgLyBkZXNlcmlhbGl6ZSBhcmd1bWVudHMgdG8gY29tcG9uZW50ICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZXJpYWxpemVBcmd1bWVudHMoXG4gICAgICAgIGFyZ3M6IElSdW5uZXJQYXJhbWV0ZXJbXSxcbiAgICApOiBQcm9taXNlPHtcbiAgICAgICAgYXJnczogSVJ1bm5lckFyZ3VtZW50W11cbiAgICAgICAgdHJhbnNmZXI6IFRyYW5zZmVyYWJsZVtdLFxuICAgIH0+IHtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZEFyZ3VtZW50cyA9IHtcbiAgICAgICAgICAgIGFyZ3M6IG5ldyBBcnJheTxJUnVubmVyQXJndW1lbnQ+KCksXG4gICAgICAgICAgICB0cmFuc2ZlcjogbmV3IEFycmF5PFRyYW5zZmVyYWJsZT4oKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYXJnc01hcCA9IG5ldyBNYXA8bnVtYmVyLCBJUnVubmVyQXJndW1lbnQ+KCk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGFyZ3MubWFwKGFzeW5jIChhcmd1bWVudFdpdGhUcmFuc2ZlckRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXJndW1lbnQ6IElSdW5uZXJTZXJpYWxpemVkUGFyYW1ldGVyO1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50V2l0aFRyYW5zZmVyRGF0YSBpbnN0YW5jZW9mIFRyYW5zZmVyUnVubmVyRGF0YSkge1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRBcmd1bWVudHMudHJhbnNmZXIucHVzaCguLi5hcmd1bWVudFdpdGhUcmFuc2ZlckRhdGEudHJhbnNmZXIpO1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50ID0gYXJndW1lbnRXaXRoVHJhbnNmZXJEYXRhLmRhdGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50ID0gYXJndW1lbnRXaXRoVHJhbnNmZXJEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFJ1bm5lckJyaWRnZS5pc1J1bm5lckJyaWRnZShhcmd1bWVudCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gKGFyZ3VtZW50IGFzIFJ1bm5lckJyaWRnZSlbUlVOTkVSX0JSSURHRV9DT05UUk9MTEVSXTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPIGNsb3NlIGFsbCBjb25uZWN0aW9uIGFmdGVyIHRocm93IGVycm9yIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZmVyUG9ydCA9IGF3YWl0IGNvbnRyb2xsZXIucmVzb2x2ZU9yVHJhbnNmZXJDb250cm9sKCk7XG4gICAgICAgICAgICAgICAgYXJnc01hcC5zZXQoaW5kZXgsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUnVubmVyQXJndW1lbnRUeXBlLlJVTk5FUl9JTlNUQU5DRSxcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogdHJhbnNmZXJQb3J0LFxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogY29udHJvbGxlci50b2tlbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkQXJndW1lbnRzLnRyYW5zZmVyLnB1c2godHJhbnNmZXJQb3J0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJnc01hcC5zZXQoaW5kZXgsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUnVubmVyQXJndW1lbnRUeXBlLkpTT04sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3VtZW50IGFzIEpzb25PYmplY3QsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgZm9yIChsZXQgYXJndW1lbnRJbmRleCA9IDA7IGFyZ3VtZW50SW5kZXggPCBhcmdzLmxlbmd0aDsgYXJndW1lbnRJbmRleCsrKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkQXJndW1lbnRzLmFyZ3MucHVzaChhcmdzTWFwLmdldChhcmd1bWVudEluZGV4KSBhcyBJUnVubmVyQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVkQXJndW1lbnRzO1xuICAgIH1cblxuICAgIC8qKiBMYXVuY2hlcyBhbmQgcHJlcGFyZXMgUnVubmVyUmVzb2x2ZXIgZm9yIHdvcmsgKi9cbiAgICBwdWJsaWMgYXN5bmMgcnVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLmJ1aWxkUmVzb2x2ZXJCcmlkZ2UoKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgY29uc3QgcG9ydCA9IGF3YWl0IHRoaXMucmVzb2x2ZXJCcmlkZ2UhLmNvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5jb25uZWN0Q29udHJvbGxlciA9IG5ldyBDb25uZWN0Q29udHJvbGxlcih7XG4gICAgICAgICAgICBwb3J0LFxuICAgICAgICAgICAgZGVzdHJveUVycm9yRGVzZXJpYWxpemVyOiB0aGlzLmVycm9yU2VyaWFsaXplclxuICAgICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZS5iaW5kKHRoaXMuZXJyb3JTZXJpYWxpemVyKSBhcyBJQ29ubmVjdENvbnRyb2xsZXJFcnJvckRlc2VyaWFsaXplcixcbiAgICAgICAgICAgIGZvcmNlRGVzdHJveUhhbmRsZXI6IHRoaXMuZGVzdHJveUJ5Rm9yY2UuYmluZCh0aGlzKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIFJldHVybnMgYSBydW5uZXIgY29udHJvbCBvYmplY3QgdGhhdCB3aWxsIGNhbGwgdGhlIG1ldGhvZHMgb2YgdGhlIHNvdXJjZSBpbnN0YW5jZSAqL1xuICAgIHB1YmxpYyBhc3luYyByZXNvbHZlKGlkZW50aWZpZXI6IFJ1bm5lcklkZW50aWZpZXI8TD4sIC4uLmFyZ3M6IElSdW5uZXJQYXJhbWV0ZXJbXSk6IFByb21pc2U8UnVubmVyQnJpZGdlPiB7XG4gICAgICAgIGxldCB0b2tlbjogUnVubmVyVG9rZW47XG4gICAgICAgIGlmICh0eXBlb2YgaWRlbnRpZmllciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRva2VuID0gaWRlbnRpZmllcjtcbiAgICAgICAgICAgIGlmICghdGhpcy5ydW5uZXJzTGlzdENvbnRyb2xsZXIuY2hlY2tUb2tlbih0b2tlbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUnVubmVyTm90Rm91bmQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTLkNPTlNUUlVDVE9SX05PVF9GT1VORCh7IHRva2VuOiB0b2tlbiB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnJ1bm5lcnNMaXN0Q29udHJvbGxlci5nZXRSdW5uZXJUb2tlbihpZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhd2FpdCB0aGlzLnNlbmRJbml0QWN0aW9uKHRva2VuLCBhcmdzKTtcbiAgICAgICAgY29uc3QgcnVubmVyQ29udHJvbGxlciA9IHRoaXMucnVubmVyQ29udHJvbGxlclBhcnRGYWN0b3J5KHtcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgIHBvcnQ6IGFjdGlvbi5wb3J0LFxuICAgICAgICAgICAgb25Db25uZWN0aW9uQ2xvc2VkOiAoKSA9PiB0aGlzLnJ1bm5lckNvbnRyb2xsZXJzLmRlbGV0ZShydW5uZXJDb250cm9sbGVyKSxcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5ydW5uZXJDb250cm9sbGVycy5hZGQocnVubmVyQ29udHJvbGxlcik7XG4gICAgICAgIHJldHVybiBydW5uZXJDb250cm9sbGVyLnJlc29sdmVkUnVubmVyO1xuICAgIH1cblxuICAgIC8qKiBEZXN0cm95aW5nIG9mIGFsbCByZXNvbHZlZCBSdW5uZXJzIGluc3RhbmNlICovXG4gICAgcHVibGljIGFzeW5jIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RDb250cm9sbGVyKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3RDb250cm9sbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVJ1bm5lckNvbnRyb2xsZXJzKCk7XG4gICAgICAgICAgICB0aGlzLndvcmtlcj8udGVybWluYXRlKCk7XG4gICAgICAgICAgICB0aGlzLndvcmtlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdENvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVyQnJpZGdlID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbm5lY3Rpb25XYXNDbG9zZWRFcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogV09SS0VSX1JVTk5FUl9FUlJPUl9NRVNTQUdFUy5XT1JLRVJfTk9UX0lOSVQoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkUmVzb2x2ZXJCcmlkZ2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud29ya2VyID0gbmV3IFdvcmtlcih0aGlzLndvcmtlclBhdGgsIHsgbmFtZTogdGhpcy53b3JrZXJOYW1lIH0pO1xuICAgICAgICB0aGlzLnJlc29sdmVyQnJpZGdlID0gbmV3IFJlc29sdmVyQnJpZGdlKHt3b3JrZXI6IHRoaXMud29ya2VyfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJ1bm5lckNvbnRyb2xsZXJQYXJ0RmFjdG9yeShjb25maWc6IHtcbiAgICAgICAgdG9rZW46IFJ1bm5lclRva2VuLFxuICAgICAgICBwb3J0OiBNZXNzYWdlUG9ydCxcbiAgICAgICAgb25Db25uZWN0aW9uQ2xvc2VkPzogKCkgPT4gdm9pZDtcbiAgICB9KTogUnVubmVyQ29udHJvbGxlcjxBbnlSdW5uZXJGcm9tTGlzdDxMPj4ge1xuICAgICAgICBjb25zdCBydW5uZXJCcmlkZ2VDb25zdHJ1Y3RvciA9IHRoaXMucnVubmVyc0xpc3RDb250cm9sbGVyLmdldFJ1bm5lckJyaWRnZUNvbnN0cnVjdG9yKGNvbmZpZy50b2tlbik7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUnVubmVyTmFtZSA9IHRoaXMucnVubmVyc0xpc3RDb250cm9sbGVyLmdldFJ1bm5lcihjb25maWcudG9rZW4pLm5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5lckNvbnRyb2xsZXJGYWN0b3J5KHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIHJ1bm5lckJyaWRnZUNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgb3JpZ2luYWxSdW5uZXJOYW1lLFxuICAgICAgICAgICAgcnVubmVyQ29udHJvbGxlclBhcnRGYWN0b3J5OiB0aGlzLnJ1bm5lckNvbnRyb2xsZXJQYXJ0RmFjdG9yeS5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcnVubmVyQ29udHJvbGxlckZhY3RvcnkoXG4gICAgICAgIGNvbmZpZzogSVJ1bm5lckNvbnRyb2xsZXJDb25maWc8QW55UnVubmVyRnJvbUxpc3Q8TD4+XG4gICAgKTogUnVubmVyQ29udHJvbGxlcjxBbnlSdW5uZXJGcm9tTGlzdDxMPj4ge1xuICAgICAgICByZXR1cm4gbmV3IFJ1bm5lckNvbnRyb2xsZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgc2VuZEluaXRBY3Rpb24oXG4gICAgICAgIHRva2VuOiBSdW5uZXJUb2tlbixcbiAgICAgICAgYXJnczogSVJ1bm5lclBhcmFtZXRlcltdLFxuICAgICk6IFByb21pc2U8SVdvcmtlclJlc29sdmVyUnVubmVySW5pdGVkQWN0aW9uPiB7XG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0Q29udHJvbGxlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbm5lY3Rpb25XYXNDbG9zZWRFcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogV09SS0VSX1JVTk5FUl9FUlJPUl9NRVNTQUdFUy5XT1JLRVJfTk9UX0lOSVQoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkQXJndW1lbnRzID0gYXdhaXQgTm9kZVJ1bm5lclJlc29sdmVyQmFzZS5zZXJpYWxpemVBcmd1bWVudHMoYXJncyk7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb246IElOb2RlUmVzb2x2ZXJJbml0UnVubmVyQWN0aW9uID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVSZXNvbHZlckFjdGlvbi5JTklUX1JVTk5FUixcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgYXJnczogc2VyaWFsaXplZEFyZ3VtZW50cy5hcmdzLFxuICAgICAgICAgICAgICAgIHRyYW5zZmVyOiBzZXJpYWxpemVkQXJndW1lbnRzLnRyYW5zZmVyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQWN0aW9uOiBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0ZWRBY3Rpb24gfCBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0RXJyb3JBY3Rpb25cbiAgICAgICAgICAgICAgICA9IGF3YWl0IHRoaXMuY29ubmVjdENvbnRyb2xsZXIuc2VuZEFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlQWN0aW9uLnR5cGUgPT09IFdvcmtlclJlc29sdmVyQWN0aW9uLlJVTk5FUl9JTklUX0VSUk9SKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy5lcnJvclNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzcG9uc2VBY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlQWN0aW9uO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyAvLyBUT0RPIE5lZWRlZD9cbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFdvcmtlclJ1bm5lckVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2VyUnVubmVyVW5leHBlY3RlZEVycm9yKHRoaXMuZXJyb3JTZXJpYWxpemVyLnNlcmlhbGl6ZShlcnJvciwge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuUlVOTkVSX0lOSVRfRVJST1Ioe1xuICAgICAgICAgICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyTmFtZTogdGhpcy5ydW5uZXJzTGlzdENvbnRyb2xsZXIuZ2V0UnVubmVyKHRva2VuKS5uYW1lLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHN0YWNrOiBlcnJvcj8uc3RhY2ssXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGVzdHJveVJ1bm5lckNvbnRyb2xsZXJzKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGNvbnN0IHJ1bm5lckNvbnRyb2xsZXIgb2YgdGhpcy5ydW5uZXJDb250cm9sbGVycykge1xuICAgICAgICAgICAgcnVubmVyQ29udHJvbGxlci5zdG9wTGlzdGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ydW5uZXJDb250cm9sbGVycy5jbGVhcigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkZXN0cm95QnlGb3JjZSgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtlclJ1bm5lclVuZXhwZWN0ZWRFcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiAnUnVubmVyIFJlc29sdmVyIGNhbm5vdCBiZSBkZXN0cm95ZWQgYnkgZm9yY2UnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyB0aGUgUnVubmVyIGFuZCByZXR1cm5zIGEgUnVubmVyIGNvbnRyb2wgb2JqZWN0IHRoYXQgd2lsbCBjYWxsIHRoZSBtZXRob2RzIG9mIHRoZSBvcmlnaW5hbCBSdW5uZXIgaW5zdGFuY2UuXG4gICAgICogVGhlIG9yaWdpbmFsIFJ1bm5lciBpbnN0YW5jZSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIGFyZWEgaW4gd2hpY2ggaXQgd2FzIHdyYXBwZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHdyYXBSdW5uZXIocnVubmVySW5zdGFuY2U6IEluc3RhbmNlVHlwZTxBbnlSdW5uZXJGcm9tTGlzdDxMPj4pOiBSdW5uZXJCcmlkZ2Uge1xuICAgICAgICBpZiAoIXRoaXMucmVzb2x2ZXJCcmlkZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25uZWN0aW9uV2FzQ2xvc2VkRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuV09SS0VSX05PVF9JTklUKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucnVubmVyc0xpc3RDb250cm9sbGVyLmdldFJ1bm5lclRva2VuQnlJbnN0YW5jZShydW5uZXJJbnN0YW5jZSk7XG4gICAgICAgIGNvbnN0IHBvcnQgPSAodGhpcy5yZXNvbHZlckJyaWRnZSBhcyBMb2NhbFJlc29sdmVyQnJpZGdlPEw+KS53b3JrZXJSdW5uZXJSZXNvbHZlci53cmFwUnVubmVyKHJ1bm5lckluc3RhbmNlKTtcbiAgICAgICAgY29uc3QgcnVubmVyQ29udHJvbGxlciA9IHRoaXMucnVubmVyQ29udHJvbGxlclBhcnRGYWN0b3J5KHtcbiAgICAgICAgICAgIHRva2VuLFxuICAgICAgICAgICAgcG9ydCxcbiAgICAgICAgICAgIG9uQ29ubmVjdGlvbkNsb3NlZDogKCkgPT4gdGhpcy5ydW5uZXJDb250cm9sbGVycy5kZWxldGUocnVubmVyQ29udHJvbGxlciksXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucnVubmVyQ29udHJvbGxlcnMuYWRkKHJ1bm5lckNvbnRyb2xsZXIpO1xuICAgICAgICByZXR1cm4gcnVubmVyQ29udHJvbGxlci5yZXNvbHZlZFJ1bm5lcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlLCBJQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlQ29uZmlnIH0gZnJvbSBcIi4vYmFzZS13b3JrZXItcmVzb2x2ZXIuYnJpZGdlXCI7XG5cbmludGVyZmFjZSBJTG9jYWxSZXNvbHZlckJyaWRnZUNvbmZpZyBleHRlbmRzIElCYXNlV29ya2VyUmVzb2x2ZXJCcmlkZ2VDb25maWd7XG4gICAgcG9ydDogTWVzc2FnZVBvcnRcbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsV29ya2VyUmVzb2x2ZXJCcmlkZ2UgaW1wbGVtZW50cyBJQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlIHtcbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnOiBJTG9jYWxSZXNvbHZlckJyaWRnZUNvbmZpZykge1xuICAgICAgICBjb25maWcubmV3Q29ubmVjdGlvbkhhbmRsZXIoY29uZmlnLnBvcnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAvLyBTdHViXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUnVubmVyc0xpc3QgfSBmcm9tIFwiLi4vLi4vLi4vcnVubmVyL3J1bm5lci1icmlkZ2UvcnVubmVycy1saXN0LmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEJhc2VXb3JrZXJSdW5uZXJSZXNvbHZlciB9IGZyb20gXCIuLi8uLi93b3JrZXIvd29ya2VyLXJ1bm5lci5yZXNvbHZlclwiO1xuaW1wb3J0IHsgQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlRmFjdG9yeSwgSUJhc2VXb3JrZXJSZXNvbHZlckJyaWRnZUNvbmZpZyB9IGZyb20gXCIuLi93b3JrZXIvYmFzZS13b3JrZXItcmVzb2x2ZXIuYnJpZGdlXCI7XG5pbXBvcnQgeyBMb2NhbFdvcmtlclJlc29sdmVyQnJpZGdlIH0gZnJvbSBcIi4uL3dvcmtlci9sb2NhbC1yZXNvbHZlci5icmlkZ2VcIjtcbmltcG9ydCB7IElCYXNlUmVzb2x2ZXJCcmlkZ2UgfSBmcm9tICcuL2Jhc2UtcmVzb2x2ZXIuYnJpZGdlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbFJlc29sdmVyQnJpZGdlQ29uZmlnPEwgZXh0ZW5kcyBSdW5uZXJzTGlzdD4ge1xuICAgIHdvcmtlclJ1bm5lclJlc29sdmVyRmFjdG9yeTogKFxuICAgICAgICBjb25maWc6IHticmlkZ2VGYWN0b3J5OiBCYXNlV29ya2VyUmVzb2x2ZXJCcmlkZ2VGYWN0b3J5O31cbiAgICApID0+IEJhc2VXb3JrZXJSdW5uZXJSZXNvbHZlcjxMPjtcbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsUmVzb2x2ZXJCcmlkZ2U8TCBleHRlbmRzIFJ1bm5lcnNMaXN0PiBpbXBsZW1lbnRzIElCYXNlUmVzb2x2ZXJCcmlkZ2Uge1xuICAgIHB1YmxpYyByZWFkb25seSB3b3JrZXJSdW5uZXJSZXNvbHZlcjogQmFzZVdvcmtlclJ1bm5lclJlc29sdmVyPEw+O1xuICAgIHByaXZhdGUgbWVzc2FnZUNoYW5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuXG4gICAgY29uc3RydWN0b3IgKGNvbmZpZzogSUxvY2FsUmVzb2x2ZXJCcmlkZ2VDb25maWc8TD4pIHtcbiAgICAgICAgdGhpcy53b3JrZXJSdW5uZXJSZXNvbHZlciA9IGNvbmZpZy53b3JrZXJSdW5uZXJSZXNvbHZlckZhY3Rvcnkoe1xuICAgICAgICAgICAgYnJpZGdlRmFjdG9yeTogKGNvbmZpZzogSUJhc2VXb3JrZXJSZXNvbHZlckJyaWRnZUNvbmZpZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTG9jYWxXb3JrZXJSZXNvbHZlckJyaWRnZSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogdGhpcy5tZXNzYWdlQ2hhbmVsLnBvcnQxLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLndvcmtlclJ1bm5lclJlc29sdmVyLnJ1bigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25uZWN0KCk6IFByb21pc2U8TWVzc2FnZVBvcnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZUNoYW5lbC5wb3J0MjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25uZWN0RW52aXJvbm1lbnRFcnJvclNlcmlhbGl6ZXIgfSBmcm9tICcuLi8uLi9jb25uZWN0L2Vudmlyb25tZW50L2Nvbm5lY3QtZW52aXJvbm1lbnQtZXJyb3Itc2VyaWFsaXplcic7XG5pbXBvcnQgeyBDb25uZWN0RW52aXJvbm1lbnQsIElDb25uZWN0RW52aXJvbm1lbnRDb25maWcgfSBmcm9tICcuLi8uLi9jb25uZWN0L2Vudmlyb25tZW50L2Nvbm5lY3QuZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgV09SS0VSX1JVTk5FUl9FUlJPUl9NRVNTQUdFUyB9IGZyb20gJy4uLy4uL2Vycm9ycy9lcnJvci1tZXNzYWdlJztcbmltcG9ydCB7IElTZXJpYWxpemVkRXJyb3IsIFdvcmtlclJ1bm5lckVycm9yU2VyaWFsaXplciB9IGZyb20gJy4uLy4uL2Vycm9ycy9lcnJvci5zZXJpYWxpemVyJztcbmltcG9ydCB7IFJ1bm5lckRlc3Ryb3lFcnJvciwgUnVubmVyRXhlY3V0ZUVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzL3J1bm5lci1lcnJvcnMnO1xuaW1wb3J0IHsgQmFzZVdvcmtlclJ1bm5lclJlc29sdmVyIH0gZnJvbSAnLi4vLi4vcmVzb2x2ZXIvd29ya2VyL3dvcmtlci1ydW5uZXIucmVzb2x2ZXInO1xuaW1wb3J0IHsgSVJ1bm5lck1ldGhvZFJlc3VsdCwgSVJ1bm5lclNlcmlhbGl6ZWRNZXRob2RSZXN1bHQsIFJ1bm5lckNvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29uc3RydWN0b3InO1xuaW1wb3J0IHsgVHJhbnNmZXJhYmxlSnNvbk9iamVjdCB9IGZyb20gJy4uLy4uL3R5cGVzL2pzb24tb2JqZWN0JztcbmltcG9ydCB7IFRyYW5zZmVyUnVubmVyRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zZmVyLXJ1bm5lci1kYXRhJztcbmltcG9ydCB7IElSdW5uZXJDb250cm9sbGVyQWN0aW9uLCBJUnVubmVyQ29udHJvbGxlckV4ZWN1dGVBY3Rpb24sIFJ1bm5lckNvbnRyb2xsZXJBY3Rpb24gfSBmcm9tICcuLi9jb250cm9sbGVyL3J1bm5lci1jb250cm9sbGVyLmFjdGlvbnMnO1xuaW1wb3J0IHsgUnVubmVyQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXIvcnVubmVyLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgUnVubmVyQnJpZGdlLCBSVU5ORVJfQlJJREdFX0NPTlRST0xMRVIgfSBmcm9tICcuLi9ydW5uZXItYnJpZGdlL3J1bm5lci5icmlkZ2UnO1xuaW1wb3J0IHsgUnVubmVyVG9rZW4gfSBmcm9tICcuLi9ydW5uZXItYnJpZGdlL3J1bm5lcnMtbGlzdC5jb250cm9sbGVyJztcbmltcG9ydCB7IElSdW5uZXJFbnZpcm9ubWVudEFjdGlvbiwgSVJ1bm5lckVudmlyb25tZW50RXhlY3V0ZVJlc3VsdEFjdGlvbiwgSVJ1bm5lckVudmlyb25tZW50UmVzb2x2ZWRBY3Rpb24sIFJ1bm5lckVudmlyb25tZW50QWN0aW9uIH0gZnJvbSAnLi9ydW5uZXItZW52aXJvbm1lbnQuYWN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bm5lckVudmlyb25tZW50Q29uZmlnPFIgZXh0ZW5kcyBSdW5uZXJDb25zdHJ1Y3Rvcj4ge1xuICAgIHRva2VuOiBSdW5uZXJUb2tlbjtcbiAgICBydW5uZXI6IEluc3RhbmNlVHlwZTxSPjtcbiAgICB3b3JrZXJSdW5uZXJSZXNvbHZlcjogQmFzZVdvcmtlclJ1bm5lclJlc29sdmVyPG5ldmVyPjtcbiAgICBlcnJvclNlcmlhbGl6ZXI6IFdvcmtlclJ1bm5lckVycm9yU2VyaWFsaXplcjtcbiAgICBwb3J0OiBNZXNzYWdlUG9ydDtcbiAgICBvbkRlc3Ryb3llZDogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFJ1bm5lckVudmlyb25tZW50PFIgZXh0ZW5kcyBSdW5uZXJDb25zdHJ1Y3Rvcj4ge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHRva2VuOiBSdW5uZXJUb2tlbjtcblxuICAgIHB1YmxpYyBydW5uZXJJbnN0YW5jZTogSW5zdGFuY2VUeXBlPFI+O1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGVycm9yU2VyaWFsaXplcjogV29ya2VyUnVubmVyRXJyb3JTZXJpYWxpemVyO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjb25uZWN0RW52aXJvbm1lbnQ6IENvbm5lY3RFbnZpcm9ubWVudDtcblxuICAgIHByaXZhdGUgd29ya2VyUnVubmVyUmVzb2x2ZXI6IEJhc2VXb3JrZXJSdW5uZXJSZXNvbHZlcjxuZXZlcj47XG4gICAgcHJpdmF0ZSBvbkRlc3Ryb3llZDogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIGNvbm5lY3RlZENvbnRyb2xsZXJzID0gbmV3IEFycmF5PFJ1bm5lckNvbnRyb2xsZXI8UnVubmVyQ29uc3RydWN0b3I+PigpOyAvLyBUT0RPIE5lZWQgZGlzY29ubmVjdD9cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUmVhZG9ubHk8SVJ1bm5lckVudmlyb25tZW50Q29uZmlnPFI+Pikge1xuICAgICAgICB0aGlzLnRva2VuID0gY29uZmlnLnRva2VuO1xuICAgICAgICB0aGlzLmVycm9yU2VyaWFsaXplciA9IGNvbmZpZy5lcnJvclNlcmlhbGl6ZXJcbiAgICAgICAgdGhpcy5ydW5uZXJJbnN0YW5jZSA9IGNvbmZpZy5ydW5uZXI7XG4gICAgICAgIHRoaXMud29ya2VyUnVubmVyUmVzb2x2ZXIgPSBjb25maWcud29ya2VyUnVubmVyUmVzb2x2ZXI7XG4gICAgICAgIHRoaXMub25EZXN0cm95ZWQgPSBjb25maWcub25EZXN0cm95ZWQ7XG4gICAgICAgIHRoaXMuY29ubmVjdEVudmlyb25tZW50ID0gdGhpcy5jb25uZWN0RW52aXJvbm1lbnRGYWN0b3J5KHtcbiAgICAgICAgICAgIGRlc3Ryb3lFcnJvclNlcmlhbGl6ZXI6IHRoaXMuZGVzdHJveUVycm9yU2VyaWFsaXplci5iaW5kKHRoaXMpIGFzIENvbm5lY3RFbnZpcm9ubWVudEVycm9yU2VyaWFsaXplcixcbiAgICAgICAgICAgIGFjdGlvbnNIYW5kbGVyOiB0aGlzLmhhbmRsZUFjdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZGVzdHJveUhhbmRsZXI6IHRoaXMuaGFuZGxlRGVzdHJveS5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0RW52aXJvbm1lbnQuYWRkUG9ydChjb25maWcucG9ydCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUoXG4gICAgICAgIGFjdGlvbjogSVJ1bm5lckNvbnRyb2xsZXJFeGVjdXRlQWN0aW9uLFxuICAgICk6IFByb21pc2U8SVJ1bm5lckVudmlyb25tZW50RXhlY3V0ZVJlc3VsdEFjdGlvbj4ge1xuICAgICAgICBsZXQgcmVzcG9uc2U6IElSdW5uZXJNZXRob2RSZXN1bHQ7XG4gICAgICAgIGNvbnN0IGRlc2VyaWFsaXplQXJndW1lbnRzRGF0YSA9IHRoaXMud29ya2VyUnVubmVyUmVzb2x2ZXIuZGVzZXJpYWxpemVBcmd1bWVudHMoYWN0aW9uLmFyZ3MpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJ1bm5lckluc3RhbmNlW2FjdGlvbi5tZXRob2RdKC4uLmRlc2VyaWFsaXplQXJndW1lbnRzRGF0YS5hcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGRlc2VyaWFsaXplQXJndW1lbnRzRGF0YS5jb250cm9sbGVyc1xuICAgICAgICAgICAgICAgIC5tYXAoY29udHJvbGxlciA9PiBjb250cm9sbGVyLmRpc2Nvbm5lY3QoKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSdW5uZXJFbnZpcm9ubWVudEFjdGlvbi5FWEVDVVRFX0VSUk9SLFxuICAgICAgICAgICAgICAgIC4uLiB0aGlzLmVycm9yU2VyaWFsaXplci5zZXJpYWxpemUoZXJyb3IsIG5ldyBSdW5uZXJFeGVjdXRlRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTLkVYRUNVVEVfRVJST1Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRoaXMudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uZXJOYW1lOiB0aGlzLnJ1bm5lck5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2ROYW1lOiBhY3Rpb24ubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6IGVycm9yPy5zdGFja1xuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRDb25uZWN0ZWRDb250cm9sbGVycyhkZXNlcmlhbGl6ZUFyZ3VtZW50c0RhdGEuY29udHJvbGxlcnMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVFeGVjdXRlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRDb25uZWN0ZWRDb250cm9sbGVycyhjb250cm9sbGVyczogUnVubmVyQ29udHJvbGxlcjxSdW5uZXJDb25zdHJ1Y3Rvcj5bXSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENvbnRyb2xsZXJzLnB1c2goLi4uY29udHJvbGxlcnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBoYW5kbGVEZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMucnVubmVySW5zdGFuY2UuZGVzdHJveSkge1xuICAgICAgICAgICAgICAgIGF3YWl0ICh0aGlzLnJ1bm5lckluc3RhbmNlLmRlc3Ryb3kgYXMgKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4pKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHJ1bm5lck5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmVySW5zdGFuY2UuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgaGFuZGxlQWN0aW9uKFxuICAgICAgICBhY3Rpb246IElSdW5uZXJDb250cm9sbGVyQWN0aW9uLFxuICAgICk6IFByb21pc2U8SVJ1bm5lckVudmlyb25tZW50QWN0aW9uPiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUnVubmVyQ29udHJvbGxlckFjdGlvbi5FWEVDVVRFOlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmV4ZWN1dGUoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUnVubmVyRW52aXJvbm1lbnRBY3Rpb24uRVhFQ1VURV9FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLiB0aGlzLmVycm9yU2VyaWFsaXplci5zZXJpYWxpemUoZXJyb3IsIG5ldyBSdW5uZXJFeGVjdXRlRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuRVhFQ1VURV9FUlJPUih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLnRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2ROYW1lOiBhY3Rpb24ubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uZXJOYW1lOiB0aGlzLnJ1bm5lck5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2s6IGVycm9yPy5zdGFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFJ1bm5lckNvbnRyb2xsZXJBY3Rpb24uUkVTT0xWRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgaGFuZGxlRXhlY3V0ZVJlc3BvbnNlKFxuICAgICAgICBleGVjdXRlUmVzdWx0OiBJUnVubmVyTWV0aG9kUmVzdWx0LFxuICAgICk6IFByb21pc2U8SVJ1bm5lckVudmlyb25tZW50RXhlY3V0ZVJlc3VsdEFjdGlvbj4ge1xuICAgICAgICBpZiAoUnVubmVyQnJpZGdlLmlzUnVubmVyQnJpZGdlKGV4ZWN1dGVSZXN1bHQpKSB7XG4gICAgICAgICAgICBjb25zdCBydW5uZXJDb250cm9sbGVyID0gZXhlY3V0ZVJlc3VsdFtSVU5ORVJfQlJJREdFX0NPTlRST0xMRVJdO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmZXJQb3J0OiBNZXNzYWdlUG9ydCA9IGF3YWl0IHJ1bm5lckNvbnRyb2xsZXIucmVzb2x2ZU9yVHJhbnNmZXJDb250cm9sKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFJ1bm5lckVudmlyb25tZW50QWN0aW9uLkVYRUNVVEVEX1dJVEhfUlVOTkVSX1JFU1VMVCxcbiAgICAgICAgICAgICAgICBwb3J0OiB0cmFuc2ZlclBvcnQsXG4gICAgICAgICAgICAgICAgdG9rZW46IHJ1bm5lckNvbnRyb2xsZXIudG9rZW4sXG4gICAgICAgICAgICAgICAgdHJhbnNmZXI6IFt0cmFuc2ZlclBvcnRdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogSVJ1bm5lclNlcmlhbGl6ZWRNZXRob2RSZXN1bHQ7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2ZlcjogVHJhbnNmZXJhYmxlW10gPSBbXTtcbiAgICAgICAgICAgIGlmIChleGVjdXRlUmVzdWx0IGluc3RhbmNlb2YgVHJhbnNmZXJSdW5uZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmZXIucHVzaCguLi5leGVjdXRlUmVzdWx0LnRyYW5zZmVyKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGV4ZWN1dGVSZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBleGVjdXRlUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSdW5uZXJFbnZpcm9ubWVudEFjdGlvbi5FWEVDVVRFRCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2UgYXMgVHJhbnNmZXJhYmxlSnNvbk9iamVjdCxcbiAgICAgICAgICAgICAgICB0cmFuc2ZlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29ubmVjdEVudmlyb25tZW50RmFjdG9yeShjb25maWc6IElDb25uZWN0RW52aXJvbm1lbnRDb25maWcpOiBDb25uZWN0RW52aXJvbm1lbnQge1xuICAgICAgICByZXR1cm4gbmV3IENvbm5lY3RFbnZpcm9ubWVudChjb25maWcpO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcHJpdmF0ZSBkZXN0cm95RXJyb3JTZXJpYWxpemVyKGVycm9yOiBhbnkpOiBJU2VyaWFsaXplZEVycm9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JTZXJpYWxpemVyLnNlcmlhbGl6ZShlcnJvciwgbmV3IFJ1bm5lckRlc3Ryb3lFcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiBXT1JLRVJfUlVOTkVSX0VSUk9SX01FU1NBR0VTLlJVTk5FUl9ERVNUUk9ZX0VSUk9SKHtcbiAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy50b2tlbixcbiAgICAgICAgICAgICAgICBydW5uZXJOYW1lOiB0aGlzLnJ1bm5lck5hbWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0YWNrOiBlcnJvcj8uc3RhY2ssXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJlc29sdmUoKTogUHJvbWlzZTxJUnVubmVyRW52aXJvbm1lbnRSZXNvbHZlZEFjdGlvbj4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlQ2hhbmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdEVudmlyb25tZW50LmFkZFBvcnQobWVzc2FnZUNoYW5lbC5wb3J0MSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBSdW5uZXJFbnZpcm9ubWVudEFjdGlvbi5SRVNPTFZFRCxcbiAgICAgICAgICAgIHBvcnQ6IG1lc3NhZ2VDaGFuZWwucG9ydDIsXG4gICAgICAgICAgICB0cmFuc2ZlcjogW21lc3NhZ2VDaGFuZWwucG9ydDJdXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgV29ya2VyUnVubmVyVW5leHBlY3RlZEVycm9yIH0gZnJvbSBcIi4uLy4uLy4uL2Vycm9ycy93b3JrZXItcnVubmVyLWVycm9yXCI7XG5pbXBvcnQgeyBJUmVzb2x2ZXJCcmlkZ2VDb25uZWN0QWN0aW9uLCBSZXNvbHZlckJyaWRnZUFjdGlvbiB9IGZyb20gXCIuLi9ub2RlL3Jlc29sdmVyLWJyaWRnZS5hY3Rpb25zXCI7XG5pbXBvcnQgeyBJQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlLCBJQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlQ29uZmlnIH0gZnJvbSBcIi4vYmFzZS13b3JrZXItcmVzb2x2ZXIuYnJpZGdlXCI7XG5pbXBvcnQgeyBJV29ya2VyUmVzb2x2ZXJCcmlkZ2VDb25uZWN0ZWRBY3Rpb24sIFdvcmtlclJlc29sdmVyQnJpZGdlQWN0aW9uIH0gZnJvbSBcIi4vd29ya2VyLXJlc29sdmVyLWJyaWRnZS5hY3Rpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBXb3JrZXJSZXNvbHZlckJyaWRnZSBpbXBsZW1lbnRzIElCYXNlV29ya2VyUmVzb2x2ZXJCcmlkZ2Uge1xuXG4gICAgcHJpdmF0ZSBtZXNzYWdlSGFuZGxlciA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgcHJpdmF0ZSBvbk5ld0Nvbm5lY3Rpb246IElCYXNlV29ya2VyUmVzb2x2ZXJCcmlkZ2VDb25maWdbJ25ld0Nvbm5lY3Rpb25IYW5kbGVyJ107XG5cbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnOiBJQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlQ29uZmlnKSB7XG4gICAgICAgIHRoaXMub25OZXdDb25uZWN0aW9uID0gY29uZmlnLm5ld0Nvbm5lY3Rpb25IYW5kbGVyO1xuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm1lc3NhZ2VIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgc2VsZi5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5tZXNzYWdlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBhY3Rpb246IElSZXNvbHZlckJyaWRnZUNvbm5lY3RBY3Rpb24gPSBldmVudC5kYXRhO1xuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFJlc29sdmVyQnJpZGdlQWN0aW9uLkNPTk5FQ1QpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VDaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgICAgICB0aGlzLm9uTmV3Q29ubmVjdGlvbihtZXNzYWdlQ2hhbm5lbC5wb3J0MSk7XG4gICAgICAgICAgICBjb25zdCBjb25uZWN0ZWRBY3Rpb246IElXb3JrZXJSZXNvbHZlckJyaWRnZUNvbm5lY3RlZEFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIHR5cGU6IFdvcmtlclJlc29sdmVyQnJpZGdlQWN0aW9uLkNPTk5FQ1RFRCxcbiAgICAgICAgICAgICAgICBwb3J0OiBtZXNzYWdlQ2hhbm5lbC5wb3J0MixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UoY29ubmVjdGVkQWN0aW9uLCBbbWVzc2FnZUNoYW5uZWwucG9ydDJdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrZXJSdW5uZXJVbmV4cGVjdGVkRXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbmV4cGVjdGVkIGFjdGlvbiB0eXBlIGluIFdvcmtlciByZXNvbHZlciBCcmlkZ2UgZnJvbSBOb2RlIHJlc29sdmVyIEJyaWRnZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFdvcmtlclJ1bm5lclVuZXhwZWN0ZWRFcnJvciB9IGZyb20gJ0B3b3JrZXItcnVubmVyL2NvcmUnO1xuaW1wb3J0IHsgQ29ubmVjdEVudmlyb25tZW50RXJyb3JTZXJpYWxpemVyIH0gZnJvbSAnLi4vLi4vY29ubmVjdC9lbnZpcm9ubWVudC9jb25uZWN0LWVudmlyb25tZW50LWVycm9yLXNlcmlhbGl6ZXInO1xuaW1wb3J0IHsgQ29ubmVjdEVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vY29ubmVjdC9lbnZpcm9ubWVudC9jb25uZWN0LmVudmlyb25tZW50JztcbmltcG9ydCB7IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMgfSBmcm9tICcuLi8uLi9lcnJvcnMvZXJyb3ItbWVzc2FnZSc7XG5pbXBvcnQgeyBJU2VyaWFsaXplZEVycm9yLCBXb3JrZXJSdW5uZXJFcnJvclNlcmlhbGl6ZXIsIFdPUktFUl9SVU5ORVJfRVJST1JfU0VSSUFMSVpFUiB9IGZyb20gJy4uLy4uL2Vycm9ycy9lcnJvci5zZXJpYWxpemVyJztcbmltcG9ydCB7IFJ1bm5lckRlc3Ryb3lFcnJvciwgUnVubmVySW5pdEVycm9yLCBSdW5uZXJOb3RGb3VuZCwgV29ya2VyRGVzdHJveUVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzL3J1bm5lci1lcnJvcnMnO1xuaW1wb3J0IHsgSVJ1bm5lckNvbnRyb2xsZXJDb25maWcsIFJ1bm5lckNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9ydW5uZXIvY29udHJvbGxlci9ydW5uZXIuY29udHJvbGxlcic7XG5pbXBvcnQgeyBSdW5uZXJFbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL3J1bm5lci9lbnZpcm9ubWVudC9ydW5uZXIuZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgUmVzb2x2ZWRSdW5uZXIgfSBmcm9tICcuLi8uLi9ydW5uZXIvcmVzb2x2ZWQtcnVubmVyJztcbmltcG9ydCB7IEFueVJ1bm5lckZyb21MaXN0LCBSdW5uZXJzTGlzdCwgUnVubmVyc0xpc3RDb250cm9sbGVyLCBSdW5uZXJUb2tlbiB9IGZyb20gJy4uLy4uL3J1bm5lci9ydW5uZXItYnJpZGdlL3J1bm5lcnMtbGlzdC5jb250cm9sbGVyJztcbmltcG9ydCB7IElSdW5uZXJTZXJpYWxpemVkUGFyYW1ldGVyIH0gZnJvbSAnLi4vLi4vdHlwZXMvY29uc3RydWN0b3InO1xuaW1wb3J0IHsgSVJ1bm5lckFyZ3VtZW50LCBSdW5uZXJBcmd1bWVudFR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9ydW5uZXItYXJndW1lbnQnO1xuaW1wb3J0IHsgSVJ1bm5lclJlc29sdmVyQ29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UtcnVubmVyLnJlc29sdmVyJztcbmltcG9ydCB7IElOb2RlUmVzb2x2ZXJJbml0UnVubmVyQWN0aW9uLCBOb2RlUmVzb2x2ZXJBY3Rpb24gfSBmcm9tICcuLi9ub2RlL25vZGUtcmVzb2x2ZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCYXNlV29ya2VyUmVzb2x2ZXJCcmlkZ2VGYWN0b3J5LCBJQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlLCBJQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlQ29uZmlnIH0gZnJvbSAnLi4vcmVzb2x2ZXItYnJpZGdlL3dvcmtlci9iYXNlLXdvcmtlci1yZXNvbHZlci5icmlkZ2UnO1xuaW1wb3J0IHsgV29ya2VyUmVzb2x2ZXJCcmlkZ2UgfSBmcm9tICcuLi9yZXNvbHZlci1icmlkZ2Uvd29ya2VyL3dvcmtlci1yZXNvbHZlci5icmlkZ2UnO1xuaW1wb3J0IHsgSVdvcmtlclJlc29sdmVyQWN0aW9uLCBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0ZWRBY3Rpb24sIElXb3JrZXJSZXNvbHZlclJ1bm5lckluaXRFcnJvckFjdGlvbiwgV29ya2VyUmVzb2x2ZXJBY3Rpb24gfSBmcm9tICcuL3dvcmtlci1yZXNvbHZlci5hY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBJQmFzZVdvcmtlclJ1bm5lclJlc29sdmVyPEwgZXh0ZW5kcyBSdW5uZXJzTGlzdD4gZXh0ZW5kcyBJUnVubmVyUmVzb2x2ZXJDb25maWdCYXNlPEw+IHtcbiAgICBicmlkZ2VGYWN0b3J5PzogQmFzZVdvcmtlclJlc29sdmVyQnJpZGdlRmFjdG9yeTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VXb3JrZXJSdW5uZXJSZXNvbHZlcjxMIGV4dGVuZHMgUnVubmVyc0xpc3Q+IHtcbiAgICBcbiAgICBwcm90ZWN0ZWQgcnVubmVyRW52aXJvbm1lbnRzID0gbmV3IFNldDxSdW5uZXJFbnZpcm9ubWVudDxBbnlSdW5uZXJGcm9tTGlzdDxMPj4+KCk7XG4gICAgcHJvdGVjdGVkIHJlc29sdmVyQnJpZGdlPzogSUJhc2VXb3JrZXJSZXNvbHZlckJyaWRnZTtcbiAgICBcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcnVubmVyc0xpc3RDb250cm9sbGVyOiBSdW5uZXJzTGlzdENvbnRyb2xsZXI8TD47XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFJ1bm5lckVudmlyb25tZW50Q29uc3RydWN0b3IgPSBSdW5uZXJFbnZpcm9ubWVudDsgLy8gVE9ETyByZXBsYWNlIHRvIGZhY3RvcnlcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXJyb3JTZXJpYWxpemVyID0gdGhpcy5idWlsZFdvcmtlckVycm9yU2VyaWFsaXplcigpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBuZXdDb25uZWN0aW9uSGFuZGxlciA9IHRoaXMuaGFuZGxlTmV3Q29ubmVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjb25uZWN0RW52aXJvbm1lbnQgPSBuZXcgQ29ubmVjdEVudmlyb25tZW50KHtcbiAgICAgICAgZGVzdHJveUVycm9yU2VyaWFsaXplcjogdGhpcy5kZXN0cm95RXJyb3JTZXJpYWxpemVyLmJpbmQodGhpcykgYXMgQ29ubmVjdEVudmlyb25tZW50RXJyb3JTZXJpYWxpemVyLFxuICAgICAgICBhY3Rpb25zSGFuZGxlcjogdGhpcy5oYW5kbGVBY3Rpb24uYmluZCh0aGlzKSxcbiAgICAgICAgZGVzdHJveUhhbmRsZXI6IHRoaXMuaGFuZGxlRGVzdHJveS5iaW5kKHRoaXMpLFxuICAgIH0pXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJyaWRnZUZhY3Rvcnk6IEJhc2VXb3JrZXJSZXNvbHZlckJyaWRnZUZhY3Rvcnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElCYXNlV29ya2VyUnVubmVyUmVzb2x2ZXI8TD4pIHtcbiAgICAgICAgdGhpcy5ydW5uZXJzTGlzdENvbnRyb2xsZXIgPSBuZXcgUnVubmVyc0xpc3RDb250cm9sbGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuYnJpZGdlRmFjdG9yeSA9IGNvbmZpZy5icmlkZ2VGYWN0b3J5IHx8IHRoaXMuZGVmYXVsdEJyaWRnZUZhY3Rvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIHJ1bigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlckJyaWRnZSA9IHRoaXMuYnJpZGdlRmFjdG9yeSh7IG5ld0Nvbm5lY3Rpb25IYW5kbGVyOiB0aGlzLm5ld0Nvbm5lY3Rpb25IYW5kbGVyIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBoYW5kbGVBY3Rpb24oYWN0aW9uOiBJTm9kZVJlc29sdmVySW5pdFJ1bm5lckFjdGlvbik6IFByb21pc2U8SVdvcmtlclJlc29sdmVyQWN0aW9uPiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTm9kZVJlc29sdmVyQWN0aW9uLklOSVRfUlVOTkVSOlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmluaXRSdW5uZXJJbnN0YW5jZShhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBydW5uZXJOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uZXJOYW1lID0gdGhpcy5ydW5uZXJzTGlzdENvbnRyb2xsZXIuZ2V0UnVubmVyKGFjdGlvbi50b2tlbikubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7IC8qKiBPbmx5IHRyeSBnZXQgbmFtZSAqLyB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yQWN0aW9uOiBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0RXJyb3JBY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBXb3JrZXJSZXNvbHZlckFjdGlvbi5SVU5ORVJfSU5JVF9FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLiB0aGlzLmVycm9yU2VyaWFsaXplci5zZXJpYWxpemUoZXJyb3IsIG5ldyBSdW5uZXJOb3RGb3VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogV09SS0VSX1JVTk5FUl9FUlJPUl9NRVNTQUdFUy5SVU5ORVJfSU5JVF9FUlJPUih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24udG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5lck5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2s6IGVycm9yPy5zdGFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yQWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtlclJ1bm5lclVuZXhwZWN0ZWRFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbmV4cGVjdGVkIEFjdGlvbiB0eXBlIGZvciBXb3JrZXIgUnVubmVyIFJlc29sdmVyJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlcmlhbGl6ZUFyZ3VtZW50cyhhcmdzOiBJUnVubmVyQXJndW1lbnRbXSk6IHtcbiAgICAgICAgYXJnczogQXJyYXk8SVJ1bm5lclNlcmlhbGl6ZWRQYXJhbWV0ZXI+LFxuICAgICAgICBjb250cm9sbGVyczogQXJyYXk8UnVubmVyQ29udHJvbGxlcjxBbnlSdW5uZXJGcm9tTGlzdDxMPj4+LFxuICAgIH0ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBhcmdzOiBuZXcgQXJyYXk8SVJ1bm5lclNlcmlhbGl6ZWRQYXJhbWV0ZXI+KCksXG4gICAgICAgICAgICBjb250cm9sbGVyczogbmV3IEFycmF5PFJ1bm5lckNvbnRyb2xsZXI8QW55UnVubmVyRnJvbUxpc3Q8TD4+PigpLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IGFyZ3VtZW50IG9mIGFyZ3MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgUnVubmVyQXJndW1lbnRUeXBlLlJVTk5FUl9JTlNUQU5DRToge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gdGhpcy5ydW5uZXJDb250cm9sbGVyUGFydEZhY3Rvcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9ydDogYXJndW1lbnQucG9ydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBhcmd1bWVudC50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jb250cm9sbGVycy5wdXNoKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXJncy5wdXNoKGNvbnRyb2xsZXIucmVzb2x2ZWRSdW5uZXIgYXMgUmVzb2x2ZWRSdW5uZXI8QW55UnVubmVyRnJvbUxpc3Q8TD4+KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hcmdzLnB1c2goYXJndW1lbnQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlRGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZGVzdHJveUVycm9ycyA9IG5ldyBBcnJheTxJU2VyaWFsaXplZEVycm9yPigpO1xuICAgICAgICBjb25zdCBkZXN0cm95aW5nJCA9IG5ldyBBcnJheTxQcm9taXNlPHZvaWQ+PigpO1xuICAgICAgICBmb3IgKGNvbnN0IHJ1bm5lckVudmlyb25tZW50IG9mIHRoaXMucnVubmVyRW52aXJvbm1lbnRzKSB7XG4gICAgICAgICAgICBkZXN0cm95aW5nJC5wdXNoKFxuICAgICAgICAgICAgICAgIHJ1bm5lckVudmlyb25tZW50LmhhbmRsZURlc3Ryb3koKS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3lFcnJvcnMucHVzaCh0aGlzLmVycm9yU2VyaWFsaXplci5zZXJpYWxpemUoZXJyb3IsIG5ldyBSdW5uZXJEZXN0cm95RXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogV09SS0VSX1JVTk5FUl9FUlJPUl9NRVNTQUdFUy5SVU5ORVJfREVTVFJPWV9FUlJPUih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJ1bm5lckVudmlyb25tZW50LnRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5lck5hbWU6IHJ1bm5lckVudmlyb25tZW50LnJ1bm5lck5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrOiBlcnJvcj8uc3RhY2ssXG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGRlc3Ryb3lpbmckKTtcbiAgICAgICAgdGhpcy5ydW5uZXJFbnZpcm9ubWVudHMuY2xlYXIoKTtcbiAgICAgICAgaWYgKGRlc3Ryb3lFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtlckRlc3Ryb3lFcnJvcih7IC8vIFRPRE8gbmVlZCB0ZXN0XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvcnM6IGRlc3Ryb3lFcnJvcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB3cmFwUnVubmVyKHJ1bm5lcjogSW5zdGFuY2VUeXBlPEFueVJ1bm5lckZyb21MaXN0PEw+Pik6IE1lc3NhZ2VQb3J0IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZUNoYW5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuXG4gICAgICAgIGNvbnN0IHJ1bm5lckVudmlyb25tZW50OiBSdW5uZXJFbnZpcm9ubWVudDxBbnlSdW5uZXJGcm9tTGlzdDxMPj4gPSBuZXcgdGhpcy5SdW5uZXJFbnZpcm9ubWVudENvbnN0cnVjdG9yKHtcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnJ1bm5lcnNMaXN0Q29udHJvbGxlci5nZXRSdW5uZXJUb2tlbkJ5SW5zdGFuY2UocnVubmVyKSxcbiAgICAgICAgICAgIHJ1bm5lcixcbiAgICAgICAgICAgIHBvcnQ6IG1lc3NhZ2VDaGFuZWwucG9ydDEsXG4gICAgICAgICAgICB3b3JrZXJSdW5uZXJSZXNvbHZlcjogdGhpcyxcbiAgICAgICAgICAgIGVycm9yU2VyaWFsaXplcjogdGhpcy5lcnJvclNlcmlhbGl6ZXIsXG4gICAgICAgICAgICBvbkRlc3Ryb3llZDogKCkgPT4gdGhpcy5ydW5uZXJFbnZpcm9ubWVudHMuZGVsZXRlKHJ1bm5lckVudmlyb25tZW50KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ydW5uZXJFbnZpcm9ubWVudHMuYWRkKHJ1bm5lckVudmlyb25tZW50KTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VDaGFuZWwucG9ydDI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkV29ya2VyRXJyb3JTZXJpYWxpemVyKCk6IFdvcmtlclJ1bm5lckVycm9yU2VyaWFsaXplciB7XG4gICAgICAgIHJldHVybiBXT1JLRVJfUlVOTkVSX0VSUk9SX1NFUklBTElaRVI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJ1bm5lckNvbnRyb2xsZXJQYXJ0RmFjdG9yeShjb25maWc6IHtcbiAgICAgICAgdG9rZW46IFJ1bm5lclRva2VuLFxuICAgICAgICBwb3J0OiBNZXNzYWdlUG9ydCxcbiAgICB9KTogUnVubmVyQ29udHJvbGxlcjxBbnlSdW5uZXJGcm9tTGlzdDxMPj4ge1xuICAgICAgICBjb25zdCBydW5uZXJCcmlkZ2VDb25zdHJ1Y3RvciA9IHRoaXMucnVubmVyc0xpc3RDb250cm9sbGVyLmdldFJ1bm5lckJyaWRnZUNvbnN0cnVjdG9yKGNvbmZpZy50b2tlbik7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUnVubmVyTmFtZSA9IHRoaXMucnVubmVyc0xpc3RDb250cm9sbGVyLmdldFJ1bm5lcihjb25maWcudG9rZW4pLm5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5lckNvbnRyb2xsZXJGYWN0b3J5KHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIHJ1bm5lckJyaWRnZUNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgb3JpZ2luYWxSdW5uZXJOYW1lLFxuICAgICAgICAgICAgcnVubmVyQ29udHJvbGxlclBhcnRGYWN0b3J5OiB0aGlzLnJ1bm5lckNvbnRyb2xsZXJQYXJ0RmFjdG9yeS5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcnVubmVyQ29udHJvbGxlckZhY3RvcnkoXG4gICAgICAgIGNvbmZpZzogSVJ1bm5lckNvbnRyb2xsZXJDb25maWc8QW55UnVubmVyRnJvbUxpc3Q8TD4+XG4gICAgKTogUnVubmVyQ29udHJvbGxlcjxBbnlSdW5uZXJGcm9tTGlzdDxMPj4ge1xuICAgICAgICByZXR1cm4gbmV3IFJ1bm5lckNvbnRyb2xsZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmF1bHRCcmlkZ2VGYWN0b3J5KGNvbmZpZzogSUJhc2VXb3JrZXJSZXNvbHZlckJyaWRnZUNvbmZpZyk6IElCYXNlV29ya2VyUmVzb2x2ZXJCcmlkZ2Uge1xuICAgICAgICByZXR1cm4gbmV3IFdvcmtlclJlc29sdmVyQnJpZGdlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVOZXdDb25uZWN0aW9uKHBvcnQ6IE1lc3NhZ2VQb3J0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29ubmVjdEVudmlyb25tZW50LmFkZFBvcnQocG9ydCk7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBwcml2YXRlIGRlc3Ryb3lFcnJvclNlcmlhbGl6ZXIoZXJyb3I6IGFueSk6IElTZXJpYWxpemVkRXJyb3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvclNlcmlhbGl6ZXIuc2VyaWFsaXplKGVycm9yLCBuZXcgV29ya2VyRGVzdHJveUVycm9yKHtcbiAgICAgICAgICAgIHN0YWNrOiBlcnJvcj8uc3RhY2ssXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0UnVubmVySW5zdGFuY2UoXG4gICAgICAgIGFjdGlvbjogSU5vZGVSZXNvbHZlckluaXRSdW5uZXJBY3Rpb24sXG4gICAgKTogUHJvbWlzZTxJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0RXJyb3JBY3Rpb24gfCBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0ZWRBY3Rpb24+IHtcbiAgICAgICAgY29uc3QgcnVubmVyQ29uc3RydWN0b3IgPSB0aGlzLnJ1bm5lcnNMaXN0Q29udHJvbGxlci5nZXRSdW5uZXIoYWN0aW9uLnRva2VuKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZUNoYW5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZUFyZ3VtZW50c0RhdGEgPSB0aGlzLmRlc2VyaWFsaXplQXJndW1lbnRzKGFjdGlvbi5hcmdzKTtcbiAgICAgICAgbGV0IHJ1bm5lcjogSW5zdGFuY2VUeXBlPEFueVJ1bm5lckZyb21MaXN0PEw+PjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJ1bm5lciA9IG5ldyBydW5uZXJDb25zdHJ1Y3RvciguLi5kZXNlcmlhbGl6ZUFyZ3VtZW50c0RhdGEuYXJncykgYXMgSW5zdGFuY2VUeXBlPEFueVJ1bm5lckZyb21MaXN0PEw+PjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yQWN0aW9uOiBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0RXJyb3JBY3Rpb24gPSB7IC8vIFRPRE8gdGhyb3dcbiAgICAgICAgICAgICAgICB0eXBlOiBXb3JrZXJSZXNvbHZlckFjdGlvbi5SVU5ORVJfSU5JVF9FUlJPUixcbiAgICAgICAgICAgICAgICAuLi4gdGhpcy5lcnJvclNlcmlhbGl6ZXIuc2VyaWFsaXplKGVycm9yLCBuZXcgUnVubmVySW5pdEVycm9yICh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFdPUktFUl9SVU5ORVJfRVJST1JfTUVTU0FHRVMuUlVOTkVSX0lOSVRfRVJST1Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IGFjdGlvbi50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5lck5hbWU6IHJ1bm5lckNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzdGFjazogZXJyb3I/LnN0YWNrLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChkZXNlcmlhbGl6ZUFyZ3VtZW50c0RhdGEuY29udHJvbGxlcnNcbiAgICAgICAgICAgICAgICAubWFwKGNvbnRyb2xsZXIgPT4gY29udHJvbGxlci5kaXNjb25uZWN0KCkpKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvckFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJ1bm5lckVudmlyb25tZW50OiBSdW5uZXJFbnZpcm9ubWVudDxBbnlSdW5uZXJGcm9tTGlzdDxMPj4gPSBuZXcgdGhpcy5SdW5uZXJFbnZpcm9ubWVudENvbnN0cnVjdG9yKHtcbiAgICAgICAgICAgIHRva2VuOiBhY3Rpb24udG9rZW4sXG4gICAgICAgICAgICBydW5uZXIsXG4gICAgICAgICAgICBwb3J0OiBtZXNzYWdlQ2hhbmVsLnBvcnQxLFxuICAgICAgICAgICAgd29ya2VyUnVubmVyUmVzb2x2ZXI6IHRoaXMsXG4gICAgICAgICAgICBlcnJvclNlcmlhbGl6ZXI6IHRoaXMuZXJyb3JTZXJpYWxpemVyLFxuICAgICAgICAgICAgb25EZXN0cm95ZWQ6ICgpID0+IHRoaXMucnVubmVyRW52aXJvbm1lbnRzLmRlbGV0ZShydW5uZXJFbnZpcm9ubWVudCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucnVubmVyRW52aXJvbm1lbnRzLmFkZChydW5uZXJFbnZpcm9ubWVudCk7XG4gICAgICAgIHJ1bm5lckVudmlyb25tZW50LmFkZENvbm5lY3RlZENvbnRyb2xsZXJzKGRlc2VyaWFsaXplQXJndW1lbnRzRGF0YS5jb250cm9sbGVycyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQWN0aW9uOiBJV29ya2VyUmVzb2x2ZXJSdW5uZXJJbml0ZWRBY3Rpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBXb3JrZXJSZXNvbHZlckFjdGlvbi5SVU5ORVJfSU5JVEVELFxuICAgICAgICAgICAgcG9ydDogbWVzc2FnZUNoYW5lbC5wb3J0MixcbiAgICAgICAgICAgIHRyYW5zZmVyOiBbbWVzc2FnZUNoYW5lbC5wb3J0Ml0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXNwb25zZUFjdGlvbjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJUnVubmVyU2VyaWFsaXplZFBhcmFtZXRlciwgTm9kZVJ1bm5lclJlc29sdmVyQmFzZSwgUmVzb2x2ZWRSdW5uZXIsIFJlc29sdmVkUnVubmVyQXJndW1lbnRzLCBSdW5uZXJCeUlkZW50aWZpZXIsIFJ1bm5lckNvbnN0cnVjdG9yLCBSdW5uZXJJZGVudGlmaWVyLCBSdW5uZXJzTGlzdCB9IGZyb20gJ0B3b3JrZXItcnVubmVyL2NvcmUnO1xuXG50eXBlIFJ1bm5lckFyZ3VtZW50czxSIGV4dGVuZHMgUnVubmVyQ29uc3RydWN0b3I+XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICA9IFIgZXh0ZW5kcyBSdW5uZXJDb25zdHJ1Y3RvcjxhbnksIGluZmVyIEE+XG4gICAgICAgID8gQSBleHRlbmRzIEFycmF5TGlrZTxJUnVubmVyU2VyaWFsaXplZFBhcmFtZXRlcj5cbiAgICAgICAgICAgID8gUmVzb2x2ZWRSdW5uZXJBcmd1bWVudHM8QT5cbiAgICAgICAgICAgIDogbmV2ZXJcbiAgICAgICAgOiBuZXZlcjtcblxuZXhwb3J0IGNsYXNzIE5vZGVSdW5uZXJSZXNvbHZlcjxMIGV4dGVuZHMgUnVubmVyc0xpc3Q+IGV4dGVuZHMgTm9kZVJ1bm5lclJlc29sdmVyQmFzZTxMPiB7XG5cbiAgICBkZWNsYXJlIHB1YmxpYyByZXNvbHZlOiA8SSBleHRlbmRzIFJ1bm5lcklkZW50aWZpZXI8TD4+KFxuICAgICAgICBpZGVudGlmaWVyOiBJLFxuICAgICAgICAuLi5hcmdzOiBSdW5uZXJBcmd1bWVudHM8UnVubmVyQnlJZGVudGlmaWVyPEwsIEk+PlxuICAgICkgPT4gUHJvbWlzZTxSZXNvbHZlZFJ1bm5lcjxJbnN0YW5jZVR5cGU8UnVubmVyQnlJZGVudGlmaWVyPEwsIEk+Pj4+O1xufVxuIiwiaW1wb3J0IHsgQmFzZVdvcmtlclJ1bm5lclJlc29sdmVyLCBSdW5uZXJzTGlzdCB9IGZyb20gJ0B3b3JrZXItcnVubmVyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgV29ya2VyUnVubmVyUmVzb2x2ZXI8TCBleHRlbmRzIFJ1bm5lcnNMaXN0PiBleHRlbmRzIEJhc2VXb3JrZXJSdW5uZXJSZXNvbHZlcjxMPiB7fVxuIiwiaW1wb3J0IHsgQW55UnVubmVyRnJvbUxpc3QsIExvY2FsUmVzb2x2ZXJCcmlkZ2UsIFJlc29sdmVkUnVubmVyLCBSdW5uZXJzTGlzdCB9IGZyb20gJ0B3b3JrZXItcnVubmVyL2NvcmUnO1xuaW1wb3J0IHsgTm9kZVJ1bm5lclJlc29sdmVyIH0gZnJvbSAnLi9ub2RlLXJ1bm5lci5yZXNvbHZlcic7XG5pbXBvcnQgeyBXb3JrZXJSdW5uZXJSZXNvbHZlciB9IGZyb20gJy4vd29ya2VyLXJ1bm5lci5yZXNvbHZlcic7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFJ1bm5lclJlc29sdmVyPEwgZXh0ZW5kcyBSdW5uZXJzTGlzdD4gZXh0ZW5kcyBOb2RlUnVubmVyUmVzb2x2ZXI8TD4ge1xuICAgIGRlY2xhcmUgcHVibGljIHdyYXBSdW5uZXI6IDxSIGV4dGVuZHMgSW5zdGFuY2VUeXBlPEFueVJ1bm5lckZyb21MaXN0PEw+Pj4ocnVubmVySW5zdGFuY2U6IFIpID0+IFJlc29sdmVkUnVubmVyPFI+O1xuICAgIFxuICAgIHByb3RlY3RlZCBXb3JrZXJSZXNvbHZlckNvbnN0cnVjdG9yID0gV29ya2VyUnVubmVyUmVzb2x2ZXI7XG4gICAgZGVjbGFyZSBwcm90ZWN0ZWQgcmVzb2x2ZXJCcmlkZ2U/OiBMb2NhbFJlc29sdmVyQnJpZGdlPEw+O1xuXG4gICAgcHJvdGVjdGVkIGJ1aWxkUmVzb2x2ZXJCcmlkZ2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb2x2ZXJCcmlkZ2UgPSBuZXcgTG9jYWxSZXNvbHZlckJyaWRnZSh7XG4gICAgICAgICAgICB3b3JrZXJSdW5uZXJSZXNvbHZlckZhY3Rvcnk6IGNvbmZpZyA9PiBuZXcgV29ya2VyUnVubmVyUmVzb2x2ZXIoe1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICBydW5uZXJzOiB0aGlzLnJ1bm5lcnNMaXN0Q29udHJvbGxlci5nZXRSdW5uZXJMaXN0KCkgYXMgdW5rbm93biBhcyBMLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElOb2RlUnVubmVyUmVzb2x2ZXJDb25maWdCYXNlLCBSdW5uZXJzTGlzdCB9IGZyb20gJ0B3b3JrZXItcnVubmVyL2NvcmUnO1xuaW1wb3J0IHsgTm9kZVJ1bm5lclJlc29sdmVyIH0gZnJvbSAnLi9ub2RlLXJ1bm5lci5yZXNvbHZlcic7XG5pbXBvcnQgeyBXb3JrZXJSdW5uZXJSZXNvbHZlciB9IGZyb20gJy4vd29ya2VyLXJ1bm5lci5yZXNvbHZlcic7XG5cbi8qKiBAZGVwcmVjYXRlZCB1c2UgKipOb2RlUnVubmVyUmVzb2x2ZXIqKiBhbmQgKipXb3JrZXJSdW5uZXJSZXNvbHZlcioqICovXG5leHBvcnQgY2xhc3MgUnVubmVyUmVzb2x2ZXI8TCBleHRlbmRzIFJ1bm5lcnNMaXN0PiBleHRlbmRzIE5vZGVSdW5uZXJSZXNvbHZlcjxMPiB7XG4gICAgcHJpdmF0ZSB3b3JrZXJSdW5uZXJSZXNvbHZlcjogV29ya2VyUnVubmVyUmVzb2x2ZXI8TD47XG5cbiAgICAvKiogQGRlcHJlY2F0ZWQgdXNlICoqTm9kZVJ1bm5lclJlc29sdmVyKiogYW5kICoqV29ya2VyUnVubmVyUmVzb2x2ZXIqKiAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSU5vZGVSdW5uZXJSZXNvbHZlckNvbmZpZ0Jhc2U8TD4pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy53b3JrZXJSdW5uZXJSZXNvbHZlciA9IG5ldyBXb3JrZXJSdW5uZXJSZXNvbHZlcihjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBydW5JbldvcmtlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53b3JrZXJSdW5uZXJSZXNvbHZlci5ydW4oKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxudmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0ICcgKyAobmFtZSA/IG5hbWUgKyAnICcgOiAnJykgKyAnaW52b2NhdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQsIHZhbHVlO1xuICBpZiAobWFwcGluZykgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yTWV0aG9kLmNhbGwoTyk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICBmb3IgKDshKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsInZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxudmFyIHB1c2ggPSBbXS5wdXNoO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXggfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHRhcmdldFtpbmRleF0gPSByZXN1bHQ7IC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsdWU7ICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7ICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4gIG1hcDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuICBldmVyeTogY3JlYXRlTWV0aG9kKDQpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgY2FjaGUgPSB7fTtcblxudmFyIHRocm93ZXIgPSBmdW5jdGlvbiAoaXQpIHsgdGhyb3cgaXQ7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBvcHRpb25zKSB7XG4gIGlmIChoYXMoY2FjaGUsIE1FVEhPRF9OQU1FKSkgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXTtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHZhciBBQ0NFU1NPUlMgPSBoYXMob3B0aW9ucywgJ0FDQ0VTU09SUycpID8gb3B0aW9ucy5BQ0NFU1NPUlMgOiBmYWxzZTtcbiAgdmFyIGFyZ3VtZW50MCA9IGhhcyhvcHRpb25zLCAwKSA/IG9wdGlvbnNbMF0gOiB0aHJvd2VyO1xuICB2YXIgYXJndW1lbnQxID0gaGFzKG9wdGlvbnMsIDEpID8gb3B0aW9uc1sxXSA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdID0gISFtZXRob2QgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoQUNDRVNTT1JTICYmICFERVNDUklQVE9SUykgcmV0dXJuIHRydWU7XG4gICAgdmFyIE8gPSB7IGxlbmd0aDogLTEgfTtcblxuICAgIGlmIChBQ0NFU1NPUlMpIGRlZmluZVByb3BlcnR5KE8sIDEsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiB0aHJvd2VyIH0pO1xuICAgIGVsc2UgT1sxXSA9IDE7XG5cbiAgICBtZXRob2QuY2FsbChPLCBhcmd1bWVudDAsIGFyZ3VtZW50MSk7XG4gIH0pO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKGl0ZXJhdG9yV2l0aFJldHVybiwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG4gIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lLWFsbCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtbWV0YWRhdGEnKS5mYXN0S2V5O1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3I7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIENPTlNUUlVDVE9SX05BTUUpO1xuICAgICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGF0LCB7XG4gICAgICAgIHR5cGU6IENPTlNUUlVDVE9SX05BTUUsXG4gICAgICAgIGluZGV4OiBjcmVhdGUobnVsbCksXG4gICAgICAgIGZpcnN0OiB1bmRlZmluZWQsXG4gICAgICAgIGxhc3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZTogMFxuICAgICAgfSk7XG4gICAgICBpZiAoIURFU0NSSVBUT1JTKSB0aGF0LnNpemUgPSAwO1xuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgaXRlcmF0ZShpdGVyYWJsZSwgdGhhdFtBRERFUl0sIHRoYXQsIElTX01BUCk7XG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoQ09OU1RSVUNUT1JfTkFNRSk7XG5cbiAgICB2YXIgZGVmaW5lID0gZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgdmFyIHByZXZpb3VzLCBpbmRleDtcbiAgICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGVudHJ5LnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5sYXN0ID0gZW50cnkgPSB7XG4gICAgICAgICAgaW5kZXg6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLFxuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBwcmV2aW91czogcHJldmlvdXMgPSBzdGF0ZS5sYXN0LFxuICAgICAgICAgIG5leHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICByZW1vdmVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXN0YXRlLmZpcnN0KSBzdGF0ZS5maXJzdCA9IGVudHJ5O1xuICAgICAgICBpZiAocHJldmlvdXMpIHByZXZpb3VzLm5leHQgPSBlbnRyeTtcbiAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplKys7XG4gICAgICAgIGVsc2UgdGhhdC5zaXplKys7XG4gICAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgICBpZiAoaW5kZXggIT09ICdGJykgc3RhdGUuaW5kZXhbaW5kZXhdID0gZW50cnk7XG4gICAgICB9IHJldHVybiB0aGF0O1xuICAgIH07XG5cbiAgICB2YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgLy8gZmFzdCBjYXNlXG4gICAgICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gICAgICB2YXIgZW50cnk7XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHN0YXRlLmluZGV4W2luZGV4XTtcbiAgICAgIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICAgICAgZm9yIChlbnRyeSA9IHN0YXRlLmZpcnN0OyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uZXh0KSB7XG4gICAgICAgIGlmIChlbnRyeS5rZXkgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICAgIHZhciBkYXRhID0gc3RhdGUuaW5kZXg7XG4gICAgICAgIHZhciBlbnRyeSA9IHN0YXRlLmZpcnN0O1xuICAgICAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucHJldmlvdXMpIGVudHJ5LnByZXZpb3VzID0gZW50cnkucHJldmlvdXMubmV4dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pbmRleF07XG4gICAgICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmZpcnN0ID0gc3RhdGUubGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplID0gMDtcbiAgICAgICAgZWxzZSB0aGF0LnNpemUgPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5leHQ7XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wcmV2aW91cztcbiAgICAgICAgICBkZWxldGUgc3RhdGUuaW5kZXhbZW50cnkuaW5kZXhdO1xuICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm5leHQgPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnByZXZpb3VzID0gcHJldjtcbiAgICAgICAgICBpZiAoc3RhdGUuZmlyc3QgPT0gZW50cnkpIHN0YXRlLmZpcnN0ID0gbmV4dDtcbiAgICAgICAgICBpZiAoc3RhdGUubGFzdCA9PSBlbnRyeSkgc3RhdGUubGFzdCA9IHByZXY7XG4gICAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplLS07XG4gICAgICAgICAgZWxzZSB0aGF0LnNpemUtLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubmV4dCA6IHN0YXRlLmZpcnN0KSB7XG4gICAgICAgICAgYm91bmRGdW5jdGlvbihlbnRyeS52YWx1ZSwgZW50cnkua2V5LCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucmVtb3ZlZCkgZW50cnkgPSBlbnRyeS5wcmV2aW91cztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgSVNfTUFQID8ge1xuICAgICAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52YWx1ZTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZGVmaW5lKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IDoge1xuICAgICAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZGVmaW5lKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVApIHtcbiAgICB2YXIgSVRFUkFUT1JfTkFNRSA9IENPTlNUUlVDVE9SX05BTUUgKyAnIEl0ZXJhdG9yJztcbiAgICB2YXIgZ2V0SW50ZXJuYWxDb2xsZWN0aW9uU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKENPTlNUUlVDVE9SX05BTUUpO1xuICAgIHZhciBnZXRJbnRlcm5hbEl0ZXJhdG9yU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKElURVJBVE9SX05BTUUpO1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICBkZWZpbmVJdGVyYXRvcihDLCBDT05TVFJVQ1RPUl9OQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgICB0eXBlOiBJVEVSQVRPUl9OQU1FLFxuICAgICAgICB0YXJnZXQ6IGl0ZXJhdGVkLFxuICAgICAgICBzdGF0ZTogZ2V0SW50ZXJuYWxDb2xsZWN0aW9uU3RhdGUoaXRlcmF0ZWQpLFxuICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICBsYXN0OiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsSXRlcmF0b3JTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBraW5kID0gc3RhdGUua2luZDtcbiAgICAgIHZhciBlbnRyeSA9IHN0YXRlLmxhc3Q7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yZW1vdmVkKSBlbnRyeSA9IGVudHJ5LnByZXZpb3VzO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghc3RhdGUudGFyZ2V0IHx8ICEoc3RhdGUubGFzdCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uZXh0IDogc3RhdGUuc3RhdGUuZmlyc3QpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4geyB2YWx1ZTogZW50cnkua2V5LCBkb25lOiBmYWxzZSB9O1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiBlbnRyeS52YWx1ZSwgZG9uZTogZmFsc2UgfTtcbiAgICAgIHJldHVybiB7IHZhbHVlOiBbZW50cnkua2V5LCBlbnRyeS52YWx1ZV0sIGRvbmU6IGZhbHNlIH07XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKENPTlNUUlVDVE9SX05BTUUpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSwgd3JhcHBlciwgY29tbW9uKSB7XG4gIHZhciBJU19NQVAgPSBDT05TVFJVQ1RPUl9OQU1FLmluZGV4T2YoJ01hcCcpICE9PSAtMTtcbiAgdmFyIElTX1dFQUsgPSBDT05TVFJVQ1RPUl9OQU1FLmluZGV4T2YoJ1dlYWsnKSAhPT0gLTE7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBOYXRpdmVDb25zdHJ1Y3RvciA9IGdsb2JhbFtDT05TVFJVQ1RPUl9OQU1FXTtcbiAgdmFyIE5hdGl2ZVByb3RvdHlwZSA9IE5hdGl2ZUNvbnN0cnVjdG9yICYmIE5hdGl2ZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgdmFyIENvbnN0cnVjdG9yID0gTmF0aXZlQ29uc3RydWN0b3I7XG4gIHZhciBleHBvcnRlZCA9IHt9O1xuXG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIG5hdGl2ZU1ldGhvZCA9IE5hdGl2ZVByb3RvdHlwZVtLRVldO1xuICAgIHJlZGVmaW5lKE5hdGl2ZVByb3RvdHlwZSwgS0VZLFxuICAgICAgS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgICAgIG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIHZhbHVlID09PSAwID8gMCA6IHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IDogS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IGZhbHNlIDogbmF0aXZlTWV0aG9kLmNhbGwodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IHVuZGVmaW5lZCA6IG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyBmYWxzZSA6IG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuICAgICAgfSA6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBpZiAoaXNGb3JjZWQoQ09OU1RSVUNUT1JfTkFNRSwgdHlwZW9mIE5hdGl2ZUNvbnN0cnVjdG9yICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IE5hdGl2ZVByb3RvdHlwZS5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQ29uc3RydWN0b3IgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZS5SRVFVSVJFRCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoaXNGb3JjZWQoQ09OU1RSVUNUT1JfTkFNRSwgdHJ1ZSkpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+IENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkgeyBuZXcgTmF0aXZlQ29uc3RydWN0b3IoaXRlcmFibGUpOyB9KTtcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuXG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IHdyYXBwZXIoZnVuY3Rpb24gKGR1bW15LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKGR1bW15LCBDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCksIGR1bW15LCBDb25zdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGl0ZXJhdGUoaXRlcmFibGUsIHRoYXRbQURERVJdLCB0aGF0LCBJU19NQVApO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gTmF0aXZlUHJvdG90eXBlO1xuICAgICAgTmF0aXZlUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuXG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG5cbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIE5hdGl2ZVByb3RvdHlwZS5jbGVhcikgZGVsZXRlIE5hdGl2ZVByb3RvdHlwZS5jbGVhcjtcbiAgfVxuXG4gIGV4cG9ydGVkW0NPTlNUUlVDVE9SX05BTUVdID0gQ29uc3RydWN0b3I7XG4gICQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogQ29uc3RydWN0b3IgIT0gTmF0aXZlQ29uc3RydWN0b3IgfSwgZXhwb3J0ZWQpO1xuXG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSXRlcmF0b3JzQ29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgdmFyIFN5bWJvbCA9IHBhdGguU3ltYm9sIHx8IChwYXRoLlN5bWJvbCA9IHt9KTtcbiAgaWYgKCFoYXMoU3ltYm9sLCBOQU1FKSkgZGVmaW5lUHJvcGVydHkoU3ltYm9sLCBOQU1FLCB7XG4gICAgdmFsdWU6IHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZihOQU1FKVxuICB9KTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwidmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IC8oaXBob25lfGlwb2R8aXBhZCkuKmFwcGxld2Via2l0L2kudGVzdCh1c2VyQWdlbnQpO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gKyBtYXRjaFsxXTtcbn0gZWxzZSBpZiAodXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uICYmICt2ZXJzaW9uO1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIShhcmdzTGVuZ3RoIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZmFjdG9yaWVzW2FyZ3NMZW5ndGhdID0gRnVuY3Rpb24oJ0MsYScsICdyZXR1cm4gbmV3IEMoJyArIGxpc3Quam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XG4gICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gIHJldHVybiBib3VuZEZ1bmN0aW9uO1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgdmFyIGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjb25zb2xlLmVycm9yKGEpIDogY29uc29sZS5lcnJvcihhLCBiKTtcbiAgfVxufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgdHlwZW9mIChOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnRvU3RyaW5nO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKHR5cGVvZiBzdG9yZS5pbnNwZWN0U291cmNlICE9ICdmdW5jdGlvbicpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCJ2YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgRlJFRVpJTkcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnJlZXppbmcnKTtcblxudmFyIE1FVEFEQVRBID0gdWlkKCdtZXRhJyk7XG52YXIgaWQgPSAwO1xuXG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIHNldE1ldGFkYXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIGRlZmluZVByb3BlcnR5KGl0LCBNRVRBREFUQSwgeyB2YWx1ZToge1xuICAgIG9iamVjdElEOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3ZWFrRGF0YToge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG5cbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIGEgcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQURBVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGFkYXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBREFUQV0ub2JqZWN0SUQ7XG59O1xuXG52YXIgZ2V0V2Vha0RhdGEgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQURBVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGFkYXRhKGl0KTtcbiAgLy8gcmV0dXJuIHRoZSBzdG9yZSBvZiB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBREFUQV0ud2Vha0RhdGE7XG59O1xuXG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpJTkcgJiYgbWV0YS5SRVFVSVJFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEFEQVRBKSkgc2V0TWV0YWRhdGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBSRVFVSVJFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWtEYXRhOiBnZXRXZWFrRGF0YSxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5oaWRkZW5LZXlzW01FVEFEQVRBXSA9IHRydWU7XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCkge1xuICB2YXIgc3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBpdGVyYXRlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGZuLCB0aGF0LCBBU19FTlRSSUVTLCBJU19JVEVSQVRPUikge1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoZm4sIHRoYXQsIEFTX0VOVFJJRVMgPyAyIDogMSk7XG4gIHZhciBpdGVyYXRvciwgaXRlckZuLCBpbmRleCwgbGVuZ3RoLCByZXN1bHQsIG5leHQsIHN0ZXA7XG5cbiAgaWYgKElTX0lURVJBVE9SKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKCdUYXJnZXQgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBBU19FTlRSSUVTXG4gICAgICAgICAgPyBib3VuZEZ1bmN0aW9uKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKVxuICAgICAgICAgIDogYm91bmRGdW5jdGlvbihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTtcbiAgfVxuXG4gIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHJlc3VsdCA9IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIGJvdW5kRnVuY3Rpb24sIHN0ZXAudmFsdWUsIEFTX0VOVFJJRVMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcblxuaXRlcmF0ZS5zdG9wID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCByZXN1bHQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbmlmIChJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5pZiAoIUlTX1BVUkUgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBJU19JT1MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWlvcycpO1xuXG52YXIgTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuLy8gTm9kZS5qcyAxMSBzaG93cyBFeHBlcmltZW50YWxXYXJuaW5nIG9uIGdldHRpbmcgYHF1ZXVlTWljcm90YXNrYFxudmFyIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihnbG9iYWwsICdxdWV1ZU1pY3JvdGFzaycpO1xudmFyIHF1ZXVlTWljcm90YXNrID0gcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yICYmIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvci52YWx1ZTtcblxudmFyIGZsdXNoLCBoZWFkLCBsYXN0LCBub3RpZnksIHRvZ2dsZSwgbm9kZSwgcHJvbWlzZSwgdGhlbjtcblxuLy8gbW9kZXJuIGVuZ2luZXMgaGF2ZSBxdWV1ZU1pY3JvdGFzayBtZXRob2RcbmlmICghcXVldWVNaWNyb3Rhc2spIHtcbiAgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKElTX05PREUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKElTX05PREUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoTXV0YXRpb25PYnNlcnZlciAmJiAhSVNfSU9TKSB7XG4gICAgdG9nZ2xlID0gdHJ1ZTtcbiAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB0aGVuID0gcHJvbWlzZS50aGVuO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoZW4uY2FsbChwcm9taXNlLCBmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWV1ZU1pY3JvdGFzayB8fCBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICBpZiAoIWhlYWQpIHtcbiAgICBoZWFkID0gdGFzaztcbiAgICBub3RpZnkoKTtcbiAgfSBsYXN0ID0gdGFzaztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5Qcm9taXNlO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICByZXR1cm4gIVN0cmluZyhTeW1ib2woKSk7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChpbnNwZWN0U291cmNlKFdlYWtNYXApKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcblxuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG5cbnZhciBuYXRpdmVBc3NpZ24gPSBPYmplY3QuYXNzaWduO1xudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG5tb2R1bGUuZXhwb3J0cyA9ICFuYXRpdmVBc3NpZ24gfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBzaG91bGQgaGF2ZSBjb3JyZWN0IG9yZGVyIG9mIG9wZXJhdGlvbnMgKEVkZ2UgYnVnKVxuICBpZiAoREVTQ1JJUFRPUlMgJiYgbmF0aXZlQXNzaWduKHsgYjogMSB9LCBuYXRpdmVBc3NpZ24oZGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYicsIHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCB7IGI6IDIgfSkpLmIgIT09IDEpIHJldHVybiB0cnVlO1xuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcbiAgdmFyIGFscGhhYmV0ID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtzeW1ib2xdID0gNztcbiAgYWxwaGFiZXQuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNocikgeyBCW2Nocl0gPSBjaHI7IH0pO1xuICByZXR1cm4gbmF0aXZlQXNzaWduKHt9LCBBKVtzeW1ib2xdICE9IDcgfHwgb2JqZWN0S2V5cyhuYXRpdmVBc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBhbHBoYWJldDtcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICB2YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xuICB3aGlsZSAoYXJndW1lbnRzTGVuZ3RoID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IEluZGV4ZWRPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5U3ltYm9scyA/IG9iamVjdEtleXMoUykuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhTKSkgOiBvYmplY3RLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogbmF0aXZlQXNzaWduO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG5cbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMoaXQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XSdcbiAgICA/IGdldFdpbmRvd05hbWVzKGl0KVxuICAgIDogbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoaXQpKTtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IHt9LnRvU3RyaW5nIDogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlcnJvcjogZmFsc2UsIHZhbHVlOiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvcjogdHJ1ZSwgdmFsdWU6IGVycm9yIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgb3B0aW9ucyk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgdmFyIG5vVGFyZ2V0R2V0ID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5ub1RhcmdldEdldCA6IGZhbHNlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodmFsdWUsICduYW1lJywga2V5KTtcbiAgICBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSkuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FKSB7XG4gIHZhciBDb25zdHJ1Y3RvciA9IGdldEJ1aWx0SW4oQ09OU1RSVUNUT1JfTkFNRSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmIENvbnN0cnVjdG9yICYmICFDb25zdHJ1Y3RvcltTUEVDSUVTXSkge1xuICAgIGRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBTUEVDSUVTLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgICB9KTtcbiAgfVxufTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBTVEFUSUMgPyBpdCA6IGl0LnByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShpdCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjYuNScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBTcGVjaWVzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gZGVmYXVsdENvbnN0cnVjdG9yIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgY29kZVBvaW50QXQsIGF0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoQ09OVkVSVF9UT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgcG9zKSB7XG4gICAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBzaXplID0gUy5sZW5ndGg7XG4gICAgdmFyIGZpcnN0LCBzZWNvbmQ7XG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBmaXJzdCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgcmV0dXJuIGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gc2l6ZVxuICAgICAgfHwgKHNlY29uZCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgICAgPyBDT05WRVJUX1RPX1NUUklORyA/IFMuY2hhckF0KHBvc2l0aW9uKSA6IGZpcnN0XG4gICAgICAgIDogQ09OVkVSVF9UT19TVFJJTkcgPyBTLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIDIpIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcbiAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbiAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIElTX0lPUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtaW9zJyk7XG5cbnZhciBsb2NhdGlvbiA9IGdsb2JhbC5sb2NhdGlvbjtcbnZhciBzZXQgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG52YXIgcnVuID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG5cbnZhciBydW5uZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBydW4oaWQpO1xuICB9O1xufTtcblxudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bihldmVudC5kYXRhKTtcbn07XG5cbnZhciBwb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIG9sZCBlbmdpbmVzIGhhdmUgbm90IGxvY2F0aW9uLm9yaWdpblxuICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCk7XG59O1xuXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldCB8fCAhY2xlYXIpIHtcbiAgc2V0ID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2socnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIC8vIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjI0XG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwgJiYgIUlTX0lPUykge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gYmluZChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoXG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiZcbiAgICB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgICFnbG9iYWwuaW1wb3J0U2NyaXB0cyAmJlxuICAgICFmYWlscyhwb3N0KSAmJlxuICAgIGxvY2F0aW9uLnByb3RvY29sICE9PSAnZmlsZTonXG4gICkge1xuICAgIGRlZmVyID0gcG9zdDtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChydW5uZXIoaWQpLCAwKTtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgY2xlYXI6IGNsZWFyXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIFBSRUZFUlJFRF9TVFJJTkcpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIFN0cmluZyhrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KTtcbn07XG4iLCJ2YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgIVN5bWJvbC5zaGFtXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG5leHBvcnRzLmYgPSB3ZWxsS25vd25TeW1ib2w7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBpZiAoTkFUSVZFX1NZTUJPTCAmJiBoYXMoU3ltYm9sLCBuYW1lKSkgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gU3ltYm9sW25hbWVdO1xuICAgIGVsc2UgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcbi8vIEVkZ2UgMTQtIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgZnJvbTogZnJvbVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gW10uaW5kZXhPZjtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdpbmRleE9mJywgeyBBQ0NFU1NPUlM6IHRydWUsIDE6IDAgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gbmF0aXZlSW5kZXhPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxuLy8gYEFycmF5LmlzQXJyYXlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuaXNhcnJheVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIGlzQXJyYXk6IGlzQXJyYXlcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcblxudmFyIEFSUkFZX0lURVJBVE9SID0gJ0FycmF5IEl0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKEFSUkFZX0lURVJBVE9SKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5lbnRyaWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5lbnRyaWVzXG4vLyBgQXJyYXkucHJvdG90eXBlLmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmtleXNcbi8vIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS52YWx1ZXNcbi8vIGBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAaXRlcmF0b3Jcbi8vIGBDcmVhdGVBcnJheUl0ZXJhdG9yYCBpbnRlcm5hbCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZWFycmF5aXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lSXRlcmF0b3IoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBBUlJBWV9JVEVSQVRPUixcbiAgICB0YXJnZXQ6IHRvSW5kZXhlZE9iamVjdChpdGVyYXRlZCksIC8vIHRhcmdldFxuICAgIGluZGV4OiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICAgIGtpbmQ6IGtpbmQgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICB9KTtcbi8vIGAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0lYXJyYXlpdGVyYXRvcnByb3RvdHlwZSUubmV4dFxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgdGFyZ2V0ID0gc3RhdGUudGFyZ2V0O1xuICB2YXIga2luZCA9IHN0YXRlLmtpbmQ7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4Kys7XG4gIGlmICghdGFyZ2V0IHx8IGluZGV4ID49IHRhcmdldC5sZW5ndGgpIHtcbiAgICBzdGF0ZS50YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHsgdmFsdWU6IGluZGV4LCBkb25lOiBmYWxzZSB9O1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHsgdmFsdWU6IHRhcmdldFtpbmRleF0sIGRvbmU6IGZhbHNlIH07XG4gIHJldHVybiB7IHZhbHVlOiBbaW5kZXgsIHRhcmdldFtpbmRleF1dLCBkb25lOiBmYWxzZSB9O1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyVcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZXVubWFwcGVkYXJndW1lbnRzb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVtYXBwZWRhcmd1bWVudHNvYmplY3Rcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcbi8vIEZGNDktIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnc2xpY2UnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMDogMCwgMTogMiB9KTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mIENvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmF0aXZlU2xpY2UuY2FsbChPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyBBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xuICAgIGZvciAobiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBpZiAoayBpbiBPKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xuICAgIHJlc3VsdC5sZW5ndGggPSBuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBuYXRpdmVEYXRlVG9TdHJpbmcgPSBEYXRlUHJvdG90eXBlW1RPX1NUUklOR107XG52YXIgZ2V0VGltZSA9IERhdGVQcm90b3R5cGUuZ2V0VGltZTtcblxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAobmV3IERhdGUoTmFOKSArICcnICE9IElOVkFMSURfREFURSkge1xuICByZWRlZmluZShEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IG5hdGl2ZURhdGVUb1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiQoeyB0YXJnZXQ6ICdGdW5jdGlvbicsIHByb3RvOiB0cnVlIH0sIHtcbiAgYmluZDogYmluZFxufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbicpO1xudmFyIGNvbGxlY3Rpb25TdHJvbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gYE1hcGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW1hcC1vYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IGNvbGxlY3Rpb24oJ01hcCcsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBpbml0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwgY29sbGVjdGlvblN0cm9uZyk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBhc3NpZ24gfSwge1xuICBhc3NpZ246IGFzc2lnblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBjcmVhdGU6IGNyZWF0ZVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydHk6IG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlLmZcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLWV4dGVybmFsJykuZjtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiAhT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZBSUxTX09OX1BSSU1JVElWRVMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVHZXRQcm90b3R5cGVPZigxKTsgfSk7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTLCBzaGFtOiAhQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSIH0sIHtcbiAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUgfSwge1xuICBzZXRQcm90b3R5cGVPZjogc2V0UHJvdG90eXBlT2Zcbn0pO1xuIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKCFUT19TVFJJTkdfVEFHX1NVUFBPUlQpIHtcbiAgcmVkZWZpbmUoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgdG9TdHJpbmcsIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21pY3JvdGFzaycpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIGhvc3RSZXBvcnRFcnJvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsUHJvbWlzZVN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoUFJPTUlTRSk7XG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yID0gTmF0aXZlUHJvbWlzZTtcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkZmV0Y2ggPSBnZXRCdWlsdEluKCdmZXRjaCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcbnZhciBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eTtcbnZhciBJU19OT0RFID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgRElTUEFUQ0hfRVZFTlQgPSAhIShkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFdmVudCAmJiBnbG9iYWwuZGlzcGF0Y2hFdmVudCk7XG52YXIgVU5IQU5ETEVEX1JFSkVDVElPTiA9ICd1bmhhbmRsZWRyZWplY3Rpb24nO1xudmFyIFJFSkVDVElPTl9IQU5ETEVEID0gJ3JlamVjdGlvbmhhbmRsZWQnO1xudmFyIFBFTkRJTkcgPSAwO1xudmFyIEZVTEZJTExFRCA9IDE7XG52YXIgUkVKRUNURUQgPSAyO1xudmFyIEhBTkRMRUQgPSAxO1xudmFyIFVOSEFORExFRCA9IDI7XG52YXIgSW50ZXJuYWwsIE93blByb21pc2VDYXBhYmlsaXR5LCBQcm9taXNlV3JhcHBlciwgbmF0aXZlVGhlbjtcblxudmFyIEZPUkNFRCA9IGlzRm9yY2VkKFBST01JU0UsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIEdMT0JBTF9DT1JFX0pTX1BST01JU0UgPSBpbnNwZWN0U291cmNlKFByb21pc2VDb25zdHJ1Y3RvcikgIT09IFN0cmluZyhQcm9taXNlQ29uc3RydWN0b3IpO1xuICBpZiAoIUdMT0JBTF9DT1JFX0pTX1BST01JU0UpIHtcbiAgICAvLyBWOCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgLy8gV2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICBpZiAoVjhfVkVSU0lPTiA9PT0gNjYpIHJldHVybiB0cnVlO1xuICAgIC8vIFVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICBpZiAoIUlTX05PREUgJiYgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCAhPSAnZnVuY3Rpb24nKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBXZSBuZWVkIFByb21pc2UjZmluYWxseSBpbiB0aGUgcHVyZSB2ZXJzaW9uIGZvciBwcmV2ZW50aW5nIHByb3RvdHlwZSBwb2xsdXRpb25cbiAgaWYgKElTX1BVUkUgJiYgIVByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGVbJ2ZpbmFsbHknXSkgcmV0dXJuIHRydWU7XG4gIC8vIFdlIGNhbid0IHVzZSBAQHNwZWNpZXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG4gIGlmIChWOF9WRVJTSU9OID49IDUxICYmIC9uYXRpdmUgY29kZS8udGVzdChQcm9taXNlQ29uc3RydWN0b3IpKSByZXR1cm4gZmFsc2U7XG4gIC8vIERldGVjdCBjb3JyZWN0bmVzcyBvZiBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZUNvbnN0cnVjdG9yLnJlc29sdmUoMSk7XG4gIHZhciBGYWtlUHJvbWlzZSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgZXhlYyhmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG4gIH07XG4gIHZhciBjb25zdHJ1Y3RvciA9IHByb21pc2UuY29uc3RydWN0b3IgPSB7fTtcbiAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBGYWtlUHJvbWlzZTtcbiAgcmV0dXJuICEocHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZSk7XG59KTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSBGT1JDRUQgfHwgIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgUHJvbWlzZUNvbnN0cnVjdG9yLmFsbChpdGVyYWJsZSlbJ2NhdGNoJ10oZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbn0pO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcblxudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSwgaXNSZWplY3QpIHtcbiAgaWYgKHN0YXRlLm5vdGlmaWVkKSByZXR1cm47XG4gIHN0YXRlLm5vdGlmaWVkID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gc3RhdGUucmVhY3Rpb25zO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBvayA9IHN0YXRlLnN0YXRlID09IEZVTEZJTExFRDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBjaGFpbltpbmRleCsrXTtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnJlamVjdGlvbiA9PT0gVU5IQU5ETEVEKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlLCBzdGF0ZSk7XG4gICAgICAgICAgICBzdGF0ZS5yZWplY3Rpb24gPSBIQU5ETEVEO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBjYW4gdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRlLnJlYWN0aW9ucyA9IFtdO1xuICAgIHN0YXRlLm5vdGlmaWVkID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFzdGF0ZS5yZWplY3Rpb24pIG9uVW5oYW5kbGVkKHByb21pc2UsIHN0YXRlKTtcbiAgfSk7XG59O1xuXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBwcm9taXNlLCByZWFzb24pIHtcbiAgdmFyIGV2ZW50LCBoYW5kbGVyO1xuICBpZiAoRElTUEFUQ0hfRVZFTlQpIHtcbiAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LnByb21pc2UgPSBwcm9taXNlO1xuICAgIGV2ZW50LnJlYXNvbiA9IHJlYXNvbjtcbiAgICBldmVudC5pbml0RXZlbnQobmFtZSwgZmFsc2UsIHRydWUpO1xuICAgIGdsb2JhbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIGV2ZW50ID0geyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHJlYXNvbiB9O1xuICBpZiAoaGFuZGxlciA9IGdsb2JhbFsnb24nICsgbmFtZV0pIGhhbmRsZXIoZXZlbnQpO1xuICBlbHNlIGlmIChuYW1lID09PSBVTkhBTkRMRURfUkVKRUNUSU9OKSBob3N0UmVwb3J0RXJyb3JzKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCByZWFzb24pO1xufTtcblxudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgSVNfVU5IQU5ETEVEID0gaXNVbmhhbmRsZWQoc3RhdGUpO1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKElTX1VOSEFORExFRCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChJU19OT0RFKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFVOSEFORExFRF9SRUpFQ1RJT04sIHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHN0YXRlLnJlamVjdGlvbiA9IElTX05PREUgfHwgaXNVbmhhbmRsZWQoc3RhdGUpID8gVU5IQU5ETEVEIDogSEFORExFRDtcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHRocm93IHJlc3VsdC52YWx1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5yZWplY3Rpb24gIT09IEhBTkRMRUQgJiYgIXN0YXRlLnBhcmVudDtcbn07XG5cbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKElTX05PREUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFJFSkVDVElPTl9IQU5ETEVELCBwcm9taXNlLCBzdGF0ZS52YWx1ZSk7XG4gIH0pO1xufTtcblxudmFyIGJpbmQgPSBmdW5jdGlvbiAoZm4sIHByb21pc2UsIHN0YXRlLCB1bndyYXApIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZuKHByb21pc2UsIHN0YXRlLCB2YWx1ZSwgdW53cmFwKTtcbiAgfTtcbn07XG5cbnZhciBpbnRlcm5hbFJlamVjdCA9IGZ1bmN0aW9uIChwcm9taXNlLCBzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gIHN0YXRlLnN0YXRlID0gUkVKRUNURUQ7XG4gIG5vdGlmeShwcm9taXNlLCBzdGF0ZSwgdHJ1ZSk7XG59O1xuXG52YXIgaW50ZXJuYWxSZXNvbHZlID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIHZhciB0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSk7XG4gICAgaWYgKHRoZW4pIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBkb25lOiBmYWxzZSB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSxcbiAgICAgICAgICAgIGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBwcm9taXNlLCB3cmFwcGVyLCBzdGF0ZSksXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVqZWN0LCBwcm9taXNlLCB3cmFwcGVyLCBzdGF0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGludGVybmFsUmVqZWN0KHByb21pc2UsIHdyYXBwZXIsIGVycm9yLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgc3RhdGUuc3RhdGUgPSBGVUxGSUxMRUQ7XG4gICAgICBub3RpZnkocHJvbWlzZSwgc3RhdGUsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW50ZXJuYWxSZWplY3QocHJvbWlzZSwgeyBkb25lOiBmYWxzZSB9LCBlcnJvciwgc3RhdGUpO1xuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKEZPUkNFRCkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICBQcm9taXNlQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCBQcm9taXNlQ29uc3RydWN0b3IsIFBST01JU0UpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihiaW5kKGludGVybmFsUmVzb2x2ZSwgdGhpcywgc3RhdGUpLCBiaW5kKGludGVybmFsUmVqZWN0LCB0aGlzLCBzdGF0ZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpbnRlcm5hbFJlamVjdCh0aGlzLCBzdGF0ZSwgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgdHlwZTogUFJPTUlTRSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgbm90aWZpZWQ6IGZhbHNlLFxuICAgICAgcGFyZW50OiBmYWxzZSxcbiAgICAgIHJlYWN0aW9uczogW10sXG4gICAgICByZWplY3Rpb246IGZhbHNlLFxuICAgICAgc3RhdGU6IFBFTkRJTkcsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKFByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUudGhlbmAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUudGhlblxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUHJvbWlzZVN0YXRlKHRoaXMpO1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvcikpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBJU19OT0RFID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICBzdGF0ZS5wYXJlbnQgPSB0cnVlO1xuICAgICAgc3RhdGUucmVhY3Rpb25zLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHN0YXRlLnN0YXRlICE9IFBFTkRJTkcpIG5vdGlmeSh0aGlzLCBzdGF0ZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucHJvdG90eXBlLmNhdGNoXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUocHJvbWlzZSk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBiaW5kKGludGVybmFsUmVzb2x2ZSwgcHJvbWlzZSwgc3RhdGUpO1xuICAgIHRoaXMucmVqZWN0ID0gYmluZChpbnRlcm5hbFJlamVjdCwgcHJvbWlzZSwgc3RhdGUpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSBQcm9taXNlQ29uc3RydWN0b3IgfHwgQyA9PT0gUHJvbWlzZVdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcblxuICBpZiAoIUlTX1BVUkUgJiYgdHlwZW9mIE5hdGl2ZVByb21pc2UgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG5hdGl2ZVRoZW4gPSBOYXRpdmVQcm9taXNlLnByb3RvdHlwZS50aGVuO1xuXG4gICAgLy8gd3JhcCBuYXRpdmUgUHJvbWlzZSN0aGVuIGZvciBuYXRpdmUgYXN5bmMgZnVuY3Rpb25zXG4gICAgcmVkZWZpbmUoTmF0aXZlUHJvbWlzZS5wcm90b3R5cGUsICd0aGVuJywgZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBuYXRpdmVUaGVuLmNhbGwodGhhdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NDBcbiAgICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcblxuICAgIC8vIHdyYXAgZmV0Y2ggcmVzdWx0XG4gICAgaWYgKHR5cGVvZiAkZmV0Y2ggPT0gJ2Z1bmN0aW9uJykgJCh7IGdsb2JhbDogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgZmV0Y2g6IGZ1bmN0aW9uIGZldGNoKGlucHV0IC8qICwgaW5pdCAqLykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoUHJvbWlzZUNvbnN0cnVjdG9yLCAkZmV0Y2guYXBwbHkoZ2xvYmFsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4kKHsgZ2xvYmFsOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIFByb21pc2U6IFByb21pc2VDb25zdHJ1Y3RvclxufSk7XG5cbnNldFRvU3RyaW5nVGFnKFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSwgZmFsc2UsIHRydWUpO1xuc2V0U3BlY2llcyhQUk9NSVNFKTtcblxuUHJvbWlzZVdyYXBwZXIgPSBnZXRCdWlsdEluKFBST01JU0UpO1xuXG4vLyBzdGF0aWNzXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucmVqZWN0XG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIGNhcGFiaWxpdHkucmVqZWN0LmNhbGwodW5kZWZpbmVkLCByKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlc29sdmVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKElTX1BVUkUgJiYgdGhpcyA9PT0gUHJvbWlzZVdyYXBwZXIgPyBQcm9taXNlQ29uc3RydWN0b3IgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIC8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyBgUHJvbWlzZS5yYWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5yYWNlXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBuYXRpdmVDb25zdHJ1Y3QgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ2NvbnN0cnVjdCcpO1xuXG4vLyBgUmVmbGVjdC5jb25zdHJ1Y3RgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVmbGVjdC5jb25zdHJ1Y3Rcbi8vIE1TIEVkZ2Ugc3VwcG9ydHMgb25seSAyIGFyZ3VtZW50cyBhbmQgYXJndW1lbnRzTGlzdCBhcmd1bWVudCBpcyBvcHRpb25hbFxuLy8gRkYgTmlnaHRseSBzZXRzIHRoaXJkIGFyZ3VtZW50IGFzIGBuZXcudGFyZ2V0YCwgYnV0IGRvZXMgbm90IGNyZWF0ZSBgdGhpc2AgZnJvbSBpdFxudmFyIE5FV19UQVJHRVRfQlVHID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiAhKG5hdGl2ZUNvbnN0cnVjdChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xufSk7XG52YXIgQVJHU19CVUcgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBuYXRpdmVDb25zdHJ1Y3QoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbn0pO1xudmFyIEZPUkNFRCA9IE5FV19UQVJHRVRfQlVHIHx8IEFSR1NfQlVHO1xuXG4kKHsgdGFyZ2V0OiAnUmVmbGVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VELCBzaGFtOiBGT1JDRUQgfSwge1xuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MgLyogLCBuZXdUYXJnZXQgKi8pIHtcbiAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcbiAgICBhbk9iamVjdChhcmdzKTtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICBpZiAoQVJHU19CVUcgJiYgIU5FV19UQVJHRVRfQlVHKSByZXR1cm4gbmF0aXZlQ29uc3RydWN0KFRhcmdldCwgYXJncywgbmV3VGFyZ2V0KTtcbiAgICBpZiAoVGFyZ2V0ID09IG5ld1RhcmdldCkge1xuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBvcHRpbWl6YXRpb24gZm9yIDAtNCBhcmd1bWVudHNcbiAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IFRhcmdldCgpO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgfVxuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBsb3Qgb2YgYXJndW1lbnRzIGNhc2VcbiAgICAgIHZhciAkYXJncyA9IFtudWxsXTtcbiAgICAgICRhcmdzLnB1c2guYXBwbHkoJGFyZ3MsIGFyZ3MpO1xuICAgICAgcmV0dXJuIG5ldyAoYmluZC5hcHBseShUYXJnZXQsICRhcmdzKSkoKTtcbiAgICB9XG4gICAgLy8gd2l0aCBhbHRlcmVkIG5ld1RhcmdldCwgbm90IHN1cHBvcnQgYnVpbHQtaW4gY29uc3RydWN0b3JzXG4gICAgdmFyIHByb3RvID0gbmV3VGFyZ2V0LnByb3RvdHlwZTtcbiAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKTtcbiAgICB2YXIgcmVzdWx0ID0gRnVuY3Rpb24uYXBwbHkuY2FsbChUYXJnZXQsIGluc3RhbmNlLCBhcmdzKTtcbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG5cbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG52YXIgbmF0aXZlVG9TdHJpbmcgPSBSZWdFeHBQcm90b3R5cGVbVE9fU1RSSU5HXTtcblxudmFyIE5PVF9HRU5FUklDID0gZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlVG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxudmFyIElOQ09SUkVDVF9OQU1FID0gbmF0aXZlVG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkc7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChOT1RfR0VORVJJQyB8fCBJTkNPUlJFQ1RfTkFNRSkge1xuICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgdmFyIHAgPSBTdHJpbmcoUi5zb3VyY2UpO1xuICAgIHZhciByZiA9IFIuZmxhZ3M7XG4gICAgdmFyIGYgPSBTdHJpbmcocmYgPT09IHVuZGVmaW5lZCAmJiBSIGluc3RhbmNlb2YgUmVnRXhwICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpID8gZmxhZ3MuY2FsbChSKSA6IHJmKTtcbiAgICByZXR1cm4gJy8nICsgcCArICcvJyArIGY7XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbicpO1xudmFyIGNvbGxlY3Rpb25TdHJvbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gYFNldGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXNldC1vYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IGNvbGxlY3Rpb24oJ1NldCcsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7IHJldHVybiBpbml0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwgY29sbGVjdGlvblN0cm9uZyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLUBAaXRlcmF0b3JcbmRlZmluZUl0ZXJhdG9yKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBTVFJJTkdfSVRFUkFUT1IsXG4gICAgc3RyaW5nOiBTdHJpbmcoaXRlcmF0ZWQpLFxuICAgIGluZGV4OiAwXG4gIH0pO1xuLy8gYCVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uIG5leHQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gY2hhckF0KHN0cmluZywgaW5kZXgpO1xuICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiLy8gYFN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25gIGdldHRlclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvblxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG5cbnZhciBOYXRpdmVTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xuXG5pZiAoREVTQ1JJUFRPUlMgJiYgdHlwZW9mIE5hdGl2ZVN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICghKCdkZXNjcmlwdGlvbicgaW4gTmF0aXZlU3ltYm9sLnByb3RvdHlwZSkgfHxcbiAgLy8gU2FmYXJpIDEyIGJ1Z1xuICBOYXRpdmVTeW1ib2woKS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkXG4pKSB7XG4gIHZhciBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUgPSB7fTtcbiAgLy8gd3JhcCBTeW1ib2wgY29uc3RydWN0b3IgZm9yIGNvcnJlY3Qgd29yayB3aXRoIHVuZGVmaW5lZCBkZXNjcmlwdGlvblxuICB2YXIgU3ltYm9sV3JhcHBlciA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciByZXN1bHQgPSB0aGlzIGluc3RhbmNlb2YgU3ltYm9sV3JhcHBlclxuICAgICAgPyBuZXcgTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKVxuICAgICAgLy8gaW4gRWRnZSAxMywgU3RyaW5nKFN5bWJvbCh1bmRlZmluZWQpKSA9PT0gJ1N5bWJvbCh1bmRlZmluZWQpJ1xuICAgICAgOiBkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkID8gTmF0aXZlU3ltYm9sKCkgOiBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pO1xuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZVtyZXN1bHRdID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKFN5bWJvbFdyYXBwZXIsIE5hdGl2ZVN5bWJvbCk7XG4gIHZhciBzeW1ib2xQcm90b3R5cGUgPSBTeW1ib2xXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZVN5bWJvbC5wcm90b3R5cGU7XG4gIHN5bWJvbFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bWJvbFdyYXBwZXI7XG5cbiAgdmFyIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgbmF0aXZlID0gU3RyaW5nKE5hdGl2ZVN5bWJvbCgndGVzdCcpKSA9PSAnU3ltYm9sKHRlc3QpJztcbiAgdmFyIHJlZ2V4cCA9IC9eU3ltYm9sXFwoKC4qKVxcKVteKV0rJC87XG4gIGRlZmluZVByb3BlcnR5KHN5bWJvbFByb3RvdHlwZSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgdmFyIHN5bWJvbCA9IGlzT2JqZWN0KHRoaXMpID8gdGhpcy52YWx1ZU9mKCkgOiB0aGlzO1xuICAgICAgdmFyIHN0cmluZyA9IHN5bWJvbFRvU3RyaW5nLmNhbGwoc3ltYm9sKTtcbiAgICAgIGlmIChoYXMoRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlLCBzeW1ib2wpKSByZXR1cm4gJyc7XG4gICAgICB2YXIgZGVzYyA9IG5hdGl2ZSA/IHN0cmluZy5zbGljZSg3LCAtMSkgOiBzdHJpbmcucmVwbGFjZShyZWdleHAsICckMScpO1xuICAgICAgcmV0dXJuIGRlc2MgPT09ICcnID8gdW5kZWZpbmVkIDogZGVzYztcbiAgICB9XG4gIH0pO1xuXG4gICQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgU3ltYm9sOiBTeW1ib2xXcmFwcGVyXG4gIH0pO1xufVxuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5pdGVyYXRvcmAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5pdGVyYXRvclxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBuYXRpdmVPYmplY3RDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLWV4dGVybmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkJyk7XG52YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG5cbnZhciBISURERU4gPSBzaGFyZWRLZXkoJ2hpZGRlbicpO1xudmFyIFNZTUJPTCA9ICdTeW1ib2wnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNZTUJPTCk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJHN0cmluZ2lmeSA9IGdldEJ1aWx0SW4oJ0pTT04nLCAnc3RyaW5naWZ5Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZjtcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmY7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvdHlwZVN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzdHJpbmctdG8tc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgU3ltYm9sVG9TdHJpbmdSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXRvLXN0cmluZy1yZWdpc3RyeScpO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgVVNFX1NFVFRFUiA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RDcmVhdGUobmF0aXZlRGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgdmFyIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0UHJvdG90eXBlLCBQKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpIGRlbGV0ZSBPYmplY3RQcm90b3R5cGVbUF07XG4gIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciAmJiBPICE9PSBPYmplY3RQcm90b3R5cGUpIHtcbiAgICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90b3R5cGUsIFAsIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpO1xuICB9XG59IDogbmF0aXZlRGVmaW5lUHJvcGVydHk7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZywgZGVzY3JpcHRpb24pIHtcbiAgdmFyIHN5bWJvbCA9IEFsbFN5bWJvbHNbdGFnXSA9IG5hdGl2ZU9iamVjdENyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzZXRJbnRlcm5hbFN0YXRlKHN5bWJvbCwge1xuICAgIHR5cGU6IFNZTUJPTCxcbiAgICB0YWc6IHRhZyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgfSk7XG4gIGlmICghREVTQ1JJUFRPUlMpIHN5bWJvbC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICByZXR1cm4gc3ltYm9sO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChpdCkgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgaWYgKE8gPT09IE9iamVjdFByb3RvdHlwZSkgJGRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFAsIEF0dHJpYnV0ZXMpO1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFBdHRyaWJ1dGVzLmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKE8sIEhJRERFTikpIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIEhJRERFTiwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHt9KSk7XG4gICAgICBPW0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoTywgSElEREVOKSAmJiBPW0hJRERFTl1ba2V5XSkgT1tISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSBuYXRpdmVPYmplY3RDcmVhdGUoQXR0cmlidXRlcywgeyBlbnVtZXJhYmxlOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2NyaXB0b3IoTywga2V5LCBBdHRyaWJ1dGVzKTtcbiAgfSByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywga2V5LCBBdHRyaWJ1dGVzKTtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhwcm9wZXJ0aWVzKS5jb25jYXQoJGdldE93blByb3BlcnR5U3ltYm9scyhwcm9wZXJ0aWVzKSk7XG4gICRmb3JFYWNoKGtleXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIURFU0NSSVBUT1JTIHx8ICRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHByb3BlcnRpZXMsIGtleSkpICRkZWZpbmVQcm9wZXJ0eShPLCBrZXksIHByb3BlcnRpZXNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gTztcbn07XG5cbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IG5hdGl2ZU9iamVjdENyZWF0ZShPKSA6ICRkZWZpbmVQcm9wZXJ0aWVzKG5hdGl2ZU9iamVjdENyZWF0ZShPKSwgUHJvcGVydGllcyk7XG59O1xuXG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgUCA9IHRvUHJpbWl0aXZlKFYsIHRydWUpO1xuICB2YXIgZW51bWVyYWJsZSA9IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGhpcywgUCk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIFApICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGVudW1lcmFibGUgfHwgIWhhcyh0aGlzLCBQKSB8fCAhaGFzKEFsbFN5bWJvbHMsIFApIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtQXSA/IGVudW1lcmFibGUgOiB0cnVlO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICB2YXIgaXQgPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBkZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xuICBpZiAoZGVzY3JpcHRvciAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSB7XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZGVzY3JpcHRvcjtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChPKSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgJGZvckVhY2gobmFtZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoaGlkZGVuS2V5cywga2V5KSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhPKSB7XG4gIHZhciBJU19PQkpFQ1RfUFJPVE9UWVBFID0gTyA9PT0gT2JqZWN0UHJvdG90eXBlO1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKElTX09CSkVDVF9QUk9UT1RZUEUgPyBPYmplY3RQcm90b3R5cGVTeW1ib2xzIDogdG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSAmJiAoIUlTX09CSkVDVF9QUk9UT1RZUEUgfHwgaGFzKE9iamVjdFByb3RvdHlwZSwga2V5KSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIGBTeW1ib2xgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wtY29uc3RydWN0b3JcbmlmICghTkFUSVZFX1NZTUJPTCkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSAhYXJndW1lbnRzLmxlbmd0aCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciB0YWcgPSB1aWQoZGVzY3JpcHRpb24pO1xuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90b3R5cGUpIHNldHRlci5jYWxsKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzY3JpcHRvcih0aGlzLCB0YWcsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIFVTRV9TRVRURVIpIHNldFN5bWJvbERlc2NyaXB0b3IoT2JqZWN0UHJvdG90eXBlLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6IHNldHRlciB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcsIGRlc2NyaXB0aW9uKTtcbiAgfTtcblxuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnRhZztcbiAgfSk7XG5cbiAgcmVkZWZpbmUoJFN5bWJvbCwgJ3dpdGhvdXRTZXR0ZXInLCBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gd3JhcCh1aWQoZGVzY3JpcHRpb24pLCBkZXNjcmlwdGlvbik7XG4gIH0pO1xuXG4gIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIGRlZmluZVByb3BlcnR5TW9kdWxlLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mID0gZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsLmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2VsbEtub3duU3ltYm9sKG5hbWUpLCBuYW1lKTtcbiAgfTtcblxuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1TeW1ib2wtZGVzY3JpcHRpb25cbiAgICBuYXRpdmVEZWZpbmVQcm9wZXJ0eSgkU3ltYm9sW1BST1RPVFlQRV0sICdkZXNjcmlwdGlvbicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghSVNfUFVSRSkge1xuICAgICAgcmVkZWZpbmUoT2JqZWN0UHJvdG90eXBlLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHsgdW5zYWZlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxufVxuXG4kKHsgZ2xvYmFsOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MLCBzaGFtOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIFN5bWJvbDogJFN5bWJvbFxufSk7XG5cbiRmb3JFYWNoKG9iamVjdEtleXMoV2VsbEtub3duU3ltYm9sc1N0b3JlKSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVmaW5lV2VsbEtub3duU3ltYm9sKG5hbWUpO1xufSk7XG5cbiQoeyB0YXJnZXQ6IFNZTUJPTCwgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIC8vIGBTeW1ib2wuZm9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLmZvclxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoa2V5KTtcbiAgICBpZiAoaGFzKFN0cmluZ1RvU3ltYm9sUmVnaXN0cnksIHN0cmluZykpIHJldHVybiBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5W3N0cmluZ107XG4gICAgdmFyIHN5bWJvbCA9ICRTeW1ib2woc3RyaW5nKTtcbiAgICBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5W3N0cmluZ10gPSBzeW1ib2w7XG4gICAgU3ltYm9sVG9TdHJpbmdSZWdpc3RyeVtzeW1ib2xdID0gc3RyaW5nO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH0sXG4gIC8vIGBTeW1ib2wua2V5Rm9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLmtleWZvclxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCcpO1xuICAgIGlmIChoYXMoU3ltYm9sVG9TdHJpbmdSZWdpc3RyeSwgc3ltKSkgcmV0dXJuIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltXTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgVVNFX1NFVFRFUiA9IGZhbHNlOyB9XG59KTtcblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIC8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG59KTtcblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfSwge1xuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlzeW1ib2xzXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IGZhaWxzKGZ1bmN0aW9uICgpIHsgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYoMSk7IH0pIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIGBKU09OLnN0cmluZ2lmeWAgbWV0aG9kIGJlaGF2aW9yIHdpdGggc3ltYm9sc1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtanNvbi5zdHJpbmdpZnlcbmlmICgkc3RyaW5naWZ5KSB7XG4gIHZhciBGT1JDRURfSlNPTl9TVFJJTkdJRlkgPSAhTkFUSVZFX1NZTUJPTCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN5bWJvbCA9ICRTeW1ib2woKTtcbiAgICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAgIHJldHVybiAkc3RyaW5naWZ5KFtzeW1ib2xdKSAhPSAnW251bGxdJ1xuICAgICAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gICAgICB8fCAkc3RyaW5naWZ5KHsgYTogc3ltYm9sIH0pICE9ICd7fSdcbiAgICAgIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gICAgICB8fCAkc3RyaW5naWZ5KE9iamVjdChzeW1ib2wpKSAhPSAne30nO1xuICB9KTtcblxuICAkKHsgdGFyZ2V0OiAnSlNPTicsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VEX0pTT05fU1RSSU5HSUZZIH0sIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgICB2YXIgaW5kZXggPSAxO1xuICAgICAgdmFyICRyZXBsYWNlcjtcbiAgICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaW5kZXgpIGFyZ3MucHVzaChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgICAgJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICB9O1xuICAgICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgICAgcmV0dXJuICRzdHJpbmdpZnkuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvcHJpbWl0aXZlXG5pZiAoISRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xufVxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11gIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsIFNZTUJPTCk7XG5cbmhpZGRlbktleXNbSElEREVOXSA9IHRydWU7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgQXJyYXlJdGVyYXRvck1ldGhvZHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEFycmF5SXRlcmF0b3JNZXRob2RzLnZhbHVlcztcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdICE9PSBBcnJheVZhbHVlcykgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSA9IEFycmF5VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoIUNvbGxlY3Rpb25Qcm90b3R5cGVbVE9fU1RSSU5HX1RBR10pIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICAgIH1cbiAgICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIGZvciAodmFyIE1FVEhPRF9OQU1FIGluIEFycmF5SXRlcmF0b3JNZXRob2RzKSB7XG4gICAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSAhPT0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKSB0cnkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgTUVUSE9EX05BTUUsIEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSA9IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IExpYnJhcnlSdW5uZXIgfSBmcm9tIFwiLi9saWJyYXJ5LXJ1bm5lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJ1bm5lcnMgPSBbTGlicmFyeVJ1bm5lcl07XHJcbiIsImNvbnN0IFdPUktFUl9MT0dfU1RZTEUgPSAnYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0MzMzsgcGFkZGluZzogNHB4OyBib3JkZXItcmFkaXVzOiAzcHg7IGNvbG9yOiBibGFjazsnO1xyXG5jb25zdCBCT09LX0xPR19TVFlMRSA9ICdmb250LXdlaWdodDogYm9sZDsnO1xyXG5jb25zdCBTRUNPTkRTX0xPR19TVFlMRSA9IEJPT0tfTE9HX1NUWUxFO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpYnJhcnlSdW5uZXIge1xyXG4gICAgcHJpdmF0ZSBib29rczogc3RyaW5nW11cclxuICAgIGNvbnN0cnVjdG9yIChib29rczogc3RyaW5nW10gPSBbXSkge1xyXG4gICAgICAgIHRoaXMuYm9va3MgPSBib29rcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQm9vayhib29rOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJvb2tzLnB1c2goYm9vayk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlY1dvcmtlcjolYyBCb29rICVjXCIke2Jvb2t9XCIlYyBhZGRlZCB0byBsaWJyYXJ5YCxcclxuICAgICAgICAgICAgV09SS0VSX0xPR19TVFlMRSwgJycsIEJPT0tfTE9HX1NUWUxFLCAnJyxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja0Jvb2soYm9vazogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaXNFeGlzdCA9IHRoaXMuYm9va3MuaW5kZXhPZihib29rKSAhPT0gLTE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlY1dvcmtlcjolYyBCb29rICVjXCIke2Jvb2t9XCIlYyBpcyBleGlzdCBpbiB0aGUgbGlicmFyeTogYCxcclxuICAgICAgICAgICAgV09SS0VSX0xPR19TVFlMRSwgJycsIEJPT0tfTE9HX1NUWUxFLCAnJywgaXNFeGlzdCxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBpc0V4aXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZXNlcnZlQm9vayhib29rOiBzdHJpbmcsIHNlY29uZHM6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlY1dvcmtlcjolYyBCb29rICVjXCIke2Jvb2t9XCIlYyByZXNlcnZlZCBmb3IgJWMke3NlY29uZHN9JWMgc2Vjb25kc2AsXHJcbiAgICAgICAgICAgIFdPUktFUl9MT0dfU1RZTEUsICcnLCBCT09LX0xPR19TVFlMRSwgJycsIFNFQ09ORFNfTE9HX1NUWUxFLCAnJyxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmJvb2tzID0gdGhpcy5ib29rcy5maWx0ZXIobGlicmFyeUJvb2sgPT4gbGlicmFyeUJvb2sgIT09IGJvb2spO1xyXG5cclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCBzZWNvbmRzICogMTAwMCkpO1xyXG4gICAgICAgIHRoaXMuYm9va3MucHVzaChib29rKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlY1dvcmtlcjolYyBSZXNlcnZhdGlvbiBmb3IgYm9vayAlY1wiJHtib29rfVwiJWMgY29tcGxldGVkIGFmdGVyICVjJHtzZWNvbmRzfSVjIHNlY29uZHNgLFxyXG4gICAgICAgICAgICBXT1JLRVJfTE9HX1NUWUxFLCAnJywgQk9PS19MT0dfU1RZTEUsICcnLCBTRUNPTkRTX0xPR19TVFlMRSwgJycsXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gYm9vaztcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9