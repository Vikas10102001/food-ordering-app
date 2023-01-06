import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [cartBtnBump, setCartBtnBump] = useState(false);
  
  useEffect(() => {
    if(cartCtx.totalAmount===0)
    return
    setCartBtnBump(true);
     const bumpTime = setTimeout(() => {
      setCartBtnBump(false);
    }, 200);
    return () => {
      clearTimeout(bumpTime);
    };
  }, [cartCtx.totalAmount]);
  const numberOfItems = cartCtx.items.reduce((curVal, item) => {
    return curVal + item.amount;
  }, 0);

  return (
    <button
      className={`${classes.button} ${cartBtnBump ? classes.bump : ""}`}
      onClick={props.onOpen}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};
export default HeaderCartButton;
