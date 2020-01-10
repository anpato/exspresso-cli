"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandParser = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var CommandParser = function CommandParser(commands, next) {
  var FileName = commands.args.splice(commands.args[0], 1)[0];
  var args = JSON.stringify.apply(JSON, (0, _toConsumableArray2["default"])(commands.args).concat([null, '\n']));
  var file = {
    FileName: FileName,
    args: args
  };
  return next(file);
};

exports.CommandParser = CommandParser;