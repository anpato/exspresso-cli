export const SampleEs5Router = `const AppRouter = require('express').Router()
const SampleRouter = require('./SampleRouter')

AppRouter.use('/', SampleRouter)

module.exports = AppRouter`
