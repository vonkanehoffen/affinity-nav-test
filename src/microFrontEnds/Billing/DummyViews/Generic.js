import React from "react";
import Typography from "@material-ui/core/Typography";

const Generic = props => {
  return (
    <div>
      <Typography variant="h1">Generic placeholder view</Typography>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default Generic;
