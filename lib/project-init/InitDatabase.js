import inquirer from 'inquirer'

const DatabaseSetup = (project_name, esVersion, next) => {
  inquirer
    .prompt({
      type: 'list',
      name: 'dialect',
      message: 'What database dialect would you like?',
      choices: ['MongoDB', 'Postgresql']
    })
    .then(({ dialect }) => next(project_name, esVersion, dialect))
}

export { DatabaseSetup }
