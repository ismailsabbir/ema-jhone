import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  console.log(props.prod);
  const { img, name, price, ratings } = props.prod;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-detal">
        <p>{name}</p>
        <p className="price">Price:{price}</p>
        <p>Rating:{ratings}</p>
      </div>
      <button onClick={() => props.handler(props.prod)} className="btn">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
