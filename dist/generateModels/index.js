"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _VerifyDialect = _interopRequireDefault(require("../tools/VerifyDialect"));

var _chalk = _interopRequireDefault(require("chalk"));

var _VerifyEsVersion = _interopRequireDefault(require("../tools/VerifyEsVersion"));

var _Es6ModelGeneratorTemplate = require("./Es6ModelGeneratorTemplate");

var _child_process = require("child_process");

var _generateControllers = require("../generateControllers");

var _Es5ModelGeneratorTemplate = require("./Es5ModelGeneratorTemplate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ModelGenerator = function ModelGenerator(commands) {
  var dir = process.cwd();
  var esVersion = (0, _VerifyEsVersion["default"])(dir);

  if ((0, _VerifyDialect["default"])(dir)) {
    var FileName = commands.parent.args.splice(commands.parent.args[0], 1)[0];
    var args = JSON.stringify.apply(JSON, _toConsumableArray(commands.parent.args).concat([null, '\n']));

    if (esVersion === 'es6') {
      var model = (0, _Es6ModelGeneratorTemplate.Es6ModelGenerator)(FileName, args);
      (0, _child_process.exec)("cd src && cd database && cd models && touch ".concat(FileName, ".js && echo \"").concat(model, "\" >> ").concat(FileName, ".js && echo \" export * from './").concat(FileName, "' \" >> index.js"), function (err) {
        if (err) throw err;
      }).once('exit', function () {
        return (0, _generateControllers.GenerateModelController)(esVersion, FileName);
      });
    } else if (esVersion === 'es5') {
      var _model = (0, _Es5ModelGeneratorTemplate.Es5ModelGeneratorTemplate)(args);

      (0, _child_process.exec)("cd src && cd database && cd models && touch ".concat(FileName, ".js && echo \"").concat(_model, "\" >> ").concat(FileName, ".js")).once('exit', function () {
        return (0, _generateControllers.GenerateModelController)(esVersion, FileName);
      });
    }
  } else {
    console.info(_chalk["default"].red('You must be using mongoose in order to use this feature!'));
  }
};

var _default = ModelGenerator;
exports["default"] = _default;