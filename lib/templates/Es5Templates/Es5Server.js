export const Es5Server = `const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const logger = require('morgan')
const cors = require('cors')
const databaseUrl = require('./config')
const AppRouter = require('./routes')

dotenv.config()

const App = express()
const PORT = process.env.PORT || 3001

App.use(helmet())
App.disable('x-powered-by')
App.use(logger('dev'))
App.use(cors())
App.use(bodyParser.urlencoded({ extended: true }))
App.use(bodyParser.json())

// Mongodb Connection
mongoose.connect(databaseUrl().connect, {
  useNewUrlParser: true,
  useCreateIndex: true
}, function(err){
  console.log('Could not connect, verify connection url.', err)
})

const connection = mongoose.connection
connection.once('open', function() {
  console.log('Connected to: ' +databaseUrl().name)
})
connection.once('error', function() {
  console.log('Could not connect to: ' + databaseUrl().name)
})

// Mongodb Connection
App.get('/', (req, res) => res.status(200).json({ msg: 'Exspresso' }))
App.use('/api', AppRouter)
App.listen(PORT)
`
export const SequelizeEs5Server = `const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const logger = require('morgan')
const cors = require('cors')
const AppRouter = require('./routes')

dotenv.config()

const App = express()
const PORT = process.env.PORT || 3001

App.use(helmet())
App.disable('x-powered-by')
App.use(logger('dev'))
App.use(cors())
App.use(bodyParser.urlencoded({ extended: true }))
App.use(bodyParser.json())

App.get('/', (req, res) => res.status(200).json({ msg: 'Exspresso' }))
App.use('/api', AppRouter)
App.listen(PORT)`
