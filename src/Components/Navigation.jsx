import React, { Component } from "react";
import linkedin_logo from "../Images/linkedin.png";
import git_logo from "../Images/github.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar fixed='top' bg='light' expand='lg'>
        <Container className='nav_container'>
          <Navbar.Brand href='/' className='nav_brand font-monospace'>
            Dion Satcher
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className='p-1'
                to='welcome'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <button type='button' className='btn btn-light'>
                  Home
                </button>
              </Link>
              <Link
                activeClass='active'
                to='experience'
                className='p-1'
                spy={true}
                smooth={true}
                offset={300}
                duration={500}>
                <button type='button' className='btn btn-light'>
                  Background
                </button>
              </Link>
              <Link
                activeClass='active'
                to='projects'
                className='p-1'
                spy={true}
                smooth={true}
                offset={300}
                duration={500}>
                <button type='button' className='btn btn-light'>
                  Projects
                </button>
              </Link>
              <Link
                activeClass='active'
                to='contactme'
                className='p-1'
                spy={true}
                smooth={true}
                offset={100}
                duration={500}>
                <button type='button' className='btn btn-light'>
                  Contact Me
                </button>
              </Link>
              <a
                  className='btn linkedin-link d-flex align-items-center justify-content-center'
                  href='https://www.linkedin.com/in/dionsatcher/'
                  target='_blank'
                  rel='noreferrer'
                  role='button'>
                  <img
                    className='linkedin_image'
                    src={linkedin_logo}
                    alt='Linkedin'
                    width='40'
                    height='40'
                  />
                </a>
                <a
                  className='btn github-link d-flex align-items-center justify-content-center'
                  href='https://github.com/DionSat'
                  target='_blank'
                  rel='noreferrer'
                  role='button'>
                  <img
                    className='github_image'
                    src={git_logo}
                    alt='GitHub'
                    width='25'
                    height='25'
                  />
                </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
