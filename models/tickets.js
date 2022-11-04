const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
    seat: {type: String, match: /[A-F][1-9]\d?/, unique: true},
    price: Number,
    flight: String
},{
    timestamp: true
});


module.exports = mongoose.model('Ticket', ticketSchema);