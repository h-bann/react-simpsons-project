import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Likes from "./Likes";
import Characters from "./Characters";
import Header from "./Header";

const Interface = () => {
  const [simpsonsState, setSimpsonsState] = useState("");
  const [totalLikes, setTotalLikes] = useState(0);

  const getSimpsonsApiData = async (e) => {
    const data = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character=${
        e ? e : ""
      }`
    );
    const quotesArray = data.data;

    quotesArray.forEach((quote, i) => {
      quote.id = i++;
      quote.toggle = false;
    });

    setSimpsonsState(quotesArray);
  };

  useEffect(() => {
    getSimpsonsApiData();
  }, []);

  const onSearch = (e) => {
    getSimpsonsApiData(e.target.value);
  };

  const onDeleteClick = (id) => {
    const newSimpsonsState = [...simpsonsState];
    const index = newSimpsonsState.findIndex((item) => item.id === id);
    newSimpsonsState.splice(index, 1);
    setSimpsonsState(newSimpsonsState);
  };

  const onLikeClick = useCallback(
    (id) => {
      const newSimpsonsState = simpsonsState.map((item) => {
        if (item.id === id) {
          return { ...item, toggle: !item.toggle };
        }
        return item;
      });
      return setSimpsonsState(newSimpsonsState);
    },
    [simpsonsState]
  );

  return simpsonsState ? (
    <>
      <Header onSearch={onSearch} />
      <main>
        <Likes simpsonsState={simpsonsState} totalLikes={totalLikes} />
        <Characters
          simpsonsState={simpsonsState}
          onDeleteClick={onDeleteClick}
          onLikeClick={onLikeClick}
        />
      </main>
    </>
  ) : (
    <p>Loading</p>
  );
};

export default Interface;
