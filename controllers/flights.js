//   controllers/flights.js

const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

module.exports = {
    new: newFlight,
    create,
    index,
    show
};



function newFlight(req,res) {
    res.render('flights/new');
}

function create (req, res) {
    // for(let key in req.body){
    //     if(req.body[key] === "") delete req.body[key];
    // }
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect(`/flights/${flight._id}`);
    });
}


function index (req, res) {
    Flight.find({}, function(err,flights){
        if(err){
            console.log(err);
            res.redirect('/');
        }
        res.render("flights/index", {flights});
    });
}

function show(req, res) {
    Flight.findById(req.params.id)
    .populate('tickets').exec(function(err, ticket) {
        Ticket.find(
            {_id: {$nin: flight.tickets}},
            function(err, tickets) {
              console.log(tickets);
              res.render('flights/show', {
                title: 'Flight Detail', flight, tickets
              });
            });
        });
    }
