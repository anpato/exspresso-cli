import fs from 'fs'
import inquirer from 'inquirer'
import { exec } from 'child_process'

const promptForDatabaseType = project_name => {
  inquirer
    .prompt({
      type: 'list',
      name: 'dbType',
      message: 'Which database would you like to use?',
      choices: ['MongoDB']
    })
    .then(database_selection =>
      console.info('Database Choice: ', database_selection.dbType)
    )
    .then(() => initProjectDirectory(project_name))
}

const promptUserForValidProjectName = () => promptForProjectName()

const promptForProjectName = () => {
  let projectName = null
  inquirer
    .prompt({
      name: 'project_name',
      message: 'What is your projects name?'
    })
    .then(answers => {
      if (answers.project_name) {
        if (answers.project_name.includes(' ')) {
          projectName = answers.project_name.split(' ').join('-')
        } else {
          projectName = answers.project_name
        }
      } else {
        throw 'Invalid Project name!'
      }
    })
    .then(() => console.info('Project Name: ', projectName))
    .then(() => promptForDatabaseType(projectName))
    .catch(() => promptUserForValidProjectName())
}

const initProjectDirectory = project_name => {
  console.info(`Initializing ${project_name}`)
  const init_proj = exec(
    `mkdir ${project_name} && cd ${project_name} && npm init -y && npm install express mongoose cors dotenv morgan body-parser`,
    (err, stdout, stderr) => {
      if (err) throw err
      if (stdout) {
      }
    }
  )
  init_proj.once('exit', () => createProjectFolders(project_name))
}

const createProjectFolders = project_name => {
  console.log('Generating Folders')
  const foldersCreated = exec(
    `cd ${project_name} && touch index.js && mkdir src && cd src && mkdir controllers && mkdir routes && mkdir database`,
    (err, stdout, stderr) => {
      if (err) throw err
      if (stdout) {
      }
    }
  )
  foldersCreated.once('exit', () => createFoldersForDatabase(project_name))
}

const createFoldersForDatabase = project_name => {
  exec(
    `cd ${project_name} && cd src && cd database && mkdir models && touch Schema.js`,
    (err, stdout, stderr) => {
      if (err) throw err
      if (stdout) {
        console.log(stdout)
      }
    }
  )
}

export { promptForProjectName }
