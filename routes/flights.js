var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

//GET flights/new
router.get('/new', flightsCtrl.new);
//POST new movie 
router.post('/', flightsCtrl.create);
//GET all movies 
router.get('/', flightsCtrl.index);


module.exports = router;
