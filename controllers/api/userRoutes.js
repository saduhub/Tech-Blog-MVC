const router = require('express').Router();

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