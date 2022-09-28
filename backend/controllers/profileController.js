const asyncHandler = require("express-async-handler");

const Profile = require("../models/profileModel");

// @desc    Get Mine UserInfo
// @route   api/profile/me
// @access  PUBLIC
const getMyProfileInfo = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne(req.user._id).populate(
    "user",
    "name email"
  );

  if (profile) {
    res.json({
      name: profile.user.name,
      email: profile.user.email,
      profilePic: profile.profilePic,
    });
  } else {
    res.status(400);
    throw new Error("Profile not Found");
  }
});

// @desc    Create Your Own User Profile
// @route   api/profile/
// @access  PRIVATE
const createMyProfile = asyncHandler(async (req, res) => {
  // Check if Profle Exists in DB
  const profileExists = await Profile.findOne(req.user._id);
  if (profileExists) {
    res.status(400);
    throw new Error("Profile Exists");
  }

  const profile = await Profile.create({
    user: req.user._id,
  });

  if (profile) {
    res.status(200).json({
      msg: "profile Created",
    });
  }
});
module.exports = {
  getMyProfileInfo,
  createMyProfile,
};
