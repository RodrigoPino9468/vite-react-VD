import {} from "react";
import { Route, Routes } from "react-router-dom";

import ListaProgramas from './ListaProgramas'
import Programa from './Programa'

export default function Index() {
  return (
    <Routes>
      <Route index element={<ListaProgramas/>} />
      <Route path=":ProgramaId" element={<Programa/>} />
    </Routes>
  );
}