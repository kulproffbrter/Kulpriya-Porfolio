import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram
} from "react-icons/ai";

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={8} className="contact-social">
          <h2 style={{ fontSize: "2.6em" }}> CON <span className="text-warning"> TACT</span></h2>
          <br/>
            <ul className="contact-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kulproffbrter"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://web.facebook.com/mhei.zaza"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
 
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/admin_9493"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour contact-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}
}
