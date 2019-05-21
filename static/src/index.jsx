import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// international language
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";
import zh_CN from "../lang/zh_CN";
import en_US from "../lang/en_US";

import thunk from "redux-thunk";
import todos from "./pages/todo/todos.reducer";

import Todos from "./pages/todo/todos.jsx";
import Hook from "./pages/hook/hook.jsx";

addLocaleData([...en, ...zh]);

const INITIAL = {};

const store = createStore(
  combineReducers({
    INITIAL,
    todos
  }),
  applyMiddleware(thunk)
);

const mount = document.getElementById("app");
render(
  // navigator.language
  <Provider store={store}>
    <IntlProvider locale={"en"} key={"en"} locale={"en"} messages={en_US}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todos/">Todos</Link>
              </li>
              <li>
                <Link to="/hook/">Hook</Link>
              </li>
            </ul>
          </nav>
          <Route path="/todos/" component={Todos} />
          <Route path="/hook/" component={Hook} />
        </div>
      </Router>
    </IntlProvider>
  </Provider>,
  mount
);
