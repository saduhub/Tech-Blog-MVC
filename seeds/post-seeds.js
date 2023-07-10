const { Post } = require('../models');

const postData = [
    {
    title: 'Post 1',
    content: 'This is the content of post 1',
    user_id: 1,
    },
    {
    title: 'Post 2',
    content: 'This is the content of post 2',
    user_id: 2,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;