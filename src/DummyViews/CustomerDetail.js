import React from "react";

const CustomerDetail = props => {
  return (
    <div>
      <h1>Customer detail view</h1>
      <h2>Customer {props.match.params.customerId}</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default CustomerDetail;
