import {} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Noticias from "./N_Noticiero";
import Noticia from "./N_Noticia";

export default function Index() {
  return (
    <Routes>
      <Route index element={<Noticias />} />
      <Route path=":NoticiaId" element={<Noticia />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
