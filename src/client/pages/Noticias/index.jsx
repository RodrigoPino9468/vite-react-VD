import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { NoticiasDataProvider } from "../../../contexts/NoticiasDataContext";

import Noticiero from "./N_Noticiero";
import Noticia from "./N_Noticia";

export default function Index() {
  return (
    <Routes>
      <Route element={<NoticiasDataProvider />}>
        <Route index element={<Noticiero />} />
        <Route path=":NoticiaUrl" element={<Noticia />} />
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
