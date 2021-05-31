import React, { FC, MutableRefObject, RefObject } from 'react';
import Webcam from 'react-webcam';
import { Styled } from 'direflow-component';
import styles from './App.css';

interface IProps {
  lesson: string;
}

const App: FC<IProps> = ({ lesson }) => {
  const webcamRef = React.useRef() as MutableRefObject<Webcam>;

  const capture = () => {
    if (webcamRef?.current?.getScreenshot) {
      const imageSrc = webcamRef?.current?.getScreenshot();
      window.dispatchEvent(
        new CustomEvent('bednet:webcam:capture', {
          bubbles: true,
          detail: { imageSrc },
        })
      );
    }
  };

  return (
    <Styled styles={styles}>
      <div className="app">
        <h1>{lesson}</h1>
        <div>
          <Webcam ref={webcamRef} />
        </div>
        <button onClick={capture}>Capture photo</button>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  lesson: 'Mathematics',
};

export default App;
