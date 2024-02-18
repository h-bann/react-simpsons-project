import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import Likes from "./Likes";
import Characters from "./Characters";
import Header from "./Header";
import { storeInLocal, getFromLocal } from "../storage";

const Interface = () => {
  const [simpsonsState, setSimpsonsState] = useState("");
  const [totalLikes] = useState(0);

  const getSimpsonsApiData = useCallback(async () => {
    const data = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character=${
        getFromLocal("searchedCharacter")
          ? getFromLocal("searchedCharacter")
          : ""
      }`
    );
    const quotesArray = data.data;

    quotesArray.forEach((quote, i) => {
      quote.id = i++;
      quote.toggle = false;
    });

    setSimpsonsState(quotesArray);
  }, []);

  useEffect(() => {
    getSimpsonsApiData();
  }, [getSimpsonsApiData]);

  const onSearch = (e) => {
    getSimpsonsApiData(e.target.value);
    storeInLocal("searchedCharacter", e.target.value);
  };

  const onResetClick = () => {
    localStorage.clear();
    getSimpsonsApiData();
  };

  const onDeleteClick = useCallback(
    (id) => {
      const newSimpsonsState = [...simpsonsState];
      const index = newSimpsonsState.findIndex((item) => item.id === id);
      newSimpsonsState.splice(index, 1);
      setSimpsonsState(newSimpsonsState);
    },
    [simpsonsState]
  );

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
      <Header onSearch={onSearch} onResetClick={onResetClick} />
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
