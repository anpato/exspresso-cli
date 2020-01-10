import { exec } from 'child_process'
import { promisify } from 'util'
export default class CommandStack {
  constructor(commands, project_name, params) {
    this.commands = commands
    this.project_name = project_name
    this.params = params
    this.index = 0
    this.execute = promisify(exec)
  }

  async executeCommand() {
    try {
      for (let index = 0; index < this.commands.length; index++) {
        await this.execute(this.commands[index](this.project_name, this.params))
      }
    } catch (error) {
    } finally {
      this.index++
    }
  }
  runQueue() {
    this.executeCommand(this.index)
  }
}
