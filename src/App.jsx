import {} from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound404 from "./components/Error404";

import Inicio from "./pages/Inicio/index";
import Noticias from "./pages/Noticias/index";
import Contacto from "./pages/Contacto/index";
import Servicios from "./pages/Servicios/index";
import Programas from "./pages/Programas/index";
import Donaciones from "./pages/Donaciones/index";
import QuienesSomos from "./pages/QuienesSomos/index";

import "./assets/main.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="programas" element={<Programas />} />
        <Route path="donaciones" element={<Donaciones />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}
