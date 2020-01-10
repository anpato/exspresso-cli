"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _child_process = require("child_process");

var _util = require("util");

var _common = require("../common");

var _Es5Templates = require("../templates/Es5Templates");

var _PackageScriptInsertion = _interopRequireDefault(require("../tools/PackageScriptInsertion"));

var _mongodbenv = require("../templates/mongodbenv");

var _CommandStack = _interopRequireDefault(require("./CommandStack"));

var params = {
  gitignore: _common.commonIgnore,
  dependencies: "express mongoose cors dotenv morgan body-parser helmet",
  devDependencies: "nodemon --save-dev",
  envConfig: _mongodbenv.mongodbenv,
  schema: _Es5Templates.Es5Schema,
  model: _Es5Templates.SampleEs5Model,
  controller: _Es5Templates.SampleEs5Controller,
  routerModelTemplate: _Es5Templates.SampleEs5ModelRouter,
  routerTemplate: _Es5Templates.SampleEs5Router,
  serverConfig: _Es5Templates.Es5Server,
  connection: _Es5Templates.Es5Connection,
  Es5PackageScripts: _Es5Templates.Es5PackageScripts
};

var CreateMongoProjectDirectoryEs5 = function CreateMongoProjectDirectoryEs5(project_name) {
  var commandsToExec, commandStack;
  return _regenerator["default"].async(function CreateMongoProjectDirectoryEs5$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          commandsToExec = [_common.createMongoProjectFolders, _common.initializeGitandNpm, _common.installEs5MongoDependencies, _common.insertEs5DatabaseFiles, _common.insertSampleEs5DatabaseSetup, _common.insertDatabaseConfigMongo, _common.insertServerConfig, _common.initializeControllers, _common.initializeRouters, _PackageScriptInsertion["default"]];
          commandStack = new _CommandStack["default"](commandsToExec, project_name, params);
          commandStack.runQueue(); // console.log(command)
          // await promisify(
          //   exec(command, err => {
          //     if (err) throw err
          //   })
          // )
          // if (index === commandsToExec.length) {
          //   commandStack.last()
          // }
          // })
          // .once('exit', console.log('done'))

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = CreateMongoProjectDirectoryEs5;
exports["default"] = _default;