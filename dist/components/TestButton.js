"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TestButton = (0, _styledComponents["default"])(_core.Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: red;\n"])));

var _default = function _default() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TestButton, {
    children: "Hello World"
  });
};

exports["default"] = _default;

//# sourceMappingURL=TestButton.js.map