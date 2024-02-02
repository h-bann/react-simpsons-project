import React, { Component } from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Controls from "./Controls";

class Character extends Component {
  render() {
    return (
      <div>
        <Name character={this.props.character} />
        <Quote quote={this.props.quote} />
        <Image image={this.props.image} />
        <Controls text="Like" />
        <Controls text="Delete" />
      </div>
    );
  }
}

export default Character;
