import {} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Lista from "./R_Lista";
import Agregar from "./R_Agregar";
import Detalles from "./R_Detalles";
import Editar from "./R_Editar";
import Eliminar from "./R_Eliminar";

export default function Recursos() {
  return (
    <Routes>
      <Route path="/" element={<Lista />} />
      <Route path="agregar" element={<Agregar />} />
      <Route path=":IdRecurso" element={<Detalles />} />
      <Route path=":IdRecurso/editar" element={<Editar />} />
      <Route path=":IdRecurso/eliminar" element={<Eliminar />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
