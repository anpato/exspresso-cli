#!/usr/bin/env node
"use strict";

var _projectInit = require("./project-init");

var _commander = _interopRequireDefault(require("commander"));

var _generateModels = _interopRequireDefault(require("./generateModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_commander["default"].version('1.0.0').description('Exspresso-Cli');

_commander["default"].command('init').alias('i').description('Initialize Exspresso').action(function () {
  return (0, _projectInit.ExpressoInit)();
});

_commander["default"].command('generate').alias('--g').description('Generate ModelFile with fields, creates model controller').option('--model <modelname>', '(key:value)').action(function (args, cmdObj) {
  return (0, _generateModels["default"])(args);
}); // generateModels()


_commander["default"].parse(process.argv);