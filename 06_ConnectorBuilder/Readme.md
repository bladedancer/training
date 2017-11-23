# 05 Connector Builder

Connector Builder is a tool to allow you to create _Service Connectors_. You provide the _Swagger_ definition for the API and it will create a service connector that can then be used in a flow to interact with the backend service.

## Installation

Like the Axway Flow SDK this is a tool that you can install globally:

```
npm install -g connector-builder
```

If it's not publicly available yet then it can be installed from the internal registry:

```
npm --registry http://registry.ecd.axway.int:8081/artifactory/api/npm/registry-npm install -g connector-builder
```



## Installation


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

Restart the API Builder console and you should now see the _Concur_ connector.

![ConnectorTool](./imgs/ConnectorTool.png)

This new node can now be used in the flow like any other node. Concur is for an expense tracking, so in this contrived example we'll query the pending expenses for the contact.

## Model Updates

Concur's user names are email based so we'll add a new field to our _Contact_ model for email.

![ContactEmailEdit](./imgs/ContactEmailEdit.png)

Rather than use the _Update contact_ API on _Contact_ well use the dashboard to edit the data. Navigate to the dashboard list of apps https://platform-preprod.axwaytest.net/#/app and search for you application. Once open click on the _Manage Data_

![ManageData](./imgs/ManageData.png)

Cick on _Custom Objects_ and from the _Select Type_ drop down select contact. Expand the batman row (only going to update batman for this example but you could do them all).

![BatmanView](./imgs/BatmanView.png)

Click the pencil and in the _Fields_ add an email:

```
{
  "cid": "batman",
  "firstname": "Bruce",
  "lastname": "Wayne",
  "salutation": "Mr.",
  "email": "batman@gotham.com"
}
```

## Updated Use case

Concur is an expenses tracking application, so we will extend the flow to query and total the users expenses and include that in the response. Batman's Concur expenses look like this:

![BatmanExpenses](./imgs/BatmanExpenses.png)

We're going to add the Concur node to the flow with the _getReports_ method. Then we'll ues a _Compose_ node to total the expenses.

![UpdatedFlow](./imgs/UpdatedFlow.png)

*Note:* This flow is starting to show some of the issues with the current layout engine, this will be improved in the future.

### Get User Expenses
*Type:* SAP Concur

*Method:* getReports

As this node is going to user the contact's email as the user filter it needs to run after the _Query Contact_ node. It has a number of outputs for the various error codes, we'll just route them all to the same _Error_ node for this demo.

![GetReports](./imgs/GetReports.png) ![GetReportsOutput](./imgs/GetReportsOutput.png)

The connector requires an authentication token _x-vendor-authorization_. Also set the _user_ filter to _$.contacts[0].email_. The success output _200_ saves the result in _$.expenses_.


### Total Expenses
*Type:* Compose

*Method:* Format object

The _Compose_ node is quite powerful and can be used to evaluate code. It's generally better to create custom nodes or codeblocks for tasks like this but just to show it can be done with the _Compose_ node.

![TotalExpenses](./imgs/TotalExpenses.png) ![GetReportsOutput](./imgs/TotalExpensesOutput.png)

The template is using the evaluation and iteration features of [dot](http://olado.github.io/doT/).

```
{{ var total = 0; }}
{{~it :data:index}}
{{total += parseInt(data.Total);}}
{{~}}
{{=total}}
```

The output of the template evaluation is stored as _$.expenseTotal_.


### Format Response
*Type:* Compose

*Method:* Format object

Update the _Format Response_ node to include the expenses in it's template:

```
{
  "message": "Welcome",
  "name": "{{?it.contacts[0].salutation}}{{=it.contacts[0].salutation}} {{?}}{{=it.contacts[0].firstname}} {{=it.contacts[0].lastname}}",
  "address": {{=JSON.stringify(it.address)}},
  "expenses":  {{=it.expenseTotal}}
}
```

## Update the endpoint definition

As before, we're changing the response and so should update the endpoint definition to include this new field. Currently this has to be done on the file system.

Stop API Builder and open  _endpoints\welcome.json_. Change the response to include _expenses_:

```
"schema": {
	"type": "object",
	"properties": {
		"message": {
			"type": "string"
		},
		"name": {
			"type": "string"
		},
		"address": {
			"$ref": "schema:///model/ContactAddress"
		},
		"expenses": {
			"type": "number"
		}
	}
}
```

## Test API

Open the _Test API_ panel for the _Welcome_ API and execute it with a _cid_ of _batman_. The response should now include the expenses total:

```
{
  "message": "Welcome",
  "name": "Mr. Bruce Wayne",
  "address": {
    "address1": "Wayne Manor",
    "address2": "107 Mountain Drive",
    "city": "Gotham City",
    "state": "New York",
    "country": "USA",
    "postalcode": "0"
  },
  "expenses": 4210
}
```
