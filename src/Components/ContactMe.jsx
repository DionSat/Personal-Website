import pcc_logo from "../Images/PCC.png";
import psu_logo from "../Images/PSU.jpg";
import { Container } from "react-bootstrap";
import React, { useState } from "react";

export default function ContactMe({ id }) {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Container
      fluid
      className='h-100 row d-flex align-items-center justify-content-center'
      id={id}>
      <form className='text-center border border-light p-5' action='#!'>
        <p className='h4 mb-4'>Contact Me</p>

        <input
          type='text'
          id='defaultContactFormName'
          className='form-control mb-4'
          placeholder='Name'
        />

        <input
          type='email'
          id='defaultContactFormEmail'
          className='form-control mb-4'
          placeholder='E-mail'
        />

        <div class='form-group'>
          <textarea
            className='form-control rounded-0'
            id='exampleFormControlTextarea2'
            rows='3'
            placeholder='Message'></textarea>
        </div>

        <button
          className='btn btn-info btn-block send_button mt-3'
          type='submit'>
          Send
        </button>
      </form>
    </Container>
  );
}
