"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = numberFormater;

function numberFormater(value) {
  return new Intl.NumberFormat().format(value);
}