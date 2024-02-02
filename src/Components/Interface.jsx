import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Character from "./Character";

class Interface extends Component {
  render() {
    return this.props.quotesArray.map((item) => {
      console.log(item);

      return <Character key={uuidv4()} {...item} />;
    });
  }
}

export default Interface;
