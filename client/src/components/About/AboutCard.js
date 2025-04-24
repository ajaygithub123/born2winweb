import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <p>
      Founded in 2008 by Mr. Vishwass Dwivedi, <strong>Born2Win Technologies</strong> is a dynamic and innovative IT solutions provider committed to turning technology into a strategic advantage for businesses worldwide.
    </p>

    <p>
      With a strong focus on product innovation, we marked our entry into the gaming industry in 2013 with the launch of <strong>ModiasPm</strong>, a mobile game designed to enhance user engagement through interactive entertainment. Continuing our innovation journey, we introduced <strong>Foodzzee</strong> in 2016—an original platform aimed at transforming the food and hospitality experience through smart technology.
    </p>

    <p>
      Guided by a vision to bridge innovation with real-world impact, Born2Win specializes in delivering high-performance solutions across <strong>software development</strong>, <strong>value-added services (VAS)</strong>, <strong>web and mobile application development</strong>, and <strong>IT consulting</strong>.
    </p>

    <p>
      Our multidisciplinary team of passionate developers, designers, and analysts works closely with clients to engineer intelligent, secure, and scalable digital solutions built for the future.
    </p>

    <p>
      Whether you are a startup preparing for your first product launch or a large enterprise seeking operational transformation, we bring deep technical expertise, strategic thinking, and a results-driven approach to every project.
    </p>

    <p>
      At the heart of Born2Win is a commitment to building long-term partnerships—founded on integrity, innovation, and performance—to help our clients grow, evolve, and lead in the digital age.
    </p>
          </p>
         
          <footer className="blockquote-footer">Vishwas Dwivedi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
