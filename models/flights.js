const mongoose = require('mongoose');
//shortens mongoose.Schema to just Schema
const Schema = mongoose.Schema;


const flightsSchema = new Schema({
    airline: {type: String, enum: ['American','Southwest','United']},
    airport: {type: String, default:"DEN", enum: ['AUS','DFW','DEN','LAX','SAN']},
    flightNo:{type: Number, default: "", min: 10, max:9999}, 
    departs: Date
},{
    timestamp: true,
});


//compile Schmema into model and export it 
module.exports = mongoose.model('Flights', flightsSchema);