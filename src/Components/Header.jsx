import React from "react";
import Title from "./Title";
import Search from "./Search";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <header className="header">
      <Nav />
      <Title />
      <Search
        inputRef={props.inputRef}
        onInput={props.onInput}
        onResetClick={props.onResetClick}
      />
    </header>
  );
};

export default Header;
