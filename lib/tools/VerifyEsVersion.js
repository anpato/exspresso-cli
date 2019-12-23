import { readFile, readFileSync } from 'fs'

const VerifyEsVersion = currentDir => {
  const packageJson = JSON.parse(
    readFileSync(`${currentDir}/./test/package.json`)
  )
  if (packageJson.devDependencies['@babel/cli']) {
    return 'es6'
  }
  return 'es5'
}

export default VerifyEsVersion
