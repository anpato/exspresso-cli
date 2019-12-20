import { exec } from 'child_process'
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
const CreateMongoProjectDirectoryEs5 = project_name => {
  exec(createMongoProjectFolders(project_name), (err, stdout, stderr) => {
    if (err) throw err
    console.info('Creating Project Folders')
  }).once('exit', () =>
    exec(initializeGitandNpm(project_name, params), (err, stdout, stderr) => {
      if (err) throw err
      console.info('Creating empty git repository and initializing npm')
    }).once('exit', () =>
      exec(
        installEs5MongoDependencies(
          project_name,
          params,
          (err, stdout, stderr) => {
            if (err) throw err
            console.info('Installing necessary dependencies')
          }
        )
      ).once('exit', () =>
        exec(
          insertEs5DatabaseFiles(project_name, params),
          (err, stdout, stderr) => {
            if (err) throw err
            console.info('Setting up the database directory')
          }
        ).once('exit', () =>
          exec(insertSampleEs5DatabaseSetup(project_name, params), err => {
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
                        PackageScriptInsertion(project_name, Es5PackageScripts),
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

export default CreateMongoProjectDirectoryEs5
