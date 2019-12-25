export const Es5ControllerTemplate = modelName => `const { ${modelName} } = require('../database/Schema')

class ${modelName}Controller {
  async show (req, res){
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }

  async getById (req, res){
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }

  async create (req, res){
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }

  async destroy (req, res){
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }

  async update (req, res){
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }
}

module.exports = ${modelName}Controller
`
