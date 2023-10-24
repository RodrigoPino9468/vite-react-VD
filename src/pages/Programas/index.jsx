import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ListaProgramas from "./ListaProgramas";
import Programa from "./Programa";

export default function Index() {
  return (
    <Routes>
      <Route index element={<ListaProgramas />} />
      <Route path="vida" element={<Programa />} />
      <Route path="mujeres-con-discapacidad" element={<Programa />} />
      <Route path="emprendimientos-inclusivos" element={<Programa />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
