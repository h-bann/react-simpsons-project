import React, { Component } from "react";

class LikeBtn extends Component {
  render() {
    const { text, toggle, onLikeClick, id } = this.props;
    return (
      <button
        className={!toggle ? "liked" : null}
        onClick={() => onLikeClick(id)}
      >
        {text}
      </button>
    );
  }
}

export default LikeBtn;
