import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Fiche_logement from "./pages/Fiche_logement";
import Error_404 from "./pages/Error_404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/logement/:id" element={<Fiche_logement />} />
        <Route path="*" element={<Error_404 />} />
        <Route path="/404" element={<Error_404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
