const Ticket = require('../models/tickets');
const Flight = require('../models/flights');

module.exports = {
    new: newTicket,
    create,
    addTicket
};


function create(req, res) {
    Ticket.create(req.body, function(err, ticket){
        res.redirect('/tickets/new');
    });
}


function newTicket (req, res) {
    Ticket.find({},function(err, tickets){
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    })
}


function addTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.tickets.push(req.body.ticketId);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }