import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import { AccesibilidadProvider } from "./contexts/AccesibilidadContext";
import { AdministradorProvider } from "./contexts/AdministradorContext";

import NotFound404 from "./error";
import Clientes from "./client";
import Administradores from "./admin";

export default function Application() {
  const ruta = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ruta]);

  return (
    <Routes>
      <Route path="/*" element={<Clientes />} />
      <Route path="sistema-de-gestion/*" element={<Administradores />} />
      <Route path="not-found" element={<NotFound404 />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <AdministradorProvider>
    <AccesibilidadProvider>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </AccesibilidadProvider>
  </AdministradorProvider>
);
