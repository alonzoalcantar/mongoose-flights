const Flight = require('./models/flights.js');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/flights');

const db = mongoose.connection

db.on('connected', function(){

Flight.updateMany(
    {},  // Query object determines which docs to update
    {tickets: []},  // Update object has properties to update
    function(err, result) {console.log(result)
    }
  );
})