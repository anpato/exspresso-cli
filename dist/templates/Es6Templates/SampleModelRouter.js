"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleModelRouterEs6 = void 0;
var SampleModelRouterEs6 = "import { Router } from 'express'\nimport SampleController from '../controllers/SampleController'\n\nconst SampleRouter = Router()\n\nconst sampleController = new SampleController()\n\nSampleRouter.get('/', sampleController.show)\nSampleRouter.get('/:sample_id', sampleController.getById)\nSampleRouter.put('/:sample_id', sampleController.update)\nSampleRouter.post('/', sampleController.create)\nSampleRouter.delete('/', sampleController.destroy)\n\nexport default SampleRouter\n";
exports.SampleModelRouterEs6 = SampleModelRouterEs6;