var Post = require('../models/posts');

module.exports = {
    indexPosts,
    createPost,
    updatePost,
    deletePost
}

function indexPosts(req, res) {
    Post.find({}, function(err, posts) {
      res.status(200).json(posts);
    });
}

function createPost(req, res) {
    Post.create(req.body, function(err, post) {
      res.status(201).json(post);
    });
}

function updatePost(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        indexPosts(req, res);
    });
}

function deletePost(req, res) {
    Post.findByIdAndDelete(req.params.id, function(err, post) {
        indexPosts(req, res);
    })
}