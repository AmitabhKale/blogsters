const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bio: {
    type: String,
  },
  skills: {
    type: [String],
  },
  website: {
    type: String,
  },
  profilePic: {
    type: String,
    required: true,
    default: "https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg",
  },
  coverPic: {
    type: String,
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
