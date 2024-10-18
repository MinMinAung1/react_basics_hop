import React from "react";
import classes from "./Cart.module.css";
import { TiMinus, TiPlus } from "react-icons/ti";

const Cart = (props) => {
  return (
    <>
      <tr>
        <td>
          <img src={props.image} alt="mixed vegetable salad in a mason jar." />
        </td>
        <td>
          <h3>{props.name}</h3>
        </td>
        <td>
          <p>${props.price}</p>
        </td>
        <td>
          <TiPlus className={classes.plus} />
          <input value={1} className={classes.count} />
          <TiMinus className={classes.minus} />
        </td>
      </tr>
    </>
  );
};

export default Cart;
