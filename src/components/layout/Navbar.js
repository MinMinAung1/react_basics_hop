import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { FaCartShopping, FaUserLarge } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../sotre/cartContext";
import { Badge } from "react-bootstrap";

function Navbar() {
  const cartContext = useContext(CartContext);

  let count = 0;

  if(cartContext.totalCart === 0){
    count = ''
  }else{
    count = cartContext.totalCart
  }

  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14boHXrJLruvjzSwTwdrmjhZfctVXL1gFlw&s"
        alt="logo"
      />
      {/* <nav> */}
      <ul>
        <li>
          <Link className={classes.tran} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={classes.tran} to="/search">
            <BsSearch />
          </Link>
        </li>
        <li>
          <Link className={classes.tran} to="/user">
            <FaUserLarge />
          </Link>
        </li>
        <li>
          <Link className={classes.tran} to="/cart">
            <FaCartShopping />
            {<span className={classes.cart_count}>{count}</span>}
          </Link>
        </li>
      </ul>
      {/* </nav> */}
    </header>
  );
}
export default Navbar;
