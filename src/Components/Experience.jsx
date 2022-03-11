import React from "react";
import my_image from "../Images/me.jpg";
import hello_prog from "../Images/Hello.png";
import pcc_logo from "../Images/PCC.png";
import psu_logo from "../Images/PSU.jpg";
import { Container } from "react-bootstrap";

export default function Experience({ id }) {
  return (
    <Container fluid className='w-100 h-100 d-flex align-items-center' id={id}>
      <div className='scroll-bginfo'>
        <h1 className='education_title pb-3 d-flex justify-content-center'>
          Education
        </h1>
        <div className='mt-5'>
          <div className='d-flex'>
            <img
              src={psu_logo}
              className='psu-logo'
              width='100'
              height='100'></img>
            <h2 className='education_text d-flex align-items-center'>
              Bachelors of Computer Science
            </h2>
          </div>
          <a
            href='https://www.pdx.edu/'
            target='_blank'
            className='text-decoration-none d-flex justify-content-center mb-3'>
            Portland State University
          </a>
          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-center'>
              <i class='fa fa-calendar' aria-hidden='true'></i>
              <p className=''>09/2017 - 12/2021</p>
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
        {/*Next Section*/}
        <div className='mt-4'>
          <div className='d-flex'>
            <img
              src={psu_logo}
              className='psu-logo'
              width='100'
              height='100'></img>
            <h2 className='education_text d-flex align-items-center'>
              Masters of Computer Science
            </h2>
          </div>
          <a
            href='https://www.pdx.edu/'
            target='_blank'
            className='text-decoration-none d-flex justify-content-center mb-3'>
            Portland State University
          </a>
          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-center'>
              <i class='fa fa-calendar' aria-hidden='true'></i>
              <p className=''>01/2022 - present</p>
            </div>
            <div className='d-flex justify-content-center'>
              <i class='fa-solid fa-location-dot'></i>
              <p className=''>Portland, Oregon, USA</p>
            </div>
          </div>
        </div>
        {/*Next Section*/}
        <div className='mt-5'>
          <div className='d-flex'>
            <img
              src={pcc_logo}
              className='pcc-logo'
              width='100'
              height='100'></img>
            <h2 className='education_text d-flex align-items-center'>
              Associates of Science for Computer Science
            </h2>
          </div>
          <a
            href='https://www.pcc.edu/'
            target='_blank'
            className='text-decoration-none d-flex justify-content-center mb-3'>
            Portland Community College
          </a>
          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-center'>
              <i class='fa fa-calendar' aria-hidden='true'></i>
              <p className=''>09/2017 - 12/2021</p>
            </div>
            <div className='d-flex justify-content-center'>
              <i class='fa-solid fa-location-dot'></i>
              <p className=''>Portland, Oregon, USA</p>
            </div>
          </div>
        </div>
      </div>
      <div className='scroll-courseinfo'>
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
      <div className='skill_container'>
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
            <span className='fa fa-star'></span>
            <span className='fa fa-star'></span>
            Java
          </div>
          <div>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star'></span>
            <span className='fa fa-star'></span>
            Python
          </div>
          <div>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star'></span>
            <span className='fa fa-star'></span>
            Javascript
          </div>
          <div>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star'></span>
            <span className='fa fa-star'></span>
            HTML/CSS
          </div>
          <div>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star'></span>
            <span className='fa fa-star'></span>
            Microsoft Word
          </div>
          <div>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star'></span>
            <span className='fa fa-star'></span>
            Laravel/PHP
          </div>
          <div>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star'></span>
            <span className='fa fa-star'></span>
            Project Management
          </div>
          <div>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star'></span>
            <span className='fa fa-star'></span>
            React
          </div>
        </div>
      </div>
    </Container>
  );
}
