import React from "react";
import pcc_logo from "../Images/PCC.png";
import psu_logo from "../Images/PSU.jpg";
import { Container } from "react-bootstrap";

export default function Projects({ id }) {
  return (
    <Container fluid className='w-100 h-100 d-flex align-items-center' id={id}>
      <div className='project_container'>
        <div className='my_projects'></div>
      </div>
    </Container>
  );
}
