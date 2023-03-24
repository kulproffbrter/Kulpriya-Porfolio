import React, { Component } from 'react'
import Typewriter from "typewriter-effect";
import { Col } from "react-bootstrap";

export default class Type extends Component {
  render() {
    return (
        <Col>
        <br/>
        <br/>
        <Typewriter
        options={{
        strings: [
          "I want to be a Developer.",
          "Deep Learning Engineer!",
          "MERN Stack Developer!",
          "Lerning React App!",
          "I love technology.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}/>
      <img src='profile2.png' alt='' className="img-fluid" style={{ maxHeight: "550px" }}/>
        </Col>
    )
  }
}
