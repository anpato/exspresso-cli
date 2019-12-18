import { exec } from 'child_process'
import inquirer from 'inquirer'
import { initProjectDirectoryEs6 } from './ES6Dependency'
import { createFoldersForDatabase } from './mongo'

const promptForDatabaseType = project_name => {
  inquirer
    .prompt({
      type: 'list',
      name: 'dbType',
      message: 'Which database would you like to use?',
      choices: ['MongoDB']
    })
    .then(database_selection => {
      console.info('Database Choice: ', database_selection.dbType)
      if (database_selection.dbType === 'MongoDB') {
        createFoldersForDatabase(project_name)
      }
    })
    .then(() => promptForEsVersion(project_name))
}

const promptForEsVersion = project_name => {
  inquirer
    .prompt({
      type: 'list',
      name: 'esType',
      message: 'What version of javascript do you want to use?',
      choices: [
        //'ES5', //To Be added in when es5 templates are complete.
        'ES6'
      ]
    })
    .then(prompt => createProjectFolders(project_name, prompt.esType))
    .then(() => initProjectDirectoryEs6(project_name))
}

const createProjectFolders = (project_name, esVersion) => {
  const foldersCreated = exec(
    `mkdir ${project_name} && cd ${project_name} && mkdir src && cd src && touch index.js  && mkdir controllers && mkdir routes && mkdir database && mkdir config`,
    (err, stdout, stderr) => {
      if (err) throw err
      if (stdout) {
      }
    }
  )
  foldersCreated.once('exit', () => {
    if (prompt.esType.toLowerCase() === 'es6') {
      createFoldersForDatabase
    }
  })
}

export { promptForDatabaseType, createProjectFolders }
