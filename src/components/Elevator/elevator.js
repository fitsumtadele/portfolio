import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Elevator() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Elevetor Pitch </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is my elevator  pitch that describes the purpose of this project and what I aim to achieve with it. This section also
         I am a full stack developer with experience of 3+ years . I have completed projects for eCommerce websites, social media platforms, web applications, mobile apps using
      </p>
  
      <iframe src="https://www.veed.io/embed/172e4d9a-1df2-4e16-9653-187e95372197" width="744" height="504" frameborder="0" title="WIN_20240217_19_30_35_Pro" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
     
      
        
      </Container>
    </Container>
  );
}

export default Elevator;
