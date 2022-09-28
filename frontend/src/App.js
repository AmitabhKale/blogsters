import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import NewBlogPage from "./pages/NewBlogPage";
import EditBlogPage from "./pages/EditBlogPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog/:blogid" element={<BlogPage />} />
        <Route path="/new" element={<NewBlogPage />} />

        {/* EditBlog Page and NewBlogPage need Auth */}
        <Route path="/blog/blog-id/edit" element={<EditBlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
