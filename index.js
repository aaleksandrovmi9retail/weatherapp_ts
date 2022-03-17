const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()

const app = express()
app.use(cors())

app.listen(8000)

app.get('/forecast',(req,res) => {
      axios.request(`https://api.worldweatheronline.com/premium/v1/weather.ashx?q=${req.query.city}&extra=isDayTime,localObsTime,utcDateTime&format=json&showlocaltime=yes&key=${process.env.REACT_APP_API_KEY}`).then((response) =>{
      	res.json(response.data)
      	console.log(req)
      })
})
