import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const addItem=()=>{
    props.onAdd(props.item)
  }
  const removeItem=()=>{
    props.onRemove(props.item.id)
  }
  return (
    <>
      <h3>{props.item.name}</h3>
      <li className={classes.item}>
        <div>
          <span className={classes.price}>${props.item.price}</span>
          <span className={classes.amount}>x{props.item.amount}</span>
        </div>
        <div className={classes.btn}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </li>
    </>
  );
};
export default CartItem;
