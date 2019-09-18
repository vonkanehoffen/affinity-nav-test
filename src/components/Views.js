import React from "react";
import { billingRoutesFlat } from "./MainNav/billingRoutes";
import { Route, Switch } from "react-router-dom";
import BillingDashboard from "../DummyViews/BillingDashboard";

/**
 * Render routes for all views.
 * TODO: Re-compose this so it can be reused on all products
 * @returns {*}
 * @constructor
 */
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
