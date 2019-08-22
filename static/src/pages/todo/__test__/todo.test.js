import React from "react";
import { shallow, render } from "enzyme";
import { IntlProvider } from "react-intl"; // mock IntlProvider in LanguageProvider

import Todo from "../Todo";

// set up intlProvider
const intlProvider = new IntlProvider({ locale: "en" }, {});
const intl = intlProvider.getChildContext();

const context = {
  intl
};

const setup = () => {
  const props = {
    getData: jest.fn()
  };

  const wrapper = shallow(<Todo {...props} />, { context });
  return {
    props,
    wrapper
  };
};

describe("<Todo />", () => {
  it("click h1 to test getData", () => {
    const { wrapper, props } = setup();
    // expect(wrapper.find("h1").exists());
    expect(wrapper.find("h1").toHaveLength(1);
    // wrapper.find("h1").simulate("click");
    // expect(props.getData).toBeCalled();
  });
});
