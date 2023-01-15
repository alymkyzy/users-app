import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return(
    <div className={classes.formInput}>
      <label>{props.label}</label>
      <input className={classes.input} {...props} />
    </div>
  )
};

export default Input;
