const router = require('express').Router();
const { Log, User, Ticket } = require('../models');
const withAuth = require('../utils/auth');

router.get('/status?', async (req, res) => {
    try {
        // Get all tickets with the specified status and JOIN with user data
        const ticketData = await Ticket.findAll({
        where: {status: req.params.status},
            include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name'],
                },
            ],
        });

        // Serialize data so the template can read it
        const tickets = ticketData.map((ticket) => ticket.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('dashboard', {
            tickets,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async (req, res) => {
    res.render('login', {
        title: "Login"
    });
})

router.get('/dashboard/status?', async (req, res) => {
    try {
        // Get all tickets and JOIN with user data
        const ticketData = await Ticket.findAll({
            where: {status: req.params.status},
            include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name'],
                },
            ],
        });

        // Serialize data so the template can read it
        const tickets = ticketData.map((ticket) => ticket.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('dashboard', {
            title: "Dashboard",
            tickets,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/ticket', async (req, res) => {
    res.render('ticket', {
        title: "Ticket"
    });
})


module.exports = router;
