# 04 FlowSDK

Apart from the model nodes, API Builder only ships with a handfull of nodes.

![StockNodes](./imgs/StockNodes.png)

It may seem that this may limit the complexity of flows that can be created. However API Builder is extensible, using the Axway Flow SDK users can create their own nodes to meet their own requirements.

The observant might have notice that in the previous exercise the address had an additional _id_ field, perhaps this is undesirable.

```
{
  "message": "Welcome",
  "name": "Mr. Bruce Wayne",
  "address": {
    "id": "5a15679493e7370284001471",
    "cid": "batman",
    "address1": "Wayne Manor",
    "address2": "107 Mountain Drive",
    "city": "Gotham City",
    "state": "New York",
    "country": "USA",
    "postalcode": "0"
  }
}
```

There are many ways to achieve this but for this example we'll create a node that clones an object but can filter the fields in the object. Then we'll update the flow to use this node to exclude the id from the address.

## Installation

The SDK is published to NPMJS and can be installed with:

```
w:\training\04_FlowSDK> npm install -g axway-flow-sdk
...
w:\training\04_FlowSDK> axway-flow

Usage: axway-flow [options]

Options:
   -n, --name          The name of the flow-node, e.g. "base64".
   -d, --description   Description of the flow-node handler (optional).
   -h, --help          This usage.
```

The  ```axway-flow``` command can now be used to create a _node_ project.

```
axway-flow -n gm-objectfilter
```

This will create a project called ```nodehandler-gm-objectfilter```.

## Implementing the nodes

The generated project comes with ready to build to make editing it much more intuitive. To start install the dependencies.

```
npm install
```

For this node there are no additional depenedency requirements but if there were they could be installed with ```npm install -S <name>```. The basic node project has 3 pieces - the node specification in _index.js_, the node implementation in _action.js_ and the the tests in _test_.

### Node Specification
Our example scenario requires a method that takes an object and a list of field names and outputs an object. For demonstration purposes we'll have two methods one that includes the specified fields and one that excludes them.

Name and description.
```
flownodes.add('gm-objectfilter', {
	name: 'Filter',
	icon: 'icon.svg',
	description: 'Filter the object fields.'
});
```

Include Method
```
flownodes
	.method('include', {
		name: 'Include',
		description: 'Include the selected fields.'
	})
	.parameter('source', {
		description: 'The source object to filter.',
		type: 'object'
	})
	.parameter('fields', {
		description: 'The the fields to include.',
		type: 'array',
		items: {
			type: 'string'
		}
	})
	.output('next', {
		name: 'Next',
		context: '$.filtered',
		schema: {
			type: 'object'
		}
	})
	.action(include);
```

Exclude Method
```
flownodes
	.method('exclude', {
		name: 'Include',
		description: 'Include the selected fields.'
	})
	.parameter('source', {
		description: 'The source object to filter.',
		type: 'object'
	})
	.parameter('fields', {
		description: 'The the fields to exclude.',
		type: 'array',
		items: {
			type: 'string'
		}
	})
	.output('next', {
		name: 'Next',
		context: '$.filtered',
		schema: {
			type: 'object'
		}
	})
	.action(exclude);
```

Node the _flownodes_ here follows a builder pattern and these are all chainable, they're just being broken down here for readbility.
