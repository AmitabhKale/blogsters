const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

dotenv.config();

// ConnectDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Main Testing Route
app.get("/", (req, res) => {
  res.send("API is Running...");
});

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);

// error Handling
app.use(errorHandler);

// Server Port and Mode
app.listen(5000, () => {
  console.log(`Server is Running on Port 5000`);
});
