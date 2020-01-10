"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeSequelizeRouters = exports.initializeSequelizeControllers = exports.insertSequelizeServerConfig = exports.initSequelizeCli = exports.initSequelizeDependencies = exports.createSequelizeProjectFolders = exports.installEs5MongoDependencies = exports.insertDatabaseConfigMongo = exports.createMongoProjectFolders = exports.insertSampleEs5DatabaseSetup = exports.insertEs5DatabaseFiles = exports.insertSampleEs6DatabaseSetup = exports.insertEs6DatabaseFiles = exports.installEs6MongoDependencies = exports.initializeRouters = exports.initializeControllers = exports.insertServerConfig = exports.initializeGitandNpm = void 0;

/* Common Commands */
var initializeGitandNpm = function initializeGitandNpm(project_name, params) {
  console.info('Initializing empty git repository and initializing npm');
  return "cd lib && cd tests && cd ".concat(project_name, " && git init && touch .gitignore .env.shared .env && echo \"").concat(params.gitignore, "\" >> .gitignore && npm init -y");
};

exports.initializeGitandNpm = initializeGitandNpm;

var insertServerConfig = function insertServerConfig(project_name, params) {
  console.info('Creating Server Config File');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd src && echo \"").concat(params.serverConfig, "\" >> index.js");
};

exports.insertServerConfig = insertServerConfig;

var initializeControllers = function initializeControllers(project_name, params) {
  console.info('Initializing controllers');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd src && cd controllers && touch SampleController.js && echo \"").concat(params.controller, "\" >> SampleController.js");
};

exports.initializeControllers = initializeControllers;

var initializeRouters = function initializeRouters(project_name, params) {
  console.info('Creating routers');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd src && cd routes && touch SampleRouter.js index.js && echo \"").concat(params.routerModelTemplate, "\" >> SampleRouter.js  && echo \"").concat(params.routerTemplate, "\" >> index.js");
};
/* Common Commands */

/* Es6 Commands */


exports.initializeRouters = initializeRouters;

var installEs6MongoDependencies = function installEs6MongoDependencies(project_name, params) {
  console.info('Installing dependencies');
  return "cd lib && cd tests && cd ".concat(project_name, " && npm install ").concat(params.dependencies, " --save && npm install ").concat(params.devDependencies, " --save-dev  && touch .babelrc && echo \"").concat(JSON.stringify(params.babel), "\" >> .babelrc && echo \"").concat(params.envConfig, "\" >> .env.shared && echo \"").concat(params.envConfig, "\" >> .env ");
};

exports.installEs6MongoDependencies = installEs6MongoDependencies;

var insertEs6DatabaseFiles = function insertEs6DatabaseFiles(project_name) {
  console.info('Creating sample database files');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd src && cd database && mkdir models && touch Schema.js && cd models && touch index.js && touch Sample.js");
};

exports.insertEs6DatabaseFiles = insertEs6DatabaseFiles;

var insertSampleEs6DatabaseSetup = function insertSampleEs6DatabaseSetup(project_name, params) {
  console.info('Settting up database files');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd src && cd database && echo \"").concat(params.schema, "\" >> Schema.js && cd models && echo \"").concat(params["export"], "\" >> index.js && echo \"").concat(params.model, "\" >> Sample.js");
};
/* Es6 Commands */

/*Es5 Commands */


exports.insertSampleEs6DatabaseSetup = insertSampleEs6DatabaseSetup;

var insertEs5DatabaseFiles = function insertEs5DatabaseFiles(project_name) {
  console.info('Creating sample database files');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd src && cd database && mkdir models && touch Schema.js && cd models && touch Sample.js");
};

exports.insertEs5DatabaseFiles = insertEs5DatabaseFiles;

var insertSampleEs5DatabaseSetup = function insertSampleEs5DatabaseSetup(project_name, params) {
  console.info('Settting up database files');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd src && cd database && echo \"").concat(params.schema, "\" >> Schema.js && cd models && echo \"").concat(params.model, "\" >> Sample.js");
};
/*Es5 Commands*/

/* MongoType Commands */


exports.insertSampleEs5DatabaseSetup = insertSampleEs5DatabaseSetup;

var createMongoProjectFolders = function createMongoProjectFolders(project_name) {
  console.info('Settting up mongo project folders');
  return "cd lib && cd tests && mkdir ".concat(project_name, " && cd ").concat(project_name, " && mkdir src && cd src && touch index.js  && mkdir controllers && mkdir routes && mkdir database && mkdir config");
};

exports.createMongoProjectFolders = createMongoProjectFolders;

var insertDatabaseConfigMongo = function insertDatabaseConfigMongo(project_name, params) {
  console.info('Creating mongo database config');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd src && cd config && touch index.js && echo \"").concat(params.connection, "\" >> index.js");
};

exports.insertDatabaseConfigMongo = insertDatabaseConfigMongo;

var installEs5MongoDependencies = function installEs5MongoDependencies(project_name, params) {
  console.info('Installing dependencies for mongoDB');
  return "cd lib && cd tests && cd ".concat(project_name, " && npm install ").concat(params.dependencies, " --save && npm install ").concat(params.devDependencies, " --save-dev  ");
};
/* MongoType Commands */

/* PostgresType Commands*/


exports.installEs5MongoDependencies = installEs5MongoDependencies;

var createSequelizeProjectFolders = function createSequelizeProjectFolders(project_name) {
  console.info('Creating postgres folders');
  return "cd lib && cd tests && mkdir ".concat(project_name, " && cd ").concat(project_name, " && touch index.js  && mkdir controllers && mkdir routes");
};

exports.createSequelizeProjectFolders = createSequelizeProjectFolders;

var initSequelizeDependencies = function initSequelizeDependencies(project_name, params) {
  console.info('Installing postgres dependencies');
  return "cd lib && cd tests && cd ".concat(project_name, " && npm install ").concat(params.dependencies, " --save && npm install ").concat(params.devDependencies, " --save-dev  ");
};

exports.initSequelizeDependencies = initSequelizeDependencies;

var initSequelizeCli = function initSequelizeCli(project_name) {
  console.info('Initializing sequelize-cli');
  return "cd lib && cd tests && cd ".concat(project_name, " && npx sequelize-cli init");
};

exports.initSequelizeCli = initSequelizeCli;

var insertSequelizeServerConfig = function insertSequelizeServerConfig(project_name, params) {
  console.info('Creating server config');
  return "cd lib && cd tests && cd ".concat(project_name, " && echo \"").concat(params.serverConfig, "\" >> index.js");
};

exports.insertSequelizeServerConfig = insertSequelizeServerConfig;

var initializeSequelizeControllers = function initializeSequelizeControllers(project_name, params) {
  console.info('Creating controllers');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd controllers && touch SampleController.js && echo \"").concat(params.controller, "\" >> SampleController.js");
};

exports.initializeSequelizeControllers = initializeSequelizeControllers;

var initializeSequelizeRouters = function initializeSequelizeRouters(project_name, params) {
  console.info('Creating routers');
  return "cd lib && cd tests && cd ".concat(project_name, " && cd routes && touch SampleRouter.js index.js && echo \"").concat(params.routerModelTemplate, "\" >> SampleRouter.js  && echo \"").concat(params.routerTemplate, "\" >> index.js");
};
/* Postgres Commands*/


exports.initializeSequelizeRouters = initializeSequelizeRouters;