import React from "react";

const Name = (props) => {
  const { character } = props;
  return <p className="character">{character}</p>;
};

export default Name;
