import React from "react";
import ReactDOM from "react-dom";
// import App from "container/App";
import { Provider } from "react-redux";
import Store from "Root";
import AppRouter from "routes/";

let store = Store();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
