import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

function Resume() {
  return (
    <Container className="home-content">
      <Row className="align-items-center">
        <Col md={5}>
          <embed
            src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            width={400}
            height={500}
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
          ></embed>
        </Col>
        <Col mt="100">
          <a href="/Resume.pdf" target="blank">
            <Button
              variant="outline-light"
              style={{ "margin-right": "50px", width: "100px" }}
            >
              view
            </Button>
          </a>
          <a href="/Resume.pdf" download={"Resume.pdf"}>
            <Button variant="outline-light" style={{ width: "100px" }}>
              Download
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
