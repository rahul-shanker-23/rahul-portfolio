import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

function Resume() {
  return (
    <Container className="home-content">
      <div
        style={{
          zIndex: -1,
          backgroundImage: "url('/Resume.jpg')",
          height: "1650px",
          filter: "blur(0)",
        }}
      >
        <Row>
          <Col style={{ textAlign: "right", margin: "2px" }}>
            <a href="/Resume.pdf" target="blank" style={{ margin: "2px" }}>
              <Button variant="outline-dark">
                View <FaEye />
              </Button>
            </a>
            <a href="/Resume.pdf" download={"Resume.pdf"}>
              <Button variant="outline-dark">
                Download <IoMdDownload />
              </Button>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Resume;
