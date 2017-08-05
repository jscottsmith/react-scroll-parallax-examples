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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
exports.TriangleGrid = exports.Overlap = exports.ShapeField = exports.Svg = exports.ParallaxExample = exports.Marquee = exports.IntroCopy = exports.Intro = undefined;

var _Intro2 = __webpack_require__(8);

var _Intro3 = _interopRequireDefault(_Intro2);

var _IntroCopy2 = __webpack_require__(9);

var _IntroCopy3 = _interopRequireDefault(_IntroCopy2);

var _Marquee2 = __webpack_require__(10);

var _Marquee3 = _interopRequireDefault(_Marquee2);

var _ParallaxExample2 = __webpack_require__(12);

var _ParallaxExample3 = _interopRequireDefault(_ParallaxExample2);

var _Svg2 = __webpack_require__(14);

var _Svg3 = _interopRequireDefault(_Svg2);

var _ShapeField2 = __webpack_require__(13);

var _ShapeField3 = _interopRequireDefault(_ShapeField2);

var _Overlap2 = __webpack_require__(11);

var _Overlap3 = _interopRequireDefault(_Overlap2);

var _TriangleGrid2 = __webpack_require__(15);

var _TriangleGrid3 = _interopRequireDefault(_TriangleGrid2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Intro = _Intro3.default;
exports.IntroCopy = _IntroCopy3.default;
exports.Marquee = _Marquee3.default;
exports.ParallaxExample = _ParallaxExample3.default;
exports.Svg = _Svg3.default;
exports.ShapeField = _ShapeField3.default;
exports.Overlap = _Overlap3.default;
exports.TriangleGrid = _TriangleGrid3.default;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Intro = __webpack_require__(17);

var _Intro2 = _interopRequireDefault(_Intro);

var _components = __webpack_require__(1);

var _reactScrollParallax = __webpack_require__(2);

var _ringOfDots = __webpack_require__(26);

var _ringOfDots2 = _interopRequireDefault(_ringOfDots);

var _hemispheres = __webpack_require__(25);

var _hemispheres2 = _interopRequireDefault(_hemispheres);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function Intro() {
    return _react2.default.createElement(
        'div',
        { className: _Intro2.default.root },
        _react2.default.createElement(
            'div',
            { className: _Intro2.default.container },
            _react2.default.createElement(
                _reactScrollParallax.Parallax,
                {
                    offsetYMin: -100,
                    offsetYMax: 100,
                    className: _Intro2.default.ring
                },
                _react2.default.createElement(_components.Svg, { svg: _ringOfDots2.default })
            ),
            _react2.default.createElement(
                _reactScrollParallax.Parallax,
                {
                    offsetYMin: -50,
                    offsetYMax: 50,
                    className: _Intro2.default.circle
                },
                _react2.default.createElement('div', { className: _Intro2.default.circleInner })
            ),
            _react2.default.createElement(_components.Svg, {
                className: _Intro2.default.hemispheres,
                svg: _hemispheres2.default
            })
        ),
        _react2.default.createElement(
            'p',
            { className: _Intro2.default.scroll },
            'Scroll'
        )
    );
};

exports.default = Intro;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _IntroCopy = __webpack_require__(18);

var _IntroCopy2 = _interopRequireDefault(_IntroCopy);

var _reactScrollParallax = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function modulo(a, b) {
//     return ((a % b) + b) % b;
// }
// const modulo = copy.length % 2;

var copy = 'Parallax'.split('');

var IntroCopy = function IntroCopy() {
    return _react2.default.createElement(
        'div',
        { className: _IntroCopy2.default.root },
        _react2.default.createElement('div', { className: _IntroCopy2.default.barTop }),
        _react2.default.createElement(
            'h1',
            { className: _IntroCopy2.default.copy },
            copy.map(function (letter, i) {
                return _react2.default.createElement(
                    _reactScrollParallax.Parallax,
                    {
                        key: `copy-${i}`,
                        offsetXMax: 100 * (i - 3),
                        className: _IntroCopy2.default.letter
                    },
                    letter
                );
            })
        ),
        _react2.default.createElement('div', { className: _IntroCopy2.default.barBottom })
    );
};

exports.default = IntroCopy;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Marquee = __webpack_require__(19);

var _Marquee2 = _interopRequireDefault(_Marquee);

var _components = __webpack_require__(1);

var _reactScrollParallax = __webpack_require__(2);

var _boxBg = __webpack_require__(27);

var _boxBg2 = _interopRequireDefault(_boxBg);

var _boxOutline = __webpack_require__(28);

var _boxOutline2 = _interopRequireDefault(_boxOutline);

var _divider = __webpack_require__(46);

var _divider2 = _interopRequireDefault(_divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Marquee = function Marquee() {
    return _react2.default.createElement(
        'div',
        { className: _Marquee2.default.root },
        _react2.default.createElement(_components.Svg, { svg: _divider2.default, className: _Marquee2.default.divider }),
        _react2.default.createElement(
            'div',
            { className: _Marquee2.default.container },
            _react2.default.createElement(_components.Svg, {
                svg: _boxBg2.default,
                className: _Marquee2.default.boxBg
            }),
            _react2.default.createElement(
                _reactScrollParallax.Parallax,
                {
                    className: _Marquee2.default.text,
                    offsetYMax: 70,
                    offsetYMin: -70,
                    offsetXMax: -30,
                    offsetXMin: 30
                },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Horizontal'
                )
            ),
            _react2.default.createElement(
                _reactScrollParallax.Parallax,
                {
                    className: _Marquee2.default.boxOutline,
                    offsetYMax: 35,
                    offsetYMin: -35
                },
                _react2.default.createElement(_components.Svg, { svg: _boxOutline2.default })
            )
        )
    );
};

exports.default = Marquee;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Overlap = __webpack_require__(20);

var _Overlap2 = _interopRequireDefault(_Overlap);

var _components = __webpack_require__(1);

var _reactScrollParallax = __webpack_require__(2);

var _circle = __webpack_require__(30);

var _circle2 = _interopRequireDefault(_circle);

var _circleRings = __webpack_require__(29);

var _circleRings2 = _interopRequireDefault(_circleRings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlap = function Overlap() {
    return _react2.default.createElement(
        'div',
        { className: _Overlap2.default.root },
        _react2.default.createElement(
            'div',
            { className: _Overlap2.default.container },
            _react2.default.createElement(
                _reactScrollParallax.Parallax,
                {
                    offsetYMax: 150,
                    offsetYMin: -50,
                    offsetXMax: -40,
                    offsetXMin: 20,
                    className: _Overlap2.default.circle
                },
                _react2.default.createElement(_components.Svg, {
                    svg: _circle2.default
                })
            ),
            _react2.default.createElement(
                _reactScrollParallax.Parallax,
                {
                    offsetYMax: 150,
                    offsetYMin: -50,
                    offsetXMax: 40,
                    offsetXMin: -20,
                    className: _Overlap2.default.circleRings
                },
                _react2.default.createElement(_components.Svg, {
                    svg: _circleRings2.default
                })
            )
        )
    );
};

exports.default = Overlap;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(1);

var _ParallaExample = __webpack_require__(21);

var _ParallaExample2 = _interopRequireDefault(_ParallaExample);

var _noisePattern = __webpack_require__(48);

var _noisePattern2 = _interopRequireDefault(_noisePattern);

var _dotPattern = __webpack_require__(47);

var _dotPattern2 = _interopRequireDefault(_dotPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParallaxExample = function (_Component) {
    _inherits(ParallaxExample, _Component);

    function ParallaxExample() {
        _classCallCheck(this, ParallaxExample);

        return _possibleConstructorReturn(this, (ParallaxExample.__proto__ || Object.getPrototypeOf(ParallaxExample)).apply(this, arguments));
    }

    _createClass(ParallaxExample, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _ParallaExample2.default.root },
                _react2.default.createElement(_components.Intro, null),
                _react2.default.createElement(_components.IntroCopy, null),
                _react2.default.createElement(_components.ShapeField, null),
                _react2.default.createElement(_components.Marquee, null),
                _react2.default.createElement(_components.Overlap, null),
                _react2.default.createElement(_components.TriangleGrid, null),
                _react2.default.createElement(
                    'div',
                    { className: 'visually-hidden' },
                    _react2.default.createElement(_components.Svg, { svg: _noisePattern2.default }),
                    _react2.default.createElement(_components.Svg, { svg: _dotPattern2.default })
                )
            );
        }
    }]);

    return ParallaxExample;
}(_react.Component);

exports.default = ParallaxExample;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactScrollParallax = __webpack_require__(2);

var _components = __webpack_require__(1);

var _ShapeField = __webpack_require__(22);

var _ShapeField2 = _interopRequireDefault(_ShapeField);

var _cluster01HemiLeft = __webpack_require__(31);

var _cluster01HemiLeft2 = _interopRequireDefault(_cluster01HemiLeft);

var _cluster01HemiRight = __webpack_require__(32);

var _cluster01HemiRight2 = _interopRequireDefault(_cluster01HemiRight);

var _cluster01Rect = __webpack_require__(33);

var _cluster01Rect2 = _interopRequireDefault(_cluster01Rect);

var _cluster02Hemi = __webpack_require__(34);

var _cluster02Hemi2 = _interopRequireDefault(_cluster02Hemi);

var _cluster02TriangleBig = __webpack_require__(35);

var _cluster02TriangleBig2 = _interopRequireDefault(_cluster02TriangleBig);

var _cluster02TriangleSmall = __webpack_require__(36);

var _cluster02TriangleSmall2 = _interopRequireDefault(_cluster02TriangleSmall);

var _cluster03TriangleTop = __webpack_require__(39);

var _cluster03TriangleTop2 = _interopRequireDefault(_cluster03TriangleTop);

var _cluster03TriangleBottom = __webpack_require__(38);

var _cluster03TriangleBottom2 = _interopRequireDefault(_cluster03TriangleBottom);

var _cluster03TriangleBig = __webpack_require__(37);

var _cluster03TriangleBig2 = _interopRequireDefault(_cluster03TriangleBig);

var _cluster04Triangle = __webpack_require__(42);

var _cluster04Triangle2 = _interopRequireDefault(_cluster04Triangle);

var _cluster04Square = __webpack_require__(41);

var _cluster04Square2 = _interopRequireDefault(_cluster04Square);

var _cluster04HemiRight = __webpack_require__(40);

var _cluster04HemiRight2 = _interopRequireDefault(_cluster04HemiRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShapeField = function (_Component) {
    _inherits(ShapeField, _Component);

    function ShapeField() {
        _classCallCheck(this, ShapeField);

        return _possibleConstructorReturn(this, (ShapeField.__proto__ || Object.getPrototypeOf(ShapeField)).apply(this, arguments));
    }

    _createClass(ShapeField, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _ShapeField2.default.root },
                _react2.default.createElement(
                    'div',
                    { className: _ShapeField2.default.shapeCluster01 },
                    _react2.default.createElement(
                        _reactScrollParallax.Parallax,
                        {
                            offsetYMax: 100,
                            offsetYMin: -100,
                            className: 'hemi-left',
                            slowerScrollRate: true
                        },
                        _react2.default.createElement(_components.Svg, { svg: _cluster01HemiLeft2.default })
                    ),
                    _react2.default.createElement(_components.Svg, { svg: _cluster01Rect2.default }),
                    _react2.default.createElement(
                        _reactScrollParallax.Parallax,
                        {
                            offsetYMax: 100,
                            offsetYMin: -100,
                            className: 'hemi-right'
                        },
                        _react2.default.createElement(_components.Svg, { svg: _cluster01HemiRight2.default })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _ShapeField2.default.shapeCluster02 },
                    _react2.default.createElement(_components.Svg, {
                        svg: _cluster02Hemi2.default,
                        className: 'hemi'
                    }),
                    _react2.default.createElement(
                        _reactScrollParallax.Parallax,
                        {
                            offsetYMax: 30,
                            offsetYMin: -30,
                            className: 'triangle-big'
                        },
                        _react2.default.createElement(_components.Svg, { svg: _cluster02TriangleBig2.default })
                    ),
                    _react2.default.createElement(
                        _reactScrollParallax.Parallax,
                        {
                            offsetYMax: 30,
                            offsetYMin: -30,
                            className: 'triangle-small',
                            slowerScrollRate: true
                        },
                        _react2.default.createElement(_components.Svg, { svg: _cluster02TriangleSmall2.default })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _ShapeField2.default.shapeCluster03 },
                    _react2.default.createElement(
                        _reactScrollParallax.Parallax,
                        {
                            offsetYMax: 60,
                            offsetYMin: -20,
                            className: 'triangle-top',
                            slowerScrollRate: true
                        },
                        _react2.default.createElement(_components.Svg, { svg: _cluster03TriangleTop2.default })
                    ),
                    _react2.default.createElement(_components.Svg, {
                        svg: _cluster03TriangleBottom2.default,
                        className: 'triangle-top'
                    }),
                    _react2.default.createElement(
                        _reactScrollParallax.Parallax,
                        {
                            offsetYMax: 60,
                            offsetYMin: -60,
                            className: 'triangle-big'
                        },
                        _react2.default.createElement(_components.Svg, { svg: _cluster03TriangleBig2.default })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _ShapeField2.default.shapeCluster04 },
                    _react2.default.createElement(_components.Svg, {
                        svg: _cluster04Square2.default,
                        className: 'square'
                    }),
                    _react2.default.createElement(
                        _reactScrollParallax.Parallax,
                        {
                            offsetYMax: 60,
                            offsetYMin: -60,
                            className: 'triangle'
                        },
                        _react2.default.createElement(_components.Svg, { svg: _cluster04Triangle2.default })
                    ),
                    _react2.default.createElement(
                        _reactScrollParallax.Parallax,
                        {
                            offsetYMax: 30,
                            offsetYMin: -30,
                            className: 'hemi-right'
                        },
                        _react2.default.createElement(_components.Svg, { svg: _cluster04HemiRight2.default })
                    )
                )
            );
        }
    }]);

    return ShapeField;
}(_react.Component);

exports.default = ShapeField;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Svg;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactProptypes = __webpack_require__(49);

var _reactProptypes2 = _interopRequireDefault(_reactProptypes);

var _Svg = __webpack_require__(23);

var _Svg2 = _interopRequireDefault(_Svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Svg(props) {
    var Element = props.el;
    var className = `svg-container ${_Svg2.default.root}` + (props.className ? ` ${props.className}` : '');

    return _react2.default.createElement(Element, {
        style: props.style,
        className: className,
        dangerouslySetInnerHTML: { __html: props.svg }
    });
}

Svg.propTypes = {
    className: _reactProptypes2.default.string,
    el: _reactProptypes2.default.string.isRequired,
    style: _reactProptypes2.default.object,
    svg: _reactProptypes2.default.string.isRequired
};

Svg.defaultProps = {
    el: 'span'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TriangleGrid = __webpack_require__(24);

var _TriangleGrid2 = _interopRequireDefault(_TriangleGrid);

var _components = __webpack_require__(1);

var _reactScrollParallax = __webpack_require__(2);

var _gridPurple = __webpack_require__(43);

var _gridPurple2 = _interopRequireDefault(_gridPurple);

var _gridWhite = __webpack_require__(44);

var _gridWhite2 = _interopRequireDefault(_gridWhite);

var _angleDarkTop = __webpack_require__(45);

var _angleDarkTop2 = _interopRequireDefault(_angleDarkTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TriangleGrid = function TriangleGrid() {
    return _react2.default.createElement(
        'div',
        { className: _TriangleGrid2.default.root },
        _react2.default.createElement(_components.Svg, {
            svg: _angleDarkTop2.default,
            className: _TriangleGrid2.default.angleTop
        }),
        _react2.default.createElement(
            'article',
            { className: _TriangleGrid2.default.copy },
            _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                    'code',
                    null,
                    'npm i react-scroll-parallax'
                )
            ),
            _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                    'a',
                    { className: 'btn', href: 'https://github.com/jscottsmith/react-scroll-parallax' },
                    'View on GitHub'
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: _TriangleGrid2.default.container },
            _react2.default.createElement(
                _reactScrollParallax.Parallax,
                {
                    offsetYMax: 25,
                    offsetYMin: -25
                },
                _react2.default.createElement(_components.Svg, {
                    svg: _gridPurple2.default,
                    className: _TriangleGrid2.default.trianglesPurple
                })
            ),
            _react2.default.createElement(
                _reactScrollParallax.Parallax,
                {
                    offsetYMax: 50,
                    offsetYMin: -50,
                    offsetXMax: 13,
                    offsetXMin: -13
                },
                _react2.default.createElement(_components.Svg, {
                    svg: _gridWhite2.default,
                    className: _TriangleGrid2.default.trianglesWhite
                })
            )
        )
    );
};

exports.default = TriangleGrid;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _server2 = _interopRequireDefault(_server);

var _components = __webpack_require__(1);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/static', _express2.default.static(_path2.default.resolve(__dirname, './dist')));

app.get('*', function (req, res) {
    var html = _fs2.default.readFileSync(_path2.default.resolve(__dirname, './index.html')).toString();
    var markup = _server2.default.renderToString(_react2.default.createElement(_components.ParallaxExample, null));

    res.send(html.replace('$react', markup));
});

app.listen(3000, function () {
    console.log('Listening on: http://localhost:3000');
});
/* WEBPACK VAR INJECTION */}.call(exports, "examples/parallax-example"))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
	"root": "Intro_root_1yr",
	"scroll": "Intro_scroll_3FU",
	"container": "Intro_container_2vh",
	"ring": "Intro_ring_1XD",
	"circle": "Intro_circle_GQ_",
	"circleInner": "Intro_circleInner_1Cc",
	"hemispheres": "Intro_hemispheres_3ua"
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
	"root": "IntroCopy_root_1kd",
	"copy": "IntroCopy_copy_3S7",
	"barTop": "IntroCopy_barTop_1AV",
	"barBottom": "IntroCopy_barBottom_32A IntroCopy_barTop_1AV",
	"letter": "IntroCopy_letter_gb6"
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
	"root": "Marquee_root_1s4",
	"divider": "Marquee_divider_oiU",
	"container": "Marquee_container_3iU",
	"boxOutline": "Marquee_boxOutline_3nC",
	"boxBg": "Marquee_boxBg_3if",
	"text": "Marquee_text_w99"
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
	"root": "Overlap_root_2pE",
	"container": "Overlap_container_KT3",
	"circleRings": "Overlap_circleRings_1B_"
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
	"root": "ParallaExample_root_3aK"
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
	"root": "ShapeField_root_3mo",
	"shapeCluster01": "ShapeField_shapeCluster01_272",
	"shapeCluster02": "ShapeField_shapeCluster02_26-",
	"shapeCluster03": "ShapeField_shapeCluster03_vO1",
	"shapeCluster04": "ShapeField_shapeCluster04_QW5"
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
	"root": "Svg_root_2Gk"
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
	"root": "TriangleGrid_root_3Xb",
	"container": "TriangleGrid_container_VVE",
	"angleTop": "TriangleGrid_angleTop_3FG",
	"copy": "TriangleGrid_copy_1IL",
	"trianglesPurple": "TriangleGrid_trianglesPurple__w6"
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 184.2 184.2\" enable-background=\"new 0 0 184.2 184.2\" xml:space=\"preserve\">\r\n<path fill=\"#FBFBFB\" d=\"M92.1,184.2c50.9,0,92.1-41.2,92.1-92.1S143,0,92.1,0V184.2z\"/>\r\n<path fill=\"#A179AF\" d=\"M92.1,184.2C41.2,184.2,0,143,0,92.1S41.2,0,92.1,0V184.2z\"/>\r\n</svg>\r\n"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 402.4 402.4\" enable-background=\"new 0 0 402.4 402.4\" xml:space=\"preserve\">\r\n\t<path fill=\"url(#dot-pattern)\" d=\"M201.2,0C90.1,0,0,90.1,0,201.2s90.1,201.2,201.2,201.2s201.2-90.1,201.2-201.2S312.4,0,201.2,0\r\n\t\tz M201.2,366.5c-91.3,0-165.3-74-165.3-165.3s74-165.3,165.3-165.3s165.3,74,165.3,165.3S292.5,366.5,201.2,366.5z\"/>\r\n</svg>\r\n"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 930 288\" enable-background=\"new 0 0 930 288\" xml:space=\"preserve\">\r\n\t<polygon fill=\"url(#noise-pattern)\" points=\"878.9,288 0,288 51.1,0 930,0 \"/>\r\n</svg>\r\n"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 946 301\" enable-background=\"new 0 0 946 301\" xml:space=\"preserve\">\r\n<g>\r\n\t<polygon fill=\"#3D3547\" points=\"892.3,301 0.2,301 53.7,0 64.6,13 15.8,288 881.4,288 \t\"/>\r\n</g>\r\n<g>\r\n\t<polygon fill=\"#FFFFFF\" points=\"892.3,301 881.4,288 930.2,13 64.6,13 53.7,0 945.8,0 \t\"/>\r\n</g>\r\n</svg>\r\n"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 550 550\" style=\"enable-background:new 0 0 550 550;\" xml:space=\"preserve\">\n\t<path fill=\"#FBFCFC\" d=\"M276.1,25l-86.3,485.1c26.6,9.6,55.3,14.9,85.2,14.9c138.1,0,250-111.9,250-250C525,137.3,413.7,25.6,276.1,25\n\t\tz\"/>\n\t<g fill=\"#FFFFFF\">\n\t\t<path d=\"M73.3,273.5c0,81.3,50.1,155.1,125.4,186.1l0.7-4C126,424.9,77.3,352.9,77.3,273.5\n\t\t\tc0-106.2,84.4-193.1,189.7-197.2l0.7-4C159.9,76,73.3,164.8,73.3,273.5z\"/>\n\t\t<path d=\"M101.6,272.7c0-91.4,71.2-166.5,161.1-172.6l0.7-4C171,101.9,97.7,178.9,97.7,272.7\n\t\t\tc0,69.5,41.9,132.8,105.6,161.4l0.7-4C142.2,402,101.6,340.4,101.6,272.7z\"/>\n\t\t<path d=\"M249.6,173.6l0.8-4.3c-45.6,11.1-79.7,52.3-79.7,101.3c0,21.6,7.2,42.5,20.7,60.5\n\t\t\tc7.2,9.5,15.9,17.8,25.8,24.6l0.8-4.3c-8.9-6.3-16.8-14-23.4-22.7c-13-17.3-19.9-37.4-19.9-58.1\n\t\t\tC174.7,224,206.6,184.8,249.6,173.6z\"/>\n\t\t<path d=\"M126,272c0-76.5,58.1-139.7,132.4-147.9l0.7-4.1c-76.9,7.8-137.1,73-137.1,152c0,57.7,33.8,110.5,85.8,136.5\n\t\t\tl0.7-4.1C158.5,378.9,126,327.8,126,272z\"/>\n\t\t<path d=\"M190.5,506.1c-47-17.1-87.2-47.7-116.3-88.5c-29.8-41.8-45.6-91.1-45.6-142.7c0-65.7,25.6-127.4,72-173.9\n\t\t\tC147,54.6,208.8,29,274.5,29l0.9,0l0.2-1l0-3l-0.5,0c-0.2,0-0.4,0-0.6,0C207.7,25,145,51,97.8,98.2S24.6,208.2,24.6,274.9\n\t\t\tc0,52.4,16,102.5,46.3,145c29.7,41.6,70.6,72.7,118.4,90l1-2.8L190.5,506.1z\"/>\n\t\t<path d=\"M244.9,200.1l0.8-4.6c-29.6,11.7-50.6,40.6-50.6,74.3c0,21.7,10.4,42.7,27.1,57.8l0.8-4.6\n\t\t\tc-14.9-14.2-24-33.4-24-53.2C199.1,238.7,218,211.8,244.9,200.1z\"/>\n\t\t<path d=\"M48.9,274.2c0,47.2,14.5,92.5,42.1,130.9c26.1,36.4,61.7,63.9,103.2,79.8l0.7-4\n\t\t\tc-40.5-15.7-75.3-42.6-100.7-78.2c-27-37.7-41.3-82.2-41.3-128.6c0-59.2,23.1-114.9,64.9-156.7c41.1-41.1,95.4-64,153.3-64.9\n\t\t\tl0.7-4c-59.3,0.7-114.9,24.1-156.9,66C72.4,157.3,48.9,213.9,48.9,274.2z\"/>\n\t\t<path d=\"M174.6,343.5c-15.8-21.4-24.2-46.3-24.2-72.2c0-61.6,44.9-112.8,103.7-122.8l0.7-4.1\n\t\t\tc-61.4,9.6-108.4,62.9-108.4,126.9c0,26.7,8.6,52.5,25,74.6c11,14.8,25.1,27.3,41.1,36.5l0.7-4.1\n\t\t\tC198.2,369.3,184.9,357.5,174.6,343.5z\"/>\n\t</g>\n</svg>\n"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 550 550\" enable-background=\"new 0 0 550 550\" xml:space=\"preserve\">\n\t<circle fill=\"url(#dot-pattern)\" cx=\"275\" cy=\"275\" r=\"250\"/>\n</svg>\n"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 72 144\" style=\"enable-background:new 0 0 72 144;\" xml:space=\"preserve\">\n\t<path fill=\"#FBFBFB\" d=\"M72,144c-39.8,0-72-32.2-72-72S32.2,0,72,0V144z\"/>\n</svg>\n"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 72 144\" style=\"enable-background:new 0 0 72 144;\" xml:space=\"preserve\">\n\t<path fill=\"#3D3547\" d=\"M0,0c39.8,0,72,32.2,72,72s-32.2,72-72,72V0z\"/>\n</svg>\n"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 150 228\" style=\"enable-background:new 0 0 150 228;\" xml:space=\"preserve\">\n\t<rect fill=\"url(#noise-pattern)\" width=\"150\" height=\"228\"/>\n</svg>\n"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 91.8 183.7\" style=\"enable-background:new 0 0 91.8 183.7;\" xml:space=\"preserve\">\n\t<path fill=\"#3D3547\" d=\"M0,0l0,183.7c50.7,0,91.8-41.1,91.8-91.8S50.7,0,0,0\"/>\n</svg>\n"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 176.8 274\" style=\"enable-background:new 0 0 176.8 274;\" xml:space=\"preserve\">\n\t<polygon fill=\"url(#noise-pattern)\" points=\"176.8,274 0,0 176.8,0 \"/>\n</svg>\n"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 182.2 182.2\" style=\"enable-background:new 0 0 182.2 182.2;\" xml:space=\"preserve\">\n\t<polygon fill=\"#FBFBFB\" points=\"182.2,182.2 0,182.2 182.2,0 \"/>\n</svg>\n"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 266.2 517.8\" style=\"enable-background:new 0 0 266.2 517.8;\" xml:space=\"preserve\">\n<polygon fill=\"url(#noise-pattern)\" points=\"266.2,0 266.2,517.8 0,517.8 \"/>\n</svg>\n"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 332 332\" style=\"enable-background:new 0 0 332 332;\" xml:space=\"preserve\">\n<polygon fill=\"#FBFBFB\" points=\"332,0 332,332 0,332 \"/>\n</svg>\n"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 332 332\" style=\"enable-background:new 0 0 332 332;\" xml:space=\"preserve\">\n\t<polygon fill=\"#3D3547\" points=\"0,332 0,0 332,0 \"/>\n</svg>\n"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 113.8 227.6\" style=\"enable-background:new 0 0 113.8 227.6;\" xml:space=\"preserve\">\n\t<path fill=\"#FBFBFB\" d=\"M0,0l0,227.6c62.9,0,113.8-51,113.8-113.8S62.9,0,0,0z\"/>\n</svg>\n"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 227.6 227.6\" style=\"enable-background:new 0 0 227.6 227.6;\" xml:space=\"preserve\">\n\t<rect fill=\"#3D3547\" width=\"227.6\" height=\"227.6\"/>\n</svg>\n"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 221 342.4\" style=\"enable-background:new 0 0 221 342.4;\" xml:space=\"preserve\">\n\t<polygon fill=\"url(#noise-pattern)\" points=\"221,342.4 0,0 221,0 \"/>\n</svg>\n"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 486 712\" style=\"enable-background:new 0 0 486 712;\" xml:space=\"preserve\">\n\t<g fill=\"url(#noise-pattern)\">\n\t\t<polygon points=\"274.4,178.5 291.1,89.7 379.9,89.7 \t\"/>\n\t\t<polygon points=\"363.1,178.5 379.9,89.7 468.6,89.7 \t\"/>\n\t\t<polygon points=\"96.8,178.5 113.6,89.7 202.4,89.7 \t\"/>\n\t\t<polygon points=\"185.6,178.5 202.4,89.7 291.1,89.7 \t\"/>\n\t\t<polygon points=\"242.1,356 258.8,267.2 347.6,267.2 \t\"/>\n\t\t<polygon points=\"330.9,356 347.6,267.2 436.4,267.2 \t\"/>\n\t\t<polygon points=\"64.6,356 81.3,267.2 170.1,267.2 \t\"/>\n\t\t<polygon points=\"153.3,356 170.1,267.2 258.8,267.2 \t\"/>\n\t\t<polygon points=\"209.8,533.5 226.6,444.8 315.3,444.8 \t\"/>\n\t\t<polygon points=\"298.6,533.5 315.3,444.8 404.1,444.8 \t\"/>\n\t\t<polygon points=\"32.3,533.5 49,444.8 137.8,444.8 \t\"/>\n\t\t<polygon points=\"121,533.5 137.8,444.8 226.6,444.8 \t\"/>\n\t\t<polygon points=\"177.5,711 194.3,622.3 283,622.3 \t\"/>\n\t\t<polygon points=\"266.3,711 283,622.3 371.8,622.3 \t\"/>\n\t\t<polygon points=\"0,711 16.8,622.3 105.5,622.3 \t\"/>\n\t\t<polygon points=\"88.8,711 105.5,622.3 194.3,622.3 \t\"/>\n\t</g>\n</svg>\n"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 486 712\" enable-background=\"new 0 0 486 712\" xml:space=\"preserve\">\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"308.2,0.9 291.4,89.7 202.7,89.7 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"218.2,0.9 201.4,89.7 112.7,89.7 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"396.9,0.9 380.2,89.7 291.4,89.7 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"485.7,0.9 468.9,89.7 380.2,89.7 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"275.9,178.5 259.1,267.2 170.4,267.2 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"185.9,178.5 169.2,267.2 80.4,267.2 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"364.7,178.5 347.9,267.2 259.1,267.2 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"453.4,178.5 436.7,267.2 347.9,267.2 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"242.4,356 225.6,444.8 136.9,444.8 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"153.6,356 136.9,444.8 48.1,444.8 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"332.4,356 315.6,444.8 226.9,444.8 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"421.1,356 404.4,444.8 315.6,444.8 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"210.1,533.5 193.4,622.3 104.6,622.3 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"121.3,533.5 104.6,622.3 15.8,622.3 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"300.1,533.5 283.3,622.3 194.6,622.3 \t\t\"/>\r\n\t\t<polygon fill=\"#EDEAEA\" points=\"388.9,533.5 372.1,622.3 283.3,622.3 \t\t\"/>\r\n</svg>\r\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 1439.5 229.5\" enable-background=\"new 0 0 1439.5 229.5\" xml:space=\"preserve\">\n<polygon fill=\"#3D3547\" points=\"1440.5,230 0,229.5 1440,-0.5 \"/>\n</svg>\n"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 1440 270\" enable-background=\"new 0 0 1440 270\" xml:space=\"preserve\">\n<polygon fill=\"#FFFFFF\" points=\"1440,0 0,230 0,270 1440,40 \"/>\n</svg>\n"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 144 144\" style=\"enable-background:new 0 0 144 144;\" xml:space=\"preserve\">\n<defs>\n    <pattern id=\"dot-pattern\" width=\"142\" height=\"142\" patternUnits=\"userSpaceOnUse\">\n\t\t<path fill=\"#a179af\" d=\"M99.8,144L99.8,144l-3.7,0l0,0C97.1,143,98.8,143,99.8,144z M127.3,144h2.2C128.8,143.7,128,143.7,127.3,144z\n\t\t\t M144,10.3C144,10.3,144,10.3,144,10.3L144,10.3C144,10.3,144,10.3,144,10.3z M144,69.8v-3c-0.3,0.4-0.5,1-0.5,1.5\n\t\t\tC143.5,68.8,143.7,69.3,144,69.8z M144,52.8v-3c-0.3,0.4-0.5,1-0.5,1.5C143.5,51.8,143.7,52.3,144,52.8z M42.4,10.3\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0C42.7,9,42.4,9.6,42.4,10.3z M27.6,16.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0C25.2,13,25,13.6,25,14.3c0,0.7,0.3,1.4,0.8,1.8C26.2,16.6,26.9,16.9,27.6,16.9z M28.1,8.4c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC26.7,8.1,27.4,8.4,28.1,8.4z M32.2,12c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C34.9,11,33.2,11,32.2,12z M38.5,9.4c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC37.2,9.1,37.9,9.4,38.5,9.4z M48.5,7.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C47.2,7.6,47.9,7.9,48.5,7.9z M62,5.9c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC60.7,5.7,61.3,5.9,62,5.9z M54.7,7c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C57.4,6,55.7,6,54.7,7z M53.2,12.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C55.9,11.5,54.2,11.5,53.2,12.5z\n\t\t\t M49.2,18.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8C51.9,17.5,50.2,17.5,49.2,18.5z M43,19.4c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC41.7,19.1,42.4,19.4,43,19.4z M40.7,25.6c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C39.9,24.5,40.2,25.2,40.7,25.6z M30.7,20\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C33.4,19,31.7,19,30.7,20z M37.2,26.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C39.9,25.5,38.2,25.5,37.2,26.5z\n\t\t\t M41.7,32.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C44.4,31.9,42.7,31.9,41.7,32.9z M47.7,35.5c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\ts0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8\n\t\t\tC50.4,34.5,48.7,34.5,47.7,35.5z M53.7,32c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C56.4,31,54.6,31,53.7,32z M52.7,25.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C55.4,24.5,53.7,24.5,52.7,25.5z\n\t\t\t M56.7,21c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8C59.4,20,57.7,20,56.7,21z M65.2,21c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\ts1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C67.9,20,66.1,20,65.2,21z M65.3,30.5c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8S65.8,30.9,65.3,30.5z\n\t\t\t M66.2,37.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8C68.9,36.5,67.1,36.5,66.2,37.4z M58.4,39.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C58.7,38.4,58.4,39.1,58.4,39.8z M54,43.9\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C52.7,43.6,53.3,43.9,54,43.9z M71.2,32.1c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8S70.7,31.7,71.2,32.1z M60.7,14\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C63.4,13,61.7,13,60.7,14z M64.7,11.7c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C63.9,10.5,64.2,11.2,64.7,11.7z M72,5.4\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C70.6,5.2,71.3,5.4,72,5.4z M71.7,7.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8C74.4,6.5,72.6,6.5,71.7,7.5z\n\t\t\t M71.2,13.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8C73.9,12.5,72.1,12.5,71.2,13.5z M71.7,21c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8\n\t\t\tC74.4,20,72.6,20,71.7,21z M80.5,8.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C79.1,8.6,79.8,8.9,80.5,8.9z M80.1,12c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tC82.9,11,81.1,11,80.1,12z M79.1,20c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C81.9,19,80.1,19,79.1,20z M79.6,29c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C82.4,28,80.6,28,79.6,29z M82.6,36\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C85.4,35,83.6,35,82.6,36z M73.2,35.5c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C75.9,34.5,74.1,34.5,73.2,35.5z M75.7,44.4\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C78.4,43.5,76.6,43.5,75.7,44.4z M67.2,43.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C69.9,43,68.1,43,67.2,43.9z M90.6,38.9\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C93.4,38,91.6,38,90.6,38.9z M88.6,32c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C91.4,31,89.6,31,88.6,32z M88.5,29.4c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC87.1,29.1,87.8,29.4,88.5,29.4z M87.1,17c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C89.9,16,88.1,16,87.1,17z M86.6,8.5\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C89.3,7.5,87.6,7.5,86.6,8.5z M88,6.4c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C86.6,6.2,87.3,6.4,88,6.4z M98,4.4c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8h-3.7c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C96.6,4.2,97.3,4.4,98,4.4z\n\t\t\t M96.5,12.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C95.1,12.6,95.8,12.9,96.5,12.9z M103.5,12.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C102.1,12.6,102.8,12.9,103.5,12.9z\n\t\t\t M103,19.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C101.6,19.6,102.3,19.9,103,19.9z M95.5,19.4c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.1,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C94.1,19.1,94.8,19.4,95.5,19.4z M94.1,24\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C96.8,23,95.1,23,94.1,24z M101.1,27.6c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C100.4,26.5,100.6,27.2,101.1,27.6z\n\t\t\t M95.6,31c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C98.3,30,96.6,30,95.6,31z M97.9,41.3c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C98.1,39.9,97.9,40.6,97.9,41.3z M102.1,45.9\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C104.8,45,103.1,45,102.1,45.9z M107.1,40.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C109.8,39.5,108.1,39.5,107.1,40.4z\n\t\t\t M104.1,33.5c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C106.8,32.5,105.1,32.5,104.1,33.5z M108.6,31.1c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8S108.1,30.7,108.6,31.1z M110.9,23.4c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC109.6,23.1,110.3,23.4,110.9,23.4z M115.3,12.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C115.6,11.5,115.3,12.1,115.3,12.8z M121.9,8.4\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C120.6,8.1,121.3,8.4,121.9,8.4z M128.4,4.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-0.2-0.2-0.5-0.4-0.8-0.5h-2.2c-0.3,0.1-0.5,0.3-0.8,0.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC127.1,4.7,127.7,4.9,128.4,4.9z M129.8,6.3c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-0.9-1-2.7-1-3.7,0C130.1,5,129.8,5.7,129.8,6.3z M122.8,12.3\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-0.9-1-2.7-1-3.7,0C123.1,11,122.8,11.6,122.8,12.3z M123.9,22.4c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C122.6,22.1,123.3,22.4,123.9,22.4z\n\t\t\t M116.6,22.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C119.3,21.5,117.6,21.5,116.6,22.5z M121.6,31.6c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8S121.1,31.2,121.6,31.6\n\t\t\tz M133.5,31.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C133.2,33.2,133.5,32.5,133.5,31.8z M124.3,36.3c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C124.6,34.9,124.3,35.6,124.3,36.3z M118.1,35.5\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C120.8,34.5,119.1,34.5,118.1,35.5z M112.6,34.5c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C115.3,33.5,113.6,33.5,112.6,34.5z M115.3,44.8\n\t\t\tc0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0C115.6,43.4,115.3,44.1,115.3,44.8z M126.9,44.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C125.6,44.6,126.2,44.9,126.9,44.9z\n\t\t\t M138,44.3c0-0.7-0.3-1.4-0.8-1.8c-0.9-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C137.7,45.6,138,45,138,44.3z M137.3,35.5c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8S137.7,35.9,137.3,35.5z M126.8,23.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tC127.1,22.4,126.8,23.1,126.8,23.8z M129.1,14.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C131.8,13.5,130.1,13.5,129.1,14.5z M137.9,14.9\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C136.6,14.6,137.2,14.9,137.9,14.9z M139.9,5.4c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.3,0.8,1.8C138.6,5.2,139.2,5.4,139.9,5.4z\n\t\t\t M137.9,27.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C136.6,27.6,137.2,27.9,137.9,27.9z M139.6,30.5c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.1,0.8-1.8v0c0-0.7-0.3-1.3-0.8-1.8C142.3,29.5,140.5,29.5,139.6,30.5\n\t\t\tz M108.8,10.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0C109.1,9.5,108.8,10.1,108.8,10.8z M114.4,6.4c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C113.1,6.2,113.8,6.4,114.4,6.4z\n\t\t\t M106.5,7.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C105.1,7.6,105.8,7.9,106.5,7.9z M44.7,42.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C47.4,41.5,45.7,41.5,44.7,42.4z\n\t\t\t M36.7,40.6c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8C35.9,39.5,36.2,40.1,36.7,40.6z M32.6,35.4c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C31.2,35.1,31.9,35.4,32.6,35.4z M26.2,25\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8C28.9,24,27.2,24,26.2,25z M21.7,19.5C21.2,20,21,20.6,21,21.3c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C24.4,18.5,22.7,18.5,21.7,19.5z M28,40.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0C28.2,39.4,28,40.1,28,40.8z M33.7,43.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C36.4,42.5,34.7,42.5,33.7,43.4z M24.7,46.4\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C27.4,45.5,25.7,45.5,24.7,46.4z M19,42.3c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0C19.2,40.9,19,41.6,19,42.3z M44.7,27.5c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\ts0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8\n\t\t\tC47.4,26.5,45.7,26.5,44.7,27.5z M2.6,12.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tC0.3,9,0,9.6,0,10.3v0.1c0,0.7,0.3,1.3,0.8,1.8C1.2,12.6,1.9,12.9,2.6,12.9z M2.5,29.3c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tC2.8,27.9,2.5,28.6,2.5,29.3z M9.1,38.4c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C7.7,38.1,8.4,38.4,9.1,38.4z M4.3,20.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C6.9,19.5,5.2,19.5,4.3,20.5z\n\t\t\t M14.7,6C14.3,6.5,14,7.1,14,7.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C17.5,5,15.7,5,14.7,6z M7.5,8.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C7.8,7.5,7.5,8.1,7.5,8.8z M8.7,13.5C8.3,14,8,14.6,8,15.3\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8\n\t\t\tC11.5,12.5,9.7,12.5,8.7,13.5z M18.2,12c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8C20.9,11,19.2,11,18.2,12z M6.1,5.9c0.7,0,1.4-0.3,1.8-0.8C8.4,4.7,8.7,4,8.7,3.3\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C3.8,2,3.5,2.7,3.5,3.3c0,0.7,0.3,1.4,0.8,1.8C4.7,5.7,5.4,5.9,6.1,5.9z M10.7,23\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8C13.5,22,11.7,22,10.7,23z M15.5,20.3c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C15.8,19,15.5,19.6,15.5,20.3z M16.2,30.1c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\ts1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tC15.5,29,15.8,29.6,16.2,30.1z M21.7,32c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C24.4,31,22.7,31,21.7,32z M13.2,35.5c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8C16,34.5,14.2,34.5,13.2,35.5z M8.2,46.4\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C11,45.5,9.2,45.5,8.2,46.4z M6.7,44.1c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0C6.3,40.9,6,41.6,6,42.3C6,43,6.3,43.6,6.7,44.1z M31.2,139.7\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C30.9,141,31.2,140.3,31.2,139.7z M33.7,135.8c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C36.4,134.9,34.7,134.9,33.7,135.8z\n\t\t\t M44.7,137.8c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C47.4,136.9,45.7,136.9,44.7,137.8z M55.2,136.8c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tC57.9,135.9,56.2,135.9,55.2,136.8z M62.2,137.8c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\ts1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C64.9,136.9,63.2,136.9,62.2,137.8z M72.2,136.8\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C74.9,135.9,73.1,135.9,72.2,136.8z M90.3,135c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8C89.2,135.8,89.8,135.5,90.3,135z M96.1,134.8\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C98.8,133.9,97.1,133.9,96.1,134.8z M116.1,137.8c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.3,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tC118.8,136.8,117.1,136.9,116.1,137.8z M132.1,139.3c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C134.8,138.4,133,138.4,132.1,139.3z M107.8,137.5\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C106.6,138.3,107.3,138,107.8,137.5z M20.4,137.2c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\ts0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8S20.9,137.7,20.4,137.2z M12.7,138.2\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C12.4,139.5,12.7,138.8,12.7,138.2z M39.9,49.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C40.2,48.4,39.9,49.1,39.9,49.8z M48.9,51.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0C49.2,50.4,48.9,51.1,48.9,51.8z M56.4,47.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C56.7,46.4,56.4,47.1,56.4,47.8z M58.4,57.6\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C57.2,58.4,57.9,58.1,58.4,57.6z M49.2,61.6c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C48.4,60.4,48.7,61.1,49.2,61.6z\n\t\t\t M42.2,56.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C44.9,55.4,43.2,55.5,42.2,56.4z M35.7,57.9c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tC38.4,56.9,36.7,57,35.7,57.9z M32.7,50.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C35.4,49.5,33.7,49.5,32.7,50.4z M32.4,59.1\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C31.3,59.9,31.9,59.6,32.4,59.1z M24.1,57.4c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C22.7,57.1,23.4,57.4,24.1,57.4z\n\t\t\t M15.7,59.6c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8C15,58.4,15.3,59.1,15.7,59.6z M13,64.3c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C13.3,62.9,13,63.6,13,64.3z M23.6,70.3\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C22.2,70.1,22.9,70.3,23.6,70.3z M29.1,65.4c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C27.7,65.1,28.4,65.4,29.1,65.4z\n\t\t\t M34.7,65.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C37.4,64.5,35.7,64.5,34.7,65.4z M30.6,74.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC29.2,74.6,29.9,74.8,30.6,74.8z M24.6,80.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C23.2,80.1,23.9,80.3,24.6,80.3z M16.2,79.4c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.3,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C19,78.4,17.2,78.4,16.2,79.4z M20.4,70.9\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8C21.2,72.1,20.9,71.4,20.4,70.9z M10.2,73.9c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C13,72.9,11.2,72.9,10.2,73.9z M10.1,69.3\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C8.7,69.1,9.4,69.3,10.1,69.3z M9.6,58.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C7.3,54.9,7,55.6,7,56.3c0,0.7,0.3,1.4,0.8,1.8C8.2,58.6,8.9,58.9,9.6,58.9z M1.8,58.4\n\t\t\tC1.3,58.9,1,59.6,1,60.3c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8C4.5,57.5,2.7,57.5,1.8,58.4z M2.1,70.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.1,0.1-0.2,0.2-0.3,0.3v3c0.1,0.1,0.2,0.2,0.3,0.3C0.8,70.6,1.4,70.8,2.1,70.8z\n\t\t\t M2.1,53.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.1,0.1-0.2,0.2-0.3,0.3v3\n\t\t\tc0.1,0.1,0.2,0.2,0.3,0.3C0.8,53.6,1.4,53.9,2.1,53.9z M2.8,73.4C2.3,73.9,2,74.6,2,75.2s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C5.5,72.4,3.7,72.4,2.8,73.4z M5.6,85.3c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C3.3,81.4,3,82,3,82.7c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC4.3,85,4.9,85.3,5.6,85.3z M1.5,94.7c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C1.8,93.4,1.5,94,1.5,94.7z M6.1,103.3c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC4.7,103,5.4,103.3,6.1,103.3z M11.2,94.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C14,93.9,12.2,93.9,11.2,94.9z M7,88.7c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tC7.3,87.4,7,88,7,88.7z M20.2,89.7c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0C15.3,88.4,15,89,15,89.7c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C19.9,91.1,20.2,90.4,20.2,89.7z M22.6,98.3c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0C20.2,94.4,20,95,20,95.7c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC21.2,98,21.9,98.3,22.6,98.3z M28.6,100.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tC26.2,96.3,26,97,26,97.7c0,0.7,0.3,1.4,0.8,1.8C27.2,100,27.9,100.3,28.6,100.3z M34.1,103.3c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC32.7,103,33.4,103.3,34.1,103.3z M26.2,87.2c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8C25.9,88.6,26.2,87.9,26.2,87.2z M33.2,89.7c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0C28.2,88.4,28,89,28,89.7c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tC32.9,91.1,33.2,90.4,33.2,89.7z M38.9,89.9c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C39.6,91,39.4,90.4,38.9,89.9z M31.1,83.3\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tC29.7,83,30.4,83.3,31.1,83.3z M40.9,80.9c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C41.6,82,41.4,81.4,40.9,80.9z M43.1,74.2\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tC42.9,75.6,43.1,74.9,43.1,74.2z M48.1,80.2c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C47.9,81.6,48.1,80.9,48.1,80.2z M49.2,77.1c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8S48.7,76.6,49.2,77.1z\n\t\t\t M45.4,86.4c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8C46.1,87.5,45.9,86.9,45.4,86.4z M52.4,90.4c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C53.1,91.5,52.8,90.9,52.4,90.4z\n\t\t\t M52.4,98.4c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8C53.1,99.5,52.8,98.8,52.4,98.4z M40.7,94.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8C43.4,93.9,41.7,93.9,40.7,94.9z\n\t\t\t M57.5,96.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C56.2,96.5,56.8,96.8,57.5,96.8z M57.2,77.9c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C59.9,76.9,58.2,76.9,57.2,77.9z\n\t\t\t M60.9,69.9c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8C61.6,71.1,61.3,70.4,60.9,69.9z M55.1,68.2c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C54.8,69.6,55.1,68.9,55.1,68.2z\n\t\t\t M45.5,70.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C44.2,70.6,44.9,70.8,45.5,70.8z M58.5,63.9c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C57.2,63.6,57.8,63.9,58.5,63.9z\n\t\t\t M63.7,73.9c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C66.4,72.9,64.6,72.9,63.7,73.9z M64.9,83.2c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C65.2,81.9,64.9,82.5,64.9,83.2z M63.4,89.6\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C62.2,90.3,62.9,90,63.4,89.6z M69.8,88.9c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C70.6,90,70.3,89.4,69.8,88.9z M74,101.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C72.6,101.5,73.3,101.8,74,101.8z M66.6,97.2c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8C66.3,98.5,66.6,97.9,66.6,97.2z\n\t\t\t M75.5,93.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C74.2,93.5,74.8,93.8,75.5,93.8z M76.8,84.1c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8C75.7,84.8,76.4,84.5,76.8,84.1z M73.5,77.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tC72.2,77.6,72.8,77.8,73.5,77.8z M62.7,68.6c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C61.9,67.4,62.2,68.1,62.7,68.6z M73.1,67.7\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8\n\t\t\tC72.8,69.1,73.1,68.4,73.1,67.7z M67.8,58.4c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C68.6,59.6,68.3,58.9,67.8,58.4z M66.8,54.1\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C65.7,54.9,66.4,54.6,66.8,54.1z M70.7,50.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C73.4,50,71.6,50,70.7,50.9z\n\t\t\t M72.2,59.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C74.9,59,73.1,58.9,72.2,59.9z M80.3,70.1c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tC79.2,70.8,79.8,70.6,80.3,70.1z M87.1,73.2c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C86.8,74.6,87.1,73.9,87.1,73.2z M81.6,78.9\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C84.4,77.9,82.6,77.9,81.6,78.9z M82,90.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C80.6,90.5,81.3,90.8,82,90.8z M86,97.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC84.6,97.5,85.3,97.8,86,97.8z M92,91.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C90.6,91.5,91.3,91.8,92,91.8z M92,100.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC90.6,100.5,91.3,100.8,92,100.8z M91.5,82.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C90.1,82,90.8,82.3,91.5,82.3z M96.6,73.7c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C96.3,75.1,96.6,74.4,96.6,73.7z\n\t\t\t M90.1,65.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.3-0.3,1.8-0.8C89.8,67.1,90.1,66.4,90.1,65.8z M80.1,60.5c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8C82.9,59.5,81.1,59.5,80.1,60.5z\n\t\t\t M78.2,54.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C80.9,53.5,79.1,53.4,78.2,54.4z M84.6,50.4c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tC87.4,49.5,85.6,49.5,84.6,50.4z M86.3,46.1c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8C85.2,46.9,85.8,46.6,86.3,46.1z M95.8,47.9\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8C96.6,49.1,96.3,48.4,95.8,47.9z M88.9,58.3c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0C89.2,56.9,88.9,57.6,88.9,58.3z M98.1,64.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C97.8,66.1,98.1,65.4,98.1,64.8z M102,72.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.3,0.8,1.8C100.6,72.1,101.3,72.3,102,72.3z\n\t\t\t M104.1,77.7c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.3,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C103.8,79.1,104.1,78.4,104.1,77.7z M102.1,85.7c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C101.8,87.1,102.1,86.4,102.1,85.7z\n\t\t\t M108.8,82.4c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8C109.5,83.5,109.3,82.9,108.8,82.4z M104.6,91.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C107.3,90.4,105.6,90.4,104.6,91.4z\n\t\t\t M111.9,101.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C110.6,101.5,111.3,101.8,111.9,101.8z M111.6,80.4c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C114.3,79.4,112.6,79.4,111.6,80.4z\n\t\t\t M111.4,76.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\ts0.3,1.4,0.8,1.8C110.1,76.6,110.8,76.8,111.4,76.8z M55.6,84.2c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C55.3,85.6,55.6,84.9,55.6,84.2z M140.7,64.6\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C139.6,65.4,140.3,65.1,140.7,64.6z M143.5,54.3c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C143.2,55.6,143.5,54.9,143.5,54.3z\n\t\t\t M136.3,48.9c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8C137,50.1,136.7,49.4,136.3,48.9z M136.8,67.4c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C137.5,68.6,137.2,67.9,136.8,67.4z\n\t\t\t M132.6,74.9c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C135.3,73.9,133.6,73.9,132.6,74.9z M139.6,72.4c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.1,0.8-1.8v0c0-0.7-0.3-1.3-0.8-1.8C142.3,71.4,140.5,71.4,139.6,72.4\n\t\t\tz M142.5,82.2c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C142.2,83.6,142.5,82.9,142.5,82.2z M140.2,95.4c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C141,96.5,140.7,95.9,140.2,95.4z\n\t\t\t M138.2,92.1c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C137.1,92.8,137.8,92.5,138.2,92.1z M129.6,60.1c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C128.8,58.9,129.1,59.6,129.6,60.1z\n\t\t\t M121.8,58.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0C122.1,57.4,121.8,58.1,121.8,58.8z M124.6,51.1c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C123.8,50,124.1,50.6,124.6,51.1z\n\t\t\t M121.3,50.4c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8C122,51.6,121.8,50.9,121.3,50.4z M110.1,48.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.1,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C112.8,47.5,111.1,47.5,110.1,48.4z\n\t\t\t M107.6,53.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C107.3,55.1,107.6,54.4,107.6,53.8z M100.8,57.6c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8C99.6,58.4,100.3,58.1,100.8,57.6z\n\t\t\t M101.6,61.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C104.3,60.5,102.6,60.5,101.6,61.4z M113.8,60.1c0.5-0.5,0.8-1.1,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tS113.3,60.6,113.8,60.1z M116.1,66.1c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C115.3,64.9,115.6,65.6,116.1,66.1z M107.9,67.2c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tC108.1,65.9,107.9,66.6,107.9,67.2z M121,72.7c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C120.8,74.1,121,73.4,121,72.7z M127.4,68.3\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C126.1,68.1,126.7,68.3,127.4,68.3z M125.1,74.1c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C124.3,72.9,124.6,73.6,125.1,74.1z\n\t\t\t M121.4,83.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\ts0.3,1.4,0.8,1.8C120.1,83,120.8,83.3,121.4,83.3z M123.9,91.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C122.6,91,123.3,91.3,123.9,91.3z\n\t\t\t M111.6,87.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C114.3,86.9,112.6,86.9,111.6,87.9z M120.8,96c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8C119.6,96.8,120.3,96.5,120.8,96z\n\t\t\t M128.1,92.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C130.8,91.9,129.1,91.9,128.1,92.9z M127.6,81.4c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tC130.3,80.4,128.6,80.4,127.6,81.4z M100.3,92.4c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C101.1,93.5,100.8,92.9,100.3,92.4z M123.8,103.5\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C122.6,104.3,123.3,104,123.8,103.5z M12.1,116.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C10.7,116,11.4,116.3,12.1,116.3z\n\t\t\t M16.7,104.7c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C16.4,106.1,16.7,105.4,16.7,104.7z M23.2,102.2c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8C22.9,103.6,23.2,102.9,23.2,102.2z\n\t\t\t M18.6,112.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C17.2,112.5,17.9,112.8,18.6,112.8z M27.4,112.3c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C28.2,113.5,27.9,112.8,27.4,112.3z\n\t\t\t M23.7,120.3c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C26.4,119.4,24.7,119.4,23.7,120.3z M17.6,121.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C16.2,121,16.9,121.3,17.6,121.3z M32.6,118.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC31.2,118.5,31.9,118.8,32.6,118.8z M33.1,124.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C31.7,124.5,32.4,124.8,33.1,124.8z M44.4,107c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tC43.2,107.8,43.9,107.5,44.4,107z M36.5,112.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C35.2,112,35.9,112.3,36.5,112.3z M43,115.3\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C41.7,115,42.4,115.3,43,115.3z M49,123.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C47.7,123.5,48.4,123.8,49,123.8z M40.9,121c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tC39.7,121.8,40.4,121.5,40.9,121z M50.5,117.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C49.2,117.5,49.8,117.8,50.5,117.8z M51.9,108\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C50.7,108.8,51.4,108.5,51.9,108z M58.5,105.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C57.2,105,57.8,105.3,58.5,105.3z\n\t\t\t M57,111.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C55.7,111,56.3,111.3,57,111.3z M61.4,114.3c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C62.1,115.5,61.8,114.8,61.4,114.3z\n\t\t\t M65.2,109.4c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C67.9,108.4,66.1,108.4,65.2,109.4z M66.5,124.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C65.1,124.5,65.8,124.8,66.5,124.8z M67.5,106.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C66.2,106.5,66.8,106.8,67.5,106.8z M74.5,110.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C73.2,110,73.8,110.3,74.5,110.3z\n\t\t\t M30.7,106.2c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C30.4,107.6,30.7,106.9,30.7,106.2z M74.3,117.5c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8C73.2,118.3,73.9,118,74.3,117.5z\n\t\t\t M7.4,124.8c-1-1-2.7-1-3.7,0C3.3,125.3,3,126,3,126.7s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8S7.9,125.3,7.4,124.8z M1.8,132.8C1.3,133.3,1,134,1,134.7c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C4.5,131.9,2.7,131.9,1.8,132.8z M19.6,131.4\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.3-0.8-1.8C22.3,130.4,20.6,130.4,19.6,131.4z M19.1,128.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C17.7,128.5,18.4,128.8,19.1,128.8z M29.4,131.5\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tC28.3,132.3,28.9,132,29.4,131.5z M35,131.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C33.7,131,34.4,131.3,35,131.3z M43.5,129.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC42.2,129.5,42.9,129.8,43.5,129.8z M43.9,131.3c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8S44.4,131.8,43.9,131.3z M53.9,137.5\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C52.7,138.3,53.4,138,53.9,137.5z M52.5,131.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C51.2,131,51.8,131.3,52.5,131.3z M63.1,133.7\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tC62.8,135,63.1,134.3,63.1,133.7z M65.2,128.8c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8s1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C67.9,127.9,66.1,127.8,65.2,128.8z M13.1,133.3c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tC11.7,133,12.4,133.3,13.1,133.3z M84.1,100.7c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C83.8,102.1,84.1,101.4,84.1,100.7z M90.1,105.2\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C89.8,106.6,90.1,105.9,90.1,105.2z M98.8,105c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8C97.7,105.8,98.3,105.5,98.8,105z\n\t\t\t M98.5,115.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C97.1,115,97.8,115.3,98.5,115.3z M90.6,116.3c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C93.4,115.4,91.6,115.4,90.6,116.3z\n\t\t\t M84.1,119.8c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C86.9,118.9,85.1,118.9,84.1,119.8z M88.3,111.3c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8C89.1,112.5,88.8,111.8,88.3,111.3z M80.1,126.3\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C82.9,125.4,81.1,125.4,80.1,126.3z M89.6,125.8c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C92.4,124.9,90.6,124.9,89.6,125.8z\n\t\t\t M96.6,128.3c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.3-0.8-1.8C99.3,127.4,97.6,127.3,96.6,128.3z M97.1,119.3c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C99.8,118.4,98.1,118.4,97.1,119.3z\n\t\t\t M2.5,118.2c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0C2.8,116.8,2.5,117.5,2.5,118.2z M4.3,110.5c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8C3.5,109.4,3.8,110.1,4.3,110.5z\n\t\t\t M136.6,132.3c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C139.3,131.4,137.5,131.4,136.6,132.3z M133.8,133c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8C132.6,133.8,133.3,133.5,133.8,133z M141.3,129.2\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0,0,0.1,0,0.1,0v-5.1c-0.7,0-1.4,0.2-1.9,0.7C141.6,127.8,141.3,128.5,141.3,129.2z\n\t\t\t M136.9,116.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-0.9-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C135.6,116.5,136.2,116.8,136.9,116.8z M137.4,106.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C136.1,106,136.7,106.3,137.4,106.3z\n\t\t\t M140.4,124.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\ts0.3,1.4,0.8,1.8C139,124,139.7,124.3,140.4,124.3z M75.2,124.5c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8S74.7,124,75.2,124.5z M72.2,126.8\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\ts-0.3-1.4-0.8-1.8C74.9,125.9,73.1,125.8,72.2,126.8z M105.5,128.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C104.1,128.5,104.8,128.8,105.5,128.8z M115.3,127.5\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tS114.8,128,115.3,127.5z M106.3,119c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8C105.2,119.8,105.8,119.5,106.3,119z M110.4,120.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tC109.1,120.5,109.8,120.8,110.4,120.8z M106,111.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C104.6,111.5,105.3,111.8,106,111.8z M115.8,114\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8S115.3,114.5,115.8,114z M118.4,121.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C117.1,121,117.8,121.3,118.4,121.3z M124.3,125\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tC123.1,125.8,123.8,125.5,124.3,125z M126,131.2c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8C125.7,132.5,126,131.8,126,131.2z M127.4,118.8c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC126.1,118.5,126.7,118.8,127.4,118.8z M123.9,113.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.3,0.8,1.8C122.6,113.5,123.3,113.8,123.9,113.8z M115.4,107.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C114.1,107.5,114.8,107.8,115.4,107.8z M131.4,111.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C130.1,111,130.7,111.3,131.4,111.3z\n\t\t\t M131.9,125.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\ts0.3,1.4,0.8,1.8C130.6,125.5,131.2,125.8,131.9,125.8z M105.5,104.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C104.1,104.5,104.8,104.8,105.5,104.8z\n\t\t\t M117.5,132.7c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C117.3,134,117.5,133.3,117.5,132.7z M125.1,134.8c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C127.8,133.9,126,133.9,125.1,134.8z\n\t\t\t M128.9,104.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8C127.6,104,128.2,104.3,128.9,104.3z M15.7,46.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C18.5,46,16.7,46,15.7,46.9z\n\t\t\t M10.1,124.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.3-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8\n\t\t\ts0.3,1.4,0.8,1.8C8.7,124,9.4,124.3,10.1,124.3z M57.2,121.8c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8C59.9,120.9,58.1,120.9,57.2,121.8z M82.1,112.7\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8C81.8,114,82.1,113.4,82.1,112.7z M93,112.3c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8C91.6,112,92.3,112.3,93,112.3z\n\t\t\t M78.7,139.8c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.2,0.2,0.5,0.4,0.8,0.5h2.1c0.3-0.1,0.5-0.3,0.8-0.5\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C81.4,138.9,79.6,138.9,78.7,139.8z M20.7,144h2.6C22.5,143.6,21.5,143.6,20.7,144z\n\t\t\t M39.2,141.8c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.1,0,0.2,0,0.4h5.1c0-0.1,0-0.2,0-0.4c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tC41.9,140.8,40.2,140.8,39.2,141.8z M30.7,143.3c-0.2,0.2-0.4,0.4-0.5,0.7h4.6c-0.1-0.3-0.3-0.5-0.5-0.7\n\t\t\tC33.4,142.3,31.7,142.3,30.7,143.3z M52.2,143.3c-0.2,0.2-0.4,0.4-0.5,0.7h4.6c-0.1-0.3-0.3-0.5-0.5-0.7\n\t\t\tC54.9,142.3,53.2,142.3,52.2,143.3z M12.2,142.3c-0.4,0.4-0.7,1.1-0.7,1.7h5.2c0-0.6-0.3-1.2-0.7-1.7\n\t\t\tC15,141.3,13.2,141.3,12.2,142.3z M106.6,141.3c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.3,0.1,0.6,0.2,0.9h4.9c0.1-0.3,0.2-0.6,0.2-0.9\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C109.3,140.3,107.6,140.3,106.6,141.3z M141.6,15c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.2,0,0.4,0,0.6-0.1v-5C143.1,14.1,142.2,14.3,141.6,15z M141.3,23.3c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0,0,0.1,0,0.1,0v-5.1c-0.7,0-1.4,0.2-1.9,0.7C141.6,21.9,141.3,22.6,141.3,23.3z M141.8,37.8\n\t\t\tc0,0.7,0.3,1.4,0.8,1.8c0.4,0.4,0.9,0.6,1.4,0.7v-5.1c-0.5,0.1-1,0.3-1.4,0.7C142.1,36.4,141.8,37.1,141.8,37.8z M141.1,42.4\n\t\t\tc-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0.4,0,0.8-0.1,1.1-0.3V42C143,41.5,141.8,41.7,141.1,42.4\n\t\t\tz M141.3,140.2c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8c0,0,0.1,0,0.1,0v-5.1c-0.7,0-1.4,0.2-1.9,0.7\n\t\t\tC141.6,138.8,141.3,139.5,141.3,140.2z M142.3,89.2c0,0.7,0.3,1.4,0.8,1.8c0.3,0.3,0.6,0.5,0.9,0.6v-4.8c-0.3,0.1-0.7,0.3-0.9,0.6\n\t\t\tC142.6,87.9,142.3,88.5,142.3,89.2z M141.1,108.9c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.8,1.8,0.8\n\t\t\tc0.4,0,0.8-0.1,1.1-0.3v-4.7C143,107.9,141.8,108.1,141.1,108.9z M142.3,102.7c0,0.7,0.3,1.4,0.8,1.8c0.3,0.3,0.6,0.5,0.9,0.6v-4.8\n\t\t\tc-0.3,0.1-0.7,0.3-0.9,0.6C142.6,101.3,142.3,102,142.3,102.7z M89.1,137.8c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.3-0.8-1.8C91.8,136.9,90.1,136.9,89.1,137.8z\n\t\t\t M81.3,136.5c0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8c-1-1-2.7-1-3.7,0c-0.5,0.5-0.8,1.2-0.8,1.8c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tc0.5,0.5,1.2,0.8,1.8,0.8C80.2,137.3,80.8,137,81.3,136.5z M0,32.3L0,32.3C0,32.3,0,32.3,0,32.3C0,32.3,0,32.3,0,32.3z M0,74.2\n\t\t\tL0,74.2C0,74.3,0,74.2,0,74.2C0,74.2,0,74.2,0,74.2z M2.5,129.2c0-0.7-0.3-1.4-0.8-1.8c-0.5-0.5-1.1-0.7-1.7-0.7v5.1\n\t\t\tc0.6,0,1.3-0.3,1.7-0.7C2.2,130.5,2.5,129.8,2.5,129.2z M2,16.8c0-0.7-0.3-1.4-0.8-1.8c-0.3-0.3-0.8-0.6-1.2-0.7v5\n\t\t\tc0.5-0.1,0.9-0.3,1.2-0.7C1.7,18.2,2,17.5,2,16.8z M2.5,23.3c0-0.7-0.3-1.4-0.8-1.8C1.3,21,0.6,20.8,0,20.8v5.1\n\t\t\tc0.6,0,1.3-0.3,1.7-0.7C2.2,24.7,2.5,24,2.5,23.3z M2.2,39.6C2.7,39.1,3,38.5,3,37.8c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tc-0.6-0.6-1.4-0.8-2.2-0.7v5.1c0.1,0,0.3,0,0.4,0C1.1,40.4,1.8,40.1,2.2,39.6z M1.5,44.3c0-0.7-0.3-1.4-0.8-1.8\n\t\t\tC0.5,42.2,0.3,42.1,0,42v4.7c0.3-0.1,0.5-0.3,0.7-0.5C1.2,45.6,1.5,45,1.5,44.3z M0,137.6v5.1c0.6,0,1.3-0.3,1.7-0.7\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C1.3,137.8,0.6,137.6,0,137.6z M2.7,91.1c0.5-0.5,0.8-1.2,0.8-1.8\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8C2,86.7,0.9,86.5,0,86.8v4.8c0.3,0.1,0.6,0.2,0.9,0.2C1.6,91.8,2.3,91.5,2.7,91.1z M1.5,110.7\n\t\t\tc0-0.7-0.3-1.4-0.8-1.8c-0.2-0.2-0.5-0.4-0.7-0.5v4.7c0.3-0.1,0.5-0.3,0.7-0.5C1.2,112,1.5,111.4,1.5,110.7z M2.7,104.5\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0-0.7-0.3-1.4-0.8-1.8C2,100.2,0.9,100,0,100.3v4.8c0.3,0.1,0.6,0.2,0.9,0.2C1.6,105.3,2.3,105,2.7,104.5z\n\t\t\t M81.6,0h-2.1c0.3,0.2,0.7,0.2,1.1,0.2S81.2,0.2,81.6,0z M22,4.8c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8s-0.3-1.4-0.8-1.8\n\t\t\tc-0.2-0.2-0.3-0.3-0.5-0.4h-2.6c-0.2,0.1-0.4,0.2-0.5,0.4c-0.5,0.5-0.8,1.2-0.8,1.8s0.3,1.4,0.8,1.8C20.6,4.5,21.3,4.8,22,4.8z\n\t\t\t M41,2.2c0.7,0,1.4-0.3,1.8-0.8c0.4-0.4,0.6-0.9,0.7-1.5h-5.1c0.1,0.6,0.3,1.1,0.7,1.5C39.7,2,40.4,2.2,41,2.2z M32.6,3.7\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.4-0.1-0.8-0.3-1.1h-4.6C30.1,0.4,30,0.7,30,1.1c0,0.7,0.3,1.4,0.8,1.8\n\t\t\tC31.2,3.5,31.9,3.7,32.6,3.7z M54,3.7c0.7,0,1.4-0.3,1.8-0.8c0.5-0.5,0.8-1.2,0.8-1.8c0-0.4-0.1-0.8-0.3-1.1h-4.6\n\t\t\tc-0.2,0.4-0.3,0.7-0.3,1.1c0,0.7,0.3,1.4,0.8,1.8C52.7,3.5,53.3,3.7,54,3.7z M14.1,2.7c0.7,0,1.4-0.3,1.8-0.8\n\t\t\tc0.5-0.5,0.8-1.2,0.8-1.8c0,0,0-0.1,0-0.1h-5.2c0,0,0,0.1,0,0.1c0,0.7,0.3,1.4,0.8,1.8C12.7,2.5,13.4,2.7,14.1,2.7z M108.5,1.7\n\t\t\tc0.7,0,1.4-0.3,1.8-0.8c0.3-0.3,0.5-0.6,0.6-1H106c0.1,0.4,0.3,0.7,0.6,1C107.1,1.5,107.8,1.7,108.5,1.7z\"/>\n\t\t</pattern>\n\t</defs>\n</svg>\n"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" viewBox=\"0 0 142 142\" height=\"142px\" width=\"142px\">\n    <defs>\n        <pattern id=\"noise-pattern\" width=\"142\" height=\"142\" fill=\"\" patternUnits=\"userSpaceOnUse\">\n            <path fill=\"#a179af\" d=\"M21,122.7l1.3-1.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0.1,1.4c-0.2,0.3-0.5,0.5-0.7,0.8c-1,1-1.3,1.5-1.1,2.2\n                c0.1,0.4,0,0.9-0.4,1.1c-0.4,0.2-0.8,0.2-1.2-0.1c-0.3-0.2-0.5-0.5-0.8-0.7c-0.1-0.1-0.2-0.2-0.2-0.2c0,0.1-0.1,0.2-0.2,0.3l-2,2\n                c-0.2,0.2-0.4,0.3-0.7,0.3s-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4l3.9-4c0.4-0.4,1-0.4,1.4,0L21,122.7z M34,105.6l-2.8-0.5\n                c-0.3-0.1-0.6,0-0.8,0.2c-0.2,0.2-0.3,0.5-0.3,0.8v1.6c-2.3-0.3-4.3,0.4-6.1,1c-0.5,0.2-1.1,0.4-1.6,0.5c-0.5,0.1-0.8,0.7-0.7,1.2\n                c0.1,0.5,0.6,0.8,1.1,0.8l1.5-0.2c-0.1,0.6-0.1,1.3,0.1,2c-0.6,0.4-1,0.8-0.8,1.4c0.1,0.4,0.5,0.7,1,0.7c0.7,0,2.9-1.4,3.6-3\n                c0.4-0.8,0.4-1.6,0.1-2.3c0.7-0.1,1.5-0.1,2.3,0c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4,0c1.5,0.2,2.7,0.6,3.1,0.7\n                c0.3,0.1,0.4,0.2,0.6,0.2c0.5,0,0.9-0.4,1-0.8c0.1-0.7-0.3-0.9-0.7-1.1l0,0l-0.1,0c-0.1,0-0.1-0.1-0.2-0.1l-0.1,0v-2.1\n                C34.8,106.1,34.5,105.7,34,105.6z M71,81.2c-0.1-0.4-0.4-0.6-0.8-0.7c-0.4-0.1-0.7,0.1-0.9,0.4l-3.5,5.3c0-0.3-0.1-0.7-0.5-0.9\n                L61.5,83l0-0.1l0.9-1.5c0.3-0.4,0.2-1-0.2-1.3c-0.3-0.2-0.6-0.4-0.9-0.6c-0.6-0.4-1.1-0.7-1.4-1.1c-0.1-0.4-0.1-0.7-0.2-1\n                c-0.1-0.5-0.5-0.9-1-0.9c0,0,0,0,0,0c-0.5,0-0.9,0.4-1,0.9c-0.1,0.6,0,1.2,0.3,1.7c0.3,1,0.7,2.2,1.2,3.6l0,0\n                c-0.1,0.2-0.2,0.5-0.1,0.7c0.1,0.3,0.2,0.5,0.4,0.6l0.4,0.2c0.8,1.9,1.7,3.7,2.4,5c0.2,0.4,0.3,0.7,0.5,0.9c-0.1,0.3,0,0.6,0.2,0.8\n                c0.3,0.4,0.6,0.8,1.1,0.8h0c0.3,0,0.7-0.2,0.8-0.5c0-0.1,0.1-0.2,0.1-0.2l0.8-0.2c0.4-0.1,0.7-0.4,0.7-0.8c0.1-0.4-0.1-0.8-0.5-1\n                l-1.5-1l0.5-0.8c0,0.2,0,0.3,0.1,0.5c0.2,0.3,0.5,0.5,0.9,0.5h3.9c0.4,0,0.8-0.2,0.9-0.6c0.2-0.4,0.1-0.8-0.2-1.1l-1.3-1.3\n                c0,0,0,0,0,0C70.4,84.5,71.7,83.2,71,81.2z M48.1,80.3l1.9-0.7c0.5-0.2,0.7-0.7,0.6-1.1c-0.1-0.6-0.3-1.2-0.6-1.7\n                c-0.2-1.1-0.9-2.3-2.3-3.6c-0.2-0.2-0.4-0.2-0.6-0.3L46,72.8c-1.7-0.7-3.8-0.9-5.9-0.4c-0.5,0.1-0.8,0.5-0.8,1\n                c0,0.5,0.4,0.9,0.9,0.9l5.3,0.4c1.2,0.5,2.1,1.4,2.6,2.6c0,0.3-0.2,0.7-0.9,1.2l-2.3,0.8c-0.6-1.4-2-2.2-3.2-2.7\n                c-0.2-0.1-0.5-0.2-0.7-0.3c-0.3-0.1-0.6-0.2-0.9-0.3l-0.8-0.3c-0.3-0.1-0.6-0.1-0.9,0.1c-0.3,0.2-0.4,0.5-0.4,0.8\n                c0,0.6-0.4,0.8-1.8,1.3c-0.3,0.1-0.7,0.2-1,0.4c-0.5,0.2-0.6,0.7-0.5,1.2c0.1,0.5,0.7,0.8,1.2,0.7c0.4,0,0.7,0.3,1,0.5\n                c1,2.1,1.3,2.4,1.9,2.4c0.4,0,0.8-0.2,0.9-0.6c0.3-0.8-0.5-2-1-2.7c0.5-1.1,1.1-1.7,1.8-1.7c0.1,0.1,0.3,0.1,0.4,0.2\n                c0.8,0.5,1.7,1.8,2.1,3c-0.1,0.1-0.1,0.1-0.2,0.2c-0.3,0.4-0.4,0.9,0,1.3c0.3,0.4,0.8,0.9,1.4,0.9c0.3,0,0.7-0.2,0.9-0.4\n                c0.2-0.3,0.3-0.7,0.2-1.2c0.5-0.3,1-0.6,1.5-0.9C47.2,80.9,47.7,80.6,48.1,80.3z M1.4,73.3c0.1-0.4-0.2-0.8-0.5-1L0,71.9v2.3\n                c0.2,0,0.4,0,0.6-0.1C1,74.1,1.3,73.7,1.4,73.3z M17.2,117.5c-0.2-0.4-0.8-0.6-1.2-0.4l-5.2,2.1c-0.2,0.1-0.4,0.3-0.5,0.5\n                c-0.1,0.2-0.1,0.5,0,0.8l0.4,1.1L9,123c-0.4,0.3-0.5,0.8-0.2,1.3c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.2,0,0.4-0.1l2.6-1\n                c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.1-0.5,0-0.8l-0.1-0.2l3.9-3.4C17.4,118.4,17.4,117.9,17.2,117.5z M27.6,71.7\n                c-0.2,0.1-0.3,0.1-0.4,0.1c-0.6,0-1.1-0.5-1.8-1.2c-0.3-0.3-0.5-0.5-0.8-0.7c-0.3-0.2-0.7-0.3-1-0.1C23.3,70,23,70.3,23,70.7V76\n                c-0.2,0.2-0.4,0.5-0.6,0.7c-0.3,0.3-0.6,0.7-0.9,1c-1,1.2-1.9,2.2-3.1,1.9c-0.3-0.1-0.6,0-0.9,0.2c-0.2,0.2-0.4,0.5-0.4,0.8v2\n                c0,0.4,0.2,0.7,0.5,0.9c-0.4-0.2-0.8-0.1-1.1,0.2l-0.9,0.9c-0.2,0.2-0.3,0.5-0.3,0.7c0,0.3,0.2,0.5,0.4,0.7l4.7,3.8\n                c0.4,0.3,1,0.3,1.3-0.1l0.5-0.5l2.7,0.8c0.1,0,0.2,0,0.3,0c0.4,0,0.7-0.2,0.9-0.6c0.2-0.5,0-1-0.4-1.2l-7.9-4.8\n                c0.1,0,0.2,0.1,0.3,0.1h3.9c0.5,0,1-0.4,1-1l0-2c0-0.9,0.2-1.7,0.9-2.5c0.2-0.2,0.4-0.4,0.7-0.6c0.2-0.1,0.3-0.3,0.4-0.6\n                c0.4-0.4,0.8-0.7,1.2-1.1c0.9-0.8,1.8-1.6,2.5-2.5c0.3-0.3,0.3-0.8,0-1.2C28.5,71.8,28,71.6,27.6,71.7z M32.6,65.4\n                c0.3-0.4,0.3-0.9,0-1.3c-0.3-0.4-0.9-0.4-1.3-0.2c-1.7,1.1-2.5,2.3-2.5,3.7c-0.1,0.5,0,0.9,0.2,1.4c0,0.1,0.1,0.3,0.2,0.4\n                c0.3,0.6,0.6,1.2,1,1.8c0.2,0.4,0.5,0.8,0.7,1.2c-0.1,0.3,0,0.7,0.3,0.9l0.2,0.2c0.2,0.9,0.1,1.7-0.4,2.6c-0.2,0.4-0.1,1,0.3,1.3\n                c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.5-0.1,0.7-0.3l2-2c0.4-0.4,0.4-1,0-1.4l-1.3-1.3l1.2-1.2c0.8-0.4,1.4-1,1.8-1.8l0.1-0.1\n                c0.7-0.1,1.3,0.4,2,1.1c0.3,0.3,0.5,0.5,0.8,0.7c0.4,0.3,1,0.3,1.3-0.1l1.4-1.4c0.4-0.4,0.4-1,0-1.4l-3.2-3.3c0.2-0.3,0.2-0.6,0.1-1\n                c-0.2-0.4-0.5-0.6-0.9-0.6h-2c-0.5,0-1,0.4-1,1l0,0.8c0,0.3,0,0.6,0,0.9c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0.7-0.1,1.3-0.3,1.7\n                l-1.2,1.2c-0.1,0-0.2,0-0.2,0c-0.6,0-1.1-0.5-1.8-1.2c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.2-0.1-0.3-0.1-0.5c0.1-0.5,0.6-1,1.1-1.6\n                C32.2,65.9,32.4,65.7,32.6,65.4z M14,62.8c-0.3-0.1-0.6-0.1-0.9,0.1c-0.3,0.2-0.4,0.5-0.4,0.8v2c0,0,0,0,0,0v2c0,0.5,0.4,1,1,1h2\n                c0.4,0,0.8-0.2,0.9-0.6c0.2-0.4,0.1-0.8-0.2-1.1l-1.3-1.3l3.2-3.3c0,0,0,0,0,0l2-2c0.4-0.4,0.4-1,0-1.4L19,57.8l1.3-1.3\n                c0.2-0.2,0.3-0.6,0.3-0.9c-0.1-0.3-0.3-0.6-0.6-0.7c-0.4-0.1-0.7-0.2-1.1-0.2c-1.4,0-2.4,0.9-3.1,1.7c-0.2,0.2-0.4,0.4-0.7,0.6\n                c-0.4,0.3-0.5,1-0.1,1.4c0.2,0.3,0.5,0.5,0.7,0.8c0.8,0.9,1.2,1.4,1.1,2c-0.2,0.2-0.4,0.3-0.5,0.5C15.4,62.5,14.8,63.1,14,62.8z\n                 M30.2,90.9c1.3-0.3,2.6-0.7,3.7-1.3c0.8,0,2-0.1,2-1.2c0-1.1-1.2-1.1-1.9-1.1c-0.3,0-0.5,0.1-0.6,0.2c0,0,0,0-0.1,0\n                c-1.1,0-2.1-0.2-2.8-0.6c-0.3-1-0.9-1.7-1.9-2.1c-0.3-0.1-0.7-0.1-1,0.1c-0.3,0.2-0.4,0.6-0.3,1c0.2,0.9,0.7,1.6,1.5,2.2\n                c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.1,0,0.2c-1.7,0.5-3.4,1.1-4.4,2.4l-3.1,1.6l-0.1-1.3c0,0,0,0,0,0c0-0.2-0.1-0.4-0.3-0.6v0l0,0\n                c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.2c0,0,0,0,0,0c0,0,0,0,0,0C20.5,91,20.4,91,20.2,91c-0.6,0-1.2,0.1-1.8,0.1\n                c-1,0.1-2,0.1-2.8,0.1l-0.3-4.5c0-0.4-0.3-0.7-0.7-0.9c-0.4-0.1-0.8,0-1.1,0.3L11,89c-0.3,0.3-0.3,0.8-0.1,1.2\n                c0.7,1.2,1.7,2.1,2.9,2.5c0.2,0.4,0.5,0.6,1,0.6l4.6-0.3l0.1,1.8c0,0,0,0,0,0.1c0.1,0.5,0.5,0.9,1,0.9c0,0,0,0,0,0l0.2,0\n                c0.3,0,0.6,0,0.8,0c0.3,0,0.5,0,0.8,0c0.9,0,1.3,0.2,1.6,0.7c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.2,0,0.4-0.1c0.5-0.2,0.7-0.7,0.6-1.1\n                c-0.2-1.1-0.2-1.9,0.1-2.5L30.2,90.9z M59.3,46.8c0,0.3,0.1,0.6,0.3,0.8l2,2c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.4,0,0.5-0.1\n                c0.4-0.2,0.6-0.7,0.4-1.2c-0.3-0.8,0.1-1.2,1.1-2.2c0.1-0.1,0.2-0.2,0.3-0.3c0.5,0.1,1.1,0.3,1.7,0.4c0.2,0.1,0.3,0.3,0.5,0.5\n                c0.3,0.3,0.5,0.5,0.8,0.7c0.4,0.3,1,0.3,1.3-0.1l0.3-0.3c0.5,0.1,1,0.3,1.6,0.4c0.8,0.9,1.8,1.4,2.8,1.4c1.2,0,2.3-0.6,3.3-1.2\n                c1.5-0.4,2.7-1.1,3.8-2.2c0.3-0.3,0.4-0.8,0.1-1.2s-0.7-0.6-1.1-0.4c-1.2,0.4-2.2,1-3.2,1.7L76,45.9c-1.2,0.2-2.6,0.2-4.3-0.1\n                c-0.3-0.4-0.5-0.8-0.8-1.4c-0.1-0.3-0.4-0.5-0.7-0.5c-0.3-0.1-0.6,0.1-0.9,0.3L68.5,45c-0.4-0.1-0.7-0.2-1.1-0.3l-0.3-0.1\n                c-0.7-0.5-1.8-1.1-3.1-0.8c-0.6-0.1-1.1-0.2-1.5-0.2C60.6,43.7,59.5,44.8,59.3,46.8z M93.1,58.2c-3.1,0-3.6,2.8-3.9,4.8\n                c-0.2,1-0.3,1.8-0.6,2.4L87,66.6c-0.2,0-0.3,0-0.6,0c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1c3.7,0,4.2-3.1,4.6-5.3l4.5-3.6\n                c-0.6-0.2-1.1-0.3-1.6-0.4c0,0,0-0.1,0-0.1C94.1,58.6,93.6,58.2,93.1,58.2z M63.8,35.6c-0.2,0.3-0.3,0.8,0,1.1\n                c0.1,0.2,0.3,0.4,0.4,0.6c1.1,1.6,1.7,2.6,0.8,4.1c-0.2,0.4-0.2,0.9,0.2,1.2c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.4-0.1,0.6-0.2l1.7-1.3\n                c0.3-0.2,0.4-0.6,0.4-0.9c-0.2-2.3-1.1-3.9-2.4-5c-0.1-0.1-0.2-0.1-0.3-0.2l-0.9-0.3C64.4,35.1,64,35.2,63.8,35.6z M104.6,81\n                c0.5,0.1,1-0.1,1.2-0.6c0.2-0.5,0-1-0.5-1.2c-1.3-0.7-1.7-1.7-2.1-2.9c-0.1-0.4-0.3-0.7-0.4-1c0,0,0-0.1-0.1-0.1\n                c0-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.3-0.2-0.4-0.3c0,0-0.1,0-0.1,0l-2.4-0.4l-1.8-5c-0.1-0.3-0.4-0.6-0.7-0.6\n                c-0.9-1.3-2.1-2.3-3.7-3.1c-0.4-0.2-0.9-0.1-1.2,0.2l-2,2.3c-0.2,0.3-0.3,0.6-0.2,1c0.1,0.3,0.4,0.6,0.8,0.6l5.2,0.8\n                c0.6,1,1,2.1,1.4,3.2c0.2,0.6,0.4,1.2,0.7,1.8c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0v0\n                c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0l0,0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0v0c0,0,0,0,0,0v0\n                c0,0,0,0,0,0v0c0,0,0,0,0,0v0c0,0,0,0,0,0v0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0\n                c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0.1,0.1,0.2,0.1,0.4,0.2\n                c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0h0\n                c0,0,0,0,0,0h0l0,0h0h0c0,0,0,0,0,0h0l0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0,0,0,0,0,0c0,0,0,0,0,0l2.1,0.3l-0.3,3.1c-0.9,0.9-0.9,2.4-0.7,3.8c-0.3,0-0.6-0.1-0.8-0.2c-0.9-0.8-1.8-1.4-2.8-1.7\n                c-0.4-0.1-0.9,0.1-1.1,0.4c-0.2,0.4-0.2,0.8,0.1,1.2c0.7,0.9,1.6,1.5,2.7,1.8c1,1.1,1.7,2.5,2.1,3.2c-0.1,0.2-0.1,0.5,0,0.7\n                c0.4,0.8,0.7,1.5,1.4,1.5c0.3,0,0.7-0.2,0.8-0.5c0.2-0.4,0.3-0.7-0.2-1.9c0.2-1,0-2.3-0.2-3.5l0.4-3.8\n                C102.8,80.6,103.6,80.7,104.6,81z M69.4,36.4l0.9,5.2c0.1,0.3,0.3,0.6,0.6,0.8c0.1,0,0.2,0.1,0.4,0.1c0.2,0,0.4-0.1,0.6-0.2\n                c2.7-2.1,0.6-5.1-0.6-6.6L69.7,27c-0.1-0.3-0.3-0.6-0.5-0.7c-0.3-0.1-0.6-0.1-0.9,0C66.8,27,66,28,65.7,29.2c-0.4,2.2,1.3,4.3,3,6.4\n                C68.9,35.9,69.1,36.1,69.4,36.4z M81.3,96.7c0.6,0,0.8-0.4,1-0.8c0-0.1,0.1-0.2,0.1-0.3c1.3-2.9,2.1-5.6,2.2-7.7\n                c0.5-2.4-0.2-4.2-2.2-5.4c0,0,0,0,0,0c-0.5-0.3-1.1-0.1-1.3,0.3c-0.1,0.2-0.1,0.3-0.1,0.5c0,0.3,0.2,0.7,0.5,0.9c0,0,0.1,0,0.1,0.1\n                c0.4,0.3,1.3,1,1.1,3.3c-0.2,0.9-0.6,1.8-1,2.7c-0.6,1.6-1.3,3.2-1.3,4.8c-0.1,0.3-0.2,0.7,0,1.1C80.7,96.5,81,96.7,81.3,96.7z\n                 M91.2,76.1c-0.2-0.4-0.7-0.6-1.1-0.5c-6,1.4-10.1,3-12.1,3.8c-0.3-0.1-0.6,0-0.9,0.1c-0.5,0.4-1.1,0.8-0.9,1.5\n                c0.1,0.4,0.5,0.7,1,0.7c0.2,0,0.4,0,0.8-0.2c0.7,0.2,1.3,0.4,2,0.4c2,0,3.5-1.1,4.6-2c0.5-0.4,1.1-0.8,1.4-0.8c0,0,0.3,0.1,0.9,1.4\n                c0.2,0.5,0.7,0.7,1.2,0.6c0.5-0.1,0.8-0.6,0.7-1.1c-0.1-0.8,0.3-1.2,1.4-2c0.3-0.2,0.6-0.4,0.8-0.6C91.3,77,91.4,76.5,91.2,76.1z\n                 M87.5,90.4c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.8-0.3,0.9-0.7l2-5.9c0.2-0.5-0.1-1-0.6-1.2c-0.5-0.2-1,0-1.3,0.5l-1.4,2.7l-1-1\n                c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1-0.1,1.4c0.2,0.3,0.5,0.5,0.7,0.8c1,1,1.3,1.5,1.1,2.2C86.7,89.6,86.9,90.2,87.5,90.4z\n                 M81.2,86.8c0-0.3-0.2-0.5-0.4-0.7l-1-0.8c-0.2-0.1-0.4-0.2-0.6-0.2l-2-0.1c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.4-0.3,0.7l-0.1,2\n                c0,0.5,0.4,1,0.9,1l2,0.1c0,0,0,0,0,0c0.3,0,0.6-0.1,0.7-0.3l1.1-1.2C81.1,87.3,81.2,87.1,81.2,86.8z M78.2,75.8\n                c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4,0c1.5,0.2,2.8,0.6,3.2,0.7c0.3,0.1,0.4,0.2,0.6,0.2c0.5,0,0.9-0.4,1-0.8\n                c0.1-0.7-0.3-0.9-0.7-1.1l0,0l-0.1,0c-0.1,0-0.1-0.1-0.2-0.1l-0.1,0v-2.1c0-0.5-0.3-0.9-0.8-1L79,71.2c-0.3-0.1-0.6,0-0.8,0.2\n                s-0.3,0.5-0.3,0.8v1.6c-2.3-0.3-4.3,0.4-6.1,1c-0.5,0.2-1.1,0.4-1.6,0.5c-0.5,0.1-0.8,0.7-0.7,1.2c0.1,0.5,0.6,0.8,1.1,0.8L72,77\n                c-0.1,0.6-0.1,1.3,0.1,2c-0.6,0.4-1,0.8-0.8,1.4c0.1,0.4,0.5,0.7,1,0.7c0.7,0,2.9-1.4,3.6-3c0.4-0.8,0.4-1.6,0.1-2.3\n                C76.5,75.7,77.4,75.7,78.2,75.8z M36.5,88.1c0.1,0.2,0.4,0.4,0.6,0.4l0.4,0.1c2,1.5,3.8,2.7,5.2,3.6c0.6,0.4,1.2,0.8,1.9,1.1\n                c0.1,0.1,0.3,0.1,0.4,0.1c0.4,0,0.7-0.2,0.9-0.5c0.2-0.5,0.1-1-0.4-1.3c-0.5-0.3-1-0.6-1.6-1c-0.8-0.6-1.3-1.3-1.8-2.1\n                c-0.2-0.3-0.5-0.7-0.7-1c-0.1-0.2-0.4-0.3-0.6-0.4l-2.5-0.4l-0.8-0.6l-3.1-4.4c-0.1-0.2-0.4-0.4-0.6-0.4l-2.9-0.5l-1.6-2.3\n                C29,78.2,28.7,78,28.4,78c-0.3,0-0.6,0.1-0.8,0.4l-0.1,0.2c-0.5-0.2-1.1,0.1-1.3,0.6c-0.3,0.7,0.1,1,0.8,1.6\n                c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0.3,1,0.8,1.7,1.3c1.8,1.4,4.3,3.3,6.8,5.2L36.5,88.1z M12.7,115.6c0.1,0.3,0.2,0.5,0.5,0.6\n                c0.5,0.3,0.7,0.3,1,0.3c0.4,0,0.8-0.3,0.9-0.7c0.1-0.2,0.1-0.4,0-0.5l0.5-0.4c0.3-0.2,0.4-0.6,0.3-1c-0.1-0.4-0.4-0.7-0.8-0.7\n                l-2-0.3V111c0-0.5-0.3-0.9-0.8-1l-4.6-0.8L7.6,109v-1.8c0-0.5-0.3-0.8-0.7-1c-0.3-0.1-0.7-0.2-1.1-0.2c-0.7-0.1-1.4-0.3-1.9-0.6\n                c-0.3-0.3-0.5-0.6-0.7-0.9c-0.3-0.4-0.9-0.5-1.3-0.3c-0.4,0.3-0.6,0.8-0.4,1.3c0.3,0.6,0.6,1,1.1,1.4c0.8,0.9,1.8,1.9,3,3v0.1\n                c0,0.5,0.3,0.9,0.8,1l0.5,0.1c1.7,1.5,3.5,2.8,4.8,3.8C12.1,115.2,12.4,115.4,12.7,115.6z M20.1,98.3c-0.5,0.2-1.1,0.3-1.7,0.4\n                c-2.2,0.5-5,1.1-5.9,3.5c-0.4,0.4-0.7,0.9-0.9,1.4l-0.9-0.2c-0.4-0.1-0.8,0.1-1,0.5c-0.2,0.4-0.2,0.8,0.1,1.1l1.4,1.6\n                c0.2,0.2,0.5,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0c0.4-0.1,0.6-0.4,0.7-0.8c0-0.1,0-0.2,0.1-0.3l0.2,0c0.3,0.1,0.6-0.1,0.9-0.3\n                c0.2-0.2,0.3-0.6,0.3-0.9c-0.1-0.6-0.1-1.1,0-1.5c1.3-1.2,3.3-1.4,5.7-0.3c0.3,0.1,0.7,0.1,0.9-0.1c0.3-0.2,0.4-0.5,0.4-0.8v-2.8\n                c0-0.3-0.1-0.6-0.4-0.8S20.4,98.2,20.1,98.3z M17.3,104.1c-0.3-0.3-0.8-0.3-1.2,0c-1.4,1-2.6,5.4-2.3,6.4c0.1,0.4,0.6,0.8,1,0.8\n                c0.6,0,1-0.5,1.3-1.1l1.2-0.1l0.1,1.7c0,1,0,2,0.1,3.1c0.1,0.5,0.5,0.8,1,0.8c0,0,0.1,0,0.1,0c0.5-0.1,0.9-0.5,0.9-1l-0.1-2.9l0-0.4\n                C19.4,108.8,19.5,105.9,17.3,104.1z M2.5,117.2c0.7,0.1,1,0.4,1.1,1.1c0.1,0.3,0.3,0.6,0.6,0.8c0.3,0.1,0.7,0.1,1-0.2l2.8-2.3\n                c0.3-0.2,0.4-0.6,0.3-1c-0.1-0.4-0.4-0.7-0.8-0.7c-1-0.2-2.4-0.1-3.6,0.1c-0.5,0.1-1,0.1-1.5,0.2c-0.4-0.1-0.9-0.1-1.4,0\n                c-0.4-0.1-0.8-0.2-1.2-0.4v2.6c0.4-0.1,0.8-0.2,1.1-0.2C1.6,117.3,2,117.3,2.5,117.2z M11.9,61.2c-1.1,0.6-2.2,1.1-3.4,1.3\n                c-2.7-1.3-5.9-1.4-8.5-1.4v2.5c2.5,0.8,5.5,1.4,8.2,1C8.5,64.8,8.7,65,9,65.2c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2\n                l2.8-2.3c0.4-0.3,0.5-0.9,0.2-1.3C12.9,61.1,12.3,61,11.9,61.2z M25.1,65.8l-2.3,0.2c-0.2-0.5-0.3-1.1-0.4-1.5\n                c-0.1-0.5-0.2-1.3-1.1-1.3c-0.9,0-1,0.3-1.3,2.6l-1.2,0.6c-0.4,0.2-0.6,0.7-0.5,1.2c0.1,0.5,0.6,0.8,1,0.7l2.4-0.2\n                c0.5,0.5,1.1,0.6,1.5,0.6c0.8,0,1.6-0.4,2.5-1.1c0.3-0.3,0.4-0.7,0.3-1.1C25.9,66,25.5,65.7,25.1,65.8z M59.1,72.6l4.6,4.3l0.1,2.8\n                c0,0.3,0.2,0.6,0.4,0.8c0.2,0.1,0.4,0.2,0.5,0.2c0.1,0,0.2,0,0.3-0.1l1.2-0.5c0.3-0.1,0.5-0.3,0.6-0.6s0.1-0.5,0-0.8l-1.3-2.7\n                c0,0,0,0,0-0.1l-1.3-2.7c-0.2-0.3-0.5-0.6-0.9-0.6c-0.3,0-0.6,0.1-0.8,0.3c-0.4-0.2-1-0.8-1.4-1.1c-0.3-0.2-0.5-0.5-0.8-0.7\n                c-1-1.6-1-2.8-1.1-4.2c0-0.4,0-0.8-0.1-1.2c0-0.3-0.2-0.5-0.4-0.7c-0.3-0.2-0.6-0.5-0.8-0.7c-1-0.9-1.9-1.7-2.9-1.7\n                c-0.6,0-1.1,0.3-1.4,0.9c-0.2,0.4-0.1,0.9,0.2,1.2l2.2,2l0.1,2.8c0,0.3,0.1,0.5,0.3,0.7L59.1,72.6C59.1,72.5,59.1,72.6,59.1,72.6z\n                 M34,50.2c-0.2,0.2-0.3,0.5-0.2,0.8c0,0.3,0.2,0.5,0.4,0.7l5.9,4c0.2,0.1,0.4,0.2,0.5,0.2c0.3,0,0.5-0.1,0.7-0.3\n                c0.3-0.3,0.4-0.9,0.1-1.3c-0.5-0.8-1.2-1.4-1.9-2c-1.3-1.1-2.1-1.8-1.9-2.9c0.2-0.2,0.4-0.3,0.5-0.5c0.1-0.1,0.2-0.2,0.3-0.3\n                c1,0.3,1.9,0.4,2.8,0.4c0.5,0.6,0.6,1,0.4,1.5c-0.1,0.4,0,0.8,0.3,1.1c0.3,0.3,0.8,0.3,1.1,0.1c1.3-0.8,2.3-2,3.2-3.2\n                c0.8-1,1.6-2,2.5-2.5l0.4-0.2c0.9-0.4,1.7-0.4,2.8,0.1c0.4,0.2,0.8,0.1,1.1-0.2l2-2c0.3-0.3,0.4-0.7,0.2-1.1c-0.2-0.4-0.6-0.6-1-0.6\n                c-2.6,0.3-4.5,1.2-6,2.1c-0.2,0.1-0.4,0.2-0.5,0.3l-0.9,0.6c-1.6,1-3,1.9-4.7,2.1l0,0c-0.2-0.2-0.4-0.4-0.6-0.7\n                c-0.1-0.1-0.3-0.2-0.4-0.3c-1.1-0.4-2.2,0-2.9,0.4c-0.3-0.1-0.6-0.2-0.9-0.4c-0.4-0.2-0.8-0.1-1.1,0.2c-0.3,0.3-0.4,0.7-0.3,1\n                c0.3,0.8-0.1,1.2-1.1,2.2C34.4,49.6,34.2,49.9,34,50.2z M0,95.1v1.2l0,0C0.3,95.9,0.3,95.4,0,95.1z M56,79.5c0.1,0,0.2,0.1,0.3,0.1\n                c0.2,0,0.5-0.1,0.6-0.2c0.3-0.2,0.4-0.6,0.3-0.9c-0.6-2.7-2.2-3.6-3.6-4.4c-0.5-0.2-0.9-0.5-1.2-0.8c-0.3-0.7-0.7-1.4-1-2.2\n                c0.1-0.1,0.2-0.2,0.4-0.4c0.8-0.8,1.4-1.4,2.2-1.1c0.4,0.1,0.9,0,1.1-0.4c0.2-0.4,0.2-0.9-0.1-1.2l-2-2c-0.3-0.3-0.8-0.4-1.2-0.1\n                c-0.4,0.2-0.6,0.7-0.4,1.2c0.2,0.7-0.1,1.2-0.9,2c-1.2-2.6-2.7-5.1-5.5-6.5l2-1c1.1-0.3,2.3-0.7,3.2-1.4c0,0,0,0,0,0\n                c0.2,0.2,0.3,0.3,0.5,0.5l0.6,2.3c0.1,0.4,0.5,0.7,0.9,0.7c0.5,0,0.8-0.3,1-0.7c0.5-1.5-0.1-2.5-0.7-3.3l-0.8-3.2\n                c-0.1-0.6-0.2-1.3-0.5-2.1c-0.2-0.5-0.7-0.8-1.2-0.6c-0.5,0.2-0.8,0.7-0.7,1.2l0.5,1.9c0,0.6-0.1,0.9-0.2,1.1l-3.3,1.7\n                c0,0,0,0-0.1,0c-1.7,0.5-3.5,1-4.6,2.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0,0,0,0,0c0,0.1,0,0.2,0,0.3\n                c0,0.2,0.1,0.3,0.1,0.5c0,0,0,0,0,0c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0c0,0,0,0,0,0l7.4,7.4l0.2,0.5c0.1,1.3,0.6,2.3,1.4,3.1\n                C51.8,76.3,53.2,78.5,56,79.5z M43.3,58.7c0.2,0.1,0.4,0.2,0.5,0.2c0.3,0,0.6-0.1,0.7-0.3l6-7.1c0.3-0.4,0.3-0.9,0-1.2l-0.8-1\n                c-0.2-0.2-0.4-0.4-0.7-0.4c-0.3,0-0.5,0.1-0.7,0.2l-4.5,4.1c-0.4,0.3-0.4,0.9-0.1,1.3l0.4,0.5L43,57.5\n                C42.8,57.9,42.9,58.5,43.3,58.7z M19.8,75.6c0.1,0,0.2,0,0.2,0c0.3,0,0.7-0.2,0.9-0.5c0.2-0.4,0.2-0.9-0.2-1.2l-3.9-4\n                c-0.3-0.3-0.8-0.4-1.1-0.2l-3.9,2c-0.4,0.2-0.6,0.6-0.5,1c0,0.4,0.3,0.8,0.7,0.9L19.8,75.6z M0,65.2v5L1.4,71\n                c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.3c0.3-0.3,0.4-0.8,0.1-1.2L0,65.2z M6.3,76.6c0-0.5-0.2-0.9-0.7-1l-2.1-0.7\n                c-0.2-0.1-0.4-0.1-0.6,0c-0.2-0.1-0.5-0.1-0.7,0l-2.2,1v3.9l1.1-0.1c0.5-0.1,0.9-0.5,0.9-1l0-0.4l0.4-0.6l3-0.3\n                C5.9,77.4,6.2,77.1,6.3,76.6z M1,94.2c1.4,0.2,2.2,0.4,2.4,0.4c0,0,0,0,0.1,0c0.1,0,0.2,0,0.2,0c0.5,0,0.9-0.4,1-0.9\n                c0-0.5-0.4-1-0.9-1.1c-0.2,0-0.9-0.2-1.7-0.5v-4.5c0-0.4-0.2-0.7-0.6-0.9c-0.3-0.2-0.7-0.1-1,0.1c-0.2,0.1-0.3,0.3-0.5,0.4v6\n                c0.1,0,0.1,0.1,0.2,0.1C0.3,93.9,0.6,94.2,1,94.2z M4.8,83.2c0.3-0.5,0.2-1.1-0.3-1.4c-0.2-0.2-0.5-0.3-0.7-0.4\n                c-1.4-0.8-2.5-1.2-3.5-1.2c-0.1,0-0.2,0-0.3,0v2.6c0.8-0.4,1.8-0.3,2.9,0.3c0.2,0.1,0.4,0.2,0.6,0.3C3.9,83.8,4.5,83.7,4.8,83.2z\n                 M9.9,99.1c0.1,0,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.6-0.2l2.8-2.3c0.3-0.2,0.4-0.6,0.3-1c-0.1-0.4-0.4-0.7-0.8-0.7l-2-0.4\n                c0-0.1,0-0.1,0-0.2c0-1.3,0-3-1.8-4.2c-0.3-0.2-0.8-0.2-1.1,0c-0.3,0.2-0.5,0.6-0.4,1l1.4,7.1C9.4,98.7,9.6,99,9.9,99.1z M13.7,83.9\n                c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.3,0,0.5-0.1l1.6-0.9c0.3-0.2,0.5-0.4,0.5-0.8c0-0.3-0.1-0.6-0.3-0.8c-0.8-0.7-0.7-1.4-0.6-2.7\n                c0-0.4,0.1-0.7,0.1-1.1c0-0.4-0.3-0.9-0.7-1l-2.4-0.8c-0.5-0.5-1.3-0.9-2.2-1l0.2-1.6c0.1-0.5-0.2-0.9-0.7-1.1l-1.9-0.6\n                c-0.3-0.1-0.6-0.1-0.8,0.1c-0.1,0-0.1,0.1-0.2,0.1l-1.6-4.7c-0.1-0.6-0.3-1.1-0.5-1.6c-0.2-0.5-0.8-0.7-1.3-0.5\n                c-0.5,0.2-0.7,0.7-0.6,1.2l0.5,1.4c0.2,0.8,0.2,1.7,0.2,2.5c0.1,2.1,0.1,4.4,2.6,5.8l0.4,1.2c0.1,0.3,0.3,0.5,0.6,0.6\n                c0.3,0.1,0.6,0.1,0.8-0.1L9.7,77l2,0.7c0.3,0.6,0.4,1.4,0.5,2.3c0.1,0.9,0.2,2,0.7,2.9c-0.3-0.1-0.5,0-0.8,0.1l-1.1,0.7\n                c-1.5,1-3,1.9-4.4,2.5v0c0,0-0.1-0.1-0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.4c1.4-1.7,2.5-3.2,2.3-4.5c-0.1-0.4-0.3-0.9-1-1.2\n                c-0.5-0.2-1.1-0.1-1.3,0.4l-3.4,6.6c0,0,0,0,0,0c-0.1,0.2-0.1,0.5-0.1,0.7c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0\n                c0.1,0.2,0.2,0.3,0.4,0.5c0,0,0.1,0,0.1,0.1c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.5,0.1,0.8,0c0.1,0.2,0.1,0.4,0.3,0.5\n                c0.2,0.3,0.6,0.4,1,0.4c0.8,0,1.9-0.4,7-5C13.6,84.4,13.7,84.1,13.7,83.9z M3.7,101.7c0.9,0,2,0.3,3.2,0.8c0.5,0.2,1.1,0,1.3-0.5\n                c0.2-0.5,0-1.1-0.5-1.3c-0.7-0.4-1.3-0.8-1.6-1.2c0.3-0.9,0.4-1.9,0.2-3.1c0.3-0.4,0.5-0.8,0.3-1.3c-0.2-0.4-0.5-0.6-0.9-0.6\n                c-0.5,0-0.8,0.3-1.2,1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.6,1.2-0.8,2.5-0.5,3.6c-0.1,0.1-0.3,0.3-0.5,0.4c-0.5,0-1,0.1-1.5,0.2\n                c-0.5,0-1.2-0.1-1.8-0.3v3.9c0.7-0.8,1.3-1.3,2.1-1.6C2.7,101.9,3.2,101.9,3.7,101.7z M2.4,108.5c0-0.9-0.6-1.2-2.4-1.3v2.3\n                c0.4,0,0.7,0.1,1,0.1C2.2,109.5,2.4,108.8,2.4,108.5z M118.5,71.3c0.2,0.2,0.5,0.3,0.7,0.3c0.4,0.4,0.8,0.9,1.1,1.5\n                c0.2,0.3,0.5,0.5,0.9,0.5c0.1,0,0.2,0,0.3,0c0.4-0.1,0.7-0.5,0.7-1v-4c0-0.4-0.2-0.8-0.6-0.9c-0.4-0.2-0.8-0.1-1.1,0.2l-1.2,1.2\n                c-0.2-0.1-0.4-0.2-0.5-0.3l-0.8-0.9c-0.1-0.1-0.2-0.2-0.4-0.2c-1-0.3-1.9-0.2-2.9,0.4c-0.6,0.1-1.3,0.3-1.9,0.5c0,0-0.1,0-0.1,0\n                l-0.7-0.7c-0.3-0.3-0.7-0.4-1.1-0.2c0,0,0,0,0,0c-0.5-0.4-1-0.7-1.7-1.1c0-0.4,0-0.9,0.2-1.5c0.1-0.4-0.1-0.9-0.4-1.1\n                c-0.4-0.2-0.8-0.2-1.2,0.1c-0.5,0.5-1.2,0.7-2,0.7c-0.2,0-0.4,0-0.6,0l-0.7-0.2l-2.7-0.5c-0.7-0.2-1.3-0.3-1.8-0.4l-0.3-2\n                c-0.1-0.5-0.5-0.9-1-0.8c-0.5,0-0.9,0.5-0.9,1v2.8c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2l1.4,7.1c0.1,0.5,0.6,0.9,1.1,0.8\n                c0.5-0.1,0.9-0.6,0.8-1.1l-0.8-5.7l1.6,0.3c1,0.2,2,0.5,2.9,0.6c0.1,0,0.3,0.1,0.4,0.2c0,0-0.1,0-0.1,0.1c-2.6,1.7-1.3,4.3-0.4,6.2\n                c1.1,2.3,1.3,3.1,0.4,3.7c-0.4,0.3-0.5,0.8-0.3,1.2c0.2,0.3,0.5,0.5,0.9,0.5c0.1,0,0.2,0,0.3-0.1c1.5-0.5,2.5-0.8,3.3-0.2\n                c0.3,0.3,0.8,0.3,1.2,0.1c0.4-0.3,0.5-0.7,0.4-1.1c-0.6-1.7-1.8-3.1-2.9-4.4c-1.9-2.2-2.6-3.3-1.6-4.5c0.2-0.3,0.3-0.7,0.2-1\n                c0.4,0.2,0.8,0.4,1.2,0.6c0.5,1.2,1.6,1.8,2.7,2.1v0.6c0,0.4,0.2,0.7,0.5,0.9c0.2,0.1,0.5,0.1,0.8,0c0.1,0.3,0.2,0.6,0.1,0.9\n                c0,0.3,0.1,0.5,0.2,0.7c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.6,0.1,0.9,0.1c0.5,0.1,1.1,0.2,1.6,0.2c1.2,0,2.1-0.5,2.7-1.4\n                c0.2-0.3,0.2-0.7,0-1c-0.3-0.4-0.6-0.8-1-1.1c0.2,0.1,0.5,0.1,0.7,0.2L118.5,71.3z M0,2.4c0.2-0.1,0.4-0.2,0.5-0.4l0.6-1.1\n                c0.1-0.2,0.2-0.5,0.1-0.8c0,0,0,0,0-0.1H0V2.4z M7.5,27.9c-0.2-0.6-0.4-1.2-0.6-1.8c0,0,0,0,0,0c-0.2-2.1-0.1-2.9,0.8-3.2\n                c0.4-0.2,0.7-0.6,0.6-1S8,21,7.6,21l-1.9-0.3c-0.1-0.4-0.1-0.9-0.1-1.2v-0.7c0-0.5-0.4-1-1-1c-0.6,0-1,0.4-1,0.9c0,0.2,0,0.5,0,0.8\n                v2c0,0.3,0.1,0.6,0.4,0.8C4.2,23.5,4.6,25,5,26.4c0.1,0.8,0.1,1.4,0,2c0,0.3,0,0.5,0.2,0.7c0.1,0.2,0.4,0.4,0.6,0.4l0.3,0\n                c0.1,0.3,0.3,0.7,0.4,1c0.1,0.3,0.3,0.5,0.6,0.6c0.8,0.3,1.5,0.4,2.1,0.4c0,0,0,0,0,0c1,0,1.9-0.3,2.5-1c0.2,0,0.3-0.1,0.5-0.2\n                c0.2-0.2,0.4-0.4,0.4-0.7c0-0.3,0.1-0.7,0.1-1c0.3-1.2,0.3-2.7,0.3-4.1c0-1.3,0-2.5,0.2-3.2c0.1-0.2,0.3-0.3,0.4-0.4\n                c0.4-0.3,0.5-0.8,0.3-1.3c-0.2-0.4-0.7-0.7-1.2-0.5c-0.4,0.1-0.9,0.4-1.3,1.1c-1.2,1.6-1,3.9-0.9,6c0.1,0.7,0.1,1.4,0.1,2.1\n                c0,0,0,0,0,0L7.5,27.9z M2.4,8l-2-0.3c-0.1,0-0.3,0-0.4,0v5.7c0.1,0.2,0.3,0.4,0.6,0.4c0.3,0.1,0.6,0,0.8-0.2l1.1-0.9l2.1,0.4\n                c0.4,0.5,0.6,1.3,0.9,2.2c0.3,1.2,0.7,2.6,1.7,3.6c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.4-0.1,0.6-0.2l1.4-1.1c0.2-0.2,0.4-0.5,0.4-0.8\n                c0-0.3-0.2-0.6-0.4-0.8C9,15.7,8.9,15,8.9,13.7c0-0.4,0-0.7,0-1.1c0-0.4-0.4-0.8-0.8-0.9l-2.5-0.4c-0.6-0.4-1.4-0.7-2.3-0.7V9\n                C3.2,8.5,2.9,8.1,2.4,8z M46,135.9c0-0.1,0-0.1-0.1-0.2c0-0.1,0.1-0.2,0.1-0.4c0-0.2-0.1-0.3-0.2-0.5c0.4-0.1,0.7-0.4,0.7-0.8\n                l0.1-1.3c0.6,0,1,0.1,1.4,0.1l0.3,0.1c0.5,0.1,1.1-0.1,1.2-0.7c0.2-0.5-0.1-1.1-0.6-1.2c-0.1,0-0.2-0.1-0.4-0.1l-2.4-0.7\n                c-0.3-0.1-0.6,0-0.8,0.1c-0.2,0.1-0.3,0.2-0.3,0.4c-0.3,0-0.5,0-0.8,0l-0.4,0c-0.4-0.1-0.8-0.1-1.3-0.2c-0.9-0.2-1.9-0.8-2.4-3\n                c-0.1-0.3-0.4-0.6-0.7-0.7c-0.3-0.1-0.7,0-1,0.3l-5.1,5.2l-0.2,0.1c-0.6,0.2-1.3,0.3-1.9,0.5c-0.8-0.3-1.4-0.6-1.6-1.4\n                c-0.1-0.4-0.6-0.7-1-0.7c-0.5,0.1-0.8,0.4-0.9,0.9l-0.3,2.7c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.1,0,0.2,0\n                c0.8-0.1,1.7-0.3,2.6-0.6l0.2,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.4,0.1,0.8,0.1,1.1-0.2l1-1c2.9-0.8,5.7-1.5,7.9-1.5\n                c0.4,0.1,0.8,0.1,1.3,0.2c0.6,0.2,0.9,0.5,1,0.9l-0.9-0.7c-0.2-0.2-0.5-0.2-0.7-0.2c-0.3,0-0.5,0.2-0.7,0.4c-1.4,1.7-2,3.4-2.7,5\n                c-0.5,1.2-0.9,2.3-1.6,3.4l-0.1,0.2c0-0.3-0.1-0.6-0.4-0.8c-0.3-0.2-0.8-0.3-1.1,0l-1.7,1.1h6.2l4.8-5.3\n                C45.9,136.5,46,136.2,46,135.9z M63.1,125.3c-0.4-0.4-1-0.4-1.4-0.1l-7.2,6c-0.4,0.3-0.5,1-0.1,1.4c0.2,0.2,0.5,0.4,0.8,0.4\n                c0.2,0,0.4-0.1,0.6-0.2c0,0,0,0,0,0l0,0c1.5-1.2,2.7-1.4,4.1-1.7c0.4-0.1,0.8-0.1,1.2-0.2c0.5-0.1,0.9-0.6,0.8-1.1\n                c-0.1-0.5-0.6-0.9-1.1-0.8l-0.1,0l2.3-2.2C63.4,126.3,63.4,125.7,63.1,125.3z M47.1,30.6h-2c-0.1,0-0.2,0-0.3,0.1l-5.9,2\n                c-0.5,0.2-0.7,0.6-0.7,1.1c0.1,0.5,0.5,0.8,1,0.8h7.9c0.5,0,1-0.4,1-1v-2C48.1,31.1,47.6,30.6,47.1,30.6z M22.1,25.1\n                c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.2,0,0.3-0.1c0.6-0.2,1.2-0.4,1.7-0.6c2-0.6,4.1-1.3,5.8-2.9l0.7,0.7c0.2,0.5,0.3,1.1,0.3,1.7\n                c0,0.5,0.5,1,1,0.9c0.5,0,1-0.5,0.9-1.1c0-0.2,0-0.7,0-1.7c0-0.3-0.1-0.5-0.3-0.7l-0.3-0.3c-0.2-0.5-0.5-0.9-0.7-1.2\n                c0.4-0.4,0.8-0.8,1.1-1.2l3.8-3.9c0,0,0.1-0.1,0.1-0.2c0,0,0,0,0,0c0,0,0,0,0,0c0.1-0.1,0.1-0.3,0.2-0.4c0-0.1,0-0.2,0-0.4\n                c0-0.1,0-0.2-0.1-0.2c-0.3-0.6-0.7-1.1-1.2-1.5c0.5-0.4,0.9-0.9,1.2-1.5c0.2-0.4,0.1-1-0.3-1.2C36.9,9.6,36.3,9.7,36,10l-1.4,1.4\n                c-0.3,0.1-0.8,0.2-1.3,0.3c-0.3,0-0.6,0-0.8,0l-1.7,0c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1l1.7,0c0.3,0,0.6,0,0.8,0\n                c0.5,0,0.9,0.1,1.3,0.3l0.7,0.7c-0.9,0.8-1.7,1.7-2.5,2.6l-2.5,2.6c-1,0.9-2,1.5-3,1.7c-0.1-0.1-0.2-0.2-0.3-0.3\n                c-0.7-0.7-1.1-1.2-1.1-1.7c0.2-0.3,0.4-0.6,0.6-0.8c0.9-0.8,1.4-1.2,2.1-1c0.5,0.2,1-0.1,1.2-0.6c0.2-0.5,0-1-0.5-1.3\n                c-0.7-0.4-1.1-0.9-1.3-1.8c0.1-1.1,0.1-2.2-0.1-3.4c-0.1-0.5-0.5-0.9-1-0.8c-0.5,0-0.9,0.5-0.9,1l0,0.8c0,0.8,0,1.7,0.1,2.6\n                c-0.1,1.2-0.5,2.3-1.1,3.2c-0.2,0.2-0.4,0.4-0.6,0.6C24.1,18,24,18.1,24,18.3c0,0.1,0,0.1-0.1,0.2c-0.4,0.4-0.9,0.9-1.5,1.2\n                C22.1,20,22,20.2,22,20.5c0,0.3,0.1,0.6,0.3,0.8l1.3,1.3l-1.3,1.3C21.9,24.2,21.9,24.7,22.1,25.1z M37,18c0,0.3,0.2,0.5,0.3,0.7\n                c0.2,0.2,0.5,0.3,0.8,0.3c0.2,0,0.4,0,0.8-0.2l0.8,0.8l-1.2,1.2c-0.7,0.6-1.5,1.4-2.1,2.2c-0.3,0.4-0.3,1,0.1,1.3\n                c0.2,0.2,0.4,0.2,0.6,0.2c0.3,0,0.5-0.1,0.7-0.3l2-2l0.3-0.3c1.9-1.6,4-3.5,3.9-6.4c0-0.4-0.3-0.8-0.8-0.9c-0.2,0-0.3-0.1-0.5-0.1\n                C41.5,14.7,37,16.5,37,18z M24.9,49.1c-0.3-0.2-0.8-0.2-1.1,0l-1.5,1l-1-1.5c-0.1-0.2-0.4-0.4-0.6-0.4c-0.3,0-0.5,0-0.7,0.2L16.3,51\n                l-1.1-1.4c-0.3-0.4-0.9-0.5-1.3-0.3c-0.3,0.2-0.6,0.4-0.9,0.6c-0.6,0.4-1.1,0.7-1.6,0.8c-0.4-0.1-0.7-0.1-1-0.2\n                c-0.5-0.1-1,0.1-1.2,0.6c-0.2,0.5,0,1,0.4,1.3c0.5,0.3,1,0.4,1.5,0.4c0,0,0.1,0,0.1,0c1,0.2,2.3,0.3,3.8,0.3l0,0\n                c0.1,0.2,0.4,0.4,0.6,0.4c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2l0.4-0.3c2.1,0,4-0.1,5.5-0.2c0.4,0,0.7,0,1-0.1\n                c0.2,0.2,0.6,0.2,0.8,0.2c0.4-0.1,1.4-0.4,1.2-1.3c0-0.2-0.1-0.4-0.3-0.6l0.1-0.8C25.4,49.7,25.3,49.3,24.9,49.1z M51.5,27.7\n                c0.4,0,0.7,0,1.1,0c0,0,0,0,0,0c0.2,0,0.4-0.2,0.6-0.3c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0.1-0.2,0.2-0.4,0.1-0.6l-1-6.7\n                c0-0.3-0.2-0.6-0.5-0.7c-0.3-0.1-0.6-0.2-0.9,0c-0.8,0.3-1.1,0.9-1.3,1.3c-0.5,1.2,0.2,2.7,0.9,4.2c0.1,0.1,0.1,0.2,0.2,0.4\n                c-0.2,0.1-0.3,0.2-0.5,0.3c-1.1-0.5-2.3-1.5-3.4-2.5l-0.8-0.7c-0.4-0.3-0.9-0.3-1.3,0.1c-0.4,0.3-0.4,0.9-0.1,1.3\n                c3.3,4.3,4.5,5.1,5.4,5.1C50.9,28.7,51.3,28.2,51.5,27.7z M34.8,32.4c0.2,0.3,0.5,0.4,0.8,0.4c0.2,0,0.3,0,0.5-0.1\n                c0.4-0.2,0.6-0.8,0.5-1.2l-1.3-3.7c0.2,0,0.3-0.1,0.5-0.1l6.8,1.1c0.2,0,0.3,0,0.5,0c2.1-0.8,1.3-3,0.9-4.2\n                c-0.1-0.3-0.2-0.6-0.3-0.9c-0.1-0.3-0.2-0.5-0.5-0.6c-0.2-0.1-0.5-0.1-0.8-0.1c-1.6,0.6-1.5,1.9-1.3,3.1c-2-0.7-3.5-0.8-5.4-0.4\n                l-1.8-0.3c-0.3-0.1-0.7,0.1-0.9,0.3c-0.2,0.2-0.2,0.5-0.2,0.7c-0.1,0-0.2,0-0.2,0.1c-0.3,0.1-0.6,0.3-0.7,0.6\n                c-0.1,0.3-0.1,0.7,0.1,0.9L34.8,32.4z M96.1,137.8c-0.1,0.5,0.2,1.1,0.8,1.2c0.1,0,0.1,0,0.2,0c0.5,0,0.9-0.3,1-0.8l0.3-1.5\n                c0.2-0.1,0.3-0.2,0.5-0.3c0.9-0.6,1.6-1.1,2.4-0.6c0.4,0.2,0.9,0.2,1.2-0.2c0.3-0.3,0.4-0.8,0.1-1.2L101,132c0,0,0,0,0,0l-3.1-4.7\n                c-0.1-0.2-0.4-0.4-0.6-0.4c-0.3-0.1-0.5,0-0.7,0.1l-1.6,1.1c-0.2,0.1-0.4,0.4-0.4,0.6c-0.1,0.3,0,0.5,0.1,0.7l2.7,4\n                c-0.6,1.1-0.9,2.3-1.1,3.5L96.1,137.8z M122.5,142h3.8c0.3-0.4,0.6-0.9,0.7-1.4c0.3,0,0.6-0.2,0.8-0.4c0.2-0.3,0.2-0.6,0.1-0.9\n                c-0.1-0.3-0.2-0.6-0.3-0.9c-0.4-1.2-0.9-2.9-2.8-3.4l0.3-0.5c0.3-0.5,0.1-1.1-0.3-1.3c-0.5-0.3-1-0.7-1.5-1.2c0,0,0,0,0,0\n                c0-0.4-0.2-0.7-0.5-0.9c-0.2-0.1-0.4-0.2-0.7-0.4c-1.4-1.7-2.2-3.7-2-5.1c0.5-1.1,1.4-2,2.7-2.7c0.5-0.2,0.7-0.8,0.5-1.3\n                c-0.2-0.5-0.7-0.7-1.2-0.6c-0.4,0.1-0.6,0.3-1,0.4c0.3-0.2,0.5-0.6,0.5-0.8c0-0.5-0.5-1-1-1l-0.2,0l-0.4-2c-0.1-0.5-0.6-0.9-1.1-0.8\n                l-2.7,0.5c-0.5,0.1-0.9,0.6-0.8,1.2l0.3,1.8c-2.3,0.5-4,1.9-5.7,3.2c-0.5,0.4-0.9,0.8-1.4,1.1c-0.4,0.3-0.5,0.9-0.3,1.3\n                c0.3,0.4,0.9,0.6,1.3,0.3l1.1-0.6c0,0.6,0.2,1.2,0.5,1.8c-0.6,0.7-0.8,1.1-0.6,1.6c0.2,0.4,0.5,0.6,0.9,0.6c1,0,2.6-2.6,3-3.8\n                c0.4-1.4,0.1-2.3-0.3-2.8c0.6-0.4,1.4-0.7,2.3-0.9c0.1,0,0.3,0,0.4-0.1c0.1,0,0.3-0.1,0.4-0.1c1.4-0.3,2.6-0.4,3-0.4l0.3,0\n                c0.1,0,0.2,0,0.4-0.1c-1.5,0.8-2.4,1.9-2.7,3.5c-0.9,2.5,0,5.2,2.4,6.9c-0.2,0.2-0.4,0.3-0.6,0.5c-1.1,0.9-2.5,2-3.4,2\n                c-0.2,0-0.6,0-1.2-1c-0.1-0.3-0.4-0.5-0.7-0.5c-0.3-0.1-0.6,0.1-0.9,0.3l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4l2,2c0.4,0.4,1,0.4,1.4,0\n                l1.2-1.2c2.8-1.1,4-1.3,4.4-1.2c-0.1,1-2.2,3.6-3.2,4.9c-0.4,0.5-0.8,1-1.1,1.4h3.5l3.2-5.3c0.7,0.9,1.2,1.7,1.3,2.4\n                C124,139.7,123.2,140.9,122.5,142z M110.9,140.7c-0.1-0.3-0.4-0.7-1-1c-0.2-0.1-0.3-0.1-0.5-0.1l-0.8,0.1l0.6-0.8\n                c0.3-0.4,0.2-0.9-0.1-1.3c-0.3-0.3-0.8-0.4-1.2-0.2l-5.2,3.2c-0.4,0.3-0.6,0.8-0.4,1.2h3.2c0.1,0,0.2-0.1,0.3-0.1\n                c0.1,0,0.1,0.1,0.2,0.1h1.1l0.9-0.1c0.2,0,0.3,0.1,0.4,0.1h2.5C111,141.6,111.1,141.1,110.9,140.7z M142,141.1l-4.6-2.3\n                c1.2,0.2,1.9,0.3,2.2,0.4c0,0,0,0,0.1,0c0,0,0,0,0,0v0c0.1,0,0.2,0,0.2,0c0.5,0,0.9-0.4,1-0.9c0-0.5-0.4-1-0.9-1.1\n                c-0.1,0-0.5-0.1-0.9-0.2c0.1-0.1,0.1-0.3,0.1-0.4c0-0.3-0.2-0.5-0.4-0.7l-2-1.6c-0.4-0.3-0.9-0.3-1.2,0c-0.1-0.3-0.1-0.5-0.2-0.7\n                l0.1-0.2c0.1-0.2,0.3-0.3,0.4-0.5c0,0,0-0.1,0.1-0.1c0.3,0.1,0.7,0,0.9-0.3l1.3-1.3c0.2,0.2,0.4,0.4,0.5,0.6l0.1,0.1\n                c0.2,0.5,0.3,1.1,0.4,1.8c0,0.5,0.5,0.9,1,0.9c0,0,0,0,0,0c0.5,0,1-0.5,0.9-1.1c0-0.1,0-0.5,0-1.2c0.3-0.3,0.6-0.6,0.9-0.9v-4.2\n                l-1.9,2.9c-0.3-0.4-0.6-0.8-1-1c-0.1-0.3-0.1-0.6,0-0.9c0.2-0.5-0.1-1-0.6-1.2c-0.5-0.2-1,0-1.3,0.5l-1.9,3.9c-0.2,0-0.3,0-0.5,0\n                c-0.7,0.2-1.2,0.7-1.3,1.4c-0.2,0.3-0.5,0.5-0.8,0.6c-0.7-0.2-1.2-0.3-1.7-0.4c-0.1-0.8-0.2-1.6-0.1-2.3c0.3-0.7,0.4-1.5,0.4-2.2\n                l0-0.2c0.6-1.3,1.8-1.4,3.7-0.5c0.2,0.1,0.5,0.2,0.7,0.4c0.5,0.2,1.1,0.1,1.3-0.4c0.2-0.5,0.1-1.1-0.4-1.3c-0.3-0.1-0.5-0.3-0.8-0.4\n                c-1.6-0.8-2.8-1.1-3.8-1.1c-2.3,0-2.6,2-2.7,3c-0.2,0.6-0.4,1.4-0.5,2.3c-0.1,0.1-0.3,0.2-0.6,0.2c-0.5,0-1.1-0.1-1.8-0.4\n                c-0.4-0.1-0.8,0-1,0.2c-0.3,0.3-0.3,0.7-0.2,1l0.7,1.9c0.1,0.3,0.4,0.6,0.8,0.6l1.7,0.3l0.1,1.2c0,0.2,0,0.4,0.1,0.6l0.6,6.2\n                c0,0,0,0.1,0,0.1h2.2c0.8-1.2,0.2-3.1-0.3-4.7c-0.2-0.7-0.4-1.3-0.5-1.8l0-0.3c0.7,0.2,1.4,0.3,2,0.2c0.6,1.1,1.9,2,3.8,2.7\n                c0.1,0.2,0.3,0.4,0.6,0.5c-0.3,0-0.6,0.2-0.8,0.5l-0.3,0.6l-2.8-0.2c-0.5,0-0.9,0.3-1,0.8c-0.1,0.5,0.2,1,0.7,1.1l1.7,0.6h7.8V141.1\n                z M86.8,138.9c-0.4-0.3-1-0.3-1.3,0.1l-3,3h3.3l1.2-1.8C87.2,139.8,87.2,139.3,86.8,138.9z M40.9,0h-6.2l-0.2,0.1\n                C34.2,0.3,34,0.6,34,1c0.1,1.8-1.8,4.4-3.4,6.6l-0.8,1c-0.2,0.3-0.2,0.6-0.1,0.8c-0.1,0.4,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3\n                c0.3,0,0.5-0.1,0.7-0.3l6.3-6.6c0.2-0.2,0.5-0.5,0.7-0.7c0.2,0.4,0.6,0.7,1,0.6l0.4-0.1c0.2,0,0.3,0,0.5,0l-0.6,0.8\n                c-0.3,0.4-0.2,1,0.2,1.4C39.9,5.9,40.1,6,40.3,6l-2.4,1.5c-0.4,0.3-0.6,0.8-0.3,1.3l2.4,4.5c0.2,0.3,0.5,0.5,0.9,0.5\n                c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.4,0.8-0.8l0.8-5c0-0.2,0-0.4-0.1-0.6l-0.6-1.1c-0.1-0.2-0.3-0.4-0.6-0.5c-0.1,0-0.2,0-0.3,0\n                c0,0,0.1,0,0.1-0.1c0.8-0.9,1.7-1.5,2.8-1.6c0.4,0,0.9,0,1.3,0c1.7,0.2,3.6,1.1,5.5,2.2l0,0.8c0,0.3,0.2,0.6,0.4,0.7\n                c0.2,0.2,0.5,0.2,0.8,0.2c0.4-0.1,0.7-0.1,1.1-0.2l0.2,0c0.7,0.4,1.3,0.7,1.9,0.9c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.1,0.8-0.4\n                l2-2.8c0.1-0.1,0.1-0.3,0.2-0.4c0.2,0.3,0.5,0.4,0.8,0.4c0,0,0,0,0,0c0.3,0,0.5-0.1,0.6-0.2l7.8,5.9c0.1,0.1,0.2,0.1,0.3,0.1\n                c-0.4,0-0.7,0.3-0.8,0.6c-0.2,0.7-0.1,0.8,1.7,2.4v1.5c0,0.5,0.3,0.9,0.8,1c0.1,0,0.1,0,0.2,0c0.4,0,0.8-0.3,0.9-0.7l0.8-2.5\n                c0.4-0.2,0.6-0.4,0.9-0.7c0.5-0.7,0.6-1.8,0.3-3.3c-0.1-0.4-0.5-0.8-0.9-0.8c-0.5,0-0.8,0.3-1,0.7L70,11.8c-0.4-0.1-0.9-0.3-1.2-0.4\n                c-0.1-0.1-0.3-0.1-0.4-0.1c0.2,0,0.4-0.1,0.5-0.3c0.3-0.4,0.3-1,0-1.3l-5-5.1l4.9-3.3C69.2,1,69.3,0.4,69.1,0h-2.2l-6,3\n                c0.1-0.2,0.2-0.5,0.4-0.8c0.3-0.5,0.6-1,0.9-1.5c0.2-0.3,0.3-0.5,0.5-0.8h-2.5c-0.2,0.4-0.4,0.9-0.6,1.3c-0.3,0.6-0.5,1-0.6,1.4\n                l-0.2,0.4c-0.3,0.5-0.4,0.9-0.5,1.1c0,0-0.1-0.1-0.1-0.1c-0.4-0.3-0.9-0.4-1.3,0c-1.2,1-2.3,1.3-3.2,1.5c-0.3-0.2-0.7-0.4-1-0.6\n                L52.3,0h-2.9c-2,1.6-3.3,2-4.2,2.1c-0.5,0-0.9,0-1.4,0c-0.2,0-0.3,0-0.5-0.1c0-0.1-0.1-0.2-0.1-0.3c-0.2-0.3-0.6-0.5-1-0.5l-2.8,0.4\n                c0,0,0,0-0.1,0c0.1-0.1,0.2-0.2,0.2-0.3L40.9,0z M111.2,103.4l-0.3-0.3c0-0.2-0.1-0.3-0.3-0.4c-0.2-0.2-0.4-0.4-0.7-0.7\n                c-0.3-0.3-0.6-0.5-0.8-0.8c-1.7-2.1-1.8-3.5-0.4-5c0.3-0.3,0.4-0.9,0.1-1.3c-0.3-0.4-0.8-0.5-1.2-0.3c-1.4,0.8-2.3,1.7-2.4,2.9\n                c-0.3,1.9,1.1,3.6,2.5,5c0.3,0.3,0.5,0.6,0.8,1l-1.2,1.2c-0.3,0.3-0.4,0.8-0.1,1.2c0.2,0.4,0.7,0.6,1.1,0.4c0.8-0.3,1.4,0.3,2.2,1.1\n                c0,0,0,0,0,0c-0.2,0.2-0.4,0.4-0.5,0.5c-0.2,0.2-0.3,0.3-0.5,0.5c0-0.3-0.2-0.5-0.4-0.7c-0.4-0.3-1-0.2-1.3,0.2\n                c-2.1,2.5-6.2,3.8-10.3,5.1c-2,0.6-4.2,1.3-6,2.1c-0.4,0.2-0.7,0.7-0.6,1.1c0.1,0.5,0.5,0.8,1,0.7c0.1,0,0.1,0,0.2,0\n                c-0.3,0.3-0.3,0.7-0.1,1.1c0.7,1.3,1.5,2.5,2.6,3.6l4.6,6.5c0.3,0.4,0.7,0.5,1.1,0.3c0.4-0.2,0.7-0.6,0.6-1l-0.1-0.5\n                c0.9,0.5,1.8,0.9,2.8,1.3c1.7,1.1,3.1,2.2,4.1,3.4l-0.9-0.3c-0.3-0.1-0.7-0.1-0.9,0.2c0,0,0,0.1-0.1,0.1c-0.2-0.4-0.8-0.6-1.2-0.4\n                c-0.4,0.2-0.6,0.5-0.6,0.9c0,0.1,0,0.3,0.1,0.4c0.6,1.3,0.1,2.8-1.5,4.7c-0.4,0.3-0.8,0.7-1.2,1c-1,0.8-2,1.7-2.8,2.7\n                c-0.4,0.4-0.8,0.7-0.8,1.1h2.6c1-0.8,2.4-2,3.6-3.4c1-0.9,2-2.1,2.3-3.6c0,0,0,0,0.1,0l3.1,1.1c0.1,0,0.2,0.1,0.3,0.1\n                c0.2,0,0.4-0.1,0.6-0.2c0.3-0.2,0.4-0.5,0.4-0.9l-0.2-1.7c0.7-4-3-5.6-6.1-7c-0.6-0.4-1.2-0.7-1.8-1.1c-2.4-1.5-4.8-2.9-6.7-5\n                l-2.4-3.4c-0.1-0.1-0.1-0.2-0.2-0.2c0.5-0.1,0.9-0.1,1.2-0.1c0,0.4,0.3,0.8,0.7,0.9c0.1,0,0.2,0,0.3,0c0.4,0,0.7-0.2,0.9-0.6\n                c0.8-1.7,3.4-2.6,5.9-3.6c1.6-0.6,3.3-1.2,4.6-2.1c0,0.1,0,0.2,0.1,0.2c-0.5,1.2-0.5,2.5,0,3.9c0.1,0.4,0.5,0.7,0.9,0.7h2\n                c0.5,0,1-0.4,1-1v-3.7c2-0.7,3-1.5,3.3-2.6C114.8,107.1,113.1,105.3,111.2,103.4z M103,117.8c0.5,0,1.1,0.2,1.5,0.3\n                c1.1,0.8,2.1,1.4,3.1,1.7l0.3,2.5c0,0.4,0.3,0.7,0.7,0.8c0.4,0.1,0.8,0,1-0.3l2.6-3.4c0.8-0.5,1.4-1.3,1.7-2.4\n                c0.1-0.5-0.1-0.9-0.5-1.2c-0.4-0.2-0.9-0.1-1.2,0.3l-1.3,1.7c-1,0.3-2.7-0.4-4.3-1c-0.5-0.2-0.9-0.4-1.4-0.5\n                c-1.6-1.1-2.8-1.8-3.7-1.8c-0.6,0-1,0.2-1.4,0.6c-0.6,0.8-0.6,2,0,4.1l0.3,2.2c0,0.3,0.2,0.5,0.4,0.7l2.7,2.1\n                c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.3,0,0.5-0.1c0.3-0.2,0.5-0.6,0.5-1l-0.3-2.2c0-0.3-0.2-0.5-0.4-0.7l-2.3-1.8\n                C102.4,117.8,102.7,117.8,103,117.8z M79.4,0.2c1,1.7,1.6,3.5,1.9,4.3c0.2,0.5,0.4,1.1,1.1,1.1c0,0,0,0,0,0c0.3,0,0.6-0.1,0.8-0.4\n                c0.3-0.3,0.3-0.5,0.1-1.4L85.8,0h-3.3l-0.3,0.3L82,0h-2.8L79.4,0.2z M90,114c-0.4-0.3-1-0.2-1.3,0.2c-0.3,0.3-0.5,0.7-0.8,1\n                c-0.6,0.9-1.2,1.7-2.1,2.3l-3.1,0.5l0.7-1c0.8-0.8,1.9-1.5,2.8-2c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0.5-0.3,1-0.6,1.4-0.9l1.1-0.7c0.4-0.3,0.6-0.8,0.4-1.3l-0.6-1.1c-0.2-0.3-0.5-0.5-0.8-0.5c-0.4,0-0.7,0.1-0.9,0.4l-0.4,0.5\n                l-5.9,0.9c-0.3,0-0.5,0.2-0.6,0.4l-1.4,1.9c-0.2,0.3-0.2,0.7-0.1,1.1c0.2,0.3,0.6,0.5,0.9,0.5c0.4,0,0.8-0.1,1.2-0.1\n                c0.4-0.1,0.8-0.1,1.2-0.1c-0.8,0.7-1.3,1.5-1.6,2.2l-1.6,2.2c-0.1,0.1-0.3,0.1-0.4,0.2l-2.4,0.4c-0.3,0-0.5,0.2-0.6,0.4l-2,2.8\n                c-0.3,0.4-0.2,1,0.2,1.3c0.2,0.2,0.4,0.2,0.6,0.2c0.3,0,0.5-0.1,0.7-0.3c1.2-1.2,2.5-2.2,4.1-2.9l0.5-0.1c0.3,0,0.5-0.2,0.6-0.4\n                c0.8-0.3,1.6-0.5,2.4-0.8c0.1,0,0.3-0.1,0.4-0.1l3.4,2c0.2,0.1,0.3,0.1,0.5,0.1c0.1,0,0.2,0,0.3-0.1c0.3-0.1,0.5-0.3,0.6-0.6\n                l1.4-3.9c0.1-0.3,0.1-0.7-0.2-0.9c0.6-0.7,1.1-1.4,1.6-2.3C90.6,114.8,90.5,114.3,90,114z M47.4,109.8c-1.3-0.9-3-1.5-4.6-2.2\n                c-3-1.2-6-2.4-6.2-4.6c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8c-0.7,2.8,1.9,4.1,4,5.2c2.3,1.1,3.3,1.8,3,2.9\n                c-0.1,0.5,0.1,1,0.6,1.2c0.1,0,0.2,0.1,0.4,0.1c0.3,0,0.7-0.2,0.9-0.5c0.2-0.3,0.4-0.4,0.9-0.4c0.1,0,0.2,0,0.4,0\n                c-0.3,0.7-0.3,1.5-0.3,2.2c0,0.3,0,0.6,0,0.9l1,0.1l1,0.1c0-0.3,0-0.7,0-1.1c0-1.5,0.1-1.8,0.7-2c0.3-0.1,0.5-0.3,0.6-0.6\n                C48,110.5,47.8,110.1,47.4,109.8z M89.6,95.3c-0.2-0.3-0.5-0.5-0.8-0.5h-3.9c-0.5,0-0.9,0.3-1,0.8c-0.1,0.4,0.1,0.9,0.5,1.1l2.3,1.1\n                l-0.7,1.5c-1.1,1.2-1.7,1.8-2.8,1.5c-0.5-0.1-1.1,0.2-1.2,0.7c-0.2,0.5,0.1,1.1,0.7,1.2c0.9,0.3,1,0.7,1,1.1c-1,1.4-1.2,1.8-0.9,2.4\n                c0.2,0.3,0.5,0.6,0.9,0.6c0.9,0,1.6-1.4,1.8-2.1l0.3-0.3c0-0.1,0.1-0.1,0.1-0.2l1.9-3.7l0.2-0.2c0.5-0.6,1-1.2,1.6-1.6\n                c0.3-0.2,0.4-0.5,0.4-0.9c0-0.3-0.2-0.6-0.5-0.8l0.3-0.7C89.8,96,89.8,95.6,89.6,95.3z M50.5,114.9c-0.1-0.4-0.4-0.6-0.8-0.7\n                c-0.4-0.1-0.7,0.1-0.9,0.4l-3.9,5.9c-0.2,0.3-0.2,0.7,0,1c0.2,0.3,0.5,0.5,0.9,0.5h3.9c0.4,0,0.8-0.2,0.9-0.6\n                c0.2-0.4,0.1-0.8-0.2-1.1l-1.3-1.3c0,0,0,0,0,0C49.9,118.2,51.1,116.9,50.5,114.9z M35.2,117.1l1.2,0c0.7,0,1.4,0,2,0.3\n                c0.5,0.6,1,1.1,1.6,1.6c0.4,0.3,0.9,0.2,1.2-0.1c0.3-0.3,0.4-0.8,0.2-1.2c-0.4-0.9-1-1.5-1.8-1.9l0,0c-1-1.2-2.2-2.7-4.1-2.7\n                c-0.4,0-0.7,0.1-1.1,0.2c-0.5,0.1-0.8,0.6-0.7,1c0,0.5,0,1,0,1.3c-0.5,0.4-0.9,0.8-1.2,1.2c-1-0.5-2.2-0.4-3.6,0.2\n                c-1.5-0.4-2.8-1.1-3.4-1.6c-0.4-0.3-1-0.3-1.4,0.1c-0.3,0.4-0.3,1,0.1,1.4c0.8,0.7,1.4,1.5,1.9,2.5c-0.4,0.4-0.4,0.9-0.1,1.3\n                c0.2,0.3,0.5,0.5,0.7,0.8l0.2,0.3l0.2,0.8c0.1,0.4,0.2,0.8,0.4,1.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.8,0.8-1.4,1.4-2.2,1.1\n                c-0.4-0.1-0.9,0-1.1,0.4c-0.2,0.4-0.2,0.9,0.1,1.2c0.2,0.3,0.5,0.5,0.7,0.8c1,1,1.3,1.5,1.1,2.2c-0.1,0.4,0,0.9,0.4,1.2\n                c0.4,0.2,0.9,0.2,1.2-0.1l1.8-1.8c0,0,0,0,0,0l2.9,1.9c0.2,0.1,0.4,0.2,0.5,0.2c0.3,0,0.6-0.1,0.8-0.4c0.3-0.4,0.2-1-0.2-1.4\n                c-0.2-0.2-0.5-0.4-0.7-0.6c-0.7-0.7-1.6-1.5-2.8-1.7l-1.5-1l1.1-1.1c0,0,0,0,0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.3c0.6-1.7-0.4-3-1-3.6\n                c-0.1-0.3-0.2-0.6-0.3-0.9l0.8-0.8c0.6,0.1,1.2,0.2,1.8,0.2c0.4,0,0.8,0,1.2-0.1c0.2,0.7,0.6,1.4,1.2,2.3l0,0.1\n                c0.6,1.6,1.3,3.4,3.1,3.5c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0h0c0,0,0,0,0,0c0.2,0,0.4-0.1,0.6-0.2\n                c0,0,0.1-0.1,0.1-0.1l2-2c0.4-0.4,0.4-1,0-1.4L38,120c-0.4-0.4-1-0.4-1.4,0l-1,1c-0.1-0.2-0.2-0.3-0.4-0.5c-0.3-0.8-0.6-1.5-1-2.1\n                C34.6,118,35,117.6,35.2,117.1z M62.9,102.5l-1.6,6.2c-0.1,0.4,0,0.8,0.3,1c0.2,0.2,0.4,0.2,0.6,0.2c0.1,0,0.3,0,0.4-0.1\n                c1.9-0.9,2-3.2,2.1-5.1c0-0.7,0-1.3,0.1-1.8l0.1-0.5c0-0.1,0.1-0.2,0.1-0.2c0.7,0.3,1.3,0.4,1.9,0.3c0.3,0.8,1,1.8,2.7,2.6\n                c0.1,0.4,0.4,0.6,0.8,0.7c1.4,0.2,2.1,0.4,2.4,0.4c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2,0c0,0,0,0,0,0c0.5,0,0.9-0.4,1-0.9\n                c0-0.5-0.4-1-0.9-1.1c-0.1,0-0.2-0.1-0.4-0.1c0.1-0.1,0.1-0.3,0.1-0.4c0-0.3-0.1-0.5-0.2-0.7l-1.4-1.6c-0.3-0.3-0.7-0.4-1.1-0.3\n                c0-0.1,0-0.2,0.1-0.3l0.9-0.7c0.4-0.3,0.5-0.8,0.3-1.2c-0.2-0.4-0.7-0.6-1.2-0.5c-0.7,0.2-1.2,0.6-1.6,1.2c-0.4,0.3-0.9,0.6-1.3,0.8\n                c-0.4-0.2-0.9-0.3-1.2-0.3c0.2-0.7,0.4-1.4,0.7-2.1c0.5-0.6,0.9-1.4,1.2-2.1l0.1-0.3c1.2-1.5,2.5-1.7,4.2-0.8\n                c0.2,0.1,0.4,0.2,0.6,0.3c0.5,0.3,1.1,0.2,1.3-0.3c0.3-0.5,0.2-1.1-0.3-1.4c-0.1-0.1-0.2-0.1-0.3-0.2c0.2,0,0.4,0.1,0.6,0\n                c0.8-0.3,1.4,0.3,2.2,1.1c0.3,0.3,0.5,0.5,0.8,0.7c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2c0.4-0.3,0.5-0.7,0.4-1.1\n                c-0.5-1.4-1.4-2.8-2.2-4.2c-1.9-3.1-3-5.2-1.9-6.7c0.3-0.4,0.3-0.9,0-1.3c-0.3-0.4-0.9-0.4-1.3-0.2c-2.6,1.7-1.3,4.3-0.4,6.2\n                c1.1,2.3,1.3,3.1,0.4,3.7c-0.4,0.3-0.6,0.8-0.4,1.3c0,0.1,0.1,0.2,0.2,0.2c-1.3-0.8-2.5-1.1-3.4-1.1c-2.1,0-2.9,1.7-3.3,2.7\n                c-0.5,0.7-0.9,1.4-1.3,2.4c-0.3,0.3-0.6,0.4-1.1,0.4c0,0,0,0,0,0c-0.4,0-1-0.1-1.6-0.4c-0.3-0.1-0.6-0.1-0.9,0.1\n                c-0.3,0.2-0.4,0.5-0.4,0.8v1.9c0,0.5,0.3,0.9,0.8,1l1.3,0.2l-0.2,0.9C63,102.1,63,102.3,62.9,102.5z M49,125.2\n                c-0.1-0.5-0.3-1.2-1.1-1.2c-0.9,0-1,0.3-1.2,2.8l-1.2,0.9c-0.4,0.3-0.5,0.8-0.3,1.2c0.2,0.4,0.5,0.6,0.9,0.6c0.1,0,0.2,0,0.3,0\n                l2.5-0.7c1.1,0.7,2.4,0.3,3.9-1.3c0.3-0.3,0.4-0.8,0.1-1.2c-0.2-0.4-0.7-0.6-1.1-0.4l-2.3,0.7C49.2,126,49.1,125.5,49,125.2z\n                 M21.7,132.6c0.2-0.2,0.3-0.6,0.2-0.9c-0.1-0.3-0.3-0.6-0.6-0.7c-0.6-0.2-1.3-0.4-1.9-0.4c-1.6,0-3.1,0.7-4.3,1.3c-1,0.5-2,1-2.8,1\n                c-0.4,0-1-0.1-1.7-0.8c1.6-1.4,1.6-3.7,1.5-5.3l0-0.8c0-0.4-0.2-0.7-0.5-0.9c-0.3-0.2-0.7-0.1-1,0.1c-2.5,1.7-3.7,3.6-3.7,5.6\n                c0,3.3,3.2,5.7,4.9,6.9c0.1,0.1,0.2,0.2,0.4,0.3c0,0.1,0,0.1,0.1,0.2c0.1,0.4,0.5,0.7,0.9,0.7c0.8,0,1.1-0.6,1.1-0.7\n                c0.2-0.5,0-0.9-0.3-1.1c0.1-0.5,0.5-1,1.1-1.7c0.2-0.2,0.3-0.4,0.5-0.5c0.7-0.1,1.3,0.4,2,1.1c0.3,0.3,0.5,0.5,0.8,0.7\n                c0.3,0.3,0.8,0.3,1.2,0.1c0.4-0.2,0.5-0.7,0.4-1.1c-0.3-0.8,0.1-1.2,1.1-2.2C21.3,133.1,21.5,132.9,21.7,132.6z M2.5,50.1\n                c0.1-0.7-0.1-1.2-0.3-1.4C1.6,48,0.7,48,0.4,48c-0.1,0-0.1,0-0.2,0l0-0.7c0-0.2-0.1-0.3-0.2-0.5v8.7c0.2-0.1,0.5-0.2,0.7-0.2\n                c0.9-0.3,1.8-0.6,2.7-0.9c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.5-0.2,1-0.5,1.5-0.8c1.5-0.9,2.7-2.2,3.5-4c0.2-0.5,0.1-1-0.3-1.3\n                c-0.4-0.3-1-0.2-1.3,0.2c-0.3,0.3-0.5,0.7-0.8,1c-0.6,0.9-1.3,1.7-2.2,2.4c-0.4,0.2-0.8,0.4-1.2,0.6c-0.3,0-0.5,0.1-0.8,0.1\n                c-0.4,0.1-0.9,0.1-1.3,0.1l1.5-2.1C2.4,50.4,2.5,50.3,2.5,50.1z M28.2,142H32c0.1-0.5,0-1.1,0-1.6c0.4-1.2,0.3-2.6-0.2-4\n                c-0.1-0.4-0.6-0.7-1-0.6c-0.4,0-0.8,0.3-0.9,0.8c-0.2,1-0.1,2.2,0.1,3.3l0,0.3C29.7,140.8,29.1,141.4,28.2,142z M28.8,137.2l-4.9-3\n                c-0.3-0.2-0.6-0.2-0.8-0.1c-0.3,0.1-0.5,0.3-0.6,0.6l-1.4,3.9c-0.1,0.3-0.1,0.7,0.2,1c0.2,0.2,0.5,0.4,0.8,0.4c0,0,0.1,0,0.1,0\n                l6.4-0.9c0.4-0.1,0.7-0.4,0.8-0.8C29.3,137.9,29.1,137.4,28.8,137.2z M114.2,75.5c-0.1-0.4-0.6-0.7-1-0.6c-0.4,0-0.8,0.3-0.9,0.8\n                c-0.2,1-0.1,2.2,0.1,3.4l0,0.3c-0.3,0.7-1,1.4-1.9,2c-0.5-0.2-1.2-0.4-1.9-0.7c-0.4-0.2-0.8-0.1-1.1,0.2c-0.3,0.3-0.4,0.7-0.2,1.1\n                l0.3,0.9c-0.1,0.1-0.3,0.1-0.4,0.2l-0.2,0.1c-1.6-0.1-2.3,0.6-2.6,1.3c-0.7,0.4-1.4,1.1-1.5,2.1c-0.1,1.3,0.9,2.4,1.7,3.1\n                c0.1,0.1,0.3,0.2,0.5,0.2l3,0.5c0.1,0,0.1,0,0.2,0c0.4,0,0.8-0.3,0.9-0.7c0.2-0.5,0-1-0.5-1.2c-1.3-0.7-1.7-1.7-2.1-2.9\n                c0-0.1,0-0.1-0.1-0.2c0.3-0.1,0.5-0.3,0.8-0.4c0.2,0,0.5,0.1,0.7,0.1c0.4,0.1,0.8,0.1,1.1,0.1c0.3,0,0.7-0.1,0.9-0.4\n                c0.2-0.3,0.3-0.6,0.1-0.9l-0.1-0.2c0.2-0.1,0.5-0.2,0.7-0.4c1.4,0.3,2.4,0.1,3-0.7c0.7-0.8,0.7-2,0.6-3.2\n                C114.9,78.3,114.8,77,114.2,75.5z M98.1,4.2c0,0,0.1,0,0.1,0c1,0.3,2,1.2,2.8,2.1c0.6,0.7,1.2,1.3,1.8,1.8c0.1,0.1,0.3,0.2,0.4,0.2\n                c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.2,0,0.5-0.1,0.7-0.3l2-2c0.2-0.2,0.3-0.4,0.3-0.7\n                c0-0.3-0.1-0.5-0.3-0.7l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0l-1.2,1.2c-0.9-1.1-2-2.2-3.6-2.3c-1-0.2-2.1-0.2-3.2,0.2\n                c-0.1,0-0.3,0.1-0.4,0.2c-0.7,0.6-1.3,1.8-0.4,3.8c0,0.4,0,0.8,0.2,1.2c0,0.2,0.1,0.3,0.3,0.4c1,1,1.5,1.5,1.7,1.7c0,0,0,0,0.1,0.1\n                c0.2,0.2,0.5,0.3,0.7,0.3c0.4,0,0.7-0.2,0.9-0.6c0.2-0.4,0-0.8-0.2-1.1v0c-0.2-0.2-1-1.1-1.5-2.2c0.2-0.5,0.6-0.9,1.1-1.4\n                C97.8,4.5,98,4.4,98.1,4.2z M31.1,40.3l4.5-5.8c0.2-0.3,0.6-0.4,0.9-0.4c0.4,0.1,0.6,0.3,0.8,0.6c0.8,2.1,1.8,2.6,2.7,2.7\n                c0.5,0,1,0,1.4,0c0.4,0,0.7-0.1,1.1-0.1c0.1-0.2,0.2-0.3,0.3-0.4c0.2-0.2,0.5-0.3,0.8-0.2l2.5,0.4c0.1,0,0.3,0,0.4,0.1\n                c0.5,0.1,0.9,0.6,0.8,1.2c0,0.1,0,0.1-0.1,0.1c0.3-0.4,0.8-0.6,1.2-0.3c0.3,0.1,0.6,0.3,0.9,0.4c0.4,0,0.9-0.3,1.4-0.6\n                c0.3-0.2,0.6-0.4,0.9-0.5c0.5-0.2,1-0.1,1.3,0.4l1.1,1.7l3.4-2.2c0.2-0.1,0.5-0.2,0.8-0.1c0.3,0.1,0.5,0.2,0.6,0.5l0,0l1.5-3.4\n                c-0.5-0.8-0.9-0.8-1-0.8c-0.5,0-1.3,0.4-2,0.9c-1,0.6-2.1,1.2-3.2,1.2c-0.2,0-0.3,0-0.4,0c-0.9,0-1.4,0-1.5,0c0,0-0.1,0-0.1,0\n                c-0.5,0-1-0.4-1-0.9c0-0.5,0.4-1,0.9-1c0.8-0.1,1.4-0.2,1.8-0.4c-0.4-0.2-0.7-0.5-0.8-0.7c-0.3-0.4-0.5-1.2-0.1-2.3\n                c0.1-0.3,0.4-0.5,0.7-0.6c0.3-0.1,0.7,0,0.9,0.3l1.7,1.7c2.1-0.2,5.2-1.6,7-3.6l1-2.3c-0.1,0.1-0.2,0.3-0.4,0.4l-0.8,0.4\n                c0,0.1,0,0.2-0.1,0.3c-0.2,0.3-0.5,0.6-0.9,0.6c0,0,0,0,0,0c-0.4,0-0.7-0.2-1.1-0.5c-0.2-0.2-0.4-0.5-0.4-0.8\n                c-0.2-0.2-0.4-0.5-0.7-0.8c-0.9-1.2-2.2-2.7-3.4-4.4l-0.4-0.2c-0.5-0.2-0.8-0.8-0.6-1.3l0,0c-0.8-1.2-1.5-2.3-1.9-3.3\n                c-0.3-0.5-0.6-1-0.6-1.6c-0.1-0.5,0.3-1,0.8-1.1c0.5-0.1,1,0.2,1.1,0.6c0.1,0.3,0.2,0.6,0.4,0.9c0.3,0.3,0.9,0.6,1.6,0.8\n                c0.3,0.1,0.7,0.3,1,0.4c0.5,0.2,0.7,0.7,0.5,1.2L57.4,19l0.1,0.1l4.2,1.5c0.5,0.2,0.8,0.8,0.6,1.3l-0.6,1.7l1.7,0.6\n                c0.4,0.1,0.6,0.5,0.6,0.9c0,0.2,0,0.3-0.1,0.4l0.5-1.2c0.2-0.4,0.6-0.7,1.1-0.6c0.5,0.1,0.8,0.5,0.8,1c0,1.5-0.6,3-1.8,4.3l-2.2,5.2\n                c0.6,2-0.6,3.3-1.5,4.2c-0.2,0.2-0.4,0.4-0.6,0.7c0,0.1-0.1,0.1-0.2,0.1l1-0.6c0.3-0.2,0.7-0.2,1.1,0c0.3,0.2,0.5,0.6,0.4,1l-0.1,1\n                c0.2,0.2,0.3,0.4,0.3,0.7c0,0.9-0.9,1.1-1.3,1.1c0,0-0.1,0-0.1,0c-0.3,0-0.5-0.1-0.7-0.3c0,0,0,0,0,0c-0.3,0-0.6,0-1-0.1\n                c-1.4-0.1-3.3-0.2-5.2-0.5L54,41.8C53.8,42,53.5,42,53.2,42c-0.3-0.1-0.5-0.2-0.6-0.5l-0.1-0.1c-1.4-0.2-2.6-0.5-3.6-0.8\n                c-0.5-0.1-1.1-0.3-1.6-0.7c-0.3-0.3-0.5-0.7-0.3-1.1c-0.2,0.3-0.6,0.5-1,0.4l-0.3-0.1c-0.4-0.1-0.9,0-1.4,0v1.3c0,0.5-0.4,0.9-0.9,1\n                c-0.5,0-1-0.3-1-0.8c-0.1-0.7-0.4-1-1.1-1.1c-0.5,0-0.9,0-1.3,0c-2,0.2-4.8,1.3-7.6,2.4L31.5,43c-0.2,0.3-0.6,0.5-1,0.3\n                c-0.3-0.1-0.6-0.1-0.9-0.2l-0.2,0c-0.9,0.4-1.8,0.7-2.5,0.9c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.2-0.4-0.5-0.4-0.8\n                v-2.8c0-0.5,0.3-0.9,0.8-1c0.4-0.1,0.9,0.1,1.1,0.5c0.3,0.7,0.9,1,1.8,1.2c0.6-0.2,1.2-0.5,1.8-0.7L31.1,40.3z M59.6,39.5L59.6,39.5\n                l0.1,0C59.7,39.5,59.7,39.5,59.6,39.5z M71.7,5.5L72.2,6C73,6.9,73.7,8.4,74,9.6c-0.2,0.1-0.4,0.3-0.5,0.5c-0.1,0.3-0.1,0.6,0.1,0.8\n                c0.3,0.6,0.7,1.3,1.5,1.3c0.3,0,0.6-0.2,0.8-0.4c0.2-0.2,0.3-0.4,0.3-0.7c0.3,0,0.7,0,1-0.1c-0.1,0-0.2,0.1-0.2,0.2l-1,1.1\n                c-0.2,0.2-0.3,0.5-0.2,0.7c0,0.3,0.2,0.5,0.4,0.7l0.9,0.7c0.3,0.3,0.7,0.5,1,0.8c0.1,0.1,0.2,0.2,0.3,0.2c0.6,0.5,1.3,1.2,1.8,1.8\n                l0.6,1.6c-0.1,0-0.2,0-0.4,0c-0.4,0-0.9-0.1-1.3-0.1c-0.3,0-0.5-0.1-0.8-0.1c-0.3-0.2-0.6-0.4-0.9-0.6c-0.6-0.6-0.9-1.4-1.2-2.2\n                c-0.1-0.4-0.3-0.7-0.4-1.1c-0.2-0.4-0.7-0.7-1.2-0.5c-0.5,0.1-0.8,0.6-0.7,1.1c0.3,1.8,1,3.2,2.2,4.2c0.4,0.3,0.8,0.6,1.3,0.9\n                c0.1,0.1,0.2,0.1,0.4,0.1c0.7,0.4,1.5,0.6,2.3,0.9c0.6,0.2,1.3,0.4,1.9,0.7c0.1,0.2,0.4,0.4,0.7,0.5l0.4,0.1\n                c1.3,0.7,2.2,1.6,2.9,2.7c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.3,0,0.4-0.1c0.5-0.2,0.7-0.8,0.5-1.2l-1-2.8c-0.1-0.3-0.4-0.6-0.8-0.6\n                l-2.3-0.4c-0.1,0-0.1-0.1-0.2-0.1l-0.7-2c0-0.8-0.3-1.6-0.9-2.5l0,0c0.2-0.1,1,0,1.7,0.1c0.4,0.1,0.8,0.1,1.1,0.1\n                c0.3,0,0.7-0.1,0.9-0.4c0.2-0.3,0.3-0.6,0.1-0.9l-0.7-1.9c-0.1-0.3-0.4-0.6-0.8-0.6l-5.4-0.9l-0.1-0.3c-0.1-0.2-0.3-0.4-0.5-0.5\n                c0.4,0,0.8,0,1.1-0.1l2.1,0.3c0.3,0.1,0.6,0,0.8-0.2c0.2-0.2,0.3-0.5,0.3-0.8c0-0.6-0.1-1.2-0.3-1.8c0-1-0.6-2.4-1.8-4.2\n                C80.2,4.1,80.1,4,80,3.9l-1.2-0.7C77,1.8,75,0.7,72.8,0.1c-0.5-0.1-1,0.1-1.2,0.6c-0.2,0.5,0,1,0.5,1.2l5.5,3\n                c1.2,1.1,2.1,2.4,2.6,3.7c-0.1,0.1-0.3,0.2-0.9,0.3l-2.9-0.5c-0.3-1.6-1.6-2.9-2.9-4c-0.2-0.2-0.4-0.4-0.7-0.6l-1.7-1.4\n                c-0.3-0.2-0.6-0.2-1-0.1c-0.3,0.1-0.6,0.4-0.6,0.8c0,0-0.1,0.1-0.5,0.1c-0.4,0-0.9-0.1-1.3-0.1C67.3,3.1,66.9,3,66.6,3\n                c-0.5,0-1,0.3-1,0.8c-0.1,0.5,0.2,1,0.7,1.1c0.5,0.1,1,0.6,1.4,1.3c0.7,2.3,1,2.9,1.8,2.9c0.4,0,0.7-0.2,0.9-0.5\n                c0.4-0.7-0.2-2-0.6-2.8C70.3,5.4,71,5.1,71.7,5.5z M56.6,11.7c-0.5,0.2-0.8,0.6-0.7,1.1c0.1,0.5,0.6,0.8,1.1,0.8\n                c0.8-0.1,1.6,0.1,2.4,0.7l0.5,0.5c0.4,0.4,0.9,0.9,1.3,1.3l0.4,0.5c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.3l0.1,0.1\n                c0.4,0.5,0.8,1.1,1.2,1.6l-0.6,0.6c-0.3,0.3-0.4,0.7-0.2,1.1c0.2,0.4,0.5,0.6,0.9,0.6c0,0,0,0,0.1,0l4.3-0.3c0.5,0,0.8-0.4,0.9-0.8\n                c0.1-0.5-0.2-0.9-0.6-1.1c-0.6-0.3-1.2-0.5-1.7-0.9V18c0.7,0.1,1.4,0.3,1.9,0.7c0.2,0.2,0.3,0.4,0.5,0.7c0.2,0.5,0.8,0.7,1.3,0.4\n                c0.5-0.2,0.7-0.8,0.5-1.3c-0.2-0.5-0.5-0.9-0.9-1.2c-1.2-1.2-2.9-1.4-4.4-1.5c-0.3,0-0.5-0.1-0.8-0.1c-0.1-0.3-0.2-0.6-0.2-0.9\n                c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.3,0.5-0.5,0.7-0.8c0.2-0.2,0.3-0.5,0.2-0.8c0-0.3-0.2-0.5-0.4-0.7l-0.2-0.1c0.1-0.1,0.1-0.2,0.2-0.3\n                c0.2-0.3,0.3-0.7,0.1-1.1c-0.2-0.3-0.6-0.5-0.9-0.5l-2.1,0.1c-0.4,0-0.8,0.3-0.9,0.7c-0.1,0.4,0,0.8,0.4,1.1l0.8,0.6\n                c-0.2,0.6-0.3,1.1-0.4,1.7c0,0,0,0.1-0.1,0.1c-0.5-0.6-1-1.1-1.6-1.5c-0.6-0.6-1.2-1.2-1.5-1.8c0-0.4,0.1-0.8,0.1-1.2\n                c0-0.3,0-0.6,0-0.9c0-0.5-0.3-0.9-0.7-1c-0.5-0.1-0.9,0.1-1.1,0.5c-0.5,0.9-0.6,1.9-0.3,2.8C57,11.5,56.8,11.6,56.6,11.7z\n                 M92.4,41.1c-0.2-0.3-0.6-0.4-1-0.4l-5.5,1c-1.7-0.5-3.4-0.9-5.1-1.2c-2.5-1.8-2.8-2.5-2.8-2.7c0,0,0,0,0,0c0.1-0.5-0.1-1.1-0.7-1.2\n                c-0.5-0.2-1.1,0.1-1.2,0.6c0,0,0,0,0,0l0,0c0,0,0,0,0,0l-1,3.4c-0.1,0.3,0,0.6,0.2,0.9c0.2,0.2,0.5,0.4,0.8,0.4c0.9,0,2.3,0.2,4,0.5\n                l0.3,0.2c0.7,0.5,1.5,1.1,1.7,1.4c0.2,0.3,0.6,0.4,0.9,0.3l2.8-0.5c1.9,0.6,3.5,1.2,4.9,1.8c0.7,1.1,2,1.8,3.2,2.4\n                c0.2,0.3,0.1,0.5-0.1,0.8c-0.3,0.4-0.2,1,0.2,1.3c0.2,0.2,0.4,0.2,0.6,0.2c0.3,0,0.5-0.1,0.7-0.3l1-1c0.5,0.2,1,0.5,1.4,0.8\n                c0,0,0,0,0,0c-0.1,1,0.1,1.9,0.2,2.8c0,0.2,0.1,0.5,0.1,0.7l-0.4,0c-0.3,0-0.5,0.1-0.7,0.3l-2,2c-0.3,0.3-0.4,0.7-0.2,1.1\n                c0.1,0.4,0.5,0.6,0.9,0.6l0.5,0c2.1,0,3.4-0.7,3.8-2c1.3,0.1,2.2,0.4,2.8,1.4c0.2,0.4,0.6,0.6,1.1,0.5c0.4-0.1,0.8-0.5,0.8-1v-2\n                c0-0.4-0.2-0.7-0.6-0.9c-0.9-0.4-1.7-0.7-2.2-0.9c-0.2-0.6-0.8-1.5-2.2-3.1c0-0.3,0-0.6-0.2-0.8c-0.1-0.1-0.1-0.2-0.2-0.2l-1.8-1.8\n                c-0.4-0.4-1-0.4-1.4,0l0,0l-0.7-0.3c-0.6-0.8-1.6-1.5-3-2.2c-0.2-0.5,0-1.2,0.3-2C92.7,41.8,92.6,41.4,92.4,41.1z M123.5,2.2\n                c0.9-0.5,2-1.2,2.8-2.2h-3.8c-0.1,0.2-0.3,0.5-0.4,0.7C123.5,2.2,122.1,2.1,123.5,2.2z M70.7,63.1c-0.1,0.5,0.2,1,0.7,1.2\n                c0.3,0.1,0.7,0.2,1.1,0.2c1.3,0.2,2.1,0.4,2.5,1.3l0,0v0c0.2,0.4,0.5,0.6,0.9,0.6c0.1,0,0.3,0,0.4-0.1c0.5-0.2,0.7-0.8,0.5-1.3\n                L74,59c-0.2-0.5-0.8-0.7-1.3-0.5c-0.5,0.2-0.7,0.7-0.6,1.2l0.9,2.8l-1.2-0.2C71.3,62.2,70.8,62.6,70.7,63.1z M136.6,103.8\n                c-0.4-0.2-0.8-0.1-1.1,0.2c-0.3,0.3-0.4,0.7-0.2,1.1l0.7,1.9c0.1,0.3,0.4,0.6,0.8,0.6l1.7,0.3c0.3,0.3,0.7,0.6,1.2,0.9\n                c0.1,0.1,0.2,0.1,0.4,0.2c0.6,0.2,1.3,0.4,1.9,0.5v-2.3c-0.3,0-0.7-0.1-1-0.1l-0.1-0.2c0,0,0,0,0,0l-0.5-1.3\n                c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.4-0.5,0.7-0.8l0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.2v-3.9c-0.4-0.1-0.9-0.3-1.4-0.4\n                c-0.3-0.1-0.6-0.1-0.8,0.1l2.2-3.1v-1.2c0,0-0.1-0.1-0.1-0.1c-0.3-0.2-0.6-0.3-0.9-0.2c-0.3-0.1-0.7,0-0.9,0.2l-7.9,7.1\n                c-0.4,0.3-0.4,0.8-0.2,1.2c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1l3.7-1.4\n                c0.2-0.1,0.3-0.2,0.5-0.3l1.5-2c0,0.2,0,0.4,0,0.6l0.8,2.2l-0.6,0.7C138.7,104.3,137.9,104.4,136.6,103.8z M131,1.9\n                c-0.2-0.3-0.6-0.6-0.9-0.5l-2.1,0.1c-0.4,0-0.8,0.3-0.9,0.7c-0.1,0.4,0,0.8,0.4,1.1l0.8,0.6c-0.2,0.6-0.3,1.1-0.4,1.7\n                c-0.6,0.9-0.6,1.9-0.1,2.8c0.1,0.1,0.2,0.3,0.3,0.4l1,0.7c0.1,0.1,0.2,0.2,0.3,0.4l-1,1c-0.3,0.3-0.4,0.7-0.2,1.1\n                c0.2,0.4,0.5,0.6,0.9,0.6c0,0,0,0,0.1,0l4.3-0.2c0.5,0,0.8-0.4,0.9-0.8c0.1-0.5-0.2-0.9-0.6-1.1c-0.6-0.3-1.2-0.6-1.7-0.9\n                c0-0.3-0.2-0.5-0.4-0.7l-1.1-0.8c-0.4-0.6-0.6-1.2-0.6-1.8c0.2-0.2,0.4-0.4,0.6-0.6c0.3-0.3,0.5-0.5,0.7-0.8\n                c0.2-0.2,0.3-0.5,0.2-0.8c0-0.3-0.2-0.5-0.4-0.7l-0.2-0.1c0.1-0.1,0.1-0.2,0.2-0.3C131.1,2.7,131.2,2.3,131,1.9z M48.6,5.6\n                c-0.3-0.3-0.8-0.4-1.2-0.1l-3.6,2.3c-0.3,0.2-0.5,0.6-0.4,1c0.1,0.4,0.4,0.7,0.8,0.8l1.4,0.2c0,0.2,0,0.3,0,0.5l-0.4,1.2\n                c0,0.1-0.1,0.3,0,0.5c0.2,1,0.7,1.8,1.7,2.2c0.4,0.4,0.8,0.8,1.3,1.2l-0.3,0.9c-0.1,0.4,0,0.8,0.3,1.1c0.2,0.1,0.4,0.2,0.6,0.2\n                c0.2,0,0.4-0.1,0.5-0.2l1.8-1.2c0.3-0.2,0.5-0.6,0.4-1c-0.1-0.4-0.3-0.7-0.7-0.8c-0.1,0-0.2-0.1-0.3-0.1l0.1-0.2\n                c0.1-0.3,0.1-0.5-0.1-0.8c-0.1-0.2-0.4-0.4-0.6-0.5c-0.3-0.1-0.7-0.1-1-0.2c-0.3,0-0.6-0.1-0.8-0.2c-0.3-0.5-0.5-1.2-0.5-1.8L48,9.4\n                C48,9.1,48,8.8,47.9,8.6c0.2-0.6,0.5-1.2,0.9-1.7C49,6.5,49,6,48.6,5.6z M8.7,138.9c0.4-0.1,0.7-0.4,0.8-0.7c0.1-0.4-0.1-0.8-0.4-1\n                l-3.4-2.5c-0.5-0.8-1.3-1.4-2.4-1.7c-0.5-0.1-0.9,0.1-1.1,0.5c-0.2,0.4-0.1,0.9,0.3,1.2l1.7,1.2c0.3,1-0.3,2.8-0.8,4.4\n                c-0.2,0.5-0.3,0.9-0.5,1.4c-0.1,0.1-0.1,0.2-0.2,0.3H5c0.6-1,1.1-1.9,1.3-2.7L8.7,138.9z M71.6,17.3l-2,5.9c-0.1,0.3,0,0.6,0.1,0.9\n                c0.2,0.3,0.5,0.4,0.8,0.4h1.8c0.2,0.1,0.4,0.1,0.6,0.2c0.3,1,0.6,1.8,0.9,2.7c-0.1,0.1-0.2,0.3-0.4,0.4c-1,1.1-2.2,2.3-1.9,3.8\n                c0.1,0.4,0.3,0.7,0.7,0.8c0.4,0.1,0.7,0,1-0.2l1.2-1.2c0.6,0.6,1.2,1.1,1.8,1.7c1.7,1.5,3.3,2.8,3.2,4.8c0,0.4,0.2,0.8,0.6,1\n                c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.1,0.8-0.4l1.2-1.5l3.5-0.1c0.5,0,0.9-0.4,1-1c0-0.5-0.4-1-0.9-1c-4.6-0.3-7.7-2.4-9.7-6.7\n                c0.5-0.7,0.8-1.5,0.6-2.4c-0.3-1.1-1.3-1.7-2.1-2.1c-0.4-1.7-0.7-3.5-1-5l-0.1-0.8c-0.1-0.4-0.4-0.8-0.9-0.8\n                C72.1,16.6,71.8,16.9,71.6,17.3z M3.7,128.8c0.4,0.1,0.9-0.1,1.1-0.5c0.2-0.4,0.2-0.9-0.2-1.2l-2-2c-0.2-0.2-0.5-0.3-0.8-0.3\n                c-0.3,0-0.6,0.2-0.7,0.4L0,127.2v4.2c0.2-0.2,0.4-0.5,0.6-0.7C1.7,129.5,2.5,128.5,3.7,128.8z M103.6,0.5c0.7-0.2,1.4-0.4,2-0.5\n                h-3.2c0,0,0,0,0,0C102.6,0.5,103.1,0.7,103.6,0.5z M25.3,33.6L24,34.3c-0.1-0.1-0.2-0.3-0.2-0.4l-0.4-1.2c0-0.2-0.1-0.3-0.2-0.4\n                c-0.7-0.8-1.6-1-2.7-0.8c-0.5-0.1-1.1-0.2-1.7-0.2l-0.3-0.9c-0.1-0.4-0.5-0.7-0.9-0.7c-0.4,0-0.8,0.2-1,0.6l-0.8,2\n                c-0.1,0.4-0.1,0.8,0.2,1.1c0.3,0.3,0.7,0.4,1,0.3c0.1,0,0.2-0.1,0.3-0.1l0.1,0.2c0.1,0.3,0.3,0.5,0.5,0.6c0.2,0.1,0.5,0.1,0.8,0\n                c0.3-0.1,0.6-0.3,0.9-0.4c0.3-0.1,0.5-0.3,0.8-0.4c0.6,0.2,1.1,0.6,1.5,1.2l0.4,1.3c0.1,0.3,0.3,0.5,0.5,0.6\n                c0.2,0.6,0.3,1.2,0.3,1.9c0,0.1,0,0.3,0.1,0.4c0,0,0,0-0.1-0.1c-0.3-0.1-0.8-0.1-1,0.2c-2.7,2.5-4.4,3-5.5,3.1c-0.5,0-0.9,0-1.4,0\n                c-0.2,0-0.3,0-0.5-0.1c0-0.1-0.1-0.2-0.1-0.3c-0.2-0.3-0.6-0.5-1-0.5l-2.8,0.4c-0.1,0-0.3,0-0.4,0.1C10,42,9.6,42.5,9.7,43\n                c0.1,0.5,0.6,0.9,1.1,0.8l0.4-0.1c0.2,0,0.3,0,0.5,0l-0.6,0.8c-0.3,0.4-0.2,1,0.2,1.4c0.4,0.3,1,0.3,1.4-0.1\n                c0.8-0.9,1.7-1.5,2.8-1.6c0.4,0,0.9,0,1.3,0c1.7,0.2,3.6,1.1,5.5,2.2l0,0.8c0,0.3,0.2,0.6,0.4,0.7c0.2,0.2,0.5,0.2,0.8,0.2\n                c0.4-0.1,0.7-0.1,1.1-0.2l0.2,0c0.7,0.4,1.3,0.7,1.9,0.9c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.1,0.8-0.4l2-2.8c0.3-0.4,0.2-1-0.1-1.3\n                c-0.4-0.3-0.9-0.4-1.3,0c-1.2,1-2.3,1.3-3.2,1.5c-0.3-0.2-0.7-0.4-1-0.6l-0.3-5.4c0-0.1-0.1-0.2-0.1-0.4c0.1,0.1,0.2,0.1,0.3,0.1\n                c0.1,0,0.1,0,0.2,0c0.4,0,0.8-0.2,0.9-0.6l1.6-4c0.2-0.4,0.1-0.8-0.2-1.1C26.1,33.5,25.7,33.4,25.3,33.6z M13.1,30.9\n                c-1.7,0.5-2,2-2,3.2c-1.9-0.8-3.4-1-5.7-0.5l-1.7-0.3c-0.3-0.1-0.6,0-0.8,0.2c-0.2,0.2-0.3,0.5-0.3,0.8v0c-0.2,0-0.4,0.1-0.6,0.1\n                c-0.3,0.1-0.5,0.2-0.7,0.5c-0.1,0.2-0.2,0.5-0.1,0.8l1.4,4.4c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0.1,0,0.2,0c0.5-0.1,0.8-0.5,0.8-1v-3.9\n                c0.3-0.1,0.6-0.2,0.9-0.2l6.4,1.1c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0s0,0,0,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0h0h0l0,0\n                c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c2-0.6,2-2.6,2.1-3.9c0-0.3,0-0.6,0-0.9c0-0.3-0.1-0.7-0.4-0.9\n                C13.8,30.8,13.4,30.8,13.1,30.9z M66.9,126.4c0.3-0.1,0.6-0.4,0.7-0.7c0.4-2.1-1.1-3.8-2.4-5.1c-0.2-0.2-0.3-0.4-0.5-0.6\n                c-0.1-0.8-0.4-1.7-0.7-2.6c0.2-0.3,0.6-0.6,1.2-0.9c0.1-0.1,0.2-0.2,0.3-0.4c0.1,0,0.2,0.1,0.3,0.1c0.6,0,1.6-0.8,3-2.5\n                c0.6-0.7,1.1-1.6,1.6-2.4l5.7-1.4l-5.2-0.8c-0.1-0.7-0.6-1.9-2.8-1.9c-0.5,0-1,0.4-1,1c0,0,0,0,0,0.1c-0.3,0-0.5,0.1-0.8,0.1\n                l0.9,0.1c0.1,0.4,0.5,0.6,0.9,0.6c0.7,0,0.8,0.2,0.8,0.2c0,0,0,0,0,0.1c0,1.3-2.6,4.4-3.4,4.9c-0.2,0.1-0.4,0.3-0.5,0.5\n                c-0.1-0.1-0.3-0.1-0.5-0.1c-0.9,0-1.7-0.3-2.6-1.1c-0.1-0.2-0.2-0.3-0.4-0.6l-1.9-1.9c-0.3-0.4-0.7-0.8-1.1-1.2l1.1-1.5\n                c0.3-0.4,0.2-1-0.1-1.3c-0.4-0.3-1-0.3-1.3,0l-2,2c0,0-0.1,0.1-0.1,0.2l-3,4.5c0.1-0.2,0.2-0.6,0.2-1.4c0.6-1,0.9-2.3,1.1-3.5\n                l1.9-4.1c0.6-0.2,1.4-0.1,2.5,0.2c0.5,0.1,1-0.1,1.2-0.5c0.2-0.4,0.1-1-0.3-1.3c-0.9-0.6-0.9-1.3-0.9-2.6c0-0.4,0-0.7,0-1\n                c0-0.1,0-0.3-0.1-0.4c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.3-0.3-0.6-0.4h0c0,0,0,0,0,0c0,0,0,0,0,0l-2-0.3v-4.7\n                c0-0.4-0.2-0.8-0.6-0.9c-0.5-1.3-1.4-2.3-2.7-3.2c-0.4-0.2-0.8-0.2-1.2,0l-2.8,2.3c-0.3,0.2-0.4,0.6-0.3,1c0.1,0.4,0.4,0.7,0.8,0.7\n                l4.7,0.8c0.2,0.9,0.2,1.9,0.2,2.9c0,0.6,0,1.2,0,1.8c0,0.1,0,0.3,0.1,0.4c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.3,0.2,0.5,0.3c0,0,0,0,0,0h0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0h0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0\n                c0,0,0,0,0,0h0c0,0,0,0,0,0c0,0,0,0,0,0h0c0,0,0,0,0,0s0,0,0,0s0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0,0,0,0,0,0l1.5,0.3l-1.4,2.9c-1.3,0.9-1.8,2.5-2.1,4.1c0,0-0.1,0-0.1,0c-0.3-0.1-0.6-0.1-0.9-0.2c-0.6-0.8-1.4-1.4-2.3-1.7\n                c-0.4-0.1-0.8,0-1,0.3c-0.3,0.3-0.3,0.7-0.1,1.1c0.4,0.9,1.2,1.6,2.2,2c0.5,1,0.7,2.3,0.8,2.9c-0.2,0.2-0.2,0.5-0.2,0.7\n                c0.1,0.7,0.1,1.8,1.2,1.8c0.3,0,0.5-0.1,0.7-0.3c0,0,0,0,0.1-0.1L52,115c-0.3,0.4-0.2,1,0.2,1.4c0.4,0.3,1,0.2,1.4-0.2l3.5-4.7\n                l1.2,1.3c0.6,0.7,1.3,1.5,2,2.1c0.5,0.8,1,1.7,1.4,2.4c-0.5,1.5,0.4,2.8,1,3.5c0,0.9-0.2,1.5-0.7,1.9c-0.2,0.2-0.3,0.5-0.3,0.8\n                c0,0.3,0.1,0.6,0.4,0.8c0.2,0.2,0.4,0.4,0.7,0.6c0.8,0.8,1.7,1.7,3.1,1.7C66.1,126.6,66.5,126.5,66.9,126.4z M51.1,134.2\n                c2.7-1.7,3.8-4,4.5-5.8c0.4-0.8,0.7-1.6,0.8-2.3l0-0.2l0.1-0.3c0.7-2.6,1.4-5,3.5-6.7c0.3-0.3,0.4-0.7,0.3-1\n                c-0.1-0.4-0.4-0.7-0.8-0.7c-1.6-0.2-2.8,0.2-3.7,1.1c-1.5,1.6-1.4,4.4-1.4,6.7l0,0.8c-0.2,0.7-0.4,1.3-0.6,1.9\n                c-0.9,1.7-2.6,3.7-3.9,5.1c-0.3,0.1-0.5,0.3-0.8,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.6,0.7-1,1.2-0.7,1.9c0.2,0.4,0.6,0.6,0.9,0.6\n                C49.3,135.8,49.6,135.8,51.1,134.2z M26.2,141.4c-0.4-0.2-0.8-0.1-1.1,0.2c-0.1,0.1-0.2,0.2-0.2,0.4h2.8\n                C27.2,141.9,26.7,141.7,26.2,141.4z M15.9,140.8c-0.3-0.5-0.8-0.6-1.3-0.4c-0.2,0.1-0.5,0.3-0.7,0.4c-0.5,0.4-1,0.7-1.4,1.1h3.2\n                C16.1,141.7,16.1,141.2,15.9,140.8z M98.9,1.1c0.2,0,0.4-0.1,0.7-0.2c0.2-0.1,0.3-0.2,0.4-0.4c0-0.1,0.1-0.1,0.1-0.2\n                c0.1-0.1,0.2-0.2,0.4-0.3h-2.6c0,0.1,0,0.3,0.1,0.4C98.1,0.8,98.5,1.1,98.9,1.1z M118.6,91.8c-0.2,0.2-0.3,0.5-0.3,0.8v0\n                c-0.2,0-0.4,0.1-0.6,0.1c-0.3,0.1-0.5,0.2-0.7,0.5c-0.1,0.2-0.2,0.5-0.1,0.8l1.4,4.4c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0.1,0,0.2,0\n                c0.5-0.1,0.8-0.5,0.8-1v-3.9c0.3-0.1,0.6-0.2,0.9-0.2l6.4,1.1c0,0,0,0,0.1,0c0,0,0,0,0,0h0h0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0h0v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0\n                c0.1,0,0.1,0,0.2,0c2-0.6,2-2.6,2.1-3.8c0-0.3,0-0.6,0-0.9c0-0.3-0.1-0.7-0.4-0.9c-0.3-0.2-0.6-0.3-0.9-0.2c-1.7,0.5-2,2-2,3.2\n                c-1.9-0.8-3.4-1-5.7-0.5l-1.7-0.3C119.1,91.5,118.8,91.6,118.6,91.8z M132.6,82.7l0-0.5c0.1-0.2,0.1-0.3,0.1-0.5c0-0.3,0-0.6,0-1\n                c0-0.4,0-0.8-0.1-1.2c0.2-2.7,1.1-3.9,3.1-4c0.5,0,0.9-0.4,0.9-0.9c0.1-0.5-0.2-0.9-0.7-1.1c-1.8-0.5-3.1-0.2-4.1,0.7\n                c-1.2,1.2-1.3,3.3-1.2,5.1c0,0.4,0,0.8,0,1.3l-1.7,0.1c-0.5,0-0.8,0.3-0.9,0.8c-0.1,0.4,0.1,0.9,0.6,1.1c0.7,0.3,0.8,0.9,0.9,2.3\n                c0,0,0,0,0,0c-0.2,0-0.5,0-0.7,0c-1.1,0-2.2,0-3.2,0.3l0,0c-0.4-0.3-1-0.2-1.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c-1.2,0.6-2,1.5-2.7,2.8\n                c-0.2,0.4-0.1,0.9,0.2,1.2l1.4,1.4c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l2.5-2.7c2.3,1.1,3.8,1,4.7,0\n                C132.8,87.2,132.7,85.1,132.6,82.7z M90.7,25.2c1.8-2.1,3.7-4.3,6.3-5.4l2-0.6c0.5-0.2,0.8-0.7,0.7-1.2c-0.1-0.5-0.6-0.8-1.1-0.7\n                c-0.7,0.1-1.5,0.4-2.2,0.7l-8.6,2.6c-0.4,0.1-0.7,0.5-0.7,1c0,0.5,0.3,0.8,0.8,0.9l1.3,0.3c-0.4,0.8-0.7,1.6-0.9,2.5\n                c-1.3,1.5-2.5,2.6-3.8,3.1l-0.7-1.8c-0.1-0.3-0.4-0.5-0.7-0.6L81,25.5c-0.5-0.1-1,0.2-1.2,0.8l-0.5,2.7c-0.1,0.3,0,0.5,0.1,0.7\n                c0.1,0.2,0.4,0.4,0.6,0.4l2.1,0.4l0.4,0c0.6,0,1.2-0.1,1.7-0.2c0.6,0.2,1.1,0.3,1.5,0.3c2.7,0,3.5-2.6,4.2-4.5\n                C90.2,25.8,90.5,25.5,90.7,25.2z M107.1,0H106c0.2,0.1,0.3,0.1,0.5,0.1L107.1,0z M136.3,1.3l0.7,1.6c0.3,0.8,0.4,1.7,0.6,2.6\n                c0,0.1,0.1,0.3,0.1,0.4c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.2-0.3-0.4-0.4c-0.3-0.8-0.8-1.4-1.4-1.7c-0.1-0.3-0.1-0.6,0-0.9\n                c0.2-0.5-0.1-1-0.6-1.2c-0.5-0.2-1,0-1.3,0.5l-2,4c-0.2,0.4-0.1,1,0.3,1.2c0.4,0.3,0.9,0.2,1.3-0.1l1.3-1.3c0.2,0.2,0.4,0.4,0.5,0.6\n                l0.1,0.1c0.2,0.5,0.3,1.1,0.4,1.8c0,0.5,0.5,0.9,1,0.9c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.8c0-0.2,0-0.6,0-1.5\n                c0.5,2.2,1.2,4.5,3.5,5.5l0.5,1.2c0,0,0.1,0.1,0.1,0.1V7.7c-0.1,0-0.3,0.1-0.4,0.2c0,0,0,0,0,0l-2.7-5.8c-0.1-0.3-0.2-0.5-0.3-0.7\n                l2.8,0.9c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.4-0.1V0h-7.8l2,0.7C136.2,0.9,136.2,1.1,136.3,1.3z M119.9,81.2l2.8,0.5\n                c0.1,0,0.1,0,0.2,0c0.4,0,0.8-0.2,0.9-0.6c0.2-0.4,0-0.9-0.4-1.2c-0.9-0.6-0.9-1.3-0.9-2.6c0-0.1,0-0.2,0-0.3\n                c0.4-0.2,0.9-0.4,1.4-0.6c0.2,0,0.4,0.1,0.7,0.1c0.4,0.1,0.7,0.1,1.1,0.1c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.5,0.3-0.7v-0.3\n                c0.4-0.2,0.8-0.4,1.2-0.5c0.4,0.1,0.7,0.1,1.1,0.1c2.6,0,3.2-2.3,3.6-3.7c0.2-0.2,0.3-0.5,0.4-0.7v1.2c0,0.4,0.3,0.8,0.7,0.9\n                c0.4,0.1,0.8,0,1.1-0.3c0.5-0.6,0.9-0.7,1.1-0.7c0.6,0,1.4,0.5,2.2,1c1.1,0.7,2.3,1.5,3.8,1.5c0.1,0,0.1,0,0.2,0v-2.3l-7.6-3.8\n                c-0.2-0.1-0.5-0.1-0.7,0c0-0.3,0.1-0.5,0.1-0.8c0-0.4-0.3-0.8-0.7-1c-0.4-0.1-0.9,0.1-1.1,0.5c-0.6,1-0.9,2.2-1.1,3.3l-0.1,0.4\n                c-0.7,0.8-1.6,1.6-3,2.3c-0.5-0.2-1-0.4-1.6-0.7c-0.3-0.2-0.7-0.1-1,0c-0.3,0.2-0.5,0.5-0.5,0.8V74c-0.3,0.1-0.6,0.2-0.9,0.3\n                l-0.3,0.1c-1.3-0.1-2.2,0.3-2.8,1.2c-1,0.5-2,1.2-2.3,2.4c-0.2,0.9,0.1,1.8,0.8,2.8C119.4,81,119.6,81.1,119.9,81.2z M87.7,37.3\n                c-0.2-0.1-0.4-0.2-0.6-0.2l-2-0.1c-0.6,0-1,0.4-1,0.9L84,40c0,0.5,0.4,1,0.9,1l2,0.1c0,0,0,0,0,0c0.3,0,0.6-0.1,0.7-0.3l1.1-1.2\n                c0.2-0.2,0.3-0.5,0.2-0.7c0-0.3-0.2-0.5-0.4-0.7L87.7,37.3z M116.1,2.7c0.2,0.4,0.6,0.6,1.1,0.6c0.4,0,0.9-0.2,1.6-0.5\n                c0.2-0.1,0.3-0.2,0.4-0.4l1.5-2.5h-3.5C116.1,1.4,115.8,2.1,116.1,2.7z M106.1,26.3l1.4,1.6c0,0,0.1,0.1,0.1,0.1\n                c-0.2-0.3-0.2-0.6-0.1-0.9c0.2-0.4,0.5-0.6,0.9-0.6h3.9c0.4,0,0.8,0.3,0.9,0.7c0.4,1.4,0.4,2.6,0,3.9c0.2,0.4,0.1,0.8-0.2,1.1\n                l-3.2,3.3l1.3,1.3c0,0,0,0,0.1,0.1c0.1,0.2,0.2,0.4,0.2,0.6v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n                c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0.2-0.1,0.5-0.2,0.6c-0.2,0.3-0.5,0.5-0.7,0.8\n                c-1,1-1.3,1.5-1.1,2.2c0.2,0.5-0.1,1-0.5,1.2c-0.4,0.2-1,0.1-1.2-0.3c-0.7-0.9-1.3-1.4-2-1.6l-4.6,1.8c-1.1,0.8-2.3,1.5-3.5,1.9\n                c-0.9,1-1.2,1-1.5,1c-0.4,0-0.8-0.2-0.9-0.6c-0.3-0.7,0.2-1.2,0.7-1.8c0.2-0.2,0.4-0.3,0.6-0.3c0,0,0,0,0.1,0\n                c0.4-0.5,1.1-1.5,1.4-2.5c-0.5-0.9-0.6-1.8-0.3-2.8c0-0.1,0.1-0.2,0.2-0.3c-0.1,0-0.2,0.1-0.3,0.1c-0.8,0.4-1.6,0.5-2.2,0.5\n                c-1.1,0-1.7-0.5-2-0.9c-0.3-0.3-0.3-0.8-0.1-1.1c0.2-0.4,0.6-0.5,1-0.4c0.6,0.1,1.1,0.2,1.6,0.2c0.4,0,0.7,0,1-0.1\n                c0.3-0.1,0.7-0.3,1-0.5c0.7-0.6,1.2-1.8,1.7-3c0.2-0.5,0.4-1,0.6-1.5c0-0.2,0.1-0.4,0.3-0.6c0.7-1.4,2-3.1,4.7-3.7\n                C105.5,25.9,105.9,26,106.1,26.3z M102.3,30.6l-0.2,0.2v0.7c0.4,0,0.8,0.3,1,0.7c0.3,1.3-3.4,3.6-4.1,4c-0.1,0.1-0.2,0.2-0.4,0.2\n                c0.3,0,0.6,0.1,0.8,0.4c0.5,0.7,0.8,1.6,0.7,2.6c0.2,0.2,0.3,0.4,0.5,0.6c0,0,0.1,0.1,0.1,0.1c1.5-1,3-1.9,4.7-1.7l3.2-1.3l-0.9-0.9\n                c-0.1-0.1-0.1-0.1-0.1-0.2v0c0,0,0,0,0,0c-0.1-0.2-0.1-0.3-0.1-0.5c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1,0-0.2,0.1-0.3c0,0,0,0,0,0\n                c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1,0.1-0.2,0.2-0.3c0,0,0,0,0,0c0.4-0.5,0.8-0.9,1.3-1.3c0.7-0.7,1.4-1.4,1.9-2.1\n                l-3.1-3.2c0,0,0,0,0,0c0.1,0.3,0.1,0.7-0.1,0.9c-0.3,0.4-0.8,0.5-1.2,0.3C104.8,28.6,103.6,29.5,102.3,30.6z M68.1,134h3.9\n                c0.4,0,0.8-0.3,0.9-0.7c0.1-0.4,0-0.8-0.3-1.1c-1.9-1.6-1.9-3-1.6-4.3c0.9-1.8,1.8-3.6,2-5.6c0.4-1.9-0.1-3.5-1.4-5l8.7-5.3\n                c0.5-0.3,0.6-0.9,0.4-1.3c-0.3-0.5-0.8-0.6-1.3-0.4l-11.8,5.9c-0.4,0.2-0.6,0.7-0.5,1.1c0.1,0.4,0.5,0.8,1,0.8h1.5\n                c1.1,1.2,1.6,2.5,1.5,3.9c-0.2,0.8-0.6,1.7-1,2.6c-0.4,0.8-0.7,1.7-1,2.5c-0.9,1.8-1.8,3.7-2.1,5.7c0,0.3,0.1,0.6,0.2,0.8\n                C67.6,133.8,67.8,134,68.1,134z M7.6,39.4l-1,0.1c-0.4,0-0.7,0.3-0.8,0.6c-1.9,0.8-3.4,1.5-4.6,2.1c-0.4,0.2-0.8,0.4-1.1,0.6v2\n                c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0,0.5-0.2c0.3-0.2,0.7-0.4,1.2-0.7c0.9-0.3,2.1-0.4,3.3-0.6c0.5-0.1,1.1-0.1,1.6-0.2\n                c0.5-0.1,0.8-0.5,0.8-1l0-0.8l0.4-0.2l7.2-0.7c0.5-0.1,0.9-0.5,0.9-1l0-0.9l3.4-0.3c0.5,0,0.8-0.4,0.9-0.9c0-0.5-0.2-0.9-0.7-1\n                l-0.7-0.2c-0.1-0.4-0.5-0.7-1-0.7c-0.2,0-0.3,0-1,0.2c-0.2,0.1-0.4,0.2-0.6,0.4c-0.4,0.2-1,0.4-1.6,0.6\n                C13.1,37.4,10.3,38.4,7.6,39.4z M62.6,142c0.5-0.8,0.9-1.5,1.1-2.2c0.2,0.2,0.5,0.4,0.8,0.3c0.4,0,0.8-0.1,1.2-0.1\n                c0.6-0.1,1.2-0.2,1.5-0.1c0,0.4,0.3,0.8,0.7,0.9c0.1,0,0.2,0,0.3,0c0.4,0,0.7-0.2,0.9-0.6c0.8-1.7,3.4-2.6,5.9-3.6\n                c2.9-1.1,5.8-2.1,7-4.6c0.2-0.5,0.1-1-0.4-1.3c-0.4-0.3-1-0.2-1.3,0.2c-2.1,2.5-6.3,3.8-10.3,5.1c-2,0.6-4.2,1.3-6,2.1\n                c-0.1,0-0.1,0.1-0.2,0.1c0-0.1-0.1-0.3-0.1-0.4c0.4-1.2,0.8-2.4,1.1-3.6c0.1-0.5-0.1-0.9-0.5-1.1c-0.4-0.2-0.9-0.1-1.2,0.3\n                c-0.3,0.3-0.5,0.7-0.8,1c-0.9,1.2-1.7,2.3-3.4,3.1c-0.1,0.1-0.3,0.2-0.3,0.3l0.7-2c0.1-0.3,0.1-0.7-0.2-1c-0.2-0.3-0.6-0.4-0.9-0.4\n                l-6.3,1c-0.4,0.1-0.7,0.4-0.8,0.8c-0.1,0.4,0.1,0.8,0.5,1l4.9,2.9c0.2,0.1,0.3,0.1,0.5,0.1c0.1,0,0.2,0,0.3-0.1\n                c0.3-0.1,0.5-0.3,0.6-0.6l0.5-1.3c0,0.1,0,0.2,0.1,0.3c0.2,0.5,0.7,0.8,1.2,0.6c0.7-0.2,1.3-0.3,1.7-0.4c-0.4,1-0.8,1.9-1.2,2.9\n                H62.6z M1.2,142c-0.1-0.2-0.3-0.4-0.5-0.5L0,141.1v0.9H1.2z M52.3,141.6c0-0.4-0.3-0.7-0.6-0.9c-0.3-0.1-0.8-0.1-1,0.2\n                c-0.4,0.4-0.9,0.7-1.2,1.1h2.9L52.3,141.6z M15.1,0.5c0.2-0.1,0.3-0.2,0.5-0.3c0.1,0,0.1-0.1,0.2-0.2h-3.2c-1.3,1.2-2,2.4-2.3,3.8\n                c-0.6,1-1.2,2-1.8,2.8c-0.2,0.3-0.3,0.7-0.1,1C8.5,8,8.8,8.2,9.2,8.2h1.2c0.4,1.1,1.2,2.1,2,3l0.8,1.3c0.3,0.5,0.6,1,0.9,1.5\n                c0.1,0.3,0,0.6-0.2,1c-0.8-0.4-1.7-0.7-2.6-0.9c-0.4-0.1-0.9,0.1-1.1,0.5c-0.2,0.4-0.1,0.9,0.2,1.2l2,2c0.3,0.3,0.8,0.4,1.2,0.1\n                c0.2-0.1,0.4-0.2,0.5-0.4c1.9,1.5,3,3.8,3.8,5.9c-0.2,0.6-0.1,1.2,0.1,1.9c0,0.1,0.1,0.3,0.2,0.4c0.2,0.2,0.5,0.5,0.8,0.8l0,0.1\n                c0.3,1,0.6,1.9,1,2.8c0,0.1,0.1,0.1,0.1,0.2c1.6,2.4,7.7,3,9.1,3c0.6,0,1.7,0,1.8-1c0-0.4-0.1-0.7-0.4-0.9c0.3-0.3,0.6-0.6,0.9-1\n                c0.3-0.4,0.3-1-0.1-1.4c-0.4-0.4-1-0.3-1.4,0L29,29.4c-0.6,0.4-1.2,0.6-1.8,0.6c-2.1,0-4.5-2.5-6.4-4.5l0,0\n                c-0.2-0.6-0.4-1.3-0.7-1.9c0.2-0.3,0.5-0.7,0.9-1c0.3-0.3,0.5-0.5,0.7-0.8c0.3-0.4,0.3-1-0.1-1.3l-1.2-1.2c0.5-0.5,1-1,1.5-1.6\n                l1.7-1.7c0.1-0.1,0.1-0.1,0.2-0.2c0-0.1,0.1-0.1,0.1-0.2c0.2-0.5,0.2-1,0.1-1.5c-0.2-1.7-1.5-2.8-2.6-3.7c-0.5-0.4-1-0.8-1.3-1.3\n                l0-0.1c0-0.2,0-0.4,0-0.6c0-1.1,0-1.9-0.2-2.6c-0.1-0.7-0.1-1.5,0.1-2c0.3-0.3,0.6-0.5,0.9-0.8c0.2-0.2,0.4-0.4,0.7-0.6\n                c0.4-0.3,0.5-0.8,0.2-1.3c-0.2-0.4-0.8-0.6-1.2-0.4c-1,0.4-1.7,1-2.2,1.9c-0.4,0.2-0.7,0.2-1.1,0.1c-0.5-0.2-1,0.1-1.2,0.5\n                c-0.2,0.5,0,1,0.4,1.3c0.7,0.4,1.2,1,1.4,1.8L18,6.5c0.1,0.6,0.1,1.1,0.1,1.6l0,0.5c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.3,0,0.4l0,0.1\n                c-0.1,1.3-0.2,2.6,0,3.8c0.1,0.4,0.3,0.7,0.7,0.8c0.4,0.1,0.7,0,1-0.2l1.2-1.3c0.5,0.5,1,1.1,1.1,1.6c0,0.1,0,0.2,0,0.4\n                c-0.6,0.5-1.1,1.1-1.6,1.6L18.8,18c-0.3,0.2-0.6,0.3-0.8,0.3c-0.3-1.8-1.1-3.5-2-5c-0.3-1-1-2-1.8-3c-1.1-1.8-2.2-3.9-2-5.8\n                C13.1,2.9,14.2,1.2,15.1,0.5z M5,0H2.7c-1,1.7-1.8,3.2-1.2,4.3c0.2,0.4,0.7,0.9,1.9,0.9C4,5.2,4.9,5,6.1,4.7\n                c0.5-0.1,0.7-0.6,0.6-1.1C6.6,3.1,6.1,2.7,5.6,2.7c-0.6,0-1-0.1-1.1-0.3c-0.1-0.2-0.2-0.7,0.2-2C4.8,0.3,4.9,0.2,5,0z M80.6,136.8\n                c0,0.2,0,0.3,0.2,0.4l2,1.2c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.2l0.6-1.6c0-0.1,0-0.3-0.1-0.4\n                c-0.1-0.1-0.2-0.2-0.4-0.1l-2.5,0.4C80.7,136.6,80.6,136.7,80.6,136.8z M90.3,140.6c-0.2,0.5-0.5,0.9-0.8,1.4h2.4l0.2-0.7\n                c0.2-0.5,0.4-1,0.5-1.4c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0.3-0.1,0.5-0.2,0.6-0.5c0.9-1.5,1.2-3,0.9-4.6l0-0.2\n                c0.1-0.3,0.1-0.6,0.2-0.9c0-0.2,0.1-0.4,0-0.5c-0.2-0.8-0.7-1.4-1.4-1.9c-0.4-1.1-0.7-2.2-0.4-3.4l0.1-0.2c0.1-0.5-0.1-1.1-0.7-1.2\n                c-0.5-0.1-1.1,0.1-1.2,0.7l0,0v0l-0.1,0.3c0,0,0,0,0,0c-0.1,0.2-0.1,0.5-0.2,0.7c-0.3,1.3-0.5,1.9-1.2,2.1c-0.4,0.1-0.7,0.5-0.7,0.9\n                c0,0.4,0.3,0.8,0.7,1c0.3,0.1,0.7,0.2,1,0.2c0.4,0.1,0.8,0.2,1.1,0.3l0,0.1c0.3,0.7,0.5,1.3,0.6,2c-0.2,0.9-0.4,1.3-0.9,1.5\n                c-3.3-1.1-4.8-2.5-4.9-4.7c0.3-0.8,0.4-1.7,0.5-2.6c0.1-0.7,0.1-1.3,0.3-1.8c0.8-0.4,1.5-1,2.1-1.5c1.4-1.2,2.7-2.2,4.1-1.2\n                c0.4,0.3,0.9,0.2,1.3-0.1c0.3-0.3,0.4-0.9,0.1-1.3l-1.1-1.6c-0.3-0.4-0.8-0.6-1.2-0.3l-12.5,6.1c-0.5,0.2-0.7,0.8-0.5,1.2\n                c0.2,0.5,0.7,0.7,1.2,0.6l4.2-1.2c-0.3,1.3-0.5,2.4-0.5,3.4c-0.2,0.4-0.5,0.7-1,0.9c-0.4,0.1-0.6,0.4-0.7,0.8\n                c-0.1,0.4,0.1,0.7,0.4,1l7.5,5.1c0,0.1-0.1,0.1-0.1,0.2L90.3,140.6z M24.9,0.7l0.3,0.9c-0.1,0.1-0.3,0.1-0.4,0.2l-0.2,0.1\n                c-1.6-0.1-2.3,0.6-2.6,1.3c-0.7,0.4-1.4,1.1-1.5,2.1c-0.1,1.3,0.9,2.4,1.7,3.1c0.1,0.1,0.3,0.2,0.5,0.2l3,0.5c0.1,0,0.1,0,0.2,0\n                c0.4,0,0.8-0.3,0.9-0.7c0.2-0.5,0-1-0.5-1.2c-1.3-0.7-1.7-1.7-2.1-2.9c0-0.1,0-0.1-0.1-0.2c0.3-0.1,0.5-0.3,0.8-0.4\n                c0.2,0,0.5,0.1,0.7,0.1C26,4,26.4,4.1,26.7,4.1c0.3,0,0.7-0.1,0.9-0.4c0.2-0.3,0.3-0.6,0.1-0.9l-0.1-0.2c0.2-0.1,0.5-0.2,0.7-0.4\n                c1.4,0.3,2.4,0.1,3-0.7C31.8,1.1,32,0.6,32,0h-3.8c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.3-0.1-0.4-0.1h-2.8C24.8,0.2,24.8,0.5,24.9,0.7z\n                 M73.9,130.4l0.8,0.1l0.6,0.8c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.4,0,0.5-0.1l1.5-0.9c0.4-0.2,0.5-0.7,0.4-1.1\n                c-0.1-0.4-0.5-0.7-0.9-0.8l-2-0.2l-1.5-1.9c-0.3-0.4-0.8-0.5-1.2-0.3c-0.4,0.2-0.6,0.7-0.5,1.1l0.6,2.2\n                C73.2,130.1,73.5,130.4,73.9,130.4z M67.8,141.5l-0.9,0.5h2.2c0,0,0-0.1,0-0.1C68.8,141.5,68.2,141.3,67.8,141.5z M81,141\n                c-1.3-2.2-2.7-3.6-4.3-4.2c-0.4-0.2-0.9,0-1.2,0.4c-0.2,0.4-0.2,0.9,0.1,1.2l3.6,3.6H82L81,141z M116.8,114.3\n                C116.8,114.3,116.8,114.3,116.8,114.3l1.3,0c0.2,0.3,0.5,0.5,1,0.7c0.1,0,0.2,0.1,0.2,0.1c0.4,0.1,0.9,0.2,1.5,0.2\n                c2.3,0,2.6-0.7,2.6-1.2c0-0.7-0.5-1.1-1.5-1.1c-0.4,0-0.8,0-1.4,0.1l0-1.3c0.3-0.3,0.7-0.7,1-1.1c0.3-0.3,0.6-0.6,0.9-0.9l0.3-0.3\n                c1-1,2-2,3.2-2.6c0.6-0.1,1.1-0.3,1.6-0.5c0.8-0.1,1.8-0.1,2.7,0.3c0.5,0.2,1-0.1,1.2-0.6c0.2-0.5,0-1.1-0.5-1.3\n                c-0.5-0.2-0.7-0.5-0.9-0.7c0.7-1,1.1-2.2,1.3-3.5c0.6-0.7,0.9-1,0.7-1.6c-0.2-0.4-0.5-0.6-0.9-0.6c-0.4,0-0.7,0.2-1.4,1c0,0,0,0,0,0\n                c-0.1,0.1-0.1,0.1-0.2,0.2c-0.8,1-1.6,2.5-1.6,3.9c-0.3,0.4-0.7,0.7-1.2,0.9c-0.5,0.1-1.1,0.3-1.6,0.5c-0.9,0.1-1.8,0.1-2.8-0.2\n                c-0.3-0.1-0.6,0-0.9,0.2c-0.2,0.2-0.4,0.5-0.4,0.8l0,2.4l-1.1,1.2c-1.2,1.2-2,1.5-3.1,1.1c-0.3-0.1-0.6,0-0.9,0.1\n                c-0.3,0.2-0.4,0.5-0.4,0.8l0,2C115.8,113.9,116.2,114.3,116.8,114.3z M116.2,101.7h1.5c0.1,0.1,0.3,0.3,0.4,0.4c1,1,1.3,1.5,1.1,2.2\n                c-0.1,0.4,0,0.9,0.4,1.2c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.3l2-2c0,0,0,0,0,0l3.9-4c0.4-0.4,0.4-1,0-1.4l-1.4-1.4\n                c-0.4-0.4-1-0.4-1.4,0l-3.4,3.4c-0.9-0.3-1.8-0.4-2.7-0.4l-1.7,0c-0.2,0-0.4,0.1-0.5,0.2c-0.2-0.2-0.6-0.3-0.9-0.3\n                c-1.2,0.2-2.2,0.2-2.5,0.1c-0.1-0.1-0.2-0.2-0.4-0.3c-0.1-0.5,0.3-1.7,0.5-2.5c0.2-0.5,0.3-1,0.4-1.4c0,0,0,0.1,0,0.1\n                c0.2,0.3,0.5,0.5,0.8,0.5c0,0,0,0,0,0c0.5,0,0.8-0.3,1.3-1c0.1-0.2,0.2-0.4,0.2-0.7c0,0,0-0.1,0-0.3c0.2-0.4,0.4-0.8,0.6-1.2\n                c0.3-0.5,0.6-1,0.9-1.5c1.1-1.8,2.2-3.6,1.6-4.8c0.4-1.2,0.8-2.4,1.1-3.6c0.1-0.5-0.1-0.9-0.5-1.1c-0.4-0.2-0.9-0.1-1.2,0.3\n                c-0.3,0.3-0.5,0.7-0.8,1c-0.9,1.2-1.7,2.3-3.4,3.1c-0.5,0.2-0.7,0.8-0.5,1.3c0.2,0.5,0.7,0.8,1.2,0.6c0.7-0.2,1.3-0.3,1.7-0.4\n                c-0.5,1.4-1.1,2.9-1.7,4.3c-0.3,0.6-0.5,1-0.6,1.4l-0.2,0.4c-0.1,0.1-0.1,0.2-0.1,0.3c0.1-2.3-1.3-3.2-2.6-3.5\n                c-0.3-0.1-0.5,0-0.7,0.1l-2.6,1.6c-0.4,0.3-0.6,0.8-0.4,1.3s0.7,0.7,1.2,0.5c0.7-0.2,1.2-0.4,1.7-0.4c0.6,0,0.8,0.2,1.2,1.1l-1,1.3\n                c-0.5-0.2-1.2,0.1-1.4,0.6c-0.4,1,0.9,3,1.7,3.9c0.3,0.4,0.6,0.7,1.1,0.9c0.6,0.4,1.3,0.6,2,0.6c0.7,0,1.5-0.2,2.2-0.7\n                C115.6,101.6,115.9,101.7,116.2,101.7z M88.9,0.8c-1.4,2.1-3,4.5-1.7,7l-0.4,1.1c-0.1,0.3,0,0.6,0.1,0.9c0.2,0.3,0.5,0.4,0.8,0.4\n                h1.6l1.4,1.4c-0.1,0.5-0.5,1.2-0.8,1.9c-0.6,1.1-1.3,2.4-1.1,3.7c0.1,0.5,0.5,0.8,1,0.8h2c0.3,0,0.6-0.2,0.8-0.4\n                c0.2-0.3,0.2-0.6,0.1-0.9c-0.3-0.8,0.1-1.2,1.1-2.2c0.3-0.3,0.5-0.5,0.7-0.8c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0.5,0.4,1,0.9,1.1\n                l6.6,0.7c0.4,0,0.7-0.1,0.9-0.4l0,0c-2.3,3-3.1,6.5-3.7,9.3l0,0.2c-0.7,1.2-1.6,2.4-2.4,3.7l-0.6,0.8c0-0.1,0-0.1,0-0.2\n                c0.3-1.5-0.4-3-2.3-4.5c-0.4-0.3-0.9-0.3-1.2,0c-0.4,0.3-0.5,0.8-0.3,1.2l1.6,3.3c-0.5,0.4-0.9,0.9-1.3,1.4c-1,1.2-1.9,2.2-3.1,1.9\n                c-0.3-0.1-0.6,0-0.9,0.2c-0.2,0.2-0.4,0.5-0.4,0.8l0,0.8c0,2-0.1,4.7,2.5,6C91,40,91.2,40,91.3,40c0.3,0,0.5-0.1,0.7-0.3\n                c0.3-0.3,0.3-0.8,0.1-1.2c-1.7-2.5-0.5-3.9,1.6-6.1c0.8-0.8,1.5-1.6,2-2.4l0,0c0.1,0,0.1-0.1,0.1-0.2c0,0.2,0,0.3,0.1,0.5\n                c0.2,0.3,0.5,0.5,0.8,0.5c0,0,0.1,0,0.1,0c2.6,0,3.3-2.7,4-5.4c1.9-3,3.7-6.3,3.9-9.6c0.2-0.3,0.5-0.6,0.8-0.9\n                c0.3-0.3,0.4-0.7,0.2-1.1c-0.1-0.4-0.5-0.6-0.9-0.6l-0.3,0c-0.1-0.6-0.3-1.3-0.5-1.9c-0.1-0.4-0.5-0.6-0.9-0.6\n                c-0.3,0-0.8,0.2-0.9,0.6l-0.8,1.8l-6.1-0.3c-0.4,0-0.7,0.2-0.9,0.5c0-0.3-0.1-0.6-0.3-0.8l-1.7-1.8C92.4,10.1,92,9.5,91.3,9l1.1-1.1\n                c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L91,5.2c-0.2-0.2-0.5-0.3-0.8-0.3L91.9,0h-2.4C89.3,0.3,89.1,0.5,88.9,0.8z\n                 M93.1,107.3c0.6,0.3,1.3,0.8,2.1,1.4c0.1,0.1,0.2,0.2,0.3,0.3s0.2,0.2,0.3,0.2c1,1,1.8,2,2,2.3c0.2,0.4,0.5,0.7,1,0.7\n                c0.4,0,0.7-0.2,0.9-0.5c0.3-0.5,0-0.9-0.2-1.2l1.4-1.4c0.4-0.4,0.4-1,0-1.4l-2-2c-0.4-0.4-1-0.4-1.4,0l-1.3,1.3\n                c-1.8-1.7-3.8-2.3-5.8-2.9c-0.6-0.2-1.2-0.4-1.7-0.6c-0.5-0.2-1,0.1-1.2,0.5c-0.2,0.5,0,1,0.5,1.3l1.2,0.6c-0.5,0.4-0.9,0.8-1.3,1.4\n                c-0.3,0-0.5,0-0.7,0c-0.5,0-1.1,0.5-1.1,1c0,0.9,0.7,1.2,2.7,1.2C91.1,109.4,92.7,108.6,93.1,107.3z M124.8,125.1\n                c0.2,0.3,0.5,0.5,0.9,0.5c0.1,0,0.3,0,0.4-0.1l1.8-0.9c0.5-0.2,0.7-0.8,0.4-1.3l-0.9-1.8c0-0.1-0.1-0.2-0.2-0.3l-4.4-4.4\n                c-0.3-0.3-0.9-0.4-1.3-0.1c-0.4,0.3-0.5,0.8-0.3,1.2L124.8,125.1z M136,124.7c1,0.2,2,0.3,3,0.3c1.1,0,2-0.1,3-0.3V122l-0.7-0.4\n                c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.4-0.6-0.7-1.1-0.7c-0.9,0-3.8,1.4-4.7,2.6c-0.4,0.6-0.4,1.1-0.3,1.4\n                C135.3,124.4,135.6,124.6,136,124.7z M129.7,0.7c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1c0.3-0.2,0.6-0.4,0.7-0.7h-2.2\n                C129.3,0.3,129.4,0.6,129.7,0.7z M129.6,121.8c0.1,0,0.2,0,0.3,0c0.8-0.2,1.6-0.5,2.5-0.9l0.2,0c0.3,0.1,0.6,0.1,0.9,0.2\n                c0.4,0.1,0.8,0,1-0.3l0.9-1.1c2.4-1,4.7-1.8,6.5-2.2v-2.6c-0.6-0.4-1.1-1-1.6-2.3c-0.1-0.3-0.4-0.6-0.8-0.6\n                c-0.3-0.1-0.7,0.1-0.9,0.4l-4.5,5.8l-0.2,0.1c-0.6,0.2-1.2,0.5-1.8,0.7c-0.9-0.2-1.4-0.5-1.8-1.2c-0.2-0.4-0.7-0.6-1.1-0.5\n                c-0.4,0.1-0.8,0.5-0.8,1v2.8c0,0.3,0.1,0.6,0.4,0.8C129.2,121.7,129.4,121.8,129.6,121.8z M133.7,115.8c0.2,0.3,0.4,0.5,0.8,0.5\n                c0,0,0.1,0,0.1,0c0.3,0,0.6-0.1,0.8-0.4c0.2-0.2,0.4-0.5,0.6-0.7c0.9-1,2.2-2.3,1.5-4.2c-0.1-0.4-0.5-0.7-0.9-0.7\n                c-0.4,0-0.8,0.2-0.9,0.6c-0.5,1.1-1,2-1.5,2.4c-1.3-0.9-3.1-0.9-4.6-0.9l-0.3-0.2c-0.8-0.5-1.7-1-2.5-1.4c0.3-0.2,0.5-0.4,0.8-0.5\n                h1.3c0.5,0,0.9-0.4,1-0.8c0.1-0.5-0.2-0.9-0.7-1.1c-0.7-0.2-1.3-0.2-1.9-0.1h-2.3c-0.5,0-0.9,0.4-1,0.9c-0.1,0.7,0,1.3,0,1.8\n                c0,0.2-0.1,0.4,0,0.5c0,0.2,0.1,0.3,0.3,0.4c0.8,2.2,3.2,2.4,4.8,2.4C130.4,115.3,132.1,116.1,133.7,115.8z M141.1,61.2l-0.2,0\n                c-1.1-0.4-2.3-0.9-3.6-1.4l-0.9-0.4c-0.3-0.1-0.6-0.1-0.9,0.1c-0.3,0.2-0.4,0.4-0.5,0.7c-0.1,0.8,0.1,1.4,0.5,1.9\n                c0.8,0.9,2.2,1.1,4.3,1.1l0.8,0c0.4,0.2,0.9,0.3,1.4,0.5v-2.5C141.7,61.2,141.4,61.2,141.1,61.2z M108.6,0.1\n                c-0.2,0.3-0.4,0.5-0.6,0.8c-0.2,0.3-0.5,0.7-0.7,1c-0.2,0.3-0.2,0.7,0,1l0.6,1.1c0.2,0.3,0.5,0.5,0.8,0.5c0,0,0,0,0,0\n                c0.3,0,0.7-0.2,0.8-0.5c0.9-1.5,1.2-2.7,1.1-3.8c0.1-0.1,0.1-0.2,0.2-0.4h-2.5C108.5,0,108.6,0.1,108.6,0.1z M51.4,84.6\n                C51.4,84.5,51.4,84.5,51.4,84.6l0.2-0.3c0.1,0.1,0.3,0.1,0.4,0.2c1.4,2.8,4.4,4.8,6.7,6.4L59,91c0.6,1,1.3,2,1.9,3.1l0.5,0.8\n                c0.1,0.2,0.4,0.4,0.7,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2c0.8-0.6,1-1.3,1-1.8c0-1.3-1.3-2.3-3.4-3.8\n                c-1.7-2.5-3.7-5.1-6.8-6.6c-0.1-0.2-0.2-0.5-0.2-0.7c-0.1-0.3-0.3-0.6-0.6-0.7c-0.3-0.1-0.7-0.1-0.9,0.1l-0.5,0.4\n                c-0.8-0.3-1.8-0.4-2.7-0.6c-0.4-0.1-0.8,0.2-1,0.5c-0.2,0.4-0.1,0.8,0.2,1.1l0.9,0.9L44,87.6c-0.4,0.3-0.5,0.9-0.2,1.4\n                c0.3,0.4,0.9,0.5,1.3,0.3l5.9-4C51.2,85.1,51.4,84.9,51.4,84.6z M7.3,123c0.5-0.1,0.8-0.6,0.8-1.1C8,121.3,7.5,121,7,121\n                c-1.3,0.2-2.5,0.5-3.5,0.8l-2.8,0.6L0,122v2.7c1.2-0.2,2.3-0.5,3.4-0.8L7.3,123z M76.3,104.9c0.4,1.3,1,3,2.8,3.8\n                c0.1,0.1,0.3,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.3c0.3-0.3,0.4-0.8,0.2-1.1l-3.9-7.9c-0.1-0.3-0.4-0.5-0.7-0.5\n                c-0.3-0.1-0.6,0.1-0.9,0.3l-2,2c-0.3,0.3-0.4,0.8-0.2,1.2c0.2,0.4,0.6,0.6,1,0.5C75.2,102.5,75.6,103,76.3,104.9z M2.3,40.3\n                c-0.2-0.4-0.6-0.7-1.1-0.6c-0.4,0.1-0.8,0.1-1.2,0.2v2.3c0.7,0,1.3-0.3,1.9-0.7C2.3,41.2,2.5,40.7,2.3,40.3z M3.2,29.4\n                C3.7,29.3,4,28.9,4,28.4c0-0.3,0-0.6,0-0.9c0-1.3,0-3-1.9-4.3L0,17.8v6.7c0.1,0,0.3,0.1,0.5,0.2l1.6,4.2C2.3,29.3,2.7,29.6,3.2,29.4\n                z M104.3,107c0.1,0.1,0.2,0.2,0.3,0.2c0,0,0.1,0,0.1,0c0.2,0,0.3-0.2,0.3-0.4l0.1-4.5c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1\n                l-2.5,0.4c-0.1,0-0.2,0.1-0.3,0.2s0,0.3,0,0.4L104.3,107z M93,104.6c0.6,0.3,1.2,0.5,1.8,0.7c0.1,0.1,0.3,0.1,0.4,0.1\n                c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2,0c2.5,0.1,3.5-2,4.2-3.6c1.2-0.9,2.8-2.2,3.1-4c0.3,0,0.6-0.2,0.7-0.5c0.1-0.3,0.1-0.6,0-0.9\n                c-0.1-0.3-0.3-0.6-0.4-0.8c-0.5-1.2-1.2-2.9-3.3-3c-0.4,0-0.8,0.2-1,0.6c-0.2,0.4-0.1,0.8,0.2,1.1c0.9,0.9,1.4,1.6,1.7,2.3\n                c-1.3,0.9-2,2.5-2.6,4l-0.3,0.2c-0.8,0.6-1.6,1.2-2.2,1.8c-0.1-0.3-0.2-0.6-0.2-0.9l0.5-1.2c0.2-0.4,0-1-0.4-1.2s-0.9-0.2-1.3,0.2\n                c-0.5,0.5-0.7,1.1-0.8,1.8l-0.9,2.1C92.4,103.8,92.6,104.4,93,104.6z M81.1,101.1l1.4-1.3c0.4-0.4,0.4-1,0.1-1.4l-1.3-1.5\n                c-0.2-0.2-0.5-0.3-0.8-0.3l-1.6,0.1c-0.3,0-0.5,0.1-0.7,0.4c-0.2,0.2-0.2,0.5-0.2,0.8l0.2,1.2c0,0.2,0.1,0.4,0.2,0.5l1.3,1.5\n                c0.2,0.2,0.4,0.3,0.7,0.3c0,0,0,0,0,0C80.7,101.3,80.9,101.3,81.1,101.1z M91.2,94.6c0.3,0,0.6-0.1,1-0.2c0.3,0.3,0.7,0.5,1.1,0.8\n                c0.1,0,0.1,0.1,0.2,0.1v0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.5-0.2\n                c0,0,0,0,0,0l5.9-4c0.3-0.2,0.5-0.6,0.4-1c-0.1-0.4-0.3-0.7-0.7-0.8c-0.4-0.1-0.7-0.2-1.1-0.2c-1.9,0-3,1.4-4.1,2.7\n                c-0.2,0.2-0.3,0.4-0.5,0.6c-0.2-0.2-0.7-0.4-1.2-0.3c-0.3-0.8-0.3-1.9-0.3-3l0-0.8c0-0.5-0.3-0.9-0.8-1c-0.5-0.1-0.9,0.2-1.1,0.6\n                c-1.5,3.8-1.5,5.1-1,5.9C90,94.2,90.4,94.6,91.2,94.6z M57.1,46.3c-0.5-0.1-0.9,0.1-1.1,0.5l-1,2.1l-1.3,0.3\n                c-0.3,0.1-0.5,0.2-0.6,0.5C53,49.9,53,50.2,53,50.4l1.2,4.1c0.1,0.4,0.5,0.7,0.9,0.7c0.1,0,0.2,0,0.2,0l1.8-0.4\n                c0.4-0.1,0.8-0.5,0.8-1l0-6.6C57.9,46.8,57.5,46.4,57.1,46.3z M89.5,46.1c-0.2-0.3-0.6-0.4-0.9-0.3c-2.2,0.4-3.8,1.4-4.7,2.9\n                c-0.1,0.1-0.1,0.2-0.1,0.3l-0.2,1c-0.1,0.4,0.1,0.8,0.5,1c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.4-0.1,0.6-0.2c0.2-0.2,0.4-0.3,0.6-0.5\n                c1.3-1.1,2.4-2,4-1.2c0.4,0.2,0.9,0.1,1.2-0.3c0.3-0.4,0.3-0.9,0-1.3L89.5,46.1z M90.8,50.4h-2c-0.4,0-0.8,0.3-0.9,0.7L86,57\n                c-0.1,0.4,0,0.9,0.4,1.2c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.5-0.1,0.7-0.3l1.7-1.7h1.6c0.5,0,1-0.4,1-1v-4\n                C91.8,50.9,91.4,50.4,90.8,50.4z M62.6,59c-0.4-0.4-1-0.4-1.4,0l-1.4,1.4c-0.3,0.3-0.4,0.8-0.2,1.1l2.8,5.6c0.2,0.3,0.5,0.5,0.9,0.5\n                c0.1,0,0.1,0,0.2,0c0.4-0.1,0.8-0.5,0.8-1v-2.4l1.1-1.1c0.4-0.4,0.4-1,0-1.4L62.6,59z M83.7,46.7c-0.4-0.3-1-0.1-1.3,0.3\n                c-0.8,1.1-1.3,2.2-1.6,3.4l-2.7,5.9c-0.2,0.4-0.1,0.9,0.2,1.2c0.3,0.3,0.8,0.3,1.2,0.1l1.1-0.7c0.2,0.8,0.6,1.7,1,2.5\n                c0.3,1.8,0.3,3.2-0.5,4.3l-0.8-1.3c-0.3-0.5-0.9-0.6-1.4-0.3l-1.7,1c-0.2,0.1-0.4,0.4-0.4,0.6c-0.1,0.3,0,0.5,0.1,0.7l1.5,2.4\n                c0.1,0.2,0.4,0.4,0.6,0.4c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.5-0.1l1.6-1c1.6-0.6,2.5-1.4,3-2.4c0.7-1.7-0.1-3.5-0.9-5.1\n                c-0.1-0.5-0.2-1-0.3-1.6c-0.5-2-0.9-4.1-0.5-6.2l1.4-3.1C84.3,47.5,84.1,47,83.7,46.7z M6.3,54c-0.4,0.1-0.7,0.4-0.8,0.8l-0.4,2\n                c-0.1,0-0.1,0-0.2,0c-0.2,0-0.5,0-0.7,0c-1.1,0-2.5,0.2-3.6,1.6c-0.2,0.3-0.3,0.8,0,1.1C0.8,59.9,1.1,60,1.4,60c0,0,0.1,0,0.1,0\n                l7.1-1.1c0.3-0.1,0.6-0.3,0.8-0.6c0.1-0.3,0.1-0.7-0.1-1l-2.1-3C7,54.1,6.6,54,6.3,54z M92.8,76c0,0.4,0,0.7,0,1.1\n                c0,0.3,0.2,0.5,0.4,0.7C93.4,78,93.7,78,94,78l0.2,0c0,0.1,0,0.2,0.1,0.3c0.1,0.4,0.3,0.7,0.7,0.8c0.1,0,0.2,0,0.3,0\n                c0.3,0,0.5-0.1,0.7-0.3l1.4-1.6c0.3-0.3,0.3-0.8,0.1-1.1c-0.2-0.4-0.6-0.6-1-0.5l-0.9,0.2c-0.3-0.5-0.6-1-0.9-1.5\n                c-0.3-1.1-0.9-1.8-1.9-2.1c-0.1,0-0.3-0.1-0.5,0L91,72.3c-0.1,0-0.3,0-0.5,0v-1.5c0-0.4-0.3-0.8-0.6-0.9c-0.4-0.1-0.8,0-1.1,0.3\n                L86,73.4c-0.3,0.3-0.3,0.9-0.1,1.2c0.3,0.4,0.8,0.5,1.2,0.3c0.6-0.3,1.3-0.5,1.8-0.6c0.2,0.2,0.5,0.2,0.7,0.2l1.3-0.2\n                c0.7,0.1,1.2,0.4,1.7,0.8C92.8,75.4,92.8,75.7,92.8,76z M33.1,43c-0.4-0.2-0.8-0.1-1.1,0.2c-1.7,1.8-2.5,3.7-2.9,5.2\n                c-0.1,0.2-0.1,0.4-0.2,0.6l-0.3,1c-0.4,1.7-0.8,3.2-1.8,4.3l0,0c-0.3-0.1-0.6-0.1-0.9-0.2c-0.2,0-0.4,0-0.5,0\n                c-1.3,0.4-1.7,1.3-1.9,2.1c-0.3,0.1-0.5,0.1-0.8,0.2c-0.4,0.1-0.7,0.4-0.8,0.8c-0.1,0.4,0.1,0.8,0.4,1c0.9,0.6,0.9,1.3,0.9,2.6\n                c0,0.4,0,0.7,0,1.1c0,0.5,0.5,0.9,1,0.9c0,0,0,0,0,0l7.1-0.2c0.5,0,0.9-0.4,0.9-0.8c0.1-0.5-0.2-0.9-0.7-1.1\n                c-0.9-0.3-1.8-0.4-2.8-0.5c-1.8-0.2-2.9-0.3-3.6-1.4c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0.8-0.3,1.5-0.7,2.2-1.2\n                c0.8,0.2,1.3,0.5,1.6,1.1c0.2,0.4,0.5,0.6,1,0.6c0.4,0,0.8-0.3,0.9-0.7c0.4-1.4,0.2-3,0.1-4.5c-0.1-1.3-0.3-2.5-0.1-3.5l0.1-0.5\n                c0.2-0.5,0.6-1.1,1.9-1.4c0.5-0.1,0.8-0.5,0.8-1V44C33.7,43.6,33.5,43.2,33.1,43z M33,56.3c-0.1,0.4,0,0.8,0.3,1l5.3,4.8\n                c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3-0.1c0.3-0.1,0.6-0.4,0.6-0.8l0.6-3.9c0.1-0.4-0.1-0.8-0.5-1c-0.3-0.2-0.8-0.2-1.1,0.1\n                l-1.5,1.1c0,0,0,0,0,0c-0.8-1.1-1.9-2.5-3.9-2.1C33.4,55.6,33.1,55.9,33,56.3z M115.2,62.1c-1.1-2-2.5-3-4.3-3.8l-1.2-1.2\n                c-0.4-0.4-1-0.4-1.4,0l-0.1,0.1c-0.2-0.1-0.5-0.2-0.8-0.3c-0.5-0.2-1,0-1.3,0.5l-2,4c-0.2,0.4-0.1,1,0.3,1.2\n                c0.4,0.3,0.9,0.2,1.3-0.1l2.9-2.9l0,0c0.4,0.1,0.7,0.3,1.1,0.4l4.4,4.5c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0.1,0.2,0.2,0.4,0.2\n                c0.4,0.1,0.7,0.2,1,0.2c1.4,0,2.4-0.9,3.1-1.7c0.2-0.2,0.4-0.4,0.7-0.6c0.3-0.2,0.4-0.6,0.3-0.9c0-0.2-0.2-0.4-0.3-0.5\n                c0.3,0,0.6-0.2,0.7-0.4c0.3-0.4,0.2-1-0.2-1.3l-0.8-0.7c-1.8-1.4-3.8-3-3.8-4.6c0-0.5-0.3-0.9-0.8-1l-2.1-0.3\n                c-0.3-0.1-0.7,0.1-0.9,0.3c-0.2,0.3-0.3,0.6-0.2,1l0.1,0.4l-0.6-0.4c-0.7-0.7-1.2-1.6-1.8-2.4c-0.8-1.3-1.6-2.6-3.2-3.8\n                c-0.4-0.3-1-0.2-1.3,0.2l-2,2.3c-0.2,0.2-0.3,0.5-0.2,0.8c0,0.3,0.2,0.6,0.5,0.7l6.8,3.9c0.7,0.6,1.4,1.1,2.3,1.5\n                c0.1,0,0.2,0.1,0.3,0.1l0.4,0.1l5.8,3.3C117.1,60.6,116,61.3,115.2,62.1z M56,59.5c0.1,0.4,0.4,0.7,0.8,0.8c0.2,0,0.5,0.1,0.7,0.1\n                c0,0,0,0,0,0c1.8,0,3.2-1.3,4.4-2.5c0.5-0.5,1-0.9,1.4-1.2l0.4-0.3c0.2-0.1,0.3-0.1,0.5-0.1c0.3,0.5,0.8,1,1.3,1.3\n                c-0.3,0.8-0.3,1.9,0.4,3.4c0,0,0,0,0,0c-0.1,0.4-0.1,0.8,0.2,1.1c1,1,1.5,1.5,1.7,1.7c0,0,0,0,0.1,0.1c0.2,0.2,0.5,0.3,0.8,0.3\n                c0,0,0,0,0,0c0.4,0,0.7-0.3,0.9-0.6c0.1-0.4,0-0.8-0.3-1.1c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0.4-0.1,0.6-0.5,0.6-0.9v-2\n                c0-0.4-0.2-0.7-0.5-0.9c0.1,0,0.1-0.1,0.2-0.1l1.3,0c0.5,0,0.9-0.4,1-0.8c0.1-0.5-0.2-0.9-0.7-1.1c-0.7-0.2-1.4-0.2-2,0\n                c-0.6,0-1.2,0-1.8-0.2c-0.2-0.3-0.4-0.6-0.6-0.8c0.7-0.4,1.3-0.8,2-1.1c0.9-0.1,1.7-0.5,2.5-0.8l0.3-0.1c2.1-0.4,3.4,0.2,4.1,1.8\n                c0.1,0.2,0.1,0.4,0.2,0.6c0.2,0.5,0.7,0.8,1.2,0.6c0.5-0.2,0.8-0.7,0.6-1.2c-0.1-0.2-0.2-0.5-0.3-0.7c-1-2.4-2.3-3.5-4-3.5\n                c-0.9,0-1.7,0.3-2.5,0.6c-0.9,0.2-1.8,0.5-2.8,0.9c-0.6,0.1-1.4,0-2.3-1.5c-0.2-0.3-0.4-0.4-0.7-0.4c-0.3,0-0.6,0.1-0.8,0.3\n                l-1.4,1.4c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.7,0.7l-0.7,0.4c-0.2,0.1-0.4,0.2-0.5,0.3l-5.8,3.5\n                C56.1,58.7,55.9,59.1,56,59.5z M49.4,100l-0.3-1c0.1-1.8-0.5-3.6-1.8-5.3c-0.3-0.4-0.8-0.5-1.2-0.3c-0.4,0.2-0.6,0.7-0.5,1.2\n                l1.5,4.6c-0.1,1.1-0.7,2.2-1.6,3.1c-0.5,0.2-1,0.1-1.8-0.4l-1.5-1.5c1.1-1.1,1.4-2.5,1.4-3.7c0-0.3,0-0.5,0-0.8c0-0.3,0-0.6,0-0.8\n                l0-0.8c0-0.3-0.2-0.6-0.4-0.8c-0.3-0.2-0.6-0.2-0.9-0.1c-0.2,0.1-0.3,0.1-0.4,0.1c-0.6,0-1.1-0.5-1.8-1.2c-0.3-0.3-0.5-0.5-0.8-0.7\n                c-0.4-0.3-0.9-0.3-1.3,0c-0.4,0.3-0.4,0.9-0.1,1.3c0.2,0.2,0,0.6-0.2,0.9c-1.7,1.5-2,2-1.8,2.6c-0.5,0.7-1,1.3-1.8,1.8\n                c-0.4,0.2-0.8,0.4-1.2,0.6c-0.3,0-0.5,0.1-0.8,0.1c-0.4,0.1-0.9,0.1-1.3,0.1l1-1.5c0.8-0.8,1.9-1.5,2.8-2c0,0,0,0,0,0c0,0,0,0,0,0v0\n                c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.5-0.3,1-0.6,1.4-0.9l1.1-0.7c0.4-0.3,0.6-0.8,0.4-1.3L37,91.7c-0.2-0.3-0.5-0.5-0.8-0.5\n                c-0.4,0-0.7,0.1-0.9,0.4L35,92l-5.9,0.9c-0.3,0-0.5,0.2-0.6,0.4L27,95.3c-0.2,0.3-0.2,0.7-0.1,1.1c0.2,0.3,0.5,0.5,0.9,0.5\n                c0.4,0,0.8-0.1,1.2-0.1c0.4-0.1,0.8-0.1,1.2-0.1c-0.8,0.7-1.3,1.5-1.6,2.2l-1.6,2.2c-0.1,0.1-0.3,0.1-0.4,0.2l-2.4,0.4\n                c-0.3,0-0.5,0.2-0.6,0.4l-2,2.8c-0.3,0.4-0.2,1,0.2,1.3c0.2,0.2,0.4,0.2,0.6,0.2c0.3,0,0.5-0.1,0.7-0.3c1.2-1.2,2.5-2.2,4.1-2.9\n                l0.5-0.1c0.3,0,0.5-0.2,0.6-0.4c0.8-0.3,1.6-0.5,2.4-0.8c0.9-0.3,1.8-0.6,2.7-0.9c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1\n                c0.6-0.2,1-0.5,1.5-0.9c1.5-0.9,2.6-2.2,3.5-4c0.1-0.1,0.1-0.2,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.2c1.7,0.1,2.4,0.5,2.5,0.8\n                c0,0.1,0,0.2,0,0.4c-0.2,0.9-1.3,2.1-2.3,2.9c-0.1,0-0.2-0.1-0.3-0.1c-0.4-0.1-0.9,0-1.1,0.4c-0.2,0.3-0.7,1-0.4,1.7\n                c0.2,0.3,0.6,0.6,1,0.6c0.2,0,0.5,0,1-0.3c0.5,0.3,1.1,0.6,1.6,1c0.5,0.3,1,0.6,1.4,0.9l1.4,1.4c0.2,0.2,0.4,0.3,0.7,0.3\n                c0.2,0,0.3,0,0.5-0.1c0.6-0.3,1.1-0.7,1.5-1.1c1-0.5,1.9-1.6,2.8-3.3C49.5,100.5,49.5,100.2,49.4,100z M141.4,44.5\n                c0.2,0.2,0.4,0.3,0.6,0.3v-2c-0.2,0.1-0.3,0.2-0.5,0.4C141.1,43.5,141.1,44.1,141.4,44.5z M122.3,27.5L122.3,27.5\n                c0.4-0.3,0.5-0.7,0.4-1.1c0.3-1.5-0.4-3-2.3-4.5c-0.4-0.3-0.9-0.3-1.2,0c-0.4,0.3-0.5,0.8-0.3,1.2l1.6,3.3c-0.5,0.4-0.9,0.9-1.3,1.4\n                c-1,1.2-1.9,2.2-3.1,1.9c-0.3-0.1-0.6,0-0.9,0.2c-0.2,0.2-0.4,0.5-0.4,0.8l0,0.8c0,2-0.1,4.7,2.5,6c0.1,0.1,0.3,0.1,0.4,0.1\n                c0.3,0,0.5-0.1,0.7-0.3c0.3-0.3,0.3-0.8,0.1-1.2c-1.7-2.5-0.5-3.9,1.6-6.1C121.1,29.1,121.8,28.4,122.3,27.5z M140.7,39.8\n                c-0.1-0.1-0.2-0.2-0.4-0.3c-0.1-0.5,0.3-1.7,0.5-2.5c0.2-0.5,0.3-1,0.4-1.5c0.1-0.2,0.1-0.4,0.1-0.5c0.6-3-1-4-2.5-4.3\n                c-0.3-0.1-0.5,0-0.7,0.1l-2.6,1.6c-0.4,0.3-0.6,0.8-0.4,1.3c0.2,0.5,0.7,0.7,1.2,0.5c0.7-0.2,1.2-0.4,1.7-0.4c0.6,0,0.8,0.2,1.2,1.1\n                l-1,1.3c-0.5-0.2-1.2,0.1-1.4,0.6c-0.4,1,0.8,3,1.7,3.9c0.3,0.4,0.6,0.7,1.1,0.9c0.6,0.4,1.3,0.6,2,0.6c0.1,0,0.2,0,0.3,0v-2.3\n                C141.4,39.9,140.9,39.8,140.7,39.8z M67.5,68.1c-0.6,0.1-1.3,0.3-1.9,0.6l-0.7-0.7c-0.3-0.3-0.7-0.4-1.1-0.2\n                c-0.4,0.2-0.6,0.5-0.6,0.9v2c0,0.4,0.2,0.7,0.5,0.9c0.3,0.2,0.7,0.1,1-0.1c0.1-0.1,0.3-0.2,0.4-0.3l0.2,0.2c0.2,0.2,0.5,0.3,0.8,0.3\n                c0.3,0,0.6-0.2,0.7-0.4c0.3-0.5,0.7-0.9,1.1-1.1c2-0.2,3.9,0.9,5.1,3.1c0.2,0.3,0.4,0.4,0.7,0.5c0,0,0.1,0,0.1,0\n                c0.3,0,0.5-0.1,0.7-0.3l2-2c0.2-0.2,0.3-0.6,0.3-0.9c-0.1-0.3-0.3-0.6-0.6-0.7c-0.5-0.2-1.1-0.4-1.7-0.7c-1.5-0.6-3.3-1.4-5-1.4\n                C68.9,67.6,68.1,67.8,67.5,68.1z M133.8,78.6c-0.4,0-0.8,0.3-0.9,0.8c-0.1,0.4,0.1,0.8,0.4,1.1l1,0.6c0.2,0.1,0.3,0.1,0.5,0.1\n                c0.1,0,0.2,0,0.2-0.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.3,0,0.4-0.1l1.9-0.8l4.4-0.4v-3.9l-5.4,2.4L133.8,78.6z M103.1,46.8\n                c0.1,0,0.2,0,0.2-0.1l4-2.9c0.2-0.1,0.2-0.3,0.1-0.5c-0.1-0.2-0.3-0.3-0.5-0.2l-6,1.8c-0.1,0-0.3,0.2-0.3,0.3c0,0.2,0.1,0.3,0.2,0.4\n                l2,1.2C102.9,46.8,103,46.8,103.1,46.8z M124.8,35.9c1.3,0.7,1.7,1.7,2.1,2.9c0.1,0.4,0.3,0.7,0.4,1c0.2,0.4,0.5,0.6,0.9,0.6\n                c0,0,0,0,0,0l7-0.2c0.5,0,0.9-0.4,0.9-0.9c0.1-0.5-0.2-0.9-0.7-1.1c-1-0.3-1.9-0.4-2.9-0.5c-1.7-0.2-3.2-0.3-4.5-1.7\n                c-0.1-0.3-0.2-0.5-0.3-0.8c0-0.1,0-0.1-0.1-0.2c0.6-0.3,1-0.6,1.4-1c0.9,0.2,1.6,0.6,2.2,1.3c0.3,0.3,0.7,0.4,1.1,0.3\n                c0.4-0.2,0.6-0.6,0.6-1c-0.1-1.4-0.8-2.9-1.5-4.5c-0.6-1.2-1.2-2.5-1.3-3.5l0-0.4c0-0.4,0.1-0.9,1.1-1.1c0.3-0.1,0.5-0.2,0.6-0.5\n                c0.1-0.2,0.2-0.5,0.1-0.8l-1-2.8c-0.1-0.4-0.4-0.6-0.8-0.6c-0.4,0-0.7,0.1-0.9,0.5c-1.1,1.9-1.2,3.9-1.1,5.4c0,0.2,0,0.4,0,0.6\n                l0.1,1c0.2,1.5,0.3,2.9-0.1,3.9c-0.3-0.1-0.6-0.1-0.9-0.2c-0.2,0-0.4,0-0.6,0c-0.6,0.2-1.4,0.7-1.4,2.1c-0.2,0-0.3,0.1-0.5,0.1\n                c-0.4,0.1-0.7,0.4-0.8,0.8C124.2,35.3,124.4,35.7,124.8,35.9z M115,22.1c-0.5,2-0.2,3.5,0.9,4.8c0.2,0.2,0.5,0.3,0.7,0.3\n                c0.2,0,0.4-0.1,0.6-0.2c0.4-0.3,0.5-0.9,0.2-1.3c-0.6-0.9-0.7-1.9-0.5-3.2c0.2-0.8,0.5-1.6,0.9-2.3c0.8-1.9,1.6-3.8,0.8-5.5\n                c-0.5-1.1-1.6-1.9-3.3-2.5c-0.5-0.1-0.9,0-1.2,0.5c-0.2,0.4-0.1,0.9,0.2,1.2c2.3,1.9,1.8,3.8,1.1,6.2\n                C115.3,20.7,115.1,21.4,115,22.1z M122.2,4.8l-6.3,3.7c-0.2-0.3-0.3-0.7-0.5-1.2c-0.1-0.4-0.3-0.8-0.4-1.2c0,0,0,0,0-0.1\n                c0-0.1-0.1-0.2-0.2-0.2c0,0,0,0,0,0s0,0,0,0c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1,0-0.2-0.1-0.4,0c-0.1,0-0.2,0-0.4,0.1c0,0-0.1,0-0.1,0\n                l-1.3,0.8l0.7-1.8c0.7-2.9-1.7-1.1-1.7-1.1c-0.9,0.9-2.2,1.8-4,2.7c-0.5,0.2-0.7,0.8-0.5,1.3c0.2,0.5,0.7,0.7,1.2,0.6\n                c0.4-0.1,0.7-0.2,0.9-0.2c0.2,0,0.2,0,0.4,0.5c0.1,0.3,0.2,0.5,0.3,0.7c0,0,0,0.1,0.1,0.1v0c0,0,0,0,0,0c0.1,0.1,0.3,0.3,0.4,0.3\n                c0.1,0,0.1,0,0.2,0.1c0.2,0,0.5,0,0.7-0.1c0,0,0,0,0,0l2.7-1.6l0.8,2.4c0.1,0.3,0.3,0.5,0.6,0.6c0.3,0.1,0.6,0.1,0.8-0.1l0,0\n                c0.4,0.1,0.8,0.2,1.3,0.2c0.8,0,1.7-0.2,2.8-0.5c0.2-0.1,0.4-0.2,0.5-0.3l3.1-3.9c0.3-0.4,0.3-0.9,0-1.3\n                C123.1,4.7,122.6,4.6,122.2,4.8z M121.7,33.6c0.2,0,0.4-0.1,0.6-0.2l1.5-0.6c0.1-0.1,0.2-0.3,0.3-0.4l3.7-6.1c0.2-0.5-0.1-1-0.5-1.2\n                c-0.5-0.2-1,0-1.3,0.4l-5.2,6.7c-0.2,0.4-0.1,0.9,0.3,1.2C121.3,33.6,121.5,33.6,121.7,33.6z M141.5,46.4c-0.4-0.1-0.8,0-1.1,0.4\n                l-1.4,1.9c-0.2,0.3-0.2,0.7-0.1,1.1c0.2,0.3,0.6,0.5,0.9,0.5c0.2,0,0.4,0,0.5-0.1l0.2,2.2l-1.4,2c-0.1,0.1-0.3,0.1-0.4,0.2l-2.4,0.4\n                c-0.3,0-0.5,0.2-0.6,0.4l-2,2.8c-0.3,0.4-0.2,1,0.2,1.3c0.2,0.2,0.4,0.2,0.6,0.2c0.3,0,0.5-0.1,0.7-0.3c1.2-1.2,2.5-2.2,4.1-2.9\n                l0.5-0.1c0.3,0,0.5-0.2,0.6-0.4c0.5-0.2,1.1-0.4,1.6-0.6v-8.7C141.9,46.7,141.7,46.5,141.5,46.4z M132.2,19c0,0.1,0.1,0.1,0.1,0.2\n                c-0.1,0.6,0,1.5,0.1,2.8c0,0.4,0.3,0.8,0.8,0.9l1.9,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.5-0.1,0.6-0.2c0.2-0.2,0.4-0.5,0.3-0.8L136,19\n                c0-0.1,0-0.2-0.1-0.4c0.2-0.1,0.3-0.2,0.5-0.3c0.2-0.2,0.4-0.4,0.4-0.7c0-0.3,0-0.5-0.2-0.8c-0.1-0.2,0.1-1.2,0.2-1.6\n                c0.2-0.7,0.4-1.5,0.2-2.1l0.7-1.3c0.2-0.4,0.1-1-0.3-1.3c-0.4-0.3-1-0.2-1.3,0.2l-1.5,1.7c-0.3,0.3-0.3,0.7-0.1,1.1\n                c0,0,0,0.1,0.1,0.1l-2.3,4.6C132.1,18.4,132.1,18.8,132.2,19z M113.8,19.6c0.3-0.1,0.5-0.4,0.5-0.7c0.1-0.3,0-0.6-0.3-0.9l-1.4-1.4\n                c-0.2-0.2-0.4-0.3-0.7-0.3s-0.5,0.1-0.7,0.3l-0.9,0.9l-0.2-0.8c0.1-0.7,0.5-1.3,1-2c0.7-1.1,1.5-2.4,1.3-4.1c-0.1-0.5-0.5-0.9-1-0.9\n                h-3.9c-0.3,0-0.6,0.1-0.8,0.4c-0.2,0.2-0.2,0.6-0.2,0.9l1.6,5.8c-0.1,0.7,0,1.5,0.4,2.2c0,0.1,0.1,0.2,0.2,0.3l0.2,0.2l1.5,5.3\n                c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0.1,0,0.1,0c0.5-0.1,0.8-0.5,0.8-1l0-0.8C112.4,21.7,112.4,20.3,113.8,19.6z M126.9,9.5\n                c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4-0.1c-0.2,0.2-0.4,0.4-0.6,0.6l-1.4,1.4c-0.2,0.2-0.3,0.5-0.3,0.8c-0.7,1.1-1.4,2.3-2.1,3.6\n                c-0.5,0.6-0.9,1.1-1.4,1.4c-0.2,0.2-0.4,0.4-0.4,0.7c0,0.3,0.1,0.6,0.3,0.8l0.1,0.1c-0.1,0.3-0.2,0.5-0.3,0.8\n                c-0.1,0.3-0.1,0.7,0.1,0.9c1.2,1.7,2.7,2.4,4.2,2.2c0.2,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2c0.3-0.2,0.5-0.4,0.8-0.7\n                c1.1-0.7,2.2-1.8,3.1-2.8c0.9-0.9,1.8-1.9,2.5-2.2c0.2,0,0.4,0,0.7,0c0.5,0,0.9-0.3,1-0.8c0.1-0.5-0.2-1-0.7-1.1\n                c-0.5-0.2-1.1-0.1-1.7,0.1c-2.1,0.5-3.5,2.1-4.9,3.8c-0.5,0.5-0.9,1.1-1.4,1.6c-0.1,0-0.1,0.1-0.2,0.1l-2.2-2.2\n                c0.2-0.5,0.5-1,0.7-1.5c0,0,0,0,0,0c1-1.2,1.9-2.2,3.1-1.9c0.4,0.1,0.9-0.1,1.1-0.4c0.2-0.4,0.2-0.9-0.2-1.2l-1.2-1.2\n                c0.2-0.3,0.5-0.6,0.7-0.8L126.9,9.5z M112.9,49.5l-0.7-2.1c-0.1-0.3-0.4-0.6-0.8-0.6l-2.1-0.3c-0.3-0.1-0.7,0.1-0.9,0.3\n                c-0.2,0.3-0.3,0.6-0.2,1l1,2.8c0.1,0.3,0.4,0.6,0.8,0.6l2,0.3c1,0.3,1.9,0.5,2.5,0.5c0.9,0,1.6-0.3,2-0.9c0.8-1.1,0.4-2.7,0-4.4\n                c0-0.4,0-0.9,0-1.4c0-1.7,0-3.5,0.9-4.6l1.4-0.8c0,0.1,0.1,0.1,0.1,0.2c0.1,0.1,0.2,0.2,0.2,0.2c-0.1,0.1-0.2,0.3-0.3,0.4\n                c-0.2,0.2-0.3,0.5-0.2,0.8c0,0.3,0.2,0.5,0.5,0.7c1.6,1,2.7,1.9,3.3,2.6c0.2,1.2-0.5,2.2-1.7,3.8c-0.8,1-1.7,2.2-2.4,3.7\n                c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.2,0,0.3c0,0.1,0,0.3,0.1,0.4c0,0,0,0.1,0.1,0.1c0.4,0.6,0.8,1.1,1.3,1.4l-1.2,1.3\n                c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l1.9-1.9c2.2-0.2,3.9-2.9,5.7-5.8c0.3-0.5,0.6-1,0.9-1.5l3-3.2\n                c0,0,0.1,0,0.1,0c0,0,0,0,0,0c1.2,1.3,3.3,2.6,4,2.6c0.5,0,0.9-0.3,1-0.8c0.2-0.9-0.4-1.2-2.3-2.2c-0.5-0.6-1-1.1-1.5-1.3\n                c-0.1-0.1-0.2-0.2-0.2-0.4c-0.1-0.3-0.4-0.5-0.7-0.5c-0.3,0-0.6,0.1-0.8,0.3l-0.6,0.6c-1.3,0.6-2.4,2.1-3.4,3.6l-5.8,6.2l-0.5-0.5\n                l3.2-3.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3,0.1-0.6,0.3-1c0.4-0.9,0.9-2.2-0.1-3.8c-0.3-1.2-1.1-2.4-2.3-3.7c0.5-0.7,1.1-1.8,0.6-3.2\n                c-0.1-0.3-0.4-0.6-0.7-0.7c-0.3-0.1-0.7,0-0.9,0.3l-1.1,1.1c-0.2-0.2-0.5-0.3-0.8-0.2c-1.2,0.3-2.1,0.8-2.8,1.6l-4.4,2.6\n                c-0.4,0.2-0.6,0.6-0.5,1c0.1,0.4,0.4,0.7,0.8,0.8l2,0.3c0,0.9,0.2,1.9,0.5,2.9C114.5,48.6,114.1,49.3,112.9,49.5z M134.8,67.4\n                c0.6,0.7,1.4,1.1,2.4,1.4c0.4,0,0.8,0,1.1-0.1c1,0.2,2,0.5,2.7,1l1,0.6v-5l-0.5-0.9c-0.2-0.3-0.5-0.5-0.8-0.5\n                c-0.3,0-0.6,0.1-0.8,0.4c-0.2,0.3-0.4,0.6-0.6,0.9c-0.4,0.6-0.7,1.1-1.1,1.4c-0.8-0.2-1.5-0.4-2.1-0.7c-0.5-0.7-0.7-1.8-1-2.8\n                l-0.2-0.8c-0.1-0.5-0.5-0.7-1-0.8c-0.5,0-0.9,0.3-0.9,0.8C132.6,64.6,133.2,66.3,134.8,67.4z M135.3,24.4c-0.3-0.1-0.7,0.1-0.9,0.4\n                c-0.2,0.3-0.3,0.7-0.1,1c0.6,1.6,1.7,1.8,2.3,1.8c0.2,0,0.4,0,0.6-0.1c-0.2,0.5-0.6,1-1.1,1.5c-0.3,0.3-0.4,0.7-0.2,1.1\n                c0.2,0.4,0.5,0.6,0.9,0.6c0,0,0,0,0,0c0.2,0,0.5-0.1,0.7-0.3c0.1-0.1,0.5-0.4,1-0.9c1.2-0.7,1.6-2,1.9-3.2c0.4-1.5,0.7-1.9,1.2-1.9\n                c0.1,0,0.3,0,0.5,0.1v-6.7l-0.1-0.3c-0.2-1.7-0.7-3.3-1.8-4.5c-0.3-0.4-0.8-0.5-1.3-0.2c-0.4,0.2-0.6,0.8-0.4,1.2L140,18\n                c0.1,2.6-1,5.4-2.3,6.8L135.3,24.4z M132.6,56.2c0.7-0.5,1.4-1.2,1.9-1.9c1-1.2,1.9-2.2,3.1-1.9c0.4,0.1,0.9-0.1,1.1-0.4\n                c0.2-0.4,0.2-0.9-0.2-1.2l-2-2c-0.2-0.2-0.5-0.3-0.8-0.3c-0.3,0-0.6,0.2-0.7,0.4l-3.9,5.9c-0.3,0.4-0.2,0.9,0.1,1.3\n                c0.2,0.2,0.4,0.3,0.7,0.3C132.3,56.4,132.5,56.3,132.6,56.2z M127.5,62.1c-2.1,1.4-3.7,1.4-5.6,1.5c-1,0-2,0-3,0.2\n                c-0.5,0.1-0.8,0.5-0.8,1c0,0.5,0.4,0.9,0.9,0.9l6.9,0.7c0,0,0.1,0,0.1,0c0.3,0,0.5-0.1,0.7-0.3c0.3-0.3,0.6-0.6,0.9-1\n                c1-1.1,1.8-2.2,3.6-2.8c0.4-0.1,0.7-0.5,0.6-1s-0.3-0.8-0.7-0.9c0,0,0,0-0.1,0c0.1-0.4,0.2-0.8,0.1-1.2c-0.1-0.3-0.3-0.8-0.9-1.1\n                c-0.2-0.1-0.4-0.1-0.6-0.1c-0.2,0-0.5,0.1-0.7,0.1c0.2-1,0.9-2.2,1.5-3.4l0.5-1c0.1-0.2,0.2-0.4,0.3-0.6c0.8-1.6,1.6-3.5,1.3-5.4\n                c-0.1-0.4-0.3-0.7-0.7-0.8c-0.4-0.1-0.8,0-1,0.3l-2.2,2.6c-0.2,0.3-0.3,0.6-0.2,0.9c0.1,0.3,0.3,0.6,0.6,0.7\n                c0.4,0.1,0.5,0.3,0.5,0.3c0,0,0,0.2-0.1,0.5l-0.2,0.4c-0.6,1-1.8,2.2-2.9,3.4c-1.3,1.4-2.7,2.9-3.4,4.1c-0.2,0.4-0.1,0.9,0.2,1.2\n                c0.3,0.3,0.8,0.3,1.2,0.1c1.1-0.8,2.1-1.1,3-1.2c0.2,0.3,0.4,0.6,0.7,0.8c0,0-0.1,0.1-0.1,0.1C127.9,61.5,127.7,61.8,127.5,62.1z\n                 M135.4,90.9l-1.6,6.2c-0.1,0.4,0,0.8,0.3,1c0.2,0.2,0.4,0.2,0.6,0.2c0.1,0,0.3,0,0.4-0.1c1.9-0.9,2-3.2,2.1-5.1\n                c0-0.7,0-1.3,0.1-1.8l0.1-0.5c0-0.1,0.1-0.2,0.1-0.2c0.7,0.3,1.3,0.4,1.9,0.3c0.3,1,1.2,1.8,2.6,2.5v-6c0,0-0.1,0.1-0.1,0.1\n                c-0.7,0.6-1.3,1.1-2,1.3c-0.4-0.2-0.9-0.3-1.2-0.3c0.2-0.7,0.4-1.4,0.7-2.1c0.5-0.6,0.9-1.4,1.2-2.1l0.1-0.3\n                c0.4-0.5,0.9-0.9,1.3-1.1v-2.6c-1.8,0.2-2.6,1.7-3,2.6c-0.5,0.7-0.9,1.4-1.3,2.4c-0.6,0.5-1.4,0.5-2.7,0c-0.3-0.1-0.6-0.1-0.9,0.1\n                c-0.3,0.2-0.4,0.5-0.4,0.8v1.9c0,0.5,0.3,0.9,0.8,1l1.3,0.2l-0.2,0.8C135.5,90.4,135.4,90.7,135.4,90.9z\"/>\n        </pattern>\n\n        <!-- <mask id=\"noise-mask\">\n            <rect height=\"100%\" width=\"100%\" fill=\"url(#noise-pattern)\" />\n        </mask> -->\n    </defs>\n</svg>\n"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-proptypes");

/***/ })
/******/ ]);