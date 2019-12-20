import { exec } from 'child_process'
import {
  createMongoProjectFolders,
  initializeGitandNpm,
  installEs6MongoDependencies,
  commonIgnore,
  insertEs6DatabaseFiles,
  insertSampleEs6DatabaseSetup,
  initializeControllers,
  initializeRouters,
  insertDatabaseConfigMongo,
  insertServerConfig
} from '../common'
import {
  PackageScripts,
  SampleControllerEs6,
  SampleModelEs6,
  SampleEs6Export,
  SampleModelRouterEs6,
  SampleRouterEs6,
  BabelTemplate,
  connection,
  serverConfigEs6,
  SampleEs6Schema
} from '../templates/Es6Templates'
import PackageScriptInsertion from '../tools/PackageScriptInsertion'
import { mongodbenv } from '../templates/mongodbenv'

const params = {
  gitignore: commonIgnore,
  dependencies: `express cors sequelize pg dotenv morgan body-parser helmet`,
  devDependencies: `sequelize-cli nodemon --save-dev`,
  controller: SampleControllerEs6,
  routerModelTemplate: SampleModelRouterEs6,
  routerTemplate: SampleRouterEs6,
  serverConfig: serverConfigEs6
}

const CreateSequelizeProjectDirectory = () => {}

export default CreateSequelizeProjectDirectory
