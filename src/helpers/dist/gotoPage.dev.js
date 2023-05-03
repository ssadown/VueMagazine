"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = gotoPage;

var _eventBus = _interopRequireDefault(require("@/eventBus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function gotoPage(pageName, pageParams) {
  _eventBus["default"].$emit('gotoPage', pageName, pageParams);
}