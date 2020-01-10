export const Es6SchemaWriter = (name, pluralizedName) => {
  return `export const ${name} = model(${pluralizedName}, ${name}Model)`
}
