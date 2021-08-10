const express = require('express') // require the express package
const app = express() // initialize your express app instance

// a server endpoint 
app.get('/weather', // our endpoint name
  (req, res) => { // callback function of what we should do with our request

    res.send('Hello World') // our endpoint function response
  })


app.listen(3000) // kick start the express server to work