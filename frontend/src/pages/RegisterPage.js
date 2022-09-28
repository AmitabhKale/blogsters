import { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [alert, setAlert] = useState("");
  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  //   UseEffects
  useEffect(() => {
    if (isError) {
      setAlert(message);
    }

    // Redirect
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        height: "90vh",
      }}
    >
      <FormContainer>
        <h2 className="text-danger mb-3">Register </h2>
        <p>Please Create an Account</p>

        {alert && <Alert variant="info">{alert}</Alert>}
        <form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={changeHandler}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={changeHandler}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={changeHandler}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password2"
              value={password2}
              onChange={changeHandler}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="success">
            Register
          </Button>
        </form>
        <p className="mt-2">
          Have an Account?
          <Link to="/login">Click Here to Login</Link>
        </p>
      </FormContainer>
    </div>
  );
};

export default RegisterPage;
