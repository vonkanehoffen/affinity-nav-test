import React from "react";

const Generic = props => {
  return (
    <div>
      <h1>Generic placeholder view</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default Generic;
