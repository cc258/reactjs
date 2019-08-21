import React from "react";
import { shallow } from "enzyme";
import Todo from "../todo";

describe("分支渲染需要测试", () => {
  it("should not render todo list", () => {
    const wrapper = shallow(<Todo list={[]} />);
    expact(wrapper.find(Todo)).toHaveLength(0);
  });
});
