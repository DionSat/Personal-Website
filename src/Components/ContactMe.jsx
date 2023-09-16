import { Container, Row, Col } from "react-bootstrap";
import phone_image from "../Images/phone.png";
import email_image from "../Images/email.png";
import React from "react";

export default function ContactMe({ id }) {

  return (
    <Container
      fluid
      className='d-flex flex-row align-items-center justify-content-center'
      id={id}>
      <Row>
        <h1 className='display-5 project_header d-flex justify-content-center'>
          Contact Me
        </h1>
        <Col xl={6} lg={12}>
          <div className='contact_container container d-flex justify-content-center'>
            <div className='my_contacts p-4'>
              <h2 className="d-flex justify-content-center">Phone</h2>
              <img
                      src={phone_image}
                      className='phone-image mx-auto d-block'
                      alt='phone logo'
                      width='50px'
                      height='50px'></img>
              <p className="d-flex justify-content-center">Cell Phone: 503-752-3450</p>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={12}>
          <div className='contact_container container d-flex justify-content-center'>
            <div className='my_contact p-4'>
              <h2 className="d-flex justify-content-center">Email</h2>
              <img
                      src={email_image}
                      className='email-image mx-auto d-block'
                      alt='email logo'
                      width='50px'
                      height='50px'></img>
              <p className="d-flex justify-content-center">dion.satcher@gmail.com</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
