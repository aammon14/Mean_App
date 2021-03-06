const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, requires: true }
});

module.exports = mongoose.model('Post', postSchema);
