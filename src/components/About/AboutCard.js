import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishav Komal </span>
            from <span className="purple"> Majitar, Sikkim, India.</span>
            <br />I am a Pre-final year student pursuing B.Tech in Computer Science in 
            Sikkim Manipal Institute of Technology, Majitar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gymming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dare to dream, strive to achieve!"{" "}
          </p>
          <footer className="blockquote-footer">Rishav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
