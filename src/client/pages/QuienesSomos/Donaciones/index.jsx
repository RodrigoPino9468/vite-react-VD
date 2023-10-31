import {} from "react";
import { Route, Routes, Navigate} from "react-router-dom";

import DonarOnline from './D_DonarOnline'
import Transferencias from './D_Transferencias'
import OpćionesDonaciones from "./D_OpcionesDonaciones";

export default function Index() {
  return (
    <Routes>
      <Route index element={<OpćionesDonaciones/>} />
      <Route path="transferencias" element={<Transferencias/>} />
      <Route path="donar-online" element={<DonarOnline/>} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
