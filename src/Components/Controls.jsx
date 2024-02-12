import React from "react";
import DeleteBtn from "./DeleteBtn";
import LikeBtn from "./LikeBtn";

const Controls = (props) => {
  const { toggle, id, onDeleteClick, onLikeClick, totalLikes } = props;

  return (
    <div className="controls">
      <DeleteBtn text="Delete" onDeleteClick={onDeleteClick} id={id} />
      <LikeBtn
        text="Like"
        onLikeClick={onLikeClick}
        totalLikes={totalLikes}
        id={id}
        toggle={toggle}
      />
    </div>
  );
};

export default Controls;
