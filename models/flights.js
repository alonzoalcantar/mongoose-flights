const mongoose = require('mongoose');
//shortens mongoose.Schema to just Schema
const Schema = mongoose.Schema;


const flightsSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
});


//compile Schmema into model and export it 
module.exports = mongoose.model('Flights', flightsSchema);