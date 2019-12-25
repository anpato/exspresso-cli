"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpressoInit = void 0;

var _InitProject = require("./InitProject");

var _EsVersionCheck = require("./EsVersionCheck");

var _InitDatabase = require("./InitDatabase");

var _InitDatabaseTypes = require("./InitDatabaseTypes");

var main = function main() {
  (0, _InitProject.intitializeProject)(function (project_name) {
    return (0, _EsVersionCheck.EsVersionCheck)(project_name, function (project_name, esVersion) {
      return (0, _InitDatabase.DatabaseSetup)(project_name, esVersion, function (project_name, esVersion, dialect) {
        return (0, _InitDatabaseTypes.DatabaseFolderSetup)(project_name, esVersion, dialect);
      });
    });
  });
};

exports.ExpressoInit = main;