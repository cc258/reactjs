// *** REMOVE THE COMMENTS IN THIS FILE TO START CODING UNIT TEST ***

/*
 * Todos <= replace Todos with the Component you want to test.
 * FunctionName <= replace FunctionName with the function you want to test.
 */

import React from "react";
import { shallow } from "enzyme";
import { mountWithProviders } from "enzymeHelper";

/*  TODO: import the component you want like material-ui TextField or FlatButton */

import { Todos } from "../Todos";

const defaultProps = {
  /*  TODO: need to put default props here */
  list: [],
};

const setup = (props = {}) => {
  const wrapper = mountWithProviders(<Todos {...defaultProps} {...props} />);
  const actions = {
    /*  TODO: customize common DOM you want to test */
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
    /*  TODO: customize common DOM you want to test */
  };
};

describe("<Todos />", () => {
  it("match snapshot", () => {
    const wrapper = shallow(<Todos {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("must have ......", () => {
    const { wrapper } = setup();
    // TODO: check if the important DOM exists ex: button, input, table
    expect(wrapper.find('todo-list')).toHaveLength(1);
  });
  // TODO: check events executing correctly or not, ex: click,change,keypress
  // TODO: check UI changing correctly or not when different props assign
});