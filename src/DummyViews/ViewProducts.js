import React from "react";
import { Link } from "react-router-dom";

const ViewProducts = () => {
  return (
    <div>
      <h1>View Products</h1>
      <p>
        This could have routing local to the component... like individual
        product detail pages:
      </p>
      <Link to="/billing/products/view/123">Product 123</Link>
      <Link to="/billing/products/view/456">Product 456</Link>
    </div>
  );
};

export default ViewProducts;
