import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayu Dev</span> from <span className="purple">Indonesia</span>.
            <br />
            Just a simple web enthusiast.
            <br />
            <br />
            Besides coding, I like:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Main game
            </li>
            <li className="about-activity">
              <ImPointRight /> Dengerin musik
            </li>
            <li className="about-activity">
              <ImPointRight /> Rebahan
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Belajar yang penting enjoy!"</p>
          <footer className="blockquote-footer">Ayu Dev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
