var Arrow = require('arrow');
var Model = Arrow.createModel('ContactAddress', {
    "fields": {
        "cid": {
            "type": "string",
            "required": true
        },
        "address1": {
            "type": "string",
            "required": true
        },
        "address2": {
            "type": "string"
        },
        "address3": {
            "type": "string"
        },
        "city": {
            "type": "string",
            "required": true
        },
		"state": {
            "type": "string",
            "required": true
        },
        "country": {
            "type": "string",
            "required": true
        },
        "postalcode": {
            "type": "string",
            "required": true
        }
    },
    "connector": "appc.arrowdb",
    "actions": [],
    "singular": "contactaddress",
    "plural": "contactaddresses",
    "description": "The contact's address."
});
module.exports = Model;
