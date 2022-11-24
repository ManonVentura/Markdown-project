var express = require('express');
require('../models/connection');
var router = express.Router();
const Post = require('../models/post')


router.post('/', (req, res) => {
    const newPost = new Post({
        author: req.body.author,
        post : req.body.post,
        date: req.body.date,
    });

    newPost.save().then((data) => {
        res.json({result : true, data : data})
    })
    
})

router.get('/posts', (req, res) => {
    Post.find().then(data => {
        if (data) {
            res.json({result: true, posts : data})
        } else {
            res.json({result : false, start: 'Write your first post!'})
        }
    })
})

module.exports = router;