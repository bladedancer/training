const configTemplate = {
  // Integration test suite is executed with this configuration that must be provided by the developer
  // Note that developer must change these accordingly. For example 'token' must be used instead of 'x-vendor-authorization' for open api connectors
  header: {},
  security: {
    authType: '<YOU_AUTH_TYPE>',
    token: '<YOU_TOKEN>'
  },
  body: {},
  path: {},
  query: {},
  formData: {}
}
module.exports = () => {
  return Object.create(configTemplate)
}
