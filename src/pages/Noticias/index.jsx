import {} from "react";
import { Route, Routes } from "react-router-dom";

import Noticiero from './Noticiero'
import Noticia from './Noticia'

export default function Index() {
  return (
    <Routes>
      <Route index element={<Noticiero/>} />
      <Route path=":NoticiaId" element={<Noticia/>} />
    </Routes>
  );
}
