"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _VerifyDialect = _interopRequireDefault(require("../tools/VerifyDialect"));

var _chalk = _interopRequireDefault(require("chalk"));

var _Es6ModelGeneratorTemplate = require("./Es6ModelGeneratorTemplate");

var _child_process = require("child_process");

var _Es5ModelGeneratorTemplate = require("./Es5ModelGeneratorTemplate");

var GenerateModel = function GenerateModel(file, esVersion) {
  if ((0, _VerifyDialect["default"])()) {
    if (esVersion === 'es6') {
      var model = (0, _Es6ModelGeneratorTemplate.Es6ModelGenerator)(file.FileName, file.args);
      (0, _child_process.exec)("cd src && cd database && cd models && touch ".concat(file.FileName, ".js && echo \"").concat(model, "\" >> ").concat(file.FileName, ".js && echo \" export * from './").concat(file.FileName, "' \" >> index.js"), function (err) {
        if (err) throw err;
      }).once('exit', function () {
        return console.info(_chalk["default"].green("Created ".concat(file.FileName, " model.")));
      });
    } else if (esVersion === 'es5') {
      var _model = (0, _Es5ModelGeneratorTemplate.Es5ModelGeneratorTemplate)(file.args);

      (0, _child_process.exec)("cd src && cd database && cd models && touch ".concat(file.FileName, ".js && echo \"").concat(_model, "\" >> ").concat(file.FileName, ".js")).once('exit', function () {
        return console.info(_chalk["default"].green("Created ".concat(file.FileName, " model.")));
      });
    }
  } else {
    console.info(_chalk["default"].red('You must be using mongoose in order to use this feature!'));
  }
};

var _default = GenerateModel;
exports["default"] = _default;