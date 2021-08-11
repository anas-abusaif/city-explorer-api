const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const PORT = process.env.PORT;
const weather = require('./data/weather.json');


app.get('/weather', (req, res) => {
  let searchQuery = req.query['searchQuery'];
  let lat = req.query['lst'];
  let lon = req.query['lon'];
  const generalWeather = weather.find(item => { return (item.city_name.toUpperCase() === searchQuery.toUpperCase()) });
  let displayWeather = []
  generalWeather.data.forEach(element => {
    weatherData = new Forcast(element);
    displayWeather.push(weatherData);
  });

  res.send(displayWeather);
});


app.listen(PORT, () => console.log('working'));

class Forcast {
  constructor(city) {
    this.date = city.datetime;
    this.description = city.weather.description;
  }
}