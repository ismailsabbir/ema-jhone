import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setproduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);
  const [cart, setcart] = useState([]);
  const addToCart = (products) => {
    let newcart = [...cart, products];
    setcart(newcart);
  };

  return (
    <div className="Shop">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            prod={product}
            handler={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart carts={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
