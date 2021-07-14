const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors());

const data = [
  {
    id: '1',
    name: 'Pilsner',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
  {
    id: '2',
    name: 'IPA',
    minimumTemperature: 5,
    maximumTemperature: 6,
  },
  {
    id: '3',
    name: 'Lager',
    minimumTemperature: 4,
    maximumTemperature: 7,
  },
  {
    id: '4',
    name: 'Stout',
    minimumTemperature: 6,
    maximumTemperature: 8,
  },
  {
    id: '5',
    name: 'Wheat beer',
    minimumTemperature: 3,
    maximumTemperature: 5,
  },
  {
    id: '6',
    name: 'Pale Ale',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
];

app.get('/temperatures/', async (req, res) => {
  let promises = [];

  data.forEach((product) => {
    promises.push(
      fetch(`https://temperature-sensor-service.herokuapp.com/sensor/${product.id}`)
        .then((response) => response.json())
        .then((response) => {
          return {
            ...product,
            ...response
          }
        }).catch((_) => {
          return product
        })
    )
  })

  var temps = await Promise.all(promises);

  res.send(temps);
});

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
