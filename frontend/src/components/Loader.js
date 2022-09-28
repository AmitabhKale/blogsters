import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      style={{
        width: "60px",
        height: "60px",
        margin: "auto",
        display: "block",
      }}
      animation="border"
      variant="success"
      role="status"
    ></Spinner>
  );
};

export default Loader;
