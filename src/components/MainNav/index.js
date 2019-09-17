import React from "react";
import RootNav from "./RootNav";
import BillingNav from "./BillingNav";
import { Route } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <RootNav />
      <Route path="/billing" component={BillingNav} />
    </>
  );
};

export default MainNav;
