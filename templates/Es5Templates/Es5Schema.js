export const SampleEs5Schema = `const CreateModel = require('mongoose').model'
const Sample = require('./models/Sample)

const SampleModel = model('samples', Sample)

module.exports = {
  SampleModel
}
`
