import {} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Lista from "./S_Lista";
import Agregar from "./S_Agregar";
import Detalles from "./S_Detalles";
import Editar from "./S_Editar";
import Eliminar from "./S_Eliminar";

export default function Servicios() {
  return (
    <Routes>
      <Route path="/" element={<Lista />} />
      <Route path="agregar" element={<Agregar />} />
      <Route path=":IdServicio" element={<Detalles />} />
      <Route path=":IdServicio/editar" element={<Editar />} />
      <Route path=":IdServicio/eliminar" element={<Eliminar />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
