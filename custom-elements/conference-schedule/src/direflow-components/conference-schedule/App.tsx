import React, { FC } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';

interface IProps {
  componentTitle: string;
  talks: any;
}

const TALKS = {
  '09:30': [
    {
      speaker: 'Jensen Somers',
      name: 'Vertical Slice Architecture',
    },
    {
      speaker: 'Pauline Depuydt',
      name: 'About DNA and other magical building blocks of life',
    },
    {
      speaker: 'Stefaan van Puyvelde',
      name: '(in)Security',
    },
    {
      speaker: 'Robbe Rothier',
      name: 'Chaos, mayhem, destruction: my work here is done',
    },
    {
      speaker: 'Mathias Bruggeman - Matthias van den Elsacker - Toon Verbuyst',
      name: 'IP IP Hoera',
    },
  ],
  '10:40': [
    {
      speaker: 'Pieter-Jan Dergent',
      name: 'Functional Typescript',
    },
    {
      speaker: 'Kenny Laevaert',
      name: 'User oriented programming',
    },
    {
      speaker: 'Sander Descamps',
      name: 'Ansible: automation for lazy people',
    },
    {
      speaker: 'Birger Anckaert',
      name: 'Special K',
    },
    {
      speaker: 'Tony Mouton',
      name: 'Value Stream mapping, a visualisation tool used in Lean',
    },
  ],
  '11:50': [
    {
      speaker: 'Thomas Levefer-Teughels - Thomas van Rhee',
      name: 'Database performance enhancements',
    },
    {
      speaker: 'Sam De Bock',
      name: 'React in 2020',
    },
    {
      speaker: 'Georges Del Favero',
      name: 'DBATools.io',
    },
    {
      speaker: 'Bavo De Waele',
      name: 'Steping into the blockchain - DAPPS',
    },
    {
      speaker: 'Annabel Greeve',
      name: 'Our branding is alive!',
    },
  ],
};

const App: FC<IProps> = ({ componentTitle, talks }) => {
  const renderTalks = Object.keys(talks).map((hour: string) => (
    <div className="hour-block">
      <div className="hour">{hour}</div>
      <div className="talks">
        {talks[hour].map((talk: any) => (
          <div className="talk">
            <h2>{talk.name}</h2>
            <div>{talk.speaker}</div>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <Styled styles={styles}>
      <div className="app">
        <h1>{componentTitle}</h1>
        <div className="bottom">
          <div>{renderTalks}</div>
        </div>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Conference Schedule',
  talks: TALKS,
};

export default App;
