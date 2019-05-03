import React from 'react';
import nodejsIcon from './images/nodejs.png';
import javascriptLogo from './images/javascriptIcon.png';
import skillBoot from './images/bootIcon.png';
import htmlIcon from './images/html-icon.png';
import reactLogo from './images/react-icon.png';
import skillJquery from './images/jqueryLogo.jpg';
import projectOne from './images/eventMaps.png';
import siteBanner from './images/skyline.mp4';
import siteVideo from './images/skyline.webm';
import './App.css';

function App() {
  return (
    <div>
      <PageHead />
      <MainContent />
      <MySkills />
      <MyProjects />
    </div>
  )
}


function PageHead() {
  return (
    <section className="testVid" data-video="skyline">
      <video loop autoPlay>
        <source src={siteBanner} type="video/mp4" />
        <source src={siteVideo} type="video/webm" />
      </video>
    <div className="hero-text">
      <h1>Mariano Cruz</h1>
      <p>Full Stack Developer</p>
      <div>
        <a class="btn btn-primary">About Me</a>
      </div>
    </div>
    </section>
  )
}

function MainContent() {
  return (
    <section className="firstPara container">
    <div className="featurette">
    <img className="featurette-image pull-left" src="" alt="" width="300px" />
    <h2 className="featurette-heading">Mariano Cruz</h2>
    <p className="lead">I am a highly creative visonary with a strong background in front-end/back-end development.
        I would like to prove I would be a very
        strong asset to your company.
    </p>
    </div>
    <hr className="featurette-divider" />
    </section>
  )
}

function MySkills() {
  return (
    <div className="container text-center">
      <h2>Skills</h2>
      <div className="row">
        <div className="col-sm">
          <p>JavaScript</p>
          <img src={javascriptLogo} alt="a javascript icon" width="100px" />
        </div>
        <div className="col-sm">
          <p>React</p>
          <img src={reactLogo} alt="a react logo" width="100px" />
        </div>
        <div className="col-sm">
          <p>Node.JS</p>
          <img src={nodejsIcon} alt="a Node.JS logo" width="100px" />
        </div>
        <div className="col-sm">
          <p>JQuery</p>
          <img src={skillJquery} alt="a JQuery icon" width="100px" />
        </div>
        <div className="col-sm">
          <p>HTML5</p>
          <img src={htmlIcon} alt="a HTML logo" width="100px" />
        </div>
        <div className="col-sm">
          <p>Bootstrap</p>
          <img src={skillBoot} alt="a bootstrap logo" width="100px" />
        </div>
      </div>
      <hr className="featurette-divider" />
    </div>
  )
}

function MyProjects() {
  return (
    <section className="thirdPara">
    <div className="featurette">
      <h2 className="featurette-heading text-center">Projects</h2>
    </div>
    <div>
      <div className="row">
        <div className="col-sm">
          <img className="projectGif" src={projectOne} alt="a screenshot of my first project" />
        </div>
        <div className="col-sm">
          <h4>Event Maps</h4>
          <p>This application allows you to search for events in what ever city you decide to search in.</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default App;
