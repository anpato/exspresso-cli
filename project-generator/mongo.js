import { exec } from 'child_process'
import {
  SampleExportTemplate,
  SampleModelTemplate
} from '../templates/Es6Templates'

export const createFoldersForDatabase = project_name => {
  console.info('Creating folders for database')
  exec(
    `cd ${project_name} && cd src && cd database && mkdir models && touch Schema.js && cd models && touch index.js && touch Sample.js`,
    (err, stdout, stderr) => {
      if (err) throw err
      if (stdout) {
      }
    }
  )
}
