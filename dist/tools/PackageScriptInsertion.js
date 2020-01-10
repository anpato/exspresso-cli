"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fs = require("fs");

var _chalk = _interopRequireDefault(require("chalk"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PackageScriptInsertion = function PackageScriptInsertion(project_name, params) {
  var currentDir = process.cwd();
  var packageJson = (0, _fs.readFileSync)("".concat(currentDir, "/./").concat(project_name, "/package.json"));
  var currentPackageJson = JSON.parse(packageJson);
  var newScripts = JSON.parse(params.PackageScripts);
  currentPackageJson.scripts = _objectSpread({}, currentPackageJson.scripts, {}, newScripts);
  (0, _fs.writeFile)("".concat(currentDir, "/./").concat(project_name, "/package.json"), JSON.stringify(currentPackageJson, null, 2), function (err) {
    if (err) throw err;
    console.info(_chalk["default"].green("Your project is all set up! Thanks for using ".concat(_chalk["default"].magenta('exspresso-cli'), ".")));
  });
};

var _default = PackageScriptInsertion;
exports["default"] = _default;