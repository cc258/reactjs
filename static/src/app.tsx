import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { createStore, applyMiddleware, combineReducers } from "redux";

// international language
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";
import zh_CN from "../lang/zh_CN";
import en_US from "../lang/en_US";

import thunk from "redux-thunk";
import todos from "./pages/todo/todos.reducer";

import Routers from "./pages/routers/routers";

import "./css/app.css";

addLocaleData([...en, ...zh]);

const INITIAL: any = {};

const store = createStore(
  combineReducers({
    INITIAL,
    todos
  }),
  applyMiddleware(thunk)
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale={"en"} key={"en"} messages={en_US}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routers />
          </Suspense>
        </IntlProvider>
      </Provider>
    );
  }
}
export default hot(module)(App);
