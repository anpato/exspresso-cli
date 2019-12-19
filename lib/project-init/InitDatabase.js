import inquirer from 'inquirer'

const DatabaseSetup = (project_name, esVersion, next) => {
  inquirer
    .prompt({
      type: 'list',
      name: 'dialect',
      message: 'What database dialect would you like?',
      choices: [
        'MongoDB'
        // 'Postgresql' to be added at a later date
      ]
    })
    .then(({ dialect }) => next(project_name, esVersion, dialect))
}

export { DatabaseSetup }
