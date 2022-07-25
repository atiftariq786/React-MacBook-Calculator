import React from "react";
import Col from "react-bootstrap/Col";
import "./style.css";

const outputDisplay = (props) => {
  return (
    <Col>
      <p className="output">{props.outputShow}</p>
    </Col>
  );
};
export default outputDisplay;
