import inquirer from 'inquirer'

export const EsVersionCheck = (project_name, next) => {
  inquirer
    .prompt({
      type: 'list',
      name: 'esVersion',
      message: `Which Javascript standard would you like?

      ES6: Use "Import" and "Export", included .babelrc
      ES5: Using "module.exports" and non arrow functions

    `,
      choices: ['ES6', 'ES5']
    })
    .then(({ esVersion }) => next(project_name, esVersion))
}
