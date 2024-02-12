import React from "react";

const LikeBtn = (props) => {
  const { text, toggle, onLikeClick, id } = props;

  return (
    <button className={toggle ? "liked" : ""} onClick={() => onLikeClick(id)}>
      {text}
    </button>
  );
};

export default LikeBtn;
