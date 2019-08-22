import React from "react";
import { shallow, render } from "enzyme";

import Todo from "../Todo";

const setup = () => {
  const props = {
    list: ['123'],
    // getData: jest.fn(),
    // addTodo: jest.fn(),
  };

  const wrapper = shallow(<Todo {...props} />);
  return {
    props,
    wrapper
  };
};

describe("<Todo />", () => {
  it("click h1 to test getData", () => {
    const { wrapper, props } = setup();

    // expect(wrapper).matchSnapshot();

    console.log(wrapper.debug());
    expect(wrapper.find("h1").exists());
    expect(wrapper.find('input').exists());
    // wrapper.find("h1").simulate("click");
    // expect(props.getData).toBeCalled();

    // wrapper.find('input').simulate('change');
    // expect(props.addTodo).toBeCalledWith(1);
  });
});
