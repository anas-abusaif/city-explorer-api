const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const PORT = process.env.PORT;
const WeatherControler=require('./controlers/Weather.controler')
const moviesControler=require('./controlers/Movies.controler')
app.get('/',(req,res)=>{
  res.send('hello there')
})

app.get('/weather', WeatherControler);

// app.get('/movies', moviesControler)

app.listen(PORT, () => console.log('working'));

