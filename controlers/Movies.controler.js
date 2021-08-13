'use strict';
const axios = require('axios');
const TopMovies=require('../models/Movie.model')

const getMovies = (req, res) => {
  let url = `https://api.themoviedb.org/3/search/multi?api_key=d8a9bee92b0e8c76e9aa9ff88ce952c3&query=${req.query['searchQuery']}`
  let movieData = []
  axios.get(url).then(moviesData => {
    moviesData.data.results.forEach(movie => {
      movieData.push(new TopMovies(movie))
    })
    res.send(movieData)
  })
}
module.exports = getMovies;