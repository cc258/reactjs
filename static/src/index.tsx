import React from "react";
import { render } from "react-dom";
import App from "./app";
import 'antd/dist/antd.css';

const mount = document.getElementById("app");

render(<App />, mount);
