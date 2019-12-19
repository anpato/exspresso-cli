import { PackageScripts } from '../templates/Es6Templates'
import { writeFile, readFileSync } from 'fs'

export const Es6PackageScriptInsertion = project_name => {
  const packageJson = readFileSync(
    __dirname + `/../${project_name}/package.json`
  )

  const currentPackageJson = JSON.parse(packageJson)
  const newScripts = JSON.parse(PackageScripts)
  currentPackageJson.scripts = { ...currentPackageJson.scripts, ...newScripts }
  writeFile(
    __dirname + `/../${project_name}/package.json`,
    JSON.stringify(currentPackageJson),
    err => {
      if (err) throw err
      console.info('Your project is ready!, have fun!')
    }
  )
}
