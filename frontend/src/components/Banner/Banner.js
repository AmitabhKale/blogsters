import React from "react";
import { Button, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div
      className="bg-warning"
      style={{
        minHeight: "60vh",
        display: "flex",
        padding: "60px",
      }}
    >
      <Container className="m-4">
        <h1 className="mb-3">Stay Curious</h1>

        <h4 className="mb-4">
          Discover stories, thinking, and expertise from writers on any topic.
        </h4>

        <Button variant="dark">Start Reading</Button>
      </Container>
    </div>
  );
};

export default Banner;
