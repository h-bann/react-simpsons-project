import React from "react";

const Search = (props) => {
  return (
    <div className="search-container">
      <label>Search Characters</label>
      <input onInput={props.onSearch}></input>
      <button onClick={props.onResetClick}>Reset</button>
    </div>
  );
};

export default Search;
