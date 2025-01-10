import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Details from "./pages/Details/Details.jsx";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
