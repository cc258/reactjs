import React from "react";
import Theme from "./theme";
import Demo from "./demo";

function Hook() {
  return (
    <div className="pages hook">
      <Theme.Provider value="moon">
        <Demo />
      </Theme.Provider>
    </div>
  );
}

export default Hook;
