import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import LayoutAdmin from "../../components/LayoutAdmin";

import Inicio from "./Inicio";
import Mensajes from "./Mensajes";
import Recursos from "./Recursos";
import Noticias from "./Noticias";
import Servicios from "./Servicios";
import Programas from "./Programas";
import Colaboradores from "./Colaboradores";

export default function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<LayoutAdmin />}>
        <Route index element={<Inicio />} />
        <Route path="recursos/*" element={<Recursos />} />
        <Route path="noticias/*" element={<Noticias />} />
        <Route path="programas/*" element={<Programas />} />
        <Route path="servicios/*" element={<Servicios />} />
        <Route path="colaboradores/*" element={<Colaboradores />} />
        <Route path="mensajes-de-contacto/*" element={<Mensajes />} />
      </Route>
      {/* <Route path="*" element={<Navigate to="/sistema-de-gestion/dashboard" />} /> */}
    </Routes>
  );
}
