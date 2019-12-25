"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

var VerifyDialect = function VerifyDialect(currentDir) {
  var packageJson = JSON.parse((0, _fs.readFileSync)("".concat(currentDir, "/package.json")));

  if (packageJson.dependencies['mongoose']) {
    return true;
  }

  return false;
};

var _default = VerifyDialect;
exports["default"] = _default;