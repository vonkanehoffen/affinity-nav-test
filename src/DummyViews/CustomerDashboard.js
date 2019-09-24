import React from "react";

const CustomerDashboard = ({ match }) => {
  return (
    <div>
      <h1>Individual customer dashboard</h1>
      <h2>Customer {match.params.customerId}</h2>
      Stuff here
    </div>
  );
};

export default CustomerDashboard;
