import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const ViewProducts = () => {
  return (
    <Switch>
      <Route
        path="/billing/products/view/:id"
        component={({ history, match }) => (
          <div>
            <h4>Product detail view</h4>
            <button onClick={history.goBack}>Back</button>
            <pre>{JSON.stringify(match, null, 2)}</pre>
          </div>
        )}
      />
      <Route
        path="/billing/products/view"
        component={() => (
          <div>
            <h1>View Products</h1>
            <p>
              This could have routing local to the component... like individual
              product detail pages:
            </p>
            <Link to="/billing/products/view/123">Product 123</Link>
            <Link to="/billing/products/view/456">Product 456</Link>
          </div>
        )}
      />
    </Switch>
  );
};

export default ViewProducts;
