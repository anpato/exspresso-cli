import { expect } from 'chai'
import { exec } from 'child_process'
import { lstatSync, existsSync } from 'fs'
const projectName = 'project-test'
const dir = `${__dirname}/${projectName}`
import {} from './testCommands'
import {} from './testParams'

function createFolders(done) {
  exec(createMongoProjectFolders(projectName), (err, stdout) => {
    null
  }).once('exit', () => done())
}

describe('MongoProject', () => {
  before(done => createFolders(done))
  let params = MongoTestParams
  it('should create a project directory', () => {
    expect(existsSync(__dirname) && lstatSync(dir).isDirectory()).to.equal(true)
  })
  it('should create server config')
  it('should create controllers')
  it('should create routers')
})
