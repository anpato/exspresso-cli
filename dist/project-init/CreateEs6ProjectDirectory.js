"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

var _common = require("../common");

var _Es6Templates = require("../templates/Es6Templates");

var _PackageScriptInsertion = _interopRequireDefault(require("../tools/PackageScriptInsertion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var params = {
  gitignore: _common.commonIgnore,
  dependencies: "express mongoose cors dotenv morgan body-parser helmet",
  devDependencies: "@babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/preset-env nodemon --save-dev",
  schema: _Es6Templates.SampleEs6Schema,
  babel: _Es6Templates.BabelTemplate,
  "export": _Es6Templates.SampleEs6Export,
  model: _Es6Templates.SampleModelEs6,
  controller: _Es6Templates.SampleControllerEs6,
  routerModelTemplate: _Es6Templates.SampleModelRouterEs6,
  routerTemplate: _Es6Templates.SampleRouterEs6,
  serverConfig: _Es6Templates.serverConfigEs6,
  connection: _Es6Templates.connection
};

var CreateMongoProjectDirectoryEs6 = function CreateMongoProjectDirectoryEs6(project_name) {
  (0, _child_process.exec)((0, _common.createProjectFolders)(project_name), function (err, stdout, stderr) {
    if (err) throw err;
    console.info('Creating Project Folders');
  }).once('exit', function () {
    return (0, _child_process.exec)((0, _common.initializeGitandNpm)(project_name, params), function (err, stdout, stderr) {
      if (err) throw err;
      console.info('Creating empty git repository and initializing npm');
    }).once('exit', function () {
      return (0, _child_process.exec)((0, _common.installEs6MongoDependencies)(project_name, params, function (err, stdout, stderr) {
        if (err) throw err;
        console.info('Installing necessary dependencies');
      })).once('exit', function () {
        return (0, _child_process.exec)((0, _common.insertEs6DatabaseFiles)(project_name, params), function (err, stdout, stderr) {
          if (err) throw err;
          console.info('Setting up the database directory');
        }).once('exit', function () {
          return (0, _child_process.exec)((0, _common.insertSampleEs6DatabaseSetup)(project_name, params), function (err) {
            if (err) throw err;
            console.info('Creating sample files for your database');
          }).once('exit', function () {
            return (0, _child_process.exec)((0, _common.insertDatabaseConfigMongo)(project_name, params), function (err) {
              if (err) throw err;
            }).once('exit', function () {
              return (0, _child_process.exec)((0, _common.insertServerConfig)(project_name, params), function (err) {
                if (err) throw err;
              });
            }).once('exit', function () {
              return (0, _child_process.exec)((0, _common.initializeControllers)(project_name, params), function (err) {
                if (err) throw err;
                console.info('Creating Sample Controllers');
              }).once('exit', function () {
                return (0, _child_process.exec)((0, _common.initializeRouters)(project_name, params), function (err) {
                  if (err) throw err;
                  console.info('Creating sample routers');
                }).once('exit', function () {
                  return console.info('Writing scripts to package.json');
                }).once('exit', function () {
                  return (0, _PackageScriptInsertion["default"])(project_name, _Es6Templates.PackageScripts);
                }, function (err) {
                  if (err) throw err;
                });
              });
            });
          });
        });
      });
    });
  });
};

var _default = CreateMongoProjectDirectoryEs6;
exports["default"] = _default;