import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "./pf-lib/appContainer/App.jsx";
import store from "./store";
import {viewsConfig, navbarConfig} from './configs'

import 'script-loader!../../node_modules/patternfly/node_modules/c3/c3.min';
import 'script-loader!../../node_modules/patternfly/node_modules/d3/d3.min';

render (
  <Provider store={store}>
    <App viewsConfig={viewsConfig} navbarConfig={navbarConfig}/>
  </Provider>, document.getElementById('root')
);