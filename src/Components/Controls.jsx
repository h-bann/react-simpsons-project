import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import LikeBtn from "./LikeBtn";

class Controls extends Component {
  render() {
    const { onDeleteClick, onLikeClick } = this.props;
    return (
      <>
        <DeleteBtn text="Delete" onDeleteClick={onDeleteClick} />
        <LikeBtn text="Like" onLikeClick={onLikeClick} />
      </>
    );
  }
}

export default Controls;
