import { useState, useEffect } from "react";
import Noticia from "./NoticiaCard";

export default function Noticias() {
  const [cargando, setCargando] = useState(true);
  const [noticias, setNoticias] = useState({});

  const [filtroNoticias, setFiltradoNoticias] = useState({
    publicacion: null,
    fuente: null,
  });

  const handleFiltroNoticias = (evento) => {
    const { filtroAtributo, filtroValor } = evento.target.dataset;
    // console.log(filtroAtributo, filtroValor);

    if (filtroValor === "todas") {
      setFiltradoNoticias({
        ...filtroNoticias,
        [filtroAtributo]: null,
      });
    } else {
      setFiltradoNoticias({
        ...filtroNoticias,
        [filtroAtributo]: filtroValor,
      });
    }
  };

  useEffect(() => {
    async function cargarNoticias() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/?page=3`);
        if (!data.ok) {
          throw new Error("Error en la solicitud a la API");
        }
        const { results } = await data.json();
        setNoticias(results);
        setCargando(false);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
      }
    }
    cargarNoticias();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <section className="container">
        <nav className="navbar navbar-expand-lg bg-dark rounded" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand btn btn-outline-success">Crear noticia</a>

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
                    Publicación{filtroNoticias.publicacion !== null ? `: ${filtroNoticias.publicacion}` : ""}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item btn"
                        data-filtro-atributo="publicacion"
                        data-filtro-valor="todas"
                        onClick={handleFiltroNoticias}>
                        Todas
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item btn"
                        data-filtro-atributo="publicacion"
                        data-filtro-valor="recientes"
                        onClick={handleFiltroNoticias}>
                        Recientes
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item btn"
                        data-filtro-atributo="publicacion"
                        data-filtro-valor="antiguas"
                        onClick={handleFiltroNoticias}>
                        Antiguas
                      </button>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Fuente{filtroNoticias.fuente !== null ? `: ${filtroNoticias.fuente}` : ""}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="btn dropdown-item" data-filtro-atributo="fuente" data-filtro-valor="todas" onClick={handleFiltroNoticias}>
                        Todas las fuentes
                      </button>
                    </li>
                    <li>
                      <a className="btn dropdown-item" data-filtro-atributo="fuente" data-filtro-valor="cristobal" onClick={handleFiltroNoticias}>
                        Cristobal
                      </a>
                    </li>
                    <li>
                      <a className="btn dropdown-item" data-filtro-atributo="fuente" data-filtro-valor="christian" onClick={handleFiltroNoticias}>
                        Christian
                      </a>
                    </li>
                    <li>
                      <a className="btn dropdown-item" data-filtro-atributo="fuente" data-filtro-valor="chovi" onClick={handleFiltroNoticias}>
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

      {/* NOTICIERO */}
      <section className="container album py-5 ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3  row-cols-xl-4 g-3">
          {cargando ? (
            <h1>Cargando datos...</h1>
          ) : (
            noticias &&
            noticias.map((noticia) => (
              <Noticia
                key={noticia.id}
                Id={noticia.id}
                Titulo={noticia.name}
                Fecha={noticia.created}
                Autor={noticia.type}
                Descripcion={noticia.image}
                LogoUrl={noticia.image}
                LogoAlt={noticia.name}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}
