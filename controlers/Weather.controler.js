'use strict';
const axios = require('axios')
const Forcast = require('../models/Weather.model');
const Cache = require('../helpers/ForcastCache')
const forcastCache = new Cache();

const getWeather = (req, res) => {
  if (forcastCache.forcastData[req.query['searchQuery']].length) {
    res.json({ data: forcastCache.forcastData[req.query['searchQuery']] })
  } else {


    let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=563e46f6cfd146f5bab7b9ab86aa9dcc&city=${req.query['searchQuery']}`
    let displayWeather = []
    axios.get(url).then(recived => {
      recived.data.data.forEach(day => {
        displayWeather.push(new Forcast(day))
      })
      forcastCache.forcastData=displayWeather;
      res.send(displayWeather);
    })

  }

}

module.exports = getWeather;