"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var commands = _interopRequireWildcard(require("./testCommands"));

require("./testParams");

var _child_process = require("child_process");

var myFunc = function myFunc() {
  for (var command in commands) {
    console.log(command);
  }
};

myFunc();