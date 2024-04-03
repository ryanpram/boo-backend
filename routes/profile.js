"use strict";

const express = require("express");
const router = express.Router();
const {
  addProfile,
  getProfile,
  getAllProfiles,
  getComments,
} = require("../controllers/profile.controller");
const { addProfileSchema } = require("../validator/profile.validator");
const { validate } = require("../validator/validator");

const profiles = [
  {
    id: 1,
    name: "A Martinez B",
    description: "Adolph Larrue Martinez III.",
    mbti: "ISFJ",
    enneagram: "9w3",
    variant: "sp/so",
    tritype: 725,
    socionics: "SEE",
    sloan: "RCOEN",
    psyche: "FEVL",
    image: "https://soulverse.boo.world/images/1.png",
  },
];

module.exports = function () {
  router.get("/:id", getProfile);
  router.get("/", getAllProfiles);
  router.post("/", [validate(addProfileSchema), addProfile]);
  router.get("/:id/comments", getComments);

  return router;
};
