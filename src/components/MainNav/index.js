import React from "react";
import RootNav from "./RootNav";
import BillingNav from "./BillingNav";
import { Route } from "react-router-dom";
import billingRoutes from "./billingRoutes";
import SubNav from "./SubNav";

const MainNav = () => {
  return (
    <>
      <RootNav />
      <Route
        path="/billing"
        component={() => <SubNav routes={billingRoutes} base="/billing" />}
      />
    </>
  );
};

export default MainNav;
