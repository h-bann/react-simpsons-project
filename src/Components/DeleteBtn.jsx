import React, { Component } from "react";

class DeleteBtn extends Component {
  render() {
    const { text, onDeleteClick } = this.props;
    return <button onClick={onDeleteClick}>{text}</button>;
  }
}

export default DeleteBtn;
