// Middleware to determine is user is logged in when making a request. Logged out users will be redirected to login.
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;