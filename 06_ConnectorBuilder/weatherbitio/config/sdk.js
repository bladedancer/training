module.exports = {
    getCurrentLatLatLonLon: {
        operationId: "getCurrentLatLatLonLon",
        description: "Returns a Current Observation - given a lat, and a lon.",
        path: "/current?lat={lat}&lon={lon}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/current?lat={lat}&lon={lon}",
        parameters: {
            query: [
                {
                    name: "marine",
                    "in": "query",
                    description: "Marine stations only (buoys, oil platforms, etc)",
                    required: false,
                    "enum": [
                        "t"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback - Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat",
                    "in": "path",
                    description: "Latitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon",
                    "in": "path",
                    description: "Longitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Observation Group object.",
                schemaName: "CurrentObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/CurrentObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getCurrentCityIdCityId: {
        operationId: "getCurrentCityIdCityId",
        description: "Returns current weather observation - Given a City ID. ",
        path: "/current?city_id={city_id}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/current?city_id={city_id}",
        parameters: {
            query: [
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "marine",
                    "in": "query",
                    description: "Marine stations only (buoys, oil platforms, etc)",
                    required: false,
                    "enum": [
                        "t"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback - Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city_id",
                    "in": "path",
                    description: "City ID. Example: 4487042",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Observation Group object.",
                schemaName: "CurrentObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/CurrentObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getCurrentPostalCodePostalCode: {
        operationId: "getCurrentPostalCodePostalCode",
        description: "Returns current weather observation - Given a Postal Code. ",
        path: "/current?postal_code={postal_code}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/current?postal_code={postal_code}",
        parameters: {
            query: [
                {
                    name: "country",
                    "in": "query",
                    description: "Country Code (2 letter).",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "marine",
                    "in": "query",
                    description: "Marine stations only (buoys, oil platforms, etc)",
                    required: false,
                    "enum": [
                        "t"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback - Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "postal_code",
                    "in": "path",
                    description: "Postal Code. Example: 28546",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Observation Group object.",
                schemaName: "CurrentObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/CurrentObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getCurrentCitiesCities: {
        operationId: "getCurrentCitiesCities",
        description: "**(Advanced/Advanced+/Enterprise plans only)** Returns a group of Current Observations - Given a list of City IDs. ",
        path: "/current?cities={cities}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/current?cities={cities}",
        parameters: {
            query: [
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "marine",
                    "in": "query",
                    description: "Marine stations only (buoys, oil platforms, etc)",
                    required: false,
                    "enum": [
                        "t"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback - Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "cities",
                    "in": "path",
                    description: "Comma separated list of City ID's. Example: 4487042, 4494942, 4504871",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Observation Group object.",
                schemaName: "CurrentObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/CurrentObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getCurrentCityCityCountryCountry: {
        operationId: "getCurrentCityCityCountryCountry",
        description: "Returns a Current Observation - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.",
        path: "/current?city={city}&country={country}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/current?city={city}&country={country}",
        parameters: {
            query: [
                {
                    name: "state",
                    "in": "query",
                    description: "Full name of state.",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "marine",
                    "in": "query",
                    description: "Marine stations only (buoys, oil platforms, etc)",
                    required: false,
                    "enum": [
                        "t"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback - Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city",
                    "in": "path",
                    description: "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "country",
                    "in": "path",
                    description: "Country Code (2 letter).",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Observation Group object.",
                schemaName: "CurrentObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/CurrentObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getCurrentIpIp: {
        operationId: "getCurrentIpIp",
        description: "Returns a Current Observation - Given an IP address, or auto.",
        path: "/current?ip={ip}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/current?ip={ip}",
        parameters: {
            query: [
                {
                    name: "marine",
                    "in": "query",
                    description: "Marine stations only (buoys, oil platforms, etc)",
                    required: false,
                    "enum": [
                        "t"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback - Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "ip",
                    "in": "path",
                    description: "IP Address, or auto. Example: ip=auto",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Observation Group object.",
                schemaName: "CurrentObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/CurrentObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getCurrentStationStation: {
        operationId: "getCurrentStationStation",
        description: "Returns a Current Observation - Given a station ID.",
        path: "/current?station={station}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/current?station={station}",
        parameters: {
            query: [
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "station",
                    "in": "path",
                    description: "Station Call ID.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Observation Group object.",
                schemaName: "CurrentObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/CurrentObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getCurrentStationsStations: {
        operationId: "getCurrentStationsStations",
        description: "**(Advanced/Advanced+/Enterprise plans only)** Returns a group of Current Observations - Given a list of Station Call IDs. ",
        path: "/current?stations={stations}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/current?stations={stations}",
        parameters: {
            query: [
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "stations",
                    "in": "path",
                    description: "Comma separated list of Station Call ID's. Example: KRDU,KBFI,KVNY",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Observation Group object.",
                schemaName: "CurrentObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/CurrentObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecast3hourlyLatLatLonLon: {
        operationId: "getForecast3hourlyLatLatLonLon",
        description: "Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC.\n",
        path: "/forecast/3hourly?lat={lat}&lon={lon}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/3hourly?lat={lat}&lon={lon}",
        parameters: {
            query: [
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 5.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat",
                    "in": "path",
                    description: "Latitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon",
                    "in": "path",
                    description: "Longitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecast3hourlyCityIdCityId: {
        operationId: "getForecast3hourlyCityIdCityId",
        description: "Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC.\n",
        path: "/forecast/3hourly?city_id={city_id}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/3hourly?city_id={city_id}",
        parameters: {
            query: [
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 5.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city_id",
                    "in": "path",
                    description: "City ID. Example: 4487042",
                    required: true,
                    type: "integer",
                    format: "integer"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecast3hourlyPostalCodePostalCode: {
        operationId: "getForecast3hourlyPostalCodePostalCode",
        description: "Returns a 3-hourly forecast, where each point represents a three hour period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC.\n",
        path: "/forecast/3hourly?postal_code={postal_code}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/3hourly?postal_code={postal_code}",
        parameters: {
            query: [
                {
                    name: "country",
                    "in": "query",
                    description: "Country Code (2 letter).",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 5.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "postal_code",
                    "in": "path",
                    description: "Postal Code. Example: 28546",
                    required: true,
                    type: "integer",
                    format: "integer"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecast3hourlyCityCityCountryCountry: {
        operationId: "getForecast3hourlyCityCityCountryCountry",
        description: "Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC.\n",
        path: "/forecast/3hourly?city={city}&country={country}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/3hourly?city={city}&country={country}",
        parameters: {
            query: [
                {
                    name: "state",
                    "in": "query",
                    description: "Full name of state.",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 5.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city",
                    "in": "path",
                    description: "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "country",
                    "in": "path",
                    description: "Country Code (2 letter).",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecast3hourlyIpIp: {
        operationId: "getForecast3hourlyIpIp",
        description: "Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC.\n",
        path: "/forecast/3hourly?ip={ip}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/3hourly?ip={ip}",
        parameters: {
            query: [
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 16.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "ip",
                    "in": "path",
                    description: "IP address, or auto. Example: ip=auto",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastDailyLatLatLonLon: {
        operationId: "getForecastDailyLatLatLonLon",
        description: "**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \"YYYY-MM-DD\". One day begins at 00:00 UTC, and ends at 23:59 UTC. \n",
        path: "/forecast/daily?lat={lat}&lon={lon}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/daily?lat={lat}&lon={lon}",
        parameters: {
            query: [
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 16.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat",
                    "in": "path",
                    description: "Latitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon",
                    "in": "path",
                    description: "Longitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/Forecast"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastDailyCityIdCityId: {
        operationId: "getForecastDailyCityIdCityId",
        description: "**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \"YYYY-MM-DD\". One day begins at 00:00 UTC, and ends at 23:59 UTC.\n",
        path: "/forecast/daily?city_id={city_id}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/daily?city_id={city_id}",
        parameters: {
            query: [
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 16.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city_id",
                    "in": "path",
                    description: "City ID. Example: 4487042",
                    required: true,
                    type: "integer",
                    format: "integer"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/Forecast"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastDailyPostalCodePostalCode: {
        operationId: "getForecastDailyPostalCodePostalCode",
        description: "**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \"YYYY-MM-DD\". One day begins at 00:00 UTC, and ends at 23:59 UTC.\n",
        path: "/forecast/daily?postal_code={postal_code}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/daily?postal_code={postal_code}",
        parameters: {
            query: [
                {
                    name: "country",
                    "in": "query",
                    description: "Country Code (2 letter).",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 16.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "postal_code",
                    "in": "path",
                    description: "Postal Code. Example: 28546",
                    required: true,
                    type: "integer",
                    format: "integer"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/Forecast"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastDailyCityCityCountryCountry: {
        operationId: "getForecastDailyCityCityCountryCountry",
        description: "**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \"YYYY-MM-DD\". One day begins at 00:00 UTC, and ends at 23:59 UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.\n",
        path: "/forecast/daily?city={city}&country={country}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/daily?city={city}&country={country}",
        parameters: {
            query: [
                {
                    name: "state",
                    "in": "query",
                    description: "Full name of state.",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 16.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city",
                    "in": "path",
                    description: "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "country",
                    "in": "path",
                    description: "Country Code (2 letter).",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/Forecast"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastDailyIpIp: {
        operationId: "getForecastDailyIpIp",
        description: "**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \"YYYY-MM-DD\". One day begins at 00:00 UTC, and ends at 23:59 UTC. \n",
        path: "/forecast/daily?ip={ip}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/daily?ip={ip}",
        parameters: {
            query: [
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 16.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "ip",
                    "in": "path",
                    description: "IP address, or auto. Example: ip=auto",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/Forecast"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastHourlyLatLatLonLon: {
        operationId: "getForecastHourlyLatLatLonLon",
        description: "**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC. \n",
        path: "/forecast/hourly?lat={lat}&lon={lon}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/hourly?lat={lat}&lon={lon}",
        parameters: {
            query: [
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "hours",
                    "in": "query",
                    description: "Number of hours to return.",
                    required: false,
                    type: "integer",
                    format: "integer"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat",
                    "in": "path",
                    description: "Latitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon",
                    "in": "path",
                    description: "Longitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastHourlyCityIdCityId: {
        operationId: "getForecastHourlyCityIdCityId",
        description: "**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC. \n",
        path: "/forecast/hourly?city_id={city_id}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/hourly?city_id={city_id}",
        parameters: {
            query: [
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "hours",
                    "in": "query",
                    description: "Number of hours to return.",
                    required: false,
                    type: "integer",
                    format: "integer"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city_id",
                    "in": "path",
                    description: "City ID. Example: 4487042",
                    required: true,
                    type: "integer",
                    format: "integer"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastHourlyPostalCodePostalCode: {
        operationId: "getForecastHourlyPostalCodePostalCode",
        description: "**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC. \n",
        path: "/forecast/hourly?postal_code={postal_code}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/hourly?postal_code={postal_code}",
        parameters: {
            query: [
                {
                    name: "country",
                    "in": "query",
                    description: "Country Code (2 letter).",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example - callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "hours",
                    "in": "query",
                    description: "Number of hours to return.",
                    required: false,
                    type: "integer",
                    format: "integer"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "postal_code",
                    "in": "path",
                    description: "Postal Code. Example: 28546",
                    required: true,
                    type: "integer",
                    format: "integer"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastHourlyCityCityCountryCountry: {
        operationId: "getForecastHourlyCityCityCountryCountry",
        description: "**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.\n",
        path: "/forecast/hourly?city={city}&country={country}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/hourly?city={city}&country={country}",
        parameters: {
            query: [
                {
                    name: "state",
                    "in": "query",
                    description: "Full name of state.",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "hours",
                    "in": "query",
                    description: "Number of hours to return.",
                    required: false,
                    type: "integer",
                    format: "integer"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city",
                    "in": "path",
                    description: "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "country",
                    "in": "path",
                    description: "Country Code (2 letter).",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getIpIpIp: {
        operationId: "getIpIpIp",
        description: "Returns a geolocation object. Given an IP address. If no IP supplied, will use request IP address.",
        path: "/ip?ip={ip}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/ip?ip={ip}",
        parameters: {
            query: [
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "exclude",
                    "in": "query",
                    description: "exclude=all => return IP address only",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "format",
                    "in": "query",
                    description: "&format=none => return IP address as string",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "ip",
                    "in": "path",
                    description: "IP address",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A geolocation object.",
                schemaName: "GeoIPObj",
                properties: {
                    longitude: {
                        type: "string",
                        description: "City Name",
                        example: "-78.64"
                    },
                    latitude: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "35.811"
                    },
                    offset: {
                        type: "string",
                        description: "UTC Offset (deprecated)",
                        example: "-4"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    organization: {
                        type: "string",
                        description: "Organization Name",
                        example: "AS11426 Time Warner Cable Internet LLC"
                    },
                    continent_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    region: {
                        type: "string",
                        description: "Latitude",
                        example: "NC"
                    },
                    metro_code: {
                        type: "string",
                        description: "Longitude",
                        example: "560"
                    },
                    dma_code: {
                        type: "string",
                        description: "Longitude",
                        example: "560"
                    },
                    ip: {
                        type: "string",
                        description: "IP Address",
                        example: "192.168.1.102"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Code (Short)",
                        example: "US"
                    },
                    area_code: {
                        type: "string",
                        description: "Area Code",
                        example: "919"
                    },
                    postal_code: {
                        type: "string",
                        description: "Postal Code",
                        example: "27601"
                    },
                    charset: {
                        type: "string",
                        description: "Character encoding",
                        example: "1"
                    },
                    city: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    country_code3: {
                        type: "string",
                        description: "Country Code (Long)",
                        example: "USA"
                    }
                },
                returnType: "Item"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getForecastHourlyIpIp: {
        operationId: "getForecastHourlyIpIp",
        description: "**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC. \n",
        path: "/forecast/hourly?ip={ip}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/forecast/hourly?ip={ip}",
        parameters: {
            query: [
                {
                    name: "days",
                    "in": "query",
                    description: "Number of days to return. Default 16.",
                    required: false,
                    type: "number",
                    format: "integer"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "hours",
                    "in": "query",
                    description: "Number of hours to return.",
                    required: false,
                    type: "integer",
                    format: "integer"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "ip",
                    "in": "path",
                    description: "IP address, or auto. Example: ip=auto",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "A forecast object.",
                schemaName: "ForecastHourly",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City Name",
                        example: "Raleigh"
                    },
                    state_code: {
                        type: "string",
                        description: "State Abbreviation",
                        example: "NC"
                    },
                    country_code: {
                        type: "string",
                        description: "Country Abbreviation",
                        example: "US"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "38.25"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-78.00"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/ForecastHour"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryDailyLatLatLonLon: {
        operationId: "getHistoryDailyLatLatLonLon",
        description: "Returns Historical Observations - Given a lat, and lon. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/daily?lat={lat}&lon={lon}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/daily?lat={lat}&lon={lon}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat",
                    "in": "path",
                    description: "Latitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon",
                    "in": "path",
                    description: "Longitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryDailyCityIdCityId: {
        operationId: "getHistoryDailyCityIdCityId",
        description: "Returns Historical Observations - Given a City ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/daily?city_id={city_id}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/daily?city_id={city_id}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city_id",
                    "in": "path",
                    description: "City ID. Example: 4487042",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryDailyPostalCodePostalCode: {
        operationId: "getHistoryDailyPostalCodePostalCode",
        description: "Returns Historical Observations - Given a Postal Code. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/daily?postal_code={postal_code}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/daily?postal_code={postal_code}",
        parameters: {
            query: [
                {
                    name: "country",
                    "in": "query",
                    description: "Country Code (2 letter).",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "postal_code",
                    "in": "path",
                    description: "Postal Code. Example: 28546",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryDailyCityCityCountryCountry: {
        operationId: "getHistoryDailyCityCityCountryCountry",
        description: "Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/daily?city={city}&country={country}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/daily?city={city}&country={country}",
        parameters: {
            query: [
                {
                    name: "state",
                    "in": "query",
                    description: "Full name of state.",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city",
                    "in": "path",
                    description: "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "country",
                    "in": "path",
                    description: "Country Code (2 letter).",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryDailyIpIp: {
        operationId: "getHistoryDailyIpIp",
        description: "Returns Historical Observations - Given IP Address, or auto. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/daily?ip={ip}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/daily?ip={ip}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "ip",
                    "in": "path",
                    description: "IP Address, or auto. Example: ip=auto",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryDailyStationStation: {
        operationId: "getHistoryDailyStationStation",
        description: "Returns Historical Observations - Given a station ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/daily?station={station}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/daily?station={station}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "station",
                    "in": "path",
                    description: "Station ID.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryHourlyLatLatLonLon: {
        operationId: "getHistoryHourlyLatLatLonLon",
        description: "Returns Historical Observations - Given a lat, and lon. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/hourly?lat={lat}&lon={lon}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/hourly?lat={lat}&lon={lon}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat",
                    "in": "path",
                    description: "Latitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon",
                    "in": "path",
                    description: "Longitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryHourlyCityIdCityId: {
        operationId: "getHistoryHourlyCityIdCityId",
        description: "Returns Historical Observations - Given a City ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/hourly?city_id={city_id}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/hourly?city_id={city_id}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city_id",
                    "in": "path",
                    description: "City ID. Example: 4487042",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryHourlyPostalCodePostalCode: {
        operationId: "getHistoryHourlyPostalCodePostalCode",
        description: "Returns Historical Observations - Given a Postal Code. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/hourly?postal_code={postal_code}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/hourly?postal_code={postal_code}",
        parameters: {
            query: [
                {
                    name: "country",
                    "in": "query",
                    description: "Country Code (2 letter).",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "postal_code",
                    "in": "path",
                    description: "Postal Code. Example: 28546",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryHourlyCityCityCountryCountry: {
        operationId: "getHistoryHourlyCityCityCountryCountry",
        description: "Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/hourly?city={city}&country={country}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/hourly?city={city}&country={country}",
        parameters: {
            query: [
                {
                    name: "state",
                    "in": "query",
                    description: "Full name of state.",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city",
                    "in": "path",
                    description: "City search. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "country",
                    "in": "path",
                    description: "Country Code (2 letter).",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryHourlyIpIp: {
        operationId: "getHistoryHourlyIpIp",
        description: "Returns Historical Observations - Given IP Address, or auto. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/hourly?ip={ip}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/hourly?ip={ip}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "ip",
                    "in": "path",
                    description: "IP Address, or auto. Example: ip=auto",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryHourlyStationStation: {
        operationId: "getHistoryHourlyStationStation",
        description: "Returns Historical Observations - Given a station ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**",
        path: "/history/hourly?station={station}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/hourly?station={station}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "station",
                    "in": "path",
                    description: "Station ID.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryDailyLatLatLonLon: {
        operationId: "getBulkHistoryDailyLatLatLonLon",
        description: "Returns Historical Observations - Given a lat, and lon.",
        path: "/bulk/history/daily?lat={lat}&lon={lon}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/daily?lat={lat}&lon={lon}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat",
                    "in": "path",
                    description: "Latitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon",
                    "in": "path",
                    description: "Longitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryDailyCityIdCityId: {
        operationId: "getBulkHistoryDailyCityIdCityId",
        description: "Returns Historical Observations - Given a City ID.",
        path: "/bulk/history/daily?city_id={city_id}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/daily?city_id={city_id}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city_id",
                    "in": "path",
                    description: "City ID. Example: 4487042",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryDailyPostalCodePostalCode: {
        operationId: "getBulkHistoryDailyPostalCodePostalCode",
        description: "Returns Historical Observations - Given a Postal Code.",
        path: "/bulk/history/daily?postal_code={postal_code}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/daily?postal_code={postal_code}",
        parameters: {
            query: [
                {
                    name: "country",
                    "in": "query",
                    description: "Country Code (2 letter).",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "postal_code",
                    "in": "path",
                    description: "Postal Code. Example: 28546",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryDailyCityCityCountryCountry: {
        operationId: "getBulkHistoryDailyCityCityCountryCountry",
        description: "Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.",
        path: "/bulk/history/daily?city={city}&country={country}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/daily?city={city}&country={country}",
        parameters: {
            query: [
                {
                    name: "state",
                    "in": "query",
                    description: "Full name of state.",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city",
                    "in": "path",
                    description: "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "country",
                    "in": "path",
                    description: "Country Code (2 letter).",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryDailyIpIp: {
        operationId: "getBulkHistoryDailyIpIp",
        description: "Returns Historical Observations - Given IP Address, or auto.",
        path: "/bulk/history/daily?ip={ip}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/daily?ip={ip}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "ip",
                    "in": "path",
                    description: "IP Address, or auto. Example: ip=auto",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryDailyStationStation: {
        operationId: "getBulkHistoryDailyStationStation",
        description: "Returns Historical Observations - Given a station ID.",
        path: "/bulk/history/daily?station={station}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/daily?station={station}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "station",
                    "in": "path",
                    description: "Station ID.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Day Data Object.",
                schemaName: "HistoryDay",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryDayObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryHourlyLatLatLonLon: {
        operationId: "getBulkHistoryHourlyLatLatLonLon",
        description: "Returns Historical Observations - Given a lat, and lon.",
        path: "/bulk/history/hourly?lat={lat}&lon={lon}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/hourly?lat={lat}&lon={lon}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat",
                    "in": "path",
                    description: "Latitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon",
                    "in": "path",
                    description: "Longitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryHourlyCityIdCityId: {
        operationId: "getBulkHistoryHourlyCityIdCityId",
        description: "Returns Historical Observations - Given a City ID.",
        path: "/bulk/history/hourly?city_id={city_id}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/hourly?city_id={city_id}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city_id",
                    "in": "path",
                    description: "City ID. Example: 4487042",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryHourlyPostalCodePostalCode: {
        operationId: "getBulkHistoryHourlyPostalCodePostalCode",
        description: "Returns Historical Observations - Given a Postal Code. ",
        path: "/bulk/history/hourly?postal_code={postal_code}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/hourly?postal_code={postal_code}",
        parameters: {
            query: [
                {
                    name: "country",
                    "in": "query",
                    description: "Country Code (2 letter).",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH)",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "postal_code",
                    "in": "path",
                    description: "Postal Code. Example: 28546",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryHourlyCityCityCountryCountry: {
        operationId: "getBulkHistoryHourlyCityCityCountryCountry",
        description: "Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.",
        path: "/bulk/history/hourly?city={city}&country={country}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/hourly?city={city}&country={country}",
        parameters: {
            query: [
                {
                    name: "state",
                    "in": "query",
                    description: "Full name of state.",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "city",
                    "in": "path",
                    description: "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "country",
                    "in": "path",
                    description: "Country Code (2 letter).",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryHourlyIpIp: {
        operationId: "getBulkHistoryHourlyIpIp",
        description: "Returns Historical Observations - Given IP Address, or auto.",
        path: "/bulk/history/hourly?ip={ip}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/hourly?ip={ip}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "ip",
                    "in": "path",
                    description: "IP Address, or auto. Example: ip=auto",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkHistoryHourlyStationStation: {
        operationId: "getBulkHistoryHourlyStationStation",
        description: "Returns Historical Observations - Given a station ID.",
        path: "/bulk/history/hourly?station={station}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/history/hourly?station={station}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "lang",
                    "in": "query",
                    description: "Language (Default: English) See <a href='/api/requests'>language field description</a>",
                    required: false,
                    "enum": [
                        "ar",
                        "az",
                        "be",
                        "bg",
                        "bs",
                        "ca",
                        "cs",
                        "de",
                        "fi",
                        "fr",
                        "el",
                        "es",
                        "et",
                        "hr",
                        "hu",
                        "id",
                        "it",
                        "is",
                        "kw",
                        "nb",
                        "nl",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "sk",
                        "sl",
                        "sr",
                        "sv",
                        "tr",
                        "uk",
                        "zh",
                        "zh-tw"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "station",
                    "in": "path",
                    description: "Station ID.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Historical Data Object.",
                schemaName: "History",
                properties: {
                    city_name: {
                        type: "string",
                        description: "City name (Closest)",
                        example: "Seattle"
                    },
                    state_code: {
                        type: "string",
                        description: "State abbreviation",
                        example: "WA"
                    },
                    country_code: {
                        type: "string",
                        description: "Country abbreviation",
                        example: "US"
                    },
                    timezone: {
                        type: "string",
                        description: "Local IANA time zone",
                        example: "America/New_York"
                    },
                    lat: {
                        type: "string",
                        description: "Latitude",
                        example: "47.61"
                    },
                    lon: {
                        type: "string",
                        description: "Longitude",
                        example: "-122.33"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/HistoryObj"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryEnergyLatLatLonLon: {
        operationId: "getHistoryEnergyLatLatLonLon",
        description: "Returns aggregate energy specific historical weather fields, over a specified time period.",
        path: "/history/energy?lat={lat}&lon={lon}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/energy?lat={lat}&lon={lon}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat",
                    "in": "path",
                    description: "Latitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon",
                    "in": "path",
                    description: "Longitude component of location.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Energy Data Object.",
                schemaName: "EnergyObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    start_date: {
                        type: "integer",
                        description: "Start Date",
                        example: "2017-01-01"
                    },
                    end_date: {
                        type: "integer",
                        description: "End Date",
                        example: "2017-01-30"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/EnergyObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getHistoryEnergyBboxLat1Lat1Lon1Lon1Lat2Lat2Lon2Lon2: {
        operationId: "getHistoryEnergyBboxLat1Lat1Lon1Lon1Lat2Lat2Lon2Lon2",
        description: "Returns aggregate energy specific historical weather fields, over a specified time period. Supply a bounding box ex: lat1=40&lon1=-78&lat2=38&lon2=-80. This API will return UP TO 150 stations, aggregated by the specified time period start_date to end_date. ",
        path: "/history/energy/bbox?lat1={lat1}&lon1={lon1}&lat2={lat2}&lon2={lon2}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/history/energy/bbox?lat1={lat1}&lon1={lon1}&lat2={lat2}&lon2={lon2}",
        parameters: {
            query: [
                {
                    name: "start_date",
                    "in": "query",
                    description: "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "end_date",
                    "in": "query",
                    description: "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                    required: true,
                    type: "string",
                    format: "string"
                },
                {
                    name: "units",
                    "in": "query",
                    description: "Convert to units. Default Metric See <a href='/api/requests'>units field description</a>",
                    required: false,
                    "enum": [
                        "S",
                        "I"
                    ],
                    type: "string",
                    format: "string"
                },
                {
                    name: "callback",
                    "in": "query",
                    description: "Wraps return in jsonp callback. Example: callback=func",
                    required: false,
                    type: "string",
                    format: "string"
                },
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "lat1",
                    "in": "path",
                    description: "Latitude of upper left corner.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon1",
                    "in": "path",
                    description: "Longitude of upper left corner.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lat2",
                    "in": "path",
                    description: "Latitude of lower right corner.",
                    required: true,
                    type: "number",
                    format: "double"
                },
                {
                    name: "lon2",
                    "in": "path",
                    description: "Longitude of lower right corner.",
                    required: true,
                    type: "number",
                    format: "double"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "An Energy Data Object.",
                schemaName: "EnergyObsGroup",
                properties: {
                    count: {
                        type: "integer",
                        description: "Count of found observations",
                        example: "1"
                    },
                    start_date: {
                        type: "integer",
                        description: "Start Date",
                        example: "2017-01-01"
                    },
                    end_date: {
                        type: "integer",
                        description: "End Date",
                        example: "2017-01-30"
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/definitions/EnergyObs"
                        }
                    }
                },
                returnType: "Collection"
            },
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    },
    getBulkByFile: {
        operationId: "getBulkByFile",
        description: "**(Advanced/Advanced+/Enterprise plans only)** Downloads bulk data files - OPTIONS: (forecast16d.json.gz - 16 day forecasts for cities > 1000 population, current.json.gz - Current observations for cities > 1000 population).",
        path: "/bulk/{file}",
        method: "get",
        uri: "https://api.weatherbit.io/v2.0/bulk/{file}",
        parameters: {
            query: [
                {
                    name: "key",
                    "in": "query",
                    description: "Your registered API key.",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            header: [],
            path: [
                {
                    name: "file",
                    "in": "path",
                    description: "Filename (ie. forecast16d.json.gz)",
                    required: true,
                    type: "string",
                    format: "string"
                }
            ],
            formData: [],
            body: []
        },
        responses: {
            "default": {
                description: "No Data.",
                schemaName: "Error",
                properties: {
                    code: {
                        type: "integer",
                        format: "int32"
                    },
                    message: {
                        type: "string"
                    }
                },
                returnType: "Item"
            }
        }
    }
}