#!/usr/bin/env node
import { ExpressoInit } from './project-init'
import commander from 'commander'
import { CommandParser } from './tools/CommandParser'
import GenerateModel from './generateModels'
import VerifyEsVersion from './tools/VerifyEsVersion'
import GenerateController from './generateControllers'
import VerifyDialect from './tools/VerifyDialect'
import chalk from 'chalk'

commander.version('1.0.0').description('Exspresso-Cli')

commander
  .command('init')
  .alias('i')
  .description('Initialize Exspresso')
  .action(() => ExpressoInit())
commander
  .option('-m, --model', '<modelname>', '(key:value)')
  .option('-c, --controller', '<controllername>', 'Generate Model Controller')
  .action((args, cmdObj) => {
    const esVersion = VerifyEsVersion()
    const dialect = VerifyDialect()
    if (args['controller']) {
      CommandParser(args, file => GenerateController(file, esVersion, dialect))
    } else if (args['model'] && dialect) {
      CommandParser(args, file => GenerateModel(file, esVersion))
    }
  })
commander.parse(process.argv)
