"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertSampleEs5DatabaseSetup = exports.insertEs5DatabaseFiles = exports.installEs5MongoDependencies = exports.insertSampleEs6DatabaseSetup = exports.insertEs6DatabaseFiles = exports.installEs6MongoDependencies = exports.initializeRouters = exports.initializeControllers = exports.insertServerConfig = exports.insertDatabaseConfigMongo = exports.initializeGitandNpm = exports.createProjectFolders = void 0;

/* Common Commands */
var createProjectFolders = function createProjectFolders(project_name) {
  return "mkdir ".concat(project_name, " && cd ").concat(project_name, " && mkdir src && cd src && touch index.js  && mkdir controllers && mkdir routes && mkdir database && mkdir config");
};

exports.createProjectFolders = createProjectFolders;

var initializeGitandNpm = function initializeGitandNpm(project_name, params) {
  return "cd ".concat(project_name, " && git init && touch .gitignore .env.shared && echo \"").concat(params.gitignore, "\" >> .gitignore && npm init -y");
};

exports.initializeGitandNpm = initializeGitandNpm;

var insertDatabaseConfigMongo = function insertDatabaseConfigMongo(project_name, params) {
  return "cd ".concat(project_name, " && cd src && cd config && touch index.js && echo \"").concat(params.connection, "\" >> index.js");
};

exports.insertDatabaseConfigMongo = insertDatabaseConfigMongo;

var insertServerConfig = function insertServerConfig(project_name, params) {
  return "cd ".concat(project_name, " && cd src && echo \"").concat(params.serverConfig, "\" >> index.js");
};

exports.insertServerConfig = insertServerConfig;

var initializeControllers = function initializeControllers(project_name, params) {
  return "cd ".concat(project_name, " && cd src && cd controllers && touch SampleController.js && echo \"").concat(params.controller, "\" >> SampleController.js");
};

exports.initializeControllers = initializeControllers;

var initializeRouters = function initializeRouters(project_name, params) {
  return "cd ".concat(project_name, " && cd src && cd routes && touch SampleRouter.js index.js && echo \"").concat(params.routerModelTemplate, "\" >> SampleRouter.js  && echo \"").concat(params.routerTemplate, "\" >> index.js");
};
/* Common Commands */

/* Es6 Commands */


exports.initializeRouters = initializeRouters;

var installEs6MongoDependencies = function installEs6MongoDependencies(project_name, params) {
  return "cd ".concat(project_name, " && npm install ").concat(params.dependencies, " --save && npm install ").concat(params.devDependencies, " --save-dev  && touch .babelrc && echo \"").concat(JSON.stringify(params.babel), "\" >> .babelrc");
};

exports.installEs6MongoDependencies = installEs6MongoDependencies;

var insertEs6DatabaseFiles = function insertEs6DatabaseFiles(project_name) {
  return "cd ".concat(project_name, " && cd src && cd database && mkdir models && touch Schema.js && cd models && touch index.js && touch Sample.js");
};

exports.insertEs6DatabaseFiles = insertEs6DatabaseFiles;

var insertSampleEs6DatabaseSetup = function insertSampleEs6DatabaseSetup(project_name, params) {
  return "cd ".concat(project_name, " && cd src && cd database && echo \"").concat(params.schema, "\" >> Schema.js && cd models && echo \"").concat(params["export"], "\" >> index.js && echo \"").concat(params.model, "\" >> Sample.js");
};
/* Es6 Commands */

/*Es5 Commands */


exports.insertSampleEs6DatabaseSetup = insertSampleEs6DatabaseSetup;

var installEs5MongoDependencies = function installEs5MongoDependencies(project_name, params) {
  return "cd ".concat(project_name, " && npm install ").concat(params.dependencies, " --save && npm install ").concat(params.devDependencies, " --save-dev  ");
};

exports.installEs5MongoDependencies = installEs5MongoDependencies;

var insertEs5DatabaseFiles = function insertEs5DatabaseFiles(project_name) {
  return "cd ".concat(project_name, " && cd src && cd database && mkdir models && touch Schema.js && cd models && touch Sample.js");
};

exports.insertEs5DatabaseFiles = insertEs5DatabaseFiles;

var insertSampleEs5DatabaseSetup = function insertSampleEs5DatabaseSetup(project_name, params) {
  return "cd ".concat(project_name, " && cd src && cd database && echo \"").concat(params.schema, "\" >> Schema.js && cd models && echo \"").concat(params.model, "\" >> Sample.js");
};
/*Es5 Commands*/


exports.insertSampleEs5DatabaseSetup = insertSampleEs5DatabaseSetup;