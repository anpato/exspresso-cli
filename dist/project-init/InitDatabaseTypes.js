"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatabaseFolderSetup = void 0;

var _CreateEs6ProjectDirectory = _interopRequireDefault(require("./CreateEs6ProjectDirectory"));

var _CreateEs5ProjectDirectory = _interopRequireDefault(require("./CreateEs5ProjectDirectory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DatabaseFolderSetup = function DatabaseFolderSetup(project_name, esVersion, dbType) {
  if (dbType === 'MongoDB' && esVersion === 'ES6') {
    (0, _CreateEs6ProjectDirectory["default"])(project_name);
  } else if (dbType === 'MongoDB' && esVersion === 'ES5') {
    (0, _CreateEs5ProjectDirectory["default"])(project_name);
  }
};

exports.DatabaseFolderSetup = DatabaseFolderSetup;