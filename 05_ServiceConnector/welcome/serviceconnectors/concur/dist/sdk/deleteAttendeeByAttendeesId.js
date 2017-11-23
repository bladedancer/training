'use strict';

var connectorConfig = require('../../config/appc.concur.default.js');
var endpointMetadata = require('../../config/sdk')['deleteAttendeeByAttendeesId'];

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
module.exports = function (makeRequest) {
  return function (requestData, callback, config) {
    var runtimeConfig = config || connectorConfig.connectors['appc.concur'];
    makeRequest({ requestData: requestData, endpointMetadata: endpointMetadata, runtimeConfig: runtimeConfig }, function (err, resp) {
      err ? callback(err) : callback(null, resp);
    });
  };
};