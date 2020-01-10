#!/usr/bin/env node
"use strict";

<<<<<<< HEAD
=======
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

>>>>>>> develop
var _projectInit = require("./project-init");

var _commander = _interopRequireDefault(require("commander"));

var _CommandParser = require("./tools/CommandParser");

var _generateModels = _interopRequireDefault(require("./generateModels"));

var _VerifyEsVersion = _interopRequireDefault(require("./tools/VerifyEsVersion"));

var _generateControllers = _interopRequireDefault(require("./generateControllers"));

<<<<<<< HEAD
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

=======
>>>>>>> develop
_commander["default"].version('1.0.0').description('Exspresso-Cli');

_commander["default"].command('init').alias('i').description('Initialize Exspresso').action(function () {
  return (0, _projectInit.ExpressoInit)();
});

_commander["default"].option('-m, --model', '<modelname>', '(key:value)').option('-c, --controller', '<controllername>', 'Generate Model Controller').action(function (args, cmdObj) {
  var esVersion = (0, _VerifyEsVersion["default"])();
<<<<<<< HEAD
=======
  console.log(args);
>>>>>>> develop

  if (args['controller']) {
    (0, _CommandParser.CommandParser)(args, function (file) {
      return (0, _generateControllers["default"])(file, esVersion);
    });
  } else if (args['model']) {
    (0, _CommandParser.CommandParser)(args, function (file) {
      return (0, _generateModels["default"])(file, esVersion);
    });
  }
});

_commander["default"].parse(process.argv);