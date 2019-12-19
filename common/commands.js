export const createProjectFolders = project_name =>
  `mkdir ${project_name} && cd ${project_name} && mkdir src && cd src && touch index.js  && mkdir controllers && mkdir routes && mkdir database && mkdir config`

export const initializeGitandNpm = (project_name, params) =>
  `cd ${project_name} && git init && touch .gitignore .env.shared && echo "${params.gitignore}" >> .gitignore && npm init -y`

export const installEs6MongoDependencies = (project_name, params) =>
  `cd ${project_name} && npm install ${
    params.dependencies
  } --save && npm install ${
    params.devDependencies
  } --save-dev  && touch .babelrc && echo "${JSON.stringify(
    params.babel
  )}" >> .babelrc`

export const insertDatabaseFiles = project_name =>
  `cd ${project_name} && cd src && cd database && mkdir models && touch Schema.js && cd models && touch index.js && touch Sample.js`

export const insertSampleEs6DatabaseSetup = (project_name, params) =>
  `cd ${project_name} && cd src && cd database && echo "${params.schema}" >> Schema.js && cd models && echo "${params.export}" >> index.js && echo "${params.model}" >> Sample.js`

export const initializeEs6Controllers = (project_name, params) =>
  `cd ${project_name} && cd src && cd controllers && touch SampleController.js && echo "${params.controller}" >> SampleController.js`

export const initializeEs6Routers = (project_name, params) =>
  `cd ${project_name} && cd src && cd routes && touch SampleRouter.js index.js && echo "${params.routerModelTemplate}" >> SampleRouter.js  && echo "${params.routerTemplate}" >> index.js`
