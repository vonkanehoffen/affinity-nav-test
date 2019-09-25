import React from "react";
import { routes, routesFlat } from "./routes";
import { Route, Switch } from "react-router-dom";
import BillingDashboard from "./DummyViews/BillingDashboard";
import Breadcrumbs from "../../components/Breadcrumbs";
import Content from "../../components/Content";
import SubNav from "../../components/SubNav";

/**
 * The Billing front end root
 * @returns {*}
 * @constructor
 */
const Billing = () => {
  return (
    <>
      <SubNav routes={routes} base="/billing" rootTitle="Billing" />
      <Content>
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
      </Content>
    </>
  );
};

export default Billing;
