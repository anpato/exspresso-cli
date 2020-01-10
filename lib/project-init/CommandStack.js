export default class CommandStack {
  constructor(commands) {
    this.commands = commands
    this.index = 0
  }

  get(index) {
    return this.commands[index]
  }
  next(index) {
    return this.commands[index + 1]
  }
  last() {
    return this.commands[this.commands.length - 1]
  }
  runQueue(exec) {
    // while (this.index <= this.commands.length) {
    exec(this.get(this.index)).once('exit', () => {
      this.next(this.index)
      return (this.index += 1)
    })
    console.log(this.index)
    // }

    // console.log(this.commands[this.index])
  }
}
