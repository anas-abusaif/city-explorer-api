const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const PORT = process.env.PORT;
const WeatherControler=require('./controlers/Weather.controler')
const MoviesControler=require('./controlers/Movies.controler')
app.get('/',(req,res)=>{
  res.send('hello there')
})

app.get('/weather', WeatherControler);

app.get('/movies', MoviesControler)

app.listen(PORT, () => console.log('working'));

