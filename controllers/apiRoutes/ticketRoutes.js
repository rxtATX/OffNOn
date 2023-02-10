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

        res.status(200).json(newTicket);
    } catch (err) {
        res.status(500).json('Server Error: Could not add Ticket.');
    }
})


module.exports = router;