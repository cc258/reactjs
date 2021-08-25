import React from "react";
import dragula from "react-dragula";
import "./dragClass.scss";

export default class DragClass extends React.Component {
  componentDidMount() {
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    dragula([left, right]);
  }

  render() {
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
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3>Example Card Header</h3>
        </div>
        <div className="card-body">
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}
