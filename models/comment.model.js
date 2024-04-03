const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const commentSchema = new Schema(
  {
    profile: {
      type: Schema.Types.ObjectId,
      ref: "profile",
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "profile",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "profile",
      },
    ],
    mbtiVote: {
      type: String,
      enum: [
        "INFP",
        "INFJ",
        "ENFP",
        "ENFJ",
        "INTJ",
        "INTP",
        "ENTP",
        "ENTJ",
        "ISFP",
        "ISFJ",
        "ESFP",
        "ESFJ",
        "ISTP",
        "ISTJ",
        "ESTP",
        "ESTJ",
      ],
      default: null,
    },
    enneagramVote: {
      type: String,
      enum: [
        "1w2",
        "2w3",
        "3w2",
        "3w4",
        "4w3",
        "4w5",
        "5w4",
        "5w6",
        "6w5",
        "6w7",
        "7w6",
        "7w8",
        "8w7",
        "8w9",
        "9w8",
        "9w1",
      ],
      default: null,
    },
    zodiacVote: {
      type: String,
      enum: [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces",
      ],
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.comment || model("comment", commentSchema);
