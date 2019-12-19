import { exec } from 'child_process'
import {
  createProjectFolders,
  initializeGitandNpm,
  installEs6MongoDependencies,
  commonIgnore,
  insertDatabaseFiles,
  insertSampleEs6DatabaseSetup,
  initializeEs6Controllers,
  initializeEs6Routers,
  insertDatabaseConfigMongo,
  insertServerConfig
} from '../common'
import {
  SampleControllerTemplateEs6,
  SampleModelTemplateEs6,
  SampleEs6Export,
  SampleModelRouterTemplateEs6,
  SampleRouterTemplateEs6,
  SampleEs6Schema,
  BabelTemplate,
  connection,
  serverConfig
} from '../templates/Es6Templates'
import { Es6PackageScriptInsertion } from '../tools'

const params = {
  gitIgnore: commonIgnore,
  dependencies: `express mongoose cors dotenv morgan body-parser helmet`,
  devDependencies: `@babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/preset-env nodemon --save-dev`,
  schema: SampleEs6Schema,
  babel: BabelTemplate,
  export: SampleEs6Export,
  model: SampleModelTemplateEs6,
  controller: SampleControllerTemplateEs6,
  routerModelTemplate: SampleModelRouterTemplateEs6,
  routerTemplate: SampleRouterTemplateEs6,
  serverConfig: serverConfig,
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
          insertDatabaseFiles(project_name, params),
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
                exec(initializeEs6Controllers(project_name, params), err => {
                  if (err) throw err
                  console.info('Creating Sample Controllers')
                }).once('exit', () =>
                  exec(initializeEs6Routers(project_name, params), err => {
                    if (err) throw err
                    console.info('Creating sample routers')
                  })
                    .once('exit', () =>
                      console.info('Writing scripts to package.json')
                    )
                    .once(
                      'exit',
                      () => Es6PackageScriptInsertion(project_name),
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

export { CreateMongoProjectDirectoryEs6 }
