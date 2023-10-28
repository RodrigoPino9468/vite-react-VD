// Modulos
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Contexto para el tipo de vista que quiera ver los usuarios
import { AccesibilidadProvider } from "./contexts/AccesibilidadContext";

// Componentes
import Layout from "./components/Layout";
import NotFound404 from "./components/Error404";

// Paginas
import Recursos from "./pages/Recursos/index";
import Inicio from "./pages/Inicio/index";
import Noticias from "./pages/Noticias/index";
import Contacto from "./pages/Contacto/index";
import Servicios from "./pages/Servicios/index";
import Programas from "./pages/Programas/index";
import Donaciones from "./pages/Donaciones/index";
import QuienesSomos from "./pages/QuienesSomos/index";

// Hoja de estilos
import "./assets/main.css";

// Funcion de Rutas principal de la App
export function Application() {
  // Posiciona la vista al inicio de cada modulo de la pagina
  const ruta = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ruta]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        {/* Sin subRutas */}
        <Route path="contacto" element={<Contacto />} />
        <Route path="recursos" element={<Recursos />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="servicios" element={<Servicios />} />
        {/* Con subRutas */}
        <Route path="noticias/*" element={<Noticias />} />
        <Route path="programas/*" element={<Programas />} />
        <Route path="donaciones/*" element={<Donaciones />} />
      </Route>
      {/* Pagina de error */}
      <Route path="not-found" element={<NotFound404 />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

// Renderizado en el DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AccesibilidadProvider>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </AccesibilidadProvider>
);
