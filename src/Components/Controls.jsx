import React, { Component } from "react";

class Controls extends Component {
  render() {
    const { text } = this.props;
    return <button>{text}</button>;
  }
}

export default Controls;
