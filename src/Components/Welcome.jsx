import React from "react";
import my_image from "../Images/me.jpg";

export default function Welcome({ id }) {
  return (
    <div
      id={id}
      className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='terminal space shadow w-50'>
        <div className='top'>
          <div className='btns'>
            <span className='circle red'></span>
            <span className='circle yellow'></span>
            <span className='circle green'></span>
          </div>
          <div className='title'>bash -- 70x32</div>
        </div>
        <pre className='body d-flex flex-column align-items-center justify-content-center'>
          <p id='my_name'>Dion Satcher</p>
          <img
            src={my_image}
            alt='Dion Satcher'
            className='d-flex my_image'
            id='my_image'
            width='250'
            height='250'
          />
          <div className='text_intro'>
            <p class='typing text-wrap'>
              {"> "}Hello, I'm a current graduate student at PSU. Pursuing
              interests in webdevelopment,databases and machine learning.
            </p>
          </div>
        </pre>
      </div>
    </div>
  );
}
