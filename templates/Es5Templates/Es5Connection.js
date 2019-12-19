export const Es5Connection = `module.exports = function() {
  const dotenv = require('dotenv')
  dotenv.config()
  if (process.env.NODE_ENV === 'production') {
    return {
      name: 'Production',
      connect: process.env.DATABASE_URI
    }
  } else {
    return {
      name: 'Development',
      connect: process.env.DEVELOP_URI
    }
  }
}`
