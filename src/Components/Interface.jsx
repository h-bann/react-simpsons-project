import React, { Component } from "react";
import Character from "./Characters";

class Interface extends Component {
  render() {
    const { onDeleteClick, onLikeClick, totalLikes } = this.props;

    return this.props.quotesArray.map((item) => {
      return (
        <div className="container">
          <Character
            {...item}
            onDeleteClick={onDeleteClick}
            onLikeClick={onLikeClick}
            totalLikes={totalLikes}
          />
        </div>
      );
    });
  }
}

export default Interface;
