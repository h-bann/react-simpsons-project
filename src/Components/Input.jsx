import React from "react";

const Input = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.for}>{props.label}</label>
      <input type={props.type} id={props.id} name={props.name}></input>
    </div>
  );
};

export default Input;
