import React from "react";
import Title from "./Title";
import Search from "./Search";

const Header = (props) => {
  return (
    <header className="header">
      <Title />
      <Search onSearch={props.onSearch} />
    </header>
  );
};

export default Header;
