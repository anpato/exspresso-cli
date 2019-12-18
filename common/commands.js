export const createProjectFolders = project_name =>
  `mdkir ${project_name} && cd ${project_name} && mkdir src && cd src && touch index.js  && mkdir controllers && mkdir routes && mkdir database && mkdir config`

export const initializeGitandNpm = (project_name, params) =>
  `cd ${project_name} && git init && touch .gitignore .env.shared && echo "${params.gitignore}" >> .gitignore && npm init -y`

export const installEs6Dependencies = (project_name, params) =>
  `cd ${project_name} && npm install ${params.dependencies} --save && npm install ${params.devDependencies} --save-dev `

export const insertDatabaseFiles = project_name =>
  `cd ${project_name} && cd src && cd database && mkdir models && touch Schema.js && cd models && touch index.js && touch Sample.js`

export const insertSampleEs6DatabaseSetup = (project_name, params) =>
  `cd ${project_name} && cd src && cd database && echo "${params.schema}" >> Schema.js && cd models && echo "${params.sampleExport}" >> index.js && echo "${params.sampleModel}" >> Sample.js`

export const initializeEs6Controllers = (project_name, params) =>
  `cd ${project_name} && cd controllers && touch SampleController.js && echo "${params.sampleController}" >> SampleController.js`

export const initializeEs6Routers = (project_name, params) =>
  `cd ${project_name} && cd routes && touch SampleRouter.js index.js && echo "${SampleRouterTemplate}" >> SampleRouter.js && cd ../${project_name} && echo "${params.routerTemplate}" >> index.js`
