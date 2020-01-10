"use strict";

<<<<<<< HEAD
=======
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

>>>>>>> develop
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandParser = void 0;

<<<<<<< HEAD
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var CommandParser = function CommandParser(commands, next) {
  var FileName = commands.args.splice(commands.args[0], 1)[0];
  var args = JSON.stringify.apply(JSON, _toConsumableArray(commands.args).concat([null, '\n']));
=======
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var CommandParser = function CommandParser(commands, next) {
  var FileName = commands.args.splice(commands.args[0], 1)[0];
  var args = JSON.stringify.apply(JSON, (0, _toConsumableArray2["default"])(commands.args).concat([null, '\n']));
>>>>>>> develop
  var file = {
    FileName: FileName,
    args: args
  };
  return next(file);
};

exports.CommandParser = CommandParser;