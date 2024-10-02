const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/register', function (req, res) {
  
})

app.listen(3000)