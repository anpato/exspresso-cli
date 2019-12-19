export const SampleEs6Schema = `import { model } from 'mongoose'
import { Sample } from './models'

const SampleModel = model('samples', Sample)

export {
  SampleModel
}
`
