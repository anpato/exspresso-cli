"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es5ModelGeneratorTemplate = void 0;

var Es5ModelGeneratorTemplate = function Es5ModelGeneratorTemplate(args) {
  return "const ModelSchema = require('mongoose').Schema\n\nmodule.exports = new ModelSchema(\n  {\n    ".concat(JSON.parse(args), "\n  },\n  {\n    timestamps: true\n  }\n)\n");
};

exports.Es5ModelGeneratorTemplate = Es5ModelGeneratorTemplate;