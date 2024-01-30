import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fitsum Tadele </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am currently employed as a software engineer consultant at JSI.
            <br />
            <ul>
            <li className="about-activity">
              <ImPointRight />  Masters in Project Management (Addis Ababa University, since March 2022)
            </li>
            <li className="about-activity">
              <ImPointRight /> 
              Bachelor of Science in Information System (Hawassa University, 2021)
            </li>
            <li className="about-activity">
              <ImPointRight />  Bachelor of Arts in Management (Rift Valley University, 2021)
            </li>
          </ul>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> working out
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
