import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode } from "react-icons/si";
// Removed unused imports

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
    </Row>
  );
}

export default Toolstack;
