import { exec } from 'child_process'
import { commonIgnore } from '../common'
import { PackageScripts, BabelTemplate } from '../templates/Es6Templates'
import { writeFile, readFileSync } from 'fs'
import { SampleController } from '../templates/Es6Templates'

export const initProjectDirectoryEs6 = (project_name, next) => {
  const init_proj = exec(
    `cd ${project_name} && git init && touch .gitignore && echo "${commonIgnore}" >> .gitignore && npm init -y`,
    (err, stdout, stderr) => {
      if (err) throw err
    }
  )
  init_proj.once('exit', () => installEs6Dependencies(project_name, next))
}

export const installEs6Dependencies = (project_name, next) => {
  next(project_name)
  const packageJson = readFileSync(
    __dirname + `/../${project_name}/package.json`
  )
  const currentPackageJson = JSON.parse(packageJson)
  const newScripts = JSON.parse(PackageScripts)
  currentPackageJson.scripts = { ...currentPackageJson.scripts, ...newScripts }
  writeFile(
    __dirname + `/../${project_name}/package.json`,
    JSON.stringify(currentPackageJson),
    err => {
      if (err) throw err
    }
  )
  const dependencies = exec(
    `cd ${project_name} && npm install express mongoose cors dotenv morgan body-parser `,
    (err, stdout, stderr) => {
      if (err) throw err
    }
  )

  dependencies.once('exit', () =>
    exec(
      `cd ${project_name} && npm install @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/preset-env nodemon --save-dev  &&  echo "${JSON.stringify(
        BabelTemplate
      )}" >> .babelrc`,
      (err, stdout, stderr) => {
        if (err) throw err
      }
    ).once('exit', () => createSampleController(project_name))
  )
}

const createSampleController = project_name => {
  exec(
    `cd ${project_name} && cd controllers && touch SampleController.js && echo "${SampleController}" >> SampleController.js`
  ).once('exit', () => createSampleRouter(project_name))
}

const createSampleRouter = project_name => {
  exec(
    `cd ${project_name} && cd routes && touch SampleRouter.js index.js && echo "${SampleRouterTemplate}" >> SampleRouter.js && cd ../${project_name} && echo "${Es6RouterTemplate}" >> index.js`
  ).once('exit', () => console.log('Done'))
}
