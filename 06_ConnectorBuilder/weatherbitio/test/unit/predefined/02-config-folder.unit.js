const test = require('tap').test
const fs = require('fs')
const path = require('path')
const rootDir = process.cwd()
const folderPath = path.join(rootDir, 'config')

const testState = {
  connectorType: null,
  connectorName: null
}

test('### Ensure that generator.js file is present and not empty ###', t => {
  const generatorPath = path.join(folderPath, 'generator.js')
  const generator = require(generatorPath)
  t.ok(generator, 'genertor.js file exists')
  t.ok(generator.regenerateWith, 'regenerateWith property ok')
  t.ok(generator.regenerateWith.name, 'regenerateWith.name property ok')
  t.ok(generator.regenerateWith.api, 'regenerateWith.api property ok')
  t.ok(generator.regenerateWith.type, 'regenerateWith.type property ok')

  testState.connectorType = generator.regenerateWith.type
  testState.connectorName = generator.regenerateWith.name

  t.ok(generator.regenerateWith.force !== undefined, 'regenerateWith.force property ok')
  t.ok(generator.regenerateWith.dest, 'regenerateWith.dest property ok')
  t.ok(generator.regenerateWith.path, 'regenerateWith.path property ok')
  t.ok(generator.swaggerJson, 'swaggerJson property ok')
  t.end()
})

test('### Ensure all required files in config folder exist ###', t => {
  t.ok(fs.existsSync(path.join(folderPath, `${testState.connectorName}.default.js`)))
  t.ok(fs.existsSync(path.join(folderPath, 'generator.js')))
  t.ok(fs.existsSync(path.join(folderPath, 'sdk.js')))
  t.ok(fs.existsSync(path.join(folderPath, 'swagger.json')))
  t.ok(fs.existsSync(path.join(folderPath, 'context.js')))
  t.end()
})

test('### Ensure the proper content of swagger.json ###', t => {
  const swaggerJsonPath = path.join(folderPath, 'swagger.json')
  const swaggerJson = require(swaggerJsonPath)
  t.ok(swaggerJson, 'swagger.json file exists')
  t.ok(swaggerJson.paths, 'should have paths')
  t.ok(swaggerJson.definitions, 'should have definitions')
  t.ok(swaggerJson.swagger, 'should have swagger')
  t.ok(swaggerJson.info, 'should have info')
  t.ok(swaggerJson.info.title, 'should have title')

  t.end()
})
