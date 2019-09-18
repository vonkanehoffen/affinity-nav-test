import React from "react";
import RootNav from "./RootNav";
import { Route } from "react-router-dom";
import { billingRoutes } from "./billingRoutes";
import SubNav from "./SubNav";

const MainNav = () => {
  return (
    <>
      <RootNav />
      <Route
        path="/billing"
        component={() => (
          <SubNav routes={billingRoutes} base="/billing" rootTitle="Billing" />
        )}
      />
    </>
  );
};

export default MainNav;
