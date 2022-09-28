import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const LoginPage = () => {
  return (
    <FormContainer>
      <h3 className="text-info">Login Page</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="my-3">
        Didnt have Credentials?.. <br />
        <Link to="/register">Click Here to Register</Link>
      </p>
    </FormContainer>
  );
};

export default LoginPage;
