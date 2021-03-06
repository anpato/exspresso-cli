"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EsVersionCheck = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

var EsVersionCheck = function EsVersionCheck(project_name, next) {
  _inquirer["default"].prompt({
    type: 'list',
    name: 'esVersion',
    message: "Which Javascript standard would you like?\n\n      ES6: Use \"Import\" and \"Export\", included .babelrc\n      ES5: Using \"module.exports\" and non arrow functions\n\n    ",
    choices: ['ES6', 'ES5']
  }).then(function (_ref) {
    var esVersion = _ref.esVersion;
    return next(project_name, esVersion);
  });
};

exports.EsVersionCheck = EsVersionCheck;