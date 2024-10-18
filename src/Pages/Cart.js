import React, { useContext } from "react";
import CartList from "../components/shop/CartList";
import { CartContext } from "../sotre/cartContext";
import { BsFillCartXFill } from "react-icons/bs";

const Cart = () => {
  const cartContext = useContext(CartContext);

  let content = "";

  if (cartContext.carts === 0) {
    content = <BsFillCartXFill />;
  } else {
    content = <CartList stickers={cartContext.carts} />;
  }

  return <div>{content}</div>;
};

export default Cart;
