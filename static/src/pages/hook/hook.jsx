import React from "react";
import ContextTheme from "./context-theme";
import Demo from "./demo.jsx";

const theme = {
  dark: "dark",
  blue: "blue",
  london: "London",
  guangzhou: "Guangzhou"
};
function Hook() {
  return (
    <div className="pages websocket">
      <ContextTheme.Provider value={theme}>
        <Demo text="Demo" />
      </ContextTheme.Provider>
    </div>
  );
}

export default Hook;
