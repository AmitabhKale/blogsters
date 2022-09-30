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
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />

        <Route path="/blog/create" element={<PrivateRoute />}>
          <Route path="/blog/create" element={<NewBlogPage />} />
          {/* <Route path="/blog/blog-id/edit" element={<EditBlogPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
