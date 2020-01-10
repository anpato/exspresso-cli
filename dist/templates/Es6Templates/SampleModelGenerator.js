"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleExportTemplate = exports.SampleModelEs6 = void 0;
var SampleModelEs6 = "import { Schema } from 'mongoose'\n// This is a sample Template for a mongoose schema\n\nconst SampleModel = new Schema(\n  {\n    // Insert model properties here\n    // name: {\n    //  type:String\n    // }\n  },\n  {\n    timestamps:true\n  }\n)\n\n// Add in setters and getters for model here\n\n// Exports model\nexport { SampleModel }\n";
exports.SampleModelEs6 = SampleModelEs6;
var sampleExportTemplate = "export * from './Sample.js'";
exports.sampleExportTemplate = sampleExportTemplate;