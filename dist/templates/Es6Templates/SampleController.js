"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleControllerEs6 = void 0;
var SampleControllerEs6 = "import { SampleModel } from '../database/Schema'\nclass SampleModelController {\n\n  show = async (req, res) => {\n    try {\n      const sample = await SampleModel.find()\n      res.send(sample)\n    } catch (error) {\n      throw error\n    }\n  }\n\n  getById = async (req, res) => {\n    try {\n      const sample = await SampleModel.findById(req.params.sample_id)\n      res.send(sample)\n    } catch (error) {\n      throw error\n    }\n  }\n\n  create = async (req, res) => {\n    try {\n      const newSample = new SampleModel(req.body)\n      await newSample.save()\n      res.send(newSample)\n    } catch (error) {\n      throw error\n    }\n  }\n\n  destroy = async (req, res) => {\n    try {\n      await SampleModel.findOneAndDelete(req.params.sample_id)\n      res.json({ message: 'Deleted Sample Model' })\n    } catch (error) {\n      throw error\n    }\n  }\n\n  update = async (req, res) => {\n    try {\n      const updatedSample = await SampleModel.findOneAndUpdate(\n        { _id: req.params.sample_id },\n        req.body\n      )\n      res.send(updatedSample)\n    } catch (error) {\n      throw error\n    }\n  }\n}\n\nexport default SampleModelController\n";
exports.SampleControllerEs6 = SampleControllerEs6;