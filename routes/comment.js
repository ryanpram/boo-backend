"use strict";

const express = require("express");
const router = express.Router();
const { validate } = require("../validator/validator");
const {
  likeUnlikeComment,
  postComment,
} = require("../controllers/comment.controller");
const { postCommentSchema } = require("../validator/comment.validator");

module.exports = function () {
  router.put("/:id/like", likeUnlikeComment);
  router.post("/", [validate(postCommentSchema), postComment]);
  return router;
};
