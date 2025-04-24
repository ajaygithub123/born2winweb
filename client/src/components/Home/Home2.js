import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ backgroundColor: "#e4ade4" }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#960e96" }}>
              WHO WE ARE
            </h1>
            <p className="home-about-body" style={{ color: "#960e96" }}>
            <p>
      Founded in 2008 by Mr. Vishwass Dwivedi, <strong>Born2Win</strong> is a premier IT consulting and software development company headquartered in Indore, India. With over 16 years of proven success, we have established ourselves as a trusted technology partner for businesses across industries.
    </p>
    <p>
      At Born2Win, we specialize in delivering innovative and purpose-driven digital solutions that empower organizations to achieve their strategic objectives and stay ahead in a rapidly evolving technological landscape. Our core focus areas include software development, IT consulting, and mobile application development.
    </p>
    <p>
      Driven by a team of skilled and passionate developers, designers, and technology experts, we combine creativity with technical excellence to craft solutions that are not only scalable and secure but also aligned with our clients’ visions. Our approach integrates state-of-the-art tools, strategic insight, and a strong client-centric philosophy to deliver custom-built IT solutions with measurable impact.
    </p>
    <p>
      Whether you're a startup aiming to scale or an established enterprise seeking digital transformation, Born2Win is your partner in turning bold ideas into intelligent, future-ready technology.
    </p>


  <div class="section">
    <h2>Our Strategic Partnerships</h2>
    <p>
      At Born2Win, we take pride in our strong network of strategic technical partners who have played a pivotal role in our journey of innovation and growth. Over the years, we have had the privilege of collaborating with a diverse portfolio of esteemed organizations, including:
    </p>
    <p>
      <strong>Shemaroo</strong>, <strong>Hungama Digital</strong>, <strong>Eros International</strong>, <strong>Disney</strong>, <strong>Spice Mobile</strong>, <strong>Wasp Africa</strong>, <strong>Mobil Art</strong>, <strong>Playboy</strong>, <strong>Tech Shaastra</strong>, <strong>Digivive</strong>, <strong>Web Duniya</strong>, <strong>Astute System Technologies</strong>, and many others.
    </p>
    <p>
      These partnerships reflect our commitment to delivering high-quality, future-ready solutions and underscore our reputation as a trusted technology partner across the global digital ecosystem.
    </p>
  </div> </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to connect with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
