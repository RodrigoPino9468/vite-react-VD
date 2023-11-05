import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Navegacion from "./components/Navegacion";

// import RutasProtegidas from "./components/RutasProtegidas";
// import { useAdministrador } from "../contexts/AdministradorContext";

import "../assets/admin.css";

export default function Administradores() {
  return (
    <Routes>
      <Route path="/" element={<Navegacion />}>
        <Route index element={<Navigate to={"login"} />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
      </Route>
    </Routes>
  );
}
