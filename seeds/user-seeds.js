const { User } = require('../models');

const userData = [
    { 
        username: 'user1', 
        password: 'user1password', 
    },
    { 
        username: 'user2', 
        password: 'user2password', 
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;