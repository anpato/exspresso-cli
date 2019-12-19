import { intitializeProject } from './InitProject'
import { EsVersionCheck } from './EsVersionCheck'
import { DatabaseSetup } from './InitDatabase'
import { DatabaseFolderSetup } from './InitDatabaseTypes'

const main = () => {
  intitializeProject(project_name =>
    EsVersionCheck(project_name, (project_name, esVersion) =>
      DatabaseSetup(
        project_name,
        esVersion,
        (project_name, esVersion, dialect) =>
          DatabaseFolderSetup(project_name, esVersion, dialect)
      )
    )
  )
}
export { main as ExpressoInit }
