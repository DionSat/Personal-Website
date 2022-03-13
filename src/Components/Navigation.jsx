import React, { Component } from "react";
import logo from "../Images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar fixed='top' bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link
                activeClass='active'
                to='welcome'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Home
              </Link>
              <Link
                activeClass='active'
                to='experience'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Background
              </Link>
              <Link
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Projects
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
