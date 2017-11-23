'use strict';

var path = require('path');
var fs = require('fs');
var sdkDir = path.join(__dirname);
var generatorConfig = require('../../config/generator');
var makeRequest = require('requester-ce')(generatorConfig.elementJson);

module.exports = fs.readdirSync(sdkDir).reduce(function (sdk, item) {
  if (item.endsWith('.js') && item !== 'index.js') {
    var fnName = item.substring(0, item.length - 3);
    var fnPath = path.join(sdkDir, item);
    sdk[fnName] = require(fnPath)(makeRequest);
  }
  return sdk;
}, {});