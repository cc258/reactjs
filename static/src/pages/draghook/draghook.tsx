import React, { FC, ReactElement, useEffect } from 'react';
import dragula from 'react-dragula';
import './draghook.scss';

const DragHook: FC = (props: any): ReactElement => {
  useEffect(() => {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    dragula([left, right], {});
  }, []);

  return (
    <div className="pages dragclass">
      <div id="left" className="container">
        <Card body="Card 3" />
        <Card body="Card 4" />
      </div>
      <div id="right" className="container">
        <Card body="Card 1" />
        <Card body="Card 2" />
      </div>
    </div>
  );
};

const Card: FC = (props: any): ReactElement => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Example Card Header</h3>
      </div>
      <div className="card-body">
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default DragHook;
