import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

class Hook extends React.Component {
  render = () => {
    return <div>HOOK</div>;
  };
}

export default injectIntl(Hook);
