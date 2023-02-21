import { Container } from "react-bootstrap";
import React from "react";
import emailjs from "emailjs-com";

export default function ContactMe({ id }) {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('website-gmail', 'form-template', e.target, '7sGMtnHoFUANK8-uz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <Container fluid className='h-100 d-flex align-items-center' id={id}>
      <div className='w-100 h-100 row d-flex align-items-center'>
        <form className='text-center border border-light p-5' onSubmit={sendEmail}>
          <p className='h4 mb-4'>Contact Me</p>

          <input
            type='text'
            id='name'
            className='form-control mb-4'
            placeholder='Name'
            name="name"
          />

          <input
            type='email'
            id='email'
            className='form-control mb-4'
            placeholder='E-mail'
            name="email"
          />

          <input
            type='text'
            id='subject'
            className='form-control mb-4'
            placeholder='Subject'
            name="subject"
          />

          <div class='form-group'>
            <textarea
              className='form-control rounded-0'
              id='message'
              rows='15'
              placeholder='Message'
              name="message"></textarea>
          </div>

          <button
            className='btn btn-info btn-block send_button mt-3'
            type='submit'>
            Send
          </button>
        </form>
      </div>
    </Container>
  );
}
