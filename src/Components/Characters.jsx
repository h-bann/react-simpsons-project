import React, { Component } from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Controls from "./Controls";

class Character extends Component {
  render() {
    const { toggle, id, character, quote, image, onDeleteClick, onLikeClick } =
      this.props;
    console.log(toggle);

    return (
      <div key={id}>
        <Name character={character} />
        <Quote quote={quote} />
        <Image image={image} />
        <Controls
          onDeleteClick={onDeleteClick}
          onLikeClick={onLikeClick}
          id={id}
          toggle={toggle}
        />
      </div>
    );
  }
}

export default Character;
