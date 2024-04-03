const Comment = require("../models/comment.model");

const likeUnlikeComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { likeProfileId } = req.body;
    const comment = await Comment.findById(id);

    if (!comment) {
      res.status(400).send({
        message: "Comment not found!",
      });
    }

    // Check if the user has already liked the comment
    const hasLiked = comment.likes.includes(likeProfileId);

    if (hasLiked) {
      // Remove like (unlike)
      const index = comment.likes.indexOf(likeProfileId);
      comment.likes.splice(index, 1);
    } else {
      // Store like (like)
      comment.likes.push(likeProfileId);
    }

    await comment.save();
    return res.status(200).json({
      message: "Updated comment's like sucessfully!",
      data: {
        likeCount: comment.likes.length,
      },
    });
  } catch (error) {
    console.log("err", error);
    res.status(500).json("Internal Server Error");
  }
};

const postComment = async (req, res) => {
  try {
    const {
      profileId,
      authorProfileId,
      text,
      mbtiVote,
      enneagramVote,
      zodiacVote,
    } = req.body;

    // Create a new comment
    const comment = new Comment({
      profile: profileId,
      author: authorProfileId,
      text,
      mbtiVote,
      enneagramVote,
      zodiacVote,
    });

    const createdComment = await comment.save();
    return res
      .status(201)
      .json({ message: "Added comment sucessfully!", data: createdComment });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  likeUnlikeComment,
  postComment,
};
