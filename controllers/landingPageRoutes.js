// Import router 
const router = require('express').Router();
// Require model
const { User, Comment, Post} = require('../models')
// Import middleware
const withAuth = require('../utils/auth');
// Define landing page route. Add middleware to check if user is logged in. Either render login/signup view (form) or User dashboard view
router.get('/', withAuth, async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    res.redirect('loginorsignup');
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('loginorsignup');
});

module.exports = router;