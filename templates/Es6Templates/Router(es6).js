const Es6RouterTemplate = `import { Router } from 'express'
import SampleRouter from './SampleRouter'

const AppRouter = Router()

AppRouter.use('/sample', SampleRouter)

export default AppRouter
`
