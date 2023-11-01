import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Administradores from "./admin/index";
import Clientes from "./client/index";
import NotFound404 from "./error/Error404";

import { AccesibilidadProvider } from "./contexts/AccesibilidadContext";

export default function Application() {
  const ruta = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ruta]);

  return (
    <Routes>
      <Route path="/*"  element={<Clientes />} />
      <Route path="sistema-de-gestion/*" element={<Administradores />} />
      <Route path="not-found" element={<NotFound404/>} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <AccesibilidadProvider>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </AccesibilidadProvider>
);
