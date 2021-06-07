var Post = require('../models/posts');

module.exports = {
    index,
    create,
    update
}

function index(req, res) {
    Post.find({}, function(err, posts) {
      res.status(200).json(posts);
    });
}

function create(req, res) {
    Post.create(req.body, function(err, post) {
      res.status(201).json(post);
    });
}

function update(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        index(req, res);
    });
}