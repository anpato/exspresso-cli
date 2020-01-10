import { exec } from 'child_process'
import chalk from 'chalk'
import { Es6ControllerTemplate } from './Es6ControllerTemplate'
import { Es5ControllerTemplate } from './Es5ControllerTemplate'

const GenerateController = (file, esVersion, dialect) => {
  if (dialect) {
    return exec(
      `cd src && cd controllers&& touch ${
        file.FileName
      }Controller.js && echo "${
        esVersion === 'es6'
          ? Es6ControllerTemplate(file.FileName)
          : Es5ControllerTemplate(file.FileName, dialect)
      }" >> ${file.FileName}Controller.js`,
      err => {
        if (err) throw err
      }
    ).once('exit', () =>
      console.info(chalk.green(`Created ${file.FileName} controller.`))
    )
  } else {
    return exec(
      `cd controllers&& touch ${
        file.FileName
      }Controller.js && echo "${Es5ControllerTemplate(
        file.FileName,
        dialect
      )}" >> ${file.FileName}Controller.js`,
      err => {
        if (err) throw err
      }
    ).once('exit', () =>
      console.info(chalk.green(`Created ${file.FileName} controller.`))
    )
  }
}

export default GenerateController
