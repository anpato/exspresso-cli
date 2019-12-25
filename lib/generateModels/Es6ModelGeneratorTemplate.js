export const Es6ModelGenerator = (name, args) => {
  return `import { Schema } from 'mongoose'
  const ${name} = new Schema(
      {
        ${JSON.parse(args)}
      },
    {
      timeStamps:true
    }
  )

  export { ${name} }
  `
}
