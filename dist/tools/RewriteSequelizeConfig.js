"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fs = require("fs");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RewriteSequelizeConfig = function RewriteSequelizeConfig(project_name, next) {
  var currentDir = process.cwd();
  var file = (0, _fs.readFileSync)(currentDir + "/./".concat(project_name, "/config/config.json"));
  var newConfig = {};
  var underscoredProjectName = project_name.includes('-') ? project_name.split('-').join('_') : project_name;
  var configFile = JSON.parse(file);
  Object.keys(configFile).forEach(function (key) {
    delete configFile[key].username;
    delete configFile[key].password;
    var DatabaseNames = configFile[key].database.split('_');
    DatabaseNames.splice(0, 1, underscoredProjectName);
    var config = (0, _defineProperty2["default"])({}, key, {
      database: DatabaseNames.join('_'),
      host: configFile[key].host,
      dialect: 'postgres',
      operatorsAliases: configFile[key].operatorsAliases
    });
    Object.assign(newConfig, _objectSpread({}, config));
  });
  (0, _fs.writeFileSync)("".concat(currentDir, "/./").concat(project_name, "/config/config.json"), JSON.stringify(newConfig, null, 2), function (err) {
    if (err) throw err;
  });
};

var _default = RewriteSequelizeConfig;
exports["default"] = _default;