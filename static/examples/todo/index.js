import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
// international language
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zh_CN from '../../lang/zh_CN';
import en_US from '../../lang/en_US';

import "./todo.css";

import thunk from "redux-thunk";
import todos from "./todos.reducer";

import Todos from "./todos";

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
    <IntlProvider locale={'zh'} key={'zh'} locale={'zh'} messages={zh_CN}>
      <Todos />
    </IntlProvider>
  </Provider>,
  mount
);
