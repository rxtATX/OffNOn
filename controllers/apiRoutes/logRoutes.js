const router = require('express').Router();

const { log } = require('../../models');

router.post('/:id', async(req, res) => {
    try {
        req.body.ticket_id = req.params.id;
        if(!req.body.id) {
            res.status(404).json({ message: 'Please include a valid ticket id.' });
        }
        req.body.user_id = req.session.user_id;
        const logData = await log.create(req.body);
        res.status(200).json(logData);
    } catch (err) {
        res.status(500).json( { err, message: 'Server Error: Please try again later.' });
    }
});

module.exports = router;