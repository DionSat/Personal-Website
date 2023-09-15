import React from "react";
import psu_logo from "../Images/PSU.jpg";
import { Container, Row, Col } from "react-bootstrap";

export default function Experience({ id }) {
  return (
    <Container
      fluid
      className='d-flex align-items-center justify-content-center'
      id={id}>
      <Row className='d-flex flex-row align-items-center justify-content-center'>
        <Col sm={12}>
          <h1 className='display-5 project_header d-flex justify-content-center'>
            Experience
          </h1>
        </Col>
        <Col xs={12} xxl={4} xl={6}>
          <div className='scroll-bginfo'>
            <h1 className='education_title pb-3 text-center'>Education</h1>
            <div className='mt-4'>
              <div className='d-flex'>
                <img
                  src={psu_logo}
                  className='psu-logo'
                  alt='Portland State University'
                  width='100'
                  height='100'></img>
                <h2 className='education_text d-flex align-items-center'>
                  Masters of Computer Science
                </h2>
              </div>
              <a
                href='https://www.pdx.edu/'
                target='_blank'
                rel='noreferrer'
                className='text-decoration-none d-flex justify-content-center mb-3'>
                Portland State University
              </a>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center'>
                  <i class='fa fa-calendar' aria-hidden='true'></i>
                  <p className=''>01/2022 - 08/2023</p>
                </div>
                <div className='d-flex justify-content-center'>
                  <i class='fa-solid fa-location-dot'></i>
                  <p className=''>Portland, Oregon, USA</p>
                </div>
              </div>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center'>
                  <p className=''>Graduated with a cumulative 3.9 GPA</p>
                </div>
              </div>
            </div>
            {/*Next Section*/}
            <div className='mt-5'>
              <div className='d-flex'>
                <img
                  src={psu_logo}
                  className='psu-logo'
                  alt='Portland State University'
                  width='100'
                  height='100'></img>
                <h2 className='education_text d-flex align-items-center'>
                  Bachelors of Computer Science
                </h2>
              </div>
              <a
                href='https://www.pdx.edu/'
                target='_blank'
                rel='noreferrer'
                className='text-decoration-none d-flex justify-content-center mb-3'>
                Portland State University
              </a>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center'>
                  <i class='fa fa-calendar' aria-hidden='true'></i>
                  <p className=''>09/2017 - 12/2020</p>
                </div>
                <div className='d-flex justify-content-center'>
                  <i class='fa-solid fa-location-dot'></i>
                  <p className=''>Portland, Oregon, USA</p>
                </div>
              </div>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center'>
                  <p className=''>Graduated with a cumulative 3.53 GPA</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} xxl={4} xl={6}>
          <div className='scroll-courseinfo col-sm-12 col-lg-12 col-xl-12'>
            <h1 className='education_title pb-3 d-flex justify-content-center'>
              Courses
            </h1>
            <div className='course_list d-flex flex-column align-items-center'>
              <p>CS441 Artificial Intelligence</p>
              <p>CS444 Machine Learning</p>
              <p>CS441 Artificial Intelligence</p>
              <p>CS454 Software Engineering</p>
              <p>CS311</p>
              <p>Stats 451</p>
              <p>CS410P Advanced Java</p>
              <p>CS586 Intro to Databases</p>
            </div>
          </div>
        </Col>
        <Col xs={12} xxl={4} xl={12}>
          <div className='skill_container col-sm-12 col-lg-12 col-xl-12'>
            <h1 className='education_title pb-3 d-flex justify-content-center'>
              Skills
            </h1>
            <div className='d-flex flex-column m-4'>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star'></span>
                <span className='fa fa-star'></span>
                C++/C
              </div>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                Java
              </div>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                Python
              </div>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star'></span>
                Javascript
              </div>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star'></span>
                HTML/CSS
              </div>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star'></span>
                Microsoft Word
              </div>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star'></span>
                Laravel/PHP
              </div>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star'></span>
                Project Management
              </div>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star'></span>
                React
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
