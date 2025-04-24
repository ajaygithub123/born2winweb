import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ backgroundColor: "#e4ade4"  }}
       // Updated background color
      >
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              
              <section class="services">
  <div class="container" style={{ backgroundColor: "#960e96", padding: "20px", borderRadius: "10px" }}>
    <h2 class="section-title">We Deal With</h2>
    <div class="service-box">
      <i class="fas fa-cloud"></i>
      <h5>Value-Added Services (VAS)</h5>
      <p>Expertise in delivering innovative value-added services that enhance core mobile and telecom offerings.</p>
    </div>

    <div class="service-box">
      <i class="fas fa-gamepad"></i>
      <h5>Mobile Game Development</h5>
      <p>Design and development of engaging, high-performance mobile games for Android and iOS platforms.</p>
    </div>

    <div class="service-box">
      <i class="fas fa-mobile-alt"></i>
      <h5>Mobile App Development</h5>
      <p>Custom native and cross-platform mobile applications designed for scalability, performance, and user experience.</p>
    </div>

    <div class="services-grid">
      <div class="service-box">
        <i class="fas fa-code"></i>
        <h5>Web Development</h5>
        <p>Development of modern, secure, and responsive web solutions tailored to meet business objectives.</p>
      </div>

      <div class="service-box">
        <i class="fas fa-cogs"></i>
        <h5>IT Consulting & Innovation</h5>
        <p>Strategic technology consulting to align your digital roadmap with business goals, alongside innovation in product development and digital transformation.</p>
      </div>
    </div>
  </div>
</section>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
