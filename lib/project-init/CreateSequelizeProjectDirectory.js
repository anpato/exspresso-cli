import {
  initializeGitandNpm,
  commonIgnore,
  initializeSequelizeControllers,
  initializeSequelizeRouters,
  createSequelizeProjectFolders,
  initSequelizeDependencies,
  initSequelizeCli,
  insertSequelizeServerConfig
} from '../common'

import {
  Es5SequelizePackageScripts,
  SequelizeEs5Server,
  SampleEs5Router,
  SampleEs5ModelRouter,
  Es5PostgresController
} from '../templates/Es5Templates'
import PackageScriptInsertion from '../tools/PackageScriptInsertion'
import RewriteSequelizeConfig from '../tools/RewriteSequelizeConfig'
import CommandStack from './CommandStack'

const params = {
  gitignore: commonIgnore,
  dependencies: `express cors sequelize pg dotenv morgan body-parser helmet`,
  devDependencies: `sequelize-cli nodemon --save-dev`,
  controller: Es5PostgresController,
  routerModelTemplate: SampleEs5ModelRouter,
  routerTemplate: SampleEs5Router,
  serverConfig: SequelizeEs5Server,
  Es5SequelizePackageScripts
}

const CreateSequelizeProjectDirectory = project_name => {
  const commands = [
    createSequelizeProjectFolders,
    initializeGitandNpm,
    initSequelizeDependencies,
    initSequelizeCli,
    insertSequelizeServerConfig,
    initializeSequelizeControllers,
    initializeSequelizeRouters,
    RewriteSequelizeConfig,
    PackageScriptInsertion
  ]
  const commandStack = new CommandStack(commands, project_name, params)
  commandStack.runQueue()
}

export default CreateSequelizeProjectDirectory
