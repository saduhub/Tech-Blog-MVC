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
// Define Login route that will render user dashboard if successful
router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ where: { username } });
  
      if (!user || !user.isValidPassword(password)) {
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
  
      req.session.userId = user.id;
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Define signup route that will take user input to signup and render user dashboard if successful


module.exports = router;