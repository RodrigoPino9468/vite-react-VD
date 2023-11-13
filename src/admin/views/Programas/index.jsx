import {} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Lista from "./P_Lista";
import Agregar from "./P_Agregar";
import Detalles from "./P_Detalles";
import Editar from "./P_Editar";
import Eliminar from "./P_Eliminar";

export default function Programas() {
  return (
    <Routes>
      <Route path="/" element={<Lista />} />
      <Route path="agregar" element={<Agregar />} />
      <Route path=":IdPrograma" element={<Detalles />} />
      <Route path=":IdPrograma/editar" element={<Editar />} />
      <Route path=":IdPrograma/eliminar" element={<Eliminar />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
