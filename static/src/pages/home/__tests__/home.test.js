import React from "react";
import { shallow } from "enzyme";
import Home from "../home";

describe("To do Test:", () => {
  it("should render home", () => {
    expect(1 + 1).toBe(2);

    const wrapper = shallow(<Home />);

    // 输出组件文本描述
    // console.log(wrapper.debug());

    // 是否存在
    expect(wrapper.find(".home").exists());

    // 数组长度
    expect(wrapper.find("h1")).toHaveLength(1);

    // 运行2次可生成快照
    expect(wrapper).toMatchSnapshot();
  });
});
