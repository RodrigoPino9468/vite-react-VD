// Modulos
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Paginas
import Inicio from "./pages/Inicio";
import QuienesSomos from "./pages/QuienesSomos";
import Servicios from "./pages/Servicios";
import Programas from "./pages/Programas";
import Noticias from "./pages/Noticias";
import Donaciones from "./pages/Donaciones";
import Contacto from "./pages/Contacto";

// Estilos
import "./assets/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/donaciones" element={<Donaciones />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
