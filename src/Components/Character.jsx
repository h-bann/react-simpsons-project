import React, { Component } from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Controls from "./Controls";

class Character extends Component {
  render() {
    const { onDeleteClick, onLikeClick } = this.props;
    return (
      <div>
        <Name character={this.props.character} />
        <Quote quote={this.props.quote} />
        <Image image={this.props.image} />
        <Controls onDeleteClick={onDeleteClick} onLikeClick={onLikeClick} />
      </div>
    );
  }
}

export default Character;
