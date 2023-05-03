"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseFormField = _interopRequireDefault(require("@/components/BaseFormField.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: ['title', 'error', 'placeholder', 'value'],
  components: {
    BaseFormField: _BaseFormField["default"]
  },
  computed: {
    dataValue: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    }
  }
};
exports["default"] = _default;