const { body } = require("express-validator");
const { MBTIEnum } = require("../enums/mbti.enum");
const { EnneagramEnum } = require("../enums/enneagram.enum");
const { ZodiacEnum } = require("../enums/zodiac.enum");

const postCommentSchema = [
  body("profileId").notEmpty().withMessage("Profile Id is required"),
  body("authorProfileId").notEmpty().withMessage("authorProfileId is required"),
  body("text").notEmpty().withMessage("text is required"),
  body("mbtiVote")
    .optional()
    .isIn(MBTIEnum)
    .withMessage("Please provide valid mbti value"),
  body("enneagramVote")
    .optional()
    .isIn(EnneagramEnum)
    .withMessage("Please provide valid enneagram value"),
  body("zodiacVote")
    .optional()
    .isIn(ZodiacEnum)
    .withMessage("Please provide valid zodiac value"),
];
module.exports = {
  postCommentSchema,
};
