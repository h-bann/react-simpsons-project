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
    this.setState({ quotesArray: quotes });
  };

  onDeleteClick = () => {
    console.log("This is deleted");
const 
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
