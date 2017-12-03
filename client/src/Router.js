import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import PUBG from "./views/Pubg";
import League from "./views/League";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/league-stats"} component={League} />
          <Route exact path={"/pubg-stats"} component={PUBG} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
