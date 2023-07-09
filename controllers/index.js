// Use express router module to be able to connect route paths and keeping everything organized.
const router = require('express').Router();
// Set access to the contents of the api folder.
const apiRoutes = require('./api');
// Set access to the routes inside of landingPageRoutes.js.
const landingPageRoutes = require('./landingPageRoutes');
// A fetch request to '/' will be routed to landingPageRoutes.js where it will match a route and trigger the code.
router.use('/', landingPageRoutes);
// A fetch request to '/' will be routed to the api folder where it will be handles by another index.js controller.
router.use('/api', apiRoutes);
// Make routes available for use in other part of the app. 
module.exports = router;
