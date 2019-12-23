#!/usr/bin/env node
import { ExpressoInit } from './project-init'
import commander from 'commander'
import generateModels from './generateModels'

commander.version('1.0.0').description('Exspresso-Cli')

commander
  .command('init')
  .alias('i')
  .description('Initialize Exspresso')
  .action(() => ExpressoInit())
commander
  .command('generate')
  .alias('--g')
  .description('Generate ModelFile with fields, creates model controller')
  .option('--model <modelname>', '(key:value)')
  .action((args, cmdObj) => generateModels(args))
// generateModels()
commander.parse(process.argv)
