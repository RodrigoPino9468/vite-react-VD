import "./assets/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PaginaInicio from "./Components/PaginaInicio";
import SecondComponent from "./Components/QuienesSomos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/second" element={<SecondComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
