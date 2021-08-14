'use strict';
const axios = require('axios')
const Forcast = require('../models/Weather.model');
const Cache = require('../helpers/ForcastCache')
const forcastCache = new Cache([]);

const getWeather = (req, res) => {
  if (forcastCache.forcastData.name === req.query['searchQuery']) {
    res.send(forcastCache.forcastData.data)
  } else {
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=563e46f6cfd146f5bab7b9ab86aa9dcc&city=${req.query['searchQuery']}`
    let displayWeather = []
    axios.get(url).then(recived => {
      recived.data.data.forEach(day => {
        displayWeather.push(new Forcast(day))
      })
      let weatherObj = {
        name: req.query['searchQuery'],
        data: displayWeather
      }
      forcastCache.forcastData = weatherObj;
      res.send(displayWeather);
    })
  }
}

module.exports = getWeather;