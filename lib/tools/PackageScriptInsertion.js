import { writeFile, readFileSync } from 'fs'
import path from 'path'

const PackageScriptInsertion = (project_name, PackageScripts) => {
  const currentDir = process.cwd()
  const packageJson = readFileSync(
    `${currentDir}/./${project_name}/package.json`
  )

  const currentPackageJson = JSON.parse(packageJson)
  const newScripts = JSON.parse(PackageScripts)
  currentPackageJson.scripts = { ...currentPackageJson.scripts, ...newScripts }
  writeFile(
    `${currentDir}/./${project_name}/package.json`,
    JSON.stringify(currentPackageJson),
    err => {
      if (err) throw err
      console.info('Your project is ready!, have fun!')
    }
  )
}

export default PackageScriptInsertion
