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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParallaxTest = undefined;

var _ParallaxTest2 = __webpack_require__(7);

var _ParallaxTest3 = _interopRequireDefault(_ParallaxTest2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ParallaxTest = _ParallaxTest3.default;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactScrollParallax = __webpack_require__(10);

var _ParallaxTest = __webpack_require__(9);

var _ParallaxTest2 = _interopRequireDefault(_ParallaxTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INC_AMOUNT = 10;
var START_NUM_ELEMENTS = 10;

var ParallaxTest = function (_React$Component) {
    _inherits(ParallaxTest, _React$Component);

    function ParallaxTest() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ParallaxTest);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ParallaxTest.__proto__ || Object.getPrototypeOf(ParallaxTest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            elements: new Array(START_NUM_ELEMENTS).fill(null).map(function (x, i) {
                return i;
            }),
            offsetY: INC_AMOUNT,
            slowerScrollRate: false,
            unitPercent: false,
            disabled: false
        }, _this.handleAdd = function () {
            var elements = [].concat(_toConsumableArray(_this.state.elements), [_this.state.elements.length]);
            _this.setState({
                elements
            });
        }, _this.handleRemove = function () {
            var elements = _this.state.elements.slice(0, _this.state.elements.length - 1);
            _this.setState({
                elements
            });
        }, _this.increaseOffsetY = function () {
            var offsetY = _this.state.offsetY + INC_AMOUNT;
            _this.setState({
                offsetY
            });
        }, _this.decreaseOffsetY = function () {
            var offsetY = _this.state.offsetY - INC_AMOUNT < 0 ? 0 : _this.state.offsetY - INC_AMOUNT;
            _this.setState({
                offsetY
            });
        }, _this.toggleSpeed = function () {
            var slowerScrollRate = !_this.state.slowerScrollRate;
            _this.setState({
                slowerScrollRate
            });
        }, _this.toggleValue = function () {
            var unitPercent = !_this.state.unitPercent;
            _this.setState({
                unitPercent
            });
        }, _this.toggleDisabled = function () {
            var disabled = !_this.state.disabled;
            _this.setState({
                disabled
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ParallaxTest, [{
        key: 'mapToParallax',
        value: function mapToParallax() {
            var _this2 = this;

            var offsetY = this.state.offsetY;
            var slowerScrollRate = this.state.slowerScrollRate;

            return this.state.elements.map(function (number, i) {
                var unit = _this2.state.unitPercent ? '%' : 'px';
                var offsetYMin = offsetY * -1 * i + unit;
                var offsetYMax = offsetY * i + unit;

                return _react2.default.createElement(
                    _reactScrollParallax.Parallax,
                    {
                        key: i,
                        tag: 'span',
                        disabled: _this2.state.disabled,
                        offsetYMax: offsetYMax,
                        offsetYMin: offsetYMin,
                        offsetXMax: 0,
                        offsetXMin: 0,
                        className: _ParallaxTest2.default.item,
                        slowerScrollRate: slowerScrollRate
                    },
                    number
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _ParallaxTest2.default.parallaxTest },
                _react2.default.createElement(
                    'h1',
                    { className: _ParallaxTest2.default.h1 },
                    this.mapToParallax()
                ),
                _react2.default.createElement(
                    'div',
                    { className: _ParallaxTest2.default.buttons },
                    _react2.default.createElement(
                        'div',
                        { className: _ParallaxTest2.default.currentState },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Parallax Elements:',
                            _react2.default.createElement(
                                'span',
                                { className: 'value' },
                                this.state.elements.length
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.handleAdd },
                            'Add'
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.handleRemove },
                            'Remove'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _ParallaxTest2.default.currentState },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Y Offsets:',
                            _react2.default.createElement(
                                'span',
                                { className: 'value' },
                                this.state.offsetY,
                                this.state.unitPercent ? '%' : 'px'
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.increaseOffsetY },
                            'Increase'
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.decreaseOffsetY },
                            'Decrease'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _ParallaxTest2.default.currentState },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Speed:',
                            _react2.default.createElement(
                                'span',
                                { className: 'value' },
                                this.state.slowerScrollRate ? 'Slower' : 'Faster'
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.toggleSpeed },
                            this.state.slowerScrollRate ? 'Faster' : 'Slower'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _ParallaxTest2.default.currentState },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Unit:',
                            _react2.default.createElement(
                                'span',
                                { className: 'value' },
                                this.state.unitPercent ? 'Percent' : 'Pixels'
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.toggleValue },
                            this.state.unitPercent ? 'Pixels' : 'Percent'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _ParallaxTest2.default.currentState },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Disabled:',
                            _react2.default.createElement(
                                'span',
                                { className: 'value' },
                                this.state.disabled ? 'True' : 'False'
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.toggleDisabled },
                            this.state.disabled ? 'Enable' : 'Disable'
                        )
                    )
                )
            );
        }
    }]);

    return ParallaxTest;
}(_react2.default.Component);

exports.default = ParallaxTest;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(5);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(4);

var _fs2 = _interopRequireDefault(_fs);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

var _components = __webpack_require__(1);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/static', _express2.default.static(_path2.default.resolve(__dirname, './dist')));

app.get('*', function (req, res) {
    var html = _fs2.default.readFileSync(_path2.default.resolve(__dirname, './index.html')).toString();
    var markup = _server2.default.renderToString(_react2.default.createElement(_components.ParallaxTest, null));

    res.send(html.replace('$react', markup));
});

app.listen(3000, function () {
    console.log('Listening on: http://localhost:3000');
});
/* WEBPACK VAR INJECTION */}.call(exports, "examples/parallax-test"))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
	"parallaxTest": "ParallaxTest_parallaxTest_3YS",
	"h1": "ParallaxTest_h1_2tV",
	"item": "ParallaxTest_item_eYq",
	"buttons": "ParallaxTest_buttons_iY7",
	"currentState": "ParallaxTest_currentState_2Yr"
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ })
/******/ ]);