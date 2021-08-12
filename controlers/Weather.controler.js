'use strict';
const Forcast=require('../models/Weather.model');
const weather = require('../data/weather.json');


const getWeather=(req, res) => {
  let searchQuery = req.query['searchQuery'];
  let lat = req.query['lat'];
  let lon = req.query['lon'];
  const generalWeather = weather.find(item => { return (item.city_name.toUpperCase() === searchQuery.toUpperCase()) });
  let displayWeather = []
  generalWeather.data.forEach(element => {
    let weatherData = new Forcast(element);
    displayWeather.push(weatherData);
  });

  res.send(displayWeather);
}

module.exports=getWeather;