import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <label>Search Characters</label>
        <input onInput={this.props.onSearch}></input>
      </div>
    );
  }
}

export default Search;
