import React from 'react';

interface SlideProps {
  className?: string;
  background?: string;
  animationId?: string;
  stepCount?: number;
}

const Slide: React.SFC<SlideProps> = ({ className = '', background, animationId, stepCount, children }) => {
  if(animationId && ! stepCount) {
    throw new Error('No step count given for an animated slide');
  }

  return (<section className={className} animation-id={animationId}>
    { stepCount && <span data-step-count={stepCount}></span>}
    {
      background && (
        <span className="background" style={{
          backgroundImage: `url("${background}")`
        }}></span>
      )
    }
    {children}
  </section>);
};

export default Slide;