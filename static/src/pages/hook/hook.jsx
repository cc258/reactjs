import React from "react";
import ContextTheme from "./context-theme";
import Demo from "./demo.jsx";

const theme = {
  night: "night",
  light: "light",
  london: "London",
  guangzhou: "Guangzhou"
};
function Hook() {
  return (
    <div className="pages hook">
      <ContextTheme.Provider value={theme}>
        <Demo text="Demo" />
      </ContextTheme.Provider>
    </div>
  );
}

export default Hook;
