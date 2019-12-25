import VerifyDialect from '../tools/VerifyDialect'
import chalk from 'chalk'
import VerifyEsVersion from '../tools/VerifyEsVersion'
import { Es6ModelGenerator } from './Es6ModelGeneratorTemplate'
import { exec } from 'child_process'
import { GenerateModelController } from '../generateControllers'
import { Es5ModelGeneratorTemplate } from './Es5ModelGeneratorTemplate'

const ModelGenerator = commands => {
  const dir = process.cwd()
  const esVersion = VerifyEsVersion(dir)
  if (VerifyDialect(dir)) {
    const FileName = commands.parent.args.splice(commands.parent.args[0], 1)[0]
    const args = JSON.stringify(...commands.parent.args, null, '\n')
    if (esVersion === 'es6') {
      const model = Es6ModelGenerator(FileName, args)
      exec(
        `cd src && cd database && cd models && touch ${FileName}.js && echo "${model}" >> ${FileName}.js && echo " export * from './${FileName}' " >> index.js`,
        err => {
          if (err) throw err
        }
      ).once('exit', () => GenerateModelController(esVersion, FileName))
    } else if (esVersion === 'es5') {
      const model = Es5ModelGeneratorTemplate(args)
      exec(
        `cd src && cd database && cd models && touch ${FileName}.js && echo "${model}" >> ${FileName}.js`
      ).once('exit', () => GenerateModelController(esVersion, FileName))
    }
  } else {
    console.info(
      chalk.red('You must be using mongoose in order to use this feature!')
    )
  }
}

export default ModelGenerator
