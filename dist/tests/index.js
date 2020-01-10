"use strict";

var _chai = require("chai");

var _child_process = require("child_process");

var _fs = require("fs");

require("./testCommands");

require("./testParams");

var projectName = 'project-test';
var dir = "".concat(__dirname, "/").concat(projectName);

function createFolders(done) {
  (0, _child_process.exec)(createMongoProjectFolders(projectName), function (err, stdout) {
    null;
  }).once('exit', function () {
    return done();
  });
}

describe('MongoProject', function () {
  before(function (done) {
    return createFolders(done);
  });
  var params = MongoTestParams;
  it('should create a project directory', function () {
    (0, _chai.expect)((0, _fs.existsSync)(__dirname) && (0, _fs.lstatSync)(dir).isDirectory()).to.equal(true);
  });
  it('should create server config');
  it('should create controllers');
  it('should create routers');
});