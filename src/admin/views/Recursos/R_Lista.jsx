import { useState } from "react";
import { RecursosData2 } from "../../../../data/datos";

import Filtro from "../../components/Filtro";
import FiltroOption from "../../components/FiltroOption";

import Recurso from "./R_Card";

export default function RecursosLista() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroRecursos, setFiltradoRecursos] = useState({
    publicado: null,
    categoria: null,
  });

  const Opciones = {
    publicado: [
      { texto: "Todo", valor: "default" },
      { texto: "Recientes", valor: "reciente" },
      { texto: "Antiguas", valor: "antiguas" },
    ],
    categoria: [
      { texto: "Todo", valor: "default" },
      { texto: "Fundación", valor: "fundacion" },
      { texto: "Externos", valor: "externos" },
    ],
  };

  const handleFiltroRecursos = (evento) => {
    const { filtroAtributo, filtroValor } = evento.target.dataset;

    if (filtroValor === "default") {
      setFiltradoRecursos({
        ...filtroRecursos,
        [filtroAtributo]: null,
      });
    } else {
      setFiltradoRecursos({
        ...filtroRecursos,
        [filtroAtributo]: filtroValor,
      });
    }
  };

  return (
    <>
      {/* FILTRO NAVBAR */}

      <Filtro NewTitle={"Subir Recurso"}>
        <FiltroOption
          Titulo={"Categorias"}
          Atributo={"categoria"}
          Opciones={Opciones.categoria}
          Filtro={filtroRecursos}
          HandleFiltro={handleFiltroRecursos}
        />
        <FiltroOption
          Titulo={"Publicados"}
          Atributo={"publicado"}
          Opciones={Opciones.publicado}
          Filtro={filtroRecursos}
          HandleFiltro={handleFiltroRecursos}
        />
      </Filtro>

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
    </>
  );
}
