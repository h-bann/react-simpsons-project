import React, { Component } from "react";

class LikeBtn extends Component {
  render() {
    const { text, onLikeClick } = this.props;
    return <button onClick={onLikeClick}>{text}</button>;
  }
}

export default LikeBtn;
