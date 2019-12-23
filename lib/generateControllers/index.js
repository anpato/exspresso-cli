import { exec } from 'child_process'
import { Es6ControllerTemplate } from './Es6ControllerTemplate'

export const GenerateModelController = modelName => {
  exec(
    `cd test && cd src && cd controllers && touch ${modelName}Controller.js && echo "${Es6ControllerTemplate(
      modelName
    )}" >> ${modelName}Controller.js`,
    err => {
      if (err) throw err
    }
  ).once('exit', () =>
    console.info(`Generated ${modelName} model file and controller`)
  )
}
