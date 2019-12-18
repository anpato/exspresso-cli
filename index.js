import inquirer from 'inquirer'
// import util from 'util'
import { exec } from 'child_process'
import { promptForProjectName } from './database_generator/databaseWriter'

promptForProjectName()
