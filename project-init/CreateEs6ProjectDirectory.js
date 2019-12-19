import { exec } from 'child_process'
import {
  createProjectFolders,
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

const params = {
  gitignore: commonIgnore,
  dependencies: `express mongoose cors dotenv morgan body-parser helmet`,
  devDependencies: `@babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/preset-env nodemon --save-dev`,
  schema: SampleEs6Schema,
  babel: BabelTemplate,
  export: SampleEs6Export,
  model: SampleModelEs6,
  controller: SampleControllerEs6,
  routerModelTemplate: SampleModelRouterEs6,
  routerTemplate: SampleRouterEs6,
  serverConfig: serverConfigEs6,
  connection: connection
}

const CreateMongoProjectDirectoryEs6 = project_name => {
  exec(createProjectFolders(project_name), (err, stdout, stderr) => {
    if (err) throw err
    console.info('Creating Project Folders')
  }).once('exit', () =>
    exec(initializeGitandNpm(project_name, params), (err, stdout, stderr) => {
      if (err) throw err
      console.info('Creating empty git repository and initializing npm')
    }).once('exit', () =>
      exec(
        installEs6MongoDependencies(
          project_name,
          params,
          (err, stdout, stderr) => {
            if (err) throw err
            console.info('Installing necessary dependencies')
          }
        )
      ).once('exit', () =>
        exec(
          insertEs6DatabaseFiles(project_name, params),
          (err, stdout, stderr) => {
            if (err) throw err
            console.info('Setting up the database directory')
          }
        ).once('exit', () =>
          exec(insertSampleEs6DatabaseSetup(project_name, params), err => {
            if (err) throw err
            console.info('Creating sample files for your database')
          }).once('exit', () =>
            exec(insertDatabaseConfigMongo(project_name, params), err => {
              if (err) throw err
            })
              .once('exit', () =>
                exec(insertServerConfig(project_name, params), err => {
                  if (err) throw err
                })
              )
              .once('exit', () =>
                exec(initializeControllers(project_name, params), err => {
                  if (err) throw err
                  console.info('Creating Sample Controllers')
                }).once('exit', () =>
                  exec(initializeRouters(project_name, params), err => {
                    if (err) throw err
                    console.info('Creating sample routers')
                  })
                    .once('exit', () =>
                      console.info('Writing scripts to package.json')
                    )
                    .once(
                      'exit',
                      () =>
                        PackageScriptInsertion(project_name, PackageScripts),
                      err => {
                        if (err) throw err
                      }
                    )
                )
              )
          )
        )
      )
    )
  )
}

export default CreateMongoProjectDirectoryEs6