import {} from "react";
import { Route, Routes, Navigate} from "react-router-dom";

import Noticiero from './Noticiero'
import Noticia from './Noticia'

export default function Index() {
  return (
    <Routes>
      <Route index element={<Noticiero/>} />
      <Route path=":NoticiaId" element={<Noticia/>} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
