import React, { useState } from "react";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogdata";

const BlogPage = () => {
  // const [allBlogs] = useState(blogs);
  let params = useParams();
  //   console.log(params);
  const blog = blogs.find((b) => b.id === params.blogid);
  console.log(blog);
  return (
    // <Container>
    <Row className="m-3">
      <Col md={8}>
        <h2>{blog.title}</h2>
        <br />
        <h5 className="text-muted">{blog.subtitle}</h5>
        <Image src={blog.imageUrl}></Image>
        <hr />
        <div className="d-flex justify-content-between">
          <div>
            <p className="text-info pt-3">{blog.createdDate}</p>
          </div>
          {/* Conditon for Auth User and Author to be same */}
          <div className="">
            <Button variant="outline-warning mx-3">Edit</Button>
            <Button variant="danger">Delete</Button>
          </div>
          {/* End of Condition */}
        </div>
        <hr />
        <p>{blog.description}</p>
        {blog.quotes && (
          <div className="bg-light p-3">
            {/* Blog Quotes 1st */}
            <p className="">Quotes</p>
          </div>
        )}
        <br />
        <p>{blog.moreinfo}</p>
      </Col>
      <Col md={4}>
        <Card className="p-3">
          <Card.Body>
            <h4>About Author</h4>
            <hr />
            <Card.Title>{blog.author}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    // </Container>
  );
};

export default BlogPage;
