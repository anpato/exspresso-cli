import { readFileSync } from 'fs'

const VerifyDialect = () => {
  const currentDir = process.cwd()
  const packageJson = JSON.parse(readFileSync(`${currentDir}/package.json`))
  if (packageJson.dependencies['mongoose']) {
    return true
  }
  return false
}

export default VerifyDialect
