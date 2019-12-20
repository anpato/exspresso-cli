"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _child_process = require("child_process");

var _common = require("../common");

var _Es5Templates = require("../templates/Es5Templates");

var _PackageScriptInsertion = _interopRequireDefault(require("../tools/PackageScriptInsertion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var params = {
  gitignore: _common.commonIgnore,
  dependencies: "express mongoose cors dotenv morgan body-parser helmet",
  devDependencies: "nodemon --save-dev",
  schema: _Es5Templates.Es5Schema,
  model: _Es5Templates.SampleEs5Model,
  controller: _Es5Templates.SampleEs5Controller,
  routerModelTemplate: _Es5Templates.SampleEs5ModelRouter,
  routerTemplate: _Es5Templates.SampleEs5Router,
  serverConfig: _Es5Templates.Es5Server,
  connection: _Es5Templates.Es5Connection
};

var CreateMongoProjectDirectoryEs5 = function CreateMongoProjectDirectoryEs5(project_name) {
  (0, _child_process.exec)((0, _common.createProjectFolders)(project_name), function (err, stdout, stderr) {
    if (err) throw err;
    console.info('Creating Project Folders');
  }).once('exit', function () {
    return (0, _child_process.exec)((0, _common.initializeGitandNpm)(project_name, params), function (err, stdout, stderr) {
      if (err) throw err;
      console.info('Creating empty git repository and initializing npm');
    }).once('exit', function () {
      return (0, _child_process.exec)((0, _common.installEs5MongoDependencies)(project_name, params, function (err, stdout, stderr) {
        if (err) throw err;
        console.info('Installing necessary dependencies');
      })).once('exit', function () {
        return (0, _child_process.exec)((0, _common.insertEs5DatabaseFiles)(project_name, params), function (err, stdout, stderr) {
          if (err) throw err;
          console.info('Setting up the database directory');
        }).once('exit', function () {
          return (0, _child_process.exec)((0, _common.insertSampleEs5DatabaseSetup)(project_name, params), function (err) {
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
                  return (0, _PackageScriptInsertion["default"])(project_name, _Es5Templates.Es5PackageScripts);
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

var _default = CreateMongoProjectDirectoryEs5;
exports["default"] = _default;