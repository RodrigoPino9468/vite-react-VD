import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "../assets/client.css";
import Layout from "./components/Layout";

import Inicio from "./pages/Inicio";
import Recursos from "./pages/Recursos";
import Noticias from "./pages/Noticias";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import Programas from "./pages/Programas";
import Donaciones from "./pages/Donaciones";
import QuienesSomos from "./pages/QuienesSomos";

export default function Clientes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="recursos" element={<Recursos />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="noticias/*" element={<Noticias />} />
        <Route path="programas/*" element={<Programas />} />
        <Route path="donaciones/*" element={<Donaciones />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
