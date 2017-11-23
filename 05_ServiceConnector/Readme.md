# 05 Service Connector

Service Connectors are similar to the nodes created by the Flow SDK. The are extensions that install custom nodes for use in the Flow Editor. However in this case they provide access to external REST services e.g. ZenDesk, Twitter, Facebook, etc.

## Installation

In production these services will be available for download from the Axway Marketplace. The service connector is downloaded as a zip and extracted into the _serviceconnectors_ folder of your application.

_Note:_ This is currently a packed module, future versions of API Builder may just ```npm install``` them. For now after unzipping the download rename the _package_ folder to something more meaningful.

A number of these service connectors were developed in conjuction with Cloud Elements and require the installation of a supporting module _requester-ce_.

Download the connector (from internal registy for now - this will change on release):
```
http://registry.ecd.axway.int:8081/artifactory/local-npm/appc.concur/-/appc.concur-1.0.3-42.tgz
```

Extract the tgz, you should have a folder called _package_. Copy this folder to the _serviceconnectors_ folder and rename it _concur_. Note if this is your first service connector you will need to create the _serviceconnectors_ folder first. Also install the required modules for the connector:

```
npm install -S requester-ce
```

If this hasn't been published to NPMJS then you might need to install from the internal registry:

```
npm --registry http://registry.ecd.axway.int:8081/artifactory/api/npm/registry-npm install -S requester-ce
```

## Flow Editor

Restart the API Builder console and you should now see the _Concur_ connector.
