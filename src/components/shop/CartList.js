import React from "react";
import Cart from "./Cart";
import classes from "./CartList.module.css";

const CartList = (props) => {
  return (
    <>
      <table className={classes.table}>
        <tr className={classes.th}>
          <th>Items</th>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
        </tr>
        {props.stickers.map((sticker) => (
          <Cart
            key={sticker.id}
            id={sticker.id}
            image={sticker.image}
            name={sticker.name}
            price={sticker.price}
          />
        ))}
      </table>
    </>
  );
};

export default CartList;
