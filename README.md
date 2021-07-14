# Pragmateam code challenge

### Highlights
- First thing I did was remove the status logic from inside the return statement and put it on a function, 'getTemperatureStatus', so it's logic can be tested.

- Then I moved the data array containing the beer types to the Server and implemented the get function from 'temperature/: id' to 'temperatures', so now instead of having the delay from the client to the server and the server to the API sensors, we have only one call from the client where all beer data is passed.

- Added a catch statement on the server get function 'temperatures' in case the API sensors return any kind of error.

- Added tests for the client side:
    - Test if shows the beer info on screen
    - Tests for the getTemperatureStatus function, for all valid cases and a 'NO DATA' in case the server could not find a temperature.