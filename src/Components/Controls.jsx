import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import LikeBtn from "./LikeBtn";

class Controls extends Component {
  render() {
    const { toggle, id, onDeleteClick, onLikeClick, totalLikes } = this.props;
    return (
      <>
        <DeleteBtn text="Delete" onDeleteClick={onDeleteClick} id={id} />
        <LikeBtn
          text="Like"
          onLikeClick={onLikeClick}
          totalLikes={totalLikes}
          id={id}
          toggle={toggle}
        />
      </>
    );
  }
}

export default Controls;
