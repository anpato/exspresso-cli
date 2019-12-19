import { writeFile, readFileSync } from 'fs'

const PackageScriptInsertion = (project_name, PackageScripts) => {
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

export default PackageScriptInsertion
