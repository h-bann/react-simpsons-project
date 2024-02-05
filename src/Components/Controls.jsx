import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import LikeBtn from "./LikeBtn";

class Controls extends Component {
  render() {
    const { toggle, id, onDeleteClick, onLikeClick } = this.props;
    return (
      <>
        <DeleteBtn text="Delete" onDeleteClick={onDeleteClick} id={id} />
        <LikeBtn
          text="Like"
          onLikeClick={onLikeClick}
          id={id}
          toggle={toggle}
        />
      </>
    );
  }
}

export default Controls;
