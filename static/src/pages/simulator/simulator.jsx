import React from "react";
import SimulatorMap from "./map.jsx";

class Simulator extends React.Component {
  render() {
    return (
      <div className="pages home simulator">
        <section className="simulator-cont">
          <div className="simulator-card">
            <div className="simulator-car" />
          </div>
          <div className="simulator-card">
            <SimulatorMap />
          </div>
          <div className="simulator-card">
            <ul className="simulator-log">
              <li>向南行驶</li>
              <li>靠左，并入科韵路</li>
              <li>稍微向右转，进入琶洲大道东</li>
              <li>向右转</li>
              <li>广州琶洲会展中心</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Simulator;
