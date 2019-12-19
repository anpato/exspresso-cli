import { CreateMongoProjectDirectoryEs6 } from './CreateProjectDirectory'

export const DatabaseFolderSetup = (project_name, esVersion, dbType) => {
  console.log('Name', project_name, 'dialect', dbType, esVersion)
  if (dbType === 'MongoDB' && esVersion === 'ES6') {
    CreateMongoProjectDirectoryEs6(project_name)
  }
}
