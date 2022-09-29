const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const users = require("./data/users");
const blogs = require("./data/blogs");
const connectDB = require("./config/db");
const User = require("./models/userModel");
const Blog = require("./models/blogModel");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const user1Id = createdUsers[1]._id;
    const user2Id = createdUsers[2]._id;

    const user1 = await User.findOne({ name: "Sanket" });

    const blog1 = blogs[0];
    const blog2 = blogs[1];

    const blogsinfo = [
      {
        user: user1Id,
        ...blog1,
      },
      {
        user: user2Id,
        ...blog2,
      },
    ];

    await Blog.insertMany(blogsinfo);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed".red.inverse);
    process.exit(1);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
