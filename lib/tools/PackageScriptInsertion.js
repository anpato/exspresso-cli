import { writeFile, readFileSync } from 'fs'

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
    JSON.stringify(currentPackageJson, null, 2),
    err => {
      if (err) throw err
      console.info('Your project is ready!, have fun!')
    }
  )
}

export default PackageScriptInsertion