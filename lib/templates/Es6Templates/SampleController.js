export const SampleControllerEs6 = `import { SampleModel } from '../database/Schema'
class SampleModelController {

  show = async (req, res) => {
    try {
      const sample = await SampleModel.find()
      res.send(sample)
    } catch (error) {
      throw error
    }
  }

  getById = async (req, res) => {
    try {
      const sample = await SampleModel.findById(req.params.sample_id)
      res.send(sample)
    } catch (error) {
      throw error
    }
  }

  create = async (req, res) => {
    try {
      const newSample = new SampleModel(req.body)
      await newSample.save()
      res.send(newSample)
    } catch (error) {
      throw error
    }
  }

  destroy = async (req, res) => {
    try {
      await SampleModel.findOneAndDelete(req.params.sample_id)
      res.json({ message: 'Deleted Sample Model' })
    } catch (error) {
      throw error
    }
  }

  update = async (req, res) => {
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

export default SampleModelController
`
