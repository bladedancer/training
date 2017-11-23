const test = require('tap').test
const sinon = require('sinon')
const path = require('path')
const mockery = require('mockery')

const rootDir = process.cwd()
const configFolderPath = path.join(rootDir, 'config')
const sdkFolderPath = path.join(rootDir, 'src', 'sdk')

const generatorConfig = require(path.join(configFolderPath, 'generator.js'))
const connectorName = generatorConfig.regenerateWith.name

test('### Test the existence of SDK functions vs Configs Entries vs Swagger Entries ###', t => {
  const sdkMetadata = require(path.join(configFolderPath, 'sdk.js'))
  // Find swagger entries
  const allowed = ['get', 'post', 'put', 'patch', 'update', 'delete']
  const swagger = require(path.join(configFolderPath, 'swagger.json'))
  const ops = Object.keys(swagger.paths).reduce((operations, path) => {
    return operations + Object.keys(swagger.paths[path]).filter(path => allowed.includes(path)).length
  }, 0)
  // end find swagger entries

  const sdkMetadataKeys = Object.keys(sdkMetadata)
  const sdk = require(sdkFolderPath)
  const sdkKeys = Object.keys(sdk)
  t.ok(sdk)
  t.equal(typeof sdk, 'object')
  t.equal(sdkKeys.length, ops, 'the number of functions is the same like in swagger')
  t.equal(sdkKeys.length, sdkMetadataKeys.length, 'the number of functions is the same as in sdk metadata')
  t.equal(JSON.stringify(sdkKeys.sort()), JSON.stringify(sdkMetadataKeys.sort()), 'the name of the functions are ok')
  t.end()
})

test('### Test SDK functions - Error Response ###', t => {
  // Invokes the second parameter as callback function
  const makeRequestStub = sinon.stub().callsArgWith(1, true, false)

  // Mock the dependecies in the file
  mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false,
    useCleanCache: true
  })
  const utilsStub = { makeRequest: makeRequestStub }
  mockery.registerMock('axway-requester', utilsStub)

  // Called with these one
  const requestData = {dummy: 'data'}
  const callback = sinon.stub()
  const connectorConfig = require(path.join(configFolderPath, `${connectorName}.default.js`)).connectors[connectorName]

  const sdk = require(sdkFolderPath)
  let counter = 1
  Object.keys(sdk).forEach((operationId) => {
    const func = sdk[operationId]
    const endpointMetadata = require(path.join(configFolderPath, 'sdk.js'))[operationId]
    func(requestData, callback)
    t.equal(makeRequestStub.callCount, counter)
    // This is how we see with what args the stub has been called
    const firstArg = makeRequestStub.args[counter - 1][0]
    t.equal(requestData, firstArg.requestData)
    t.equal(endpointMetadata, firstArg.endpointMetadata)
    t.equal(connectorConfig, firstArg.runtimeConfig)
    t.equal(callback.callCount, counter)
    t.ok(callback.calledWith(true))
    counter++
  })

  callback.reset()
  makeRequestStub.reset()
  mockery.deregisterAll()
  mockery.disable()

  t.end()
})

test('### Test SDK functions - Success Response ###', t => {
  // Invokes the second parameter as callback function
  const makeRequestStub = sinon.stub().callsArgWith(1, false, true)

  // Mock the dependecies in the file
  mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false,
    useCleanCache: true
  })
  const utilsStub = { makeRequest: makeRequestStub }
  mockery.registerMock('axway-requester', utilsStub)

  // Called with these one
  const requestData = {dummy: 'data'}
  const callback = sinon.stub()
  const connectorConfig = require(path.join(configFolderPath, `${connectorName}.default.js`)).connectors[connectorName]

  const sdk = require(sdkFolderPath)
  let counter = 1
  Object.keys(sdk).forEach((operationId) => {
    const func = sdk[operationId]
    const endpointMetadata = require(path.join(configFolderPath, 'sdk.js'))[operationId]
    func(requestData, callback)
    t.equal(makeRequestStub.callCount, counter)
    // This is how we see with what args the stub has been called
    const firstArg = makeRequestStub.args[counter - 1][0]
    t.equal(requestData, firstArg.requestData)
    t.equal(endpointMetadata, firstArg.endpointMetadata)
    t.equal(connectorConfig, firstArg.runtimeConfig)
    t.equal(callback.callCount, counter)
    t.ok(callback.calledWith(null, true))
    counter++
  })

  callback.reset()
  makeRequestStub.reset()
  mockery.deregisterAll()
  mockery.disable()

  t.end()
})
