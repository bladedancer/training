const connectorConfig = require('../../config/weatherbitio.default.js')
const endpointMetadata = require('../../config/sdk')['getForecastDailyCityIdCityId']

/**
 * @param {Object} requestData - Required. 
 *                  Contains the data for all the parameters used in communication with the service
 * @param {Function} callback - Required.
 *                  A function that will be invoked with either error or success response that come from the service.
 *                  Both of them are Objects with properties httpCode that denotes the http status and content that denotes the content.
 * @param {Object} config - Optional. 
 *                  This is connector config that comes from the and serves as general runtime information. 
 *                  If not provided the one bundled with the connector is used for the same purpose.
 */
module.exports = (makeRequest) => {
  return (requestData, callback, config) => {
    const runtimeConfig = config || connectorConfig.connectors['weatherbitio']
    makeRequest(
      { requestData, endpointMetadata, runtimeConfig }, 
      (err, resp) => { err ? callback(err) : callback(null, resp) }
    )
  }
}