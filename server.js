const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const PORT = process.env.PORT;
const weather = require('./data/weather.json');
const WeatherControler=require('./controlers/Weather.controler')

app.get('/',(req,send)=>{
  res.send('hello')
})

app.get('/weather', WeatherControler);


app.listen(PORT, () => console.log('working'));

