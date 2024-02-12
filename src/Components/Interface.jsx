import axios from "axios";
import React, { Component } from "react";
import Likes from "./Likes";
import Characters from "./Characters";
import Header from "./Header";

class Interface extends Component {
  state = { totalLikes: 0 };

  componentDidMount() {
    this.getSimpsonsApiData();
  }

  getSimpsonsApiData = async (e) => {
    const data = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character=${
        e ? e : ""
      }`
    );

    const quotes = data.data;

    quotes.forEach((quote, i) => {
      quote.id = i++;
      quote.toggle = false;
    });

    this.setState({ quotesArray: quotes });
  };

  onDeleteClick = (id) => {
    const quotesArray = [...this.state.quotesArray];
    const index = quotesArray.findIndex((item) => item.id === id);
    quotesArray.splice(index, 1);

    this.setState({ quotesArray });
  };

  onSearch = (e) => {
    this.getSimpsonsApiData(e.target.value);
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
    console.log(this.state);
    const { quotesArray, totalLikes } = this.state;

    return this.state.quotesArray ? (
      <>
        <Header onSearch={this.onSearch} />
        <main>
          <Likes quotesArray={quotesArray} totalLikes={totalLikes} />
          <Characters
            quotesArray={quotesArray}
            onDeleteClick={this.onDeleteClick}
            onLikeClick={this.onLikeClick}
          />
        </main>
      </>
    ) : (
      <p>Loading</p>
    );
  }
}

export default Interface;
