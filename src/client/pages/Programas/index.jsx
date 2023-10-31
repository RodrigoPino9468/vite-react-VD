import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Vida from "./P_Vida";
import ListaProgramas from "./P_ListaProgramas";
import MujeresConDiscapacidad from "./P_MujeresConDiscapacidad";
import EmprendimientoInclusivo from "./P_EmprendimientoInclusivo";

export default function Index() {
  return (
    <Routes>
      <Route index element={<ListaProgramas />} />
      <Route path="vida" element={<Vida />} />
      <Route path="mujeres-con-discapacidad" element={<MujeresConDiscapacidad />} />
      <Route path="emprendimientos-inclusivos" element={<EmprendimientoInclusivo />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
