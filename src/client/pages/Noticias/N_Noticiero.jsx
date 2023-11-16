import { useEffect, useState } from "react";

import { useNoticieroData } from "../../../contexts/NoticiasDataContext";

import CardNoticia from "./N_Card";

export default function Noticiero() {
  const { noticias, filtrarNoticia } = useNoticieroData();
  const [cargando, setCargando] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [informacion, setInformacion] = useState({});

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const [noticias, setNoticias] = useState({});
  // useEffect(() => {
  //   async function cargarNoticias() {
  //     try {
  //       const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
  //       if (!data.ok) {
  //         throw new Error("Error en la solicitud a la API");
  //       }
  //       const { info, results } = await data.json();
  //       setNoticias(results);
  //       setInformacion(info);
  //       setCargando(false);
  //     } catch (error) {
  //       console.error("Error al cargar noticias:", error);
  //     }
  //   }
  //   cargarNoticias();
  // }, [pagina]);

  useEffect(() => {
    if (noticias) {
      setCargando(false);
    }
  }, []);

  return (
    <main className="container-fluid my-5">
      <div className="container-fluid">
        <h1 className="d-flex py-3 m-0 justify-content-center">Noticias</h1>
      </div>

      <div className="py-3">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
            {cargando ? (
              <h1>Cargando datos...</h1>
            ) : (
              noticias &&
              noticias.map((noticia, index) => (
                <CardNoticia
                  key={index}
                  Titulo={noticia.titulo}
                  PublicadoPor={noticia.fuente}
                  Fecha={noticia.fecha}
                  ImgUrl={`/img/noticias/${noticia.icono}`}
                  Alt={noticia.titulo}
                  UrlNoticia={`${noticia.ruta}`}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-lg justify-content-center">
          <li className={informacion.prev ? "page-item" : "page-item disabled"}>
            <button
              className="page-link"
              aria-label="Previous"
              onClick={() => {
                setPagina(pagina - 1);
                scrollToTop();
              }}>
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <li className="page-item">
            <button className="page-link disabled">{pagina}</button>
          </li>

          <li className={informacion.next ? "page-item" : "page-item disabled"}>
            <button
              className="page-link"
              aria-label="Next"
              onClick={() => {
                setPagina(pagina + 1);
                scrollToTop();
              }}>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
}
