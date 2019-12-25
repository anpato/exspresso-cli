"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

var VerifyEsVersion = function VerifyEsVersion(currentDir) {
  var packageJson = JSON.parse((0, _fs.readFileSync)("".concat(currentDir, "/package.json")));

  if (packageJson.devDependencies['@babel/cli']) {
    return 'es6';
  }

  return 'es5';
};

var _default = VerifyEsVersion;
exports["default"] = _default;