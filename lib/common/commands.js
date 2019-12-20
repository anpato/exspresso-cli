/* Common Commands */

export const initializeGitandNpm = (project_name, params) => {
  console.info('Initializing empty git repository and initializing npm')
  return `cd ${project_name} && git init && touch .gitignore .env.shared .env && echo "${params.gitignore}" >> .gitignore && npm init -y`
}

export const insertServerConfig = (project_name, params) => {
  console.info('Creating Server Config File')
  return `cd ${project_name} && cd src && echo "${params.serverConfig}" >> index.js`
}

export const initializeControllers = (project_name, params) => {
  console.info('Initializing controllers')
  return `cd ${project_name} && cd src && cd controllers && touch SampleController.js && echo "${params.controller}" >> SampleController.js`
}

export const initializeRouters = (project_name, params) => {
  console.info('Creating routers')
  return `cd ${project_name} && cd src && cd routes && touch SampleRouter.js index.js && echo "${params.routerModelTemplate}" >> SampleRouter.js  && echo "${params.routerTemplate}" >> index.js`
}

/* Common Commands */

/* Es6 Commands */
export const installEs6MongoDependencies = (project_name, params) => {
  console.info('Installing dependencies')
  return `cd ${project_name} && npm install ${
    params.dependencies
  } --save && npm install ${
    params.devDependencies
  } --save-dev  && touch .babelrc && echo "${JSON.stringify(
    params.babel
  )}" >> .babelrc && echo "${params.envConfig}" >> .env.shared && echo "${
    params.envConfig
  }" >> .env `
}
export const insertEs6DatabaseFiles = project_name => {
  console.info('Creating sample database files')
  return `cd ${project_name} && cd src && cd database && mkdir models && touch Schema.js && cd models && touch index.js && touch Sample.js`
}

export const insertSampleEs6DatabaseSetup = (project_name, params) => {
  console.info('Settting up database files')
  return `cd ${project_name} && cd src && cd database && echo "${params.schema}" >> Schema.js && cd models && echo "${params.export}" >> index.js && echo "${params.model}" >> Sample.js`
}

/* Es6 Commands */

/*Es5 Commands */

export const insertEs5DatabaseFiles = project_name => {
  console.info('Creating sample database files')
  return `cd ${project_name} && cd src && cd database && mkdir models && touch Schema.js && cd models && touch Sample.js`
}

export const insertSampleEs5DatabaseSetup = (project_name, params) => {
  console.info('Settting up database files')
  return `cd ${project_name} && cd src && cd database && echo "${params.schema}" >> Schema.js && cd models && echo "${params.model}" >> Sample.js`
}

/*Es5 Commands*/

/* MongoType Commands */
export const createMongoProjectFolders = project_name => {
  console.info('Settting up mongo project folders')
  return `mkdir ${project_name} && cd ${project_name} && mkdir src && cd src && touch index.js  && mkdir controllers && mkdir routes && mkdir database && mkdir config`
}

export const insertDatabaseConfigMongo = (project_name, params) => {
  console.info('Creating mongo database config')
  return `cd ${project_name} && cd src && cd config && touch index.js && echo "${params.connection}" >> index.js`
}

export const installEs5MongoDependencies = (project_name, params) => {
  console.info('Installing dependencies for mongoDB')
  return `cd ${project_name} && npm install ${params.dependencies} --save && npm install ${params.devDependencies} --save-dev  `
}

/* MongoType Commands */

/* PostgresType Commands*/
export const createSequelizeProjectFolders = project_name => {
  console.info('Creating postgres folders')
  return `mkdir ${project_name} && cd ${project_name} && touch index.js  && mkdir controllers && mkdir routes`
}

export const initSequelizeDependencies = (project_name, params) => {
  console.info('Installing postgres dependencies')
  return `cd ${project_name} && npm install ${params.dependencies} --save && npm install ${params.devDependencies} --save-dev  `
}

export const initSequelizeCli = project_name => {
  console.info('Initializing sequelize-cli')
  return `cd ${project_name} && npx sequelize-cli init`
}

export const insertSequelizeServerConfig = (project_name, params) => {
  console.info('Creating server config')
  return `cd ${project_name} && echo "${params.serverConfig}" >> index.js`
}

export const initializeSequelizeControllers = (project_name, params) => {
  console.info('Creating controllers')
  return `cd ${project_name} && cd controllers && touch SampleController.js && echo "${params.controller}" >> SampleController.js`
}

export const initializeSequelizeRouters = (project_name, params) => {
  console.info('Creating routers')
  return `cd ${project_name} && cd routes && touch SampleRouter.js index.js && echo "${params.routerModelTemplate}" >> SampleRouter.js  && echo "${params.routerTemplate}" >> index.js`
}

/* Postgres Commands*/
