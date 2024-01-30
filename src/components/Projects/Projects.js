import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              // imgPath={chatify}
              isBlog={false}
              title="Milestone 9 Slides"
              description="Google Doc for Alx milestone 9"
              // ghLink="https://docs.google.com/presentation/d/1lxuvRSM9WcmNrPUjdjjl2HlLQi_qEJJXTbpb-Ypa8a4/edit?usp=sharing"
              demoLink="https://docs.google.com/presentation/d/1lxuvRSM9WcmNrPUjdjjl2HlLQi_qEJJXTbpb-Ypa8a4/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Milestone 9 Slides"
              description="Youtube video for the ALX milestone 9"
              // ghLink="https://youtube.com/shorts/Qk4LrluneHs?feature=share"
              demoLink="https://youtube.com/shorts/Qk4LrluneHs?feature=share"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/fitsumtadele"
              demoLink="https://github.com/fitsumtadele"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/fitsumtadele"
              demoLink="https://github.com/fitsumtadele"
            />
          </Col> */}

    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
