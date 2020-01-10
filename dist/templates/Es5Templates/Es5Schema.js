"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es5Schema = void 0;
var Es5Schema = "const CreateModel = require('mongoose').model\nconst Sample = require('./models/Sample')\n\nconst SampleModel = CreateModel('samples', Sample)\n\nmodule.exports = {\n  SampleModel\n}\n";
exports.Es5Schema = Es5Schema;