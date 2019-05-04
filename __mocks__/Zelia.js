var Zelia_Users = require('./Zelia_Users')
var axios = require('axios')
var express = require('express')
var app = express()

app.use(express.json())

app.listen(9091, () => console.log("Zelia Server Running on *:9091"))

// For Signup using phone
app.post('/zelia/signup', (req, res) => {
    const user = req.body
    Zelia_Users.push(user)
    res.send(user)
})

// For login
app.get('/zelia/login', (req, res) => {
    res.send(Zelia_Users)
})