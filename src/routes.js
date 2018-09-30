import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import CSheet from "./Components/Character-Sheet/CSheet";
import CContain from "./Components/CreatureContainer/CContain";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/Character" component={CSheet} />
    <Route path="/Creatures" component={CContain} />
  </Switch>
);
