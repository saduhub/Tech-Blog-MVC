// Import router 
const router = require('express').Router();
// Require model
const { User, Comment, Post} = require('../models')
// Define landing page route. Add middleware to check if user is logged in. Either render login/signup view (form) or User dashboard view
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({include: [User]});
    const posts = postData.map((post) => post.get({plain: true}));
    console.log(posts);
    res.render('landingPage', {
      posts, 
      // loggedIn: req.session.loggedIn
    });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define home page route. Add middleware to check if user is logged in. Render all posts
router.get('/home', (req, res) => {
    res.render('home');
});
// Define dashboard page route. Add middleware to check if user is logged in. Render all user posts
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/login', (req, res) => {
  res.render('loginorsignup');
});

module.exports = router;