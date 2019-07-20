import React from "react";
import { render } from "react-dom";
import App from "./app.jsx";

const mount = document.getElementById("app");

render(<App />, mount);

// if (module.hot) {
//   module.hot.accept(App, function() {
//     console.log("Accepting the updated printMe module!");
//     render(App);
//   });
// }
