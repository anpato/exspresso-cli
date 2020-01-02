"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

var _chalk = _interopRequireDefault(require("chalk"));

var _Es6ControllerTemplate = require("./Es6ControllerTemplate");

var _Es5ControllerTemplate = require("./Es5ControllerTemplate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GenerateController = function GenerateController(file, esVersion) {
  (0, _child_process.exec)("cd src && cd controllers && touch ".concat(file.FileName, "Controller.js && echo \"").concat(esVersion === 'es6' ? (0, _Es6ControllerTemplate.Es6ControllerTemplate)(file.FileName) : (0, _Es5ControllerTemplate.Es5ControllerTemplate)(file.FileName), "\" >> ").concat(file.FileName, "Controller.js"), function (err) {
    if (err) throw err;
  }).once('exit', function () {
    return console.info(_chalk["default"].green("Created ".concat(file.FileName, " controller.")));
  });
};

var _default = GenerateController;
exports["default"] = _default;