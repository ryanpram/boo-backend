const { body } = require("express-validator");

const addProfileSchema = [
  body("name").isLength({ min: 4 }).withMessage("Name must be at least 4"),
  body("description").notEmpty().withMessage("Description is required"),
  body("mbti").notEmpty().withMessage("Mbti is required"),
  body("enneagram").notEmpty().withMessage("Enneagram is required"),
  body("variant").notEmpty().withMessage("Variant is required"),
  body("tritype")
    .notEmpty()
    .withMessage("Tritype is required")
    .bail()
    .isNumeric()
    .withMessage("Tritype must be number"),
  body("sloan").notEmpty().withMessage("Sloan is required"),
  body("psyche").notEmpty().withMessage("Psyche is required"),
  body("image").notEmpty().withMessage("Image is required"),
];
module.exports = {
  addProfileSchema,
};
