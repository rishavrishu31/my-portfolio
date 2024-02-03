import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ict from "../../Assets/Projects/ict.png";
import marketplace from "../../Assets/Projects/marketplace.png";
import weather_app from "../../Assets/Projects/weather_app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketplace}
              isBlog={false}
              title="Blockchain Technology"
              description=" I have developed a decentralized application (DApp) that allows users to purchase courses available on a web page using blockchain technology. The application is integrated with Metamask, a popular cryptocurrency wallet and gateway to the Ethereum blockchain."
              ghLink="https://github.com/rishavrishu31/marketplace-eth-main"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather_app}
              isBlog={false}
              title="Weather App"
              description="A basic weather app created using JavaScript, HTML, and CSS is a user-friendly web application that provides real-time weather information for a specific location. Users can enter the name of a city in a search input field to retrieve current weather data, including temperature, humidity, wind speed, and weather conditions. The app dynamically updates the display based on the entered city, fetching data from a weather API and using JavaScript to manipulate the DOM."
              ghLink="https://github.com/rishavrishu31/weather-appjs"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ict}
              isBlog={false}
              title="Image captioning transformer"
              description="It is an image captioning model based on transformer architecture. Transformer architecture uses global attention. It allows parallelisation to improve attention."
              ghLink="https://github.com/rishavrishu31/Image-captioning-transformer-main"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
