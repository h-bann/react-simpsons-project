import React from "react";

const Search = (props) => {
  return (
    <div className="search-container">
      <label>Search Characters</label>
      <input onInput={props.onInput}></input>
      <button onClick={props.onResetClick}>Reset</button>
    </div>
  );
};

export default Search;
