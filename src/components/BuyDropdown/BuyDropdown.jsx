import React from "react";
import axios from "axios";
import getProductClubs from "./App";

function ProductList(props) {
  return (
    <div>
      {props.items.map((item) => (
        <Item key={product.id} item={item} />
      ))}
    </div>
  );
}

export default ProductsList;