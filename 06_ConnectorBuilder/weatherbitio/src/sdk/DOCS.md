# Registered methods for the Connector
### function `getCurrentLatLatLonLon ( params? : Object )`
> * **Method**: get 
> * **Path**: /current?lat={lat}&lon={lon} 
> * **Description**: Returns a Current Observation - given a lat, and a lon. 
> * **Parameters**: 
>   * *marine:* Marine stations only (buoys, oil platforms, etc)
>      * required: false
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback - Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *lat:* Latitude component of location.
>      * required: true
>      * type: number
>   * *lon:* Longitude component of location.
>      * required: true
>      * type: number

### function `getCurrentCityIdCityId ( params? : Object )`
> * **Method**: get 
> * **Path**: /current?city_id={city_id} 
> * **Description**: Returns current weather observation - Given a City ID.  
> * **Parameters**: 
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *marine:* Marine stations only (buoys, oil platforms, etc)
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback - Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city_id:* City ID. Example: 4487042
>      * required: true
>      * type: string

### function `getCurrentPostalCodePostalCode ( params? : Object )`
> * **Method**: get 
> * **Path**: /current?postal_code={postal_code} 
> * **Description**: Returns current weather observation - Given a Postal Code.  
> * **Parameters**: 
>   * *country:* Country Code (2 letter).
>      * required: false
>      * type: string
>   * *marine:* Marine stations only (buoys, oil platforms, etc)
>      * required: false
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback - Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *postal_code:* Postal Code. Example: 28546
>      * required: true
>      * type: string

### function `getCurrentCitiesCities ( params? : Object )`
> * **Method**: get 
> * **Path**: /current?cities={cities} 
> * **Description**: **(Advanced/Advanced+/Enterprise plans only)** Returns a group of Current Observations - Given a list of City IDs.  
> * **Parameters**: 
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *marine:* Marine stations only (buoys, oil platforms, etc)
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback - Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *cities:* Comma separated list of City ID's. Example: 4487042, 4494942, 4504871
>      * required: true
>      * type: string

### function `getCurrent ( params? : Object )`
> * **Method**: get 
> * **Path**: /current 
> * **Description**: Returns a Current Observation - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. 
> * **Parameters**: 
>   * *city:* City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
>      * required: true
>      * type: string
>   * *state:* Full name of state.
>      * required: false
>      * type: string
>   * *country:* Country Code (2 letter).
>      * required: true
>      * type: string
>   * *marine:* Marine stations only (buoys, oil platforms, etc)
>      * required: false
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback - Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string

### function `getCurrentIpIp ( params? : Object )`
> * **Method**: get 
> * **Path**: /current?ip={ip} 
> * **Description**: Returns a Current Observation - Given an IP address, or auto. 
> * **Parameters**: 
>   * *marine:* Marine stations only (buoys, oil platforms, etc)
>      * required: false
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback - Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *ip:* IP Address, or auto. Example: ip=auto
>      * required: true
>      * type: string

### function `getCurrentStationStation ( params? : Object )`
> * **Method**: get 
> * **Path**: /current?station={station} 
> * **Description**: Returns a Current Observation - Given a station ID. 
> * **Parameters**: 
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *station:* Station Call ID.
>      * required: true
>      * type: string

### function `getCurrentStationsStations ( params? : Object )`
> * **Method**: get 
> * **Path**: /current?stations={stations} 
> * **Description**: **(Advanced/Advanced+/Enterprise plans only)** Returns a group of Current Observations - Given a list of Station Call IDs.  
> * **Parameters**: 
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *stations:* Comma separated list of Station Call ID's. Example: KRDU,KBFI,KVNY
>      * required: true
>      * type: string

### function `getForecast3hourlyLatLatLonLon ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/3hourly?lat={lat}&lon={lon} 
> * **Description**: Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.  
> * **Parameters**: 
>   * *days:* Number of days to return. Default 5.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *lat:* Latitude component of location.
>      * required: true
>      * type: number
>   * *lon:* Longitude component of location.
>      * required: true
>      * type: number

### function `getForecast3hourlyCityIdCityId ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/3hourly?city_id={city_id} 
> * **Description**: Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.  
> * **Parameters**: 
>   * *days:* Number of days to return. Default 5.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city_id:* City ID. Example: 4487042
>      * required: true
>      * type: integer

### function `getForecast3hourlyPostalCodePostalCode ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/3hourly?postal_code={postal_code} 
> * **Description**: Returns a 3-hourly forecast, where each point represents a three hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.  
> * **Parameters**: 
>   * *country:* Country Code (2 letter).
>      * required: false
>      * type: string
>   * *days:* Number of days to return. Default 5.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *postal_code:* Postal Code. Example: 28546
>      * required: true
>      * type: integer

### function `getForecast3hourlyCityCityCountryCountry ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/3hourly?city={city}&country={country} 
> * **Description**: Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.  
> * **Parameters**: 
>   * *state:* Full name of state.
>      * required: false
>      * type: string
>   * *days:* Number of days to return. Default 5.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city:* City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
>      * required: true
>      * type: string
>   * *country:* Country Code (2 letter).
>      * required: true
>      * type: string

### function `getForecast3hourlyIpIp ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/3hourly?ip={ip} 
> * **Description**: Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.  
> * **Parameters**: 
>   * *days:* Number of days to return. Default 16.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *ip:* IP address, or auto. Example: ip=auto
>      * required: true
>      * type: string

### function `getForecastDailyLatLatLonLon ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/daily?lat={lat}&lon={lon} 
> * **Description**: **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.   
> * **Parameters**: 
>   * *days:* Number of days to return. Default 16.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *lat:* Latitude component of location.
>      * required: true
>      * type: number
>   * *lon:* Longitude component of location.
>      * required: true
>      * type: number

### function `getForecastDailyCityIdCityId ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/daily?city_id={city_id} 
> * **Description**: **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.  
> * **Parameters**: 
>   * *days:* Number of days to return. Default 16.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city_id:* City ID. Example: 4487042
>      * required: true
>      * type: integer

### function `getForecastDailyPostalCodePostalCode ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/daily?postal_code={postal_code} 
> * **Description**: **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.  
> * **Parameters**: 
>   * *country:* Country Code (2 letter).
>      * required: false
>      * type: string
>   * *days:* Number of days to return. Default 16.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *postal_code:* Postal Code. Example: 28546
>      * required: true
>      * type: integer

### function `getForecastDailyCityCityCountryCountry ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/daily?city={city}&country={country} 
> * **Description**: **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.  
> * **Parameters**: 
>   * *state:* Full name of state.
>      * required: false
>      * type: string
>   * *days:* Number of days to return. Default 16.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city:* City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
>      * required: true
>      * type: string
>   * *country:* Country Code (2 letter).
>      * required: true
>      * type: string

### function `getForecastDailyIpIp ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/daily?ip={ip} 
> * **Description**: **(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.   
> * **Parameters**: 
>   * *days:* Number of days to return. Default 16.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *ip:* IP address, or auto. Example: ip=auto
>      * required: true
>      * type: string

### function `getForecastHourlyLatLatLonLon ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/hourly?lat={lat}&lon={lon} 
> * **Description**: **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.   
> * **Parameters**: 
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example - callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *hours:* Number of hours to return.
>      * required: false
>      * type: integer
>   * *lat:* Latitude component of location.
>      * required: true
>      * type: number
>   * *lon:* Longitude component of location.
>      * required: true
>      * type: number

### function `getForecastHourlyCityIdCityId ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/hourly?city_id={city_id} 
> * **Description**: **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.   
> * **Parameters**: 
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example - callback=func
>      * required: false
>      * type: string
>   * *hours:* Number of hours to return.
>      * required: false
>      * type: integer
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city_id:* City ID. Example: 4487042
>      * required: true
>      * type: integer

### function `getForecastHourlyPostalCodePostalCode ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/hourly?postal_code={postal_code} 
> * **Description**: **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.   
> * **Parameters**: 
>   * *country:* Country Code (2 letter).
>      * required: false
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example - callback=func
>      * required: false
>      * type: string
>   * *hours:* Number of hours to return.
>      * required: false
>      * type: integer
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *postal_code:* Postal Code. Example: 28546
>      * required: true
>      * type: integer

### function `getForecastHourlyCityCityCountryCountry ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/hourly?city={city}&country={country} 
> * **Description**: **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.  
> * **Parameters**: 
>   * *state:* Full name of state.
>      * required: false
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *hours:* Number of hours to return.
>      * required: false
>      * type: integer
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city:* City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
>      * required: true
>      * type: string
>   * *country:* Country Code (2 letter).
>      * required: true
>      * type: string

### function `getIpIpIp ( params? : Object )`
> * **Method**: get 
> * **Path**: /ip?ip={ip} 
> * **Description**: Returns a geolocation object. Given an IP address. If no IP supplied, will use request IP address. 
> * **Parameters**: 
>   * *callback:* Wraps return in jsonp callback
>      * required: false
>      * type: string
>   * *exclude:* exclude=all => return IP address only
>      * required: false
>      * type: string
>   * *format:* &format=none => return IP address as string
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *ip:* IP address
>      * required: true
>      * type: string

### function `getForecastHourlyIpIp ( params? : Object )`
> * **Method**: get 
> * **Path**: /forecast/hourly?ip={ip} 
> * **Description**: **(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.   
> * **Parameters**: 
>   * *days:* Number of days to return. Default 16.
>      * required: false
>      * type: number
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *hours:* Number of hours to return.
>      * required: false
>      * type: integer
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *ip:* IP address, or auto. Example: ip=auto
>      * required: true
>      * type: string

### function `getHistoryDailyLatLatLonLon ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/daily?lat={lat}&lon={lon} 
> * **Description**: Returns Historical Observations - Given a lat, and lon. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *lat:* Latitude component of location.
>      * required: true
>      * type: number
>   * *lon:* Longitude component of location.
>      * required: true
>      * type: number

### function `getHistoryDailyCityIdCityId ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/daily?city_id={city_id} 
> * **Description**: Returns Historical Observations - Given a City ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city_id:* City ID. Example: 4487042
>      * required: true
>      * type: string

### function `getHistoryDailyPostalCodePostalCode ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/daily?postal_code={postal_code} 
> * **Description**: Returns Historical Observations - Given a Postal Code. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *country:* Country Code (2 letter).
>      * required: false
>      * type: string
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *postal_code:* Postal Code. Example: 28546
>      * required: true
>      * type: string

### function `getHistoryDailyCityCityCountryCountry ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/daily?city={city}&country={country} 
> * **Description**: Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *state:* Full name of state.
>      * required: false
>      * type: string
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city:* City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
>      * required: true
>      * type: string
>   * *country:* Country Code (2 letter).
>      * required: true
>      * type: string

### function `getHistoryDailyIpIp ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/daily?ip={ip} 
> * **Description**: Returns Historical Observations - Given IP Address, or auto. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *ip:* IP Address, or auto. Example: ip=auto
>      * required: true
>      * type: string

### function `getHistoryDailyStationStation ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/daily?station={station} 
> * **Description**: Returns Historical Observations - Given a station ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *station:* Station ID.
>      * required: true
>      * type: string

### function `getHistoryHourlyLatLatLonLon ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/hourly?lat={lat}&lon={lon} 
> * **Description**: Returns Historical Observations - Given a lat, and lon. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *lat:* Latitude component of location.
>      * required: true
>      * type: number
>   * *lon:* Longitude component of location.
>      * required: true
>      * type: number

### function `getHistoryHourlyCityIdCityId ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/hourly?city_id={city_id} 
> * **Description**: Returns Historical Observations - Given a City ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city_id:* City ID. Example: 4487042
>      * required: true
>      * type: string

### function `getHistoryHourlyPostalCodePostalCode ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/hourly?postal_code={postal_code} 
> * **Description**: Returns Historical Observations - Given a Postal Code. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *country:* Country Code (2 letter).
>      * required: false
>      * type: string
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *postal_code:* Postal Code. Example: 28546
>      * required: true
>      * type: string

### function `getHistoryHourlyCityCityCountryCountry ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/hourly?city={city}&country={country} 
> * **Description**: Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *state:* Full name of state.
>      * required: false
>      * type: string
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city:* City search. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
>      * required: true
>      * type: string
>   * *country:* Country Code (2 letter).
>      * required: true
>      * type: string

### function `getHistoryHourlyIpIp ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/hourly?ip={ip} 
> * **Description**: Returns Historical Observations - Given IP Address, or auto. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *ip:* IP Address, or auto. Example: ip=auto
>      * required: true
>      * type: string

### function `getHistoryHourlyStationStation ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/hourly?station={station} 
> * **Description**: Returns Historical Observations - Given a station ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)** 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *station:* Station ID.
>      * required: true
>      * type: string

### function `getBulkHistoryDailyLatLatLonLon ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/daily?lat={lat}&lon={lon} 
> * **Description**: Returns Historical Observations - Given a lat, and lon. 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *lat:* Latitude component of location.
>      * required: true
>      * type: number
>   * *lon:* Longitude component of location.
>      * required: true
>      * type: number

### function `getBulkHistoryDailyCityIdCityId ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/daily?city_id={city_id} 
> * **Description**: Returns Historical Observations - Given a City ID. 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city_id:* City ID. Example: 4487042
>      * required: true
>      * type: string

### function `getBulkHistoryDailyPostalCodePostalCode ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/daily?postal_code={postal_code} 
> * **Description**: Returns Historical Observations - Given a Postal Code. 
> * **Parameters**: 
>   * *country:* Country Code (2 letter).
>      * required: false
>      * type: string
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *postal_code:* Postal Code. Example: 28546
>      * required: true
>      * type: string

### function `getBulkHistoryDailyCityCityCountryCountry ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/daily?city={city}&country={country} 
> * **Description**: Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. 
> * **Parameters**: 
>   * *state:* Full name of state.
>      * required: false
>      * type: string
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city:* City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
>      * required: true
>      * type: string
>   * *country:* Country Code (2 letter).
>      * required: true
>      * type: string

### function `getBulkHistoryDailyIpIp ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/daily?ip={ip} 
> * **Description**: Returns Historical Observations - Given IP Address, or auto. 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *ip:* IP Address, or auto. Example: ip=auto
>      * required: true
>      * type: string

### function `getBulkHistoryDailyStationStation ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/daily?station={station} 
> * **Description**: Returns Historical Observations - Given a station ID. 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *station:* Station ID.
>      * required: true
>      * type: string

### function `getBulkHistoryHourlyLatLatLonLon ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/hourly?lat={lat}&lon={lon} 
> * **Description**: Returns Historical Observations - Given a lat, and lon. 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *lat:* Latitude component of location.
>      * required: true
>      * type: number
>   * *lon:* Longitude component of location.
>      * required: true
>      * type: number

### function `getBulkHistoryHourlyCityIdCityId ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/hourly?city_id={city_id} 
> * **Description**: Returns Historical Observations - Given a City ID. 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city_id:* City ID. Example: 4487042
>      * required: true
>      * type: string

### function `getBulkHistoryHourlyPostalCodePostalCode ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/hourly?postal_code={postal_code} 
> * **Description**: Returns Historical Observations - Given a Postal Code.  
> * **Parameters**: 
>   * *country:* Country Code (2 letter).
>      * required: false
>      * type: string
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *postal_code:* Postal Code. Example: 28546
>      * required: true
>      * type: string

### function `getBulkHistoryHourlyCityCityCountryCountry ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/hourly?city={city}&country={country} 
> * **Description**: Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. 
> * **Parameters**: 
>   * *state:* Full name of state.
>      * required: false
>      * type: string
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *city:* City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
>      * required: true
>      * type: string
>   * *country:* Country Code (2 letter).
>      * required: true
>      * type: string

### function `getBulkHistoryHourlyIpIp ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/hourly?ip={ip} 
> * **Description**: Returns Historical Observations - Given IP Address, or auto. 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *ip:* IP Address, or auto. Example: ip=auto
>      * required: true
>      * type: string

### function `getBulkHistoryHourlyStationStation ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/history/hourly?station={station} 
> * **Description**: Returns Historical Observations - Given a station ID. 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *lang:* Language (Default: English) See <a href='/api/requests'>language field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *station:* Station ID.
>      * required: true
>      * type: string

### function `getHistoryEnergyLatLatLonLon ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/energy?lat={lat}&lon={lon} 
> * **Description**: Returns aggregate energy specific historical weather fields, over a specified time period. 
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *lat:* Latitude component of location.
>      * required: true
>      * type: number
>   * *lon:* Longitude component of location.
>      * required: true
>      * type: number

### function `getHistoryEnergyBboxLat1Lat1Lon1Lon1Lat2Lat2Lon2Lon2 ( params? : Object )`
> * **Method**: get 
> * **Path**: /history/energy/bbox?lat1={lat1}&lon1={lon1}&lat2={lat2}&lon2={lon2} 
> * **Description**: Returns aggregate energy specific historical weather fields, over a specified time period. Supply a bounding box ex: lat1=40&lon1=-78&lat2=38&lon2=-80. This API will return UP TO 150 stations, aggregated by the specified time period start_date to end_date.  
> * **Parameters**: 
>   * *start_date:* Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *end_date:* End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
>      * required: true
>      * type: string
>   * *units:* Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
>      * required: false
>      * type: string
>   * *callback:* Wraps return in jsonp callback. Example: callback=func
>      * required: false
>      * type: string
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *lat1:* Latitude of upper left corner.
>      * required: true
>      * type: number
>   * *lon1:* Longitude of upper left corner.
>      * required: true
>      * type: number
>   * *lat2:* Latitude of lower right corner.
>      * required: true
>      * type: number
>   * *lon2:* Longitude of lower right corner.
>      * required: true
>      * type: number

### function `getBulkByFile ( params? : Object )`
> * **Method**: get 
> * **Path**: /bulk/{file} 
> * **Description**: **(Advanced/Advanced+/Enterprise plans only)** Downloads bulk data files - OPTIONS: (forecast16d.json.gz - 16 day forecasts for cities > 1000 population, current.json.gz - Current observations for cities > 1000 population). 
> * **Parameters**: 
>   * *key:* Your registered API key.
>      * required: true
>      * type: string
>   * *file:* Filename (ie. forecast16d.json.gz)
>      * required: true
>      * type: string

