import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// ...existing code...

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const email = process.env.REACT_APP_EMAIL;
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ayu Dev</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Ayu Dev</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/ayu-dev27" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://x.com/AyuPortfol66222" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a href={`mailto:${email}`} style={{ color: "white" }} title={email}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 6.99 8-6.99V20H4z" />
                </svg>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
