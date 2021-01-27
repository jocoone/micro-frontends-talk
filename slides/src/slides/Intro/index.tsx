import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Slide from '../../components/Slide';

import './intro.scss';

const colossus = require('../../assets/colossus.jpg');
const alan = require('../../assets/alan-turing.jpg');
const title = require('../../assets/title.svg');

const ANIMATION_ID = 'intro';

const Intro = () => {
  useEffect(() => {
    setTimeout(() => {
      window.ws.el.addEventListener('ws:slide-go-next-step', ((
        e: CustomEvent
      ) => {
        const slideAnimationId =
          e.detail.targetSection.attributes['animation-id'].nodeValue;
        if (slideAnimationId === 'intro') {
          if (e.detail.currentStep === 4) {
            e.detail.targetSection.classList.add('lighter');
          }
        }
      }) as EventListener);
    }, 501);
  }, []);
  return (
    <Slide
      className="fullscreen bg-black intro-slide"
      animationId={ANIMATION_ID}
      stepCount={4}
    >
      <div className="embed dark colossus" data-step={1}>
        <img src={colossus} alt="colossus" />
      </div>
      <div className="wrap aligncenter">
        <img
          src={title}
          alt="title"
          className="title animate-hide"
          data-step={1}
        />
        <div className="overlay-alan animate-hide" data-step={3}>
          <img
            src={alan}
            alt="alan"
            className="alan animate-show"
            data-step={2}
          />
        </div>
        <div className="overlay-alan">
          <FontAwesomeIcon
            icon={faApple}
            className="animate-show apple"
            data-step={4}
          />
        </div>
      </div>
    </Slide>
  );
};

export default Intro;
