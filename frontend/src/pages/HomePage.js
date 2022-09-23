import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner/Banner";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogdata";

const HomePage = () => {
  const [allBlogs, setAllBlogs] = useState(blogs);
  return (
    <div>
      <Banner />

      {/* Trending Component */}

      {/* Blogs  */}

      <Container className="my-3">
        <h4 className="px-2">Featured Blogs</h4>
        <Row className="p-1">
          {allBlogs.map((blog) => (
            <Col sm={12} md={6} lg={4}>
              <BlogCard key={blog.id} blog={blog} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
