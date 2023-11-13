import React from "react";

export default function FiltroOption({ Titulo, Atributo, Opciones, Filtro = null, HandleFiltro }) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {Titulo}
        {Filtro[Atributo] !== null ? `: ${Filtro[Atributo]}` : ""}
      </a>
      <ul className="dropdown-menu">
        {Opciones.map((opcion, index) => (
          <li key={index}>
            <button
              className="dropdown-item btn"
              data-filtro-atributo={Atributo}
              data-filtro-valor={opcion.valor}
              onClick={HandleFiltro}
            >
              {opcion.texto}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
}
