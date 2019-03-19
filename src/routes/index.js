import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import pageOne from "components/Home";
import pageTwo from "components/About";

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={pageOne} />
      <Route exact path="/second-page" component={pageTwo} />
    </Switch>
  </HashRouter>
);
