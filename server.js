// Import path.
const path = require('path');
// Import Express.
const express = require('express');
const session = require('express-session');
// Import handlebars.
const exphbs = require('express-handlebars');
// Import controllers.
const routes = require('./controllers');
// Import connection to db via Sequelize and mysql2 driver.
const sequelize = require('./config/connection.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create new instance of express.
const app = express();
// Set post where server will listen.
const PORT = process.env.PORT || 3001;
// Set up a view engine for application. Needed when using express-handlebars 7.0.7
app.engine('handlebars', exphbs.engine());
// Set the view engine value to habdlebars.
app.set('view engine', 'handlebars');

const sess = {
  secret: 'Super secret secret',
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

app.use(session(sess));

// Allow json parsing.
app.use(express.json());
// Allow URL parsing.
app.use(express.urlencoded({ extended: true }));
// Create absolute path to serve static assets in public folder.
app.use(express.static(path.join(__dirname, 'public')));
// Make use of controllers when listening for user input.
app.use(routes);

// Implement Sequlize to sync models to databse and start server.
sequelize.sync({ force: false }).then(() => {
  // Set up server at specified port
  app.listen(PORT, () => console.log('Now listening'));
});
