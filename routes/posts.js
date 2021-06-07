var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts');

router.get('/', postCtrl.index);
router.post('/', postCtrl.create);
router.put('/:id', postCtrl.update);

module.exports = router;