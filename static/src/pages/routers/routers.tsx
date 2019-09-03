import React from "react";
import { hot, setConfig } from "react-hot-loader";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "../home/home";
import Hook from "../hook/hook";
import Typescript from "../typescript/typescript";
import Todos from "../todo/todos";
import Format from "../format/format";
import Simulator from "../simulator/simulator";
import Websocket from "../websocket/websocket";
import Graph from "../g2/g2";
import ECharts from "../echats/echats";
import NotFound from "../not-found/not-found";

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hook/">Hook123</Link>
            </li>
            <li>
              <Link to="/typescript/">TS</Link>
            </li>
            <li>
              <Link to="/todos/">Todos</Link>
            </li>
            <li>
              <Link to="/format/">Format</Link>
            </li>
            <li>
              <Link to="/simulator">Simulator</Link>
            </li>
            <li>
              <Link to="/websocket">Websocket</Link>
            </li>
            <li>
              <Link to="/g2">G2</Link>
            </li>
            <li>
              <Link to="/echats">ECharts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hook/" component={Hook} />
          <Route path="/typescript/" component={Typescript} />
          <Route path="/todos/" component={Todos} />
          <Route path="/format/" component={Format} />
          <Route path="/simulator/" component={Simulator} />
          <Route path="/websocket/" component={Websocket} />
          <Route path="/g2/" component={Graph} />
          <Route path="/echats/" component={ECharts} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

setConfig({ logLevel: "debug" });

export default hot(module)(Routers);
