import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { marked } from "marked";

const BlogItem = ({ blog }) => {
  return (
    <Card>
      <Row>
        <Col lg={8}>
          <Card.Body>
            <Card.Title className="text-info">{blog.title}</Card.Title>
            <hr />
            <Card.Subtitle>{blog.subTitle}</Card.Subtitle>
            <Card.Text>{blog.description}</Card.Text>

            <div
              className="bg-light p-3"
              dangerouslySetInnerHTML={{
                __html: marked(blog.sanitizedHTML),
              }}
            ></div>

            <hr />
            <Button variant="danger">5 Likes</Button>
            <Button variant="secondary mx-2">3 Comments</Button>
          </Card.Body>
        </Col>
        <Col lg={4}>
          {blog.imageUrl && (
            <Card.Img className="img-fluid p-2" src={blog.imageUrl}></Card.Img>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default BlogItem;
