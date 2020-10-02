import React from 'react';
import Slide from '../../components/Slide';

import './intro.scss';

const movie = require('../../assets/timelapse.mp4');
const title = require('../../assets/title.svg');

const ANIMATION_ID = "intro";

const Intro = () => {
  return (<Slide className="fullscreen bg-black intro-slide" animationId={ANIMATION_ID} stepCount={1}>
    <div className="embed dark" data-step={1}>
      <video src={movie} loop muted autoPlay></video>
    </div>
    <div className="wrap aligncenter">
      <img src={title} alt="title" className="title animate-hide" data-step={1}/>
    </div>
  </Slide>);
};

export default Intro;