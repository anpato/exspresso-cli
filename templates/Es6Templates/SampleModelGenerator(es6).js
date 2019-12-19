export const SampleModelTemplateEs6 = `import { Schema } from 'mongoose'
// This is a sample Template for a mongoose schema

const Sample = new Schema(
  {
    // Insert model properties here
    // name: {
    //  type:String
    // }
  },
  {
    timestamps:true
  }
)

// Add in setters and getters for model here

// Exports model
export { Sample }
`
export const sampleExportTemplate = `export * from './Sample.js'`
