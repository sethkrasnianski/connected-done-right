import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter, connectRouter } from "connected-react-router";
import store from "redux/store";
import Router from "connected/router";
import reducer from "redux/reducer";
import { history } from "redux/middleware";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
