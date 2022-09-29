const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
} = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");
const Blog = require("../models/blogModel");
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:slug", getBlogBySlug);

router.post("/", protect, createBlog);

module.exports = router;
