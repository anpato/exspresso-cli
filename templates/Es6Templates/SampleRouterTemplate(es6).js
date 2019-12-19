export const SampleRouterTemplateEs6 = `import { Router } from 'express'
import SampleRouter from './SampleRouter'

const AppRouter = Router()

AppRouter.use('/sample', SampleRouter)

export default AppRouter
`
