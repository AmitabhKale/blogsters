import React from "react";
import {
  Container,
  Navbar,
  Form,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
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
              <Button>Create</Button>

              <NavDropdown
                variant="dark"
                title="John"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">My Blogs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
