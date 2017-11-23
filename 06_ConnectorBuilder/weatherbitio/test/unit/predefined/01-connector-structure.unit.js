const test = require('tap').test
const fs = require('fs')
const path = require('path')
const rootDir = process.cwd()

test('### Ensure all connector folders are present ###', t => {
  t.ok(fs.existsSync(path.join(rootDir, 'config')))
  t.ok(fs.existsSync(path.join(rootDir, 'src')))
  t.ok(fs.existsSync(path.join(rootDir, 'src', 'sdk')))
  t.ok(fs.existsSync(path.join(rootDir, 'templates')))
  t.ok(fs.existsSync(path.join(rootDir, 'test')))
  t.ok(fs.existsSync(path.join(rootDir, 'test', 'unit')))
  t.ok(fs.existsSync(path.join(rootDir, 'test', 'unit', 'predefined')))
  t.ok(fs.existsSync(path.join(rootDir, 'test', 'integration')))
  t.ok(fs.existsSync(path.join(rootDir, 'test', 'integration', 'predefined')))
  t.end()
})

test('### Ensure all root files are present ###', t => {
  t.ok(fs.existsSync(path.join(rootDir, 'icon.svg')))
  t.ok(fs.existsSync(path.join(rootDir, 'package.json')))
  t.ok(fs.existsSync(path.join(rootDir, 'README.md')))
  t.end()
})

test('### Ensure all templates folder files exist ###', t => {
  const folderPath = path.join(rootDir, 'templates')
  t.ok(fs.existsSync(path.join(folderPath, 'config.test.js')))
  t.ok(fs.existsSync(path.join(folderPath, 'connector.integration.js')))
  t.end()
})

test('### Ensure all predefined unit and integration  tests exist ###', t => {
  const unitTestPredefinedFolder = path.join(rootDir, 'test', 'unit', 'predefined')
  const integrationTestPredefinedFolder = path.join(rootDir, 'test', 'integration', 'predefined')
  t.ok(fs.existsSync(path.join(unitTestPredefinedFolder, '01-connector-structure.unit.js')))
  t.ok(fs.existsSync(path.join(unitTestPredefinedFolder, '02-config-folder.unit.js')))
  t.ok(fs.existsSync(path.join(unitTestPredefinedFolder, '03-sdk.unit.js')))
  t.ok(fs.existsSync(path.join(unitTestPredefinedFolder, '04-package-json.unit.js')))
  t.ok(fs.existsSync(path.join(integrationTestPredefinedFolder, 'sdk-index.integration.js')))
  t.end()
})

test('### Ensure SDK documentation file is present and not empty ###', t => {
  const docsPath = path.join(rootDir, 'src', 'sdk', 'DOCS.md')
  const stat = fs.statSync(docsPath)
  t.ok(stat.size)
  t.ok(fs.existsSync(docsPath))
  t.end()
})

test('### Ensure SDK loader file is present and not empty ###', t => {
  const sdkLoader = path.join(rootDir, 'src', 'sdk', 'index.js')
  const stat = fs.statSync(sdkLoader)
  t.ok(stat.size)
  t.ok(fs.existsSync(sdkLoader))
  t.end()
})
