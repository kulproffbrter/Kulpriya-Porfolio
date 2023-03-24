import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Navbar , Nav, NavDropdown} from 'react-bootstrap'

export default class Menubar extends Component {
  render() {
    return (
      <Navbar className='bg-light shadow-sm mb-3'sticky='top' expand='lg'>
        <Container fluid>
            <Navbar.Brand href='/'>
                <img alt='' src='./Gold-Luxury-Initial-Circle-Logo.png' className='App-logo img-fluid' /> {' '} My Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>

              <Nav className='ms-auto '>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link '>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className='nav-link'>About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/skill' className='nav-link'>Skill</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                    </li>
                </ul>
                <NavDropdown title="Manage Visitor" id="basic-nav-dropdown">
                  <NavDropdown.Item href='/create-visitor'>
                    Creat New Visitor
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <NavLink to='/visitor-list' className='nav-link'>
                    Visitor List
                  </NavLink>
                </NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}