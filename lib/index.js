#!/usr/bin/env node
import { ExpressoInit } from './project-init'
import commander from 'commander'

commander.version('1.0.0').description('Exspresso-Cli')

commander
  .command('init')
  .alias('i')
  .description('Initialize Exspresso')
  .action(() => ExpressoInit())

commander.parse(process.argv)
