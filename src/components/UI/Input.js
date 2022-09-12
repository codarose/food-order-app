import styles from "./Input.module.css";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* adding the {...props.input} ensures that all of the 
      props in input are added as key value pairs
      as props to input */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
