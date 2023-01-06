import classes from "./MealItemForm.module.css";
import Input from "../../ui/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  const inputRef = useRef();

  const addToCart = (e) => {
    e.preventDefault();
    const enteredAmount = +inputRef.current.value;
    enteredAmount&&props.onAdding(enteredAmount);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          max: "15",
          min: "1",
          step: "1",
          defaultValue: "1",
          id: "amount",
        }}
        ref={inputRef}
      />
      <button onClick={addToCart}>+Add</button>
    </form>
  );
};
export default MealItemForm;
