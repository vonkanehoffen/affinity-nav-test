import React from "react";
import { withRouter } from "react-router-dom";

const Breadcrumbs = props => {
  return (
    <div>
      <h4>Breadcrumbs</h4>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default withRouter(Breadcrumbs);
