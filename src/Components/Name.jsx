import React, { Component } from "react";

class Name extends Component {
  render() {
    const { character } = this.props;

    return <p>{character} says:</p>;
  }
}

export default Name;
