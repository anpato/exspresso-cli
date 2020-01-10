"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("../common");

var _Es6Templates = require("../templates/Es6Templates");

var _PackageScriptInsertion = _interopRequireDefault(require("../tools/PackageScriptInsertion"));

var _mongodbenv = require("../templates/mongodbenv");

var _CommandStack = _interopRequireDefault(require("./CommandStack"));

var params = {
  gitignore: _common.commonIgnore,
  dependencies: "express mongoose cors dotenv morgan body-parser helmet",
  devDependencies: "@babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/preset-env nodemon --save-dev",
  schema: _Es6Templates.SampleEs6Schema,
  envConfig: _mongodbenv.mongodbenv,
  babel: _Es6Templates.BabelTemplate,
  "export": _Es6Templates.SampleEs6Export,
  model: _Es6Templates.SampleModelEs6,
  controller: _Es6Templates.SampleControllerEs6,
  routerModelTemplate: _Es6Templates.SampleModelRouterEs6,
  routerTemplate: _Es6Templates.SampleRouterEs6,
  serverConfig: _Es6Templates.serverConfigEs6,
  connection: _Es6Templates.connection,
  PackageScripts: _Es6Templates.PackageScripts
};

var CreateMongoProjectDirectoryEs6 = function CreateMongoProjectDirectoryEs6(project_name) {
  var commands = [_common.createMongoProjectFolders, _common.initializeGitandNpm, _common.installEs6MongoDependencies, _common.insertEs6DatabaseFiles, _common.insertSampleEs6DatabaseSetup, _common.insertDatabaseConfigMongo, _common.insertServerConfig, _common.initializeControllers, _common.initializeRouters, _PackageScriptInsertion["default"]];
  var commandStack = new _CommandStack["default"](commands, project_name, params);
  commandStack.runQueue();
};

var _default = CreateMongoProjectDirectoryEs6;
exports["default"] = _default;