import { exec } from 'child_process'
import { promisify } from 'util'
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
  connection: Es5Connection
}
const CreateMongoProjectDirectoryEs5 = async project_name => {
  console.log()
  const commandsToExec = [
    createMongoProjectFolders(project_name),
    initializeGitandNpm(project_name, params),
    installEs5MongoDependencies(project_name, params),
    insertEs5DatabaseFiles(project_name, params),
    insertSampleEs5DatabaseSetup(project_name, params),
    insertDatabaseConfigMongo(project_name, params),
    insertServerConfig(project_name, params),
    initializeControllers(project_name, params),
    initializeRouters(project_name, params)
    // PackageScriptInsertion(project_name, Es5PackageScripts)
  ]
  const commandStack = new CommandStack(commandsToExec)
  commandStack.runQueue(exec)
  // console.log(command)
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
}

export default CreateMongoProjectDirectoryEs5
