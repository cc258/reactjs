import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// international language
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";
import zh_CN from "../lang/zh_CN";
import en_US from "../lang/en_US";

import thunk from "redux-thunk";
import todos from "./pages/todo/todos.reducer";

import Routers from "./pages/routers/routers.jsx";

import "./css/app.css";

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
      <Routers />
    </IntlProvider>
  </Provider>,
  mount
);
