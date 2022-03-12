import React from "react";
import pcc_logo from "../Images/PCC.png";
import water_image from "../Images/water.png";
import deck_image from "../Images/blackjack.png";
import git_logo from "../Images/github.png";
import { Container } from "react-bootstrap";

export default function Projects({ id }) {
  return (
    <Container
      fluid
      className='w-100 h-100 row d-flex align-items-center justify-content-center'
      id={id}>
      <h1 className='display-5 project_header d-flex justify-content-center'>
        Projects
      </h1>
      <div className='project_container'>
        <div className='my_projects p-4'>
          <img
            src={water_image}
            className='water-image'
            width='100%'
            height='100%'></img>
          <h2 className='pt-4'>Water Reuse Application</h2>
          <p className='text-primary deck_desc pt-4'>
            Worked in a 7 person team design for my capstone project as the team
            lead. We used laravel, PHP, Javascript, Node.js, mySQL, HTML, CSS,
            Bootstrap, BalkanJS for our graphing API and Trello.
          </p>
          <p className='deck_info pt-4'>
            A water reuse database to show the regulations and permits required,
            and the pathways in which water can be reused and what channels it
            sources from and ends up.
          </p>
          <div className='w-100 d-flex align-items-center justify-content-center'>
            <a
              className='btn visit_button d-flex align-items-center justify-content-center'
              href='https://www.waterreuseapp.org/'
              target='_blank'
              role='button'>
              Visit Here
            </a>
            <a
              className='btn git_button d-flex align-items-center justify-content-center'
              href='https://github.com/DionSat/Water-Reuse-App'
              target='_blank'
              role='button'>
              <img
                className='button_image'
                src={git_logo}
                width='90'
                height='90'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='project_container'>
        <div className='my_projects p-4'>
          <img
            src={deck_image}
            className='deck-image'
            width='100%'
            height='100%'></img>
          <h2 className='pt-4 display-6'>Deck of Cards Blackjack</h2>
          <p className='text-primary deck_desc pt-4'>
            Worked in a team of 3 using React for the frontend, HTML, CSS,
            bootstrap and mostly Javascript for the rest of functionality
          </p>
          <p className='deck_info pt-4'>
            A deck of cards simulator that uses an open source API that
            simulates a deck to play games. Right now can play the game of
            blackjack.
          </p>
          <div className='w-100 d-flex align-items-center justify-content-center'>
            <a
              className='btn visit_button d-flex align-items-center justify-content-center'
              href='https://deck-of-card-blackjack.herokuapp.com/'
              target='_blank'
              role='button'>
              Visit Here
            </a>
            <a
              className='btn git_button d-flex align-items-center justify-content-center'
              href='https://github.com/DionSat/Deck-Of-Cards'
              target='_blank'
              role='button'>
              <img
                className='button_image'
                src={git_logo}
                width='90'
                height='90'
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
