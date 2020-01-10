"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intitializeProject = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

var intitializeProject = function intitializeProject(next) {
  var projectName = null;
  console.info("\n          }   }   {\n        {   {  }  }\n        }   }{  {\n      _{  }{  }  }_\n      (  }{  }{  {  )\n      |\"\"---------\"\"|                \n      |             /\"\"             \n      |            | _  |            \n      |             / | |            \n      |             |/  |    -Bungle-\n      |             /  /             \n      |            |  /              \n      |              |             \n      \"\"-----------\"\"\n      \n    WELCOME TO EXSPRESSO\n    --------------------\n  ");

  _inquirer["default"].prompt({
    name: 'project',
    message: "What's the name of your project?"
  }).then(function (_ref) {
    var project = _ref.project;

    if (project.includes(' ')) {
      projectName = project.split(' ').join('-');
      next(projectName);
    } else {
      projectName = project;
      next(projectName);
    }
  });
};

exports.intitializeProject = intitializeProject;