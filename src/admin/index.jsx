import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import "../assets/admin.css";

export default function Administradores() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
