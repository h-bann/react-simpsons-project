import React, { Component } from "react";

class Search extends Component {
  storeUserInput = (e) => {
    const { onFilter } = this.props;
    onFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <label>Search Characters</label>

        <input onChange={this.storeUserInput}></input>
      </div>
    );
  }
}

export default Search;
