const Profile = require("../models/profile.model");
const Comment = require("../models/comment.model");

const getProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const profile = await Profile.findById(id);

    if (!profile) {
      return res.status(400).send({
        message: "Invalid ID",
      });
    }

    res.render("profile_template", {
      profile,
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({});
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addProfile = async (req, res) => {
  try {
    const data = req.body;
    const profile = new Profile({
      name: data.name,
      description: data.description,
      mbti: data.mbti,
      enneagram: data.enneagram,
      variant: data.variant,
      tritype: data.tritype,
      socionics: data.socionics,
      sloan: data.sloan,
      psyche: data.psyche,
      image: data.image,
    });
    await profile.save();
    return res.status(201).json({ message: "Added profile sucessfully!" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getComments = async (req, res) => {
  try {
    let query = {};
    let sortQuery = {};
    const { sort, filterBy } = req.query;

    // Sorting comments by most recent or most liked
    if (sort === "recent") {
      sortQuery = { createdAt: -1 };
    } else if (sort === "likes") {
      sortQuery = { likes: -1 };
    }

    // Filtering comments
    if (filterBy) {
      Object.keys(filterBy).forEach((key) => {
        const filterValue = filterBy[key];
        query = { ...query, [`${key}Vote`]: filterValue };
      });
    }

    const comments = await Comment.find(query)
      .sort(sortQuery)
      .populate("author")
      .exec();

    res.json(comments);
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  getProfile,
  addProfile,
  getAllProfiles,
  getComments,
};
