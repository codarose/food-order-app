import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import React, { useContext, useRef, useState } from "react";
import CartContext from "../../store/cart-context";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    //always.current.value - this will point at the input
    //element which is stored in that ref, and then every input
    //element by default has a value property that holds
    //the currently entered value. That value is always a string,
    //even if the input is a number.
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a Valid Amount, 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
