import VerifyDialect from '../tools/VerifyDialect'
import chalk from 'chalk'
import { Es6ModelGenerator } from './Es6ModelGeneratorTemplate'
import { exec } from 'child_process'
import { Es5ModelGeneratorTemplate } from './Es5ModelGeneratorTemplate'

const GenerateModel = (file, esVersion) => {
  if (VerifyDialect()) {
    if (esVersion === 'es6') {
      const model = Es6ModelGenerator(file.FileName, file.args)
      exec(
        `cd src && cd database && cd models && touch ${file.FileName}.js && echo "${model}" >> ${file.FileName}.js && echo " export * from './${file.FileName}' " >> index.js`,
        err => {
          if (err) throw err
        }
      ).once('exit', () =>
        console.info(chalk.green(`Created ${file.FileName} model.`))
      )
    } else if (esVersion === 'es5') {
      const model = Es5ModelGeneratorTemplate(file.args)
      exec(
        `cd src && cd database && cd models && touch ${file.FileName}.js && echo "${model}" >> ${file.FileName}.js`
      ).once('exit', () =>
        console.info(chalk.green(`Created ${file.FileName} model.`))
      )
    }
  } else {
    console.info(
      chalk.red('You must be using mongoose in order to use this feature!')
    )
  }
}

export default GenerateModel
