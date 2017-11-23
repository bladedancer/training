# appc.concur

appc.concur Service Connector

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

This connector is generated with [Connector Builder](https://git.ecd.axway.int/Api-Builder/connector-builder)

It expose an __SDK__ that can be used to access a third party API. 

[Available functions for this connector are described in the SDK documentation.](src/sdk/DOCS.md)

# Table of Contents

* [How To Install the Connector?](#how-to-install-the-connector)
    * [API Builder App](#api-builder-app)
    * [Plain JavaScript App](#plain-javascript-app)
* [How To Configure the Connector?](#how-to-configure-the-connector)
    * [API Builder App Config](#api-builder-app-config)
    * [Plain JavaScript App Config](#plain-javascript-app-config)
* [Author](#author)
* [License](#license)

# How to Install the Connector?

Depending on the environment where the connector is used the installation differs. Note that the connector is an npm module

## API Builder App
Within API Builder it is an easy two steps process but if you do not have the API Builder and an app go through all the steps in this section.

In order to use the newly generated connector within API Builder, you need to create an API Builder application

* **Step 1**: Install __appcelerator__ globally 

    ```sh
    npm i -g appcelerator
    ```
    
    > As a result you should have __`appc`__ command in your terminal. __NOTE__: if your modules are installed in folder with admin rights you could use __sudo__ in front of your command

* **Step 2**: Generate new API Builder APP
    
    ```sh
    appc new
    ```
    
    > Will start a step by step wizard for filling the necessary information for APP generation.

* **Step 3**: Download the connector from [Axway Marketplace](https://marketplace.axway.com)

* **Step 4**: Unzip the connector into folder **serviceconnectors/you_connector_name** in your application

> Note: The Service Connectors are plain node modules but they are not installed as such in API Builder 3.0. So your zip file will contain a folder called package that contains the actuall connector. Please rename this folder after unzipping to match your connector name.

* **Step 5**: Install the module that will execute http communication

> npm i requester-ce

* **Step 6**: Run the application with **appc run** and open the Flow UI to see your connector ready to be used

## Plain JavaScript App

There is an option to use the connector outside the API Builder in plain JavaScript application. After download and unzip the connector it can be copied to specific project and required as npm module is required:

```js
const sdk =  require('appc.connectorname').sdk
```
Now through the __sdk__ constant one can reach and use every function in the connector __sdk__. When you call the function by __Name__ you need to provide the following parameters:

> __requestData__ - Required parameter. The type is an **_Object_**. Contains the data for all the parameters used in communication with the service.

> __callback__ - Required parameter. The type is a **_Function_**. A function that will be invoked with either error or success response that come from the service. Both of them are Objects with properties httpCode that denotes the http status and content that denotes the content. Sample: __`() => {}`__

> __config__ - Optional parameter. The type is an **_Object_**. This is connector config that comes from the and serves as general runtime information. If not provided the one bundled with the connector is used for the same purpose.

```js
sdk.sdkFunctionName(requestData, callback, config)
```

# How to Configure the Connector?

Configuration is done via dedicated config file.

## API Builder App Config

Config file is not mandatory since all the options for connector functions invocation could be provided via the Flow UI. However, if one needs configuration to set common parameters it must copy the config file from **connector/config/connector_name.default.js and place it in app/conf folder.

## Plain JavaScript App Config

When using the connector in plain JavaScript applications just use the original file from: **connector/config/connector_name.default.js


## Author

Axway R&D <support@axway.com> https://axway.com

## License

This code is closed source and Confidential and Proprietary to Axway, Inc. All Rights Reserved. This code MUST not be modified, copied or otherwise redistributed without express written permission of Axway. This file is licensed as part of the Axway Platform and governed under the terms of the Axway license agreement. Your right to use this software terminates when you terminate your Axway subscription.
