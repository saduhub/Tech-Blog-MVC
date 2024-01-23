// Import necessary modules
require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Configure session storage
const sess = {
  secret: process.env.SECRET, 
  cookie: {
    maxAge: 300000,
    httpOnly: true, 
    secure: false,
    sameSite: 'strict', 
  },
  resave: false, 
  saveUninitialized: true, 
  store: new SequelizeStore({
    db: sequelize 
  })
};

// Initialize Express app
const app = express();

// Configure server port
const PORT = process.env.PORT || 3001;

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Allow json parsing
app.use(express.json());
// Allow URL parsing
app.use(express.urlencoded({ extended: true }));

// Create absolute path to serve static assets in public folder
app.use(express.static(path.join(__dirname, 'public')));

// Apply session configuration to app
app.use(session(sess));

// Set up application routes
app.use(routes);

// Implement Sequlize to sync models to database and start server
sequelize.sync({ force: false }).then(() => {
  // Set up server at specified port
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
