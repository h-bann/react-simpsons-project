import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Character from "./Character";

class Interface extends Component {
  render() {
    console.log(this.props);
    const { onDeleteClick, onLikeClick } = this.props;

    return this.props.quotesArray.map((item) => {
      return (
        <Character
          {...item}
          onDeleteClick={onDeleteClick}
          onLikeClick={onLikeClick}
        />
      );
    });
  }
}

export default Interface;
