import React, { Component } from 'react'
import { Container } from "react-bootstrap";

export default class extends Component {
  render() {
    return (
      <Container >
        <div className='container'>
          <div class="row">
            <div class="col-sm">
            </div>
            <div style={{ paddingRight: 50 }} class="col-sm">
            <br/>
            <br/>
            <br/>
            <br/>
              <p class="round">Programming 65%</p>
              <p class="round">Leadership 75%</p>
              <p class="round">Communication 30%</p>
              <p class="round">Languages 45%</p>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
