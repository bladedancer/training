const test = require('tap').test
const fs = require('fs')
const path = require('path')
const rootDir = process.cwd()
const packageJsonFilePath = path.join(rootDir, 'package.json')
const packageJson = require(packageJsonFilePath)

test('### Ensure that package.json file exists ###', t => {
  const stat = fs.statSync(packageJsonFilePath)
  t.ok(packageJson)
  t.ok(stat.size)
  t.ok(fs.existsSync(packageJsonFilePath))
  t.end()
})

test('### Ensure all required dependencies are present in package.json file ###', t => {
  t.ok(packageJson.name, 'should have name property')
  t.ok(packageJson.version, 'should have version property')
  t.ok(packageJson.description, 'should have description property')
  t.ok(packageJson.author, 'should have author property')
  t.ok(packageJson.author.email, 'should have author.email property')
  t.ok(packageJson.author.name, 'should have author.name property')
  t.ok(packageJson.author.url, 'should have author.url property')
  t.ok(packageJson.main, 'should have main property')
  t.ok(packageJson.dependencies, 'should have dependencies property')
  t.ok(packageJson.babel, 'should have babel property')
  t.ok(packageJson.files, 'should have files property')
  t.ok(packageJson.keywords, 'should have keywords property')
  t.ok(packageJson.repository, 'should have repository property')
  t.ok(packageJson.scripts, 'should have scripts property')
  t.ok(packageJson.scripts.test, 'should have scripts.test property')
  t.ok(packageJson.scripts['test:unit'], 'should have scripts.test:unit property')
  t.ok(packageJson.scripts['test:integration'], 'should have scripts.test:integration property')
  t.ok(packageJson.scripts.build, 'should have scripts.build property')
  t.ok(packageJson.scripts['build:dev'], 'should have scripts.build:dev property')
  t.ok(packageJson.scripts['build:dist'], 'should have scripts.build:dist property')
  t.ok(packageJson.scripts['build:readme'], 'should have scripts.build:readme property')
  t.ok(packageJson.scripts['build:lint'], 'should have scripts.build:lint property')
  t.ok(packageJson.scripts['lint:fix'], 'should have scripts.lint:fix property')
  t.ok(packageJson.scripts['check:dependencies'], 'should have scripts.check:dependencies property')
  t.ok(packageJson.scripts.all, 'should have scripts.all property')
  t.ok(packageJson.scripts.clean, 'should have scripts.clean property')
  t.ok(packageJson.scripts['clean:test'], 'should have scripts.clean:test property')
  t.ok(packageJson.scripts.security, 'should have scripts.security property')
  t.ok(packageJson.scripts['security:retire'], 'should have scripts.security:retire property')
  t.ok(packageJson.scripts['security:nsp'], 'should have scripts.security:nsp property')
  t.end()
})

test('### Ensure linter is configured correctly ###', t => {
  const mustBeIgnoredByLinter = [
    '.nyc_output',
    '.vscode',
    'coverage',
    'node_modules',
    'config',
    'dist'
  ]

  t.ok(packageJson.standard, 'should have standard property')
  t.ok(packageJson.standard.ignore, 'should have standard.ignore property')
  t.equal(JSON.stringify(packageJson.standard.ignore.sort()), JSON.stringify(mustBeIgnoredByLinter.sort()), 'all linter ignore entries are fine')
  t.end()
})

test('### Ensure code coverage tool is configured correctly ###', t => {
  t.ok(packageJson.nyc, 'should have nyc property')
  t.ok(packageJson.nyc.include, 'should have nyc.unclude property')
  t.equal(packageJson.nyc.include, 'src', 'should make code coverage on src folder only')
  t.end()
})

test('### Ensure publishing to npm is configured correctly ###', t => {
  const mustBePublish = [
    'README.md',
    'icon.svg',
    'dist',
    'config'
  ]
  t.equal(JSON.stringify(packageJson.files), JSON.stringify(mustBePublish), 'all entries for npm publishing are fine')
  t.end()
})

test('### Ensure all required devDependencies are present in package.json file ###', t => {
  t.ok(packageJson.devDependencies, 'should have devDependencies')
  t.ok(packageJson.devDependencies.nsp, 'should have dependency nsp')
  t.ok(packageJson.devDependencies.retire, 'should have dependency retire')
  t.ok(packageJson.devDependencies.rimraf, 'should have dependency rimraf')
  t.ok(packageJson.devDependencies.snazzy, 'should have dependency snazzy')
  t.ok(packageJson.devDependencies.standard, 'should have dependency standard')
  t.ok(packageJson.devDependencies.tap, 'should have dependency tap')
  t.ok(packageJson.devDependencies.sinon, 'should have dependency sinon')
  t.ok(packageJson.devDependencies.mockery, 'should have dependency mockery')
  t.end()
})
