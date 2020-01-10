"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es5ControllerTemplate = void 0;

var Es5ControllerTemplate = function Es5ControllerTemplate(modelName, dialect) {
  if (dialect) {
    return "const { ".concat(modelName, " } = require('../database/Schema')\n    \n    class ").concat(modelName, "Controller {\n \n    }    \n\n    module.exports = ").concat(modelName, "Controller\n    ");
  } else {
    return "// const { SampleModel } = require('../models/Sample')\n\n    class ".concat(modelName, "Controller {\n \n    }    \n    \n    module.exports = ").concat(modelName, "Controller\n    ");
  }
};

exports.Es5ControllerTemplate = Es5ControllerTemplate;