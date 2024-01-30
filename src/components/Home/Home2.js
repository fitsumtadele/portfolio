import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
          
            {/* <b className="purple">Skill Highlights:</b>
            <i>
                <b className="purple"> Software development methodologies (Agile, Waterfall) </b>
              </i><i>
                <b className="purple">System requirements and specifications </b>
              </i><i>
                <b className="purple">  UI/UX design and Agile/Scrum methodologies </b>
              </i><i>
                <b className="purple"> System testing and debugging </b>
              </i><i>
                <b className="purple">   IT support (virtual and in-person) </b>
              </i><i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i><i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i> */}
              
              
             
              
            
              <b className="purple">Skills:</b> C++, Javascript, Go, Web Technologies, Blockchain, Node.js, React.js, Next.js, UI/UX Design, Agile/Scrum, IT Support.<br/>

              <b className="purple">Experience:</b><br></br> <span></span>Software Engineer Consultant at Digital Health Activity USAID, Ethiopia (Jan 2021 - Present) :

              <ul>
                <li>Managed Moodle eLearning, provided technical support, and automated processes.
                </li>
                <li>Developed features for vehicle and contract management.
                </li>
              </ul>
              <b className="purple">Education:</b>
              <ul>
                <li>Masters in Project Management (Addis Ababa University, from Mar 2022) <b className="purple">currently enrolled</b>
                </li>
                <li>B.Sc. in Information System (Hawassa University, 2021)
                </li>
                <li>Bachelor of Arts in Management (Rift Valley University, 2021)
                </li>
              </ul>
              <b className="purple">Additional:</b>
              <ul>
                <li>Fluent in English & Amharic, Database Management (SQL, Postgres), Project Management Tools (JIRA, Trello).
                </li>
              </ul>

 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fitsumtadele"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fitsum-tadele-881627179/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fitsum_tadele"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
