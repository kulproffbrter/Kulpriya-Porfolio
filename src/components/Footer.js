import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer style={{padding:8}} className='footer footer-copyright text-center'>
        @{new Date().getFullYear()} Create Website By Kulpriya Suriyanon (NBU)
      </footer>
    )
  }
}
