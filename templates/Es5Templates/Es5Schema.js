export const Es5Schema = `const CreateModel = require('mongoose').model
const Sample = require('./models/Sample')

const SampleModel = CreateModel('samples', Sample)

module.exports = {
  SampleModel
}
`
