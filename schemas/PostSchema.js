// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database schema
const PostSchema = new Schema({ textPost: {type: String} }, { timestamps: true });

// Database model
var Post = mongoose.model('Post', PostSchema);

// Export model
module.exports = Post;