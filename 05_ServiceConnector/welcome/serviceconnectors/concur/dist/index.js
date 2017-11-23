'use strict';

var generatorConfig = require('../config/generator');
var contextConfig = require('../config/context');
var sdk = require('./sdk');
var getLifecycleMethods = void 0;
if (contextConfig.selectedContext === generatorConfig.availableContexts.apiBuilder) {
  try {
    getLifecycleMethods = require(contextConfig[contextConfig.selectedContext].lib).getLifecycleMethods;
  } catch (e) {
    getLifecycleMethods = require(contextConfig.testApiBuilder.lib).getLifecycleMethods;
  }
  module.exports = {
    sdk: sdk,
    register: function register(arrow) {
      getLifecycleMethods(generatorConfig.regenerateWith.path, generatorConfig.regenerateWith.name, generatorConfig.swaggerJson, sdk).register(arrow);
    },
    unregister: function unregister(arrow) {
      getLifecycleMethods(generatorConfig.regenerateWith.path, generatorConfig.regenerateWith.name, generatorConfig.swaggerJson, sdk).unregister(arrow);
    }
  };
} else {
  module.exports = {
    sdk: sdk
  };
}