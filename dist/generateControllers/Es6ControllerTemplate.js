"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es6ControllerTemplate = void 0;

var Es6ControllerTemplate = function Es6ControllerTemplate(modelName) {
  return "import { ".concat(modelName, " } from '../database/Schema'\n\nclass ").concat(modelName, "Controller {\n  show = async (req, res) => {\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n\n  getById = async (req, res) => {\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n\n  create = async (req, res) => {\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n\n  destroy = async (req, res) => {\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n\n  update = async (req, res) => {\n    try {\n      /*\n      Insert Queries Here\n      */\n    } catch (error) {\n      throw error\n    }\n  }\n}\n\nexport default ").concat(modelName, "Controller\n");
};

exports.Es6ControllerTemplate = Es6ControllerTemplate;