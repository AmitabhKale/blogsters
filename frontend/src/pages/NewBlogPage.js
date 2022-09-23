import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const NewBlogPage = () => {
  return (
    <div className="my-3">
      <FormContainer>
        <Alert>You Can Use Markdown Input to detailed Writing Article</Alert>

        <form>
          <Form.Group className="p-1 mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="p-1 mb-3 bg-light" controlId="formBasicEmail">
            <Form.Label>SubTitle</Form.Label>
            <Form.Control type="text" placeholder="Enter Subtitle" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group
            className="p-1 mb-3 "
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Description"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group
            className="p-1 mb-3 bg-light"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter More Info"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="success">Post Blog</Button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default NewBlogPage;
