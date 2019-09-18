import React from "react";

const ProductDashboard = () => {
  return (
    <div>
      <h1>Product Dashboard</h1>
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
