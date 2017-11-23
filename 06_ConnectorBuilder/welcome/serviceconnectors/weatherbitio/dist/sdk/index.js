'use strict';

var path = require('path');
var fs = require('fs');
var sdkDir = path.join(__dirname);

var _require = require('axway-requester'),
    makeRequest = _require.makeRequest;

module.exports = fs.readdirSync(sdkDir).reduce(function (sdk, item) {
  if (item.endsWith('.js') && item !== 'index.js') {
    var fnName = item.substring(0, item.length - 3);
    var fnPath = path.join(sdkDir, item);
    sdk[fnName] = require(fnPath)(makeRequest);
  }
  return sdk;
}, {});