import React from "react";
import { ItemLink, Level, Outer } from "./navShared";
import { Switch, Route } from "react-router-dom";

// Split this into reusable components for other products when working

const BillingNav = () => {
  return (
    <Outer>
      <Switch>
        <Route
          exact
          path="/billing"
          component={() => (
            <Level title="Billing">
              <ItemLink to="/billing">Dashboard</ItemLink>
              <ItemLink to="/billing/customers">Customers</ItemLink>
              <ItemLink to="/billing/products">Products</ItemLink>
            </Level>
          )}
        />
        <Route
          path="/billing/customers"
          component={() => (
            <Level>
              <ItemLink to="/billing/customers">Dashboard</ItemLink>
              <ItemLink to="/billing/customers/manage">
                Manage Customers
              </ItemLink>
            </Level>
          )}
        />
        <Route
          path="/billing/products"
          component={() => (
            <Level>
              <ItemLink to="/billing/products">Dashboard</ItemLink>
              <ItemLink to="/billing/products/view">View Products</ItemLink>
              <ItemLink to="/billing/products/manage">
                Manage Customer Products
              </ItemLink>
            </Level>
          )}
        />
      </Switch>
    </Outer>
  );
};

export default BillingNav;
