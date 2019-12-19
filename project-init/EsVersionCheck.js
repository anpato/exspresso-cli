import inquirer from 'inquirer'

export const EsVersionCheck = (project_name, next) => {
  inquirer
    .prompt({
      type: 'list',
      name: 'esVersion',
      message: `
    Which Javascript standard would you like?
    ES6: Includes Babel to use "import" and "export" statements, comes packaged with a preconfigured .babelrc
    ES5: Using "module.exports" and non arrow functions
    `,
      choices: [
        'ES6'
        // "ES5" // TO BE ADDED IN LATER RELEASE
      ]
    })
    .then(({ esVersion }) => next(project_name, esVersion))
}
