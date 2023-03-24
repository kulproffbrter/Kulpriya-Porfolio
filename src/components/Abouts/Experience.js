import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default class  extends Component {
  render() {
    return (
        <Container>
        <Row>
          <Col md={8}>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{ fontSize: "2.6em" }}>EXPE<span className="text-warning">RIENCE</span></h2>
            <br/>
            <br/>
            <h4 className="text-warning"> 2022 : Part-time</h4> 
            <ul>
                <li>Selling clothes , swimwear in front of the sea in Cha-am for 1-3 months.</li>
                <li>Cheering for selling products, pc position during Saturday-Sunday</li>
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
