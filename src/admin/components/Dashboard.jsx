import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Menu from "./Menu";

export default function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route index element={<h1>Inicio</h1>} />
        <Route path="recursos" element={<h1>recursos</h1>} />
        <Route path="noticias" element={<h1>noticias</h1>} />
        <Route path="programas" element={<h1>programas</h1>} />
        <Route path="servicios" element={<h1>servicios</h1>} />
        <Route path="colaboradores" element={<h1>colaboradores</h1>} />
        <Route path="mensajes-de-contacto" element={<h1>mensajes de contacto</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/sistema-de-gestion/dashboard" />} />
    </Routes>
  );
}
