import React, { Component } from "react";
import logo from "../logo.webp";

class Title extends Component {
  render() {
    return (
      <div className="title">
        <img className="logo" src={logo}></img>
      </div>
    );
  }
}

export default Title;
