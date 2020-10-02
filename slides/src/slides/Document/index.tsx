import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import Slide from '../../components/Slide';

import './document.scss';

const server = require('./server.png');
const react = require('./react.png');
const angular = require('./angular.png');
const vue = require('./vue.png');

const Intro = () => {
  useEffect(() => {
    setTimeout(() => {
      window.ws.el.addEventListener('ws:slide-go-next-step', ((e: CustomEvent) => {
        const slideAnimationId = e.detail.targetSection.attributes['animation-id'].nodeValue;
        if (slideAnimationId === 'document-evolution') {
          if (e.detail.currentStep === 2) {
            e.detail.targetSection.querySelector('.fa-file-code').classList.remove('animated');
          } else if (e.detail.currentStep === 3) {
            e.detail.targetSection.querySelector('.document-evolution').classList.add('small');
          } else if (e.detail.currentStep === 4) {
            e.detail.targetSection.querySelector('.server').classList.add('split');
            e.detail.targetSection.querySelector('.document-evolution').classList.remove('small');
            e.detail.targetSection.querySelector('.document-evolution').classList.add('split');
          } else if (e.detail.currentStep === 6) {
            e.detail.targetSection.querySelector('.server').classList.add('microservices');
          } else if (e.detail.currentStep === 7) {
            e.detail.targetSection.querySelector('.microservices-container').classList.remove('animated');
          }
        }
      }) as EventListener);
    }, 501);
  }, []);

  return (<Slide className="fullscreen document-slide" animationId="document-evolution" stepCount={7}>
    <FontAwesomeIcon icon={faFileCode} className="animate-show" data-step="1" />

    <div className="server animate-show" data-step="3">
      <img src={server} alt="server" />
    </div>
    <div className="microservices-container animate-show" data-step="6"></div>
    <div className="lambda-container animate-show" data-step="7"></div>
    <svg viewBox="0 0 2481 3508" version="1.1" className="document-evolution" style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap:"round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5
    }}>
      <path d="M2330,225.56C2330,177.234 2290.77,138 2242.44,138L228.56,138C180.234,138 141,177.234 141,225.56L141,3257.44C141,3305.77 180.234,3345 228.56,3345L2242.44,3345C2290.77,3345 2330,3305.77 2330,3257.44L2330,225.56Z" style={{fill: "white"}}/>
      <clipPath id="_clip1">
          <path d="M2330,225.56C2330,177.234 2290.77,138 2242.44,138L228.56,138C180.234,138 141,177.234 141,225.56L141,3257.44C141,3305.77 180.234,3345 228.56,3345L2242.44,3345C2290.77,3345 2330,3305.77 2330,3257.44L2330,225.56Z"/>
      </clipPath>
      <g clipPath="url(#_clip1)">
          <g id="title" transform="matrix(0.840462,0,0,1,118.14,-127)">
              <path d="M2200,562.75C2200,551.298 2188.94,542 2175.31,542L494.689,542C481.063,542 470,551.298 470,562.75L470,604.25C470,615.702 481.063,625 494.689,625L2175.31,625C2188.94,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="long" transform="matrix(1.11618,0,0,1,-254.607,237)">
              <path d="M2200,562.75C2200,551.298 2191.67,542 2181.41,542L488.59,542C478.33,542 470,551.298 470,562.75L470,604.25C470,615.702 478.33,625 488.59,625L2181.41,625C2191.67,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="long1" transform="matrix(1.11618,0,0,1,-254.607,2336)">
              <path d="M2200,562.75C2200,551.298 2191.67,542 2181.41,542L488.59,542C478.33,542 470,551.298 470,562.75L470,604.25C470,615.702 478.33,625 488.59,625L2181.41,625C2191.67,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="long2"  transform="matrix(1.11618,0,0,1,-254.607,2472)">
              <path d="M2200,562.75C2200,551.298 2191.67,542 2181.41,542L488.59,542C478.33,542 470,551.298 470,562.75L470,604.25C470,615.702 478.33,625 488.59,625L2181.41,625C2191.67,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="long3" transform="matrix(1.11618,0,0,1,-254.607,2610)">
              <path d="M2200,562.75C2200,551.298 2191.67,542 2181.41,542L488.59,542C478.33,542 470,551.298 470,562.75L470,604.25C470,615.702 478.33,625 488.59,625L2181.41,625C2191.67,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="long4" transform="matrix(1.11618,0,0,1,-249.949,2761.5)">
              <path d="M2200,562.75C2200,551.298 2191.67,542 2181.41,542L488.59,542C478.33,542 470,551.298 470,562.75L470,604.25C470,615.702 478.33,625 488.59,625L2181.41,625C2191.67,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="long5" transform="matrix(1.11618,0,0,1,-254.607,1128.94)">
              <path d="M2200,562.75C2200,551.298 2191.67,542 2181.41,542L488.59,542C478.33,542 470,551.298 470,562.75L470,604.25C470,615.702 478.33,625 488.59,625L2181.41,625C2191.67,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="bigimage" transform="matrix(1.40231,0,0,10.1566,-659.087,-3570.89)">
              <path d="M2200,554.45C2200,547.579 2159.6,542 2109.83,542L560.173,542C510.405,542 470,547.579 470,554.45L470,612.55C470,619.421 510.405,625 560.173,625L2109.83,625C2159.6,625 2200,619.421 2200,612.55L2200,554.45Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="titleorange" transform="matrix(0.691908,0,0,1,311.803,1578.94)">
              <path d="M2200,562.75C2200,551.298 2186.56,542 2170.01,542L499.99,542C483.438,542 470,551.298 470,562.75L470,604.25C470,615.702 483.438,625 499.99,625L2170.01,625C2186.56,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(233,83,29)"}}/>
          </g>
          <g id="short" transform="matrix(0.609249,0,0,1,-16.3468,539)">
              <path d="M2200,562.75C2200,551.298 2184.74,542 2165.94,542L504.058,542C485.261,542 470,551.298 470,562.75L470,604.25C470,615.702 485.261,625 504.058,625L2165.94,625C2184.74,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="short1" transform="matrix(0.609249,0,0,1,-16.3468,683)">
              <path d="M2200,562.75C2200,551.298 2184.74,542 2165.94,542L504.058,542C485.261,542 470,551.298 470,562.75L470,604.25C470,615.702 485.261,625 504.058,625L2165.94,625C2184.74,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="short2" transform="matrix(0.609249,0,0,1,-16.3468,838)">
              <path d="M2200,562.75C2200,551.298 2184.74,542 2165.94,542L504.058,542C485.261,542 470,551.298 470,562.75L470,604.25C470,615.702 485.261,625 504.058,625L2165.94,625C2184.74,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="short3" transform="matrix(0.609249,0,0,1,-16.3468,984)">
              <path d="M2200,562.75C2200,551.298 2184.74,542 2165.94,542L504.058,542C485.261,542 470,551.298 470,562.75L470,604.25C470,615.702 485.261,625 504.058,625L2165.94,625C2184.74,625 2200,615.702 2200,604.25L2200,562.75Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="smallimage" transform="matrix(0.476301,0,0,6.36145,1153.14,-2366.9)">
              <path d="M2200,554.45C2200,547.579 2125.49,542 2033.72,542L636.282,542C544.508,542 470,547.579 470,554.45L470,612.55C470,619.421 544.508,625 636.282,625L2033.72,625C2125.49,625 2200,619.421 2200,612.55L2200,554.45Z" style={{fill: "rgb(228,228,228)"}}/>
          </g>
          <g id="header" transform="matrix(1.28353,0,0,2.97333,-378.643,-821)">
              <path d="M2196,318.75C2196,308.402 2176.54,300 2152.57,300L338.435,300C314.462,300 295,308.402 295,318.75L295,356.25C295,366.598 314.462,375 338.435,375L2152.57,375C2176.54,375 2196,366.598 2196,356.25L2196,318.75Z" style={{fill: "rgb(233,83,29)"}}/>
          </g>
          <g id="profile" transform="matrix(1,0,0,1,1223,-1844.5)">
              <circle cx="978" cy="2063" r="52" style={{fill: "rgb(228,228,228)"}}/>
          </g>
      </g>
      <path d="M2330,225.56C2330,177.234 2290.77,138 2242.44,138L228.56,138C180.234,138 141,177.234 141,225.56L141,3257.44C141,3305.77 180.234,3345 228.56,3345L2242.44,3345C2290.77,3345 2330,3305.77 2330,3257.44L2330,225.56Z" style={{
        fill: "none",
        stroke: "rgb(117,117,117)",
        strokeWidth: "20px"
      }} />
  </svg>
    <img src={react} alt="react" className="animate-show react" data-step="5" />
    <img src={angular} alt="angular" className="animate-show angular" data-step="5" />
    <img src={vue} alt="vue" className="animate-show vue" data-step="5" />
  </Slide>);
};

export default Intro;