import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
