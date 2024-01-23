const { Post } = require('../../models');
// Define individual post view route. Render post and comment section

// Define individual add comment route (CREATE). Render post and comment

// Define dashboard route. All user posts. and new post button and render new post form. (CREATE)

// Define update post route. Post update form. and save post button


const router = require('express').Router();
router.get('/another', (req, res) => {
    res.render('postByAnother');
});
module.exports = router;



