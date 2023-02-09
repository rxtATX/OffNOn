// Importing Express Router.
const router = require('express').Router();

// Importing all sister files to pass through.
const logRoutes = require('./logRoutes');
const ticketRoutes = require('./ticketRoutes');
const userRoutes = require('./userRoutes');

// Using the api sub-routes to allow their fetches.
router.use('/log', logRoutes);
router.use('/ticket', ticketRoutes);
router.use('/user', userRoutes);

module.exports = router;