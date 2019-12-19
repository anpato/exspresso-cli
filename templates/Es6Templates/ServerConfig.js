export const serverConfig = `import 'dotenv/config'
import express from 'express'
import { connect, connection } from 'mongoose'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import logger from 'morgan'
import cors from 'cors'
import { databaseUrl } from './config'
import Router from './routes'

const App = express()
const PORT = process.env.PORT || 3001

App.use(helmet())
App.disable('x-powered-by')
App.use(logger('dev'))
App.use(cors())
App.use(bodyParser.urlencoded({ extended: true }))
App.use(bodyParser.json())

// Mongodb Connection
connect(databaseUrl().connect, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
connection.once('open', () => {
  console.log('Connected to' + databaseUrl().name)
})
// Mongodb Connection
App.get('/', (req, res) => res.status(200).json({ msg: 'Exspresso' }))
App.use('/api', Router)
App.listen(PORT)
`
