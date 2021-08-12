const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const PORT = process.env.PORT;
const WeatherControler=require('./controlers/Weather.controler')

app.get('/',(req,res)=>{
  res.send('hello')
})

app.get('/weather', WeatherControler);


app.listen(PORT, () => console.log('working'));

