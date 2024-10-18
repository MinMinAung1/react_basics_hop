import React, { useContext } from "react";
import classes from "./Shop.module.css";
import { FaCartPlus, FaCheck } from "react-icons/fa6";
import { CartContext } from "../../sotre/cartContext";

const Shop = (props) => {
  const cartContext = useContext(CartContext);
  const cart = cartContext.isInCart(props.id);

  function CartHandler() {
    if (cart) {
      cartContext.removeCart(props.id);
    } else {
      cartContext.addCart({
        id: props.id,
        name: props.name,
        image: props.image,
        price: props.price,
        text: props.text,
      });
    }
  }

  return (
    <li className={classes.cards_item}>
      <div className={classes.card}>
        <div className={classes.card_image}>
          <img src={props.image} alt="mixed vegetable salad in a mason jar." />
          <span className={classes.card_price}>
            <span>$</span>
            {props.price}
          </span>
          <button className={classes.actions} onClick={CartHandler}>
            {cart ? <FaCheck /> : <FaCartPlus />}
          </button>
        </div>
        <div className={classes.card_content}>
          <h2 className={classes.card_title}>{props.name}</h2>
          <div className={classes.card_text}>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Shop;
