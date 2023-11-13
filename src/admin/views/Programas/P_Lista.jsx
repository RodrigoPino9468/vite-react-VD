import { useState } from "react";
import Programa from "./P_Card";
import { ProgramasData } from "../../../../data/datos";

import Filtro from "../../components/Filtro";
import FiltroOption from "../../components/FiltroOption";

export default function ProgramasLista() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroProgramas, setFiltroProgramas] = useState({
    categoria: null,
    publicado: null,
  });
  const Opciones = {
    categoria: [
      { texto: "Todo", valor: "default" },
      { texto: "Recientes", valor: "reciente" },
      { texto: "Antiguas", valor: "antiguas" },
    ],
    publicado: [
      { texto: "Todo", valor: "default" },
      { texto: "Fundación", valor: "fundacion" },
      { texto: "Externos", valor: "externos" },
    ],
  };

  const handleFiltroProgramas = (evento) => {
    const { filtroAtributo, filtroValor } = evento.target.dataset;

    if (filtroValor === "default") {
      setFiltroProgramas({
        ...filtroProgramas,
        [filtroAtributo]: null,
      });
    } else {
      setFiltroProgramas({
        ...filtroProgramas,
        [filtroAtributo]: filtroValor,
      });
    }
  };

  return (
    <>
      {/* FILTRO NAVBAR */}
      <Filtro NewTitle={"Añadir programa"}>
        <FiltroOption
          Titulo={"Categorias"}
          Atributo={"categoria"}
          Opciones={Opciones.categoria}
          Filtro={filtroProgramas}
          HandleFiltro={handleFiltroProgramas}
        />
        <FiltroOption
          Titulo={"Publicado"}
          Atributo={"publicado"}
          Opciones={Opciones.publicado}
          Filtro={filtroProgramas}
          HandleFiltro={handleFiltroProgramas}
        />
      </Filtro>

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
    </>
  );
}
