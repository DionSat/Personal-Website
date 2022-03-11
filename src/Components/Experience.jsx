import React from "react";
import my_image from "../Images/me.jpg";
import hello_prog from "../Images/Hello.png";
import pcc_logo from "../Images/PCC.png";
import psu_logo from "../Images/PSU.jpg";
import { Container } from "react-bootstrap";

export default function Experience({ id }) {
  return (
    <div
      id={id}
      className='h-100 w-100 d-flex row justify-content-center align-items-center'>
      <Container
        fluid
        className='d-flex row justify-content-center align-items-center'>
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
              <h3 className='education_text d-flex align-items-center'>
                Bachelors of Computer Science
              </h3>
            </div>
            <h5>
              <a
                href='https://www.pdx.edu/'
                target='_blank'
                className='text-decoration-none'>
                Portland State University
              </a>
            </h5>
            <div className='d-flex'>
              <div className='d-flex justify-content-center'>
                <i class='fa fa-calendar' aria-hidden='true'></i>
                <p className=''>09/2017 - 12/2021</p>
              </div>
              <div className='d-flex justify-content-center'>
                <i class='fa-solid fa-location-dot'></i>
                <p className=''>Portland, Oregon, USA</p>
              </div>
            </div>
            <p>Graduated with a cumulative 3.53 GPA</p>
          </div>
          <br />
          <br />
          {/*Next Section*/}
          <div className='mt-5'>
            <div className='d-flex'>
              <img
                src={psu_logo}
                className='psu-logo'
                width='100'
                height='100'></img>
              <h3 className='education_text d-flex align-items-center'>
                Masters of Computer Science
              </h3>
            </div>
            <h5>
              <a
                href='https://www.pdx.edu/'
                target='_blank'
                className='text-decoration-none'>
                Portland State University
              </a>
            </h5>
            <div className='d-flex'>
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
          <br />
          <br />
          {/*Next Section*/}
          <div className='mt-5'>
            <div className='d-flex'>
              <img
                src={pcc_logo}
                className='psu-logo'
                width='100'
                height='100'></img>
              <h3 className='education_text d-flex align-items-center'>
                Associates of Science for Computer Science
              </h3>
            </div>
            <h5>
              <a
                href='https://www.pdx.edu/'
                target='_blank'
                className='text-decoration-none'>
                Portland State University
              </a>
            </h5>
            <div className='d-flex'>
              <div className='d-flex justify-content-center'>
                <i class='fa fa-calendar' aria-hidden='true'></i>
                <p className=''>09/2017 - 12/2021</p>
              </div>
              <div className='d-flex justify-content-center'>
                <i class='fa-solid fa-location-dot'></i>
                <p className=''>Portland, Oregon, USA</p>
              </div>
            </div>
            <p>Graduated with a cumulative 3.53 GPA</p>
          </div>
        </div>
        <div className='scroll-courseinfo'>
          <h2>Courses</h2>
          <img
            src={psu_logo}
            className='psu-logo d-flex'
            width='100'
            height='100'></img>
        </div>
        <div className='skill_container'>
          <div className='d-flex justify-content-around'>
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
          </div>
          <div className='d-flex justify-content-around'>
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
          </div>
          <div className='d-flex justify-content-around'>
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
          </div>
        </div>
      </Container>
    </div>
  );
}
