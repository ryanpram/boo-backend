"use strict";

const express = require("express");
const router = express.Router();
const {
  likeUnlikeComment,
  postComment,
} = require("../controllers/comment.controller");

module.exports = function () {
  router.put("/:id/like", likeUnlikeComment);
  router.post("/", postComment);
  return router;
};
