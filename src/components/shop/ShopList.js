import React from "react";
import Shop from "./Shop";
import classes from "./ShopList.module.css";

const ShopList = (props) => {
  return (
    <>
      <ul className={classes.cards}>
        {props.stickers.map((sticker) => (
          <Shop
            key={sticker.id}
            id={sticker.id}
            image={sticker.image}
            name={sticker.name}
            price={sticker.price}
            text={sticker.text}
          />
        ))}
      </ul>
    </>
  );
};

export default ShopList;
