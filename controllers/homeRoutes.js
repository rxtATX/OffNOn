const router = require('express').Router();
const { Log, User, Ticket } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', async (req, res) => {
    res.render('login', {
        title: "Login"
    });
})

router.get('/dashboard/:status?',withAuth, async (req, res) => {
    try {

        let where = {};
        // Get all tickets with the specified status and JOIN with user data
        if (req.params.status) {
            where = {
                status: req.params.status
            } 
        }
        // Get all tickets and JOIN with user data
        const ticketData = await Ticket.findAll({
            
            where,
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

router.get('/ticket',withAuth, async (req, res) => {
    res.render('ticket', {
        title: "Ticket"
    });
})

router.get('/ticket/:id', withAuth, async (req,res) => {
	try {
		const ticketID = await Ticket.findByPk(req.params.id, {
            include : [
                {
                    model: Log,
                }
            ]
        })

        const ticketIDSerialized = ticketID.get({ plain: true })
        res.render('ticket', {
            ticket: ticketIDSerialized,
            title: ticketIDSerialized.ticket_title,
            logged_in: req.session.logged_in
        })
	}
	catch (err) {
		console.log(err)
		res.status(500).json(err);
	}
});

router.get('/:status?',withAuth, async (req, res) => {
    try {
        
        let where = {};
        // Get all tickets with the specified status and JOIN with user data
        if (req.params.status) {
            where = {
                status: req.params.status
            } 
        }

        const ticketData = await Ticket.findAll({
            where,
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

module.exports = router;
