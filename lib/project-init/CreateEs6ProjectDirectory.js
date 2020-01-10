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
import CommandStack from './CommandStack'

const params = {
  gitignore: commonIgnore,
  dependencies: `express mongoose cors dotenv morgan body-parser helmet`,
  devDependencies: `@babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/preset-env nodemon --save-dev`,
  schema: SampleEs6Schema,
  envConfig: mongodbenv,
  babel: BabelTemplate,
  export: SampleEs6Export,
  model: SampleModelEs6,
  controller: SampleControllerEs6,
  routerModelTemplate: SampleModelRouterEs6,
  routerTemplate: SampleRouterEs6,
  serverConfig: serverConfigEs6,
  connection: connection,
  PackageScripts
}

const CreateMongoProjectDirectoryEs6 = project_name => {
  const commands = [
    createMongoProjectFolders,
    initializeGitandNpm,
    installEs6MongoDependencies,
    insertEs6DatabaseFiles,
    insertSampleEs6DatabaseSetup,
    insertDatabaseConfigMongo,
    insertServerConfig,
    initializeControllers,
    initializeRouters,
    PackageScriptInsertion
  ]
  const commandStack = new CommandStack(commands, project_name, params)
  commandStack.runQueue()
}

export default CreateMongoProjectDirectoryEs6
