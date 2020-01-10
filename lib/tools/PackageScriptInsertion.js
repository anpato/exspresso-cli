import { writeFile, readFileSync } from 'fs'
import chalk from 'chalk'
const PackageScriptInsertion = (project_name, params) => {
  const currentDir = process.cwd()
  const packageJson = readFileSync(
    `${currentDir}/./${project_name}/package.json`
  )

  const currentPackageJson = JSON.parse(packageJson)
  const newScripts = JSON.parse(params.PackageScripts)
  currentPackageJson.scripts = { ...currentPackageJson.scripts, ...newScripts }
  writeFile(
    `${currentDir}/./${project_name}/package.json`,
    JSON.stringify(currentPackageJson, null, 2),
    err => {
      if (err) throw err
      console.info(
        chalk.green(
          `Your project is all set up! Thanks for using ${chalk.magenta(
            'exspresso-cli'
          )}.`
        )
      )
    }
  )
}

export default PackageScriptInsertion
