import { exec } from 'child_process'
import chalk from 'chalk'
import { Es6ControllerTemplate } from './Es6ControllerTemplate'
import { Es5ControllerTemplate } from './Es5ControllerTemplate'

export const GenerateModelController = (esVersion, modelName) => {
  exec(
    `cd src && cd controllers && touch ${modelName}Controller.js && echo "${
      esVersion === 'es6'
        ? Es6ControllerTemplate(modelName)
        : Es5ControllerTemplate(modelName)
    }" >> ${modelName}Controller.js`,
    err => {
      if (err) throw err
    }
  ).once('exit', () =>
    console.info(
      chalk.green(
        `Generated ${modelName} model file and ${modelName} controller`
      )
    )
  )
}
