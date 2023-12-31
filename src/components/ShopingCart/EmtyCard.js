import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <>
      <h1>Your Cart is Empty...</h1>
      <Link to="/shop">
        <button className="btn btn-dark">Shop Now</button>
      </Link>
    </>
  );
}

export default EmptyCart;
