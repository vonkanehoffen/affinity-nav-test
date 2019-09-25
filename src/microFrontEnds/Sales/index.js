import React from "react";
import { routes, routesFlat } from "./routes";
import { Route, Switch } from "react-router-dom";
import BillingDashboard from "../Billing/DummyViews/Generic";
import Breadcrumbs from "../../components/Breadcrumbs";
import Content from "../../components/Content";
import SubNav from "../../components/SubNav";

/**
 * The Sales front end root
 * @returns {*}
 * @constructor
 */
const Billing = () => {
  return (
    <>
      <SubNav routes={routes} base="/sales" rootTitle="Sales" />
      <Content>
        <Breadcrumbs
          basePath="/sales"
          baseTitle="Sales"
          flatRoutes={routesFlat}
        />
        <Switch>
          {routesFlat.map(route => (
            <Route {...route} key={route.path} />
          ))}
          <Route path="/sales" component={BillingDashboard} />
        </Switch>
      </Content>
    </>
  );
};

export default Billing;
