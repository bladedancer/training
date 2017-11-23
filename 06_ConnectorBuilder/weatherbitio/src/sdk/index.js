const path = require('path')
const fs = require('fs')
const sdkDir = path.join(__dirname)
const { makeRequest } = require('axway-requester')

module.exports = fs.readdirSync(sdkDir).reduce((sdk, item) => {
  if (item.endsWith('.js') && item !== 'index.js') {
    const fnName = item.substring(0, item.length - 3)
    const fnPath = path.join(sdkDir, item)
    sdk[fnName] = require(fnPath)(makeRequest)
  }
  return sdk
}, {})
