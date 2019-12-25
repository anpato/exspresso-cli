import { readFile, readFileSync } from 'fs'

const VerifyDialect = currentDir => {
  const packageJson = JSON.parse(readFileSync(`${currentDir}/package.json`))
  if (packageJson.dependencies['mongoose']) {
    return true
  }
  return false
}

export default VerifyDialect
