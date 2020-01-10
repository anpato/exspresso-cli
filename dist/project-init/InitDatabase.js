"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatabaseSetup = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

var DatabaseSetup = function DatabaseSetup(project_name, esVersion, next) {
  _inquirer["default"].prompt({
    type: 'list',
    name: 'dialect',
    message: 'What database dialect would you like?',
    choices: ['MongoDB', 'Postgresql']
  }).then(function (_ref) {
    var dialect = _ref.dialect;
    return next(project_name, esVersion, dialect);
  });
};

exports.DatabaseSetup = DatabaseSetup;