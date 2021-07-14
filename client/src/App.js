import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const request = () => fetchTemperatureDate();
    request();
    setInterval(request, 5000);    
  }, []);

  function fetchTemperatureDate() {
    fetch(`http://localhost:8081/temperatures/`)
      .then((response) => response.json())
      .then((response) =>
        setItems(() => ({
          ...response
        }))
      );
  }

  function getTemperatureStatus(temp, max, min) {
    if (temp == undefined) {
      return "NO DATA";
    } else if (temp < min) {
      return "too low";
    } else if (temp > max) {
      return "too high";
    } else {
      return "all good";
    }
  }

  return (
    <div className="App">
      <h2>Beers</h2>
      <table>
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((itemKey) => (
            <tr key={items[itemKey].id}>
              <td data-testid="name" width={150}>{items[itemKey].name}</td>
              <td data-testid="temperature" width={150}>{items[itemKey].temperature}</td>
              <td width={150}>
                <span data-testid="status">{getTemperatureStatus(items[itemKey].temperature, items[itemKey].maximumTemperature, items[itemKey].minimumTemperature)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
