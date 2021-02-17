"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _TestButton = _interopRequireDefault(require("./TestButton"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var open = _ref.open,
      toggleDialog = _ref.toggleDialog;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.Dialog, {
    open: open,
    onClose: toggleDialog,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DialogTitle, {
      children: "Confirm"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DialogContent, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DialogContentText, {
        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi rem corrupti labore veritatis! Laborum quos expedita quidem ullam maxime, cumque ipsum blanditiis voluptate, beatae sed eaque adipisci saepe unde."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.DialogActions, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TestButton["default"], {
        onClick: toggleDialog,
        color: "primary",
        children: "Disagree"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TestButton["default"], {
        onClick: toggleDialog,
        color: "primary",
        autoFocus: true,
        children: "Agree"
      })]
    })]
  });
};

exports["default"] = _default;

//# sourceMappingURL=TestDialog.js.map