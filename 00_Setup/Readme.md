# 00 Setup

The goal here is to get API Builder installed and running.

## Install API Builder
It's presumed that you have Node v6 installed.

```
npm install -g appcelerator@^4.2.11-2
appc config set defaultEnvironment preproduction
appc use 7.0.0-master.33
```

## Create a new app
```
w:\training\01_Welcome>appc new -t arrow
Appcelerator Command-Line Interface, version 7.0.0-master.33
Copyright (c) 2014-2017, Appcelerator, Inc.  All Rights Reserved.

Preproduction Environment Active

? What's the project name? welcome

*** new completed. ***
```

## Start API Builder
```
w:\training\01_Welcome\welcome>appc run
Appcelerator Command-Line Interface, version 7.0.0-master.33
Copyright (c) 2014-2017, Appcelerator, Inc.  All Rights Reserved.

Preproduction Environment Active

Fetching connector/appc.composite@2.0.0
Fetching connector/appc.arrowdb@1.3.0
Installed 2 modules
Installed:  connector/appc.composite, connector/appc.arrowdb
INFO   | API Builder Tools/3.0.0-20 welcome/1.0.0
INFO   | APIKey is: FLjh8yOab98VKR6zsaB9hJcuIAPd0T6W
INFO   | Starting connector/appc.arrowdb@1.3.0
INFO   | Started connector/appc.arrowdb
INFO   | Starting connector/appc.composite@2.0.0
INFO   | Started connector/appc.composite
INFO   | Access the swagger API documentation at http://localhost:8080/apidoc/swagger.json
INFO   | Access to API Builder Console restricted to: 127.0.0.1, ::1, ::1
INFO   | Access API Builder Console at http://localhost:8080/console. This will only be available on your dev environment.
INFO   | server started on port 8080
```

## Open the Console
*Note:* By default the console is only accessible to localhost. If you need to access it remotely edit conf/default.js
```
...
// The hostnames or IPs from which connections to admin are allowed. Hostnames must be resolvable on the
// server. IP ranges can also be specified. e.g. [ 'localhost', '192.168.1.0/24', '10.1.1.1' ]
// An empty list [] will allow unrestricted access, though this is not recommended due to security concerns.
allowedHosts: [
	'localhost', '::1'
],
...
```

In your favourite browser open http://localhost:8080/console. If you're not already authenitcated to the Axway Platform then you will be redirected.
*Note:* if you're note accessing the console via _localhost_ then the Platform login will not redirect back to console and you will have to enter http://localhost:8080/console again.

![SummaryView](./imgs/localhost_8080_console_project_summary.png)
