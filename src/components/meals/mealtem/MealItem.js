import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartItemContext from "../../../store/cart-context";
import { useContext } from "react";
const MealItem = (props) => {
  const cartCtx = useContext(CartItemContext);
  const addToCartHandler = (amount) => {
    
    cartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      price: props.item.price,
      amount: amount,
    });
  };
  return (
    <li className={classes.li}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>${props.item.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAdding={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
