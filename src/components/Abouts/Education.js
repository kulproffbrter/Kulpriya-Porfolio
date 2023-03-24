import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default class Education extends Component {
  render() {
    return (
        <Container>
          <Row>
            <Col md={8}>
              <br/>
              <br/>
              <br/>
              <br/>
              <h2 style={{ fontSize: "2.6em" }}>EDUCA<span className="text-warning">TION</span></h2>
              <br/>
              <br/>
              <p><h4 className="text-warning"> 2019-2022 : </h4> Phadungnaree School <br/> Mathematics-Language </p>
              <p><h4 className="text-warning"> 2022-present : </h4> North Bangkok  University  <br/> Bachelor Degree of Information Technology and Digital Innovation </p>
            </Col>
          </Row>
        </Container>
    )
  }
}
