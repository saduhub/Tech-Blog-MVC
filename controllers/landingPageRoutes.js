// Import router 
const router = require('express').Router();
// Define landing page route. Add middleware to check if user is logged in. Either render login/signup view (form) or User dashboard view
router.get('/', (req, res) => {
    res.render('landingPage');
});

// Define home page route. Add middleware to check if user is logged in. Render all posts
router.get('/home', (req, res) => {
    res.render('home');
});
// Define dashboard page route. Add middleware to check if user is logged in. Render all user posts
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});
// Define Login route that wil take user input to login and render user dashboard if successful

// Define signup route that will take user input to signup and render user dashboard if successful


module.exports = router;