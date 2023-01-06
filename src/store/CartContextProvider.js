import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCart = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  let updatedItems = state.items;
  let updatedTotalAmount = state.totalAmount;
  if (action.type === "ADD") {
    updatedTotalAmount += action.item.amount * action.item.price;

    const updateItemIndex = updatedItems.findIndex(
      (element) => element.id === action.item.id
    );
    if (updateItemIndex !== -1) {
      updatedItems[updateItemIndex] = {
        ...updatedItems[updateItemIndex],
        amount: updatedItems[updateItemIndex].amount + action.item.amount,
      };
    } else updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: +updatedTotalAmount.toFixed(2),
    };
  } else if (action.type === "REMOVE") {
    const updateItemIndex = updatedItems.findIndex(
      (element) => element.id === action.id
    );
    if (updateItemIndex !== -1) {
      updatedTotalAmount -= updatedItems[updateItemIndex].price;
      if (updatedItems[updateItemIndex].amount === 1) 
        updatedItems = updatedItems.filter((item) => {
          return item !== updatedItems[updateItemIndex];
        });
       else
        updatedItems[updateItemIndex] = {
          ...updatedItems[updateItemIndex],
          amount: updatedItems[updateItemIndex].amount - 1,
        };
    }
    return {
      items: updatedItems,
      totalAmount: +updatedTotalAmount.toFixed(2),
    };
  }
  return defaultCart;
};
const CartContextProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });
  const addItemToCartHandler = (item) => {
    cartDispatch({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    cartDispatch({ type: "REMOVE", id: id });
  };

  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  // console.log(contextValue.items);
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
