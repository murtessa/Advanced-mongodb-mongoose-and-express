
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Missing title"],
      unique:true
    },
    content:{
      type:String,
      
    },
    author: {
      type: String,
      required: "author is missing"
    },
    page:{
      type: Number,
      required: "Page number is Missing"
    },
    rating: {
      type:Number,
      default: 4.4
    }
  });
  const Post = mongoose.model('Post',postSchema);
  exports.model = Post;