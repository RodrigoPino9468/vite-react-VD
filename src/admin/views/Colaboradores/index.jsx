import { useState } from "react";
import { ColaboradoresData } from "../../../../data/datos";
import Colaboarador from "./ColaboradorCard";

export default function Colaboradores() {
  const [filtroColaboradores, setFiltradoColaboradores] = useState({
    cargo: null,
    ingreso: null,
  });

  const handleFiltroColaboradores = (evento) => {
    const { filtroAtributo, filtroValor } = evento.target.dataset;

    if (filtroValor === "todas") {
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

  return (
    <>
      {/* FILTRO NAVBAR */}
      <section className="container">
        <nav className="navbar navbar-expand-lg bg-dark rounded" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand btn btn-outline-success">Agregar colaborador</a>

            {/* Boton -> movil */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ingreso{filtroColaboradores.ingreso !== null ? `: ${filtroColaboradores.ingreso}` : ""}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item btn"
                        data-filtro-atributo="ingreso"
                        data-filtro-valor="todas"
                        onClick={handleFiltroColaboradores}>
                        Todas
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item btn"
                        data-filtro-atributo="ingreso"
                        data-filtro-valor="recientes"
                        onClick={handleFiltroColaboradores}>
                        Recientes
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item btn"
                        data-filtro-atributo="ingreso"
                        data-filtro-valor="antiguos"
                        onClick={handleFiltroColaboradores}>
                        Antiguas
                      </button>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cargo{filtroColaboradores.cargo !== null ? `: ${filtroColaboradores.cargo}` : ""}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="btn dropdown-item" data-filtro-atributo="cargo" data-filtro-valor="todas" onClick={handleFiltroColaboradores}>
                        Todas las fuentes
                      </a>
                    </li>
                    <li>
                      <a className="btn dropdown-item" data-filtro-atributo="cargo" data-filtro-valor="cristobal" onClick={handleFiltroColaboradores}>
                        Cristobal
                      </a>
                    </li>
                    <li>
                      <a className="btn dropdown-item" data-filtro-atributo="cargo" data-filtro-valor="christian" onClick={handleFiltroColaboradores}>
                        Christian
                      </a>
                    </li>
                    <li>
                      <a className="btn dropdown-item" data-filtro-atributo="cargo" data-filtro-valor="chovi" onClick={handleFiltroColaboradores}>
                        Chovi
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
      
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
