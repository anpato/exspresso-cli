export const SampleEs5ModelRouter = `const SampleRouter = require('express').Router()
const SampleController = require('../controllers/SampleController')

const sampleController = new SampleController()

SampleRouter.get('/', sampleController.show)
SampleRouter.get('/:sample_id', sampleController.getById)
SampleRouter.put('/:sample_id', sampleController.update)
SampleRouter.post('/', sampleController.create)
SampleRouter.delete('/', sampleController.destroy)

module.exports = SampleRouter
`
