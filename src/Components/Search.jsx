import React, { Component } from "react";

class Search extends Component {
  storeUserInput = (e) => {
    const { userInput } = this.props;
    userInput(e.target.value);
  };

  render() {
    const { onSearchClick } = this.props;

    return (
      <div>
        <label>Search Characters</label>

        <input onChange={this.storeUserInput}></input>

        <button onClick={onSearchClick}>Search</button>
      </div>
    );
  }
}

export default Search;
