import React from "react";

const Likes = (props) => {
  const { quotesArray } = props;
  let { totalLikes } = props;

  quotesArray.forEach((item) => {
    if (item.toggle) {
      totalLikes++;
    }
  });
  return (
    <div className="likes-container">
      <h4>Number of quotes liked: {totalLikes}</h4>
    </div>
  );
};

export default Likes;
