import React from "react";
import billingRoutes from "./MainNav/billingRoutes";
import { Route, Switch } from "react-router-dom";
import BillingDashboard from "../DummyViews/BillingDashboard";

const flatRoutes = [];

/**
 * Iterate recursively over a routes object to give us all the paths
 * necessary for the view route components.
 * @param routes
 * @param base
 */
function flatten(routes, base) {
  routes.forEach(route => {
    flatRoutes.push({
      path: `${base}${route.path}`,
      title: route.title,
      component: route.component
    });
    if (route.routes) flatten(route.routes, `${base}${route.path}`);
  });
}

flatten(billingRoutes, "/billing");

const Views = () => {
  return (
    <>
      <Route path="/billing" component={BillingDashboard} />
      {flatRoutes.map(route => (
        <Route {...route} />
      ))}
    </>
  );
};

export default Views;
