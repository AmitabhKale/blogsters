const express = require("express");
const {
  getMyProfileInfo,
  createMyProfile,
} = require("../controllers/profileController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/me", protect, getMyProfileInfo);
router.post("/create", protect, createMyProfile);

module.exports = router;
