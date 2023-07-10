const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n______DATABASE SYNCED______\n');
  await seedUsers();
  console.log('\n______USERS SYNCED______\n');

  await seedPosts();
  console.log('\n______POSTS SYNCED______\n');

  await seedComments();
  console.log('\n______COMMENTS SYNCED______\n');

  process.exit(0);
};

seedAll();