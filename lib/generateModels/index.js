import VerifyDialect from '../tools/VerifyDialect'
import VerifyEsVersion from '../tools/VerifyEsVersion'
import { Es6ModelGenerator } from './Es6ModelGeneratorTemplate'
import { exec } from 'child_process'
import { GenerateModelController } from '../generateControllers'

const ModelGenerator = commands => {
  const dir = process.cwd()
  const esVersion = VerifyEsVersion(dir)
  if (VerifyDialect(dir)) {
    const args = JSON.stringify(...commands.parent.args, null, 2)
    if (esVersion === 'es6') {
      const model = Es6ModelGenerator(commands.model, args)
      exec(
        `cd src && cd database && cd models && touch ${commands.model}.js && echo "${model}" >> ${commands.model}.js && echo " export * from './${commands.model}' " >> index.js`,
        err => {
          if (err) throw err
        }
      ).once('exit', () => GenerateModelController(commands.model))
    }
  }
  // throw 'You must be using mongoose in order to use this feature!'
}

export default ModelGenerator
