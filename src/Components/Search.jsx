import React from "react";

const Search = (props) => {
  return (
    <div className="search-container">
      <label>Search Characters</label>
      <input onInput={props.onSearch}></input>
    </div>
  );
};

export default Search;
