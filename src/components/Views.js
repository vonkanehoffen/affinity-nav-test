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

/**
 * Sort routes by specificity as <Switch> renders the first match.
 * Without this /billing/products/ would supersede /billing/products/view, for instance.
 */
flatRoutes.sort((a, b) => {
  // Find specificity of paths, by how many / they have
  const sA = a.path.split("/").length;
  const sB = b.path.split("/").length;
  if (sA > sB) return -1;
  if (sA < sB) return 1;
  return 0;
});

const Views = () => {
  return (
    <Switch>
      {flatRoutes.map(route => (
        <Route {...route} key={route.path} />
      ))}
      <Route path="/billing" component={BillingDashboard} />
    </Switch>
  );
};

export default Views;
