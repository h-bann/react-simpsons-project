import React, { Component } from "react";

class DeleteBtn extends Component {
  render() {
    const { text, onDeleteClick, id } = this.props;
    return <button onClick={() => onDeleteClick(id)}>{text}</button>;
  }
}

export default DeleteBtn;
