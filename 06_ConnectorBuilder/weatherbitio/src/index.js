const generatorConfig = require('../config/generator')
const contextConfig = require('../config/context')
const sdk = require('./sdk')
let getLifecycleMethods
if (contextConfig.selectedContext === generatorConfig.availableContexts.apiBuilder) {
  try {
    getLifecycleMethods = require(contextConfig[contextConfig.selectedContext].lib).getLifecycleMethods
  } catch (e) {
    getLifecycleMethods = require(contextConfig.testApiBuilder.lib).getLifecycleMethods
  }
  module.exports = {
    sdk: sdk,
    register: (arrow) => {
      getLifecycleMethods(
        generatorConfig.regenerateWith.path,
        generatorConfig.regenerateWith.name,
        generatorConfig.swaggerJson,
      sdk).register(arrow)
    },
    unregister: (arrow) => {
      getLifecycleMethods(
        generatorConfig.regenerateWith.path,
        generatorConfig.regenerateWith.name,
        generatorConfig.swaggerJson,
        sdk
      ).unregister(arrow)
    }
  }
} else {
  module.exports = {
    sdk: sdk
  }
}