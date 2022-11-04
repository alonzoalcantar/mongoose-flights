const mongoose = require('mongoose');
//shortens mongoose.Schema to just Schema
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {type: String, default:"DEN", enum: ['AUS','DFW','DEN','LAX','SAN']},
    arrival: Date
  }, {
    timestamps: true
  });

const flightsSchema = new Schema({
    airline: {type: String, enum: ['American','Southwest','United']},
    airport: {type: String, default:"DEN", enum: ['AUS','DFW','DEN','LAX','SAN']},
    flightNo:{type: Number, default: "", min: 10, max:9999}, 
    departs: Date,
    destinations: [destinationSchema],
    tickets: [{type: Schema.Types.ObjectId, ref: 'Tickets'}]
},{
    timestamp: true,
});


//compile Schmema into model and export it 
module.exports = mongoose.model('Flights', flightsSchema);