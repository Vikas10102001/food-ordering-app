import Modal from "../ui/Modal";
import CartItemContext from "../../store/cart-context";
import { useContext } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartItemContext);
  const onAddHander=(item)=>{
     ctx.addItem({...item,amount:1})
  }
  const onRemoveHandler=(id)=>{
    ctx.removeItem(id)
  }
  const noOrder = ctx.items.length === 0;
  const CartItems = ctx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={{
          id:item.id,
          name: item.name,
          amount: item.amount,
          price: item.price.toFixed(2),
        }}
        onAdd={onAddHander}
        onRemove={onRemoveHandler}
      ></CartItem>
    );
  });
  return (
    <Modal className={classes.cart}>
      <div className={classes.overflow}>{CartItems}</div>
      <div className={classes.totalamount}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount}</span>
      </div>
      <div className={classes.btns}>
        <button onClick={props.onClose} className={classes.close}>
          Close
        </button>
        {!noOrder && <button className={classes.order}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
