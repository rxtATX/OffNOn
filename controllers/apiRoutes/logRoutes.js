const router = require('express').Router();

const { Log } = require('../../models');

router.post('/:id', async(req, res) => {
    try {
        req.body.ticket_id = req.params.id;
        if(!req.body.ticket_id) {
            res.status(404).json({ message: 'Please include a valid ticket id.' });
        }
        req.body.user_id = req.session.user_id;
        const logData = await Log.create(req.body);
        res.status(200).json(logData);
    } catch (err) {
        res.status(500).json( { err, message: 'Server Error: Please try again later.' });
    }
});

router.put('/:id', async (req, res) => {
try {
    const logData = await Log.update (req.body, {
        where: {  
            ticket_id: req.params.id,
    }
    });

    res.status(200).json({message: 'Updated successfully!', logData});
} catch (err) {
    res.status(500).json({message: 'Ticket failed to update.'});
}
});

module.exports = router;