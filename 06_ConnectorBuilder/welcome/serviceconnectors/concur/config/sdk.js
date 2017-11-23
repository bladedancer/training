module.exports = {
    createAttendee: {
        operationId: "createAttendee",
        description: "Creates a new attendee.",
        path: "/attendees",
        method: "post",
        uri: "/attendees",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "user",
                    description: "The login ID of the user that has added the attendee to an expense",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [],
            formData: [],
            body: [
                {
                    schema: {
                        $ref: "#/definitions/attendee"
                    },
                    "x-sample": "{\"CurrencyCode\":\"USD\",\"OwnerName\":\"Elements, Claude\",\"FirstName\":\"Claude\",\"ExternalID\":faker.internet.email(),\"TotalAmountPrevYear\":0,\"TotalAmountYTD\":0,\"LastName\":\"Elements\",\"AttendeeTypeID\":\"gWjYIioJrIwLMmDyXZ4JiPuGppeMbMw\",\"VersionNumber\":1}",
                    "in": "body",
                    name: "body",
                    description: "The Attendee object to create.",
                    required: true,
                    schemaName: "attendee",
                    properties: {
                        Company: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom19: {
                            $ref: "#/definitions/CustomField"
                        },
                        OwnerName: {
                            type: "string"
                        },
                        Custom18: {
                            $ref: "#/definitions/CustomField"
                        },
                        ExternalID: {
                            type: "string"
                        },
                        Custom13: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom12: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom11: {
                            $ref: "#/definitions/CustomField"
                        },
                        HasExceptionsYTD: {
                            type: "boolean"
                        },
                        Custom10: {
                            $ref: "#/definitions/CustomField"
                        },
                        AttendeeTypeCode: {
                            type: "string"
                        },
                        Custom17: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom16: {
                            $ref: "#/definitions/CustomField"
                        },
                        URI: {
                            type: "string"
                        },
                        Custom15: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom14: {
                            $ref: "#/definitions/CustomField"
                        },
                        CurrencyCode: {
                            type: "string"
                        },
                        MiddleInitial: {
                            type: "string"
                        },
                        TotalAmountPrevYear: {
                            format: "int32",
                            type: "integer"
                        },
                        TotalAmountYTD: {
                            format: "int32",
                            type: "integer"
                        },
                        ID: {
                            type: "string"
                        },
                        AttendeeTypeID: {
                            type: "string"
                        },
                        HasExceptionsPrevYear: {
                            type: "boolean"
                        },
                        OwnerLoginID: {
                            type: "string"
                        },
                        FirstName: {
                            type: "string"
                        },
                        Custom24: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom23: {
                            $ref: "#/definitions/CustomField"
                        },
                        Title: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom22: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom21: {
                            $ref: "#/definitions/CustomField"
                        },
                        VersionNumber: {
                            format: "int32",
                            type: "integer"
                        },
                        Custom25: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom4: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom3: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom2: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom1: {
                            $ref: "#/definitions/CustomField"
                        },
                        Suffix: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom20: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom8: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom7: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom6: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom5: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom9: {
                            $ref: "#/definitions/CustomField"
                        },
                        LastName: {
                            type: "string"
                        }
                    },
                    returnType: "Item"
                }
            ]
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "attendee",
                properties: {
                    Company: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom19: {
                        $ref: "#/definitions/CustomField"
                    },
                    OwnerName: {
                        type: "string"
                    },
                    Custom18: {
                        $ref: "#/definitions/CustomField"
                    },
                    ExternalID: {
                        type: "string"
                    },
                    Custom13: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom12: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom11: {
                        $ref: "#/definitions/CustomField"
                    },
                    HasExceptionsYTD: {
                        type: "boolean"
                    },
                    Custom10: {
                        $ref: "#/definitions/CustomField"
                    },
                    AttendeeTypeCode: {
                        type: "string"
                    },
                    Custom17: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom16: {
                        $ref: "#/definitions/CustomField"
                    },
                    URI: {
                        type: "string"
                    },
                    Custom15: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom14: {
                        $ref: "#/definitions/CustomField"
                    },
                    CurrencyCode: {
                        type: "string"
                    },
                    MiddleInitial: {
                        type: "string"
                    },
                    TotalAmountPrevYear: {
                        format: "int32",
                        type: "integer"
                    },
                    TotalAmountYTD: {
                        format: "int32",
                        type: "integer"
                    },
                    ID: {
                        type: "string"
                    },
                    AttendeeTypeID: {
                        type: "string"
                    },
                    HasExceptionsPrevYear: {
                        type: "boolean"
                    },
                    OwnerLoginID: {
                        type: "string"
                    },
                    FirstName: {
                        type: "string"
                    },
                    Custom24: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom23: {
                        $ref: "#/definitions/CustomField"
                    },
                    Title: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom22: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom21: {
                        $ref: "#/definitions/CustomField"
                    },
                    VersionNumber: {
                        format: "int32",
                        type: "integer"
                    },
                    Custom25: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom4: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom3: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom2: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom1: {
                        $ref: "#/definitions/CustomField"
                    },
                    Suffix: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom20: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom8: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom7: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom6: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom5: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom9: {
                        $ref: "#/definitions/CustomField"
                    },
                    LastName: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "409": {
                description: "Conflict - If a resource being created already exists",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getAttendees: {
        operationId: "getAttendees",
        description: "Gets all attendees owned by the specified user.",
        path: "/attendees",
        method: "get",
        uri: "/attendees",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "attendeeTypeID",
                    description: "The ID of an attendee type",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "externalID",
                    description: "The external ID of an attendee",
                    type: "string",
                    required: false
                },
                {
                    "x-sample": "gWk$poAs$s2X0PNDjRKgZvfo9$pR1WpB",
                    "in": "query",
                    name: "continuationToken",
                    description: "The page number of resources to retrieve",
                    type: "string",
                    required: false
                },
                {
                    "x-sample": "25",
                    "in": "query",
                    name: "pageSize",
                    description: "The number of resources to return in a given page",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "user",
                    description: "The login ID of the user that has added the attendee to an expense. ",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "attendeeList",
                properties: {
                    nextContinuationToken: {
                        type: "string"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/attendee"
                        }
                    },
                    returnedCount: {
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    createList: {
        operationId: "createList",
        description: "Create a new List",
        path: "/lists",
        method: "post",
        uri: "/lists",
        parameters: {
            query: [],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [],
            formData: [],
            body: [
                {
                    schema: {
                        $ref: "#/definitions/list"
                    },
                    "x-sample": "{\"DisplayCodeFirst\":true,\"IsVendorList\":true,\"SearchCriteriaCode\":\"TEXT\",\"ID\":\"gWvcho1i39rwCp0PpScjV7L$p8WKmh0S5LHg\",\"URI\":\"https://www.concursolutions.com/api/v3.0/common/lists/gWvcho1i39rwCp0PpScjV7L$p8WKmh0S5LHg\",\"Name\":\"Vendors - Travel Agents\"}",
                    "in": "body",
                    name: "body",
                    description: "JSON of the list to create",
                    required: true,
                    schemaName: "list",
                    properties: {
                        DisplayCodeFirst: {
                            type: "boolean"
                        },
                        Level7Code: {
                            type: "string"
                        },
                        Level2Code: {
                            type: "string"
                        },
                        IsVendorList: {
                            type: "boolean"
                        },
                        Level4Code: {
                            type: "string"
                        },
                        URI: {
                            type: "string"
                        },
                        Level6Code: {
                            type: "string"
                        },
                        Level8Code: {
                            type: "string"
                        },
                        Name: {
                            type: "string"
                        },
                        Level1Code: {
                            type: "string"
                        },
                        SearchCriteriaCode: {
                            type: "string"
                        },
                        ExternalThreshold: {
                            type: "string"
                        },
                        ID: {
                            type: "string"
                        },
                        Level3Code: {
                            type: "string"
                        },
                        Level5Code: {
                            type: "string"
                        },
                        Level9Code: {
                            type: "string"
                        },
                        ConnectorID: {
                            type: "string"
                        }
                    },
                    returnType: "Item"
                }
            ]
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "lists",
                properties: {
                    ID: {
                        type: "string"
                    },
                    URI: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "409": {
                description: "Conflict - If a resource being created already exists",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getLists: {
        operationId: "getLists",
        description: "Get Lists",
        path: "/lists",
        method: "get",
        uri: "/lists",
        parameters: {
            query: [
                {
                    "x-sample": "25",
                    "in": "query",
                    name: "pageSize",
                    description: "The number of resources to return in a given page",
                    type: "number",
                    required: false
                },
                {
                    "in": "query",
                    name: "continuationToken",
                    description: "The page number of resources to retrieve",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "listList",
                properties: {
                    nextContinuationToken: {
                        type: "string"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/list"
                        }
                    },
                    returnedCount: {
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    updateListsItemByID: {
        operationId: "updateListsItemByID",
        description: "Get or Search for Expense Reports.",
        path: "/lists/{listId}/items/{ID}",
        method: "patch",
        uri: "/lists/{listId}/items/{ID}",
        parameters: {
            query: [],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "in": "path",
                    name: "listId",
                    description: "The list ID",
                    type: "string",
                    required: true
                },
                {
                    "x-sample": "gWqnR7mLiG$p55LpbOfIdg2zeurMLK1BBKFw",
                    "in": "path",
                    name: "ID",
                    description: "ID of the Item to retrieve",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: [
                {
                    schema: {
                        $ref: "#/definitions/item"
                    },
                    "x-sample": "{\"Level1Code\": faker.name.findName(),\"ListID\":\"gWvcho1i39rwCp0PpScjV7L$p8WKmh0S5LHg\",\"Name\":\"Rosenbluth International\"}",
                    "in": "body",
                    name: "body",
                    description: "Item to be updated. Only supplied attributes will be updated",
                    required: true,
                    schemaName: "item",
                    properties: {
                        Level7Code: {
                            type: "string"
                        },
                        ParentID: {
                            type: "string"
                        },
                        Level2Code: {
                            type: "string"
                        },
                        Level4Code: {
                            type: "string"
                        },
                        URI: {
                            type: "string"
                        },
                        Level6Code: {
                            type: "string"
                        },
                        Level8Code: {
                            type: "string"
                        },
                        Name: {
                            type: "string"
                        },
                        Level1Code: {
                            type: "string"
                        },
                        Level10Code: {
                            type: "string"
                        },
                        ListID: {
                            type: "string"
                        },
                        ID: {
                            type: "string"
                        },
                        Level3Code: {
                            type: "string"
                        },
                        Level5Code: {
                            type: "string"
                        },
                        Level9Code: {
                            type: "string"
                        }
                    },
                    returnType: "Item"
                }
            ]
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "Object",
                properties: {
                    nextContinuationToken: {
                        type: "string"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/list"
                        }
                    },
                    returnedCount: {
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getListsItemByID: {
        operationId: "getListsItemByID",
        description: "Get or Search for Expense Reports.",
        path: "/lists/{listId}/items/{ID}",
        method: "get",
        uri: "/lists/{listId}/items/{ID}",
        parameters: {
            query: [],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "x-sample": "gWqnR7mLiG$p55LpbOfIdg2zeurMLK1BBKFw",
                    "in": "path",
                    name: "ID",
                    description: "The unique identifier for the listItem.",
                    type: "string",
                    required: true
                },
                {
                    "x-sample": "gWvcho1i39rwCp0PpScjV7L$p8WKmh0S5LHg",
                    "in": "path",
                    name: "listId",
                    description: "The unique identifier for the list this item is a member of.",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "item",
                properties: {
                    Level7Code: {
                        type: "string"
                    },
                    ParentID: {
                        type: "string"
                    },
                    Level2Code: {
                        type: "string"
                    },
                    Level4Code: {
                        type: "string"
                    },
                    URI: {
                        type: "string"
                    },
                    Level6Code: {
                        type: "string"
                    },
                    Level8Code: {
                        type: "string"
                    },
                    Name: {
                        type: "string"
                    },
                    Level1Code: {
                        type: "string"
                    },
                    Level10Code: {
                        type: "string"
                    },
                    ListID: {
                        type: "string"
                    },
                    ID: {
                        type: "string"
                    },
                    Level3Code: {
                        type: "string"
                    },
                    Level5Code: {
                        type: "string"
                    },
                    Level9Code: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    deleteListsItemByID: {
        operationId: "deleteListsItemByID",
        description: "Delete an Item",
        path: "/lists/{listId}/items/{ID}",
        method: "delete",
        uri: "/lists/{listId}/items/{ID}",
        parameters: {
            query: [],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "in": "path",
                    name: "listId",
                    description: "ListID of the Item",
                    type: "string",
                    required: true
                },
                {
                    "in": "path",
                    name: "ID",
                    description: "ID of the Item to retrieve",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    updateAttendeeByAttendeesId: {
        operationId: "updateAttendeeByAttendeesId",
        description: "Updates the specified attendee. Only the fields provided in the supplied object are updated. Missing fields are not altered.",
        path: "/attendees/{attendeesId}",
        method: "patch",
        uri: "/attendees/{attendeesId}",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "user",
                    description: "The login ID of the user that has added the Attendee to an expense",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "x-sample": "gWnfI$p2dqmtrswoZF9O9BzK98HptDcCJxgA",
                    "in": "path",
                    name: "attendeesId",
                    description: "The attendee ID.",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: [
                {
                    schema: {
                        $ref: "#/definitions/attendee"
                    },
                    "x-sample": "{\"LastName\":\"Elementssss\"}",
                    "in": "body",
                    name: "body",
                    description: "The partial or complete Attendee object to update.",
                    required: true,
                    schemaName: "attendee",
                    properties: {
                        Company: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom19: {
                            $ref: "#/definitions/CustomField"
                        },
                        OwnerName: {
                            type: "string"
                        },
                        Custom18: {
                            $ref: "#/definitions/CustomField"
                        },
                        ExternalID: {
                            type: "string"
                        },
                        Custom13: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom12: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom11: {
                            $ref: "#/definitions/CustomField"
                        },
                        HasExceptionsYTD: {
                            type: "boolean"
                        },
                        Custom10: {
                            $ref: "#/definitions/CustomField"
                        },
                        AttendeeTypeCode: {
                            type: "string"
                        },
                        Custom17: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom16: {
                            $ref: "#/definitions/CustomField"
                        },
                        URI: {
                            type: "string"
                        },
                        Custom15: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom14: {
                            $ref: "#/definitions/CustomField"
                        },
                        CurrencyCode: {
                            type: "string"
                        },
                        MiddleInitial: {
                            type: "string"
                        },
                        TotalAmountPrevYear: {
                            format: "int32",
                            type: "integer"
                        },
                        TotalAmountYTD: {
                            format: "int32",
                            type: "integer"
                        },
                        ID: {
                            type: "string"
                        },
                        AttendeeTypeID: {
                            type: "string"
                        },
                        HasExceptionsPrevYear: {
                            type: "boolean"
                        },
                        OwnerLoginID: {
                            type: "string"
                        },
                        FirstName: {
                            type: "string"
                        },
                        Custom24: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom23: {
                            $ref: "#/definitions/CustomField"
                        },
                        Title: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom22: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom21: {
                            $ref: "#/definitions/CustomField"
                        },
                        VersionNumber: {
                            format: "int32",
                            type: "integer"
                        },
                        Custom25: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom4: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom3: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom2: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom1: {
                            $ref: "#/definitions/CustomField"
                        },
                        Suffix: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom20: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom8: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom7: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom6: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom5: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom9: {
                            $ref: "#/definitions/CustomField"
                        },
                        LastName: {
                            type: "string"
                        }
                    },
                    returnType: "Item"
                }
            ]
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "Object",
                properties: {
                    nextContinuationToken: {
                        type: "string"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/list"
                        }
                    },
                    returnedCount: {
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getAttendeeByAttendeesId: {
        operationId: "getAttendeeByAttendeesId",
        description: "Gets a single attendee by ID.",
        path: "/attendees/{attendeesId}",
        method: "get",
        uri: "/attendees/{attendeesId}",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "user",
                    description: "The login ID of the user that has added the attendee to an expense.",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "x-sample": "gWnfI$p2dqmtrswoZF9O9BzK98HptDcCJxgA",
                    "in": "path",
                    name: "attendeesId",
                    description: "The attendee ID.",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "attendee",
                properties: {
                    Company: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom19: {
                        $ref: "#/definitions/CustomField"
                    },
                    OwnerName: {
                        type: "string"
                    },
                    Custom18: {
                        $ref: "#/definitions/CustomField"
                    },
                    ExternalID: {
                        type: "string"
                    },
                    Custom13: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom12: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom11: {
                        $ref: "#/definitions/CustomField"
                    },
                    HasExceptionsYTD: {
                        type: "boolean"
                    },
                    Custom10: {
                        $ref: "#/definitions/CustomField"
                    },
                    AttendeeTypeCode: {
                        type: "string"
                    },
                    Custom17: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom16: {
                        $ref: "#/definitions/CustomField"
                    },
                    URI: {
                        type: "string"
                    },
                    Custom15: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom14: {
                        $ref: "#/definitions/CustomField"
                    },
                    CurrencyCode: {
                        type: "string"
                    },
                    MiddleInitial: {
                        type: "string"
                    },
                    TotalAmountPrevYear: {
                        format: "int32",
                        type: "integer"
                    },
                    TotalAmountYTD: {
                        format: "int32",
                        type: "integer"
                    },
                    ID: {
                        type: "string"
                    },
                    AttendeeTypeID: {
                        type: "string"
                    },
                    HasExceptionsPrevYear: {
                        type: "boolean"
                    },
                    OwnerLoginID: {
                        type: "string"
                    },
                    FirstName: {
                        type: "string"
                    },
                    Custom24: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom23: {
                        $ref: "#/definitions/CustomField"
                    },
                    Title: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom22: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom21: {
                        $ref: "#/definitions/CustomField"
                    },
                    VersionNumber: {
                        format: "int32",
                        type: "integer"
                    },
                    Custom25: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom4: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom3: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom2: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom1: {
                        $ref: "#/definitions/CustomField"
                    },
                    Suffix: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom20: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom8: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom7: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom6: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom5: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom9: {
                        $ref: "#/definitions/CustomField"
                    },
                    LastName: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    deleteAttendeeByAttendeesId: {
        operationId: "deleteAttendeeByAttendeesId",
        description: "Deletes the specified attendee.",
        path: "/attendees/{attendeesId}",
        method: "delete",
        uri: "/attendees/{attendeesId}",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "user",
                    description: "The login ID of the user that has added the attendee to an expense",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "x-sample": "gWnfI$p2dqmtrswoZF9O9BzK98HptDcCJxgA",
                    "in": "path",
                    name: "attendeesId",
                    description: "The ID of the attendee to delete.",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    createReport: {
        operationId: "createReport",
        description: "Create a new report",
        path: "/reports",
        method: "post",
        uri: "/reports",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "user",
                    description: "The login ID for the Report Owner.",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [],
            formData: [],
            body: [
                {
                    schema: {
                        $ref: "#/definitions/report"
                    },
                    "x-sample": "{\"LastModifiedDate\":\"2016-01-19T22:53:23.117\",\"TotalApprovedAmount\":100,\"OwnerName\":\"Claude Elements\",\"AmountDueCompanyCard\":0,\"HasException\":true,\"ReceiptsReceived\":false,\"ApprovalStatusCode\":\"A_NOTF\",\"CreateDate\":\"2016-01-12T18:14:05.997\",\"Name\":\"Test\",\"CurrencyCode\":\"USD\",\"EverSentBack\":false,\"TotalClaimedAmount\":100,\"PersonalAmount\":0,\"ApprovalStatusName\":\"Not Submitted\",\"LastComment\":\"This is a test.\",\"Total\":100,\"Country\":\"US\",\"AmountDueEmployee\":100,\"LedgerName\":\"DEFAULT\",\"PaymentStatusCode\":\"P_NOTP\",\"PaymentStatusName\":\"Not Paid\"}",
                    "in": "body",
                    name: "body",
                    description: "The report object to create",
                    required: true,
                    schemaName: "report",
                    properties: {
                        LastModifiedDate: {
                            format: "date-time",
                            type: "string"
                        },
                        Custom19: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom18: {
                            $ref: "#/definitions/CustomField"
                        },
                        SubmitDate: {
                            format: "date-time",
                            type: "string"
                        },
                        Custom13: {
                            $ref: "#/definitions/CustomField"
                        },
                        ApproverLoginID: {
                            type: "string"
                        },
                        Custom12: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom11: {
                            $ref: "#/definitions/CustomField"
                        },
                        ReceiptsReceived: {
                            type: "boolean"
                        },
                        Custom10: {
                            $ref: "#/definitions/CustomField"
                        },
                        ApprovalStatusCode: {
                            type: "string"
                        },
                        Custom17: {
                            $ref: "#/definitions/CustomField"
                        },
                        CreateDate: {
                            format: "date-time",
                            type: "string"
                        },
                        Custom16: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom15: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom14: {
                            $ref: "#/definitions/CustomField"
                        },
                        Name: {
                            type: "string"
                        },
                        CurrencyCode: {
                            type: "string"
                        },
                        TotalClaimedAmount: {
                            format: "int32",
                            type: "integer"
                        },
                        LastComment: {
                            type: "string"
                        },
                        ID: {
                            type: "string"
                        },
                        LedgerName: {
                            type: "string"
                        },
                        PaymentStatusName: {
                            type: "string"
                        },
                        PolicyID: {
                            type: "string"
                        },
                        WorkflowActionUrl: {
                            type: "string"
                        },
                        OwnerLoginID: {
                            type: "string"
                        },
                        AmountDueCompanyCard: {
                            format: "int32",
                            type: "integer"
                        },
                        HasException: {
                            type: "boolean"
                        },
                        CountrySubdivision: {
                            type: "string"
                        },
                        Custom4: {
                            $ref: "#/definitions/CustomField"
                        },
                        EverSentBack: {
                            type: "boolean"
                        },
                        Custom3: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom2: {
                            $ref: "#/definitions/CustomField"
                        },
                        ApprovalStatusName: {
                            type: "string"
                        },
                        Custom1: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom8: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom7: {
                            $ref: "#/definitions/CustomField"
                        },
                        ProcessingPaymentDate: {
                            format: "date-time",
                            type: "string"
                        },
                        Custom6: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom5: {
                            $ref: "#/definitions/CustomField"
                        },
                        Country: {
                            type: "string"
                        },
                        Custom9: {
                            $ref: "#/definitions/CustomField"
                        },
                        PaymentStatusCode: {
                            type: "string"
                        },
                        TotalApprovedAmount: {
                            format: "int32",
                            type: "integer"
                        },
                        OwnerName: {
                            type: "string"
                        },
                        URI: {
                            type: "string"
                        },
                        PaidDate: {
                            format: "date-time",
                            type: "string"
                        },
                        ApproverName: {
                            type: "string"
                        },
                        UserDefinedDate: {
                            format: "date-time",
                            type: "string"
                        },
                        OrgUnit6: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit5: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit4: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit3: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit2: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit1: {
                            $ref: "#/definitions/CustomField"
                        },
                        PersonalAmount: {
                            format: "int32",
                            type: "integer"
                        },
                        Custom20: {
                            $ref: "#/definitions/CustomField"
                        },
                        Total: {
                            format: "int32",
                            type: "integer"
                        },
                        AmountDueEmployee: {
                            format: "int32",
                            type: "integer"
                        }
                    },
                    returnType: "Item"
                }
            ]
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "report",
                properties: {
                    LastModifiedDate: {
                        format: "date-time",
                        type: "string"
                    },
                    Custom19: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom18: {
                        $ref: "#/definitions/CustomField"
                    },
                    SubmitDate: {
                        format: "date-time",
                        type: "string"
                    },
                    Custom13: {
                        $ref: "#/definitions/CustomField"
                    },
                    ApproverLoginID: {
                        type: "string"
                    },
                    Custom12: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom11: {
                        $ref: "#/definitions/CustomField"
                    },
                    ReceiptsReceived: {
                        type: "boolean"
                    },
                    Custom10: {
                        $ref: "#/definitions/CustomField"
                    },
                    ApprovalStatusCode: {
                        type: "string"
                    },
                    Custom17: {
                        $ref: "#/definitions/CustomField"
                    },
                    CreateDate: {
                        format: "date-time",
                        type: "string"
                    },
                    Custom16: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom15: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom14: {
                        $ref: "#/definitions/CustomField"
                    },
                    Name: {
                        type: "string"
                    },
                    CurrencyCode: {
                        type: "string"
                    },
                    TotalClaimedAmount: {
                        format: "int32",
                        type: "integer"
                    },
                    LastComment: {
                        type: "string"
                    },
                    ID: {
                        type: "string"
                    },
                    LedgerName: {
                        type: "string"
                    },
                    PaymentStatusName: {
                        type: "string"
                    },
                    PolicyID: {
                        type: "string"
                    },
                    WorkflowActionUrl: {
                        type: "string"
                    },
                    OwnerLoginID: {
                        type: "string"
                    },
                    AmountDueCompanyCard: {
                        format: "int32",
                        type: "integer"
                    },
                    HasException: {
                        type: "boolean"
                    },
                    CountrySubdivision: {
                        type: "string"
                    },
                    Custom4: {
                        $ref: "#/definitions/CustomField"
                    },
                    EverSentBack: {
                        type: "boolean"
                    },
                    Custom3: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom2: {
                        $ref: "#/definitions/CustomField"
                    },
                    ApprovalStatusName: {
                        type: "string"
                    },
                    Custom1: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom8: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom7: {
                        $ref: "#/definitions/CustomField"
                    },
                    ProcessingPaymentDate: {
                        format: "date-time",
                        type: "string"
                    },
                    Custom6: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom5: {
                        $ref: "#/definitions/CustomField"
                    },
                    Country: {
                        type: "string"
                    },
                    Custom9: {
                        $ref: "#/definitions/CustomField"
                    },
                    PaymentStatusCode: {
                        type: "string"
                    },
                    TotalApprovedAmount: {
                        format: "int32",
                        type: "integer"
                    },
                    OwnerName: {
                        type: "string"
                    },
                    URI: {
                        type: "string"
                    },
                    PaidDate: {
                        format: "date-time",
                        type: "string"
                    },
                    ApproverName: {
                        type: "string"
                    },
                    UserDefinedDate: {
                        format: "date-time",
                        type: "string"
                    },
                    OrgUnit6: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit5: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit4: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit3: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit2: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit1: {
                        $ref: "#/definitions/CustomField"
                    },
                    PersonalAmount: {
                        format: "int32",
                        type: "integer"
                    },
                    Custom20: {
                        $ref: "#/definitions/CustomField"
                    },
                    Total: {
                        format: "int32",
                        type: "integer"
                    },
                    AmountDueEmployee: {
                        format: "int32",
                        type: "integer"
                    }
                },
                returnType: "Item"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "409": {
                description: "Conflict - If a resource being created already exists",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getReports: {
        operationId: "getReports",
        description: "Get or Search for Expense Reports.",
        path: "/reports",
        method: "get",
        uri: "/reports",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "expenseGroupConfigID",
                    description: "The unique identifier for the expense group configuration associated to the report's expense group",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "hasImages",
                    description: "Determines if the report has at least one expense entry with an entry image or if there is a report image for this report. FORMAT: true or false",
                    type: "boolean",
                    required: false
                },
                {
                    "in": "query",
                    name: "hasBillableExpenses",
                    description: "The IsBillable flag for at least one expense entry in the report. FORMAT: true or false.",
                    type: "boolean",
                    required: false
                },
                {
                    "in": "query",
                    name: "hasAttendees",
                    description: "Determines if the report has at least one expense entry with an attendee. FORMAT: true or false",
                    type: "boolean",
                    required: false
                },
                {
                    "in": "query",
                    name: "expenseTypeCode",
                    description: "The expense type code that is the expense type for at least one expense entry in the report. Use ExpenseTypeCode from Response of GET Expense Group Configurations V3.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "countryCode",
                    description: "The report country. Maximum 2 characters. Format: The ISO 3166-1 alpha-2 country code. Example: United States is US.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "currencyCode",
                    description: "The 3-letter ISO 4217 currency code for the report currency. Example: USD.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "continuationToken",
                    description: "The page number of resources to retrieve",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "hasVAT",
                    description: "Determines if the report has at least one expense entry with VAT details. FORMAT: true or false.",
                    type: "boolean",
                    required: false
                },
                {
                    "in": "query",
                    name: "isTestUser",
                    description: "The report owner is a test user using the report for testing purposes in a non-production environment. FORMAT: true or false.",
                    type: "boolean",
                    required: false
                },
                {
                    "in": "query",
                    name: "modifiedDateAfter",
                    description: "The report modified date is after this date. Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "modifiedDateBefore",
                    description: "The report modified date is before this date. Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "x-sample": "25",
                    "in": "query",
                    name: "pageSize",
                    description: "The number of resources to return in a given page",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "paidDateAfter",
                    description: "The report paid date is after this date. Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "userDefinedDateAfter",
                    description: "The report user defined date is after this date.Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "user",
                    description: "The login ID of the report owner(s) to use when searching for reports.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "paidDateBefore",
                    description: "The report paid date is before this date. Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "submitDateBefore",
                    description: "The report submit date is before this date.Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "submitDateAfter",
                    description: "The report submit date is after this date.Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "reimbursementMethod",
                    description: "The method the report owner will be reimbursed. VALUES: ADPPAYR - ADP Payroll; APCHECK - AP (Company Check); CNQRPAY - Expense Pay; PMTSERV - Other Payment Service. NOTE: PAY_PAL is NOT supported.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "processingPaymentDateBefore",
                    description: "The report processing payment date is before this date.Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "processingPaymentDateAfter",
                    description: "The report processing payment date is after this date. Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "paymentType",
                    description: "The unique identifier for the payment type that is the payment type for at least one expense entry in the report.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "paymentStatusCode",
                    description: "The payment status code for the report",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "createDateBefore",
                    description: "The report create date is before this date.Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "createDateAfter",
                    description: "The report create date is after this date.Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "attendeeTypeCode",
                    description: "The report contains expense entries that have attendees of the specified type.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "approverLoginID",
                    description: "The login ID for the report approver that is the current approver assigned to the report.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "approvalStatusCode",
                    description: "The status code for the Approval Status",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "userDefinedDateBefore",
                    description: "The report user defined date is before this date. Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "vendorName",
                    description: "The Vendor Description that is the vendor for at least one expense entry in the report.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "batchID",
                    description: "The unique identifier for a payment batch where there is at least one report payee within the report. Use the BatchID from Response of GET Payment Batch List.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "costObject",
                    description: "The list item code for an allocation field for at least allocation in the report.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "entryTransactionDateAfter",
                    description: "The entry transaction date for at least one expense entry in the report is after this date. Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "entryTransactionDateBefore",
                    description: "The entry transaction date for at least one expense entry in the report is before this date. Format: YYYY-MM-DD",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "reportList",
                properties: {
                    nextContinuationToken: {
                        type: "string"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/report"
                        }
                    },
                    returnedCount: {
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    createListItem: {
        operationId: "createListItem",
        description: "Create an Item ",
        path: "/lists/{listId}/items",
        method: "post",
        uri: "/lists/{listId}/items",
        parameters: {
            query: [],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "in": "path",
                    name: "listId",
                    description: "The list ID",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: [
                {
                    schema: {
                        $ref: "#/definitions/item"
                    },
                    "x-sample": "{\"Level1Code\": faker.random.word(),\"Name\":\"Rosenbluth International\"}",
                    "in": "body",
                    name: "body",
                    description: "Post Body for Creating a List Item in Concur",
                    required: true,
                    schemaName: "item",
                    properties: {
                        Level7Code: {
                            type: "string"
                        },
                        ParentID: {
                            type: "string"
                        },
                        Level2Code: {
                            type: "string"
                        },
                        Level4Code: {
                            type: "string"
                        },
                        URI: {
                            type: "string"
                        },
                        Level6Code: {
                            type: "string"
                        },
                        Level8Code: {
                            type: "string"
                        },
                        Name: {
                            type: "string"
                        },
                        Level1Code: {
                            type: "string"
                        },
                        Level10Code: {
                            type: "string"
                        },
                        ListID: {
                            type: "string"
                        },
                        ID: {
                            type: "string"
                        },
                        Level3Code: {
                            type: "string"
                        },
                        Level5Code: {
                            type: "string"
                        },
                        Level9Code: {
                            type: "string"
                        }
                    },
                    returnType: "Item"
                }
            ]
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "item",
                properties: {
                    Level7Code: {
                        type: "string"
                    },
                    ParentID: {
                        type: "string"
                    },
                    Level2Code: {
                        type: "string"
                    },
                    Level4Code: {
                        type: "string"
                    },
                    URI: {
                        type: "string"
                    },
                    Level6Code: {
                        type: "string"
                    },
                    Level8Code: {
                        type: "string"
                    },
                    Name: {
                        type: "string"
                    },
                    Level1Code: {
                        type: "string"
                    },
                    Level10Code: {
                        type: "string"
                    },
                    ListID: {
                        type: "string"
                    },
                    ID: {
                        type: "string"
                    },
                    Level3Code: {
                        type: "string"
                    },
                    Level5Code: {
                        type: "string"
                    },
                    Level9Code: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "409": {
                description: "Conflict - If a resource being created already exists",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getListsItems: {
        operationId: "getListsItems",
        description: "Get or Search for Expense Reports.",
        path: "/lists/{listId}/items",
        method: "get",
        uri: "/lists/{listId}/items",
        parameters: {
            query: [
                {
                    "x-sample": "25",
                    "in": "query",
                    name: "pageSize",
                    description: "The number of resources to return in a given page",
                    type: "number",
                    required: false
                },
                {
                    "in": "query",
                    name: "parentId",
                    description: "The unique identifier of this item's parent. Is empty when there is no parent.",
                    type: "string",
                    required: false
                },
                {
                    "x-sample": "gWjAxqYy$pQyJy7ybPvoC2I0xzLqLbYb4ZXA",
                    "in": "query",
                    name: "continuationToken",
                    description: "The page number of resources to retrieve",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "name",
                    description: "The name of the listItem. Text Max length: 64.",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level5Code",
                    description: "The item code for the fifth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level4Code",
                    description: "The item code for the fourth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level3Code",
                    description: "\t The item code for the third level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level2Code",
                    description: "The item code for the second level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level1Code",
                    description: "The item code for the first level of the list. All lists have at least a Level1Code. Text maximum 32 characters",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level10Code",
                    description: "\t The item code for the tenth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level6Code",
                    description: "The item code for the sixth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level7Code",
                    description: "\t The item code for the seventh level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level8Code",
                    description: "The item code for the eighth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters",
                    type: "string",
                    required: false
                },
                {
                    "in": "query",
                    name: "level9Code",
                    description: "\t The item code for the ninth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "in": "path",
                    name: "listId",
                    description: "The unique identifier for the list this item is a member of.",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "itemList",
                properties: {
                    nextContinuationToken: {
                        type: "string"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/item"
                        }
                    },
                    returnedCount: {
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    updateListByListId: {
        operationId: "updateListByListId",
        description: "Create a new List",
        path: "/lists/{listId}",
        method: "patch",
        uri: "/lists/{listId}",
        parameters: {
            query: [],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "x-sample": "gWvcho1i38r4DvacV2n3oQ8ZKP5peSe7Mkg",
                    "in": "path",
                    name: "listId",
                    description: "List ID",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: [
                {
                    schema: {
                        $ref: "#/definitions/list"
                    },
                    "x-sample": "{\"Name\":\"Vendors - Travel Agents2\"}",
                    "in": "body",
                    name: "body",
                    description: "JSON of the list to create",
                    required: true,
                    schemaName: "list",
                    properties: {
                        DisplayCodeFirst: {
                            type: "boolean"
                        },
                        Level7Code: {
                            type: "string"
                        },
                        Level2Code: {
                            type: "string"
                        },
                        IsVendorList: {
                            type: "boolean"
                        },
                        Level4Code: {
                            type: "string"
                        },
                        URI: {
                            type: "string"
                        },
                        Level6Code: {
                            type: "string"
                        },
                        Level8Code: {
                            type: "string"
                        },
                        Name: {
                            type: "string"
                        },
                        Level1Code: {
                            type: "string"
                        },
                        SearchCriteriaCode: {
                            type: "string"
                        },
                        ExternalThreshold: {
                            type: "string"
                        },
                        ID: {
                            type: "string"
                        },
                        Level3Code: {
                            type: "string"
                        },
                        Level5Code: {
                            type: "string"
                        },
                        Level9Code: {
                            type: "string"
                        },
                        ConnectorID: {
                            type: "string"
                        }
                    },
                    returnType: "Item"
                }
            ]
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "Object",
                properties: {
                    nextContinuationToken: {
                        type: "string"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/list"
                        }
                    },
                    returnedCount: {
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getListByListId: {
        operationId: "getListByListId",
        description: "Get Lists",
        path: "/lists/{listId}",
        method: "get",
        uri: "/lists/{listId}",
        parameters: {
            query: [],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "x-sample": "gWvcho1i38r4DvacV2n3oQ8ZKP5peSe7Mkg",
                    "in": "path",
                    name: "listId",
                    description: "ID of the list to retreive",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "list",
                properties: {
                    DisplayCodeFirst: {
                        type: "boolean"
                    },
                    Level7Code: {
                        type: "string"
                    },
                    Level2Code: {
                        type: "string"
                    },
                    IsVendorList: {
                        type: "boolean"
                    },
                    Level4Code: {
                        type: "string"
                    },
                    URI: {
                        type: "string"
                    },
                    Level6Code: {
                        type: "string"
                    },
                    Level8Code: {
                        type: "string"
                    },
                    Name: {
                        type: "string"
                    },
                    Level1Code: {
                        type: "string"
                    },
                    SearchCriteriaCode: {
                        type: "string"
                    },
                    ExternalThreshold: {
                        type: "string"
                    },
                    ID: {
                        type: "string"
                    },
                    Level3Code: {
                        type: "string"
                    },
                    Level5Code: {
                        type: "string"
                    },
                    Level9Code: {
                        type: "string"
                    },
                    ConnectorID: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    updateReportByReportId: {
        operationId: "updateReportByReportId",
        description: "Updates report specified in the URL. Only the fields provided in the supplied object will be updated, missing fields will not be altered.",
        path: "/reports/{reportId}",
        method: "patch",
        uri: "/reports/{reportId}",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "user",
                    description: "The login ID for the Report Owner.",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "x-sample": "97A720B12E0D496E9E7F",
                    "in": "path",
                    name: "reportId",
                    description: "The unique identifier for the report.",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: [
                {
                    schema: {
                        $ref: "#/definitions/report"
                    },
                    "x-sample": "{\"OwnerName\":\"claude\"}",
                    "in": "body",
                    name: "body",
                    description: "The report object to update",
                    required: false,
                    schemaName: "report",
                    properties: {
                        LastModifiedDate: {
                            format: "date-time",
                            type: "string"
                        },
                        Custom19: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom18: {
                            $ref: "#/definitions/CustomField"
                        },
                        SubmitDate: {
                            format: "date-time",
                            type: "string"
                        },
                        Custom13: {
                            $ref: "#/definitions/CustomField"
                        },
                        ApproverLoginID: {
                            type: "string"
                        },
                        Custom12: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom11: {
                            $ref: "#/definitions/CustomField"
                        },
                        ReceiptsReceived: {
                            type: "boolean"
                        },
                        Custom10: {
                            $ref: "#/definitions/CustomField"
                        },
                        ApprovalStatusCode: {
                            type: "string"
                        },
                        Custom17: {
                            $ref: "#/definitions/CustomField"
                        },
                        CreateDate: {
                            format: "date-time",
                            type: "string"
                        },
                        Custom16: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom15: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom14: {
                            $ref: "#/definitions/CustomField"
                        },
                        Name: {
                            type: "string"
                        },
                        CurrencyCode: {
                            type: "string"
                        },
                        TotalClaimedAmount: {
                            format: "int32",
                            type: "integer"
                        },
                        LastComment: {
                            type: "string"
                        },
                        ID: {
                            type: "string"
                        },
                        LedgerName: {
                            type: "string"
                        },
                        PaymentStatusName: {
                            type: "string"
                        },
                        PolicyID: {
                            type: "string"
                        },
                        WorkflowActionUrl: {
                            type: "string"
                        },
                        OwnerLoginID: {
                            type: "string"
                        },
                        AmountDueCompanyCard: {
                            format: "int32",
                            type: "integer"
                        },
                        HasException: {
                            type: "boolean"
                        },
                        CountrySubdivision: {
                            type: "string"
                        },
                        Custom4: {
                            $ref: "#/definitions/CustomField"
                        },
                        EverSentBack: {
                            type: "boolean"
                        },
                        Custom3: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom2: {
                            $ref: "#/definitions/CustomField"
                        },
                        ApprovalStatusName: {
                            type: "string"
                        },
                        Custom1: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom8: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom7: {
                            $ref: "#/definitions/CustomField"
                        },
                        ProcessingPaymentDate: {
                            format: "date-time",
                            type: "string"
                        },
                        Custom6: {
                            $ref: "#/definitions/CustomField"
                        },
                        Custom5: {
                            $ref: "#/definitions/CustomField"
                        },
                        Country: {
                            type: "string"
                        },
                        Custom9: {
                            $ref: "#/definitions/CustomField"
                        },
                        PaymentStatusCode: {
                            type: "string"
                        },
                        TotalApprovedAmount: {
                            format: "int32",
                            type: "integer"
                        },
                        OwnerName: {
                            type: "string"
                        },
                        URI: {
                            type: "string"
                        },
                        PaidDate: {
                            format: "date-time",
                            type: "string"
                        },
                        ApproverName: {
                            type: "string"
                        },
                        UserDefinedDate: {
                            format: "date-time",
                            type: "string"
                        },
                        OrgUnit6: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit5: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit4: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit3: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit2: {
                            $ref: "#/definitions/CustomField"
                        },
                        OrgUnit1: {
                            $ref: "#/definitions/CustomField"
                        },
                        PersonalAmount: {
                            format: "int32",
                            type: "integer"
                        },
                        Custom20: {
                            $ref: "#/definitions/CustomField"
                        },
                        Total: {
                            format: "int32",
                            type: "integer"
                        },
                        AmountDueEmployee: {
                            format: "int32",
                            type: "integer"
                        }
                    },
                    returnType: "Item"
                }
            ]
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "Object",
                properties: {
                    nextContinuationToken: {
                        type: "string"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/list"
                        }
                    },
                    returnedCount: {
                        type: "integer"
                    }
                },
                returnType: "Collection"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getReportByReportId: {
        operationId: "getReportByReportId",
        description: "Retrieve a report by ID",
        path: "/reports/{reportId}",
        method: "get",
        uri: "/reports/{reportId}",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "user",
                    description: "The login ID of the report owner(s) to use when searching for reports.",
                    type: "string",
                    required: false
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-vendor-authorization",
                    description: "The vendor authorization token",
                    type: "string",
                    required: true
                }
            ],
            path: [
                {
                    "x-sample": "97A720B12E0D496E9E7F",
                    "in": "path",
                    name: "reportId",
                    description: "ID of the Expense Report",
                    type: "string",
                    required: true
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "OK - Everything worked as expected",
                schemaName: "report",
                properties: {
                    LastModifiedDate: {
                        format: "date-time",
                        type: "string"
                    },
                    Custom19: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom18: {
                        $ref: "#/definitions/CustomField"
                    },
                    SubmitDate: {
                        format: "date-time",
                        type: "string"
                    },
                    Custom13: {
                        $ref: "#/definitions/CustomField"
                    },
                    ApproverLoginID: {
                        type: "string"
                    },
                    Custom12: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom11: {
                        $ref: "#/definitions/CustomField"
                    },
                    ReceiptsReceived: {
                        type: "boolean"
                    },
                    Custom10: {
                        $ref: "#/definitions/CustomField"
                    },
                    ApprovalStatusCode: {
                        type: "string"
                    },
                    Custom17: {
                        $ref: "#/definitions/CustomField"
                    },
                    CreateDate: {
                        format: "date-time",
                        type: "string"
                    },
                    Custom16: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom15: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom14: {
                        $ref: "#/definitions/CustomField"
                    },
                    Name: {
                        type: "string"
                    },
                    CurrencyCode: {
                        type: "string"
                    },
                    TotalClaimedAmount: {
                        format: "int32",
                        type: "integer"
                    },
                    LastComment: {
                        type: "string"
                    },
                    ID: {
                        type: "string"
                    },
                    LedgerName: {
                        type: "string"
                    },
                    PaymentStatusName: {
                        type: "string"
                    },
                    PolicyID: {
                        type: "string"
                    },
                    WorkflowActionUrl: {
                        type: "string"
                    },
                    OwnerLoginID: {
                        type: "string"
                    },
                    AmountDueCompanyCard: {
                        format: "int32",
                        type: "integer"
                    },
                    HasException: {
                        type: "boolean"
                    },
                    CountrySubdivision: {
                        type: "string"
                    },
                    Custom4: {
                        $ref: "#/definitions/CustomField"
                    },
                    EverSentBack: {
                        type: "boolean"
                    },
                    Custom3: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom2: {
                        $ref: "#/definitions/CustomField"
                    },
                    ApprovalStatusName: {
                        type: "string"
                    },
                    Custom1: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom8: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom7: {
                        $ref: "#/definitions/CustomField"
                    },
                    ProcessingPaymentDate: {
                        format: "date-time",
                        type: "string"
                    },
                    Custom6: {
                        $ref: "#/definitions/CustomField"
                    },
                    Custom5: {
                        $ref: "#/definitions/CustomField"
                    },
                    Country: {
                        type: "string"
                    },
                    Custom9: {
                        $ref: "#/definitions/CustomField"
                    },
                    PaymentStatusCode: {
                        type: "string"
                    },
                    TotalApprovedAmount: {
                        format: "int32",
                        type: "integer"
                    },
                    OwnerName: {
                        type: "string"
                    },
                    URI: {
                        type: "string"
                    },
                    PaidDate: {
                        format: "date-time",
                        type: "string"
                    },
                    ApproverName: {
                        type: "string"
                    },
                    UserDefinedDate: {
                        format: "date-time",
                        type: "string"
                    },
                    OrgUnit6: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit5: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit4: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit3: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit2: {
                        $ref: "#/definitions/CustomField"
                    },
                    OrgUnit1: {
                        $ref: "#/definitions/CustomField"
                    },
                    PersonalAmount: {
                        format: "int32",
                        type: "integer"
                    },
                    Custom20: {
                        $ref: "#/definitions/CustomField"
                    },
                    Total: {
                        format: "int32",
                        type: "integer"
                    },
                    AmountDueEmployee: {
                        format: "int32",
                        type: "integer"
                    }
                },
                returnType: "Item"
            },
            "400": {
                description: "Bad Request - Often due to a missing request parameter",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "401": {
                description: "Unauthorized - An invalid element token, user secret and/or org secret provided",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "403": {
                description: "Forbidden - Access to the resource by the provider is forbidden",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "404": {
                description: "Not found - The requested resource is not found",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "405": {
                description: "Method not allowed - Incorrect HTTP verb used, e.g., GET used when POST expected",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "500": {
                description: "Server error - Something went wrong on the server",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            },
            "502": {
                description: "Server error - Internal server error",
                schemaName: "defaultErrorObject",
                properties: {
                    message: {
                        type: "string"
                    },
                    providerMessage: {
                        type: "object"
                    },
                    requestId: {
                        type: "string"
                    },
                    errorType: {
                        type: "string"
                    },
                    httpStatus: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    }
}