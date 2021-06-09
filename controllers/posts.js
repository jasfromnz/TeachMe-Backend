var Post = require('../models/posts');

module.exports = {
    index,
    create,
    update,
    delete: deleteOne
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

function deleteOne(req, res) {
    Post.findByIdAndDelete(req.params.id, function(err, post) {
        index(req, res);
    })
}