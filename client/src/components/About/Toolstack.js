import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#960e96" }}>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#960e96" }}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#960e96" }}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#960e96" }}>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#960e96" }}>
        <SiWindows/>
      </Col>
    </Row>
  );
}

export default Toolstack;
