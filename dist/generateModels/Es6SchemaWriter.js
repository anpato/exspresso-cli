"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es6SchemaWriter = void 0;

var Es6SchemaWriter = function Es6SchemaWriter(name, pluralizedName) {
  return "export const ".concat(name, " = model(").concat(pluralizedName, ", ").concat(name, "Model)");
};

exports.Es6SchemaWriter = Es6SchemaWriter;