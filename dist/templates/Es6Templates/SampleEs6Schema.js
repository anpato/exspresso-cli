"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleEs6Schema = void 0;
var SampleEs6Schema = "import { model } from 'mongoose'\nimport { Sample } from './models'\n\nexport const SampleModel = model('samples', Sample)\n\n";
exports.SampleEs6Schema = SampleEs6Schema;