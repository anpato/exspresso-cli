export const Es5ModelGeneratorTemplate = args => `const ModelSchema = require('mongoose').Schema

module.exports = new ModelSchema(
  {
    ${JSON.parse(args)}
  },
  {
    timestamps: true
  }
)
`
