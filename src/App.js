import axios from "axios";
import React, { Component } from "react";
import Interface from "./Components/Interface";

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

  onLikeClick = () => {
    console.log("This is liked");
  };

  render() {
    return this.state.quotesArray ? (
      <>
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
