// Start of Code [Evan Towlerton]

// Checks to make sure the user is logged in, if not redirect them to the login page
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;