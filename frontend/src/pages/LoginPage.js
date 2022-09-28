import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { login, reset } from "../features/auth/authSlice";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setAlert(message);
    }

    // Redirect
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, dispatch]);

  const changeHandler = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <FormContainer>
        <h3 className="text-info mx-auto">Login Page</h3>

        {alert && <Alert>{alert}</Alert>}
        <form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={changeHandler}
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={changeHandler}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </form>
        <p className="my-3">
          Didnt have Credentials?.. <br />
          <Link to="/register">Click Here to Register</Link>
        </p>
      </FormContainer>
    </>
  );
};

export default LoginPage;
