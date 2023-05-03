"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _MainPage = _interopRequireDefault(require("@/pages/MainPage"));

var _NotFoundPage = _interopRequireDefault(require("@/pages/NotFoundPage"));

var _ProductPage = _interopRequireDefault(require("@/pages/ProductPage"));

var _CartPage = _interopRequireDefault(require("@/pages/CartPage"));

var _CartConfirm = _interopRequireDefault(require("@/pages/CartConfirm"));

var _orderPage = _interopRequireDefault(require("@/pages/orderPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  name: 'main',
  component: _MainPage["default"],
  path: '/'
}, {
  name: 'product',
  component: _ProductPage["default"],
  path: '/product/:id'
}, {
  name: 'notFound',
  component: _NotFoundPage["default"],
  path: '*'
}, {
  name: 'cart',
  component: _CartPage["default"],
  path: '/cart'
}, {
  name: 'confirm',
  component: _CartConfirm["default"],
  path: '/confirm'
}, {
  name: 'order',
  component: _orderPage["default"],
  path: '/order'
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;