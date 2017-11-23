const test = require('tap').test
const path = require('path')
const sinon = require('sinon')
const utils = require('appc-service-connector-utils')
const registerStub = sinon.stub()
const unregisterStub = sinon.stub()
const getLifecycleMethodsStub = sinon.stub(utils, 'getLifecycleMethods').returns({
  register: registerStub,
  unregister: unregisterStub
})
const rootDir = process.cwd()
const generatorConfig = require(path.join(rootDir, 'config', 'generator.js'))

test('### Ensure SDK interface has proper functions ###', t => {
  const api = require(path.join(rootDir, 'src'))
  t.ok(api.sdk, 'sdk is exposed')
  t.ok(api.register)
  t.equal(typeof api.register, 'function')
  t.ok(api.unregister)
  t.equal(typeof api.unregister, 'function')
  t.end()
})

test('### Ensure SDK contains a map of functionName and function ###', t => {
  const api = require(path.join(rootDir, 'src'))
  const sdk = api.sdk
  Object.keys(sdk).forEach((functionName) => {
    t.equal(typeof functionName, 'string', 'the key is string that denotes function name')
    t.equal(typeof sdk[functionName], 'function', 'the value is function')
  })
  t.end()
})

test('### Ensure lifecycle methods are invokable ###', t => {
  const api = require(path.join(rootDir, 'src'))
  const arrow = {}
  api.register(arrow)
  t.ok(getLifecycleMethodsStub.calledOnce)
  t.ok(getLifecycleMethodsStub.calledWith(
    generatorConfig.regenerateWith.path,
    generatorConfig.regenerateWith.name,
    generatorConfig.swaggerJson,
    api.sdk
  ))
  t.ok(registerStub.calledOnce)
  t.ok(registerStub.calledWith(arrow))
  t.ok(unregisterStub.notCalled)

  api.unregister(arrow)
  t.ok(getLifecycleMethodsStub.calledTwice)
  t.ok(getLifecycleMethodsStub.calledWith(
    generatorConfig.regenerateWith.path,
    generatorConfig.regenerateWith.name,
    generatorConfig.swaggerJson,
    api.sdk
  ))
  t.ok(registerStub.calledOnce)
  t.ok(registerStub.calledWith(arrow))
  t.ok(unregisterStub.calledOnce)
  t.ok(unregisterStub.calledWith(arrow))

  t.end()
})

test('### Tear Down ###', t => {
  registerStub.reset()
  unregisterStub.reset()
  getLifecycleMethodsStub.reset()
  t.end()
})
