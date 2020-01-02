"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es6ModelGenerator = void 0;

var Es6ModelGenerator = function Es6ModelGenerator(name, args) {
  return "import { Schema } from 'mongoose'\n  const ".concat(name, "Schema = new Schema(\n      {\n        ").concat(JSON.parse(args), "\n      },\n    {\n      timeStamps:true\n    }\n  )\n\n  export { ").concat(name, "Schema }\n  ");
};

exports.Es6ModelGenerator = Es6ModelGenerator;