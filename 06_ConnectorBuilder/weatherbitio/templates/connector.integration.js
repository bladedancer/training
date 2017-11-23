const test = require('tap').test
const sdk = require('../../src')
const getConfig = require('../config.test.js')

test('### getCurrentLatLatLonLon ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getCurrentLatLatLonLon(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getCurrentCityIdCityId ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getCurrentCityIdCityId(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getCurrentPostalCodePostalCode ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getCurrentPostalCodePostalCode(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getCurrentCitiesCities ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getCurrentCitiesCities(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getCurrentCityCityCountryCountry ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getCurrentCityCityCountryCountry(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getCurrentIpIp ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getCurrentIpIp(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getCurrentStationStation ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getCurrentStationStation(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getCurrentStationsStations ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getCurrentStationsStations(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecast3hourlyLatLatLonLon ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecast3hourlyLatLatLonLon(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecast3hourlyCityIdCityId ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecast3hourlyCityIdCityId(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecast3hourlyPostalCodePostalCode ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecast3hourlyPostalCodePostalCode(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecast3hourlyCityCityCountryCountry ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecast3hourlyCityCityCountryCountry(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecast3hourlyIpIp ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecast3hourlyIpIp(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastDailyLatLatLonLon ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastDailyLatLatLonLon(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastDailyCityIdCityId ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastDailyCityIdCityId(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastDailyPostalCodePostalCode ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastDailyPostalCodePostalCode(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastDailyCityCityCountryCountry ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastDailyCityCityCountryCountry(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastDailyIpIp ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastDailyIpIp(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastHourlyLatLatLonLon ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastHourlyLatLatLonLon(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastHourlyCityIdCityId ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastHourlyCityIdCityId(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastHourlyPostalCodePostalCode ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastHourlyPostalCodePostalCode(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastHourlyCityCityCountryCountry ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastHourlyCityCityCountryCountry(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getIpIpIp ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getIpIpIp(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getForecastHourlyIpIp ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getForecastHourlyIpIp(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryDailyLatLatLonLon ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryDailyLatLatLonLon(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryDailyCityIdCityId ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryDailyCityIdCityId(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryDailyPostalCodePostalCode ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryDailyPostalCodePostalCode(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryDailyCityCityCountryCountry ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryDailyCityCityCountryCountry(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryDailyIpIp ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryDailyIpIp(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryDailyStationStation ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryDailyStationStation(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryHourlyLatLatLonLon ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryHourlyLatLatLonLon(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryHourlyCityIdCityId ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryHourlyCityIdCityId(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryHourlyPostalCodePostalCode ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryHourlyPostalCodePostalCode(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryHourlyCityCityCountryCountry ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryHourlyCityCityCountryCountry(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryHourlyIpIp ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryHourlyIpIp(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryHourlyStationStation ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryHourlyStationStation(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryDailyLatLatLonLon ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryDailyLatLatLonLon(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryDailyCityIdCityId ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryDailyCityIdCityId(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryDailyPostalCodePostalCode ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryDailyPostalCodePostalCode(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryDailyCityCityCountryCountry ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryDailyCityCityCountryCountry(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryDailyIpIp ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryDailyIpIp(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryDailyStationStation ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryDailyStationStation(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryHourlyLatLatLonLon ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryHourlyLatLatLonLon(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryHourlyCityIdCityId ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryHourlyCityIdCityId(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryHourlyPostalCodePostalCode ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryHourlyPostalCodePostalCode(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryHourlyCityCityCountryCountry ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryHourlyCityCityCountryCountry(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryHourlyIpIp ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryHourlyIpIp(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkHistoryHourlyStationStation ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkHistoryHourlyStationStation(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryEnergyLatLatLonLon ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryEnergyLatLatLonLon(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getHistoryEnergyBboxLat1Lat1Lon1Lon1Lat2Lat2Lon2Lon2 ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getHistoryEnergyBboxLat1Lat1Lon1Lon1Lat2Lat2Lon2Lon2(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})

test('### getBulkByFile ###', t => {
  const configParams = getConfig()
  const requestData = {
      /**
       * To add more in the header use:
       *
       * header: Object.assign(configParams.header, { // your header data })
       */
    security: configParams.security,
    header: configParams.header,
    path: {},
    body: {},
    query: {},
    formData: {}
  }
  sdk.getBulkByFile(requestData, (err, resp) => {
    t.notOk(err)
    t.ok(resp)
    t.end()
  })
})
