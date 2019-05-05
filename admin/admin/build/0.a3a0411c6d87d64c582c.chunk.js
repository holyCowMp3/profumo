webpackJsonp([0],{

/***/ "./admin/src/assets/images/bg_hp_tee_shirt.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6ac7ec11a5fa963b2b64f047371f0b5e.png";

/***/ }),

/***/ "./admin/src/assets/images/social_gh.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb27ca0a5fdc90178ced9656e077c154.png";

/***/ }),

/***/ "./admin/src/assets/images/social_medium.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "846f1f43f83bc9d96a2587019497de62.png";

/***/ }),

/***/ "./admin/src/assets/images/social_reddit.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9a089b3a397e4fd0bea1271b1ae52200.png";

/***/ }),

/***/ "./admin/src/assets/images/social_slack.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9238e994f4dfb85bfa0d41f1a88010e9.png";

/***/ }),

/***/ "./admin/src/assets/images/social_so.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a78ffc1a845c485cec038fa4645d0844.png";

/***/ }),

/***/ "./admin/src/assets/images/social_twitter.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "faacdce0419f4c9f66cdff3200375a21.png";

/***/ }),

/***/ "./admin/src/components/Card/Card.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('hr', {});

var Card = exports.Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {
        className: 'card' + (this.props.plain ? ' card-plain' : '')
      }, void 0, _jsx('div', {
        className: 'header' + (this.props.hCenter ? ' text-center' : '')
      }, void 0, _jsx('h4', {
        className: 'title'
      }, void 0, this.props.title), _jsx('p', {
        className: 'category'
      }, void 0, this.props.category)), _jsx('div', {
        className: 'content' + (this.props.ctAllIcons ? ' all-icons' : '') + (this.props.ctTableFullWidth ? ' table-full-width' : '') + (this.props.ctTableResponsive ? ' table-responsive' : '') + (this.props.ctTableUpgrade ? ' table-upgrade' : '')
      }, void 0, this.props.content, _jsx('div', {
        className: 'footer'
      }, void 0, this.props.legend, this.props.stats != null ? _ref : '', _jsx('div', {
        className: 'stats'
      }, void 0, _jsx('i', {
        className: this.props.statsIcon
      }), ' ', this.props.stats))));
    }
  }]);

  return Card;
}(_react.Component);

exports.default = Card;

/***/ }),

/***/ "./admin/src/components/HomePageBlock/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * HomePageBlock
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__("./admin/src/components/HomePageBlock/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomePageBlock(_ref) {
  var children = _ref.children,
      className = _ref.className;

  return _jsx('div', {
    className: (0, _classnames2.default)(className, _styles2.default.homePageBlock)
  }, void 0, children);
}

HomePageBlock.defaultProps = {
  children: '',
  className: ''
};

exports.default = HomePageBlock;

/***/ }),

/***/ "./admin/src/components/HomePageBlock/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/HomePageBlock/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./admin/src/components/StatsCard/StatsCard.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatsCard = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/index.js");

var _Card2 = _interopRequireDefault(_Card);

var _Airplane = __webpack_require__("./node_modules/@kiwicom/orbit-components/es/icons/Airplane.js");

var _Airplane2 = _interopRequireDefault(_Airplane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {
  className: 'card'
}, void 0, _jsx(_Card2.default, {}, void 0, _jsx(_Card.CardHeader, {
  icon: _jsx(_Airplane2.default, {}),
  title: 'Card with title & description',
  subTitle: 'This is a description of the card.'
})));

var StatsCard = exports.StatsCard = function (_Component) {
  _inherits(StatsCard, _Component);

  function StatsCard() {
    _classCallCheck(this, StatsCard);

    return _possibleConstructorReturn(this, (StatsCard.__proto__ || Object.getPrototypeOf(StatsCard)).apply(this, arguments));
  }

  _createClass(StatsCard, [{
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);

  return StatsCard;
}(_react.Component);

exports.default = StatsCard;

/***/ }),

/***/ "./admin/src/components/Sub/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Sub
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js");

var _lodash = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js");

var _classnames = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _LoadingBar = __webpack_require__("./node_modules/strapi-helper-plugin/lib/src/components/LoadingBar/index.js");

var _LoadingBar2 = _interopRequireDefault(_LoadingBar);

var _styles = __webpack_require__("./admin/src/components/Sub/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = _jsx(_LoadingBar2.default, {});

function Sub(_ref) {
  var bordered = _ref.bordered,
      content = _ref.content,
      link = _ref.link,
      name = _ref.name,
      style = _ref.style,
      title = _ref.title,
      underline = _ref.underline;

  if ((0, _lodash.isObject)(title)) {
    return _jsx('div', {
      className: (0, _classnames2.default)(_styles2.default.subWrapper, bordered && _styles2.default.subBordered)
    }, void 0, _react2.default.createElement(
      _reactIntl.FormattedMessage,
      title,
      function (message) {
        return _jsx('span', {
          className: (0, _classnames2.default)(underline && _styles2.default.underlinedTitle)
        }, void 0, message, name);
      }
    ), content());
  }

  return _jsx('a', {
    className: (0, _classnames2.default)(_styles2.default.subWrapper, bordered && _styles2.default.subBordered, _styles2.default.link),
    href: 'https://blog.strapi.io/' + link,
    target: '_blank'
  }, void 0, _jsx('span', {}, void 0, title), title === '' && _ref2, content === '' && _jsx(_LoadingBar2.default, {
    style: { width: '40%' }
  }), _jsx('p', {
    style: style
  }, void 0, (0, _lodash.isFunction)(content) ? content() : content));
}

Sub.defaultProps = {
  bordered: false,
  content: function content() {
    return '';
  },
  link: '',
  name: '',
  style: {},
  title: {
    id: 'app.utils.defaultMessage',
    defaultMessage: 'app.utils.defaultMessage',
    values: {}
  },
  underline: false
};

exports.default = Sub;

/***/ }),

/***/ "./admin/src/components/Sub/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/Sub/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./admin/src/components/SupportUsCta/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * SupportUsCta
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js");

var _styles = __webpack_require__("./admin/src/components/SupportUsCta/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SupportUsCta() {
  return _jsx(_reactIntl.FormattedMessage, {
    id: 'app.components.HomePage.support.link'
  }, void 0, function (message) {
    return _jsx('a', {
      href: 'https://strapi.io/shop',
      target: '_blank',
      className: _styles2.default.supportUsCta
    }, void 0, message);
  });
}

exports.default = SupportUsCta;

/***/ }),

/***/ "./admin/src/components/SupportUsCta/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/SupportUsCta/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./admin/src/components/SupportUsTitle/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * SupportUsTitle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js");

var _styles = __webpack_require__("./admin/src/components/SupportUsTitle/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SupportUsTitle() {
  return _jsx(_reactIntl.FormattedMessage, {
    id: 'app.components.HomePage.support'
  }, void 0, function (message) {
    return _jsx('span', {
      className: _styles2.default.supportUsTitle
    }, void 0, message);
  });
}

exports.default = SupportUsTitle;

/***/ }),

/***/ "./admin/src/components/SupportUsTitle/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/SupportUsTitle/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./admin/src/containers/HomePage/BlockLink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * BlockLink
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js");

var _classnames = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./admin/src/containers/HomePage/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BlockLink(_ref) {
  var content = _ref.content,
      isDocumentation = _ref.isDocumentation,
      link = _ref.link,
      title = _ref.title;

  return _jsx('a', {
    className: (0, _classnames2.default)(_styles2.default.blockLink, isDocumentation ? _styles2.default.blockLinkDocumentation : _styles2.default.blockLinkCode),
    href: link,
    target: '_blank'
  }, void 0, _react2.default.createElement(_reactIntl.FormattedMessage, title), _react2.default.createElement(
    _reactIntl.FormattedMessage,
    content,
    function (message) {
      return _jsx('p', {}, void 0, message);
    }
  ));
}

exports.default = BlockLink;

/***/ }),

/***/ "./admin/src/containers/HomePage/CommunityContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * CommunityContent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js");

var _styles = __webpack_require__("./admin/src/containers/HomePage/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/accessible-emoji */
function CommunityContent() {
  return _jsx(_react2.default.Fragment, {}, void 0, _jsx(_reactIntl.FormattedMessage, {
    id: 'app.components.HomePage.community.content'
  }, void 0, function (message) {
    return _jsx('p', {
      className: _styles2.default.communityContentP
    }, void 0, message);
  }));
}

exports.default = CommunityContent;

/***/ }),

/***/ "./admin/src/containers/HomePage/CreateContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * CreateContent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_reactIntl.FormattedMessage, {
  id: 'app.components.HomePage.createBlock.content.second'
});

var _ref2 = _jsx(_reactIntl.FormattedMessage, {
  id: 'app.components.HomePage.createBlock.content.tutorial'
});

function CreateContent() {
  return _jsx(_reactIntl.FormattedMessage, {
    id: 'app.components.HomePage.createBlock.content.first'
  }, void 0, function (message) {
    return _jsx('p', {}, void 0, message, _jsx('span', {
      style: { fontStyle: 'italic', fontWeight: '500' }
    }, void 0, 'Content Type Builder'), _ref, _jsx('span', {
      style: { fontStyle: 'italic', fontWeight: '500' }
    }, void 0, '"Quick Start"'), _ref2);
  });
}

exports.default = CreateContent;

/***/ }),

/***/ "./admin/src/containers/HomePage/SocialLink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _social_gh = __webpack_require__("./admin/src/assets/images/social_gh.png");

var _social_gh2 = _interopRequireDefault(_social_gh);

var _social_slack = __webpack_require__("./admin/src/assets/images/social_slack.png");

var _social_slack2 = _interopRequireDefault(_social_slack);

var _social_medium = __webpack_require__("./admin/src/assets/images/social_medium.png");

var _social_medium2 = _interopRequireDefault(_social_medium);

var _social_so = __webpack_require__("./admin/src/assets/images/social_so.png");

var _social_so2 = _interopRequireDefault(_social_so);

var _social_twitter = __webpack_require__("./admin/src/assets/images/social_twitter.png");

var _social_twitter2 = _interopRequireDefault(_social_twitter);

var _social_reddit = __webpack_require__("./admin/src/assets/images/social_reddit.png");

var _social_reddit2 = _interopRequireDefault(_social_reddit);

var _styles = __webpack_require__("./admin/src/containers/HomePage/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * SocialLink
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable jsx-a11y/alt-text */
function getSrc(name) {
  switch (name) {
    case 'GitHub':
      return _social_gh2.default;
    case 'Reddit':
      return _social_reddit2.default;
    case 'Medium':
      return _social_medium2.default;
    case 'Slack':
      return _social_slack2.default;
    case 'Stack Overflow':
      return _social_so2.default;
    case 'Twitter':
      return _social_twitter2.default;
    default:
      return _social_gh2.default;
  }
}

var _ref2 = _jsx('div', {});

var SocialLink = function (_React$PureComponent) {
  _inherits(SocialLink, _React$PureComponent);

  function SocialLink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SocialLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SocialLink.__proto__ || Object.getPrototypeOf(SocialLink)).call.apply(_ref, [this].concat(args))), _this), _this.state = { imgLoaded: false }, _this.handleImgLoaded = function () {
      return _this.setState({ imgLoaded: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SocialLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          name = _props.name;
      var imgLoaded = this.state.imgLoaded;


      return _jsx('div', {
        className: (0, _classnames2.default)(_styles2.default.socialLink, 'col-md-6 col-lg-6')
      }, void 0, _jsx('a', {
        href: link,
        target: '_blank'
      }, void 0, _jsx('div', {}, void 0, !imgLoaded && _jsx('div', {
        className: _styles2.default.spinner
      }, void 0, _ref2), _jsx('img', {
        src: getSrc(name),
        onLoad: this.handleImgLoaded
      })), _jsx('span', {}, void 0, name)));
    }
  }]);

  return SocialLink;
}(_react2.default.PureComponent);

exports.default = SocialLink;

/***/ }),

/***/ "./admin/src/containers/HomePage/WelcomeContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * WelcomeContent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js");

var _propTypes = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./admin/src/containers/HomePage/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/accessible-emoji */
var _ref2 = _jsx(_reactIntl.FormattedMessage, {
  id: 'app.components.HomePage.welcomeBlock.content.raise'
});

function WelcomeContent(_ref) {
  var hasContent = _ref.hasContent;

  return _jsx(_react2.default.Fragment, {}, void 0, _jsx('div', {
    className: _styles2.default.iconWave
  }, void 0, '\uD83D\uDC4B'), !hasContent && _jsx(_reactIntl.FormattedMessage, {
    id: 'app.components.HomePage.welcomeBlock.content'
  }, void 0, function (message) {
    return _jsx('p', {
      className: _styles2.default.welcomeContentP
    }, void 0, message, _jsx('a', {
      className: _styles2.default.welcomeContentA,
      href: 'https://slack.strapi.io/',
      target: '_blank'
    }, void 0, 'Slack'), _ref2, _jsx(_reactIntl.FormattedMessage, {
      id: 'app.components.HomePage.welcomeBlock.content.issues'
    }, void 0, function (message) {
      return _jsx('a', {
        className: _styles2.default.welcomeContentA,
        href: 'https://github.com/strapi/strapi/issues/new/choose',
        target: '_blank'
      }, void 0, message);
    }));
  }), hasContent && _jsx(_reactIntl.FormattedMessage, {
    id: 'app.components.HomePage.welcomeBlock.content.again'
  }, void 0, function (message) {
    return _jsx('p', {
      className: _styles2.default.welcomeContentP
    }, void 0, message);
  }));
}

WelcomeContent.defaultProps = {
  hasContent: false
};

exports.default = WelcomeContent;

/***/ }),

/***/ "./admin/src/containers/HomePage/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticles = getArticles;
exports.getArticlesSucceeded = getArticlesSucceeded;
exports.onChange = onChange;
exports.submit = submit;
exports.submitSucceeded = submitSucceeded;

var _constants = __webpack_require__("./admin/src/containers/HomePage/constants.js");

function getArticles() {
  return {
    type: _constants.GET_ARTICLES
  };
}

function getArticlesSucceeded(articles) {
  return {
    type: _constants.GET_ARTICLES_SUCCEEDED,
    articles: articles
  };
}

function onChange(_ref) {
  var target = _ref.target;

  return {
    type: _constants.ON_CHANGE,
    value: target.value
  };
}

function submit() {
  return {
    type: _constants.SUBMIT
  };
}

function submitSucceeded() {
  return {
    type: _constants.SUBMIT_SUCCEEDED
  };
}

/***/ }),

/***/ "./admin/src/containers/HomePage/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_ARTICLES = exports.GET_ARTICLES = 'app/HomePage/GET_ARTICLES';
var GET_ARTICLES_SUCCEEDED = exports.GET_ARTICLES_SUCCEEDED = 'app/HomePage/GET_ARTICLES_SUCCEEDED';
var ON_CHANGE = exports.ON_CHANGE = 'app/HomePage/ON_CHANGE';
var SUBMIT = exports.SUBMIT = 'app/HomePage/SUBMIT';
var SUBMIT_SUCCEEDED = exports.SUBMIT_SUCCEEDED = 'app/HomePage/SUBMIT_SUCCEEDED';

/***/ }),

/***/ "./admin/src/containers/HomePage/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-redux/lib/index.js");

var _reactHelmet = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-helmet/lib/Helmet.js");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactIntl = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js");

var _redux = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/redux/lib/redux.js");

var _reselect = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/reselect/es/index.js");

var _propTypes = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js");

var _classnames = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__("./node_modules/strapi-helper-plugin/lib/src/components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _InputText = __webpack_require__("./node_modules/strapi-helper-plugin/lib/src/components/InputText/index.js");

var _InputText2 = _interopRequireDefault(_InputText);

var _auth = __webpack_require__("./node_modules/strapi-helper-plugin/lib/src/utils/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _inputsValidations = __webpack_require__("./node_modules/strapi-helper-plugin/lib/src/utils/inputsValidations.js");

var _inputsValidations2 = _interopRequireDefault(_inputsValidations);

var _HomePageBlock = __webpack_require__("./admin/src/components/HomePageBlock/index.js");

var _HomePageBlock2 = _interopRequireDefault(_HomePageBlock);

var _Sub = __webpack_require__("./admin/src/components/Sub/index.js");

var _Sub2 = _interopRequireDefault(_Sub);

var _SupportUsCta = __webpack_require__("./admin/src/components/SupportUsCta/index.js");

var _SupportUsCta2 = _interopRequireDefault(_SupportUsCta);

var _SupportUsTitle = __webpack_require__("./admin/src/components/SupportUsTitle/index.js");

var _SupportUsTitle2 = _interopRequireDefault(_SupportUsTitle);

var _selectors = __webpack_require__("./admin/src/containers/App/selectors.js");

var _injectReducer = __webpack_require__("./admin/src/utils/injectReducer.js");

var _injectReducer2 = _interopRequireDefault(_injectReducer);

var _injectSaga = __webpack_require__("./admin/src/utils/injectSaga.js");

var _injectSaga2 = _interopRequireDefault(_injectSaga);

var _BlockLink = __webpack_require__("./admin/src/containers/HomePage/BlockLink.js");

var _BlockLink2 = _interopRequireDefault(_BlockLink);

var _CommunityContent = __webpack_require__("./admin/src/containers/HomePage/CommunityContent.js");

var _CommunityContent2 = _interopRequireDefault(_CommunityContent);

var _CreateContent = __webpack_require__("./admin/src/containers/HomePage/CreateContent.js");

var _CreateContent2 = _interopRequireDefault(_CreateContent);

var _SocialLink = __webpack_require__("./admin/src/containers/HomePage/SocialLink.js");

var _SocialLink2 = _interopRequireDefault(_SocialLink);

var _WelcomeContent = __webpack_require__("./admin/src/containers/HomePage/WelcomeContent.js");

var _WelcomeContent2 = _interopRequireDefault(_WelcomeContent);

var _actions = __webpack_require__("./admin/src/containers/HomePage/actions.js");

var _selectors2 = __webpack_require__("./admin/src/containers/HomePage/selectors.js");

var _selectors3 = _interopRequireDefault(_selectors2);

var _reducer = __webpack_require__("./admin/src/containers/HomePage/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _saga = __webpack_require__("./admin/src/containers/HomePage/saga.js");

var _saga2 = _interopRequireDefault(_saga);

var _styles = __webpack_require__("./admin/src/containers/HomePage/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

var _Dashboard = __webpack_require__("./admin/src/views/Dashboard/Dashboard.js");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HomePage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _ref = _jsx(_WelcomeContent2.default, {});

var _ref2 = _jsx(_CreateContent2.default, {});

var FIRST_BLOCK = [{
  title: {
    id: 'app.components.HomePage.welcome'
  },
  content: function content() {
    return _ref;
  }
}, {
  title: {
    id: 'app.components.HomePage.create'
  },
  content: function content() {
    return _ref2;
  }
}];

var FIRST_BLOCK_LINKS = [{
  link: 'https://strapi.io/documentation/',
  content: {
    id: 'app.components.BlockLink.documentation.content'
  },
  isDocumentation: true,
  title: {
    id: 'app.components.BlockLink.documentation'
  }
}, {
  link: 'https://github.com/strapi/strapi-examples',
  content: {
    id: 'app.components.BlockLink.code.content'
  },
  isDocumentation: false,
  title: {
    id: 'app.components.BlockLink.code'
  }
}];

var _ref3 = _jsx(_CommunityContent2.default, {});

var SECOND_BLOCK = {
  title: {
    id: 'app.components.HomePage.community'
  },
  content: function content() {
    return _ref3;
  }
};

var SOCIAL_LINKS = [{
  name: 'GitHub',
  link: 'https://github.com/strapi/strapi/'
}, {
  name: 'Slack',
  link: 'https://slack.strapi.io/'
}, {
  name: 'Medium',
  link: 'https://medium.com/@strapi'
}, {
  name: 'Twitter',
  link: 'https://twitter.com/strapijs'
}, {
  name: 'Reddit',
  link: 'https://www.reddit.com/r/node/search?q=strapi'
}, {
  name: 'Stack Overflow',
  link: 'https://stackoverflow.com/questions/tagged/strapi'
}];

var _ref5 = _jsx(_WelcomeContent2.default, {
  hasContent: true
});

var _ref6 = _jsx(_reactHelmet2.default, {
  title: 'Home Page'
});

var _ref7 = _jsx(_Dashboard2.default, {});

var HomePage = exports.HomePage = function (_React$PureComponent) {
  _inherits(HomePage, _React$PureComponent);

  function HomePage() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, HomePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call.apply(_ref4, [this].concat(args))), _this), _this.state = { errors: [] }, _this.handleSubmit = function (e) {
      e.preventDefault();
      var errors = (0, _inputsValidations2.default)(_this.props.homePage.body.email, { required: true }, 'email');
      _this.setState({ errors: errors });

      if ((0, _lodash.isEmpty)(errors)) {
        return _this.props.submit();
      }
    }, _this.showFirstBlock = function () {
      return (0, _lodash.get)(_this.props.plugins.toJS(), 'content-manager.leftMenuSections.0.links', []).length === 0;
    }, _this.renderButton = function () {
      var data = _this.showFirstBlock() ? {
        className: _styles2.default.homePageTutorialButton,
        href: 'https://strapi.io/documentation/getting-started/quick-start.html#_3-create-a-content-type',
        id: 'app.components.HomePage.button.quickStart',
        primary: true
      } : {
        className: _styles2.default.homePageBlogButton,
        id: 'app.components.HomePage.button.blog',
        href: 'https://blog.strapi.io/',
        primary: false
      };

      return _jsx('a', {
        href: data.href,
        target: '_blank'
      }, void 0, _jsx(_Button2.default, {
        className: data.className,
        primary: data.primary
      }, void 0, _jsx(_reactIntl.FormattedMessage, {
        id: data.id
      })));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // eslint-disable-line react/prefer-stateless-function


  _createClass(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getArticles();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$homePage = this.props.homePage,
          articles = _props$homePage.articles,
          body = _props$homePage.body;

      var WELCOME_AGAIN_BLOCK = [{
        title: {
          id: 'app.components.HomePage.welcome.again'
        },
        name: (0, _lodash.upperFirst)(' ' + (0, _lodash.get)(_auth2.default.getUserInfo(), 'username') + '!'),
        content: function content() {
          return _ref5;
        }
      }];

      return _jsx('div', {
        className: (0, _classnames2.default)('container-fluid', _styles2.default.containerFluid)
      }, void 0, _ref6, _ref7, _jsx('div', {
        className: 'row'
      }, void 0, _jsx('div', {
        className: 'col-lg-4 col-md-4'
      }, void 0, _jsx(_HomePageBlock2.default, {
        className: _styles2.default.blockShirt
      }, void 0))));
    }
  }]);

  return HomePage;
}(_react2.default.PureComponent);

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  homePage: (0, _selectors3.default)(),
  plugins: (0, _selectors.selectPlugins)()
});

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getArticles: _actions.getArticles,
    onChange: _actions.onChange,
    submit: _actions.submit
  }, dispatch);
}

var withConnect = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);

var withReducer = (0, _injectReducer2.default)({ key: 'homePage', reducer: _reducer2.default });
var withSaga = (0, _injectSaga2.default)({ key: 'homePage', saga: _saga2.default });

// export default connect(mapDispatchToProps)(HomePage);
exports.default = (0, _redux.compose)(withReducer, withSaga, withConnect)(HomePage);

/***/ }),

/***/ "./admin/src/containers/HomePage/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/immutable/dist/immutable.js");

var _constants = __webpack_require__("./admin/src/containers/HomePage/constants.js");

/**
 *
 * HomePage reducer
 */

var initialState = (0, _immutable.fromJS)({
  articles: (0, _immutable.List)([{ content: '', title: '', link: '' }, { content: '', title: '', link: '' }]),
  body: (0, _immutable.Map)({
    email: ''
  })
});

function homePageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.GET_ARTICLES_SUCCEEDED:
      return state.update('articles', function () {
        return (0, _immutable.List)(action.articles);
      });
    case _constants.ON_CHANGE:
      return state.updateIn(['body', 'email'], function () {
        return action.value;
      });
    case _constants.SUBMIT_SUCCEEDED:
      return state.updateIn(['body', 'email'], function () {
        return '';
      });
    default:
      return state;
  }
}

exports.default = homePageReducer;

/***/ }),

/***/ "./admin/src/containers/HomePage/saga.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/whatwg-fetch/fetch.js");

var _lodash = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js");

var _removeMarkdown = __webpack_require__("./node_modules/remove-markdown/index.js");

var _removeMarkdown2 = _interopRequireDefault(_removeMarkdown);

var _effects = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/redux-saga/es/effects.js");

var _request = __webpack_require__("./node_modules/strapi-helper-plugin/lib/src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _actions = __webpack_require__("./admin/src/containers/HomePage/actions.js");

var _constants = __webpack_require__("./admin/src/containers/HomePage/constants.js");

var _selectors = __webpack_require__("./admin/src/containers/HomePage/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getArticles),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(submit),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(defaultSaga);

function getArticles() {
  var articles, posts;
  return regeneratorRuntime.wrap(function getArticles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(fetchArticles);

        case 3:
          articles = _context.sent;
          posts = articles.posts.reduce(function (acc, curr) {
            // Limit to 200 characters and remove last word.
            var content = (0, _lodash.dropRight)((0, _lodash.take)((0, _removeMarkdown2.default)(curr.markdown), 250).join('').split(' ')).join(' ');

            acc.push({
              title: curr.title,
              link: curr.slug,
              content: content + ' [...]'
            });

            return acc;
          }, []);
          _context.next = 7;
          return (0, _effects.put)((0, _actions.getArticlesSucceeded)(posts));

        case 7:
          _context.next = 11;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](0);

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 9]]);
}

function submit() {
  var body;
  return regeneratorRuntime.wrap(function submit$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.select)((0, _selectors.makeSelectBody)());

        case 3:
          body = _context2.sent;
          _context2.next = 6;
          return (0, _effects.call)(_request2.default, 'https://analytics.strapi.io/register', {
            method: 'POST',
            body: body
          });

        case 6:
          _context2.next = 10;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);

        case 10:
          _context2.prev = 10;

          strapi.notification.success('HomePage.notification.newsLetter.success');
          _context2.next = 14;
          return (0, _effects.put)((0, _actions.submitSucceeded)());

        case 14:
          return _context2.finish(10);

        case 15:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 8, 10, 15]]);
}

function defaultSaga() {
  return regeneratorRuntime.wrap(function defaultSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(_effects.takeLatest, _constants.SUBMIT, submit), (0, _effects.fork)(_effects.takeLatest, _constants.GET_ARTICLES, getArticles)]);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function fetchArticles() {
  return fetch('https://blog.strapi.io/ghost/api/v0.1/posts/?client_id=ghost-frontend&client_secret=1f260788b4ec&limit=2', {}).then(function (resp) {
    return resp.json ? resp.json() : resp;
  });
}
exports.default = defaultSaga;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/exports-loader/index.js?self.fetch!./node_modules/strapi-helper-plugin/node_modules/whatwg-fetch/fetch.js")))

/***/ }),

/***/ "./admin/src/containers/HomePage/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectHomePageDomain = exports.makeSelectBody = undefined;

var _reselect = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/reselect/es/index.js");

/**
 * Direct selector to the homePage state domain
 */
var selectHomePageDomain = function selectHomePageDomain() {
  return function (state) {
    return state.get('homePage');
  };
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

var makeSelectHomePage = function makeSelectHomePage() {
  return (0, _reselect.createSelector)(selectHomePageDomain(), function (substate) {
    return substate.toJS();
  });
};

var makeSelectBody = function makeSelectBody() {
  return (0, _reselect.createSelector)(selectHomePageDomain(), function (substate) {
    return substate.get('body').toJS();
  });
};

exports.default = makeSelectHomePage;
exports.makeSelectBody = makeSelectBody;
exports.selectHomePageDomain = selectHomePageDomain;

/***/ }),

/***/ "./admin/src/containers/HomePage/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/containers/HomePage/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../../../node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./admin/src/views/Dashboard/Dashboard.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__("./admin/src/components/Card/Card.js");

var _StatsCard = __webpack_require__("./admin/src/components/StatsCard/StatsCard.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col col-lg-3 col-sm-6'
}, void 0, _jsx(_StatsCard.StatsCard, {
  bigIcon: _jsx('i', {
    className: 'pe-7s-server text-warning'
  }),
  statsText: 'Capacity',
  statsValue: '105GB',
  statsIcon: _jsx('i', {
    className: 'fa fa-refresh'
  }),
  statsIconText: 'Updated now'
})), _jsx('div', {
  className: 'col col-lg-3 col-sm-6'
}, void 0, _jsx(_StatsCard.StatsCard, {
  bigIcon: _jsx('i', {
    className: 'pe-7s-wallet text-success'
  }),
  statsText: 'Revenue',
  statsValue: '$1,345',
  statsIcon: _jsx('i', {
    className: 'fa fa-calendar-o'
  }),
  statsIconText: 'Last day'
})), _jsx('div', {
  className: 'col col-lg-3 col-sm-6'
}, void 0, _jsx(_StatsCard.StatsCard, {
  bigIcon: _jsx('i', {
    className: 'pe-7s-graph1 text-danger'
  }),
  statsText: 'Errors',
  statsValue: '23',
  statsIcon: _jsx('i', {
    className: 'fa fa-clock-o'
  }),
  statsIconText: 'In the last hour'
})), _jsx('div', {
  className: 'col col-lg-3 col-sm-6'
}, void 0, _jsx(_StatsCard.StatsCard, {
  bigIcon: _jsx('i', {
    className: 'fa fa-twitter text-info'
  }),
  statsText: 'Followers',
  statsValue: '+45',
  statsIcon: _jsx('i', {
    className: 'fa fa-refresh'
  }),
  statsIconText: 'Updated now'
})));

var _ref2 = _jsx('div', {
  className: 'ct-chart'
}, void 0);

var _ref3 = _jsx('div', {
  id: 'chartPreferences',
  className: 'ct-chart ct-perfect-fourth'
}, void 0);

var _ref4 = _jsx('div', {
  className: 'ct-chart'
}, void 0);

var _ref5 = _jsx('div', {
  className: 'col col-md-8'
}, void 0);

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {
        className: 'content'
      }, void 0, _ref, _jsx('div', {
        className: 'row'
      }, void 0, _jsx('div', {
        className: 'col col-md-8'
      }, void 0, _jsx(_Card.Card, {
        statsIcon: 'fa fa-history',
        id: 'chartHours',
        title: 'Users Behavior',
        category: '24 Hours performance',
        stats: 'Updated 3 minutes ago',
        content: _ref2,
        legend: _jsx('div', {
          className: 'legend'
        }, void 0)
      })), _jsx('div', {
        className: 'col col-md-4'
      }, void 0, _jsx(_Card.Card, {
        statsIcon: 'fa fa-clock-o',
        title: 'Email Statistics',
        category: 'Last Campaign Performance',
        stats: 'Campaign sent 2 days ago',
        content: _ref3,
        legend: _jsx('div', {
          className: 'legend'
        }, void 0)
      }))), _jsx('div', {
        className: 'row'
      }, void 0, _jsx('div', {
        className: 'col col-md-8'
      }, void 0, _jsx(_Card.Card, {
        id: 'chartActivity',
        title: '2014 Sales',
        category: 'All products including Taxes',
        stats: 'Data information certified',
        statsIcon: 'fa fa-check',
        content: _ref4,
        legend: _jsx('div', {
          className: 'legend'
        }, void 0)
      })), _ref5));
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/es/Icon/consts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ICON_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};
/* harmony export (immutable) */ __webpack_exports__["b"] = ICON_SIZES;

const ICON_COLORS = {
  ATTENTION: "attention",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  CRITICAL: "critical"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ICON_COLORS;


/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/es/Icon/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consts__ = __webpack_require__("./node_modules/@kiwicom/orbit-components/es/Icon/consts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultTheme__ = __webpack_require__("./node_modules/@kiwicom/orbit-components/es/defaultTheme.js");




const getSize = size => ({
  theme
}) => {
  const tokens = {
    [__WEBPACK_IMPORTED_MODULE_2__consts__["b" /* ICON_SIZES */].SMALL]: theme.orbit.widthIconSmall,
    [__WEBPACK_IMPORTED_MODULE_2__consts__["b" /* ICON_SIZES */].MEDIUM]: theme.orbit.widthIconMedium,
    [__WEBPACK_IMPORTED_MODULE_2__consts__["b" /* ICON_SIZES */].LARGE]: theme.orbit.widthIconLarge
  };
  return tokens[size] || tokens[__WEBPACK_IMPORTED_MODULE_2__consts__["b" /* ICON_SIZES */].MEDIUM];
};
/* unused harmony export getSize */


const getColor = () => ({
  theme,
  color
}) => {
  const tokens = {
    [__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* ICON_COLORS */].ATTENTION]: theme.orbit.colorIconAttention,
    [__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* ICON_COLORS */].PRIMARY]: theme.orbit.colorIconPrimary,
    [__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* ICON_COLORS */].SECONDARY]: theme.orbit.colorIconSecondary,
    [__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* ICON_COLORS */].TERTIARY]: theme.orbit.colorIconTertiary,
    [__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* ICON_COLORS */].INFO]: theme.orbit.colorIconInfo,
    [__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* ICON_COLORS */].SUCCESS]: theme.orbit.colorIconSuccess,
    [__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* ICON_COLORS */].WARNING]: theme.orbit.colorIconWarning,
    [__WEBPACK_IMPORTED_MODULE_2__consts__["a" /* ICON_COLORS */].CRITICAL]: theme.orbit.colorIconCritical
  };
  return tokens[color];
};

const reverse = ({
  reverseOnRtl,
  theme
}) => reverseOnRtl && theme.rtl && Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["css"])(["transform:scale(-1,1);"]);

const StyledIcon = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"])(({
  className,
  viewBox,
  dataTest,
  children,
  ariaHidden,
  ariaLabel
}) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", {
  className: className,
  viewBox: viewBox,
  "data-test": dataTest,
  preserveAspectRatio: "xMidYMid meet",
  "aria-hidden": ariaHidden ? "true" : undefined,
  "aria-label": ariaLabel
}, children)).withConfig({
  displayName: "Icon__StyledIcon",
  componentId: "sc-1pnzn3g-0"
})(["width:", ";height:", ";vertical-align:middle;fill:currentColor;color:", ";", ";"], ({
  size
}) => getSize(size), ({
  size
}) => getSize(size), ({
  color,
  customColor
}) => customColor || color && getColor(), reverse);
StyledIcon.defaultProps = {
  theme: __WEBPACK_IMPORTED_MODULE_3__defaultTheme__["a" /* default */]
};

const OrbitIcon = props => {
  const {
    size,
    color,
    customColor,
    className,
    children,
    viewBox,
    dataTest,
    ariaHidden,
    reverseOnRtl,
    ariaLabel
  } = props;
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](StyledIcon, {
    viewBox: viewBox,
    size: size,
    className: className,
    dataTest: dataTest,
    customColor: customColor,
    color: color,
    ariaHidden: ariaHidden,
    reverseOnRtl: reverseOnRtl,
    ariaLabel: ariaLabel
  }, children);
};

OrbitIcon.defaultProps = {
  size: __WEBPACK_IMPORTED_MODULE_2__consts__["b" /* ICON_SIZES */].MEDIUM
};
/* harmony default export */ __webpack_exports__["a"] = (OrbitIcon);

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/es/defaultTheme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kiwicom_orbit_design_tokens__ = __webpack_require__("./node_modules/@kiwicom/orbit-design-tokens/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kiwicom_orbit_design_tokens___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__kiwicom_orbit_design_tokens__);

/* harmony default export */ __webpack_exports__["a"] = ({
  orbit: __WEBPACK_IMPORTED_MODULE_0__kiwicom_orbit_design_tokens__["defaultTokens"],
  rtl: false
});

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/es/icons/Airplane.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = Airplane;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__("./node_modules/@kiwicom/orbit-components/es/Icon/index.js");
/* eslint-disable */


function Airplane(props) {
  const {
    color,
    size,
    customColor,
    className,
    dataTest,
    ariaHidden,
    ariaLabel,
    reverseOnRtl
  } = props;
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], {
    viewBox: "0 0 24 24",
    size: size,
    color: color,
    customColor: customColor,
    className: className,
    dataTest: dataTest,
    ariaHidden: ariaHidden,
    reverseOnRtl: reverseOnRtl,
    ariaLabel: ariaLabel
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M17.178 21l-4.104-7.835-4.104 4.104.373 2.612L8.223 21l-1.865-3.358L3 15.777l1.12-1.12 2.611.373 4.104-4.104L3 6.822 4.492 5.33l9.7 2.239 4.105-4.104a1.58 1.58 0 0 1 2.238 0c.62.619.62 1.619 0 2.238l-4.104 4.104 2.239 9.7L17.178 21z"
  }));
}

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Button/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOKENS = exports.SIZE_OPTIONS = exports.TYPE_OPTIONS = void 0;
var TYPE_OPTIONS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  CRITICAL: "critical",
  FACEBOOK: "facebook",
  GOOGLE: "google",
  WHITE: "white"
};
exports.TYPE_OPTIONS = TYPE_OPTIONS;
var SIZE_OPTIONS = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large"
};
exports.SIZE_OPTIONS = SIZE_OPTIONS;
var TOKENS = {
  // Size tokens
  heightButton: "heightButton",
  loadingWidth: "loadingWidth",
  loadingHeight: "loadingHeight",
  fontSizeButton: "fontSizeButton",
  paddingButton: "paddingButton",
  paddingButtonWithIcons: "paddingButtonWithIcons",
  paddingButtonWithLeftIcon: "paddingButtonWithLeftIcon",
  paddingButtonWithRightIcon: "paddingButtonWithRightIcon",
  marginRightIcon: "marginRightIcon",
  // Type tokens
  backgroundButton: "backgroundButton",
  backgroundButtonHover: "backgroundButtonHover",
  backgroundButtonActive: "backgroundButtonActive",
  backgroundButtonBordered: "backgroundButtonBordered",
  backgroundButtonBorderedHover: "backgroundButtonBorderedHover",
  backgroundButtonBorderedActive: "backgroundButtonBorderedActive",
  colorTextButton: "colorTextButton",
  colorTextButtonBordered: "colorTextButtonBordered",
  colorTextButtonHover: "colorTextButtonHover",
  colorTextButtonBorderedHover: "colorTextButtonBorderedHover",
  colorTextButtonActive: "colorTextButtonActive",
  colorTextButtonBorderedActive: "colorTextButtonBorderedActive",
  borderColorButton: "borderColorButton",
  borderColorButtonHover: "borderColorButtonHover",
  borderColorButtonActive: "borderColorButtonActive"
};
exports.TOKENS = TOKENS;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/ButtonLink/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOKENS = exports.SIZES = exports.TYPES = void 0;
var TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
exports.TYPES = TYPES;
var SIZES = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large"
};
exports.SIZES = SIZES;
var TOKENS = {
  backgroundButton: "backgroundButton",
  backgroundButtonHover: "backgroundButtonHover",
  backgroundButtonActive: "backgroundButtonActive",
  colorTextButton: "colorTextButton",
  colorTextButtonHover: "colorTextButtonHover",
  colorTextButtonActive: "colorTextButtonActive",
  heightButton: "heightButton",
  fontSizeButton: "fontSizeButton",
  paddingButton: "paddingButton",
  paddingButtonWithIcons: "paddingButtonWithIcons",
  paddingButtonWithLeftIcon: "paddingButtonWithLeftIcon",
  paddingButtonWithRightIcon: "paddingButtonWithRightIcon",
  marginRightIcon: "marginRightIcon"
};
exports.TOKENS = TOKENS;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/ButtonLink/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledButtonLink = void 0;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _consts = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/ButtonLink/consts.js");

var _consts2 = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Icon/consts.js");

var _Icon = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Icon/index.js");

var _rtl = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/rtl/index.js");

var _consts3 = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Button/consts.js");

var _getSpacingToken = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/common/getSpacingToken/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getSizeToken = function getSizeToken(name) {
  return function (_ref) {
    var _TOKENS$heightButton, _TOKENS$fontSizeButto, _tokens;

    var theme = _ref.theme,
        size = _ref.size;
    var tokens = (_tokens = {}, _defineProperty(_tokens, _consts.TOKENS.heightButton, (_TOKENS$heightButton = {}, _defineProperty(_TOKENS$heightButton, _consts.SIZES.LARGE, theme.orbit.heightButtonLarge), _defineProperty(_TOKENS$heightButton, _consts.SIZES.NORMAL, theme.orbit.heightButtonNormal), _defineProperty(_TOKENS$heightButton, _consts.SIZES.SMALL, theme.orbit.heightButtonSmall), _TOKENS$heightButton)), _defineProperty(_tokens, _consts.TOKENS.fontSizeButton, (_TOKENS$fontSizeButto = {}, _defineProperty(_TOKENS$fontSizeButto, _consts.SIZES.LARGE, theme.orbit.fontSizeButtonLarge), _defineProperty(_TOKENS$fontSizeButto, _consts.SIZES.NORMAL, theme.orbit.fontSizeButtonNormal), _defineProperty(_TOKENS$fontSizeButto, _consts.SIZES.SMALL, theme.orbit.fontSizeButtonSmall), _TOKENS$fontSizeButto)), _tokens);
    return tokens[name][size];
  };
};

var getTypeToken = function getTypeToken(name) {
  return function (_ref2) {
    var _TOKENS$backgroundBut, _TOKENS$backgroundBut2, _TOKENS$backgroundBut3, _TOKENS$colorTextButt, _TOKENS$colorTextButt2, _TOKENS$colorTextButt3, _tokens2;

    var theme = _ref2.theme,
        type = _ref2.type;
    var tokens = (_tokens2 = {}, _defineProperty(_tokens2, _consts.TOKENS.backgroundButton, (_TOKENS$backgroundBut = {}, _defineProperty(_TOKENS$backgroundBut, _consts.TYPES.PRIMARY, theme.orbit.backgroundButtonLinkPrimary), _defineProperty(_TOKENS$backgroundBut, _consts.TYPES.SECONDARY, theme.orbit.backgroundButtonLinkSecondary), _TOKENS$backgroundBut)), _defineProperty(_tokens2, _consts.TOKENS.backgroundButtonHover, (_TOKENS$backgroundBut2 = {}, _defineProperty(_TOKENS$backgroundBut2, _consts.TYPES.PRIMARY, theme.orbit.backgroundButtonLinkPrimaryHover), _defineProperty(_TOKENS$backgroundBut2, _consts.TYPES.SECONDARY, theme.orbit.backgroundButtonLinkSecondaryHover), _TOKENS$backgroundBut2)), _defineProperty(_tokens2, _consts.TOKENS.backgroundButtonActive, (_TOKENS$backgroundBut3 = {}, _defineProperty(_TOKENS$backgroundBut3, _consts.TYPES.PRIMARY, theme.orbit.backgroundButtonLinkPrimaryHover), _defineProperty(_TOKENS$backgroundBut3, _consts.TYPES.SECONDARY, theme.orbit.backgroundButtonLinkSecondaryHover), _TOKENS$backgroundBut3)), _defineProperty(_tokens2, _consts.TOKENS.colorTextButton, (_TOKENS$colorTextButt = {}, _defineProperty(_TOKENS$colorTextButt, _consts.TYPES.PRIMARY, theme.orbit.colorTextButtonLinkPrimary), _defineProperty(_TOKENS$colorTextButt, _consts.TYPES.SECONDARY, theme.orbit.colorTextButtonLinkSecondary), _TOKENS$colorTextButt)), _defineProperty(_tokens2, _consts.TOKENS.colorTextButtonHover, (_TOKENS$colorTextButt2 = {}, _defineProperty(_TOKENS$colorTextButt2, _consts.TYPES.PRIMARY, theme.orbit.colorTextButtonLinkPrimaryHover), _defineProperty(_TOKENS$colorTextButt2, _consts.TYPES.SECONDARY, theme.orbit.colorTextButtonLinkSecondaryHover), _TOKENS$colorTextButt2)), _defineProperty(_tokens2, _consts.TOKENS.colorTextButtonActive, (_TOKENS$colorTextButt3 = {}, _defineProperty(_TOKENS$colorTextButt3, _consts.TYPES.PRIMARY, theme.orbit.colorTextButtonLinkPrimaryActive), _defineProperty(_TOKENS$colorTextButt3, _consts.TYPES.SECONDARY, theme.orbit.colorTextButtonLinkSecondaryActive), _TOKENS$colorTextButt3)), _tokens2);
    return tokens[name][type];
  };
};

var buttonSpacing = function buttonSpacing() {
  return function (_ref3) {
    var _TOKENS$paddingButton, _TOKENS$paddingButton2, _TOKENS$paddingButton3, _TOKENS$paddingButton4, _tokens3;

    var theme = _ref3.theme,
        onlyIcon = _ref3.onlyIcon,
        iconRight = _ref3.iconRight,
        iconLeft = _ref3.iconLeft,
        size = _ref3.size;
    if (onlyIcon) return (0, _rtl.rtlSpacing)(theme.orbit.paddingButtonWithoutText);
    var tokens = (_tokens3 = {}, _defineProperty(_tokens3, _consts.TOKENS.paddingButton, (_TOKENS$paddingButton = {}, _defineProperty(_TOKENS$paddingButton, _consts3.SIZE_OPTIONS.LARGE, theme.orbit.paddingButtonLarge), _defineProperty(_TOKENS$paddingButton, _consts3.SIZE_OPTIONS.NORMAL, theme.orbit.paddingButtonNormal), _defineProperty(_TOKENS$paddingButton, _consts3.SIZE_OPTIONS.SMALL, theme.orbit.paddingButtonSmall), _TOKENS$paddingButton)), _defineProperty(_tokens3, _consts.TOKENS.paddingButtonWithIcons, (_TOKENS$paddingButton2 = {}, _defineProperty(_TOKENS$paddingButton2, _consts3.SIZE_OPTIONS.LARGE, theme.orbit.paddingButtonLargeWithIcons), _defineProperty(_TOKENS$paddingButton2, _consts3.SIZE_OPTIONS.NORMAL, theme.orbit.paddingButtonNormalWithIcons), _defineProperty(_TOKENS$paddingButton2, _consts3.SIZE_OPTIONS.SMALL, theme.orbit.paddingButtonSmallWithIcons), _TOKENS$paddingButton2)), _defineProperty(_tokens3, _consts.TOKENS.paddingButtonWithLeftIcon, (_TOKENS$paddingButton3 = {}, _defineProperty(_TOKENS$paddingButton3, _consts3.SIZE_OPTIONS.LARGE, theme.orbit.paddingButtonLargeWithLeftIcon), _defineProperty(_TOKENS$paddingButton3, _consts3.SIZE_OPTIONS.NORMAL, theme.orbit.paddingButtonNormalWithLeftIcon), _defineProperty(_TOKENS$paddingButton3, _consts3.SIZE_OPTIONS.SMALL, theme.orbit.paddingButtonSmallWithLeftIcon), _TOKENS$paddingButton3)), _defineProperty(_tokens3, _consts.TOKENS.paddingButtonWithRightIcon, (_TOKENS$paddingButton4 = {}, _defineProperty(_TOKENS$paddingButton4, _consts3.SIZE_OPTIONS.LARGE, theme.orbit.paddingButtonLargeWithRightIcon), _defineProperty(_TOKENS$paddingButton4, _consts3.SIZE_OPTIONS.NORMAL, theme.orbit.paddingButtonNormalWithRightIcon), _defineProperty(_TOKENS$paddingButton4, _consts3.SIZE_OPTIONS.SMALL, theme.orbit.paddingButtonSmallWithRightIcon), _TOKENS$paddingButton4)), _tokens3);

    if (iconLeft && iconRight) {
      return (0, _rtl.rtlSpacing)(tokens[_consts.TOKENS.paddingButtonWithIcons][size]);
    }

    if (iconLeft && !iconRight) {
      return (0, _rtl.rtlSpacing)(tokens[_consts.TOKENS.paddingButtonWithLeftIcon][size]);
    }

    if (!iconLeft && iconRight) {
      return (0, _rtl.rtlSpacing)(tokens[_consts.TOKENS.paddingButtonWithRightIcon][size]);
    }

    return (0, _rtl.rtlSpacing)(tokens[_consts.TOKENS.paddingButton][size]);
  };
};

var iconSpacing = function iconSpacing() {
  return function (_ref4) {
    var _TOKENS$marginRightIc;

    var theme = _ref4.theme,
        right = _ref4.right,
        size = _ref4.size,
        onlyIcon = _ref4.onlyIcon;

    var tokens = _defineProperty({}, _consts.TOKENS.marginRightIcon, (_TOKENS$marginRightIc = {}, _defineProperty(_TOKENS$marginRightIc, _consts.SIZES.LARGE, theme.orbit.marginButtonIconLarge), _defineProperty(_TOKENS$marginRightIc, _consts.SIZES.NORMAL, theme.orbit.marginButtonIconNormal), _defineProperty(_TOKENS$marginRightIc, _consts.SIZES.SMALL, theme.orbit.marginButtonIconSmall), _TOKENS$marginRightIc));

    if (onlyIcon) {
      return null;
    }

    return (0, _rtl.rtlSpacing)(right ? "0 0 0 ".concat(tokens[_consts.TOKENS.marginRightIcon][size]) : "0 ".concat(tokens[_consts.TOKENS.marginRightIcon][size], " 0 0"));
  };
};

var IconContainer = (0, _styledComponents.default)(function (_ref5) {
  var className = _ref5.className,
      children = _ref5.children;
  return React.createElement("div", {
    className: className
  }, children);
}).withConfig({
  displayName: "ButtonLink__IconContainer",
  componentId: "sc-14jv5cl-0"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;margin:", ";> *{width:", ";height:", ";}"], iconSpacing(), function (_ref6) {
  var sizeIcon = _ref6.sizeIcon;
  return (0, _Icon.getSize)(sizeIcon);
}, function (_ref7) {
  var sizeIcon = _ref7.sizeIcon;
  return (0, _Icon.getSize)(sizeIcon);
});
IconContainer.defaultProps = {
  theme: _defaultTheme.default
};
var StyledButtonLink = (0, _styledComponents.default)(function (_ref8) {
  var onlyIcon = _ref8.onlyIcon,
      component = _ref8.component,
      circled = _ref8.circled,
      external = _ref8.external,
      block = _ref8.block,
      type = _ref8.type,
      icon = _ref8.icon,
      iconLeft = _ref8.iconLeft,
      iconRight = _ref8.iconRight,
      sizeIcon = _ref8.sizeIcon,
      width = _ref8.width,
      children = _ref8.children,
      transparent = _ref8.transparent,
      style = _ref8.style,
      theme = _ref8.theme,
      dataTest = _ref8.dataTest,
      submit = _ref8.submit,
      buttonRef = _ref8.buttonRef,
      ariaControls = _ref8.ariaControls,
      ariaExpanded = _ref8.ariaExpanded,
      spaceAfter = _ref8.spaceAfter,
      props = _objectWithoutProperties(_ref8, ["onlyIcon", "component", "circled", "external", "block", "type", "icon", "iconLeft", "iconRight", "sizeIcon", "width", "children", "transparent", "style", "theme", "dataTest", "submit", "buttonRef", "ariaControls", "ariaExpanded", "spaceAfter"]);

  var isButtonWithHref = component === "button" && props.href;
  var Component = isButtonWithHref ? "a" : component;
  var buttonType = submit ? "submit" : "button";
  return React.createElement(Component, _extends({
    "data-test": dataTest,
    type: !isButtonWithHref ? buttonType : undefined
  }, props, {
    ref: buttonRef,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded
  }), children);
}).withConfig({
  displayName: "ButtonLink__StyledButtonLink",
  componentId: "sc-14jv5cl-1"
})(["font-family:", ";box-sizing:border-box;appearance:none;display:inline-flex;justify-content:center;align-items:center;width:", ";height:", ";background:", ";color:", "!important;border:0;border-radius:", ";padding:", ";font-weight:", "!important;font-size:", ";cursor:", ";opacity:", ";transition:all 0.15s ease-in-out !important;outline:0;text-decoration:none;margin-bottom:", ";&:hover{", ";}&:active{", ";}&:focus{", ";}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.fontFamily;
}, function (_ref10) {
  var block = _ref10.block,
      width = _ref10.width,
      onlyIcon = _ref10.onlyIcon;
  return block ? "100%" : width && "".concat(width, "px") || onlyIcon && getSizeToken(_consts.TOKENS.heightButton) || "auto";
}, getSizeToken(_consts.TOKENS.heightButton), getTypeToken(_consts.TOKENS.backgroundButton), getTypeToken(_consts.TOKENS.colorTextButton), function (_ref11) {
  var theme = _ref11.theme,
      circled = _ref11.circled;
  return circled ? getSizeToken(_consts.TOKENS.heightButton) : theme.orbit.borderRadiusNormal;
}, buttonSpacing(), function (_ref12) {
  var theme = _ref12.theme;
  return theme.orbit.fontWeightBold;
}, getSizeToken(_consts.TOKENS.fontSizeButton), function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? "not-allowed" : "pointer";
}, function (_ref14) {
  var disabled = _ref14.disabled,
      theme = _ref14.theme;
  return disabled ? theme.orbit.opacityButtonDisabled : "1";
}, _getSpacingToken.default, function (_ref15) {
  var transparent = _ref15.transparent,
      disabled = _ref15.disabled;
  return !disabled && (0, _styledComponents.css)(["background:", ";color:", "!important;"], !transparent && getTypeToken(_consts.TOKENS.backgroundButtonHover), getTypeToken(_consts.TOKENS.colorTextButtonHover));
}, function (_ref16) {
  var transparent = _ref16.transparent,
      disabled = _ref16.disabled,
      theme = _ref16.theme;
  return !disabled && (0, _styledComponents.css)(["transform:scale(", ");background:", ";color:", "!important;"], theme.orbit.modifierScaleButtonActive, !transparent && getTypeToken(_consts.TOKENS.backgroundButtonActive), getTypeToken(_consts.TOKENS.colorTextButtonActive));
}, function (_ref17) {
  var disabled = _ref17.disabled,
      theme = _ref17.theme;
  return !disabled && (0, _styledComponents.css)(["box-shadow:0 0 1px 1px ", ",0 0 1px 3px rgba(1,118,210,0.6);&:active{box-shadow:none;}"], theme.orbit.colorTextButtonWhiteBordered);
});
exports.StyledButtonLink = StyledButtonLink;
StyledButtonLink.defaultProps = {
  theme: _defaultTheme.default
}; // $FlowExpected

var ButtonLink = React.forwardRef(function (props, ref) {
  var external = props.external,
      children = props.children,
      _props$component = props.component,
      component = _props$component === void 0 ? "button" : _props$component,
      href = props.href,
      _props$size = props.size,
      size = _props$size === void 0 ? _consts.SIZES.NORMAL : _props$size,
      icon = props.icon,
      iconRight = props.iconRight,
      _props$type = props.type,
      type = _props$type === void 0 ? _consts.TYPES.PRIMARY : _props$type,
      onClick = props.onClick,
      _props$width = props.width,
      width = _props$width === void 0 ? 0 : _props$width,
      role = props.role;
  var iconLeft = props.iconLeft || icon;
  var sizeIcon = size === _consts2.ICON_SIZES.SMALL ? _consts2.ICON_SIZES.SMALL : _consts2.ICON_SIZES.MEDIUM;
  var onlyIcon = iconLeft && !children;
  return React.createElement(StyledButtonLink, _extends({}, props, {
    onClick: onClick,
    component: component,
    size: size,
    onlyIcon: onlyIcon,
    sizeIcon: sizeIcon,
    type: type,
    target: href && external ? "_blank" : undefined,
    rel: href && external ? "noopener noreferrer" : undefined,
    iconLeft: iconLeft,
    buttonRef: ref,
    width: width,
    role: role
  }), iconLeft && React.createElement(IconContainer, {
    size: size,
    type: type,
    onlyIcon: onlyIcon,
    sizeIcon: sizeIcon
  }, iconLeft), children, iconRight && React.createElement(IconContainer, {
    size: size,
    type: type,
    onlyIcon: onlyIcon,
    sizeIcon: sizeIcon,
    right: true
  }, iconRight));
});
ButtonLink.displayName = "ButtonLink";
var _default = ButtonLink;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Card/CardHeader/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledCardHeader = void 0;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _Heading = _interopRequireWildcard(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Heading/index.js"));

var _Text = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Text/index.js"));

var _rtl = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/rtl/index.js");

var _mediaQuery = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/mediaQuery/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var StyledCardHeader = _styledComponents.default.div.withConfig({
  displayName: "CardHeader__StyledCardHeader",
  componentId: "lvjkay-0"
})(["position:relative;width:100%;padding:", ";box-sizing:border-box;color:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceMedium;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.colorHeading;
}, _mediaQuery.default.desktop((0, _styledComponents.css)(["padding:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.spaceLarge;
})));

exports.StyledCardHeader = StyledCardHeader;
StyledCardHeader.defaultProps = {
  theme: _defaultTheme.default
};

var StyledHeadingWrapper = _styledComponents.default.div.withConfig({
  displayName: "CardHeader__StyledHeadingWrapper",
  componentId: "lvjkay-1"
})(["display:flex;align-items:center;", "{width:100%;}"], _Heading.StyledHeading);

var StyledSubTitle = _styledComponents.default.div.withConfig({
  displayName: "CardHeader__StyledSubTitle",
  componentId: "lvjkay-2"
})(["display:flex;margin-top:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.spaceXXSmall;
});

StyledSubTitle.defaultProps = {
  theme: _defaultTheme.default
};

var StyledIcon = _styledComponents.default.div.withConfig({
  displayName: "CardHeader__StyledIcon",
  componentId: "lvjkay-3"
})(["color:", ";display:flex;align-items:center;margin:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.colorHeading;
}, function (_ref6) {
  var theme = _ref6.theme;
  return (0, _rtl.rtlSpacing)("0 ".concat(theme.orbit.spaceSmall, " 0 0"));
});

StyledIcon.defaultProps = {
  theme: _defaultTheme.default
};

var CardHeader = function CardHeader(_ref7) {
  var icon = _ref7.icon,
      title = _ref7.title,
      subTitle = _ref7.subTitle,
      actions = _ref7.actions,
      dataTest = _ref7.dataTest,
      dataA11ySection = _ref7.dataA11ySection;
  return React.createElement(StyledCardHeader, {
    "data-test": dataTest
  }, React.createElement(StyledHeadingWrapper, null, icon && React.createElement(StyledIcon, null, icon), React.createElement(_Heading.default, {
    type: "title3",
    element: "h2",
    dataA11ySection: dataA11ySection
  }, title), actions), subTitle && React.createElement(StyledSubTitle, null, React.createElement(_Text.default, null, subTitle)));
};

CardHeader.displayName = "CardHeader";
var _default = CardHeader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledCardSectionContent = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _index = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/index.js");

var _Slide = _interopRequireWildcard(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/Slide/index.js"));

var _mediaQuery = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/mediaQuery/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hasPaddingTop = function hasPaddingTop(_ref) {
  var expandable = _ref.expandable,
      expanded = _ref.expanded,
      visible = _ref.visible;
  return expanded || visible || !expandable;
};

var StyledCardSectionContent = _styledComponents.default.div.withConfig({
  displayName: "CardSectionContent__StyledCardSectionContent",
  componentId: "sc-1mj8dfx-0"
})(["font-family:", ";font-size:", ";line-height:", ";color:", ";border-top:", ";padding-top:", ";transition:padding ", " linear,border-top ", " linear;overflow:hidden;", " ", "{max-height:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontFamily;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontSizeTextNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.lineHeightText;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.colorTextPrimary;
}, function (_ref6) {
  var theme = _ref6.theme,
      expanded = _ref6.expanded;
  return expanded ? "1px solid ".concat(theme.orbit.paletteCloudNormal) : "0px solid ".concat(theme.orbit.paletteCloudNormal);
}, function (_ref7) {
  var theme = _ref7.theme,
      expandable = _ref7.expandable,
      expanded = _ref7.expanded,
      visible = _ref7.visible;
  return hasPaddingTop({
    expandable: expandable,
    expanded: expanded,
    visible: visible
  }) && theme.orbit.spaceMedium;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.durationFast;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.durationFast;
}, _mediaQuery.default.desktop((0, _styledComponents.css)(["padding-top:", ";"], function (_ref10) {
  var theme = _ref10.theme,
      expandable = _ref10.expandable,
      expanded = _ref10.expanded,
      visible = _ref10.visible;
  return hasPaddingTop({
    expandable: expandable,
    expanded: expanded,
    visible: visible
  }) && theme.orbit.spaceLarge;
})), _Slide.StyledSlide, function (_ref11) {
  var expandable = _ref11.expandable,
      visible = _ref11.visible;
  return expandable && visible && "none";
});

exports.StyledCardSectionContent = StyledCardSectionContent;
StyledCardSectionContent.defaultProps = {
  theme: _defaultTheme.default
};

var withConsumer = function withConsumer(CardSection) {
  return function (_ref12) {
    var children = _ref12.children,
        visible = _ref12.visible;
    return _react.default.createElement(_index.CardSectionContext.Consumer, null, function (_ref13) {
      var expandable = _ref13.expandable,
          expanded = _ref13.expanded;
      return _react.default.createElement(CardSection, {
        expandable: expandable,
        expanded: expanded,
        visible: visible
      }, children);
    });
  };
};

var CardSectionContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardSectionContent, _React$Component);

  function CardSectionContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CardSectionContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CardSectionContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      contentHeight: 0
    });

    _defineProperty(_assertThisInitialized(_this), "node", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "setHeight", function () {
      var _this$node, _this$node$current;

      _this.setState({
        contentHeight: (_this$node = _this.node) === null || _this$node === void 0 ? void 0 : (_this$node$current = _this$node.current) === null || _this$node$current === void 0 ? void 0 : _this$node$current.clientHeight
      });
    });

    return _this;
  }

  _createClass(CardSectionContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var expandable = this.props.expandable;

      if (expandable) {
        window.addEventListener("resize", this.setHeight);
        setTimeout(this.setHeight, 10);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var expandable = this.props.expandable;

      if (expandable) {
        if (prevState.contentHeight !== this.state.contentHeight || prevProps.children !== this.props.children) {
          setTimeout(this.setHeight, 10);
        }

        if (prevProps.expanded !== this.props.expanded) {
          // Calculate height on expand - for dynamic components like TripSector
          this.setHeight();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.setHeight);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          expanded = _this$props.expanded,
          expandable = _this$props.expandable,
          visible = _this$props.visible;
      return _react.default.createElement(StyledCardSectionContent, {
        expanded: expanded,
        expandable: expandable,
        visible: visible,
        contentHeight: this.state.contentHeight
      }, expandable ? _react.default.createElement(_Slide.default, {
        maxHeight: this.state.contentHeight,
        expanded: expanded
      }, _react.default.createElement("div", {
        ref: this.node
      }, children)) : _react.default.createElement("div", {
        ref: this.node
      }, children));
    }
  }]);

  return CardSectionContent;
}(_react.default.Component);

var DecoratedComponent = withConsumer(CardSectionContent);
DecoratedComponent.displayName = "CardSectionContent";
var _default = DecoratedComponent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/CardSectionHeader/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledCardSectionHeader = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _index = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/index.js");

var _index2 = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Icon/index.js");

var _consts = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Icon/consts.js");

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _ChevronDown = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/icons/ChevronDown.js"));

var _index3 = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/rtl/index.js");

var _mediaQuery = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/mediaQuery/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledCardSectionIconRight = (0, _styledComponents.default)(_ChevronDown.default).withConfig({
  displayName: "CardSectionHeader__StyledCardSectionIconRight",
  componentId: "sc-1gmw3sa-0"
})(["align-self:center;transition:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.durationFast;
});
StyledCardSectionIconRight.defaultProps = {
  theme: _defaultTheme.default
};

var StyledCardSectionHeader = _styledComponents.default.div.withConfig({
  displayName: "CardSectionHeader__StyledCardSectionHeader",
  componentId: "sc-1gmw3sa-1"
})(["display:flex;flex-direction:row;align-items:center;transition:margin ", " linear;cursor:", ";position:relative;min-height:", ";margin:", ";padding:", ";margin-bottom:", ";", " &:hover{background:", ";}", "{transform:", ";margin-", ":", ";}&:focus{background:", ";outline:none;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.durationFast;
}, function (_ref3) {
  var expandable = _ref3.expandable;
  return expandable && "pointer";
}, function (_ref4) {
  var expandable = _ref4.expandable;
  return expandable && (0, _index2.getSize)(_consts.ICON_SIZES.MEDIUM);
}, function (_ref5) {
  var theme = _ref5.theme;
  return "-".concat(theme.orbit.spaceMedium);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.spaceMedium;
}, function (_ref7) {
  var expanded = _ref7.expanded;
  return expanded && 0;
}, _mediaQuery.default.desktop((0, _styledComponents.css)(["padding:", ";margin:", ";margin-bottom:", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.spaceLarge;
}, function (_ref9) {
  var theme = _ref9.theme;
  return "-".concat(theme.orbit.spaceLarge);
}, function (_ref10) {
  var expanded = _ref10.expanded;
  return expanded && 0;
})), function (_ref11) {
  var theme = _ref11.theme,
      expandable = _ref11.expandable;
  return expandable && theme.orbit.paletteWhiteHover;
}, StyledCardSectionIconRight, function (_ref12) {
  var expanded = _ref12.expanded;
  return expanded && "rotate(-180deg)";
}, _index3.left, function (_ref13) {
  var theme = _ref13.theme;
  return theme.orbit.spaceMedium;
}, function (_ref14) {
  var theme = _ref14.theme,
      expandable = _ref14.expandable;
  return expandable && theme.orbit.paletteWhiteHover;
});

exports.StyledCardSectionHeader = StyledCardSectionHeader;
StyledCardSectionHeader.defaultProps = {
  theme: _defaultTheme.default
};

var StyledCardSectionButtons = _styledComponents.default.div.withConfig({
  displayName: "CardSectionHeader__StyledCardSectionButtons",
  componentId: "sc-1gmw3sa-2"
})(["margin-", ":", ";"], _index3.left, function (_ref15) {
  var theme = _ref15.theme;
  return theme.orbit.spaceLarge;
});

StyledCardSectionButtons.defaultProps = {
  theme: _defaultTheme.default
};

var StyledCardSectionHeaderContent = _styledComponents.default.div.withConfig({
  displayName: "CardSectionHeader__StyledCardSectionHeaderContent",
  componentId: "sc-1gmw3sa-3"
})(["flex:1;"]);

StyledCardSectionHeaderContent.defaultProps = {
  theme: _defaultTheme.default
};

var CardSectionHeader = function CardSectionHeader(_ref16) {
  var children = _ref16.children,
      actions = _ref16.actions;
  return _react.default.createElement(_index.CardSectionContext.Consumer, null, function (_ref17) {
    var expandable = _ref17.expandable,
        expanded = _ref17.expanded,
        handleToggleSection = _ref17.handleToggleSection,
        onKeyDownHandler = _ref17.onKeyDownHandler;
    return _react.default.createElement(StyledCardSectionHeader, {
      expandable: expandable,
      expanded: expanded,
      onClick: expandable && handleToggleSection,
      "aria-expanded": expandable && expanded,
      role: expandable && "button",
      tabIndex: expandable && "0",
      onKeyDown: onKeyDownHandler
    }, _react.default.createElement(StyledCardSectionHeaderContent, {
      expandable: expandable
    }, children), actions && _react.default.createElement(StyledCardSectionButtons, null, actions), !actions && expandable && _react.default.createElement(StyledCardSectionIconRight, {
      size: "medium",
      color: "secondary"
    }));
  });
};

var _default = CardSectionHeader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CardSectionHeader", {
  enumerable: true,
  get: function get() {
    return _CardSectionHeader.default;
  }
});
Object.defineProperty(exports, "CardSectionContent", {
  enumerable: true,
  get: function get() {
    return _CardSectionContent.default;
  }
});
exports.default = exports.CardSectionContext = exports.StyledCardSection = void 0;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _ChevronDown = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/icons/ChevronDown.js"));

var _Icon = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Icon/index.js");

var _consts = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Icon/consts.js");

var _mediaQuery = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/mediaQuery/index.js"));

var _CardSectionHeader = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/CardSectionHeader/index.js"));

var _CardSectionContent = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledCardSectionIconRight = (0, _styledComponents.default)(_ChevronDown.default).withConfig({
  displayName: "CardSection__StyledCardSectionIconRight",
  componentId: "o8zdxr-0"
})(["align-self:center;transition:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.durationFast;
});
StyledCardSectionIconRight.defaultProps = {
  theme: _defaultTheme.default
};

var StyledCardSectionContent = _styledComponents.default.div.withConfig({
  displayName: "CardSection__StyledCardSectionContent",
  componentId: "o8zdxr-1"
})(["font-family:", ";font-size:", ";line-height:", ";color:", ";border-top:", ";padding-top:", ";overflow:hidden;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontFamily;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontSizeTextNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.lineHeightText;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.colorTextPrimary;
}, function (_ref6) {
  var theme = _ref6.theme,
      expanded = _ref6.expanded;
  return expanded ? "1px solid ".concat(theme.orbit.paletteCloudNormal) : "0px solid ".concat(theme.orbit.paletteCloudNormal);
}, function (_ref7) {
  var theme = _ref7.theme,
      expanded = _ref7.expanded;
  return expanded && "".concat(theme.orbit.spaceMedium);
});

StyledCardSectionContent.defaultProps = {
  theme: _defaultTheme.default
};

var StyledCardSection = _styledComponents.default.div.withConfig({
  displayName: "CardSection__StyledCardSection",
  componentId: "o8zdxr-2"
})(["width:100%;padding:", ";box-sizing:border-box;position:relative;background:", ";", ""], function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.spaceMedium;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.backgroundCard;
}, _mediaQuery.default.desktop((0, _styledComponents.css)(["padding:", ";"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.orbit.spaceLarge;
})));

exports.StyledCardSection = StyledCardSection;
StyledCardSection.defaultProps = {
  theme: _defaultTheme.default
};

var StyledCardSectionHeader = _styledComponents.default.div.withConfig({
  displayName: "CardSection__StyledCardSectionHeader",
  componentId: "o8zdxr-3"
})(["margin-bottom:", ";display:flex;flex-direction:row;cursor:pointer;position:relative;min-height:", ";"], function (_ref11) {
  var theme = _ref11.theme,
      expanded = _ref11.expanded;
  return expanded && theme.orbit.spaceMedium;
}, function (_ref12) {
  var expandable = _ref12.expandable;
  return expandable && (0, _Icon.getSize)(_consts.ICON_SIZES.MEDIUM);
});

StyledCardSectionHeader.defaultProps = {
  theme: _defaultTheme.default
};
var CardSectionContext = React.createContext({
  expandable: false,
  expanded: false,
  handleToggleSection: function handleToggleSection() {},
  onKeyDownHandler: function onKeyDownHandler() {}
});
exports.CardSectionContext = CardSectionContext;

var CardSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardSection, _React$Component);

  function CardSection() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CardSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CardSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "injectCallbackAndToggleSection", function () {
      var _this$props = _this.props,
          handleToggleSection = _this$props.handleToggleSection,
          onClose = _this$props.onClose,
          onExpand = _this$props.onExpand,
          expanded = _this$props.expanded;
      handleToggleSection(); // First do toggle

      if (expanded && onClose) {
        // If is expanded -> action is closing
        onClose();
      }

      if (!expanded && onExpand) {
        // if is closed > action is expanding
        onExpand();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (ev) {
      if (ev.keyCode === 13 || ev.keyCode === 32) {
        ev.preventDefault();

        _this.injectCallbackAndToggleSection();
      }
    });

    return _this;
  }

  _createClass(CardSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          handleToggleSection = _this$props2.handleToggleSection,
          initialExpanded = _this$props2.initialExpanded,
          setInitialExpandedSection = _this$props2.setInitialExpandedSection;

      if (initialExpanded) {
        handleToggleSection();
        setInitialExpandedSection();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          dataTest = _this$props3.dataTest,
          expandable = _this$props3.expandable,
          expanded = _this$props3.expanded;
      return React.createElement(StyledCardSection, {
        "data-test": dataTest,
        expandable: expandable,
        expanded: expanded
      }, React.createElement(CardSectionContext.Provider, {
        value: {
          expandable: expandable,
          expanded: expanded,
          handleToggleSection: this.injectCallbackAndToggleSection,
          onKeyDownHandler: this.handleKeyDown
        }
      }, children));
    }
  }]);

  return CardSection;
}(React.Component);

var _default = CardSection;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Card/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var CLOSE_BUTTON_DATA_TEST = "CardCloseButton";
var _default = CLOSE_BUTTON_DATA_TEST;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Card/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CardSection", {
  enumerable: true,
  get: function get() {
    return _CardSection.default;
  }
});
Object.defineProperty(exports, "CardHeader", {
  enumerable: true,
  get: function get() {
    return _CardHeader.default;
  }
});
Object.defineProperty(exports, "CardSectionContent", {
  enumerable: true,
  get: function get() {
    return _CardSectionContent.default;
  }
});
Object.defineProperty(exports, "CardSectionHeader", {
  enumerable: true,
  get: function get() {
    return _CardSectionHeader.default;
  }
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _Close = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/icons/Close.js"));

var _ButtonLink = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/ButtonLink/index.js"));

var _CardSection = _interopRequireWildcard(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/index.js"));

var _CardHeader = _interopRequireWildcard(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/CardHeader/index.js"));

var _CardSectionContent = _interopRequireWildcard(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent/index.js"));

var _Loading = _interopRequireWildcard(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Loading/index.js"));

var _getSpacingToken = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/common/getSpacingToken/index.js"));

var _rtl = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/rtl/index.js");

var _consts = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/consts.js"));

var _CardSectionHeader = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Card/CardSection/CardSectionHeader/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getBorder = function getBorder(_ref) {
  var theme = _ref.theme;
  return "".concat(theme.orbit.borderWidthCard, " ").concat(theme.orbit.borderStyleCard, " ").concat(theme.orbit.borderColorCard);
};

var getBorderRadius = function getBorderRadius(_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.borderRadiusNormal;
}; // Logic of borders radius


var StyledChildWrapper = _styledComponents.default.div.withConfig({
  displayName: "Card__StyledChildWrapper",
  componentId: "ff0z2v-0"
})(["margin:", ";transition:margin ", " ease-in-out;", ",", ",> ", "{border-top-left-radius:", ";border-top-right-radius:", ";border-bottom-left-radius:", ";border-bottom-right-radius:", ";box-shadow:", ";border-left:", ";border-right:", ";border-bottom:", ";background:", ";}+ div ", ",", "{border-top:", ";}"], function (_ref3) {
  var theme = _ref3.theme,
      expanded = _ref3.expanded;
  return expanded && "".concat(theme.orbit.spaceXSmall, " 0");
}, function (_ref4) {
  var theme = _ref4.theme,
      initialExpanded = _ref4.initialExpanded;
  return !initialExpanded && theme.orbit.durationFast;
}, _CardSection.StyledCardSection, _CardHeader.StyledCardHeader, _Loading.StyledLoading, function (_ref5) {
  var roundedTopBorders = _ref5.roundedTopBorders;
  return roundedTopBorders && getBorderRadius;
}, function (_ref6) {
  var roundedTopBorders = _ref6.roundedTopBorders;
  return roundedTopBorders && getBorderRadius;
}, function (_ref7) {
  var roundedBottomBorders = _ref7.roundedBottomBorders;
  return roundedBottomBorders && getBorderRadius;
}, function (_ref8) {
  var roundedBottomBorders = _ref8.roundedBottomBorders;
  return roundedBottomBorders && getBorderRadius;
}, function (_ref9) {
  var expanded = _ref9.expanded;
  return expanded && "0 4px 12px 0 rgba(23, 27, 30, 0.1)";
}, getBorder, getBorder, getBorder, function (_ref10) {
  var theme = _ref10.theme;
  return theme.orbit.backgroundCard;
}, _CardSection.StyledCardSection, _CardSection.StyledCardSection, function (_ref11) {
  var expanded = _ref11.expanded;
  return expanded && getBorder;
});

StyledChildWrapper.defaultProps = {
  theme: _defaultTheme.default
};

var StyledCard = _styledComponents.default.div.withConfig({
  displayName: "Card__StyledCard",
  componentId: "ff0z2v-1"
})(["width:100%;box-sizing:border-box;position:relative;font-family:", ";margin-bottom:", ";", "{padding-", ":", ";border-bottom:", ";}", "{&:first-of-type{", ",", ",> ", "{border-top:", ";border-top-left-radius:", ";border-top-right-radius:", ";}+ ", " ", "{padding-top:", ";", ":first-of-type{padding-top:", ";}}}&:last-of-type{", ",", "{border-bottom-left-radius:", ";border-bottom-right-radius:", ";}}}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.orbit.fontFamily;
}, _getSpacingToken.default, _CardHeader.StyledCardHeader, _rtl.right, function (_ref13) {
  var theme = _ref13.theme,
      closable = _ref13.closable;
  return closable && theme.orbit.spaceLarge;
}, function (_ref14) {
  var hasAdjustedHeader = _ref14.hasAdjustedHeader;
  return hasAdjustedHeader && 0;
}, StyledChildWrapper, _CardHeader.StyledCardHeader, _CardSection.StyledCardSection, _Loading.StyledLoading, getBorder, getBorderRadius, getBorderRadius, StyledChildWrapper, _CardSection.StyledCardSection, function (_ref15) {
  var hasAdjustedHeader = _ref15.hasAdjustedHeader;
  return hasAdjustedHeader && 0;
}, _CardSectionContent.StyledCardSectionContent, function (_ref16) {
  var hasAdjustedHeader = _ref16.hasAdjustedHeader;
  return hasAdjustedHeader && 0;
}, _CardHeader.StyledCardHeader, _CardSection.StyledCardSection, getBorderRadius, getBorderRadius);

StyledCard.defaultProps = {
  theme: _defaultTheme.default
};

var CloseContainer = _styledComponents.default.div.withConfig({
  displayName: "Card__CloseContainer",
  componentId: "ff0z2v-2"
})(["position:absolute;top:0;", ":0;z-index:1;"], _rtl.right);

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expandedSections: [],
      initialExpandedSections: []
    });

    _defineProperty(_assertThisInitialized(_this), "getRoundedBorders", function (index) {
      var expandedSections = _this.state.expandedSections;
      var topBorder = expandedSections.indexOf(index - 1) !== -1 || expandedSections.indexOf(index) !== -1;
      var bottomBorder = expandedSections.indexOf(index + 1) !== -1 || expandedSections.indexOf(index) !== -1;
      return {
        top: topBorder,
        bottom: bottomBorder
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getChildren", function () {
      var _children$0$type, _children$0$props;

      // Loading Card Logic
      var children = React.Children.toArray(_this.props.children);

      if (children[0] === undefined) {
        // Jest test
        return [];
      }

      if (_Loading.default.name !== "" && ((_children$0$type = children[0].type) === null || _children$0$type === void 0 ? void 0 : _children$0$type.name) === _Loading.default.name && !((_children$0$props = children[0].props) === null || _children$0$props === void 0 ? void 0 : _children$0$props.loading)) {
        var _children$0$props2, _children$0$props3, _children$0$props3$ch;

        if (!Array.isArray((_children$0$props2 = children[0].props) === null || _children$0$props2 === void 0 ? void 0 : _children$0$props2.children) && String((_children$0$props3 = children[0].props) === null || _children$0$props3 === void 0 ? void 0 : (_children$0$props3$ch = _children$0$props3.children) === null || _children$0$props3$ch === void 0 ? void 0 : _children$0$props3$ch.type) === React.Fragment.toString()) {
          var _children$0$props4, _children$0$props4$ch, _children$0$props4$ch2;

          return (_children$0$props4 = children[0].props) === null || _children$0$props4 === void 0 ? void 0 : (_children$0$props4$ch = _children$0$props4.children) === null || _children$0$props4$ch === void 0 ? void 0 : (_children$0$props4$ch2 = _children$0$props4$ch.props) === null || _children$0$props4$ch2 === void 0 ? void 0 : _children$0$props4$ch2.children;
        }
      }

      return children;
    });

    _defineProperty(_assertThisInitialized(_this), "setInitialExpandedSection", function (index) {
      _this.setState({
        initialExpandedSections: [].concat(_toConsumableArray(_this.state.initialExpandedSections), [index])
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isExpanded", function (index) {
      return _this.state.expandedSections.indexOf(index) !== -1;
    });

    _defineProperty(_assertThisInitialized(_this), "isInitialExpanded", function (index) {
      return _this.state.initialExpandedSections.indexOf(index) !== -1;
    });

    _defineProperty(_assertThisInitialized(_this), "isExpandableCardSection", function (item) {
      return item.type.name === _CardSection.default.name && item.props.expandable;
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleSection", function (index) {
      _this.setState({
        expandedSections: _this.state.expandedSections.indexOf(index) === -1 ? [].concat(_toConsumableArray(_this.state.expandedSections), [index]) : _this.state.expandedSections.filter(function (value) {
          return value !== index;
        }),
        initialExpandedSections: _toConsumableArray(_this.state.initialExpandedSections.filter(function (sectionIndex) {
          return sectionIndex !== index;
        }))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hasAdjustedHeader", function () {
      var children = _this.getChildren();

      if (children === undefined) {
        return false;
      } // Check if first element is Header


      if (children && children[0] !== undefined && children[0].type.name !== _CardHeader.default.name) {
        return false;
      } // Check if first section exists


      if (children && children[1] === undefined) {
        return false;
      }

      return !_this.isExpandableCardSection(children[1]);
    });

    _defineProperty(_assertThisInitialized(_this), "renderSection", function (section, index) {
      var isExpanded = _this.isExpanded(index);

      var isInitialExpanded = _this.isInitialExpanded(index);

      var roundedBorders = _this.getRoundedBorders(index);

      return React.createElement(StyledChildWrapper, {
        roundedTopBorders: roundedBorders.top,
        roundedBottomBorders: roundedBorders.bottom,
        expanded: isExpanded,
        initialExpanded: isInitialExpanded
      }, React.cloneElement(section, {
        expanded: isExpanded,
        handleToggleSection: function handleToggleSection() {
          return _this.handleToggleSection(index);
        },
        setInitialExpandedSection: function setInitialExpandedSection() {
          return _this.setInitialExpandedSection(index);
        }
      }));
    });

    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          closable = _this$props.closable,
          dataTest = _this$props.dataTest,
          spaceAfter = _this$props.spaceAfter,
          onClose = _this$props.onClose;
      var children = this.getChildren();
      return React.createElement(StyledCard, {
        closable: closable,
        "data-test": dataTest,
        spaceAfter: spaceAfter,
        hasAdjustedHeader: this.hasAdjustedHeader()
      }, children && React.Children.map(children, function (item, index) {
        return _this2.renderSection(item, index);
      }), closable && React.createElement(CloseContainer, null, React.createElement(_ButtonLink.default, {
        dataTest: _consts.default,
        type: "secondary",
        size: "small",
        icon: React.createElement(_Close.default, null),
        onClick: onClose,
        transparent: true
      })));
    }
  }]);

  return Card;
}(React.Component);

var _default = Card;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Heading/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOKENS = exports.TYPE_OPTIONS = exports.ELEMENT_OPTIONS = void 0;
var ELEMENT_OPTIONS = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  DIV: "div"
};
exports.ELEMENT_OPTIONS = ELEMENT_OPTIONS;
var TYPE_OPTIONS = {
  DISPLAY: "display",
  DISPLAYSUBTITLE: "displaySubtitle",
  TITLE1: "title1",
  TITLE2: "title2",
  TITLE3: "title3",
  TITLE4: "title4",
  TITLE5: "title5"
};
exports.TYPE_OPTIONS = TYPE_OPTIONS;
var TOKENS = {
  weightHeading: "weightHeading",
  sizeHeading: "sizeHeading"
};
exports.TOKENS = TOKENS;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Heading/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledHeading = exports.getHeadingToken = void 0;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _consts = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Heading/consts.js");

var _getSpacingToken = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/common/getSpacingToken/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getHeadingToken = function getHeadingToken(name) {
  return function (_ref) {
    var _TOKENS$weightHeading, _TOKENS$sizeHeading, _tokens;

    var theme = _ref.theme,
        type = _ref.type;
    var tokens = (_tokens = {}, _defineProperty(_tokens, _consts.TOKENS.weightHeading, (_TOKENS$weightHeading = {}, _defineProperty(_TOKENS$weightHeading, _consts.TYPE_OPTIONS.DISPLAY, theme.orbit.fontWeightHeadingDisplay), _defineProperty(_TOKENS$weightHeading, _consts.TYPE_OPTIONS.DISPLAYSUBTITLE, theme.orbit.fontWeightNormal), _defineProperty(_TOKENS$weightHeading, _consts.TYPE_OPTIONS.TITLE1, theme.orbit.fontWeightHeadingTitle1), _defineProperty(_TOKENS$weightHeading, _consts.TYPE_OPTIONS.TITLE2, theme.orbit.fontWeightHeadingTitle2), _defineProperty(_TOKENS$weightHeading, _consts.TYPE_OPTIONS.TITLE3, theme.orbit.fontWeightHeadingTitle3), _defineProperty(_TOKENS$weightHeading, _consts.TYPE_OPTIONS.TITLE4, theme.orbit.fontWeightHeadingTitle4), _defineProperty(_TOKENS$weightHeading, _consts.TYPE_OPTIONS.TITLE5, theme.orbit.fontWeightHeadingTitle5), _TOKENS$weightHeading)), _defineProperty(_tokens, _consts.TOKENS.sizeHeading, (_TOKENS$sizeHeading = {}, _defineProperty(_TOKENS$sizeHeading, _consts.TYPE_OPTIONS.DISPLAY, theme.orbit.fontSizeHeadingDisplay), _defineProperty(_TOKENS$sizeHeading, _consts.TYPE_OPTIONS.DISPLAYSUBTITLE, theme.orbit.fontSizeHeadingTitle2), _defineProperty(_TOKENS$sizeHeading, _consts.TYPE_OPTIONS.TITLE1, theme.orbit.fontSizeHeadingTitle1), _defineProperty(_TOKENS$sizeHeading, _consts.TYPE_OPTIONS.TITLE2, theme.orbit.fontSizeHeadingTitle2), _defineProperty(_TOKENS$sizeHeading, _consts.TYPE_OPTIONS.TITLE3, theme.orbit.fontSizeHeadingTitle3), _defineProperty(_TOKENS$sizeHeading, _consts.TYPE_OPTIONS.TITLE4, theme.orbit.fontSizeHeadingTitle4), _defineProperty(_TOKENS$sizeHeading, _consts.TYPE_OPTIONS.TITLE5, theme.orbit.fontSizeHeadingTitle5), _TOKENS$sizeHeading)), _tokens);
    return tokens[name][type];
  };
};

exports.getHeadingToken = getHeadingToken;
var StyledHeading = (0, _styledComponents.default)(function (_ref2) {
  var Component = _ref2.element,
      className = _ref2.className,
      children = _ref2.children,
      dataTest = _ref2.dataTest,
      dataA11ySection = _ref2.dataA11ySection;
  return React.createElement(Component, {
    className: className,
    "data-test": dataTest,
    "data-a11y-section": dataA11ySection
  }, children);
}).withConfig({
  displayName: "Heading__StyledHeading",
  componentId: "sc-1b8cso5-0"
})(["font-family:", ";font-size:", ";font-weight:", ";color:", ";line-height:", ";text-transform:", ";margin:0;margin-bottom:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontFamily;
}, getHeadingToken(_consts.TOKENS.sizeHeading), getHeadingToken(_consts.TOKENS.weightHeading), function (_ref4) {
  var theme = _ref4.theme,
      inverted = _ref4.inverted;
  return inverted ? theme.orbit.colorHeadingInverted : theme.orbit.colorHeading;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.lineHeightHeading;
}, function (_ref6) {
  var type = _ref6.type;
  return type === _consts.TYPE_OPTIONS.TITLE5 && "uppercase";
}, _getSpacingToken.default);
exports.StyledHeading = StyledHeading;
StyledHeading.defaultProps = {
  theme: _defaultTheme.default
};

var Heading = function Heading(_ref7) {
  var children = _ref7.children,
      _ref7$type = _ref7.type,
      type = _ref7$type === void 0 ? _consts.TYPE_OPTIONS.TITLE1 : _ref7$type,
      _ref7$element = _ref7.element,
      element = _ref7$element === void 0 ? _consts.ELEMENT_OPTIONS.H1 : _ref7$element,
      dataTest = _ref7.dataTest,
      _ref7$inverted = _ref7.inverted,
      inverted = _ref7$inverted === void 0 ? false : _ref7$inverted,
      spaceAfter = _ref7.spaceAfter,
      dataA11ySection = _ref7.dataA11ySection;
  return React.createElement(StyledHeading, {
    type: type,
    element: element,
    inverted: inverted,
    dataTest: dataTest,
    spaceAfter: spaceAfter,
    dataA11ySection: dataA11ySection
  }, children);
};

var _default = Heading;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Icon/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ICON_COLORS = exports.ICON_SIZES = void 0;
var ICON_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};
exports.ICON_SIZES = ICON_SIZES;
var ICON_COLORS = {
  ATTENTION: "attention",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  CRITICAL: "critical"
};
exports.ICON_COLORS = ICON_COLORS;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getSize = void 0;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _consts = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Icon/consts.js");

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getSize = function getSize(size) {
  return function (_ref) {
    var _tokens;

    var theme = _ref.theme;
    var tokens = (_tokens = {}, _defineProperty(_tokens, _consts.ICON_SIZES.SMALL, theme.orbit.widthIconSmall), _defineProperty(_tokens, _consts.ICON_SIZES.MEDIUM, theme.orbit.widthIconMedium), _defineProperty(_tokens, _consts.ICON_SIZES.LARGE, theme.orbit.widthIconLarge), _tokens);
    return tokens[size] || tokens[_consts.ICON_SIZES.MEDIUM];
  };
};

exports.getSize = getSize;

var getColor = function getColor() {
  return function (_ref2) {
    var _tokens2;

    var theme = _ref2.theme,
        color = _ref2.color;
    var tokens = (_tokens2 = {}, _defineProperty(_tokens2, _consts.ICON_COLORS.ATTENTION, theme.orbit.colorIconAttention), _defineProperty(_tokens2, _consts.ICON_COLORS.PRIMARY, theme.orbit.colorIconPrimary), _defineProperty(_tokens2, _consts.ICON_COLORS.SECONDARY, theme.orbit.colorIconSecondary), _defineProperty(_tokens2, _consts.ICON_COLORS.TERTIARY, theme.orbit.colorIconTertiary), _defineProperty(_tokens2, _consts.ICON_COLORS.INFO, theme.orbit.colorIconInfo), _defineProperty(_tokens2, _consts.ICON_COLORS.SUCCESS, theme.orbit.colorIconSuccess), _defineProperty(_tokens2, _consts.ICON_COLORS.WARNING, theme.orbit.colorIconWarning), _defineProperty(_tokens2, _consts.ICON_COLORS.CRITICAL, theme.orbit.colorIconCritical), _tokens2);
    return tokens[color];
  };
};

var reverse = function reverse(_ref3) {
  var reverseOnRtl = _ref3.reverseOnRtl,
      theme = _ref3.theme;
  return reverseOnRtl && theme.rtl && (0, _styledComponents.css)(["transform:scale(-1,1);"]);
};

var StyledIcon = (0, _styledComponents.default)(function (_ref4) {
  var className = _ref4.className,
      viewBox = _ref4.viewBox,
      dataTest = _ref4.dataTest,
      children = _ref4.children,
      ariaHidden = _ref4.ariaHidden,
      ariaLabel = _ref4.ariaLabel;
  return React.createElement("svg", {
    className: className,
    viewBox: viewBox,
    "data-test": dataTest,
    preserveAspectRatio: "xMidYMid meet",
    "aria-hidden": ariaHidden ? "true" : undefined,
    "aria-label": ariaLabel
  }, children);
}).withConfig({
  displayName: "Icon__StyledIcon",
  componentId: "sc-1pnzn3g-0"
})(["width:", ";height:", ";vertical-align:middle;fill:currentColor;color:", ";", ";"], function (_ref5) {
  var size = _ref5.size;
  return getSize(size);
}, function (_ref6) {
  var size = _ref6.size;
  return getSize(size);
}, function (_ref7) {
  var color = _ref7.color,
      customColor = _ref7.customColor;
  return customColor || color && getColor();
}, reverse);
StyledIcon.defaultProps = {
  theme: _defaultTheme.default
};

var OrbitIcon = function OrbitIcon(props) {
  var size = props.size,
      color = props.color,
      customColor = props.customColor,
      className = props.className,
      children = props.children,
      viewBox = props.viewBox,
      dataTest = props.dataTest,
      ariaHidden = props.ariaHidden,
      reverseOnRtl = props.reverseOnRtl,
      ariaLabel = props.ariaLabel;
  return React.createElement(StyledIcon, {
    viewBox: viewBox,
    size: size,
    className: className,
    dataTest: dataTest,
    customColor: customColor,
    color: color,
    ariaHidden: ariaHidden,
    reverseOnRtl: reverseOnRtl,
    ariaLabel: ariaLabel
  }, children);
};

OrbitIcon.defaultProps = {
  size: _consts.ICON_SIZES.MEDIUM
};
var _default = OrbitIcon;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Loading/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOKENS = exports.TYPE_OPTIONS = void 0;
var TYPE_OPTIONS = {
  BUTTON_LOADER: "buttonLoader",
  SEARCH_LOADER: "searchLoader",
  BOX_LOADER: "boxLoader",
  PAGE_LOADER: "pageLoader",
  INLINE_LOADER: "inlineLoader"
};
exports.TYPE_OPTIONS = TYPE_OPTIONS;
var TOKENS = {
  ALIGN: "align",
  HEIGHT: "height"
};
exports.TOKENS = TOKENS;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Loading/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledSpinner = exports.StyledLoading = void 0;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _consts = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Loading/consts.js");

var _rtl = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/rtl/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getToken = function getToken(name) {
  return function (_ref) {
    var _TOKENS$ALIGN, _TOKENS$HEIGHT, _tokens;

    var type = _ref.type;
    var tokens = (_tokens = {}, _defineProperty(_tokens, _consts.TOKENS.ALIGN, (_TOKENS$ALIGN = {}, _defineProperty(_TOKENS$ALIGN, _consts.TYPE_OPTIONS.BUTTON_LOADER, "center"), _defineProperty(_TOKENS$ALIGN, _consts.TYPE_OPTIONS.SEARCH_LOADER, "start"), _defineProperty(_TOKENS$ALIGN, _consts.TYPE_OPTIONS.BOX_LOADER, "center"), _defineProperty(_TOKENS$ALIGN, _consts.TYPE_OPTIONS.PAGE_LOADER, "center"), _defineProperty(_TOKENS$ALIGN, _consts.TYPE_OPTIONS.INLINE_LOADER, "center"), _TOKENS$ALIGN)), _defineProperty(_tokens, _consts.TOKENS.HEIGHT, (_TOKENS$HEIGHT = {}, _defineProperty(_TOKENS$HEIGHT, _consts.TYPE_OPTIONS.BUTTON_LOADER, "100%"), _defineProperty(_TOKENS$HEIGHT, _consts.TYPE_OPTIONS.SEARCH_LOADER, "40px"), _defineProperty(_TOKENS$HEIGHT, _consts.TYPE_OPTIONS.BOX_LOADER, "80px"), _defineProperty(_TOKENS$HEIGHT, _consts.TYPE_OPTIONS.PAGE_LOADER, "120px"), _defineProperty(_TOKENS$HEIGHT, _consts.TYPE_OPTIONS.INLINE_LOADER, "auto"), _TOKENS$HEIGHT)), _tokens);
    return tokens[name][type];
  };
}; // Animations


var SpinnerAnimation = (0, _styledComponents.keyframes)(["100%{transform:rotate(360deg);}"]);
var LoaderAnimation = (0, _styledComponents.keyframes)(["0%{opacity:.3;transform:translateY(0px);}20%{opacity:1;transform:translateY(-3px);}40%{opacity:.3;transform:translateY(0px);}100%{opacity:.3;transform:translateY(0px);}"]);
var StyledLoading = (0, _styledComponents.default)(function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      dataTest = _ref2.dataTest;
  return React.createElement("div", {
    className: className,
    "data-test": dataTest
  }, children);
}).withConfig({
  displayName: "Loading__StyledLoading",
  componentId: "sc-1psg3na-0"
})(["position:", ";top:", ";", ":", ";width:", ";height:", ";padding:", ";display:", ";flex-direction:", ";justify-content:", ";align-items:center;overflow:hidden;box-sizing:border-box;"], function (_ref3) {
  var type = _ref3.type;
  return type === _consts.TYPE_OPTIONS.BUTTON_LOADER && "absolute";
}, function (_ref4) {
  var type = _ref4.type;
  return type === _consts.TYPE_OPTIONS.BUTTON_LOADER && "0";
}, _rtl.left, function (_ref5) {
  var type = _ref5.type;
  return type === _consts.TYPE_OPTIONS.BUTTON_LOADER && "0";
}, function (_ref6) {
  var type = _ref6.type;
  return type === _consts.TYPE_OPTIONS.BUTTON_LOADER && "100%";
}, getToken(_consts.TOKENS.HEIGHT), function (_ref7) {
  var theme = _ref7.theme,
      type = _ref7.type;
  return type !== _consts.TYPE_OPTIONS.INLINE_LOADER && theme.orbit.paddingLoading;
}, function (_ref8) {
  var type = _ref8.type;
  return type === _consts.TYPE_OPTIONS.INLINE_LOADER ? "inline-flex" : "flex";
}, function (_ref9) {
  var type = _ref9.type;
  return type === _consts.TYPE_OPTIONS.PAGE_LOADER ? "column" : "row";
}, getToken(_consts.TOKENS.ALIGN));
exports.StyledLoading = StyledLoading;
StyledLoading.defaultProps = {
  theme: _defaultTheme.default
};

var StyledLoadingText = _styledComponents.default.div.withConfig({
  displayName: "Loading__StyledLoadingText",
  componentId: "sc-1psg3na-1"
})(["font-family:", ";font-size:", ";color:", ";line-height:", ";margin-top:", ";margin-", ":", ";"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.orbit.fontFamily;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.orbit.fontSizeTextNormal;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.orbit.colorTextLoading;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.orbit.lineHeightText;
}, function (_ref14) {
  var theme = _ref14.theme,
      type = _ref14.type;
  return type === _consts.TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceMedium;
}, _rtl.left, function (_ref15) {
  var theme = _ref15.theme,
      type = _ref15.type;
  return type !== _consts.TYPE_OPTIONS.PAGE_LOADER && theme.orbit.spaceSmall;
});

StyledLoadingText.defaultProps = {
  theme: _defaultTheme.default
};

var StyledSpinner = _styledComponents.default.svg.withConfig({
  displayName: "Loading__StyledSpinner",
  componentId: "sc-1psg3na-2"
})(["width:40px;height:40px;animation:", " 0.75s linear infinite;"], SpinnerAnimation);

exports.StyledSpinner = StyledSpinner;

var StyledSpinnerCircle = _styledComponents.default.circle.withConfig({
  displayName: "Loading__StyledSpinnerCircle",
  componentId: "sc-1psg3na-3"
})(["fill:transparent;stroke:", ";stroke-width:3px;stroke-linecap:round;stroke-dasharray:128px;stroke-dashoffset:64px;"], function (_ref16) {
  var theme = _ref16.theme,
      type = _ref16.type;
  return type === _consts.TYPE_OPTIONS.BUTTON_LOADER ? "currentColor" : theme.orbit.paletteInkLighter;
});

StyledSpinnerCircle.defaultProps = {
  theme: _defaultTheme.default
};

var StyledLoader = _styledComponents.default.div.withConfig({
  displayName: "Loading__StyledLoader",
  componentId: "sc-1psg3na-4"
})(["display:flex;justify-content:center;align-items:center;"]);

var StyledLoaderCircle = _styledComponents.default.div.withConfig({
  displayName: "Loading__StyledLoaderCircle",
  componentId: "sc-1psg3na-5"
})(["width:8px;height:8px;border-radius:50%;margin-", ":6px;background:", ";animation:", " 1.25s infinite ease-in-out;&:nth-child(2){animation-delay:0.1s;}&:nth-child(3){animation-delay:0.2s;margin:0;}"], _rtl.right, function (_ref17) {
  var theme = _ref17.theme;
  return theme.orbit.paletteInkLighter;
}, LoaderAnimation);

StyledLoaderCircle.defaultProps = {
  theme: _defaultTheme.default
};

var Loading = function Loading(props) {
  var _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$type = props.type,
      type = _props$type === void 0 ? _consts.TYPE_OPTIONS.PAGE_LOADER : _props$type,
      text = props.text,
      children = props.children,
      dataTest = props.dataTest;
  return children && !loading ? children : React.createElement(StyledLoading, {
    type: type,
    dataTest: dataTest
  }, type === _consts.TYPE_OPTIONS.BOX_LOADER || type === _consts.TYPE_OPTIONS.SEARCH_LOADER || type === _consts.TYPE_OPTIONS.INLINE_LOADER ? React.createElement(StyledLoader, null, React.createElement(StyledLoaderCircle, null), React.createElement(StyledLoaderCircle, null), React.createElement(StyledLoaderCircle, null)) : React.createElement(StyledSpinner, {
    viewBox: "0 0 40 40"
  }, React.createElement(StyledSpinnerCircle, {
    cx: "50%",
    cy: "50%",
    r: "18",
    type: type
  })), type !== _consts.TYPE_OPTIONS.BUTTON_LOADER && React.createElement(StyledLoadingText, {
    type: type
  }, text));
};

Loading.displayName = "Loading";
var _default = Loading;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Text/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ELEMENT_OPTIONS = exports.ALIGN_OPTIONS = exports.WEIGHT_OPTIONS = exports.SIZE_OPTIONS = exports.TYPE_OPTIONS = void 0;
var TYPE_OPTIONS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ATTENTION: "attention",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  CRITICAL: "critical",
  WHITE: "white"
};
exports.TYPE_OPTIONS = TYPE_OPTIONS;
var SIZE_OPTIONS = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large"
};
exports.SIZE_OPTIONS = SIZE_OPTIONS;
var WEIGHT_OPTIONS = {
  NORMAL: "normal",
  BOLD: "bold"
};
exports.WEIGHT_OPTIONS = WEIGHT_OPTIONS;
var ALIGN_OPTIONS = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right"
};
exports.ALIGN_OPTIONS = ALIGN_OPTIONS;
var ELEMENT_OPTIONS = {
  P: "p",
  SPAN: "span",
  DIV: "div"
};
exports.ELEMENT_OPTIONS = ELEMENT_OPTIONS;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/Text/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledText = void 0;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _consts = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Text/consts.js");

var _getSpacingToken = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/common/getSpacingToken/index.js"));

var _rtl = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/rtl/index.js");

var _TextLink = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/TextLink/index.js");

var _consts2 = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/TextLink/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getTypeToken = function getTypeToken() {
  return function (_ref) {
    var _typeTokens;

    var theme = _ref.theme,
        type = _ref.type;
    var typeTokens = (_typeTokens = {}, _defineProperty(_typeTokens, _consts.TYPE_OPTIONS.PRIMARY, theme.orbit.colorTextPrimary), _defineProperty(_typeTokens, _consts.TYPE_OPTIONS.SECONDARY, theme.orbit.colorTextSecondary), _defineProperty(_typeTokens, _consts.TYPE_OPTIONS.ATTENTION, theme.orbit.colorTextAttention), _defineProperty(_typeTokens, _consts.TYPE_OPTIONS.INFO, theme.orbit.colorTextInfo), _defineProperty(_typeTokens, _consts.TYPE_OPTIONS.SUCCESS, theme.orbit.colorTextSuccess), _defineProperty(_typeTokens, _consts.TYPE_OPTIONS.WARNING, theme.orbit.colorTextWarning), _defineProperty(_typeTokens, _consts.TYPE_OPTIONS.CRITICAL, theme.orbit.colorTextCritical), _defineProperty(_typeTokens, _consts.TYPE_OPTIONS.WHITE, theme.orbit.colorTextWhite), _typeTokens);
    return typeTokens[type];
  };
};

var getWeightToken = function getWeightToken() {
  return function (_ref2) {
    var _weightTokens;

    var theme = _ref2.theme,
        weight = _ref2.weight;
    var weightTokens = (_weightTokens = {}, _defineProperty(_weightTokens, _consts.WEIGHT_OPTIONS.NORMAL, theme.orbit.fontWeightNormal), _defineProperty(_weightTokens, _consts.WEIGHT_OPTIONS.BOLD, theme.orbit.fontWeightBold), _weightTokens);
    return weightTokens[weight];
  };
};

var getSizeToken = function getSizeToken() {
  return function (_ref3) {
    var _sizeTokens;

    var theme = _ref3.theme,
        size = _ref3.size;
    var sizeTokens = (_sizeTokens = {}, _defineProperty(_sizeTokens, _consts.SIZE_OPTIONS.LARGE, theme.orbit.fontSizeTextLarge), _defineProperty(_sizeTokens, _consts.SIZE_OPTIONS.NORMAL, theme.orbit.fontSizeTextNormal), _defineProperty(_sizeTokens, _consts.SIZE_OPTIONS.SMALL, theme.orbit.fontSizeTextSmall), _sizeTokens);
    return sizeTokens[size];
  };
};

var StyledText = (0, _styledComponents.default)(function (_ref4) {
  var TextElement = _ref4.element,
      children = _ref4.children,
      className = _ref4.className,
      dataTest = _ref4.dataTest;
  return React.createElement(TextElement, {
    className: className,
    "data-test": dataTest
  }, children);
}).withConfig({
  displayName: "Text__StyledText",
  componentId: "sc-19qtt4y-0"
})(["font-family:", ";font-size:", ";font-weight:", ";color:", ";line-height:", ";text-align:", ";text-transform:", ";font-style:", ";margin:0;margin-bottom:", ";a:not(", "){", "}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.fontFamily;
}, getSizeToken(), getWeightToken(), getTypeToken(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.lineHeightText;
}, function (_ref7) {
  var align = _ref7.align;
  return (0, _rtl.textAlign)(align);
}, function (_ref8) {
  var uppercase = _ref8.uppercase;
  return uppercase && "uppercase";
}, function (_ref9) {
  var italic = _ref9.italic;
  return italic && "italic";
}, _getSpacingToken.default, _TextLink.StyledTextLink, function (_ref10) {
  var theme = _ref10.theme;
  return (0, _TextLink.getLinkStyle)({
    theme: theme,
    type: _consts2.TYPE_OPTIONS.PRIMARY
  });
});
exports.StyledText = StyledText;
StyledText.defaultProps = {
  theme: _defaultTheme.default
};

var Text = function Text(_ref11) {
  var _ref11$type = _ref11.type,
      type = _ref11$type === void 0 ? _consts.TYPE_OPTIONS.PRIMARY : _ref11$type,
      _ref11$size = _ref11.size,
      size = _ref11$size === void 0 ? _consts.SIZE_OPTIONS.NORMAL : _ref11$size,
      _ref11$weight = _ref11.weight,
      weight = _ref11$weight === void 0 ? _consts.WEIGHT_OPTIONS.NORMAL : _ref11$weight,
      _ref11$align = _ref11.align,
      align = _ref11$align === void 0 ? _consts.ALIGN_OPTIONS.LEFT : _ref11$align,
      _ref11$element = _ref11.element,
      element = _ref11$element === void 0 ? _consts.ELEMENT_OPTIONS.P : _ref11$element,
      _ref11$uppercase = _ref11.uppercase,
      uppercase = _ref11$uppercase === void 0 ? false : _ref11$uppercase,
      _ref11$italic = _ref11.italic,
      italic = _ref11$italic === void 0 ? false : _ref11$italic,
      dataTest = _ref11.dataTest,
      spaceAfter = _ref11.spaceAfter,
      children = _ref11.children;
  return React.createElement(StyledText, {
    type: type,
    size: size,
    weight: weight,
    align: align,
    element: element,
    uppercase: uppercase,
    italic: italic,
    dataTest: dataTest,
    spaceAfter: spaceAfter
  }, children);
};

var _default = Text;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/TextLink/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIZE_OPTIONS = exports.TYPE_OPTIONS = void 0;
var TYPE_OPTIONS = {
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
exports.TYPE_OPTIONS = TYPE_OPTIONS;
var SIZE_OPTIONS = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large"
};
exports.SIZE_OPTIONS = SIZE_OPTIONS;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/TextLink/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledTextLink = exports.getLinkStyle = void 0;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

var _consts = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/TextLink/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getColor = function getColor(_ref) {
  var _tokens;

  var theme = _ref.theme,
      type = _ref.type;
  var tokens = (_tokens = {}, _defineProperty(_tokens, _consts.TYPE_OPTIONS.PRIMARY, theme.orbit.colorTextLinkPrimary), _defineProperty(_tokens, _consts.TYPE_OPTIONS.SECONDARY, theme.orbit.colorTextLinkSecondary), _tokens);
  return tokens[type];
};

var getSizeToken = function getSizeToken() {
  return function (_ref2) {
    var _sizeTokens;

    var theme = _ref2.theme,
        size = _ref2.size;
    var sizeTokens = (_sizeTokens = {}, _defineProperty(_sizeTokens, _consts.SIZE_OPTIONS.LARGE, theme.orbit.fontSizeTextLarge), _defineProperty(_sizeTokens, _consts.SIZE_OPTIONS.NORMAL, theme.orbit.fontSizeTextNormal), _defineProperty(_sizeTokens, _consts.SIZE_OPTIONS.SMALL, theme.orbit.fontSizeTextSmall), _sizeTokens);
    return size && sizeTokens[size];
  };
};

var IconContainer = (0, _styledComponents.default)(function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className;
  return React.createElement("span", {
    className: className
  }, children);
}).withConfig({
  displayName: "TextLink__IconContainer",
  componentId: "sc-1bvlje4-0"
})(["display:flex;align-items:center;color:", ";transition:color ", " ease-in-out;& svg{width:", ";height:", ";}"], getColor, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.durationFast;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.widthIconSmall;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.heightIconSmall;
});
IconContainer.defaultProps = {
  theme: _defaultTheme.default
};

var getLinkStyle = function getLinkStyle(_ref7) {
  var theme = _ref7.theme,
      type = _ref7.type;
  return (0, _styledComponents.css)(["&,&:link,&:visited{color:", ";text-decoration:", ";}&:hover,&:active{text-decoration:", ";color:", ";"], getColor({
    theme: theme,
    type: type
  }), type === _consts.TYPE_OPTIONS.SECONDARY ? theme.orbit.textDecorationTextLinkSecondary : theme.orbit.textDecorationTextLinkPrimary, type === _consts.TYPE_OPTIONS.SECONDARY ? theme.orbit.textDecorationTextLinkSecondaryHover : theme.orbit.textDecorationTextLinkPrimaryHover, type === _consts.TYPE_OPTIONS.SECONDARY ? theme.orbit.colorTextLinkSecondaryHover : theme.orbit.colorTextLinkPrimaryHover);
};

exports.getLinkStyle = getLinkStyle;
var StyledTextLink = (0, _styledComponents.default)(function (_ref8) {
  var theme = _ref8.theme,
      type = _ref8.type,
      props = _objectWithoutProperties(_ref8, ["theme", "type"]);

  return React.createElement("a", props, props.children);
}).withConfig({
  displayName: "TextLink__StyledTextLink",
  componentId: "sc-1bvlje4-1"
})(["font-family:", ";font-weight:", ";font-size:", ";cursor:pointer;display:inline-flex;align-items:center;transition:color ", " ease-in-out;", ";", "{color:", ";}}&:focus{outline-width:3px;}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.fontFamily;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.orbit.fontWeightLinks;
}, getSizeToken, function (_ref11) {
  var theme = _ref11.theme;
  return theme.orbit.durationFast;
}, getLinkStyle, IconContainer, function (_ref12) {
  var theme = _ref12.theme,
      type = _ref12.type;
  return type === _consts.TYPE_OPTIONS.SECONDARY ? theme.orbit.colorTextLinkSecondaryHover : theme.orbit.colorTextLinkPrimaryHover;
});
exports.StyledTextLink = StyledTextLink;
StyledTextLink.defaultProps = {
  theme: _defaultTheme.default
};

var TextLink = function TextLink(_ref13) {
  var _ref13$type = _ref13.type,
      type = _ref13$type === void 0 ? _consts.TYPE_OPTIONS.PRIMARY : _ref13$type,
      size = _ref13.size,
      children = _ref13.children,
      href = _ref13.href,
      _ref13$external = _ref13.external,
      external = _ref13$external === void 0 ? false : _ref13$external,
      rel = _ref13.rel,
      icon = _ref13.icon,
      onClick = _ref13.onClick,
      dataTest = _ref13.dataTest,
      tabIndex = _ref13.tabIndex;
  var relValues = rel ? rel.split(" ") : []; // add noopener and noreferrer whenever external

  if (relValues && external) {
    if (!relValues.includes("noopener")) {
      relValues.push("noopener");
    }

    if (!relValues.includes("noreferrer")) {
      relValues.push("noreferrer");
    }
  }

  return React.createElement(StyledTextLink, {
    type: type,
    size: size,
    href: href,
    target: external ? "_blank" : undefined,
    rel: relValues && relValues.join(" "),
    onClick: onClick,
    "data-test": dataTest,
    tabIndex: tabIndex
  }, children, icon && React.createElement(IconContainer, {
    type: type
  }, icon));
};

var _default = TextLink;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/common/getSpacingToken/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var SPACINGS_AFTER = {
  SMALLEST: "smallest",
  SMALL: "small",
  NORMAL: "normal",
  MEDIUM: "medium",
  LARGE: "large",
  LARGEST: "largest"
};
var _default = SPACINGS_AFTER;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/common/getSpacingToken/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consts = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/common/getSpacingToken/consts.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getSpacingToken = function getSpacingToken(_ref) {
  var _tokens;

  var spaceAfter = _ref.spaceAfter,
      theme = _ref.theme;
  var tokens = (_tokens = {}, _defineProperty(_tokens, _consts.default.SMALLEST, theme.orbit.spaceXXSmall), _defineProperty(_tokens, _consts.default.SMALL, theme.orbit.spaceXSmall), _defineProperty(_tokens, _consts.default.NORMAL, theme.orbit.spaceSmall), _defineProperty(_tokens, _consts.default.MEDIUM, theme.orbit.spaceMedium), _defineProperty(_tokens, _consts.default.LARGE, theme.orbit.spaceLarge), _defineProperty(_tokens, _consts.default.LARGEST, theme.orbit.spaceXLarge), _tokens);
  return spaceAfter && tokens[spaceAfter];
};

var _default = getSpacingToken;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _orbitDesignTokens = __webpack_require__("./node_modules/@kiwicom/orbit-design-tokens/lib/index.js");

var _default = {
  orbit: _orbitDesignTokens.defaultTokens,
  rtl: false
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/icons/ChevronDown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChevronDown;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* eslint-disable */
function ChevronDown(props) {
  var color = props.color,
      size = props.size,
      customColor = props.customColor,
      className = props.className,
      dataTest = props.dataTest,
      ariaHidden = props.ariaHidden,
      ariaLabel = props.ariaLabel,
      reverseOnRtl = props.reverseOnRtl;
  return React.createElement(_Icon.default, {
    viewBox: "0 0 24 24",
    size: size,
    color: color,
    customColor: customColor,
    className: className,
    dataTest: dataTest,
    ariaHidden: ariaHidden,
    reverseOnRtl: reverseOnRtl,
    ariaLabel: ariaLabel
  }, React.createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/icons/Close.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Close;

var React = _interopRequireWildcard(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/Icon/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* eslint-disable */
function Close(props) {
  var color = props.color,
      size = props.size,
      customColor = props.customColor,
      className = props.className,
      dataTest = props.dataTest,
      ariaHidden = props.ariaHidden,
      ariaLabel = props.ariaLabel,
      reverseOnRtl = props.reverseOnRtl;
  return React.createElement(_Icon.default, {
    viewBox: "0 0 24 24",
    size: size,
    color: color,
    customColor: customColor,
    className: className,
    dataTest: dataTest,
    ariaHidden: ariaHidden,
    reverseOnRtl: reverseOnRtl,
    ariaLabel: ariaLabel
  }, React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }));
}

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/utils/Slide/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledSlide = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _defaultTheme = _interopRequireDefault(__webpack_require__("./node_modules/@kiwicom/orbit-components/lib/defaultTheme.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getMaxHeight = function getMaxHeight(_ref) {
  var maxHeight = _ref.maxHeight;
  if (maxHeight === 0) return "0px";
  if (!maxHeight) return undefined;
  return "".concat(maxHeight, "px");
};

var StyledSlide = _styledComponents.default.div.withConfig({
  displayName: "Slide__StyledSlide",
  componentId: "sc-1xbmdp2-0"
})(["max-height:", ";transition:max-height ", " linear;"], getMaxHeight, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.durationFast;
});

exports.StyledSlide = StyledSlide;
StyledSlide.defaultProps = {
  theme: _defaultTheme.default
};

var Slide =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slide, _React$Component);

  function Slide() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Slide);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slide)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      maxHeight: 0
    });

    _defineProperty(_assertThisInitialized(_this), "expandTimeout", null);

    _defineProperty(_assertThisInitialized(_this), "collapseTimeout", null);

    _defineProperty(_assertThisInitialized(_this), "setMaxHeight", function () {
      var maxHeight = _this.props.maxHeight;

      _this.setState({
        maxHeight: maxHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "expandCallback", function () {
      _this.setState({
        maxHeight: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "collapseCallback", function () {
      _this.setState({
        maxHeight: 0
      });
    });

    return _this;
  }

  _createClass(Slide, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMaxHeight();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot) {
        if (this.props.expanded) {
          this.setMaxHeight();

          if (typeof setTimeout === "function") {
            this.expandTimeout = setTimeout(this.expandCallback, 150);
          }
        } else {
          if (this.state.maxHeight !== this.props.maxHeight) {
            this.setMaxHeight();
          }

          if (typeof setTimeout === "function") {
            this.collapseTimeout = setTimeout(this.collapseCallback, 1);
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof clearTimeout === "function") {
        if (this.expandTimeout) {
          clearTimeout(this.expandTimeout);
        }

        if (this.collapseTimeout) {
          clearTimeout(this.collapseTimeout);
        }
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if (this.props.expanded === prevProps.expanded) return null;
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$expanded = _this$props.expanded,
          expanded = _this$props$expanded === void 0 ? false : _this$props$expanded;
      return _react.default.createElement(StyledSlide, {
        maxHeight: this.state.maxHeight,
        expanded: expanded
      }, children);
    }
  }]);

  return Slide;
}(_react.default.Component);

var _default = Slide;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/utils/mediaQuery/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERIES = exports.DEVICES = void 0;
// needs to be from lowest to highest viewport, used for Hide component
var DEVICES = ["smallMobile", "mediumMobile", "largeMobile", "tablet", "desktop", "largeDesktop"];
exports.DEVICES = DEVICES;
var QUERIES = {
  LARGEDESKTOP: "largeDesktop",
  DESKTOP: "desktop",
  TABLET: "tablet",
  LARGEMOBILE: "largeMobile",
  MEDIUMMOBILE: "mediumMobile"
};
exports.QUERIES = QUERIES;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/utils/mediaQuery/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getBreakpointWidth = void 0;

var _styledComponents = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js");

var _consts = __webpack_require__("./node_modules/@kiwicom/orbit-components/lib/utils/mediaQuery/consts.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getBreakpointWidth = function getBreakpointWidth(name, theme, pure) {
  var _tokens;

  var tokens = (_tokens = {}, _defineProperty(_tokens, _consts.QUERIES.MEDIUMMOBILE, theme.orbit.widthBreakpointMediumMobile), _defineProperty(_tokens, _consts.QUERIES.LARGEMOBILE, theme.orbit.widthBreakpointLargeMobile), _defineProperty(_tokens, _consts.QUERIES.TABLET, theme.orbit.widthBreakpointTablet), _defineProperty(_tokens, _consts.QUERIES.DESKTOP, theme.orbit.widthBreakpointDesktop), _defineProperty(_tokens, _consts.QUERIES.LARGEDESKTOP, theme.orbit.widthBreakpointLargeDesktop), _tokens);

  if (pure) {
    return tokens[name];
  }

  return "(min-width: ".concat(tokens[name], "px)");
};

exports.getBreakpointWidth = getBreakpointWidth;
var mediaQueries = Object.keys(_consts.QUERIES).reduce(function (o, name) {
  return _objectSpread({}, o, _defineProperty({}, _consts.QUERIES[name], function (style) {
    return (0, _styledComponents.css)(["@media ", "{", ";}"], function (_ref) {
      var theme = _ref.theme;
      return getBreakpointWidth(_consts.QUERIES[name], theme);
    }, style);
  }));
}, {});
var _default = mediaQueries;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-components/lib/utils/rtl/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translate3d = exports.textAlign = exports.borderRadius = exports.right = exports.left = exports.rtlSpacing = void 0;

var leftToRight = function leftToRight(left, right) {
  return function (_ref) {
    var theme = _ref.theme;
    return theme.rtl ? right : left;
  };
};

var rtlSpacing = function rtlSpacing(value) {
  return function (_ref2) {
    var theme = _ref2.theme;

    if (!theme.rtl) {
      return value;
    }

    var parts = value.split(" ").filter(function (part) {
      return !Number.isNaN(parseFloat(part)) && part;
    });
    return parts.length === 4 ? [parts[0], parts[3], parts[2], parts[1]].join(" ") : value;
  };
};

exports.rtlSpacing = rtlSpacing;
var left = leftToRight("left", "right");
exports.left = left;
var right = leftToRight("right", "left");
exports.right = right;

var borderRadius = function borderRadius(value) {
  return function (_ref3) {
    var theme = _ref3.theme;

    if (!theme.rtl) {
      return value;
    }

    var parts = value.split(" ").filter(function (part) {
      return !Number.isNaN(parseFloat(part)) && part;
    });
    return parts.length === 4 ? [parts[1], parts[0], parts[3], parts[2]].join(" ") : value;
  };
};

exports.borderRadius = borderRadius;

var textAlign = function textAlign(value) {
  return function (_ref4) {
    var theme = _ref4.theme;

    if (theme.rtl) {
      if (value === "left") {
        return leftToRight("left", "right")({
          theme: theme
        });
      }

      if (value === "right") {
        return leftToRight("right", "left")({
          theme: theme
        });
      }
    }

    return value;
  };
};

exports.textAlign = textAlign;

var translate3d = function translate3d(value) {
  return function (_ref5) {
    var theme = _ref5.theme;

    if (!theme.rtl) {
      return "translate3d(".concat(value, ")");
    }

    var parts = value.split(",").filter(function (part) {
      return !Number.isNaN(parseFloat(part)) && part;
    });
    var x = parts[0];
    var newX = x[0] === "-" ? x.slice(1) : "-".concat(x);
    return "translate3d(".concat(newX, ",").concat(parts[1], ",").concat(parts[2], ")");
  };
};

exports.translate3d = translate3d;

/***/ }),

/***/ "./node_modules/@kiwicom/orbit-design-tokens/lib/convertHexToRgba.js":
/***/ (function(module, exports) {

function convertHexToRgba(color, opacity) {
  var removeHash = color.replace("#", "");
  var hex = removeHash.length === 3 ? removeHash + removeHash : removeHash;
  var red = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue = parseInt(hex.substring(4, 6), 16);
  return "rgba(" + red + ", " + green + ", " + blue + ", " + opacity / 100 + ")";
}
module.exports = convertHexToRgba;


/***/ }),

/***/ "./node_modules/@kiwicom/orbit-design-tokens/lib/foundation.js":
/***/ (function(module, exports, __webpack_require__) {

// @flow
var convertHexToRgba = __webpack_require__("./node_modules/@kiwicom/orbit-design-tokens/lib/convertHexToRgba.js");

var palette = {
  product: {
    light: "#E1F5F2",
    lightHover: "#bde9e2",
    lightActive: "#9addd3",
    normal: "#00a991",
    normalHover: "#009882",
    normalActive: "#008f7b",
    dark: "#00826f",
  },
  white: {
    normal: "#fff",
  },
  cloud: {
    light: "#f5f7f9",
    lightHover: "#e5eaef",
    lightActive: "#d6dee6",
    normal: "#e8edf1",
    normalHover: "#d9e1e8",
    normalActive: "#cad5df",
  },
  ink: {
    lighter: "#bac7d5",
    lighterHover: "#a6b6c8",
    lighterActive: "#94a8be",
    light: "#7f91a8",
    lightHover: "#6d819c",
    lightActive: "#5f738c",
    normal: "#46515e",
    normalHover: "#3f4854",
    normalActive: "#38404b",
    dark: "#171b1e",
  },
  orange: {
    light: "#fcf1cd",
    lightHover: "#faeab7",
    lightActive: "#f9e4a1",
    normal: "#f9971e",
    normalHover: "#f48a06",
    normalActive: "#e68206",
    dark: "#a93610",
  },
  red: {
    light: "#fae8e8",
    lightHover: "#f5d4d4",
    lightActive: "#f1c0c0",
    normal: "#d21c1c",
    normalHover: "#bd1919",
    normalActive: "#b21717",
    dark: "#650808",
  },
  green: {
    light: "#e7f3e8",
    lightHover: "#d7ebd8",
    lightActive: "#c7e3c9",
    normal: "#46B655",
    normalHover: "#42ac50",
    normalActive: "#3fa34c",
    dark: "#065d12",
  },
  blue: {
    light: "#e0f6ff",
    lightHover: "#c8effe",
    lightActive: "#b0e8fe",
    normal: "#0176D2",
    normalHover: "#006abd",
    normalActive: "#0064b2",
    dark: "#003A69",
  },
  social: {
    facebook: "#3b5998",
    facebookHover: "#385490",
    facebookActive: "#354f88",
  },
};

var base = {
  fontFamily:
    '"Roboto", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
  fontSizeSm: "12px",
  fontSizeMd: "14px",
  fontSizeLg: "16px",
  borderRadius: "3px",
  sizeSm: "16px",
  sizeMd: "24px",
  sizeLg: "32px",
  sizeXl: "44px",
  size2xl: "52px",
  opacitySmall: "0.3",
  opacityMedium: "0.5",
  opacityLarge: "0.8",
  fontWeightNormal: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700",
  space2xs: "4px",
  spaceXs: "8px",
  spaceSm: "12px",
  spaceMd: "16px",
  spaceLg: "24px",
  spaceXl: "32px",
  space2xl: "40px",
  space3xl: "52px",
  durationFast: "0.15s",
  durationNormal: "0.3s",
  durationSlow: "0.4s",
  transitionDefault: "ease-in-out",
  lineHeight: "1.4",
  boxShadowStatic: "0px 0px 3px 1px",
  boxShadowActionable: "0 2px 4px 0",
  boxShadowElevated: "0 4px 12px 0",
  boxShadowModal: "0 20px 60px 0",
  boxShadowColorStatic: convertHexToRgba(palette.blue.normal, 30),
  boxShadowColorActionable: convertHexToRgba(palette.ink.dark, 10),
  boxShadowColorElevated: convertHexToRgba(palette.ink.dark, 30),
  boxShadowColorModal: convertHexToRgba(palette.ink.dark, 40),
};

module.exports = {
  palette: palette,
  base: base,
};


/***/ }),

/***/ "./node_modules/@kiwicom/orbit-design-tokens/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

var mergeDeepRight = __webpack_require__("./node_modules/ramda/src/mergeDeepRight.js");

var foundation = __webpack_require__("./node_modules/@kiwicom/orbit-design-tokens/lib/foundation.js");
var convertHexToRgba = __webpack_require__("./node_modules/@kiwicom/orbit-design-tokens/lib/convertHexToRgba.js");

function getTokens(customFoundation) {
  // By default it takes base foundation config

  var theme = customFoundation ? mergeDeepRight(foundation, customFoundation) : foundation;

  return {
    // category:Colors
    // description:Use these tokens for text or icon colors. Don't use these for borders and background colors.
    colorTextPrimary: theme.palette.ink.normal,
    colorTextSecondary: theme.palette.ink.light,
    colorTextAttention: theme.palette.ink.dark,
    colorTextError: theme.palette.red.normal,
    colorTextInfo: theme.palette.blue.normal,
    colorTextSuccess: theme.palette.green.normal,
    colorTextWarning: theme.palette.orange.normal,
    colorTextCritical: theme.palette.red.normal,
    colorTextWhite: theme.palette.white.normal,
    colorIconPrimary: theme.palette.ink.normal,
    colorIconSecondary: theme.palette.ink.light,
    colorIconAttention: theme.palette.ink.dark,
    colorIconTertiary: theme.palette.ink.lighter,
    colorIconInfo: theme.palette.blue.normal,
    colorIconSuccess: theme.palette.green.normal,
    colorIconWarning: theme.palette.orange.normal,
    colorIconCritical: theme.palette.red.normal,
    colorHeading: theme.palette.ink.dark,
    colorHeadingInverted: theme.palette.white.normal,
    colorTextLinkPrimary: theme.palette.product.dark,
    colorTextLinkPrimaryHover: theme.palette.product.normal,
    colorTextLinkSecondary: theme.palette.ink.dark,
    colorTextLinkSecondaryHover: theme.palette.product.normal,
    colorAlertIconSuccess: theme.palette.green.normal,
    colorTextAlertSuccess: theme.palette.green.dark,
    colorAlertIconInfo: theme.palette.blue.normal,
    colorTextAlertInfo: theme.palette.blue.dark,
    colorAlertIconWarning: theme.palette.orange.normal,
    colorTextAlertWarning: theme.palette.orange.dark,
    colorAlertIconCritical: theme.palette.red.normal,
    colorTextAlertCritical: theme.palette.red.dark,
    colorTextAlertLink: theme.palette.ink.dark,
    colorTextButtonFilled: theme.palette.white.normal,
    colorTextButtonFilledHover: theme.palette.white.normal,
    colorTextButtonFilledActive: theme.palette.white.normal,
    colorTextButtonPrimary: theme.palette.white.normal,
    colorTextButtonPrimaryHover: theme.palette.white.normal,
    colorTextButtonPrimaryActive: theme.palette.white.normal,
    colorTextButtonSecondary: theme.palette.ink.normal,
    colorTextButtonSecondaryHover: theme.palette.ink.normalHover,
    colorTextButtonSecondaryActive: theme.palette.ink.normalActive,
    colorTextButtonInfo: theme.palette.white.normal,
    colorTextButtonInfoHover: theme.palette.white.normal,
    colorTextButtonInfoActive: theme.palette.white.normal,
    colorTextButtonSuccess: theme.palette.white.normal,
    colorTextButtonSuccessHover: theme.palette.white.normal,
    colorTextButtonSuccessActive: theme.palette.white.normal,
    colorTextButtonWarning: theme.palette.white.normal,
    colorTextButtonWarningHover: theme.palette.white.normal,
    colorTextButtonWarningActive: theme.palette.white.normal,
    colorTextButtonCritical: theme.palette.white.normal,
    colorTextButtonCriticalHover: theme.palette.white.normal,
    colorTextButtonCriticalActive: theme.palette.white.normal,
    colorTextButtonFacebook: theme.palette.white.normal,
    colorTextButtonFacebookHover: theme.palette.white.normal,
    colorTextButtonFacebookActive: theme.palette.white.normal,
    colorTextButtonGoogle: theme.palette.ink.normal,
    colorTextButtonGoogleHover: theme.palette.ink.normalHover,
    colorTextButtonGoogleActive: theme.palette.ink.normalActive,
    colorTextButtonWhite: theme.palette.ink.normal,
    colorTextButtonWhiteHover: theme.palette.ink.normalHover,
    colorTextButtonWhiteActive: theme.palette.ink.normalActive,
    colorTextButtonPrimaryBordered: theme.palette.product.normal,
    colorTextButtonPrimaryBorderedHover: theme.palette.product.normalHover,
    colorTextButtonPrimaryBorderedActive: theme.palette.product.normalActive,
    colorTextButtonSecondaryBordered: theme.palette.ink.normal,
    colorTextButtonSecondaryBorderedHover: theme.palette.ink.normalHover,
    colorTextButtonSecondaryBorderedActive: theme.palette.ink.normalActive,
    colorTextButtonInfoBordered: theme.palette.blue.normal,
    colorTextButtonInfoBorderedHover: theme.palette.blue.normalHover,
    colorTextButtonInfoBorderedActive: theme.palette.blue.normalActive,
    colorTextButtonSuccessBordered: theme.palette.green.normal,
    colorTextButtonSuccessBorderedHover: theme.palette.green.normalHover,
    colorTextButtonSuccessBorderedActive: theme.palette.green.normalActive,
    colorTextButtonWarningBordered: theme.palette.orange.normal,
    colorTextButtonWarningBorderedHover: theme.palette.orange.normalHover,
    colorTextButtonWarningBorderedActive: theme.palette.orange.normalActive,
    colorTextButtonCriticalBordered: theme.palette.red.normal,
    colorTextButtonCriticalBorderedHover: theme.palette.red.normalHover,
    colorTextButtonCriticalBorderedActive: theme.palette.red.normalActive,
    colorTextButtonFacebookBordered: theme.palette.social.facebook,
    colorTextButtonFacebookBorderedHover: theme.palette.social.facebookHover,
    colorTextButtonFacebookBorderedActive: theme.palette.social.facebookActive,
    colorTextButtonGoogleBordered: theme.palette.ink.normal,
    colorTextButtonGoogleBorderedHover: theme.palette.ink.normalHover,
    colorTextButtonGoogleBorderedActive: theme.palette.ink.normalActive,
    colorTextButtonWhiteBordered: theme.palette.white.normal,
    colorTextButtonWhiteBorderedHover: theme.palette.white.normal,
    colorTextButtonWhiteBorderedActive: theme.palette.white.normal,
    colorTextButtonLinkPrimary: theme.palette.product.normal,
    colorTextButtonLinkPrimaryHover: theme.palette.product.normalHover,
    colorTextButtonLinkPrimaryActive: theme.palette.product.normalActive,
    colorTextButtonLinkSecondary: theme.palette.ink.normal,
    colorTextButtonLinkSecondaryHover: theme.palette.ink.normalHover,
    colorTextButtonLinkSecondaryActive: theme.palette.ink.normalActive,
    colorTextInput: theme.palette.ink.normal,
    colorTextInputPrefix: theme.palette.ink.light,
    colorTextInputDisabled: theme.palette.ink.lighter,
    colorTextBadgeNeutral: theme.palette.ink.dark,
    colorTextBadgeInfo: theme.palette.blue.normal,
    colorTextBadgeSuccess: theme.palette.green.normal,
    colorTextBadgeWarning: theme.palette.orange.normal,
    colorTextBadgeCritical: theme.palette.red.normal,
    colorTextBadgeDark: theme.palette.white.normal,
    colorTextBadgeWhite: theme.palette.ink.dark,
    colorTextLoading: theme.palette.ink.lighter,
    colorTextTable: theme.palette.ink.light,
    colorTextTag: theme.palette.ink.normal,
    colorTextTagSelected: theme.palette.cloud.normal,
    colorIconInput: theme.palette.ink.lighter,
    colorPlaceholderInput: theme.palette.ink.lighter,
    colorPlaceholderInputError: theme.palette.red.normal,
    colorPlaceholderInputFile: theme.palette.ink.light,
    colorPlaceholderInputFileError: theme.palette.red.normal,
    colorFormLabel: theme.palette.ink.normal,
    colorFormLabelFilled: theme.palette.ink.light,
    colorInfoCheckBoxRadio: theme.palette.ink.light,
    colorIconCheckboxRadio: theme.palette.product.normal,
    colorIconCheckboxRadioDisabled: theme.palette.ink.lighter,
    colorIconRadioButton: theme.palette.product.normal,
    colorIconRadioButtonDisabled: theme.palette.ink.lighter,
    colorStopoverArrow: theme.palette.ink.light,
    // category:Font family
    // description:
    fontFamily: theme.base.fontFamily,
    // category:Background colors
    // description:Use these tokens for background colors only. Do not use these for border colors or text theme.palette.
    backgroundBody: theme.palette.cloud.light,
    backgroundModal: theme.palette.white.normal,
    backgroundCard: theme.palette.white.normal,
    backgroundCarrierLogo: "transparent",
    backgroundCountryFlag: "transparent",
    backgroundButtonPrimary: theme.palette.product.normal,
    backgroundButtonPrimaryHover: theme.palette.product.normalHover,
    backgroundButtonPrimaryActive: theme.palette.product.normalActive,
    backgroundButtonSecondary: theme.palette.cloud.normal,
    backgroundButtonSecondaryHover: theme.palette.cloud.normalHover,
    backgroundButtonSecondaryActive: theme.palette.cloud.normalActive,
    backgroundButtonFacebook: theme.palette.social.facebook,
    backgroundButtonFacebookHover: theme.palette.social.facebookHover,
    backgroundButtonFacebookActive: theme.palette.social.facebookActive,
    backgroundButtonGoogle: theme.palette.cloud.light,
    backgroundButtonGoogleHover: theme.palette.cloud.lightHover,
    backgroundButtonGoogleActive: theme.palette.cloud.lightActive,
    backgroundButtonInfo: theme.palette.blue.normal,
    backgroundButtonInfoHover: theme.palette.blue.normalHover,
    backgroundButtonInfoActive: theme.palette.blue.normalActive,
    backgroundButtonSuccess: theme.palette.green.normal,
    backgroundButtonSuccessHover: theme.palette.green.normalHover,
    backgroundButtonSuccessActive: theme.palette.green.normalActive,
    backgroundButtonWarning: theme.palette.orange.normal,
    backgroundButtonWarningHover: theme.palette.orange.normalHover,
    backgroundButtonWarningActive: theme.palette.orange.normalActive,
    backgroundButtonCritical: theme.palette.red.normal,
    backgroundButtonCriticalHover: theme.palette.red.normalHover,
    backgroundButtonCriticalActive: theme.palette.red.normalActive,
    backgroundButtonWhite: theme.palette.white.normal,
    backgroundButtonWhiteHover: theme.palette.cloud.light,
    backgroundButtonWhiteActive: theme.palette.cloud.lightHover,
    backgroundButtonBordered: "transparent",
    backgroundButtonBorderedHover: theme.palette.cloud.light,
    backgroundButtonBorderedActive: theme.palette.white.normal,
    backgroundButtonWhiteBordered: "transparent",
    backgroundButtonWhiteBorderedHover: convertHexToRgba(theme.palette.white.normal, 20),
    backgroundButtonWhiteBorderedActive: convertHexToRgba(theme.palette.white.normal, 20),
    backgroundButtonLinkPrimary: "transparent",
    backgroundButtonLinkPrimaryHover: theme.palette.cloud.lightHover,
    backgroundButtonLinkPrimaryActive: theme.palette.cloud.lightActive,
    backgroundButtonLinkSecondary: "transparent",
    backgroundButtonLinkSecondaryHover: theme.palette.cloud.lightHover,
    backgroundButtonLinkSecondaryActive: theme.palette.cloud.lightActive,
    backgroundInput: theme.palette.white.normal,
    backgroundInputDisabled: theme.palette.cloud.normal,
    backgroundAlertSuccess: theme.palette.green.light,
    backgroundAlertInfo: theme.palette.blue.light,
    backgroundAlertWarning: theme.palette.orange.light,
    backgroundAlertCritical: theme.palette.red.light,
    backgroundBadgeNeutral: theme.palette.cloud.light,
    backgroundBadgeInfo: theme.palette.blue.light,
    backgroundBadgeSuccess: theme.palette.green.light,
    backgroundBadgeWarning: theme.palette.orange.light,
    backgroundBadgeCritical: theme.palette.red.light,
    backgroundBadgeDark: theme.palette.ink.normal,
    backgroundBadgeWhite: theme.palette.white.normal,
    backgroundServiceLogo: "transparent",
    backgroundIllustration: "transparent",
    backgroundSeparator: theme.palette.cloud.normal,
    backgroundTableShadowLeft:
      "linear-gradient(to left, transparent, " +
      convertHexToRgba(theme.palette.ink.lighter, 23) +
      ")",
    backgroundTableShadowRight:
      "linear-gradient(to right, transparent, " +
      convertHexToRgba(theme.palette.ink.lighter, 23) +
      ")",
    backgroundTable: theme.palette.white.normal,
    backgroundTableEven: theme.palette.cloud.light,
    backgroundTableHover: theme.palette.cloud.normal,
    backgroundTag: theme.palette.cloud.light,
    backgroundTagSelected: theme.palette.ink.normal,
    backgroundTagHover: theme.palette.cloud.lightHover,
    backgroundTagSelectedHover: theme.palette.ink.normalHover,
    backgroundTagActive: theme.palette.cloud.lightActive,
    backgroundTagSelectedActive: theme.palette.ink.normalActive,
    // category:Font size
    // description:Use these sizing tokens for font sizes.
    fontSizeHeadingDisplay: "40px",
    fontSizeHeadingTitle1: "28px",
    fontSizeHeadingTitle2: "22px",
    fontSizeHeadingTitle3: "16px",
    fontSizeHeadingTitle4: theme.base.fontSizeMd,
    fontSizeHeadingTitle5: theme.base.fontSizeSm,
    fontSizeTextNormal: theme.base.fontSizeMd,
    fontSizeTextLarge: theme.base.fontSizeLg,
    fontSizeTextSmall: theme.base.fontSizeSm,
    fontSizeMessage: theme.base.fontSizeMd,
    fontSizeButtonLarge: theme.base.fontSizeLg,
    fontSizeButtonNormal: theme.base.fontSizeMd,
    fontSizeButtonSmall: theme.base.fontSizeSm,
    fontSizeInputNormal: theme.base.fontSizeMd,
    fontSizeInputSmall: theme.base.fontSizeMd,
    fontSizeFormLabel: theme.base.fontSizeMd,
    fontSizeFormFeedback: theme.base.fontSizeSm,
    // category:Border radius
    // description:Use radius tokens to change the border-radius size (rounded corners).
    /** use only for square */
    borderRadiusCircle: "50%",
    /** use for all basic elements like buttons, inputs, content containers */
    borderRadiusNormal: theme.base.borderRadius,
    /** use for big elements like modal and large buttons */
    borderRadiusLarge: "6px",
    /** use for smaller elements like tags */
    borderRadiusSmall: "2px",
    borderRadiusBadge: "12px",
    // category:Z Index
    // description:Use layers to show depth of page.
    zIndexDefault: "1",
    zIndexSticky: "100",
    zIndexModalOverlay: "800",
    zIndexModal: "825",
    zIndexOnTheTop: "900",
    // category:Size (width, height)
    // description:
    widthIconSmall: theme.base.sizeSm,
    heightIconSmall: theme.base.sizeSm,
    widthIconMedium: theme.base.sizeMd,
    heightIconMedium: theme.base.sizeMd,
    widthIconLarge: theme.base.sizeLg,
    heightIconLarge: theme.base.sizeLg,
    heightInputNormal: theme.base.sizeXl,
    heightInputLarge: theme.base.size2xl,
    heightInputSmall: theme.base.sizeLg,
    heightButtonNormal: theme.base.sizeXl,
    heightButtonLarge: theme.base.size2xl,
    heightButtonSmall: theme.base.sizeLg,
    heightRadioButton: "20px",
    widthRadioButton: "20px",
    heightCheckbox: "20px",
    widthCheckbox: "20px",
    heightCountryFlag: "auto",
    widthCountryFlag: theme.base.sizeMd,
    heightBadge: theme.base.sizeMd,
    widthBadgeCircled: theme.base.sizeMd,
    heightIllustrationSmall: "90px",
    heightIllustrationMedium: "200px",
    heightServiceLogoSmall: "12px",
    heightServiceLogoMedium: theme.base.sizeMd,
    heightServiceLogoLarge: "48px",
    heightSeparator: "1px",
    heightInputGroupSeparatorSmall: theme.base.sizeSm,
    heightInputGroupSeparatorNormal: theme.base.sizeMd,
    widthModalSmall: "540px",
    widthModalNormal: "740px",
    widthModalLarge: "1280px",
    widthStopoverArrow: "36px",
    heightStopoverArrow: "7px",
    // category:Breakpoints
    widthBreakpointMediumMobile: 414,
    widthBreakpointLargeMobile: 576,
    widthBreakpointTablet: 768,
    widthBreakpointDesktop: 992,
    widthBreakpointLargeDesktop: 1200,
    // category:Border color
    // description:
    borderColorInput: theme.palette.ink.lighter,
    borderColorInputHover: theme.palette.ink.lighterHover,
    borderColorInputActive: theme.palette.ink.lighterActive,
    borderColorInputFocus: theme.palette.blue.normal,
    borderColorInputError: theme.palette.red.normal,
    borderColorInputErrorHover: theme.palette.red.normalHover,
    borderColorInputErrorFocus: theme.palette.red.normal,
    borderColorTableCell: theme.palette.ink.lighter,
    borderColorCard: theme.palette.cloud.normal,
    borderColorModal: theme.palette.cloud.normal,
    borderColorButtonPrimaryBordered: theme.palette.product.normal,
    borderColorButtonPrimaryBorderedHover: theme.palette.product.normalHover,
    borderColorButtonPrimaryBorderedActive: theme.palette.product.normalActive,
    borderColorButtonSecondaryBordered: theme.palette.ink.normal,
    borderColorButtonSecondaryBorderedHover: theme.palette.ink.normalHover,
    borderColorButtonSecondaryBorderedActive: theme.palette.ink.normalActive,
    borderColorButtonFacebookBordered: theme.palette.social.facebook,
    borderColorButtonFacebookBorderedHover: theme.palette.social.facebookHover,
    borderColorButtonFacebookBorderedActive: theme.palette.social.facebookActive,
    borderColorButtonGoogleBordered: theme.palette.ink.normal,
    borderColorButtonGoogleBorderedHover: theme.palette.ink.normalHover,
    borderColorButtonGoogleBorderedActive: theme.palette.ink.normalActive,
    borderColorButtonInfoBordered: theme.palette.blue.normal,
    borderColorButtonInfoBorderedHover: theme.palette.blue.normalHover,
    borderColorButtonInfoBorderedActive: theme.palette.blue.normalActive,
    borderColorButtonSuccessBordered: theme.palette.green.normal,
    borderColorButtonSuccessBorderedHover: theme.palette.green.normalHover,
    borderColorButtonSuccessBorderedActive: theme.palette.green.normalActive,
    borderColorButtonWarningBordered: theme.palette.orange.normal,
    borderColorButtonWarningBorderedHover: theme.palette.orange.normalHover,
    borderColorButtonWarningBorderedActive: theme.palette.orange.normalActive,
    borderColorButtonCriticalBordered: theme.palette.red.normal,
    borderColorButtonCriticalBorderedHover: theme.palette.red.normalHover,
    borderColorButtonCriticalBorderedActive: theme.palette.red.normalActive,
    borderColorButtonWhiteBordered: theme.palette.white.normal,
    borderColorButtonWhiteBorderedHover: theme.palette.white.normal,
    borderColorButtonWhiteBorderedActive: theme.palette.white.normal,
    borderColorCheckboxRadio: theme.palette.ink.lighter,
    borderColorCheckboxRadioError: theme.palette.red.normal,
    borderColorCheckboxRadioHover: theme.palette.ink.light,
    borderColorCheckboxRadioActive: theme.palette.ink.normal,
    borderColorCheckboxRadioFocus: theme.palette.blue.normal,
    borderColorTable: theme.palette.cloud.normal,
    borderColorTableHead: theme.palette.ink.lighter,
    borderColorTag: theme.palette.cloud.normal,
    borderColorTagFocus: theme.palette.blue.normal,
    // category:Border style
    // description:
    borderStyleCard: "solid",
    borderWidthCard: "1px",
    borderStyleInput: "solid",
    borderWidthInput: "1px",
    borderWidthInputFocus: "2px",
    // category:Opacity
    // description:
    opacityOverlay: theme.base.opacityLarge,
    opacityButtonDisabled: theme.base.opacitySmall,
    opacityRadioButtonDisabled: theme.base.opacityMedium,
    opacityCheckboxDisabled: theme.base.opacityMedium,
    // category:Font weight
    // description:Use this for setting basic font weights.
    fontWeightNormal: theme.base.fontWeightNormal,
    fontWeightMedium: theme.base.fontWeightMedium,
    fontWeightBold: theme.base.fontWeightBold,
    fontWeightLinks: theme.base.fontWeightMedium,
    fontWeightHeadingDisplay: theme.base.fontWeightBold,
    fontWeightHeadingTitle1: theme.base.fontWeightBold,
    fontWeightHeadingTitle2: theme.base.fontWeightMedium,
    fontWeightHeadingTitle3: theme.base.fontWeightMedium,
    fontWeightHeadingTitle4: theme.base.fontWeightMedium,
    fontWeightHeadingTitle5: theme.base.fontWeightBold,
    fontWeightTableHead: theme.base.fontWeightBold,
    // category:Spacing
    // description:Use this for setting spacings for elements.
    paddingAlert: theme.base.spaceMd,
    paddingAlertWithIcon: theme.base.spaceSm,
    paddingBadge: "0 " + theme.base.spaceXs,
    paddingButtonWithoutText: "0",
    paddingButtonSmall: "0 " + theme.base.spaceSm,
    paddingButtonNormal: "0 " + theme.base.spaceMd,
    paddingButtonLarge: "0 28px",
    paddingButtonSmallWithIcons: "0 " + theme.base.spaceXs,
    paddingButtonNormalWithIcons: "0 " + theme.base.spaceSm,
    paddingButtonLargeWithIcons: "0 " + theme.base.spaceMd,
    paddingButtonSmallWithLeftIcon: "0 " + theme.base.spaceSm + " 0 " + theme.base.spaceXs,
    paddingButtonNormalWithLeftIcon: "0 " + theme.base.spaceMd + " 0 " + theme.base.spaceSm,
    paddingButtonLargeWithLeftIcon: "0 28px 0 " + theme.base.spaceMd,
    paddingButtonSmallWithRightIcon: "0 " + theme.base.spaceXs + " 0 " + theme.base.spaceSm,
    paddingButtonNormalWithRightIcon: "0 " + theme.base.spaceSm + " 0 " + theme.base.spaceMd,
    paddingButtonLargeWithRightIcon: "0 " + theme.base.spaceMd + " 0 28px",
    paddingTextareaSmall: theme.base.spaceXs + " " + theme.base.spaceSm,
    paddingTextareaNormal: theme.base.spaceSm,
    paddingInputSmall: "0 " + theme.base.spaceSm,
    paddingInputNormal: "0 " + theme.base.spaceSm,
    marginButtonIconSmall: theme.base.spaceXs,
    marginButtonIconNormal: theme.base.spaceXs,
    marginButtonIconLarge: theme.base.spaceSm,
    marginButtonGroupConnected: "0 1px 0 0",
    marginButtonGroup: "0 " + theme.base.spaceXs + " 0 0",
    marginTopFormFeedback: "2px",
    marginBottomSelectSuffix: "2px",
    paddingInputFile: "0 0 0 6px",
    paddingLeftSelectPrefix: "48px",
    paddingLoading: theme.base.spaceSm,
    paddingTable: theme.base.spaceSm + " " + theme.base.spaceMd,
    paddingTableCompact: theme.base.spaceXs + " " + theme.base.spaceSm,
    paddingTag: "6px " + theme.base.spaceXs,
    paddingTagWithIcon: "6px " + theme.base.spaceXs + " 6px 6px",
    paddingTagRemovable: "6px 6px 6px " + theme.base.spaceXs,
    paddingTagRemovableWithIcon: "6px",
    marginBadgeIcon: "0 " + theme.base.space2xs + " 0 0",
    spaceXXXSmall: "2px",
    spaceXXSmall: theme.base.space2xs,
    spaceXSmall: theme.base.spaceXs,
    spaceSmall: theme.base.spaceSm,
    spaceMedium: theme.base.spaceMd,
    spaceLarge: theme.base.spaceLg,
    spaceXLarge: theme.base.spaceXl,
    spaceXXLarge: theme.base.space2xl,
    spaceXXXLarge: theme.base.space3xl,
    // category:Duration
    // description:Use this for setting the speed of animation or transition.
    durationFast: theme.base.durationFast,
    durationNormal: theme.base.durationNormal,
    durationSlow: theme.base.durationSlow,
    // category:Modifier
    // description:Use this for values for transform property, etc.
    modifierScaleButtonActive: 0.95,
    modifierScaleCheckboxRadioActive: 0.95,
    // category:Line height
    // description:
    lineHeightText: theme.base.lineHeight,
    lineHeightHeading: "1.2",
    // category:Text decoration
    // description:
    textDecorationTextLinkPrimary: "underline",
    textDecorationTextLinkPrimaryHover: "underline",
    textDecorationTextLinkSecondary: "underline",
    textDecorationTextLinkSecondaryHover: "underline",
    // category:Box shadow
    // description:
    boxShadowButtonFocus: "0 0 4px 1px " + theme.base.boxShadowColorStatic,
    boxShadowActionable: theme.base.boxShadowActionable + " " + theme.base.boxShadowColorActionable,
    boxShadowElevatedLevel1: theme.base.boxShadowElevated + " " + theme.base.boxShadowColorElevated,
    boxShadowModal: theme.base.boxShadowModal + " " + theme.base.boxShadowColorModal,
    // category:Color palette
    // description: Use these tokens as a fallback when you need specific color. It's always preferred to use less abstract design tokens. Don't use Hover and Active shades as base theme.palette.
    paletteProductLight: theme.palette.product.light,
    paletteProductLightHover: theme.palette.product.lightHover,
    paletteProductLightActive: theme.palette.product.lightActive,
    paletteProductNormal: theme.palette.product.normal,
    paletteProductNormalHover: theme.palette.product.normalHover,
    paletteProductNormalActive: theme.palette.product.normalActive,
    paletteProductDark: theme.palette.product.dark,
    paletteWhite: theme.palette.white.normal,
    paletteWhiteHover: theme.palette.cloud.light,
    paletteWhiteActive: theme.palette.cloud.lightHover,
    paletteCloudLight: theme.palette.cloud.light,
    paletteCloudLightHover: theme.palette.cloud.lightHover,
    paletteCloudLightActive: theme.palette.cloud.lightActive,
    paletteCloudNormal: theme.palette.cloud.normal,
    paletteCloudNormalHover: theme.palette.cloud.normalHover,
    paletteCloudNormalActive: theme.palette.cloud.normalActive,
    paletteInkLighter: theme.palette.ink.lighter,
    paletteInkLighterHover: theme.palette.ink.lighterHover,
    paletteInkLighterActive: theme.palette.ink.lighterActive,
    paletteInkLight: theme.palette.ink.light,
    paletteInkLightHover: theme.palette.ink.lightHover,
    paletteInkLightActive: theme.palette.ink.lightActive,
    paletteInkNormal: theme.palette.ink.normal,
    paletteInkNormalHover: theme.palette.ink.normalHover,
    paletteInkNormalActive: theme.palette.ink.normalActive,
    paletteInkDark: theme.palette.ink.dark,
    paletteOrangeLight: theme.palette.orange.light,
    paletteOrangeLightHover: theme.palette.orange.lightHover,
    paletteOrangeLightActive: theme.palette.orange.lightActive,
    paletteOrangeNormal: theme.palette.orange.normal,
    paletteOrangeNormalHover: theme.palette.orange.normalHover,
    paletteOrangeNormalActive: theme.palette.orange.normalActive,
    paletteOrangeDark: theme.palette.orange.dark,
    paletteRedLight: theme.palette.red.light,
    paletteRedLightHover: theme.palette.red.lightHover,
    paletteRedLightActive: theme.palette.red.lightActive,
    paletteRedNormal: theme.palette.red.normal,
    paletteRedNormalHover: theme.palette.red.normalHover,
    paletteRedNormalActive: theme.palette.red.normalActive,
    paletteRedDark: theme.palette.red.dark,
    paletteGreenLight: theme.palette.green.light,
    paletteGreenLightHover: theme.palette.green.lightHover,
    paletteGreenLightActive: theme.palette.green.lightActive,
    paletteGreenNormal: theme.palette.green.normal,
    paletteGreenNormalHover: theme.palette.green.normalHover,
    paletteGreenNormalActive: theme.palette.green.normalActive,
    paletteGreenDark: theme.palette.green.dark,
    paletteBlueLight: theme.palette.blue.light,
    paletteBlueLightHover: theme.palette.blue.lightHover,
    paletteBlueLightActive: theme.palette.blue.lightActive,
    paletteBlueNormal: theme.palette.blue.normal,
    paletteBlueNormalHover: theme.palette.blue.normalHover,
    paletteBlueNormalActive: theme.palette.blue.normalActive,
    paletteBlueDark: theme.palette.blue.dark,
    paletteSocialFacebook: theme.palette.social.facebook,
    paletteSocialFacebookHover: theme.palette.social.facebookHover,
    paletteSocialFacebookActive: theme.palette.social.facebookActive,
  };
}

function fromPlainObject(themePaletteColors) {
  var theme = {
    palette: {
      product: {
        light: themePaletteColors.productLight,
        lightHover: themePaletteColors.productLightHover,
        lightActive: themePaletteColors.productLightActive,
        normal: themePaletteColors.productNormal,
        normalHover: themePaletteColors.productNormalHover,
        normalActive: themePaletteColors.productNormalActive,
        dark: themePaletteColors.productDark,
      },
    },
  };

  return getTokens(theme);
}

var defaultTokens = getTokens();

module.exports = {
  defaultTokens: defaultTokens,
  getTokens: getTokens,
  fromPlainObject: fromPlainObject,
  convertHexToRgba: convertHexToRgba,
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry1.js":
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_isPlaceholder.js");

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
module.exports = _curry1;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry2.js":
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_curry1.js");

var _isPlaceholder = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_isPlaceholder.js");

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}
module.exports = _curry2;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry3.js":
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_curry1.js");

var _curry2 = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_curry2.js");

var _isPlaceholder = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_isPlaceholder.js");

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}
module.exports = _curry3;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_has.js":
/***/ (function(module, exports) {

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = _has;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isObject.js":
/***/ (function(module, exports) {

function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}
module.exports = _isObject;

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isPlaceholder.js":
/***/ (function(module, exports) {

function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}
module.exports = _isPlaceholder;

/***/ }),

/***/ "./node_modules/ramda/src/mergeDeepRight.js":
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_curry2.js");

var mergeDeepWithKey = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/mergeDeepWithKey.js");

/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */


var mergeDeepRight = /*#__PURE__*/_curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
module.exports = mergeDeepRight;

/***/ }),

/***/ "./node_modules/ramda/src/mergeDeepWithKey.js":
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_curry3.js");

var _isObject = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_isObject.js");

var mergeWithKey = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/mergeWithKey.js");

/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */


var mergeDeepWithKey = /*#__PURE__*/_curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function (k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
module.exports = mergeDeepWithKey;

/***/ }),

/***/ "./node_modules/ramda/src/mergeWithKey.js":
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_curry3.js");

var _has = /*#__PURE__*/__webpack_require__("./node_modules/ramda/src/internal/_has.js");

/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */


var mergeWithKey = /*#__PURE__*/_curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !_has(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
module.exports = mergeWithKey;

/***/ }),

/***/ "./node_modules/remove-markdown/index.js":
/***/ (function(module, exports) {

module.exports = function(md, options) {
  options = options || {};
  options.listUnicodeChar = options.hasOwnProperty('listUnicodeChar') ? options.listUnicodeChar : false;
  options.stripListLeaders = options.hasOwnProperty('stripListLeaders') ? options.stripListLeaders : true;
  options.gfm = options.hasOwnProperty('gfm') ? options.gfm : true;

  var output = md || '';

  // Remove horizontal rules (stripListHeaders conflict with this rule, which is why it has been moved to the top)
  output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, '');

  try {
    if (options.stripListLeaders) {
      if (options.listUnicodeChar)
        output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, options.listUnicodeChar + ' $1');
      else
        output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, '$1');
    }
    if (options.gfm) {
      output = output
        // Header
        .replace(/\n={2,}/g, '\n')
        // Strikethrough
        .replace(/~~/g, '')
        // Fenced codeblocks
        .replace(/`{3}.*\n/g, '');
    }
    output = output
      // Remove HTML tags
      .replace(/<[^>]*>/g, '')
      // Remove setext-style headers
      .replace(/^[=\-]{2,}\s*$/g, '')
      // Remove footnotes?
      .replace(/\[\^.+?\](\: .*?$)?/g, '')
      .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
      // Remove images
      .replace(/\!\[.*?\][\[\(].*?[\]\)]/g, '')
      // Remove inline links
      .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
      // Remove blockquotes
      .replace(/^\s{0,3}>\s?/g, '')
      // Remove reference-style links?
      .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
      // Remove atx-style headers
      .replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, '$1$2$3')
      // Remove emphasis (repeat the line to remove double emphasis)
      .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
      .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
      // Remove code blocks
      .replace(/(`{3,})(.*?)\1/gm, '$2')
      // Remove inline code
      .replace(/`(.+?)`/g, '$1')
      // Replace two or more newlines with exactly two? Not entirely sure this belongs here...
      .replace(/\n{2,}/g, '\n\n');
  } catch(e) {
    console.error(e);
    return md;
  }
  return output;
};


/***/ }),

/***/ "./node_modules/strapi-helper-plugin/lib/src/components/InputText/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* eslint-disable jsx-a11y/no-autofocus */


var _react = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js");

var _reactIntl = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js");

var _classnames = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__("./node_modules/strapi-helper-plugin/lib/src/components/InputText/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputText(props) {
  var placeholder = (0, _lodash.isEmpty)(props.placeholder) ? 'app.utils.placeholder.defaultMessage' : props.placeholder;

  return _jsx(_reactIntl.FormattedMessage, {
    id: placeholder,
    defaultMessage: placeholder
  }, void 0, function (message) {
    return _react2.default.createElement('input', {
      autoFocus: props.autoFocus,
      className: (0, _classnames2.default)(_styles2.default.textInput, 'form-control', !props.deactivateErrorHighlight && props.error && 'is-invalid', !(0, _lodash.isEmpty)(props.className) && props.className),
      disabled: props.disabled,
      id: props.name,
      name: props.name,
      onBlur: props.onBlur,
      onChange: props.onChange,
      onFocus: props.onFocus,
      placeholder: message,
      ref: props.inputRef,
      style: props.style,
      tabIndex: props.tabIndex,
      type: 'text',
      value: props.value
    });
  });
}

InputText.defaultProps = {
  autoFocus: false,
  className: '',
  deactivateErrorHighlight: false,
  disabled: false,
  error: false,
  inputRef: function inputRef() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  placeholder: 'app.utils.placeholder.defaultMessage',
  style: {},
  tabIndex: '0'
};

exports.default = InputText;

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/lib/src/components/InputText/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./node_modules/strapi-helper-plugin/lib/src/components/InputText/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--0-oneOf-2-2!../../../../node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../../../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/lib/src/utils/inputsValidations.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js");

/**
 * [validateInput description]
 * @param  {String || Number} value  Input's value
 * @param  {Object} inputValidations
 * @param  {String} [type='text']    Optionnal: the input's type only for email
 * @return {Array}                  Array of errors to be displayed
 */

/* eslint-disable no-useless-escape */
var validateInput = function validateInput(value) {
  var inputValidations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';

  var errors = [];

  var emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  // handle i18n
  var requiredError = { id: 'components.Input.error.validation.required' };

  (0, _lodash.mapKeys)(inputValidations, function (validationValue, validationKey) {
    switch (validationKey) {
      case 'max':
        if (parseInt(value, 10) > validationValue) {
          errors.push({ id: 'components.Input.error.validation.max' });
        }
        break;
      case 'maxLength':
        if (value && value.length > validationValue) {
          errors.push({ id: 'components.Input.error.validation.maxLength' });
        }
        break;
      case 'min':
        if (parseInt(value, 10) < validationValue) {
          errors.push({ id: 'components.Input.error.validation.min' });
        }
        break;
      case 'minLength':
        if (!value || value.length < validationValue) {
          errors.push({ id: 'components.Input.error.validation.minLength' });
        }
        break;
      case 'required':
        if (value == null || value.length === 0) {
          errors.push({ id: 'components.Input.error.validation.required' });
        }
        break;
      case 'regex':
        if (!new RegExp(validationValue).test(value)) {
          errors.push({ id: 'components.Input.error.validation.regex' });
        }
        break;
      case 'type':
        if (validationValue === 'json') {
          try {
            value = JSON.parse(value);
          } catch (err) {
            errors.push({ id: 'components.Input.error.validation.json' });
          }
        }
        break;
      default:
        errors = [];
    }
  });

  if (type === 'email' && !emailRegex.test(value)) {
    errors.push({ id: 'components.Input.error.validation.email' });
  }

  if ((0, _lodash.includes)(errors, requiredError)) {
    errors = (0, _lodash.reject)(errors, function (error) {
      return error !== requiredError;
    });
  }

  return errors;
};

exports.default = validateInput;

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/HomePageBlock/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminhomePageBlock__admin-src-components-HomePageBlock-styles__2fiJf{width:100%;margin-bottom:34px;background:#fff;padding:20px 30px 30px;box-shadow:0 2px 4px 0 #e3e9f3;border-radius:3px}", ""]);

// exports
exports.locals = {
	"homePageBlock": "adminhomePageBlock__admin-src-components-HomePageBlock-styles__2fiJf"
};

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/Sub/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminsubBordered__admin-src-components-Sub-styles__1LaDu{margin-bottom:18px;border-bottom:1px solid #f7f8f8}.adminsubWrapper__admin-src-components-Sub-styles__3-hV9{position:relative;line-height:18px;text-decoration:none}.adminsubWrapper__admin-src-components-Sub-styles__3-hV9>span{text-decoration:none;font-family:Lato-Bold;font-size:20px;color:#333740;letter-spacing:0;transition:color .2s ease}.adminsubWrapper__admin-src-components-Sub-styles__3-hV9 p{text-decoration:none;display:block;max-width:calc(100% - 150px);margin-top:18px;color:#333740;font-size:14px;transition:color .2s ease}.adminunderlinedTitle__admin-src-components-Sub-styles__1HpnA{border-bottom:3px solid #f0b41e}.adminlink__admin-src-components-Sub-styles__1ZS3-:active,.adminlink__admin-src-components-Sub-styles__1ZS3-:focus,.adminlink__admin-src-components-Sub-styles__1ZS3-:hover{text-decoration:none}.adminlink__admin-src-components-Sub-styles__1ZS3-:hover>span,.adminlink__admin-src-components-Sub-styles__1ZS3-:hover p{color:#606879}", ""]);

// exports
exports.locals = {
	"subBordered": "adminsubBordered__admin-src-components-Sub-styles__1LaDu",
	"subWrapper": "adminsubWrapper__admin-src-components-Sub-styles__3-hV9",
	"underlinedTitle": "adminunderlinedTitle__admin-src-components-Sub-styles__1HpnA",
	"link": "adminlink__admin-src-components-Sub-styles__1ZS3-"
};

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/SupportUsCta/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminsupportUsCta__admin-src-components-SupportUsCta-styles__3Wo75{padding:7px 12px 7px 20px;border:1px solid #fff;border-radius:3px;color:#fff;font-size:13px;font-weight:800;letter-spacing:.5px}.adminsupportUsCta__admin-src-components-SupportUsCta-styles__3Wo75:after{content:\"\\F178\";font-family:FontAwesome;margin-left:10px}.adminsupportUsCta__admin-src-components-SupportUsCta-styles__3Wo75:hover{color:#fff;text-decoration:none}", ""]);

// exports
exports.locals = {
	"supportUsCta": "adminsupportUsCta__admin-src-components-SupportUsCta-styles__3Wo75"
};

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/SupportUsTitle/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminsupportUsTitle__admin-src-components-SupportUsTitle-styles__1BOTo{color:#fff;font-size:18px;font-weight:800;letter-spacing:.5px}.adminsupportUsTitle__admin-src-components-SupportUsTitle-styles__1BOTo:after{content:\"\\2764\\FE0F\";margin-left:7px;font-size:18px}", ""]);

// exports
exports.locals = {
	"supportUsTitle": "adminsupportUsTitle__admin-src-components-SupportUsTitle-styles__1BOTo"
};

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/containers/HomePage/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".adminblockLink__admin-src-containers-HomePage-styles__2LOPH{position:relative;width:calc(50% - 6px);height:auto;margin-top:41px;padding:22px 25px 19px 96px;background:#f7f8f8;border-radius:3px;line-height:18px;text-decoration:none}.adminblockLink__admin-src-containers-HomePage-styles__2LOPH>span{font-family:Lato-Bold;font-size:16px;color:#333740;letter-spacing:0}.adminblockLink__admin-src-containers-HomePage-styles__2LOPH>p{font-family:Lato-Regular;font-size:13px;color:#919bae;letter-spacing:0;line-height:18px;margin:0}.adminblockLink__admin-src-containers-HomePage-styles__2LOPH:hover{text-decoration:none}.adminblockLinkDocumentation__admin-src-containers-HomePage-styles__2WEf3:before{content:\"\\F02D\";position:absolute;left:3rem;top:4rem;color:#42b88e;font-family:FontAwesome;font-size:38px}.adminblockLinkCode__admin-src-containers-HomePage-styles__2eG8W:before{content:\"\\F121\";position:absolute;left:3rem;top:4rem;color:#f0811e;font-family:FontAwesome;font-size:38px}.adminblockShirt__admin-src-containers-HomePage-styles__1--L7{position:relative;min-height:34rem;margin-bottom:20px;background-image:linear-gradient(45deg,#1a67da,#0097f6)!important;line-height:18px}.adminblockShirt__admin-src-containers-HomePage-styles__1--L7>div{position:absolute;padding:38px 0 62px 25px;top:0;bottom:0;left:0;right:0;color:#fff}.adminblockShirt__admin-src-containers-HomePage-styles__1--L7>div>p{max-width:400px;margin-top:18px;margin-bottom:125px;padding-right:35px;font-size:13px;font-weight:400}.adminblockShirt__admin-src-containers-HomePage-styles__1--L7:before{opacity:.7;content:\"\";background-image:url(" + escape(__webpack_require__("./admin/src/assets/images/bg_hp_tee_shirt.png")) + ")!important;background-size:contain;background-repeat:no-repeat;position:absolute;top:0;bottom:0;left:0;right:0}.admincommunityContentP__admin-src-containers-HomePage-styles__3NJVC{display:block;max-width:49rem!important;margin-top:0!important;margin-bottom:51px;color:#919bae!important}.admincontainerFluid__admin-src-containers-HomePage-styles__3Wh1J{padding:47px 13px 0}.admincontainerFluid__admin-src-containers-HomePage-styles__3Wh1J>div{margin:0}.adminhomePageFlex__admin-src-containers-HomePage-styles__pAXwQ{display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:justify;justify-content:space-between}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l{padding-top:19px;padding-left:15px}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l div{padding:0}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l input{float:left;width:calc(100% - 120px);border-top-right-radius:0;border-bottom-right-radius:0}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l input:focus{border-color:#e3e9f3}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l input::-webkit-input-placeholder{font-style:italic}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l button{float:left;min-width:100px;height:3.4rem;margin-top:.9rem;padding-left:20px;padding-right:20px;text-align:center;background:#333740;color:#fff;border-top-right-radius:3px;border-bottom-right-radius:3px;font-size:12px;font-weight:800;letter-spacing:.5px}.adminhomePageTutorialButton__admin-src-containers-HomePage-styles__25oyq{position:relative;height:34px;margin-top:17px;margin-bottom:1px;padding-left:40px;padding-right:20px;font-size:13px;font-weight:800;line-height:33px;letter-spacing:.46px;text-align:left}.adminhomePageTutorialButton__admin-src-containers-HomePage-styles__25oyq:before{content:\"\\F105\";position:absolute;top:0;bottom:0;left:20px;font-size:22px;margin-right:10px;font-family:FontAwesome}.adminhomePageBlogButton__admin-src-containers-HomePage-styles__1R3-M{position:relative;height:34px;margin-top:17px;margin-bottom:1px;padding-left:40px;padding-right:20px;background:#333740;color:#fff;font-size:13px;font-weight:800;line-height:33px;letter-spacing:.46px;text-align:left}.adminhomePageBlogButton__admin-src-containers-HomePage-styles__1R3-M:before{content:\"\\F105\";position:absolute;top:0;bottom:0;left:20px;font-size:22px;margin-right:10px;font-family:FontAwesome}.adminiconWave__admin-src-containers-HomePage-styles__2aBqo{position:absolute;top:24px;right:0;font-size:50px}.adminnewsLetterWrapper__admin-src-containers-HomePage-styles__3ga-I{height:auto;min-width:50%;padding:20px;background:#f7f8f8;border-radius:3px;line-height:18px}.adminnewsLetterWrapper__admin-src-containers-HomePage-styles__3ga-I>div{padding-right:50px}.adminnewsLetterWrapper__admin-src-containers-HomePage-styles__3ga-I>div>span{font-weight:500;font-size:14px}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S{height:54px;font-size:14px;font-weight:500;position:relative}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a{color:#333740!important;text-decoration:none;line-height:18px}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a div{display:inline-block;height:25px;width:25px;text-align:center;vertical-align:top}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a img{max-height:25px;max-width:25px}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a span{margin-left:11px}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a:hover{text-decoration:none}.adminwelcomeContentA__admin-src-containers-HomePage-styles__YrHMU{color:#005fea;text-decoration:none}.adminwelcomeContentA__admin-src-containers-HomePage-styles__YrHMU:hover{text-decoration:none}.adminwelcomeContentP__admin-src-containers-HomePage-styles__3--BW{display:block;max-width:55rem!important;margin-bottom:31px}.adminspinner__admin-src-containers-HomePage-styles__1dge0{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;width:100%;margin:auto}.adminspinner__admin-src-containers-HomePage-styles__1dge0>div{border:2px solid #f3f3f3;border-top:2px solid #3498db;border-radius:50%;width:10px;height:10px;animation:adminspin__admin-src-containers-HomePage-styles__1lWhN 2s linear infinite}@keyframes adminspin__admin-src-containers-HomePage-styles__1lWhN{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);

// exports
exports.locals = {
	"blockLink": "adminblockLink__admin-src-containers-HomePage-styles__2LOPH",
	"blockLinkDocumentation": "adminblockLinkDocumentation__admin-src-containers-HomePage-styles__2WEf3",
	"blockLinkCode": "adminblockLinkCode__admin-src-containers-HomePage-styles__2eG8W",
	"blockShirt": "adminblockShirt__admin-src-containers-HomePage-styles__1--L7",
	"communityContentP": "admincommunityContentP__admin-src-containers-HomePage-styles__3NJVC",
	"containerFluid": "admincontainerFluid__admin-src-containers-HomePage-styles__3Wh1J",
	"homePageFlex": "adminhomePageFlex__admin-src-containers-HomePage-styles__pAXwQ",
	"homePageForm": "adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l",
	"homePageTutorialButton": "adminhomePageTutorialButton__admin-src-containers-HomePage-styles__25oyq",
	"homePageBlogButton": "adminhomePageBlogButton__admin-src-containers-HomePage-styles__1R3-M",
	"iconWave": "adminiconWave__admin-src-containers-HomePage-styles__2aBqo",
	"newsLetterWrapper": "adminnewsLetterWrapper__admin-src-containers-HomePage-styles__3ga-I",
	"socialLink": "adminsocialLink__admin-src-containers-HomePage-styles__wnH6S",
	"welcomeContentA": "adminwelcomeContentA__admin-src-containers-HomePage-styles__YrHMU",
	"welcomeContentP": "adminwelcomeContentP__admin-src-containers-HomePage-styles__3--BW",
	"spinner": "adminspinner__admin-src-containers-HomePage-styles__1dge0",
	"spin": "adminspin__admin-src-containers-HomePage-styles__1lWhN"
};

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./node_modules/strapi-helper-plugin/lib/src/components/InputText/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".admintextInput__node_modules-strapi-helper-plugin-lib-src-components-InputText-styles__1OgKc{height:3.4rem;margin-top:.9rem;padding-left:1rem;background-size:0!important;border:1px solid #e3e9f3;border-radius:.25rem;line-height:3.4rem;font-size:1.3rem;font-family:Lato!important;box-shadow:0 1px 1px rgba(104,118,142,.05)}", ""]);

// exports
exports.locals = {
	"textInput": "admintextInput__node_modules-strapi-helper-plugin-lib-src-components-InputText-styles__1OgKc"
};

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/fbjs/lib/hyphenate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/fbjs/lib/hyphenateStyleName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/fbjs/lib/hyphenate.js");

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/styled-components/dist/styled-components.browser.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consolidateStreamedStyles", function() { return consolidateStreamedStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/fbjs/lib/hyphenateStyleName.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/stylis/stylis.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stylis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is__ = __webpack_require__("./node_modules/strapi-helper-plugin/node_modules/react-is/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_is__);








var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  false ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n* Are you trying to reuse it across renders?\n* Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n* Does this error occur on the client and is your target falsy?\n* Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n* Are you running in a client-like environment on the server?\n* Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n* Are you using a custom target that isn't mounted?\n* Does your document not have a valid head element?\n* Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "A plain React class (%s) has been interpolated into styles, probably as a component selector (https://www.styled-components.com/docs/advanced#referring-to-other-components). Only styled-component classes can be targeted in this fashion."
} : {};

/**
 * super basic version of sprintf
 */
function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c = void 0;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len2 = arguments.length, interpolations = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      interpolations[_key2 - 1] = arguments[_key2];
    }

    if (true) {
      var _this = possibleConstructorReturn(this, _Error.call(this, 'An error occurred. See https://github.com/styled-components/styled-components/blob/master/src/utils/errors.md#' + code + ' for more information. ' + (interpolations ? 'Additional arguments: ' + interpolations.join(', ') : '')));
    } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations))));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 

var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
    return __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName___default()(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }

    /* Flatten ruleSet */
    if (Array.isArray(chunk)) {
      ruleSet.push.apply(ruleSet, flatten(chunk, executionContext));
      return ruleSet;
    }

    /* Handle other components */
    if (chunk.hasOwnProperty('styledComponentId')) {
      // $FlowFixMe not sure how to make this pass
      ruleSet.push('.' + chunk.styledComponentId);
      return ruleSet;
    }

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      if (executionContext) {
        var nextChunk = chunk(executionContext);
        /* Throw if a React Element was given styles */
        if (__WEBPACK_IMPORTED_MODULE_1_react___default.a.isValidElement(nextChunk)) {
          var elementName = chunk.displayName || chunk.name;
          throw new StyledComponentsError(11, elementName);
        }
        ruleSet.push.apply(ruleSet, flatten([nextChunk], executionContext));
      } else ruleSet.push(chunk);

      return ruleSet;
    }

    /* Handle objects */
    ruleSet.push(
    // $FlowFixMe have to add %checks somehow to isPlainObject
    isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());

    return ruleSet;
  }, []);
};

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new __WEBPACK_IMPORTED_MODULE_2_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new __WEBPACK_IMPORTED_MODULE_2_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];
// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = __WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet___default()(function (rule) {
  parsingRules.push(rule);
});

stylis.use([parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

// 

function isStyledComponent(target) /* : %checks */{
  return (
    // $FlowFixMe TODO: flow for styledComponentId
    typeof target === 'function' && typeof target.styledComponentId === 'string'
  );
}

// 

/* This function is DEPRECATED and will be removed on the next major version release.
 * It was needed to rehydrate all style blocks prepended to chunks before React
 * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
 * the use of streamed style tags and will perform the rehydration earlier when needed
 * this function will not be needed anymore */
function consolidateStreamedStyles() {
  if (false) {
    // eslint-disable-next-line no-console
    console.warn('styled-components automatically does streaming SSR rehydration now.\n' + 'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' + '- Please remove the consolidateStreamedStyles call from your client.');
  }
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
};

// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 

var css = (function (styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (typeof styles === 'function' || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
});

// 


var SC_ATTR = typeof process !== 'undefined' && Object({"NODE_ENV":"production","REMOTE_URL":"/admin","BACKEND_URL":"/","MODE":"host"}).SC_ATTR || 'data-styled-components';
var SC_STREAM_ATTR = 'data-styled-streamed';
var CONTEXT_KEY = '__styled-components-stylesheet__';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = "production" !== 'production';

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : null;
});

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker);
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }
    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTagInternal = function makeServerTagInternal(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTagInternal(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeServerTag = function makeServerTag() {
  return makeServerTagInternal();
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

/* wraps a given tag so that rehydration is performed once when necessary */
var makeRehydrationTag = function makeRehydrationTag(tag, els, extracted, immediateRehydration) {
  /* rehydration function that adds all rules to the new tag */
  var rehydrate = once(function () {
    /* add all extracted components to the new tag */
    for (var i = 0, len = extracted.length; i < len; i += 1) {
      var _extracted$i = extracted[i],
          componentId = _extracted$i.componentId,
          cssFromDOM = _extracted$i.cssFromDOM;

      var cssRules = splitByRules(cssFromDOM);
      tag.insertRules(componentId, cssRules);
    }

    /* remove old HTMLStyleElements, since they have been rehydrated */
    for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
      var el = els[_i];
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  });

  if (immediateRehydration) rehydrate();

  return _extends({}, tag, {
    /* add rehydration hook to insertion methods */
    insertMarker: function insertMarker(id) {
      rehydrate();
      return tag.insertMarker(id);
    },
    insertRules: function insertRules(id, cssRules, name) {
      rehydrate();
      return tag.insertRules(id, cssRules, name);
    }
  });
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {
  /* a map from ids to tags */
  /* deferred rules for a given id */
  /* this is used for not reinjecting rules via hasNameForId() */
  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
  /* a list of tags belonging to this StyleSheet */
  /* a tag for import rules */
  /* current capacity until a new tag must be created */
  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate() {
    if (!IS_BROWSER || this.forceServer) {
      return this;
    }

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + ']');
    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (nodesSize === 0) {
      return this;
    }

    for (var i = 0; i < nodesSize; i += 1) {
      // $FlowFixMe: We can trust that all elements in this query are style elements
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0; j < elNamesSize; j += 1) {
        var name = elNames[j];
        /* add rehydrated name to sheet to avoid readding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (extractedSize === 0) {
      return this;
    }

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);
    var rehydrationTag = makeRehydrationTag(tag, els, extracted, isStreamed);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(rehydrationTag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = rehydrationTag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for injectGlobal to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);
    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;
    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(__WEBPACK_IMPORTED_MODULE_1_react__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.sheetInstance, _ref;
  };

  StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
    if (this.props.sheet) {
      this.sheetInstance = this.props.sheet;
    } else if (this.props.target) {
      this.sheetInstance = new StyleSheet(this.props.target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);
 false ? StyleSheetManager.propTypes = {
  sheet: PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]),
  target: PropTypes.shape({
    appendChild: PropTypes.func.isRequired
  })
} : void 0;

// 

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.closed = false;
  }

  ServerStyleSheet.prototype.complete = function complete() {
    if (!this.closed) {
      /* Remove closed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.closed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) {
      throw new StyledComponentsError(2);
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.complete();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.complete();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        /* prepend style html to chunk */
        this.push(html + chunk);
        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.complete();
    });
    readableStream.on('error', function (err) {
      _this.complete();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

// 

function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

// 

function generateDisplayName(target) {
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

// 
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * To regenerate this regex:
 *
 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
 * 2. Run `regexgen` with the list of space-separated words below as input
 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
 *    and no false positives from partials
 * */
/*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onInvalid onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut class for autofocus allow allowUserMedia allowPaymentRequest
*/
/* eslint-enable max-len */

var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:Animation|Touch|Load|Drag)Start|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|Lo(?:stPointer|ad)|TimeUpdate|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|GotPointer|MouseDown|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|KeyPress|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|P(?:rogress|laying)|DragEnd|Key(?:Down|Up)|(?:MouseU|Dro)p|(?:Wait|Seek)ing|Scroll|Focus|Paste|Abort|Drag|Play|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|onPointerLeav|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|onPointerMov|(?:attribute|glyph)Nam|playsInlin|(?:writing|input|edge)Mod|(?:formE|e)ncTyp|(?:amplitu|mo)d|(?:xlinkTy|itemSco|keyTy|slo)p|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|l(?:ip(?:Path)?|ass)|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|auto[Ff]ocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|on(?:PointerDow|FocusI)|formActio|zoomAndPa|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveAspectRatio|ointsAt[X-Z]|anose1)|(?:(?:allowPaymentReque|(?:fontSize|length)Adju|manife)s|strokeMiterlimi|(?:(?:specularE|e)xpon|renderingInt|asc)en|(?:specularConsta|repeatCou|fontVaria)n|d(?:iffuseConsta|esce)n|baselineShif|vectorEffec|onPointerOu|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|markerStar|a(?:utoCorrec|bou)|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:gradientT|patternT|t)ransform|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|(?:markerM|onInval)i|preloa|metho|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|strokeDasharray|(?:onPointerCanc|lab)el|(?:allowFullScre|hidd)en|a(?:l(?:lowUserMedia|phabetic|t)|rabicForm|sync)|systemLanguage|(?:(?:o(?:nPointer(?:Ent|Ov)|rd)|allowReord|placehold|frameBord|paintOrd|post)e|repeatDu|d(?:efe|u))r|(?:pointerEve|keyPoi)nts|preserveAlpha|(?:strokeLineca|onPointerU|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|unicodeRange|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|(?:vI|i)deographic|mathematical|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|vAlphabetic|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|(?:xmlnsXl|valueL)ink|mediaGroup|spellCheck|(?:text|m(?:in|ax))Length|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|pathLength|(?:xlinkHr|glyphR)ef|innerHTML|xlinkShow|f(?:o(?:ntSize|rm?)|il(?:ter|l))|(?:tabInde|(?:sand|b)bo|viewBo)x|autoPlay|r(?:e(?:quired|sult|f))?|(?:(?:href|xml|src)La|kerni)ng|o(?:verflow|pen)|i(?:temRef|n2|s)|p(?:attern|oints)|unicode|d(?:efault|ata|ir)?|divisor|t(?:arget[XY]|o)|(?:stri|la)ng|(?:width|size)s|prefix|typeof|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|llow|s)|itemID|t(?:arget|ype)|m(?:edia|a(?:sk|x)|in)|value|width|x(?:mlns)?|size|href|k(?:ey)?|end|low|by|x[12]|y[12]|g[12]|i[dn]|f[xy]|[yz])$/;
/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(x|data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var validAttr = (function (name) {
  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
});

// 

function hasInInheritanceChain(child, parent) {
  var target = child;

  while (target) {
    target = Object.getPrototypeOf(target);

    if (target && target === parent) {
      return true;
    }
  }

  return false;
}

// 
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

var _contextShape, _ThemeProvider$contex;

// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
  getTheme: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  subscribe: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  unsubscribe: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
});

var contextShape = (_contextShape = {}, _contextShape[CHANNEL] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, _contextShape[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _contextShape);

var warnChannelDeprecated = void 0;
if (false) {
  warnChannelDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.warn('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
  });
}

var isFunction = function isFunction(test) {
  return typeof test === 'function';
};

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;

        if (_this2.broadcast !== undefined) {
          _this2.publish(_this2.props.theme);
        }
      });
    }

    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      if (false) {
        warnChannelDeprecated();
      }

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.publish(nextProps.theme);
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;

    if (isFunction(theme)) {
      var mergedTheme = theme(this.outerTheme);

      if (false) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.publish = function publish(theme) {
    this.broadcast.publish(this.getTheme(theme));
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.only(this.props.children);
  };

  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ThemeProvider.childContextTypes = contextShape;
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

var _babelHelpers$extends;

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var modifiedContextShape = _extends({}, contextShape, (_babelHelpers$extends = {}, _babelHelpers$extends[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(ServerStyleSheet)]), _babelHelpers$extends));

var identifiers = {};

/* We depend on components having unique IDs */
var generateId = function generateId(ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);

  return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
};

var warnExtendDeprecated = function warnExtendDeprecated() {};
if (false) {
  warnExtendDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.warn('Warning: The "extend" API will be removed in the upcoming v4.0 release. Use styled(StyledComponent) instead. You can find more information here: https://github.com/styled-components/styled-components/issues/1546');
  });
}

// $FlowFixMe

var BaseStyledComponent = function (_Component) {
  inherits(BaseStyledComponent, _Component);

  function BaseStyledComponent() {
    var _temp, _this, _ret;

    classCallCheck(this, BaseStyledComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
      theme: null,
      generatedClassName: ''
    }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
  }

  BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
    if (this.unsubscribeId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
    }
  };

  BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
    var attrs = this.constructor.attrs;

    var context = _extends({}, props, { theme: theme });
    if (attrs === undefined) {
      return context;
    }

    this.attrs = Object.keys(attrs).reduce(function (acc, key) {
      var attr = attrs[key];

      // eslint-disable-next-line no-param-reassign
      acc[key] = typeof attr === 'function' && !hasInInheritanceChain(attr, __WEBPACK_IMPORTED_MODULE_1_react__["Component"]) ? attr(context) : attr;
      return acc;
    }, {});

    return _extends({}, context, this.attrs);
  };

  BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _constructor = this.constructor,
        attrs = _constructor.attrs,
        componentStyle = _constructor.componentStyle,
        warnTooManyClasses = _constructor.warnTooManyClasses;

    var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.master;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names
    if (componentStyle.isStatic && attrs === undefined) {
      return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
    } else {
      var executionContext = this.buildExecutionContext(theme, props);
      var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

      if (false) {
        warnTooManyClasses(className);
      }

      return className;
    }
  };

  BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var componentStyle = this.constructor.componentStyle;

    var styledContext = this.context[CHANNEL_NEXT];

    // If this is a statically-styled component, we don't need to the theme
    // to generate or build styles.
    if (componentStyle.isStatic) {
      var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
      this.setState({ generatedClassName: generatedClassName });
      // If there is a theme in the context, subscribe to the event emitter. This
      // is necessary due to pure components blocking context updates, this circumvents
      // that by updating when an event is emitted
    } else if (styledContext !== undefined) {
      var subscribe = styledContext.subscribe;

      this.unsubscribeId = subscribe(function (nextTheme) {
        // This will be called once immediately
        var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);

        var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

        _this2.setState({ theme: theme, generatedClassName: generatedClassName });
      });
    } else {
      // eslint-disable-next-line react/prop-types
      var theme = this.props.theme || EMPTY_OBJECT;
      var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
      this.setState({ theme: theme, generatedClassName: _generatedClassName });
    }
  };

  BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    // If this is a statically-styled component, we don't need to listen to
    // props changes to update styles
    var componentStyle = this.constructor.componentStyle;

    if (componentStyle.isStatic) {
      return;
    }

    this.setState(function (prevState) {
      var theme = determineTheme(nextProps, prevState.theme, _this3.constructor.defaultProps);
      var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

      return { theme: theme, generatedClassName: generatedClassName };
    });
  };

  BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribeFromContext();
  };

  BaseStyledComponent.prototype.render = function render() {
    // eslint-disable-next-line react/prop-types
    var innerRef = this.props.innerRef;
    var generatedClassName = this.state.generatedClassName;
    var _constructor2 = this.constructor,
        styledComponentId = _constructor2.styledComponentId,
        target = _constructor2.target;


    var isTargetTag = isTag(target);

    var className = [
    // eslint-disable-next-line react/prop-types
    this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

    var baseProps = _extends({}, this.attrs, {
      className: className
    });

    if (isStyledComponent(target)) {
      baseProps.innerRef = innerRef;
    } else {
      baseProps.ref = innerRef;
    }

    var propsForElement = baseProps;
    var key = void 0;

    for (key in this.props) {
      // Don't pass through non HTML tags through to HTML elements
      // always omit innerRef
      if (key !== 'innerRef' && key !== 'className' && (!isTargetTag || validAttr(key))) {
        propsForElement[key] = key === 'style' && key in this.attrs ? _extends({}, this.attrs[key], this.props[key]) : this.props[key];
      }
    }

    return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(target, propsForElement);
  };

  return BaseStyledComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _options$isClass = options.isClass,
        isClass = _options$isClass === undefined ? !isTag(target) : _options$isClass,
        _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;


    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);


        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);


          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          warnExtendDeprecated();

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.contextTypes = modifiedContextShape;
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.target = target;


    if (false) {
      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    if (isClass) {
      __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(StyledComponent, target, {
        // all SC-specific things should not be hoisted
        attrs: true,
        componentStyle: true,
        displayName: true,
        extend: true,
        styledComponentId: true,
        target: true,
        warnTooManyClasses: true,
        withComponent: true
      });
    }

    return StyledComponent;
  };

  return createStyledComponent;
});

// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(str) {
  var l = str.length | 0,
      h = l | 0,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;

  return h >>> 0;
}

// 

var areStylesCacheable = IS_BROWSER;

var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0, len = rules.length; i < len; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      if (typeof attrs[key] === 'function') {
        return false;
      }
    }
  }

  return true;
};

var isHMREnabled = typeof module !== 'undefined' && module.hot && "production" !== 'production';

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
  /* combines hashStr (murmurhash) and nameGenerator for convenience */
  var generateRuleHash = function generateRuleHash(str) {
    return nameGenerator(murmurhash(str));
  };

  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;

      if (!StyleSheet.master.hasId(componentId)) {
        var placeholder =  false ? ['.' + componentId + ' {}'] : [];

        StyleSheet.master.deferredInject(componentId, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          componentId = this.componentId,
          lastClassName = this.lastClassName;

      if (areStylesCacheable && isStatic && lastClassName !== undefined && styleSheet.hasNameForId(componentId, lastClassName)) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var name = generateRuleHash(this.componentId + flatCSS.join(''));

      if (!styleSheet.hasNameForId(componentId, name)) {
        styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name), name);
      }

      this.lastClassName = name;
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return generateRuleHash(str);
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
});

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var _styled = (function (styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = (function (nameGenerator, stringifyRules, css) {
  return function () {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var name = nameGenerator(murmurhash(replaceWhitespace(JSON.stringify(rules))));
    var id = 'sc-keyframes-' + name;

    if (!styleSheet.hasNameForId(id, name)) {
      styleSheet.inject(id, stringifyRules(rules, name, '@keyframes'), name);
    }

    return name;
  };
});

// 

var _injectGlobal = (function (stringifyRules, css) {
  var injectGlobal = function injectGlobal() {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var hash = murmurhash(JSON.stringify(rules));
    var id = 'sc-global-' + hash;

    if (!styleSheet.hasId(id)) {
      styleSheet.inject(id, stringifyRules(rules));
    }
  };

  return injectGlobal;
});

// 

var _constructWithOptions = (function (css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

    if (!Object(__WEBPACK_IMPORTED_MODULE_6_react_is__["isValidElementType"])(tag)) {
      throw new StyledComponentsError(1, String(tag));
    }

    /* This is callable directly as a template function */
    // $FlowFixMe: Not typed to avoid destructuring arguments
    var templateFunction = function templateFunction() {
      return componentConstructor(tag, options, css.apply(undefined, arguments));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || EMPTY_OBJECT, attrs)
      }));
    };

    return templateFunction;
  };

  return constructWithOptions;
});

// 

var withTheme = (function (Component$$1) {
  var isStatelessFunctionalComponent = typeof Component$$1 === 'function' &&
  // $FlowFixMe TODO: flow for prototype
  !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

  // NOTE: We can't pass a ref to a stateless functional component
  var shouldSetInnerRef = isStyledComponent(Component$$1) || isStatelessFunctionalComponent;

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = EMPTY_OBJECT, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && "production" !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      var props = _extends({
        theme: this.state.theme
      }, this.props);

      if (!shouldSetInnerRef) {
        props.ref = props.innerRef;
        delete props.innerRef;
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component$$1, props);
    };

    return WithTheme;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

  WithTheme.contextTypes = contextShape;
  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';
  WithTheme.styledComponentId = 'withTheme';


  return __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(WithTheme, Component$$1);
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if (false) {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if (false) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/stylis-rule-sheet/index.js":
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		typeof define === 'function' && define['amd'] ? define(factory()) :
			(window['stylisRuleSheet'] = factory())
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/strapi-helper-plugin/node_modules/stylis/stylis.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {/* eslint-disable */
	 true ? (module['exports'] = factory(null)) :
		typeof define === 'function' && define['amd'] ? define(factory(null)) :
			(window['stylis'] = factory(null))
}(/** @param {*=} options */function factory (options) {/* eslint-disable */

	'use strict'

	/**
	 * Notes
	 *
	 * The ['<method name>'] pattern is used to support closure compiler
	 * the jsdoc signatures are also used to the same effect
	 *
	 * ----
	 *
	 * int + int + int === n4 [faster]
	 *
	 * vs
	 *
	 * int === n1 && int === n2 && int === n3
	 *
	 * ----
	 *
	 * switch (int) { case ints...} [faster]
	 *
	 * vs
	 *
	 * if (int == 1 && int === 2 ...)
	 *
	 * ----
	 *
	 * The (first*n1 + second*n2 + third*n3) format used in the property parser
	 * is a simple way to hash the sequence of characters
	 * taking into account the index they occur in
	 * since any number of 3 character sequences could produce duplicates.
	 *
	 * On the other hand sequences that are directly tied to the index of the character
	 * resolve a far more accurate measure, it's also faster
	 * to evaluate one condition in a switch statement
	 * than three in an if statement regardless of the added math.
	 *
	 * This allows the vendor prefixer to be both small and fast.
	 */

	var nullptn = /^\0+/g /* matches leading null characters */
	var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
	var colonptn = /: */g /* splits animation rules */
	var cursorptn = /zoo|gra/ /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
	var elementptn = / *[\0] */g /* selector elements */
	var selectorptn = /,\r+?/g /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
	var invalidptn = /\W+/g /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
	var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/ /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available */
	var imgsrcptn = /([^-])(image-set\()/

	/* vendors */
	var webkit = '-webkit-'
	var moz = '-moz-'
	var ms = '-ms-'

	/* character codes */
	var SEMICOLON = 59 /* ; */
	var CLOSEBRACES = 125 /* } */
	var OPENBRACES = 123 /* { */
	var OPENPARENTHESES = 40 /* ( */
	var CLOSEPARENTHESES = 41 /* ) */
	var OPENBRACKET = 91 /* [ */
	var CLOSEBRACKET = 93 /* ] */
	var NEWLINE = 10 /* \n */
	var CARRIAGE = 13 /* \r */
	var TAB = 9 /* \t */
	var AT = 64 /* @ */
	var SPACE = 32 /*   */
	var AND = 38 /* & */
	var DASH = 45 /* - */
	var UNDERSCORE = 95 /* _ */
	var STAR = 42 /* * */
	var COMMA = 44 /* , */
	var COLON = 58 /* : */
	var SINGLEQUOTE = 39 /* ' */
	var DOUBLEQUOTE = 34 /* " */
	var FOWARDSLASH = 47 /* / */
	var GREATERTHAN = 62 /* > */
	var PLUS = 43 /* + */
	var TILDE = 126 /* ~ */
	var NULL = 0 /* \0 */
	var FORMFEED = 12 /* \f */
	var VERTICALTAB = 11 /* \v */

	/* special identifiers */
	var KEYFRAME = 107 /* k */
	var MEDIA = 109 /* m */
	var SUPPORTS = 115 /* s */
	var PLACEHOLDER = 112 /* p */
	var READONLY = 111 /* o */
	var IMPORT = 105 /* <at>i */
	var CHARSET = 99 /* <at>c */
	var DOCUMENT = 100 /* <at>d */
	var PAGE = 112 /* <at>p */

	var column = 1 /* current column */
	var line = 1 /* current line numebr */
	var pattern = 0 /* :pattern */

	var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1 /* vendor prefix */
	var escape = 1 /* escape :global() pattern */
	var compress = 0 /* compress output */
	var semicolon = 0 /* no/semicolon option */
	var preserve = 0 /* preserve empty selectors */

	/* empty reference */
	var array = []

	/* plugins */
	var plugins = []
	var plugged = 0
	var should = null

	/* plugin context */
	var POSTS = -2
	var PREPS = -1
	var UNKWN = 0
	var PROPS = 1
	var BLCKS = 2
	var ATRUL = 3

	/* plugin newline context */
	var unkwn = 0

	/* keyframe animation */
	var keyed = 1
	var key = ''

	/* selector namespace */
	var nscopealt = ''
	var nscope = ''

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @param {number} depth
	 * @return {string}
	 */
	function compile (parent, current, body, id, depth) {
		var bracket = 0 /* brackets [] */
		var comment = 0 /* comments /* // or /* */
		var parentheses = 0 /* functions () */
		var quote = 0 /* quotes '', "" */

		var first = 0 /* first character code */
		var second = 0 /* second character code */
		var code = 0 /* current character code */
		var tail = 0 /* previous character code */
		var trail = 0 /* character before previous code */
		var peak = 0 /* previous non-whitespace code */

		var counter = 0 /* count sequence termination */
		var context = 0 /* track current context */
		var atrule = 0 /* track @at-rule context */
		var pseudo = 0 /* track pseudo token index */
		var caret = 0 /* current character index */
		var format = 0 /* control character formating context */
		var insert = 0 /* auto semicolon insertion */
		var invert = 0 /* inverted selector pattern */
		var length = 0 /* generic length address */
		var eof = body.length /* end of file(length) */
		var eol = eof - 1 /* end of file(characters) */

		var char = '' /* current character */
		var chars = '' /* current buffer of characters */
		var child = '' /* next buffer of characters */
		var out = '' /* compiled body */
		var children = '' /* compiled children */
		var flat = '' /* compiled leafs */
		var selector /* generic selector address */
		var result /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret)

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
					}

					quote = parentheses = bracket = 0
					eof++
					eol++
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '')
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret)
							}
						}

						code = SEMICOLON
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA: {
							insert = 0
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							insert = 0
							length = caret
							first = code
							caret--
							code = SEMICOLON

							while (length < eof) {
								switch (body.charCodeAt(length++)) {
									case NEWLINE:
									case CARRIAGE:
									case SEMICOLON: {
										++caret
										code = first
										length = eof
										break
									}
									case COLON: {
										if (format > 0) {
											++caret
											code = first
										}
									}
									case OPENBRACES: {
										length = eof
									}
								}
							}
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim()
						first = chars.charCodeAt(0)
						counter = 1
						length = ++caret

						while (caret < eof) {
							switch (code = body.charCodeAt(caret)) {
								case OPENBRACES: {
									counter++
									break
								}
								case CLOSEBRACES: {
									counter--
									break
								}
								case FOWARDSLASH: {
									switch (second = body.charCodeAt(caret + 1)) {
										// /*, //
										case STAR:
										case FOWARDSLASH: {
											caret = delimited(second, caret, eol, body)
										}
									}
									break
								}
								// given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
								case OPENBRACKET: {
									code++
								}
								// given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
								case OPENPARENTHESES: {
									code++
								}
								// quote tail delimiter is identical to the head delimiter hence noop,
								// fallthrough clauses have been shifted to the correct tail delimiter
								case DOUBLEQUOTE:
								case SINGLEQUOTE: {
									while (caret++ < eol) {
										if (body.charCodeAt(caret) === code) {
											break
										}
									}
								}
							}

							if (counter === 0) {
								break
							}

							caret++
						}

						child = body.substring(length, caret)

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '')
								}

								second = chars.charCodeAt(1)

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS:
									case DASH: {
										selector = current
										break
									}
									default: {
										selector = array
									}
								}

								child = compile(current, selector, child, second, depth+1)
								length = child.length

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert)
									result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
									chars = selector.join('')

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0
											child = ''
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case SUPPORTS: {
											chars = chars.replace(supportsptn, supports)
										}
										case DOCUMENT:
										case MEDIA:
										case DASH: {
											child = chars + '{' + child + '}'
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
											child = chars + '{' + child + '}'

											if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
												child = '@' + webkit + child + '@' + child
											} else {
												child = '@' + child
											}
											break
										}
										default: {
											child = chars + child

											if (id === PAGE) {
												child = (out += child, '')
											}
										}
									}
								} else {
									child = ''
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id, depth+1)
							}
						}

						children += child

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						atrule = 0
						chars = ''
						child = ''
						code = body.charCodeAt(++caret)
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

						if ((length = chars.length) > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0)

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123)) {
									length = (chars = chars.replace(' ', ':')).length
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
									if ((length = (chars = result.trim()).length) === 0) {
										chars = '\0\0'
									}
								}
							}

							first = chars.charCodeAt(0)
							second = chars.charCodeAt(1)

							switch (first) {
								case NULL: {
									break
								}
								case AT: {
									if (second === IMPORT || second === CHARSET) {
										flat += chars + body.charAt(caret)
										break
									}
								}
								default: {
									if (chars.charCodeAt(length-1) === COLON) {
										break
									}

									out += property(chars, first, second, chars.charCodeAt(2))
								}
							}
						}

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						chars = ''
						code = body.charCodeAt(++caret)
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0
					} else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
						format = 1
						chars += '\0'
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
					}

					// next line, reset column position
					column = 1
					line++
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++
						break
					}
				}
				default: {
					// increment column position
					column++

					// current character
					char = body.charAt(caret)

					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket + comment === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = ''
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' '
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0'
							break
						}
						case FORMFEED: {
							char = '\\f'
							break
						}
						case VERTICALTAB: {
							char = '\\v'
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1
								format = 1
								char = '\f' + char
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1
								char += '\r'
							}
							break
						}
						// quotes
						case DOUBLEQUOTE:
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								parentheses--
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0
											context = 1
										}
									}
								}

								parentheses++
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH
											break
										}
										// /*
										case 220: {
											length = caret
											comment = STAR
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
										// /*<!> ... */, !
										if (body.charCodeAt(length+2) === 33) {
											out += body.substring(length, caret+1)
										}
										char = ''
										comment = 0
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0'
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0')
											}
										}
										format = 1
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												// :globa<l>(
												if (pseudo + 7 === caret && tail === 108) {
													pseudo = 0
												}
												context = ++counter
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1
													char += '\0'
												}
												break
											}
										}
									}
									break
								}
								case TAB:
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1
												char += '\0'
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char

						// previous non-whitespace character code
						if (code !== SPACE && code !== TAB) {
							peak = code
						}
					}
				}
			}

			// tail character codes
			trail = tail
			tail = code

			// visit every character
			caret++
		}

		length = out.length

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}'

			if (prefix*pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2))
					pattern = 0

				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						)
						break
					}
				}

				pattern = 0
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn)
		var out = selectors

		var length = selectors.length
		var l = parent.length

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
					out[i] = scope(selector, out[i], invert, l).trim()
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; ++i) {
					for (var k = 0; k < l; ++k) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current
		var code = selector.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0)
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var index = 0
		var out = input + ';'
		var hash = (first*2) + (second*3) + (third*4)
		var cache

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out)
		} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
			return out
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015: {
				// text-shadow/text-align/text-transform, a
				return out.charCodeAt(10) === 97 ? webkit + out + out : out
			}
			// filter/fill f, i, l
			case 951: {
				// filter, t
				return out.charCodeAt(3) === 116 ? webkit + out + out : out
			}
			// color/column, c, o, l
			case 963: {
				// column, n
				return out.charCodeAt(5) === 110 ? webkit + out + out : out
			}
			// box-decoration-break, b, o, x
			case 1009: {
				if (out.charCodeAt(4) !== 100) {
					break
				}
			}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942: {
				return webkit + out + out
			}
			// appearance: a, p, p
			case 978: {
				return webkit + out + moz + out + out
			}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983: {
				return webkit + out + moz + out + ms + out + out
			}
			// background/backface-visibility, b, a, c
			case 883: {
				// backface-visibility, -
				if (out.charCodeAt(8) === DASH) {
					return webkit + out + out
				}

				// image-set(...)
				if (out.indexOf('image-set(', 11) > 0) {
					return out.replace(imgsrcptn, '$1'+webkit+'$2') + out
				}

				return out
			}
			// flex: f, l, e
			case 932: {
				if (out.charCodeAt(4) === DASH) {
					switch (out.charCodeAt(5)) {
						// flex-grow, g
						case 103: {
							return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
						}
						// flex-shrink, s
						case 115: {
							return webkit + out + ms + out.replace('shrink', 'negative') + out
						}
						// flex-basis, b
						case 98: {
							return webkit + out + ms + out.replace('basis', 'preferred-size') + out
						}
					}
				}

				return webkit + out + ms + out + out
			}
			// order: o, r, d
			case 964: {
				return webkit + out + ms + 'flex' + '-' + out + out
			}
			// justify-items/justify-content, j, u, s
			case 1023: {
				// justify-content, c
				if (out.charCodeAt(8) !== 99) {
					break
				}

				cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
				return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
			}
			// cursor, c, u, r
			case 1005: {
				return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
			}
			// writing-mode, w, r, i
			case 1000: {
				cache = out.substring(13).trim()
				index = cache.indexOf('-') + 1

				switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
					// vertical-lr
					case 226: {
						cache = out.replace(writingptn, 'tb')
						break
					}
					// vertical-rl
					case 232: {
						cache = out.replace(writingptn, 'tb-rl')
						break
					}
					// horizontal-tb
					case 220: {
						cache = out.replace(writingptn, 'lr')
						break
					}
					default: {
						return out
					}
				}

				return webkit + out + ms + cache + out
			}
			// position: sticky
			case 1017: {
				if (out.indexOf('sticky', 9) === -1) {
					return out
				}
			}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975: {
				index = (out = input).length - 10
				cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

				switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
					// inline-
					case 203: {
						// inline-box
						if (cache.charCodeAt(8) < 111) {
							break
						}
					}
					// inline-box/sticky
					case 115: {
						out = out.replace(cache, webkit+cache)+';'+out
						break
					}
					// inline-flex
					// flex
					case 207:
					case 102: {
						out = (
							out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
							out.replace(cache, webkit+cache)+';'+
							out.replace(cache, ms+cache+'box')+';'+
							out
						)
					}
				}

				return out + ';'
			}
			// align-items, align-center, align-self: a, l, i, -
			case 938: {
				if (out.charCodeAt(5) === DASH) {
					switch (out.charCodeAt(6)) {
						// align-items, i
						case 105: {
							cache = out.replace('-items', '')
							return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
						}
						// align-self, s
						case 115: {
							return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
						}
						// align-content
						default: {
							return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
						}
					}
				}
				break
			}
			// min/max
			case 973:
			case 989: {
				// min-/max- height/width/block-size/inline-size
				if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
					break
				}
			}
			// height/width: min-content / width: max-content
			case 931:
			case 953: {
				if (dimensionptn.test(input) === true) {
					// stretch
					if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
						return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
					else
						return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
				}
				break
			}
			// transform, transition: t, r, a
			case 962: {
				out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

				// transitions
				if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
					return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
				}

				break
			}
		}

		return out
	}

	/**
	 * Vendor
	 *
	 * @param {string} content
	 * @param {number} context
	 * @return {boolean}
	 */
	function vendor (content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{')
		var key = content.substring(0, context !== 3 ? index : 10)
		var value = content.substring(index + 1, content.length - 1)

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
	}

	/**
	 * Supports
	 *
	 * @param {string} match
	 * @param {string} group
	 * @return {string}
	 */
	function supports (match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

		return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length
		var index = input.indexOf(':', 9) + 1
		var declare = input.substring(0, index).trim()
		var out = input.substring(index, length-1).trim()

		switch (input.charCodeAt(9)*keyed) {
			case 0: {
				break
			}
			// animation-*, -
			case DASH: {
				// animation-name, n
				if (input.charCodeAt(10) !== 110) {
					break
				}
			}
			// animation/animation-name
			default: {
				// split in case of multiple animations
				var list = out.split((out = '', animationptn))

				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)

					while (value = items[index]) {
						var peak = value.charCodeAt(0)

						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}

						items[index++] = value
					}

					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			}
		}

		out = declare + out + ';'

		if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
			return webkit + out + out

		return out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn)
			var out = ''

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1)
				code = element.charCodeAt(0)
				padding = ''

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' '
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1)
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element
								}
							}
						}
						break
					}
					case COMMA: {
						padding = ''
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
						} else {
							element = padding + element + nscopealt
						}
					}
				}

				out += element
			}

			selector[i] = out.replace(formatptn, '').trim()
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @param {number} depth
	 * @param {number} at
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next
				}
			}
		}
		if (out !== content) {
		  return out
		}
	}

	/**
	 * @param {number} code
	 * @param {number} index
	 * @param {number} length
	 * @param {string} body
	 * @return {number}
	 */
	function delimited (code, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				// /*
				case FOWARDSLASH: {
					if (code === STAR) {
						if (body.charCodeAt(i - 1) === STAR &&  index + 2 !== i) {
							return i + 1
						}
					}
					break
				}
				// //
				case NEWLINE: {
					if (code === FOWARDSLASH) {
						return i + 1
					}
				}
			}
		}

		return i
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @param {number} length
	 * @param {number} find
	 * @param {string} body
	 * @return {number}
	 */
	function match (type, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				case type: {
					return i
				}
			}
		}

		return i
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0
				break
			}
			default: {
				if (typeof plugin === 'function') {
					plugins[plugged++] = plugin
				}	else if (typeof plugin === 'object') {
					for (var i = 0, length = plugin.length; i < length; ++i) {
						use(plugin[i])
					}
				} else {
					unkwn = !!plugin|0
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {
		for (var name in options) {
			var value = options[name]
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
				case 'prefix':
					should = null

					if (!value) {
						prefix = 0
					} else if (typeof value !== 'function') {
						prefix = 1
					} else {
						prefix = 2
						should = value
					}
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector
		var code = ns.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0)
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns
		} else {
			nscopealt = ns
		}

		var selectors = [nscope]
		var result

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)

			if (result !== void 0 && typeof result === 'string') {
				input = result
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0)

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)

			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0
			}
		}

		// reset
		key = ''
		nscope = ''
		nscopealt = ''
		pattern = 0
		line = 1
		column = 1

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use
	stylis['set'] = set

	if (options !== void 0) {
		set(options)
	}

	return stylis
}));


/***/ })

});
//# sourceMappingURL=0.a3a0411c6d87d64c582c.chunk.js.map