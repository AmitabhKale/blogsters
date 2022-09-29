import React from "react";
import { Alert, Button, Container, Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const NewBlogPage = () => {
  return (
    <div className="my-3">
      <Container>
        <Alert>You Can Use Markdown Input to detailed Writing Article</Alert>

        <Form>
          <Row>
            <Col lg={6}>
              <Form.Group
                className="p-1 mb-3 border"
                controlId="formBasicEmail"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group
                className="p-1 mb-3 border"
                controlId="formBasicEmail"
              >
                <Form.Label>Sub Heading</Form.Label>
                <Form.Control type="text" placeholder="Enter SubHeading" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group
                className="p-1 mb-3 border"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Short Description"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3 border">
                <Form.Control className="px-2" type="file" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="p-1 mb-3 bg-light"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={9}
                  placeholder="Enter More Info"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="success">Publish Blog</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default NewBlogPage;
