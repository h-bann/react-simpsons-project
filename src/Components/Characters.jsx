import React from "react";
import Character from "./Character";

const Characters = (props) => {
  const { onDeleteClick, onLikeClick, totalLikes } = props;

  return props.simpsonsState.map((item) => {
    return (
      <Character
        key={item.id}
        {...item}
        onDeleteClick={onDeleteClick}
        onLikeClick={onLikeClick}
        totalLikes={totalLikes}
      />
    );
  });
};

export default Characters;
