import {} from "react";
import { Route, Routes } from "react-router-dom";

import DonarOnline from './DonarOnline'
import Transferencias from './Transferencias'
import OpćionesDonaciones from "./OpcionesDonaciones";

export default function Index() {
  return (
    <Routes>
      <Route index element={<OpćionesDonaciones/>} />
      <Route path="transferencias" element={<Transferencias/>} />
      <Route path="donar-online" element={<DonarOnline/>} />
    </Routes>
  );
}
