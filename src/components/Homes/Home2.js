import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default class Home2 extends Component {
  render() {
    return (
        <Container fluid className="home-home2-section" id="home2">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h3 style={{ fontSize: "2.6em" }}>
                LET ME <span className="text-warning"> INTRODUCE </span> MYSELF
              </h3>
              <br/>
              <br/>
              <br/>
              <p >Hello , My name's Kulpriya. I study Faculty of Information Technology and Digital Innovation. 
              Information Technology and Digital Innovation I'm in 1st year but it feels like I'm in 4th year. 
              My branch is very hard to study because it's a new curriculum that accelerates my work , 
              work experience will be more That's why my field study hard.</p>
              <br/>
              <br/>
              <p >I have been through many different subjects as follows!!</p>
              <ul>
                <li>Foundation of Computer Science.</li>
                <li>Computer Programming.</li>
                <li>Data Structure and Algorithms.</li>
                <li>Database System Design.</li>
                <li>Data Communication and Computer Networks.</li>
                <li>Cyber Security Management.</li>
                <li>Object-Oriented Analysis and Design.</li>
                <li>Principle of Software Engineering.</li>
                <li>Software Requirement and Construction Engineering.</li>
                <li>Software Validation and Verification.</li>
              <br/>
              <br/>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

