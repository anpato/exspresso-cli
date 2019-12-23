export const Es6ControllerTemplate = modelName => `import {${modelName}} from '../database/Schema'

class ${modelName}Controller {
  show = async (req, res) => {
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }

  getById = async (req, res) => {
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }

  create = async (req, res) => {
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }

  destroy = async (req, res) => {
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }

  update = async (req, res) => {
    try {
      /*
      Insert Queries Here
      */
    } catch (error) {
      throw error
    }
  }
}

export default ${modelName}Controller
`
