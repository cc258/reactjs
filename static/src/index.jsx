import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
import App from "./app.jsx";
const HotApp = hot(module)(App);

const mount = document.getElementById("app");
render(<HotApp />, mount);
