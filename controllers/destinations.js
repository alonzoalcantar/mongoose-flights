const Flight = require('../models/flights');

module.exports = {
    create
  };
  

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      // We can push subdocs into Mongoose arrays
      flight.destination.push(req.body);
      // Save any changes made to the movie doc
      flight.save(function(err) {
        // Step 5:  Respond to the Request (redirect if data has been changed)
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }
  
  