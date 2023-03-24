import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from "react-tsparticles";
import Type from "./Type";
import Home2 from './Home2';

export default class Home extends Component {
  render() {
    return (
      <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <br/>
              <br/>
              <br/>
              <h1 style={{ paddingBottom: 50 }} className="heading slide-in-top">This is my <strong className="text-warning"> Portfolio </strong></h1>
              <h1 className="slide-in-right">KULPRIYA</h1>
              <div className='m-2 px-5'>
              <h1 className="slide-in-left"><strong className="text-warning"> SURIYANON </strong></h1>
              </div>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src='profileimage.png'
                alt=''
                className="img-fluid"
                style={{ maxHeight: "550px" }}/>
                
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
    )
  }
}
