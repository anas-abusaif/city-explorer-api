'use strict';
const axios = require('axios')
const Forcast = require('../models/Weather.model');


const getWeather = (req, res) => {
  let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=563e46f6cfd146f5bab7b9ab86aa9dcc&city=${req.query['searchQuery']}`
  let displayWeather = []
  axios.get(url).then(recived => {
   recived.data.data.forEach(dayy=>{
     displayWeather.push(new Forcast(dayy))
   })
    res.send(displayWeather);
  })


  
}

module.exports = getWeather;