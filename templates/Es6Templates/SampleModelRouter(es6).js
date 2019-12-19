export const SampleModelRouterTemplateEs6 = `import { Router } from 'express'
import SampleController from '../controllers'

const SampleRouter = Router()

const sampleController = new SampleController()

SampleRouter.get('/', sampleController.show)
SampleRouter.get('/:sample_id', sampleController.getById)
SampleRouter.put('/:sample_id', sampleController.update)
SampleRouter.post('/', sampleController.create)
SampleRouter.delete('/', sampleController.destroy)

export default SampleRouter
`
