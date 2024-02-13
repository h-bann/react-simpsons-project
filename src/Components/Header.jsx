import React from "react";
import Title from "./Title";
import Search from "./Search";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <header className="header">
      <Nav />
      <Title />
      <Search onSearch={props.onSearch} />
    </header>
  );
};

export default Header;
