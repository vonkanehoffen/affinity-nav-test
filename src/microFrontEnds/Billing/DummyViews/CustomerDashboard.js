import React from "react";
import Typography from "@material-ui/core/Typography";

const CustomerDashboard = ({ match }) => {
  return (
    <div>
      <Typography variant="h1">Individual customer dashboard</Typography>
      <h2>Customer {match.params.customerId}</h2>
      Stuff here
      <pre>{JSON.stringify(match, null, 2)}</pre>
    </div>
  );
};

export default CustomerDashboard;
