import { readFileSync } from 'fs'

const VerifyEsVersion = () => {
  const currentDir = process.cwd()
  const packageJson = JSON.parse(readFileSync(`${currentDir}/package.json`))
  if (packageJson.devDependencies['@babel/cli']) {
    return 'es6'
  }
  return 'es5'
}

export default VerifyEsVersion
