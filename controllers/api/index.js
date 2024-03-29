// Use express router module to be able to connect route paths and keeping everything organized.
const router = require('express').Router();
// Set access to the routes inside of blogRoutes.js.
const blogRoutes = require('./blogRoutes');
// Set access to the routes inside of userRoutes.js.
const userRoutes = require('./userRoutes');
// A fetch request to '/api/blogs' will be routed to blogRoutes.js where it will match a route and trigger the code.
router.use('/blogs', blogRoutes);
// A fetch request to '/api/blogs' will be routed to blogRoutes.js where it will match a route and trigger the code.
router.use('/users', userRoutes);
// Make routes available for use in other part of the app. 
module.exports = router;
