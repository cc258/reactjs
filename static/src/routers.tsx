import React from "react";
import { hot, setConfig } from "react-hot-loader";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./pages/home/home";
import Mongoose from "./pages/mongoose/mongoose";
import Hook from "./pages/hook/hook";
import Typescript from "./pages/typescript/typescript";
import Todos from "./pages/todo/todos";
import Format from "./pages/format/format";
import Simulator from "./pages/simulator/simulator";
import Websocket from "./pages/websocket/websocket";
import Graph from "./pages/g2/g2";
import ECharts from "./pages/echats/echats";
import NotFound from "./pages/not-found/not-found";

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
              <Link to="/mongoose">Mongoose</Link>
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
          <Route exact path="/mongoose" component={Mongoose} />
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

setConfig({ reloadHooks: false });

export default Routers;
