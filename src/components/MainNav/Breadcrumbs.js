import React from "react";
import { withRouter } from "react-router-dom";

const Breadcrumbs = props => {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default withRouter(Breadcrumbs);
