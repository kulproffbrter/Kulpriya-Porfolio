import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import SkillBars from './SkillBars';

export default class extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <h2 style={{ fontSize: "2.6em" }}><span className="text-warning"> HARD </span> SKILL </h2>
            <br/>
            <ul>
                <li>Programming</li>
                <li>Leadership</li>
                <li>Hard Learning</li>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
          </Col>
          <div className='sf'>
            <SkillBars/>
          </div>
          <Col md={8}>
            <h2 style={{ fontSize: "2.6em" }}><span className="text-warning"> SOFT </span> SKILL </h2>
            <br/>
            <ul>
                <li>Communication</li>
                <li>Social Expression</li>
                <li>Languages </li>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
          </Col>
        </Row>
      </Container>
    )
  }
}
