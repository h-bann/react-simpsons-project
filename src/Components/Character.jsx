import React from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Controls from "./Controls";

const Character = (props) => {
  const {
    id,
    toggle,
    character,
    characterDirection,
    quote,
    image,
    onDeleteClick,
    onLikeClick,
    totalLikes,
  } = props;

  if (characterDirection === "Right") {
    return (
      <>
        <div className="character-container">
          <div>
            <div className="text-container">
              <Quote quote={quote} />
              <Name character={character} />
            </div>

            <div>
              <Controls
                onDeleteClick={onDeleteClick}
                onLikeClick={onLikeClick}
                totalLikes={totalLikes}
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
        <div className="character-container">
          <div>
            <Image image={image} />
          </div>
          <div className="text-container">
            <Quote quote={quote} />
            <Name character={character} />

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
};

export default Character;
