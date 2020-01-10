"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatabaseFolderSetup = void 0;

var _CreateEs6ProjectDirectory = _interopRequireDefault(require("./CreateEs6ProjectDirectory"));

var _CreateEs5ProjectDirectory = _interopRequireDefault(require("./CreateEs5ProjectDirectory"));

var _CreateSequelizeProjectDirectory = _interopRequireDefault(require("./CreateSequelizeProjectDirectory"));

var DatabaseFolderSetup = function DatabaseFolderSetup(project_name, esVersion, dbType) {
  if (dbType === 'MongoDB' && esVersion === 'ES6') {
    (0, _CreateEs6ProjectDirectory["default"])(project_name);
  } else if (dbType === 'MongoDB' && esVersion === 'ES5') {
    (0, _CreateEs5ProjectDirectory["default"])(project_name);
  } else if (dbType === 'Postgresql' && esVersion === 'Es6') {
    console.info('Es6 is unsupported for Postgres config at this time, using Es5 instead.');
    (0, _CreateSequelizeProjectDirectory["default"])(project_name);
  } else {
    (0, _CreateSequelizeProjectDirectory["default"])(project_name);
  }
};

exports.DatabaseFolderSetup = DatabaseFolderSetup;