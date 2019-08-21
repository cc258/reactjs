import React from "react";
import { shallow, mount } from "enzyme";
import { IntlProvider, intlShape } from "react-intl"; // mock IntlProvider in LanguageProvider
// import getMuiTheme from "material-ui/styles/getMuiTheme"; // mock MuiThemeProvider
import ReactRouterEnzymeContext from "react-router-enzyme-context"; // mock ConnectedRouter
import configureStore from "redux-mock-store"; // mock Provider

// set up Provider
const store = configureStore([])({});
store.dispatch = jest.fn();
const dispatch = store.dispatch;
// set up intlProvider
const messages = require("../../lang/en_US");
const intlProvider = new IntlProvider({ locale: "en", messages }, {});
const { intl } = intlProvider.getChildContext();
// set up MuiThemeProvider
// const muiTheme = getMuiTheme();
// set up ConnectedRouter
const router = new ReactRouterEnzymeContext().get().context.router;

// assign props 'dispatch' into node, node is the component which we want to test.
function nodeWithProps(node) {
  return React.cloneElement(node, { dispatch });
}

// pass down the context of Provider, intlProvider, MuiThemeProvider and ConnectedRouter to shallow
export function shallowWithProviders(node) {
  return shallow(nodeWithProps(node), {
    context: { intl, router, store }
  });
}

// pass down the context of Provider, intlProvider, MuiThemeProvider and ConnectedRouter to mount
export function mountWithProviders(node) {
  return mount(nodeWithProps(node), {
    context: { intl, router, store },
    childContextTypes: {
      intl: intlShape,
      router: React.PropTypes.object,
      store: React.PropTypes.object
    }
  });
}
