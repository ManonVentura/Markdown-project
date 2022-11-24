const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  author: String,
  post : String,
  date: Date,
});

const Post = mongoose.model('posts', postSchema);

module.exports = Post;
