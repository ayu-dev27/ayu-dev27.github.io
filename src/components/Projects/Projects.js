import React from "react";
import { Container } from "react-bootstrap";
// ...existing code...

function Projects() {
  return (
    <Container
      fluid
      className="project-section"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <p style={{ color: "white", fontSize: 24 }}>No projects yet. (dummy)</p>
    </Container>
  );
}

export default Projects;
