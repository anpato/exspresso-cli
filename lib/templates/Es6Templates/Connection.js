export const connection = `import 'dotenv/config'
export const databaseUrl = () => {
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
