import React, { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MarketPlace from "./components/MarketPlace";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/market-place" element={<MarketPlace />} />
      </Routes>
      <Footer />
      <div
        id="SCROLL_TO_BOTTOM"
        className="qhwIj ignore-focus"
        tabIndex={-1}
        role="region"
        aria-label="bottom of page"
      >
        &nbsp;
      </div>
    </>
  );
}

export default App;
