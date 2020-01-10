"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("../common");

var _Es5Templates = require("../templates/Es5Templates");

var _PackageScriptInsertion = _interopRequireDefault(require("../tools/PackageScriptInsertion"));

var _RewriteSequelizeConfig = _interopRequireDefault(require("../tools/RewriteSequelizeConfig"));

var _CommandStack = _interopRequireDefault(require("./CommandStack"));

var params = {
  gitignore: _common.commonIgnore,
  dependencies: "express cors sequelize pg dotenv morgan body-parser helmet",
  devDependencies: "sequelize-cli nodemon --save-dev",
  controller: _Es5Templates.Es5PostgresController,
  routerModelTemplate: _Es5Templates.SampleEs5ModelRouter,
  routerTemplate: _Es5Templates.SampleEs5Router,
  serverConfig: _Es5Templates.SequelizeEs5Server,
  Es5SequelizePackageScripts: _Es5Templates.Es5SequelizePackageScripts
};

var CreateSequelizeProjectDirectory = function CreateSequelizeProjectDirectory(project_name) {
  var commands = [_common.createSequelizeProjectFolders, _common.initializeGitandNpm, _common.initSequelizeDependencies, _common.initSequelizeCli, _common.insertSequelizeServerConfig, _common.initializeSequelizeControllers, _common.initializeSequelizeRouters, _RewriteSequelizeConfig["default"], _PackageScriptInsertion["default"]];
  var commandStack = new _CommandStack["default"](commands, project_name, params);
  commandStack.runQueue();
};

var _default = CreateSequelizeProjectDirectory;
exports["default"] = _default;