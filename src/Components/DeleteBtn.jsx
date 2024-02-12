import React from "react";

const DeleteBtn = (props) => {
  const { text, onDeleteClick, id } = props;

  return <button onClick={() => onDeleteClick(id)}>{text}</button>;
};

export default DeleteBtn;
