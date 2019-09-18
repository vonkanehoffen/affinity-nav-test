import React from "react";
import { billingRoutesFlat } from "./MainNav/billingRoutes";
import { Route, Switch } from "react-router-dom";
import BillingDashboard from "../DummyViews/BillingDashboard";

const Views = () => {
  return (
    <Switch>
      {billingRoutesFlat.map(route => (
        <Route {...route} key={route.path} />
      ))}
      <Route path="/billing" component={BillingDashboard} />
    </Switch>
  );
};

export default Views;
