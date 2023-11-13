import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import LayoutAdmin from "./Layout";
import Inicio from "../views/Inicio";
import Recursos from "../views/Recursos";
import Noticias from "../views/Noticias";
import Servicios from "../views/Servicios";
import Programas from "../views/Programas";
import Colaboradores from "../views/Colaboradores";

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
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
