import {} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Lista from "./C_Lista";
import Agregar from "./C_Agregar";
import Detalles from "./C_Detalles";
import Editar from "./C_Editar";
import Eliminar from "./C_Eliminar";

export default function Colaboradores() {
  return (
    <Routes>
      <Route index element={<Lista />} />
      <Route path="agregar" element={<Agregar />} />
      <Route path=":IdColaborador" element={<Detalles />} />
      <Route path=":IdColaborador/editar" element={<Editar />} />
      <Route path=":IdColaborador/eliminar" element={<Eliminar />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
