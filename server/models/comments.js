const mongoose = require('../config/connection');
const commentSchema = new mongoose.Schema(
  {
    comment_content: {
      type: String,
      required: true,
    },
    date_created: {
      type: Date,
      default: Date.now,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;














