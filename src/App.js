import axios from "axios";
import React, { Component } from "react";
import Interface from "./Components/Interface";
import Search from "./Components/Search";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getSimpsonsApiData();
  }

  getSimpsonsApiData = async () => {
    const data = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    const quotes = data.data;
    for (let i = 0; i < quotes.length; i++) {
      quotes[i].id = i + 1;
    }

    this.setState({ quotesArray: quotes });
  };

  onDeleteClick = (id) => {
    const quotesArray = [...this.state.quotesArray];
    const index = quotesArray.findIndex((item) => item.id === id);
    console.log(index);
    quotesArray.splice(index, 1);

    this.setState({ quotesArray });
  };

  onLikeClick = () => {};

  userInput = (searchValue) => {
    this.setState({ userInput: searchValue });
  };

  onSearchClick = () => {
    const quotesArray = [...this.state.quotesArray];
    const filteredCharacter = quotesArray.filter((userInput) => {
      return userInput.character.toLowerCase().includes(this.state.userInput);
    });
    this.setState({ quotesArray: filteredCharacter });
  };

  render() {
    // console.log(this.state);
    return this.state.quotesArray ? (
      <>
        <Search onSearchClick={this.onSearchClick} userInput={this.userInput} />
        <Interface
          quotesArray={this.state.quotesArray}
          onDeleteClick={this.onDeleteClick}
          onLikeClick={this.onLikeClick}
        />
      </>
    ) : (
      <p>Loading</p>
    );
  }
}

export default App;
