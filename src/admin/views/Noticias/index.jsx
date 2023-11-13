import {} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Lista from "./N_Lista";
import Agregar from './N_Agregar'
import Detalles from './N_Detalles'
import Editar from './N_Editar'
import Eliminar from './N_Eliminar'

export default function Noticias() {
  return (
    <Routes>
      <Route path="/" element={<Lista />} />
      <Route path="agregar" element={<Agregar />} />
      <Route path=":IdNoticia" element={<Detalles />} />
      <Route path=":IdNoticia/editar" element={<Editar />} />
      <Route path=":IdNoticia/eliminar" element={<Eliminar />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
