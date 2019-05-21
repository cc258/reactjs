
import React from 'react'
import { shallow } from 'enzyme'
import Foo from "../foo.js";

describe("To do Test:", () => {
  it("should render app", () => {

    expect(1 + 1).toBe(2);
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).contains(<div className="foo">Bar</div>).toBe(true);
  });
});
