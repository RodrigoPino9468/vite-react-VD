import { useState } from "react";
import Colaboarador from "./C_Card";

import Filtro from "../../components/Filtro";
import FiltroOption from "../../components/FiltroOption";

import { ColaboradoresData } from "../../../../data/datos";

export default function ColaboradoresLista() {
  const [filtroColaboradores, setFiltradoColaboradores] = useState({
    cargo: null,
    ingreso: null,
  });

  const handleFiltroColaboradores = (evento) => {
    const { filtroAtributo, filtroValor } = evento.target.dataset;

    if (filtroValor === "default") {
      setFiltradoColaboradores({
        ...filtroColaboradores,
        [filtroAtributo]: null,
      });
    } else {
      setFiltradoColaboradores({
        ...filtroColaboradores,
        [filtroAtributo]: filtroValor,
      });
    }
  };

  const Opciones = {
    cargo: [
      { texto: "Todos", valor: "default" },
      { texto: "Directores", valor: "directores" },
      { texto: "Jefes", valor: "jefes" },
    ],
    ingreso: [
      { texto: "Todos", valor: "default" },
      { texto: "Más Antiguos", valor: "mas-antiguos" },
      { texto: "Más Nuevos", valor: "mas-nuevos" },
    ],
  };

  return (
    <>
      {/* FILTRO NAVBAR */}
      <Filtro NewTitle={"Añadir Colaborador"}>
        <FiltroOption
          Titulo={"Cargo"}
          Atributo={"cargo"}
          Opciones={Opciones.cargo}
          Filtro={filtroColaboradores}
          HandleFiltro={handleFiltroColaboradores}
        />
        <FiltroOption
          Titulo={"Ingreso"}
          Atributo={"ingreso"}
          Opciones={Opciones.ingreso}
          Filtro={filtroColaboradores}
          HandleFiltro={handleFiltroColaboradores}
        />
      </Filtro>

      {/* COLABORADORES ITEMS */}
      <section className="container">
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
      </section>
    </>
  );
}
