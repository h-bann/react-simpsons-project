import axios from "axios";
import React, { Component } from "react";
import Interface from "./Components/Interface";
import Search from "./Components/Search";
import Likes from "./Components/Likes";

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
      quotes[i].toggle = "false";
    }

    this.setState({ quotesArray: quotes });
  };

  onDeleteClick = (id) => {
    const quotesArray = [...this.state.quotesArray];
    const index = quotesArray.findIndex((item) => item.id === id);
    quotesArray.splice(index, 1);

    this.setState({ quotesArray });
  };

  onFilter = (searchValue) => {
    const filteredCharacter = this.state.quotesArray.filter((userInput) => {
      return userInput.character.toLowerCase().includes(searchValue);
    });
    this.setState({ quotesArray: filteredCharacter });
  };

  onLikeClick = (id) => {
    const quotesArray = [...this.state.quotesArray];
    const newQuotesArray = quotesArray.map((item) => {
      if (item.id === id) {
        return { ...item, toggle: !item.toggle };
      }
      return item;
    });

    this.setState({ quotesArray: newQuotesArray });
  };

  render() {
    console.log(this.state.quotesArray);
    return this.state.quotesArray ? (
      <>
        <Search onFilter={this.onFilter} />
        <Likes quotesArray={this.state.quotesArray} />
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
