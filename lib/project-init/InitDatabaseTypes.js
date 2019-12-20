import CreateMongoProjectDirectoryEs6 from './CreateEs6ProjectDirectory'
import CreateMongoProjectDirectoryEs5 from './CreateEs5ProjectDirectory'
import CreateSequelizeProjectDirectory from './CreateSequelizeProjectDirectory'

export const DatabaseFolderSetup = (project_name, esVersion, dbType) => {
  if (dbType === 'MongoDB' && esVersion === 'ES6') {
    CreateMongoProjectDirectoryEs6(project_name)
  } else if (dbType === 'MongoDB' && esVersion === 'ES5') {
    CreateMongoProjectDirectoryEs5(project_name)
  } else if (dbType === 'Postgresql' && esVersion === 'Es6') {
    console.info(
      'Es6 is unsupported for Postgres config at this time, using Es5 instead.'
    )
    CreateSequelizeProjectDirectory(project_name)
  } else {
    CreateSequelizeProjectDirectory(project_name)
  }
}
