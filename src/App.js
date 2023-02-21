import React from "react";
import Welcome from "./Components/Welcome.jsx";
import Navigation from "./Components/Navigation.jsx";
import Experience from "./Components/Experience.jsx";
import Projects from "./Components/Projects.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='h-100 render-page'>
        <Navigation />
        <Welcome id='welcome' />
        <Experience id='experience' />
        <Projects id='projects' />
        <ContactMe id='contactme' />
      </div>
    );
  }
}

export default App;
