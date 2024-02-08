import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { onDeleteClick, onLikeClick, totalLikes } = this.props;
    return this.props.quotesArray.map((item) => {
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
  }
}

export default Characters;
