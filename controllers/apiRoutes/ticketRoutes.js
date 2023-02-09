const router = require('express').Router();
const { Ticket } = require('../../models');
const sequelize = require('../../config/connection');

router.post('/', async (req, res) => {
    try {
        const newTicket = await Ticket.create({
            ticket_title: req.body.ticket_title,
            ticket_text: req.body.ticket_text,
            urgency: req.body.urgency
        })

        res.status(200).json('Successfully Added Ticket.')
        res.redirect('/Ticket/newTicket.id')
    } catch (err) {
        res.status(500).json('Server Error: Could not add Ticket.');
    }
})

/*
    The developer will create the API route for handling a new ticket being created.

Acceptance Criteria:
[] It is done when a router post listener exists within ticketRoutes.js
[] It is done when within the route handler function, a sequelize create method is being called.
[] It is done when the object passed to create includes the fields (as they match in the ticket model) holding the data related to

The user's input
Subject
Description
Urgency
- The automatically added fields
Client user's id
Status: "Open"
date created
[] It is done when on creating the new ticket, the client is informed of the successful creation, including in the response the ticket's id - crucial for client-side redirection
- The proper response could also be (optional) res.redirect("/ticket/")
[] It is done when creation fails, the client is informed with an appropriate server error.
*/

module.exports = router;