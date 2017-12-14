var Arrow = require('arrow');
var Model = Arrow.createModel('Contact', {
    "description": "The contact's details",
    "connector": "appc.arrowdb",
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
    "actions": []
});
module.exports = Model;