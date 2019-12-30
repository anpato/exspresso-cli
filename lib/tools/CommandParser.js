export const CommandParser = (commands, next) => {
  const FileName = commands.args.splice(commands.args[0], 1)[0]
  const args = JSON.stringify(...commands.args, null, '\n')
  const file = { FileName, args }
  return next(file)
}
