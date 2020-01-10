export const SamplePostgresController = ` // const { SampleModel } = require('../models/Sample')
const SampleModel = null
class SampleController {
  async show(req, res) {
    try {
      const sample = await SampleModel.find()
      res.send(sample)
    } catch (error) {
      throw error
    }
  }

  async getById(req, res) {
    try {
      const sample = await SampleModel.findById(req.params.sample_id)
      res.send(sample)
    } catch (error) {
      throw error
    }
  }

  async create(req, res) {
    try {
      const newSample = new SampleModel(req.body)
      await newSample.save()
      res.send(newSample)
    } catch (error) {
      throw error
    }
  }

  async destroy(req, res) {
    try {
      await SampleModel.findOneAndDelete(req.params.sample_id)
      res.json({ message: 'Deleted Sample Model' })
    } catch (error) {
      throw error
    }
  }

  async update(req, res) {
    try {
      const updatedSample = await SampleModel.findOneAndUpdate(
        { _id: req.params.sample_id },
        req.body
      )
      res.send(updatedSample)
    } catch (error) {
      throw error
    }
  }
}

module.exports = SampleController
`
