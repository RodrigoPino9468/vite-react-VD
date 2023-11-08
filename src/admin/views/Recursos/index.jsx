import React from "react";

import { RecursosData2 } from "../../../../data/datos";
import { Link } from "react-router-dom";
import Recurso from "./RecursoCard";

export default function Recursos() {
  return (
    <section className="album py-5 container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
        {RecursosData2.map((articulo, index) => (
          <Recurso
            key={index}
            Id={index}
            Cartegoria={articulo.categoria}
            Titutlo={articulo.titulo}
            Publicado={articulo.publicado}
            UrlDoc={articulo.url}
          />
        ))}
      </div>
    </section>
  );
}
