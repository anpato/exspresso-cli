import { exec } from 'child_process'
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
  SampleModelRouterEs5,
  SampleRouterEs5,
  serverConfigEs5,
  SamplePostgresController
} from '../templates/Es5Templates'
import PackageScriptInsertion from '../tools/PackageScriptInsertion'
import RewriteSequelizeConfig from '../tools/RewriteSequelizeConfig'

const params = {
  gitignore: commonIgnore,
  dependencies: `express cors sequelize pg dotenv morgan body-parser helmet`,
  devDependencies: `sequelize-cli nodemon --save-dev`,
  controller: SamplePostgresController,
  routerModelTemplate: SampleModelRouterEs5,
  routerTemplate: SampleRouterEs5,
  serverConfig: serverConfigEs5
}

const CreateSequelizeProjectDirectory = project_name => {
  exec(createSequelizeProjectFolders(project_name), err => {
    if (err) throw err
  }).once('exit', () =>
    exec(initializeGitandNpm(project_name, params), err => {
      if (err) throw err
    }).once('exit', () =>
      exec(initSequelizeDependencies(project_name, params), err => {
        if (err) throw err
      }).once('exit', () =>
        exec(initSequelizeCli(project_name), err => {
          if (err) throw err
        }).once('exit', () =>
          exec(insertSequelizeServerConfig(project_name, params), err => {
            if (err) throw err
          }).once('exit', () =>
            exec(initializeSequelizeControllers(project_name, params), err => {
              if (err) throw err
            }).once('exit', () =>
              exec(initializeSequelizeRouters(project_name, params), err => {
                if (err) throw err
              }).once('exit', () =>
                RewriteSequelizeConfig(project_name, () =>
                  PackageScriptInsertion(
                    project_name,
                    Es5SequelizePackageScripts
                  )
                )
              )
            )
          )
        )
      )
    )
  )
}

export default CreateSequelizeProjectDirectory
