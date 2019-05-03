import React from 'react';
import nodejsIcon from './images/nodejs.png';
import javascriptLogo from './images/javascriptIcon.png';
import htmlIcon from './images/html-icon.png';
import reactLogo from './images/react-icon.png';
import siteBanner from './images/skyline.mp4';
import siteVideo from './images/skyline.webm';
import './App.css';

function App() {
  return (
    <div>
      <PageHead />
      <MainContent />
      <MySkills />
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
    <section className="firstPara">
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
          <img src={javascriptLogo} alt="logo" width="100px" />
        </div>
        <div className="col-sm">
          <p>React</p>
          <img src={reactLogo} alt="a react logo" width="100px" />
        </div>
      </div>
    </div>
  )
}

function MyProjects() {
  return (
    <div>
      <h2>Projects</h2>
    </div>
  )
}

export default App;
