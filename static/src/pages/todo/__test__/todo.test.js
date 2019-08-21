import React from "react";
import { shallowWithProviders } from "../../../utils/enzymeHelper";

import { Todo } from "../Todo";

const defaultProps = {
  list: [],
};

const setup = (props = {}) => {
  const wrapper = shallowWithProviders(<Todo {...defaultProps} {...props} />);
  const actions = {
    mock: (...methods) => {
      methods.forEach(method => {
        wrapper.instance()[method] = jest.fn();
        actions[method] = wrapper.instance()[method];
      });
    }
  };
  return {
    wrapper,
    actions,
    dispatch: wrapper.props().dispatch
  };
};

describe("<Todo />", () => {
  it("match snapshot", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

});
