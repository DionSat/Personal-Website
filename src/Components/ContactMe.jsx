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
      className='w-100 h-100 d-flex align-items-center justify-content-center'
      id={id}>
      <div className='form_container'>
        <form onSubmit={handleSubmit} className='my_form'>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' required />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' required />
          </div>
          <div>
            <label htmlFor='message'>Message:</label>
            <textarea id='message' required />
          </div>
          <button type='submit'>{status}</button>
        </form>
      </div>
    </Container>
  );
}
