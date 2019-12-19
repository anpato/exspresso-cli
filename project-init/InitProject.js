import inquirer from 'inquirer'

export const intitializeProject = next => {
  let projectName = null
  inquirer
    .prompt({
      name: 'project',
      message: "What's the name of your project?"
    })
    .then(({ project }) => {
      if (project.includes(' ')) {
        projectName = project.split(' ').join('-')
        next(projectName)
      } else {
        projectName = project
        next(projectName)
      }
    })
}
