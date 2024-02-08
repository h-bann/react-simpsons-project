import React, { Component } from "react";

class Name extends Component {
  render() {
    const { character } = this.props;

    return <p className="character">{character}</p>;
  }
}

export default Name;
