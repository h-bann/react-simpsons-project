import React, { Component } from "react";
import Character from "./Character";

class FilteredCharacters extends Component {
  render() {
    const { onDeleteClick, onLikeClick } = this.props;

    return this.props.filteredCharacter.map((item) => {
      return (
        <Character
          {...item}
          onDeleteClick={onDeleteClick}
          onLikeClick={onLikeClick}
        />
      );
    });
  }
}

export default FilteredCharacters;
