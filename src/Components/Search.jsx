import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <>
        <div>
          <label>Search Characters</label>

          <input onInput={this.props.onSearch} placeholder="Search"></input>
        </div>
      </>
    );
  }
}

export default Search;
