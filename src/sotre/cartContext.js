import React, { createContext, useState } from "react";

export const CartContext = createContext({
  carts: [],
  totalCart: 0,
  addCart: (sticker) => {},
  removeCart: (stickerId) => {},
  isInCart: (stickerId) => {},
});

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addCart(sticker) {
    setCart((previousCart) => {
      return previousCart.concat(sticker);
    });
  }

  function removeCart(stickerId) {
    setCart((previousCart) => {
      return previousCart.filter((sticker) => sticker.id !== stickerId);
    });
  }

  function isInCart(stickerId) {
    return cart.some((sticker) => sticker.id === stickerId);
  }

  const context = {
    carts: cart,
    totalCart: cart.length,
    addCart,
    removeCart,
    isInCart,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}
