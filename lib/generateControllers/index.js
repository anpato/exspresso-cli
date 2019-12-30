import { exec } from 'child_process'
import chalk from 'chalk'
import { Es6ControllerTemplate } from './Es6ControllerTemplate'
import { Es5ControllerTemplate } from './Es5ControllerTemplate'

const GenerateController = (file, esVersion) => {
  exec(
    `cd src && cd controllers && touch ${file.FileName}Controller.js && echo "${
      esVersion === 'es6'
        ? Es6ControllerTemplate(file.FileName)
        : Es5ControllerTemplate(file.FileName)
    }" >> ${file.FileName}Controller.js`,
    err => {
      if (err) throw err
    }
  ).once('exit', () =>
    console.info(chalk.green(`Created ${file.FileName} controller.`))
  )
}

export default GenerateController
