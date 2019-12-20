import CreateMongoProjectDirectoryEs6 from './CreateEs6ProjectDirectory'
import CreateMongoProjectDirectoryEs5 from './CreateEs5ProjectDirectory'

export const DatabaseFolderSetup = (project_name, esVersion, dbType) => {
  if (dbType === 'MongoDB' && esVersion === 'ES6') {
    CreateMongoProjectDirectoryEs6(project_name)
  } else if (dbType === 'MongoDB' && esVersion === 'ES5') {
    CreateMongoProjectDirectoryEs5(project_name)
  } else if(dbType === 'Postgresql')
}
