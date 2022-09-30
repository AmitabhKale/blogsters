import axios from "axios";

const API_URL = "/api/blogs/";

// Create new Blog
const createBlog = async (blogData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, blogData, config);
  return response.data;
};

// Get All Blog

// Get Single User Blogs

const blogService = {
  createBlog,
};

export default blogService;
