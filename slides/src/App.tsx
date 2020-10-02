import React from 'react';
import Slide from './components/Slide';
import Intro from './slides/Intro';
import DocumentEvolution from './slides/Document';
import './webslides.css';
import './svg-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faArrowsAlt, faBoxes, faMitten, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const evolution = require('./assets/evolution.png');
const charles = require('./assets/charlesdarwin.png');
const movement = require('./assets/movement.jpg');
const teamsplit = require('./assets/teamsplit.png');
const verticalheadline = require('./assets/verticals-headline.png');
const redditnoborder = require('./assets/splitredditnoborders.svg');
const reddit = require('./assets/splitreddit.svg');

declare global {
  interface Window { ws: { el: HTMLElement }; }
}

function App() {

  return (
    <article id="webslides">
      <span className="author">Joey Comhaire</span>
      <Intro />
      <Slide animationId="charles-darwin" stepCount={1}>
        <img src={charles} alt="Charles Darwin" className="charles-darwin animate-show" data-step="1"/>
        <div className="wrap size-50 aligncenter">
          <img src={evolution} alt="evolution" />
        </div>
      </Slide>
      <DocumentEvolution />
      <Slide className="fullscreen">
        <div className="aligncenter">
          <h1>Team Segragation</h1>
          <img src={teamsplit} alt="teamsplit" style={{
            height: "50vh",
            border: "1px solid black"
          }}/>
        </div>
      </Slide>
      <Slide className="fullscreen shift-business-slide" background={movement}>
        <div className="aligncenter">
          <h1>Shift of Business logic</h1>
        </div>
      </Slide>
      <Slide stepCount={2} animationId="question">
        <div className="wrap size-50 aligncenter">
          <h1 style={{marginBottom: '50px'}} className="animate-show" data-step="1">How</h1>
          <FontAwesomeIcon icon={faQuestion} style={{fontSize: "10em"}}/>
          <h1 style={{marginTop: '50px'}} className="animate-show" data-step="2">What</h1>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <blockquote style={{maxWidth: "60vw"}}>
            <p style={{fontSize: '2em'}}>
             "<strong>Architectural Principal</strong> to build a modern web app with multiple teams that can ship features <strong>independently</strong>"
            </p>
            <p>
              <cite>
                <img src={require('./assets/michaelgeers.jpg')} alt="michael geers" className="avatar-40"/>
                Michael Geers
              </cite>
            </p>
          </blockquote>
        </div>
      </Slide>
      <Slide className="fullscreen">
        <div className="aligncenter">
          <img src={teamsplit} alt="teamsplit" style={{
            height: "50vh",
            border: "1px solid black"
          }}/>
        </div>
      </Slide>
      <Slide className="fullscreen">
        <div className="aligncenter">
          <img src={verticalheadline} alt="vertical" style={{
            height: "70vh",
            border: "1px solid black"
          }}/>
        </div>
      </Slide>
      <Slide className="features-slide" stepCount={4} animationId="features">
        <div className="wrap">
          <ul className="flexblock features">
            <li data-step="1">
              <div>
                <h2>
                  <FontAwesomeIcon icon={faArrowsAlt} style={{fontSize: "5em"}} />
                  Technolgy Agnostic
                </h2>
                Upgrade without having to coordinate
              </div>
            </li>
            <li data-step="2">
              <div>
                <h2>
                  <FontAwesomeIcon icon={faBoxes} style={{fontSize: "5em"}} />
                  Isolate Team code
                </h2>
                Don't share a runtime
              </div>
            </li>
            <li data-step="3">
              <div>
                <h2>
                  <FontAwesomeIcon icon={faLaptopCode} style={{fontSize: "5em"}} />
                  Choose Native
                </h2>
                Favor native Browser features over Custom API's
              </div>
            </li>
            <li data-step="4">
              <div>
                <h2>
                  <FontAwesomeIcon icon={faMitten} style={{fontSize: "5em"}} />
                  Resilience
                </h2>
                Build a Resilient Site
              </div>
            </li>
          </ul>
        </div>
      </Slide>
      <Slide className="wireframes-slide" animationId="wireframes" stepCount={1}>
        <div className="wrap aligncenter">
          <h1 data-step="1"><strong>Wireframes</strong></h1>
        </div>
      </Slide>
      <Slide className="fullscreen">
        <img src={redditnoborder} alt="reddit" style={{height: '95vh'}}/>
      </Slide>
      <Slide className="fullscreen">
        <img src={reddit} alt="reddit" style={{height: '95vh'}}/>
      </Slide>
    </article>
  );
}

export default App;
