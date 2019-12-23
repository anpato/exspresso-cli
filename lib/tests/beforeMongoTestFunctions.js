import * as commands from './testCommands'
import {} from './testParams'
import { exec } from 'child_process'

// export const MakeDir = (project_name, done) => {
//   exec(commands.createMongoProjectFolders(project_name), null).on('exit', () =>
//     done()
//   )
// }

// export const CreateNpmAndGit = (project_name, done) => {
//   exec()
// }
const myFunc = () => {
  for (let command in commands) {
    console.log(command)
  }
}
myFunc()
