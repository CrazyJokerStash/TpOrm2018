const router = require('express').Router()
const Restaurants = require('../models/restaurants')

router.post('/', function(req, res, next) 
{
    Restaurants.create(req.body)
    .then((restaurants) => {
        res.json(restaurants)
    })
})

router.get('/', function(req, res, next) 
{
    Restaurants.get()
    .then((restaurants) => {
        res.json(restaurants)
    })
})

router.delete('/:id', function(req, res, next) 
{
    const identifiant = req.params.id
    Restaurants.delete(identifiant)
    .then((restaurants) => {
        res.json(restaurants)
    })
})

module.exports = router