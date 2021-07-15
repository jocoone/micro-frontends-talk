import React, { useEffect } from 'react';
import Slide from './components/Slide';
import Intro from './slides/Intro';
import DocumentEvolution from './slides/Document';
import './webslides.css';
import './svg-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestion,
  faArrowsAlt,
  faBoxes,
  faMitten,
  faLaptopCode,
  faSatelliteDish,
  faArrowsAltV,
  faArrowDown,
  faArrowUp,
  faFileAlt,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

const me = require('./assets/me_crazy.jpg');
const titleBlack = require('./assets/title_black.svg');
const evolution = require('./assets/evolution.png');
const charles = require('./assets/charlesdarwin.png');
const teamsplit = require('./assets/teamsplit.png');
const teamsplit2 = require('./assets/teamsplit2.png');
const verticalheadline = require('./assets/verticals-headline.png');
const redditnoborder = require('./assets/splitredditnoborders.svg');
const reddit = require('./assets/splitreddit.svg');
const react = require('./assets/react.png');
const angular = require('./assets/angular.png');
const vue = require('./assets/vue.png');
const ecmascript = require('./assets/ecmascript.png');
const inception = require('./assets/inception.gif');
const shadowdom = require('./assets/shadow-dom.png');
const shadowdom2 = require('./assets/shadowdom2.png');
const speed = require('./assets/speed.jpeg');
const bednet = require('./assets/bednet.png');
const entryslide = require('./assets/entryslide.png');

declare global {
  interface Window {
    ws: { el: HTMLElement };
  }
  namespace JSX {
    interface IntrinsicElements {
      'custom-advertisement': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'bednet-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'bednet-advertisement': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'bednet-chat': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'bednet-virtual-classroom': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.ws.el.addEventListener('ws:slide-go-next-step', ((
        e: CustomEvent
      ) => {
        const slideAnimationId =
          e.detail.targetSection.attributes['animation-id'].nodeValue;
        if (slideAnimationId === 'deploymentsslide') {
          if (e.detail.currentStep === 2) {
            e.detail.targetSection
              .querySelector('.native')
              .classList.add('animated');
            e.detail.targetSection
              .querySelector('.react')
              .classList.add('animated');
            e.detail.targetSection
              .querySelector('.vue')
              .classList.add('animated');
            e.detail.targetSection
              .querySelector('.angular')
              .classList.add('animated');
          } else if (e.detail.currentStep === 3) {
            e.detail.targetSection
              .querySelector('.native')
              .classList.add('deployed');
            e.detail.targetSection
              .querySelector('.react')
              .classList.add('deployed');
            e.detail.targetSection
              .querySelector('.vue')
              .classList.add('deployed');
            e.detail.targetSection
              .querySelector('.angular')
              .classList.add('deployed');
          } else if (e.detail.currentStep === 5) {
            e.detail.targetSection
              .querySelector('.main')
              .classList.add('animated');
            e.detail.targetSection
              .querySelector('.sidebar')
              .classList.add('animated');
            e.detail.targetSection
              .querySelector('.advertisement')
              .classList.add('animated');
            e.detail.targetSection
              .querySelector('.header')
              .classList.add('animated');
          }
        }
      }) as EventListener);
    }, 501);
  }, []);

  return (
    <article id="webslides">
      <span className="author animate-show">Joey Comhaire</span>
      <Slide
        background={entryslide}
        className="fullscreen%M=lkjg fdsqqs dgop^"
      />
      <Intro />
      <Slide background={speed} />
      <Slide className="me-slide">
        <div className="wrap" style={{ display: 'flex' }}>
          <img src={me} alt="me" className="alignleft size-40" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2 style={{ fontSize: '4em' }}>
              <strong>Joey Comhaire</strong>
            </h2>
            <h4>
              <code>Competence Coach - Fullstack developer</code>
            </h4>
            <div style={{ transform: 'translateY(25px)' }}>
              <p style={{ fontSize: '2em' }}>
                ~7 years @ <a href="https://axxes.com">Axxes</a>
              </p>
              <p style={{ fontSize: '2em', marginTop: '25px' }}>
                Frontend Enthousiast - <b>Architecture</b>
              </p>
            </div>
          </div>
        </div>
      </Slide>
      <Slide animationId="charles-darwin" stepCount={1}>
        <img
          src={charles}
          alt="Charles Darwin"
          className="charles-darwin animate-show"
          data-step="1"
        />
        <div className="wrap size-50 aligncenter">
          <img src={evolution} alt="evolution" />
        </div>
      </Slide>
      <DocumentEvolution />
      <Slide className="shift-business-slide bg-white">
        <div className="aligncenter">
          <h1 style={{ fontSize: '6em' }}>Shift of Business logic</h1>
        </div>
      </Slide>
      <Slide className="fullscreen">
        <div className="aligncenter">
          <h1>Team Segragation</h1>
          <img
            src={teamsplit}
            alt="teamsplit"
            style={{
              height: '50vh',
              border: '1px solid black',
            }}
          />
        </div>
      </Slide>
      <Slide>
        <div className="wrap">
          <img src={titleBlack} alt="title" />
        </div>
      </Slide>
      <Slide
        className="wireframes-slide"
        animationId="wireframes"
        stepCount={1}
      >
        <div className="wrap aligncenter">
          <h1 data-step="1">
            <strong>Microfrontend Experts</strong>
          </h1>
        </div>
      </Slide>
      <Slide stepCount={3} animationId="question">
        <div className="wrap size-50 aligncenter">
          <h1
            style={{ marginBottom: '50px' }}
            className="animate-show"
            data-step="1"
          >
            What
          </h1>
          <h1
            style={{ marginTop: '50px' }}
            className="animate-show"
            data-step="2"
          >
            Why
          </h1>
          <h1
            style={{ marginTop: '50px' }}
            className="animate-show"
            data-step="3"
          >
            How
          </h1>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <blockquote style={{ maxWidth: '60vw' }}>
            <p style={{ fontSize: '3em', lineHeight: '1.5em' }}>
              "<strong>Architectural Principal</strong> to build a modern web
              app with multiple teams that can ship features{' '}
              <strong>independently</strong>"
            </p>
            <p>
              <cite>
                <img
                  src={require('./assets/michaelgeers.jpg')}
                  alt="michael geers"
                  className="avatar-40"
                />
                Michael Geers
              </cite>
            </p>
          </blockquote>
        </div>
      </Slide>
      <Slide className="fullscreen">
        <div className="aligncenter">
          <img
            src={teamsplit2}
            alt="teamsplit"
            style={{
              height: '50vh',
              border: '1px solid black',
            }}
          />
        </div>
      </Slide>
      <Slide className="fullscreen">
        <div className="aligncenter">
          <img
            src={verticalheadline}
            alt="vertical"
            style={{
              height: '70vh',
              border: '1px solid black',
            }}
          />
        </div>
      </Slide>
      <Slide className="features-slide" stepCount={4} animationId="features">
        <div className="wrap">
          <ul className="flexblock features">
            <li data-step="1">
              <div>
                <h2>
                  <FontAwesomeIcon
                    icon={faArrowsAlt}
                    style={{ fontSize: '5em' }}
                  />
                  Technolgy Agnostic
                </h2>
                Upgrade without having to coordinate
              </div>
            </li>
            <li data-step="2">
              <div>
                <h2>
                  <FontAwesomeIcon icon={faBoxes} style={{ fontSize: '5em' }} />
                  Isolate Team code
                </h2>
                Don't share a runtime
              </div>
            </li>
            <li data-step="3">
              <div>
                <h2>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    style={{ fontSize: '5em' }}
                  />
                  Choose Native
                </h2>
                Favor native Browser features over Custom API's
              </div>
            </li>
            <li data-step="4">
              <div>
                <h2>
                  <FontAwesomeIcon
                    icon={faMitten}
                    style={{ fontSize: '5em' }}
                  />
                  Resilience
                </h2>
                Build a Resilient Site
              </div>
            </li>
          </ul>
        </div>
      </Slide>
      <Slide className="fullscreen">
        <img src={redditnoborder} alt="reddit" style={{ height: '95vh' }} />
      </Slide>
      <Slide className="fullscreen">
        <img src={reddit} alt="reddit" style={{ height: '95vh' }} />
      </Slide>
      <Slide animationId="communication" stepCount={1}>
        <div className="wrap aligncenter">
          <h1>
            <strong>How are we combining them?</strong>
          </h1>
          <h1
            data-step="1"
            className="animate-show"
            style={{ marginTop: '50px' }}
          >
            App Shell
          </h1>
        </div>
      </Slide>
      <Slide className="fullscreen">
        <img src={redditnoborder} alt="reddit" style={{ height: '95vh' }} />
      </Slide>
      <Slide
        className="wireframes-slide"
        animationId="wireframes"
        stepCount={1}
      >
        <div className="wrap aligncenter">
          <h1 data-step="1">
            <strong>IFrames</strong>
          </h1>
        </div>
      </Slide>
      <Slide
        animationId="custom-elements"
        stepCount={1}
        className="custom-elements-slide"
      >
        <div className="wrap aligncenter">
          <h1>
            <strong>Using Custom HTML elements</strong>
          </h1>
          <code>
            <pre style={{ fontSize: '1.3em' }}>
              <div style={{ marginTop: '15px' }}>
                &lt;div&gt;...&lt;/div&gt;
              </div>
              <div style={{ marginTop: '15px' }}>
                &lt;span&gt;...&lt;/span&gt;
              </div>
              <div style={{ marginTop: '15px' }}>&lt;h1&gt;...&lt;/h1&gt;</div>
              <div style={{ marginTop: '15px' }}>
                &lt;article&gt;...&lt;/article&gt;
              </div>
              <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                &lt;section&gt;...&lt;/section&gt;
              </div>
              ...
            </pre>
          </code>
          <code className="animate-show" data-step="1">
            <pre style={{ fontSize: '1.3em' }}>
              <div style={{ marginTop: '15px' }}>
                &lt;<span className="highlight">wikipedia-search</span>
                &gt;...&lt;/<span className="highlight">wikipedia-search</span>
                &gt;
              </div>
              <div style={{ marginTop: '15px' }}>
                &lt;<span className="highlight">random-advertisement</span>
                &gt;...&lt;/
                <span className="highlight">random-advertisement</span>&gt;
              </div>
              <div style={{ marginTop: '15px' }}>
                &lt;<span className="highlight">top-five-list</span>&gt;...&lt;/
                <span className="highlight">top-five-list</span>&gt;
              </div>
            </pre>
          </code>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <h1>
            <strong>Web Components</strong>
          </h1>
          <code>
            <pre style={{ fontSize: '1.5em' }}>
              <div style={{ marginTop: '15px' }}>
                class RandomAdvertisement extends HTMLElement &#123;
                <br />
              </div>
              <div style={{ marginTop: '15px' }}>
                &nbsp;&nbsp;<span className="highlight">connectedCallback</span>
                () &#123;
                <br />
              </div>
              <div style={{ marginTop: '15px' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;this.innerHTML = '&lt;img
                src="https://source.unsplash.com/random" alt="ad" /&gt;';
                <br />
              </div>
              <div style={{ marginTop: '15px' }}>
                &nbsp;&nbsp;&#125;
                <br />
              </div>
              &#125;
              <div style={{ marginTop: '15px' }}>
                window.customElements.define(
                <span className="highlight">'random-advertisement'</span>,
                RandomAdvertisement);
              </div>
            </pre>
          </code>
        </div>
      </Slide>
      <Slide className="custom-elements-slide fullscreen">
        <div className="wrap aligncenter centerify">
          <div className="custom-element-container">
            <span id="custom-element-wrapper">
              custom-advertisement placeholder
            </span>
          </div>
        </div>
      </Slide>
      <Slide>
        <div className="wrap">
          <h1>Callbacks</h1>
          <code>
            <pre style={{ fontSize: '1.8em' }}>connectedCallback</pre>
          </code>
          <code>
            <pre style={{ fontSize: '1.8em' }}>disconnectedCallback</pre>
          </code>
          <code>
            <pre style={{ fontSize: '1.8em' }}>adoptedCallback</pre>
          </code>
          <code>
            <pre style={{ fontSize: '1.8em' }}>attributesChangedCallback</pre>
          </code>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <h1
            style={{
              textShadow: '10px 10px rgba(0,0,0,.2)',
              fontWeight: 'bolder',
            }}
          >
            Shadow DOM
          </h1>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <img
            src={shadowdom}
            alt="shadowdom"
            style={{ border: '1px solid black' }}
          />
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <img
            src={shadowdom2}
            alt="shadowdom"
            style={{ border: '1px solid black' }}
          />
        </div>
      </Slide>
      <Slide
        animationId="missing-something"
        className="missing-something-slide fullscreen"
        stepCount={1}
      >
        <div className="wrap aligncenter" data-step="1">
          <h1 className="question-mark">?</h1>
          <h1 className="question-mark">?</h1>
          <h1 className="question-mark">?</h1>
          <h1 className="question-mark">?</h1>
          <h1 className="question-mark">?</h1>
          <h1 className="question-mark">?</h1>
          <h1 style={{ fontSize: '10em' }} className="think">
            <span role="img" aria-label="sherlock">
              🧐
            </span>
          </h1>
        </div>
      </Slide>
      <Slide
        className="custom-elements-slide-2 fullscreen"
        animationId="comms"
        stepCount={1}
      >
        <h1 style={{ textAlign: 'center' }}>
          <span
            className="animate-show"
            data-step="1"
            style={{ fontSize: '2em' }}
          >
            <FontAwesomeIcon icon={faArrowsAltV} />
          </span>
        </h1>
        <div className="wrap aligncenter">
          <div className="custom-element-container">
            <custom-advertisement></custom-advertisement>
          </div>
        </div>
      </Slide>
      <Slide className="features-slide">
        <div className="wrap">
          <ul className="flexblock features">
            <li className="animated">
              <div>
                <h2>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    style={{ fontSize: '5em' }}
                  />
                  Choose Native
                </h2>
                Favor native Browser features over Custom API's
              </div>
            </li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <div className="features flexblock">
            <li>
              <div>
                <h2 style={{ fontSize: '1.8em' }}>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{ fontSize: '2.5em' }}
                  />
                  Attributes
                </h2>
                <span style={{ fontSize: '2em', marginTop: '15px' }}>
                  Information IN
                </span>
              </div>
            </li>
            <li>
              <div>
                <h2 style={{ fontSize: '1.8em' }}>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ fontSize: '2.5em' }}
                  />
                  DOM Events
                </h2>
                <span style={{ fontSize: '2em', marginTop: '15px' }}>
                  Information OUT
                </span>
              </div>
            </li>
            <li>
              <div>
                <h2 style={{ fontSize: '1.8em' }}>
                  <FontAwesomeIcon
                    icon={faBoxes}
                    style={{ fontSize: '2.5em' }}
                  />
                  LocalStorage
                </h2>
                <span style={{ fontSize: '2em', marginTop: '15px' }}>
                  App scoped
                </span>
              </div>
            </li>
            <li>
              <div>
                <h2 style={{ fontSize: '1.8em' }}>
                  <FontAwesomeIcon
                    icon={faBoxes}
                    style={{ fontSize: '2.5em' }}
                  />
                  SessionStorage
                </h2>
                <span style={{ fontSize: '2em', marginTop: '15px' }}>
                  App scoped
                </span>
              </div>
            </li>
            <li>
              <div>
                <h2 style={{ fontSize: '1.8em' }}>
                  <FontAwesomeIcon
                    icon={faBoxes}
                    style={{ fontSize: '2.5em' }}
                  />
                  indexeddb
                </h2>
                <span style={{ fontSize: '2em', marginTop: '15px' }}>
                  App scoped
                </span>
              </div>
            </li>
            <li>
              <div>
                <h2 style={{ fontSize: '2em' }}>...</h2>
              </div>
            </li>
          </div>
        </div>
      </Slide>
      <Slide animationId="comms-in-out" stepCount={1}>
        <div className="wrap aligncenter">
          <code>
            <pre style={{ fontSize: '2em', padding: '35px 20px' }}>
              &lt;<span className="highlight">custom-advertisement</span>
              <span className="highlight"> foo</span>="bar"&gt;&lt;/
              <span className="highlight">custom-advertisement</span>&gt;
            </pre>
          </code>
          <code className="animate-show" data-step="1">
            <pre style={{ fontSize: '2em', padding: '35px 20px' }}>
              <div style={{ marginTop: '15px' }}>
                class CustomAd extends HTMLElement &#123;
                <br />
              </div>
              <div style={{ marginTop: '15px' }}>&nbsp;&nbsp;...</div>
              <div style={{ marginTop: '15px' }}>
                &nbsp;&nbsp;doSomething() &#123;
              </div>
              <div style={{ marginTop: '25px' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="highlight">
                  this.dispatchEvent(new CustomEvent('
                  <strong>custom:ad:clicked</strong>', &#123;
                </span>
              </div>
              <div style={{ marginTop: '25px' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="highlight">bubbles: true,</span>
              </div>
              <div style={{ marginTop: '25px' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong className="highlight">detail: &#123; ... &#125;</strong>
              </div>
              <div style={{ marginTop: '25px' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="highlight">&#125;));</span>
              </div>
              <div style={{ marginTop: '25px' }}>&nbsp;&nbsp;&#125;</div>
              <div style={{ marginTop: '15px' }}>&#125;</div>
              <div style={{ marginTop: '15px' }}>
                customElements.define(
                <span className="highlight">'custom-advertisement'</span>,
                CustomAd);
              </div>
            </pre>
          </code>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <code>
            <pre style={{ fontSize: '2em', padding: '35px 20px' }}>
              <span className="highlight">
                window.addEventListener('<strong>custom:ad:clicked</strong>
                ', (event) =&gt; &#123;...&#125;);
              </span>
            </pre>
          </code>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <h1>DEMO</h1>
        </div>
      </Slide>
      <Slide className="clients-slide">
        <div className="wrap">
          <ul className="flexblock clients">
            <li>
              <figure>
                <img src={ecmascript} alt="ecma" />
                <figcaption>
                  <h3>Native Javascript</h3>
                  <p>
                    <div>
                      Create own <code>HTMLElement</code> class
                    </div>
                    <div>
                      <code>window.customElements.define</code>
                    </div>
                  </p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src={react} alt="react" />
                <figcaption>
                  <h3>React</h3>
                  <p>
                    React is a <strong>library</strong> so many possibilities
                    <div>
                      <a
                        href="https://direflow.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://direflow.io
                      </a>
                    </div>
                    <pre>
                      <code>npm i -g direflow-cli</code>
                    </pre>
                    <pre>direflow create</pre>
                  </p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src={angular} alt="angular" />
                <figcaption>
                  <h3>Angular</h3>
                  <p>
                    Normal build with <code>angular-cli</code>
                    <pre>
                      <code>npm i --save @webcomponents/webcomponentsjs</code>
                    </pre>
                    add small piece of code in <code>app.module.ts</code>
                  </p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src={vue} alt="vue" />
                <figcaption>
                  <h3>Vue</h3>
                  <p>
                    normal build with <code>vue-cli-service</code>
                    <pre>
                      <code>--target wc</code>
                    </pre>
                    <pre>
                      <code>--inline-vue</code>
                    </pre>
                  </p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </Slide>
      <Slide animationId="demo" stepCount={9} className="demo-slide fullscreen">
        <div className="wrap aligncenter">
          <div className="demo-container" data-step="1">
            <div className="header" data-step="2">
              <span></span>
            </div>
            <div className="main" data-step="5">
              <span></span>
            </div>
            <div className="advertisement" data-step="3">
              <span></span>
            </div>
            <div className="sidebar" data-step="4">
              <span></span>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <img src={inception} alt="inception" style={{ width: '75vw' }} />
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <h1>DEPLOYMENTS</h1>
        </div>
      </Slide>
      <Slide
        className="fullscreen deployments-slide"
        animationId="deploymentsslide"
        stepCount={5}
      >
        <div className="deployments">
          <span className="database animate-show" data-step="3">
            <FontAwesomeIcon icon={faDatabase} />
          </span>
          <div className="microfrontenddeployments" data-step="1">
            <div className="native"></div>
            <div className="angular"></div>
            <div className="vue"></div>
            <div className="react"></div>
          </div>
          <div className="appshelldeployment animate-visible" data-step="4">
            <div className="appshell">
              <div className="header"></div>
              <div className="main"></div>
              <div className="advertisement"></div>
              <div className="sidebar"></div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide className="fullscreen" animationId="cons" stepCount={4}>
        <div className="wrap">
          <h1>
            <strong>CONS</strong>
          </h1>
          <ul className="flexblock specs">
            <li className="animate-visible" data-step="1">
              <div style={{ fontSize: '1.5em' }}>
                <h2 style={{ fontSize: '1.3em' }}>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    style={{ fontSize: '2.5em' }}
                  />
                  Browser Support
                </h2>
                <p style={{ marginTop: '15px' }}>
                  Web wouldn't be the web
                  <div>
                    <a
                      href="https://caniuse.com/?search=web%20components"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Can I Use
                    </a>
                  </div>
                </p>
              </div>
            </li>
            <li className="animate-visible" data-step="2">
              <div style={{ fontSize: '1.5em' }}>
                <h2 style={{ fontSize: '1.3em' }}>
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    style={{ fontSize: '2.5em', marginRight: '70px' }}
                  />
                  App Size
                </h2>
                <p style={{ marginTop: '15px' }}>
                  Because Microfrontends need to be technology agnostic
                  <div>Include runtime everytime</div>
                </p>
              </div>
            </li>
            <li className="animate-visible" data-step="3">
              <div style={{ fontSize: '1.5em' }}>
                <h2 style={{ fontSize: '1.3em' }}>
                  <img
                    src={react}
                    alt="react"
                    style={{ fontSize: '2.5em', marginRight: '70px' }}
                  />
                  Framework/Library specific
                </h2>
                <p style={{ marginTop: '15px' }}>
                  Every Framework/Library has it's own way of achieving the same
                  goal.
                </p>
              </div>
            </li>
            <li className="animate-visible" data-step="4">
              <div style={{ fontSize: '1.5em' }}>
                <h2 style={{ fontSize: '1.3em' }}>
                  <FontAwesomeIcon
                    icon={faSatelliteDish}
                    style={{ fontSize: '2.5em', marginRight: '50px' }}
                  />
                  "Abstract" Communication
                </h2>
                <p style={{ marginTop: '15px' }}>
                  If you're used to Framework specific communication between
                  parts of your application it can be hard in the beginning to
                  think differently.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <div className="wrap aligncenter">
          <h1>
            {' '}
            <FontAwesomeIcon icon={faQuestion} style={{ fontSize: '2.5em' }} />
          </h1>
        </div>
      </Slide>
      <Slide>
        <div className="wrap">
          <h1>Sources</h1>
          <h2>
            <a href="https://direflow.io/">https://direflow.io/</a>
          </h2>
          <h2>
            <a href="https://micro-frontends.org/">
              https://micro-frontends.org/
            </a>
          </h2>
          <h2>
            <a href="https://medium.com/@kitson.mac/wrapping-an-angular-app-in-a-custom-element-web-component-angular-element-in-4-simple-steps-ded3554e9006">
              https://medium.com/ angular app to web component
            </a>
          </h2>
          <h2 style={{ marginTop: '100px' }}>
            <a href="https://microfrontends.joeycomhaire.com">
              https://microfrontends.joeycomhaire.com
            </a>
          </h2>
        </div>
      </Slide>
      <Slide>
        <iframe
          style={{ height: '100vh', width: '100vw' }}
          title="re-factor"
          src="https://www.re-factor.be/donate"
        />
        <img
          src={bednet}
          alt="bednet"
          style={{ position: 'absolute', right: '0' }}
        />
        <a
          href="https://re-factor.be/donate"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            position: 'absolute',
            fontSize: '3em',
            top: '25px',
            width: '100vw',
            textAlign: 'center',
          }}
        >
          re-factor.be/donate
        </a>
      </Slide>
    </article>
  );
}

export default App;
