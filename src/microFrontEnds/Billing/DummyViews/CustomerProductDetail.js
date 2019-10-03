import React from "react";
import Typography from "@material-ui/core/Typography";

const CustomerProductDetail = ({ match }) => {
  return (
    <div>
      <Typography variant="h1">CustomerProductDetail</Typography>
      <h2>
        Customer {match.params.customerId} - product {match.params.productId}
      </h2>
      Stuff here
      <pre>{JSON.stringify(match, null, 2)}</pre>
    </div>
  );
};

export default CustomerProductDetail;
