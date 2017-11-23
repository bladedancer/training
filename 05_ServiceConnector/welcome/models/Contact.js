var Arrow = require('arrow');
var Model = Arrow.createModel('Contact', {
    "fields": {
        "cid": {
            "type": "string",
            "description": "The contact id.",
            "required": true
        },
        "firstname": {
            "type": "string",
            "description": "The contacts first name.",
            "required": true
        },
        "lastname": {
            "type": "string",
            "description": "The contacts last name.",
            "required": true
        },
        "salutation": {
            "type": "string",
            "description": "The salutation to use when addressing the contact."
        },
        "email": {
            "type": "string",
            "required": true
        }
    },
    "connector": "appc.arrowdb",
    "actions": [],
    "singular": "contact",
    "plural": "contacts",
    "description": "The contact's details"
});
module.exports = Model;