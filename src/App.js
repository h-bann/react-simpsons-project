import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./NotReallyPages/Contact";
import About from "./NotReallyPages/About";
import Error from "./NotReallyPages/Error";
import Home from "./NotReallyPages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
