import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Groups from "components/groups";

const Router = () => (
  <Switch>
    <Route exact path="/groups" component={Groups} />
    <Redirect to="/groups" />
  </Switch>
);

export default withRouter(Router);
