import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "../home/home.jsx";
import Hook from "../hook/hook.jsx";
import Typescript from "../typescript/typescript.jsx";
import Todos from "../todo/todos.jsx";
import Format from "../format/format.jsx";
import NotFound from "../not-found/not-found.jsx";

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
              <Link to="/hook/">Hook</Link>
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
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hook/" component={Hook} />
          <Route path="/typescript/" component={Typescript} />
          <Route path="/todos/" component={Todos} />
          <Route path="/format/" component={Format} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
