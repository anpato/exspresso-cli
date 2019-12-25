"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es5ControllerTemplate = void 0;

var Es5ControllerTemplate = function Es5ControllerTemplate(modelName) {
  return "const { ".concat(modelName, " } = require('../database/Schema')\n\nclass ").concat(modelName, "Controller {\n  async show (req, res){\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n\n  async getById (req, res){\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n\n  async create (req, res){\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n\n  async destroy (req, res){\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n\n  async update (req, res){\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n}\n\nmodule.exports = ").concat(modelName, "Controller\n");
};

exports.Es5ControllerTemplate = Es5ControllerTemplate;