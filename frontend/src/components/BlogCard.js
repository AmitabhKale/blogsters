import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Card className="m-1" border="success" style={{ height: "600px" }}>
      <Card.Body>
        <Link to={`/blog/${blog.slug}`}>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="text-muted">{blog.subtitle}</Card.Subtitle>
        </Link>
      </Card.Body>
      <Link to={`/blog/${blog.slug}`}>
        <Card.Img className="p-1" src={blog.imageUrl} height="300px"></Card.Img>
      </Link>
      <Card.Body>
        <Card.Text
          style={{
            height: "80px",
          }}
          className="overflow-auto"
        >
          {blog.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <p className="text-secondary">{blog.createdAt.toString()}</p>
        <p className="text-success">{blog.readTime}</p>
      </Card.Footer>
    </Card>
  );
};

export default BlogCard;
