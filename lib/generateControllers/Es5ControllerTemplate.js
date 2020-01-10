export const Es5ControllerTemplate = (modelName, dialect) => {
  if (dialect) {
    return `const { ${modelName} } = require('../database/Schema')
    
    class ${modelName}Controller {
 
    }    

    module.exports = ${modelName}Controller
    `
  } else {
    return `// const { SampleModel } = require('../models/Sample')

    class ${modelName}Controller {
 
    }    
    
    module.exports = ${modelName}Controller
    `
  }
}
