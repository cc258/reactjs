import React from "react";
import { formatMessage, injectIntl } from "react-intl";
// import Ts from "./ts.tsx";

export interface TypescriptProps {
  name: string;
  age?: number;
}

export interface TypescriptState {
  name: string;
  age?: number;
}

class Typescript extends React.Component<TypescriptProps, TypescriptState> {
  state = {
    name: "",
    age: 18
  };

  render() {
    const { name, age = 1 } = this.props;
    return (
      <div className="pages home">
        <p>{name}</p>
        <p>{age}</p>
      </div>
    );
  }
}

export default injectIntl(Typescript);
