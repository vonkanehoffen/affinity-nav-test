import React from "react";
import { billingRoutesFlat } from "../../components/MainNav/billingRoutes";
import { Route, Switch } from "react-router-dom";
import BillingDashboard from "./DummyViews/BillingDashboard";
import Breadcrumbs from "../../components/MainNav/Breadcrumbs";

/**
 * Render routes for all views.
 * TODO: Re-compose this so it can be reused on all products
 * @returns {*}
 * @constructor
 */
const Billing = () => {
  return (
    <div>
      <Breadcrumbs basePath="/billing" baseTitle="Billing" />
      <Switch>
        {billingRoutesFlat.map(route => (
          <Route {...route} key={route.path} />
        ))}
        <Route path="/billing" component={BillingDashboard} />
      </Switch>
    </div>
  );
};

export default Billing;
