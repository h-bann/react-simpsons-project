import React from "react";

const Quote = (props) => {
  const { quote } = props;
  return <p className="quote">"{quote}"</p>;
};

export default Quote;
