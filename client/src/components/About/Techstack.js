import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiApple,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px",
      backgroundColor: "#960e96",
      }}>
      <Col xs={4} md={2} className="tech-icons" style={{ color: "#fff" }}>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <DiJavascript1 />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <DiReact />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <SiFirebase />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <DiAndroid/>
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ color: "#fff" }}>
        <DiApple/>
      </Col>
    </Row>
  );
}

export default Techstack;
