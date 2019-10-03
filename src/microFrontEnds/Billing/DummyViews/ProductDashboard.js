import React from "react";
import Typography from "@material-ui/core/Typography";

const ProductDashboard = () => {
  return (
    <div>
      <Typography variant="h1">Product Dashboard</Typography>
      {Array(10)
        .fill()
        .map((a, i) => (
          <h2 key={i}>
            Overflow y test.... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusantium ad autem dolorum fuga ipsum iusto
            magnam recusandae tempora ullam, vel. Accusantium at commodi
            consequuntur facere molestias perspiciatis reprehenderit sed, sequi.
          </h2>
        ))}
    </div>
  );
};

export default ProductDashboard;
