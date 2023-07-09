// import models
const Post = require('./Post.js');
const User = require('./User.js');
const Comment = require('./Comment.js');


// Post belongsTo User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});
// Users have many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});
// Comment belongsTo Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});
// Posts have many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});


module.exports = {
  Post,
  User,
  Comment,
};