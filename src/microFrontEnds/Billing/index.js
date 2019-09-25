import React from "react";
import { routesFlat } from "./routes";
import { Route, Switch } from "react-router-dom";
import BillingDashboard from "./DummyViews/BillingDashboard";
import Breadcrumbs from "../../components/MainNav/Breadcrumbs";

/**
 * The Billing front end root
 * @returns {*}
 * @constructor
 */
const Billing = () => {
  return (
    <div>
      <Breadcrumbs
        basePath="/billing"
        baseTitle="Billing"
        flatRoutes={routesFlat}
      />
      <Switch>
        {routesFlat.map(route => (
          <Route {...route} key={route.path} />
        ))}
        <Route path="/billing" component={BillingDashboard} />
      </Switch>
    </div>
  );
};

export default Billing;
