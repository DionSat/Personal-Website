import React from "react";
import water_image from "../Images/water.png";
import deck_image from "../Images/blackjack.png";
import git_logo from "../Images/github.png";
import trivia_image from "../Images/trivia.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects({ id }) {
  return (
    <Container
      fluid
      className='d-flex flex-row align-items-center justify-content-center'
      id={id}>
      <Row>
        <h1 className='display-5 project_header d-flex justify-content-center'>
          Projects
        </h1>
        <Col xl={6} lg={12}>
          <div className='project_container container'>
            <div className='my_projects p-4'>
              <img
                src={water_image}
                className='water-image'
                alt='water reuse application'
                width='100%'
                height='100%'></img>
              <h2 className='pt-4'>Water Reuse Application</h2>
              <p className='text-primary deck_desc pt-4'>
                Worked in a 7 person team design for my capstone project as the
                team lead. We used laravel, PHP, Javascript, Node.js, mySQL,
                HTML, CSS, Bootstrap, BalkanJS for our graphing API and Trello.
              </p>
              <p className='deck_info pt-4'>
                A water reuse database to show the regulations and permits
                required, and the pathways in which water can be reused and what
                channels it sources from and ends up.
              </p>
              <div className='w-100 d-flex align-items-center justify-content-center'>
                {/* <a
                  className='btn visit_button d-flex align-items-center justify-content-center'
                  href='https://www.waterreuseapp.org/'
                  target='_blank'
                  role='button'>
                  Visit Here
                </a> */}
                <a
                  className='btn git_button d-flex align-items-center justify-content-center'
                  href='https://github.com/DionSat/Water-Reuse-App'
                  target='_blank'
                  rel='noreferrer'
                  role='button'>
                  <img
                    className='button_image'
                    src={git_logo}
                    alt='GitHub'
                    width='90'
                    height='90'
                  />
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={12}>
          <div className='project_container container'>
            <div className='my_projects p-4'>
              <img
                src={deck_image}
                className='deck-image'
                alt='deck of cards'
                width='100%'
                height='100%'></img>
              <h2 className='pt-4 display-6'>Deck of Cards Blackjack</h2>
              <p className='text-primary deck_desc pt-4'>
                Worked in a team of 3 using React for the frontend, HTML, CSS,
                bootstrap and mostly Javascript for the rest of functionality
              </p>
              <p className='deck_info pt-4'>
                A deck of cards simulator that uses an open source API that
                simulates a deck to play games. We use that deck to simulate 
                game rules using javascript. Right now can play the game of
                blackjack.
              </p>
              <div className='w-100 d-flex align-items-center justify-content-center'>
                <a
                  className='btn visit_button d-flex align-items-center justify-content-center'
                  href='https://deck-of-card-blackjack.herokuapp.com/'
                  target='_blank'
                  rel='noreferrer'
                  role='button'>
                  Visit Here
                </a>
                <a
                  className='btn git_button d-flex align-items-center justify-content-center'
                  href='https://github.com/DionSat/Deck-Of-Cards'
                  target='_blank'
                  rel='noreferrer'
                  role='button'>
                  <img
                    className='button_image'
                    src={git_logo}
                    alt='GitHub'
                    width='90'
                    height='90'
                  />
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={12}>
          <div className='project_container container'>
            <div className='my_projects p-4'>
              <img
                src={trivia_image}
                className='trivia-image'
                alt='trivia game application'
                width='100%'
                height='100%'></img>
              <h2 className='pt-4'>Trivia Game Application</h2>
              <p className='text-primary deck_desc pt-4'>
                Worked in a 3 man team to design a trivia multiplayer client 
                and server for my full stack class. We used React for the
                front end, node.js and socket.io for the backend and multiplayer,
                docker and python for an API microserivice, and Postgres for
                data storage like gamestate, users and leaderboard.
              </p>
              <p className='deck_info pt-4'>
                A trivia multiplayer application that allows multiple users to
                join, leave and play in the same room. This also features user login,
                and a leaderboard for users. 
              </p>
              <div className='w-100 d-flex align-items-center justify-content-center'>
                <a
                  className='btn git_button d-flex align-items-center justify-content-center'
                  href='https://github.com/DionSat/trivia_application'
                  target='_blank'
                  rel='noreferrer'
                  role='button'>
                  <img
                    className='button_image'
                    src={git_logo}
                    alt='GitHub'
                    width='90'
                    height='90'
                  />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
