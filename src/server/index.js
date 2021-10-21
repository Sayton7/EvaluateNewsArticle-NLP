require('dotenv').config()
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch")
const FormData = require('form-data')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Setting up the API POST request



// const formdata = {
//     "key": process.env.API_KEY,
//     "lang": "en",
// }

app.post('/analyze', textToAnalyze)
  
function textToAnalyze(req, res) {
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${req.body.url}`
    const options = {
        'method': 'POST'
      }
    fetch(url, options)
      .then(data => data.json()).then(data => res.send(data))
}