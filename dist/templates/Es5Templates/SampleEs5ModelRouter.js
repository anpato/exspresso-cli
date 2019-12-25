"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleEs5ModelRouter = void 0;
var SampleEs5ModelRouter = "const SampleRouter = require('express').Router()\nconst SampleController = require('../controllers/SampleController')\n\nconst sampleController = new SampleController()\n\nSampleRouter.get('/', sampleController.show)\nSampleRouter.get('/:sample_id', sampleController.getById)\nSampleRouter.put('/:sample_id', sampleController.update)\nSampleRouter.post('/', sampleController.create)\nSampleRouter.delete('/', sampleController.destroy)\n\nmodule.exports = SampleRouter\n";
exports.SampleEs5ModelRouter = SampleEs5ModelRouter;