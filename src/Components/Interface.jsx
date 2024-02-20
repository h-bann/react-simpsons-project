import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Likes from "./Likes";
import Characters from "./Characters";
import Header from "./Header";
import { storeInLocal, getFromLocal } from "../storage";

const Interface = () => {
  const [simpsonsState, setSimpsonsState] = useState("");
  const [characterName, setCharacterName] = useState(
    getFromLocal("searchedCharacter") ? getFromLocal("searchedCharacter") : ""
  );
  const [totalLikes] = useState(0);

  const getSimpsonsApiData = useCallback(async () => {
    const data = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character=${characterName}`
    );

    const quotesArray = data.data;

    quotesArray.forEach((quote, i) => {
      quote.id = i++;
      quote.toggle = false;
    });

    setSimpsonsState(quotesArray);
  }, [characterName]);

  useEffect(() => {
    getSimpsonsApiData();
  }, [getSimpsonsApiData]);

  const onInput = (e) => {
    setCharacterName(e.target.value);
    storeInLocal("searchedCharacter", e.target.value);
  };

  const onResetClick = useCallback(() => {
    setCharacterName("");
    localStorage.clear();
    getSimpsonsApiData();
  }, [getSimpsonsApiData]);

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
      <Header onInput={onInput} onResetClick={onResetClick} />
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
