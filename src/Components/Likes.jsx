import React from "react";

const Likes = (props) => {
  const { simpsonsState } = props;
  let { totalLikes } = props;

  simpsonsState.forEach((item) => {
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
