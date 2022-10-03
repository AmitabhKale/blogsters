import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import BlogCard from "../components/BlogCard";
import { getAllBlogs, reset } from "../features/blogs/blogSlice";

const AllBlogsPage = () => {
  const { blogs, isLoading, isSuccess } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Row className="mt-2">
        {blogs.map((blog) => (
          <Col key={blog._id} lg={4}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllBlogsPage;
