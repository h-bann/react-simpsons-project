import React, { Component } from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Controls from "./Controls";

class Character extends Component {
  render() {
    const {
      toggle,
      id,
      character,
      characterDirection,
      quote,
      image,
      onDeleteClick,
      onLikeClick,
    } = this.props;

    if (characterDirection === "Right") {
      return (
        <>
          <div key={id} className="character-container ">
            <div>
              <Name character={character} />
              <Quote quote={quote} />
              <div>
                <Controls
                  onDeleteClick={onDeleteClick}
                  onLikeClick={onLikeClick}
                  id={id}
                  toggle={toggle}
                />
              </div>
            </div>
            <div>
              <Image image={image} />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div key={id} className="character-container ">
            <div>
              <Image image={image} />
            </div>
            <div>
              <Name character={character} />
              <Quote quote={quote} />
              <div>
                <Controls
                  onDeleteClick={onDeleteClick}
                  onLikeClick={onLikeClick}
                  id={id}
                  toggle={toggle}
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Character;
