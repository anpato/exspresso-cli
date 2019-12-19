/* Common Commands */
export const createProjectFolders = project_name =>
  `mkdir ${project_name} && cd ${project_name} && mkdir src && cd src && touch index.js  && mkdir controllers && mkdir routes && mkdir database && mkdir config`

export const initializeGitandNpm = (project_name, params) =>
  `cd ${project_name} && git init && touch .gitignore .env.shared && echo "${params.gitignore}" >> .gitignore && npm init -y`

export const insertDatabaseConfigMongo = (project_name, params) =>
  `cd ${project_name} && cd src && cd config && touch index.js && echo "${params.connection}" >> index.js`

export const insertServerConfig = (project_name, params) =>
  `cd ${project_name} && cd src && echo "${params.serverConfig}" >> index.js`

export const initializeControllers = (project_name, params) =>
  `cd ${project_name} && cd src && cd controllers && touch SampleController.js && echo "${params.controller}" >> SampleController.js`

export const initializeRouters = (project_name, params) =>
  `cd ${project_name} && cd src && cd routes && touch SampleRouter.js index.js && echo "${params.routerModelTemplate}" >> SampleRouter.js  && echo "${params.routerTemplate}" >> index.js`

/* Common Commands */

/* Es6 Commands */
export const installEs6MongoDependencies = (project_name, params) =>
  `cd ${project_name} && npm install ${
    params.dependencies
  } --save && npm install ${
    params.devDependencies
  } --save-dev  && touch .babelrc && echo "${JSON.stringify(
    params.babel
  )}" >> .babelrc`

export const insertEs6DatabaseFiles = project_name =>
  `cd ${project_name} && cd src && cd database && mkdir models && touch Schema.js && cd models && touch index.js && touch Sample.js`

export const insertSampleEs6DatabaseSetup = (project_name, params) =>
  `cd ${project_name} && cd src && cd database && echo "${params.schema}" >> Schema.js && cd models && echo "${params.export}" >> index.js && echo "${params.model}" >> Sample.js`

/* Es6 Commands */

/*Es5 Commands */
export const installEs5MongoDependencies = (project_name, params) =>
  `cd ${project_name} && npm install ${params.dependencies} --save && npm install ${params.devDependencies} --save-dev  `

export const insertEs5DatabaseFiles = project_name =>
  `cd ${project_name} && cd src && cd database && mkdir models && touch Schema.js && cd models && touch Sample.js`

export const insertSampleEs5DatabaseSetup = (project_name, params) =>
  `cd ${project_name} && cd src && cd database && echo "${params.schema}" >> Schema.js && cd models && echo "${params.model}" >> Sample.js`

/*Es5 Commands*/
