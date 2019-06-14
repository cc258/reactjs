import React from "react";
import { formatMessage, injectIntl } from "react-intl";

class Simulator extends React.Component {
  render() {
    return (
      <div className="pages home simulator">
        <section className="simulator-cont">
          <div className="simulator-card">
            <div class="simulator-car" />
          </div>
          <div className="simulator-card">map</div>
          <div className="simulator-card">log</div>
        </section>
      </div>
    );
  }
}

export default injectIntl(Simulator);
