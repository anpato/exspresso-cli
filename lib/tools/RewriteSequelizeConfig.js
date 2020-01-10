import { readFileSync, writeFileSync } from 'fs'

const RewriteSequelizeConfig = (project_name, next) => {
  const currentDir = process.cwd()
  const file = readFileSync(
    currentDir + `/./${project_name}/config/config.json`
  )
  let newConfig = {}
  let underscoredProjectName = project_name.includes('-')
    ? project_name.split('-').join('_')
    : project_name
  const configFile = JSON.parse(file)
  Object.keys(configFile).forEach(key => {
    delete configFile[key].username
    delete configFile[key].password
    const DatabaseNames = configFile[key].database.split('_')
    DatabaseNames.splice(0, 1, underscoredProjectName)
    const config = {
      [key]: {
        database: DatabaseNames.join('_'),
        host: configFile[key].host,
        dialect: 'postgres',
        operatorsAliases: configFile[key].operatorsAliases
      }
    }
    Object.assign(newConfig, { ...config })
  })
  writeFileSync(
    `${currentDir}/./${project_name}/config/config.json`,
    JSON.stringify(newConfig, null, 2),
    err => {
      if (err) throw err
    }
  )
}

export default RewriteSequelizeConfig
