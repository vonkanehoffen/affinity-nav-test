import React from "react";

const ProductDetail = props => {
  return (
    <div>
      Product Detail
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default ProductDetail;
