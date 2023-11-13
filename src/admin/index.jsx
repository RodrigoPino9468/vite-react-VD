import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RutasProtegidas from "./components/RutasPrivadas";
import "../assets/admin.css";

export default function Administradores() {
  return (
    <Routes>
      <Route index element={<Navigate to={"login"} replace />} />
      <Route path="login" element={<Login />} />

      {/* Rutas Privadas */}
      <Route element={<RutasProtegidas />}>
        <Route path="dashboard/*" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
