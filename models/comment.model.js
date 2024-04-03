const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const { MBTIEnum } = require("../enums/mbti.enum");
const { EnneagramEnum } = require("../enums/enneagram.enum");
const { ZodiacEnum } = require("../enums/zodiac.enum");

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
      enum: MBTIEnum,
      default: null,
    },
    enneagramVote: {
      type: String,
      enum: EnneagramEnum,
      default: null,
    },
    zodiacVote: {
      type: String,
      enum: ZodiacEnum,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.comment || model("comment", commentSchema);
