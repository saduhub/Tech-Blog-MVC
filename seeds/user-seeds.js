const { User } = require('../models');

const userData = [
    { 
        username: 'user1', 
        email: 'user1@example.com', 
    },
    { 
        username: 'user2', 
        email: 'user2@example.com', 
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;