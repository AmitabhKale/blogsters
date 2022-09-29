const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");
const User = require("../models/userModel");

// @desc    Get Blog By Id
// @route   ai/blog/:id
// @access  Public
const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json(blogs);
});

// @desc    Create the Blog (Can be improved)
// @route   api/blog
// @access  Private
const createBlog = asyncHandler(async (req, res) => {
  const { title, description, moreinfo } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error("Please add a Title and Description");
  }

  //   Get User using the id
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not Found");
  }

  const blog = await Blog.create({
    user: req.user.id,
    title,
    description,
    moreinfo,
  });

  res.status(201).json(blog);
});

// @desc    Get Blog By Id
// @route   ai/blog/:slug
// @access  Public
const getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });

  if (blog) {
    res.status(200).json(blog);
  } else {
    throw new Error("Not Found");
  }
});

module.exports = {
  createBlog,
  getBlogBySlug,
  getAllBlogs,
};
