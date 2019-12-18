import inquirer from 'inquirer'
// import util from 'util'
import { exec } from 'child_process'
import { promptForProjectName } from './database_generator/databaseWriter'

function main() {
  inquirer
    .prompt([
      {
        name: 'databaseName',
        message: 'Which DB are you using'
      }
    ])
    .then(answers => {
      if (answers) {
        if (
          answers.databaseName.toLowerCase() === 'mongo' ||
          answers.databaseName.toLowerCase() === 'mongoDB'
        ) {
          inquirer
            .prompt({
              name: 'project_name',
              message: 'What is your projects name?'
            })
            .then(answers => {
              const init_proj = exec(
                `mkdir ${answers.project_name} && cd ${answers.project_name} && npm init -y && npm install express mongoose cors dotenv morgan body-parser`,
                (err, stdout, stderr) => {
                  if (err) throw err
                  console.log('Generating Files')
                }
              )
              init_proj.on('exit', () => {
                exec(
                  `cd ${answers.project_name} && mkdir src && cd src && mkdir controllers && mkdir routes && mkdir database`,
                  (err, stdout, stderr) => {
                    if (err) throw err
                    console.log('Generating Folders')
                  }
                )
              })
            })
        }
      }
    })
}

// main()
promptForProjectName()
