const { Comment } = require('../models');

const commentData = [
    {
        content: 'Comment 1 for Post 1',
        post_id: 1,
    },
    {
        content: 'Comment 2 for Post 1',
        post_id: 1,
    },
    {
        content: 'Comment 1 for Post 2',
        post_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;