import React from "react";
import { HomeProps } from "./index.d";

class Home extends React.Component<HomeProps> {
  render() {
    return (
      <div className="pages home" id="home">
        <h1>In the end, </h1>
        <h2>everything will have a happy ending. </h2>
        <h3>If it's not happy, </h3>
        <h4>then it's not the end.</h4>
      </div>
    );
  }
}

export default Home;
