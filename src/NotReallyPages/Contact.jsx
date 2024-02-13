import React from "react";
import Header from "../Components/Header";
import Input from "../Components/Input";

const Contact = () => {
  return (
    <>
      <Header />
      <Input
        className="suggestionBox"
        for="suggestionBox"
        label="Suggestion Box"
        type="text"
        id="suggestionBox"
        name="suggestionBox"
      />
    </>
  );
};

export default Contact;
