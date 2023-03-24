import React, { Component } from 'react'
import Education from './Education'
import Experience from './Experience'
import { Container, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container fluid className="home-home2-section" id="home2">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h3 style={{ fontSize: "2.6em" }}> ABOUT <span className="text-warning"> ME </span></h3>
            <br/>
            <br/>
            <br/>
            <div className='container'>
              <div className='row'>
                 <div className='col'>
                    <p> <strong className="text-warning"> Residential Address : </strong> 6/899 Phaholyothin 52 , Phaholyothin  Rd , Sai Mai , Khlong Thanon , Bangkok 10220.</p>
          
                    <p><strong className="text-warning"> Date of Birth : </strong> 14 August 2003.</p>

                    <p><strong className="text-warning"> Nationality : </strong> Thai.</p>

                    <p><strong className="text-warning"> Age : </strong> 19.</p>

                    <p><strong className="text-warning"> Marital Status : </strong> Single.</p>

                    <p><strong className="text-warning"> Interest and Activities : </strong> Programming, Video editing, Languages,  Play soccer or football, Swimming.</p>
                 </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Education/>
      <Experience/>
    </Container>
    )
  }
}
