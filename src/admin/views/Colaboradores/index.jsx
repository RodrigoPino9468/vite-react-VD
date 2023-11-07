import React from "react";
import { ColaboradoresData } from "../../../../data/datos";
import Colaboarador from "./ColaboradorCard";

export default function Colaboradores() {
  return (
    <div className="container">
      <div className="row my-3">
        <h1 className="text-center fw-bold">Directorio</h1>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
        {ColaboradoresData.map((colaborador, index) => (
          <Colaboarador
            key={index}
            Id={index}
            Nombre={colaborador.nombre}
            Cargo={colaborador.cargo}
            Descripcion={colaborador.descripcion}
            FotoUrl={colaborador.fotografia}
            ContactoUrl={colaborador.linkedin}
          />
        ))}
      </div>
    </div>
  );
}
