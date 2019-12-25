"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenerateModelController = void 0;

var _child_process = require("child_process");

var _chalk = _interopRequireDefault(require("chalk"));

var _Es6ControllerTemplate = require("./Es6ControllerTemplate");

var _Es5ControllerTemplate = require("./Es5ControllerTemplate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GenerateModelController = function GenerateModelController(esVersion, modelName) {
  (0, _child_process.exec)("cd src && cd controllers && touch ".concat(modelName, "Controller.js && echo \"").concat(esVersion === 'es6' ? (0, _Es6ControllerTemplate.Es6ControllerTemplate)(modelName) : (0, _Es5ControllerTemplate.Es5ControllerTemplate)(modelName), "\" >> ").concat(modelName, "Controller.js"), function (err) {
    if (err) throw err;
  }).once('exit', function () {
    return console.info(_chalk["default"].green("Generated ".concat(modelName, " model file and ").concat(modelName, " controller")));
  });
};

exports.GenerateModelController = GenerateModelController;