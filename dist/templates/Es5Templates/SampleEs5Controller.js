"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleEs5Controller = void 0;
var SampleEs5Controller = "const { SampleModel } = require('../database/Schema')\n\nclass SampleController {\n  async show(req, res) {\n    try {\n      const sample = await SampleModel.find()\n      res.send(sample)\n    } catch (error) {\n      throw error\n    }\n  }\n\n  async getById(req, res) {\n    try {\n      const sample = await SampleModel.findById(req.params.sample_id)\n      res.send(sample)\n    } catch (error) {\n      throw error\n    }\n  }\n\n  async create(req, res) {\n    try {\n      const newSample = new SampleModel(req.body)\n      await newSample.save()\n      res.send(newSample)\n    } catch (error) {\n      throw error\n    }\n  }\n\n  async destroy(req, res) {\n    try {\n      await SampleModel.findOneAndDelete(req.params.sample_id)\n      res.json({ message: 'Deleted Sample Model' })\n    } catch (error) {\n      throw error\n    }\n  }\n\n  async update(req, res) {\n    try {\n      const updatedSample = await SampleModel.findOneAndUpdate(\n        { _id: req.params.sample_id },\n        req.body\n      )\n      res.send(updatedSample)\n    } catch (error) {\n      throw error\n    }\n  }\n}\n\nmodule.exports = SampleController\n";
exports.SampleEs5Controller = SampleEs5Controller;