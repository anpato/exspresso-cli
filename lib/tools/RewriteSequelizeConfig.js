import { readFileSync, writeFile } from 'fs'

const RewriteSequelizeConfig = project_name => {
  const currentDir = process.cwd()
  const file = fs.readFileSync(__dirname + '/./config/config.json')
  const configFile = JSON.parse(file)
  const newConfig = Object.keys(configFile).map(key => {
    delete configFile[key].username
    delete configFile[key].password
    const DatabaseNames = configFile[key].database.split('_')
    DatabaseNames.splice(0, 1, project_name)
    const config = {
      database: DatabaseNames.join('_'),
      host: configFile[key].host,
      dialect: 'postgres',
      operatorsAliases: configFile[key].operatorsAliases
    }
    return Object.assign(configFile[key], config)
  })
  writeFile(
    `${currentDir}/./${project_name}/config/config.json`,
    JSON.stringify(...newConfig),
    err => {
      if (err) throw err
      console.info('Your Project is ready!')
    }
  )
}

export default RewriteSequelizeConfig
