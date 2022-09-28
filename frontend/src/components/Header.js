import React from "react";
import {
  Container,
  Navbar,
  Form,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand> BlogSters</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Button className="mx-3">Create</Button>

              {user ? (
                <NavDropdown
                  variant="dark"
                  title={user.name}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">My Blogs</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button
                  variant="dark"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
