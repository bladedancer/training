# Welcome to Arrow Project

> You should replace the contents of this file with something meaningful.  This is a placeholder file to help you get started.  Got it?

## Overview

This is a skeleton Arrow project. The project is organized into several different directories and key files.  This project is built to run either as a standalone Node server during development and also it is configured to run on the API Runtime Services platform.

## Get Started

First, you should make sure you're environment is setup and ready to go.  To get started, let's make sure you can run the project, view the documentation and test the sample generated API.

```bash
$ appc run
```

If everything goes well, you should see output similar to the following:

```bash
$ appc run
Appcelerator Command-Line Interface, version x.x.x
Copyright (c) 2014-2017, Appcelerator, Inc.  All Rights Reserved.

Fetching connector/appc.arrowdb@x.x.x
Fetching connector/appc.composite@x.x.x
Installed 2 modules
Installed:  connector/appc.arrowdb, connector/appc.composite
INFO   | API Builder Tools/x.x.x myapp/1.0.0
INFO   | APIKey is: MdIZ8PxRCCHDnwHjCLSvV2+rzyuxFF1Z
INFO   | Starting connector/appc.arrowdb@x.x.x
INFO   | Started connector/appc.arrowdb
INFO   | Starting connector/appc.composite@x.x.x
INFO   | Started connector/appc.composite
INFO   | Started API Builder Console
INFO   | Access the new API Builder Console at http://localhost:8080/console. This will only be available on your dev environment.
INFO   | Access the swagger API documentation at http://localhost:8080/apidoc/swagger.json
INFO   | Server started on port 8080
```

> NOTE: You may need to login to the Appcelerator platform using your Appcelerator credentials the first time you run or if you have not logged in before.

After starting the server, you should be able to browse to the main API documentation page by navigating to http://localhost:8080/console/project/apidocs.

If the page renders with the test API, you're ready to get started building your APIs!

## Project Structure

The project has the following main folders:

- _conf_ - your configuration files will go here
- _apis_ - your APIs will go here
- _models_ - your models will go here
- _specs_ - your tests will go here
- _docs_ - your API docs will go here
- _logs_ - your server logs will be generated to this directory by default

In your root project folder, you will have the main server file `app.js`.  This file generally should not need to be edited but you can edit it if you want to further customize your server.

## Configuration

The main configuration file is located in `conf/default.js`.  This file is the base configuration file.  You can have environment specific configuration by including a file with the name of the environment in the `conf` directory such as `local.js` or `production.js`.  Values configured in this file will be merged into the `default.js` file.  This allows you to create a base set of configuration values and then override them depending on your environment. By default, the `local.js` file will be ignored by git during checkin.  If you want to change this behavior to allow you to check in this file, change the entry in `conf/.gitignore`.

### Base Configuration

The following are configuration settings used by API Builder Tools that can be customized:

| Name        | Description                                                         | Default value       |
|-------------|---------------------------------------------------------------------|---------------------|
| logs        | the folder to place your logs.  if missing, will not log to disk.   | ./logs              |
| quiet       | if true, will suppress logging to console                           | false               |
| logLevel    | log level of main logger                                            | debug               |
| apikey      | API key for accessing the server                                    | n/a                 |
| admin       | hash for controlling admin access                                   | n/a                 |
| session     | hash for controlling session                                        | n/a                 |

The `admin` setting has the following properties:

| Name        | Description                                                         | Default value       |
|-------------|---------------------------------------------------------------------|---------------------|
| enabled     | if true, will enable the admin functionality                        | true                |
| prefix      | the URI path prefix                                                 | /arrow              |

The `session` setting has the following properties:

| Name                | Description                                               | Default value       |
|---------------------|-----------------------------------------------------------|---------------------|
| encryptionAlgorithm | the encryption algorithm to use                           | aes256              |
| encryptionKey       | the encryption key (should be unique and private)         | n/a                 |
| signatureAlgorithm  | the signature algorithm to use                            | sha512-drop256      |
| signatureKey        | the signature key (should be unique and private)          | n/a                 |
| secret              | should be a large unguessable string                      | n/a                 |
| duration            | how long the session will stay valid in ms                | 86400000            |
| activeDuration      | if expiresIn < activeDuration, the session will be extended by activeDuration ms | 300000 |

## APIs

APIs must be placed in the `apis` folder.  You can create subfolders under the `apis` folder to organize your APIs.

An API is defined using the following example:

```javascript
var Arrow = require('arrow');

var TestAPI = Arrow.API.extend({
    group: 'test',
    path: '/test/:id',
    method: 'GET',
    description: 'this is an api that show how you can implement an API',
    model: 'user',
    parameters: {
        id: {description:'the user id'}
    },
    action: function (req, resp) {
        // invoke the model find method passing the id parameter
        // stream the result back as response
        resp.stream(req.model.find, req.params.id);
    }
});

module.exports = TestAPI;
```

An API has the following properties:

| Name        | Description                                                         | Default value       |
|-------------|---------------------------------------------------------------------|---------------------|
| name        | name of the API. use the same name to group API endpoints together  | n/a                 |
| path        | the path route to the API                                           | n/a                 |
| method      | the HTTP verb for accessing the API                                 | GET                 |
| description | the description used in documentation to explain this API           | n/a                 |
| model       | optional name of the Model that this API returns                    | n/a                 |
| parameters  | optional hash of incoming properties (path or query) used by this API | n/a               |
| action      | function that will be called to implement the API                   | n/a                 |

The API will automatically be loaded and created when you start the server.

## Documentation

APIs which are grouped together have each API endpoint documented at the API definition.  You can provide extended overview documentation for all APIs which share the same name by creating a file with the name of the API in the `docs` folder, such as `test.md`.  The contents of this file must be authored [Markdown](http://daringfireball.net/projects/markdown/syntax) (powered by some special extensions).  You can view an example of how to author by viewing the generated file named `test.md` in the `docs` folder.  The contents of the file will be included as part of the definition of the API.

## Models

Models must be placed in the `models` folder.  You can create subfolders under the `models` folder to organize your Models.

A Model is defined using the following example:

```javascript
var Arrow = require('arrow');

var User = Arrow.Model.extend('user',{
    fields: {
        first_name: { type: String },
        last_name: { type: String },
        email: { type: String }
    },
    connector: 'memory'
});

module.exports = User;
```

Models are automatically loaded by the server and automatically bound to a route with the appropriate CRUD methods.

You can automatically get a model programatically:

```javascript
var user = Arrow.getModel('user');
```

The result will always be the Model definition, not an instance.

