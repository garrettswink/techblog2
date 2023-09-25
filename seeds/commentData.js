const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "First!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I agree!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "I disagree!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "Well done!",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: "This is BS!",
    user_id: 5,
    post_id: 5,
  },
  {
    comment_text: "Great article!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Fascinating!",
    user_id: 3,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
