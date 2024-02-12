import React from "react";

const Image = (props) => {
  const { image, character } = props;

  return <img src={image} alt={character}></img>;
};

export default Image;
