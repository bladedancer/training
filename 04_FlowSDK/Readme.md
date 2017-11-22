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

The generated project comes with ready to build to make editing it much more intuitive.
