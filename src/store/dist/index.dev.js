"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _products = _interopRequireDefault(require("@/data/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    cartProducts: [],
    // для радио кнопки в корзине
    radioButtonValue: false,
    formStore: []
  },
  mutations: {
    addProductToCart: function addProductToCart(state, _ref) {
      var productId = _ref.productId,
          amount = _ref.amount;
      var item = state.cartProducts.find(function (item) {
        return item.productId === productId;
      });

      if (item) {
        item.amount += amount;
      } else {
        state.cartProducts.push({
          productId: productId,
          amount: amount
        });
      }
    },
    // для инпутов
    addFormToStore: function addFormToStore(state, data) {
      state.formStore.push({
        data: data
      });
    },
    // для радио кнопки в корзине
    setRadioButtonValue: function setRadioButtonValue(state, value) {
      state.radioButtonValue = value;
    },
    //   
    updateCartProductAmount: function updateCartProductAmount(state, _ref2) {
      var productId = _ref2.productId,
          amount = _ref2.amount;
      var item = state.cartProducts.find(function (item) {
        return item.productId === productId;
      });

      if (item) {
        item.amount = amount;
      }
    },
    deleteCartProduct: function deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter(function (item) {
        return item.productId !== productId;
      });
    },
    addCartProduct: function addCartProduct(state, productId) {
      var item = state.cartProducts.find(function (item) {
        return item.productId === productId;
      });

      if (item) {
        item.amount += 1;
      }
    },
    removeCartProduct: function removeCartProduct(state, productId) {
      var item = state.cartProducts.find(function (item) {
        return item.productId === productId;
      });

      if (item) {
        item.amount -= 1;
      }

      if (item.amount === 0) {
        state.cartProducts = state.cartProducts.filter(function (item) {
          return item.productId !== productId;
        });
      }
    }
  },
  getters: {
    cartDetailProducts: function cartDetailProducts(state) {
      return state.cartProducts.map(function (item) {
        return _objectSpread({}, item, {
          product: _products["default"].find(function (p) {
            return p.id === item.productId;
          })
        });
      });
    },
    cartTotalPrice: function cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce(function (acc, item) {
        return item.product.price * item.amount + acc;
      }, 0);
    },
    cartTotalItems: function cartTotalItems(state) {
      return state.cartProducts.length;
    },
    radioButtonValue: function radioButtonValue(state) {
      return state.radioButtonValue;
    },
    formStoreState: function formStoreState(state) {
      return state.formStore;
    }
  }
});

exports["default"] = _default;