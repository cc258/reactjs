import React from "react";
import { shallow } from "enzyme";

import Todo from "../Todo";

const setup = () => {
  const props = {
    list: ["123"],
    getData: jest.fn()
  };

  const wrapper = shallow(<Todo {...props} />);
  return {
    props,
    wrapper
  };
};

describe("<Todo />", () => {
  it("Todo toMatchSnapshot", () => {
    const { wrapper } = setup();

    expect(wrapper.find("h1").exists());
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("click h1 to test getData", () => {
    const { wrapper, props } = setup();
    wrapper.find("h1").simulate("click");
    expect(props.getData).toBeCalled();
  });

  it("change input value", () => {
    const { wrapper } = setup();

    wrapper
      .find("input")
      .simulate("change", { target: { value: "1234567890" } });
    expect(wrapper.state("newTodo")).toEqual("1234567890");
  });
});
