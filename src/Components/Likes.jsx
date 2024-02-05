import React, { Component } from "react";

class Likes extends Component {
  render() {
    const { quotesArray } = this.props;
    let totalLikes = 0;
    quotesArray.forEach((item) => {
      if (!item.toggle) {
        totalLikes++;
      }
    });

    return <h4>Number of quotes liked: {totalLikes}</h4>;
  }
}

export default Likes;
