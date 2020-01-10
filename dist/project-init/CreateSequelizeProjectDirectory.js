"use strict";

<<<<<<< HEAD
=======
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

>>>>>>> develop
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

var _common = require("../common");

var _Es5Templates = require("../templates/Es5Templates");

var _PackageScriptInsertion = _interopRequireDefault(require("../tools/PackageScriptInsertion"));

var _RewriteSequelizeConfig = _interopRequireDefault(require("../tools/RewriteSequelizeConfig"));

<<<<<<< HEAD
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

=======
>>>>>>> develop
var params = {
  gitignore: _common.commonIgnore,
  dependencies: "express cors sequelize pg dotenv morgan body-parser helmet",
  devDependencies: "sequelize-cli nodemon --save-dev",
  controller: _Es5Templates.SamplePostgresController,
  routerModelTemplate: _Es5Templates.SampleEs5ModelRouter,
  routerTemplate: _Es5Templates.SampleEs5Router,
  serverConfig: _Es5Templates.SequelizeEs5Server
};

var CreateSequelizeProjectDirectory = function CreateSequelizeProjectDirectory(project_name) {
  (0, _child_process.exec)((0, _common.createSequelizeProjectFolders)(project_name), function (err) {
    if (err) throw err;
  }).once('exit', function () {
    return (0, _child_process.exec)((0, _common.initializeGitandNpm)(project_name, params), function (err) {
      if (err) throw err;
    }).once('exit', function () {
      return (0, _child_process.exec)((0, _common.initSequelizeDependencies)(project_name, params), function (err) {
        if (err) throw err;
      }).once('exit', function () {
        return (0, _child_process.exec)((0, _common.initSequelizeCli)(project_name), function (err) {
          if (err) throw err;
        }).once('exit', function () {
          return (0, _child_process.exec)((0, _common.insertSequelizeServerConfig)(project_name, params), function (err) {
            if (err) throw err;
          }).once('exit', function () {
            return (0, _child_process.exec)((0, _common.initializeSequelizeControllers)(project_name, params), function (err) {
              if (err) throw err;
            }).once('exit', function () {
              return (0, _child_process.exec)((0, _common.initializeSequelizeRouters)(project_name, params), function (err) {
                if (err) throw err;
              }).once('exit', function () {
                return (0, _RewriteSequelizeConfig["default"])(project_name);
              }).once('exit', function () {
                return (0, _PackageScriptInsertion["default"])(project_name, _Es5Templates.Es5SequelizePackageScripts);
              });
            });
          });
        });
      });
    });
  });
};

var _default = CreateSequelizeProjectDirectory;
exports["default"] = _default;