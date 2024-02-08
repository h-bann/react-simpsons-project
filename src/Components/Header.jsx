import React, { Component } from "react";
import Title from "./Title";
import Search from "./Search";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Title />
        <Search onSearch={this.onSearch} />
      </header>
    );
  }
}

export default Header;
