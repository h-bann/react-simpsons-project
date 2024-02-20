import React from "react";
import { useState, useEffect } from "react";

const Likes = (props) => {
  const [totalLikes, setTotalLikes] = useState(0);

  const { simpsonsState } = props;

  useEffect(() => {
    let count = 0;
    simpsonsState.forEach((item) => {
      if (item.toggle) {
        count++;
      }
    });
    setTotalLikes(count);
  }, [simpsonsState]);

  return (
    <div className="likes-container">
      <h4>Number of quotes liked: {totalLikes}</h4>
    </div>
  );
};

export default Likes;
