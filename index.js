const bodyParser = require('body-parser')
const express = require('express')
const Restaurants = require('./models/restaurants')
const api = express()

Restaurants.init()

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: false }))

api.use('/restaurants', require('./controllers/restaurants'))

api.listen(3000)