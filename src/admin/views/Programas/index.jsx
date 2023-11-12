import {} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Programa from "./ProgramaCard";
import { ProgramasData } from "../../../../data/datos";

const ListaProgramas = () => {
  return (
    <div>
      {ProgramasData.map((programa) => (
        <Programa
          key={programa.id}
          Id={programa.id}
          Titulo={programa.NombrePrograma}
          Descripcion={programa.DescripcionPrograma}
          Texto={programa.Informacion}
          ImgUrl={programa.Foto}
        />
      ))}
    </div>
  );
};

const Ver = () => {
  return <h1>Ver </h1>;
};

const Editar = () => {
  return <h1>Editar </h1>;
};

const Eliminar = () => {
  return <h1>Eliminar </h1>;
};

export default function Programas() {
  return (
    <Routes>
      <Route index element={<ListaProgramas />} />
      <Route path=":IdPrograma" element={<Ver />} />
      <Route path=":IdPrograma/editar" element={<Editar />} />
      <Route path=":IdPrograma/eliminar" element={<Eliminar />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
