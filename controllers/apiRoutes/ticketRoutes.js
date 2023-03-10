const router = require('express').Router();
const { Ticket } = require('../../models');
const sequelize = require('../../config/connection');

router.post('/', async (req, res) => {
    try {
        const newTicket = await Ticket.create({
            ticket_title: req.body.ticket_title,
            ticket_text: req.body.ticket_text,
            urgency: req.body.urgency,
            client_id: req.session.user_id
        })

        res.status(200).json(newTicket);
    } catch (err) {
        res.status(500).json('Server Error: Could not add Ticket.');
    }
})

router.put('/:id', async (req, res) => {
    try {

        
        
        if (req.body.status === 'Claimed') {
            req.body.tech_id = req.session.user_id;
        }
        
        
        const updatedTicket = await Ticket.update(req.body, {
            where: {
                id: req.params.id
            }
        });


        res.status(200).json({ message: 'Ticket updated successfully!', updatedTicket });
    } catch (err){
        res.status(500).json({ message: 'Failed to update ticket.', 
        error: err});
    }
})


module.exports = router;