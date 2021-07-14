# Pragmateam code challenge

Please refer to the provided document for the code challenge requirements. 

## Available scripts

### Root
- `npm install` - Installs dependencies client and server apps
- `npm start` - Runs client and server apps

### Client
- `npm start` - Start the application (Port 3000)
- `npm test` - Runs available tests

### Server
- `npm start` - Start the application (Port 8081)

### Highlights
- First thing I did was remove the status logic from inside the return statement and put it on a function, 'getTemperatureStatus', so it's logic can be tested.

- Then I moved the data array containing the beer types to the Server and implemented the get function from 'temperature/: id' to 'temperatures', so now instead of having the delay from the client to the server and the server to the API sensors, we have only one call from the client where all beer data is passed.

- Added a catch statement on the server get function 'temperatures' in case the API sensors return any kind of error.

- Added tests for the client side:
    - Test if shows the beer info on screen
    - Tests for the getTemperatureStatus function, for all valid cases and a 'NO DATA' in case the server could not find a temperature.
    - 
### What would you improve next if you had more time?
- Implement more tests in the case of API failures.
- Make a better arrangement of visual components and logical function on separeted files (front).
- Implement some end-to-end test for integration

### Explanations of decisions
I tried to separate visual from logic code and then mitigate any kind of possible unhandle exception, furthermore tried to remove any unnecessary data kept hardcoded on the client side and make the API delivery it.
