import React from "react";
import "./Input.css";

const Input = (props) => {
  return(
    <div className="form-input">
      <label>{props.label}</label>
      <input className="input" {...props} />
    </div>
  )
};

export default Input;
