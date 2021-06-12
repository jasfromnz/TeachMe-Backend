var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts');

router.get('/', postCtrl.indexPosts);
router.post('/', postCtrl.createPost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);

module.exports = router;