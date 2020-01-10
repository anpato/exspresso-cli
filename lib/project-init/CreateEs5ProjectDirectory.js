import {
  commonIgnore,
  createMongoProjectFolders,
  initializeGitandNpm,
  insertDatabaseConfigMongo,
  insertServerConfig,
  initializeControllers,
  initializeRouters,
  installEs5MongoDependencies,
  insertEs5DatabaseFiles,
  insertSampleEs5DatabaseSetup
} from '../common'
import {
  Es5Connection,
  Es5PackageScripts,
  Es5Schema,
  Es5Server,
  SampleEs5Controller,
  SampleEs5Model,
  SampleEs5ModelRouter,
  SampleEs5Router
} from '../templates/Es5Templates'
import PackageScriptInsertion from '../tools/PackageScriptInsertion'
import { mongodbenv } from '../templates/mongodbenv'
import CommandStack from './CommandStack'

const params = {
  gitignore: commonIgnore,
  dependencies: `express mongoose cors dotenv morgan body-parser helmet`,
  devDependencies: `nodemon --save-dev`,
  envConfig: mongodbenv,
  schema: Es5Schema,
  model: SampleEs5Model,
  controller: SampleEs5Controller,
  routerModelTemplate: SampleEs5ModelRouter,
  routerTemplate: SampleEs5Router,
  serverConfig: Es5Server,
  connection: Es5Connection,
  Es5PackageScripts
}
const CreateMongoProjectDirectoryEs5 = async project_name => {
  const commandsToExec = [
    createMongoProjectFolders,
    initializeGitandNpm,
    installEs5MongoDependencies,
    insertEs5DatabaseFiles,
    insertSampleEs5DatabaseSetup,
    insertDatabaseConfigMongo,
    insertServerConfig,
    initializeControllers,
    initializeRouters,
    PackageScriptInsertion
  ]
  const commandStack = new CommandStack(commandsToExec, project_name, params)
  commandStack.runQueue()
}

export default CreateMongoProjectDirectoryEs5
