import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/rahul.jpeg";
import Tilt from "react-parallax-tilt";
import Home2 from "../Home/Home2";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <Col md={12} className="home-about-description">
              <p className="home-about-body">
                I am a Full Stack Developer working in{" "}
                <a
                  href="https://tcs.com"
                  target="blank"
                  className="italic-purple"
                >
                  Tata Consultancy Services
                </a>{" "}
                with 2.5+ years of experience. have worked as a Intern in{" "}
                <a
                  href="https://www.nickelfox.com/"
                  target="blank"
                  className="italic-purple"
                >
                  Nickelfox Technologies
                </a>{" "}
                and{" "}
                <a
                  href="https://www.jindalsteelpower.com/"
                  target="blank"
                  className="italic-purple"
                >
                  Jindal Steel and Power Limited
                </a>
                . graduated from{" "}
                <a
                  href="https://www.iiitsurat.ac.in/"
                  target="blank"
                  className="italic-purple"
                >
                  Indian Institute of Information Technology, Surat
                </a>
                . majorly work on javascript based frameworks - vue.js,
                react.js, node.js.
                <br />
                <br />
                <i>I debug more than I code !</i>
                <br />
                <br />
              </p>
            </Col>
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            className="about-img circular-image"
          >
            <Tilt>
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid rounded-circle"
                width="70%"
              />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <Home2 />
      </Container>
    </Container>
  );
}

export default About;
