import React, { Component } from "react";

class Likes extends Component {
  render() {
    const { quotesArray } = this.props;
    let { totalLikes } = this.props;

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
  }
}

export default Likes;
