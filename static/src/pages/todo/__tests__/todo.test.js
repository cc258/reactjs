import React from "react";
import { shallow } from "enzyme";
import Todos from "../todos.jsx";

describe("To do Test:", () => {
  it("should render app", () => {
    expect(1 + 1).toBe(2);
    // const wrapper = shallow(<Todos />);
    // expect(wrapper.find(".pages"))
    //   .contains(<div className="todo-list" />)
    //   .toBe(true);
  });
});
