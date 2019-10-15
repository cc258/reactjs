import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { createStore, applyMiddleware, combineReducers } from "redux";

// international language
import { IntlProvider } from "react-intl";

import thunk from "redux-thunk";
import todos from "./pages/todo/todos.reducer";

import Routers from "./routers";

import "./css/app.css";

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
        <IntlProvider locale={"en"}>
          <Suspense fallback={<div />}>
            <Routers />
          </Suspense>
        </IntlProvider>
      </Provider>
    );
  }
}
export default hot(module)(App);
