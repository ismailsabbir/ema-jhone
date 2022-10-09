import React from "react";

const Cart = (props) => {
  const { carts } = props;
  return (
    <div>
      <h4>Order Sumary</h4>
      <p>Selected Item: {carts.length}</p>
    </div>
  );
};

export default Cart;
