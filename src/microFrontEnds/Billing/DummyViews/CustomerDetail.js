import React from "react";
import Typography from "@material-ui/core/Typography";

const CustomerDetail = props => {
  return (
    <div>
      <Typography variant="h1">Customer detail view</Typography>
      <h2>Customer {props.match.params.customerId}</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default CustomerDetail;
