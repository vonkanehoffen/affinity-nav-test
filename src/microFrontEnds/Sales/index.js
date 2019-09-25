import React from "react";
import { routes, routesFlat } from "./routes";
import { Route, Switch } from "react-router-dom";
import Generic from "../Billing/DummyViews/Generic";
import Breadcrumbs from "../../components/Breadcrumbs";
import Content from "../../components/Content";
import SubNav from "../../components/SubNav";

/**
 * The Sales front end root
 * @returns {*}
 * @constructor
 */
const Sales = () => {
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
          <Route path="/sales" component={Generic} />
        </Switch>
      </Content>
    </>
  );
};

export default Sales;
